import React from 'react';
import { Fingerprint, Hand, Pointer } from 'lucide-react';

export default function TouchPods({
  handCount,
  podY,
  podSize,
  podGap,
  activeHands,
  primaryColor,
  glowColor,
  handIconStyle = 'palm',
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
  const isFramelessHand = Boolean(customHandImageUrl) || handIconStyle === 'palm';
  const PodIcon =
    handIconStyle === 'one-finger'
      ? Pointer
      : handIconStyle === 'fingerprint'
        ? Fingerprint
        : Hand;

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
              style={
                isFramelessHand
                  ? {
                      width: `${effectiveSize}px`,
                      height: `${effectiveSize}px`,
                      transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                    }
                  : {
                      width: `${effectiveSize}px`,
                      height: `${effectiveSize}px`,
                      borderColor: isLit ? '#ffffff' : activeColor,
                      boxShadow: isLit
                        ? `0 0 46px ${activeColor}, 0 0 90px ${activeColor}99, inset 0 0 32px ${activeColor}`
                        : `0 0 22px ${activeColor}55, inset 0 0 14px ${activeColor}33`,
                      transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                    }
              }
              className={`relative flex flex-col items-center justify-center transition-all duration-300 cursor-pointer select-none ${
                isFramelessHand
                  ? isLit
                    ? 'scale-115'
                    : 'hover:scale-105'
                  : `rounded-full border-2 ${
                      isLit
                        ? 'scale-110 bg-white/25 animate-pulse-glow'
                        : 'bg-black/55 hover:scale-105'
                    }`
              }`}
              aria-label={`Bục chạm ${id}`}
            >
              {!isFramelessHand && (
                <>
                  {/* Expanding ripple halo on active touch */}
                  {isLit && (
                    <span
                      className="absolute -inset-2 rounded-full border opacity-60 animate-ping pointer-events-none"
                      style={{ borderColor: activeColor, animationDuration: '1.6s' }}
                    />
                  )}

                  {/* Outer dashed holographic ring (clockwise) */}
                  <span
                    className="absolute inset-1.5 rounded-full border border-dashed opacity-80 animate-spin pointer-events-none"
                    style={{
                      borderColor: isLit ? '#ffffff' : activeColor,
                      animationDuration: isLit ? '4.5s' : '14s',
                    }}
                  />

                  {/* Inner dotted tech ring (counter-clockwise) */}
                  <span
                    className="absolute inset-3 rounded-full border border-dotted opacity-55 animate-spin-reverse pointer-events-none"
                    style={{
                      borderColor: isLit ? '#ffffff' : activeColor,
                      animationDuration: isLit ? '7s' : '20s',
                    }}
                  />

                  {/* Subtle inner radial sheen */}
                  <span
                    className="absolute inset-4 rounded-full pointer-events-none opacity-35"
                    style={{
                      background: `radial-gradient(circle, ${activeColor}44 0%, transparent 72%)`,
                    }}
                  />
                </>
              )}

              {customHandImageUrl ? (
                <img
                  src={customHandImageUrl}
                  alt={`Bàn tay ${id}`}
                  style={{
                    width: Math.round(effectiveSize * 0.86),
                    height: Math.round(effectiveSize * 0.86),
                    filter: isLit
                      ? `drop-shadow(0 0 22px ${activeColor}) drop-shadow(0 0 42px ${activeColor}) brightness(1.35)`
                      : `drop-shadow(0 0 10px ${activeColor}aa)`,
                  }}
                  className="object-contain transition-all duration-300 pointer-events-none"
                />
              ) : (
                <PodIcon
                  style={{
                    width: Math.round(
                      effectiveSize * (isFramelessHand ? 0.76 : 0.44)
                    ),
                    height: Math.round(
                      effectiveSize * (isFramelessHand ? 0.76 : 0.44)
                    ),
                    color: isLit ? '#ffffff' : activeColor,
                    filter: isLit
                      ? `drop-shadow(0 0 18px ${activeColor}) drop-shadow(0 0 36px ${activeColor})`
                      : isFramelessHand
                        ? `drop-shadow(0 0 10px ${activeColor}99)`
                        : 'none',
                  }}
                  className="transition-all duration-200"
                />
              )}
            </button>

            {showPodLabels && (
              <span
                className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-black/70 border"
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
