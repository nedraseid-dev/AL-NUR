import React, { useState } from 'react';
import { 
  FileCheck2, 
  X, 
  CheckCircle2, 
  Send
} from 'lucide-react';

interface RfqDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RfqDossierModal: React.FC<RfqDossierModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    category: 'safe-cable',
    name: '',
    organization: '',
    email: '',
    phone: '',
    quantityDetails: '',
    targetDeliveryDate: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1216]/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#141A20] border border-[#283440] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-slate-100">
        
        {/* Header */}
        <div className="bg-[#0D1216] px-6 py-4 border-b border-[#283440] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-[#182028] text-[#D0884A] border border-[#283440]">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Official Request for Quotation (RFQ) & Prospectus</h3>
              <p className="text-xs text-slate-300">Direct Procurement Office • Al-Nur Import & Export Industrial Group PLC</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#182028] text-slate-300 hover:text-white hover:bg-[#283440] transition-colors border border-[#283440]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {submitted ? (
            <div className="p-8 text-center bg-[#0D1216] rounded-2xl border border-emerald-500/40 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-white font-serif">Procurement Dossier Received</h4>
              <p className="text-xs text-slate-200 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#D0884A]">{formData.name}</strong> ({formData.organization || 'Independent Contractor'}). Reference Serial <strong className="text-emerald-300 font-mono">ALN-RFQ-2026-{Math.floor(1000 + Math.random() * 9000)}</strong> has been logged into our Tatek Procurement System. Our sales department will contact you within 4 business hours.
              </p>
              
              <div className="pt-4 flex justify-center space-x-3">
                <button
                  onClick={() => { setSubmitted(false); onClose(); }}
                  className="px-5 py-2.5 rounded-xl btn-copper font-bold text-xs"
                >
                  Return to Main Portal
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Category selector */}
              <div>
                <label className="text-slate-300 font-semibold block mb-1">Procurement Category</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, category: 'safe-cable'})}
                    className={`p-2.5 rounded-xl text-left border font-semibold transition-all ${
                      formData.category === 'safe-cable' 
                        ? 'btn-copper text-white border-[#C9793A]' 
                        : 'bg-[#0D1216] border-[#283440] text-slate-300'
                    }`}
                  >
                    SAFE® Cables
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({...formData, category: 'liper-lighting'})}
                    className={`p-2.5 rounded-xl text-left border font-semibold transition-all ${
                      formData.category === 'liper-lighting' 
                        ? 'btn-copper text-white border-[#C9793A]' 
                        : 'bg-[#0D1216] border-[#283440] text-slate-300'
                    }`}
                  >
                    LIPER® Lighting
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({...formData, category: 'agro-export'})}
                    className={`p-2.5 rounded-xl text-left border font-semibold transition-all ${
                      formData.category === 'agro-export' 
                        ? 'btn-copper text-white border-[#C9793A]' 
                        : 'bg-[#0D1216] border-[#283440] text-slate-300'
                    }`}
                  >
                    Agro Commodity Export
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({...formData, category: 'investor-equity'})}
                    className={`p-2.5 rounded-xl text-left border font-semibold transition-all ${
                      formData.category === 'investor-equity' 
                        ? 'btn-copper text-white border-[#C9793A]' 
                        : 'bg-[#0D1216] border-[#283440] text-slate-300'
                    }`}
                  >
                    Investor Equity / Bond
                  </button>
                </div>
              </div>

              {/* Name & Org */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-300 block mb-1">Full Name / Officer In-Charge *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. Eng. Dawit Alemu"
                    className="w-full bg-[#0D1216] border border-[#283440] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#C9793A]"
                  />
                </div>

                <div>
                  <label className="text-slate-300 block mb-1">Enterprise / Ministry / Contractor Name</label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                    placeholder="e.g. Ethiopian Electric Utility / Construction PLC"
                    className="w-full bg-[#0D1216] border border-[#283440] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#C9793A]"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-300 block mb-1">Telephone Line *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+251 91 1..."
                    className="w-full bg-[#0D1216] border border-[#283440] rounded-lg p-2.5 text-white font-mono focus:outline-none focus:border-[#C9793A]"
                  />
                </div>

                <div>
                  <label className="text-slate-300 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="official@company.com"
                    className="w-full bg-[#0D1216] border border-[#283440] rounded-lg p-2.5 text-white font-mono focus:outline-none focus:border-[#C9793A]"
                  />
                </div>
              </div>

              {/* Quantity Details */}
              <div>
                <label className="text-slate-300 block mb-1">Product Specifications & Quantity (Reels, Meters, Units, Metric Tons)</label>
                <textarea
                  rows={3}
                  value={formData.quantityDetails}
                  onChange={(e) => setFormData({...formData, quantityDetails: e.target.value})}
                  placeholder="e.g. 5,000 meters of SAFE NYY 4x25mm² power cable, 200 units of LIPER 150W IP66 LED Street Lights..."
                  className="w-full bg-[#0D1216] border border-[#283440] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#C9793A]"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="btn-copper px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg flex items-center space-x-2"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Transmit Official RFQ to Sales Office</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
