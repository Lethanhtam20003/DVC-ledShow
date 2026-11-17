import React from 'react';
import {
  Award,
  Building2,
  Cpu,
  Flower2,
  Gem,
  Globe2,
  Star,
} from 'lucide-react';

const PILLAR_ICONS = [Building2, Cpu, Globe2];

const PATTERN_CELEBRATION_ICONS = {
  'holo-globe': Globe2,
  'smart-city': Building2,
  'crystal-core': Gem,
  'lotus-3d': Flower2,
  'golden-star': Star,
  'ai-cube': Cpu,
};

export default function Celebration({ config, pattern, visible }) {
  if (!visible) return null;

  const themeMode = config.celebrationTheme || 'match-pattern';
  const useCyan =
    themeMode === 'tech-cyan' ||
    (themeMode === 'match-pattern' && pattern.id === 'holo-globe');

  const accentPrimary = useCyan
    ? '#38bdf8'
    : themeMode === 'royal-gold'
      ? '#f5c542'
      : pattern.colors.primary;
  const accentLight = useCyan
    ? '#a5f3fc'
    : themeMode === 'royal-gold'
      ? '#fde047'
      : pattern.colors.accent;
  const accentSecondary = useCyan
    ? '#0369a1'
    : themeMode === 'royal-gold'
      ? '#b91c1c'
      : pattern.colors.secondary;

  const logoPx = config.logoSize || 112;
  const activeEmblemKey =
    pattern.id === 'custom-ceremony'
      ? config.custom3dModelType === 'none'
        ? 'none'
        : config.custom3dModelId || 'crystal-core'
      : pattern.id;

  const defaultImageLogoSrc =
    activeEmblemKey === 'cdsqg-2026'
      ? './logo-cdsqg-2026.png'
      : activeEmblemKey === 'dong-son'
        ? './dong-son-drum.png'
        : null;

  const EmblemIcon = PATTERN_CELEBRATION_ICONS[activeEmblemKey] || Award;

  const pillars =
    Array.isArray(config.celebrationPillars) && config.celebrationPillars.length > 0
      ? config.celebrationPillars
      : [
        { title: 'CHÍNH QUYỀN SỐ', desc: 'Minh bạch & Kiến tạo' },
        { title: 'KINH TẾ SỐ', desc: 'Đột phá & Bền vững' },
        { title: 'XÃ HỘI SỐ', desc: 'Phục vụ Nhân dân' },
      ];

  return (
    <div className="absolute inset-0 z-40 flex flex-col items-center justify-center px-8 text-center">
      {/* Custom Logo or Pattern-Matched Default Emblem */}
      { (config.customLogoData || activeEmblemKey !== 'none') && (
        <div className="mb-6 animate-float-slow">
          {config.customLogoData ? (
            <img
              src={config.customLogoData}
              alt="Logo đơn vị"
              style={{ height: `${logoPx}px` }}
              className="w-auto object-contain drop-shadow-[0_10px_30px_rgba(245,197,66,0.45)]"
            />
          ) : defaultImageLogoSrc ? (
            <img
              src={defaultImageLogoSrc}
              alt={pattern.name}
              style={{ height: `${Math.round(logoPx * 1.05)}px` }}
              className="w-auto object-contain drop-shadow-[0_0_36px_rgba(251,171,24,0.55)]"
            />
          ) : (
            <div
              style={{
                width: `${Math.round(logoPx * 0.85)}px`,
                height: `${Math.round(logoPx * 0.85)}px`,
                borderColor: accentPrimary,
                backgroundColor: `${accentSecondary}55`,
                boxShadow: `0 0 40px ${accentPrimary}66`,
              }}
              className="rounded-full border-2 flex items-center justify-center backdrop-blur-md shadow-2xl"
            >
              <EmblemIcon
                style={{
                  width: `${Math.round(logoPx * 0.44)}px`,
                  height: `${Math.round(logoPx * 0.44)}px`,
                  color: accentLight,
                }}
              />
            </div>
          )}
        </div>
      )}

      {/* Ribbon Badge */}
      {config.celebrationRibbon?.trim() && (
        <div
          className="px-7 py-2 rounded-full border text-sm md:text-base font-bold tracking-[0.22em] uppercase mb-5 backdrop-blur-md"
          style={{
            borderColor: `${accentPrimary}aa`,
            background: `linear-gradient(90deg, ${accentSecondary}aa, ${accentPrimary}33, ${accentSecondary}aa)`,
            color: accentLight,
          }}
        >
          {config.celebrationRibbon}
        </div>
      )}

      {/* Main 3D Metallic Title */}
      <h1
        className={`text-4xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase max-w-5xl leading-tight mb-4 ${useCyan ? 'cyan-3d-text' : 'gold-3d-text'
          }`}
      >
        {config.celebrationTitle}
      </h1>

      {/* Divider */}
      <div
        className="w-48 h-0.5 rounded-full my-3 opacity-80"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentPrimary}, transparent)`,
        }}
      />

      {/* Motto */}
      <p className="text-lg md:text-2xl font-semibold tracking-[0.14em] uppercase text-white/95 max-w-4xl mb-10 drop-shadow">
        {config.celebrationDesc}
      </p>

      {/* 3 Pillars (Optional) */}
      {config.showCelebrationPillars !== false && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
          {pillars.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
            return (
              <div
                key={`${pillar.title}-${idx}`}
                className="px-5 py-4 rounded-2xl border backdrop-blur-md flex items-center gap-3.5 text-left"
                style={{
                  borderColor: `${accentPrimary}55`,
                  backgroundColor: 'rgba(0,0,0,0.42)',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${accentPrimary}22` }}
                >
                  <Icon className="w-6 h-6" style={{ color: accentPrimary }} />
                </div>
                <div>
                  <div
                    className="text-sm font-bold tracking-wider"
                    style={{ color: accentLight }}
                  >
                    {pillar.title}
                  </div>
                  <div className="text-xs text-white/75">{pillar.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
