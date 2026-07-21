import React, { useState } from 'react';
import { TrendingUp, Calendar, ArrowRight, BarChart2 } from 'lucide-react';

export default function ImpactVisualizerTool() {
  const [optDate, setOptDate] = useState('2026-03-01');

  return (
    <div className="space-y-6 text-slate-900">
      
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <span>PPC Impact Visualizer (Before vs After)</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">Generates client-ready before vs after optimization impact reports.</p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <Calendar className="w-4 h-4 text-emerald-400" />
          <span>Optimization Date:</span>
          <input 
            type="date" 
            value={optDate} 
            onChange={e => setOptDate(e.target.value)}
            className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-xl text-white font-bold"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="text-xs font-bold text-slate-400 uppercase">30 Days Before Optimization</div>
          <div className="space-y-3">
            <div className="flex justify-between text-xs">
              <span>Ad Spend:</span>
              <strong className="text-slate-900">$12,400</strong>
            </div>
            <div className="flex justify-between text-xs">
              <span>Ad Revenue:</span>
              <strong className="text-slate-900">$38,200</strong>
            </div>
            <div className="flex justify-between text-xs">
              <span>ACoS:</span>
              <strong className="text-rose-600 font-extrabold">32.4%</strong>
            </div>
            <div className="flex justify-between text-xs">
              <span>TACoS:</span>
              <strong className="text-rose-600 font-extrabold">18.6%</strong>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4">
          <div className="text-xs font-bold text-emerald-400 uppercase">30 Days After Optimization (Verified Impact)</div>
          <div className="space-y-3">
            <div className="flex justify-between text-xs">
              <span>Ad Spend:</span>
              <strong className="text-white">$9,800 (-21%)</strong>
            </div>
            <div className="flex justify-between text-xs">
              <span>Ad Revenue:</span>
              <strong className="text-emerald-400 font-extrabold">$48,600 (+27%)</strong>
            </div>
            <div className="flex justify-between text-xs">
              <span>ACoS:</span>
              <strong className="text-emerald-400 font-extrabold">20.1% (-12.3%)</strong>
            </div>
            <div className="flex justify-between text-xs">
              <span>TACoS:</span>
              <strong className="text-emerald-400 font-extrabold">12.2% (-6.4%)</strong>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
