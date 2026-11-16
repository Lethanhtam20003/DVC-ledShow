import React from 'react';
import { Fingerprint } from 'lucide-react';

export default function TouchPods({
  handCount,
  podY,
  podSize,
  podGap,
  activeHands,
  primaryColor,
  visible,
  onActivateHand,
  onDeactivateHand,
}) {
  if (!visible) return null;

  const autoScale = handCount > 8 ? 0.78 : handCount > 6 ? 0.88 : 1;
  const effectiveSize = Math.round(podSize * autoScale);
  const effectiveGap = Math.round(podGap * autoScale);

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
        const isActive = activeHands.has(id);
        return (
          <button
            key={id}
            type="button"
            onMouseDown={() => onActivateHand(id)}
            onMouseUp={() => onDeactivateHand(id)}
            onMouseLeave={() => onDeactivateHand(id)}
            onTouchStart={(e) => {
              e.preventDefault();
              onActivateHand(id);
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              onDeactivateHand(id);
            }}
            onTouchCancel={() => onDeactivateHand(id)}
            style={{
              width: `${effectiveSize}px`,
              height: `${effectiveSize}px`,
              borderColor: isActive ? '#ffffff' : primaryColor,
              boxShadow: isActive
                ? `0 0 36px ${primaryColor}, inset 0 0 24px ${primaryColor}`
                : `0 0 18px ${primaryColor}55, inset 0 0 12px ${primaryColor}33`,
            }}
            className={`relative rounded-full border-2 flex flex-col items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer select-none ${
              isActive ? 'scale-110 bg-white/20' : 'bg-black/45 hover:scale-105'
            }`}
            aria-label={`Bục chạm ${id}`}
          >
            <span
              className="absolute inset-1.5 rounded-full border border-dashed opacity-70 animate-spin"
              style={{ borderColor: primaryColor, animationDuration: '14s' }}
            />
            <Fingerprint
              style={{
                width: Math.round(effectiveSize * 0.42),
                height: Math.round(effectiveSize * 0.42),
                color: isActive ? '#ffffff' : primaryColor,
              }}
              className="transition-transform duration-200"
            />
            <span
              className="mt-1 text-[11px] font-semibold tracking-wider uppercase opacity-80"
              style={{ color: isActive ? '#ffffff' : primaryColor }}
            >
              {id}
            </span>
          </button>
        );
      })}
    </div>
  );
}

