'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  logoAssemblyVariants,
  logoShardVariants,
  shockwaveRingVariants,
  whiteFlashVariants,
} from '../variants';

interface ShockwaveLogoProps {
  showEffects: boolean;
  showLogo: boolean;
  logoSrc: string;
  logoSize?: number;
  compactTop?: boolean;
}

const SHARD_COLORS = [
  'from-amber-200 to-amber-500',
  'from-cyan-200 to-cyan-500',
  'from-yellow-100 to-orange-500',
  'from-sky-200 to-blue-500',
  'from-amber-100 to-red-500',
  'from-cyan-100 to-teal-400',
  'from-white to-amber-300',
  'from-cyan-300 to-indigo-500',
  'from-amber-300 to-yellow-500',
  'from-sky-100 to-cyan-400',
  'from-orange-200 to-amber-600',
  'from-cyan-200 to-sky-500',
];

export function ShockwaveLogo({
  showEffects,
  showLogo,
  logoSrc,
  logoSize = 168,
  compactTop = false,
}: ShockwaveLogoProps) {
  const [imgError, setImgError] = useState(false);

  const starburstParticles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, idx) => {
        const angle = (idx / 24) * Math.PI * 2;
        const dist = 340 + (idx % 4) * 140;
        return {
          id: idx,
          tx: Math.cos(angle) * dist,
          ty: Math.sin(angle) * dist,
          size: idx % 3 === 0 ? 10 : 6,
          isCyan: idx % 2 === 0,
          delay: (idx % 4) * 0.02,
        };
      }),
    []
  );

  return (
    <>
      {/* 0.2s Full-Screen White Flash at Shockwave Moment */}
      {showEffects && (
        <motion.div
          key="white-flash"
          variants={whiteFlashVariants}
          initial="initial"
          animate="animate"
          className="absolute inset-0 z-50 bg-white pointer-events-none"
        />
      )}

      {/* Supernova Volumetric Light Rays + Starburst Explosion */}
      {showEffects && (
        <div className="absolute inset-0 z-30 flex items-center justify-center overflow-hidden pointer-events-none">
          <motion.div
            initial={{ scale: 0.15, opacity: 1, rotate: 0 }}
            animate={{ scale: 3.4, opacity: 0, rotate: 42 }}
            transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="w-[70vw] h-[70vw] rounded-full mix-blend-screen"
            style={{
              background:
                'repeating-conic-gradient(from 0deg, rgba(254,240,138,0.65) 0deg 4deg, transparent 4deg 14deg, rgba(34,211,238,0.5) 14deg 18deg, transparent 18deg 28deg)',
              maskImage:
                'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 45%, transparent 72%)',
            }}
          />

          {starburstParticles.map((p) => (
            <motion.span
              key={p.id}
              initial={{ x: 0, y: 0, scale: 1.4, opacity: 1 }}
              animate={{ x: p.tx, y: p.ty, scale: 0, opacity: 0 }}
              transition={{ duration: 0.85, delay: p.delay, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: p.size, height: p.size }}
              className={`absolute rounded-full ${
                p.isCyan
                  ? 'bg-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.95)]'
                  : 'bg-amber-200 shadow-[0_0_18px_rgba(251,191,36,0.95)]'
              }`}
            />
          ))}
        </div>
      )}

      {/* Triple Expanding Border-Only Shockwave Rings (0 -> 300vw) */}
      {showEffects && (
        <div className="absolute inset-0 z-40 flex items-center justify-center overflow-hidden pointer-events-none">
          <motion.div
            key="shockwave-ring-white"
            custom={0}
            variants={shockwaveRingVariants}
            initial="initial"
            animate="animate"
            className="rounded-full border-white shadow-[0_0_110px_rgba(255,255,255,0.95)]"
            style={{ borderStyle: 'solid' }}
          />
          <motion.div
            key="shockwave-ring-cyan"
            custom={0.05}
            variants={shockwaveRingVariants}
            initial="initial"
            animate="animate"
            className="absolute rounded-full border-cyan-300 shadow-[0_0_95px_rgba(34,211,238,0.9),inset_0_0_65px_rgba(34,211,238,0.55)]"
            style={{ borderStyle: 'solid' }}
          />
          <motion.div
            key="shockwave-ring-gold"
            custom={0.11}
            variants={shockwaveRingVariants}
            initial="initial"
            animate="animate"
            className="absolute rounded-full border-amber-300/90 shadow-[0_0_85px_rgba(251,191,36,0.85)]"
            style={{ borderStyle: 'solid' }}
          />
        </div>
      )}

      {/* Central Shattered Shards + Hero Assembling Logo */}
      {showLogo && (
        <div
          className={`relative z-30 flex items-center justify-center pointer-events-none transition-all duration-700 ${
            compactTop ? 'mb-5 md:mb-6' : 'my-auto'
          }`}
        >
          {/* 12 Shattered Energy Shards Converging Into the Logo */}
          {showEffects &&
            SHARD_COLORS.map((grad, idx) => (
              <motion.span
                key={`shard-${idx}`}
                custom={idx}
                variants={logoShardVariants}
                initial="initial"
                animate="animate"
                className={`absolute w-11 h-11 rounded-lg bg-gradient-to-br ${grad} shadow-[0_0_28px_rgba(251,191,36,0.9)]`}
                style={{
                  clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                }}
              />
            ))}

          {/* Assembled Logo with Dual Counter-Rotating Orbital Rings */}
          <motion.div
            variants={logoAssemblyVariants}
            initial="initial"
            animate="animate"
            className="relative flex items-center justify-center"
          >
            {/* Outer Golden Halo Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              style={{
                width: `${Math.round((compactTop ? logoSize * 0.92 : logoSize * 1.2) * 1.38)}px`,
                height: `${Math.round((compactTop ? logoSize * 0.92 : logoSize * 1.2) * 1.38)}px`,
              }}
              className="absolute rounded-full border border-dashed border-amber-300/45 shadow-[0_0_50px_rgba(251,191,36,0.22)]"
            />
            {/* Inner Cyan Halo Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              style={{
                width: `${Math.round((compactTop ? logoSize * 0.92 : logoSize * 1.2) * 1.16)}px`,
                height: `${Math.round((compactTop ? logoSize * 0.92 : logoSize * 1.2) * 1.16)}px`,
              }}
              className="absolute rounded-full border border-cyan-300/50 shadow-[0_0_40px_rgba(34,211,238,0.28)]"
            />

            <div className="absolute -inset-6 rounded-full bg-radial from-amber-400/20 via-cyan-400/10 to-transparent blur-2xl" />

            {!imgError ? (
              <img
                src={logoSrc}
                alt="Logo Chuyển Đổi Số Quốc Gia 2026"
                onError={() => setImgError(true)}
                style={{
                  height: `${compactTop ? Math.round(logoSize * 0.9) : Math.round(logoSize * 1.18)}px`,
                }}
                className="relative w-auto object-contain transition-all duration-700 drop-shadow-[0_0_22px_rgba(251,191,36,0.4)]"
              />
            ) : (
              <div
                style={{ width: `${logoSize}px`, height: `${logoSize}px` }}
                className="relative rounded-full border-2 border-amber-300 bg-gradient-to-br from-red-800/90 via-red-950/95 to-amber-900/90 flex items-center justify-center shadow-[0_0_45px_rgba(251,191,36,0.65)]"
              >
                <span className="text-2xl font-black tracking-widest text-amber-200">
                  CĐS 2026
                </span>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
}
