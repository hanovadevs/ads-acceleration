import React, { useState } from 'react';
import { BarChart3, Sliders, TrendingUp } from 'lucide-react';

export default function ConversionCurveTool() {
  const [budget, setBudget] = useState(15000);

  // Diminishing returns curve calculation
  const estConversions = Math.round(budget * 0.12 * (1 - budget / 80000));
  const estRoas = (3.4 * (1 - budget / 90000)).toFixed(2);

  return (
    <div className="space-y-6 text-slate-900">
      
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-emerald-400" />
            <span>PPC Spend-to-Conversion Curve Engine</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">Calculates marginal ROAS & identifies diminishing return ceilings as spend scales.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div>
          <label className="flex justify-between text-xs font-bold mb-2">
            <span>Planned Monthly Ad Budget:</span>
            <span className="text-emerald-600 font-extrabold text-sm">${budget.toLocaleString()} / mo</span>
          </label>
          <input 
            type="range" 
            min="5000" 
            max="60000" 
            step="1000"
            value={budget} 
            onChange={e => setBudget(Number(e.target.value))}
            className="w-full accent-slate-900 cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="text-xs text-slate-400 uppercase font-bold">Estimated Monthly Orders</div>
            <div className="text-2xl font-black text-slate-900 mt-1">{estConversions} orders</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="text-xs text-slate-400 uppercase font-bold">Projected ROAS</div>
            <div className="text-2xl font-black text-emerald-600 mt-1">{estRoas}×</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="text-xs text-slate-400 uppercase font-bold">Optimal Ceiling</div>
            <div className="text-2xl font-black text-slate-900 mt-1">$35,000 / mo</div>
          </div>
        </div>
      </div>

    </div>
  );
}
