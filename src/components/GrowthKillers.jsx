import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, UserX, FileWarning, DollarSign, Award, ChevronRight } from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, StaggerItem } from './AnimatedSection';

const KILLERS = [
  {
    num: '01',
    titleMain: 'Your ACOS Looks Fine,',
    titleSub: 'But Profit Is Disappearing',
    desc: "You're optimizing for the wrong vanity metric. ACOS doesn't reveal margin bleed or backend advertising leakage.",
    icon: DollarSign,
    tag: 'MARGIN BLEED DETECTED',
  },
  {
    num: '02',
    titleMain: "Running Ads, But",
    titleSub: 'Organic Rank Stagnates',
    desc: 'Paid ad spend and organic keyword positions are operating in isolated silos with zero keyword velocity coordination.',
    icon: TrendingDown,
    tag: 'RANKING FLYWHEEL BROKEN',
  },
  {
    num: '03',
    titleMain: 'Agency Managing Ads',
    titleSub: 'Lacks Category Context',
    desc: 'No profit margin context, zero product category knowledge — just recycled generic templates with zero accountability.',
    icon: UserX,
    tag: 'GENERIC TEMPLATE RISK',
  },
  {
    num: '04',
    titleMain: 'Reports Everywhere,',
    titleSub: 'Zero Actionable Steps',
    desc: 'Dashboards full of confusing numbers, but no dedicated lead strategist telling you what to actually execute next.',
    icon: FileWarning,
    tag: 'NO STRATEGIC DIRECTION',
  },
  {
    num: '05',
    titleMain: 'Scaling Ad Spend,',
    titleSub: "Revenue Isn't Following",
    desc: 'More ad budget is poured in every month, but net profit returns keep shrinking while ad bleed increases.',
    icon: AlertCircle,
    tag: 'DIMINISHING RETURNS',
  },
  {
    num: '06',
    titleMain: 'Competitors Outranking',
    titleSub: 'Your Key Keywords',
    desc: "Rivals are systematically capturing market share on top-converting search terms while your rank slowly slips.",
    icon: Award,
    tag: 'SERP MARKET SHARE LOSS',
  },
];

export default function GrowthKillers() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-100/80 via-slate-50 to-slate-100/80 border-b border-slate-200/80 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInWhenVisible className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            SOUND FAMILIAR?
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            This Is Exactly What's Killing Your Growth.
          </h2>
          <p className="mt-4 text-lg text-slate-600 font-normal">
            If any of these sound familiar, you're leaving serious margin and revenue on the table every single day.
          </p>
        </FadeInWhenVisible>

        {/* 6 Ultra-Stylish Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {KILLERS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={idx}>
                <div className="bg-white/95 backdrop-blur-md rounded-[32px] p-8 border border-slate-200/90 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between h-full group">
                  
                  <div>
                    {/* Top Badges Row */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-10 rounded-2xl bg-slate-950 shadow-md border border-slate-800 flex items-center justify-center">
                        <span className="font-extrabold text-base tracking-tight text-emerald-400">
                          {item.num}
                        </span>
                      </div>

                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex items-center justify-center text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title with Vertical Line */}
                    <div className="flex items-start mb-4">
                      <div className="w-1 h-12 rounded-full bg-slate-900 mr-3.5 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight leading-snug">
                          {item.titleMain}
                        </h3>
                        <div className="text-base font-bold text-slate-600 tracking-tight mt-0.5">
                          {item.titleSub}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Tag Pill */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {item.tag}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
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
