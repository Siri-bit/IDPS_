import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  FileText, 
  Rocket, 
  Check, 
  ChevronRight 
} from 'lucide-react';
import { IMPLEMENTATION_ROADMAP, ImplementationStep } from '../data/schoolData';
import { useTheme } from '../context/ThemeContext';

interface RoadmapSectionProps {
  onOpenEnquiry: (type: 'franchise' | 'admission') => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onOpenEnquiry }) => {
  const { themeConfig } = useTheme();
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = IMPLEMENTATION_ROADMAP[activeStepIndex];

  return (
    <section id="roadmap" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Clock className="w-3.5 h-3.5 text-blue-700" />
            <span>Turnkey Project Implementation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-slate-900 tracking-tight">
            Proposed 90-Day Franchise{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#133568] via-[#1D4ED8] to-amber-700 italic">
              Implementation Journey
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-base md:text-lg">
            A systematic, step-by-step sequential roadmap from initial application registration to the grand official campus opening.
          </p>
        </div>

        {/* Desktop Interactive Stepper Bar */}
        <div className="hidden lg:grid grid-cols-9 gap-2 mb-10">
          {IMPLEMENTATION_ROADMAP.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            const isCompleted = idx < activeStepIndex;
            return (
              <button
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 rounded-xl text-left border transition-all cursor-pointer relative ${
                  isActive
                    ? 'bg-[#133568] text-white border-[#133568] shadow-md -translate-y-1'
                    : isCompleted
                    ? 'bg-blue-50 text-blue-950 border-blue-200 hover:bg-blue-100/60'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="text-[10px] font-bold uppercase tracking-wider opacity-75">
                  {step.dayRange}
                </div>
                <div className="text-xs font-extrabold line-clamp-1 mt-0.5">
                  {step.title.split(' ')[0]} {step.title.split(' ')[1] || ''}
                </div>
                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#133568] rotate-45"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Milestone Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-400 text-slate-950">
                  {activeStep.dayRange}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                  {activeStep.phase}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#133568]">
                {activeStep.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {activeStep.description}
              </p>

              {/* Action items checklist */}
              <div className="pt-2 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Phase Deliverables & Alignments:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStep.tasks.map((task, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800 font-medium">
                      <Check className="w-4 h-4 text-blue-700 shrink-0" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="pt-4 flex items-center gap-3">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 transition-colors"
                >
                  Previous Phase
                </button>

                <button
                  disabled={activeStepIndex === IMPLEMENTATION_ROADMAP.length - 1}
                  onClick={() => setActiveStepIndex(Math.min(IMPLEMENTATION_ROADMAP.length - 1, activeStepIndex + 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#133568] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#0B1D38] transition-colors flex items-center gap-1.5"
                >
                  <span>Next Phase</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <span className="text-xs text-slate-400 ml-auto">
                  Step {activeStepIndex + 1} of {IMPLEMENTATION_ROADMAP.length}
                </span>
              </div>
            </div>

            {/* Right Column: Visual Milestone badge */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#0B1D38] via-[#133568] to-[#1E3A8A] p-8 rounded-2xl text-white text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center mx-auto font-extrabold text-2xl shadow-lg shadow-amber-400/20">
                <Rocket className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-semibold text-amber-300 uppercase tracking-widest block">
                  Campus Launch Velocity
                </span>
                <div className="text-2xl font-serif font-bold text-white mt-1">
                  Ready in 90 Days
                </div>
                <p className="text-xs text-slate-200 mt-2">
                  Parallel architectural execution, central teacher onboarding, and hyper-local admission campaigns guarantee timely opening.
                </p>
              </div>

              <button
                onClick={() => onOpenEnquiry('franchise')}
                className="w-full py-2.5 text-xs font-bold bg-white text-slate-900 rounded-xl hover:bg-amber-300 transition-colors"
              >
                Initiate Step 1 Registration
              </button>
            </div>

          </div>
        </div>

        {/* Our Ultimate Commitment (PDF 1 Page 12-13) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0B1D38] via-[#133568] to-[#1E40AF] text-white shadow-xl border border-blue-800/80">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="text-amber-400 text-xs font-bold uppercase tracking-widest">
              OUR ULTIMATE COMMITMENT
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              "At IDPS, we are committed to building a future-ready educational system that empowers students with knowledge, core traditional values, absolute confidence, and global leadership qualities."
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              We cordially invite passionate educators, visionary investors, and proactive entrepreneurs to become a core part of the growing IDPS national family and redefine quality schooling dimensions across the territory.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry('franchise')}
                className="px-8 py-3.5 rounded-xl font-bold text-xs bg-amber-400 hover:bg-amber-300 text-slate-950 transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Begin Your Franchise Journey Today</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
