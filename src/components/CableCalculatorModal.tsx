import React, { useState } from 'react';
import { 
  Calculator, 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  Info
} from 'lucide-react';

interface CableCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRfq: () => void;
}

export const CableCalculatorModal: React.FC<CableCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOpenRfq
}) => {
  const [voltage, setVoltage] = useState<number>(230); // Single Phase 230V or 3-Phase 400V
  const [phase, setPhase] = useState<'single' | 'three'>('single');
  const [currentLoad, setCurrentLoad] = useState<number>(32); // Amperes
  const [lengthMeter, setLengthMeter] = useState<number>(50); // Meters
  const [maxVoltageDropPercent, setMaxVoltageDropPercent] = useState<number>(3.0); // Standard 3% for lighting, 5% power

  if (!isOpen) return null;

  // Specific Resistivity of 99.9% Pure Copper at 20°C (SAFE Cable): 0.01724 Ω.mm²/m
  const RHO_COPPER = 0.01724;

  // Calculation for Voltage Drop:
  // Single phase: ΔV = (2 * L * I * Rho) / Area
  // Three phase:  ΔV = (√3 * L * I * Rho) / Area
  const calculateDrop = (crossSectionMm2: number) => {
    const multiplier = phase === 'single' ? 2 : Math.sqrt(3);
    const vDrop = (multiplier * lengthMeter * currentLoad * RHO_COPPER) / crossSectionMm2;
    const dropPercent = (vDrop / voltage) * 100;
    return { vDrop, dropPercent };
  };

  const availableSizes = [
    { size: 1.5, name: "1.5 mm² SAFE® Cable", maxAirCurrent: 24 },
    { size: 2.5, name: "2.5 mm² SAFE® Cable", maxAirCurrent: 32 },
    { size: 4.0, name: "4.0 mm² SAFE® Cable", maxAirCurrent: 42 },
    { size: 6.0, name: "6.0 mm² SAFE® Cable", maxAirCurrent: 54 },
    { size: 10.0, name: "10.0 mm² SAFE® Cable", maxAirCurrent: 75 },
    { size: 16.0, name: "16.0 mm² SAFE® Cable", maxAirCurrent: 100 },
    { size: 25.0, name: "25.0 mm² SAFE® Cable", maxAirCurrent: 135 },
    { size: 35.0, name: "35.0 mm² SAFE® Cable", maxAirCurrent: 160 },
    { size: 50.0, name: "50.0 mm² SAFE® Cable", maxAirCurrent: 200 },
    { size: 95.0, name: "95.0 mm² SAFE® Cable", maxAirCurrent: 298 },
    { size: 150.0, name: "150.0 mm² SAFE® Cable", maxAirCurrent: 390 }
  ];

  // Find minimum safe cable size
  const recommendedSize = availableSizes.find(item => {
    const { dropPercent } = calculateDrop(item.size);
    return item.maxAirCurrent >= currentLoad && dropPercent <= maxVoltageDropPercent;
  }) || availableSizes[availableSizes.length - 1];

  const { vDrop: recommendedVDrop, dropPercent: recommendedDropPercent } = calculateDrop(recommendedSize.size);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1216]/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#141A20] border border-[#283440] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-slate-100">
        
        {/* Header */}
        <div className="bg-[#0D1216] px-6 py-4 border-b border-[#283440] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-[#182028] text-[#D0884A] border border-[#283440]">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">SAFE® Cable Voltage Drop & Sizing Calculator</h3>
              <p className="text-xs text-slate-300">Based on 99.9% Virgin Copper Resistivity (0.01724 Ω.mm²/m) & ES IEC Standards</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#182028] text-slate-300 hover:text-white hover:bg-[#283440] transition-colors border border-[#283440]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Inputs */}
            <div className="lg:col-span-5 space-y-4 bg-[#0D1216] p-5 rounded-xl border border-[#283440]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#D0884A] border-b border-[#283440] pb-2 font-bold">
                1. Circuit Parameters
              </h4>

              {/* Phase Selection */}
              <div>
                <label className="text-xs text-slate-300 block mb-1 font-semibold">System Voltage & Phase</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => { setPhase('single'); setVoltage(230); }}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                      phase === 'single'
                        ? 'btn-copper text-white'
                        : 'bg-[#182028] text-slate-300 border-[#283440]'
                    }`}
                  >
                    1-Phase (230V)
                  </button>
                  <button
                    onClick={() => { setPhase('three'); setVoltage(400); }}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                      phase === 'three'
                        ? 'btn-copper text-white'
                        : 'bg-[#182028] text-slate-300 border-[#283440]'
                    }`}
                  >
                    3-Phase (400V)
                  </button>
                </div>
              </div>

              {/* Load Current Input */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs text-slate-300 font-semibold">Operating Load Current (Amperes)</label>
                  <span className="text-xs font-mono text-[#D0884A] font-bold">{currentLoad} A</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={250}
                  value={currentLoad}
                  onChange={(e) => setCurrentLoad(Number(e.target.value))}
                  className="w-full accent-[#C9793A]"
                />
                <input
                  type="number"
                  value={currentLoad}
                  onChange={(e) => setCurrentLoad(Number(e.target.value))}
                  className="w-full mt-2 bg-[#182028] border border-[#283440] rounded-lg px-3 py-1.5 text-xs text-white font-mono"
                />
              </div>

              {/* Cable Length */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs text-slate-300 font-semibold">Route Cable Length (Meters)</label>
                  <span className="text-xs font-mono text-emerald-300 font-bold">{lengthMeter} m</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={500}
                  step={5}
                  value={lengthMeter}
                  onChange={(e) => setLengthMeter(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
                <input
                  type="number"
                  value={lengthMeter}
                  onChange={(e) => setLengthMeter(Number(e.target.value))}
                  className="w-full mt-2 bg-[#182028] border border-[#283440] rounded-lg px-3 py-1.5 text-xs text-white font-mono"
                />
              </div>

              {/* Max Drop Tolerance */}
              <div>
                <label className="text-xs text-slate-300 block mb-1 font-semibold">Max Allowed Voltage Drop (%)</label>
                <select
                  value={maxVoltageDropPercent}
                  onChange={(e) => setMaxVoltageDropPercent(Number(e.target.value))}
                  className="w-full bg-[#182028] border border-[#283440] rounded-lg px-3 py-2 text-xs text-white font-mono"
                >
                  <option value={2.5}>2.5% (Sensitive IT & Data Centers)</option>
                  <option value={3.0}>3.0% (Standard Lighting & Building Sub-feeders)</option>
                  <option value={5.0}>5.0% (General Industrial Motors & Power Distribution)</option>
                </select>
              </div>
            </div>

            {/* Right Recommendation & Size Comparison Table */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Highlight Recommendation Card */}
              <div className="p-5 rounded-xl bg-[#0D1216] border border-[#C9793A] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D0884A] font-bold">Recommended Cable Conductor Size</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[11px] border border-emerald-500/40 font-bold">
                    ECAE 140089 COMPLIANT
                  </span>
                </div>

                <div className="flex items-baseline space-x-3">
                  <div className="text-3xl font-black text-white font-serif">{recommendedSize.name}</div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#283440] text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Calculated Drop:</span>
                    <strong className="text-emerald-300 font-mono font-bold">{recommendedVDrop.toFixed(2)} V ({recommendedDropPercent.toFixed(2)}%)</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Rated Air Current:</span>
                    <strong className="text-[#D0884A] font-mono font-bold">{recommendedSize.maxAirCurrent} A</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Voltage Remaining:</span>
                    <strong className="text-white font-mono font-bold">{(voltage - recommendedVDrop).toFixed(1)} V</strong>
                  </div>
                </div>
              </div>

              {/* Sizes Breakdown Matrix */}
              <div className="space-y-2">
                <h5 className="text-xs font-semibold text-slate-300">Conductor Cross-Section Performance Matrix</h5>
                <div className="overflow-x-auto rounded-xl border border-[#283440] bg-[#0D1216] max-h-48">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#182028] text-[#D0884A] font-mono text-[11px] sticky top-0 border-b border-[#283440]">
                      <tr>
                        <th className="p-2.5">Conductor Size</th>
                        <th className="p-2.5">Voltage Drop (V)</th>
                        <th className="p-2.5">Drop %</th>
                        <th className="p-2.5">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#283440] font-sans">
                      {availableSizes.slice(0, 8).map((item) => {
                        const { vDrop, dropPercent } = calculateDrop(item.size);
                        const isRecommended = item.size === recommendedSize.size;
                        const isPass = dropPercent <= maxVoltageDropPercent && item.maxAirCurrent >= currentLoad;

                        return (
                          <tr 
                            key={item.size} 
                            className={`${isRecommended ? 'bg-[#182028] font-bold text-[#D0884A]' : 'hover:bg-[#182028]/60'}`}
                          >
                            <td className="p-2.5 font-mono">{item.size} mm²</td>
                            <td className="p-2.5 font-mono text-slate-200">{vDrop.toFixed(2)} V</td>
                            <td className="p-2.5 font-mono text-slate-200">{dropPercent.toFixed(2)} %</td>
                            <td className="p-2.5">
                              {isPass ? (
                                <span className="inline-flex items-center space-x-1 text-emerald-300 text-[11px]">
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                  <span>SAFE</span>
                                </span>
                              ) : (
                                <span className="inline-flex items-center space-x-1 text-red-400 text-[11px]">
                                  <AlertTriangle className="w-3.5 h-3.5" />
                                  <span>EXCEEDS DROP</span>
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#0D1216] px-6 py-4 border-t border-[#283440] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-xs text-slate-300">
            <Info className="w-4 h-4 text-[#D0884A]" />
            <span>Resistivity computed for 99.98% oxygen-free copper at 20°C ambient temperature.</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                onClose();
                onOpenRfq();
              }}
              className="btn-copper px-4 py-2 rounded-lg font-bold text-xs"
            >
              Order Custom Cut Reeled Cables
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
