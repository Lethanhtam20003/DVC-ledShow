import React from 'react';
import { Play, RotateCcw, Trophy, Volume2 } from 'lucide-react';

export default function RemoteBar({ stagePhase, onCommand }) {
  return (
    <div className="w-full max-w-5xl mx-auto mb-8 px-4 py-2.5 rounded-2xl bg-slate-900/85 border border-slate-800 backdrop-blur-xl shadow-lg flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2.5">
        <span
          className={`w-2.5 h-2.5 rounded-full ${stagePhase === 'celebration'
              ? 'bg-emerald-400'
              : stagePhase === 'charging'
                ? 'bg-amber-400 animate-ping'
                : 'bg-sky-400'
            }`}
        />
        <span className="text-xs font-semibold text-slate-300">
          Điều khiển nhanh màn LED (Stage):
        </span>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
          {stagePhase === 'celebration'
            ? 'Đang Vinh danh'
            : stagePhase === 'charging'
              ? 'Đang kích hoạt'
              : 'Sẵn sàng'}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => onCommand('CMD_START')}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors cursor-pointer"
        >
          <Play className="w-3.5 h-3.5 fill-current" /> Kích hoạt (Space)
        </button>

        <button
          type="button"
          onClick={() => onCommand('CMD_PREVIEW_CELEBRATION')}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-amber-300 hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <Trophy className="w-3.5 h-3.5" /> Vinh danh
        </button>

        <button
          type="button"
          onClick={() => onCommand('CMD_RESET')}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset (R)
        </button>

        <button
          type="button"
          onClick={() => onCommand('CMD_TEST_AUDIO')}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <Volume2 className="w-3.5 h-3.5" /> Thử tiếng
        </button>
      </div>
    </div>
  );
}
