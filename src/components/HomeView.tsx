import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Globe2, 
  FileCheck2, 
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Package, 
  Sparkles, 
  Users 
} from 'lucide-react';
import { FOUNDERS_DATA, FAQ_ITEMS } from '../data/industrialData';
import { WhatWeSupportSection } from './WhatWeSupportSection';
import { HeroSection } from './HeroSection';

interface HomeViewProps {
  onOpenEcaeModal: () => void;
  onOpenCalculatorModal: () => void;
  onOpenRfqModal: () => void;
  onSelectTab: (tab: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onOpenEcaeModal,
  onOpenCalculatorModal,
  onOpenRfqModal,
  onSelectTab
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="space-y-16 pb-16 bg-[#0D1216]">
      
      {/* High Contrast Charcoal & Amber Hero Section with Animated Sliding Background Pictures */}
      <HeroSection
        onOpenEcaeModal={onOpenEcaeModal}
        onOpenCalculatorModal={onOpenCalculatorModal}
        onOpenRfqModal={onOpenRfqModal}
        onSelectTab={onSelectTab}
      />

      {/* MEET THE 4 FOUNDERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#D0884A] font-black text-xs uppercase tracking-widest bg-[#141A20] border border-[#283440] px-4 py-1.5 rounded-full shadow-xs">
            LEADERSHIP & VISION
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-serif mt-4">
            Meet Our 4 Founding Directors
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            In 2006, four pioneering Ethiopian entrepreneurs joined expertise in metallurgy, global trade, electrical engineering, and corporate strategy to establish Al-Nur Industrial Group PLC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FOUNDERS_DATA.map((founder, idx) => (
            <div 
              key={idx} 
              className="clean-card p-8 rounded-2xl flex flex-col justify-between hover:border-[#D0884A] transition-all space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#0D1216] text-[#D0884A] font-serif font-black text-xl flex items-center justify-center border border-[#283440] shrink-0 shadow-md">
                      {founder.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-serif leading-snug">
                        {founder.name}
                      </h3>
                      <p className="text-xs font-bold text-[#D0884A]">
                        {founder.role}
                      </p>
                      <span className="text-[11px] font-mono text-slate-400">
                        {founder.experience}
                      </span>
                    </div>
                  </div>

                  <Users className="w-5 h-5 text-[#D0884A]" />
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {founder.bio}
                </p>

                {founder.quote && (
                  <div className="bg-[#182028] text-slate-200 p-4 rounded-xl border-l-4 border-[#D0884A] italic text-xs">
                    "{founder.quote}"
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-[#283440] flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span className="font-semibold text-white">Al-Nur Founding Director</span>
                <span className="text-[#D0884A] font-bold">Tatek Plant Leadership</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive 4 Divisions Showcase ("What We Support" / "What Al-Nur Offers") */}
      <WhatWeSupportSection 
        onSelectTab={onSelectTab} 
        onOpenRfqModal={onOpenRfqModal} 
      />

      {/* Cable Tool Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141A20] text-white p-8 sm:p-10 rounded-3xl border border-[#283440] shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[#D0884A] font-mono text-xs font-black bg-[#182028] px-3 py-1 rounded-full border border-[#283440] inline-block">
              ENGINEERING UTILITY
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
              Cable Cross-Section & Voltage Drop Calculator
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Calculate exact copper cross-section requirements (mm²), ampacity ratings, voltage drop percentages, and compliance against Ethiopian Standard CES 111:2013 before placing bulk procurement orders.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenCalculatorModal}
              className="btn-copper px-6 py-3.5 rounded-xl font-bold text-xs tracking-wide flex items-center justify-center space-x-2 shadow-lg"
            >
              <Calculator className="w-4 h-4 text-white" />
              <span>Launch Calculator</span>
            </button>
            <button
              onClick={onOpenEcaeModal}
              className="bg-[#182028] hover:bg-[#283440] text-[#D0884A] border border-[#283440] px-6 py-3.5 rounded-xl font-semibold text-xs transition-all flex items-center justify-center space-x-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#D0884A]" />
              <span>Verify ECAE License</span>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-[#D0884A] font-black text-xs uppercase tracking-widest bg-[#141A20] border border-[#283440] px-4 py-1.5 rounded-full shadow-xs">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-serif mt-4">
            Standards, Licensing & Procurement
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="clean-card rounded-2xl overflow-hidden transition-all border border-[#283440] bg-[#141A20]"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between font-bold text-white text-sm sm:text-base hover:text-[#D0884A] transition-colors"
                >
                  <span className="pr-4">{item.q}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-[#D0884A] shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed border-t border-[#283440] pt-3 bg-[#182028]/60">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
