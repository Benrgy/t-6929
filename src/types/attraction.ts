
export interface NearbyAttraction {
  id: string;
  name: string;
  type: 'restaurant' | 'beach' | 'attraction' | 'village';
  distance: number;
  rating: number;
  estimatedTime: string;
  isOpen: boolean;
  crowdLevel: 'low' | 'medium' | 'high';
  description: string;
  priceLevel: '€' | '€€' | '€€€';
}
