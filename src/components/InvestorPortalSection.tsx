import React, { useState } from 'react';
import { 
  Briefcase, 
  Download, 
  CheckCircle2, 
  ArrowRight, 
  BarChart3
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { INVESTMENT_TIERS } from '../data/industrialData';
import { InvestmentTier } from '../types';

interface InvestorPortalSectionProps {
  onOpenRfqModal: () => void;
}

const PRODUCTION_GROWTH_DATA = [
  { year: '2021', copperTons: 1200, revenueUSD: 12.5, exportAgro: 8.2 },
  { year: '2022', copperTons: 2400, revenueUSD: 21.0, exportAgro: 14.5 },
  { year: '2023', copperTons: 4100, revenueUSD: 33.8, exportAgro: 22.0 },
  { year: '2024', copperTons: 6800, revenueUSD: 48.5, exportAgro: 31.2 },
  { year: '2025 (E)', copperTons: 9500, revenueUSD: 64.0, exportAgro: 42.0 },
  { year: '2026 (P)', copperTons: 14000, revenueUSD: 92.0, exportAgro: 58.0 }
];

export const InvestorPortalSection: React.FC<InvestorPortalSectionProps> = ({ onOpenRfqModal }) => {
  const [calcInvestmentAmount, setCalcInvestmentAmount] = useState<number>(500000); // USD

  // IRR calculation estimate: 16.5% average annual yield
  const estimatedAnnualReturn = calcInvestmentAmount * 0.165;
  const estimated5YearTotal = calcInvestmentAmount + (estimatedAnnualReturn * 5);

  return (
    <section id="investors" className="py-20 bg-[#0D1216] text-slate-100 relative overflow-hidden border-t border-[#283440]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#141A20] border border-[#283440] text-[#D0884A] text-xs font-mono font-bold">
              <Briefcase className="w-3.5 h-3.5 text-[#C9793A]" />
              <span>SOVEREIGN INVESTMENT & PRIVATE EQUITY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight leading-tight">
              Investor Relations & <br />
              <span className="text-[#D0884A]">
                Capital Growth Opportunities
              </span>
            </h2>
            <p className="text-sm text-slate-200">
              Partner with Ethiopia's fastest growing industrial export group. Backed by 35,000 m² prime real estate assets in Tatek Industrial Complex, government utility contracts, and hard foreign currency generation.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenRfqModal}
              className="btn-copper px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download 2026 Prospectus</span>
            </button>
          </div>
        </div>

        {/* Growth Visual Chart & Key Investor Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Chart Card */}
          <div className="lg:col-span-7 bg-[#141A20] border border-[#283440] rounded-3xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#283440] pb-4">
              <div>
                <h3 className="text-base font-bold text-white font-serif flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4 text-[#D0884A]" />
                  <span>Annual Industrial Cable Output & Revenue Trajectory</span>
                </h3>
                <p className="text-xs text-slate-300 font-mono">Copper Tonnage vs Total Group Revenue ($ USD Millions)</p>
              </div>

              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                +38.4% CAGR
              </span>
            </div>

            {/* Recharts Area Container */}
            <div className="h-72 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={PRODUCTION_GROWTH_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D0884A" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#D0884A" stopOpacity={0.0}/>
                    </linearGradient>
                    <linearGradient id="colorTons" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#283440" />
                  <XAxis dataKey="year" stroke="#94a3b8" fontSize={11} tickLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0D1216', borderColor: '#283440', borderRadius: '12px', fontSize: '12px', color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="revenueUSD" name="Revenue ($M USD)" stroke="#D0884A" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRevenue)" />
                  <Area type="monotone" dataKey="copperTons" name="Copper Extruded (Metric Tons)" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorTons)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#283440] text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px]">CURRENT PLANT CAPEX</span>
                <strong className="text-white">$18.5M USD</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">EXPORT FX YIELD</span>
                <strong className="text-[#D0884A]">$31.2M USD</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">EIC INCENTIVE TAX HOLIDAY</span>
                <strong className="text-emerald-300">5-7 Years Exempt</strong>
              </div>
            </div>
          </div>

          {/* Right Investment Interactive Yield Calculator */}
          <div className="lg:col-span-5 bg-[#141A20] border border-[#C9793A] rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            
            <div className="space-y-1 border-b border-[#283440] pb-4">
              <span className="text-xs font-mono uppercase text-[#D0884A] font-bold tracking-wider">
                Capital Allocation & Yield Calculator
              </span>
              <h3 className="text-xl font-bold text-white font-serif">
                Direct Project Participation
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5 font-semibold">
                  <span className="text-slate-200">Investment Commitment ($ USD):</span>
                  <span className="text-[#D0884A] font-mono text-sm font-bold">${calcInvestmentAmount.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={5000000}
                  step={50000}
                  value={calcInvestmentAmount}
                  onChange={(e) => setCalcInvestmentAmount(Number(e.target.value))}
                  className="w-full accent-[#C9793A]"
                />
              </div>

              {/* Yield Output Box */}
              <div className="bg-[#0D1216] p-4 rounded-xl border border-[#283440] space-y-3 font-mono">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Target IRR Rate:</span>
                  <strong className="text-emerald-300 font-bold">16.5% / Year</strong>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Estimated Annual Return:</span>
                  <strong className="text-[#D0884A] font-bold">${estimatedAnnualReturn.toLocaleString()} / Year</strong>
                </div>

                <div className="pt-2 border-t border-[#283440] flex justify-between items-center text-sm">
                  <span className="text-slate-200 font-sans font-semibold">5-Year Cumulative Output:</span>
                  <strong className="text-white text-base font-extrabold">${estimated5YearTotal.toLocaleString()}</strong>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenRfqModal}
              className="w-full py-3 rounded-xl btn-copper font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Schedule Institutional Investor Call</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

          </div>
        </div>

        {/* Investment Tiers Cards */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white font-serif">
            Current Open Investment Tiers
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INVESTMENT_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className="bg-[#141A20] border border-[#283440] hover:border-[#C9793A] rounded-2xl p-6 space-y-4 transition-all hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#C9793A]/20 text-[#D0884A] border border-[#C9793A]/40 font-bold">
                    {tier.category}
                  </span>
                  <h4 className="text-lg font-bold text-white font-serif">{tier.title}</h4>
                  
                  <div className="space-y-1 pt-2 font-mono text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>Min Capital:</span>
                      <strong className="text-white">{tier.minInvestment}</strong>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Target IRR:</span>
                      <strong className="text-emerald-300 font-bold">{tier.targetReturn}</strong>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Holding Term:</span>
                      <strong className="text-[#D0884A]">{tier.term}</strong>
                    </div>
                  </div>

                  <p className="text-xs text-slate-200 pt-2 border-t border-[#283440] leading-relaxed">
                    {tier.impact}
                  </p>

                  <ul className="space-y-1.5 text-[11px] text-slate-300 pt-2">
                    {tier.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D0884A] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenRfqModal}
                  className="w-full mt-4 py-2.5 rounded-xl bg-[#0D1216] border border-[#283440] hover:border-[#C9793A] text-[#D0884A] font-bold text-xs transition-colors"
                >
                  Apply for Tier Participation
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
