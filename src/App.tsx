import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChairmanSection } from './components/ChairmanSection';
import { AboutSection } from './components/AboutSection';
import { FranchiseSection } from './components/FranchiseSection';
import { SupportServicesSection } from './components/SupportServicesSection';
import { RoadmapSection } from './components/RoadmapSection';
import { NetworkMapSection } from './components/NetworkMapSection';
import { InfrastructureSection } from './components/InfrastructureSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { BrochureModal } from './components/BrochureModal';
import { RoiCalculator } from './components/RoiCalculator';
import { 
  Sparkles, 
  Download, 
  PhoneCall, 
  FileText, 
  Calculator,
  MessageCircle
} from 'lucide-react';

function AppContent() {
  const { themeConfig } = useTheme();

  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryType, setEnquiryType] = useState<'franchise' | 'admission'>('franchise');
  const [enquiryPrefill, setEnquiryPrefill] = useState('');

  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [brochureDoc, setBrochureDoc] = useState<'proposal' | 'services'>('proposal');

  const [roiCalculatorOpen, setRoiCalculatorOpen] = useState(false);

  const handleOpenEnquiry = (type: 'franchise' | 'admission', prefillNote: string = '') => {
    setEnquiryType(type);
    setEnquiryPrefill(prefillNote);
    setEnquiryModalOpen(true);
  };

  const handleOpenBrochure = (brochureId?: string) => {
    if (brochureId === 'support-services' || brochureId === 'services') {
      setBrochureDoc('services');
    } else {
      setBrochureDoc('proposal');
    }
    setBrochureModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans flex flex-col selection:bg-amber-100 selection:text-amber-950">
      
      {/* Navbar with utility bar, logos, dropdowns, and theme switcher */}
      <Navbar
        onOpenEnquiry={handleOpenEnquiry}
        onOpenBrochure={handleOpenBrochure}
      />

      {/* Main Page Layout */}
      <main className="flex-1">
        
        {/* 1. Hero with Jaipuria-inspired aesthetics, pan-india stats */}
        <Hero
          onOpenEnquiry={handleOpenEnquiry}
          onOpenBrochure={handleOpenBrochure}
          onExploreCampuses={() => scrollToSection('network')}
        />

        {/* 2. Chairman's Corner & Leadership (Prominently displaying user photo & bio) */}
        <ChairmanSection
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* 3. About IDPS Society (Founding 2012, Dedications, Vision, Mission from PDF 1) */}
        <AboutSection />

        {/* 4. Franchise Models & Financial Projections (7 models + PDF 1 p. 10 matrix) */}
        <FranchiseSection
          onOpenEnquiry={handleOpenEnquiry}
          onOpenBrochure={handleOpenBrochure}
          onOpenCalculator={() => setRoiCalculatorOpen(true)}
        />

        {/* 5. 11 Core Support & Services (From PDF 2: In_2f58754a.pdf) */}
        <SupportServicesSection
          onOpenEnquiry={handleOpenEnquiry}
          onOpenBrochure={handleOpenBrochure}
        />

        {/* 6. Proposed 90-Day Franchise Implementation Roadmap (From PDF 1 p. 12) */}
        <RoadmapSection
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* 7. Pan-India Network Interactive Map & 35 Campuses (From digirich.co/idps.php) */}
        <NetworkMapSection
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* 8. Infrastructure & Modern STEM Labs (From PDF 1 p. 9) */}
        <InfrastructureSection />

        {/* 9. Campus Life Gallery */}
        <GallerySection />

        {/* 10. Frequently Asked Questions */}
        <FaqSection
          onOpenEnquiry={handleOpenEnquiry}
        />

      </main>

      {/* Footer with Registered Address in Pandav Nagar, New Delhi & Helplines */}
      <Footer
        onOpenEnquiry={handleOpenEnquiry}
        onOpenBrochure={handleOpenBrochure}
      />

      {/* Floating Action Quick Access Dock */}
      <aside aria-label="Quick action shortcuts" className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
        
        {/* Quick ROI Simulator Button */}
        <button
          onClick={() => setRoiCalculatorOpen(true)}
          className="px-3.5 py-2 rounded-full text-xs font-bold bg-white text-stone-900 border border-stone-200 shadow-lg hover:shadow-xl hover:bg-stone-50 transition-all flex items-center gap-2 cursor-pointer group"
          title="Simulate Franchise ROI"
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <Calculator className="w-3.5 h-3.5 text-amber-700" />
          <span className="hidden sm:inline">ROI Simulator</span>
        </button>

        {/* Quick Brochure Download Button */}
        <button
          onClick={() => handleOpenBrochure()}
          style={{ backgroundColor: themeConfig.primaryBg }}
          className="px-3.5 py-2 rounded-full text-xs font-bold text-white shadow-lg hover:shadow-xl hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer group"
          title="View & Download PDF Brochure"
        >
          <Download className="w-3.5 h-3.5 text-amber-300 group-hover:-translate-y-0.5 transition-transform" />
          <span className="hidden sm:inline">Brochure & PDF</span>
        </button>

        {/* Primary Partner With Us CTA */}
        <button
          onClick={() => handleOpenEnquiry('franchise')}
          className="px-5 py-3 rounded-full text-xs font-extrabold bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 shadow-xl hover:shadow-amber-400/40 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-stone-950" />
          <span>Partner With Us</span>
        </button>

      </aside>

      {/* Modals */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        defaultType={enquiryType}
        prefillNote={enquiryPrefill}
      />

      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
        defaultDoc={brochureDoc}
      />

      <RoiCalculator
        isOpen={roiCalculatorOpen}
        onClose={() => setRoiCalculatorOpen(false)}
        onOpenEnquiry={handleOpenEnquiry}
      />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
