import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  Camera
} from 'lucide-react';
import { BRANCHES } from '../data/schoolData';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenEnquiry: (type: 'franchise' | 'admission') => void;
  onOpenBrochure: (brochureId?: string) => void;
  onExploreCampuses: () => void;
}

// Curated authentic photographs of school children & students
const HERO_CHILDREN_PHOTOS = [
  {
    url: "/assets/children_heroes/children_at_school_india.jpg",
    position: "object-center",
    title: "School Children in Uniform Assembly",
    subtitle: "Pan-India IDPS Student Body & Campus Discipline",
    alt: "Indian school children in neat uniforms gathered on campus at International Delhi Public School"
  },
  {
    url: "/assets/children_heroes/children_classroom_writing.jpg",
    position: "object-center md:object-right",
    title: "Primary Students Writing & Learning",
    subtitle: "Classroom Engagement & Creative Writing",
    alt: "Primary school children writing and sketching in classroom workbooks"
  },
  {
    url: "/assets/children_heroes/biology_study_group_6146861188.jpg",
    position: "object-center",
    title: "Students Collaborative Academic Study",
    subtitle: "Secondary Academic Excellence & Peer Learning",
    alt: "Indian school students in uniforms studying together with textbooks and notebooks"
  },
  {
    url: "/assets/children_heroes/children_classroom_raising_hands.jpg",
    position: "object-center md:object-right",
    title: "Interactive Smart Classroom",
    subtitle: "Curious Minds & Active Student Participation",
    alt: "Engaged school children raising hands in interactive classroom lesson"
  }
];

export const Hero: React.FC<HeroProps> = ({
  onOpenEnquiry,
  onOpenBrochure,
  onExploreCampuses,
}) => {
  const { themeConfig } = useTheme();
  const totalStudents = BRANCHES.reduce((acc, curr) => acc + curr.students, 0);
  const totalFaculty = BRANCHES.reduce((acc, curr) => acc + curr.teachers, 0);
  const uniqueStates = new Set(BRANCHES.map(b => b.state)).size;

  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  // Gentle background auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhotoIdx(prev => (prev + 1) % HERO_CHILDREN_PHOTOS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative text-white overflow-hidden pt-8 pb-14 md:pb-18 lg:pt-14 lg:pb-20 bg-[#0B1D38]"
    >
      {/* Background with School Kids & Children Photos & Royal Blue Gradients */}
      <div className="absolute inset-0 z-0">
        {HERO_CHILDREN_PHOTOS.map((photo, idx) => (
          <img 
            key={photo.url}
            src={photo.url} 
            alt={photo.alt}
            className={`absolute inset-0 w-full h-full object-cover ${photo.position} filter contrast-105 transition-opacity duration-1000 ${
              idx === activePhotoIdx ? 'opacity-75 md:opacity-80' : 'opacity-0'
            }`}
          />
        ))}
        {/* Directional Royal Blue Gradients: Darker on left for crystal-clear text readability, translucent on right so school kids are clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D38] via-[#0B1D38]/85 via-50% to-[#0B1D38]/20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D38]/75 via-transparent to-[#0B1D38]/90 pointer-events-none"></div>
        <div className="absolute inset-0 pattern-grid opacity-10 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left-Aligned Editorial Content (Message kept on left side and sized moderately) */}
        <div className="max-w-2xl lg:max-w-3xl text-left">
          
          {/* Founded Badge matching screenshot */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#133568]/60 border border-blue-400/40 text-amber-300 text-xs font-bold tracking-wide backdrop-blur-md shadow-md mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></span>
            <span>FOUNDED ON 22ND FEBRUARY 2012 • NEW DELHI</span>
          </div>

          {/* Main Editorial Headline - Scaled proportionally and positioned on the left side */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight leading-[1.18] text-white">
            Empowering Education.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-sky-200 italic font-serif">
              Inspiring Excellence.
            </span>{' '}
            Building Futures.
          </h1>

          {/* Subtitle / Core Philosophy - Replaced STEAM innovation with academic excellence */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-xl">
            The International Delhi Public School Society is a premier Pan-India educational network delivering CBSE syllabus rigour, modern academic excellence, and value-based holistic education across 35+ campuses nationwide.
          </p>

          {/* Central Philosophy Quote */}
          <div className="mt-4 p-3 px-4 rounded-xl bg-white/5 border border-white/10 text-amber-200 text-xs sm:text-sm italic backdrop-blur-md max-w-lg shadow-inner">
            "Education is not merely preparation for examinations but preparation for life itself."
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenEnquiry('franchise')}
              className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-200 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Franchise Partnership Models</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreCampuses}
              className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-200 flex items-center gap-2 cursor-pointer backdrop-blur-xs"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Explore 35+ Campuses</span>
            </button>

            <button
              onClick={() => onOpenBrochure('franchise-proposal')}
              className="px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer bg-white/5 hover:bg-white/15 border border-white/15"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Brochure & PDF</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>CBSE Syllabus Aligned</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>360° Central Launch Support</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>90-Day Implementation Timeline</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Government Registered NGO</span>
            </div>
          </div>

          {/* Discreet Children Photo Switcher Controls */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5 text-xs text-slate-300">
            <span className="text-[11px] text-amber-300/90 uppercase tracking-wider font-bold flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>Campus Life:</span>
            </span>
            <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 shadow-sm">
              {HERO_CHILDREN_PHOTOS.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === activePhotoIdx 
                      ? 'w-7 bg-amber-400 shadow-xs' 
                      : 'w-2.5 bg-white/40 hover:bg-white/80'
                  }`}
                  title={photo.title}
                  aria-label={`View ${photo.title}`}
                />
              ))}
            </div>
            <span className="text-[11px] text-amber-200/90 font-medium">
              {HERO_CHILDREN_PHOTOS[activePhotoIdx].title}
            </span>
          </div>

        </div>

        {/* Pan-India Metric Bar (Royal Blue & Gold style) */}
        <div className="mt-10 pt-6 border-t border-white/15">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 lg:gap-5 bg-black/35 p-4 sm:p-5 rounded-2xl border border-white/15 backdrop-blur-md shadow-2xl text-center">
            
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif">
                35+
              </div>
              <div className="text-[10px] sm:text-xs text-slate-200 uppercase tracking-wider font-semibold mt-1">
                Campuses Across India
              </div>
            </div>

            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                {uniqueStates}+
              </div>
              <div className="text-[10px] sm:text-xs text-slate-200 uppercase tracking-wider font-semibold mt-1">
                States Represented
              </div>
            </div>

            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif">
                45,900+
              </div>
              <div className="text-[10px] sm:text-xs text-slate-200 uppercase tracking-wider font-semibold mt-1">
                Active Students
              </div>
            </div>

            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                2,370+
              </div>
              <div className="text-[10px] sm:text-xs text-slate-200 uppercase tracking-wider font-semibold mt-1">
                Trained Educators
              </div>
            </div>

            <div className="p-2 col-span-2 md:col-span-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-serif">
                18+
              </div>
              <div className="text-[10px] sm:text-xs text-slate-200 uppercase tracking-wider font-semibold mt-1">
                Years Academic Heritage
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
