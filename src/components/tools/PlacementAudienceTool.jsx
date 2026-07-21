import React, { useState } from 'react';
import { Sliders, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function PlacementAudienceTool() {
  const [topOfSearchMod, setTopOfSearchMod] = useState(45);
  const [productPageMod, setProductPageMod] = useState(15);

  return (
    <div className="space-y-6 text-slate-900">
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Sliders className="w-5 h-5 text-emerald-400" />
            <span>Placement & Audience Optimizer</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">Analyzes placement modifier performance (Top of Search vs Product Pages).</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h4 className="font-bold text-base text-slate-900">Top of Search (First Page)</h4>
          <div className="space-y-2 text-xs font-medium">
            <div className="flex justify-between"><span>CVR:</span><strong className="text-emerald-600 font-extrabold">21.4%</strong></div>
            <div className="flex justify-between"><span>ACoS:</span><strong className="text-emerald-600 font-extrabold">14.2%</strong></div>
          </div>
          <div>
            <label className="flex justify-between text-xs font-bold mb-1">
              <span>Modifier Adjustment:</span>
              <span className="text-emerald-600">+{topOfSearchMod}%</span>
            </label>
            <input 
              type="range" 
              min="0" 
              max="200" 
              value={topOfSearchMod} 
              onChange={e => setTopOfSearchMod(Number(e.target.value))}
              className="w-full accent-slate-900 cursor-pointer"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h4 className="font-bold text-base text-slate-900">Product Detail Pages</h4>
          <div className="space-y-2 text-xs font-medium">
            <div className="flex justify-between"><span>CVR:</span><strong className="text-rose-600 font-extrabold">4.8%</strong></div>
            <div className="flex justify-between"><span>ACoS:</span><strong className="text-rose-600 font-extrabold">48.9%</strong></div>
          </div>
          <div>
            <label className="flex justify-between text-xs font-bold mb-1">
              <span>Modifier Adjustment:</span>
              <span className="text-rose-600">+{productPageMod}%</span>
            </label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={productPageMod} 
              onChange={e => setProductPageMod(Number(e.target.value))}
              className="w-full accent-slate-900 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
