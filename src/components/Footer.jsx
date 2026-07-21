import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';

function LinkedInIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.48 1.48 0 1 0 0 2.96 1.48 1.48 0 0 0 0-2.96Z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#17253F] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/images/logo.png" 
                alt="GrowTech Advertising Logo" 
                className="h-16 sm:h-20 w-auto object-contain bg-white/95 p-2 rounded-2xl shadow-lg"
              />
            </Link>

            <p className="text-slate-300 text-sm max-w-sm font-normal leading-relaxed">
              <strong className="text-white font-semibold">Making Your Brand Fly.</strong> Data-driven Amazon PPC agency engineering profit margin growth for 7 & 8-figure brand sellers.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.linkedin.com/in/affanmughal?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#D99B26] hover:text-slate-950 transition-colors flex items-center justify-center text-slate-300 shadow-xs"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a 
                href="mailto:affan@growtechadvertising.com" 
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#D99B26] hover:text-slate-950 transition-colors flex items-center justify-center text-slate-300 shadow-xs"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#D99B26] font-bold text-xs uppercase tracking-widest mb-4">
              PPC Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-300 font-medium">
              <li>
                <Link to="/case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/reporting" className="hover:text-white transition-colors">
                  Bi-Weekly Reporting
                </Link>
              </li>
              <li>
                <Link to="/agency-pricing" className="hover:text-white transition-colors">
                  Agency Retainer Pricing
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="hover:text-white transition-colors">
                  Wall of Love
                </Link>
              </li>
            </ul>
          </div>

          {/* Free Tools */}
          <div>
            <h4 className="text-[#D99B26] font-bold text-xs uppercase tracking-widest mb-4">
              Free PPC Suite
            </h4>
            <ul className="space-y-3 text-sm text-slate-300 font-medium">
              <li>
                <Link to="/tools" className="hover:text-white transition-colors">
                  16 Browser PPC Tools
                </Link>
              </li>
              <li>
                <Link to="/tools/free-amazon-ppc-tools" className="hover:text-white transition-colors">
                  Helium 10 Alternatives
                </Link>
              </li>
              <li>
                <Link to="/tools/bulksheet-optimizer" className="hover:text-white transition-colors">
                  Bulksheet Optimizer
                </Link>
              </li>
              <li>
                <Link to="/tools/ppc-health-checker" className="hover:text-white transition-colors">
                  PPC Health Checker
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-[#D99B26] font-bold text-xs uppercase tracking-widest mb-4">
              Get In Touch
            </h4>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed font-normal">
              Ready to scale net profit margins? Book a 1-on-1 strategy call with founder Affan Mughal.
            </p>
            <Link
              to="/book-call"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold text-slate-950 bg-[#D99B26] hover:bg-yellow-400 transition-colors shadow-md"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <div>
            © {new Date().getFullYear()} GrowTech Advertising by Affan Mughal. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-200 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
