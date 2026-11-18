'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { ceremonyAudio } from '../../../shared/audioEngine';
import {
  BARRIER_PROGRESS_MILESTONES,
  DEFAULT_SPEARHEAD_BADGE,
  DEFAULT_SPEARHEAD_TITLE,
  DEFAULT_TECH_PILLARS,
  SPEARHEAD_TIMING,
} from './constants';
import { LogoSpearheadHUD } from './LogoSpearheadHUD';
import { LogoSpearheadThree } from './LogoSpearheadThree';
import type {
  LogoSpearheadProps,
  MotionFrameState,
  SpearheadStage,
  TechPillarItem,
} from './types';
import './logo-spearhead.css';

const DEFAULT_LOGO_SRC = './logo-cdsqg-2026.png';

export default function LogoSpearheadMotion({
  logoSrc = DEFAULT_LOGO_SRC,
  mainTitle,
  subtitleBadge,
  pillars,
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
}: LogoSpearheadProps) {
  const [stage, setStage] = useState<SpearheadStage>('idle');
  const [impactStep, setImpactStep] = useState<number>(0);
  const [impactKey, setImpactKey] = useState<number>(0);
  const [localHands, setLocalHands] = useState<Set<number>>(() => new Set());

  const frameRef = useRef<MotionFrameState>({
    stage: 'idle',
    progress: 0,
    barriersRemaining: 3,
    lastImpactAt: 0,
    activeHandCount: 0,
  });

  const rafRef = useRef<number | null>(null);
  const prevExternalPhaseRef = useRef<string | undefined>(undefined);
  const sequenceRunningRef = useRef<boolean>(false);
  const stageWrapperRef = useRef<HTMLElement | null>(null);

  const effectiveActiveHands = externalActiveHands ?? localHands;
  const handCount = config?.handCount ?? 6;

  useEffect(() => {
    frameRef.current.activeHandCount = effectiveActiveHands.size;
  }, [effectiveActiveHands]);

  const stopSequenceLoop = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    ceremonyAudio.stopCountdownLoop();
  }, []);

  const runMotionSequence = useCallback(() => {
    stopSequenceLoop();
    sequenceRunningRef.current = true;

    const totalMs = SPEARHEAD_TIMING.TOTAL_MS;
    const ignitionFrac = SPEARHEAD_TIMING.IGNITION_MS / totalMs;
    const breakthroughEndFrac =
      (SPEARHEAD_TIMING.IGNITION_MS + SPEARHEAD_TIMING.BREAKTHROUGH_MS) / totalMs;

    frameRef.current = {
      stage: 'ignition',
      progress: 0,
      barriersRemaining: 3,
      lastImpactAt: 0,
      activeHandCount: effectiveActiveHands.size,
    };
    setStage('ignition');
    setImpactStep(0);
    setImpactKey(0);

    if (config?.audioEnabled !== false) {
      ceremonyAudio.startCountdownLoop(totalMs, { forceGravity: true });
    }

    const startTime = performance.now();
    let currentStage: SpearheadStage = 'ignition';
    let lastBarrierIdx = -1;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / totalMs);
      frameRef.current.progress = progress;

      // Discrete stage transitions
      if (progress < ignitionFrac) {
        if (currentStage !== 'ignition') {
          currentStage = 'ignition';
          frameRef.current.stage = 'ignition';
          setStage('ignition');
        }
      } else if (progress < breakthroughEndFrac) {
        if (currentStage !== 'breakthrough') {
          currentStage = 'breakthrough';
          frameRef.current.stage = 'breakthrough';
          setStage('breakthrough');
          setImpactStep(3);
        }

        // Trigger barrier shatter feedback at each milestone
        BARRIER_PROGRESS_MILESTONES.forEach((threshold, idx) => {
          if (progress >= threshold && lastBarrierIdx < idx) {
            lastBarrierIdx = idx;
            const remaining = Math.max(0, 3 - (idx + 1));
            frameRef.current.barriersRemaining = remaining;
            frameRef.current.lastImpactAt = now;
            setImpactStep(remaining > 0 ? remaining : 0);
            setImpactKey((k) => k + 1);
            if (config?.audioEnabled !== false) {
              ceremonyAudio.playTouchChime();
            }
          }
        });
      } else if (progress < 1) {
        if (currentStage !== 'dawn') {
          currentStage = 'dawn';
          frameRef.current.stage = 'dawn';
          frameRef.current.barriersRemaining = 0;
          frameRef.current.lastImpactAt = now;
          setStage('dawn');
          setImpactStep(0);
          setImpactKey((k) => k + 1);
          if (config?.audioEnabled !== false) {
            ceremonyAudio.playCountdownBoom({ forceGravity: true });
          }
        }
      } else {
        frameRef.current.stage = 'showcase';
        frameRef.current.progress = 1;
        sequenceRunningRef.current = false;
        setStage('showcase');
        if (config?.audioEnabled !== false) {
          ceremonyAudio.playFanfare();
        }
        onSequenceComplete?.();
        return;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [
    config?.audioEnabled,
    effectiveActiveHands.size,
    onSequenceComplete,
    stopSequenceLoop,
  ]);

  const resetInternal = useCallback(() => {
    stopSequenceLoop();
    ceremonyAudio.stopFanfare();
    sequenceRunningRef.current = false;
    frameRef.current = {
      stage: 'idle',
      progress: 0,
      barriersRemaining: 3,
      lastImpactAt: 0,
      activeHandCount: 0,
    };
    setLocalHands(new Set());
    setStage('idle');
    setImpactStep(0);
    setImpactKey(0);
    onReset?.();
  }, [onReset, stopSequenceLoop]);

  // Sync with external Studio/Stage phase
  useEffect(() => {
    if (!externalPhase) return;
    const prev = prevExternalPhaseRef.current;
    if (prev === externalPhase) return;
    prevExternalPhaseRef.current = externalPhase;

    if (externalPhase === 'standby') {
      stopSequenceLoop();
      ceremonyAudio.stopFanfare();
      sequenceRunningRef.current = false;
      frameRef.current = {
        stage: 'idle',
        progress: 0,
        barriersRemaining: 3,
        lastImpactAt: 0,
        activeHandCount: 0,
      };
      setLocalHands(new Set());
      setStage('idle');
      setImpactStep(0);
      setImpactKey(0);
    } else if (externalPhase === 'charging') {
      runMotionSequence();
    } else if (externalPhase === 'celebration') {
      stopSequenceLoop();
      sequenceRunningRef.current = false;
      frameRef.current = {
        stage: 'showcase',
        progress: 1,
        barriersRemaining: 0,
        lastImpactAt: 0,
        activeHandCount: 0,
      };
      setStage('showcase');
      setImpactStep(0);
    }
  }, [externalPhase, runMotionSequence, stopSequenceLoop]);

  useEffect(() => {
    return () => {
      stopSequenceLoop();
      ceremonyAudio.stopFanfare();
    };
  }, [stopSequenceLoop]);

  const handleTriggerStart = useCallback(() => {
    if (stage !== 'idle') return;
    if (onStartSequence) {
      onStartSequence();
    } else {
      runMotionSequence();
    }
  }, [onStartSequence, runMotionSequence, stage]);

  const handleHandDown = useCallback(
    (id: number) => {
      if (stage !== 'idle') return;
      if (onActivateHand) {
        onActivateHand(id);
        return;
      }
      ceremonyAudio.playTouchChime();
      setLocalHands((prev) => {
        const next = new Set(prev);
        next.add(id);
        if (next.size >= handCount) {
          window.setTimeout(() => handleTriggerStart(), 60);
        }
        return next;
      });
    },
    [handCount, handleTriggerStart, onActivateHand, stage]
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

  const resolvedLogoSrc = config?.customLogoData || logoSrc || DEFAULT_LOGO_SRC;
  const resolvedMainTitle =
    mainTitle || config?.celebrationTitle || DEFAULT_SPEARHEAD_TITLE;
  const resolvedBadge =
    subtitleBadge || config?.celebrationRibbon || DEFAULT_SPEARHEAD_BADGE;

  const resolvedPillars: TechPillarItem[] = useMemo(() => {
    if (pillars && pillars.length > 0) return pillars;
    if (
      Array.isArray(config?.celebrationPillars) &&
      config.celebrationPillars.length > 0
    ) {
      return config.celebrationPillars.map((item, idx) => ({
        id: `tech-pillar-${idx}`,
        tag: DEFAULT_TECH_PILLARS[idx]?.tag,
        title: item.title,
        desc: item.desc,
        iconKey: idx === 0 ? 'gov' : idx === 1 ? 'ai' : 'cloud',
      }));
    }
    return DEFAULT_TECH_PILLARS;
  }, [config?.celebrationPillars, pillars]);

  useEffect(() => {
    const el = stageWrapperRef.current;
    if (!el || impactKey === 0) return;
    el.classList.remove('spearhead-impact-shake');
    void el.offsetWidth;
    el.classList.add('spearhead-impact-shake');
  }, [impactKey]);

  return (
    <section
      ref={stageWrapperRef}
      className={`relative w-full h-full min-h-[540px] overflow-hidden select-none bg-[#07020a] text-white ${className}`}
    >
      {/* 60fps Three.js + Bloom 3D Spearhead World */}
      <LogoSpearheadThree
        frameRef={frameRef}
        logoSrc={resolvedLogoSrc}
        isPreview={isPreview}
      />

      {/* Framer Motion HUD & Modern Tech Showcase Overlay */}
      <LogoSpearheadHUD
        stage={stage}
        impactStep={impactStep}
        impactKey={impactKey}
        handCount={handCount}
        activeHands={effectiveActiveHands}
        config={config}
        mainTitle={resolvedMainTitle}
        subtitleBadge={resolvedBadge}
        pillars={resolvedPillars}
        onStartClick={handleTriggerStart}
        onHandDown={handleHandDown}
        onHandUp={handleHandUp}
      />

      {/* Standalone Quick Replay Control */}
      {!externalPhase && stage === 'showcase' && !isPreview && (
        <button
          type="button"
          onClick={resetInternal}
          className="absolute bottom-5 right-5 z-40 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-black/50 hover:bg-black/80 text-cyan-200 border border-cyan-400/40 backdrop-blur-md transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Chạy lại
        </button>
      )}
    </section>
  );
}
