import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Tag, 
  Wrench, 
  ArrowRight, 
  Zap, 
  Sparkles, 
  Factory, 
  Globe2, 
  CheckCircle2, 
  Award, 
  BarChart3, 
  Truck 
} from 'lucide-react';

interface WhatWeSupportSectionProps {
  onSelectTab: (tab: string) => void;
  onOpenRfqModal: () => void;
}

interface DivisionData {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  tabKey: string;
  bgImage: string;
  features: {
    icon: React.ElementType;
    title: string;
    desc: string;
  }[];
}

const DIVISIONS: DivisionData[] = [
  {
    id: 'cables',
    num: '01',
    title: 'SAFE® WIRES & CABLES',
    subtitle: '99.98% Virgin Copper Cable Manufacturing',
    tabKey: 'products',
    bgImage: '/src/assets/images/copper_cable_factory_1785748035959.jpg',
    features: [
      {
        icon: ShieldCheck,
        title: 'Reliable Quality Brand',
        desc: 'ECAE certified #140089 pure electrolytic copper wires'
      },
      {
        icon: Tag,
        title: 'Reasonable Factory Price',
        desc: 'Direct factory supply from our 35,000m² Tatek industrial plant'
      },
      {
        icon: Wrench,
        title: 'Remarkable Engineering',
        desc: 'CES 111:2013 compliant single-core, flexible & NYY power cables'
      }
    ]
  },
  {
    id: 'liper',
    num: '02',
    title: 'GERMAN LIPER® LIGHTING',
    subtitle: 'High-Efficiency Industrial & Street Lighting',
    tabKey: 'products',
    bgImage: '/src/assets/images/liper_lighting_tech_1785748055770.jpg',
    features: [
      {
        icon: Sparkles,
        title: 'German Technology',
        desc: 'Advanced thermal management & optical precision lenses'
      },
      {
        icon: Award,
        title: 'IP66 Weather Immunity',
        desc: 'Heavy-duty street lights, floodlights, and UFO high-bays'
      },
      {
        icon: BarChart3,
        title: '80% Energy Savings',
        desc: 'Long-life commercial LED luminaires with 5-year warranty'
      }
    ]
  },
  {
    id: 'plant',
    num: '03',
    title: 'TATEK INDUSTRIAL MACHINERY',
    subtitle: 'State-of-the-Art Production & Infrastructure',
    tabKey: 'services',
    bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    features: [
      {
        icon: Factory,
        title: 'Modern Heavy Machinery',
        desc: 'Automated wire drawing mills & precision stranding machines'
      },
      {
        icon: Wrench,
        title: 'Rigorous Testing Lab',
        desc: '100% spark testing, resistance check & tensile verification'
      },
      {
        icon: ShieldCheck,
        title: 'Turnkey Contract Supply',
        desc: 'Custom cable specifications for national power & mega-projects'
      }
    ]
  },
  {
    id: 'trade',
    num: '04',
    title: 'AGRO-EXPORT & FOREX SYNERGY',
    subtitle: 'Coffee & Oilseeds Export foreign currency engine',
    tabKey: 'services',
    bgImage: '/src/assets/images/global_trade_hub_1785748074479.jpg',
    features: [
      {
        icon: Globe2,
        title: 'Grade-1 Export Coffee',
        desc: 'Washed Yirgacheffe, Sidama, and premium Specialty beans'
      },
      {
        icon: Truck,
        title: 'Humera White Sesame',
        desc: 'Direct agricultural sourcing for international trade markets'
      },
      {
        icon: CheckCircle2,
        title: 'Forex Trade Synergy',
        desc: 'Generates direct foreign exchange to fund copper raw imports'
      }
    ]
  }
];

