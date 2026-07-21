import React, { useState } from 'react';
import { BarChart3, Download, PieChart, FileText, CheckCircle2 } from 'lucide-react';

export default function AuditSuiteTool() {
  const [activeSubTab, setActiveSubTab] = useState('banding');

  return (
    <div className="space-y-6 text-slate-900">
      
      {/* Header */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <PieChart className="w-5 h-5 text-emerald-400" />
            <span>Full Amazon PPC Audit Suite</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">Multi-sheet bulk audit with ACOS efficiency banding charts and structural scorecards.</p>
        </div>

        {/* Sub-tab Switcher */}
        <div className="flex items-center gap-2 bg-slate-800 p-1 rounded-xl">
          {[
            { id: 'banding', name: 'ACOS Banding' },
            { id: 'beta', name: 'Beta Report Analysis' },
            { id: 'scorecard', name: 'Executive Scorecard' },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setActiveSubTab(t.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                activeSubTab === t.id ? 'bg-emerald-400 text-slate-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>

      {activeSubTab === 'banding' && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="text-xs text-slate-400 font-bold uppercase">Band 1: Highly Profitable (&lt;15% ACOS)</div>
            <div className="text-3xl font-black text-emerald-600 mt-2">$14,200</div>
            <div className="text-xs text-slate-500 mt-1">42% of total spend</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="text-xs text-slate-400 font-bold uppercase">Band 2: Target Margin (15% - 30% ACOS)</div>
            <div className="text-3xl font-black text-slate-900 mt-2">$11,800</div>
            <div className="text-xs text-slate-500 mt-1">35% of total spend</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="text-xs text-slate-400 font-bold uppercase">Band 3: Margin Bleed (30% - 50% ACOS)</div>
            <div className="text-3xl font-black text-amber-600 mt-2">$5,100</div>
            <div className="text-xs text-slate-500 mt-1">15% of total spend</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="text-xs text-slate-400 font-bold uppercase">Band 4: Unprofitable (&gt;50% ACOS)</div>
            <div className="text-3xl font-black text-rose-600 mt-2">$2,700</div>
            <div className="text-xs text-slate-500 mt-1">8% of total spend</div>
          </div>
        </div>
      )}

      {activeSubTab === 'beta' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h4 className="font-bold text-base text-slate-900">Sponsored Products Beta Report Insight</h4>
          <p className="text-xs text-slate-600">Cross-referencing search term impression share against conversion rates.</p>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono text-slate-800">
            <div>✓ 14 exact keywords hold &gt; 40% impression share in Top of Search.</div>
            <div>⚠ 6 phrase targets have high click volume but 0.0% conversion rate in last 30 days.</div>
          </div>
        </div>
      )}

      {activeSubTab === 'scorecard' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h4 className="font-bold text-base text-slate-900">Executive Account Scorecard</h4>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between p-3 bg-slate-50 rounded-xl">
              <span>Overall PPC Efficiency:</span>
              <strong className="text-emerald-600">Grade A- (84/100)</strong>
            </div>
            <div className="flex justify-between p-3 bg-slate-50 rounded-xl">
              <span>Estimated Monthly Wasted Spend:</span>
              <strong className="text-rose-600">$840 / month</strong>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
