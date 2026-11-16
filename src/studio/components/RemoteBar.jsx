import React from 'react';
import { Play, RotateCcw, Trophy, Volume2 } from 'lucide-react';

export default function RemoteBar({ stagePhase, onCommand }) {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-xl shadow-2xl flex items-center gap-2.5">
      <div className="flex items-center gap-2 pr-3 border-r border-slate-800">
        <span
          className={`w-2.5 h-2.5 rounded-full ${
            stagePhase === 'celebration'
              ? 'bg-emerald-400'
              : stagePhase === 'charging'
              ? 'bg-amber-400 animate-ping'
              : 'bg-sky-400'
          }`}
        />
        <span className="text-xs font-medium text-slate-300 whitespace-nowrap">
          Điều khiển Stage:
        </span>
      </div>

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
  );
}

