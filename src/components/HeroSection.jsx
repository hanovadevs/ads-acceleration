import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, TrendingUp, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
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
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-gradient-to-b from-slate-50/90 via-white to-slate-50/90 overflow-hidden border-b border-slate-200/80">
      
      {/* 1. Theme Dotted Grid Background */}
      <div className="absolute inset-0 bg-dot-pattern-theme opacity-60 pointer-events-none -z-10" />

      {/* 2. Top-Left Decorative Semi-Circle Arc Rings */}
      <div className="absolute top-0 left-0 w-80 h-80 -translate-x-1/3 -translate-y-1/3 pointer-events-none -z-10 opacity-40">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#17253F]">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="65" stroke="#D99B26" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* 3. Top-Right Decorative Ellipse Glow Ring */}
      <div className="absolute top-10 right-0 w-96 h-96 translate-x-1/3 -translate-y-1/4 pointer-events-none -z-10">
        <div className="w-full h-full rounded-full border border-[#D99B26]/30 bg-gradient-to-br from-[#D99B26]/10 via-[#17253F]/5 to-transparent blur-3xl" />
      </div>

      {/* 4. Ambient Center Lighting Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#D99B26]/12 via-[#17253F]/6 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Floating Brand Badge */}
        <FadeInWhenVisible className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xs hover:border-[#D99B26]/50 transition-all cursor-default">
            <span className="w-2 h-2 rounded-full bg-[#D99B26] animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#17253F]">
              GROWTECH ADVERTISING • MAKING YOUR BRAND FLY
            </span>
          </div>
        </FadeInWhenVisible>

        {/* Main Headline */}
        <FadeInWhenVisible delay={0.1} className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#17253F] tracking-tight leading-[1.12]">
            We Don't Just Manage Ads. <br />
            We Accelerate Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D99B26] via-amber-500 to-yellow-600 font-black">
              <AnimatePresence mode="wait">
                <motion.span
                  key={DYNAMIC_WORDS[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28 }}
                  className="inline-block"
                >
                  {DYNAMIC_WORDS[index]}.
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
            Data-driven Amazon PPC agency led by founder <strong className="text-[#17253F] font-semibold">Affan Mughal</strong>. We structure bid architectures around real net profit margins so your brand scales predictably.
          </p>
        </FadeInWhenVisible>

        {/* Action Buttons */}
        <FadeInWhenVisible delay={0.2} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/book-call"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-extrabold text-slate-950 bg-[#D99B26] hover:bg-yellow-400 transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <a 
              href="https://www.linkedin.com/in/affanmughal?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-[#17253F] bg-white hover:bg-slate-50 border border-slate-300 transition-colors shadow-xs"
            >
              <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
              <span>Connect on LinkedIn</span>
            </a>
          </motion.div>
        </FadeInWhenVisible>

        {/* HERO SHOWCASE CARD */}
        <FadeInWhenVisible delay={0.3} className="mt-12 max-w-5xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-[28px] p-5 sm:p-7 border border-slate-200 shadow-xl shadow-slate-900/5 relative overflow-hidden group">
            
            {/* Showcase Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#17253F]">
                  VERIFIED CLIENT REVENUE DASHBOARD
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-[#D99B26] border border-amber-200/80 text-[11px] font-bold shadow-xs">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+101% YoY Revenue Growth</span>
              </div>
            </div>

            {/* Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-5">
              
              {/* Left Column: Founder Presentation Card */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-[#17253F] shadow-lg border border-slate-800 flex flex-col justify-end min-h-[290px] group/img">
                <img 
                  src="/images/affan_mughal.png" 
                  alt="Affan Mughal - Founder of GrowTech Advertising" 
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#17253F] via-[#17253F]/40 to-transparent pointer-events-none" />

                {/* Floating Founder Badge */}
                <div className="relative z-10 p-3.5 m-3 rounded-xl bg-[#17253F]/90 backdrop-blur-md border border-slate-700/90 shadow-md text-white flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#D99B26] text-slate-950 flex items-center justify-center font-extrabold text-xs shadow-sm shrink-0">
                      AM
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-white flex items-center gap-1">
                        <span>Affan Mughal</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-[#D99B26]" />
                      </div>
                      <div className="text-[10px] text-[#D99B26] font-bold">
                        Founder & Lead PPC Strategist
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Mac-Style Dashboard Frame */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
                
                <div className="rounded-xl border border-slate-200/90 overflow-hidden bg-slate-900 shadow-lg">
                  {/* Mac Browser Header Bar */}
                  <div className="bg-slate-900 px-3.5 py-2 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="px-3 py-0.5 rounded bg-slate-800 text-[9px] font-mono text-slate-400 border border-slate-700">
                      analytics.growtechadvertising.com/verified-dashboard
                    </div>
                    <div className="text-[9px] font-bold text-emerald-400">
                      LIVE DATA
                    </div>
                  </div>

                  {/* Dashboard Image */}
                  <div className="relative overflow-hidden bg-slate-950">
                    <img 
                      src="/images/dashboard_mockup.png" 
                      alt="GrowTech Advertising Amazon PPC Dashboard" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom 3 High-Impact KPI Scorecards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100">
              
              <div className="bg-slate-50/90 p-3.5 rounded-xl border border-slate-200/80 text-center hover:bg-white hover:shadow-xs transition-all">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-0.5">
                  Quarterly Ad Revenue
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#17253F]">
                  $748,193
                </div>
                <div className="text-[11px] font-bold text-emerald-600 mt-0.5 flex items-center justify-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +101% YoY Increase
                </div>
              </div>

              <div className="bg-slate-50/90 p-3.5 rounded-xl border border-slate-200/80 text-center hover:bg-white hover:shadow-xs transition-all">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-0.5">
                  Peak Net Profit Margin
                </div>
                <div className="text-xl sm:text-2xl font-black text-emerald-600">
                  16.0%
                </div>
                <div className="text-[11px] font-bold text-slate-600 mt-0.5">
                  Scaled from 10% Initial Base
                </div>
              </div>

              <div className="bg-slate-50/90 p-3.5 rounded-xl border border-slate-200/80 text-center hover:bg-white hover:shadow-xs transition-all">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-0.5">
                  Target tACOS Efficiency
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#D99B26]">
                  12.6%
                </div>
                <div className="text-[11px] font-bold text-slate-600 mt-0.5">
                  Optimized Category Benchmark
                </div>
              </div>

            </div>

          </div>
        </FadeInWhenVisible>

        {/* Feature Checkpoints */}
        <FadeInWhenVisible delay={0.4} className="mt-9 flex flex-wrap items-center justify-center gap-5 text-xs font-semibold text-slate-700">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D99B26]" />
            100% Dedicated Account Strategist
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D99B26]" />
            Bi-Weekly Action Plans & Slack Support
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D99B26]" />
            16 Free Browser PPC Tools Included
          </span>
        </FadeInWhenVisible>

      </div>
    </section>
  );
}
