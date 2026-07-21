import React from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight, ShieldAlert, Sliders, Rocket } from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, StaggerItem } from './AnimatedSection';

const STEPS = [
  {
    num: '01',
    titleMain: 'Transparency First',
    titleSub: 'Complete Brand Audit',
    desc: 'We begin with a dedicated strategy workshop to align KPIs, define keyword dominance, and establish backend margin clarity before touching a single campaign.',
    icon: ShieldAlert,
    tagline: 'ACCOUNT AUDIT • FIRST STEP',
    checklist: [
      'Full Account Health & Compliance Review',
      'Competitor & Market Share Analysis',
      'PPC Efficiency & Keyword Gap Audit',
    ],
  },
  {
    num: '02',
    titleMain: 'Precision Targeting',
    titleSub: 'Scope & Goal Clarity',
    desc: 'We host a dedicated strategy session to align on KPIs, define keyword dominance targets, and set concrete tACOS thresholds — leaving zero room for ambiguity.',
    icon: Sliders,
    tagline: 'STRATEGY • BEFORE EXECUTION',
    checklist: [
      'tACOS & Margin Targets Defined',
      'Monthly Revenue Goals Established',
      'Custom PPC Architecture Planned',
    ],
  },
  {
    num: '03',
    titleMain: 'Fast-Track Launch',
    titleSub: 'Strategic Execution',
    desc: 'Within 2–4 weeks, we complete a full technical implementation. You get a dedicated Slack channel, custom dashboards, and weekly syncs — so you are always in the loop.',
    icon: Rocket,
    tagline: 'SCALING • FULL ENGINE',
    checklist: [
      '2–4 Week Fast-Track Implementation',
      'Custom Performance Reporting Dashboards',
      'Full-Scale PPC & Listing Optimization',
    ],
  },
];

export default function OnboardingFlow() {
  return (
    <section id="process" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/80 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Soft Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-slate-200/40 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeInWhenVisible className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17253F] text-white text-[11px] font-bold uppercase tracking-widest mb-3 shadow-xs">
            ONBOARDING FLOW
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17253F] tracking-tight leading-tight">
            3 Steps to Full Acceleration.
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            From first call to full execution — a structured, transparent process built to move fast without missing a thing.
          </p>
        </FadeInWhenVisible>

        {/* 3 Ultra-Stylish Step Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={idx}>
                <div className="bg-white/90 backdrop-blur-md rounded-[24px] p-6 border border-slate-200/90 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between h-full relative group">
                  
                  <div>
                    {/* Top Badges Header Row */}
                    <div className="flex items-center justify-between mb-6">
                      
                      {/* Number Capsule Badge */}
                      <div className="w-12 h-8 rounded-xl bg-[#17253F] shadow-sm border border-slate-800 flex items-center justify-center">
                        <span className="font-extrabold text-sm tracking-tight text-[#D99B26]">
                          {step.num}
                        </span>
                      </div>

                      {/* Icon Badge */}
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs flex items-center justify-center text-[#17253F] group-hover:bg-[#17253F] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>

                    </div>

                    {/* Title with Vertical Accent Line */}
                    <div className="flex items-start mb-3">
                      <div className="w-1 h-10 rounded-full bg-[#17253F] mr-3 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-xl font-extrabold text-[#17253F] tracking-tight leading-none">
                          {step.titleMain}
                        </h3>
                        <div className="text-base font-bold text-slate-600 tracking-tight mt-0.5">
                          {step.titleSub}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      {step.desc}
                    </p>

                    {/* Checklist Sub-card Pills */}
                    <div className="space-y-2.5 mb-6">
                      {step.checklist.map((item, i) => (
                        <div 
                          key={i} 
                          className="bg-slate-50/90 hover:bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex items-center justify-between group/pill cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                            <span className="text-xs font-bold text-slate-800 group-hover/pill:text-[#17253F]">
                              {item}
                            </span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover/pill:text-[#17253F] group-hover/pill:translate-x-0.5 transition-all" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Tagline */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-center text-[10px] font-extrabold tracking-widest uppercase text-slate-400">
                    <span>{step.tagline}</span>
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
