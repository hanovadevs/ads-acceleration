import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, StaggerItem } from './AnimatedSection';

const CASE_STUDIES = [
  {
    tag: 'PPC Strategy & Restructuring',
    title: 'Scaling Profit Margin from 10% to 16% While Growing Revenue',
    desc: 'Watch how we transformed a stagnant profit margin into a growth engine. By restructuring PPC spend and tightening cost efficiency across the board, we took this brand from a 10% margin to 16% — all while revenue climbed month over month, hitting $160,000 in March alone.',
    stats: [
      { label: 'Total Quarterly Sales', val: '$391,182' },
      { label: 'Total Quarterly Profit', val: '$54,594' },
      { label: 'Peak Net Margin', val: '16%' },
    ],
  },
  {
    tag: 'Brand Scaling & YoY Double',
    title: 'Accelerated Quarterly Growth: 2X Revenue with a Data-Backed Approach',
    desc: "Starting from a solid foundation, we doubled this brand's revenue year over year — going from $371,000 to $748,000 in the same quarter, a 101% increase in ordered product sales. With TACOS held steady at 12.62% and margin growing to 15.25%.",
    stats: [
      { label: 'Q1 Total Sales', val: '$748,193' },
      { label: 'YoY Revenue Growth', val: '101%' },
      { label: 'Quarterly Net Profit', val: '$94,365' },
    ],
  },
  {
    tag: 'Apparel Category Leadership',
    title: '$1M Revenue in Apparel with TACOS of 11.74%',
    desc: "In one of Amazon's most competitive categories, we helped this apparel brand cross the $1,000,000 monthly revenue milestone while keeping TACOS at just 11.74% — a number most brands in this space can only dream of. Over 69,000 units ordered with 21% YoY growth.",
    stats: [
      { label: 'Monthly Revenue', val: '$1,060,788' },
      { label: 'Target TACoS', val: '11.74%' },
      { label: 'Net Profit Margin', val: '27%' },
    ],
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 bg-dot-pattern border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeInWhenVisible className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-widest mb-3">
              VERIFIED SUCCESS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Real Brands, Real Results.
            </h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl font-normal">
              Numbers don't lie — here's what happens when data-driven PPC architecture meets disciplined execution.
            </p>
          </div>

          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-slate-900 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm self-start md:self-auto"
          >
            <span>View All Case Studies</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </FadeInWhenVisible>

        {/* 3 Case Study Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="inline-block px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
                    {study.tag}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    {study.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 bg-slate-50/80 p-5 rounded-2xl">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {study.stats.map((st, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-lg font-black text-slate-900">{st.val}</span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mt-0.5">{st.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
