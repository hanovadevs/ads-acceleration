import React from 'react';
import { Target, PieChart, ShieldCheck, Compass, BarChart3, Lock, ChevronRight } from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, StaggerItem } from './AnimatedSection';

const SOLUTIONS = [
  {
    num: '01',
    titleMain: 'Tracking True Margin,',
    titleSub: 'Not Just Vanity ACOS',
    desc: 'We identify exactly where spend is hurting profit and tell you when to scale or hold back based on real net margin.',
    icon: PieChart,
    tag: 'NET MARGIN FOCUS',
  },
  {
    num: '02',
    titleMain: 'Campaign Architecture',
    titleSub: 'Built for Organic Rank',
    desc: 'We structure bids and placement targets specifically to boost organic positions and lower long-term TACoS dependency.',
    icon: Target,
    tag: 'ORGANIC RANK SYNERGY',
  },
  {
    num: '03',
    titleMain: 'Deep Business Audit',
    titleSub: 'Before Any Changes',
    desc: 'Backend profit margins, competitor dynamics, search volume gaps — mapped out before we touch a single live campaign.',
    icon: ShieldCheck,
    tag: 'FULL ACCOUNT AUDIT',
  },
  {
    num: '04',
    titleMain: 'Action Plan Strategy,',
    titleSub: 'Not Just Spreadsheets',
    desc: 'A custom bi-weekly action plan built around your specific product margins, unit economics, and quarterly targets.',
    icon: Compass,
    tag: 'BI-WEEKLY ROADMAP',
  },
  {
    num: '05',
    titleMain: 'Scaling Spend Only',
    titleSub: 'When Data Justifies',
    desc: 'Every budget increase is directly tied to validated net profit margin data, never arbitrary guesswork.',
    icon: BarChart3,
    tag: 'DATA-BACKED SCALING',
  },
  {
    num: '06',
    titleMain: 'Keyword Dominance',
    titleSub: 'For Your Category',
    desc: 'Targeting and bidding architecture engineered specifically to systematically take and protect top-of-search positions.',
    icon: Lock,
    tag: 'TOP OF SEARCH CONTROL',
  },
];

export default function EngineeringProfit() {
  return (
    <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeInWhenVisible className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            HOW WE FIX IT
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Stop Managing Ads. Start Engineering Profit.
          </h2>
          <p className="mt-4 text-lg text-slate-600 font-normal leading-relaxed">
            Most Amazon advertising agencies focus on clicks. We focus on margin. By aligning campaign architecture with your real bottom-line data, this Amazon PPC agency turns ad spend into a growth asset, not a monthly expense.
          </p>
        </FadeInWhenVisible>

        {/* 6 Dark Obsidian Ultra-Stylish Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={idx}>
                <div className="bg-slate-950 text-white rounded-[32px] p-8 border border-slate-800 shadow-2xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between h-full group">
                  
                  <div>
                    {/* Top Badges Row */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-10 rounded-2xl bg-slate-900 shadow-inner border border-slate-800 flex items-center justify-center">
                        <span className="font-extrabold text-base tracking-tight text-emerald-400">
                          {item.num}
                        </span>
                      </div>

                      <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-slate-950 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title with Vertical Line */}
                    <div className="flex items-start mb-4">
                      <div className="w-1 h-12 rounded-full bg-emerald-400 mr-3.5 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-extrabold text-white tracking-tight leading-snug">
                          {item.titleMain}
                        </h3>
                        <div className="text-base font-bold text-slate-400 tracking-tight mt-0.5">
                          {item.titleSub}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Tag Pill */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full bg-slate-900 text-emerald-400 border border-slate-800">
                      {item.tag}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  </div>

                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
