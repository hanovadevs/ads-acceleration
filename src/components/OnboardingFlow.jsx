import React from 'react';
import { CheckCircle2, ShieldAlert, Sliders, Rocket } from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, StaggerItem } from './AnimatedSection';

const STEPS = [
  {
    num: '01',
    title: 'Transparency First - Complete Brand Audit',
    desc: 'We begin with a deep-dive into your account — pulling backend data, reviewing PPC efficiency, and analyzing your competitive landscape before we touch a single campaign.',
    icon: ShieldAlert,
    checklist: [
      'Full account health & compliance review',
      'Competitor & market share analysis',
      'PPC efficiency & search term gap audit',
    ],
  },
  {
    num: '02',
    title: 'Precision Targeting - Scope & Goal Clarity',
    desc: 'We then host a dedicated strategy session to align on KPIs, define keyword dominance targets, and set concrete tACOS thresholds — leaving zero room for ambiguity.',
    icon: Sliders,
    checklist: [
      'tACOS & margin optimization targets defined',
      'Monthly revenue & profitability goals set',
      'Custom PPC architecture blue-printed',
    ],
  },
  {
    num: '03',
    title: 'Fast-Track Launch - Strategic Execution',
    desc: "Within 2–4 weeks, we complete a full technical implementation. You get a dedicated Slack channel, custom dashboards, and weekly syncs — so you're always in the loop.",
    icon: Rocket,
    checklist: [
      '2–4 week fast-track implementation',
      'Custom performance reporting dashboards',
      'Full-scale PPC & listing optimization',
    ],
  },
];

export default function OnboardingFlow() {
  return (
    <section id="process" className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeInWhenVisible className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            ONBOARDING FLOW
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            3 Steps to Full Acceleration.
          </h2>
          <p className="mt-4 text-lg text-slate-600 font-normal">
            From first call to full execution — a structured, transparent process built to move fast without missing a thing.
          </p>
        </FadeInWhenVisible>

        {/* 3 Step Cards Timeline */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={idx}>
                <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full relative">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="w-10 h-10 rounded-2xl bg-slate-900 text-emerald-400 font-black text-sm flex items-center justify-center">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200/70 space-y-2.5">
                    {step.checklist.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
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
