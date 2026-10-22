import React from 'react';
import { 
  Quote, 
  Award, 
  Sparkles, 
  Compass, 
  HeartHandshake, 
  GraduationCap, 
  CheckCircle, 
  PhoneCall, 
  Calendar 
} from 'lucide-react';
import { CHAIRMAN_PROFILE } from '../data/schoolData';
import { useTheme } from '../context/ThemeContext';

interface ChairmanSectionProps {
  onOpenEnquiry: (type: 'franchise' | 'admission') => void;
}

export const ChairmanSection: React.FC<ChairmanSectionProps> = ({ onOpenEnquiry }) => {
  const { themeConfig } = useTheme();

  return (
    <section id="chairman" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative overflow-hidden border-t border-b border-slate-200">
      
      {/* Decorative background watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none select-none">
        <img 
          src="./assets/idps-logo.jpg" 
          alt="Watermark Crest" 
          className="w-full h-full object-contain filter grayscale"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-950 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Award className="w-3.5 h-3.5 text-blue-800" />
            <span>Guiding Vision & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-slate-900 tracking-tight">
            From the Desk of the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#133568] via-[#1D4ED8] to-amber-700 italic">
              Chairman
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-base md:text-lg">
            Steering the national mission of transformative schooling, character development, and equal opportunity for every Indian child since 2012.
          </p>
        </div>

        {/* Chairman Feature Grid */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Chairman Portrait & Society Crest Credentials */}
            <div 
              style={{ backgroundColor: themeConfig.primaryBg }}
              className="lg:col-span-5 p-8 sm:p-10 text-white flex flex-col justify-between relative transition-colors duration-300"
            >
              <div className="absolute inset-0 pattern-grid opacity-10 pointer-events-none"></div>

              <div>
                {/* Crest + Date */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/15">
                  <div className="flex items-center gap-3">
                    <img 
                      src="./assets/idps-logo.jpg" 
                      alt="IDPS Society Official Logo" 
                      className="w-14 h-14 rounded-full object-contain bg-white p-1 border-2 border-amber-400 shadow-lg"
                    />
                    <div>
                      <div className="text-xs font-bold tracking-wider text-amber-300 uppercase">THE IDPS SOCIETY</div>
                      <div className="text-[11px] text-slate-300">Regd. Office: New Delhi</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-xs text-amber-300 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Feb 22, 2012</span>
                  </div>
                </div>

                {/* Portrait with Golden Frame */}
                <div className="relative mx-auto max-w-[320px] rounded-2xl p-2 bg-gradient-to-tr from-amber-500 via-amber-300 to-yellow-200 shadow-2xl">
                  <div className="rounded-xl overflow-hidden bg-slate-900 aspect-3/4">
                    <img 
                      src={CHAIRMAN_PROFILE.photo} 
                      alt="Chairman - The International Delhi Public School Society" 
                      className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Floating badge over image */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-11/12 bg-white text-slate-900 rounded-xl px-4 py-2.5 shadow-lg border border-amber-200 text-center">
                    <div className="text-xs font-extrabold text-[#0B1D38] tracking-tight">
                      CHAIRMAN & FOUNDER
                    </div>
                    <div className="text-[11px] text-blue-900 font-semibold">
                      The IDPS Society, New Delhi
                    </div>
                  </div>
                </div>
              </div>

              {/* Society Motto Badge */}
              <div className="mt-10 pt-6 border-t border-white/15 text-center">
                <div className="text-[11px] uppercase tracking-widest text-amber-300 font-bold mb-1">
                  Core Society Creed
                </div>
                <div className="text-xs sm:text-sm font-serif italic text-slate-100">
                  "Discipline • Dedication • Duty • Selfless Service"
                </div>
              </div>

            </div>

            {/* Right Column: Chairman's Visionary Address & Strategic Philosophy */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-wider mb-2">
                  <Quote className="w-4 h-4" />
                  <span>Chairman's Visionary Address</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-slate-900 leading-tight mb-4">
                  "At IDPS, we believe children are the future of every society, and every child deserves equal access to quality education, knowledge, and opportunities."
                </h3>

                <div className="prose prose-slate text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    When we established <strong className="text-slate-900">The International Delhi Public School Society on 22nd February 2012</strong>, our intention was crystal clear: to create an educational ecosystem built upon the bedrock of brotherhood, mutual support, academic rigour, and holistic child development.
                  </p>
                  <p>
                    Today, the rapid advance of technology and global interconnectedness requires that school education transcend traditional textbook memorization. As I often share with our educators and parents: <em className="text-[#133568] font-serif font-semibold">"Education is not merely preparation for examinations but preparation for life itself."</em>
                  </p>
                  <p>
                    We actively encourage curiosity, creativity, and independent logic. Whether in a Tier-1 metropolitan centre or a burgeoning Tier-2 regional district, every IDPS institution upholds identical benchmarks of teacher qualification, digital classrooms, sports facilities, and ethical grounding.
                  </p>
                </div>

                {/* 4 Guiding Tenets Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CHAIRMAN_PROFILE.tenets.map((tenet, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition-colors"
                    >
                      <div className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                            {tenet.title}
                          </h4>
                          <p className="text-xs text-slate-600 mt-1">
                            {tenet.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Chairman Sign-off & Direct Interaction CTA */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="font-serif font-bold text-lg text-slate-900">
                    Chairman & Governing Board
                  </div>
                  <div className="text-xs text-slate-500">
                    The International Delhi Public School Society, New Delhi
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => onOpenEnquiry('franchise')}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold bg-[#133568] hover:bg-[#0B1D38] text-white transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <HeartHandshake className="w-3.5 h-3.5 text-amber-300" />
                    <span>Join Our Mission</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
