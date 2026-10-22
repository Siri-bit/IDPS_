import React, { useState } from 'react';
import { 
  Building2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Sparkles, 
  GraduationCap, 
  BookOpen, 
  Trophy, 
  Users2, 
  Compass, 
  BrainCircuit, 
  CheckCircle2 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const AboutSection: React.FC = () => {
  const { themeConfig } = useTheme();
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'dedication'>('dedication');

  const institutionDedications = [
    {
      title: "Quality Education",
      desc: "High standards of academic content delivery tailored for conceptual mastery and continuous assessment.",
      icon: GraduationCap,
      color: "bg-blue-50 text-blue-900 border-blue-200"
    },
    {
      title: "Syllabus-Oriented Learning",
      desc: "Structured curricular approaches aligned thoroughly with CBSE and global board examination patterns.",
      icon: BookOpen,
      color: "bg-sky-50 text-sky-900 border-sky-200"
    },
    {
      title: "Co-Curricular & Sports",
      desc: "Broad visual arts, physical sports, performing arts, and rich cultural integration across all age groups.",
      icon: Trophy,
      color: "bg-amber-50 text-amber-900 border-amber-200"
    },
    {
      title: "Personality Development",
      desc: "Nurturing unshakeable character, public presence, emotional poise, and communicative confidence.",
      icon: Users2,
      color: "bg-indigo-50 text-indigo-900 border-indigo-200"
    },
    {
      title: "Value-Based Education",
      desc: "Rooting forward-looking global perspectives firmly inside timeless ethical, civic, and moral frameworks.",
      icon: Compass,
      color: "bg-teal-50 text-teal-900 border-teal-200"
    },
    {
      title: "Leadership & Life Skills",
      desc: "Cultivating independent logic, proactive problem-solving frameworks, and future-readiness for young minds.",
      icon: BrainCircuit,
      color: "bg-slate-50 text-slate-900 border-slate-200"
    }
  ];

  const visionPoints = [
    "Enjoy learning & passionately explore concepts through curiosity",
    "Discover their true hidden individual potential and talents",
    "Build core confidence, public presence, and articulate speech",
    "Develop scientific reasoning, creativity, and abstract logic",
    "Learn proactive leadership skills and collaborative teamwork",
    "Embrace modern societal and technological challenges willingly",
    "Achieve supreme academic excellence in board and entrance tests"
  ];

  const missionPoints = [
    "Develop high self-esteem and unshakeable confidence among students",
    "Create passionate lifelong learners ready for rapid global evolution",
    "Cultivate deep moral, civic, and ethical core human values",
    "Encourage robust cultural awareness and proactive social responsibility",
    "Promote discipline, active compassion, integrity, and servant leadership",
    "Provide a strictly inclusive, supportive, and holistic education layout",
    "Prepare students completely for future structural and university challenges"
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Building2 className="w-3.5 h-3.5 text-blue-800" />
            <span>About The Institution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-slate-900 tracking-tight">
            International Delhi Public School{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#133568] via-[#1D4ED8] to-amber-700 italic">
              Society
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-base md:text-lg">
            Founded on 22nd February 2012 — a not-for-profit educational organization managed by committed visionaries from across India.
          </p>
        </div>

        {/* Story & Foundation Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#133568] leading-tight">
              Creating a strong educational ecosystem rooted in brotherhood, academic rigour, and child development.
            </h3>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The International Delhi Public School Society, founded on <strong>22nd February 2012</strong>, is a not-for-profit non-governmental organization managed by a committed group of educational visionaries from different parts of India.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We adopt interactive, engaging teaching methodologies that encourage curiosity, creativity, innovation, and independent thinking. Through our progressive educational approach, we strive to nurture responsible citizens who contribute positively towards society and nation-building.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#133568] text-amber-300 flex items-center justify-center shrink-0 font-bold text-lg shadow-sm">
                ★
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Equal Access Benchmark
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  "At IDPS, we believe that children are the future of every society and that every child deserves equal access to quality education, knowledge, and opportunities."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80" 
                alt="IDPS Students in Classroom" 
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D38]/90 via-[#0B1D38]/30 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Pan-India Quality Framework</span>
                </div>
                <h4 className="text-lg font-serif font-bold text-white">
                  35+ Campuses. One Common Academic Benchmark.
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Centralized teacher academy, common semester assessments, and quarterly quality audits ensure parity across all state chapters.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Tab Selector: Dedications / Vision / Mission */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab('dedication')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'dedication'
                  ? 'bg-white text-blue-950 shadow-md border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Our Dedication (6 Pillars)
            </button>

            <button
              onClick={() => setActiveTab('vision')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'vision'
                  ? 'bg-white text-blue-950 shadow-md border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Our Vision
            </button>

            <button
              onClick={() => setActiveTab('mission')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'mission'
                  ? 'bg-white text-blue-950 shadow-md border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Our Mission
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        {activeTab === 'dedication' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {institutionDedications.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-lg transition-all hover:border-blue-700/40 group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#133568] group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'vision' && (
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0B1D38] via-[#133568] to-[#1E3A8A] text-white shadow-xl animate-in fade-in duration-300">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/25 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-400/30">
                <Eye className="w-3.5 h-3.5" />
                <span>IDPS Vision Statement</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                "To provide a stimulating, inclusive, and inspiring learning environment where children:"
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {visionPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/10 p-3.5 rounded-xl border border-white/15">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-100 font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'mission' && (
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#07172C] via-[#0B1D38] to-[#133568] text-white shadow-xl animate-in fade-in duration-300">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/30">
                <Target className="w-3.5 h-3.5" />
                <span>IDPS Mission Statement</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                "Explicit commitments shaping our everyday focus to achieve global learning parameters:"
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {missionPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/10 p-3.5 rounded-xl border border-white/15">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-100 font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
