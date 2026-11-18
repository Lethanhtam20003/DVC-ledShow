'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Cpu, Globe2, Layers, Play } from 'lucide-react';
import type {
  LogoSpearheadConfig,
  SpearheadStage,
  TechPillarItem,
} from './types';

interface LogoSpearheadHUDProps {
  stage: SpearheadStage;
  impactStep: number;
  impactKey: number;
  handCount: number;
  activeHands: Set<number>;
  config?: LogoSpearheadConfig;
  mainTitle: string;
  subtitleBadge: string;
  pillars: TechPillarItem[];
  onStartClick: () => void;
  onHandDown: (id: number) => void;
  onHandUp: (id: number) => void;
}

const PILLAR_ICONS = {
  gov: Layers,
  ai: Cpu,
  cloud: Globe2,
};

function HologramHandSvg({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`w-10 h-10 md:w-12 md:h-12 transition-all duration-300 ${
        active
          ? 'drop-shadow-[0_0_24px_rgba(34,211,238,0.95)] scale-110'
          : 'drop-shadow-[0_0_14px_rgba(251,191,36,0.8)]'
      }`}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="spearHandGrad" x1="12" y1="6" x2="52" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={active ? '#ecfeff' : '#fffbeb'} />
          <stop offset="48%" stopColor={active ? '#22d3ee' : '#fde047'} />
          <stop offset="100%" stopColor={active ? '#0284c7' : '#d97706'} />
        </linearGradient>
      </defs>
      <path
        d="M31.5 7.5c-1.7 0-3 1.3-3 3v18.2h-1.8V13.2c0-1.6-1.3-2.9-2.9-2.9s-2.9 1.3-2.9 2.9v16.7h-1.8V17.4c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7v17.8l-3.4-3.7c-1.2-1.2-3.1-1.3-4.3-.1-1.2 1.1-1.2 3-.1 4.2l8.9 10.6c2.7 3.2 6.6 5.1 10.8 5.1h5.4c7.2 0 13-5.8 13-13V20.8c0-1.6-1.3-2.9-2.9-2.9s-2.9 1.3-2.9 2.9v9.5h-1.8V12.5c0-1.7-1.3-3-3-3s-3 1.3-3 3v16.2h-1.9V10.5c0-1.7-1.3-3-3-3Z"
        fill="url(#spearHandGrad)"
        stroke={active ? '#ecfeff' : '#fef3c7'}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogoSpearheadHUD({
  stage,
  impactStep,
  impactKey,
  handCount,
  activeHands,
  config,
  mainTitle,
  subtitleBadge,
  pillars,
  onStartClick,
  onHandDown,
  onHandUp,
}: LogoSpearheadHUDProps) {
  const safeCount = Math.max(1, Math.min(10, handCount));
  const handIndices = Array.from({ length: safeCount }, (_, i) => i);

  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {/* Optional Idle Header */}
      {stage === 'idle' && config?.showHeader && (
        <motion.header
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-7 inset-x-0 px-6 text-center"
        >
          <h1 className="text-2xl md:text-4xl font-black uppercase tracking-wider bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_6px_24px_rgba(245,197,66,0.45)]">
            {config.eventTitle || 'NGHI THỨC KÍCH HOẠT CHUYỂN ĐỔI SỐ'}
          </h1>
        </motion.header>
      )}

      {/* Idle Interactive Center Logo Hotspot + Discreet Start Pill + Symmetric Hands */}
      <AnimatePresence>
        {stage === 'idle' && (
          <motion.div
            key="spearhead-idle-controls"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24, transition: { duration: 0.3 } }}
            className="absolute inset-0"
          >
            {/* Clickable 3D Logo Core Hotspot */}
            <button
              type="button"
              onClick={onStartClick}
              aria-label="Start"
              title="Kích hoạt"
              className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full pointer-events-auto cursor-pointer bg-transparent group focus:outline-none"
            >
              <span className="absolute inset-6 rounded-full border border-cyan-300/0 group-hover:border-cyan-300/45 transition-all duration-300" />
            </button>

            {/* Discreet Corner Start Trigger */}
            <button
              type="button"
              onClick={onStartClick}
              className="absolute bottom-5 right-5 z-30 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase bg-black/40 hover:bg-cyan-400 text-cyan-200/80 hover:text-slate-950 border border-cyan-400/35 hover:border-cyan-200 backdrop-blur-md transition-all duration-300 opacity-50 hover:opacity-100 pointer-events-auto cursor-pointer"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Start</span>
            </button>

            {/* Symmetric Delegate Touch Pods */}
            <div className="absolute bottom-[7%] inset-x-0 px-8 flex items-end justify-center gap-4 md:gap-8">
              {handIndices.map((idx) => {
                const isActive = activeHands.has(idx);
                const label = config?.podLabels?.[idx]?.trim() || `Đại biểu ${idx + 1}`;
                const centerOffset = Math.abs(idx - (safeCount - 1) / 2);
                const arcLift = Math.round(centerOffset * centerOffset * 4);

                return (
                  <div
                    key={idx}
                    style={{ transform: `translateY(-${arcLift}px)` }}
                    className="flex flex-col items-center pointer-events-auto"
                  >
                    <button
                      type="button"
                      onPointerDown={() => onHandDown(idx)}
                      onPointerUp={() => onHandUp(idx)}
                      onPointerCancel={() => onHandUp(idx)}
                      onPointerLeave={() => onHandUp(idx)}
                      aria-label={label}
                      className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center border backdrop-blur-md transition-all duration-250 cursor-pointer select-none ${
                        isActive
                          ? 'border-cyan-200 bg-cyan-500/30 shadow-[0_0_48px_rgba(34,211,238,0.9)] scale-110'
                          : 'border-amber-300/70 bg-gradient-to-b from-red-950/60 to-slate-950/85 hover:border-cyan-300 shadow-[0_0_28px_rgba(245,197,66,0.4)]'
                      }`}
                    >
                      <span
                        className={`absolute inset-1.5 rounded-full border pointer-events-none ${
                          isActive ? 'border-cyan-200/75' : 'border-amber-200/35'
                        }`}
                      />
                      <HologramHandSvg active={isActive} />
                    </button>

                    {config?.showPodLabels && (
                      <span
                        className={`mt-2 text-[11px] font-semibold tracking-wider uppercase ${
                          isActive ? 'text-cyan-200' : 'text-amber-200/80'
                        }`}
                      >
                        {label}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Warp Radial Speed Streaks during Ignition & Breakthrough */}
      {(stage === 'ignition' || stage === 'breakthrough') && (
        <div
          className="spearhead-warp-vignette absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, transparent 42%, rgba(34,211,238,0.16) 76%, rgba(8,47,73,0.52) 100%)',
          }}
        />
      )}

      {/* Sharp Barrier Impact Pulse (3 -> 2 -> 1) */}
      {stage === 'breakthrough' && impactStep > 0 && (
        <div className="absolute top-[10%] inset-x-0 flex justify-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`impact-${impactStep}`}
              initial={{ scale: 1.85, opacity: 0, filter: 'blur(8px)' }}
              animate={{ scale: 1, opacity: 0.92, filter: 'blur(0px)' }}
              exit={{ scale: 0.7, opacity: 0, transition: { duration: 0.12 } }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white via-cyan-200 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_32px_rgba(34,211,238,0.85)]"
            >
              {impactStep}
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* Barrier Shatter Impact Flash Pulse */}
      <AnimatePresence>
        {impactKey > 0 && stage === 'breakthrough' && (
          <motion.div
            key={`shatter-flash-${impactKey}`}
            initial={{ opacity: 0.45 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute inset-0 bg-radial from-cyan-200/60 via-amber-200/20 to-transparent pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Dawn Phase: Supernova 0.22s Flash + Triple Expanding Shockwave */}
      {stage === 'dawn' && (
        <>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="absolute inset-0 z-40 bg-white pointer-events-none"
          />
          <div className="absolute inset-0 z-30 flex items-center justify-center overflow-hidden pointer-events-none">
            {[0, 0.06, 0.12].map((delay, i) => (
              <motion.div
                key={i}
                initial={{ width: '0vw', height: '0vw', opacity: 1, borderWidth: '20px' }}
                animate={{
                  width: '280vw',
                  height: '280vw',
                  opacity: [1, 0.85, 0],
                  borderWidth: ['20px', '8px', '2px'],
                }}
                transition={{ duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute rounded-full border-solid ${
                  i === 0
                    ? 'border-white shadow-[0_0_90px_#ffffff]'
                    : i === 1
                      ? 'border-cyan-300 shadow-[0_0_80px_#22d3ee]'
                      : 'border-amber-300 shadow-[0_0_70px_#fbbf24]'
                }`}
              />
            ))}
          </div>
        </>
      )}

      {/* Showcase Phase: Modern Tech Era Title + 3 Holographic Pillars guided by 3D Logo above */}
      {stage === 'showcase' && (
        <div className="absolute inset-x-0 bottom-[5%] top-[44%] z-30 flex flex-col items-center justify-end px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-6xl flex flex-col items-center mb-4 md:mb-5"
          >
            {subtitleBadge && (
              <div className="inline-flex items-center gap-2.5 px-4 py-1 rounded-full border border-cyan-300/45 bg-slate-950/60 text-cyan-200 text-[11px] md:text-xs font-bold tracking-[0.26em] uppercase mb-2 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_#fde047]" />
                <span>{subtitleBadge}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_#fde047]" />
              </div>
            )}

            <div className="spearhead-sweep-surface rounded-2xl px-7 py-2.5 md:px-10 md:py-3 border border-cyan-300/35 bg-slate-950/55 backdrop-blur-md shadow-[0_12px_45px_rgba(2,6,23,0.7)]">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wide leading-tight bg-gradient-to-b from-white via-amber-200 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_4px_18px_rgba(251,191,36,0.38)]">
                {mainTitle}
              </h1>
            </div>
          </motion.div>

          {/* 3 Staggered Modern Tech Holographic Pillars */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.12 },
              },
            }}
            className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          >
            {pillars.slice(0, 3).map((pillar, idx) => {
              const Icon =
                (pillar.iconKey && PILLAR_ICONS[pillar.iconKey]) ||
                (idx === 0 ? Layers : idx === 1 ? Cpu : Globe2);
              const sweepDelayClass =
                idx === 1
                  ? 'spearhead-sweep-delay-1'
                  : idx === 2
                    ? 'spearhead-sweep-delay-2'
                    : '';

              return (
                <motion.div
                  key={pillar.id || idx}
                  variants={{
                    hidden: { opacity: 0, x: -44, y: 36, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                      transition: { type: 'spring', stiffness: 210, damping: 18 },
                    },
                  }}
                  className={`spearhead-sweep-surface ${sweepDelayClass} relative rounded-2xl border border-cyan-300/45 bg-gradient-to-b from-[#06182b]/88 via-[#040d1a]/90 to-[#020612]/94 px-5 pt-5 pb-5 backdrop-blur-xl shadow-[0_18px_50px_rgba(34,211,238,0.18)] flex flex-col items-center text-center`}
                >
                  <div className="absolute top-0 inset-x-10 h-1 rounded-b-full bg-gradient-to-r from-amber-300 via-cyan-300 to-amber-300 shadow-[0_0_16px_rgba(34,211,238,0.75)]" />

                  <div className="w-12 h-12 rounded-xl border border-cyan-300/55 bg-cyan-400/15 text-cyan-200 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                    <Icon className="w-6 h-6" />
                  </div>

                  {pillar.tag && (
                    <span className="text-[10px] font-bold tracking-[0.26em] uppercase text-amber-300/90 mb-1">
                      {pillar.tag}
                    </span>
                  )}

                  <h2 className="text-lg md:text-xl font-black uppercase tracking-wide text-white mb-1.5">
                    {pillar.title}
                  </h2>

                  {pillar.desc && (
                    <p className="text-xs font-medium text-slate-300/85 leading-relaxed">
                      {pillar.desc}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      )}
    </div>
  );
}
