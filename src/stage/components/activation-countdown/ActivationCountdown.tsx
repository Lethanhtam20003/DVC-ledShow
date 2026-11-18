'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import { ceremonyAudio } from '../../../shared/audioEngine';
import {
  DEFAULT_MAIN_TITLE,
  DEFAULT_PILLARS,
  DEFAULT_SUBTITLE_BADGE,
} from './constants';
import { DataFlowOverlay } from './components/DataFlowOverlay';
import { GlitchCountdown } from './components/GlitchCountdown';
import { HandTriggers } from './components/HandTriggers';
import { PillarsReveal } from './components/PillarsReveal';
import { ShockwaveLogo } from './components/ShockwaveLogo';
import type {
  ActivationCountdownProps,
  PillarItem,
  SequencePhase,
} from './types';
import './activation-countdown.css';

const DEFAULT_BG_SRC = './bg-trong-dong.png';
const FALLBACK_BG_SRC = './dong-son-drum.jpg';
const DEFAULT_LOGO_SRC = './logo-cdsqg-2026.png';
const DEFAULT_AUDIO_SRC = './audio/countdown.mp3';

const EMBERS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${5 + ((i * 53) % 90)}%`,
  bottom: `${4 + ((i * 19) % 34)}%`,
  size: i % 3 === 0 ? 5 : 3,
  dur: `${4.5 + (i % 5) * 1.1}s`,
  delay: `${(i % 6) * 0.65}s`,
}));

export default function ActivationCountdown({
  bgImageSrc = DEFAULT_BG_SRC,
  logoSrc = DEFAULT_LOGO_SRC,
  audioSrc = DEFAULT_AUDIO_SRC,
  mainTitle,
  subtitleBadge,
  pillars,
  countdownStepMs = 1000,
  dataFlowMs = 1000,
  externalPhase,
  config,
  activeHands: externalActiveHands,
  isPreview = false,
  onStartSequence,
  onSequenceComplete,
  onActivateHand,
  onDeactivateHand,
  onReset,
  className = '',
}: ActivationCountdownProps) {
  const [phase, setPhase] = useState<SequencePhase>('idle');
  const [countdownValue, setCountdownValue] = useState<number>(5);
  const [localHands, setLocalHands] = useState<Set<number>>(() => new Set());
  const [resolvedBgSrc, setResolvedBgSrc] = useState<string>(
    bgImageSrc === DEFAULT_BG_SRC ? FALLBACK_BG_SRC : bgImageSrc
  );

  const timersRef = useRef<number[]>([]);
  const audioElRef = useRef<HTMLAudioElement | null>(null);
  const prevExternalPhaseRef = useRef<string | undefined>(undefined);
  const sequenceRunningRef = useRef<boolean>(false);
  const hasCustomAudioRef = useRef<boolean>(audioSrc !== DEFAULT_AUDIO_SRC);

  useEffect(() => {
    hasCustomAudioRef.current = audioSrc !== DEFAULT_AUDIO_SRC;
  }, [audioSrc]);

  useEffect(() => {
    if (bgImageSrc !== DEFAULT_BG_SRC) {
      setResolvedBgSrc(bgImageSrc);
      return;
    }
    let cancelled = false;
    fetch(DEFAULT_BG_SRC, { method: 'HEAD' })
      .then((res) => {
        if (!cancelled && res.ok) {
          setResolvedBgSrc(DEFAULT_BG_SRC);
        }
      })
      .catch(() => {
        // Keep FALLBACK_BG_SRC silently
      });
    return () => {
      cancelled = true;
    };
  }, [bgImageSrc]);

  const clearAllTimers = useCallback(() => {
    for (const id of timersRef.current) {
      window.clearTimeout(id);
    }
    timersRef.current = [];
  }, []);

  const stopSequenceAudio = useCallback(() => {
    if (audioElRef.current) {
      try {
        audioElRef.current.pause();
        audioElRef.current.currentTime = 0;
      } catch {
        // Ignore audio cleanup errors
      }
      audioElRef.current = null;
    }
    ceremonyAudio.stopCountdownLoop();
    ceremonyAudio.stopFanfare();
  }, []);

  const playCountdownTrack = useCallback(async () => {
    stopSequenceAudio();
    if (config?.audioEnabled === false) return;

    const totalMs = dataFlowMs + countdownStepMs * 5;
    const masterVol =
      typeof config?.masterVolume === 'number' ? config.masterVolume : 0.85;
    const cdVol =
      typeof config?.countdownVolume === 'number' ? config.countdownVolume : 0.9;
    const effectiveVol = Math.max(0, Math.min(1, masterVol * cdVol));

    let playedCustom = false;
    if (hasCustomAudioRef.current) {
      try {
        const audio = new Audio(audioSrc);
        audio.volume = effectiveVol;
        audio.preload = 'auto';
        await audio.play();
        audioElRef.current = audio;
        playedCustom = true;
      } catch {
        playedCustom = false;
      }
    }

    if (!playedCustom) {
      // Use built-in Gravity's Final Strike buildup cleanly with zero overlapping beeps
      ceremonyAudio.startCountdownLoop(totalMs, { forceGravity: true });
    }
  }, [
    audioSrc,
    config?.audioEnabled,
    config?.countdownVolume,
    config?.masterVolume,
    countdownStepMs,
    dataFlowMs,
    stopSequenceAudio,
  ]);

  const runChoreography = useCallback(
    (skipAudio = false) => {
      clearAllTimers();
      sequenceRunningRef.current = true;

      if (!skipAudio) {
        void playCountdownTrack();
      }

      // Phase 2: Data Flow & Circuit Board (0s - 1s)
      setPhase('dataflow');
      setCountdownValue(5);

      const schedule = (fn: () => void, delayMs: number) => {
        const id = window.setTimeout(fn, delayMs);
        timersRef.current.push(id);
      };

      // Phase 3: 3D Pump & Glitch Countdown (5, 4, 3, 2, 1)
      const digits = [5, 4, 3, 2, 1];
      digits.forEach((digit, idx) => {
        schedule(() => {
          setPhase('countdown');
          setCountdownValue(digit);
        }, dataFlowMs + idx * countdownStepMs);
      });

      // Phase 4: At 0 -> Supernova Shockwave + White Flash + Logo Assembly
      const zeroAt = dataFlowMs + digits.length * countdownStepMs;
      schedule(() => {
        setPhase('shockwave');
        if (config?.audioEnabled !== false) {
          ceremonyAudio.playCountdownBoom({ forceGravity: true });
        }
      }, zeroAt);

      // Phase 5: 3 Pillars Reveal + Infinite Light Sweep
      schedule(() => {
        setPhase('pillars');
        sequenceRunningRef.current = false;
        if (config?.audioEnabled !== false) {
          ceremonyAudio.playFanfare();
        }
        onSequenceComplete?.();
      }, zeroAt + 880);
    },
    [
      clearAllTimers,
      config?.audioEnabled,
      countdownStepMs,
      dataFlowMs,
      onSequenceComplete,
      playCountdownTrack,
    ]
  );

  const handleResetInternal = useCallback(() => {
    clearAllTimers();
    stopSequenceAudio();
    sequenceRunningRef.current = false;
    setLocalHands(new Set());
    setPhase('idle');
    setCountdownValue(5);
    onReset?.();
  }, [clearAllTimers, onReset, stopSequenceAudio]);

  // Sync with external Studio/Stage phase when used inside StageViewport
  useEffect(() => {
    if (!externalPhase) return;
    const prev = prevExternalPhaseRef.current;
    if (prev === externalPhase) return;
    prevExternalPhaseRef.current = externalPhase;

    if (externalPhase === 'standby') {
      clearAllTimers();
      stopSequenceAudio();
      sequenceRunningRef.current = false;
      setLocalHands(new Set());
      setPhase('idle');
      setCountdownValue(5);
    } else if (externalPhase === 'charging') {
      runChoreography(false);
    } else if (externalPhase === 'celebration') {
      clearAllTimers();
      ceremonyAudio.stopCountdownLoop();
      sequenceRunningRef.current = false;
      setPhase('pillars');
    }
  }, [clearAllTimers, externalPhase, runChoreography, stopSequenceAudio]);

  useEffect(() => {
    return () => {
      clearAllTimers();
      stopSequenceAudio();
    };
  }, [clearAllTimers, stopSequenceAudio]);

  const effectiveActiveHands = externalActiveHands ?? localHands;

  const handleTriggerStart = useCallback(() => {
    if (phase !== 'idle') return;
    if (onStartSequence) {
      onStartSequence();
    } else {
      runChoreography(false);
    }
  }, [onStartSequence, phase, runChoreography]);

  const handleHandDown = useCallback(
    (id: number) => {
      if (phase !== 'idle') return;
      if (onActivateHand) {
        onActivateHand(id);
        return;
      }
      ceremonyAudio.playTouchChime();
      setLocalHands((prev) => {
        const next = new Set(prev);
        next.add(id);
        if (next.size >= 6) {
          window.setTimeout(() => handleTriggerStart(), 60);
        }
        return next;
      });
    },
    [handleTriggerStart, onActivateHand, phase]
  );

  const handleHandUp = useCallback(
    (id: number) => {
      if (onDeactivateHand) {
        onDeactivateHand(id);
        return;
      }
      setLocalHands((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    },
    [onDeactivateHand]
  );

  const resolvedMainTitle =
    mainTitle || config?.celebrationTitle || DEFAULT_MAIN_TITLE;
  const resolvedBadge =
    subtitleBadge || config?.celebrationRibbon || DEFAULT_SUBTITLE_BADGE;
  const resolvedLogoSrc = config?.customLogoData || logoSrc || DEFAULT_LOGO_SRC;
  const resolvedLogoSize = config?.logoSize || 156;

  const resolvedPillars: PillarItem[] = useMemo(() => {
    if (pillars && pillars.length > 0) return pillars;
    if (
      Array.isArray(config?.celebrationPillars) &&
      config.celebrationPillars.length > 0
    ) {
      return config.celebrationPillars.map((item, idx) => ({
        id: `pillar-${idx}`,
        title: item.title,
        desc: item.desc,
        iconKey: idx === 0 ? 'gov' : idx === 1 ? 'eco' : 'soc',
      }));
    }
    return DEFAULT_PILLARS;
  }, [config?.celebrationPillars, pillars]);

  const showShockwaveEffects = phase === 'shockwave';
  const showAssembledLogo = phase === 'shockwave' || phase === 'pillars';
  const showPillars = phase === 'pillars';

  return (
    <section
      className={`relative w-full h-full min-h-[540px] overflow-hidden select-none bg-[#230306] text-white flex flex-col items-center justify-center ${
        showShockwaveEffects ? 'stage-impact-shake' : ''
      } ${className}`}
    >
      {/* Phase 1+ Base: Rich Deep Crimson & Gold Trống Đồng Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,#8f0f19_0%,#3f0409_58%,#120103_100%)]" />

        {/* Rotating Traditional Drum Aura */}
        <img
          src={resolvedBgSrc}
          alt="Họa tiết Trống Đồng truyền thống"
          onError={() => {
            if (resolvedBgSrc !== FALLBACK_BG_SRC) {
              setResolvedBgSrc(FALLBACK_BG_SRC);
            }
          }}
          className={`drum-slow-spin absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 w-[115vmin] h-[115vmin] max-w-none rounded-full object-cover transition-all duration-1000 ${
            phase === 'idle'
              ? 'opacity-80 brightness-95 saturate-110'
              : phase === 'pillars'
                ? 'opacity-30 brightness-75 saturate-90'
                : 'opacity-40 brightness-75'
          }`}
          style={{
            maskImage:
              'radial-gradient(circle, rgba(0,0,0,0.95) 28%, rgba(0,0,0,0.55) 58%, transparent 74%)',
          }}
        />

        {/* Deep Vignette Framing for High LED Contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_18%,rgba(22,2,5,0.58)_62%,rgba(8,1,3,0.94)_100%)]" />

        {/* Warm Imperial Gold Core Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(251,191,36,0.24)_0%,transparent_52%)]" />
      </div>

      {/* Floating Golden Embers on Idle & Celebration */}
      {(phase === 'idle' || phase === 'pillars') && (
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {EMBERS.map((e) => (
            <span
              key={e.id}
              className="ember-particle absolute rounded-full bg-amber-200 shadow-[0_0_12px_rgba(251,191,36,0.9)]"
              style={
                {
                  left: e.left,
                  bottom: e.bottom,
                  width: `${e.size}px`,
                  height: `${e.size}px`,
                  '--ember-dur': e.dur,
                  '--ember-delay': e.delay,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      )}

      {/* Phase 1 Optional Header (Clean & Minimalist — only shown when configured) */}
      {phase === 'idle' && config?.showHeader && (
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="absolute top-8 md:top-10 inset-x-0 z-20 px-6 text-center pointer-events-none"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-wider bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_6px_24px_rgba(245,197,66,0.45)]">
            {config?.eventTitle || 'NGHI THỨC KÍCH HOẠT CHUYỂN ĐỔI SỐ'}
          </h1>
          {config?.eventSubtitle && (
            <p className="mt-1.5 text-xs md:text-sm font-semibold tracking-[0.22em] uppercase text-amber-100/75">
              {config.eventSubtitle}
            </p>
          )}
        </motion.header>
      )}

      {/* Phase 2+: Digital Circuit Board Overlay & 6 Cyan Laser Lines (0s - 1s) */}
      <DataFlowOverlay phase={phase} />

      {/* Phase 1 & 2: 6 Golden Hand Triggers */}
      <AnimatePresence>
        {(phase === 'idle' || phase === 'dataflow') && (
          <HandTriggers
            phase={phase}
            activeHands={effectiveActiveHands}
            showLabels={Boolean(config?.showPodLabels)}
            podLabels={config?.podLabels}
            onStartClick={handleTriggerStart}
            onHandDown={handleHandDown}
            onHandUp={handleHandUp}
          />
        )}
      </AnimatePresence>

      {/* Phase 3: Pure Massive 3D Pump & RGB-Split Glitch Countdown (5, 4, 3, 2, 1) */}
      <GlitchCountdown visible={phase === 'countdown'} value={countdownValue} />

      {/* Phase 4 & 5: Supernova Shockwave, White Flash, Assembling Logo + 3 Monolith Pillars */}
      <div className="relative z-30 w-full flex flex-col items-center justify-center px-4">
        <ShockwaveLogo
          showEffects={showShockwaveEffects}
          showLogo={showAssembledLogo}
          logoSrc={resolvedLogoSrc}
          logoSize={resolvedLogoSize}
          compactTop={showPillars}
        />

        <PillarsReveal
          visible={showPillars}
          mainTitle={resolvedMainTitle}
          subtitleBadge={resolvedBadge}
          pillars={resolvedPillars}
        />
      </div>

      {/* Standalone Quick Replay Control */}
      {!externalPhase && phase === 'pillars' && !isPreview && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          onClick={handleResetInternal}
          className="absolute bottom-5 right-5 z-40 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-black/45 hover:bg-black/75 text-amber-200/80 hover:text-amber-100 border border-amber-400/35 backdrop-blur-md transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Chạy lại
        </motion.button>
      )}
    </section>
  );
}
