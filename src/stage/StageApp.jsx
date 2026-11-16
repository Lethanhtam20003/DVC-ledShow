import React, { useCallback, useEffect, useRef, useState } from 'react';
import StageViewport from './components/StageViewport';
import { ceremonyAudio } from '../shared/audioEngine';
import { loadAllCustomMediaUrls } from '../shared/mediaStorage';
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
  });
  const [phase, setPhase] = useState('standby'); // 'standby' | 'charging' | 'celebration'
  const [progress, setProgress] = useState(0);
  const [countdownSec, setCountdownSec] = useState(5);
  const [flashActive, setFlashActive] = useState(false);
  const [activeHands, setActiveHands] = useState(() => new Set());

  const chargeTimerRef = useRef(null);
  const lastSecRef = useRef(5);
  const manualLockedRef = useRef(false);
  const syncRef = useRef(null);

  // Sync audio engine with config
  useEffect(() => {
    ceremonyAudio.configure({
      volume: config.masterVolume,
      enabled: config.audioEnabled,
    });
  }, [config.masterVolume, config.audioEnabled]);

  const stopChargeTimer = useCallback(() => {
    if (chargeTimerRef.current) {
      clearInterval(chargeTimerRef.current);
      chargeTimerRef.current = null;
    }
  }, []);

  const completeActivation = useCallback(() => {
    stopChargeTimer();
    setProgress(100);
    setFlashActive(true);
    ceremonyAudio.playFanfare();
    setTimeout(() => {
      setPhase('celebration');
      setFlashActive(false);
      syncRef.current?.post('STAGE_PHASE', { phase: 'celebration' });
    }, 320);
  }, [stopChargeTimer]);

  const startCharging = useCallback(
    (isManualTrigger = false) => {
      if (phase !== 'standby') return;
      manualLockedRef.current = isManualTrigger;
      setPhase('charging');
      setProgress(0);

      const duration = config.chargeDuration || 5000;
      const totalSecs = Math.round(duration / 1000);
      lastSecRef.current = totalSecs;
      setCountdownSec(totalSecs);
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
    [phase, config.chargeDuration, completeActivation, stopChargeTimer]
  );

  const resetStage = useCallback(() => {
    stopChargeTimer();
    manualLockedRef.current = false;
    setPhase('standby');
    setProgress(0);
    setFlashActive(false);
    setActiveHands(new Set());
    syncRef.current?.post('STAGE_PHASE', { phase: 'standby' });
  }, [stopChargeTimer]);

  const previewCelebration = useCallback(() => {
    stopChargeTimer();
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
  }, []);

  useEffect(() => {
    refreshMedia();
  }, [refreshMedia]);

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
      onActivateHand={handleActivateHand}
      onDeactivateHand={handleDeactivateHand}
      onActivationVideoEnded={completeActivation}
    />
  );
}
