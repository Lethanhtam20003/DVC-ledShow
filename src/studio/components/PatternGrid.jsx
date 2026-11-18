import React from 'react';
import { Check, Sparkles, Globe, Building2, Gem, Wand2, SlidersHorizontal, Orbit, Zap, Rocket } from 'lucide-react';
import { PATTERNS } from '../../shared/patterns';

const PATTERN_ICONS = {
  'logo-spearhead': Rocket,
  'activation-countdown': Zap,
  'cdsqg-2026': Orbit,
  'dong-son': Sparkles,
  'holo-globe': Globe,
  'smart-city': Building2,
  'crystal-core': Gem,
  'custom-ceremony': Wand2,
};

export default function PatternGrid({ selectedId, onSelectPattern, onOpenSetup }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
      {PATTERNS.map((pattern) => {
        const Icon = PATTERN_ICONS[pattern.id] || Sparkles;
        const isSelected = pattern.id === selectedId;
        return (
          <div
            key={pattern.id}
            onClick={() => onSelectPattern(pattern.id)}
            className={`group relative rounded-3xl border p-6 transition-all duration-300 cursor-pointer overflow-hidden ${isSelected
                ? 'border-amber-400/80 bg-slate-900/90 shadow-[0_0_40px_rgba(245,197,66,0.16)]'
                : 'border-slate-800/90 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900/80'
              }`}
          >
            {/* Visual 3D Gradient Preview Header */}
            <div
              className="relative h-32 rounded-2xl mb-4 overflow-hidden flex items-center justify-center border border-white/10"
              style={{
                background: `radial-gradient(circle at 50% 45%, ${pattern.colors.secondary}99, ${pattern.colors.bgBottom} 85%)`,
              }}
            >
              {/* Subtle 3D orbital rings decoration */}
              <div
                className="w-28 h-28 rounded-full border-2 border-dashed flex items-center justify-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-45"
                style={{ borderColor: `${pattern.colors.primary}88` }}
              >
                <div
                  className="w-20 h-20 rounded-full border flex items-center justify-center shadow-2xl"
                  style={{
                    borderColor: pattern.colors.accent,
                    backgroundColor: `${pattern.colors.primary}1a`,
                    boxShadow: `0 0 30px ${pattern.colors.primary}55`,
                  }}
                >
                  <Icon
                    className="w-9 h-9 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: pattern.colors.accent }}
                  />
                </div>
              </div>

              {/* Top Badges */}
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-black/50 text-white/90 border border-white/10 backdrop-blur-md">
                {pattern.badge}
              </span>

              {isSelected && (
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-400 text-slate-950 flex items-center gap-1 shadow-lg">
                  <Check className="w-3.5 h-3.5" /> Đang chọn
                </span>
              )}
            </div>

            {/* Card Content */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-1">
                  {pattern.subtitle}
                </p>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {pattern.name}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed line-clamp-2">
                  {pattern.description}
                </p>
              </div>
            </div>

            {/* Action Footer */}
            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="w-3.5 h-3.5 rounded-full border border-white/20"
                  style={{ backgroundColor: pattern.colors.primary }}
                />
                <span
                  className="w-3.5 h-3.5 rounded-full border border-white/20"
                  style={{ backgroundColor: pattern.colors.secondary }}
                />
                <span className="text-xs text-slate-500 ml-1">
                  {pattern.engineType === 'three-motion'
                    ? 'Three.js 3D + Motion'
                    : pattern.engineType === 'motion'
                      ? 'Framer Motion + SVG'
                      : 'WebGL 3D + Bloom'}
                </span>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectPattern(pattern.id);
                  onOpenSetup();
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-slate-200 transition-colors cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Thiết lập mẫu
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

