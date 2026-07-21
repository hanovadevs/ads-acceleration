import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Calendar, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-Footer CTA Banner Card */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-850 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl mb-20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 border border-slate-700">
                PROFIT ACCELERATION SESSION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Transform Your Amazon PPC?
              </h2>
              <p className="mt-4 text-slate-300 text-base sm:text-lg font-normal max-w-2xl">
                Join the successful 7 and 8-figure sellers who have taken control of their advertising and built profitable, scalable businesses with us.
              </p>

              {/* Bullet points */}
              <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Complete Account Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Custom Growth Roadmap</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Zero-Obligation Session</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link 
                to="/book-call"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg hover:shadow-emerald-400/20"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Strategy Call</span>
              </Link>

              <Link 
                to="/case-studies"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-slate-950 flex items-center justify-center font-bold">
                <Rocket className="w-5 h-5 text-slate-950" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xl font-extrabold text-white">
                  <span>Ads</span>
                  <span className="text-slate-400">Acceleration</span>
                </div>
                <span className="text-[10px] font-semibold text-slate-400 uppercase -mt-1">
                  by Affan Mughal
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Data-driven Amazon PPC architecture and organic ranking mastery. The ultimate growth partner specifically engineered to scale 7 and 8-figure brands.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              Founder & Lead Strategist: <strong className="text-white">Affan Mughal</strong>
            </div>
          </div>

          {/* Proprietary Tools Column */}
          <div>
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
              Proprietary Tools
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/tools/sqp-dashboard" className="hover:text-white transition-colors">
                  SQP Intelligence
                </Link>
              </li>
              <li>
                <Link to="/tools/keepa-asin-comparator" className="hover:text-white transition-colors">
                  Keepa ASIN Comparator
                </Link>
              </li>
              <li>
                <Link to="/tools/keyword-cannibalization" className="hover:text-white transition-colors">
                  Cannibalization Analyzer
                </Link>
              </li>
              <li>
                <Link to="/tools/placement-audience" className="hover:text-white transition-colors">
                  Placement Dashboard
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-emerald-400 font-semibold hover:underline">
                  All 16 Free Tools →
                </Link>
              </li>
            </ul>
          </div>

          {/* Agency Column */}
          <div>
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
              Agency
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Affan Mughal
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/agency-pricing" className="hover:text-white transition-colors">
                  Agency Pricing
                </Link>
              </li>
              <li>
                <Link to="/reporting" className="hover:text-white transition-colors">
                  Bi-Weekly Reporting
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support Column */}
          <div>
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
              Support & Legal
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/book-call" className="hover:text-white transition-colors">
                  Book Strategy Call
                </Link>
              </li>
              <li>
                <Link to="/tools/free-amazon-ppc-tools" className="hover:text-white transition-colors">
                  Helium 10 Alternatives
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Ads Acceleration by Affan Mughal. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <span>Amazon PPC Agency</span>
            <span>•</span>
            <span>Profit First Systems</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
