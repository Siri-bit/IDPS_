import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  ArrowRight, 
  Sparkles, 
  X, 
  Check, 
  HelpCircle,
  Building2,
  DollarSign
} from 'lucide-react';
import { FRANCHISE_MODELS, FINANCIAL_METRICS } from '../data/schoolData';

interface RoiCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: (type: 'franchise' | 'admission', prefillData?: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({
  isOpen,
  onClose,
  onOpenEnquiry,
}) => {
  if (!isOpen) return null;

  const [selectedModel, setSelectedModel] = useState<string>('idps-k12');
  const [tier, setTier] = useState<'tier1' | 'tier2' | 'other'>('tier1');
  const [studentCount, setStudentCount] = useState<number>(500);
  const [feePerStudent, setFeePerStudent] = useState<number>(66000); // Year 2 default pool

  // Default fee multipliers based on tier
  const tierMultipliers = {
    tier1: 1.25,
    tier2: 1.0,
    other: 0.85
  };

  const effectiveFee = Math.round(feePerStudent * tierMultipliers[tier]);
  const grossRevenue = studentCount * effectiveFee;
  const franchiseeRetentionPct = studentCount <= 350 ? 0.95 : 0.92;
  const franchiseeShare = Math.round(grossRevenue * franchiseeRetentionPct);
  
  // Approximate standard operating expenses (Staff grid + overheads from Annexure B)
  const baseStaffExpense = 2800000;
  const variableCostPerStudent = 3000;
  const operatingExpenses = Math.round(baseStaffExpense + (studentCount * variableCostPerStudent) * tierMultipliers[tier]);
  
  const estimatedNetProfit = Math.max(0, franchiseeShare - operatingExpenses);
  const profitMargin = Math.round((estimatedNetProfit / grossRevenue) * 100);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleApply = () => {
    onClose();
    const modelObj = FRANCHISE_MODELS.find(m => m.id === selectedModel);
    onOpenEnquiry(
      'franchise', 
      `Model: ${modelObj?.name || 'K-12'} | Target Students: ${studentCount} | City Tier: ${tier.toUpperCase()} | Projected Net Profit: ${formatINR(estimatedNetProfit)}`
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#0B1D38] via-[#133568] to-[#1E40AF] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-serif">
                Interactive Franchise ROI & Net Profit Simulator
              </h3>
              <p className="text-xs text-amber-300">
                Calibrated with IDPS Official Financial Matrix (Annexure A & B)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Top Configuration Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Model Select */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                Target Franchise Model
              </label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-700 bg-slate-50"
              >
                {FRANCHISE_MODELS.map(m => (
                  <option key={m.id} value={m.id}>{m.name}</option>
                ))}
              </select>
            </div>

            {/* City Tier Select */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                Location Tiering
              </label>
              <select
                value={tier}
                onChange={(e) => setTier(e.target.value as any)}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-700 bg-slate-50"
              >
                <option value="tier1">Tier 1 Metro (Delhi, Bengaluru, Mumbai, etc.)</option>
                <option value="tier2">Tier 2 Hub (Jaipur, Lucknow, Indore, etc.)</option>
                <option value="other">Tier 3 / District Headquarter</option>
              </select>
            </div>

            {/* Fee Pool */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                Annual Fee Benchmark
              </label>
              <select
                value={feePerStudent}
                onChange={(e) => setFeePerStudent(Number(e.target.value))}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-700 bg-slate-50"
              >
                <option value={60000}>Year 1 Standard (₹60,000/yr)</option>
                <option value={66000}>Year 2 Standard (₹66,000/yr)</option>
                <option value={72600}>Year 3 Standard (₹72,600/yr)</option>
                <option value={90000}>Premium Cambridge/IB (₹90,000/yr)</option>
              </select>
            </div>

          </div>

          {/* Slider for Student Enrollment */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                  Projected Student Enrollment
                </span>
                <span className="text-[11px] text-slate-500">
                  Standard K-12 targets: Y1: 300 | Y2: 500 | Y3: 700+
                </span>
              </div>
              <div className="text-xl font-extrabold text-[#133568] bg-white px-4 py-1 rounded-xl border border-slate-200 shadow-xs">
                {studentCount} Students
              </div>
            </div>

            <input
              type="range"
              min={100}
              max={1500}
              step={25}
              value={studentCount}
              onChange={(e) => setStudentCount(Number(e.target.value))}
              className="w-full accent-blue-700 cursor-pointer h-2 bg-slate-200 rounded-lg"
            />

            <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
              <span>100 (Foundational)</span>
              <span>500 (Break-Even Peak)</span>
              <span>1000+ (Full Capacity)</span>
            </div>
          </div>

          {/* Results Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] text-slate-500 uppercase block font-semibold">Total Gross Fee Pool</span>
              <strong className="text-lg sm:text-xl font-bold text-[#0B1D38] block mt-1">
                {formatINR(grossRevenue)}
              </strong>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                Avg. {formatINR(effectiveFee)} / student
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
              <span className="text-[11px] text-blue-900 uppercase block font-semibold">Franchisee Retention Share</span>
              <strong className="text-lg sm:text-xl font-bold text-blue-900 block mt-1">
                {formatINR(franchiseeShare)}
              </strong>
              <span className="text-[10px] text-blue-700 block mt-0.5">
                {(franchiseeRetentionPct * 100).toFixed(0)}% Fee Pool Retention
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100">
              <span className="text-[11px] text-rose-900 uppercase block font-semibold">Estimated Operational Costs</span>
              <strong className="text-lg sm:text-xl font-bold text-rose-900 block mt-1">
                {formatINR(operatingExpenses)}
              </strong>
              <span className="text-[10px] text-rose-700 block mt-0.5">
                Staff Salaries & Day-to-Day
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/80 border border-amber-300">
              <span className="text-[11px] text-amber-950 uppercase block font-bold">Projected Net Take-Home</span>
              <strong className="text-xl sm:text-2xl font-extrabold text-amber-950 block mt-1">
                {formatINR(estimatedNetProfit)}
              </strong>
              <span className="text-[10px] text-amber-800 block mt-0.5 font-bold">
                Net Profit Margin: ~{profitMargin}%
              </span>
            </div>

          </div>

          {/* Quick comparison with PDF 1 official figures */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Official Benchmark Reference (from PDF Proposal page 10):</span>
            </div>
            <p>
              Year 1 (300 Students): Net Profit <strong>₹1,33,32,000</strong> &nbsp;|&nbsp; 
              Year 2 (500 Students): Net Profit <strong>₹2,77,12,000</strong> &nbsp;|&nbsp; 
              Year 3 (700 Students): Net Profit <strong>₹4,50,25,640</strong>
            </p>
          </div>

        </div>

        {/* Footer controls */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Calculations are indicative based on standard IDPS operational models.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors"
            >
              Close
            </button>

            <button
              onClick={handleApply}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold bg-[#133568] hover:bg-[#0B1D38] text-white transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Submit Intent with These Metrics</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
