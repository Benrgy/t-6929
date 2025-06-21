
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { MapPin, Clock, Euro, Users, Camera, Car, Utensils, ExternalLink } from 'lucide-react';
import { AlgarveLocation } from '../types/algarve';

interface EnhancedLocationDetailProps {
  location: AlgarveLocation;
  onClose: () => void;
}

const EnhancedLocationDetail: React.FC<EnhancedLocationDetailProps> = ({ location, onClose }) => {
  const { language } = useLanguage();

  const practicalInfo = [
    {
      icon: Car,
      label: language === 'nl' ? 'Parkeren' : 'Parking',
      info: language === 'nl' ? 'Gratis parkeren beschikbaar' : 'Free parking available'
    },
    {
      icon: Clock,
      label: language === 'nl' ? 'Beste tijd' : 'Best time',
      info: language === 'nl' ? 'Ochtend of late middag' : 'Morning or late afternoon'
    },
    {
      icon: Users,
      label: language === 'nl' ? 'Drukte' : 'Crowds',
      info: language === 'nl' ? 'Rustig, vooral doordeweeks' : 'Quiet, especially weekdays'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={location.imageUrl} 
            alt={location.name}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            ✕
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{location.name}</h1>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <MapPin className="w-4 h-4" />
                <span>{location.region}</span>
              </div>
              <Badge className="mb-4">
                {location.category === 'hidden-villages' && (language === 'nl' ? 'Verborgen Dorp' : 'Hidden Village')}
                {location.category === 'beaches-nature' && (language === 'nl' ? 'Strand & Natuur' : 'Beach & Nature')}
                {location.category === 'food-drink' && (language === 'nl' ? 'Eten & Drinken' : 'Food & Drink')}
                {location.category === 'transport' && (language === 'nl' ? 'Vervoer' : 'Transport')}
              </Badge>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 mb-1">
                <Euro className="w-4 h-4 text-green-600" />
                <span className="font-semibold">{location.accessInfo.cost}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-sm">{location.accessInfo.duration}</span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">{language === 'nl' ? 'Overzicht' : 'Overview'}</TabsTrigger>
              <TabsTrigger value="tips">{language === 'nl' ? 'Tips' : 'Tips'}</TabsTrigger>
              <TabsTrigger value="practical">{language === 'nl' ? 'Praktisch' : 'Practical'}</TabsTrigger>
              <TabsTrigger value="booking">{language === 'nl' ? 'Boeken' : 'Booking'}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                {language === 'nl' ? location.description.nl : location.description.en}
              </p>
              
              <div>
                <h3 className="font-semibold mb-3">{language === 'nl' ? 'Hoogtepunten' : 'Highlights'}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {location.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="tips" className="space-y-4">
              <h3 className="font-semibold">{language === 'nl' ? 'Lokale Tips' : 'Local Tips'}</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Utensils className="w-4 h-4 text-blue-600" />
                    <span className="font-medium">{language === 'nl' ? 'Eten' : 'Food'}</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    {language === 'nl' 
                      ? 'Probeer de lokale tasca voor authentieke gerechten tegen budgetvriendelijke prijzen.'
                      : 'Try the local tasca for authentic dishes at budget-friendly prices.'
                    }
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="font-medium">{language === 'nl' ? 'Timing' : 'Timing'}</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    {language === 'nl' 
                      ? 'Bezoek vroeg in de ochtend of rond zonsondergang voor de beste ervaring.'
                      : 'Visit early morning or around sunset for the best experience.'
                    }
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="practical" className="space-y-4">
              <h3 className="font-semibold">{language === 'nl' ? 'Praktische Informatie' : 'Practical Information'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {practicalInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 text-center">
                      <info.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                      <h4 className="font-medium mb-1">{info.label}</h4>
                      <p className="text-sm text-gray-600">{info.info}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="booking" className="space-y-4">
              <h3 className="font-semibold">{language === 'nl' ? 'Boek je Verblijf' : 'Book Your Stay'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {location.affiliateLinks && (
                  <>
                    {location.affiliateLinks.accommodation && (
                      <Button variant="outline" className="justify-between" asChild>
                        <a href={location.affiliateLinks.accommodation} target="_blank" rel="noopener noreferrer">
                          <span>{language === 'nl' ? 'Accommodatie' : 'Accommodation'}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {location.affiliateLinks.transport && (
                      <Button variant="outline" className="justify-between" asChild>
                        <a href={location.affiliateLinks.transport} target="_blank" rel="noopener noreferrer">
                          <span>{language === 'nl' ? 'Vervoer' : 'Transport'}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {location.affiliateLinks.activities && (
                      <Button variant="outline" className="justify-between" asChild>
                        <a href={location.affiliateLinks.activities} target="_blank" rel="noopener noreferrer">
                          <span>{language === 'nl' ? 'Activiteiten' : 'Activities'}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EnhancedLocationDetail;
