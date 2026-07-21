import React from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight, ShieldAlert, Sliders, Rocket, Target, Search, Zap } from 'lucide-react';
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
    <section id="process" className="py-24 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/80 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Soft Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-slate-200/40 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeInWhenVisible className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            ONBOARDING FLOW
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            3 Steps to Full Acceleration.
          </h2>
          <p className="mt-4 text-lg text-slate-600 font-normal">
            From first call to full execution — a structured, transparent process built to move fast without missing a thing.
          </p>
        </FadeInWhenVisible>

        {/* 3 Ultra-Stylish Step Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={idx}>
                <div className="bg-white/90 backdrop-blur-md rounded-[32px] p-8 border border-slate-200/90 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between h-full relative group">
                  
                  <div>
                    {/* Top Badges Header Row */}
                    <div className="flex items-center justify-between mb-8">
                      
                      {/* Number Capsule Badge */}
                      <div className="w-14 h-10 rounded-2xl bg-slate-950 shadow-lg shadow-slate-950/20 border border-slate-800 flex items-center justify-center">
                        <span className="font-extrabold text-base tracking-tight text-emerald-400">
                          {step.num}
                        </span>
                      </div>

                      {/* Icon Badge */}
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs flex items-center justify-center text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>

                    </div>

                    {/* Title with Vertical Accent Line */}
                    <div className="flex items-start mb-4">
                      <div className="w-1 h-12 rounded-full bg-slate-900 mr-3.5 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
                          {step.titleMain}
                        </h3>
                        <div className="text-lg font-bold text-slate-600 tracking-tight mt-1">
                          {step.titleSub}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-8 font-normal">
                      {step.desc}
                    </p>

                    {/* Checklist Sub-card Pills */}
                    <div className="space-y-3 mb-8">
                      {step.checklist.map((item, i) => (
                        <div 
                          key={i} 
                          className="bg-slate-50/90 hover:bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex items-center justify-between group/pill cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                            <span className="text-xs font-bold text-slate-800 group-hover/pill:text-slate-950">
                              {item}
                            </span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover/pill:text-slate-800 group-hover/pill:translate-x-0.5 transition-all" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Tagline */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-center text-[10px] font-extrabold tracking-widest uppercase text-slate-400">
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
