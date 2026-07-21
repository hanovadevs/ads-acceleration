import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { FadeInWhenVisible } from './AnimatedSection';

const CASE_STUDIES = [
  {
    badge: 'PPC STRATEGY',
    title: 'Scaling Profit Margin from 10% to 16% While Growing Revenue',
    desc: 'Watch how we transformed a stagnant profit margin into a growth engine. By restructuring PPC spend and tightening cost efficiency across the board, we took this brand from a 10% margin to 16% — all while revenue climbed month over month, hitting $160,000 in March alone. This wasn\'t just about cutting costs. It was about making every ad dollar work harder so the bottom line grew alongside the top line.',
    image: '/images/case_study_1.png',
    stats: [
      { val: '$391,182', label: 'TOTAL QUARTERLY SALES' },
      { val: '$54,594', label: 'TOTAL QUARTERLY PROFIT' },
      { val: '16%', label: 'PEAK NET MARGIN' },
    ],
    reverse: false,
  },
  {
    badge: 'BRAND GROWTH',
    title: 'Accelerated Quarterly Growth: 2X Revenue with a Data-Backed Approach',
    desc: 'Starting from a solid foundation, we doubled this brand\'s revenue year over year — going from $371,000 to $748,000 in the same quarter, a 101% increase in ordered product sales. With TACOS held steady at 12.62% and margin growing to 15.25% by March, every month showed clear, measurable improvement. The strategy was simple: let data drive every bid, every budget, and every decision.',
    image: '/images/case_study_2.png',
    stats: [
      { val: '$748,193', label: 'Q1 TOTAL SALES' },
      { val: '101%', label: 'YOY REVENUE GROWTH' },
      { val: '$94,365', label: 'QUARTERLY PROFIT' },
    ],
    reverse: true,
  },
  {
    badge: 'LISTING & APPAREL',
    title: '$1M Revenue in Apparel with TACOS of 11.74%',
    desc: 'In one of Amazon\'s most competitive categories, we helped this apparel brand cross the $1,000,000 monthly revenue milestone while keeping TACOS at just 11.74% — a number most brands in this space can only dream of. With over 69,000 units ordered and a 21% year-over-year growth in order volume, the results speak for themselves. Efficiency and scale, achieved together.',
    image: '/images/case_study_3.png',
    stats: [
      { val: '$1,060,788', label: 'MONTHLY REVENUE' },
      { val: '11.74%', label: 'TARGET TACOS' },
      { val: '27%', label: 'NET MARGIN' },
    ],
    reverse: false,
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      
      {/* Background Dashed Line Accent */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-r-2 border-dashed border-slate-200 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeInWhenVisible className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-widest mb-4 border border-slate-200 shadow-xs">
            <span>CASE STUDIES</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Real Brands, <br className="hidden sm:inline" />
            <span className="italic font-serif font-normal text-slate-700">Real Results</span>
          </h2>
          
          <p className="mt-4 text-lg text-slate-600 font-normal">
            Numbers don't lie — here's what happens when data-driven strategy meets execution.
          </p>
        </FadeInWhenVisible>

        {/* Case Study Split Rows */}
        <div className="space-y-24">
          {CASE_STUDIES.map((study, idx) => (
            <FadeInWhenVisible key={idx} delay={0.1}>
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                study.reverse ? 'lg:flex-row-reverse' : ''
              }`}>
                
                {/* Visual Image Card Frame */}
                <div className={`lg:col-span-6 ${study.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-3xl p-4 sm:p-6 bg-slate-900 border border-slate-800 shadow-2xl group hover:shadow-slate-900/30 transition-all duration-300">
                    
                    {/* Badge Pill */}
                    <div className="absolute top-8 left-8 z-10 px-3.5 py-1.5 rounded-full bg-slate-800/90 text-white font-extrabold text-xs uppercase tracking-wider border border-slate-700 shadow-md">
                      {study.badge}
                    </div>

                    {/* Screenshot Frame */}
                    <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                    </div>

                  </div>
                </div>

                {/* Text & Stats Content */}
                <div className={`lg:col-span-6 space-y-6 ${study.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                    {study.title}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed font-normal">
                    {study.desc}
                  </p>

                  {/* 3 Stats Counters */}
                  <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4">
                    {study.stats.map((st, i) => (
                      <div key={i}>
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                          {st.val}
                        </div>
                        <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* View All CTA */}
        <FadeInWhenVisible className="mt-20 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20"
          >
            <span>View All Case Studies</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </FadeInWhenVisible>

      </div>
    </section>
  );
}
