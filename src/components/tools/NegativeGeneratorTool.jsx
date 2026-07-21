import React, { useState } from 'react';
import { Download, Sliders, CheckCircle2, ShieldAlert } from 'lucide-react';

const SAMPLE_TERMS = [
  { term: 'free protein powder sample', clicks: 28, spend: 54.20, orders: 0, acos: 'N/A', reason: 'Zero Sales & High Clicks' },
  { term: 'cheap protein powder 1lb', clicks: 19, spend: 38.50, orders: 0, acos: 'N/A', reason: 'Zero Sales & High Clicks' },
  { term: 'soy protein isolate bulk', clicks: 34, spend: 89.00, orders: 1, acos: 142.5, reason: 'High ACoS (> 100%)' },
  { term: 'protein shake recipe book', clicks: 15, spend: 28.00, orders: 0, acos: 'N/A', reason: 'Non-converting Informational' },
  { term: 'mass gainer 10lb chocolate', clicks: 22, spend: 45.10, orders: 0, acos: 'N/A', reason: 'Zero Sales & High Clicks' },
];

export default function NegativeGeneratorTool() {
  const [minClicks, setMinClicks] = useState(12);
  const [minSpend, setMinSpend] = useState(25);
  const [selectedTerms, setSelectedTerms] = useState(SAMPLE_TERMS.map((_, i) => i));

  const toggleSelect = (idx) => {
    setSelectedTerms(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  const handleExportNegativesCsv = () => {
    const headers = 'Campaign Name,Ad Group Name,Keyword Text,Match Type,State\n';
    const csvContent = selectedTerms.map(i => {
      const t = SAMPLE_TERMS[i];
      return `"SP - General Broad","Auto Ad Group","${t.term}","NEGATIVE_EXACT","ENABLED"`;
    }).join('\n');

    const blob = new Blob([headers + csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'negative_keywords_bulksheet.csv';
    a.click();
  };

  return (
    <div className="space-y-6 text-slate-900">
      
      {/* Header */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-emerald-400" />
            <span>Negative Keyword Generator</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">Surfaces non-converting search terms and exports an upload-ready negative bulk sheet.</p>
        </div>

        <button
          onClick={handleExportNegativesCsv}
          className="px-5 py-2.5 rounded-xl bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center gap-2 hover:bg-emerald-300 transition-colors shadow-md cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>Export Negative Bulksheet CSV ({selectedTerms.length})</span>
        </button>
      </div>

      {/* Threshold Slider Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-bold">
        <div>
          <label className="flex justify-between mb-2">
            <span>Minimum Clicks (0 Sales):</span>
            <span className="text-emerald-600 font-extrabold">{minClicks} Clicks</span>
          </label>
          <input 
            type="range" 
            min="5" 
            max="30" 
            value={minClicks} 
            onChange={e => setMinClicks(Number(e.target.value))}
            className="w-full accent-slate-900 cursor-pointer"
          />
        </div>

        <div>
          <label className="flex justify-between mb-2">
            <span>Minimum Spend Threshold ($):</span>
            <span className="text-emerald-600 font-extrabold">${minSpend} Spend</span>
          </label>
          <input 
            type="range" 
            min="10" 
            max="100" 
            value={minSpend} 
            onChange={e => setMinSpend(Number(e.target.value))}
            className="w-full accent-slate-900 cursor-pointer"
          />
        </div>
      </div>

      {/* Identified Waste Terms List */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-4 bg-slate-900 text-slate-300 font-bold text-xs flex justify-between items-center border-b border-slate-800">
          <span>Search Terms Meeting Negative Threshold</span>
          <span>Wasted Budget: $254.80 / mo</span>
        </div>

        <div className="divide-y divide-slate-100 text-xs">
          {SAMPLE_TERMS.map((row, idx) => (
            <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  checked={selectedTerms.includes(idx)} 
                  onChange={() => toggleSelect(idx)}
                  className="w-4 h-4 accent-slate-900 rounded cursor-pointer"
                />
                <div>
                  <div className="font-extrabold text-slate-900 text-sm">{row.term}</div>
                  <div className="text-slate-500 text-[10px] mt-0.5">Reason: {row.reason}</div>
                </div>
              </div>

              <div className="flex items-center gap-6 text-right font-mono">
                <div>
                  <div className="text-slate-400 text-[10px]">Clicks</div>
                  <div className="font-bold text-slate-900">{row.clicks}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[10px]">Spend</div>
                  <div className="font-extrabold text-rose-600">${row.spend.toFixed(2)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
