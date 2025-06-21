
import React, { useState } from 'react';
import { AlgarveLocation } from '../types/algarve';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  MapPin, Clock, Euro, Car, ExternalLink, Star, 
  Camera, Wifi, Utensils, Parking, Users, AlertCircle,
  Sun, CloudRain, Thermometer, Wind
} from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";

interface EnhancedLocationDetailProps {
  location: AlgarveLocation;
  isOpen: boolean;
  onClose: () => void;
}

const EnhancedLocationDetail: React.FC<EnhancedLocationDetailProps> = ({ 
  location, 
  isOpen, 
  onClose 
}) => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');

  const facilities = [
    { icon: Parking, label: language === 'nl' ? 'Parkeren' : 'Parking', available: true },
    { icon: Utensils, label: language === 'nl' ? 'Restaurant' : 'Restaurant', available: true },
    { icon: Wifi, label: 'WiFi', available: false },
    { icon: Users, label: language === 'nl' ? 'Gezinsvriendelijk' : 'Family friendly', available: true },
  ];

  const weather = {
    temperature: '24°C',
    condition: language === 'nl' ? 'Zonnig' : 'Sunny',
    wind: '12 km/h',
    humidity: '65%'
  };

  const bestTimeToVisit = {
    months: language === 'nl' ? 'April - Oktober' : 'April - October',
    bestHours: language === 'nl' ? '8:00 - 10:00 of 17:00 - 19:00' : '8:00 - 10:00 or 17:00 - 19:00',
    crowdLevel: language === 'nl' ? 'Laag tot gemiddeld' : 'Low to medium'
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-6xl max-h-[90vh] w-full overflow-hidden">
        <div className="relative h-80">
          <img
            src={location.imageUrl}
            alt={location.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            ×
          </button>
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-4xl font-bold mb-2">{location.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{location.region.replace('-', ' ').toUpperCase()}</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="ml-2">4.8 (127 reviews)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-320px)]">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">
                {language === 'nl' ? 'Overzicht' : 'Overview'}
              </TabsTrigger>
              <TabsTrigger value="practical">
                {language === 'nl' ? 'Praktisch' : 'Practical'}
              </TabsTrigger>
              <TabsTrigger value="tips">
                {language === 'nl' ? 'Lokale Tips' : 'Local Tips'}
              </TabsTrigger>
              <TabsTrigger value="weather">
                {language === 'nl' ? 'Weer & Tijd' : 'Weather & Time'}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">{t('description')}</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {location.description[language]}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">{t('highlights')}</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {location.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Star className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-800">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {language === 'nl' ? 'Voorzieningen' : 'Facilities'}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {facilities.map((facility, index) => {
                    const Icon = facility.icon;
                    return (
                      <div key={index} className={`flex items-center gap-2 p-3 rounded-lg ${
                        facility.available ? 'bg-green-50 text-green-800' : 'bg-gray-50 text-gray-500'
                      }`}>
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{facility.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="practical" className="space-y-6 mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{t('howToGetThere')}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span><strong>{t('travelTime')}:</strong> {location.accessInfo.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Euro className="w-5 h-5 text-green-600" />
                      <span><strong>{language === 'nl' ? 'Kosten' : 'Cost'}:</strong> {location.accessInfo.cost}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Car className="w-5 h-5 text-purple-600 mt-1" />
                      <div>
                        <strong>{language === 'nl' ? 'Vervoersopties' : 'Transport options'}:</strong>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          {location.accessInfo.transportOptions.map((option, index) => (
                            <li key={index} className="text-gray-700">{option}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{t('budgetTips')}</h3>
                  <div className="space-y-3">
                    {location.budgetTips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Euro className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tips" className="space-y-6 mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{t('localTips')}</h3>
                  <div className="space-y-4">
                    {location.localTips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {language === 'nl' ? 'Foto Tips' : 'Photography Tips'}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                      <Camera className="w-5 h-5 text-purple-600 mt-0.5" />
                      <span className="text-gray-800">
                        {language === 'nl' 
                          ? 'Beste licht: vroege ochtend (golden hour) of late middag'
                          : 'Best light: early morning (golden hour) or late afternoon'
                        }
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                      <Camera className="w-5 h-5 text-purple-600 mt-0.5" />
                      <span className="text-gray-800">
                        {language === 'nl' 
                          ? 'Gebruik een polarisatiefilter voor heldere kleuren bij water'
                          : 'Use a polarizing filter for vibrant colors near water'
                        }
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="weather" className="space-y-6 mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {language === 'nl' ? 'Huidige Weersomstandigheden' : 'Current Weather'}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                      <Thermometer className="w-5 h-5 text-yellow-600" />
                      <div>
                        <div className="font-semibold">{weather.temperature}</div>
                        <div className="text-sm text-gray-600">{weather.condition}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Wind className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-semibold">{weather.wind}</div>
                        <div className="text-sm text-gray-600">Wind</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <CloudRain className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-semibold">{weather.humidity}</div>
                        <div className="text-sm text-gray-600">
                          {language === 'nl' ? 'Luchtvochtigheid' : 'Humidity'}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {language === 'nl' ? 'Beste Bezoektijd' : 'Best Time to Visit'}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Sun className="w-5 h-5 text-orange-500" />
                      <span><strong>{language === 'nl' ? 'Beste maanden' : 'Best months'}:</strong> {bestTimeToVisit.months}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <span><strong>{language === 'nl' ? 'Beste uren' : 'Best hours'}:</strong> {bestTimeToVisit.bestHours}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-purple-500" />
                      <span><strong>{language === 'nl' ? 'Drukte niveau' : 'Crowd level'}:</strong> {bestTimeToVisit.crowdLevel}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {location.affiliateLinks && (
            <div className="border-t pt-6 mt-6">
              <h3 className="text-xl font-semibold mb-4">
                {language === 'nl' ? 'Boek je ervaring' : 'Book your experience'}
              </h3>
              <div className="flex flex-wrap gap-3">
                {location.affiliateLinks.accommodation && (
                  <Button 
                    onClick={() => window.open(location.affiliateLinks!.accommodation, '_blank')}
                    size="lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('accommodation')}
                  </Button>
                )}
                {location.affiliateLinks.transport && (
                  <Button 
                    variant="outline"
                    size="lg"
                    onClick={() => window.open(location.affiliateLinks!.transport, '_blank')}
                  >
                    <Car className="w-4 h-4 mr-2" />
                    {t('transport')}
                  </Button>
                )}
                {location.affiliateLinks.activities && (
                  <Button 
                    variant="outline"
                    size="lg"
                    onClick={() => window.open(location.affiliateLinks!.activities, '_blank')}
                  >
                    <Star className="w-4 h-4 mr-2" />
                    {t('activities')}
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnhancedLocationDetail;
