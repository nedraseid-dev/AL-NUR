import React, { useState } from 'react';
import { 
  Sun, 
  ShieldCheck, 
  Award, 
  ChevronRight
} from 'lucide-react';
import { LIGHTING_PRODUCTS } from '../data/industrialData';
import { LightingProduct } from '../types';

interface LiperLightingSectionProps {
  onOpenRfqModal: () => void;
}

export const LiperLightingSection: React.FC<LiperLightingSectionProps> = ({ onOpenRfqModal }) => {
  const [selectedProduct, setSelectedProduct] = useState<LightingProduct>(LIGHTING_PRODUCTS[0]);

  return (
    <section id="liper-lighting" className="py-20 bg-[#0D1216] text-slate-100 relative overflow-hidden border-t border-[#283440]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#141A20] border border-[#283440] text-[#D0884A] text-xs font-mono font-bold">
              <Sun className="w-3.5 h-3.5 text-[#C9793A]" />
              <span>GERMAN LIGHTING ENGINEERING PARTNERSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight leading-tight">
              Germany LIPER® <br />
              <span className="text-[#D0884A]">
                Industrial LED & Urban Luminaires
              </span>
            </h2>
            <p className="text-sm text-slate-200">
              German engineered since 1912. Al-Nur Group provides national utility power supply, IP66 highway illumination, factory UFO high-bays, and commercial LED fixtures with aviation-grade heat dissipation.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <div className="px-4 py-2 rounded-xl bg-[#141A20] border border-[#283440] text-xs text-slate-200 flex items-center space-x-2">
              <Award className="w-4 h-4 text-[#D0884A]" />
              <span>50,000 Hours Lifespan Standard</span>
            </div>
          </div>
        </div>

        {/* Product Grid & Active Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Cards List */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
              LIPER® Industrial Product Series
            </h3>

            {LIGHTING_PRODUCTS.map((prod) => {
              const isSelected = prod.id === selectedProduct.id;
              return (
                <div
                  key={prod.id}
                  onClick={() => setSelectedProduct(prod)}
                  className={`p-5 rounded-2xl cursor-pointer border transition-all ${
                    isSelected
                      ? 'bg-[#141A20] border-[#C9793A] shadow-xl ring-1 ring-[#C9793A]'
                      : 'bg-[#0D1216]/80 hover:bg-[#141A20]/60 border-[#283440]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#C9793A]/20 text-[#D0884A] border border-[#C9793A]/40 font-bold">
                        {prod.ipRating}
                      </span>
                      <h4 className={`text-base font-bold ${isSelected ? 'text-[#D0884A]' : 'text-white'}`}>
                        {prod.model}
                      </h4>
                      <p className="text-xs text-slate-300 font-mono">{prod.power} • {prod.lumen}</p>
                    </div>

                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#C9793A] text-white' : 'bg-[#0D1216] text-slate-400'}`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Detailed Showcase Card */}
          <div className="lg:col-span-7 bg-[#141A20] border border-[#283440] rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            
            <div className="flex items-start justify-between border-b border-[#283440] pb-4">
              <div>
                <span className="text-xs font-mono text-emerald-300 font-bold uppercase tracking-wider">
                  GERMAN TECH • IP66 SPECIFICATION
                </span>
                <h3 className="text-2xl font-extrabold text-white font-serif mt-1">
                  {selectedProduct.model}
                </h3>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#C9793A] text-white font-bold">
                {selectedProduct.power}
              </span>
            </div>

            <p className="text-xs text-slate-200 leading-relaxed bg-[#0D1216] p-4 rounded-xl border border-[#283440]">
              {selectedProduct.description}
            </p>

            {/* Parameter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="bg-[#0D1216] p-3.5 rounded-xl border border-[#283440]">
                <span className="text-slate-400 block text-[10px]">LUMINOUS EFFICACY</span>
                <strong className="text-[#D0884A] font-bold">{selectedProduct.lumen}</strong>
              </div>

              <div className="bg-[#0D1216] p-3.5 rounded-xl border border-[#283440]">
                <span className="text-slate-400 block text-[10px]">WATER & IMPACT RATING</span>
                <strong className="text-emerald-300 font-bold">{selectedProduct.ipRating}</strong>
              </div>

              <div className="bg-[#0D1216] p-3.5 rounded-xl border border-[#283440]">
                <span className="text-slate-400 block text-[10px]">RATED VOLTAGE</span>
                <strong className="text-white font-bold">{selectedProduct.voltage}</strong>
              </div>

              <div className="bg-[#0D1216] p-3.5 rounded-xl border border-[#283440]">
                <span className="text-slate-400 block text-[10px]">COLOR RENDERING (CRI)</span>
                <strong className="text-sky-300 font-bold">{selectedProduct.crai}</strong>
              </div>

              <div className="bg-[#0D1216] p-3.5 rounded-xl border border-[#283440]">
                <span className="text-slate-400 block text-[10px]">LIFESPAN DURATION</span>
                <strong className="text-purple-300 font-bold">{selectedProduct.lifespan}</strong>
              </div>

              <div className="bg-[#0D1216] p-3.5 rounded-xl border border-[#283440]">
                <span className="text-slate-400 block text-[10px]">HOUSING BODY</span>
                <strong className="text-slate-200 font-bold">Aviation Aluminum</strong>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#283440] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>2 to 5 Years Full Replacement Guarantee</span>
              </div>

              <button
                onClick={onOpenRfqModal}
                className="btn-copper px-5 py-2.5 rounded-xl font-bold text-xs shadow-lg"
              >
                Inquire Municipal / Utility Volume Order
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
