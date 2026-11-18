'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { countdownPumpVariants } from '../variants';

interface GlitchCountdownProps {
  visible: boolean;
  value: number;
}

export function GlitchCountdown({ visible, value }: GlitchCountdownProps) {
  if (!visible || value <= 0) return null;

  return (
    <div
      className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
      style={{ perspective: '1200px' }}
    >
      {/* Dual impact rings pulsing with each digit */}
      <motion.div
        key={`ring-outer-${value}`}
        initial={{ scale: 0.35, opacity: 0.9 }}
        animate={{ scale: 1.85, opacity: 0 }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
        className="absolute w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full border-2 border-cyan-300/80 shadow-[0_0_70px_rgba(34,211,238,0.65)]"
      />
      <motion.div
        key={`ring-inner-${value}`}
        initial={{ scale: 0.5, opacity: 0.85 }}
        animate={{ scale: 1.35, opacity: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-amber-300/80 shadow-[0_0_50px_rgba(251,191,36,0.6)]"
      />

      {/* Core radial energy flash */}
      <motion.div
        key={`flash-${value}`}
        initial={{ scale: 0.4, opacity: 0.7 }}
        animate={{ scale: 1.4, opacity: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="absolute w-72 h-72 rounded-full bg-radial from-cyan-200/45 via-amber-300/20 to-transparent blur-2xl"
      />

      <AnimatePresence mode="popLayout">
        <motion.div
          key={value}
          variants={countdownPumpVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative flex items-center justify-center select-none"
        >
          <div className="glitch-number-wrapper">
            <span
              className="relative z-10 text-[14rem] md:text-[20rem] font-black leading-none tracking-tighter bg-gradient-to-b from-white via-amber-200 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_55px_rgba(251,191,36,0.85)]"
              style={{ WebkitTextStroke: '2px rgba(255,255,255,0.32)' }}
            >
              {value}
            </span>

            <span
              aria-hidden="true"
              className="glitch-layer-cyan text-[14rem] md:text-[20rem] font-black leading-none tracking-tighter"
            >
              {value}
            </span>
            <span
              aria-hidden="true"
              className="glitch-layer-red text-[14rem] md:text-[20rem] font-black leading-none tracking-tighter"
            >
              {value}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
