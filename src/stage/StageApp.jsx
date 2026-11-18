import React, { useCallback, useEffect, useRef, useState } from 'react';
import StageViewport from './components/StageViewport';
import { ceremonyAudio } from '../shared/audioEngine';
import { isSelfChoreographedPattern } from '../shared/patterns';
import {
  getCustom3dModelUrl,
  loadAllCustomMediaUrls,
} from '../shared/mediaStorage';
import {
  createSyncChannel,
  loadConfig,
  saveConfig,
  STORAGE_KEY,
} from '../shared/ceremonyStore';

export default function StageApp() {
  const [config, setConfig] = useState(() => loadConfig());
  const [mediaUrls, setMediaUrls] = useState({
    customHandImageUrl: null,
    customBgVideoUrl: null,
    customActivationVideoUrl: null,
    customBgAudioUrl: null,
    customFanfareAudioUrl: null,
  });
  const [custom3dModelUrl, setCustom3dModelUrl] = useState(null);
  const [mediaVersion, setMediaVersion] = useState(0);
  const [phase, setPhase] = useState('standby'); // 'standby' | 'charging' | 'celebration'
  const [progress, setProgress] = useState(0);
  const [countdownSec, setCountdownSec] = useState(5);
  const [flashActive, setFlashActive] = useState(false);
  const [activeHands, setActiveHands] = useState(() => new Set());

  const chargeTimerRef = useRef(null);
  const lastSecRef = useRef(5);
  const manualLockedRef = useRef(false);
  const syncRef = useRef(null);

  // Sync audio engine with config & custom audio media
  useEffect(() => {
    ceremonyAudio.configure({
      volume: config.masterVolume,
      enabled: config.audioEnabled,
      soundPreset: config.soundPreset,
      countdownAudioStyle: config.countdownAudioStyle,
      touchSoundEnabled: config.touchSoundEnabled,
      touchVolume: config.touchVolume,
      countdownSoundEnabled: config.countdownSoundEnabled,
      countdownVolume: config.countdownVolume,
      fanfareSoundEnabled: config.fanfareSoundEnabled,
      fanfareVolume: config.fanfareVolume,
      bgAudioEnabled: config.bgAudioEnabled,
      bgAudioVolume: config.bgAudioVolume,
      customBgAudioUrl: mediaUrls.customBgAudioUrl,
      customCountdownAudioUrl: mediaUrls.customCountdownAudioUrl,
      customFanfareAudioUrl: mediaUrls.customFanfareAudioUrl,
    });
  }, [
    config.masterVolume,
    config.audioEnabled,
    config.soundPreset,
    config.countdownAudioStyle,
    config.touchSoundEnabled,
    config.touchVolume,
    config.countdownSoundEnabled,
    config.countdownVolume,
    config.fanfareSoundEnabled,
    config.fanfareVolume,
    config.bgAudioEnabled,
    config.bgAudioVolume,
    mediaUrls.customBgAudioUrl,
    mediaUrls.customCountdownAudioUrl,
    mediaUrls.customFanfareAudioUrl,
  ]);

  // Sync background music with standby phase
  useEffect(() => {
    const shouldPlayBg =
      phase === 'standby' && config.audioEnabled && config.bgAudioEnabled;
    ceremonyAudio.syncBgMusic(shouldPlayBg);
  }, [phase, config.audioEnabled, config.bgAudioEnabled, mediaUrls.customBgAudioUrl]);

  // Unlock background music on first user gesture on Stage if browser blocked autoplay
  useEffect(() => {
    const unlock = () => ceremonyAudio.unlockBgMusicIfNeeded();
    window.addEventListener('pointerdown', unlock, { passive: true });
    window.addEventListener('keydown', unlock, { passive: true });
    return () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
    };
  }, []);

  const stopChargeTimer = useCallback(() => {
    if (chargeTimerRef.current) {
      clearInterval(chargeTimerRef.current);
      chargeTimerRef.current = null;
    }
  }, []);

  const completeActivation = useCallback(() => {
    stopChargeTimer();
    ceremonyAudio.stopCountdownLoop();
    setProgress(100);
    setFlashActive(true);
    ceremonyAudio.playCountdownBoom();
    setTimeout(() => {
      setPhase('celebration');
      setFlashActive(false);
      syncRef.current?.post('STAGE_PHASE', { phase: 'celebration' });
    }, 320);
  }, [stopChargeTimer]);

  const completeMotionSequence = useCallback(() => {
    stopChargeTimer();
    setProgress(100);
    setFlashActive(false);
    setPhase('celebration');
    syncRef.current?.post('STAGE_PHASE', { phase: 'celebration' });
  }, [stopChargeTimer]);

  const startCharging = useCallback(
    (isManualTrigger = false) => {
      if (phase !== 'standby') return;
      manualLockedRef.current = isManualTrigger;
      setPhase('charging');
      setProgress(0);

      if (isSelfChoreographedPattern(config.patternId)) {
        syncRef.current?.post('STAGE_PHASE', { phase: 'charging' });
        return;
      }

      const duration = config.chargeDuration || 5000;
      const totalSecs = Math.round(duration / 1000);
      lastSecRef.current = totalSecs;
      setCountdownSec(totalSecs);
      ceremonyAudio.startCountdownLoop(duration);
      ceremonyAudio.playCountdownBeep(totalSecs);
      syncRef.current?.post('STAGE_PHASE', { phase: 'charging' });

      const start = performance.now();
      stopChargeTimer();
      chargeTimerRef.current = setInterval(() => {
        const elapsed = performance.now() - start;
        const pct = Math.min(100, (elapsed / duration) * 100);
        setProgress(pct);

        const remainSec = Math.max(1, Math.ceil((duration - elapsed) / 1000));
        if (remainSec !== lastSecRef.current && elapsed < duration) {
          lastSecRef.current = remainSec;
          setCountdownSec(remainSec);
          ceremonyAudio.playCountdownBeep(remainSec);
        }

        if (pct >= 100) {
          completeActivation();
        }
      }, 30);
    },
    [phase, config.patternId, config.chargeDuration, completeActivation, stopChargeTimer]
  );

  const resetStage = useCallback(() => {
    stopChargeTimer();
    ceremonyAudio.stopCountdownLoop();
    ceremonyAudio.stopFanfare();
    manualLockedRef.current = false;
    setPhase('standby');
    setProgress(0);
    setFlashActive(false);
    setActiveHands(new Set());
    syncRef.current?.post('STAGE_PHASE', { phase: 'standby' });
  }, [stopChargeTimer]);

  const previewCelebration = useCallback(() => {
    stopChargeTimer();
    ceremonyAudio.stopCountdownLoop();
    setFlashActive(true);
    ceremonyAudio.playFanfare();
    setTimeout(() => {
      setPhase('celebration');
      setFlashActive(false);
      syncRef.current?.post('STAGE_PHASE', { phase: 'celebration' });
    }, 220);
  }, [stopChargeTimer]);

  const refreshMedia = useCallback(async () => {
    const urls = await loadAllCustomMediaUrls();
    setMediaUrls(urls);
    setMediaVersion((v) => v + 1);
  }, []);

  useEffect(() => {
    refreshMedia();
  }, [refreshMedia]);

  useEffect(() => {
    let cancelled = false;
    let createdUrl = null;

    const shouldLoad =
      config.patternId === 'custom-ceremony' &&
      config.custom3dModelType === 'uploaded' &&
      Boolean(config.custom3dModelId);

    if (!shouldLoad) {
      setCustom3dModelUrl(null);
      return undefined;
    }

    getCustom3dModelUrl(config.custom3dModelId)
      .then((url) => {
        if (cancelled) {
          if (url) URL.revokeObjectURL(url);
          return;
        }
        createdUrl = url || null;
        setCustom3dModelUrl(createdUrl);
      })
      .catch(() => {
        if (!cancelled) {
          setCustom3dModelUrl(null);
        }
      });

    return () => {
      cancelled = true;
      if (createdUrl) {
        URL.revokeObjectURL(createdUrl);
      }
    };
  }, [
    config.patternId,
    config.custom3dModelType,
    config.custom3dModelId,
    mediaVersion,
  ]);

  // Listen to Studio updates via BroadcastChannel & storage event
  useEffect(() => {
    const channel = createSyncChannel((msg) => {
      if (msg.type === 'CONFIG_UPDATE' && msg.payload) {
        setConfig(msg.payload);
      } else if (msg.type === 'MEDIA_UPDATED') {
        refreshMedia();
      } else if (msg.type === 'CMD_START') {
        startCharging(true);
      } else if (msg.type === 'CMD_RESET') {
        resetStage();
      } else if (msg.type === 'CMD_PREVIEW_CELEBRATION') {
        previewCelebration();
      } else if (msg.type === 'CMD_TEST_AUDIO') {
        ceremonyAudio.playFanfare();
      }
    });
    syncRef.current = channel;

    const onStorage = (e) => {
      if (e.key === STORAGE_KEY) {
        setConfig(loadConfig());
      }
    };
    window.addEventListener('storage', onStorage);

    return () => {
      channel.close();
      window.removeEventListener('storage', onStorage);
    };
  }, [startCharging, resetStage, previewCelebration, refreshMedia]);

  // Keyboard shortcuts directly on LED Stage
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        if (phase === 'standby') startCharging(true);
      } else if (e.key === 'r' || e.key === 'R') {
        resetStage();
      } else if (e.key === 'm' || e.key === 'M') {
        setConfig((prev) => {
          const next = { ...prev, audioEnabled: !prev.audioEnabled };
          saveConfig(next);
          return next;
        });
      } else if (e.key === 'F11') {
        e.preventDefault();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen?.().catch(() => { });
        } else {
          document.exitFullscreen?.().catch(() => { });
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [phase, startCharging, resetStage]);

  const handleActivateHand = useCallback(
    (id) => {
      if (phase !== 'standby') return;
      ceremonyAudio.playTouchChime();
      setActiveHands((prev) => {
        const next = new Set(prev);
        next.add(id);
        if (next.size >= config.handCount) {
          setTimeout(() => startCharging(false), 60);
        }
        return next;
      });
    },
    [phase, config.handCount, startCharging]
  );

  const handleDeactivateHand = useCallback(
    (id) => {
      setActiveHands((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      if (phase === 'charging' && !manualLockedRef.current) {
        resetStage();
      }
    },
    [phase, resetStage]
  );

  return (
    <StageViewport
      config={config}
      phase={phase}
      progress={progress}
      countdownSec={countdownSec}
      flashActive={flashActive}
      activeHands={activeHands}
      customHandImageUrl={mediaUrls.customHandImageUrl}
      customBgVideoUrl={mediaUrls.customBgVideoUrl}
      customActivationVideoUrl={mediaUrls.customActivationVideoUrl}
      custom3dModelUrl={custom3dModelUrl}
      onActivateHand={handleActivateHand}
      onDeactivateHand={handleDeactivateHand}
      onStartSequence={() => startCharging(true)}
      onSequenceComplete={completeMotionSequence}
      onReset={resetStage}
      onActivationVideoEnded={completeActivation}
    />
  );
}
