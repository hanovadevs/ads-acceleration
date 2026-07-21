import React from 'react';
import { Award, Download, CheckCircle2 } from 'lucide-react';

const OPPORTUNITIES = [
  { term: 'organic protein powder 5lb', triggers: 14, sales: 890, cvr: '18.4%', action: 'Graduate to Exact' },
  { term: 'grass fed whey protein isolate', triggers: 9, sales: 620, cvr: '16.1%', action: 'Graduate to Exact' },
  { term: 'sugar free vanilla protein shake', triggers: 11, sales: 410, cvr: '12.8%', action: 'Graduate to Exact' },
];

export default function MissingOpportunityTool() {
  return (
    <div className="space-y-6 text-slate-900">
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-400" />
            <span>Missing Keyword Opportunity Finder</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">Surfaces converting broad/phrase search terms missing from Exact match campaigns.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-900 text-slate-300 font-bold">
            <tr>
              <th className="p-3.5">Converting Search Term</th>
              <th className="p-3.5">Trigger Count</th>
              <th className="p-3.5">Sales Generated</th>
              <th className="p-3.5">Conversion Rate</th>
              <th className="p-3.5">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {OPPORTUNITIES.map((r, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900">{r.term}</td>
                <td className="p-3.5">{r.triggers} times</td>
                <td className="p-3.5 font-bold text-emerald-600">${r.sales}</td>
                <td className="p-3.5 font-bold text-slate-900">{r.cvr}</td>
                <td className="p-3.5">
                  <span className="px-3 py-1 rounded bg-slate-900 text-white text-[10px] font-bold">
                    {r.action}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
