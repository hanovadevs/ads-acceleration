import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';

export default function PageRevealer() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 2.2 seconds loading animation timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ 
            y: '-100%',
            transition: { 
              duration: 0.85, 
              ease: [0.76, 0, 0.24, 1] 
            } 
          }}
          className="fixed inset-0 z-[9999] bg-[#17253F] text-white flex flex-col items-center justify-between p-8 sm:p-12 select-none overflow-hidden"
        >
          {/* Subtle Grid Dot Background */}
          <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

          {/* Top Brand Tag with Logo Image */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-slate-700/80 shadow-lg"
          >
            <img 
              src="/images/logo.png" 
              alt="GrowTech Advertising Logo" 
              className="h-6 w-auto object-contain bg-white rounded p-0.5"
            />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D99B26]">
              GROWTECH ADVERTISING • AFFAN MUGHAL
            </span>
          </motion.div>

          {/* Central Animated Title */}
          <div className="text-center max-w-2xl my-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight uppercase font-sans text-white">
                ENGINEERING PROFIT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D99B26] via-yellow-400 to-amber-300">
                  MAKING YOUR BRAND FLY
                </span>
              </h1>
              <p className="text-slate-300 text-sm font-medium tracking-wide pt-1">
                Data-Driven Amazon PPC Architecture • Margin Growth • Scalability
              </p>
            </motion.div>
          </div>

          {/* Bottom Progress Bar & Counter */}
          <div className="w-full max-w-md space-y-3 relative z-10">
            <div className="flex items-center justify-between text-xs font-extrabold tracking-widest text-slate-300 uppercase">
              <span className="flex items-center gap-1.5 text-[#D99B26]">
                <Zap className="w-3.5 h-3.5 animate-pulse text-[#D99B26]" />
                Initializing Systems...
              </span>
              <span className="text-white font-mono text-sm">{progress}%</span>
            </div>

            {/* Progress Bar Track */}
            <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-700 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#D99B26] via-amber-400 to-yellow-300 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
