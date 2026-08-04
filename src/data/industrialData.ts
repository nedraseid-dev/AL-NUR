import { CableProduct, LightingProduct, InvestmentTier, EcaeCertificateData, Founder } from '../types';

export const COMPANY_INFO = {
  name: "AL-NUR IMPORT AND EXPORT INDUSTRIAL GROUP PLC",
  amharicName: "አልኑር ኢምፖርት ኤክስፖርት ኢንዱስትሪያል ግሩፕ ኃ.የተ.የግ.ማ",
  brandNames: ["SAFE Electric Wire & Cable", "LIPER Lighting (Germany)", "Edison Cable"],
  establishmentYear: 2006,
  registrationType: "Sovereign Industrial Group PLC",
  ecaeLicenseNo: "140089",
  founders: "Established by 4 pioneering Ethiopian industrial entrepreneurs",
  headquarters: {
    city: "Addis Ababa",
    subcity: "Nefas Selk Lafto Subcity",
    wereda: "Wereda 12",
    country: "Ethiopia"
  },
  salesCenter: {
    name: "Somale Tera Market Center",
    floor: "Ground Floor",
    houseNo: "House No. 3",
    city: "Addis Ababa, Ethiopia"
  },
  manufacturingPlant: {
    name: "Tatek Industrial Complex",
    subcity: "Melkaa Nono Subcity",
    region: "Sheger City, Oromia Region",
    country: "Ethiopia",
    area: "35,000 m² Automated Processing Facility"
  },
  rawMaterialPartners: [
    { name: "ZAMEFA (Zambian Metal Fabricators)", country: "Zambia", material: "99.9% Electrolytic Virgin Copper Rods" },
    { name: "DUCAB (Dubai Cable Company)", country: "United Arab Emirates", material: "EC Grade Copper Conductor Feedstock" },
    { name: "VNC 1401 Compound Corp", country: "Vietnam", material: "Ultra-Grade Flame Retardant PVC Granules" },
    { name: "Siemens & Maillefer Tech", country: "Germany / Switzerland", material: "High-Precision Continuous Extrusion & Wire Drawing Units" }
  ],
  contacts: {
    phone: ["+251 11 369 8844", "+251 91 120 4589", "+251 91 144 2200"],
    email: "info@alnur-group.com",
    exportDept: "export@alnur-group.com",
    procurementDept: "procurement@alnur-group.com",
    investorDept: "ir@alnur-group.com"
  }
};

export const FOUNDERS_DATA: Founder[] = [
  {
    name: "ATO ABDU MUZYIN",
    role: "Co-Founder & Chairman",
    bio: "With over 30 years of industrial experience in electrical trading and manufacturing, Ato Abdu spearheaded the vision to build local Ethiopian cable manufacturing capability, reducing reliance on imported wiring.",
    quote: "Building local manufacturing excellence is not just a business; it is a duty to protect Ethiopian homes with safe electrical infrastructure.",
    experience: "30+ Years Industry Leadership"
  },
  {
    name: "ATO MOHAMMED MUZYIN",
    role: "Co-Founder & Chief Technical Officer",
    bio: "A senior metallurgical and electrical engineer with specialized training in continuous wire extrusion from Germany and Switzerland, directing precision manufacturing at our 35,000m² Tatek facility.",
    quote: "Zero compromise on copper purity. 99.98% virgin copper is the baseline for safety and minimal power resistance.",
    experience: "25+ Years Electrical Engineering"
  },
  {
    name: "W/RO SENYA MUZYIN",
    role: "Co-Founder & Director of International Trade",
    bio: "Architect of Al-Nur's dual-engine import/export synergy, establishing direct agricultural export channels for Ethiopian coffee and sesame to generate sovereign foreign currency reserves.",
    quote: "Exporting our rich agricultural wealth creates the sustainable foreign exchange needed to import world-class raw materials.",
    experience: "28+ Years Global Trade"
  },
  {
    name: "ATO DAWIT SOLOMON",
    role: "Co-Founder & Director of Operations & Strategy",
    bio: "Directing commercial strategy, corporate governance, and nationwide distribution logistics across Ethiopia, establishing our Somale Tera central sales hub and regional industrial partnerships.",
    quote: "Every wire reel bearing the SAFE® brand represents reliability, ECAE compliance, and Ethiopian craftsmanship.",
    experience: "22+ Years Corporate Strategy"
  }
];


