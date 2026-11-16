import React, { useState } from 'react';
import { X, Upload, Play, Sparkles, Monitor, Sliders } from 'lucide-react';
import { extractYouTubeId } from '../../shared/ceremonyStore';

export default function SetupDrawer({
  open,
  config,
  onChange,
  onClose,
  onLaunchStage,
}) {
  const [activeTab, setActiveTab] = useState('event');

  if (!open) return null;

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      onChange({ customLogoData: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-xl bg-slate-950 border-l border-slate-800 h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">Thiết Lập Trước Giờ G</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Cấu hình tự động lưu & đồng bộ tức thì sang màn hình sân khấu
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sub-tabs */}
        <div className="px-6 pt-4 flex gap-2 border-b border-slate-800/80 pb-3">
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
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
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

        {/* Scrollable Content */}
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
                  onChange={(e) => onChange({ celebrationTitle: e.target.value })}
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
                  onChange={(e) => onChange({ celebrationDesc: e.target.value })}
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
                      onChange={handleLogoUpload}
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

              <div className="pt-2 flex items-center justify-between p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
                <div>
                  <div className="text-sm font-semibold text-white">
                    Hiện tiêu đề đầu màn hình chờ
                  </div>
                  <div className="text-xs text-slate-400">
                    Nên tắt để giữ sân khấu 3D sạch sẽ, chỉ hiện khi Vinh danh
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={config.showHeader}
                  onChange={(e) => onChange({ showHeader: e.target.checked })}
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
                  onChange={(e) => onChange({ handCount: Number(e.target.value) })}
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
                  onChange={(e) => onChange({ podY: Number(e.target.value) })}
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
                  onChange={(e) => onChange({ podSize: Number(e.target.value) })}
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
                  onChange={(e) => onChange({ coreScale: Number(e.target.value) })}
                  className="w-full accent-amber-400"
                />
              </div>
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

        {/* Footer Launch CTA */}
        <div className="p-6 border-t border-slate-800 bg-slate-950/95 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 cursor-pointer"
          >
            Lưu & Đóng
          </button>
          <button
            type="button"
            onClick={onLaunchStage}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/20 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            Mở Màn Hình Trình Chiếu LED
          </button>
        </div>
      </div>
    </div>
  );
}