export const WhatWeSupportSection: React.FC<WhatWeSupportSectionProps> = ({
  onSelectTab,
  onOpenRfqModal
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="text-[#D0884A] font-black text-xs uppercase tracking-widest bg-[#141A20] border border-[#283440] px-4 py-1.5 rounded-full shadow-xs">
          INTERACTIVE INDUSTRIAL SHOWCASE
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white font-serif mt-3">
          What Al-Nur Industrial Offers
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-2">
          Hover over each division below to reveal detailed machinery capabilities, quality guarantees, and manufacturing support.
        </p>
      </div>

      {/* Desktop & Tablet Interactive 4-Column Layout */}
      <div className="hidden md:flex h-[560px] w-full rounded-3xl overflow-hidden shadow-2xl border border-[#283440] bg-[#141A20]">
        {DIVISIONS.map((division, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={division.id}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => onSelectTab(division.tabKey)}
              className={`relative h-full transition-all duration-500 ease-in-out cursor-pointer overflow-hidden border-r border-white/15 last:border-r-0 ${
                isActive ? 'flex-[3]' : 'flex-1'
              }`}
            >
              {/* Background Image with Dark Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={division.bgImage}
                  alt={division.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isActive ? 'scale-105 filter brightness-90' : 'scale-100 filter brightness-50 blur-[1px]'
                  }`}
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? 'bg-gradient-to-r from-black/90 via-black/80 to-black/60'
                      : 'bg-gradient-to-b from-black/80 via-black/70 to-black/90'
                  }`}
                />
              </div>

              {/* Collapsed / Standard State View */}
              <div
                className={`absolute inset-0 z-10 p-6 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                <span className="text-5xl lg:text-6xl font-black font-serif text-white/90 tracking-tight">
                  {division.num}
                </span>
                <div className="w-0.5 h-12 bg-[#D0884A] my-6 rounded-full" />
                <h3 className="text-center font-serif text-sm lg:text-base font-bold tracking-widest text-white uppercase px-2 leading-tight">
                  {division.title}
                </h3>
              </div>

              {/* Expanded Hovered State View */}
              <div
                className={`relative z-20 h-full p-8 lg:p-10 flex flex-col justify-between transition-opacity duration-500 ${
                  isActive ? 'opacity-100 delay-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                {/* Top Section */}
                <div className="space-y-6">
                  {/* Division Tag & Title */}
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl font-black font-serif text-[#D0884A]">
                        {division.num}
                      </span>
                      <span className="text-[11px] font-mono uppercase font-bold text-slate-300 tracking-wider bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        Division {division.num}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-black font-serif text-white leading-tight">
                      {division.title}
                    </h3>
                    <p className="text-xs text-[#D0884A] font-semibold mt-1">
                      {division.subtitle}
                    </p>

                    {/* Amber Underline Accent */}
                    <div className="w-14 h-1 bg-[#D0884A] rounded-full mt-3" />
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 pt-2">
                    {division.features.map((feature, fIdx) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div
                          key={fIdx}
                          className="flex items-start space-x-3.5 bg-black/40 backdrop-blur-md p-3.5 rounded-xl border border-white/10 hover:border-[#D0884A]/50 transition-colors"
                        >
                          <div className="p-2 rounded-lg bg-[#C9793A]/20 border border-[#C9793A]/40 text-[#D0884A] shrink-0 mt-0.5">
                            <FeatureIcon className="w-5 h-5 text-[#D0884A]" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white leading-snug">
                              {feature.title}
                            </h4>
                            <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectTab(division.tabKey);
                    }}
                    className="inline-flex items-center space-x-3 text-white font-serif font-black text-xs tracking-wider uppercase group hover:text-[#D0884A] transition-colors"
                  >
                    <span>READ MORE</span>
                    <div className="w-8 h-8 rounded-full bg-[#C9793A] text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenRfqModal();
                    }}
                    className="text-[11px] font-bold text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-lg border border-white/15 transition-all"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Card System */}
      <div className="md:hidden space-y-4">
        {DIVISIONS.map((division, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={division.id}
              onClick={() => setActiveIndex(isActive ? -1 : idx)}
              className="relative rounded-2xl overflow-hidden border border-[#283440] bg-[#141A20] shadow-xl transition-all"
            >
              {/* Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src={division.bgImage}
                  alt={division.title}
                  className="w-full h-full object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D1216] via-[#141A20]/90 to-black/80" />
              </div>

              <div className="relative z-10 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-black font-serif text-[#D0884A]">
                      {division.num}
                    </span>
                    <div>
                      <h3 className="text-base font-bold font-serif text-white">
                        {division.title}
                      </h3>
                      <p className="text-[11px] text-slate-300">
                        {division.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center transition-transform ${isActive ? 'rotate-90 bg-[#C9793A]' : ''}`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {isActive && (
                  <div className="mt-5 pt-4 border-t border-white/15 space-y-3">
                    {division.features.map((feature, fIdx) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={fIdx} className="flex items-start space-x-3 bg-black/40 p-3 rounded-xl border border-white/10">
                          <FeatureIcon className="w-4 h-4 text-[#D0884A] shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs font-bold text-white">{feature.title}</div>
                            <div className="text-[11px] text-slate-300">{feature.desc}</div>
                          </div>
                        </div>
                      );
                    })}

                    <div className="pt-2 flex items-center justify-between gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectTab(division.tabKey);
                        }}
                        className="flex-1 py-2 rounded-xl bg-[#C9793A] text-white text-xs font-extrabold text-center shadow-md"
                      >
                        Explore Catalog
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenRfqModal();
                        }}
                        className="py-2 px-4 rounded-xl bg-white/10 text-white text-xs font-bold border border-white/20 text-center"
                      >
                        RFQ
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
