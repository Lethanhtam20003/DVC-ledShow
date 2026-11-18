'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { SIX_HAND_ANCHORS, SVG_CENTER } from '../constants';
import { handPodItemVariants, handPodsContainerVariants } from '../variants';
import type { SequencePhase } from '../types';

interface HandTriggersProps {
  phase: SequencePhase;
  activeHands: Set<number>;
  showLabels?: boolean;
  podLabels?: string[];
  onStartClick: () => void;
  onHandDown: (id: number) => void;
  onHandUp: (id: number) => void;
}

function GoldenHandSvg({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`w-11 h-11 md:w-13 md:h-13 transition-all duration-300 ${
        active
          ? 'drop-shadow-[0_0_26px_rgba(34,211,238,0.95)] scale-110'
          : 'drop-shadow-[0_0_18px_rgba(251,191,36,0.85)]'
      }`}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldHandGrad" x1="12" y1="6" x2="52" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={active ? '#ecfeff' : '#fffbeb'} />
          <stop offset="45%" stopColor={active ? '#22d3ee' : '#fde047'} />
          <stop offset="100%" stopColor={active ? '#0284c7' : '#d97706'} />
        </linearGradient>
      </defs>
      <path
        d="M31.5 7.5c-1.7 0-3 1.3-3 3v18.2h-1.8V13.2c0-1.6-1.3-2.9-2.9-2.9s-2.9 1.3-2.9 2.9v16.7h-1.8V17.4c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7v17.8l-3.4-3.7c-1.2-1.2-3.1-1.3-4.3-.1-1.2 1.1-1.2 3-.1 4.2l8.9 10.6c2.7 3.2 6.6 5.1 10.8 5.1h5.4c7.2 0 13-5.8 13-13V20.8c0-1.6-1.3-2.9-2.9-2.9s-2.9 1.3-2.9 2.9v9.5h-1.8V12.5c0-1.7-1.3-3-3-3s-3 1.3-3 3v16.2h-1.9V10.5c0-1.7-1.3-3-3-3Z"
        fill="url(#goldHandGrad)"
        stroke={active ? '#ecfeff' : '#fef3c7'}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle
        cx="32"
        cy="39"
        r="5.5"
        stroke={active ? '#ecfeff' : '#fffbeb'}
        strokeWidth="1.3"
        strokeOpacity="0.85"
      />
    </svg>
  );
}

export function HandTriggers({
  phase,
  activeHands,
  showLabels = false,
  podLabels,
  onStartClick,
  onHandDown,
  onHandUp,
}: HandTriggersProps) {
  const isIdle = phase === 'idle';
  const isDataFlow = phase === 'dataflow';
  const isVisible = isIdle || isDataFlow;

  if (!isVisible) return null;

  return (
    <motion.div
      variants={handPodsContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute inset-0 z-30 pointer-events-none"
    >
      {/* Subtle interactive center hotspot on the Drum Core (zero visual clutter) */}
      {isIdle && (
        <button
          type="button"
          onClick={onStartClick}
          aria-label="Start"
          title="Bắt đầu nghi thức"
          style={{
            left: `${(SVG_CENTER.x / 1920) * 100}%`,
            top: `${(SVG_CENTER.y / 1080) * 100}%`,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full cursor-pointer pointer-events-auto bg-transparent focus:outline-none group"
        >
          <span className="absolute inset-8 rounded-full border border-amber-300/0 group-hover:border-amber-300/45 transition-all duration-300" />
        </button>
      )}

      {/* Discreet corner Start trigger (low opacity when idle, bright on hover) */}
      {isIdle && (
        <button
          type="button"
          onClick={onStartClick}
          className="absolute bottom-5 right-5 z-40 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase bg-black/35 hover:bg-amber-400 text-amber-200/75 hover:text-red-950 border border-amber-400/30 hover:border-amber-200 backdrop-blur-md transition-all duration-300 opacity-50 hover:opacity-100 pointer-events-auto cursor-pointer"
        >
          <Play className="w-3 h-3 fill-current" />
          <span>Start</span>
        </button>
      )}

      {/* Subtle golden pedestal arc behind the 6 hands */}
      <svg
        viewBox="0 0 1920 1080"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-65"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="pedestalArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
            <stop offset="20%" stopColor="#fde047" stopOpacity="0.65" />
            <stop offset="50%" stopColor="#fffbeb" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#fde047" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 160 865 Q 960 990 1760 865"
          fill="none"
          stroke="url(#pedestalArcGrad)"
          strokeWidth="2"
        />
      </svg>

      {/* 6 Symmetric Golden Hand Pads */}
      {SIX_HAND_ANCHORS.map((anchor, index) => {
        const isActive = isDataFlow || activeHands.has(anchor.id);
        const label = podLabels?.[index]?.trim() || anchor.label;

        return (
          <motion.div
            key={anchor.id}
            variants={handPodItemVariants}
            style={{
              left: `${anchor.leftPct}%`,
              top: `${(anchor.svgY / 1080) * 100}%`,
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-auto"
          >
            <button
              type="button"
              disabled={!isIdle}
              onPointerDown={() => isIdle && onHandDown(anchor.id)}
              onPointerUp={() => isIdle && onHandUp(anchor.id)}
              onPointerCancel={() => isIdle && onHandUp(anchor.id)}
              onPointerLeave={() => isIdle && onHandUp(anchor.id)}
              style={{ transform: `rotate(${anchor.tiltDeg}deg)` }}
              aria-label={label}
              className={`relative w-22 h-22 md:w-26 md:h-26 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer select-none border backdrop-blur-md ${
                isActive
                  ? 'border-cyan-200 bg-cyan-500/25 shadow-[0_0_55px_rgba(34,211,238,0.9)] scale-110'
                  : 'border-amber-300/75 bg-gradient-to-b from-red-900/55 to-red-950/85 hover:border-amber-100 hover:bg-amber-500/20 shadow-[0_0_32px_rgba(245,197,66,0.45),inset_0_0_18px_rgba(251,191,36,0.25)]'
              }`}
            >
              {/* Soft outer aura */}
              <span
                className={`absolute -inset-2.5 rounded-full border pointer-events-none ${
                  isActive
                    ? 'border-cyan-300/70 animate-ping'
                    : 'border-amber-300/25'
                }`}
              />
              {/* Thin precision inner ring */}
              <span
                className={`absolute inset-1.5 rounded-full border pointer-events-none ${
                  isActive ? 'border-cyan-200/70' : 'border-amber-200/40'
                }`}
              />
              <GoldenHandSvg active={isActive} />
            </button>

            {showLabels && (
              <span
                className={`mt-2 text-[11px] font-semibold tracking-wider uppercase drop-shadow transition-colors ${
                  isActive ? 'text-cyan-200' : 'text-amber-200/80'
                }`}
              >
                {label}
              </span>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
