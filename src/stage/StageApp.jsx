import React, { useCallback, useEffect, useRef, useState } from 'react';
import ThreeStage from './components/ThreeStage';
import TouchPods from './components/TouchPods';
import Celebration from './components/Celebration';
import { getPatternById } from '../shared/patterns';
import { ceremonyAudio } from '../shared/audioEngine';
import {
  createSyncChannel,
  extractYouTubeId,
  loadConfig,
  saveConfig,
  STORAGE_KEY,
} from '../shared/ceremonyStore';

const LOCAL_VIDEO_SRC = './Background Trống Đồng Bản Đồ Việt Nam - I Love Viet Nam - YouTube.mp4';

export default function StageApp() {
  const [config, setConfig] = useState(() => loadConfig());
  const [phase, setPhase] = useState('standby'); // 'standby' | 'charging' | 'celebration'
  const [progress, setProgress] = useState(0);
  const [countdownSec, setCountdownSec] = useState(5);
  const [flashActive, setFlashActive] = useState(false);
  const [activeHands, setActiveHands] = useState(() => new Set());

  const chargeTimerRef = useRef(null);
  const lastSecRef = useRef(5);
  const manualLockedRef = useRef(false);
  const syncRef = useRef(null);

  const pattern = getPatternById(config.patternId);

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

  // Listen to Studio updates via BroadcastChannel & storage event
  useEffect(() => {
    const channel = createSyncChannel((msg) => {
      if (msg.type === 'CONFIG_UPDATE' && msg.payload) {
        setConfig(msg.payload);
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
  }, [startCharging, resetStage, previewCelebration]);

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
          document.documentElement.requestFullscreen?.().catch(() => {});
        } else {
          document.exitFullscreen?.().catch(() => {});
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

  // Brightness & Photo-Op calibration
  const effectiveBrightness =
    phase === 'celebration' && config.autoPhotoOpDim
      ? Math.min(config.screenBrightness, 72)
      : config.screenBrightness;

  const ytId = extractYouTubeId(config.youtubeVideoId);

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{
        background: `radial-gradient(circle at 50% 40%, ${pattern.colors.bgTop}, ${pattern.colors.bgBottom} 80%)`,
        filter: `brightness(${effectiveBrightness / 100})`,
        transition: 'filter 0.6s ease',
      }}
    >
      {/* Background Video Layer */}
      {config.videoBgEnabled && config.videoSource === 'local' && (
        <video
          src={LOCAL_VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          style={{ opacity: config.videoOpacity }}
        />
      )}

      {config.videoBgEnabled && config.videoSource === 'youtube' && (
        <div
          className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
          style={{ opacity: config.videoOpacity }}
        >
          <iframe
            title="Video Nền YouTube"
            src={`https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&playsinline=1&rel=0&showinfo=0`}
            className="w-[130%] h-[130%] -ml-[15%] -mt-[15%] pointer-events-none"
            allow="autoplay; encrypted-media"
          />
        </div>
      )}

      {/* Tint Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ backgroundColor: `rgba(0,0,0,${config.tintDarkness})` }}
      />

      {/* 3D WebGL Stage Engine */}
      <ThreeStage
        patternId={config.patternId}
        phase={phase}
        progress={progress}
        coreY={config.coreY}
        coreScale={config.coreScale}
      />

      {/* Optional Header (Hidden by default & during celebration) */}
      {config.showHeader && phase !== 'celebration' && (
        <header className="absolute top-6 inset-x-0 z-20 text-center px-6 pointer-events-none">
          <div
            className="inline-block px-5 py-1.5 rounded-full border text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 backdrop-blur-md"
            style={{
              borderColor: `${pattern.colors.primary}88`,
              color: pattern.colors.accent,
              backgroundColor: 'rgba(0,0,0,0.4)',
            }}
          >
            {config.eventBadge}
          </div>
          <h1
            className={`text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-wide ${
              pattern.id === 'holo-globe' ? 'cyan-3d-text' : 'gold-3d-text'
            }`}
          >
            {config.eventTitle}
          </h1>
          <p className="mt-1.5 text-xs md:text-base font-medium tracking-[0.15em] uppercase text-white/80">
            {config.eventSubtitle}
          </p>
        </header>
      )}

      {/* 3D Countdown Overlay during Charging */}
      {phase === 'charging' && (
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          <div
            key={countdownSec}
            className={`text-[9rem] md:text-[13rem] font-black leading-none animate-count-pop ${
              pattern.id === 'holo-globe' ? 'cyan-3d-text' : 'gold-3d-text'
            }`}
          >
            {countdownSec}
          </div>
        </div>
      )}

      {/* Touch Pedestals (Hidden during Celebration) */}
      <TouchPods
        handCount={config.handCount}
        podY={config.podY}
        podSize={config.podSize}
        podGap={config.podGap}
        activeHands={activeHands}
        primaryColor={pattern.colors.primary}
        visible={phase !== 'celebration'}
        onActivateHand={handleActivateHand}
        onDeactivateHand={handleDeactivateHand}
      />

      {/* Formal Photo-Op Celebration Screen */}
      <Celebration
        config={config}
        pattern={pattern}
        visible={phase === 'celebration'}
      />

      {/* Climax Transition Flash */}
      <div
        className={`absolute inset-0 z-50 pointer-events-none transition-opacity duration-300 ${
          flashActive ? 'opacity-90' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(circle, #ffffff 0%, ${pattern.colors.accent} 60%, transparent 100%)`,
        }}
      />
    </div>
  );
}

