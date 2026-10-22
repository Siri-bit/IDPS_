import React, { useState } from 'react';
import { 
  Building, 
  MonitorPlay, 
  FlaskConical, 
  Bot, 
  BookOpen, 
  Presentation, 
  Waves, 
  Trophy, 
  Music, 
  Smile, 
  Bus, 
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { INFRA_FACILITIES } from '../data/schoolData';

export const InfrastructureSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'academic' | 'sports' | 'safety'>('all');

  const facilityHighlights = [
    {
      code: "SC",
      title: "Smart Digital Classrooms",
      category: "academic",
      desc: "Interactive 75-inch touchscreen panels, ergonomic seating, themed concept woodwork, and multimedia curriculum lessons for every grade.",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      specs: ["Interactive 4K Digital Panels", "Ergonomic Dual-Desks", "Air Conditioned Units", "Themed Graphic Murals"]
    },
    {
      code: "SL",
      title: "Advanced Science & Research Labs",
      category: "academic",
      desc: "State-of-the-art Physics, Chemistry, Biology, and Mathematics laboratories equipped with precision instruments meeting CBSE & IB standards.",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      specs: ["Safety Gas Burners & Eye Washes", "Digital Microscopes", "CBSE Practical Workstations", "Chemical Storage Fume Hoods"]
    },
    {
      code: "RB",
      title: "Robotics, Coding & AI Tinker Lab",
      category: "academic",
      desc: "Hands-on robotics kits, 3D printing, microcontroller programming, and drone technology encouraging futuristic problem-solving.",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      specs: ["STEM Tinkering Modules", "Arduino & Raspberry Pi Kits", "Block Coding & Python Labs", "National Olympiad Readiness"]
    },
    {
      code: "LB",
      title: "Resource Library & Media Center",
      category: "academic",
      desc: "A rich literary repository housing 5,000+ fiction, reference encyclopedias, scientific journals, e-books, and quiet reading pods.",
      img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
      specs: ["5,000+ Print Titles", "Digital E-Reading Kiosks", "Research & Reference Stations", "Storytelling Amphitheatre"]
    },
    {
      code: "SX",
      title: "Multi-Sport Complex & Grounds",
      category: "sports",
      desc: "Professional sports facilities including cricket pitches, football turf, tennis & basketball courts, skating rinks, and athletics tracks.",
      img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
      specs: ["Synthetic Basketball Court", "Turf Football Ground", "Cricket Practice Nets", "Dedicated Martial Arts Zone"]
    },
    {
      code: "SP",
      title: "Covered Swimming Pool",
      category: "sports",
      desc: "Temperature-controlled swimming pool with certified NIS coaches, separate shallow splash pool for toddlers, and stringent lifeguard oversight.",
      img: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=800&q=80",
      specs: ["Half-Olympic Dimensions", "Ozone Water Filtration", "Certified Lifeguard on Duty", "Separate Changing Suites"]
    },
    {
      code: "MU",
      title: "Vibrant Music, Dance & Fine Arts Studio",
      category: "sports",
      desc: "Acoustically treated halls for Indian classical music, western instruments (piano, violin, drums), contemporary dance, and pottery.",
      img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
      specs: ["Indian & Western Instruments", "Mirrored Dance Studios", "Pottery & Ceramic Wheel", "Dramatics & Theatrics Stage"]
    },
    {
      code: "TR",
      title: "GPS-Tracked Fleet & 360° Safety",
      category: "safety",
      desc: "CCTV security perimeter across all campus corridors, industrial RO drinking water plants, equipped campus medical clinic, and GPS-monitored buses.",
      img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      specs: ["HD CCTV Surveillance", "Industrial Multi-Stage RO", "Full-Time Staff Nurse", "Live GPS Bus Tracking App"]
    }
  ];

  const filtered = facilityHighlights.filter(f => {
    if (activeCategory === 'academic') return f.category === 'academic';
    if (activeCategory === 'sports') return f.category === 'sports';
    if (activeCategory === 'safety') return f.category === 'safety';
    return true;
  });

  return (
    <section id="infrastructure" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-300">
            <Building className="w-3.5 h-3.5 text-amber-700" />
            <span>World-Class Campus Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-[#0B1D38] tracking-tight">
            Infrastructure & Modern{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-amber-600 italic">
              Learning Spaces
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-base md:text-lg">
            Every IDPS campus conforms to strict architectural and pedagogical design codes — integrating modern technology, safety, and experiential wonder.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#133568] text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Campus Facilities
          </button>
          <button
            onClick={() => setActiveCategory('academic')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'academic'
                ? 'bg-[#133568] text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Smart Classrooms & STEM Labs
          </button>
          <button
            onClick={() => setActiveCategory('sports')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'sports'
                ? 'bg-[#133568] text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Sports & Performing Arts
          </button>
          <button
            onClick={() => setActiveCategory('safety')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'safety'
                ? 'bg-[#133568] text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Health, Safety & Transport
          </button>
        </div>

        {/* Facility Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((fac, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={fac.img}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950">
                    {INFRA_FACILITIES[fac.code]?.label.split(' ')[0] || 'Campus Spec'}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-[#0a1d38] group-hover:text-emerald-900 transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {fac.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    {fac.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="w-full py-1.5 text-center text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 rounded-lg">
                  Standard Franchise Spec
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
