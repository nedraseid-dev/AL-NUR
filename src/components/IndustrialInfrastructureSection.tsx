import React from 'react';
import { 
  Building2, 
  Cpu, 
  MapPin, 
  ShieldCheck, 
  Factory, 
  Phone, 
  Sliders
} from 'lucide-react';
import { COMPANY_INFO, FAQ_ITEMS } from '../data/industrialData';

interface IndustrialInfrastructureSectionProps {
  onOpenEcaeModal: () => void;
  onOpenRfqModal: () => void;
}

export const IndustrialInfrastructureSection: React.FC<IndustrialInfrastructureSectionProps> = ({
  onOpenEcaeModal,
  onOpenRfqModal
}) => {
  return (
    <section id="plant-infrastructure" className="py-20 bg-[#0D1216] text-slate-100 relative overflow-hidden border-t border-[#283440]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#141A20] border border-[#283440] text-[#D0884A] text-xs font-mono font-bold">
            <Factory className="w-3.5 h-3.5 text-[#C9793A]" />
            <span>TATEK INDUSTRIAL HUB • OROMIA REGION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight">
            35,000 m² Automated Cable <br />
            <span className="text-[#D0884A]">
              Extrusion & Quality Control Lab
            </span>
          </h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            Equipped with European continuous wire drawing lines, dual-extrusion PVC crossheads, non-contact laser diameter gauges, and 3.5kV high-voltage spark testing stations.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-[#141A20] border border-[#283440] rounded-2xl p-6 space-y-3">
            <div className="p-3 rounded-xl bg-[#0D1216] text-[#D0884A] border border-[#283440] w-fit">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-serif">High-Speed Extrusion Lines</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Automated extrusion heads capable of processing up to 800 meters per minute with uniform concentric PVC thickness.
            </p>
          </div>

          <div className="bg-[#141A20] border border-[#283440] rounded-2xl p-6 space-y-3">
            <div className="p-3 rounded-xl bg-[#0D1216] text-emerald-300 border border-[#283440] w-fit">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-serif">Optical & Spark Testing</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every millimeter of SAFE® cable passes through continuous 3.5kV high-voltage spark testers to guarantee 0 dielectric breakdown.
            </p>
          </div>

          <div className="bg-[#141A20] border border-[#283440] rounded-2xl p-6 space-y-3">
            <div className="p-3 rounded-xl bg-[#0D1216] text-[#D0884A] border border-[#283440] w-fit">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-serif">Somale Tera Sales Hub</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Central commercial showroom & immediate dispatch depot located at Somale Tera Market Center, House No. 3, Addis Ababa.
            </p>
          </div>

          <div className="bg-[#141A20] border border-[#283440] rounded-2xl p-6 space-y-3">
            <div className="p-3 rounded-xl bg-[#0D1216] text-purple-300 border border-[#283440] w-fit">
              <Sliders className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-serif">Heavy Logistics Fleet</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Dedicated heavy transport fleet serving national power station projects, private real estate contractors, and export ports.
            </p>
          </div>

        </div>

        {/* Corporate Locations & Contacts Matrix */}
        <div className="bg-[#141A20] border border-[#283440] rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 shadow-2xl">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white font-serif border-b border-[#283440] pb-3 flex items-center justify-between">
              <span>Official Registered Headquarters</span>
              <MapPin className="w-5 h-5 text-[#D0884A]" />
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-3 bg-[#0D1216] p-4 rounded-xl border border-[#283440]">
                <Building2 className="w-5 h-5 text-[#D0884A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm block">Addis Ababa Head Office</strong>
                  <span className="text-slate-200">Nefas Selk Lafto Subcity, Wereda 12, Addis Ababa, Ethiopia</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-[#0D1216] p-4 rounded-xl border border-[#283440]">
                <Factory className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm block">Tatek Cable Extrusion Plant</strong>
                  <span className="text-slate-200">Melkaa Nono Subcity, Sheger City, Oromia Region, Ethiopia</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-[#0D1216] p-4 rounded-xl border border-[#283440]">
                <Building2 className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm block">Somale Tera Commercial Center</strong>
                  <span className="text-slate-200">Ground Floor, House No. 3, Somale Tera Market, Addis Ababa</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white font-serif border-b border-[#283440] pb-3 flex items-center justify-between">
              <span>Direct Enterprise Communications</span>
              <Phone className="w-5 h-5 text-[#D0884A]" />
            </h3>

            <div className="space-y-3 text-xs">
              <div className="bg-[#0D1216] p-4 rounded-xl border border-[#283440] space-y-2">
                <span className="text-slate-400 block font-mono">TELEPHONE LINES</span>
                <div className="flex flex-wrap gap-2">
                  {COMPANY_INFO.contacts.phone.map((ph, idx) => (
                    <a
                      key={idx}
                      href={`tel:${ph.replace(/\s+/g, '')}`}
                      className="px-3 py-1.5 rounded-lg bg-[#182028] border border-[#283440] text-[#D0884A] font-mono font-bold hover:border-[#C9793A] transition-colors"
                    >
                      {ph}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-[#0D1216] p-4 rounded-xl border border-[#283440] space-y-2">
                <span className="text-slate-400 block font-mono">DEPARTMENTAL EMAIL DIRECTORY</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-200 font-mono">
                  <div>General: <a href={`mailto:${COMPANY_INFO.contacts.email}`} className="text-[#D0884A]">{COMPANY_INFO.contacts.email}</a></div>
                  <div>Export: <a href={`mailto:${COMPANY_INFO.contacts.exportDept}`} className="text-emerald-300">{COMPANY_INFO.contacts.exportDept}</a></div>
                  <div>Investors: <a href={`mailto:${COMPANY_INFO.contacts.investorDept}`} className="text-sky-300">{COMPANY_INFO.contacts.investorDept}</a></div>
                  <div>Procurement: <a href={`mailto:${COMPANY_INFO.contacts.procurementDept}`} className="text-purple-300">{COMPANY_INFO.contacts.procurementDept}</a></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Industry FAQs Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white font-serif text-center">
            Frequently Asked Technical & Sovereign Trade Questions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQ_ITEMS.map((faq, idx) => (
              <div key={idx} className="bg-[#141A20] border border-[#283440] rounded-2xl p-6 space-y-2">
                <h4 className="text-sm font-bold text-[#D0884A] font-serif flex items-start space-x-2">
                  <span className="text-[#C9793A] font-mono text-xs">Q.</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed pl-4 border-l border-[#C9793A]/40">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
