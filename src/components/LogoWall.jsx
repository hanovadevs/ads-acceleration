import React from 'react';

const BRAND_NAMES = [
  'URBAN FIT',
  "NATURE'S WAY",
  'ECOHOME',
  'VITA SUPPS',
  'TECHGEAR PRO',
  'AURA BEAUTY',
  'KINETIC LABS',
  'PURE ELEMENTS',
  'APEX ATHLETICS',
  'ZENITH HEALTH',
];

export default function LogoWall() {
  return (
    <section className="py-12 bg-white border-y border-slate-200/80 overflow-hidden relative">
      
      {/* Title Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <div className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
          TRUSTED BY LEADING AMAZON BRANDS & SELLER ENTERPRISES
        </div>
      </div>

      {/* Infinite Marquee Track Container */}
      <div className="relative w-full flex overflow-x-hidden py-3">
        
        {/* Left & Right Gradient Blur Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Motion Track */}
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 md:gap-20">
          {[...BRAND_NAMES, ...BRAND_NAMES, ...BRAND_NAMES, ...BRAND_NAMES].map((brand, idx) => (
            <span 
              key={idx} 
              className="font-black text-lg sm:text-xl md:text-2xl tracking-widest text-slate-400 hover:text-slate-900 transition-colors duration-300 uppercase shrink-0 font-sans cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </div>

      </div>

    </section>
  );
}
