import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Zap, 
  Phone, 
  Mail, 
  MapPin, 
  Calculator
} from 'lucide-react';

interface FooterProps {
  onOpenEcaeModal: () => void;
  onOpenCalculatorModal: () => void;
  onOpenRfqModal: () => void;
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenEcaeModal,
  onOpenCalculatorModal,
  onSelectTab
}) => {
  return (
    <footer className="bg-[#141A20] text-slate-200 border-t border-[#283440] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#C9793A] text-white flex items-center justify-center font-black shadow-sm">
                <Zap className="w-6 h-6 fill-white text-white" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white font-serif">
                  AL-NUR <span className="text-[#D0884A] font-sans text-xs font-bold">INDUSTRIAL GROUP PLC</span>
                </h3>
                <p className="text-[11px] font-mono text-slate-400">አልኑር ኢምፖርት ኤክስፖርት ኢንዱስትሪያል ግሩፕ</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              Ethiopia's pioneer sovereign industrial group manufacturing 99.9% pure copper SAFE® cables and distributing German LIPER LED luminaires, powered by an integrated agro-commodity export engine.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenEcaeModal}
                className="px-3 py-1.5 rounded-lg bg-[#C9793A] text-white text-xs font-mono font-black flex items-center space-x-1.5 hover:bg-[#D0884A] transition-colors shadow-sm"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-white" />
                <span>ECAE LIC. 140089</span>
              </button>

              <button
                onClick={onOpenCalculatorModal}
                className="px-3 py-1.5 rounded-lg bg-[#182028] border border-[#283440] text-slate-200 text-xs font-mono font-bold flex items-center space-x-1.5 hover:border-[#D0884A] transition-colors"
              >
                <Calculator className="w-3.5 h-3.5 text-[#D0884A]" />
                <span>CABLE CALCULATOR</span>
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white font-serif border-b border-[#283440] pb-2">
              Website Navigation
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <button onClick={() => onSelectTab('home')} className="hover:text-[#D0884A] transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('about')} className="hover:text-[#D0884A] transition-colors">
                  About Us (Company Profile & History)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('products')} className="hover:text-[#D0884A] transition-colors">
                  SAFE® Cables & LIPER LED Products
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('services')} className="hover:text-[#D0884A] transition-colors">
                  Custom Cable Extrusion & Wire Drawing
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('gallery')} className="hover:text-[#D0884A] transition-colors">
                  Tatek Plant Facility Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('investors')} className="hover:text-[#D0884A] transition-colors">
                  Investor Portal & ECAE Compliance
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('contact')} className="hover:text-[#D0884A] transition-colors">
                  Contact & Submit RFQ
                </button>
              </li>
            </ul>
          </div>

          {/* Plant Locations */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white font-serif border-b border-[#283440] pb-2">
              Headquarters & Facility
            </h4>

            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#D0884A] shrink-0 mt-0.5" />
                <span><strong>Plant:</strong> Tatek Industrial Complex, Sheger City / Oromia (35,000 m²)</span>
              </div>
              <div className="flex items-start space-x-2">
                <Building2 className="w-4 h-4 text-[#D0884A] shrink-0 mt-0.5" />
                <span><strong>Sales:</strong> Somale Tera Market Center, Ground Floor No. 3, Addis Ababa</span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-[#D0884A] shrink-0 mt-0.5" />
                <span>+251 11 369 8844 / +251 93 03 4330</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-[#D0884A] shrink-0 mt-0.5" />
                <span>alnurimportexport@gmail.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-[#283440] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 font-mono">
          <div>
            © 2006–{new Date().getFullYear()} AL-NUR IMPORT AND EXPORT INDUSTRIAL GROUP PLC.
          </div>
        </div>

      </div>
    </footer>
  );
};
