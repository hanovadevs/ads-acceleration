import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle2, RefreshCw, BarChart2 } from 'lucide-react';

export default function PpcHealthCheckerTool() {
  const [score, setScore] = useState(74);
  const [auditing, setAuditing] = useState(false);

  const handleReAudit = () => {
    setAuditing(true);
    setTimeout(() => {
      setAuditing(false);
      setScore(88);
    }, 1200);
  };

  return (
    <div className="space-y-6 text-slate-900">
      
      {/* Score Header Card */}
      <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="inline-block px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            ACCOUNT HEALTH SCORECARD
          </div>
          <h3 className="text-3xl font-extrabold">Amazon PPC Audit Grade</h3>
          <p className="text-slate-400 text-sm mt-1">Evaluated across 5 core dimensions of account structure & margin efficiency.</p>
        </div>

        <div className="flex items-center gap-6 bg-slate-800 p-5 rounded-2xl border border-slate-700">
          <div className="text-center">
            <div className="text-5xl font-black text-emerald-400">{score}</div>
            <div className="text-[10px] text-slate-400 uppercase font-bold mt-1">Out of 100</div>
          </div>
          <div className="h-10 w-px bg-slate-700" />
          <button 
            onClick={handleReAudit}
            className="px-4 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${auditing ? 'animate-spin' : ''}`} />
            <span>{auditing ? 'Auditing...' : 'Run Audit Fix'}</span>
          </button>
        </div>
      </div>

      {/* 5 Audit Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-base text-slate-900">1. Wasted Spend Leakage</h4>
            <span className="text-xs font-bold px-2.5 py-1 rounded bg-rose-100 text-rose-800">Action Needed</span>
          </div>
          <p className="text-xs text-slate-600">Found 24 search terms with &gt; 12 clicks and zero conversions, draining $412/mo.</p>
          <div className="text-xs font-bold text-slate-900 bg-slate-50 p-3 rounded-xl border border-slate-200">
            Fix: Add negative exact keywords to SP Broad campaigns.
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-base text-slate-900">2. Match Type Balance</h4>
            <span className="text-xs font-bold px-2.5 py-1 rounded bg-emerald-100 text-emerald-800">Pass (85%)</span>
          </div>
          <p className="text-xs text-slate-600">Exact match accounts for 62% of spend, Phrase 22%, Auto/Broad 16%. Healthy ratio.</p>
          <div className="text-xs font-bold text-slate-900 bg-slate-50 p-3 rounded-xl border border-slate-200">
            Fix: Graduate 3 high-converting Phrase terms to Exact.
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-base text-slate-900">3. Placement Modifier Efficiency</h4>
            <span className="text-xs font-bold px-2.5 py-1 rounded bg-amber-100 text-amber-800">Optimization Opportunity</span>
          </div>
          <p className="text-xs text-slate-600">Top of Search CVR is 18.2% vs Product Pages CVR of 4.1%. Top of Search is underfunded.</p>
          <div className="text-xs font-bold text-slate-900 bg-slate-50 p-3 rounded-xl border border-slate-200">
            Fix: Increase Top of Search modifier from +20% to +65%.
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-base text-slate-900">4. Keyword Cannibalization</h4>
            <span className="text-xs font-bold px-2.5 py-1 rounded bg-rose-100 text-rose-800">High Overlap</span>
          </div>
          <p className="text-xs text-slate-600">3 keywords are actively competing across 5 separate campaigns, bidding up internal CPCs.</p>
          <div className="text-xs font-bold text-slate-900 bg-slate-50 p-3 rounded-xl border border-slate-200">
            Fix: Pause duplicate exact targets in secondary Auto campaigns.
          </div>
        </div>

      </div>

    </div>
  );
}
