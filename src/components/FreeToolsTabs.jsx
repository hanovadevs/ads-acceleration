import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, BarChart3, Layers, Award, Target } from 'lucide-react';
import { FadeInWhenVisible } from './AnimatedSection';

const TABS = [
  {
    id: 'ngram',
    name: 'N-Gram Analyzer',
    sub: 'Find keyword patterns hiding in your data.',
    icon: Layers,
    link: '/tools/ngram-analyzer',
    desc: 'Break down search term reports by 1, 2 and 3-word n-grams to instantly surface wasted spend and high-converting keyword clusters you are completely missing.',
  },
  {
    id: 'sqp',
    name: 'SQP Intelligence Dashboard',
    sub: 'Know exactly where your share of voice stands.',
    icon: BarChart3,
    link: '/tools/sqp-dashboard',
    desc: 'Upload your Search Query Performance report and instantly visualise your branded vs non-branded split, click share, and exactly where competitors are outranking you.',
  },
  {
    id: 'graduation',
    name: 'Graduation Finder',
    sub: 'Graduate winning terms before competitors do.',
    icon: Award,
    link: '/tools/graduation-finder',
    desc: 'Automatically identifies which broad/phrase search terms have hit your conversion threshold and are ready to be added as Exact match targets for full budget control.',
  },
  {
    id: 'cannibalization',
    name: 'Keyword Cannibalization Analyzer',
    sub: 'Stop campaigns from competing against each other.',
    icon: Target,
    link: '/tools/keyword-cannibalization',
    desc: 'Detect overlapping keyword targets across your campaigns. Find exact, phrase and broad matches that are bidding against each other and silently draining your budget.',
  },
];

