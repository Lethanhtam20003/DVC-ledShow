import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  Award,
  Box,
  Check,
  Film,
  Hand,
  Loader2,
  MonitorPlay,
  Play,
  RotateCcw,
  Sliders,
  Sun,
  Trash2,
  Trophy,
  Upload,
  Volume2,
} from 'lucide-react';
import StageViewport from '../../stage/components/StageViewport';
import { getPatternById } from '../../shared/patterns';
import { BUILTIN_3D_MODELS } from '../../shared/models3d';
import { extractYouTubeId } from '../../shared/ceremonyStore';
import { ceremonyAudio } from '../../shared/audioEngine';
import {
  deleteCustom3dModel,
  deleteMediaBlob,
  listCustom3dModels,
  loadAllCustomMediaUrls,
  saveCustom3dModel,
  saveMediaBlob,
} from '../../shared/mediaStorage';

const GLOW_PRESETS = [
  { label: 'Vàng Kim', color: '#f5c542' },
  { label: 'Xanh Cyan', color: '#38bdf8' },
  { label: 'Đỏ Lễ Tiết', color: '#ef4444' },
  { label: 'Bạch Kim', color: '#ffffff' },
];

function formatFileSize(bytes) {
  if (!Number.isFinite(bytes) || bytes < 0) return '0 B';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export default function SetupWorkspace({
  open,
  config,
  onChange,
  onClose,
  onLaunchStage,
  onRemoteCommand,
  onMediaUpdated,
}) {
  const [activeTab, setActiveTab] = useState('custom');
  const [demoPhase, setDemoPhase] = useState('standby'); // 'standby' | 'charging' | 'celebration'
  const [demoProgress, setDemoProgress] = useState(0);
  const [demoCountdown, setDemoCountdown] = useState(5);
  const [demoFlash, setDemoFlash] = useState(false);
  const [demoHands, setDemoHands] = useState(() => new Set());
  const [mediaUrls, setMediaUrls] = useState({
    customHandImageUrl: null,
    customBgVideoUrl: null,
    customActivationVideoUrl: null,
    customBgAudioUrl: null,
    customFanfareAudioUrl: null,
  });
  const [custom3dModels, setCustom3dModels] = useState([]);
  const [model3dUploading, setModel3dUploading] = useState(false);
  const [model3dError, setModel3dError] = useState('');

  const timerRef = useRef(null);
  const lastSecRef = useRef(5);
  const custom3dUrlsRef = useRef([]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const refreshMedia = useCallback(async () => {
    const urls = await loadAllCustomMediaUrls();
    setMediaUrls(urls);
  }, []);

  const refreshCustom3dModels = useCallback(async () => {
    try {
      const models = await listCustom3dModels();
      const prevUrls = custom3dUrlsRef.current;
      custom3dUrlsRef.current = models.map((m) => m.url).filter(Boolean);
      setCustom3dModels(models);
      prevUrls.forEach((url) => URL.revokeObjectURL(url));
    } catch {
      setCustom3dModels([]);
    }
  }, []);

  useEffect(() => {
    if (open) {
      refreshMedia();
      refreshCustom3dModels();
    }
  }, [open, refreshMedia, refreshCustom3dModels]);

  useEffect(() => {
    return () => {
      custom3dUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
      custom3dUrlsRef.current = [];
    };
  }, []);

  useEffect(() => {
    ceremonyAudio.configure({
      volume: config.masterVolume,
      enabled: config.audioEnabled,
      soundPreset: config.soundPreset,
      touchSoundEnabled: config.touchSoundEnabled,
      touchVolume: config.touchVolume,
      countdownSoundEnabled: config.countdownSoundEnabled,
      countdownVolume: config.countdownVolume,
      fanfareSoundEnabled: config.fanfareSoundEnabled,
      fanfareVolume: config.fanfareVolume,
      bgAudioEnabled: config.bgAudioEnabled,
      bgAudioVolume: config.bgAudioVolume,
      customBgAudioUrl: mediaUrls.customBgAudioUrl,
      customFanfareAudioUrl: mediaUrls.customFanfareAudioUrl,
    });
  }, [
    config.masterVolume,
    config.audioEnabled,
    config.soundPreset,
    config.touchSoundEnabled,
    config.touchVolume,
    config.countdownSoundEnabled,
    config.countdownVolume,
    config.fanfareSoundEnabled,
    config.fanfareVolume,
    config.bgAudioEnabled,
    config.bgAudioVolume,
    mediaUrls.customBgAudioUrl,
    mediaUrls.customFanfareAudioUrl,
  ]);

  useEffect(() => {
    if (!open) {
      stopTimer();
      setDemoPhase('standby');
      setDemoProgress(0);
      setDemoHands(new Set());
    }
    return () => stopTimer();
  }, [open, stopTimer]);

  const completeDemo = useCallback(() => {
    stopTimer();
    setDemoFlash(true);
    ceremonyAudio.playFanfare();
    setTimeout(() => {
      setDemoFlash(false);
      setDemoPhase('celebration');
    }, 280);
  }, [stopTimer]);

  const runDemoCeremony = useCallback(() => {
    stopTimer();
    setDemoPhase('charging');
    setDemoProgress(0);

    // If custom activation video is uploaded, let video's onEnded advance to celebration
    if (mediaUrls.customActivationVideoUrl) {
      return;
    }

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
        completeDemo();
      }
    }, 30);
  }, [config.chargeDuration, mediaUrls.customActivationVideoUrl, stopTimer, completeDemo]);

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

  const handleMediaUpload = async (key, flagKey, file) => {
    if (!file) return;
    await saveMediaBlob(key, file);
    onChange({ [flagKey]: true });
    await refreshMedia();
    onMediaUpdated?.();
  };

  const handleMediaDelete = async (key, flagKey) => {
    await deleteMediaBlob(key);
    onChange({ [flagKey]: false });
    await refreshMedia();
    onMediaUpdated?.();
  };

  const handleCustom3dModelUpload = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;

    const lowerName = (file.name || '').toLowerCase();
    if (!lowerName.endsWith('.glb') && !lowerName.endsWith('.gltf')) {
      setModel3dError('Chỉ hỗ trợ tệp mô hình 3D định dạng .glb hoặc .gltf.');
      return;
    }

    setModel3dError('');
    setModel3dUploading(true);
    try {
      const saved = await saveCustom3dModel(file);
      await refreshCustom3dModels();
      onChange({
        custom3dModelType: 'uploaded',
        custom3dModelId: saved.id,
      });
      onMediaUpdated?.();
    } catch (err) {
      setModel3dError(err?.message || 'Không thể lưu mô hình 3D. Vui lòng thử lại.');
    } finally {
      setModel3dUploading(false);
    }
  };

  const handleCustom3dModelDelete = async (itemId) => {
    setModel3dError('');
    try {
      await deleteCustom3dModel(itemId);
      await refreshCustom3dModels();
      onMediaUpdated?.();
      if (
        config.custom3dModelType === 'uploaded' &&
        config.custom3dModelId === itemId
      ) {
        onChange({
          custom3dModelType: 'preset',
          custom3dModelId: 'crystal-core',
        });
      }
    } catch (err) {
      setModel3dError(err?.message || 'Không thể xóa mô hình 3D. Vui lòng thử lại.');
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      onChange({ customLogoData: reader.result });
      switchDemoPhase('celebration');
    };
    reader.readAsDataURL(file);
  };

  const updatePillar = (idx, field, val) => {
    const next = [...(config.celebrationPillars || [])];
    next[idx] = { ...next[idx], [field]: val };
    onChange({ celebrationPillars: next });
    if (demoPhase !== 'celebration') switchDemoPhase('celebration');
  };

  const updatePodLabel = (idx, val) => {
    const next = [...(config.podLabels || [])];
    next[idx] = val;
    onChange({ podLabels: next });
    if (demoPhase === 'celebration') switchDemoPhase('standby');
  };

  if (!open) return null;

  const pattern = getPatternById(config.patternId);
  const activeCustom3dModelUrl =
    config.patternId === 'custom-ceremony' &&
    config.custom3dModelType === 'uploaded' &&
    config.custom3dModelId
      ? custom3dModels.find((m) => m.id === config.custom3dModelId)?.url || null
      : null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col">
      {/* Top Studio Header */}
      <header className="h-14 px-5 border-b border-slate-800 bg-slate-950/95 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-200 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại Lưới Mẫu
          </button>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-sm font-bold text-white">Thiết Lập & Demo Trực Quan</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/30">
              {pattern.name}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onLaunchStage}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/20 cursor-pointer"
        >
          <MonitorPlay className="w-4 h-4" />
          Mở Màn Hình Trình Chiếu LED
        </button>
      </header>

      {/* Split Workspace */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT PANE: Fits cleanly inside 100vh (Switcher + 16:9 Demo + Control Bar) */}
        <div className="lg:col-span-7 xl:col-span-8 p-4 lg:p-5 flex flex-col justify-between gap-3 bg-slate-900/40 border-b lg:border-b-0 lg:border-r border-slate-800 min-h-0 overflow-hidden">
          {/* Quick Phase Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-2 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Demo Sân Khấu 16:9
              </span>
            </div>

            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
              {[
                { id: 'standby', label: 'Màn hình Chờ' },
                { id: 'charging', label: 'Đếm ngược / Video' },
                { id: 'celebration', label: 'Màn Vinh danh' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => switchDemoPhase(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${demoPhase === item.id
                      ? 'bg-amber-400 text-slate-950'
                      : 'text-slate-400 hover:text-white'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 16:9 Constrained Live Demo Frame */}
          <div className="flex-1 min-h-0 flex items-center justify-center">
            <div
              className="w-full"
              style={{ maxWidth: 'min(100%, calc((100vh - 215px) * 16 / 9))' }}
            >
              <StageViewport
                isPreview
                config={config}
                phase={demoPhase}
                progress={demoProgress}
                countdownSec={demoCountdown}
                flashActive={demoFlash}
                activeHands={demoHands}
                customHandImageUrl={mediaUrls.customHandImageUrl}
                customBgVideoUrl={mediaUrls.customBgVideoUrl}
                customActivationVideoUrl={mediaUrls.customActivationVideoUrl}
                custom3dModelUrl={activeCustom3dModelUrl}
                onActivateHand={handleDemoHandDown}
                onDeactivateHand={handleDemoHandUp}
                onActivationVideoEnded={completeDemo}
              />
            </div>
          </div>

          {/* Demo Action & Remote Control Bar */}
          <div className="shrink-0 flex flex-wrap items-center justify-between gap-2 p-3 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={runDemoCeremony}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                Chạy thử nghi thức
              </button>
              <button
                type="button"
                onClick={resetDemo}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Demo
              </button>
              <button
                type="button"
                onClick={() => ceremonyAudio.playFanfare()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Thử âm thanh
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400 hidden sm:inline">
                Đồng bộ Stage thật:
              </span>
              <button
                type="button"
                onClick={() => onRemoteCommand('CMD_START')}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 cursor-pointer"
              >
                Kích hoạt
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

        {/* RIGHT PANE: 5-Tab Organized Parameter Settings */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col min-h-0 bg-slate-950">
          <div className="px-4 pt-3 pb-2.5 border-b border-slate-800 grid grid-cols-5 gap-1.5 shrink-0">
            {[
              { id: 'custom', label: 'Tay & Video', icon: Hand },
              { id: 'celebration', label: 'Vinh Danh', icon: Award },
              { id: 'pods', label: 'Bục & 3D', icon: Sliders },
              { id: 'stage', label: 'Ánh Sáng', icon: Sun },
              { id: 'audio', label: 'Âm Thanh', icon: Volume2 },
            ].map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl text-[11px] font-semibold transition-colors cursor-pointer ${active
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

          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {/* TAB 1: CUSTOM HAND IMAGE & TRIGGERED/BACKGROUND VIDEOS */}
            {activeTab === 'custom' && (
              <>
                {config.patternId === 'custom-ceremony' && (
                  <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Box className="w-3.5 h-3.5" /> Mô hình 3D trung tâm
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {config.custom3dModelType === 'uploaded'
                          ? 'File .GLB/.GLTF riêng'
                          : config.custom3dModelType === 'none'
                            ? 'Đã tắt 3D'
                            : 'Mẫu 3D có sẵn'}
                      </span>
                    </div>

                    {/* Built-in 3D Preset Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {BUILTIN_3D_MODELS.map((model) => {
                        const isSelected =
                          model.id === 'none'
                            ? config.custom3dModelType === 'none'
                            : config.custom3dModelType !== 'uploaded' &&
                              config.custom3dModelType !== 'none' &&
                              (config.custom3dModelId || 'crystal-core') === model.id;

                        return (
                          <button
                            key={model.id}
                            type="button"
                            onClick={() =>
                              onChange({
                                custom3dModelType:
                                  model.id === 'none' ? 'none' : 'preset',
                                custom3dModelId: model.id,
                              })
                            }
                            className={`text-left p-2.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                              isSelected
                                ? 'border-amber-400 bg-amber-400/10 shadow-[0_0_0_1px_rgba(251,191,36,0.35)]'
                                : 'border-slate-800 bg-slate-950/80 hover:border-slate-700 hover:bg-slate-900'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-1.5">
                              <div className="flex items-center gap-1.5 min-w-0">
                                <span
                                  className="w-2.5 h-2.5 rounded-full shrink-0"
                                  style={{ backgroundColor: model.accentColor }}
                                />
                                <span className="text-[11px] font-bold text-white truncate">
                                  {model.name}
                                </span>
                              </div>
                              {isSelected ? (
                                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                              ) : (
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0">
                                  {model.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] text-slate-400 leading-snug line-clamp-2">
                              {model.subtitle}
                            </p>
                          </button>
                        );
                      })}
                    </div>

                    {/* Personal .glb/.gltf Library Subsection */}
                    <div className="pt-3 border-t border-slate-800 space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <div className="text-xs font-semibold text-slate-200">
                            Thư viện .GLB / .GLTF cá nhân
                          </div>
                          <div className="text-[11px] text-slate-400">
                            Tải lên mô hình 3D riêng để trình chiếu ở trung tâm sân khấu.
                          </div>
                        </div>

                        <label
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold shrink-0 transition-colors ${
                            model3dUploading
                              ? 'bg-slate-800 border-slate-700 text-slate-400 cursor-wait'
                              : 'bg-amber-400/15 hover:bg-amber-400/25 border-amber-400/40 text-amber-200 cursor-pointer'
                          }`}
                        >
                          {model3dUploading ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-400" />
                          ) : (
                            <Upload className="w-3.5 h-3.5 text-amber-400" />
                          )}
                          {model3dUploading ? 'Đang tải...' : 'Tải .GLB / .GLTF'}
                          <input
                            type="file"
                            accept=".glb,.gltf"
                            disabled={model3dUploading}
                            onChange={handleCustom3dModelUpload}
                            className="hidden"
                          />
                        </label>
                      </div>

                      {model3dError && (
                        <div className="px-3 py-2 rounded-xl bg-rose-500/10 border border-rose-500/30 text-[11px] text-rose-300">
                          {model3dError}
                        </div>
                      )}

                      {custom3dModels.length === 0 ? (
                        <div className="px-3 py-3 rounded-xl bg-slate-950/60 border border-dashed border-slate-800 text-[11px] text-slate-500 text-center">
                          Chưa có mô hình .glb/.gltf nào được lưu.
                        </div>
                      ) : (
                        <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                          {custom3dModels.map((item) => {
                            const isActive =
                              config.custom3dModelType === 'uploaded' &&
                              config.custom3dModelId === item.id;

                            return (
                              <div
                                key={item.id}
                                role="button"
                                tabIndex={0}
                                onClick={() =>
                                  onChange({
                                    custom3dModelType: 'uploaded',
                                    custom3dModelId: item.id,
                                  })
                                }
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    onChange({
                                      custom3dModelType: 'uploaded',
                                      custom3dModelId: item.id,
                                    });
                                  }
                                }}
                                className={`flex items-center justify-between gap-2 px-3 py-2 rounded-xl border transition-colors cursor-pointer ${
                                  isActive
                                    ? 'border-amber-400 bg-amber-400/10'
                                    : 'border-slate-800 bg-slate-950/80 hover:border-slate-700'
                                }`}
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <Box
                                    className={`w-4 h-4 shrink-0 ${
                                      isActive ? 'text-amber-400' : 'text-slate-400'
                                    }`}
                                  />
                                  <div className="min-w-0">
                                    <div className="text-xs font-semibold text-white truncate">
                                      {item.name}
                                    </div>
                                    <div className="text-[10px] text-slate-400">
                                      {formatFileSize(item.size)}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                  {isActive && (
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950">
                                      <Check className="w-3 h-3" /> Đang chọn
                                    </span>
                                  )}
                                  <button
                                    type="button"
                                    title="Xóa mô hình 3D"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleCustom3dModelDelete(item.id);
                                    }}
                                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Hand className="w-3.5 h-3.5" /> Ảnh Bàn Tay Chạm Custom
                    </span>
                    {mediaUrls.customHandImageUrl && (
                      <button
                        type="button"
                        onClick={() =>
                          handleMediaDelete('customHandImage', 'hasCustomHandImage')
                        }
                        className="inline-flex items-center gap-1 text-[11px] text-rose-400 hover:underline cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" /> Dùng vân tay mặc định
                      </button>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Tải ảnh bàn tay / nút chạm PNG nền trong suốt. Khi chạm hoặc kích hoạt, bàn tay sẽ phát sáng rực rỡ.
                  </p>
                  <label className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-white cursor-pointer">
                    <Upload className="w-3.5 h-3.5 text-amber-400" />
                    {mediaUrls.customHandImageUrl ? 'Đổi ảnh bàn tay' : 'Tải ảnh bàn tay (PNG/SVG)'}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleMediaUpload(
                          'customHandImage',
                          'hasCustomHandImage',
                          e.target.files?.[0]
                        )
                      }
                      className="hidden"
                    />
                  </label>

                  <div className="pt-2">
                    <div className="text-[11px] font-semibold text-slate-300 mb-2">
                      Màu phát sáng bàn tay khi chạm / chạy video:
                    </div>
                    <div className="grid grid-cols-4 gap-1.5">
                      {GLOW_PRESETS.map((g) => (
                        <button
                          key={g.color}
                          type="button"
                          onClick={() => onChange({ handGlowColor: g.color })}
                          className={`py-1.5 px-2 rounded-lg text-[11px] font-semibold border flex items-center justify-center gap-1.5 cursor-pointer ${config.handGlowColor === g.color
                              ? 'border-white bg-slate-800 text-white'
                              : 'border-slate-800 bg-slate-950 text-slate-400'
                            }`}
                        >
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: g.color }}
                          />
                          {g.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Film className="w-3.5 h-3.5" /> Video Trình Chiếu Khi Bắt Đầu
                    </span>
                    {mediaUrls.customActivationVideoUrl && (
                      <button
                        type="button"
                        onClick={() =>
                          handleMediaDelete(
                            'customActivationVideo',
                            'hasCustomActivationVideo'
                          )
                        }
                        className="inline-flex items-center gap-1 text-[11px] text-rose-400 hover:underline cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" /> Xóa video
                      </button>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Khi nhấn Bắt đầu (hoặc chạm đủ bục), video này sẽ chạy toàn màn hình kèm theo các bàn tay phát sáng, kết thúc tự chuyển sang Màn Vinh danh.
                  </p>
                  <label className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-400/15 hover:bg-amber-400/25 border border-amber-400/40 text-xs font-semibold text-amber-200 cursor-pointer">
                    <Upload className="w-3.5 h-3.5 text-amber-400" />
                    {mediaUrls.customActivationVideoUrl
                      ? 'Đổi Video kích hoạt (MP4)'
                      : 'Tải Video trình chiếu (MP4/WebM)'}
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(e) =>
                        handleMediaUpload(
                          'customActivationVideo',
                          'hasCustomActivationVideo',
                          e.target.files?.[0]
                        )
                      }
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                      Video Chạy Nền (Standby)
                    </span>
                    {mediaUrls.customBgVideoUrl && (
                      <button
                        type="button"
                        onClick={() =>
                          handleMediaDelete('customBgVideo', 'hasCustomBgVideo')
                        }
                        className="inline-flex items-center gap-1 text-[11px] text-rose-400 hover:underline cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" /> Xóa video riêng
                      </button>
                    )}
                  </div>
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
                        className={`py-2 rounded-xl text-xs font-semibold border cursor-pointer ${(src.id === 'none' && !config.videoBgEnabled) ||
                            (config.videoBgEnabled && config.videoSource === src.id)
                            ? 'bg-amber-400 text-slate-950 border-amber-400'
                            : 'bg-slate-950 text-slate-300 border-slate-800'
                          }`}
                      >
                        {src.label}
                      </button>
                    ))}
                  </div>

                  <label className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-white cursor-pointer">
                    <Upload className="w-3.5 h-3.5 text-sky-400" />
                    {mediaUrls.customBgVideoUrl
                      ? 'Đổi Video nền riêng'
                      : 'Tải Video nền riêng (MP4)'}
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(e) =>
                        handleMediaUpload(
                          'customBgVideo',
                          'hasCustomBgVideo',
                          e.target.files?.[0]
                        )
                      }
                      className="hidden"
                    />
                  </label>

                  {config.videoBgEnabled &&
                    config.videoSource === 'youtube' &&
                    !mediaUrls.customBgVideoUrl && (
                      <input
                        type="text"
                        placeholder="Link hoặc ID YouTube (Mặc định: sbDz4hoZWCk)"
                        value={config.youtubeVideoId}
                        onChange={(e) =>
                          onChange({ youtubeVideoId: extractYouTubeId(e.target.value) })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    )}
                </div>
              </>
            )}

            {/* TAB 2: CELEBRATION / HONORING PAGE SETTINGS */}
            {activeTab === 'celebration' && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Dải Ribbon phía trên
                  </label>
                  <input
                    type="text"
                    value={config.celebrationRibbon || ''}
                    onChange={(e) => {
                      onChange({ celebrationRibbon: e.target.value });
                      if (demoPhase !== 'celebration') switchDemoPhase('celebration');
                    }}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Tiêu đề chính Trang Vinh Danh
                  </label>
                  <input
                    type="text"
                    value={config.celebrationTitle}
                    onChange={(e) => {
                      onChange({ celebrationTitle: e.target.value });
                      if (demoPhase !== 'celebration') switchDemoPhase('celebration');
                    }}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Khẩu hiệu / Thông điệp
                  </label>
                  <input
                    type="text"
                    value={config.celebrationDesc}
                    onChange={(e) => {
                      onChange({ celebrationDesc: e.target.value });
                      if (demoPhase !== 'celebration') switchDemoPhase('celebration');
                    }}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Tông màu chữ Vinh danh
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'match-pattern', label: 'Theo Mẫu' },
                      { id: 'royal-gold', label: 'Vàng Đỏ' },
                      { id: 'tech-cyan', label: 'Xanh Số' },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => {
                          onChange({ celebrationTheme: t.id });
                          switchDemoPhase('celebration');
                        }}
                        className={`py-2 rounded-xl text-xs font-semibold border cursor-pointer ${config.celebrationTheme === t.id
                            ? 'bg-amber-400 text-slate-950 border-amber-400'
                            : 'bg-slate-900 text-slate-300 border-slate-800'
                          }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-200">
                      Logo Đơn Vị
                    </span>
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
                  <label className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-white cursor-pointer">
                    <Upload className="w-3.5 h-3.5 text-amber-400" />
                    Tải ảnh Logo (PNG)
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                  </label>
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                      <span>Kích thước Logo</span>
                      <span className="text-amber-400">{config.logoSize || 112}px</span>
                    </div>
                    <input
                      type="range"
                      min={72}
                      max={220}
                      value={config.logoSize || 112}
                      onChange={(e) => {
                        onChange({ logoSize: Number(e.target.value) });
                        if (demoPhase !== 'celebration') switchDemoPhase('celebration');
                      }}
                      className="w-full accent-amber-400"
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white">
                      Hiển thị 3 Thẻ Trụ Cột / Thông Điệp
                    </span>
                    <input
                      type="checkbox"
                      checked={config.showCelebrationPillars !== false}
                      onChange={(e) => {
                        onChange({ showCelebrationPillars: e.target.checked });
                        switchDemoPhase('celebration');
                      }}
                      className="w-4 h-4 accent-amber-400 cursor-pointer"
                    />
                  </div>
                  {config.showCelebrationPillars !== false &&
                    (config.celebrationPillars || []).map((pillar, idx) => (
                      <div key={idx} className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={pillar.title}
                          onChange={(e) => updatePillar(idx, 'title', e.target.value)}
                          placeholder={`Tiêu đề ${idx + 1}`}
                          className="px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
                        />
                        <input
                          type="text"
                          value={pillar.desc}
                          onChange={(e) => updatePillar(idx, 'desc', e.target.value)}
                          placeholder={`Mô tả ${idx + 1}`}
                          className="px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300"
                        />
                      </div>
                    ))}
                </div>
              </>
            )}

            {/* TAB 3: TOUCH PODS & 3D POSITIONING */}
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
                    Thời gian đếm ngược (khi không dùng Video kích hoạt)
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
                        className={`py-2 rounded-xl text-xs font-semibold border cursor-pointer ${config.chargeDuration === opt.val
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
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
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
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
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
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
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
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
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
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                    <span>Độ cao khối 3D (Core Y)</span>
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

                <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white">
                      Hiện nhãn tên dưới mỗi bàn tay
                    </span>
                    <input
                      type="checkbox"
                      checked={config.showPodLabels !== false}
                      onChange={(e) => onChange({ showPodLabels: e.target.checked })}
                      className="w-4 h-4 accent-amber-400 cursor-pointer"
                    />
                  </div>
                  {config.showPodLabels !== false && (
                    <div className="grid grid-cols-2 gap-1.5">
                      {Array.from({ length: Math.min(config.handCount, 8) }, (_, i) => (
                        <input
                          key={i}
                          type="text"
                          value={(config.podLabels || [])[i] ?? `Đại biểu ${i + 1}`}
                          onChange={(e) => updatePodLabel(i, e.target.value)}
                          className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-200"
                        />
                      ))}
                    </div>
                  )}
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

            {/* TAB 4: BRIGHTNESS & HEADER */}
            {activeTab === 'stage' && (
              <>
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

                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800">
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Tự dịu sáng khi Vinh danh (Photo-Op)
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Giữ tối đa 72% để chụp ảnh lãnh đạo không bị lóa
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={config.autoPhotoOpDim}
                    onChange={(e) => onChange({ autoPhotoOpDim: e.target.checked })}
                    className="w-4 h-4 accent-amber-400 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800">
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Hiện tiêu đề đầu màn hình chờ
                    </div>
                    <div className="text-[11px] text-slate-400">
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

            {/* TAB 5: AUDIO SETTINGS */}
            {activeTab === 'audio' && (
              <>
                <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-white">
                        Bật hệ thống âm thanh sân khấu
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Phím tắt nhanh trên Stage: M
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={config.audioEnabled !== false}
                      onChange={(e) => onChange({ audioEnabled: e.target.checked })}
                      className="w-4 h-4 accent-amber-400 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                      <span>Âm lượng tổng (Master Out)</span>
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

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phong cách âm thanh tổng hợp
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[
                        { id: 'ceremony', label: 'Khánh tiết' },
                        { id: 'tech', label: 'Công nghệ' },
                        { id: 'minimal', label: 'Tối giản' },
                      ].map((preset) => (
                        <button
                          key={preset.id}
                          type="button"
                          onClick={() => onChange({ soundPreset: preset.id })}
                          className={`py-2 rounded-xl text-xs font-semibold border cursor-pointer ${
                            (config.soundPreset || 'ceremony') === preset.id
                              ? 'bg-amber-400 text-slate-950 border-amber-400'
                              : 'bg-slate-950 text-slate-300 border-slate-800'
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Per-event audio controls */}
                <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3.5">
                  <div className="text-xs font-bold text-amber-300">
                    Âm lượng & Nghe thử từng hiệu ứng
                  </div>

                  {/* Touch Chime */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <label className="flex items-center gap-2 text-xs text-slate-200 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={config.touchSoundEnabled !== false}
                          onChange={(e) =>
                            onChange({ touchSoundEnabled: e.target.checked })
                          }
                          className="w-3.5 h-3.5 accent-amber-400"
                        />
                        Âm chạm bục tay ({Math.round((config.touchVolume ?? 0.85) * 100)}%)
                      </label>
                      <button
                        type="button"
                        onClick={() => ceremonyAudio.playTouchChime()}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-800 hover:bg-slate-700 text-amber-300 cursor-pointer"
                      >
                        Nghe thử
                      </button>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.05}
                      value={config.touchVolume ?? 0.85}
                      onChange={(e) => onChange({ touchVolume: Number(e.target.value) })}
                      className="w-full accent-amber-400"
                    />
                  </div>

                  {/* Countdown Beep */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <label className="flex items-center gap-2 text-xs text-slate-200 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={config.countdownSoundEnabled !== false}
                          onChange={(e) =>
                            onChange({ countdownSoundEnabled: e.target.checked })
                          }
                          className="w-3.5 h-3.5 accent-amber-400"
                        />
                        Âm đếm ngược ({Math.round((config.countdownVolume ?? 0.9) * 100)}%)
                      </label>
                      <button
                        type="button"
                        onClick={() => ceremonyAudio.playCountdownBeep(3)}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-800 hover:bg-slate-700 text-amber-300 cursor-pointer"
                      >
                        Nghe thử
                      </button>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.05}
                      value={config.countdownVolume ?? 0.9}
                      onChange={(e) =>
                        onChange({ countdownVolume: Number(e.target.value) })
                      }
                      className="w-full accent-amber-400"
                    />
                  </div>

                  {/* Fanfare */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <label className="flex items-center gap-2 text-xs text-slate-200 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={config.fanfareSoundEnabled !== false}
                          onChange={(e) =>
                            onChange({ fanfareSoundEnabled: e.target.checked })
                          }
                          className="w-3.5 h-3.5 accent-amber-400"
                        />
                        Nhạc Vinh danh ({Math.round((config.fanfareVolume ?? 1.0) * 100)}%)
                      </label>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => ceremonyAudio.playFanfare()}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-800 hover:bg-slate-700 text-amber-300 cursor-pointer"
                        >
                          Nghe thử
                        </button>
                        <button
                          type="button"
                          onClick={() => onRemoteCommand?.('CMD_TEST_AUDIO')}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-amber-400/15 border border-amber-400/40 hover:bg-amber-400/25 text-amber-300 cursor-pointer"
                        >
                          Thử Stage
                        </button>
                      </div>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.05}
                      value={config.fanfareVolume ?? 1.0}
                      onChange={(e) => onChange({ fanfareVolume: Number(e.target.value) })}
                      className="w-full accent-amber-400"
                    />
                  </div>
                </div>

                {/* Custom MP3/WAV Uploads */}
                <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-white">
                    Tệp Âm Thanh Tùy Chỉnh (MP3 / WAV)
                  </div>

                  {/* Custom Background Music */}
                  <div className="space-y-2 pb-2.5 border-b border-slate-800/80">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-200">
                        Nhạc nền màn hình chờ
                      </span>
                      <input
                        type="checkbox"
                        checked={Boolean(config.bgAudioEnabled)}
                        onChange={(e) => onChange({ bgAudioEnabled: e.target.checked })}
                        className="w-4 h-4 accent-amber-400 cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <label className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 hover:border-amber-400 text-xs font-semibold text-slate-200 cursor-pointer">
                        <Upload className="w-3.5 h-3.5 text-amber-400" />
                        {mediaUrls.customBgAudioUrl
                          ? 'Đổi nhạc nền'
                          : 'Tải nhạc nền MP3/WAV'}
                        <input
                          type="file"
                          accept="audio/*"
                          onChange={(e) =>
                            handleMediaUpload(
                              'customBgAudio',
                              'hasCustomBgAudio',
                              e.target.files?.[0]
                            )
                          }
                          className="hidden"
                        />
                      </label>
                      {mediaUrls.customBgAudioUrl && (
                        <button
                          type="button"
                          onClick={() =>
                            handleMediaDelete('customBgAudio', 'hasCustomBgAudio')
                          }
                          className="p-2 rounded-xl bg-rose-500/15 text-rose-400 hover:bg-rose-500/25 cursor-pointer"
                          title="Xóa nhạc nền"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Âm lượng nhạc nền</span>
                      <span className="text-amber-400">
                        {Math.round((config.bgAudioVolume ?? 0.45) * 100)}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.05}
                      value={config.bgAudioVolume ?? 0.45}
                      onChange={(e) =>
                        onChange({ bgAudioVolume: Number(e.target.value) })
                      }
                      className="w-full accent-amber-400"
                    />
                  </div>

                  {/* Custom Fanfare Music */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-slate-200">
                      Nhạc Vinh danh riêng (thay kèn đồng mặc định)
                    </div>
                    <div className="flex items-center gap-2">
                      <label className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 hover:border-amber-400 text-xs font-semibold text-slate-200 cursor-pointer">
                        <Upload className="w-3.5 h-3.5 text-amber-400" />
                        {mediaUrls.customFanfareAudioUrl
                          ? 'Đổi nhạc Vinh danh'
                          : 'Tải nhạc Vinh danh MP3/WAV'}
                        <input
                          type="file"
                          accept="audio/*"
                          onChange={(e) =>
                            handleMediaUpload(
                              'customFanfareAudio',
                              'hasCustomFanfareAudio',
                              e.target.files?.[0]
                            )
                          }
                          className="hidden"
                        />
                      </label>
                      {mediaUrls.customFanfareAudioUrl && (
                        <button
                          type="button"
                          onClick={() =>
                            handleMediaDelete(
                              'customFanfareAudio',
                              'hasCustomFanfareAudio'
                            )
                          }
                          className="p-2 rounded-xl bg-rose-500/15 text-rose-400 hover:bg-rose-500/25 cursor-pointer"
                          title="Xóa nhạc Vinh danh"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800">
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Tắt tiếng gốc của Video kích hoạt
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Bật nếu dùng âm thanh từ bàn Mixer ngoài hoặc Web Audio
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={config.activationVideoMuted !== false}
                    onChange={(e) =>
                      onChange({ activationVideoMuted: e.target.checked })
                    }
                    className="w-4 h-4 accent-amber-400 cursor-pointer"
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
