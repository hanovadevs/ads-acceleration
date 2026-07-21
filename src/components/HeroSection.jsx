import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, TrendingUp, CheckCircle2 } from 'lucide-react';
import { FadeInWhenVisible } from './AnimatedSection';

function LinkedInIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.48 1.48 0 1 0 0 2.96 1.48 1.48 0 0 0 0-2.96Z"/>
    </svg>
  );
}

const DYNAMIC_WORDS = [
  'Net Profit Margins',
  'Organic Rank Velocity',
  'Target tACOS Efficiency',
  'Market Share Scalability',
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % DYNAMIC_WORDS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden border-b border-slate-200/80">
      
      {/* Background Soft Lighting Radial Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#D99B26]/10 via-[#17253F]/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Floating Badge */}
        <FadeInWhenVisible className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200/90 shadow-xs hover:border-[#D99B26]/50 transition-all cursor-default">
            <img 
              src="/images/logo.png" 
              alt="GrowTech Advertising Logo" 
              className="h-6 w-auto object-contain"
            />
            <div className="h-3.5 w-px bg-slate-300" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#17253F]">
              GROWTECH ADVERTISING • MAKING YOUR BRAND FLY
            </span>
          </div>
        </FadeInWhenVisible>

        {/* Main Headline */}
        <FadeInWhenVisible delay={0.1} className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#17253F] tracking-tight leading-[1.08]">
            We Don't Just Manage Ads. <br />
            We Accelerate Your{' '}
            <span className="inline-block relative min-w-[280px] sm:min-w-[420px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={DYNAMIC_WORDS[index]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="absolute left-0 text-transparent bg-clip-text bg-gradient-to-r from-[#D99B26] via-amber-500 to-yellow-600 font-black"
                >
                  {DYNAMIC_WORDS[index]}.
                </motion.span>
              </AnimatePresence>
              <span className="opacity-0">{DYNAMIC_WORDS[0]}.</span>
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Data-driven Amazon PPC agency led by founder <strong className="text-[#17253F] font-semibold">Affan Mughal</strong>. We structure bid architectures around real net profit margins so your brand scales predictably.
          </p>
        </FadeInWhenVisible>

        {/* CTA Buttons */}
        <FadeInWhenVisible delay={0.2} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/book-call"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-extrabold text-slate-950 bg-[#D99B26] hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <a 
              href="https://www.linkedin.com/in/affanmughal?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-bold text-[#17253F] bg-white hover:bg-slate-50 border border-slate-300 transition-colors shadow-xs"
            >
              <LinkedInIcon className="w-5 h-5 text-[#0A66C2]" />
              <span>Connect on LinkedIn</span>
            </a>
          </motion.div>
        </FadeInWhenVisible>

        {/* Founder Portrait & Metric Preview */}
        <FadeInWhenVisible delay={0.3} className="mt-16 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-2xl relative overflow-hidden group">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Founder Image Frame */}
              <div className="md:col-span-5 relative rounded-2xl overflow-hidden bg-[#17253F] aspect-4/3 sm:aspect-square flex items-center justify-center">
                <img 
                  src="/images/affan_mughal.png" 
                  alt="Affan Mughal - Founder of GrowTech Advertising" 
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                />
                
                {/* Verified Founder Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#17253F]/90 backdrop-blur-md border border-slate-700/80 text-white flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D99B26] text-slate-950 flex items-center justify-center font-bold text-xs shrink-0">
                    AM
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Affan Mughal</div>
                    <div className="text-[10px] text-[#D99B26] font-semibold">Founder & Lead PPC Strategist</div>
                  </div>
                </div>
              </div>

              {/* Dashboard Result Preview Frame */}
              <div className="md:col-span-7 space-y-4 p-2 sm:p-4">
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    VERIFIED CLIENT REVENUE DASHBOARD
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-amber-50 text-[#D99B26] text-xs font-bold border border-amber-200/80 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> +101% YoY Growth
                  </span>
                </div>

                <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 shadow-inner">
                  <img 
                    src="/images/dashboard_mockup.png" 
                    alt="GrowTech Advertising Amazon PPC Dashboard" 
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3 text-center pt-2">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-[10px] text-slate-500 font-bold uppercase">Quarterly Sales</div>
                    <div className="text-sm sm:text-base font-extrabold text-[#17253F]">$748,193</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-[10px] text-slate-500 font-bold uppercase">Peak Net Margin</div>
                    <div className="text-sm sm:text-base font-extrabold text-emerald-600">16.0%</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-[10px] text-slate-500 font-bold uppercase">Target tACOS</div>
                    <div className="text-sm sm:text-base font-extrabold text-[#D99B26]">12.6%</div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </FadeInWhenVisible>

        {/* Feature Checkpoints */}
        <FadeInWhenVisible delay={0.4} className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-slate-700">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D99B26]" />
            100% Dedicated Account Strategist
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D99B26]" />
            Bi-Weekly Action Plans & Slack Support
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D99B26]" />
            16 Free Browser PPC Tools Included
          </span>
        </FadeInWhenVisible>

      </div>
    </section>
  );
}
