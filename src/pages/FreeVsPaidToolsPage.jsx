import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Check, X, ArrowRight, Sparkles } from 'lucide-react';

const COMPARISONS = [
  {
    job: 'Find wasted-spend negative keywords',
    paid: 'Helium 10 Adtomic ($199/mo)',
    freeTool: 'Negative Keyword Generator',
    link: '/tools/negative-keyword-generator',
  },
  {
    job: 'Analyze search term word frequencies',
    paid: 'Perpetua / Intentwise ($250+/mo)',
    freeTool: 'N-Gram Analyzer',
    link: '/tools/ngram-analyzer',
  },
  {
    job: 'Find search query market share gaps',
    paid: 'Helium 10 Market Tracker',
    freeTool: 'SQP Dashboard',
    link: '/tools/sqp-dashboard',
  },
  {
    job: 'Identify bidding cannibalization',
    paid: 'Scale Insights ($149/mo)',
    freeTool: 'Keyword Cannibalization Analyzer',
    link: '/tools/keyword-cannibalization',
  },
  {
    job: 'Compare Keepa ASIN details side by side',
    paid: 'Keepa Product Viewer',
    freeTool: 'Keepa ASIN Comparator',
    link: '/tools/keepa-asin-comparator',
  },
  {
    job: 'Analyze hourly performance trends',
    paid: 'Dayparting Software ($99/mo)',
    freeTool: 'PPC Dayparting Intelligence Hub',
    link: '/tools/ppc-dayparting',
  },
  {
    job: 'Build campaigns with isolation negatives',
    paid: 'Campaign Builder Tooling',
    freeTool: 'Campaign Builder',
    link: '/tools/campaign-builder',
  },
  {
    job: 'Compare before & after performance',
    paid: 'Custom Sheets Consultancy',
    freeTool: 'PPC Impact Visualizer',
    link: '/tools/ppc-impact-visualizer',
  },
  {
    job: 'Audit account health in one click',
    paid: 'Third-party PPC Audit Suite',
    freeTool: 'PPC Health Checker',
    link: '/tools/ppc-health-checker',
  },
];

export default function FreeVsPaidToolsPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            FREE VS PAID SOFTWARE
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Free Alternatives to Paid Amazon PPC Software.
          </h1>
          <p className="mt-4 text-lg text-slate-600 font-normal leading-relaxed">
            Tools like Helium 10 Adtomic ($199/mo), Perpetua, and Scale Insights automate your entire ad account — powerful, but priced for brands ready to commit. If you just need one specific job done, you don't need a monthly subscription. Our tools are 100% free, run directly in your browser, and require no login.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-16">
          <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
            <h2 className="font-extrabold text-lg">PPC Task / Job To Be Done</h2>
            <div className="hidden sm:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-400">
              <span>Typical Paid Software</span>
              <span className="text-emerald-400">Ads Acceleration Free Tool</span>
            </div>
          </div>

          <div className="divide-y divide-slate-200">
            {COMPARISONS.map((row, idx) => (
              <div key={idx} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                
                <div className="sm:w-1/2">
                  <div className="font-bold text-slate-900 text-base">{row.job}</div>
                  <div className="text-xs text-slate-500 mt-0.5 sm:hidden">
                    Paid: <span className="line-through">{row.paid}</span>
                  </div>
                </div>

                <div className="hidden sm:block sm:w-1/4 text-xs font-medium text-slate-500 line-through">
                  {row.paid}
                </div>

                <div className="sm:w-1/3 flex items-center justify-between sm:justify-end gap-3 w-full">
                  <span className="font-bold text-slate-900 text-sm">{row.freeTool}</span>
                  <Link
                    to={row.link}
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors shrink-0 shadow-xs"
                  >
                    Use Free Tool
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center border border-slate-800 shadow-xl">
          <h3 className="text-2xl font-bold mb-3">Need a Dedicated Team to Handle Everything?</h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Instead of managing software subscriptions and analyzing bulk files yourself, partner with Affan Mughal's team for an end-to-end, profit-first PPC management.
          </p>
          <Link
            to="/book-call"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md"
          >
            <span>Book a Free Strategy Session</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