export const CABLE_PRODUCTS: CableProduct[] = [
  {
    id: "h07vr-building-wire",
    name: "SAFE® Single-Core PVC Insulated Rigid & Stranded Wires (H07V-U / H07V-R / H05V-U)",
    standard: "ES IEC 60227-3 / CES 111:2013 / BS 6004",
    voltage: "450 / 750 V",
    conductor: "99.9% Virgin Annealed Copper (Solid Class 1 or Stranded Class 2)",
    insulation: "Special Heat-Resistant Flame Retardant PVC Compound",
    application: "Protected installation inside conduits, surface-mounted trays, internal appliance & distribution panels.",
    sizesAvailable: ["1.5 mm²", "2.5 mm²", "4.0 mm²", "6.0 mm²", "10.0 mm²", "16.0 mm²", "25.0 mm²", "35.0 mm²", "50.0 mm²"],
    featured: true,
    specsTable: [
      { productType: "H07V-R 1.5 mm²", nominalCrossSection: "1.5 mm²", overallDiameter: "3.0 mm", netWeight: "20.5 kg/km", dcResistance: "12.1 Ω/km", currentCapacityInAir: "24 A" },
      { productType: "H07V-R 2.5 mm²", nominalCrossSection: "2.5 mm²", overallDiameter: "3.6 mm", netWeight: "32.0 kg/km", dcResistance: "7.41 Ω/km", currentCapacityInAir: "32 A" },
      { productType: "H07V-R 4.0 mm²", nominalCrossSection: "4.0 mm²", overallDiameter: "4.2 mm", netWeight: "48.5 kg/km", dcResistance: "4.61 Ω/km", currentCapacityInAir: "42 A" },
      { productType: "H07V-R 6.0 mm²", nominalCrossSection: "6.0 mm²", overallDiameter: "4.8 mm", netWeight: "69.0 kg/km", dcResistance: "3.08 Ω/km", currentCapacityInAir: "54 A" },
      { productType: "H07V-R 10.0 mm²", nominalCrossSection: "10.0 mm²", overallDiameter: "6.0 mm", netWeight: "115 kg/km", dcResistance: "1.83 Ω/km", currentCapacityInAir: "75 A" },
      { productType: "H07V-R 16.0 mm²", nominalCrossSection: "16.0 mm²", overallDiameter: "7.2 mm", netWeight: "178 kg/km", dcResistance: "1.15 Ω/km", currentCapacityInAir: "100 A" },
      { productType: "H07V-R 25.0 mm²", nominalCrossSection: "25.0 mm²", overallDiameter: "9.0 mm", netWeight: "275 kg/km", dcResistance: "0.727 Ω/km", currentCapacityInAir: "135 A" }
    ]
  },
  {
    id: "h07vk-flexible-wire",
    name: "SAFE® Fine-Stranded Flexible Copper Wires (H05V-K / H07V-K)",
    standard: "ES IEC 60227-3 / IEC 60228 Class 5",
    voltage: "450 / 750 V",
    conductor: "Class 5 Extra-Flexible High-Purity Copper Conductors",
    insulation: "High-Dielectric Strength Flexible PVC Sheath",
    application: "Switchboards, control panels, heavy power equipment, motor connections, and vibration-prone installations.",
    sizesAvailable: ["0.75 mm²", "1.0 mm²", "1.5 mm²", "2.5 mm²", "4.0 mm²", "6.0 mm²", "10.0 mm²", "16.0 mm²", "25.0 mm²", "35.0 mm²"],
    featured: true,
    specsTable: [
      { productType: "H07V-K 1.5 mm²", nominalCrossSection: "1.5 mm²", overallDiameter: "3.1 mm", netWeight: "21.0 kg/km", dcResistance: "13.3 Ω/km", currentCapacityInAir: "24 A" },
      { productType: "H07V-K 2.5 mm²", nominalCrossSection: "2.5 mm²", overallDiameter: "3.7 mm", netWeight: "33.5 kg/km", dcResistance: "7.98 Ω/km", currentCapacityInAir: "32 A" },
      { productType: "H07V-K 4.0 mm²", nominalCrossSection: "4.0 mm²", overallDiameter: "4.4 mm", netWeight: "50.0 kg/km", dcResistance: "4.95 Ω/km", currentCapacityInAir: "42 A" },
      { productType: "H07V-K 6.0 mm²", nominalCrossSection: "6.0 mm²", overallDiameter: "5.1 mm", netWeight: "72.0 kg/km", dcResistance: "3.30 Ω/km", currentCapacityInAir: "54 A" },
      { productType: "H07V-K 10.0 mm²", nominalCrossSection: "10.0 mm²", overallDiameter: "6.5 mm", netWeight: "120 kg/km", dcResistance: "1.91 Ω/km", currentCapacityInAir: "75 A" },
      { productType: "H07V-K 16.0 mm²", nominalCrossSection: "16.0 mm²", overallDiameter: "8.0 mm", netWeight: "185 kg/km", dcResistance: "1.21 Ω/km", currentCapacityInAir: "100 A" }
    ]
  },
  {
    id: "nyy-power-cable",
    name: "SAFE® Multi-Core Unarmored Low Voltage Power Cable (NYY-J / NYY-O)",
    standard: "ES IEC 60502-1 / VDE 0276-603",
    voltage: "0.6 / 1.0 kV (600 / 1000 V)",
    conductor: "Class 1 Solid or Class 2 Stranded Copper",
    insulation: "Dual-Layer Flame Retardant PVC Sheath (Black Outer UV-Resistant)",
    application: "Direct underground burial, municipal energy distribution, heavy industrial plants, transformer substations.",
    sizesAvailable: ["2x2.5 mm²", "3x4 mm²", "4x6 mm²", "4x16 mm²", "4x25 mm²", "4x50 mm²", "4x95 mm²", "3x150+70 mm²", "3x300+150 mm²"],
    featured: true,
    specsTable: [
      { productType: "NYY 4x16 mm²", nominalCrossSection: "4x16 mm²", overallDiameter: "22.5 mm", netWeight: "1050 kg/km", dcResistance: "1.15 Ω/km", currentCapacityInAir: "98 A", currentCapacityInGround: "128 A" },
      { productType: "NYY 4x25 mm²", nominalCrossSection: "4x25 mm²", overallDiameter: "26.0 mm", netWeight: "1540 kg/km", dcResistance: "0.727 Ω/km", currentCapacityInAir: "128 A", currentCapacityInGround: "162 A" },
      { productType: "NYY 4x50 mm²", nominalCrossSection: "4x50 mm²", overallDiameter: "32.0 mm", netWeight: "2650 kg/km", dcResistance: "0.387 Ω/km", currentCapacityInAir: "192 A", currentCapacityInGround: "235 A" },
      { productType: "NYY 4x95 mm²", nominalCrossSection: "4x95 mm²", overallDiameter: "41.5 mm", netWeight: "4850 kg/km", dcResistance: "0.193 Ω/km", currentCapacityInAir: "298 A", currentCapacityInGround: "340 A" },
      { productType: "NYY 3x150+70", nominalCrossSection: "3x150+70 mm²", overallDiameter: "48.0 mm", netWeight: "6400 kg/km", dcResistance: "0.124 Ω/km", currentCapacityInAir: "390 A", currentCapacityInGround: "420 A" }
    ]
  },
  {
    id: "flexible-sheathed-multicore",
    name: "SAFE® Multi-Core Flexible Sheathed Cord (H05VV-F / NYM-HY)",
    standard: "ES IEC 60227-5 / BS 6500",
    voltage: "300 / 500 V",
    conductor: "Class 5 Stranded Electrolytic Copper",
    insulation: "Flexible PVC Core Insulation + Smooth White/Grey Outer Jacket",
    application: "Medium duty industrial equipment, commercial HVAC units, high-capacity machinery, office complexes.",
    sizesAvailable: ["2x1.5 mm²", "3x1.5 mm²", "3x2.5 mm²", "4x2.5 mm²", "4x4.0 mm²", "5x6.0 mm²"],
    featured: false,
    specsTable: [
      { productType: "H05VV-F 3x1.5 mm²", nominalCrossSection: "3x1.5 mm²", overallDiameter: "8.2 mm", netWeight: "102 kg/km", dcResistance: "13.3 Ω/km", currentCapacityInAir: "16 A" },
      { productType: "H05VV-F 3x2.5 mm²", nominalCrossSection: "3x2.5 mm²", overallDiameter: "9.8 mm", netWeight: "155 kg/km", dcResistance: "7.98 Ω/km", currentCapacityInAir: "25 A" },
      { productType: "H05VV-F 4x4.0 mm²", nominalCrossSection: "4x4.0 mm²", overallDiameter: "12.5 mm", netWeight: "260 kg/km", dcResistance: "4.95 Ω/km", currentCapacityInAir: "34 A" }
    ]
  }
];

