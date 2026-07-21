import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Target, TrendingUp, Users, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            ABOUT ADS ACCELERATION
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            The Amazon PPC agency that engineers profit, not just clicks.
          </h1>
          <p className="mt-4 text-lg text-slate-600 font-normal leading-relaxed">
            Ads Acceleration is an Amazon PPC management agency for brand owners who are done with agencies that chase volume. We manage Sponsored Products, Sponsored Brands, and Sponsored Display toward one goal: sustainable profit — a 10–15% TACoS, protected margins, and organic rank that compounds long after the ad spend.
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="text-3xl font-black text-slate-900">$20M+</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Ad Spend Managed</div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="text-3xl font-black text-slate-900">10+</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Brands Scaled</div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="text-3xl font-black text-slate-900">10–15%</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Avg. TACoS Achieved</div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center">
            <div className="text-3xl font-black text-slate-900">120</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Day Growth Program</div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-slate-900">
                <img 
                  src="/images/affan_mughal.png" 
                  alt="Affan Mughal - Founder & Lead Strategist" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 glass-dark-card p-4 rounded-xl text-white">
                  <div className="font-extrabold text-base">Affan Mughal</div>
                  <div className="text-xs text-slate-300">Founder & Lead Amazon PPC Strategist</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
                MEET THE FOUNDER
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Hi, I'm Affan Mughal.
              </h2>
              
              <div className="space-y-4 text-slate-600 text-base leading-relaxed font-normal">
                <p>
                  Affan is an Amazon PPC expert who works closely with a small, in-house-style PPC team and applies a proven set of Ads SOPs to every brand he takes on. Unlike traditional Amazon advertising agencies that chase volume, he partners with only a selective few high-quality brands — focusing deeply on growth, profitability, and long-term scalability. Many of his clients come from the Million Dollar Seller and Elite Seller Society communities.
                </p>
                <p>
                  The approach is honest about the early stage: when an account is being rebuilt for profit, margins may dip slightly at first during initial clean-ups. But once organic rankings stabilize, the system compounds — driving steady quarterly revenue growth and sustained, long-term profitability. It's an Amazon PPC consultant's rigor delivered with the commitment of an in-house team.
                </p>
                <p>
                  That same system now powers Ads Acceleration's free tool suite — including a self-auditing PPC tool that lets sellers instantly identify and fix gaps in their ad structure. Founded to give serious Amazon brands the profit-first advertising partner most of them have never had.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/affanmughal?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Differentiators */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">
              How this Amazon PPC agency is different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold mb-4">01</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Profit-first, not spend-first</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Most Amazon advertising agencies optimize to ACoS and stop there. We track true margin, because a healthy ACoS can still hide profit bleeding out of your account.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold mb-4">02</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Paid and organic, working together</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every campaign is built to lift organic rank — not run in a silo. Paid traffic becomes a flywheel that converts into sustained, lower-cost organic sales.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold mb-4">03</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">A selective, in-house-style partnership</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We partner with only a few high-quality brands at a time and work like your in-house PPC arm — with real margin context and category knowledge, not a generic playbook.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold mb-4">04</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">A system, not a spreadsheet</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our 120-day program is a repeatable system. You get a clear next step every time — not another dashboard full of numbers with no direction.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="bg-slate-900 text-white rounded-3xl p-10 text-center border border-slate-800 shadow-2xl">
          <h2 className="text-3xl font-extrabold mb-4">See what a profit-first partner can do for your brand</h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto mb-8">
            Book a zero-obligation strategy call. You'll get a complete Amazon account audit and a custom growth roadmap built around your margins and category.
          </p>
          <Link
            to="/book-call"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
