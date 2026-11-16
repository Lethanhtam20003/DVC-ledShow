import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  Monitor,
  MonitorPlay,
  Play,
  RotateCcw,
  Sliders,
  Sparkles,
  Trophy,
  Upload,
  Volume2,
} from 'lucide-react';
import StageViewport from '../../stage/components/StageViewport';
import { getPatternById } from '../../shared/patterns';
import { extractYouTubeId } from '../../shared/ceremonyStore';
import { ceremonyAudio } from '../../shared/audioEngine';

export default function SetupWorkspace({
  open,
  config,
  onChange,
  onClose,
  onLaunchStage,
  onRemoteCommand,
}) {
  const [activeTab, setActiveTab] = useState('event');
  const [demoPhase, setDemoPhase] = useState('standby'); // 'standby' | 'charging' | 'celebration'
  const [demoProgress, setDemoProgress] = useState(0);
  const [demoCountdown, setDemoCountdown] = useState(5);
  const [demoFlash, setDemoFlash] = useState(false);
  const [demoHands, setDemoHands] = useState(() => new Set());

  const timerRef = useRef(null);
  const lastSecRef = useRef(5);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    ceremonyAudio.configure({
      volume: config.masterVolume,
      enabled: config.audioEnabled,
    });
  }, [config.masterVolume, config.audioEnabled]);

  useEffect(() => {
    if (!open) {
      stopTimer();
      setDemoPhase('standby');
      setDemoProgress(0);
      setDemoHands(new Set());
    }
    return () => stopTimer();
  }, [open, stopTimer]);

  const runDemoCeremony = useCallback(() => {
    stopTimer();
    setDemoPhase('charging');
    setDemoProgress(0);
    const duration = config.chargeDuration || 5000;
    const totalSecs = Math.round(duration / 1000);
    lastSecRef.current = totalSecs;
    setDemoCountdown(totalSecs);
    ceremonyAudio.playCountdownBeep(totalSecs);

    const start = performance.now();
    timerRef.current = setInterval(() => {
      const elapsed = performance.now() - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setDemoProgress(pct);

      const remain = Math.max(1, Math.ceil((duration - elapsed) / 1000));
      if (remain !== lastSecRef.current && elapsed < duration) {
        lastSecRef.current = remain;
        setDemoCountdown(remain);
        ceremonyAudio.playCountdownBeep(remain);
      }

      if (pct >= 100) {
        stopTimer();
        setDemoFlash(true);
        ceremonyAudio.playFanfare();
        setTimeout(() => {
          setDemoFlash(false);
          setDemoPhase('celebration');
        }, 280);
      }
    }, 30);
  }, [config.chargeDuration, stopTimer]);

  const resetDemo = useCallback(() => {
    stopTimer();
    setDemoPhase('standby');
    setDemoProgress(0);
    setDemoFlash(false);
    setDemoHands(new Set());
  }, [stopTimer]);

  const switchDemoPhase = (targetPhase) => {
    stopTimer();
    setDemoFlash(false);
    setDemoHands(new Set());
    if (targetPhase === 'charging') {
      setDemoPhase('charging');
      setDemoProgress(55);
      setDemoCountdown(3);
    } else if (targetPhase === 'celebration') {
      setDemoPhase('celebration');
      setDemoProgress(100);
    } else {
      setDemoPhase('standby');
      setDemoProgress(0);
    }
  };

  const handleDemoHandDown = (id) => {
    if (demoPhase !== 'standby') return;
    ceremonyAudio.playTouchChime();
    setDemoHands((prev) => {
      const next = new Set(prev);
      next.add(id);
      if (next.size >= config.handCount) {
        setTimeout(() => runDemoCeremony(), 60);
      }
      return next;
    });
  };

  const handleDemoHandUp = (id) => {
    setDemoHands((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onChange({ customLogoData: reader.result });
    reader.readAsDataURL(file);
  };

  if (!open) return null;

  const pattern = getPatternById(config.patternId);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col">
      {/* Top Studio Header */}
      <header className="h-16 px-6 border-b border-slate-800 bg-slate-950/95 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-200 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại Lưới Mẫu
          </button>
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-white">
              Thiết Lập & Demo Trực Quan
            </div>
            <div className="text-[11px] text-amber-300">{pattern.name}</div>
          </div>
        </div>

        <button
          type="button"
          onClick={onLaunchStage}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/20 cursor-pointer"
        >
          <MonitorPlay className="w-4 h-4" />
          Mở Màn Hình Trình Chiếu LED
        </button>
      </header>

      {/* Split Workspace */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT PANE: Live 16:9 3D Demo + Direct Controls */}
        <div className="lg:col-span-7 xl:col-span-8 p-5 lg:p-7 flex flex-col justify-center bg-slate-900/40 border-b lg:border-b-0 lg:border-r border-slate-800 overflow-y-auto">
          <div className="w-full max-w-4xl mx-auto space-y-4">
            {/* Live Preview Header & Quick State Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Demo Sân Khấu 16:9 (Tương tác trực tiếp)
                </span>
              </div>

              <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
                {[
                  { id: 'standby', label: 'Màn hình Chờ' },
                  { id: 'charging', label: 'Đếm ngược' },
                  { id: 'celebration', label: 'Màn Vinh danh' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => switchDemoPhase(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      demoPhase === item.id
                        ? 'bg-amber-400 text-slate-950'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 16:9 Scaled StageViewport */}
            <StageViewport
              isPreview
              config={config}
              phase={demoPhase}
              progress={demoProgress}
              countdownSec={demoCountdown}
              flashActive={demoFlash}
              activeHands={demoHands}
              onActivateHand={handleDemoHandDown}
              onDeactivateHand={handleDemoHandUp}
            />

            {/* Demo Action & Remote Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={runDemoCeremony}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Chạy thử nghi thức
                </button>
                <button
                  type="button"
                  onClick={resetDemo}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Demo
                </button>
                <button
                  type="button"
                  onClick={() => ceremonyAudio.playFanfare()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  Thử âm thanh
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400">Gửi sang màn LED thật:</span>
                <button
                  type="button"
                  onClick={() => onRemoteCommand('CMD_START')}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 cursor-pointer"
                >
                  Kích hoạt Stage
                </button>
                <button
                  type="button"
                  onClick={() => onRemoteCommand('CMD_PREVIEW_CELEBRATION')}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-amber-300 hover:bg-slate-700 cursor-pointer"
                >
                  <Trophy className="w-3.5 h-3.5" /> Vinh danh
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANE: Configuration Tabs */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col min-h-0 bg-slate-950">
          <div className="px-6 pt-5 pb-3 border-b border-slate-800 flex gap-2 shrink-0">
            {[
              { id: 'event', label: 'Sự Kiện & Logo', icon: Sparkles },
              { id: 'pods', label: 'Bục Chạm & 3D', icon: Sliders },
              { id: 'media', label: 'Video & Độ Sáng', icon: Monitor },
            ].map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                    active
                      ? 'bg-amber-400 text-slate-950'
                      : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {activeTab === 'event' && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Tiêu đề Vinh Danh (Hiện khi kích hoạt xong)
                  </label>
                  <input
                    type="text"
                    value={config.celebrationTitle}
                    onChange={(e) => {
                      onChange({ celebrationTitle: e.target.value });
                      if (demoPhase === 'standby') switchDemoPhase('celebration');
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Khẩu hiệu Vinh Danh
                  </label>
                  <input
                    type="text"
                    value={config.celebrationDesc}
                    onChange={(e) => {
                      onChange({ celebrationDesc: e.target.value });
                      if (demoPhase === 'standby') switchDemoPhase('celebration');
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Logo Đơn Vị (PNG nền trong suốt)
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400 text-xs font-semibold text-slate-200 cursor-pointer">
                      <Upload className="w-4 h-4 text-amber-400" />
                      Tải ảnh Logo
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          handleLogoUpload(e);
                          switchDemoPhase('celebration');
                        }}
                        className="hidden"
                      />
                    </label>
                    {config.customLogoData && (
                      <button
                        type="button"
                        onClick={() => onChange({ customLogoData: null })}
                        className="text-xs text-rose-400 hover:underline cursor-pointer"
                      >
                        Xóa Logo
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Hiện tiêu đề đầu màn hình chờ
                    </div>
                    <div className="text-xs text-slate-400">
                      Tắt để sân khấu 3D thoáng sạch trước khi kích hoạt
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={config.showHeader}
                    onChange={(e) => {
                      onChange({ showHeader: e.target.checked });
                      switchDemoPhase('standby');
                    }}
                    className="w-4 h-4 accent-amber-400 cursor-pointer"
                  />
                </div>
              </>
            )}

            {activeTab === 'pods' && (
              <>
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                    <span>Số lượng đại biểu (bục chạm)</span>
                    <span className="text-amber-400">{config.handCount} Lãnh đạo</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={12}
                    value={config.handCount}
                    onChange={(e) => {
                      onChange({ handCount: Number(e.target.value) });
                      if (demoPhase === 'celebration') switchDemoPhase('standby');
                    }}
                    className="w-full accent-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Thời gian đếm ngược kích hoạt
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: '3 giây', val: 3000 },
                      { label: '5 giây (Chuẩn)', val: 5000 },
                      { label: '7 giây', val: 7000 },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => onChange({ chargeDuration: opt.val })}
                        className={`py-2 rounded-xl text-xs font-semibold border cursor-pointer ${
                          config.chargeDuration === opt.val
                            ? 'bg-amber-400 text-slate-950 border-amber-400'
                            : 'bg-slate-900 text-slate-300 border-slate-800'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                    <span>Độ cao hàng bục chạm (Pod Y)</span>
                    <span className="text-amber-400">{config.podY}px</span>
                  </div>
                  <input
                    type="range"
                    min={-200}
                    max={60}
                    value={config.podY}
                    onChange={(e) => {
                      onChange({ podY: Number(e.target.value) });
                      if (demoPhase === 'celebration') switchDemoPhase('standby');
                    }}
                    className="w-full accent-amber-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                    <span>Kích thước bục chạm</span>
                    <span className="text-amber-400">{config.podSize}px</span>
                  </div>
                  <input
                    type="range"
                    min={70}
                    max={180}
                    value={config.podSize}
                    onChange={(e) => {
                      onChange({ podSize: Number(e.target.value) });
                      if (demoPhase === 'celebration') switchDemoPhase('standby');
                    }}
                    className="w-full accent-amber-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                    <span>Khoảng cách giữa các bục (Pod Gap)</span>
                    <span className="text-amber-400">{config.podGap}px</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={100}
                    value={config.podGap}
                    onChange={(e) => {
                      onChange({ podGap: Number(e.target.value) });
                      if (demoPhase === 'celebration') switchDemoPhase('standby');
                    }}
                    className="w-full accent-amber-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                    <span>Tỷ lệ khối 3D trung tâm</span>
                    <span className="text-amber-400">{config.coreScale.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min={0.6}
                    max={1.6}
                    step={0.1}
                    value={config.coreScale}
                    onChange={(e) => {
                      onChange({ coreScale: Number(e.target.value) });
                      if (demoPhase === 'celebration') switchDemoPhase('standby');
                    }}
                    className="w-full accent-amber-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                    <span>Độ cao khối 3D trung tâm (Core Y)</span>
                    <span className="text-amber-400">{config.coreY}px</span>
                  </div>
                  <input
                    type="range"
                    min={-150}
                    max={150}
                    value={config.coreY}
                    onChange={(e) => {
                      onChange({ coreY: Number(e.target.value) });
                      if (demoPhase === 'celebration') switchDemoPhase('standby');
                    }}
                    className="w-full accent-amber-400"
                  />
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onChange({
                      podY: -40,
                      podSize: 108,
                      podGap: 36,
                      coreScale: 1.0,
                      coreY: 0,
                    })
                  }
                  className="w-full py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-600 cursor-pointer"
                >
                  Đặt lại vị trí chuẩn mặc định
                </button>
              </>
            )}

            {activeTab === 'media' && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Nguồn Video Nền
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'local', label: 'MP4 Offline' },
                      { id: 'youtube', label: 'YouTube' },
                      { id: 'none', label: 'Chỉ nền 3D' },
                    ].map((src) => (
                      <button
                        key={src.id}
                        type="button"
                        onClick={() =>
                          onChange({
                            videoBgEnabled: src.id !== 'none',
                            videoSource: src.id,
                          })
                        }
                        className={`py-2 rounded-xl text-xs font-semibold border cursor-pointer ${
                          (src.id === 'none' && !config.videoBgEnabled) ||
                          (config.videoBgEnabled && config.videoSource === src.id)
                            ? 'bg-amber-400 text-slate-950 border-amber-400'
                            : 'bg-slate-900 text-slate-300 border-slate-800'
                        }`}
                      >
                        {src.label}
                      </button>
                    ))}
                  </div>
                </div>

                {config.videoBgEnabled && config.videoSource === 'youtube' && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Link hoặc ID YouTube (Mặc định: sbDz4hoZWCk)
                    </label>
                    <input
                      type="text"
                      value={config.youtubeVideoId}
                      onChange={(e) =>
                        onChange({ youtubeVideoId: extractYouTubeId(e.target.value) })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                )}

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                    <span>Độ rõ Video nền</span>
                    <span className="text-amber-400">
                      {Math.round(config.videoOpacity * 100)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0.15}
                    max={1}
                    step={0.05}
                    value={config.videoOpacity}
                    onChange={(e) => onChange({ videoOpacity: Number(e.target.value) })}
                    className="w-full accent-amber-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                    <span>Độ sáng màn LED (Chống cháy sáng mặt)</span>
                    <span className="text-amber-400">{config.screenBrightness}%</span>
                  </div>
                  <input
                    type="range"
                    min={45}
                    max={100}
                    value={config.screenBrightness}
                    onChange={(e) => onChange({ screenBrightness: Number(e.target.value) })}
                    className="w-full accent-amber-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                    <span>Âm lượng tổng (Fanfare & Trống)</span>
                    <span className="text-amber-400">
                      {Math.round(config.masterVolume * 100)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={config.masterVolume}
                    onChange={(e) => onChange({ masterVolume: Number(e.target.value) })}
                    className="w-full accent-amber-400"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

