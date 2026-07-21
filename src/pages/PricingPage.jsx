import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ShieldCheck, HelpCircle, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';

const TIERS = [
  {
    name: 'Growth',
    spend: 'Up to $25K/mo ad spend',
    desc: 'Amazon brands scaling their first flagship product or expanding initial category catalog.',
    popular: false,
    features: [
      'Full SP / SB / SD campaign management',
      'Monthly TACoS & profit margin reporting',
      'N-gram + keyword cannibalization analysis',
      'Bid optimization every 7 days',
      'Quarterly account restructuring',
      'Dedicated Slack channel',
    ],
  },
  {
    name: 'Scale',
    spend: '$25K – $100K/mo ad spend',
    desc: '7-figure brands expanding to multiple ASINs, variations, or global markets.',
    popular: true,
    features: [
      'Everything in Growth tier',
      'SQP share-of-voice monitoring',
      'Organic rank tracking & PPC-to-organic alignment',
      'Placement & audience segmentation analysis',
      'Bi-weekly strategy sync calls',
      'Competitor ASIN benchmarking (Keepa)',
      'Priority response within 4 hours',
    ],
  },
  {
    name: 'Enterprise',
    spend: '$100K+/mo ad spend',
    desc: '8-figure brands, multi-category catalogs, or complex international accounts.',
    popular: false,
    features: [
      'Everything in Scale tier',
      'Custom automation rules & bulk sheet workflows',
      'Full audit tool suite access (all 16 tools)',
      'Monthly executive business review with Affan Mughal',
      'Co-managed DSP strategy & execution',
      'Dedicated lead strategist + account manager',
      'Custom real-time reporting dashboard',
    ],
  },
];

const PRICING_FAQS = [
  {
    q: 'How is agency pricing structured?',
    a: 'GrowTech Advertising uses a fixed monthly retainer model tied to your ad spend tier. Pricing scales with the complexity and volume of your account — not a flat fee regardless of size. All plans require a minimum 3-month commitment to allow the TACoS reduction strategy to show measurable results.',
  },
  {
    q: 'Do you charge a percentage of ad spend?',
    a: 'No. We use a fixed monthly retainer, not a percentage-of-spend model. Percentage-based fees create a conflict of interest — agencies get paid more when you spend more, regardless of efficiency. Our model is aligned with your profitability, not your ad budget.',
  },
  {
    q: 'What results can I expect and in what timeframe?',
    a: 'Most clients see measurable TACoS reduction within 45–60 days and meaningful organic rank velocity improvement within 90 days. Our 120-day program is designed to deliver a stabilized, profitable ad structure with a clear path to sub-15% TACoS.',
  },
  {
    q: 'Is there a setup fee or onboarding cost?',
    a: 'There is no separate setup fee. Onboarding — including our initial account audit, competitive landscape review, and campaign restructuring — is included in the first month\'s retainer.',
  },
  {
    q: 'What does the initial audit include?',
    a: 'A complete review of your current campaign structure, keyword targeting, bid logic, search term bleed, placement performance, organic rank position, and TACoS trajectory. You will receive a written action plan before any changes are made.',
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            AGENCY PRICING
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Transparent Retainer Pricing. Aligned With Your Profitability.
          </h1>
          <p className="mt-4 text-lg text-slate-600 font-normal leading-relaxed">
            No percentage-of-spend fees. No hidden setup costs. Fixed monthly retainers sized to your ad spend volume — so our incentives match yours.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-stretch">
          {TIERS.map((tier, idx) => (
            <div 
              key={idx}
              className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative ${
                tier.popular 
                  ? 'bg-slate-900 text-white border-2 border-slate-800 shadow-2xl scale-105 z-10' 
                  : 'bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-lg'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
                  MOST POPULAR PLAN
                </div>
              )}

              <div>
                <div className="mb-6">
                  <h3 className={`text-2xl font-extrabold ${tier.popular ? 'text-white' : 'text-slate-900'}`}>
                    {tier.name}
                  </h3>
                  <div className={`text-sm font-bold mt-1 ${tier.popular ? 'text-emerald-400' : 'text-slate-600'}`}>
                    {tier.spend}
                  </div>
                  <p className={`text-xs mt-3 leading-relaxed ${tier.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                    {tier.desc}
                  </p>
                </div>

                <div className={`pt-6 border-t ${tier.popular ? 'border-slate-800' : 'border-slate-100'} space-y-3 mb-8`}>
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs font-medium">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.popular ? 'text-emerald-400' : 'text-slate-900'}`} />
                      <span className={tier.popular ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  to="/book-call"
                  className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-full font-bold text-sm transition-all shadow-md ${
                    tier.popular
                      ? 'bg-emerald-400 text-slate-950 hover:bg-emerald-300'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  <span>Get Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Subtext */}
        <div className="text-center max-w-2xl mx-auto mb-20 text-xs text-slate-500 font-medium leading-relaxed">
          Exact pricing is shared during the strategy call. Every engagement is scoped based on account complexity, number of ASINs, active campaign count, and target markets. Book a call to receive a written proposal within 24 hours.
        </div>

        {/* Pricing FAQs Accordion */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">Pricing FAQs</h2>
          </div>

          <div className="space-y-4">
            {PRICING_FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex items-center justify-between font-bold text-slate-900 text-base cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pre-Footer CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-10 text-center border border-slate-800 shadow-2xl">
          <h2 className="text-3xl font-extrabold mb-3">Ready to see if we're a fit?</h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto mb-6">
            Book a zero-obligation 45-minute strategy call. You'll leave with a written account audit and a growth roadmap — whether you hire us or not.
          </p>
          <Link
            to="/book-call"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md"
          >
            <span>Book a Free Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
