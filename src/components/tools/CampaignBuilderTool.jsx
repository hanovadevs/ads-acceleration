import React, { useState } from 'react';
import { Download, Layers, Plus } from 'lucide-react';

export default function CampaignBuilderTool() {
  const [brandName, setBrandName] = useState('UrbanFit');
  const [asin, setAsin] = useState('B08N5WRWNW');
  const [keywords, setKeywords] = useState('protein powder\nwhey protein isolate\nketo protein shake');
  const [defaultBid, setDefaultBid] = useState(1.50);
  const [dailyBudget, setDailyBudget] = useState(50);

  const handleExportCampaignCsv = () => {
    const kwList = keywords.split('\n').filter(k => k.trim());
    const headers = 'Record Type,Campaign,Ad Group,Keyword or Product Targeting,Product Targeting ID,Match Type,Campaign Daily Budget,Campaign Start Date,Campaign End Date,Campaign Targeting Type,State,Bid\n';
    let csvContent = `Campaign,${brandName}_SP_${asin}_Exact,,,,,${dailyBudget},20260101,,Manual,ENABLED,\n`;

    kwList.forEach(k => {
      csvContent += `Keyword,${brandName}_SP_${asin}_Exact,Exact AdGroup,${k.trim()},,Exact,,,,,ENABLED,${defaultBid}\n`;
    });

    const blob = new Blob([headers + csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${brandName}_SP_Campaign_Upload.csv`;
    a.click();
  };

  return (
    <div className="space-y-6 text-slate-900">
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-400" />
            <span>Sponsored Products Campaign Builder</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">Auto-generates structured bulk upload files with isolated match-type architectures.</p>
        </div>

        <button
          onClick={handleExportCampaignCsv}
          className="px-5 py-2.5 rounded-xl bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center gap-2 hover:bg-emerald-300 transition-colors shadow-md cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>Download Campaign Bulksheet CSV</span>
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-bold">
        <div>
          <label className="block mb-1">Brand Identifier Name</label>
          <input 
            type="text" 
            value={brandName} 
            onChange={e => setBrandName(e.target.value)}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium"
          />
        </div>

        <div>
          <label className="block mb-1">Product ASIN</label>
          <input 
            type="text" 
            value={asin} 
            onChange={e => setAsin(e.target.value)}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium"
          />
        </div>

        <div>
          <label className="block mb-1">Default Keyword Bid ($)</label>
          <input 
            type="number" 
            value={defaultBid} 
            onChange={e => setDefaultBid(Number(e.target.value))}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium"
          />
        </div>

        <div>
          <label className="block mb-1">Daily Campaign Budget ($)</label>
          <input 
            type="number" 
            value={dailyBudget} 
            onChange={e => setDailyBudget(Number(e.target.value))}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1">Target Keywords (One per line)</label>
          <textarea 
            rows={4} 
            value={keywords} 
            onChange={e => setKeywords(e.target.value)}
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono"
          />
        </div>
      </div>
    </div>
  );
}
