import React, { useState } from 'react';
import { 
  Calculator, 
  FileCheck2, 
  Zap,
  Menu,
  X
} from 'lucide-react';

interface NavbarProps {
  onOpenEcaeModal: () => void;
  onOpenCalculatorModal: () => void;
  onOpenRfqModal: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCalculatorModal,
  onOpenRfqModal,
  activeTab,
  setActiveTab
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navTabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'investors', label: 'Investors' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#141A20] border-b border-[#283440] text-white shadow-xl transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleTabClick('home')} 
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D0884A] to-[#A35E26] text-white flex items-center justify-center font-black text-xl shadow-md border border-white/20 group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 fill-white text-white" />
          </div>
          <div>
            <h1 className="text-lg font-extrabold tracking-tight text-white group-hover:text-[#D0884A] transition-colors">
              AL-NUR <span className="text-[#D0884A] font-sans font-bold text-xs uppercase tracking-wider ml-1">INDUSTRIAL GROUP</span>
            </h1>
           
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden md:flex items-center space-x-1 bg-[#182028] p-1.5 rounded-xl border border-[#283440]">
          {navTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold tracking-wide transition-all ${
                activeTab === tab.id 
                  ? 'bg-[#141A20] text-[#D0884A] font-extrabold border border-[#283440] shadow-xs' 
                  : 'text-slate-300 hover:text-white hover:bg-[#283440]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-2.5">
          <button
            onClick={onOpenCalculatorModal}
            className="flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-[#182028] hover:bg-[#283440] border border-[#283440] text-slate-100 text-xs font-semibold transition-colors"
            title="Cable Voltage Drop Calculator"
          >
            <Calculator className="w-3.5 h-3.5 text-[#D0884A]" />
            <span>Cable Calculator</span>
          </button>

          <button
            onClick={onOpenRfqModal}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg btn-copper text-xs font-bold"
          >
            <FileCheck2 className="w-4 h-4 text-white" />
            <span>Request Quote</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#182028] text-slate-200 hover:text-white border border-[#283440]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141A20] border-b border-[#283440] px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <div className="grid grid-cols-1 gap-1.5">
            {navTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-[#182028] text-[#D0884A] font-bold border-l-4 border-[#D0884A]' 
                    : 'text-slate-200 hover:bg-[#182028]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#283440] flex flex-col space-y-2">
            <button
              onClick={() => { onOpenCalculatorModal(); setMobileMenuOpen(false); }}
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg bg-[#182028] text-slate-200 text-xs font-semibold border border-[#283440]"
            >
              <Calculator className="w-4 h-4 text-[#D0884A]" />
              <span>Cable Voltage Drop Calculator</span>
            </button>
            <button
              onClick={() => { onOpenRfqModal(); setMobileMenuOpen(false); }}
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg btn-copper text-xs font-bold"
            >
              <FileCheck2 className="w-4 h-4 text-white" />
              <span>Request Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
