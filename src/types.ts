export type Region = 'Asia' | 'Europe' | 'Americas' | 'Middle East & Africa';

export type LanguageCode = 'en' | 'ta' | 'hi';

export interface TravelTips {
  bestTime: string;
  dressCode: string;
  etiquette: string;
  photoTips: string;
}

export interface SampleCostsINR {
  transport: number;
  lodgingPerNight: number;
  foodPerDay: number;
  otherExpenses: number;
}

export interface Destination {
  id: string;
  name: string;
  nativeName?: string;
  country: string;
  city: string;
  region: Region;
  coordinates: {
    lat: number;
    lng: number;
  };
  mapsUrl: string;
  image: string;
  shortDescription: string;
  historicalEra: string;
  architecturalStyle: string;
  unescoStatus: string;
  fullSignificance: string;
  architectureDetails: string;
  travelTips: TravelTips;
  sampleCostsINR: SampleCostsINR;
  relatedDestinationIds: string[];
  curatedGuides: {
    en: string;
    ta: string;
    hi: string;
  };
}

export interface CulturalEvent {
  id: string;
  destinationId: string;
  destinationName: string;
  eventName: string;
  nativeEventName?: string;
  month: number; // 1-12
  monthName: string;
  timingDesc: string;
  description: string;
  culturalSignificance: string;
  visitorTip: string;
}

export interface SavedCostCalculation {
  destinationId?: string;
  destinationName?: string;
  travellers: number;
  days: number;
  transportCost: number;
  lodgingPerNight: number;
  foodPerDay: number;
  otherExpenses: number;
  totalCost: number;
  costPerPerson: number;
  dateCalculated: string;
}
