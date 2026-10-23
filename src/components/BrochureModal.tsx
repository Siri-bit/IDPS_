import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  X, 
  ExternalLink, 
  CheckCircle, 
  Eye, 
  Building2, 
  Sparkles,
  BookOpen,
  Printer,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  Layers,
  HelpCircle,
  FileCheck
} from 'lucide-react';
import { generateBrochurePdf } from '../utils/pdfGenerator';
import { 
  FRANCHISE_MODELS, 
  FINANCIAL_METRICS, 
  SUPPORT_SERVICES, 
  IMPLEMENTATION_ROADMAP,
  CHAIRMAN_PROFILE 
} from '../data/schoolData';
import { useTheme } from '../context/ThemeContext';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDoc?: 'proposal' | 'services';
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  defaultDoc = 'proposal',
}) => {
  const { themeConfig } = useTheme();
  const [activeDoc, setActiveDoc] = useState<'proposal' | 'services'>(defaultDoc);
  const [activePage, setActivePage] = useState<number>(1);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      setActiveDoc(defaultDoc);
    }
  }, [isOpen, defaultDoc]);

  const proposalPdfPath = "./assets/aistudio/IDPS_Franchise_Brochure_With_Logo__1__75c24130.pdf";
  const servicesPdfPath = "./assets/aistudio/In_2f58754a.pdf";

  if (!isOpen) return null;

  // Handle reliable PDF download using jsPDF (guaranteed to display properly on all devices)
  const handleDownloadGeneratedPdf = () => {
    try {
      setIsGenerating(true);
      const doc = generateBrochurePdf();
      doc.save('IDPS_Official_Franchise_Brochure.pdf');
      setDownloadSuccess('Official Franchise Brochure downloaded successfully! All 7 sections are clearly visible.');
      setTimeout(() => setDownloadSuccess(null), 6000);
    } catch (err) {
      console.error('PDF generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  // Handle raw PDF blob download
  const handleDownloadRaw = async (url: string, filename: string) => {
    try {
      setIsGenerating(true);
      const res = await fetch(url);
      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
      setDownloadSuccess(`Downloaded ${filename} successfully!`);
      setTimeout(() => setDownloadSuccess(null), 6000);
    } catch {
      window.open(url, '_blank');
    } finally {
      setIsGenerating(false);
    }
  };

  // Print current on-screen document
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className={`p-5 sm:p-6 bg-gradient-to-r ${themeConfig.headerGradient} text-white flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center font-bold shadow-md">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-serif tracking-tight">
                Official Society Documentation & Interactive Brochure
              </h3>
              <p className="text-xs text-amber-200">
                The International Delhi Public School Society, New Delhi • Complete Authentic Proposal
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab & Action Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-stone-200 bg-stone-50 px-4 sm:px-6 pt-2.5 gap-2">
          
          <div className="flex gap-2">
            <button
              onClick={() => { setActiveDoc('proposal'); setActivePage(1); }}
              className={`pb-2.5 px-3 sm:px-4 text-xs font-bold transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
                activeDoc === 'proposal'
                  ? 'border-amber-500 text-stone-900'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Franchise Brochure (14 Pages)</span>
            </button>

            <button
              onClick={() => { setActiveDoc('services'); setActivePage(1); }}
              className={`pb-2.5 px-3 sm:px-4 text-xs font-bold transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
                activeDoc === 'services'
                  ? 'border-amber-500 text-stone-900'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>11 Core Support Services</span>
            </button>
          </div>

          {/* Quick Action Download Buttons in Header */}
          <div className="flex items-center gap-2 pb-2">
            <button
              onClick={handleDownloadGeneratedPdf}
              disabled={isGenerating}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-400 hover:bg-amber-300 text-stone-950 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Download guaranteed readable vector PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isGenerating ? 'Generating...' : 'Download Formatted PDF'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white border border-stone-300 text-stone-700 hover:bg-stone-100 transition-colors flex items-center gap-1 cursor-pointer"
              title="Print document or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-stone-600" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
          </div>

        </div>

        {/* Success Alert */}
        {downloadSuccess && (
          <div className="bg-emerald-50 border-b border-emerald-200 px-6 py-2.5 text-xs text-emerald-900 font-semibold flex items-center gap-2 animate-in fade-in">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{downloadSuccess}</span>
          </div>
        )}

        {/* Content Body: Live Interactive Reader */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 bg-stone-100/60">
          
          {activeDoc === 'proposal' ? (
            <div className="space-y-6">
              
              {/* Download Option Banner */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <img 
                    src="./assets/idps-logo.jpg" 
                    alt="IDPS Logo" 
                    className="w-12 h-12 rounded-full object-contain p-0.5 border border-amber-400 bg-white"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">
                      IDPS Business Proposal & Franchise Brochure
                    </h4>
                    <p className="text-xs text-stone-500">
                      Choose your preferred download format below:
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                  {/* Option A: Formatted Vector PDF */}
                  <button
                    onClick={handleDownloadGeneratedPdf}
                    className="flex-1 md:flex-initial px-4 py-2 rounded-xl text-xs font-bold bg-[#133568] hover:bg-[#0B1D38] text-white shadow-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-300" />
                    <span>Download Formatted PDF</span>
                  </button>

                  {/* Option B: Raw Attached PDF */}
                  <button
                    onClick={() => handleDownloadRaw(proposalPdfPath, 'IDPS_Franchise_Brochure_Original.pdf')}
                    className="flex-1 md:flex-initial px-3.5 py-2 rounded-xl text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-stone-600" />
                    <span>Download Original Scan</span>
                  </button>
                </div>
              </div>

              {/* In-Modal Multi-Page Reader */}
              <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
                
                {/* Page Navigation Bar */}
                <div className="p-3 bg-stone-50 border-b border-stone-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-stone-800">Live Interactive Reader:</span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-950 font-bold">
                      Page {activePage} of 14
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      disabled={activePage <= 1}
                      onClick={() => setActivePage(p => Math.max(1, p - 1))}
                      className="p-1.5 rounded-lg border border-stone-200 text-stone-700 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      disabled={activePage >= 14}
                      onClick={() => setActivePage(p => Math.min(14, p + 1))}
                      className="p-1.5 rounded-lg border border-stone-200 text-stone-700 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Page Content Rendered Crystal-Clear */}
                <div className="p-6 sm:p-8 min-h-[380px]">
                  
                  {/* Page 1 */}
                  {activePage === 1 && (
                    <div className="text-center py-6 space-y-4">
                      <div className="text-xs uppercase tracking-widest font-bold text-[#133568]">
                        THE INTERNATIONAL DELHI PUBLIC SCHOOL SOCIETY, NEW DELHI
                      </div>
                      <div className="w-24 h-24 mx-auto rounded-full bg-stone-50 border-2 border-amber-400 p-2 shadow-md">
                        <img src="./assets/idps-logo.jpg" alt="Logo" className="w-full h-full object-contain" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B1D38]">
                        BUSINESS PROPOSAL & FRANCHISE BROCHURE
                      </h3>
                      <p className="text-sm font-semibold text-amber-700">
                        Empowering Education • Inspiring Excellence • Building Futures
                      </p>
                      <div className="inline-block px-4 py-1.5 rounded-full bg-stone-100 text-xs font-bold text-stone-700 border border-stone-200">
                        FOUNDED ON 22ND FEBRUARY 2012
                      </div>
                    </div>
                  )}

                  {/* Page 2 */}
                  {activePage === 2 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-serif font-bold text-[#133568]">
                        ABOUT INTERNATIONAL DELHI PUBLIC SCHOOL SOCIETY
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        The International Delhi Public School Society, founded on <strong>22nd February 2012</strong>, is a not-for-profit non-governmental organization managed by a committed group of educational visionaries from different parts of India.
                      </p>
                      <div className="p-3.5 rounded-xl bg-amber-50/70 border-l-4 border-amber-500 text-xs sm:text-sm text-stone-800 italic">
                        "At IDPS, we believe that children are the future of every society and that every child deserves equal access to quality education, knowledge, and opportunities."
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-2">
                        <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                          <strong>• Quality Education:</strong> High standards of academic content delivery.
                        </div>
                        <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                          <strong>• Syllabus-Oriented Learning:</strong> Structured board-aligned approaches.
                        </div>
                        <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                          <strong>• Co-Curricular & Sports:</strong> Broad arts, visual, and cultural integration.
                        </div>
                        <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                          <strong>• Personality Development:</strong> Nurturing character, confidence, and posture.
                        </div>
                        <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                          <strong>• Value-Based Education:</strong> Rooting global perspectives inside ethics.
                        </div>
                        <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                          <strong>• Leadership & Life Skills:</strong> Building independent logic and reasoning.
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Page 3 */}
                  {activePage === 3 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-serif font-bold text-[#133568]">
                        MISSION & VISION
                      </h4>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs italic text-stone-800">
                        "IDPS is a dynamic educational community created by the interaction of committed faculty members and enthusiastic parents. Education is not merely preparation for examinations but preparation for life itself."
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1.5">
                          <strong className="text-sm text-[#133568] block mb-2">OUR VISION:</strong>
                          <div>✔ Enjoy Learning & Explore Concepts</div>
                          <div>✔ Discover True Hidden Potential</div>
                          <div>✔ Build Core Confidence & Public Presence</div>
                          <div>✔ Develop Creativity and Abstract Logic</div>
                          <div>✔ Learn Proactive Leadership Skills</div>
                          <div>✔ Achieve Supreme Academic Excellence</div>
                        </div>
                        <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                          <strong className="text-sm text-amber-900 block mb-2">OUR MISSION:</strong>
                          <div>★ Develop high self-esteem & confidence</div>
                          <div>★ Create passionate lifelong learners</div>
                          <div>★ Cultivate deep moral and ethical values</div>
                          <div>★ Encourage cultural awareness & responsibility</div>
                          <div>★ Promote discipline and active compassion</div>
                          <div>★ Prepare students for global challenges</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Page 4 */}
                  {activePage === 4 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-serif font-bold text-[#133568]">
                        KEY STRATEGIC ADVANTAGES
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                          <strong className="text-stone-900 block text-xs mb-1">ACADEMIC EXCELLENCE</strong>
                          <p className="text-stone-600">Modern teaching methodologies, trained faculty, student-centric pedagogy, continuous system evaluation.</p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                          <strong className="text-stone-900 block text-xs mb-1">MODERN INFRASTRUCTURE</strong>
                          <p className="text-stone-600">Smart digital classrooms, science & computer labs, resourceful library, CCTV surveillance, industrial RO.</p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                          <strong className="text-stone-900 block text-xs mb-1">HOLISTIC DEVELOPMENT</strong>
                          <p className="text-stone-600">Advanced sports training, vibrant music & dance, intense personality tracks, leadership & communication.</p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                          <strong className="text-stone-900 block text-xs mb-1">STRONG SUPPORT SYSTEM</strong>
                          <p className="text-stone-600">End-to-end franchise guidance, meticulous academic planning, strategic marketing, streamlined SOP manuals.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Page 5 to 8: Franchise Models */}
                  {activePage >= 5 && activePage <= 8 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-serif font-bold text-[#133568]">
                        FRANCHISE MODELS & SETUP (PAGE {activePage} OF 14)
                      </h4>
                      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                        {FRANCHISE_MODELS.map((m, idx) => (
                          <div key={idx} className="p-3 bg-white rounded-lg border border-stone-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                              <strong className="text-stone-900 text-sm">{m.name}</strong>
                              <span className="text-stone-500 block text-[11px]">{m.tagline} • Classes: {m.classes}</span>
                            </div>
                            <div className="text-right sm:shrink-0">
                              <span className="text-[11px] text-stone-500 block">Area: {m.area}</span>
                              <strong className="text-[#133568]">{m.franchiseFee}</strong>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Page 9: Infrastructure */}
                  {activePage === 9 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-serif font-bold text-[#133568]">
                        CAMPUS INFRASTRUCTURE REQUIREMENTS & INVENTORY
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                          <strong className="text-stone-900 block">ACADEMIC CORE SETUP</strong>
                          <div>• Premium School Furniture (Ergonomic)</div>
                          <div>• Themed Wood Work & Custom Panels</div>
                          <div>• School & Concept Graphic Painting</div>
                          <div>• Advanced Educational Kits & Tools</div>
                          <div>• Dedicated Pre-Primary Theme Rooms</div>
                          <div>• Well-Stocked Resource Library Room</div>
                          <div>• State-of-the-Art Subject Laboratories</div>
                        </div>
                        <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                          <strong className="text-stone-900 block">CO-CURRICULAR & OPERATIONS</strong>
                          <div>• Creative Art & Music Practice Rooms</div>
                          <div>• Spacious Dance & Covered Sports Facilities</div>
                          <div>• Equipped Campus Medical Clinic Room</div>
                          <div>• High-Definition CCTV Security Networks</div>
                          <div>• Industrial RO Water Treatment Systems</div>
                          <div>• Air Conditioning Units (All Classrooms)</div>
                          <div>• Glow Sign Boards & Display Fixtures</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Page 10: Academic Excellence & Affiliation */}
                  {activePage === 10 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-serif font-bold text-[#133568]">
                        ACADEMIC EXCELLENCE & CBSE AFFILIATION GUIDANCE
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        The Central Society provides comprehensive academic leadership and affiliation advisory to ensure every IDPS campus achieves supreme educational benchmarks.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                          <strong className="text-stone-900 block mb-1">Affiliation Dossier Support</strong>
                          <p className="text-stone-600">End-to-end guidance through land inspection norms, fire/safety NOCs, building bylaws, and CBSE inspection panels.</p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                          <strong className="text-stone-900 block mb-1">Standardized Curriculum & Syllabus</strong>
                          <p className="text-stone-600">Standardized textbooks, daily lesson plans, assessment rubrics, and continuous educator mentoring.</p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                          <strong className="text-stone-900 block mb-1">Faculty Recruitment & Training</strong>
                          <p className="text-stone-600">Centralized recruitment panels, competency tests, and mandatory continuous professional teacher development programs.</p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                          <strong className="text-stone-900 block mb-1">Periodic Quality Audits</strong>
                          <p className="text-stone-600">Regular inspections by Central Academic Directors to evaluate teaching quality, infrastructure hygiene, and student outcomes.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Page 11: Annexure A */}
                  {activePage === 11 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-serif font-bold text-[#133568]">
                        ANNEXURE A: FEE STRUCTURE & REVENUE POOL
                      </h4>
                      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="block mb-2 text-stone-900 text-sm">Annexure A: Annual Fee Benchmark & Collections</strong>
                        <p className="text-xs text-stone-600 mb-3">
                          Standardized student annual fee pools across operational years with high franchisee retention share:
                        </p>
                        <div className="space-y-2 text-xs">
                          <div className="p-2.5 rounded-lg bg-white border border-stone-200 flex justify-between items-center">
                            <span className="font-semibold text-stone-800">• Year 1 Annual Benchmark</span>
                            <span className="font-bold text-[#133568]">₹60,000 / student (95% Share)</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white border border-stone-200 flex justify-between items-center">
                            <span className="font-semibold text-stone-800">• Year 2 Annual Benchmark</span>
                            <span className="font-bold text-[#133568]">₹66,000 / student (92% Share)</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white border border-stone-200 flex justify-between items-center">
                            <span className="font-semibold text-stone-800">• Year 3 Annual Benchmark</span>
                            <span className="font-bold text-[#133568]">₹72,600 / student (92% Share)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Page 12-14: Implementation & Head Office */}
                  {activePage >= 12 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-serif font-bold text-[#133568]">
                        90-DAY IMPLEMENTATION JOURNEY & CENTRAL HEAD OFFICE
                      </h4>
                      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                        <div className="font-bold text-stone-900">Step-by-step 90-Day Execution:</div>
                        <p className="text-stone-600">Day 1 Application → Day 7 LOI → Day 15 Agreement → Day 30 Blueprint → Day 45 Fabrication → Day 60 Recruitment → Day 75 Inventory → Day 90 Grand Official Launch.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#0B1D38] text-white text-xs space-y-1.5">
                        <strong className="text-amber-300 block text-sm">THE INTERNATIONAL DELHI PUBLIC SCHOOL SOCIETY</strong>
                        <div>Registered Office: C-240/241, 3rd Floor, Pandav Nagar, New Delhi - 110092</div>
                        <div>Helpline Numbers: +91 7004222833 / +91 9631910016</div>
                        <div>Official Email: info@idpssociety.com | www.idpssociety.com</div>
                      </div>
                    </div>
                  )}

                </div>

                {/* Page Quick Jumper Bar */}
                <div className="p-2.5 bg-stone-50 border-t border-stone-200 flex items-center justify-center gap-1.5 flex-wrap">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setActivePage(i + 1)}
                      className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        activePage === i + 1
                          ? 'bg-[#133568] text-white shadow-xs'
                          : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

              </div>

            </div>
          ) : (
            <div className="space-y-4">
              
              {/* Document 2 Header */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    International Delhi Public School — Support and Services
                  </h4>
                  <p className="text-xs text-stone-500">
                    The 11 official heads of operational and academic assistance provided centrally.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownloadGeneratedPdf}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-[#133568] hover:bg-[#0B1D38] text-white shadow-sm flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-300" />
                    <span>Download Clean PDF</span>
                  </button>
                  <button
                    onClick={() => handleDownloadRaw(servicesPdfPath, 'IDPS_Support_and_Services_Original.pdf')}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-stone-100 border border-stone-300 text-stone-800 hover:bg-stone-200 cursor-pointer"
                  >
                    Download Scan
                  </button>
                </div>
              </div>

              {/* 11 Support Services Interactive Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {SUPPORT_SERVICES.map((s) => (
                  <div key={s.id} className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <strong className="text-sm text-stone-900">{s.id}. {s.title}</strong>
                      <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-1.5 py-0.5 rounded">Central Support</span>
                    </div>
                    <div className="text-[11px] font-semibold text-[#133568]">{s.subtitle}</div>
                    <p className="text-stone-600 text-xs mt-1">{s.description}</p>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer with quick instructions */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-stone-500 text-center sm:text-left flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Formatted PDF download is guaranteed to render completely on all devices without missing fonts.</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleDownloadGeneratedPdf}
              className="w-full sm:w-auto px-5 py-2 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-stone-950 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold text-stone-700 hover:bg-stone-200 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
