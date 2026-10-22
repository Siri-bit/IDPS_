import React from 'react';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Users, 
  GraduationCap, 
  Building, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  TrendingUp,
  FileText
} from 'lucide-react';
import { BRANCHES } from '../data/schoolData';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenEnquiry: (type: 'franchise' | 'admission') => void;
  onOpenBrochure: (brochureId?: string) => void;
  onExploreCampuses: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEnquiry,
  onOpenBrochure,
  onExploreCampuses,
}) => {
  const { themeConfig } = useTheme();
  const totalStudents = BRANCHES.reduce((acc, curr) => acc + curr.students, 0);
  const totalFaculty = BRANCHES.reduce((acc, curr) => acc + curr.teachers, 0);
  const uniqueStates = new Set(BRANCHES.map(b => b.state)).size;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      style={{ backgroundColor: themeConfig.primaryDarkBg }}
      className="relative text-white overflow-hidden pt-8 pb-20 md:pb-24 lg:pt-14 lg:pb-28 transition-colors duration-300"
    >
      {/* Background Subtle Educational Pattern & Glows */}
      <div className="absolute inset-0 pattern-grid opacity-15 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Headline & Narrative */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Established Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-blue-400/35 text-amber-300 text-xs font-semibold backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>FOUNDED ON 22ND FEBRUARY 2012 • NEW DELHI</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight leading-[1.15] text-white">
              Empowering Education.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-sky-200 italic font-serif">
                Inspiring Excellence.
              </span>{' '}
              Building Futures.
            </h1>

            {/* Subtitle / Core Philosophy */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              The International Delhi Public School Society is a premier Pan-India educational network delivering CBSE & international academic rigour, STEM innovation, and deep value-based holistic child development.
            </p>

            {/* Central Philosophy Quote */}
            <div className="p-4 rounded-xl bg-white/5 border-l-4 border-amber-400 text-slate-200 text-sm italic backdrop-blur-xs max-w-xl mx-auto lg:mx-0">
              "Education is not merely preparation for examinations but preparation for life itself."
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => onOpenEnquiry('franchise')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Franchise Partnership Models</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreCampuses}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Explore 35+ Campuses</span>
              </button>

              <button
                onClick={() => onOpenBrochure('franchise-proposal')}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer bg-white/5 hover:bg-white/10 border border-white/15"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Brochure & PDF</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>CBSE Syllabus Aligned</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>360° Central Launch Support</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>90-Day Implementation Timeline</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual School Highlights & Chairman Quick Glance Card */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Visual Hero Card with IDPS Crest & Campus Showcase */}
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-gradient-to-br from-[#0B1D38]/95 via-[#133568]/90 to-[#1E40AF]/85 p-6 backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-bl-full pointer-events-none"></div>

              {/* Header inside card */}
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <div className="flex items-center gap-3">
                  <img 
                    src="./assets/idps-logo.jpg" 
                    alt="IDPS Crest" 
                    className="w-12 h-12 rounded-full object-contain bg-white p-0.5 border border-amber-400/60 shadow-md"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-wide">THE IDPS SOCIETY</h3>
                    <p className="text-[11px] text-amber-300 font-medium">Head Office · New Delhi</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-500/25 text-amber-300 border border-blue-400/35">
                  Estd. 2012
                </span>
              </div>

              {/* Chairman Highlight Preview */}
              <div 
                onClick={() => scrollTo('chairman')}
                className="mt-4 p-3.5 rounded-2xl bg-white/10 border border-white/15 hover:border-amber-400/50 transition-all flex items-center gap-3.5 cursor-pointer group"
              >
                <img 
                  src="./assets/chairman.jpeg" 
                  alt="Chairman Portrait" 
                  className="w-14 h-14 rounded-xl object-cover border-2 border-amber-400/80 shadow-md group-hover:scale-105 transition-transform"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-amber-400">Leadership Desk</div>
                  <h4 className="text-sm font-bold text-white truncate">Message from the Chairman</h4>
                  <p className="text-[11px] text-slate-200 line-clamp-1">"Nurturing responsible citizens who contribute positively towards nation-building."</p>
                </div>
                <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Four Key Pillars Grid */}
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-amber-300 font-bold text-xs flex items-center gap-1.5 mb-1">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Academic Core</span>
                  </div>
                  <p className="text-[11px] text-slate-200">Modern teaching methodologies & trained faculty.</p>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-amber-300 font-bold text-xs flex items-center gap-1.5 mb-1">
                    <Building className="w-3.5 h-3.5" />
                    <span>Smart Campus</span>
                  </div>
                  <p className="text-[11px] text-slate-200">Interactive classrooms, STEM & robotics labs.</p>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-amber-300 font-bold text-xs flex items-center gap-1.5 mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Holistic Tracks</span>
                  </div>
                  <p className="text-[11px] text-slate-200">Sports, vibrant music, dance & life skills.</p>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-amber-300 font-bold text-xs flex items-center gap-1.5 mb-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Proven ROI</span>
                  </div>
                  <p className="text-[11px] text-slate-200">4-5 Year break-even & 92-95% fee share.</p>
                </div>
              </div>

              {/* Quick Brochure CTA Button */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-300 text-[11px]">Official Franchise Kit (14 Pages)</span>
                <button
                  onClick={() => onOpenBrochure('franchise-proposal')}
                  className="font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1 cursor-pointer"
                >
                  <span>Interactive Reader & PDF</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Floating Pan-India Metric Bar (Royal Blue style) */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 bg-black/25 p-5 rounded-2xl border border-white/15 backdrop-blur-md shadow-xl text-center">
            
            <div className="p-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-400 font-serif">
                35+
              </div>
              <div className="text-[11px] sm:text-xs text-slate-200 uppercase tracking-wider font-semibold mt-1">
                Campuses Across India
              </div>
            </div>

            <div className="p-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-serif">
                {uniqueStates}+
              </div>
              <div className="text-[11px] sm:text-xs text-slate-200 uppercase tracking-wider font-semibold mt-1">
                States Represented
              </div>
            </div>

            <div className="p-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-400 font-serif">
                45,900+
              </div>
              <div className="text-[11px] sm:text-xs text-slate-200 uppercase tracking-wider font-semibold mt-1">
                Active Students
              </div>
            </div>

            <div className="p-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-serif">
                2,370+
              </div>
              <div className="text-[11px] sm:text-xs text-slate-200 uppercase tracking-wider font-semibold mt-1">
                Trained Educators
              </div>
            </div>

            <div className="p-2 col-span-2 md:col-span-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-300 font-serif">
                18+
              </div>
              <div className="text-[11px] sm:text-xs text-slate-200 uppercase tracking-wider font-semibold mt-1">
                Years Academic Heritage
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
