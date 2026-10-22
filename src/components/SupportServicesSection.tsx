import React, { useState } from 'react';
import { 
  Globe, 
  Share2, 
  MapPin, 
  Megaphone, 
  UserCheck, 
  GraduationCap, 
  Palette, 
  Settings, 
  Award, 
  BookCheck, 
  ShieldCheck, 
  Sparkles, 
  Download, 
  ArrowRight, 
  CheckCircle2, 
  FileCheck 
} from 'lucide-react';
import { SUPPORT_SERVICES, SupportService } from '../data/schoolData';
import { useTheme } from '../context/ThemeContext';

interface SupportServicesSectionProps {
  onOpenEnquiry: (type: 'franchise' | 'admission') => void;
  onOpenBrochure: (brochureId?: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  Share2,
  MapPin,
  Megaphone,
  UserCheck,
  GraduationCap,
  Palette,
  Settings,
  Award,
  BookCheck,
  ShieldCheck
};

export const SupportServicesSection: React.FC<SupportServicesSectionProps> = ({
  onOpenEnquiry,
  onOpenBrochure,
}) => {
  const { themeConfig } = useTheme();
  const [activeCategory, setActiveCategory] = useState<'all' | 'digital' | 'hr' | 'ops' | 'academic'>('all');

  const filterServices = () => {
    if (activeCategory === 'digital') {
      return SUPPORT_SERVICES.filter(s => [1, 2, 3, 4, 7].includes(s.id));
    }
    if (activeCategory === 'hr') {
      return SUPPORT_SERVICES.filter(s => [5, 6].includes(s.id));
    }
    if (activeCategory === 'ops') {
      return SUPPORT_SERVICES.filter(s => [8, 9, 11].includes(s.id));
    }
    if (activeCategory === 'academic') {
      return SUPPORT_SERVICES.filter(s => [6, 10, 11].includes(s.id));
    }
    return SUPPORT_SERVICES;
  };

  return (
    <section id="support-services" className="py-20 bg-white relative overflow-hidden border-t border-b border-slate-200">
      
      {/* Background patterns */}
      <div className="absolute inset-0 pattern-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <FileCheck className="w-3.5 h-3.5 text-blue-700" />
            <span>Attachment 2: Official Support Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-slate-900 tracking-tight">
            11 Core Support &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#133568] via-[#1D4ED8] to-amber-700 italic">
              Central Services
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-base md:text-lg">
            Every International Delhi Public School partner campus is backed from Day 1 by the Central Society's specialized operational, academic, and marketing machinery.
          </p>

          {/* Quick PDF 2 download prompt */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => onOpenBrochure('support-services')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-900 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 hover:bg-amber-100 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>View & Download Official "Support & Services" Document</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#133568] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All 11 Core Services
          </button>
          <button
            onClick={() => setActiveCategory('digital')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'digital'
                ? 'bg-[#133568] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Digital & Marketing (1–4, 7)
          </button>
          <button
            onClick={() => setActiveCategory('hr')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'hr'
                ? 'bg-[#133568] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Staff Hiring & Training (5, 6)
          </button>
          <button
            onClick={() => setActiveCategory('ops')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'ops'
                ? 'bg-[#133568] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Operations & Affiliation (8, 9, 11)
          </button>
          <button
            onClick={() => setActiveCategory('academic')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'academic'
                ? 'bg-[#133568] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Curriculum & Audits (10, 11)
          </button>
        </div>

        {/* 11 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterServices().map((service) => {
            const Icon = ICON_MAP[service.icon] || Sparkles;
            return (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-600/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 flex items-center justify-center group-hover:scale-105 group-hover:bg-[#133568] group-hover:text-amber-400 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      0{service.id}.
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#133568] group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-semibold text-amber-700 mt-0.5">
                    {service.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Key Deliverables:
                    </div>
                    {service.keyDeliverables.map((del, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">Provided Centrally</span>
                  <button
                    onClick={() => onOpenEnquiry('franchise')}
                    className="text-xs font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Centralized Support Banner Callout */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0B1D38] via-[#133568] to-[#1E40AF] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Ready to Launch an IDPS Campus in Your City?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              From site selection and local CBSE NOCs to complete faculty recruitment and admission campaigns, our Central Office guides you through every milestone.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenEnquiry('franchise')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs bg-amber-400 hover:bg-amber-300 text-slate-950 transition-all shadow-md cursor-pointer"
            >
              Express Partnership Intent
            </button>
            <button
              onClick={() => onOpenBrochure('support-services')}
              className="w-full sm:w-auto px-5 py-3 rounded-xl font-semibold text-xs bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Download Services Doc</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
