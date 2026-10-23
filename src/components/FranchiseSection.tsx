import React, { useState } from 'react';
import { 
  Building2, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Download, 
  TrendingUp, 
  Layers, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Users, 
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { FRANCHISE_MODELS, FINANCIAL_METRICS, FranchiseModel } from '../data/schoolData';
import { useTheme } from '../context/ThemeContext';

interface FranchiseSectionProps {
  onOpenEnquiry: (type: 'franchise' | 'admission') => void;
  onOpenBrochure: (brochureId?: string) => void;
}

export const FranchiseSection: React.FC<FranchiseSectionProps> = ({
  onOpenEnquiry,
  onOpenBrochure,
}) => {
  const { themeConfig } = useTheme();
  const [selectedModelId, setSelectedModelId] = useState<string>('idps-k12');
  const selectedModel = FRANCHISE_MODELS.find(m => m.id === selectedModelId) || FRANCHISE_MODELS[3];

  return (
    <section id="franchise-models" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>Franchise Business Opportunity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-slate-900 tracking-tight">
            Tailored School{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#133568] via-[#1D4ED8] to-amber-700 italic">
              Franchise Models
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-base md:text-lg">
            From exclusive preschools to flagship 5-acre K-12 international campuses, IDPS provides complete turnkey blueprints, central brand equity, and proven financial returns.
          </p>
        </div>

        {/* Project Standard Overview Bar (PDF 1 Page 7) */}
        <div className="mb-12 bg-white rounded-2xl p-6 shadow-md border border-slate-200/90">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span>Standard K-12 Project Setup Metrics (PDF Proposal)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 text-center">
            <div className="pt-2 sm:pt-0">
              <span className="text-xs text-slate-500 block uppercase font-medium">Standard Land Requirement</span>
              <strong className="text-lg sm:text-xl font-bold text-slate-900">{FINANCIAL_METRICS.projectOverview.totalLandRequirement}</strong>
            </div>
            <div className="pt-2 sm:pt-0 sm:pl-4">
              <span className="text-xs text-slate-500 block uppercase font-medium">Minimum Built-Up Area</span>
              <strong className="text-lg sm:text-xl font-bold text-slate-900">{FINANCIAL_METRICS.projectOverview.minimumBuiltUpArea}</strong>
            </div>
            <div className="pt-2 sm:pt-0 sm:pl-4">
              <span className="text-xs text-slate-500 block uppercase font-medium">Implementation Timeline</span>
              <strong className="text-lg sm:text-xl font-bold text-blue-800">90 Days to Launch</strong>
            </div>
            <div className="pt-2 sm:pt-0 sm:pl-4">
              <span className="text-xs text-slate-500 block uppercase font-medium">Initial Base Investment</span>
              <strong className="text-lg sm:text-xl font-bold text-amber-700">{FINANCIAL_METRICS.projectOverview.initialCoreBaseInvestment}</strong>
            </div>
          </div>
        </div>

        {/* Model Tabs Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          {FRANCHISE_MODELS.map((model) => {
            const isSelected = model.id === selectedModelId;
            return (
              <button
                key={model.id}
                onClick={() => setSelectedModelId(model.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#133568] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{model.name}</span>
                {model.popular && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-extrabold ${
                    isSelected ? 'bg-amber-400 text-slate-950' : 'bg-amber-100 text-amber-900'
                  }`}>
                    Flagship
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Model In-depth Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Main Details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-100 text-blue-950">
                    Classes: {selectedModel.classes}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-800">
                    Setup Area: {selectedModel.area}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#133568]">
                  {selectedModel.name}: {selectedModel.tagline}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                  Curriculum Pedagogy: {selectedModel.curriculum}
                </p>
              </div>

              {/* Franchise Fee & City Tier Breakdown */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Franchise Fee Structure
                </div>
                
                {selectedModel.feeTiers ? (
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                      <span className="text-[11px] text-slate-500 block font-semibold">Tier 1 City</span>
                      <strong className="text-sm sm:text-base font-extrabold text-[#133568]">
                        {selectedModel.feeTiers.tier1}
                      </strong>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                      <span className="text-[11px] text-slate-500 block font-semibold">Tier 2 City</span>
                      <strong className="text-sm sm:text-base font-extrabold text-[#133568]">
                        {selectedModel.feeTiers.tier2}
                      </strong>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                      <span className="text-[11px] text-slate-500 block font-semibold">Other Cities</span>
                      <strong className="text-sm sm:text-base font-extrabold text-blue-900">
                        {selectedModel.feeTiers.other}
                      </strong>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-700">Standard Franchise Fee</span>
                    <strong className="text-lg font-extrabold text-[#133568]">
                      {selectedModel.franchiseFee}
                    </strong>
                  </div>
                )}
                <div className="text-[11px] text-slate-400 mt-2 italic text-center">
                  * Applicable prevailing Government taxes (GST) will be charged as per statutory guidelines.
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Strategic Model Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedModel.keyHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-blue-50/50 border border-blue-100 text-xs text-slate-800">
                      <Check className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Col: Features & Quick Apply Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0B1D38] via-[#133568] to-[#1E3A8A] p-6 sm:p-8 rounded-2xl text-white space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs uppercase tracking-wider font-bold text-amber-400">
                  Infrastructure & Support
                </span>
                <span className="text-xs font-bold text-slate-200">Turnkey Support</span>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-semibold text-slate-200 uppercase">What IDPS Delivers:</div>
                {selectedModel.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/15 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                  <ShieldCheck className="w-4 h-4" />
                  <span>360° Central Turnkey Support</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Every model includes architectural master planning, teacher recruitment & training, CBSE affiliation advisory, and centrally supplied academic kits.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => onOpenEnquiry('franchise')}
                  className="w-full py-3 rounded-xl font-bold text-xs bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply For {selectedModel.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenBrochure('franchise-proposal')}
                  className="w-full py-2.5 rounded-xl font-semibold text-xs bg-white/10 hover:bg-white/15 text-slate-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Interactive Brochure & PDF</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
