import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingUp, CheckCircle2, ShieldCheck } from 'lucide-react';

const CASE_STUDIES = [
  {
    title: 'Strategic Variation Launch for Home Improvement',
    desc: 'Restructured campaign architecture and launched targeted variation ASINs to unlock hidden revenue streams across mature listings.',
    stats: [
      { label: 'Revenue Growth', val: '163%' },
      { label: 'TACoS Reduction', val: '-46%' },
    ],
  },
  {
    title: '$100K/Month Seasonal Brand Momentum',
    desc: 'Leveraging off-season search data to build keyword ranking momentum before the peak 7-month high volume sales cycle.',
    stats: [
      { label: 'Revenue Boost', val: '450%' },
      { label: 'TACoS Improvement', val: '-110%' },
    ],
  },
  {
    title: '3X Growth via Kitchen Brand Upselling',
    desc: 'Implemented a data-driven cross-sell matrix turning single-purchase buyers into loyalists across complementary product lines.',
    stats: [
      { label: 'Revenue Multiplied', val: '3.0×' },
      { label: 'Efficiency Gain', val: '+78%' },
    ],
  },
  {
    title: 'Apparel Category Dominance Expansion',
    desc: 'Scaling a niche apparel brand through precise attribute targeting, lifestyle creative resonance, and top-of-search placement control.',
    stats: [
      { label: 'Sales Increase', val: '210%' },
      { label: 'Market Share', val: '55%' },
    ],
  },
  {
    title: 'Gym & Fitness Equipment Power Scaling',
    desc: 'Aggressive top-of-funnel strategy for high-volume fitness keywords resulting in organic takeover of competitive SERP real estate.',
    stats: [
      { label: 'Organic Growth', val: '188%' },
      { label: 'ROAS Lift', val: '3.2×' },
    ],
  },
  {
    title: 'Niche Apparel Micro-Targeting',
    desc: 'Deep-dive keyword research and long-tail focus for a specialized apparel line with 10% lower ACoS than category averages.',
    stats: [
      { label: 'Total ACoS', val: '12%' },
      { label: 'Top 10 Ranks', val: '45+' },
    ],
  },
  {
    title: 'Rapid Market Re-Entry Strategy',
    desc: 'How we helped a previously suspended brand regain its #1 Bestseller badge in under 45 days after account reinstatement.',
    stats: [
      { label: 'Restored Position', val: 'BSR #1' },
      { label: 'Retention Rate', val: '92%' },
    ],
  },
  {
    title: 'Luxury Home Decor Brand Elevation',
    desc: 'Blending high-end brand storytelling with search data to increase average order value by 40% while lowering ad dependency.',
    stats: [
      { label: 'AOV Increase', val: '+40%' },
      { label: 'Brand Search', val: '2.5×' },
    ],
  },
  {
    title: 'Inventory-Aware Ad Automation',
    desc: 'Dynamic bidding adjustments based on real-time inventory levels to prevent wasteful spend during stock shortage periods.',
    stats: [
      { label: 'OOS Waste', val: '$0' },
      { label: 'Profit Lift', val: '+25%' },
    ],
  },
  {
    title: 'Multi-Market Global Expansion',
    desc: 'Launching a domestic leader into EU and UK markets with localized SEO and localized PPC bidding rules.',
    stats: [
      { label: 'Month 1 Sales', val: '£50,000' },
      { label: 'Global Reach', val: '3 Markets' },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            EVIDENCE-BASED GROWTH STRATEGIES
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Verified Case Studies.
          </h1>
          <p className="mt-4 text-lg text-slate-600 font-normal">
            A behind-the-scenes look at how we've scaled brands to 7 and 8 figures using data-driven PPC architecture and organic ranking mastery.
          </p>
        </div>

        {/* 10 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {CASE_STUDIES.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  CASE STUDY #{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl">
                {item.stats.map((st, i) => (
                  <div key={i}>
                    <div className="text-xl font-black text-slate-900">{st.val}</div>
                    <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Success Stories */}
        <div className="bg-slate-900 text-white rounded-3xl p-10 text-center border border-slate-800 shadow-2xl">
          <h2 className="text-3xl font-extrabold mb-3">Want to See Raw Unedited Client Feedback?</h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto mb-6">
            Check out our Wall of Love featuring unedited Slack screenshots, review notes, and verified brand owner testimonials.
          </p>
          <Link
            to="/success-stories"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md"
          >
            <span>Explore Success Stories (Wall of Love)</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
