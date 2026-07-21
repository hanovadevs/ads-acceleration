import React from 'react';
import { Target, PieChart, ShieldCheck, Compass, BarChart3, Lock } from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, StaggerItem } from './AnimatedSection';

const SOLUTIONS = [
  {
    num: '01',
    title: 'We track true margin, not just ACOS',
    desc: 'We identify exactly where spend is hurting profit and tell you when to scale or hold back based on real net margin.',
    icon: PieChart,
  },
  {
    num: '02',
    title: 'Every campaign is built to lift organic rank',
    desc: 'We structure bids and placement targets specifically to boost organic positions and lower long-term TACoS dependency.',
    icon: Target,
  },
  {
    num: '03',
    title: 'We start with a full business audit',
    desc: 'Backend profit margins, competitor dynamics, search volume gaps — mapped out before we touch a single live campaign.',
    icon: ShieldCheck,
  },
  {
    num: '04',
    title: 'You get a strategy, not a spreadsheet',
    desc: 'A custom bi-weekly action plan built around your specific product margins, unit economics, and quarterly targets.',
    icon: Compass,
  },
  {
    num: '05',
    title: 'We scale spend only when numbers justify it',
    desc: 'Every budget increase is directly tied to validated net profit margin data, never arbitrary guesswork.',
    icon: BarChart3,
  },
  {
    num: '06',
    title: 'We build keyword dominance for your category',
    desc: 'Targeting and bidding architecture engineered specifically to systematically take and protect top-of-search positions.',
    icon: Lock,
  },
];

export default function EngineeringProfit() {
  return (
    <section className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeInWhenVisible className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            HOW WE FIX IT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Stop Managing Ads. Start Engineering Profit.
          </h2>
          <p className="mt-4 text-lg text-slate-600 font-normal leading-relaxed">
            Most Amazon advertising agencies focus on clicks. We focus on margin. By aligning campaign architecture with your real bottom-line data, this Amazon PPC agency turns ad spend into a growth asset, not a monthly expense.
          </p>
        </FadeInWhenVisible>

        {/* Staggered Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={idx}>
                <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl hover:border-slate-600 transition-all duration-300 group flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-sm font-extrabold text-slate-500 group-hover:text-emerald-400 transition-colors">
                        {item.num}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-slate-800 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold uppercase tracking-wider text-slate-400">Ads Acceleration System</span>
                    <span className="text-emerald-400 font-bold">Proven Protocol</span>
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
