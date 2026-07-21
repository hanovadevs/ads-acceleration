import React, { useState } from 'react';
import { Layers, Download, Filter } from 'lucide-react';

const SAMPLE_NGRAMS = [
  { ngram: 'protein powder', count: 42, impr: 14820, clicks: 312, spend: 187, sales: 1540, acos: 12.1, status: 'Winner' },
  { ngram: 'whey protein', count: 31, impr: 9440, clicks: 198, spend: 143, sales: 750, acos: 19.0, status: 'Winner' },
  { ngram: 'vanilla protein', count: 18, impr: 6210, clicks: 89, spend: 212, sales: 360, acos: 58.8, status: 'Wasted Bleed' },
  { ngram: '5lb protein', count: 14, impr: 4870, clicks: 201, spend: 96, sales: 1200, acos: 8.0, status: 'Winner' },
  { ngram: 'keto protein', count: 12, impr: 3120, clicks: 44, spend: 167, sales: 230, acos: 72.6, status: 'Wasted Bleed' },
];

export default function NgramAnalyzerTool() {
  const [ngrams, setNgrams] = useState(SAMPLE_NGRAMS);
  const [filterType, setFilterType] = useState('ALL');

  const filtered = ngrams.filter(n => {
    if (filterType === 'WINNER') return n.status === 'Winner';
    if (filterType === 'BLEED') return n.status === 'Wasted Bleed';
    return true;
  });

  return (
    <div className="space-y-6 text-slate-900">
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-400" />
            <span>N-Gram Word Frequency Analyzer</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">Breaks down search terms into 1, 2, and 3-word combinations to find hidden patterns.</p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          {['ALL', 'WINNER', 'BLEED'].map(f => (
            <button
              key={f}
              onClick={() => setFilterType(f)}
              className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                filterType === f ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-300'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-900 text-slate-300 font-bold">
            <tr>
              <th className="p-3.5">N-Gram Term</th>
              <th className="p-3.5">Occurrences</th>
              <th className="p-3.5">Impressions</th>
              <th className="p-3.5">Clicks</th>
              <th className="p-3.5">Spend ($)</th>
              <th className="p-3.5">Sales ($)</th>
              <th className="p-3.5">ACoS (%)</th>
              <th className="p-3.5">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {filtered.map((r, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900">{r.ngram}</td>
                <td className="p-3.5">{r.count} terms</td>
                <td className="p-3.5">{r.impr.toLocaleString()}</td>
                <td className="p-3.5">{r.clicks}</td>
                <td className="p-3.5">${r.spend}</td>
                <td className="p-3.5 font-bold text-emerald-600">${r.sales}</td>
                <td className={`p-3.5 font-extrabold ${r.acos > 30 ? 'text-rose-600' : 'text-emerald-600'}`}>
                  {r.acos}%
                </td>
                <td className="p-3.5">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    r.status === 'Winner' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    {r.status}
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
