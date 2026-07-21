import React, { useState } from 'react';
import { Download, Sliders, Filter, RefreshCw, CheckCircle2, FileSpreadsheet } from 'lucide-react';

const INITIAL_ROWS = [
  { id: 1, campaign: 'SP - Protein Powder - Exact', entity: 'Keyword', keyword: 'protein powder', matchType: 'EXACT', state: 'ENABLED', bid: 1.85, spend: 340, sales: 2100, acos: 16.2 },
  { id: 2, campaign: 'SP - Protein Powder - Exact', entity: 'Keyword', keyword: 'whey protein isolate', matchType: 'EXACT', state: 'ENABLED', bid: 2.10, spend: 280, sales: 1850, acos: 15.1 },
  { id: 3, campaign: 'SP - Protein Powder - Broad', entity: 'Keyword', keyword: 'keto protein shake', matchType: 'BROAD', state: 'ENABLED', bid: 1.25, spend: 195, sales: 310, acos: 62.9 },
  { id: 4, campaign: 'SP - Protein Powder - Auto', entity: 'Target', keyword: 'close-match', matchType: 'AUTO', state: 'ENABLED', bid: 0.95, spend: 140, sales: 980, acos: 14.2 },
  { id: 5, campaign: 'SP - Gym Apparel - Phrase', entity: 'Keyword', keyword: 'workout shirt men', matchType: 'PHRASE', state: 'ENABLED', bid: 1.45, spend: 220, sales: 410, acos: 53.6 },
  { id: 6, campaign: 'SB - Brand Defense - Exact', entity: 'Keyword', keyword: 'urban fit protein', matchType: 'EXACT', state: 'ENABLED', bid: 0.75, spend: 65, sales: 890, acos: 7.3 },
  { id: 7, campaign: 'SD - Competitor Targeting', entity: 'Product Target', keyword: 'asin="B08N5WRWNW"', matchType: 'TARGET', state: 'PAUSED', bid: 1.10, spend: 90, sales: 120, acos: 75.0 },
];

export default function BulksheetOptimizerTool() {
  const [rows, setRows] = useState(INITIAL_ROWS);
  const [filterMatch, setFilterMatch] = useState('ALL');
  const [bidAdjustmentPercent, setBidAdjustmentPercent] = useState(10);
  const [notification, setNotification] = useState('');

  const handleApplyBidAdjustment = (multiplier) => {
    setRows(prev => prev.map(row => ({
      ...row,
      bid: parseFloat((row.bid * (1 + (multiplier * bidAdjustmentPercent) / 100)).toFixed(2))
    })));
    setNotification(`Applied ${multiplier > 0 ? '+' : ''}${multiplier * bidAdjustmentPercent}% bid adjustment to all keywords.`);
    setTimeout(() => setNotification(''), 3000);
  };

  const handlePauseHighAcos = () => {
    setRows(prev => prev.map(row => row.acos > 50 ? { ...row, state: 'PAUSED' } : row));
    setNotification('Auto-paused all keywords with ACoS > 50%.');
    setTimeout(() => setNotification(''), 3000);
  };

  const handleExportCsv = () => {
    const headers = 'Campaign,Entity,Keyword/Target,Match Type,State,Bid,Spend,Sales,ACoS(%)\n';
    const csvContent = rows.map(r => `"${r.campaign}","${r.entity}","${r.keyword}","${r.matchType}","${r.state}",${r.bid},${r.spend},${r.sales},${r.acos}`).join('\n');
    const blob = new Blob([headers + csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'optimized_amazon_bulksheet.csv';
    a.click();
  };

  const filteredRows = rows.filter(r => filterMatch === 'ALL' || r.matchType === filterMatch);

  return (
    <div className="space-y-6 text-slate-900">
      
      {/* Controls Header */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-emerald-400" />
            <span>Bulksheet Optimization Engine</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">Bulk-edit keyword bids, state flags, and placement multipliers in real-time.</p>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={handleExportCsv}
            className="px-5 py-2.5 rounded-xl bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center gap-2 hover:bg-emerald-300 transition-colors shadow-md cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Export Bulksheet CSV</span>
          </button>
        </div>
      </div>

      {notification && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{notification}</span>
        </div>
      )}

      {/* Action Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
        
        {/* Filter */}
        <div className="flex items-center gap-2 text-xs font-bold">
          <Filter className="w-4 h-4 text-slate-400" />
          <span>Match Type:</span>
          {['ALL', 'EXACT', 'PHRASE', 'BROAD', 'AUTO', 'TARGET'].map(m => (
            <button
              key={m}
              onClick={() => setFilterMatch(m)}
              className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                filterMatch === m ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Quick Bulk Actions */}
        <div className="flex items-center gap-2 text-xs font-bold">
          <span>Bulk Bid Adj:</span>
          <input 
            type="number" 
            value={bidAdjustmentPercent} 
            onChange={e => setBidAdjustmentPercent(Number(e.target.value))}
            className="w-14 px-2 py-1 bg-slate-100 border border-slate-300 rounded text-center"
          />
          <span>%</span>
          <button 
            onClick={() => handleApplyBidAdjustment(1)}
            className="px-3 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800"
          >
            + Increase
          </button>
          <button 
            onClick={() => handleApplyBidAdjustment(-1)}
            className="px-3 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800"
          >
            - Decrease
          </button>
          <button 
            onClick={handlePauseHighAcos}
            className="px-3 py-1 rounded bg-rose-100 hover:bg-rose-200 text-rose-800"
          >
            Pause ACoS &gt; 50%
          </button>
        </div>

      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-slate-300 font-bold border-b border-slate-800">
              <tr>
                <th className="p-3.5">Campaign Name</th>
                <th className="p-3.5">Keyword / Target</th>
                <th className="p-3.5">Match Type</th>
                <th className="p-3.5">State</th>
                <th className="p-3.5">Bid ($)</th>
                <th className="p-3.5">Spend ($)</th>
                <th className="p-3.5">Sales ($)</th>
                <th className="p-3.5">ACoS (%)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filteredRows.map(row => (
                <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900">{row.campaign}</td>
                  <td className="p-3.5 text-slate-800">{row.keyword}</td>
                  <td className="p-3.5">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold text-[10px]">
                      {row.matchType}
                    </span>
                  </td>
                  <td className="p-3.5">
                    <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                      row.state === 'ENABLED' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {row.state}
                    </span>
                  </td>
                  <td className="p-3.5 font-extrabold text-slate-900">${row.bid.toFixed(2)}</td>
                  <td className="p-3.5">${row.spend}</td>
                  <td className="p-3.5 text-emerald-600 font-bold">${row.sales}</td>
                  <td className={`p-3.5 font-extrabold ${row.acos > 50 ? 'text-rose-600' : 'text-emerald-600'}`}>
                    {row.acos}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
