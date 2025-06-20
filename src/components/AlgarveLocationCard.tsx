
import React from 'react';
import { AlgarveLocation } from '../types/algarve';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { MapPin, Clock, Euro, ExternalLink } from 'lucide-react';

interface AlgarveLocationCardProps {
  location: AlgarveLocation;
  onReadMore?: () => void;
}

const AlgarveLocationCard: React.FC<AlgarveLocationCardProps> = ({ location, onReadMore }) => {
  const { language, t } = useLanguage();

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={location.imageUrl} 
          alt={location.name}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-2 right-2 bg-white/90 text-gray-800">
          {t(location.category.replace('-', ''))}
        </Badge>
      </div>
      
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue-600" />
          {location.name}
        </CardTitle>
        <p className="text-gray-600 text-sm">
          {location.description[language]}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {location.accessInfo.duration}
          </div>
          <div className="flex items-center gap-1">
            <Euro className="w-4 h-4" />
            {location.accessInfo.cost}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-sm">{t('highlights')}</h4>
          <div className="flex flex-wrap gap-1">
            {location.highlights.slice(0, 3).map((highlight, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {highlight}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          {location.affiliateLinks?.accommodation && (
            <Button 
              size="sm" 
              className="flex-1"
              onClick={() => window.open(location.affiliateLinks!.accommodation, '_blank')}
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              {t('bookNow')}
            </Button>
          )}
          {onReadMore && (
            <Button size="sm" variant="outline" onClick={onReadMore}>
              {t('readMore')}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AlgarveLocationCard;
