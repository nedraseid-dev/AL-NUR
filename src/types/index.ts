export type DivisionType = 'safe-cable' | 'liper-lighting' | 'import-raw' | 'export-commodities';

export interface CableProduct {
  id: string;
  name: string;
  standard: string;
  voltage: string;
  conductor: string;
  insulation: string;
  application: string;
  sizesAvailable: string[];
  specsTable: {
    productType: string;
    nominalCrossSection: string; // mm²
    overallDiameter: string; // mm
    netWeight: string; // kg/km
    dcResistance: string; // Ω/km at 20°C
    currentCapacityInAir: string; // A
    currentCapacityInGround?: string; // A
  }[];
  featured: boolean;
  image?: string;
}

export interface LightingProduct {
  id: string;
  model: string;
  category: 'street' | 'ufo' | 'flood' | 'downlight' | 'track' | 'tubes';
  power: string; // e.g., 50W-200W
  lumen: string; // e.g., 5130-20520 LM
  ipRating: string; // e.g., IP66, IP65, IP44
  voltage: string;
  crai: string;
  lifespan: string;
  material: string;
  description: string;
  image?: string;
}

export interface InvestmentTier {
  title: string;
  category: string;
  minInvestment: string;
  targetReturn: string;
  term: string;
  impact: string;
  highlights: string[];
}

export interface EcaeCertificateData {
  licenseNo: string;
  companyName: string;
  address: string;
  issueDate: string;
  validUntil: string;
  standards: string[];
  productScope: string;
  testingParameters: {
    parameter: string;
    requiredStandard: string;
    safeCableAchieved: string;
    status: 'PASSED' | 'EXCEEDS STANDARD';
  }[];
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  quote?: string;
  experience: string;
  image?: string;
}
