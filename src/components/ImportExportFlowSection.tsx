import React from 'react';
import { 
  Globe2, 
  Ship, 
  Factory, 
  CheckCircle2, 
  Coins, 
  RefreshCw
} from 'lucide-react';

interface ImportExportFlowSectionProps {
  onOpenRfqModal: () => void;
}

export const ImportExportFlowSection: React.FC<ImportExportFlowSectionProps> = ({ onOpenRfqModal }) => {
  return (
    <section id="trade-synergy" className="py-20 bg-[#0D1216] text-slate-100 relative overflow-hidden border-t border-[#283440]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#141A20] border border-[#283440] text-emerald-300 text-xs font-mono">
            <Globe2 className="w-3.5 h-3.5 text-emerald-300" />
            <span>SOVEREIGN FOREX BALANCE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight">
            Integrated Import & Export <br />
            <span className="text-[#D0884A]">
              Trade Synergy Engine
            </span>
          </h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            By combining high-precision manufacturing with direct global agricultural commodity exports, Al-Nur Group generates sovereign hard foreign currency (FX) to fund continuous virgin copper imports—eliminating supply chain bottlenecks.
          </p>
        </div>

        {/* 3 Step Sovereign Cycle Visual Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {/* Step 1: Raw Material Import */}
          <div className="bg-[#141A20] border border-[#283440] rounded-3xl p-6 space-y-4 relative group hover:border-[#C9793A] transition-all shadow-xl">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-full bg-[#C9793A]/20 text-[#D0884A] font-mono text-xs font-bold flex items-center justify-center border border-[#C9793A]/40">
                01
              </span>
              <span className="text-[11px] font-mono text-slate-300">INPUT STREAM</span>
            </div>

            <div className="p-3 rounded-2xl bg-[#C9793A]/20 text-[#D0884A] border border-[#C9793A]/30 w-fit">
              <Ship className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white font-serif">Virgin Raw Material Import</h3>
            <p className="text-xs text-slate-200 leading-relaxed">
              Direct import contracts with global primary copper refiners and polymer chemical suppliers.
            </p>

            <ul className="space-y-2 text-xs pt-2 border-t border-[#283440]">
              <li className="flex items-center space-x-2 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D0884A] shrink-0" />
                <span><strong>ZAMEFA (Zambia):</strong> 99.9% Electrolytic Copper Rods</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D0884A] shrink-0" />
                <span><strong>DUCAB (Dubai):</strong> EC Grade Conductor Feedstock</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D0884A] shrink-0" />
                <span><strong>VNC 1401 (Vietnam):</strong> Flame-Retardant PVC Compound</span>
              </li>
            </ul>
          </div>

          {/* Step 2: Value Added Industrial Plant */}
          <div className="bg-[#141A20] border border-[#C9793A] rounded-3xl p-6 space-y-4 relative shadow-2xl ring-1 ring-[#C9793A]">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-full bg-[#C9793A] text-white font-mono text-xs font-bold flex items-center justify-center">
                02
              </span>
              <span className="text-[11px] font-mono text-[#D0884A] font-bold">SOVEREIGN CORE</span>
            </div>

            <div className="p-3 rounded-2xl bg-[#C9793A] text-white w-fit">
              <Factory className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-[#D0884A] font-serif">Tatek Plant Cable Extrusion</h3>
            <p className="text-xs text-slate-200 leading-relaxed">
              35,000 m² high-speed automated extrusion facility producing ECAE #140089 certified power cables.
            </p>

            <ul className="space-y-2 text-xs pt-2 border-t border-[#283440]">
              <li className="flex items-center space-x-2 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <span><strong>SAFE® Cable Output:</strong> 1.5mm² to 300mm² Power Lines</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <span><strong>Local Utility Supply:</strong> Ethiopian Electric Utility (EEU)</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <span><strong>Import Substitution:</strong> Saves $15M+ annual FX drain</span>
              </li>
            </ul>
          </div>

          {/* Step 3: Agro Commodity Export */}
          <div className="bg-[#141A20] border border-[#283440] rounded-3xl p-6 space-y-4 relative group hover:border-emerald-500/50 transition-all shadow-xl">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold flex items-center justify-center border border-emerald-500/40">
                03
              </span>
              <span className="text-[11px] font-mono text-slate-300">HARD FX ENGINE</span>
            </div>

            <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 w-fit">
              <Coins className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white font-serif">Agricultural Export Engine</h3>
            <p className="text-xs text-slate-200 leading-relaxed">
              Aggregating and exporting Ethiopian Grade-1 cash crops to global markets in UAE, EU, and Asia.
            </p>

            <ul className="space-y-2 text-xs pt-2 border-t border-[#283440]">
              <li className="flex items-center space-x-2 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <span><strong>Washed Coffee:</strong> Yirgacheffe, Sidama, Jimma Beans</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <span><strong>Oilseeds & Sesame:</strong> Humera & Wollega Seeds</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <span><strong>Pulses & Livestock:</strong> Direct export trade channels</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Global Trade Partners Ribbon */}
        <div className="p-6 rounded-2xl bg-[#141A20] border border-[#283440] flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <RefreshCw className="w-6 h-6 text-[#D0884A]" />
            <div>
              <h4 className="text-sm font-bold text-white">Continuous Self-Sustaining Trade Loop</h4>
              <p className="text-xs text-slate-300">Generates foreign exchange reserves to maintain 100% plant operational capacity year-round.</p>
            </div>
          </div>

          <button
            onClick={onOpenRfqModal}
            className="btn-copper px-5 py-2.5 rounded-xl font-bold text-xs shadow-lg"
          >
            Inquire Coffee & Agro Commodity Export Bulk Order
          </button>
        </div>

      </div>
    </section>
  );
};
