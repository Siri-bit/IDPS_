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
  Calculator,
  HelpCircle
} from 'lucide-react';
import { FRANCHISE_MODELS, FINANCIAL_METRICS, FranchiseModel } from '../data/schoolData';
import { useTheme } from '../context/ThemeContext';

interface FranchiseSectionProps {
  onOpenEnquiry: (type: 'franchise' | 'admission') => void;
  onOpenBrochure: (brochureId?: string) => void;
  onOpenCalculator: () => void;
}

export const FranchiseSection: React.FC<FranchiseSectionProps> = ({
  onOpenEnquiry,
  onOpenBrochure,
  onOpenCalculator,
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
              <span className="text-xs text-slate-500 block uppercase font-medium">Estimated ROI Payback</span>
              <strong className="text-lg sm:text-xl font-bold text-blue-800">{FINANCIAL_METRICS.projectOverview.estimatedROIPeriod}</strong>
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
                  <TrendingUp className="w-4 h-4" />
                  <span>Interactive ROI Simulator</span>
                </div>
                <p className="text-xs text-slate-200">
                  Test your local enrollment targets, fee slabs, and calculate net take-home profits with our interactive simulator.
                </p>
                <button
                  onClick={onOpenCalculator}
                  className="w-full mt-2 py-2 text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Launch ROI Calculator</span>
                </button>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => onOpenEnquiry('franchise')}
                  className="w-full py-3 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
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

        {/* PDF Page 10 & 11: Official Financial Projections Table */}
        <div id="financial-model" className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90 mb-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Page 10 of Franchise Proposal</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#133568]">
                Financial Projections & Net Profit Analysis
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Official conservative baseline projections based on standardized K-12 campus rollouts.
              </p>
            </div>

            <button
              onClick={onOpenCalculator}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              <span>Simulate Custom Metrics</span>
            </button>
          </div>

          {/* 3-Year Projection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {FINANCIAL_METRICS.projections.map((p, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200 hover:border-blue-700/40 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="font-extrabold text-sm text-[#133568] uppercase tracking-wide">
                    {p.year}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-100 text-blue-950">
                    {p.students} Students
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase block font-semibold">Gross Estimated Revenue</span>
                    <strong className="text-lg font-bold text-slate-900">{p.grossRevenue}</strong>
                  </div>

                  <div>
                    <span className="text-[11px] text-slate-500 uppercase block font-semibold">Gross Operational Expenses</span>
                    <span className="text-sm font-semibold text-rose-700">{p.grossExpenses}</span>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] text-blue-900 uppercase block font-bold">Franchisee Net Take-Home</span>
                    <strong className="text-xl font-extrabold text-blue-900">{p.netProfit}</strong>
                    <div className="text-[10px] text-slate-400 mt-0.5">Projected Net Margin: {p.margin}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Annexure A & B Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
            
            {/* Annexure A: Fee Structure & Collections */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center justify-between">
                <span>Annexure "A": Fee Structure & Collections Pool</span>
                <span className="text-[10px] text-blue-900 font-bold bg-blue-100 px-2 py-0.5 rounded">95% & 92% Share</span>
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500">
                      <th className="py-2 font-semibold">Collection Head</th>
                      <th className="py-2 text-right">Year 1</th>
                      <th className="py-2 text-right">Year 2</th>
                      <th className="py-2 text-right">Year 3</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {FINANCIAL_METRICS.feeStructure.map((row, i) => (
                      <tr key={i} className={i === 2 ? 'bg-amber-50/60 font-bold text-slate-900' : ''}>
                        <td className="py-2 pr-2">{row.head}</td>
                        <td className="py-2 text-right">{row.y1}</td>
                        <td className="py-2 text-right">{row.y2}</td>
                        <td className="py-2 text-right">{row.y3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Annexure B: Core Staff Allocation Grid */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center justify-between">
                <span>Annexure "B": Core Baseline Staff Grid</span>
                <span className="text-[10px] text-slate-500 font-semibold">Included in Operating Budget</span>
              </h4>

              <div className="space-y-2">
                {FINANCIAL_METRICS.staffAllocationGrid.map((staff, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-white border border-slate-100">
                    <span className="text-slate-800 font-semibold">{staff.role}</span>
                    <span className="px-2.5 py-0.5 rounded-full font-bold bg-blue-50 text-blue-900">
                      {staff.count} {staff.count > 1 ? 'Personnel' : 'Lead'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Disclaimer Note */}
          <div className="mt-6 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-[11px] text-slate-600 leading-relaxed flex items-start gap-2">
            <HelpCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> Financial projections mapped above may vary based on location parameters, target city tiering, precise infrastructure setup quality, and relative parent purchasing power. Prevailing Government taxes (GST) will strictly apply.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
