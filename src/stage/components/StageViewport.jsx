import React, { useEffect, useRef, useState } from 'react';
import ThreeStage from './ThreeStage';
import TouchPods from './TouchPods';
import Celebration from './Celebration';
import { getPatternById } from '../../shared/patterns';
import { extractYouTubeId } from '../../shared/ceremonyStore';

const LOCAL_VIDEO_SRC = './Background Trống Đồng Bản Đồ Việt Nam - I Love Viet Nam - YouTube.mp4';

function StageContent({
  config,
  phase,
  progress,
  countdownSec,
  flashActive,
  activeHands,
  onActivateHand,
  onDeactivateHand,
}) {
  const pattern = getPatternById(config.patternId);
  const effectiveBrightness =
    phase === 'celebration' && config.autoPhotoOpDim
      ? Math.min(config.screenBrightness, 72)
      : config.screenBrightness;

  const ytId = extractYouTubeId(config.youtubeVideoId);

  return (
    <div
      className="relative w-full h-full overflow-hidden select-none"
      style={{
        background: `radial-gradient(circle at 50% 40%, ${pattern.colors.bgTop}, ${pattern.colors.bgBottom} 80%)`,
        filter: `brightness(${effectiveBrightness / 100})`,
        transition: 'filter 0.5s ease',
      }}
    >
      {/* Background Video Layer */}
      {config.videoBgEnabled && config.videoSource === 'local' && (
        <video
          src={LOCAL_VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          style={{ opacity: config.videoOpacity }}
        />
      )}

      {config.videoBgEnabled && config.videoSource === 'youtube' && (
        <div
          className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
          style={{ opacity: config.videoOpacity }}
        >
          <iframe
            title="Video Nền YouTube"
            src={`https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&playsinline=1&rel=0&showinfo=0`}
            className="w-[130%] h-[130%] -ml-[15%] -mt-[15%] pointer-events-none"
            allow="autoplay; encrypted-media"
          />
        </div>
      )}

      {/* Tint Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ backgroundColor: `rgba(0,0,0,${config.tintDarkness})` }}
      />

      {/* 3D WebGL Stage Engine */}
      <ThreeStage
        patternId={config.patternId}
        phase={phase}
        progress={progress}
        coreY={config.coreY}
        coreScale={config.coreScale}
      />

      {/* Optional Header (Hidden by default & during celebration) */}
      {config.showHeader && phase !== 'celebration' && (
        <header className="absolute top-8 inset-x-0 z-20 text-center px-6 pointer-events-none">
          <div
            className="inline-block px-5 py-1.5 rounded-full border text-sm font-bold tracking-[0.2em] uppercase mb-3 backdrop-blur-md"
            style={{
              borderColor: `${pattern.colors.primary}88`,
              color: pattern.colors.accent,
              backgroundColor: 'rgba(0,0,0,0.4)',
            }}
          >
            {config.eventBadge}
          </div>
          <h1
            className={`text-4xl lg:text-5xl font-black uppercase tracking-wide ${
              pattern.id === 'holo-globe' ? 'cyan-3d-text' : 'gold-3d-text'
            }`}
          >
            {config.eventTitle}
          </h1>
          <p className="mt-1.5 text-base font-medium tracking-[0.15em] uppercase text-white/80">
            {config.eventSubtitle}
          </p>
        </header>
      )}

      {/* 3D Countdown Overlay during Charging */}
      {phase === 'charging' && (
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          <div
            key={countdownSec}
            className={`text-[11rem] md:text-[13rem] font-black leading-none animate-count-pop ${
              pattern.id === 'holo-globe' ? 'cyan-3d-text' : 'gold-3d-text'
            }`}
          >
            {countdownSec}
          </div>
        </div>
      )}

      {/* Touch Pedestals (Hidden during Celebration) */}
      <TouchPods
        handCount={config.handCount}
        podY={config.podY}
        podSize={config.podSize}
        podGap={config.podGap}
        activeHands={activeHands}
        primaryColor={pattern.colors.primary}
        visible={phase !== 'celebration'}
        onActivateHand={onActivateHand}
        onDeactivateHand={onDeactivateHand}
      />

      {/* Formal Photo-Op Celebration Screen */}
      <Celebration
        config={config}
        pattern={pattern}
        visible={phase === 'celebration'}
      />

      {/* Climax Transition Flash */}
      <div
        className={`absolute inset-0 z-50 pointer-events-none transition-opacity duration-300 ${
          flashActive ? 'opacity-90' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(circle, #ffffff 0%, ${pattern.colors.accent} 60%, transparent 100%)`,
        }}
      />
    </div>
  );
}

export default function StageViewport({ isPreview = false, ...props }) {
  const wrapperRef = useRef(null);
  const [scale, setScale] = useState(0.45);

  useEffect(() => {
    if (!isPreview || !wrapperRef.current) return;
    const el = wrapperRef.current;
    const updateScale = () => {
      const w = el.clientWidth;
      if (w > 0) setScale(w / 1920);
    };
    updateScale();
    const ro = new ResizeObserver(updateScale);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isPreview]);

  if (!isPreview) {
    return (
      <div className="relative w-screen h-screen overflow-hidden">
        <StageContent {...props} />
      </div>
    );
  }

  return (
    <div
      ref={wrapperRef}
      className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-black"
    >
      <div
        className="origin-top-left"
        style={{
          width: '1920px',
          height: '1080px',
          transform: `scale(${scale})`,
        }}
      >
        <StageContent {...props} />
      </div>
    </div>
  );
}

