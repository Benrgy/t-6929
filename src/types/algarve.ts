
export type ContentCategory = 
  | "hidden-villages" 
  | "beaches-nature" 
  | "food-drink" 
  | "transport" 
  | "accommodation" 
  | "activities" 
  | "budget-tips";

export type RegionType = "east-algarve" | "central-algarve" | "west-algarve" | "interior";

export interface AlgarveLocation {
  id: string;
  name: string;
  category: ContentCategory;
  region: RegionType;
  description: {
    en: string;
    nl: string;
  };
  imageUrl: string;
  highlights: string[];
  budgetTips: string[];
  affiliateLinks?: {
    accommodation?: string;
    transport?: string;
    activities?: string;
  };
  localTips: string[];
  accessInfo: {
    transportOptions: string[];
    cost: string;
    duration: string;
  };
}

export interface FAQ {
  id: string;
  question: {
    en: string;
    nl: string;
  };
  answer: {
    en: string;
    nl: string;
  };
  category: ContentCategory;
  relatedQuestions: string[];
  affiliateLinks?: {
    accommodation?: string;
    transport?: string;
    activities?: string;
  };
}
