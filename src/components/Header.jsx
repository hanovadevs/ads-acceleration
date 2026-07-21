import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  User, 
  Briefcase, 
  Heart, 
  BarChart2, 
  Wrench, 
  Sparkles 
} from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Bigger Logo Only - No redundant text */}
          <Link to="/" className="flex items-center group py-0.5">
            <img 
              src="/images/logo.png" 
              alt="GrowTech Advertising Logo" 
              className="h-16 sm:h-20 md:h-24 max-h-24 w-auto object-contain group-hover:scale-103 transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200 shadow-xs">
            <Link 
              to="/case-studies" 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                location.pathname === '/case-studies' ? 'text-[#17253F] bg-slate-100 font-semibold' : 'text-slate-700 hover:text-[#17253F] hover:bg-slate-50'
              }`}
            >
              Case Studies
            </Link>

            <a 
              href="#process" 
              className="px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:text-[#17253F] hover:bg-slate-50 transition-colors"
            >
              Onboarding
            </a>

            <Link 
              to="/success-stories" 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                location.pathname === '/success-stories' ? 'text-[#17253F] bg-slate-100 font-semibold' : 'text-slate-700 hover:text-[#17253F] hover:bg-slate-50'
              }`}
            >
              Success Stories
            </Link>

            <Link 
              to="/agency-pricing" 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                location.pathname === '/agency-pricing' ? 'text-[#17253F] bg-slate-100 font-semibold' : 'text-slate-700 hover:text-[#17253F] hover:bg-slate-50'
              }`}
            >
              Pricing
            </Link>

            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                onMouseEnter={() => setMoreDropdownOpen(true)}
                className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:text-[#17253F] hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <span>More</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div 
                  onMouseLeave={() => setMoreDropdownOpen(false)}
                  className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-fade-in"
                >
                  <Link 
                    to="/about" 
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#17253F] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#D99B26] flex items-center justify-center font-bold">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#17253F]">About Us</div>
                      <div className="text-xs text-slate-500">The agency & founder Affan Mughal</div>
                    </div>
                  </Link>

                  <Link 
                    to="/case-studies" 
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#17253F] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#D99B26] flex items-center justify-center font-bold">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#17253F]">All Case Studies</div>
                      <div className="text-xs text-slate-500">Deep-dives with real numbers</div>
                    </div>
                  </Link>

                  <Link 
                    to="/success-stories" 
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#17253F] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#D99B26] flex items-center justify-center font-bold">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#17253F]">Wall of Love</div>
                      <div className="text-xs text-slate-500">What clients say about us</div>
                    </div>
                  </Link>

                  <Link 
                    to="/reporting" 
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#17253F] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#D99B26] flex items-center justify-center font-bold">
                      <BarChart2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#17253F]">Bi-Weekly Reporting</div>
                      <div className="text-xs text-slate-500">How we keep you in the loop</div>
                    </div>
                  </Link>

                  <Link 
                    to="/tools/free-amazon-ppc-tools" 
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#17253F] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#D99B26] flex items-center justify-center font-bold">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#17253F]">Free vs Paid Software</div>
                      <div className="text-xs text-slate-500">Helium 10 & Perpetua alternatives</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              to="/tools" 
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Wrench className="w-4 h-4 text-[#D99B26]" />
              <span>16 Free Tools</span>
            </Link>

            <Link 
              to="/book-call" 
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#17253F] hover:bg-[#D99B26] transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Book Strategy Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 animate-fade-in shadow-xl">
          <div className="flex flex-col gap-2">
            <Link 
              to="/case-studies" 
              className="px-4 py-3 rounded-xl font-medium text-slate-800 hover:bg-slate-50"
            >
              Case Studies
            </Link>
            <a 
              href="#process" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl font-medium text-slate-800 hover:bg-slate-50"
            >
              Onboarding Process
            </a>
            <Link 
              to="/success-stories" 
              className="px-4 py-3 rounded-xl font-medium text-slate-800 hover:bg-slate-50"
            >
              Success Stories (Wall of Love)
            </Link>
            <Link 
              to="/agency-pricing" 
              className="px-4 py-3 rounded-xl font-medium text-slate-800 hover:bg-slate-50"
            >
              Agency Pricing
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-3 rounded-xl font-medium text-slate-800 hover:bg-slate-50"
            >
              About Affan Mughal
            </Link>
            <Link 
              to="/reporting" 
              className="px-4 py-3 rounded-xl font-medium text-slate-800 hover:bg-slate-50"
            >
              Bi-Weekly Reporting
            </Link>
            <Link 
              to="/tools" 
              className="px-4 py-3 rounded-xl font-medium text-slate-800 hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Free Amazon PPC Tools</span>
              <span className="text-xs bg-amber-100 text-[#D99B26] px-2.5 py-0.5 rounded-full font-bold">16 Tools</span>
            </Link>
            
            <div className="pt-2 flex flex-col gap-2">
              <Link 
                to="/book-call" 
                className="w-full py-3 text-center font-bold text-white bg-[#17253F] hover:bg-[#D99B26] rounded-xl shadow-md transition-colors"
              >
                Book a Free Strategy Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
