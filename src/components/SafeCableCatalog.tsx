import React, { useState } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Layers, 
  ChevronRight, 
  Info, 
  Sliders,
  Cpu
} from 'lucide-react';
import { CABLE_PRODUCTS } from '../data/industrialData';
import { CableProduct } from '../types';

interface SafeCableCatalogProps {
  onOpenEcaeModal: () => void;
  onOpenCalculatorModal: () => void;
  onOpenRfqModal: () => void;
}

export const SafeCableCatalog: React.FC<SafeCableCatalogProps> = ({
  onOpenEcaeModal,
  onOpenCalculatorModal,
  onOpenRfqModal
}) => {
  const [selectedProduct, setSelectedProduct] = useState<CableProduct>(CABLE_PRODUCTS[0]);

  return (
    <section id="safe-cables" className="py-20 bg-[#0D1216] text-slate-100 relative overflow-hidden border-t border-[#283440]">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#182028_1px,transparent_1px),linear-gradient(to_bottom,#182028_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#182028] border border-[#283440] text-[#D0884A] text-xs font-mono">
              <Zap className="w-3.5 h-3.5 text-[#C9793A]" />
              <span>TIER-1 COPPER EXTRUSION PLANT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight leading-tight">
              SAFE® Electric Wire & <br />
              <span className="text-[#D0884A]">
                Power Transmission Cables
              </span>
            </h2>
            <p className="text-sm text-slate-200">
              Manufactured using 99.98% virgin copper rod feedstocks imported from <strong>ZAMEFA (Zambia)</strong> and <strong>DUCAB (UAE)</strong>. Standardized under ECAE License #140089 and ES IEC 60227/60502 specifications.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenEcaeModal}
              className="px-4 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center space-x-2 hover:bg-emerald-900/80 transition-all shadow-lg"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>ECAE Lic. 140089 Specs</span>
            </button>
            <button
              onClick={onOpenCalculatorModal}
              className="px-4 py-2.5 rounded-xl bg-[#182028] border border-[#283440] text-[#D0884A] text-xs font-semibold flex items-center space-x-2 hover:border-[#C9793A] transition-all"
            >
              <Sliders className="w-4 h-4 text-[#D0884A]" />
              <span>Voltage Drop Calculator</span>
            </button>
          </div>
        </div>

        {/* Product Selection Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {CABLE_PRODUCTS.map((cable) => {
            const isSelected = cable.id === selectedProduct.id;
            return (
              <div
                key={cable.id}
                onClick={() => setSelectedProduct(cable)}
                className={`p-5 rounded-2xl cursor-pointer transition-all border relative overflow-hidden flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-[#182028] border-[#C9793A] shadow-xl ring-1 ring-[#C9793A]' 
                    : 'bg-[#141A20]/80 hover:bg-[#182028]/60 border-[#283440]'
                }`}
              >
                {cable.featured && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono bg-[#C9793A]/20 text-[#D0884A] border border-[#C9793A]/40 font-bold">
                    POPULAR
                  </span>
                )}
                
                <div className="space-y-3">
                  <div className="p-2.5 rounded-xl w-fit bg-[#141A20] text-[#D0884A] border border-[#283440]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-base font-bold ${isSelected ? 'text-[#D0884A]' : 'text-white'}`}>
                      {cable.name.split(' (')[0]}
                    </h3>
                    <p className="text-xs text-slate-300 font-mono mt-1">{cable.voltage} • {cable.standard.split(' / ')[0]}</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#283440] flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-[#D0884A]' : 'text-slate-400'}>
                    {isSelected ? 'Viewing Specs' : 'Select Product'}
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-[#D0884A]' : 'text-slate-500'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Product Specs Sheet */}
        <div className="bg-[#141A20] border border-[#283440] rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl">
          
          {/* Header of selected cable */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#283440]">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                ECAE TESTED 99.98% VIRGIN COPPER
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                {selectedProduct.name}
              </h3>
              <p className="text-xs font-mono text-slate-300">
                Governing Standard: <strong className="text-[#D0884A]">{selectedProduct.standard}</strong>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenRfqModal}
                className="btn-copper px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg"
              >
                Request Reeled Batch Price Quote
              </button>
            </div>
          </div>

          {/* Key Electrical Parameters Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#182028] p-4 rounded-xl border border-[#283440] space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Conductor Composition</span>
              <p className="text-xs text-slate-200 font-semibold leading-relaxed">{selectedProduct.conductor}</p>
            </div>

            <div className="bg-[#182028] p-4 rounded-xl border border-[#283440] space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Insulation & Sheath</span>
              <p className="text-xs text-slate-200 font-semibold leading-relaxed">{selectedProduct.insulation}</p>
            </div>

            <div className="bg-[#182028] p-4 rounded-xl border border-[#283440] space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Primary Application</span>
              <p className="text-xs text-slate-200 font-semibold leading-relaxed">{selectedProduct.application}</p>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white font-serif flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-[#D0884A]" />
                <span>Dimensional & Electrical Parameters Table</span>
              </h4>
              <span className="text-xs text-slate-300 font-mono">Tested at 20°C DC Resistance Standard</span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#283440] bg-[#182028]">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#141A20] text-[#D0884A] font-mono text-[11px] border-b border-[#283440]">
                  <tr>
                    <th className="p-3.5">Product Type</th>
                    <th className="p-3.5">Cross Section</th>
                    <th className="p-3.5">Approx. Outer Dia.</th>
                    <th className="p-3.5">Net Weight</th>
                    <th className="p-3.5">Max DC Resistance</th>
                    <th className="p-3.5">Current Capacity (In Air)</th>
                    {selectedProduct.specsTable[0]?.currentCapacityInGround && (
                      <th className="p-3.5">Ground Capacity</th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#283440] font-sans">
                  {selectedProduct.specsTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#202A34] transition-colors">
                      <td className="p-3.5 font-bold text-[#D0884A] font-mono">{row.productType}</td>
                      <td className="p-3.5 font-mono text-white">{row.nominalCrossSection}</td>
                      <td className="p-3.5 font-mono text-slate-300">{row.overallDiameter}</td>
                      <td className="p-3.5 font-mono text-slate-300">{row.netWeight}</td>
                      <td className="p-3.5 font-mono text-emerald-300 font-semibold">{row.dcResistance}</td>
                      <td className="p-3.5 font-mono text-[#D0884A] font-bold">{row.currentCapacityInAir}</td>
                      {row.currentCapacityInGround && (
                        <td className="p-3.5 font-mono text-sky-300 font-semibold">{row.currentCapacityInGround}</td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Engineering Quality Note */}
          <div className="p-4 rounded-xl bg-[#182028] border border-[#C9793A]/40 flex items-start space-x-3 text-xs text-slate-200">
            <Info className="w-5 h-5 text-[#D0884A] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#D0884A]">Continuous Extrusion Laser Gauge Inspection:</strong> Every roll and drum of SAFE® Cable passes through digital laser outer-diameter scanners and 3.5kV high-voltage spark testing units prior to packaging.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
