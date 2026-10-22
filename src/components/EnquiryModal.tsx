import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  User 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { FRANCHISE_MODELS, BRANCHES } from '../data/schoolData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: 'franchise' | 'admission';
  prefillNote?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultType = 'franchise',
  prefillNote = '',
}) => {
  if (!isOpen) return null;

  const [type, setType] = useState<'franchise' | 'admission'>(defaultType);
  const [submitted, setSubmitted] = useState(false);
  const [docketNumber, setDocketNumber] = useState('');

  // Form fields
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [franchiseModel, setFranchiseModel] = useState('4. IDPS K-12 (Exclusive 10+2 School)');
  const [landArea, setLandArea] = useState('2 Acres');
  const [investmentBudget, setInvestmentBudget] = useState('₹50 Lakhs – ₹1.5 Cr');
  const [childName, setChildName] = useState('');
  const [grade, setGrade] = useState('Class I');
  const [preferredCampus, setPreferredCampus] = useState(BRANCHES[0].name);
  const [message, setMessage] = useState(prefillNote);

  useEffect(() => {
    if (prefillNote) {
      setMessage(prefillNote);
    }
  }, [prefillNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `IDPS-${Math.floor(100000 + Math.random() * 900000)}`;
    setDocketNumber(ref);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore if confetti fails
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#0B1D38] via-[#133568] to-[#1E40AF] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              {type === 'franchise' ? <Building2 className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif">
                {type === 'franchise' ? 'Franchise Partnership Expression of Interest' : 'Student Admission Enquiry (2026–27)'}
              </h3>
              <p className="text-xs text-amber-300">
                The International Delhi Public School Society, New Delhi
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Toggle */}
        {!submitted && (
          <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-2">
            <button
              onClick={() => setType('franchise')}
              className={`pb-3 px-4 text-xs font-bold transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
                type === 'franchise'
                  ? 'border-amber-500 text-[#133568]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Franchise Application</span>
            </button>

            <button
              onClick={() => setType('admission')}
              className={`pb-3 px-4 text-xs font-bold transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
                type === 'admission'
                  ? 'border-blue-600 text-blue-950'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
              <span>Student Admission Enquiry</span>
            </button>
          </div>
        )}

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-2xl font-serif font-bold text-[#0B1D38]">
                Enquiry Docket Registered!
              </h4>

              <div className="inline-block px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 font-mono text-sm font-bold text-slate-800">
                Docket No: {docketNumber}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{fullName}</strong>. Our Central Franchise Directorate / Admissions Desk has received your application. A dedicated senior officer will review your location details and contact you within 24 to 48 hours.
              </p>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 text-left max-w-md mx-auto space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-700" />
                  <span>Immediate Assistance Helplines:</span>
                </div>
                <div>+91 7004222833 / +91 9631910016</div>
                <div className="text-slate-500 text-[11px]">Desk Email: info@idpssociety.com</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#133568] text-white hover:bg-[#0B1D38] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-700"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rajesh@example.com"
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-700"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Target City / Town *
                  </label>
                  <input
                    required
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Lucknow, Varanasi, Agra"
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-700"
                  />
                </div>
              </div>

              {type === 'franchise' ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                        Franchise Model Format
                      </label>
                      <select
                        value={franchiseModel}
                        onChange={(e) => setFranchiseModel(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-700"
                      >
                        {FRANCHISE_MODELS.map(m => (
                          <option key={m.id} value={m.name}>{m.name} ({m.area})</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                        Land / Built-up Available
                      </label>
                      <select
                        value={landArea}
                        onChange={(e) => setLandArea(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-700"
                      >
                        <option value="3,000 - 5,000 Sq. Ft.">3,000 – 5,000 Sq. Ft. (Pre-School)</option>
                        <option value="5,000 - 10,000 Sq. Ft.">5,000 – 10,000 Sq. Ft. (Primary)</option>
                        <option value="1 - 2 Acres">1 – 2 Acres (Middle School)</option>
                        <option value="2 Acres (Standard)">2 Acres (Standard K-12)</option>
                        <option value="3 - 5 Acres">3 – 5 Acres (Premium / Excellence)</option>
                        <option value="Land in acquisition">Land in acquisition process</option>
                      </select>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                        Child's Name
                      </label>
                      <input
                        type="text"
                        value={childName}
                        onChange={(e) => setChildName(e.target.value)}
                        placeholder="e.g. Aarav Sharma"
                        className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-700"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                        Grade Applying For
                      </label>
                      <select
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-700"
                      >
                        <option value="Play Group / Nursery">Play Group / Nursery</option>
                        <option value="Kindergarten (LKG / UKG)">Kindergarten (LKG / UKG)</option>
                        <option value="Class I to V (Primary)">Class I to V (Primary)</option>
                        <option value="Class VI to VIII (Middle)">Class VI to VIII (Middle)</option>
                        <option value="Class IX & X (Secondary)">Class IX & X (Secondary)</option>
                        <option value="Class XI & XII (Senior Secondary)">Class XI & XII (Senior Secondary)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                      Preferred Campus
                    </label>
                    <select
                      value={preferredCampus}
                      onChange={(e) => setPreferredCampus(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-700"
                    >
                      {BRANCHES.map(b => (
                        <option key={b.name} value={b.name}>{b.name} ({b.city}, {b.state})</option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                  Additional Notes / Specific Questions
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details regarding your campus site, vision, or admission requirements..."
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-700"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs bg-[#133568] hover:bg-[#0B1D38] text-white shadow-lg shadow-blue-900/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Official Enquiry</span>
                </button>
              </div>

              <div className="text-center text-[10px] text-slate-400">
                Your credentials are kept strictly confidential by The International Delhi Public School Society.
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
