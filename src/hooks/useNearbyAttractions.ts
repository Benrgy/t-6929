
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { NearbyAttraction } from '../types/attraction';

export const useNearbyAttractions = () => {
  const { language } = useLanguage();
  const [attractions, setAttractions] = useState<NearbyAttraction[]>([]);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadNearbyAttractions = (lat: number, lng: number) => {
    setTimeout(() => {
      const mockAttractions: NearbyAttraction[] = [
        {
          id: '1',
          name: 'Ponta da Piedade',
          type: 'attraction',
          distance: 2.3,
          rating: 4.8,
          estimatedTime: '35 min',
          isOpen: true,
          crowdLevel: 'medium',
          description: language === 'nl' ? 'Dramatische kliffen met gouden rotsen' : 'Dramatic cliffs with golden rocks',
          priceLevel: '€'
        },
        {
          id: '2',
          name: 'Restaurante O Camilo',
          type: 'restaurant',
          distance: 1.8,
          rating: 4.6,
          estimatedTime: '25 min',
          isOpen: true,
          crowdLevel: 'low',
          description: language === 'nl' ? 'Verse vis met uitzicht op zee' : 'Fresh fish with sea view',
          priceLevel: '€€'
        },
        {
          id: '3',
          name: 'Praia do Camilo',
          type: 'beach',
          distance: 1.9,
          rating: 4.7,
          estimatedTime: '28 min',
          isOpen: true,
          crowdLevel: 'high',
          description: language === 'nl' ? 'Klein paradijselijk strand tussen rotsen' : 'Small paradise beach between rocks',
          priceLevel: '€'
        },
        {
          id: '4',
          name: 'Alte Dorp',
          type: 'village',
          distance: 45.2,
          rating: 4.9,
          estimatedTime: '1u 15min',
          isOpen: true,
          crowdLevel: 'low',
          description: language === 'nl' ? 'Authentiek bergdorp met waterval' : 'Authentic mountain village with waterfall',
          priceLevel: '€'
        }
      ];
      
      setAttractions(mockAttractions);
      setLoading(false);
    }, 1500);
  };

  const requestLocation = () => {
    setLoading(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLocationEnabled(true);
          loadNearbyAttractions(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.log('Location error:', error);
          setUserLocation({ lat: 37.1028, lng: -8.6681 });
          setLocationEnabled(true);
          loadNearbyAttractions(37.1028, -8.6681);
        }
      );
    } else {
      setUserLocation({ lat: 37.1028, lng: -8.6681 });
      setLocationEnabled(true);
      loadNearbyAttractions(37.1028, -8.6681);
    }
  };

  return {
    attractions,
    userLocation,
    locationEnabled,
    loading,
    requestLocation
  };
};
