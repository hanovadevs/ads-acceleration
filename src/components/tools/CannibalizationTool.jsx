import React, { useState } from 'react';
import { Target, AlertTriangle, CheckCircle2, Trash2 } from 'lucide-react';

const INITIAL_CONFLICTS = [
  { id: 1, keyword: 'protein powder', campaigns: ['SP - SP-Auto', 'SP - SP-Exact'], waste: 43, risk: 'High Risk' },
  { id: 2, keyword: 'whey protein isolate', campaigns: ['SP - Broad', 'SD - Product Target'], waste: 31, risk: 'High Risk' },
  { id: 3, keyword: 'keto protein shake', campaigns: ['SP - Phrase', 'SB - Video'], waste: 18, risk: 'Medium Risk' },
];

export default function CannibalizationTool() {
  const [conflicts, setConflicts] = useState(INITIAL_CONFLICTS);
  const [resolved, setResolved] = useState([]);

  const handleResolve = (id) => {
    setResolved(prev => [...prev, id]);
  };

  const totalWasted = conflicts.filter(c => !resolved.includes(c.id)).reduce((acc, curr) => acc + curr.waste, 0);

  return (
    <div className="space-y-6 text-slate-900">
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-400" />
            <span>Keyword Cannibalization Analyzer</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">Detects overlapping keyword targets bidding against each other in internal campaigns.</p>
        </div>

        <div className="bg-slate-800 px-4 py-2 rounded-xl text-xs font-bold text-slate-300">
          Wasted Spend: <span className="text-rose-400 text-sm font-extrabold">${totalWasted}/mo</span>
        </div>
      </div>

      <div className="space-y-4">
        {conflicts.map(c => {
          const isFixed = resolved.includes(c.id);
          return (
            <div key={c.id} className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all ${
              isFixed ? 'bg-emerald-50 border-emerald-200 text-emerald-900 opacity-60' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-extrabold text-base text-slate-900">{c.keyword}</span>
                  <span className="px-2.5 py-0.5 rounded bg-rose-100 text-rose-800 text-[10px] font-bold">{c.risk}</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Conflicting Campaigns: <strong>{c.campaigns.join(' ↔ ')}</strong>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Monthly Waste</div>
                  <div className="text-sm font-black text-rose-600">${c.waste}/mo</div>
                </div>

                {!isFixed ? (
                  <button
                    onClick={() => handleResolve(c.id)}
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs cursor-pointer"
                  >
                    Pause Overlap Target
                  </button>
                ) : (
                  <span className="flex items-center gap-1 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4" /> Resolved
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
