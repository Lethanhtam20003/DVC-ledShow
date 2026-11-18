'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SIX_HAND_ANCHORS, SVG_CENTER } from '../constants';
import { circuitOverlayVariants, laserPathVariants } from '../variants';
import type { SequencePhase } from '../types';

interface DataFlowOverlayProps {
  phase: SequencePhase;
}

function buildLaserPath(x1: number, y1: number, cx: number, cy: number): string {
  const midY = y1 - (y1 - cy) * 0.48;
  const ctrlX1 = x1 + (cx - x1) * 0.16;
  const ctrlX2 = cx + (x1 - cx) * 0.24;
  return `M ${x1} ${y1} C ${ctrlX1} ${midY}, ${ctrlX2} ${cy + 85}, ${cx} ${cy}`;
}

export function DataFlowOverlay({ phase }: DataFlowOverlayProps) {
  const showCircuit = phase !== 'idle';
  const showLasers = phase === 'dataflow';

  return (
    <>
      {/* Digital Circuit Board Overlay (gradually fades in over traditional red bg) */}
      <AnimatePresence>
        {showCircuit && (
          <motion.div
            key="circuit-board-overlay"
            variants={circuitOverlayVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 pointer-events-none mix-blend-screen"
          >
            {/* Deep tech radial aura */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(34,211,238,0.34)_0%,rgba(14,116,144,0.18)_44%,rgba(2,6,23,0.72)_100%)]" />

            {/* Perspective cyber grid */}
            <div
              className="absolute inset-0 opacity-35"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(34,211,238,0.24) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.24) 1px, transparent 1px)',
                backgroundSize: '64px 64px',
                maskImage:
                  'radial-gradient(circle at 50% 45%, rgba(0,0,0,1) 18%, rgba(0,0,0,0.4) 68%, transparent 98%)',
              }}
            />

            {/* Circuit Board Traces SVG */}
            <svg
              viewBox="0 0 1920 1080"
              className="w-full h-full opacity-70"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="circuitHubGlow" cx="50%" cy="44%" r="48%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
                  <stop offset="45%" stopColor="#0284c7" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx={SVG_CENTER.x} cy={SVG_CENTER.y} r="460" fill="url(#circuitHubGlow)" />

              {/* Concentric HUD Circuit Rings */}
              <circle
                cx={SVG_CENTER.x}
                cy={SVG_CENTER.y}
                r="230"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="1.8"
                strokeOpacity="0.5"
                strokeDasharray="18 10"
              />
              <circle
                cx={SVG_CENTER.x}
                cy={SVG_CENTER.y}
                r="355"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="1.2"
                strokeOpacity="0.35"
                strokeDasharray="6 14"
              />

              {/* Symmetric Motherboard Traces */}
              <g stroke="#22d3ee" strokeWidth="1.6" strokeOpacity="0.45" fill="none">
                <path d="M 100 180 H 460 L 560 280 H 780" />
                <path d="M 1820 180 H 1460 L 1360 280 H 1140" />
                <path d="M 60 540 H 380 L 470 470 H 720" />
                <path d="M 1860 540 H 1540 L 1450 470 H 1200" />
                <path d="M 160 860 H 420 L 540 720 H 760" />
                <path d="M 1760 860 H 1500 L 1380 720 H 1160" />
              </g>

              {/* Circuit Nodes */}
              <g fill="#67e8f9" fillOpacity="0.85">
                <circle cx="460" cy="180" r="4.5" />
                <circle cx="780" cy="280" r="4.5" />
                <circle cx="1460" cy="180" r="4.5" />
                <circle cx="1140" cy="280" r="4.5" />
                <circle cx="380" cy="540" r="4.5" />
                <circle cx="720" cy="470" r="4.5" />
                <circle cx="1540" cy="540" r="4.5" />
                <circle cx="1200" cy="470" r="4.5" />
              </g>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6 Cyan Laser Lines shooting from 6 Hand Anchors to Center (0s - 1s) */}
      <AnimatePresence>
        {showLasers && (
          <motion.svg
            key="cyan-laser-overlay"
            viewBox="0 0 1920 1080"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            className="absolute inset-0 z-20 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <filter id="cyanLaserGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="7" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="laserBeamGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="35%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>

            {SIX_HAND_ANCHORS.map((anchor, index) => {
              const d = buildLaserPath(
                anchor.svgX,
                anchor.svgY,
                SVG_CENTER.x,
                SVG_CENTER.y
              );
              return (
                <g key={anchor.id} filter="url(#cyanLaserGlow)">
                  <motion.path
                    d={d}
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeOpacity="0.45"
                    custom={index}
                    variants={laserPathVariants}
                    initial="hidden"
                    animate="visible"
                  />
                  <motion.path
                    d={d}
                    fill="none"
                    stroke="url(#laserBeamGrad)"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    custom={index}
                    variants={laserPathVariants}
                    initial="hidden"
                    animate="visible"
                  />
                  <motion.path
                    d={d}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="laser-energy-stream"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.95] }}
                    transition={{ duration: 0.65, delay: index * 0.03 }}
                  />
                </g>
              );
            })}

            {/* Central Energy Convergence Singularity */}
            <motion.circle
              cx={SVG_CENTER.x}
              cy={SVG_CENTER.y}
              r="34"
              fill="#ecfeff"
              filter="url(#cyanLaserGlow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0.2, 2.5, 1.5], opacity: [0, 1, 0.95] }}
              transition={{ duration: 0.95, ease: 'easeOut' }}
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </>
  );
}
