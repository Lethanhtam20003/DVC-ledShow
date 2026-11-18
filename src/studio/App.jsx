import React, { useEffect, useRef, useState } from 'react';
import {
  Bookmark,
  Check,
  Layers,
  MonitorPlay,
  Plus,
  RotateCcw,
  Save,
  SlidersHorizontal,
  Trash2,
} from 'lucide-react';
import PatternGrid from './components/PatternGrid';
import SetupWorkspace from './components/SetupWorkspace';
import RemoteBar from './components/RemoteBar';
import { getPatternById } from '../shared/patterns';
import {
  createSyncChannel,
  deleteSavedPreset,
  loadConfig,
  loadSavedPresets,
  resetPatternConfig,
  saveConfig,
  saveNamedPreset,
  switchPattern,
} from '../shared/ceremonyStore';

export default function App() {
  const [config, setConfig] = useState(() => loadConfig());
  const [savedPresets, setSavedPresets] = useState(() => loadSavedPresets());
  const [activePresetId, setActivePresetId] = useState(null);
  const [presetNameInput, setPresetNameInput] = useState('');
  const [saveNotice, setSaveNotice] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [stagePhase, setStagePhase] = useState('standby');
  const syncRef = useRef(null);

  useEffect(() => {
    const channel = createSyncChannel((msg) => {
      if (msg.type === 'STAGE_PHASE' && msg.payload?.phase) {
        setStagePhase(msg.payload.phase);
      }
    });
    syncRef.current = channel;
    return () => channel.close();
  }, []);

  const flashSaveNotice = (text) => {
    setSaveNotice(text);
    setTimeout(() => {
      setSaveNotice((prev) => (prev === text ? '' : prev));
    }, 2400);
  };

  const updateConfig = (patch) => {
    setConfig((prev) => {
      const next = { ...prev, ...patch };
      saveConfig(next);
      syncRef.current?.post('CONFIG_UPDATE', next);
      return next;
    });
  };

  const handleSelectPattern = (patternId) => {
    setActivePresetId(null);
    setConfig((prev) => {
      const next = switchPattern(prev, patternId);
      saveConfig(next);
      syncRef.current?.post('CONFIG_UPDATE', next);
      return next;
    });
  };

  const handleResetPattern = () => {
    setActivePresetId(null);
    setConfig((prev) => {
      const next = resetPatternConfig(prev, prev.patternId);
      syncRef.current?.post('CONFIG_UPDATE', next);
      return next;
    });
    flashSaveNotice('Đã khôi phục mặc định của mẫu');
  };

  const handleSavePreset = ({ id = null, name = '' } = {}) => {
    const { preset, presets } = saveNamedPreset({
      id,
      name,
      config,
    });
    setSavedPresets(presets);
    setActivePresetId(preset.id);
    flashSaveNotice(`Đã lưu: ${preset.name}`);
    return preset;
  };

  const handleApplyPreset = (preset) => {
    if (!preset?.config) return;
    setActivePresetId(preset.id);
    setConfig(preset.config);
    saveConfig(preset.config);
    syncRef.current?.post('CONFIG_UPDATE', preset.config);
    flashSaveNotice(`Đã nạp: ${preset.name}`);
  };

  const handleDeletePreset = (id) => {
    const next = deleteSavedPreset(id);
    setSavedPresets(next);
    if (activePresetId === id) {
      setActivePresetId(null);
    }
  };

  const handleLaunchStage = () => {
    saveConfig(config);
    window.open('./stage.html', 'LED_STAGE_WINDOW', 'noopener');
  };

  const handleRemoteCommand = (type) => {
    syncRef.current?.post(type, {});
  };

  const handleMediaUpdated = () => {
    syncRef.current?.post('MEDIA_UPDATED', {});
  };

  const selectedPattern = getPatternById(config.patternId);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-14">
      {/* Minimalist Top Bar */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-amber-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-tight">
                Studio Trình Diễn LED 3D
              </div>
              <div className="text-[11px] text-slate-400">
                Mẫu đang chọn: <span className="text-amber-300">{selectedPattern.name}</span>
                {saveNotice && (
                  <span className="ml-2 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                    {saveNotice}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => handleSavePreset({ id: activePresetId })}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-500/15 border border-emerald-500/40 hover:bg-emerald-500/25 text-emerald-300 transition-colors cursor-pointer"
              title="Lưu nhanh thiết lập hiện tại"
            >
              <Save className="w-3.5 h-3.5" />
              Lưu thiết lập
            </button>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 transition-colors cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Thiết lập trước
            </button>

            <button
              type="button"
              onClick={handleLaunchStage}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/15 cursor-pointer"
            >
              <MonitorPlay className="w-4 h-4" />
              Trình chiếu Sân khấu
            </button>
          </div>
        </div>
      </header>

      {/* Spacious Clean Home Canvas: Pattern Grid */}
      <main className="max-w-6xl mx-auto px-6 pt-8">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Chọn Mẫu Sân Khấu Lễ Khai Mạc 3D
          </h1>
          <p className="mt-2.5 text-sm md:text-base text-slate-400">
            Mỗi mẫu tự động nhớ cấu hình riêng khi bạn chỉnh sửa. Bạn cũng có thể lưu thành nhiều bản thiết lập đặt tên để chuyển đổi nhanh giữa các phiên sự kiện.
          </p>
        </div>

        <RemoteBar
          stagePhase={stagePhase}
          audioEnabled={config.audioEnabled}
          onToggleAudio={() => updateConfig({ audioEnabled: !config.audioEnabled })}
          onCommand={handleRemoteCommand}
        />

        {/* Saved Pattern Setups Section */}
        <section className="max-w-6xl mx-auto mb-7 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/90">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-amber-400" />
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                Thiết Lập Mẫu Đã Lưu ({savedPresets.length})
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <input
                type="text"
                value={presetNameInput}
                onChange={(e) => setPresetNameInput(e.target.value)}
                placeholder={`Tên bản lưu (VD: ${selectedPattern.name})...`}
                className="w-56 sm:w-64 rounded-xl bg-slate-950 border border-slate-700 px-3 py-1.5 text-xs text-white focus:border-amber-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => {
                  handleSavePreset({ name: presetNameInput });
                  setPresetNameInput('');
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                Lưu bản mới
              </button>
              <button
                type="button"
                onClick={handleResetPattern}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                title="Đưa mẫu đang chọn về mặc định gốc"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Mặc định mẫu
              </button>
            </div>
          </div>

          {savedPresets.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3.5">
              {savedPresets.map((preset) => {
                const basePattern = getPatternById(preset.patternId);
                const isActive = activePresetId === preset.id;
                return (
                  <div
                    key={preset.id}
                    onClick={() => handleApplyPreset(preset)}
                    className={`group rounded-xl border p-3.5 transition-all cursor-pointer flex flex-col justify-between gap-2.5 ${
                      isActive
                        ? 'border-amber-400/80 bg-amber-400/10 shadow-[0_0_24px_rgba(245,197,66,0.12)]'
                        : 'border-slate-800 bg-slate-950/70 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-white truncate">
                          {preset.name}
                        </span>
                        {isActive ? (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950 flex items-center gap-1 shrink-0">
                            <Check className="w-3 h-3" /> Đang dùng
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-800 text-slate-300 shrink-0">
                            {basePattern.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-amber-300/90 mt-1 truncate">
                        {basePattern.name} • {preset.config.handCount} bàn tay
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 truncate">
                        {preset.config.eventTitle}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleApplyPreset(preset);
                            setDrawerOpen(true);
                          }}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-slate-200 transition-colors cursor-pointer"
                        >
                          Mở thiết lập
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSavePreset({ id: preset.id, name: preset.name });
                          }}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-800/80 hover:bg-emerald-500/20 hover:text-emerald-300 text-slate-300 transition-colors cursor-pointer"
                          title="Ghi đè bản lưu này bằng thiết lập hiện tại"
                        >
                          Cập nhật
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeletePreset(preset.id);
                        }}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
                        title="Xóa bản thiết lập đã lưu"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-xs text-slate-400 mt-2.5">
              Chưa có bản thiết lập đặt tên nào. Nhập tên rồi nhấn <strong className="text-slate-200">Lưu bản mới</strong> hoặc bấm <strong className="text-emerald-300">Lưu thiết lập</strong> trong màn hình Thiết lập mẫu để lưu lại kịch bản của bạn.
            </p>
          )}
        </section>

        <PatternGrid
          selectedId={config.patternId}
          onSelectPattern={handleSelectPattern}
          onOpenSetup={() => setDrawerOpen(true)}
        />
      </main>

      {/* Pre-Event Setup & Live 3D Demo Workspace */}
      <SetupWorkspace
        open={drawerOpen}
        config={config}
        savedPresets={savedPresets}
        activePresetId={activePresetId}
        saveNotice={saveNotice}
        onChange={updateConfig}
        onSavePreset={handleSavePreset}
        onApplyPreset={handleApplyPreset}
        onDeletePreset={handleDeletePreset}
        onResetPattern={handleResetPattern}
        onClose={() => setDrawerOpen(false)}
        onLaunchStage={handleLaunchStage}
        onRemoteCommand={handleRemoteCommand}
        onMediaUpdated={handleMediaUpdated}
      />
    </div>
  );
}

