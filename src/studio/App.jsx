import React, { useEffect, useRef, useState } from 'react';
import { MonitorPlay, SlidersHorizontal, Layers } from 'lucide-react';
import PatternGrid from './components/PatternGrid';
import SetupDrawer from './components/SetupDrawer';
import RemoteBar from './components/RemoteBar';
import { getPatternById } from '../shared/patterns';
import {
  applyPatternDefaults,
  createSyncChannel,
  loadConfig,
  saveConfig,
} from '../shared/ceremonyStore';

export default function App() {
  const [config, setConfig] = useState(() => loadConfig());
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

  const updateConfig = (patch) => {
    setConfig((prev) => {
      const next = { ...prev, ...patch };
      saveConfig(next);
      syncRef.current?.post('CONFIG_UPDATE', next);
      return next;
    });
  };

  const handleSelectPattern = (patternId) => {
    setConfig((prev) => {
      const next = applyPatternDefaults(prev, patternId);
      saveConfig(next);
      syncRef.current?.post('CONFIG_UPDATE', next);
      return next;
    });
  };

  const handleLaunchStage = () => {
    saveConfig(config);
    window.open('./stage.html', 'LED_STAGE_WINDOW', 'noopener');
  };

  const handleRemoteCommand = (type) => {
    syncRef.current?.post(type, {});
  };

  const selectedPattern = getPatternById(config.patternId);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-28">
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
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
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
      <main className="max-w-6xl mx-auto px-6 pt-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Chọn Mẫu Sân Khấu 3D
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-400">
            Chọn một mẫu đồ họa 3D phù hợp với nghi thức, tùy chỉnh nhanh thông số và mở màn hình trình chiếu LED sạch sẽ cho sân khấu.
          </p>
        </div>

        <PatternGrid
          selectedId={config.patternId}
          onSelectPattern={handleSelectPattern}
          onOpenSetup={() => setDrawerOpen(true)}
        />
      </main>

      {/* Pre-Event Setup Drawer */}
      <SetupDrawer
        open={drawerOpen}
        config={config}
        onChange={updateConfig}
        onClose={() => setDrawerOpen(false)}
        onLaunchStage={handleLaunchStage}
      />

      {/* Floating Remote Bar for Dual-Screen Stage Control */}
      <RemoteBar stagePhase={stagePhase} onCommand={handleRemoteCommand} />
    </div>
  );
}

