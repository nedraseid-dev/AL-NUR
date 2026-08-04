import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Zap, 
  Globe2, 
  Award, 
  CheckCircle2, 
  Factory, 
  FileCheck2, 
  Truck, 
  ArrowRight
} from 'lucide-react';
import { FOUNDERS_DATA } from '../data/industrialData';

interface AboutViewProps {
  onOpenEcaeModal: () => void;
  onOpenRfqModal: () => void;
  onSelectTab: (tab: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onOpenEcaeModal,
  onOpenRfqModal,
  onSelectTab
}) => {
  return (
    <div className="space-y-16 pb-16 bg-[#0D1216]">
      
      {/* Header Banner */}
      <section className="bg-[#141A20] text-white rounded-3xl mx-4 sm:mx-8 mt-6 p-8 sm:p-14 relative overflow-hidden border border-[#283440] shadow-2xl">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img 
            src="/src/assets/images/copper_cable_factory_1785748035959.jpg" 
            alt="Al-Nur Factory Floor"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#C9793A] text-white px-3.5 py-1 rounded-full text-xs font-mono font-black">
              OFFICIAL COMPANY PROFILE & HISTORY
            </span>
            <span className="bg-[#182028] text-[#D0884A] border border-[#283440] px-3 py-1 rounded-full text-xs font-mono font-bold">
              Est. 2006 • 99.9% Virgin Copper
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-serif leading-tight">
            About Al-Nur Import & Export <br />
            <span className="text-[#D0884A]">Industrial Group PLC</span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-3xl">
            Established in 2006 by four family members, Al-Nur Group has grown from multi-sector merchandise trading and manufacturing into Ethiopia's pioneer manufacturer of ECAE-certified 99.9% virgin copper power cables and German LIPER® lighting distributor.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={onOpenEcaeModal}
              className="px-5 py-2.5 rounded-xl bg-[#182028] border border-[#283440] text-[#D0884A] text-xs font-bold flex items-center space-x-2 hover:bg-[#283440] transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-[#D0884A]" />
              <span>Verify ECAE Certification #140089</span>
            </button>
            <button
              onClick={onOpenRfqModal}
              className="px-5 py-2.5 rounded-xl btn-copper text-xs font-bold flex items-center space-x-2 shadow-md"
            >
              <FileCheck2 className="w-4 h-4 text-white" />
              <span>Request Official Company Profile Dossier</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Company Profile Text */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Profile Card 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#C9793A] text-white px-3.5 py-1 rounded-full text-xs font-black">
              <span>BROCHURE PAGE 2 • COMPANY PROFILE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif leading-snug">
              From Multi-Sector Trading to Sovereign Cable Extrusion
            </h2>

            <div className="prose text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                <strong className="text-white">Al-nur Import & Export Industrial Group Plc</strong> was established in <strong className="text-white">2006 by four members of family</strong>. The company has engaged itself in importing finished goods of different construction materials and readymade merchandise goods, exporting agricultural products, manufacturing industry production of nails and chipboard (chipud), as well as transportation in the service sector.
              </p>
              <p>
                Under Ethiopia's national <strong className="text-white">import substitution scheme</strong>, the company launched its electric wire product line originally named <span className="text-white font-bold font-mono bg-[#182028] border border-[#283440] px-2 py-0.5 rounded">"Al nur Cable"</span>.
              </p>
              <p>
                After years of strategic development, the company imported state-of-the-art extrusion and wire drawing machineries to expand the electric factory, amending its primary brand to <span className="text-white font-bold font-mono bg-[#C9793A] px-2 py-0.5 rounded">"SAFE ELECTRIC WIRE & CABLE"</span>.
              </p>
            </div>

            {/* Sector Tags */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#141A20] border border-[#283440] text-center shadow-xs">
                <Building2 className="w-5 h-5 text-[#D0884A] mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">Construction Import</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#141A20] border border-[#283440] text-center shadow-xs">
                <Globe2 className="w-5 h-5 text-[#D0884A] mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">Agro-Export</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#141A20] border border-[#283440] text-center shadow-xs">
                <Factory className="w-5 h-5 text-[#D0884A] mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">Cable Extrusion</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#141A20] border border-[#283440] text-center shadow-xs">
                <Truck className="w-5 h-5 text-[#D0884A] mx-auto mb-1" />
                <span className="text-xs font-bold text-white block">Transportation</span>
              </div>
            </div>
          </div>

          {/* Side Highlight Card */}
          <div className="lg:col-span-5 bg-[#141A20] text-white p-8 rounded-3xl border border-[#283440] shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#283440] pb-4">
              <span className="text-xs font-mono font-black text-[#D0884A] uppercase tracking-widest">
                Raw Material Standard
              </span>
              <span className="px-3 py-1 rounded-full bg-[#C9793A] text-white text-[11px] font-mono font-black">
                99.9% VIRGIN COPPER
              </span>
            </div>

            <h3 className="text-xl font-bold font-serif text-white">
              Worldwide Raw Material Suppliers
            </h3>

            <p className="text-xs text-slate-200 leading-relaxed">
              To guarantee zero power loss and maximum safety, Al-Nur Group imports primary raw materials exclusively from premier global producers:
            </p>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-[#182028] border border-[#283440] flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#D0884A] text-sm">ZAMEFA</div>
                  <div className="text-[11px] text-slate-300">Zambian Metal Fabricators • Zambia</div>
                </div>
                <span className="text-white font-bold">Copper Wire</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#182028] border border-[#283440] flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#D0884A] text-sm">DUCAB</div>
                  <div className="text-[11px] text-slate-300">Dubai Cable Company • UAE</div>
                </div>
                <span className="text-white font-bold">Copper Rods</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#182028] border border-[#283440] flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#D0884A] text-sm">VIETNAM PVC</div>
                  <div className="text-[11px] text-slate-300">VNC 1401 PVC Compound • Vietnam</div>
                </div>
                <span className="text-white font-bold">Insulation</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-300 italic">
              "We never use recycled or scrap copper. 99.9% electrolytic virgin copper is our mandatory baseline for electrical safety."
            </div>
          </div>
        </div>

        {/* Brochure Page 3 Introduction & Product Specs */}
        <div className="clean-card p-8 sm:p-10 rounded-3xl border border-[#283440] space-y-8 bg-[#141A20]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#283440] pb-6">
            <div>
              <span className="text-xs font-black text-white uppercase tracking-wider bg-[#182028] border border-[#283440] px-3.5 py-1 rounded-full">
                BROCHURE PAGE 3 • TECHNICAL INTRODUCTION & BRANDS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-serif mt-3">
                Low Voltage Power Cable Engineering & Sister Brands
              </h2>
            </div>
            
            <div className="flex items-center space-x-2 font-mono text-xs bg-[#182028] text-[#D0884A] px-4 py-2 rounded-xl border border-[#283440]">
              <Award className="w-4 h-4 text-[#D0884A]" />
              <span>CES & IEC Compliant</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-300 text-sm leading-relaxed">
            <div className="space-y-4">
              <h3 className="font-bold text-white text-base font-serif flex items-center space-x-2">
                <Zap className="w-4 h-4 text-[#D0884A] fill-[#D0884A]" />
                <span>Product Range & Specification Spectrum</span>
              </h3>
              <p>
                Currently, Al-Nur Industrial Group has diversified its product manufacturing range to include:
              </p>
              <ul className="space-y-2 font-medium text-xs text-slate-300">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#D0884A] mr-2 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Single Rigid & Solid Wires:</strong> Ranging from 1.5mm² up to 10mm² conductor diameter.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#D0884A] mr-2 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Flexible & Semi-Flexible Cables:</strong> Ranging from 2×1.5mm² up to 3×300+150mm² heavy stranded multi-core power cable ranges.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#D0884A] mr-2 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Indoor & Outdoor Applications:</strong> Employed in power plants, industrial facilities, infrastructure projects, and residential/commercial distribution networks.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-white text-base font-serif flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-[#D0884A]" />
                <span>Sister Company & Brand Portfolio</span>
              </h3>
              <p>
                Since founding the cable plant in <strong className="text-white">2010</strong>, Al-Nur has continuously expanded product variety to meet growing regional electrical demands.
              </p>
              <div className="p-4 rounded-2xl bg-[#182028] text-slate-200 border border-[#283440] space-y-2 text-xs">
                <div className="font-bold text-[#D0884A] flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D0884A]" />
                  <span>Sister Company Partnership & "Edison Cable" Brand</span>
                </div>
                <p className="text-slate-300">
                  Al-Nur Group has an exclusive agreement to supply high quality wire and cables to sister company <strong className="text-white">Uni mas engineering</strong>, utilizing <strong className="text-[#D0884A]">"Edison cable"</strong> as our second recognized commercial brand alongside <strong className="text-white">SAFE® Electric Wire & Cable</strong>.
                </p>
              </div>

              <div className="pt-2">
                <span className="text-xs font-bold text-white block mb-1">Key Cable Selection Criteria (IEC/CES):</span>
                <div className="flex gap-4 font-mono text-xs">
                  <span className="px-3 py-1 bg-[#182028] text-[#D0884A] rounded-lg border border-[#283440] font-bold">1. Voltage Designation</span>
                  <span className="px-3 py-1 bg-[#182028] text-[#D0884A] rounded-lg border border-[#283440] font-bold">2. Load Factor</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 FOUNDING FAMILY MEMBERS SECTION */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-white font-black text-xs uppercase tracking-widest bg-[#C9793A] border border-[#A85E28] px-4 py-1.5 rounded-full shadow-xs">
              ESTABLISHED IN 2006 BY 4 FAMILY MEMBERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-serif mt-4">
              Meet the Founding Family Directors
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Combining 100+ years of collective experience across Ethiopian manufacturing, international trade, electrical engineering, and corporate operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FOUNDERS_DATA.map((founder, idx) => (
              <div 
                key={idx} 
                className="clean-card p-8 rounded-2xl flex flex-col justify-between hover:border-[#D0884A] transition-all space-y-6 bg-[#141A20] border border-[#283440]"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#0D1216] text-[#D0884A] font-serif font-black text-xl flex items-center justify-center border border-[#283440] shrink-0 shadow-md">
                        {founder.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white font-serif leading-snug">
                          {founder.name}
                        </h3>
                        <p className="text-xs font-bold text-[#D0884A]">
                          {founder.role}
                        </p>
                        <span className="text-[11px] font-mono text-slate-400">
                          {founder.experience}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {founder.bio}
                  </p>

                  {founder.quote && (
                    <div className="bg-[#182028] text-slate-200 p-4 rounded-xl border-l-4 border-[#D0884A] italic text-xs">
                      "{founder.quote}"
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#283440] flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span className="font-semibold text-white">Al-Nur Founding Family Director</span>
                  <span className="text-[#D0884A] font-bold">Sheger City Tatek Leadership</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Callout */}
        <div className="bg-[#141A20] text-white p-8 sm:p-10 rounded-3xl shadow-xl border border-[#283440] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black font-serif text-white">
              Need Bulk Supply or Factory Technical Specifications?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              Contact our sales desk at Somale Tera Market Center or schedule a technical audit at our Tatek Industrial Plant.
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => onSelectTab('contact')}
              className="btn-copper px-6 py-3 rounded-xl font-bold text-xs transition-colors flex items-center space-x-2"
            >
              <span>Contact Direct</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

      </section>
    </div>
  );
};
