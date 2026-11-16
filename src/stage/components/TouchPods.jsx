import React from 'react';
import { Fingerprint } from 'lucide-react';

export default function TouchPods({
  handCount,
  podY,
  podSize,
  podGap,
  activeHands,
  primaryColor,
  glowColor,
  customHandImageUrl,
  showPodLabels = true,
  podLabels = [],
  isCharging = false,
  visible,
  onActivateHand,
  onDeactivateHand,
}) {
  if (!visible) return null;

  const autoScale = handCount > 8 ? 0.78 : handCount > 6 ? 0.88 : 1;
  const effectiveSize = Math.round(podSize * autoScale);
  const effectiveGap = Math.round(podGap * autoScale);
  const activeColor = glowColor || primaryColor;

  return (
    <div
      className="absolute inset-x-0 bottom-10 z-30 flex items-center justify-center flex-wrap px-6 transition-all duration-500"
      style={{
        transform: `translateY(${podY}px)`,
        gap: `${effectiveGap}px`,
      }}
    >
      {Array.from({ length: handCount }, (_, idx) => {
        const id = idx + 1;
        const isLit = isCharging || activeHands.has(id);
        const label = podLabels[idx]?.trim() || `${id}`;

        return (
          <div key={id} className="flex flex-col items-center gap-2">
            <button
              type="button"
              onMouseDown={() => onActivateHand?.(id)}
              onMouseUp={() => onDeactivateHand?.(id)}
              onMouseLeave={() => onDeactivateHand?.(id)}
              onTouchStart={(e) => {
                e.preventDefault();
                onActivateHand?.(id);
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                onDeactivateHand?.(id);
              }}
              onTouchCancel={() => onDeactivateHand?.(id)}
              style={{
                width: `${effectiveSize}px`,
                height: `${effectiveSize}px`,
                borderColor: isLit ? '#ffffff' : activeColor,
                boxShadow: isLit
                  ? `0 0 42px ${activeColor}, 0 0 80px ${activeColor}88, inset 0 0 28px ${activeColor}`
                  : `0 0 18px ${activeColor}55, inset 0 0 12px ${activeColor}33`,
              }}
              className={`relative rounded-full border-2 flex flex-col items-center justify-center backdrop-blur-md transition-all duration-300 cursor-pointer select-none ${isLit
                  ? 'scale-110 bg-white/20 animate-pulse-glow'
                  : 'bg-black/45 hover:scale-105'
                }`}
              aria-label={`Bục chạm ${id}`}
            >
              <span
                className="absolute inset-1.5 rounded-full border border-dashed opacity-75 animate-spin"
                style={{
                  borderColor: isLit ? '#ffffff' : activeColor,
                  animationDuration: isLit ? '5s' : '14s',
                }}
              />

              {customHandImageUrl ? (
                <img
                  src={customHandImageUrl}
                  alt={`Bàn tay ${id}`}
                  style={{
                    width: Math.round(effectiveSize * 0.56),
                    height: Math.round(effectiveSize * 0.56),
                    filter: isLit
                      ? `drop-shadow(0 0 14px ${activeColor}) brightness(1.35)`
                      : `drop-shadow(0 0 6px ${activeColor}88)`,
                  }}
                  className="object-contain transition-all duration-300 pointer-events-none"
                />
              ) : (
                <Fingerprint
                  style={{
                    width: Math.round(effectiveSize * 0.44),
                    height: Math.round(effectiveSize * 0.44),
                    color: isLit ? '#ffffff' : activeColor,
                    filter: isLit ? `drop-shadow(0 0 12px ${activeColor})` : 'none',
                  }}
                  className="transition-all duration-200"
                />
              )}
            </button>

            {showPodLabels && (
              <span
                className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-black/55 border backdrop-blur-sm"
                style={{
                  borderColor: `${activeColor}55`,
                  color: isLit ? '#ffffff' : activeColor,
                }}
              >
                {label}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
