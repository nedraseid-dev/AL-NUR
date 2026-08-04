import React, { useState } from 'react';
import { 
  ShieldCheck, 
  X, 
  CheckCircle2, 
  Award, 
  Search, 
  FileText, 
  Building2, 
  AlertCircle
} from 'lucide-react';
import { ECAE_CERTIFICATE_DATA, COMPANY_INFO } from '../data/industrialData';

interface EcaeVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRfq: () => void;
}

export const EcaeVerificationModal: React.FC<EcaeVerificationModalProps> = ({
  isOpen,
  onClose,
  onOpenRfq
}) => {
  const [searchQuery, setSearchQuery] = useState('140089');
  const [activeTab, setActiveTab] = useState<'certificate' | 'tests' | 'standards'>('certificate');

  if (!isOpen) return null;

  const isLicenseMatch = searchQuery.trim() === '140089';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1216]/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#141A20] border border-[#283440] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-slate-100">
        
        {/* Header Bar */}
        <div className="bg-[#0D1216] px-6 py-4 border-b border-[#283440] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-[#182028] text-[#D0884A] border border-[#283440]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-bold text-white">ECAE Quality Certificate Inspector</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40">
                  OFFICIAL GOVERNMENT PORTAL
                </span>
              </div>
              <p className="text-xs text-slate-300">Ethiopian Conformity Assessment Enterprise • Mandatory Compliance Verification</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#182028] text-slate-300 hover:text-white hover:bg-[#283440] transition-colors border border-[#283440]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Verification Search Bar */}
        <div className="bg-[#0D1216] px-6 py-3 border-b border-[#283440] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2 flex-1 min-w-[260px]">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter License No. (e.g. 140089)..."
                className="w-full bg-[#182028] border border-[#283440] rounded-lg pl-9 pr-4 py-2 text-xs font-mono text-white focus:outline-none focus:border-[#C9793A]"
              />
            </div>
            <button
              onClick={() => setSearchQuery('140089')}
              className="px-3 py-2 rounded-lg bg-[#182028] border border-[#283440] text-[#D0884A] text-xs font-mono hover:border-[#C9793A] transition-colors"
            >
              Load Lic. 140089
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab('certificate')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'certificate' 
                  ? 'btn-copper text-white' 
                  : 'bg-[#141A20] text-slate-300 hover:bg-[#182028]'
              }`}
            >
              Certificate Overview
            </button>
            <button
              onClick={() => setActiveTab('tests')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'tests' 
                  ? 'btn-copper text-white' 
                  : 'bg-[#141A20] text-slate-300 hover:bg-[#182028]'
              }`}
            >
              Lab Test Parameters
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {isLicenseMatch ? (
            <>
              {/* Status Ribbon */}
              <div className="p-4 rounded-xl bg-[#0D1216] border border-emerald-500/40 flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-emerald-300 flex items-center space-x-2">
                      <span>VALID & CERTIFIED LICENSED MANUFACTURER</span>
                    </h4>
                    <p className="text-xs text-slate-200 mt-1">
                      License No. <strong className="text-white font-mono">140089</strong> is registered to <strong className="text-[#D0884A]">{COMPANY_INFO.name}</strong> under Ethiopian Compulsory Standard CES 111:2013 & ES IEC 60227.
                    </p>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="text-[10px] text-slate-400 block font-mono">STATUS</span>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-xs border border-emerald-500/50">
                    ACTIVE COMPLIANCE
                  </span>
                </div>
              </div>

              {activeTab === 'certificate' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Specs */}
                  <div className="space-y-4 bg-[#0D1216] p-5 rounded-xl border border-[#283440]">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#D0884A] border-b border-[#283440] pb-2 flex items-center justify-between font-bold">
                      <span>Official License Dossier</span>
                      <FileText className="w-4 h-4" />
                    </h4>

                    <div className="space-y-3 text-xs">
                      <div>
                        <span className="text-slate-400 block">Licensed Enterprise:</span>
                        <strong className="text-white font-medium text-sm">{ECAE_CERTIFICATE_DATA.companyName}</strong>
                      </div>

                      <div>
                        <span className="text-slate-400 block">Amharic Registered Name:</span>
                        <strong className="text-[#D0884A] font-medium">{COMPANY_INFO.amharicName}</strong>
                      </div>

                      <div>
                        <span className="text-slate-400 block">Registered Plant Address:</span>
                        <span className="text-slate-200">{ECAE_CERTIFICATE_DATA.address}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div>
                          <span className="text-slate-400 block">Initial Issue Date:</span>
                          <span className="font-mono text-slate-200">{ECAE_CERTIFICATE_DATA.issueDate}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block">Valid Through:</span>
                          <span className="font-mono text-emerald-300 font-bold">{ECAE_CERTIFICATE_DATA.validUntil}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Scope & Standards */}
                  <div className="space-y-4 bg-[#0D1216] p-5 rounded-xl border border-[#283440]">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#D0884A] border-b border-[#283440] pb-2 flex items-center justify-between font-bold">
                      <span>Certified Product Scope & Standards</span>
                      <Award className="w-4 h-4" />
                    </h4>

                    <div className="space-y-3 text-xs">
                      <div>
                        <span className="text-slate-400 block mb-1">Approved Product Scope:</span>
                        <p className="text-slate-200 leading-relaxed bg-[#182028] p-2.5 rounded border border-[#283440]">
                          {ECAE_CERTIFICATE_DATA.productScope}
                        </p>
                      </div>

                      <div>
                        <span className="text-slate-400 block mb-1">Governing Ethiopian & IEC Standards:</span>
                        <ul className="space-y-1.5">
                          {ECAE_CERTIFICATE_DATA.standards.map((st, i) => (
                            <li key={i} className="flex items-center space-x-2 text-slate-200">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                              <span>{st}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Lab Test Parameters Tab */
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white">ECAE Certified Laboratory Test Results (SAFE® Copper Cable)</h4>
                    <span className="text-xs text-slate-300">Tested under 20°C standard conditions</span>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-[#283440] bg-[#0D1216]">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#182028] text-[#D0884A] font-mono text-[11px] border-b border-[#283440]">
                        <tr>
                          <th className="p-3">Testing Parameter</th>
                          <th className="p-3">Required ECAE Standard</th>
                          <th className="p-3">SAFE® Cable Lab Result</th>
                          <th className="p-3 text-right">Compliance Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#283440] font-sans">
                        {ECAE_CERTIFICATE_DATA.testingParameters.map((param, index) => (
                          <tr key={index} className="hover:bg-[#182028]/60">
                            <td className="p-3 font-semibold text-white">{param.parameter}</td>
                            <td className="p-3 text-slate-300 font-mono">{param.requiredStandard}</td>
                            <td className="p-3 text-[#D0884A] font-mono font-bold">{param.safeCableAchieved}</td>
                            <td className="p-3 text-right">
                              <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                                param.status === 'EXCEEDS STANDARD'
                                  ? 'bg-[#C9793A]/20 text-[#D0884A] border border-[#C9793A]/40'
                                  : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                              }`}>
                                {param.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="p-8 text-center bg-[#0D1216] rounded-xl border border-red-500/30 space-y-3">
              <AlertCircle className="w-10 h-10 text-red-400 mx-auto" />
              <h4 className="text-lg font-bold text-white">License Number Not Recognized</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Please enter the official Al-Nur Group ECAE license number <strong className="text-[#D0884A]">140089</strong> to inspect certified standard compliance.
              </p>
              <button
                onClick={() => setSearchQuery('140089')}
                className="px-4 py-2 rounded-lg btn-copper font-bold text-xs"
              >
                Reset to License 140089
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#0D1216] px-6 py-4 border-t border-[#283440] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-300 flex items-center space-x-2">
            <Building2 className="w-4 h-4 text-emerald-300" />
            <span>Ethiopian Conformity Assessment Enterprise • Quality Assurance System</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                onClose();
                onOpenRfq();
              }}
              className="btn-copper px-4 py-2 rounded-lg font-bold text-xs"
            >
              Request Certified Cable Batch Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
