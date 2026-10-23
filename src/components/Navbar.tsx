import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Download, 
  Menu, 
  X, 
  ChevronDown, 
  Building2, 
  GraduationCap, 
  MapPin, 
  FileText, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenEnquiry: (type: 'franchise' | 'admission') => void;
  onOpenBrochure: (brochureId?: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEnquiry,
  onOpenBrochure,
}) => {
  const { themeConfig } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Admissions & Utility Bar (Royal Academic Blue Theme) */}
      <div 
        style={{ backgroundColor: themeConfig.primaryDarkBg }}
        className="text-slate-200 text-xs border-b border-blue-400/20 sticky top-0 z-50 transition-colors duration-300 shadow-xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-1.5 gap-2">
            
            {/* Live Admissions Ticker */}
            <div className="flex items-center gap-2 overflow-hidden w-full sm:w-auto">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950 shrink-0 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping"></span>
                Admissions 2026–27
              </span>
              <div className="text-slate-200 text-[11px] truncate font-medium">
                Admissions Open from Pre-Nursery to Grade XII across 35+ Campuses Nationwide
              </div>
            </div>

            {/* Quick Contacts & Actions */}
            <div className="flex items-center gap-3.5 text-[11px] shrink-0 font-medium">
              
              <a 
                href="tel:7004222833" 
                className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Helpline: +91 7004222833 / 9631910016</span>
              </a>

              <span className="text-slate-400 hidden sm:inline">|</span>

              <button 
                onClick={() => onOpenBrochure()}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-amber-300 hover:text-amber-200 font-semibold transition-colors cursor-pointer border border-amber-400/30"
              >
                <Download className="w-3 h-3 text-amber-400" />
                <span>Official Brochure (PDF)</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className={`sticky top-[31px] z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200' 
          : 'bg-white py-3 border-b border-slate-100 shadow-xs'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* School Crest & Identity */}
            {/* School Crest Logo & Identity on Top-Left Corner */}
            <div 
              onClick={() => scrollTo('hero')} 
              className="flex items-center gap-3 md:gap-3.5 cursor-pointer group shrink-0 mr-8 lg:mr-12"
            >
              <div className="relative shrink-0 flex items-center justify-center">
                <img 
                  src="./assets/idps-logo.jpg" 
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== window.location.origin + '/assets/idps-logo.jpg') {
                      target.src = '/assets/idps-logo.jpg';
                    }
                  }}
                  alt="International Delhi Public School Society Logo" 
                  className="w-12 h-14 md:w-14 md:h-16 rounded-[22px] object-contain p-1 border-2 border-blue-600 shadow-md group-hover:scale-105 transition-transform bg-white shrink-0"
                />
              </div>

              <div className="flex flex-col justify-center select-none whitespace-nowrap">
                {/* Line 1 */}
                <div 
                  style={{ color: themeConfig.primaryBg }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold tracking-tight font-serif transition-colors leading-[1.15]"
                >
                  INTERNATIONAL DELHI
                </div>
                {/* Line 2 */}
                <div 
                  style={{ color: themeConfig.primaryBg }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold tracking-tight font-serif transition-colors leading-[1.15]"
                >
                  PUBLIC SCHOOL
                </div>
                {/* Line 3 */}
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-blue-900 leading-tight mt-0.5">
                  THE IDPS SOCIETY, NEW DELHI •
                </div>
                {/* Line 4 */}
                <div className="text-[10px] md:text-xs text-amber-700 font-semibold leading-tight">
                  Estd. 22nd Feb 2012
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links with generous separation from school title */}
            <nav className="hidden xl:flex items-center gap-5 2xl:gap-6 ml-6 lg:ml-10">
              <button 
                onClick={() => scrollTo('about')}
                className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition-colors cursor-pointer whitespace-nowrap"
              >
                About IDPS
              </button>

              <button 
                onClick={() => scrollTo('chairman')}
                className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition-colors cursor-pointer"
              >
                Chairman's Desk
              </button>

              {/* Franchise Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('franchise')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={() => scrollTo('franchise-models')}
                  className="text-sm font-semibold text-slate-700 hover:text-blue-900 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Franchise Models</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {activeDropdown === 'franchise' && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-3 px-2 transition-all duration-200 z-50">
                    <button 
                      onClick={() => scrollTo('franchise-models')}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors text-xs font-medium text-slate-800 flex items-center justify-between"
                    >
                      <div>
                        <div className="font-bold text-slate-900">7 School Formats</div>
                        <div className="text-[11px] text-slate-500">Play school to K-12 Flagship</div>
                      </div>
                      <span className="text-blue-900 text-[10px] font-bold bg-blue-50 px-2 py-0.5 rounded">All Tiers</span>
                    </button>

                    <button 
                      onClick={() => scrollTo('support-services')}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors text-xs font-medium text-slate-800 flex items-center justify-between"
                    >
                      <div>
                        <div className="font-bold text-slate-900">11 Core Support Services</div>
                        <div className="text-[11px] text-slate-500">Affiliation, hiring, curriculum & marketing</div>
                      </div>
                    </button>

                    <button 
                      onClick={() => scrollTo('roadmap')}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors text-xs font-medium text-slate-800 flex items-center justify-between"
                    >
                      <div>
                        <div className="font-bold text-slate-900">90-Day Implementation</div>
                        <div className="text-[11px] text-slate-500">Application to Grand Campus Launch</div>
                      </div>
                    </button>

                    <div className="border-t border-slate-100 my-1"></div>

                    <button 
                      onClick={() => onOpenBrochure('franchise-proposal')}
                      className="w-full text-left px-3 py-2 rounded-lg bg-amber-50 hover:bg-amber-100/80 transition-colors text-xs font-bold text-amber-900 flex items-center gap-2 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-amber-700" />
                      <span>Interactive Brochure & PDF</span>
                    </button>
                  </div>
                )}
              </div>

              <button 
                onClick={() => scrollTo('network')}
                className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Pan-India Campuses</span>
                <span className="bg-blue-100 text-blue-950 text-[10px] font-bold px-1.5 py-0.5 rounded-full">35+</span>
              </button>

              <button 
                onClick={() => scrollTo('infrastructure')}
                className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition-colors cursor-pointer"
              >
                Infrastructure
              </button>

              <button 
                onClick={() => scrollTo('campus-life')}
                className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition-colors cursor-pointer"
              >
                Campus Life
              </button>

              <button 
                onClick={() => scrollTo('contact')}
                className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition-colors cursor-pointer"
              >
                Contact
              </button>
            </nav>

            {/* Header Call To Actions with clear separation from Contact */}
            <div className="hidden md:flex items-center gap-3.5 ml-8 pl-6 border-l border-slate-200">
              <button
                onClick={() => onOpenEnquiry('admission')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-800 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all cursor-pointer whitespace-nowrap shadow-xs"
              >
                Admission Enquiry
              </button>

              <button
                onClick={() => onOpenEnquiry('franchise')}
                className={`px-4 py-2 rounded-xl text-xs font-bold ${themeConfig.buttonPrimary} shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Partner With Us</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={() => onOpenEnquiry('franchise')}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-400 text-slate-950 sm:hidden"
              >
                Partner
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2">
            <div className="space-y-1">
              <button
                onClick={() => scrollTo('about')}
                className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                About IDPS Society
              </button>
              <button
                onClick={() => scrollTo('chairman')}
                className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Chairman's Desk & Vision
              </button>
              <button
                onClick={() => scrollTo('franchise-models')}
                className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Franchise Models (7 Formats)</span>
                <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded">All Tiers</span>
              </button>
              <button
                onClick={() => scrollTo('support-services')}
                className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                11 Core Support Services (PDF 2)
              </button>
              <button
                onClick={() => scrollTo('roadmap')}
                className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                90-Day Implementation Roadmap
              </button>
              <button
                onClick={() => scrollTo('network')}
                className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Pan-India Campuses & Map</span>
                <span className="text-[10px] bg-blue-100 text-blue-900 font-bold px-2 py-0.5 rounded">35 Campuses</span>
              </button>
              <button
                onClick={() => scrollTo('infrastructure')}
                className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Infrastructure
              </button>
              <button
                onClick={() => scrollTo('campus-life')}
                className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Campus Life & Gallery
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Head Office & Contacts
              </button>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry('admission');
                }}
                className="w-full py-2.5 text-center text-xs font-bold text-slate-800 bg-slate-100 rounded-lg border border-slate-200"
              >
                Admission Enquiry
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry('franchise');
                }}
                className="w-full py-2.5 text-center text-xs font-bold text-slate-950 bg-amber-400 rounded-lg"
              >
                Partner With Us
              </button>
            </div>

            <div className="mt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrochure();
                }}
                className="w-full py-2 text-center text-xs font-semibold text-slate-700 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-blue-800" />
                <span>View & Download Brochure</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
