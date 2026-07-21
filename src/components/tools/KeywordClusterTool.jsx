import React, { useState } from 'react';
import { Layers, Search, Filter, Download } from 'lucide-react';

const INITIAL_CLUSTERS = [
  { root: 'protein', count: 18, spend: 680, sales: 3400, acos: 20.0, status: 'Winning Cluster' },
  { root: 'whey', count: 12, spend: 420, sales: 2450, acos: 17.1, status: 'Winning Cluster' },
  { root: 'vanilla', count: 7, spend: 310, sales: 480, acos: 64.5, status: 'Bleed Risk' },
  { root: 'keto', count: 9, spend: 280, sales: 390, acos: 71.7, status: 'Bleed Risk' },
  { root: 'isolate', count: 14, spend: 510, sales: 3100, acos: 16.4, status: 'Winning Cluster' },
  { root: 'chocolate', count: 11, spend: 390, sales: 2800, acos: 13.9, status: 'Winning Cluster' },
];

export default function KeywordClusterTool() {
  const [clusters, setClusters] = useState(INITIAL_CLUSTERS);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClusters = clusters.filter(c => c.root.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6 text-slate-900">
      
      {/* Header */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-400" />
            <span>Keyword Cluster Analyzer</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">Groups search terms into root-word clusters to isolate top revenue drivers from margin leaks.</p>
        </div>

        <div className="relative w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search root word..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Cluster Cards Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredClusters.map((cluster, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                  #{idx + 1}
                </span>
                <span className="text-lg font-extrabold text-slate-900 uppercase tracking-wide">
                  "{cluster.root}"
                </span>
              </div>

              <span className={`px-2.5 py-1 rounded text-[10px] font-bold ${
                cluster.status === 'Winning Cluster' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
              }`}>
                {cluster.status}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs">
              <div>
                <div className="text-slate-400 text-[10px] uppercase">Keywords</div>
                <div className="font-bold text-slate-900">{cluster.count}</div>
              </div>
              <div>
                <div className="text-slate-400 text-[10px] uppercase">Spend</div>
                <div className="font-bold text-slate-900">${cluster.spend}</div>
              </div>
              <div>
                <div className="text-slate-400 text-[10px] uppercase">Sales</div>
                <div className="font-bold text-emerald-600">${cluster.sales}</div>
              </div>
              <div>
                <div className="text-slate-400 text-[10px] uppercase">ACoS</div>
                <div className={`font-extrabold ${cluster.acos > 30 ? 'text-rose-600' : 'text-emerald-600'}`}>
                  {cluster.acos}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
