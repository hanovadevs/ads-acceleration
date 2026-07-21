import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { FadeInWhenVisible, StaggerContainer, StaggerItem } from './AnimatedSection';

const TESTIMONIALS = [
  {
    author: 'David M.',
    role: '7-Figure Home Goods Brand Owner',
    quote: 'Affan and his team completely turned our account around. In just 60 days, our TACoS dropped from 22% down to 12.8% while monthly revenue grew by $45k. Unbelievable precision.',
    metrics: '-9.2% TACoS in 60 Days',
    channel: 'Slack Update',
  },
  {
    author: 'Sarah Jenkins',
    role: 'Co-Founder, VitaSupps',
    quote: 'The bi-weekly reporting is standard-setting. No fluff, just straight margins, SKU-by-SKU breakdown, and explicit action items. They operate like our own internal PPC department.',
    metrics: '$748K Revenue Q1',
    channel: 'Client Review',
  },
  {
    author: 'Marcus Vance',
    role: 'MDS Member & Apparel Seller',
    quote: 'We crossed $1M monthly revenue with an 11.74% TACoS. Other agencies kept claiming it was impossible in apparel due to high CPCs. GrowTech Advertising proved them wrong.',
    metrics: '$1.06M Monthly Rev',
    channel: 'Verified Feedback',
  },
  {
    author: 'Elena Rostova',
    role: 'Founder, EcoHome Solutions',
    quote: 'Their N-Gram and keyword cannibalization analysis surfaced $4,200 of monthly ad spend that was literally burning away on duplicate broad targets. Fixed in week two!',
    metrics: '$4.2K Wasted Spend Saved',
    channel: 'Slack Update',
  },
  {
    author: 'Chris B.',
    role: '8-Figure Fitness Brand Director',
    quote: 'Working directly with Affan Mughal gives us complete confidence. He understands EBITDA, net margin, and inventory turnover — not just vanity ACOS numbers.',
    metrics: '16% Peak Net Margin',
    channel: 'Executive Call',
  },
  {
    author: 'Julian Thorne',
    role: 'Managing Director, Aura Beauty',
    quote: 'The transition from standard percentage-of-spend agencies to GrowTech Advertising\'s fixed-retainer model was the best business decision we made this year.',
    metrics: '+101% YoY Growth',
    channel: 'Verified Review',
  },
];

export default function WallOfLove() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeInWhenVisible className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17253F] text-white text-[11px] font-bold uppercase tracking-widest mb-3 shadow-xs">
            WALL OF LOVE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17253F] tracking-tight leading-tight">
            Real Results from Real Sellers.
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Don't just take our word for it. Discover how our strategies have transformed Amazon businesses into market leaders with unmatched profitability.
          </p>
        </FadeInWhenVisible>

        {/* Testimonial Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {TESTIMONIALS.map((t, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-1 text-[#D99B26]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D99B26]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {t.channel}
                    </span>
                  </div>

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-5 font-normal italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-extrabold text-xs text-[#17253F]">{t.author}</div>
                    <div className="text-[11px] text-slate-500">{t.role}</div>
                  </div>
                  <div className="text-[11px] font-black text-[#17253F] bg-amber-50 text-[#D99B26] px-2.5 py-1 rounded-md border border-amber-200/80">
                    {t.metrics}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All CTA */}
        <FadeInWhenVisible className="text-center">
          <Link
            to="/success-stories"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#17253F] hover:bg-[#D99B26] hover:text-slate-950 transition-all shadow-md"
          >
            <span>View All Success Stories & Reviews</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeInWhenVisible>

      </div>
    </section>
  );
}