export const LIGHTING_PRODUCTS: LightingProduct[] = [
  {
    id: "liper-street-light-ip66",
    model: "LPSTL Series German Tech LED Street Light",
    category: "street",
    power: "50W / 100W / 150W / 200W",
    lumen: "5,130 LM to 20,520 LM (102 LM/W High Efficiency)",
    ipRating: "IP66 Water & Dustproof / IK08 Impact Resistant",
    voltage: "100-240V AC 50/60Hz",
    crai: "CRI > 80, 6500K Daylight / 3000K Warm White",
    lifespan: "50,000 Hours (Die-Cast Aviation Aluminum)",
    material: "High-Purity Die-Cast Aluminum with Anti-Corrosion Thermal Powder Coating",
    description: "Equipped with 6KV surge protection, aerodynamically grooved heat dissipation fins, and anti-glare tempered optical lenses tailored for national highway illumination."
  },
  {
    id: "liper-ufo-highbay",
    model: "LIPER CS-Series LED UFO High Bay Light",
    category: "ufo",
    power: "100W / 150W / 200W",
    lumen: "10,500 LM to 22,000 LM",
    ipRating: "IP66 Heavy Industrial Waterproof",
    voltage: "100-240V AC",
    crai: "CRI > 85",
    lifespan: "50,000 Hours",
    material: "Solid Aviation Aluminum & Toughened Glass Lens",
    description: "Designed for mega warehouse facilities, cable extrusion plants, logistics hangars, and heavy steel manufacturing halls with zero flickering."
  },
  {
    id: "liper-bs-floodlight",
    model: "LIPER BS-Series Heavy Duty Industrial Flood Light",
    category: "flood",
    power: "10W / 30W / 50W / 100W / 200W",
    lumen: "1,000 LM to 20,500 LM",
    ipRating: "IP66 Highway & Sea Port Grade",
    voltage: "85-265V AC",
    crai: "CRI > 80",
    lifespan: "45,000 Hours",
    material: "Reinforced Aluminum Housing & Stainless Steel Screws",
    description: "Ultra-thin profile floodlight with high optical efficacy for perimeter security, mining operations, port crane lighting, and sports arenas."
  },
  {
    id: "liper-step-downlight",
    model: "LIPER Architectural A-Series Step & Down Lights",
    category: "downlight",
    power: "5W / 7W / 12W / 24W / 45W",
    lumen: "450 LM to 4,500 LM",
    ipRating: "IP65 Outdoor Recessed / IP44 Indoor",
    voltage: "220-240V AC",
    crai: "CRI > 90 High Color Rendering Index",
    lifespan: "30,000 Hours",
    material: "Fire-Resistant Polycarbonate & Anodized Aluminum Bezel",
    description: "Commercial building stairwell step illumination, embassy halls, luxury hotels, and modern residential developments."
  }
];