export default function FreeToolsTabs() {
  const [activeTabId, setActiveTabId] = useState('ngram');

  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInWhenVisible className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            PROPRIETARY TOOL SUITE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Fix Amazon PPC Inefficiencies & Claim Top Ranks.
          </h2>
          <p className="mt-4 text-lg text-slate-600 font-normal">
            We've opened access to the exact Amazon PPC auditing tools our team uses to scale 7 and 8-figure brands. Plug in your reports and uncover growth opportunities instantly.
          </p>
        </FadeInWhenVisible>

        {/* 2-Column Tabs Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Selector Column */}
          <FadeInWhenVisible className="lg:col-span-5 flex flex-col gap-3">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeTabId;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-200 cursor-pointer relative overflow-hidden ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xl'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-slate-800 text-emerald-400' : 'bg-white text-slate-700 border border-slate-200'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`font-bold text-base ${isActive ? 'text-white' : 'text-slate-900'}`}>
                        {tab.name}
                      </div>
                      <div className={`text-xs ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                        {tab.sub}
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}

            <div className="mt-4 pt-4 text-center">
              <Link 
                to="/tools" 
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-slate-700 transition-colors"
              >
                <span>View all 16 free Amazon PPC tools</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInWhenVisible>

          {/* Right Preview Display */}
          <FadeInWhenVisible delay={0.2} className="lg:col-span-7 bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-2xl min-h-[460px] flex flex-col justify-between">
            
            {/* Top Bar of Preview */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{activeTab.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-md">{activeTab.desc}</p>
                </div>
                <Link
                  to={activeTab.link}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shrink-0 shadow-md"
                >
                  <span>Launch Tool</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Dynamic Interactive Rendered Content based on tab with Motion */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTabId}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTabId === 'ngram' && (
                    <div className="overflow-x-auto">
                      <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-3">Live N-Gram Frequency Sample</div>
                      <table className="w-full text-left text-xs text-slate-300">
                        <thead>
                          <tr className="border-b border-slate-800 text-slate-400">
                            <th className="pb-2">N-Gram</th>
                            <th className="pb-2">Impr.</th>
                            <th className="pb-2">Clicks</th>
                            <th className="pb-2">Spend</th>
                            <th className="pb-2">ACOS</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                          <tr>
                            <td className="py-2.5 font-bold text-white">protein powder</td>
                            <td>14,820</td>
                            <td>312</td>
                            <td>$187</td>
                            <td className="text-emerald-400 font-bold">12%</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 font-bold text-white">whey protein</td>
                            <td>9,440</td>
                            <td>198</td>
                            <td>$143</td>
                            <td className="text-emerald-400 font-bold">19%</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 font-bold text-white">vanilla protein</td>
                            <td>6,210</td>
                            <td>89</td>
                            <td>$212</td>
                            <td className="text-rose-400 font-bold">58%</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 font-bold text-white">5lb protein</td>
                            <td>4,870</td>
                            <td>201</td>
                            <td>$96</td>
                            <td className="text-emerald-400 font-bold">8%</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 font-bold text-white">keto protein</td>
                            <td>3,120</td>
                            <td>44</td>
                            <td>$167</td>
                            <td className="text-rose-400 font-bold">72%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {activeTabId === 'sqp' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                          <div className="text-xs text-slate-400">Branded Share</div>
                          <div className="text-2xl font-black text-white mt-1">68%</div>
                        </div>
                        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                          <div className="text-xs text-slate-400">Non-Branded Share</div>
                          <div className="text-2xl font-black text-emerald-400 mt-1">32%</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                          <div className="text-xs text-slate-400">Your Click Share</div>
                          <div className="text-xl font-bold text-white mt-1">41%</div>
                        </div>
                        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                          <div className="text-xs text-slate-400">Competitor Click Share</div>
                          <div className="text-xl font-bold text-rose-400 mt-1">59%</div>
                        </div>
                      </div>
                      <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-300 text-xs">
                        <strong>Audit Insight:</strong> Competitors hold 59% click share on non-branded queries. Increase bids on top-of-search to reclaim position.
                      </div>
                    </div>
                  )}

                  {activeTabId === 'graduation' && (
                    <div className="space-y-3">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Search Terms Ready To Graduate To Exact</div>
                      {[
                        { term: 'organic protein powder 5lb', CVR: '14.2%', status: 'Ready' },
                        { term: 'keto friendly whey protein', CVR: '11.7%', status: 'Ready' },
                        { term: 'chocolate protein shake mix', CVR: '9.4%', status: 'Ready' },
                        { term: 'sugar free protein powder', CVR: '8.1%', status: 'Watch' },
                      ].map((row, i) => (
                        <div key={i} className="flex items-center justify-between bg-slate-800 p-3 rounded-xl border border-slate-700">
                          <div>
                            <div className="text-xs font-bold text-white">{row.term}</div>
                            <div className="text-[10px] text-slate-400">Conversion Rate: {row.CVR}</div>
                          </div>
                          <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${
                            row.status === 'Ready' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-700 text-slate-300'
                          }`}>
                            {row.status === 'Ready' ? 'Graduate Now' : 'Monitoring'}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTabId === 'cannibalization' && (
                    <div className="space-y-4">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Bidding Overlap Conflicts Detected</div>
                      <div className="space-y-2">
                        <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700 flex items-center justify-between text-xs">
                          <div>
                            <div className="font-bold text-white">protein powder</div>
                            <div className="text-slate-400 text-[10px]">SP-Auto ↔ SP-Exact</div>
                          </div>
                          <span className="text-rose-400 font-bold">$43/mo Waste</span>
                        </div>
                        <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700 flex items-center justify-between text-xs">
                          <div>
                            <div className="font-bold text-white">whey protein isolate</div>
                            <div className="text-slate-400 text-[10px]">SP-Broad ↔ SD-Exact</div>
                          </div>
                          <span className="text-rose-400 font-bold">$31/mo Waste</span>
                        </div>
                        <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700 flex items-center justify-between text-xs">
                          <div>
                            <div className="font-bold text-white">keto protein shake</div>
                            <div className="text-slate-400 text-[10px]">SP-Phrase ↔ SB-Exact</div>
                          </div>
                          <span className="text-amber-400 font-bold">$18/mo Waste</span>
                        </div>
                      </div>
                      <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-between text-xs text-slate-300">
                        <span>Total Estimated Monthly Waste:</span>
                        <strong className="text-rose-400 text-sm">$92/mo</strong>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Footer Note */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Zero setup required — 100% browser-based & secure</span>
              <span className="text-emerald-400 font-bold">No Credit Card Needed</span>
            </div>

          </FadeInWhenVisible>

        </div>

      </div>
    </section>
  );
}
