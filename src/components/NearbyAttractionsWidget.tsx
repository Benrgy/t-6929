
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { MapPin, Navigation, Clock, Star, Users } from 'lucide-react';

interface NearbyAttraction {
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

const NearbyAttractionsWidget: React.FC = () => {
  const { language } = useLanguage();
  const [attractions, setAttractions] = useState<NearbyAttraction[]>([]);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

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
          // Fallback to Lagos coordinates for demo
          setUserLocation({ lat: 37.1028, lng: -8.6681 });
          setLocationEnabled(true);
          loadNearbyAttractions(37.1028, -8.6681);
        }
      );
    } else {
      // Fallback for browsers without geolocation
      setUserLocation({ lat: 37.1028, lng: -8.6681 });
      setLocationEnabled(true);
      loadNearbyAttractions(37.1028, -8.6681);
    }
  };

  const loadNearbyAttractions = (lat: number, lng: number) => {
    // Simulate API call with realistic Algarve data
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'restaurant': return '🍽️';
      case 'beach': return '🏖️';
      case 'attraction': return '📸';
      case 'village': return '🏘️';
      default: return '📍';
    }
  };

  const getCrowdColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'high': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCrowdText = (level: string) => {
    switch (level) {
      case 'low': return language === 'nl' ? 'Rustig' : 'Quiet';
      case 'medium': return language === 'nl' ? 'Gemiddeld' : 'Moderate';
      case 'high': return language === 'nl' ? 'Druk' : 'Busy';
      default: return '';
    }
  };

  return (
    <section className="py-12 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            📍 {language === 'nl' ? 'Ontdek Wat Dichtbij Is' : 'Discover What\'s Nearby'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'nl'
              ? 'Gebruik je locatie om de beste plekken in je buurt te vinden. Real-time drukte en openingstijden.'
              : 'Use your location to find the best spots nearby. Real-time crowds and opening hours.'
            }
          </p>
        </div>

        {!locationEnabled ? (
          <div className="text-center mb-8">
            <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-lg">
              <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {language === 'nl' ? 'Locatie Toegang' : 'Location Access'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'nl'
                  ? 'Sta locatie toe om persoonlijke aanbevelingen te krijgen gebaseerd op waar je bent.'
                  : 'Allow location access to get personalized recommendations based on where you are.'
                }
              </p>
              <Button 
                onClick={requestLocation}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3"
              >
                <Navigation className="w-4 h-4 mr-2" />
                {loading 
                  ? (language === 'nl' ? 'Zoeken...' : 'Searching...')
                  : (language === 'nl' ? 'Locatie Inschakelen' : 'Enable Location')
                }
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {attractions.map((attraction) => (
              <Card key={attraction.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getTypeIcon(attraction.type)}</span>
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">{attraction.name}</h3>
                        <p className="text-sm text-gray-600">{attraction.description}</p>
                      </div>
                    </div>
                    <Badge className={getCrowdColor(attraction.crowdLevel)}>
                      <Users className="w-3 h-3 mr-1" />
                      {getCrowdText(attraction.crowdLevel)}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{attraction.distance}km</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{attraction.estimatedTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500" />
                      <span>{attraction.rating}</span>
                    </div>
                    <span className="font-bold text-gray-700">{attraction.priceLevel}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {attraction.isOpen ? (
                        <Badge className="bg-green-100 text-green-700">
                          {language === 'nl' ? '🟢 Open' : '🟢 Open'}
                        </Badge>
                      ) : (
                        <Badge className="bg-red-100 text-red-700">
                          {language === 'nl' ? '🔴 Gesloten' : '🔴 Closed'}
                        </Badge>
                      )}
                    </div>
                    <Button variant="outline" size="sm">
                      <Navigation className="w-3 h-3 mr-1" />
                      {language === 'nl' ? 'Route' : 'Directions'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {locationEnabled && (
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              📡 {language === 'nl' 
                ? 'Locatie: Lagos centrum • Bijgewerkt: Nu • Volgende scan over 5 minuten'
                : 'Location: Lagos center • Updated: Now • Next scan in 5 minutes'
              }
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NearbyAttractionsWidget;
