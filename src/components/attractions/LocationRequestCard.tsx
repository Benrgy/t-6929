
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/button';
import { MapPin, Navigation } from 'lucide-react';

interface LocationRequestCardProps {
  onRequestLocation: () => void;
  loading: boolean;
}

const LocationRequestCard: React.FC<LocationRequestCardProps> = ({ onRequestLocation, loading }) => {
  const { language } = useLanguage();

  return (
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
          onClick={onRequestLocation}
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
  );
};

export default LocationRequestCard;