export const ECAE_CERTIFICATE_DATA: EcaeCertificateData = {
  licenseNo: "140089",
  companyName: "AL-NUR IMPORT AND EXPORT INDUSTRIAL GROUP PLC",
  address: "Melkaa Nono Subcity, Sheger City, Oromia Region / Addis Ababa, Ethiopia",
  issueDate: "2021-04-12 (Renewed Annually)",
  validUntil: "2027-12-31",
  standards: [
    "CES 111:2013 (Ethiopian Compulsory Standard for PVC Wires)",
    "ES IEC 60227-3 (Polyvinyl chloride insulated cables rated voltages up to 450/750 V)",
    "ES IEC 60502-1 (Power cables with extruded insulation 1 kV)",
    "IEC 60228 (Conductors of Insulated Cables - Pure Copper)"
  ],
  productScope: "Manufacture & Distribution of Low-Voltage Copper Electrical Wires, Armored & Unarmored Power Cables, Flexible Cords, and Industrial Wiring Accessories.",
  testingParameters: [
    { parameter: "Copper Conductor Purity", requiredStandard: "≥ 99.90% Cu", safeCableAchieved: "99.98% Virgin Oxygen-Free Copper", status: "EXCEEDS STANDARD" },
    { parameter: "Conductor DC Resistance (2.5mm²)", requiredStandard: "≤ 7.41 Ω/km at 20°C", safeCableAchieved: "7.28 Ω/km", status: "PASSED" },
    { parameter: "PVC Insulation Tensile Strength", requiredStandard: "≥ 12.5 N/mm²", safeCableAchieved: "16.8 N/mm²", status: "EXCEEDS STANDARD" },
    { parameter: "Elongation at Break (Insulation)", requiredStandard: "≥ 150%", safeCableAchieved: "210%", status: "EXCEEDS STANDARD" },
    { parameter: "High Voltage Spark Testing (5 min)", requiredStandard: "2,500 V AC - No Breakdown", safeCableAchieved: "3,500 V AC - 0 Dielectric Failure", status: "PASSED" },
    { parameter: "Flame Retardancy (IEC 60332-1)", requiredStandard: "Self-extinguishing < 60 sec", safeCableAchieved: "Self-extinguishing < 8 sec", status: "EXCEEDS STANDARD" }
  ]
};

