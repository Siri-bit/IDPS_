import React from 'react';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Download, 
  ShieldCheck, 
  ExternalLink, 
  Heart, 
  Calendar, 
  FileText 
} from 'lucide-react';
import { BRANCHES } from '../data/schoolData';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onOpenEnquiry: (type: 'franchise' | 'admission') => void;
  onOpenBrochure: (brochureId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry, onOpenBrochure }) => {
  const { themeConfig } = useTheme();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const states = Array.from(new Set(BRANCHES.map(b => b.state))).sort();

  return (
    <footer id="contact" className="bg-[#07152B] text-stone-300 text-xs border-t border-blue-900/40">
      
      {/* Top Pre-Footer Bar */}
      <div className="bg-[#040C1A] py-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <img 
                src="./assets/idps-logo.jpg" 
                alt="IDPS Society Logo" 
                className="w-12 h-12 rounded-full object-contain bg-white p-0.5 border border-amber-400"
              />
              <div>
                <h4 className="text-sm font-bold text-white tracking-wide">
                  THE INTERNATIONAL DELHI PUBLIC SCHOOL SOCIETY
                </h4>
                <p className="text-[11px] text-amber-300 font-serif italic">
                  "Education is not preparation for life; education is life itself."
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenEnquiry('franchise')}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors cursor-pointer"
              >
                Franchise Expression of Interest
              </button>
              <button
                onClick={() => onOpenBrochure()}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-amber-300" />
                <span>Brochure Reader (PDF)</span>
              </button>
              <a
                href="./IDPS_Website_Complete.zip"
                download="IDPS_Website_Complete.zip"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-stone-950" />
                <span>Download Website ZIP</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: About & Registered Address (PDF 1 page 14) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Central Registered Office
            </h4>
            
            <div className="space-y-2.5 text-stone-300 text-xs">
              <p className="font-semibold text-stone-100">
                The International Delhi Public School Society, New Delhi
              </p>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Registered Office: C-240/241, Third Floor, Pandav Nagar, New Delhi – 110092
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Central Corporate Franchise Desk & Communications Office, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Founded on 22nd February 2012 (Not-for-profit NGO)</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                Helpline & Admissions Desk
              </div>
              <div className="flex flex-col gap-1 text-stone-200">
                <a href="tel:7004222833" className="hover:text-amber-300 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>+91 7004222833</span>
                </a>
                <a href="tel:9631910016" className="hover:text-amber-300 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>+91 9631910016</span>
                </a>
                <a href="mailto:info@idpssociety.com" className="hover:text-amber-300 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>info@idpssociety.com / franchise@idpssociety.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-amber-300 transition-colors">
                  About IDPS Society
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('chairman')} className="hover:text-amber-300 transition-colors">
                  Chairman's Message
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('network')} className="hover:text-amber-300 transition-colors">
                  Pan-India Campuses (35+)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('infrastructure')} className="hover:text-amber-300 transition-colors">
                  Modern Infrastructure
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('campus-life')} className="hover:text-amber-300 transition-colors">
                  Campus Life & Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onOpenEnquiry('admission')} className="hover:text-amber-300 transition-colors">
                  Student Admissions 2026–27
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Franchise & Partner Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Franchise Portal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('franchise-models')} className="hover:text-amber-300 transition-colors">
                  7 Franchise School Formats
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('support-services')} className="hover:text-amber-300 transition-colors">
                  11 Core Support Services (PDF 2)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('financial-model')} className="hover:text-amber-300 transition-colors">
                  Financial Projections (PDF 1 p. 10)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('roadmap')} className="hover:text-amber-300 transition-colors">
                  90-Day Implementation Journey
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBrochure('proposal')} className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <FileText className="w-3 h-3 text-amber-400" />
                  <span>Interactive Brochure & PDF</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: State Network Chapters */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Pan-India State Footprint
            </h4>
            <p className="text-[11px] text-stone-300">
              Active campuses and developing chapters across 15 Indian States:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {states.map(state => (
                <span key={state} className="px-2 py-0.5 rounded bg-white/10 border border-white/10 text-[10px] text-stone-200">
                  {state}
                </span>
              ))}
            </div>

            <div className="pt-3">
              <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold block mb-1">
                Society Motto
              </span>
              <div className="p-2.5 rounded-lg bg-black/30 border border-amber-500/30 text-[11px] text-amber-200 font-medium">
                DISCIPLINE • DEDICATION • DUTY • SELFLESS SERVICE
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10 text-stone-400 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            &copy; 2012 – {new Date().getFullYear()} The International Delhi Public School Society, New Delhi. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-stone-300 cursor-pointer">Official Portal</span>
            <span>•</span>
            <span className="hover:text-stone-300 cursor-pointer">CBSE Affiliation Framework</span>
            <span>•</span>
            <span className="hover:text-stone-300 cursor-pointer">Privacy & Governance</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
