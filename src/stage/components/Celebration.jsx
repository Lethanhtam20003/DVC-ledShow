import React from 'react';
import { Award, Building2, Cpu, Globe2 } from 'lucide-react';

export default function Celebration({ config, pattern, visible }) {
  if (!visible) return null;

  const isCyan = pattern.id === 'holo-globe';

  return (
    <div className="absolute inset-0 z-40 flex flex-col items-center justify-center px-8 text-center animate-fadeIn">
      {/* Custom Logo or Default Emblem */}
      <div className="mb-6 animate-float-slow">
        {config.customLogoData ? (
          <img
            src={config.customLogoData}
            alt="Logo đơn vị"
            className="h-28 w-auto object-contain drop-shadow-[0_10px_30px_rgba(245,197,66,0.45)]"
          />
        ) : (
          <div
            className="w-24 h-24 rounded-full border-2 flex items-center justify-center backdrop-blur-md shadow-2xl"
            style={{
              borderColor: pattern.colors.primary,
              backgroundColor: `${pattern.colors.secondary}55`,
              boxShadow: `0 0 40px ${pattern.colors.primary}66`,
            }}
          >
            <Award
              className="w-12 h-12"
              style={{ color: pattern.colors.accent }}
            />
          </div>
        )}
      </div>

      {/* Ribbon Badge */}
      <div
        className="px-7 py-2 rounded-full border text-sm md:text-base font-bold tracking-[0.22em] uppercase mb-5 backdrop-blur-md"
        style={{
          borderColor: `${pattern.colors.primary}aa`,
          background: `linear-gradient(90deg, ${pattern.colors.secondary}aa, ${pattern.colors.primary}33, ${pattern.colors.secondary}aa)`,
          color: pattern.colors.accent,
        }}
      >
        NGHI THỨC KÍCH HOẠT HOÀN THÀNH
      </div>

      {/* Main 3D Metallic Title */}
      <h1
        className={`text-4xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase max-w-5xl leading-tight mb-4 ${
          isCyan ? 'cyan-3d-text' : 'gold-3d-text'
        }`}
      >
        {config.celebrationTitle}
      </h1>

      {/* Divider */}
      <div
        className="w-48 h-0.5 rounded-full my-3 opacity-80"
        style={{
          background: `linear-gradient(90deg, transparent, ${pattern.colors.primary}, transparent)`,
        }}
      />

      {/* Motto */}
      <p className="text-lg md:text-2xl font-semibold tracking-[0.14em] uppercase text-white/95 max-w-4xl mb-10 drop-shadow">
        {config.celebrationDesc}
      </p>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
        {[
          { icon: Building2, label: 'CHÍNH QUYỀN SỐ', desc: 'Minh bạch & Kiến tạo' },
          { icon: Cpu, label: 'KINH TẾ SỐ', desc: 'Đột phá & Bền vững' },
          { icon: Globe2, label: 'XÃ HỘI SỐ', desc: 'Phục vụ Nhân dân' },
        ].map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.label}
              className="px-5 py-4 rounded-2xl border backdrop-blur-md flex items-center gap-3.5 text-left"
              style={{
                borderColor: `${pattern.colors.primary}55`,
                backgroundColor: 'rgba(0,0,0,0.42)',
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${pattern.colors.primary}22` }}
              >
                <Icon className="w-6 h-6" style={{ color: pattern.colors.primary }} />
              </div>
              <div>
                <div
                  className="text-sm font-bold tracking-wider"
                  style={{ color: pattern.colors.accent }}
                >
                  {pillar.label}
                </div>
                <div className="text-xs text-white/75">{pillar.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

