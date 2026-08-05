import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Truck, 
  Globe2, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface ServicesViewProps {
  onOpenRfqModal: () => void;
  onOpenEcaeModal: () => void;
  onOpenCalculatorModal: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onOpenRfqModal,
  onOpenEcaeModal,
  onOpenCalculatorModal
}) => {
  const services = [
    {
      icon: <Zap className="w-6 h-6 text-[#D0884A]" />,
      title: "Custom Cable Extrusion & Wire Drawing",
      description: "Our Tatek 35,000m² manufacturing facility operates continuous high-speed drawing machines that extrude 99.98% virgin copper rod feedstock into single-core and multi-core cables with customized flame retardant PVC jacket thickness.",
      highlights: [
        "Single-core building wires (H07V-R, H07V-K)",
        "Multi-core unarmored power cables (NYY-J, NYY-O)",
        "Fine-stranded flexible cords for industrial panels",
        "Custom insulation color coding for high-rise projects"
      ],
      action: onOpenRfqModal,
      actionText: "Request Custom Cable Quote"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "ECAE Quality Assurance & Laboratory Spark Testing",
      description: "Every cable reel manufactured at Tatek undergoes 100% optical pinhole inspection, 3,500V high-voltage spark testing, and micro-ohm resistance verification to guarantee absolute dielectric integrity.",
      highlights: [
        "Batch-specific ECAE lab test certificates included with every shipment",
        "Conductor resistance verified at 20°C ambient room temp",
        "PVC insulation tensile strength & 210% elongation testing",
        "Self-extinguishing fire retardant burn test under 8 seconds"
      ],
      action: onOpenEcaeModal,
      actionText: "Verify ECAE License #140089"
    },
    {
      icon: <Truck className="w-6 h-6 text-[#D0884A]" />,
      title: "Heavy Wooden Reel Packaging & Site Logistics",
      description: "We supply pre-measured cable drums and wooden spools delivered directly to project sites across Addis Ababa, Sheger City, Hawassa, Dire Dawa, Bahir Dar, and regional industrial parks with heavy crane unloading equipment.",
      highlights: [
        "100m sealed coils, 500m wooden drums, 1,000m master reels",
        "UV-resistant shrink wrapping for outdoor site storage",
        "Fast-track delivery from Somale Tera central sales warehouse",
        "On-site cable pulling and spool handling advisory"
      ],
      action: onOpenRfqModal,
      actionText: "Arrange Site Logistics"
    },
    {
      icon: <Globe2 className="w-6 h-6 text-[#D0884A]" />,
      title: "Dual-Engine Foreign Exchange Trade Synergy",
      description: "By exporting premium Ethiopian Grade-1 specialty coffee, sesame, and oilseeds internationally, Al-Nur Group generates independent foreign exchange reserves that directly fund virgin copper and PVC granule import shipments.",
      highlights: [
        "Zero foreign exchange bottlenecks for project contracts",
        "Direct export contracts with buyers in Dubai, Saudi Arabia, EU",
        "Stable raw material supply chain despite global forex market shifts",
        "Full LC bank backing with top Ethiopian commercial banks"
      ],
      action: onOpenRfqModal,
      actionText: "Inquire Agro Trade Synergy"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 bg-[#0D1216]">
      {/* Header Title */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-black text-white font-serif mt-4">
          OUR SERVICE
        </h1>
        <p className="text-slate-300 text-sm sm:text-base mt-2">
          End-to-end industrial cable manufacturing, quality testing, and national logistics backed by 30+ years of Ethiopian industrial leadership.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((srv, idx) => (
          <div key={idx} className="clean-card rounded-2xl p-8 flex flex-col justify-between hover:border-[#D0884A] transition-all bg-[#141A20] border border-[#283440]">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-xl bg-[#0D1216] border border-[#283440]">
                  {srv.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-snug">{srv.title}</h3>
                  <p className="text-xs font-bold text-[#D0884A]">{srv.subtitle}</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {srv.description}
              </p>

              <div className="space-y-2 mb-8 bg-[#182028] p-4 rounded-xl border border-[#283440]">
                {srv.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-center text-xs text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={srv.action}
              className="w-full py-3 rounded-xl bg-[#182028] hover:bg-[#283440] text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors border border-[#283440]"
            >
              <span>{srv.actionText}</span>
              <ArrowRight className="w-4 h-4 text-[#D0884A]" />
            </button>
          </div>
        ))}
      </div>

      {/* Engineering Callout */}
      <div className="bg-[#141A20] text-white p-8 sm:p-10 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-[#283440]">
        <div className="space-y-2 max-w-2xl">
          <h3 className="text-2xl font-extrabold font-serif text-[#D0884A]">
            Need Custom Voltage Drop & Cable Sizing Calculations?
          </h3>
          <p className="text-slate-200 text-xs sm:text-sm font-medium">
            Use our interactive engineering calculator to determine exact copper conductor sizes (mm²), ampacity ratings, and voltage drops according to standard installation conditions in Ethiopian electrical systems.
          </p>
        </div>

        <button
          onClick={onOpenCalculatorModal}
          className="btn-copper px-6 py-3.5 rounded-xl font-bold text-xs shrink-0 shadow-md transition-all flex items-center space-x-2"
        >
          <Zap className="w-4 h-4 text-white" />
          <span>Launch Engineering Calculator</span>
        </button>
      </div>
    </div>
  );
};
