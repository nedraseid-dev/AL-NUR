import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  FileCheck2, 
  Send, 
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/industrialData';

export const ContactView: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    department: 'procurement',
    productInterest: 'SAFE® Electrical Wires & Power Cables',
    quantity: '500 Reels / 50,000 meters',
    projectLocation: 'Addis Ababa / Sheger City',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 bg-[#0D1216]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-white font-bold text-xs uppercase tracking-widest bg-[#C9793A] border border-[#A85E28] px-4 py-1.5 rounded-full shadow-xs">
          DIRECT PROCUREMENT & CONTACT
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-serif mt-4">
          Get in Touch & Submit Official RFQ
        </h1>
        <p className="text-slate-300 text-sm sm:text-base mt-2">
          Connect with our corporate sales team at Somale Tera or technical engineers at Tatek Industrial Plant.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Information & Addresses (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main HQ & Sales Hub */}
          <div className="clean-card rounded-2xl p-6 space-y-4 bg-[#141A20] border border-[#283440]">
            <div className="flex items-center space-x-3 text-[#D0884A] font-bold text-sm">
              <Building2 className="w-5 h-5" />
              <span>Somale Tera Central Sales Center</span>
            </div>
            <div className="text-xs text-slate-300 space-y-1.5 font-medium border-l-2 border-[#D0884A] pl-3">
              <p className="font-bold text-white">{COMPANY_INFO.salesCenter.name}</p>
              <p>{COMPANY_INFO.salesCenter.floor}, {COMPANY_INFO.salesCenter.houseNo}</p>
              <p>{COMPANY_INFO.salesCenter.city}</p>
            </div>
          </div>

          {/* Tatek Manufacturing Plant */}
          <div className="clean-card rounded-2xl p-6 space-y-4 bg-[#141A20] border border-[#283440]">
            <div className="flex items-center space-x-3 text-white font-bold text-sm">
              <MapPin className="w-5 h-5 text-[#D0884A]" />
              <span>Tatek Industrial Plant (35,000 m²)</span>
            </div>
            <div className="text-xs text-slate-300 space-y-1.5 font-medium border-l-2 border-[#283440] pl-3">
              <p className="font-bold text-white">{COMPANY_INFO.manufacturingPlant.name}</p>
              <p>{COMPANY_INFO.manufacturingPlant.subcity}, {COMPANY_INFO.manufacturingPlant.region}</p>
              <p>{COMPANY_INFO.manufacturingPlant.area}</p>
            </div>
          </div>

          {/* Phones & Emails Directory */}
          <div className="clean-card rounded-2xl p-6 space-y-4 bg-[#141A20] border border-[#283440]">
            <h3 className="font-bold text-white text-sm font-serif">Phone & Email Directory</h3>
            
            <div className="space-y-2 text-xs text-slate-300 font-medium">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#D0884A] shrink-0" />
                <span>+251 11 369 8844 (Corporate Office)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#D0884A] shrink-0" />
                <span>+251 93 003 4330 (Sales & Orders)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#D0884A] shrink-0" />
                <span>+251 91 144 2200 (Export Division)</span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#283440] space-y-2 text-xs text-slate-300 font-medium">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@alnur-group.com" className="hover:text-[#D0884A]">alnurimportexport@gmail.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:procurement@alnur-group.com" className="hover:text-[#D0884A]">procurement@alnur-group.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:export@alnur-group.com" className="hover:text-[#D0884A]">export@alnur-group.com</a>
              </div>
            </div>

            <div className="pt-3 border-t border-[#283440] text-[11px] text-slate-400 flex items-center space-x-2">
              <Clock className="w-4 h-4 text-slate-400 shrink-0" />
              <span>Monday – Saturday: 8:00 AM – 6:00 PM (EAT)</span>
            </div>
          </div>
        </div>

        {/* Interactive RFQ Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-[#141A20] rounded-2xl p-6 sm:p-8 border border-[#283440] shadow-md">
            <div className="flex items-center justify-between border-b border-[#283440] pb-4 mb-6">
              <div>
                <h3 className="text-xl font-bold font-serif text-white">
                  Request Procurement Quotation / RFQ
                </h3>
                <p className="text-xs text-slate-400">
                  Fill out your project requirements to receive a formal quotation with ECAE lab certificates.
                </p>
              </div>
              <FileCheck2 className="w-8 h-8 text-[#D0884A] shrink-0" />
            </div>

            {formSubmitted ? (
              <div className="bg-[#182028] border border-[#283440] rounded-xl p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-white">RFQ Received Successfully!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your RFQ dossier for <strong>{formData.productInterest}</strong> has been logged into our procurement queue. A technical engineer will reach out to <strong>{formData.email}</strong> within 2 business hours with an official quotation.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn-copper px-6 py-2.5 rounded-xl text-xs font-bold"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      placeholder="e.g., Eng. Abel Tesfaye"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1216] border border-[#283440] text-xs font-medium focus:outline-none focus:border-[#D0884A] text-white placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      placeholder="e.g., Sheger Construction PLC"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1216] border border-[#283440] text-xs font-medium focus:outline-none focus:border-[#D0884A] text-white placeholder-slate-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g., procurement@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1216] border border-[#283440] text-xs font-medium focus:outline-none focus:border-[#D0884A] text-white placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+251 91 123 4567"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1216] border border-[#283440] text-xs font-medium focus:outline-none focus:border-[#D0884A] text-white placeholder-slate-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Product Line Interest</label>
                    <select
                      value={formData.productInterest}
                      onChange={(e) => setFormData({...formData, productInterest: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1216] border border-[#283440] text-xs font-medium focus:outline-none focus:border-[#D0884A] text-white"
                    >
                      <option>SAFE® Electrical Wires & Power Cables</option>
                      <option>German LIPER® LED Street & Highbay Lighting</option>
                      <option>Grade-1 Agro Export Commodities (Coffee/Sesame)</option>
                      <option>Custom Cable Extrusion Contract</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Estimated Quantity / Length</label>
                    <input
                      type="text"
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      placeholder="e.g., 50 spools of 2.5mm²"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1216] border border-[#283440] text-xs font-medium focus:outline-none focus:border-[#D0884A] text-white placeholder-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Delivery Project Location</label>
                  <input
                    type="text"
                    value={formData.projectLocation}
                    onChange={(e) => setFormData({...formData, projectLocation: e.target.value})}
                    placeholder="e.g., Bole Subcity Site, Addis Ababa"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1216] border border-[#283440] text-xs font-medium focus:outline-none focus:border-[#D0884A] text-white placeholder-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Project Technical Notes / Specifications</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="Specify wire gauge, voltage requirement, ambient temperature, or site delivery schedule..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1216] border border-[#283440] text-xs font-medium focus:outline-none focus:border-[#D0884A] text-white placeholder-slate-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl btn-copper font-bold text-xs tracking-wide shadow-md flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Submit Formal RFQ Dossier</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
