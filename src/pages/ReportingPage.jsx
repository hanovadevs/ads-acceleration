import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Layers, TrendingUp, CheckCircle2, ArrowRight, FileText, MessageSquare, CheckSquare } from 'lucide-react';


const REPORT_TABS = [
  {
    id: 'finance',
    name: 'Finance Dashboard',
    tagline: 'Brand-level numbers, every week.',
    bullets: [
      'Sales, profit and TACoS tracked week over week and month over month',
      'Broken down by market (USA, CA, EU) where applicable',
      'Highlights any week where margins dropped or TACoS spiked',
      'Clients use this to immediately spot if something went wrong before it becomes a problem',
    ],
  },
  {
    id: 'product',
    name: 'Product Analysis',
    tagline: 'Every SKU, laid bare.',
    bullets: [
      'Revenue, profit margin, ad spend and organic orders per product',
      'Velocity and days of supply tracked alongside financial data',
      'Underperforming SKUs flagged clearly with context',
      'No more guessing which product is dragging down your overall margins',
    ],
  },
  {
    id: 'ranking',
    name: 'Keyword Ranking',
    tagline: 'Your organic ranks, over time.',
    bullets: [
      'Weekly rank tracking for your most important search terms',
      'Sales trend data alongside rank movement',
      'Spotting rank drops early so we act before traffic is lost',
      'Built using DataRova rank tracking data, updated weekly',
    ],
  },
  {
    id: 'gap',
    name: 'Ads Gap Analysis',
    tagline: 'Where the money is being wasted.',
    bullets: [
      'Keywords with strong search term conversions but low campaign spend',
      'Match type gaps — Broad, Phrase, Exact — where budget is misallocated',
      'PAT and competitor targeting opportunities identified',
      'This is where most of the quick wins come from in the first 30 days',
    ],
  },
  {
    id: 'action',
    name: 'Action Plan',
    tagline: 'No report ends without a plan.',
    bullets: [
      'Specific campaign actions for the next two weeks',
      'Budget reallocation recommendations with reasoning',
      'Deal and promotion strategy built into the ad plan',
      'Clients always know exactly what we are doing and why',
    ],
  },
];

export default function ReportingPage() {
  const [activeTabId, setActiveTabId] = useState('finance');

  const activeTab = REPORT_TABS.find((t) => t.id === activeTabId) || REPORT_TABS[0];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            BI-WEEKLY REPORTING PROTOCOL
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            You Should Always Know Where Your Money Is Going.
          </h1>
          <p className="mt-4 text-lg text-slate-600 font-normal leading-relaxed">
            Every two weeks, we hand you a full breakdown of your Amazon PPC performance — finance, rankings, ad spend, and a clear plan for what's next.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/book-call"
              className="px-8 py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors shadow-md"
            >
              Book a Free Call
            </Link>
          </div>
        </div>

        {/* Sample Report Image Preview Box */}
        <div id="sample" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl mb-20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              SAMPLE REPORT DECK LAYOUT
            </span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
              Delivered Bi-Weekly
            </span>
          </div>
          <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-inner">
            <img 
              src="/images/biweekly_report.png" 
              alt="Sample Bi-Weekly Amazon PPC Executive Report"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Interactive Report Walkthrough Tabs */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">Inside the Report Walkthrough</h2>
            <p className="text-slate-600 text-sm mt-2">Click each tab to see what data is audited every 14 days.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-4 flex flex-col gap-2">
              {REPORT_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`w-full text-left px-5 py-4 rounded-2xl font-bold text-sm transition-all cursor-pointer ${
                    activeTabId === tab.id
                      ? 'bg-slate-900 text-white shadow-lg'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 bg-white rounded-3xl p-8 border border-slate-200 shadow-lg min-h-[320px] flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase text-emerald-600 tracking-wider mb-1">
                  {activeTab.tagline}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-6">{activeTab.name}</h3>

                <div className="space-y-3">
                  {activeTab.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-8 flex items-center justify-between text-xs text-slate-400">
                <span>Standard Ads Acceleration Deliverable</span>
                <span className="font-bold text-slate-900">Updated Every 14 Days</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Delivery Channels */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">How It Reaches You</h2>
            <p className="text-slate-600 text-sm mt-2">Reports don't just sit unread in your inbox.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">1. Slide Deck</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Full executive presentation deck with finance dashboards, SKU performance, and keyword rank trajectory.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">2. Slack Update</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Written summary with key metrics posted directly to your team Slack channel so everyone stays aligned.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mx-auto mb-4">
                <CheckSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">3. Task Briefs</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Every action item logged as a trackable task in ClickUp or Asana. Assigned, executed, and verified.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-10 text-center border border-slate-800 shadow-2xl">
          <h2 className="text-3xl font-extrabold mb-3">Get Account Clarity in 45 Minutes</h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto mb-6">
            Book your free strategy call and let Affan Mughal review your account numbers with complete transparency.
          </p>
          <Link
            to="/book-call"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
