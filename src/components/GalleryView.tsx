import React, { useState } from 'react';
import { 
  Maximize2, 
  X
} from 'lucide-react';

import opticalProjectorLabImg from '../assets/images/optical_projector_lab_1785844268655.jpg';
import caliperInspectionImg from '../assets/images/caliper_wire_inspection_1785844285994.jpg';
import pvcDrumsImg from '../assets/images/pvc_sheathed_drums_1785844302515.jpg';
import solidWiresImg from '../assets/images/solid_wires_stacks_1785844319483.jpg';
import factoryImg from '../assets/images/copper_cable_factory_1785748035959.jpg';
import liperLightingImg from '../assets/images/liper_lighting_tech_1785748055770.jpg';
import globalTradeImg from '../assets/images/global_trade_hub_1785748074479.jpg';
import testingLabImg from '../assets/images/cable_testing_lab_1785841645409.jpg';

export const GalleryView: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'plant' | 'testing' | 'cables' | 'lighting' | 'export'>('all');
  const [activeImage, setActiveImage] = useState<any | null>(null);

  const galleryItems = [
    {
      id: 'optical-projector-testing',
      category: 'testing',
      title: 'Optical Profile Projector Measurement Lab',
      description: 'Senior electrical technician operating an optical profile projector to verify micro-scale conductor dimensions, insulation uniformity, and concentricity standards.',
      image: opticalProjectorLabImg,
      tag: 'ECAE Quality Inspection'
    },
    {
      id: 'caliper-wire-measurement',
      category: 'testing',
      title: 'Digital Caliper Cable Wire QA Inspection',
      description: 'Quality assurance inspector in hard hat taking digital caliper gauge measurements on freshly extruded 100-meter SAFE® wire coils to ensure CES 111:2013 compliance.',
      image: caliperInspectionImg,
      tag: 'Precision QA Measurement'
    },
    {
      id: 'pvc-sheathed-wooden-reels',
      category: 'cables',
      title: 'SAFE Cable PVC Sheathed Wooden Reel Drums',
      description: 'Heavy-duty wooden spool drums wound with high-voltage PVC sheathed power cables staged in outdoor storage for utility dispatch.',
      image: pvcDrumsImg,
      tag: 'Heavy Cable Drums'
    },
    {
      id: 'solid-wires-coil-warehouse',
      category: 'cables',
      title: 'SAFE® Solid Wires 100-Meter Coils Warehouse Stack',
      description: 'Palletized warehouse stacks of color-coded 100m SAFE® building wire coils (Blue, Yellow, Red, Black, Green) ready for national distribution.',
      image: solidWiresImg,
      tag: '100m Coils Inventory'
    },
    {
      id: 'factory-tatek-facility',
      category: 'plant',
      title: 'Tatek Industrial Complex - 35,000 m² Facility',
      description: 'Continuous copper rod wire drawing and automated high-speed PVC extrusion lines in Sheger City, Oromia Region.',
      image: factoryImg,
      tag: 'Manufacturing Plant'
    },
    {
      id: 'lab-spark-testing',
      category: 'testing',
      title: '3,500V Spark Testing & Resistance Lab',
      description: 'ECAE certified lab evaluating high-voltage dielectric breakdown limits and micro-ohm resistance across copper conductors.',
      image: testingLabImg,
      tag: 'Voltage Test Barrier'
    },
    {
      id: 'liper-lighting-facility',
      category: 'lighting',
      title: 'German LIPER® LED Luminaire Showcase',
      description: 'IP66 industrial street lights, UFO high bays, and architectural LED floodlights engineered with German optical lenses.',
      image: liperLightingImg,
      tag: 'LIPER LED Lighting'
    },
    {
      id: 'agro-export-hub',
      category: 'export',
      title: 'Global Agro-Commodities Export & Container Dock',
      description: 'Bags of Grade-1 Yirgacheffe washed coffee and white sesame seeds loaded for international export to generate foreign exchange.',
      image: globalTradeImg,
      tag: 'Agro Export Synergy'
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 bg-[#0D1216]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-white font-bold text-xs uppercase tracking-widest bg-[#C9793A] border border-[#A85E28] px-4 py-1.5 rounded-full shadow-xs">
          INDUSTRIAL PHOTOGRAPHY & QA GALLERY
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-serif mt-4">
          Manufacturing Plant, QA Lab & SAFE® Cable Catalog
        </h1>
        <p className="text-slate-300 text-sm sm:text-base mt-2">
          Inside look at our 35,000 m² Tatek cable facility, optical projector inspection labs, digital caliper quality testing, wooden reel storage, and warehouse inventory.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {[
          { id: 'all', label: 'All Photographs' },
          { id: 'testing', label: 'QA & Lab Testing' },
          { id: 'cables', label: 'SAFE® Cables & Wire Inventory' },
          { id: 'plant', label: 'Tatek Plant Complex' },
          { id: 'lighting', label: 'LIPER LED Lighting' },
          { id: 'export', label: 'Agro Export Dock' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === tab.id
                ? 'bg-[#141A20] text-[#D0884A] font-extrabold shadow-sm border border-[#C9793A]'
                : 'bg-[#182028] text-slate-300 hover:bg-[#141A20] border border-[#283440]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="clean-card rounded-2xl overflow-hidden group cursor-pointer hover:border-[#D0884A] transition-all bg-[#141A20] border border-[#283440] shadow-xl"
            onClick={() => setActiveImage(item)}
          >
            <div className="relative aspect-video overflow-hidden bg-[#0D1216]">
              <img 
                src={item.image} 
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1216]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              <span className="absolute top-4 left-4 bg-[#0D1216]/90 text-[#D0884A] text-[10px] font-mono font-bold px-3 py-1 rounded-full border border-[#283440] backdrop-blur-md">
                {item.tag}
              </span>

              <button className="absolute bottom-4 right-4 p-2.5 rounded-full bg-[#141A20] text-[#D0884A] shadow-md group-hover:scale-110 transition-transform border border-[#283440]">
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white font-serif mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-[#0D1216]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#141A20] rounded-2xl overflow-hidden border border-[#283440] shadow-2xl">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute right-4 top-4 z-10 p-2 rounded-full bg-[#0D1216] text-slate-300 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <img 
              src={activeImage.image} 
              alt={activeImage.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[70vh] object-contain bg-black"
            />

            <div className="p-6 bg-[#141A20] text-white">
              <span className="text-xs font-mono font-bold text-[#D0884A] bg-[#0D1216] px-2.5 py-1 rounded border border-[#283440] mb-2 inline-block">
                {activeImage.tag}
              </span>
              <h3 className="text-xl font-bold font-serif text-white">{activeImage.title}</h3>
              <p className="text-xs text-slate-200 mt-2 leading-relaxed">{activeImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
