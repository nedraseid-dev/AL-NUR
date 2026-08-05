import React, { useState } from 'react';
import { 
  Search, 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  X,
  Info
} from 'lucide-react';
import { CABLE_PRODUCTS, LIGHTING_PRODUCTS } from '../data/industrialData';
import { CableProduct, LightingProduct } from '../types';

interface ProductsViewProps {
  onOpenRfqModal: () => void;
  onOpenEcaeModal: () => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  onOpenRfqModal,
  onOpenEcaeModal
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cables' | 'lighting' | 'agro'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCable, setSelectedCable] = useState<CableProduct | null>(null);
  const [selectedLighting, setSelectedLighting] = useState<LightingProduct | null>(null);

  // Filter products
  const filteredCables = CABLE_PRODUCTS.filter(c => {
    if (activeCategory === 'lighting' || activeCategory === 'agro') return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return c.name.toLowerCase().includes(q) || c.standard.toLowerCase().includes(q) || c.voltage.toLowerCase().includes(q);
  });

  const filteredLighting = LIGHTING_PRODUCTS.filter(l => {
    if (activeCategory === 'cables' || activeCategory === 'agro') return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return l.model.toLowerCase().includes(q) || l.category.toLowerCase().includes(q) || l.material.toLowerCase().includes(q);
  });

