import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MessageSquare, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';

const REVIEWS = [
  {
    author: 'Michael B.',
    brand: '7-Figure Kitchen & Home',
    text: 'Affan Mughal completely turned our PPC around. Wasted spend dropped by $3.4k in month one, and our organic ranks shot up for 14 core keywords within 60 days.',
    date: 'March 2026',
    verified: true,
  },
  {
    author: 'Rebecca Thorne',
    brand: 'Supplements Brand Owner',
    text: 'No other agency gave us this level of transparency. The bi-weekly video breakdown and Slack updates mean we always know what is being tested and why.',
    date: 'February 2026',
    verified: true,
  },
  {
    author: 'Daniel Vance',
    brand: 'Apparel & Accessories',
    text: 'We hit $1M monthly revenue with TACoS at 11.74%. Affan system for keyword graduation works seamlessly.',
    date: 'April 2026',
    verified: true,
  },
  {
    author: 'Alex K.',
    brand: 'MDS Seller Community',
    text: 'The N-Gram tool alone saved us thousands before we even signed on as a client. Once we hired Affan team, net profit margins expanded by 6%.',
    date: 'January 2026',
    verified: true,
  },
];

const FAQS = [
  {
    q: 'How quickly do results typically show?',
    a: 'Wasted-spend cuts show up in the first 30 days — that part is fast, because eliminating spend on non-converting search terms improves efficiency immediately. Structural gains like organic rank improvement and TACoS reduction take longer: our program runs 120 days because rank compounds week over week as conversion data accumulates. Most clients see measurable TACoS movement within the first 30-60 days.',
  },
  {
    q: 'What kind of brands do you work with?',
    a: 'Primarily established 7 and 8-figure Amazon brands — sellers with proven products whose advertising has grown faster than their systems for managing it. The common profile: revenue is healthy, but ACOS has crept up, campaigns have multiplied, and nobody can say precisely where the ad budget stops earning its keep.',
  },
  {
    q: 'Are these testimonials verified?',
    a: 'They are unedited screenshots and direct reviews from real client messages. We don\'t publish full seller names or account details without explicit permission to protect competitive privacy, but every message shown came from an active brand managed by Affan Mughal.',
  },
  {
    q: "What's the difference between ACOS and TACoS results?",
    a: 'ACOS only measures ad spend against ad-attributed revenue — you can "improve" it by simply spending less, while total sales stagnate. TACoS measures ad spend against total revenue, including organic. When TACoS falls while revenue grows, it means advertising is doing its real job: driving rank so organic sales carry more of the business. That\'s the number we hold ourselves to.',
  },
  {
    q: 'How do I know if my account has similar upside?',
    a: 'Book a free strategy call — it includes a full account audit. Or run your own data through our free tools first: the PPC Health Checker scores your account out of 100, and the Search Term Analysis shows exactly how much spend is going to terms that never convert.',
  },
];

export default function SuccessStoriesPage() {
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
            WALL OF LOVE & REVIEWS
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Hear From Our Leading Brands.
          </h1>
          <p className="mt-4 text-lg text-slate-600 font-normal">
            We partner with visionary sellers to build unstoppable momentum on Amazon. Explore the success stories and strategies that drive real growth.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {REVIEWS.map((r, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    Verified Client
                  </span>
                </div>
                <p className="text-slate-700 text-base leading-relaxed mb-6 font-normal">
                  "{r.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div>
                  <div className="font-extrabold text-slate-900 text-sm">{r.author}</div>
                  <div>{r.brand}</div>
                </div>
                <div>{r.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Article Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg mb-20 space-y-6 max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-md bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
            ESSAY & METHODOLOGY
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            What real results look like in Amazon PPC
          </h2>
          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              The screenshots and testimonials above are unedited messages and reviews from brands we manage. We share them in this raw form deliberately: polished case-study graphics are easy to manufacture, but a seller telling you in their own words that their ACOS dropped or their organic rank climbed is much harder to fake. Every account behind these messages followed the same playbook — cut wasted spend first, restructure campaigns around what converts, then use paid traffic to compound organic rank.
            </p>
            <p>
              Across 10+ Amazon brands and more than $20M in managed ad spend under Affan Mughal leadership, the pattern repeats: the win rarely comes from one clever trick. It comes from disciplined fundamentals applied consistently — search term hygiene, bid discipline, placement tuning, and a TACoS target of 10-15% that keeps advertising accountable to total revenue, not just ad-attributed sales.
            </p>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex items-center justify-between font-bold text-slate-900 text-lg cursor-pointer"
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

        {/* Bottom CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-10 text-center border border-slate-800 shadow-2xl">
          <h2 className="text-3xl font-extrabold mb-3">Ready to Be Our Next Success Story?</h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto mb-6">
            Schedule a free 45-minute account review session with Affan Mughal and receive a written breakdown of your margin leaks.
          </p>
          <Link
            to="/book-call"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md"
          >
            <span>Book Your Free Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