export const INVESTMENT_TIERS: InvestmentTier[] = [
  {
    title: "National Industrial Infrastructure Bond",
    category: "Cable Plant Capacity Scaling",
    minInvestment: "$250,000 USD / ETB Equivalent",
    targetReturn: "14.8% Projected IRR",
    term: "3 - 5 Years Sovereign Partner Capital",
    impact: "Drives 10,000 Metric Tons / Year Local Cable Output, eliminating foreign exchange drain for energy grid expansion.",
    highlights: [
      "Secured against 35,000 m² industrial real estate and machinery assets",
      "Priority raw material import allocation via national central bank agreements",
      "Direct supplier contract guarantees with Ethiopian Electric Utility (EEU)"
    ]
  },
  {
    title: "Germany LIPER Lighting Local Assembly Facility",
    category: "Joint Venture Assembly & Export",
    minInvestment: "$500,000 USD",
    targetReturn: "18.2% Projected IRR",
    term: "5 Years Strategic Equity Partnership",
    impact: "Establishes East Africa's largest German-certified LED luminaire assembly line in Tatek Industrial Park.",
    highlights: [
      "Exclusive distribution rights across 6 East African Intergovernmental Authority (IGAD) countries",
      "Duty-free import status under Ethiopian Investment Commission incentives",
      "Transfer of high-precision German SMT LED mounting automation"
    ]
  },
  {
    title: "Agricultural Commodity Aggregation & Sovereign Export Fund",
    category: "Foreign Exchange Generation",
    minInvestment: "$100,000 USD",
    targetReturn: "16.5% Annual Cash Yield",
    term: "12 - 24 Months Trade Finance Cycle",
    impact: "Aggregates Grade-1 washed Yirgacheffe coffee, sesame, and pulses for direct export to UAE, EU, and Asian markets.",
    highlights: [
      "Creates natural FX hedge for industrial raw material imports (Copper & PVC)",
      "Contracted farmer cooperative networks in Oromia, Sidama, and Amhara regions",
      "100% letter of credit (LC) back-to-back bank trade guarantee"
    ]
  }
];

export const FAQ_ITEMS = [
  {
    q: "Why is 99.9% Virgin Copper essential for Ethiopian electrical safety?",
    a: "Recycled or impure copper leads to elevated electrical resistance, causing excessive voltage drop, cable overheating, and catastrophic electrical fire hazards in buildings. SAFE® Cables strictly source virgin oxygen-free copper rods from ZAMEFA (Zambia) and DUCAB (Dubai), guaranteeing 99.98% purity and maximum energy efficiency compliant with ECAE Certificate 140089."
  },
  {
    q: "How does Al-Nur Group mitigate foreign exchange (FX) constraints for raw material imports?",
    a: "Al-Nur Group operates a integrated dual-engine import/export business model. By exporting high-value Ethiopian agricultural commodities (Coffee, Sesame, Oilseeds) directly to international buyers, we generate sovereign foreign currency reserves that directly fund our virgin copper rod and flame-retardant PVC granule imports."
  },
  {
    q: "What certifications do SAFE Electric Wire & Cables carry for government procurement?",
    a: "All SAFE® products hold compulsory licensing from the Ethiopian Conformity Assessment Enterprise (ECAE) License No. 140089 under Ethiopian Standards CES 111:2013 and ES IEC 60227/60502. We provide batch-specific optical inspection, high-voltage spark test certificates, and resistance reports for every reel delivered to contractors."
  },
  {
    q: "Can foreign investors participate in Al-Nur's industrial expansion projects?",
    a: "Yes. Al-Nur Group welcomes joint venture partners, institutional debt providers, and private equity investors under the Ethiopian Investment Commission (EIC) framework. Incentives include multi-year tax holidays, duty-free equipment imports, and sovereign infrastructure co-investments."
  }
];
