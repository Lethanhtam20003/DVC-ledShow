'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Cpu, Globe2 } from 'lucide-react';
import {
  pillarCardVariants,
  pillarsContainerVariants,
  titleRevealVariants,
} from '../variants';
import type { PillarItem } from '../types';

interface PillarsRevealProps {
  visible: boolean;
  mainTitle: string;
  subtitleBadge: string;
  pillars: PillarItem[];
}

const PILLAR_ICON_MAP = {
  gov: Building2,
  eco: Cpu,
  soc: Globe2,
};

const PILLAR_THEMES = [
  {
    topBar: 'from-amber-200 via-yellow-400 to-amber-500',
    beam: 'from-amber-400/30 via-amber-500/8 to-transparent',
    border: 'border-amber-300/65',
    glow: 'shadow-[0_24px_70px_rgba(251,191,36,0.28)]',
    iconBg: 'bg-gradient-to-br from-amber-300/25 to-amber-600/30 border-amber-200/80 text-amber-100',
    accentText: 'text-amber-300',
    bg: 'from-[#28060a]/92 via-[#150409]/94 to-[#090206]/96',
  },
  {
    topBar: 'from-cyan-200 via-sky-400 to-cyan-500',
    beam: 'from-cyan-400/32 via-sky-500/10 to-transparent',
    border: 'border-cyan-300/70',
    glow: 'shadow-[0_24px_70px_rgba(34,211,238,0.3)]',
    iconBg: 'bg-gradient-to-br from-cyan-300/25 to-sky-600/30 border-cyan-200/80 text-cyan-100',
    accentText: 'text-cyan-300',
    bg: 'from-[#071e2e]/94 via-[#05121f]/95 to-[#030712]/96',
  },
  {
    topBar: 'from-amber-200 via-yellow-400 to-amber-500',
    beam: 'from-amber-400/30 via-amber-500/8 to-transparent',
    border: 'border-amber-300/65',
    glow: 'shadow-[0_24px_70px_rgba(251,191,36,0.28)]',
    iconBg: 'bg-gradient-to-br from-amber-300/25 to-amber-600/30 border-amber-200/80 text-amber-100',
    accentText: 'text-amber-300',
    bg: 'from-[#28060a]/92 via-[#150409]/94 to-[#090206]/96',
  },
];

export function PillarsReveal({
  visible,
  mainTitle,
  subtitleBadge,
  pillars,
}: PillarsRevealProps) {
  if (!visible) return null;

  return (
    <div className="relative z-30 w-full max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
      {/* Main Title Box with Infinite CSS Light Sweep */}
      <motion.div
        variants={titleRevealVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-center mb-8 md:mb-10"
      >
        {subtitleBadge && (
          <div className="inline-flex items-center gap-3 px-6 py-1.5 rounded-full border border-amber-300/45 bg-black/50 text-amber-200 text-xs md:text-sm font-bold tracking-[0.28em] uppercase mb-4 backdrop-blur-md shadow-[0_0_28px_rgba(251,191,36,0.22)]">
            <span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee]" />
            <span>{subtitleBadge}</span>
            <span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee]" />
          </div>
        )}

        <div className="light-sweep-title-box rounded-3xl px-8 py-5 md:px-14 md:py-6 border border-amber-300/55 bg-gradient-to-r from-[#2c0509]/85 via-[#0f172a]/88 to-[#2c0509]/85 backdrop-blur-xl shadow-[0_0_85px_rgba(251,191,36,0.28)]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-black uppercase tracking-wide leading-tight bg-gradient-to-b from-white via-amber-200 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_6px_28px_rgba(251,191,36,0.5)]">
            {mainTitle}
          </h1>
        </div>
      </motion.div>

      {/* 3 Architectural LED Monolith Pillars (Staggered Left -> Right) */}
      <motion.div
        variants={pillarsContainerVariants}
        initial="hidden"
        animate="visible"
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        {pillars.slice(0, 3).map((pillar, idx) => {
          const Icon =
            (pillar.iconKey && PILLAR_ICON_MAP[pillar.iconKey]) ||
            (idx === 0 ? Building2 : idx === 1 ? Cpu : Globe2);
          const theme = PILLAR_THEMES[idx % PILLAR_THEMES.length];

          return (
            <motion.div
              key={pillar.id || idx}
              variants={pillarCardVariants}
              className="relative flex flex-col items-center"
            >
              {/* Rising Vertical Stage Light Beam Behind Pillar */}
              <div
                className={`absolute -inset-x-3 -top-8 -bottom-16 bg-gradient-to-t ${theme.beam} blur-xl pointer-events-none rounded-3xl`}
              />

              <div
                className={`light-sweep-card relative w-full rounded-3xl border ${theme.border} bg-gradient-to-b ${theme.bg} ${theme.glow} px-6 pt-8 pb-7 backdrop-blur-xl flex flex-col items-center text-center`}
              >
                {/* Top Luminous Crown Bar */}
                <div
                  className={`absolute top-0 inset-x-8 h-1.5 rounded-b-full bg-gradient-to-r ${theme.topBar} shadow-[0_0_22px_rgba(251,191,36,0.85)]`}
                />

                {/* Glowing Medallion Icon */}
                <div
                  className={`w-18 h-18 rounded-2xl border ${theme.iconBg} flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(251,191,36,0.25)]`}
                >
                  <Icon className="w-9 h-9" />
                </div>

                <span
                  className={`text-[11px] font-bold tracking-[0.32em] uppercase ${theme.accentText} mb-2`}
                >
                  Trụ cột 0{idx + 1}
                </span>

                <h2 className="text-2xl md:text-[1.65rem] font-black uppercase tracking-wide text-white mb-2.5 drop-shadow">
                  {pillar.title}
                </h2>

                {pillar.desc && (
                  <p className="text-xs md:text-sm font-medium text-slate-200/85 leading-relaxed">
                    {pillar.desc}
                  </p>
                )}

                {/* Bottom Glowing Accent Line */}
                <div
                  className={`mt-5 w-20 h-0.5 rounded-full bg-gradient-to-r ${theme.topBar} opacity-75`}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
