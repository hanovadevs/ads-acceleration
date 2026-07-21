import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, UserX, FileWarning, DollarSign, Award } from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, StaggerItem } from './AnimatedSection';

const KILLERS = [
  {
    num: '01',
    title: 'Your ACOS looks fine, but profit is disappearing',
    desc: "You're optimizing for the wrong number. ACOS doesn't show margin bleed or backend advertising leakage.",
    icon: DollarSign,
  },
  {
    num: '02',
    title: "You're running ads but organic rank isn't moving",
    desc: 'Paid and organic traffic are running in isolated silos with zero keyword positioning coordination.',
    icon: TrendingDown,
  },
  {
    num: '03',
    title: 'Nobody managing your ads really knows your business',
    desc: 'No profit margin context, zero product category knowledge — just recycled generic agency templates.',
    icon: UserX,
  },
  {
    num: '04',
    title: 'You get reports, but never a clear next step',
    desc: 'Dashboards full of confusing numbers, but no dedicated strategist telling you what to actually execute next.',
    icon: FileWarning,
  },
  {
    num: '05',
    title: "You're scaling spend but revenue isn't following",
    desc: 'More ad budget is poured in every month, but profit returns keep shrinking while ad bleed increases.',
    icon: AlertCircle,
  },
  {
    num: '06',
    title: 'Your competitors are outranking you every week',
    desc: "They're systematically taking market share on top converting search terms while your rank slowly slips.",
    icon: Award,
  },
];

export default function GrowthKillers() {
  return (
    <section className="py-24 bg-slate-100/70 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Fade In */}
        <FadeInWhenVisible className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-widest mb-4">
            SOUND FAMILIAR?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            This Is Exactly What's Killing Your Growth.
          </h2>
          <p className="mt-4 text-lg text-slate-600 font-normal">
            If any of these sound familiar, you're leaving serious margin and revenue on the table every single day.
          </p>
        </FadeInWhenVisible>

        {/* Staggered Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {KILLERS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={idx}>
                <div className="glass-card p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-400 transition-all duration-300 group flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-sm font-extrabold text-slate-400 group-hover:text-slate-900 transition-colors">
                        {item.num}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-slate-900 text-slate-100 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                        <Icon className="w-5 h-5 text-slate-200" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                    <span>Identified Risk Factor</span>
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
