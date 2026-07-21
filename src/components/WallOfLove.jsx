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
    quote: 'We crossed $1M monthly revenue with an 11.74% TACoS. Other agencies kept claiming it was impossible in apparel due to high CPCs. Ads Acceleration proved them wrong.',
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
    quote: 'The transition from standard percentage-of-spend agencies to Ads Acceleration fixed-retainer model was the best business decision we made this year.',
    metrics: '+101% YoY Growth',
    channel: 'Verified Review',
  },
];

export default function WallOfLove() {
  return (
    <section id="testimonials" className="py-24 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeInWhenVisible className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            WALL OF LOVE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Real Results from Real Sellers.
          </h2>
          <p className="mt-4 text-lg text-slate-600 font-normal">
            Don't just take our word for it. Discover how our strategies have transformed Amazon businesses into market leaders with unmatched profitability.
          </p>
        </FadeInWhenVisible>

        {/* Testimonial Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.map((t, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      {t.channel}
                    </span>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed mb-6 font-normal italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-extrabold text-sm text-slate-900">{t.author}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                  <div className="text-xs font-black text-slate-900 bg-slate-100 px-2.5 py-1.5 rounded-lg border border-slate-200">
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-md"
          >
            <span>View All Success Stories & Raw Unedited Reviews</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeInWhenVisible>

      </div>
    </section>
  );
}
