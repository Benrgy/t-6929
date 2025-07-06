
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNearbyAttractions } from '../hooks/useNearbyAttractions';
import LocationRequestCard from './attractions/LocationRequestCard';
import AttractionCard from './attractions/AttractionCard';

const NearbyAttractionsWidget: React.FC = () => {
  const { language } = useLanguage();
  const { attractions, locationEnabled, loading, requestLocation } = useNearbyAttractions();

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
          <LocationRequestCard onRequestLocation={requestLocation} loading={loading} />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {attractions.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
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
