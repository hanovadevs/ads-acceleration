import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageRevealer() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 2.2s progress counter
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
              duration: 0.8, 
              ease: [0.76, 0, 0.24, 1] 
            } 
          }}
          className="fixed inset-0 z-[9999] bg-[#17253F] text-white flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Subtle Ambient Radial Lighting Glow */}
          <div className="absolute w-[450px] h-[450px] bg-[#D99B26]/12 blur-[120px] rounded-full pointer-events-none" />

          {/* Centered Minimal Brand Presentation */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            
            {/* Elegant Floating Logo Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-4 rounded-3xl bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/40"
            >
              <img 
                src="/images/logo.png" 
                alt="GrowTech Advertising Logo" 
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </motion.div>

            {/* Clean Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-1.5"
            >
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.3em] text-[#D99B26]">
                MAKING YOUR BRAND FLY
              </div>
              <div className="text-[11px] font-medium text-slate-400 tracking-wider">
                GROWTECH ADVERTISING • AFFAN MUGHAL
              </div>
            </motion.div>

            {/* Minimal Hairline Progress & Counter */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-6 flex flex-col items-center gap-2.5"
            >
              {/* Hairline Progress Track */}
              <div className="w-48 sm:w-64 h-1 rounded-full bg-slate-800/90 overflow-hidden border border-slate-700/50">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#D99B26] via-amber-400 to-yellow-300 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>

              {/* Minimal Mono Counter */}
              <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400">
                {progress}%
              </span>
            </motion.div>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