  const showAgro = activeCategory === 'all' || activeCategory === 'agro';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 bg-[#0D1216]">
      {/* Header Title */}
      <div className="text-center max-w-3xl mx-auto">
        
        <h1 className="text-3xl sm:text-5xl font-black text-white font-serif mt-4">
          OUR PRODUCTS
        </h1>
        
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#141A20] p-4 rounded-2xl border border-[#283440] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {[
            { id: 'all', label: 'All Products' },
            { id: 'cables', label: 'SAFE® Electric Cables' },
            { id: 'lighting', label: 'German LIPER LED Lighting' },
            { id: 'agro', label: 'Agro Export Commodities' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#182028] text-[#D0884A] font-extrabold shadow-sm border border-[#283440]'
                  : 'bg-[#0D1216] text-slate-300 hover:bg-[#182028] border border-transparent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search specs, models, cables..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0D1216] border border-[#283440] text-xs font-medium focus:outline-none focus:border-[#D0884A] text-white placeholder-slate-400"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* CABLES SECTION */}
      {filteredCables.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#283440] pb-3">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-[#D0884A] fill-[#D0884A]" />
              <h2 className="text-xl font-black text-white font-serif">
                SAFE® Electrical Wires & Power Cables
              </h2>
            </div>
            <button
              onClick={onOpenEcaeModal}
              className="text-xs font-black text-white bg-[#C9793A] hover:bg-[#A85E28] px-3 py-1 rounded-lg border border-[#A85E28] flex items-center space-x-1 shadow-xs"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>Verify ECAE #140089</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCables.map((cable) => (
              <div key={cable.id} className="clean-card rounded-2xl p-6 flex flex-col justify-between hover:border-[#D0884A] transition-all bg-[#141A20] border border-[#283440]">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-black bg-[#0D1216] text-[#D0884A] px-2.5 py-0.5 rounded border border-[#283440]">
                      {cable.voltage}
                    </span>
                    <span className="text-[11px] font-bold text-white bg-[#C9793A] px-2 py-0.5 rounded">
                      ECAE Compliant
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {cable.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {cable.application}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-300 mb-6 bg-[#182028] p-3 rounded-xl border border-[#283440]">
                    <div><strong className="text-white">Standard:</strong> {cable.standard}</div>
                    <div><strong className="text-white">Conductor:</strong> {cable.conductor}</div>
                    <div><strong className="text-white">Insulation:</strong> {cable.insulation}</div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cable.sizesAvailable.slice(0, 5).map((size, idx) => (
                      <span key={idx} className="text-[10px] font-mono bg-[#0D1216] text-white border border-[#283440] px-2 py-0.5 rounded font-bold">
                        {size}
                      </span>
                    ))}
                    {cable.sizesAvailable.length > 5 && (
                      <span className="text-[10px] font-mono bg-[#182028] text-slate-300 px-2 py-0.5 rounded border border-[#283440]">
                        +{cable.sizesAvailable.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-4 border-t border-[#283440]">
                  <button
                    onClick={() => setSelectedCable(cable)}
                    className="flex-1 py-2 rounded-xl bg-[#182028] hover:bg-[#283440] text-white font-bold text-xs transition-colors flex items-center justify-center space-x-1 border border-[#283440]"
                  >
                    <Info className="w-3.5 h-3.5 text-[#D0884A]" />
                    <span>Technical Specs Table</span>
                  </button>
                  <button
                    onClick={onOpenRfqModal}
                    className="btn-copper px-4 py-2 rounded-xl text-xs font-bold transition-all"
                  >
                    RFQ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* LIGHTING SECTION */}
      {filteredLighting.length > 0 && (
        <section className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-[#283440] pb-3">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-[#D0884A]" />
              <h2 className="text-xl font-black text-white font-serif">
                German LIPER® LED Lighting Solutions
              </h2>
            </div>
            <span className="text-xs font-black text-white bg-[#C9793A] px-3 py-1 rounded-lg">
              IP66 Industrial Rated
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLighting.map((light) => (
              <div key={light.id} className="clean-card rounded-2xl p-6 flex flex-col justify-between hover:border-[#D0884A] transition-all bg-[#141A20] border border-[#283440]">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-black bg-[#0D1216] text-[#D0884A] px-2.5 py-0.5 rounded border border-[#283440]">
                      {light.power}
                    </span>
                    <span className="text-[11px] font-mono font-bold bg-[#C9793A] text-white px-2 py-0.5 rounded">
                      {light.ipRating}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {light.model}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {light.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 mb-6 bg-[#182028] p-3 rounded-xl border border-[#283440] font-medium">
                    <div><strong className="text-white">Lumen Output:</strong> {light.lumen}</div>
                    <div><strong className="text-white">Lifespan:</strong> {light.lifespan}</div>
                    <div><strong className="text-white">Voltage:</strong> {light.voltage}</div>
                    <div><strong className="text-white">Housing:</strong> {light.material}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-4 border-t border-[#283440]">
                  <button
                    onClick={() => setSelectedLighting(light)}
                    className="flex-1 py-2 rounded-xl bg-[#182028] hover:bg-[#283440] text-white font-bold text-xs transition-colors border border-[#283440]"
                  >
                    View Luminaire Specs
                  </button>
                  <button
                    onClick={onOpenRfqModal}
                    className="bg-[#141A20] hover:bg-[#182028] text-[#D0884A] px-5 py-2 rounded-xl text-xs font-bold transition-all border border-[#283440]"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* AGRO EXPORT SECTION */}
      {showAgro && (
        <section className="space-y-6 pt-4">
          <div className="flex items-center space-x-2 border-b border-[#283440] pb-3">
            <h2 className="text-xl font-black text-white font-serif">
              Agricultural Commodities Export Directory
            </h2>
          </div>

          <div className="bg-[#141A20] text-white p-8 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-3 gap-6 border border-[#283440]">
            <div className="bg-[#182028] p-5 rounded-xl border border-[#283440]">
              <h4 className="font-bold text-[#D0884A] text-base mb-2">Grade-1 Yirgacheffe Coffee</h4>
              <p className="text-xs text-slate-200">Washed & Natural specialty coffee beans exported directly to EU, UAE, and Asian markets under LC bank guarantees.</p>
            </div>
            <div className="bg-[#182028] p-5 rounded-xl border border-[#283440]">
              <h4 className="font-bold text-[#D0884A] text-base mb-2">Humera White Sesame Seeds</h4>
              <p className="text-xs text-slate-200">High-oil content premium white sesame seeds cleaned and bagged in standard 50kg export polypropylene bags.</p>
            </div>
            <div className="bg-[#182028] p-5 rounded-xl border border-[#283440]">
              <h4 className="font-bold text-[#D0884A] text-base mb-2">Oilseeds & Organic Pulses</h4>
              <p className="text-xs text-slate-200">Red kidney beans, chickpeas, and niger seeds aggregated directly from Oromia and Sidama farmer cooperatives.</p>
            </div>
          </div>
        </section>
      )}

      {/* CABLE SPECIFICATION MODAL */}
      {selectedCable && (
        <div className="fixed inset-0 z-50 bg-[#0D1216]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#141A20] text-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-[#283440] relative my-8">
            <button
              onClick={() => setSelectedCable(null)}
              className="absolute right-4 top-4 p-2 rounded-full bg-[#182028] hover:bg-[#283440] text-slate-300 hover:text-white border border-[#283440]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2 mb-2">
              <span className="text-xs font-mono font-black text-[#D0884A] bg-[#0D1216] px-2.5 py-1 rounded border border-[#283440]">
                {selectedCable.voltage}
              </span>
              <span className="text-xs font-bold text-white bg-[#C9793A] px-2.5 py-1 rounded">
                ECAE Certificate #140089
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white font-serif mb-2">
              {selectedCable.name}
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              Standard: <strong>{selectedCable.standard}</strong>
            </p>

            <div className="overflow-x-auto border border-[#283440] rounded-xl mb-6">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#182028] text-[#D0884A] uppercase font-mono font-bold border-b border-[#283440]">
                  <tr>
                    <th className="p-3">Product Type</th>
                    <th className="p-3">Cross Section</th>
                    <th className="p-3">Diameter</th>
                    <th className="p-3">Weight (kg/km)</th>
                    <th className="p-3">DC Resistance (20°C)</th>
                    <th className="p-3">Air Ampacity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#283440] text-slate-200 font-medium bg-[#141A20]">
                  {selectedCable.specsTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#182028]">
                      <td className="p-3 font-bold text-white">{row.productType}</td>
                      <td className="p-3">{row.nominalCrossSection}</td>
                      <td className="p-3">{row.overallDiameter}</td>
                      <td className="p-3">{row.netWeight}</td>
                      <td className="p-3">{row.dcResistance}</td>
                      <td className="p-3 font-black text-[#D0884A] bg-[#182028]">{row.currentCapacityInAir}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={onOpenEcaeModal}
                className="text-xs font-bold text-[#D0884A] hover:underline flex items-center space-x-1"
              >
                <ShieldCheck className="w-4 h-4 text-[#D0884A]" />
                <span>Verify ECAE Lab Test Parameters</span>
              </button>
              <button
                onClick={() => { setSelectedCable(null); onOpenRfqModal(); }}
                className="btn-copper px-6 py-2.5 rounded-xl text-xs font-bold"
              >
                Request Quotation for {selectedCable.name}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTING MODAL */}
      {selectedLighting && (
        <div className="fixed inset-0 z-50 bg-[#0D1216]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#141A20] text-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#283440] relative my-8">
            <button
              onClick={() => setSelectedLighting(null)}
              className="absolute right-4 top-4 p-2 rounded-full bg-[#182028] hover:bg-[#283440] text-slate-300 hover:text-white border border-[#283440]"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono font-bold text-white bg-[#C9793A] px-2.5 py-1 rounded mb-2 inline-block">
              {selectedLighting.ipRating} Industrial Grade
            </span>

            <h3 className="text-2xl font-bold text-white font-serif mb-4">
              {selectedLighting.model}
            </h3>

            <div className="space-y-3 text-xs text-slate-300 bg-[#182028] p-4 rounded-xl border border-[#283440] mb-6">
              <div><strong className="text-white">Power Rating:</strong> {selectedLighting.power}</div>
              <div><strong className="text-white">Lumen Efficacy:</strong> {selectedLighting.lumen}</div>
              <div><strong className="text-white">Operating Voltage:</strong> {selectedLighting.voltage}</div>
              <div><strong className="text-white">Color Index (CRI):</strong> {selectedLighting.crai}</div>
              <div><strong className="text-white">Lifespan:</strong> {selectedLighting.lifespan}</div>
              <div><strong className="text-white">Housing Material:</strong> {selectedLighting.material}</div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              {selectedLighting.description}
            </p>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setSelectedLighting(null)}
                className="px-5 py-2.5 rounded-xl bg-[#182028] text-slate-200 hover:text-white font-semibold text-xs border border-[#283440]"
              >
                Close
              </button>
              <button
                onClick={() => { setSelectedLighting(null); onOpenRfqModal(); }}
                className="bg-[#C9793A] hover:bg-[#A85E28] text-white px-6 py-2.5 rounded-xl text-xs font-bold"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
