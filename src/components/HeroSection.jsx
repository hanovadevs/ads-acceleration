import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, TrendingUp } from 'lucide-react';

const DYNAMIC_WORDS = ['Revenue', 'Profit', 'Brand', 'Rankings', 'Sales'];

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % DYNAMIC_WORDS.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-dot-pattern">
      {/* Soft Animated Background Blur */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-slate-200/60 blur-[120px] rounded-full pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            
            {/* Top Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-slate-100 text-xs font-semibold tracking-wide uppercase shadow-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Dedicated In-House PPC Engine</span>
            </motion.div>

            {/* Dynamic Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Scale your{' '}
              <span className="inline-block relative px-3 py-0.5 mx-1 rounded-xl bg-slate-900 text-white font-extrabold shadow-lg min-w-[170px] text-center overflow-hidden align-middle">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={DYNAMIC_WORDS[currentWordIndex]}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="inline-block"
                  >
                    {DYNAMIC_WORDS[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br className="hidden sm:inline" />
              on Amazon with a dedicated in-house PPC team
            </h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-8"
            >
              We're the Amazon PPC agency for brands that refuse to settle for average — rule-based automation, data-driven advertising strategy, and relentless optimization.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link 
                  to="/book-call"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/25"
                >
                  <Calendar className="w-5 h-5 text-emerald-400" />
                  <span>BOOK A FREE STRATEGY CALL</span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a 
                  href="https://www.linkedin.com/in/affanmughal?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 transition-colors shadow-sm"
                >
                  <span>CONNECT ON LINKEDIN</span>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </a>
              </motion.div>
            </motion.div>

            {/* Key Stats Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/80 w-full"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">$20M+</div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 mt-1">AD SPEND MANAGED</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">10+</div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 mt-1">BRANDS SCALED</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">10-15%</div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 mt-1">AVG. TACOS</div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Visual Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md rounded-3xl p-4 bg-gradient-to-b from-slate-200 to-slate-300 shadow-2xl border border-slate-300/80">
              
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[4/5] shadow-inner">
                <img 
                  src="/images/affan_mughal.png" 
                  alt="Affan Mughal - Founder & Amazon PPC Strategist" 
                  className="w-full h-full object-cover object-top filter brightness-105 contrast-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                
                {/* Floating Metric Badge 1 */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute top-4 right-4 glass-dark-card px-3.5 py-2 rounded-xl text-white shadow-lg flex items-center gap-2"
                >
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-medium">Avg Net Margin</div>
                    <div className="text-xs font-bold text-emerald-400">+16.2% Organic</div>
                  </div>
                </motion.div>

                {/* Founder Info Overlay Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute bottom-4 left-4 right-4 glass-card p-4 rounded-2xl shadow-xl border border-white/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 animate-ping absolute inset-0" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white relative z-10" />
                    </div>
                    <div>
                      <div className="font-extrabold text-base text-slate-900 tracking-tight">Affan Mughal</div>
                      <div className="text-xs font-medium text-slate-600">Founder & Lead Strategist, Ads Acceleration</div>
                    </div>
                  </div>
                </motion.div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
