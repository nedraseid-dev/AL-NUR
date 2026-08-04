import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { ECAE_CERTIFICATE_DATA, INVESTMENT_TIERS } from '../data/industrialData';

interface InvestorsViewProps {
  onOpenRfqModal: () => void;
  onOpenEcaeModal: () => void;
}

export const InvestorsView: React.FC<InvestorsViewProps> = ({
  onOpenRfqModal,
  onOpenEcaeModal
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 bg-[#0D1216]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-white font-bold text-xs uppercase tracking-widest bg-[#C9793A] border border-[#A85E28] px-4 py-1.5 rounded-full shadow-xs">
          SOVEREIGN COMPLIANCE & INVESTORS
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-serif mt-4">
          ECAE License #140089 & Capital Growth Portal
        </h1>
        <p className="text-slate-300 text-sm sm:text-base mt-2">
          Backed by 35,000 m² industrial real estate assets, Ethiopian Electric Utility supplier contracts, and foreign exchange agro-trade recycling.
        </p>
      </div>

      {/* ECAE Certificate License Highlight Card */}
      <section className="bg-[#141A20] text-white p-8 sm:p-10 rounded-3xl border border-[#283440] shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#283440] pb-6">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-6 h-6 text-emerald-300" />
              <span className="text-emerald-300 font-mono font-bold text-xs uppercase tracking-wider">
                COMPULSORY NATIONAL LICENSING
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              Ethiopian Conformity Assessment Enterprise (ECAE)
            </h2>
            <p className="text-xs text-slate-200">
              License Number: <strong className="text-[#D0884A] font-mono text-sm">{ECAE_CERTIFICATE_DATA.licenseNo}</strong> • Valid Until: {ECAE_CERTIFICATE_DATA.validUntil}
            </p>
          </div>

          <button
            onClick={onOpenEcaeModal}
            className="btn-copper px-6 py-3 rounded-xl font-extrabold text-xs transition-all shadow-md shrink-0 flex items-center space-x-2"
          >
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>Interactive Parameter Verification</span>
          </button>
        </div>

        {/* Passed Parameters Table */}
        <div className="overflow-x-auto border border-[#283440] rounded-2xl bg-[#0D1216]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#141A20] text-[#D0884A] font-mono font-bold uppercase border-b border-[#283440]">
              <tr>
                <th className="p-3.5">Testing Parameter</th>
                <th className="p-3.5">Required Standard</th>
                <th className="p-3.5">SAFE® Cable Achieved</th>
                <th className="p-3.5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#283440] text-slate-200">
              {ECAE_CERTIFICATE_DATA.testingParameters.map((param, idx) => (
                <tr key={idx} className="hover:bg-[#141A20]/60">
                  <td className="p-3.5 font-bold text-white">{param.parameter}</td>
                  <td className="p-3.5 text-slate-300">{param.requiredStandard}</td>
                  <td className="p-3.5 font-mono text-[#D0884A] font-bold">{param.safeCableAchieved}</td>
                  <td className="p-3.5">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold font-mono ${
                      param.status === 'EXCEEDS STANDARD'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                    }`}>
                      {param.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Investment Tiers */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
            Strategic Investment & Capital Tiers
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Opportunities for joint venture equity partners, institutional debt providers, and trade finance investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INVESTMENT_TIERS.map((tier, idx) => (
            <div key={idx} className="clean-card rounded-2xl p-8 flex flex-col justify-between hover:border-[#D0884A] transition-all bg-[#141A20] border border-[#283440]">
              <div>
                <span className="text-[11px] font-mono font-bold text-white bg-[#C9793A] px-2.5 py-1 rounded">
                  {tier.category}
                </span>

                <h3 className="text-xl font-bold text-white mt-3 mb-2 font-serif leading-snug">
                  {tier.title}
                </h3>

                <div className="bg-[#0D1216] p-4 rounded-xl border border-[#283440] my-4 space-y-1 text-xs">
                  <div><span className="text-slate-300">Min Capital:</span> <strong className="text-white font-mono">{tier.minInvestment}</strong></div>
                  <div><span className="text-slate-300">Target IRR:</span> <strong className="text-emerald-400 font-mono font-bold">{tier.targetReturn}</strong></div>
                  <div><span className="text-slate-300">Term:</span> <strong className="text-white">{tier.term}</strong></div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {tier.impact}
                </p>

                <div className="space-y-2 mb-6">
                  {tier.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start text-xs text-slate-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#D0884A] mr-2 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenRfqModal}
                className="w-full py-3 rounded-xl bg-[#182028] hover:bg-[#283440] text-white font-bold text-xs flex items-center justify-center space-x-2 border border-[#283440] transition-colors"
              >
                <span>Request Investor Memorandum</span>
                <ArrowRight className="w-4 h-4 text-[#D0884A]" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
