
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { MapPin, Navigation, Clock, Star, Users } from 'lucide-react';
import { NearbyAttraction } from '../../types/attraction';

interface AttractionCardProps {
  attraction: NearbyAttraction;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ attraction }) => {
  const { language } = useLanguage();

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
    <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105">
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
  );
};

export default AttractionCard;
