import React from 'react';
import { Layers, Star, TrendingUp, CheckCircle2 } from 'lucide-react';

const ASINS = [
  { asin: 'B08N5WRWNW', title: 'Whey Isolate Protein Powder 5lb', price: 64.99, bsr: '#142 in Health', reviews: 4210, rating: 4.6, buybox: 'Brand Direct', winner: true },
  { asin: 'B07PGF8Z9X', title: 'Keto Whey Protein Shake Mix 4lb', price: 59.95, bsr: '#389 in Health', reviews: 1890, rating: 4.4, buybox: 'Reseller', winner: false },
  { asin: 'B09K1L9722', title: 'Organic Plant Protein Powder', price: 49.99, bsr: '#210 in Health', reviews: 3120, rating: 4.5, buybox: 'Brand Direct', winner: false },
];

export default function KeepaComparatorTool() {
  return (
    <div className="space-y-6 text-slate-900">
      
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-400" />
            <span>Keepa ASIN Comparator</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">Side-by-side Keepa ASIN price, BSR, and listing strength comparison matrix.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ASINS.map((item, idx) => (
          <div key={idx} className={`bg-white rounded-2xl p-6 border shadow-sm space-y-4 ${item.winner ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-slate-200'}`}>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-slate-400">{item.asin}</span>
              {item.winner && (
                <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  BSR Leader
                </span>
              )}
            </div>

            <h4 className="font-bold text-sm text-slate-900 leading-snug">{item.title}</h4>

            <div className="space-y-2 text-xs border-t border-slate-100 pt-3">
              <div className="flex justify-between">
                <span>Buybox Price:</span>
                <strong className="text-slate-900">${item.price}</strong>
              </div>
              <div className="flex justify-between">
                <span>BSR Rank:</span>
                <strong className="text-emerald-600 font-bold">{item.bsr}</strong>
              </div>
              <div className="flex justify-between">
                <span>Reviews & Rating:</span>
                <strong className="text-slate-900">{item.rating} ★ ({item.reviews})</strong>
              </div>
              <div className="flex justify-between">
                <span>Buybox Seller:</span>
                <strong className="text-slate-900">{item.buybox}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
