
import React, { useState } from 'react';
import { AlgarveLocation } from '../types/algarve';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MapPin, Clock, Euro, Car, ExternalLink, Star } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface LocationCardProps {
  location: AlgarveLocation;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'hidden-villages': return 'bg-green-100 text-green-800';
      case 'beaches-nature': return 'bg-blue-100 text-blue-800';
      case 'food-drink': return 'bg-orange-100 text-orange-800';
      case 'transport': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Card 
        className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={location.imageUrl}
            alt={location.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <Badge className={`absolute top-4 left-4 ${getCategoryColor(location.category)}`}>
            {t(location.category.replace('-', ''))}
          </Badge>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold mb-1">{location.name}</h3>
            <div className="flex items-center gap-2 text-sm opacity-90">
              <MapPin className="w-4 h-4" />
              <span>{location.region.replace('-', ' ').toUpperCase()}</span>
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <p className="text-gray-600 mb-4 line-clamp-2">
            {location.description[language]}
          </p>

          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{location.accessInfo.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Euro className="w-4 h-4" />
              <span>{location.accessInfo.cost}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {location.highlights.slice(0, 2).map((highlight, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {highlight}
              </Badge>
            ))}
            {location.highlights.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{location.highlights.length - 2} meer
              </Badge>
            )}
          </div>

          <Button className="w-full" size="sm">
            {t('readMore')}
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{location.name}</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src={location.imageUrl}
                alt={location.name}
                className="w-full h-full object-cover"
              />
              <Badge className={`absolute top-4 left-4 ${getCategoryColor(location.category)}`}>
                {t(location.category.replace('-', ''))}
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">{t('description')}</h3>
                <p className="text-gray-700 mb-6">{location.description[language]}</p>

                <h3 className="text-lg font-semibold mb-3">{t('highlights')}</h3>
                <div className="space-y-2">
                  {location.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">{t('howToGetThere')}</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="font-medium">{t('travelTime')}: {location.accessInfo.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Euro className="w-4 h-4 text-green-600" />
                    <span className="font-medium">Kosten: {location.accessInfo.cost}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-purple-600" />
                    <span className="font-medium">Vervoer: {location.accessInfo.transportOptions.join(', ')}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-3">{t('localTips')}</h3>
                <div className="space-y-2 mb-6">
                  {location.localTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-3">{t('budgetTips')}</h3>
                <div className="space-y-2">
                  {location.budgetTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Euro className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {location.affiliateLinks && (
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Boek je ervaring</h3>
                <div className="flex flex-wrap gap-3">
                  {location.affiliateLinks.accommodation && (
                    <Button 
                      onClick={() => window.open(location.affiliateLinks!.accommodation, '_blank')}
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t('accommodation')}
                    </Button>
                  )}
                  {location.affiliateLinks.transport && (
                    <Button 
                      variant="outline"
                      onClick={() => window.open(location.affiliateLinks!.transport, '_blank')}
                      className="flex items-center gap-2"
                    >
                      <Car className="w-4 h-4" />
                      {t('transport')}
                    </Button>
                  )}
                  {location.affiliateLinks.activities && (
                    <Button 
                      variant="outline"
                      onClick={() => window.open(location.affiliateLinks!.activities, '_blank')}
                      className="flex items-center gap-2"
                    >
                      <Star className="w-4 h-4" />
                      {t('activities')}
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LocationCard;
