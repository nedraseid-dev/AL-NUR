import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Zap, 
  Globe2, 
  Calculator, 
  ChevronLeft,
  ChevronRight,
  Package,
  FileCheck2,
  Award,
  TrendingUp,
  Building2
} from 'lucide-react';

import opticalProjectorLabImg from '../assets/images/optical_projector_lab_1785844268655.jpg';
import caliperInspectionImg from '../assets/images/caliper_wire_inspection_1785844285994.jpg';
import pvcDrumsImg from '../assets/images/pvc_sheathed_drums_1785844302515.jpg';
import solidWiresImg from '../assets/images/solid_wires_stacks_1785844319483.jpg';
import lightbulbChartImg from '../assets/images/lightbulb_growth_chart_1785842718722.jpg';
import shippingHubImg from '../assets/images/global_shipping_hub_1785842763365.jpg';
import factoryImg from '../assets/images/copper_cable_factory_1785748035959.jpg';

interface HeroSectionProps {
  onOpenEcaeModal: () => void;
  onOpenCalculatorModal: () => void;
  onOpenRfqModal: () => void;
  onSelectTab: (tab: string) => void;
}

interface Slide {
  id: string;
  image: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  targetTab: string;
  ctaText: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEcaeModal,
  onOpenCalculatorModal,
  onOpenRfqModal,
  onSelectTab
}) => {
  const slides: Slide[] = [
    {
      id: 'panel-control',
      image: opticalProjectorLabImg,
      titlePrefix: 'Sovereign Industrial ',
      titleHighlight: 'SAFE® Cable Extrusion',
      titleSuffix: ' & Copper Manufacturing',
      description: 'Continuous 99.98% pure copper rod wire drawing and automated high-speed PVC insulation lines supplying low-voltage energy conductors across Ethiopia.',
      targetTab: 'products',
      ctaText: 'Explore Cable Catalog'
    },
    {
      id: 'multimeter-testing',
      image: caliperInspectionImg,
      titlePrefix: 'Precision Quality ',
      titleHighlight: 'Control & Voltage QA',
      titleSuffix: ' Testing Lab',
      description: 'Rigorous 3,500V high-voltage spark testing, micro-ohm conductor resistance evaluations, and flame-retardant jacket tensile strength compliance.',
      targetTab: 'investors',
      ctaText: 'Verify ECAE License'
    },
    {
      id: 'sparking-cable',
      image: pvcDrumsImg,
      titlePrefix: 'Heavy Duty ',
      titleHighlight: 'Low-Voltage Power',
      titleSuffix: ' Cable Engineering',
      description: 'Flame retardant, high grade PVC insulation with maximum thermal dissipation and extreme fault arc endurance.',
      targetTab: 'products',
      ctaText: 'View Power Cables'
    },
    {
      id: 'lightbulb-growth',
      image: lightbulbChartImg,
      titlePrefix: 'German LIPER® ',
      titleHighlight: 'Industrial LED & Solar',
      titleSuffix: ' Urban Luminaires',
      description: 'Heavy-duty UFO high-bay warehouse lighting, IP66 waterproof street lights, and high-lumen solar floodlights engineered for 50,000+ hour lifespans.',
      targetTab: 'products',
      ctaText: 'View LIPER Lighting'
    },
    {
      id: 'warehouse',
      image: solidWiresImg,
      titlePrefix: 'Streamlined ',
      titleHighlight: 'Logistics & Supply',
      titleSuffix: ' Chain Hub',
      description: 'Rapid dispatch and fulfillment centers serving municipal power utilities, commercial builders, and megaproject contractors.',
      targetTab: 'services',
      ctaText: 'Our Distribution Services'
    },
    {
      id: 'shipping-hub',
      image: shippingHubImg,
      titlePrefix: 'Global Agro-Trade ',
      titleHighlight: 'Forex Recycling',
      titleSuffix: ' & Export Synergy',
      description: 'Exporting Ethiopian Grade-1 specialty coffee, sesame, and oilseeds to generate independent foreign currency reserves funding raw copper imports.',
      targetTab: 'services',
      ctaText: 'Discover Trade Model'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);

  const goToNextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Automatic slide loop without video controls
  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 5000); // changes every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentSlide = slides[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 1.04,
      x: dir > 0 ? 80 : -80
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 0.96,
      x: dir < 0 ? 80 : -80,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section 
      className="relative min-h-[75vh] sm:min-h-[82vh] flex flex-col justify-between overflow-hidden bg-[#0D1216] text-white rounded-3xl mx-3 sm:mx-6 lg:mx-8 mt-4 sm:mt-6 shadow-2xl border border-[#283440]"
    >
      {/* Sliding Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.titleHighlight}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-[0.65] contrast-105"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-layered Gradients for Optimum Visual Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1216] via-[#0D1216]/85 to-[#0D1216]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1216] via-transparent to-[#141A20]/60 pointer-events-none" />
      </div>

      {/* Main Slide Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-12 sm:py-20 flex-1 flex flex-col justify-center w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id + '-content'}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl space-y-6"
          >
            {/* Dynamic Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-serif text-white leading-[1.12]">
              {currentSlide.titlePrefix} <br className="hidden sm:inline" />
              <span className="text-[#D0884A]">
                {currentSlide.titleHighlight}
              </span> <br className="hidden sm:inline" />
              {currentSlide.titleSuffix}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-sans leading-relaxed max-w-2xl font-normal drop-shadow-sm">
              {currentSlide.description}
            </p>

            {/* CTA Button Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => {
                  if (currentSlide.id === 'multimeter-testing') {
                    onOpenEcaeModal();
                  } else {
                    onSelectTab(currentSlide.targetTab);
                  }
                }}
                className="btn-copper px-6 py-3.5 rounded-xl font-extrabold text-xs tracking-wider uppercase flex items-center space-x-2.5 shadow-xl shadow-[#C9793A]/20 transition-transform transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Package className="w-4 h-4 text-white" />
                <span>{currentSlide.ctaText}</span>
              </button>

              <button
                onClick={onOpenRfqModal}
                className="bg-white hover:bg-slate-100 text-[#0D1216] px-6 py-3.5 rounded-xl font-bold text-xs transition-all flex items-center space-x-2 shadow-md"
              >
                <FileCheck2 className="w-4 h-4 text-[#0D1216]" />
                <span>Request Official RFQ</span>
              </button>

              <button
                onClick={onOpenCalculatorModal}
                className="bg-[#182028]/90 hover:bg-[#283440] text-slate-200 border border-[#283440] backdrop-blur-md px-5 py-3.5 rounded-xl font-semibold text-xs transition-all flex items-center space-x-2"
              >
                <Calculator className="w-4 h-4 text-[#D0884A]" />
                <span>Cable Drop Tool</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Floating Side Arrow Controls */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#141A20]/75 hover:bg-[#141A20] text-slate-200 hover:text-white border border-[#283440] hover:border-[#D0884A] backdrop-blur-md transition-all shadow-xl active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 text-[#D0884A]" />
        </button>

        <button
          onClick={goToNextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#141A20]/75 hover:bg-[#141A20] text-slate-200 hover:text-white border border-[#283440] hover:border-[#D0884A] backdrop-blur-md transition-all shadow-xl active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 text-[#D0884A]" />
        </button>
      </div>

      {/* Clean Slide Indicators & Key Stats Footer */}
      <div className="relative z-10 w-full bg-[#141A20]/90 backdrop-blur-md border-t border-[#283440] py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-white">
          
          {/* Subtle Slide Dots */}
          <div className="flex items-center space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex 
                    ? 'w-8 bg-[#D0884A]' 
                    : 'w-2 bg-[#283440] hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Core Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-white w-full md:w-auto">
            <div className="flex items-center space-x-2.5">
              <div className="p-1.5 rounded-lg bg-[#C9793A]/20 text-[#D0884A]">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-sm font-black font-serif text-white">99.98%</div>
                <div className="text-[10px] text-slate-300 uppercase font-mono">Virgin Copper</div>
              </div>
            </div>

            <div className="flex items-center space-x-2.5">
              <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-sm font-black font-serif text-emerald-300">ECAE Certified</div>
                <div className="text-[10px] text-slate-300 uppercase font-mono">CES 111:2013</div>
              </div>
            </div>

            <div className="flex items-center space-x-2.5">
              <div className="p-1.5 rounded-lg bg-[#182028] text-[#D0884A]">
                <Building2 className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-sm font-black font-serif text-white">35,000 m²</div>
                <div className="text-[10px] text-slate-300 uppercase font-mono">Tatek Plant</div>
              </div>
            </div>

            <div className="flex items-center space-x-2.5">
              <div className="p-1.5 rounded-lg bg-[#C9793A]/20 text-[#D0884A]">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-sm font-black font-serif text-white">$45M+ USD</div>
                <div className="text-[10px] text-slate-300 uppercase font-mono">Agro Forex</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
