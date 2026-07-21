import React from 'react';
import { BarChart2, Layers, CheckCircle2 } from 'lucide-react';

const MERGED_ROWS = [
  { keyword: 'protein powder', sqpOrgShare: '42%', ppcImpShare: '68%', combinedClickShare: '54%', gap: 'Balanced Dominance' },
  { keyword: 'whey protein isolate', sqpOrgShare: '58%', ppcImpShare: '14%', combinedClickShare: '36%', gap: 'PPC Underfunded (Scale Opportunity)' },
  { keyword: 'keto protein shake', sqpOrgShare: '8%', ppcImpShare: '72%', combinedClickShare: '40%', gap: 'Heavy PPC Dependency' },
  { keyword: 'organic protein powder', sqpOrgShare: '34%', ppcImpShare: '28%', combinedClickShare: '31%', gap: 'Opportunity to Capture Rank' },
];

export default function SqpPpcMergedTool() {
  return (
    <div className="space-y-6 text-slate-900">
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-emerald-400" />
            <span>SQP + PPC Merged Intelligence Dashboard</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">Cross-references Search Query Performance organic share against Sponsored Products paid share.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-slate-300 font-bold">
              <tr>
                <th className="p-3.5">Keyword</th>
                <th className="p-3.5">SQP Organic Share</th>
                <th className="p-3.5">PPC Impression Share</th>
                <th className="p-3.5">Combined Click Share</th>
                <th className="p-3.5">Gap Analysis Insight</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {MERGED_ROWS.map((r, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">{r.keyword}</td>
                  <td className="p-3.5 text-emerald-600 font-bold">{r.sqpOrgShare}</td>
                  <td className="p-3.5 text-slate-900 font-bold">{r.ppcImpShare}</td>
                  <td className="p-3.5">{r.combinedClickShare}</td>
                  <td className="p-3.5 font-bold text-slate-800">{r.gap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
