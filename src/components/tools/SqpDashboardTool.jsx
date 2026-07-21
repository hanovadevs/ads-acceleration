import React from 'react';
import { BarChart3, PieChart, TrendingUp } from 'lucide-react';

export default function SqpDashboardTool() {
  return (
    <div className="space-y-6 text-slate-900">
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-emerald-400" />
            <span>Search Query Performance (SQP) Dashboard</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">Visualizes Search Query Performance weekly data for brand share vs competitor share.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-xs text-slate-400 uppercase font-bold">Branded Impressions</div>
          <div className="text-3xl font-black text-slate-900 mt-1">68.4%</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-xs text-slate-400 uppercase font-bold">Non-Branded Impressions</div>
          <div className="text-3xl font-black text-emerald-600 mt-1">31.6%</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-xs text-slate-400 uppercase font-bold">Your Click Share</div>
          <div className="text-3xl font-black text-slate-900 mt-1">41.2%</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-xs text-slate-400 uppercase font-bold">Competitor Share</div>
          <div className="text-3xl font-black text-rose-600 mt-1">58.8%</div>
        </div>
      </div>

      <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs font-bold text-amber-900">
        💡 <strong>SQP Strategic Action Item:</strong> Competitors control 58.8% of click share on high-volume non-branded terms. Scale Top of Search bids to capture SERP real estate.
      </div>
    </div>
  );
}
