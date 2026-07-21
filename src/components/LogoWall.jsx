import React from 'react';
import { 
  Shirt, 
  Leaf, 
  Home, 
  Sparkles, 
  Cpu, 
  Droplets, 
  Dumbbell, 
  Wind,
  ShieldCheck
} from 'lucide-react';

const BRANDS = [
  {
    name: 'URBAN FIT',
    category: 'Apparel & Activewear',
    icon: Shirt,
    accent: 'bg-slate-900 text-slate-100',
  },
  {
    name: "NATURE'S WAY",
    category: 'Supplements & Wellness',
    icon: Leaf,
    accent: 'bg-slate-900 text-emerald-400',
  },
  {
    name: 'ECOHOME PRO',
    category: 'Home & Improvement',
    icon: Home,
    accent: 'bg-slate-900 text-sky-400',
  },
  {
    name: 'VITA SUPPS',
    category: 'Health & Nutrition',
    icon: Sparkles,
    accent: 'bg-slate-900 text-amber-400',
  },
  {
    name: 'TECHGEAR PRO',
    category: 'Electronics & Gadgets',
    icon: Cpu,
    accent: 'bg-slate-900 text-indigo-400',
  },
  {
    name: 'AURA BEAUTY',
    category: 'Skincare & Cosmetics',
    icon: Droplets,
    accent: 'bg-slate-900 text-rose-400',
  },
  {
    name: 'KINETIC LABS',
    category: 'Fitness Equipment',
    icon: Dumbbell,
    accent: 'bg-slate-900 text-emerald-400',
  },
  {
    name: 'PURE ELEMENTS',
    category: 'Organic Living',
    icon: Wind,
    accent: 'bg-slate-900 text-teal-400',
  },
];

export default function LogoWall() {
  return (
    <section className="py-14 bg-white border-y border-slate-200/80 overflow-hidden relative">
      
      {/* Title Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-widest border border-slate-200">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-900" />
          <span>TRUSTED BY 7 & 8-FIGURE MILLION DOLLAR SELLERS</span>
        </div>
      </div>

      {/* Marquee Track Container */}
      <div className="relative w-full flex overflow-x-hidden py-2">
        {/* Left & Right Gradient Blur Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

        {/* Marquee Motion Container */}
        <div className="animate-marquee flex items-center gap-8 sm:gap-10">
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, idx) => {
            const Icon = brand.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-400 hover:bg-white transition-all duration-300 group shrink-0"
              >
                <div className={`w-9 h-9 rounded-xl ${brand.accent} flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="font-extrabold text-sm text-slate-900 tracking-wider uppercase font-sans">
                    {brand.name}
                  </div>
                  <div className="text-[10px] font-semibold text-slate-500 tracking-tight">
                    {brand.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
