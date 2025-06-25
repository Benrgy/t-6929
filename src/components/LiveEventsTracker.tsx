
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, MapPin, Users, Clock, Star } from 'lucide-react';

interface LiveEvent {
  id: string;
  title: string;
  type: 'festival' | 'market' | 'cultural' | 'sports' | 'music';
  location: string;
  date: string;
  time: string;
  duration: string;
  attendees: number;
  price: 'free' | 'paid';
  rating: number;
  description: string;
  isLive: boolean;
}

const LiveEventsTracker: React.FC = () => {
  const { language } = useLanguage();
  const [events, setEvents] = useState<LiveEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLiveEvents();
    const interval = setInterval(loadLiveEvents, 300000); // Update every 5 minutes
    return () => clearInterval(interval);
  }, []);

  const loadLiveEvents = () => {
    // Simulate real-time events API
    setTimeout(() => {
      const mockEvents: LiveEvent[] = [
        {
          id: '1',
          title: language === 'nl' ? 'Loulé Markt' : 'Loulé Market',
          type: 'market',
          location: 'Loulé',
          date: new Date().toLocaleDateString(),
          time: '08:00 - 14:00',
          duration: '6 uur',
          attendees: 245,
          price: 'free',
          rating: 4.7,
          description: language === 'nl' ? 'Traditionele markt met lokale producten' : 'Traditional market with local products',
          isLive: true
        },
        {
          id: '2',
          title: language === 'nl' ? 'Fado Avond Tavira' : 'Fado Evening Tavira',
          type: 'cultural',
          location: 'Tavira',
          date: new Date().toLocaleDateString(),
          time: '20:00 - 23:00',
          duration: '3 uur',
          attendees: 89,
          price: 'paid',
          rating: 4.9,
          description: language === 'nl' ? 'Authentieke Fado muziek in historisch centrum' : 'Authentic Fado music in historic center',
          isLive: false
        },
        {
          id: '3',
          title: language === 'nl' ? 'Surfen Lagos' : 'Surfing Lagos',
          type: 'sports',
          location: 'Praia do Amado',
          date: new Date().toLocaleDateString(),
          time: '09:00 - 17:00',
          duration: '8 uur',
          attendees: 156,
          price: 'free',
          rating: 4.5,
          description: language === 'nl' ? 'Perfecte golven voor alle niveaus' : 'Perfect waves for all levels',
          isLive: true
        }
      ];
      setEvents(mockEvents);
      setLoading(false);
    }, 1000);
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'festival': return '🎪';
      case 'market': return '🛒';
      case 'cultural': return '🎭';
      case 'sports': return '⚽';
      case 'music': return '🎵';
      default: return '📅';
    }
  };

  if (loading) {
    return (
      <section className="py-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="animate-pulse text-center">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-6"></div>
            <div className="grid md:grid-cols-3 gap-4">
              {[1,2,3].map(i => (
                <div key={i} className="bg-white rounded-lg h-48"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            🔴 {language === 'nl' ? 'Live Events Vandaag' : 'Live Events Today'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'nl'
              ? 'Real-time updates van wat er nu gebeurt in de Algarve. Mis niets van de lokale actie!'
              : 'Real-time updates of what\'s happening now in the Algarve. Don\'t miss any local action!'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{getEventIcon(event.type)}</span>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                  </div>
                  {event.isLive && (
                    <Badge className="bg-red-100 text-red-700 animate-pulse">
                      🔴 {language === 'nl' ? 'LIVE' : 'LIVE'}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-3 h-3" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-3 h-3" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-3 h-3" />
                    <span>{event.attendees} {language === 'nl' ? 'deelnemers' : 'attendees'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Star className="w-3 h-3 text-yellow-500" />
                    <span>{event.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge className={event.price === 'free' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}>
                    {event.price === 'free' 
                      ? (language === 'nl' ? 'Gratis' : 'Free')
                      : (language === 'nl' ? 'Betaald' : 'Paid')
                    }
                  </Badge>
                  <Button variant="outline" size="sm">
                    <Calendar className="w-3 h-3 mr-1" />
                    {language === 'nl' ? 'Details' : 'Details'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            🔄 {language === 'nl' 
              ? 'Automatisch bijgewerkt elke 5 minuten • Laatste update: '
              : 'Auto-updated every 5 minutes • Last update: '
            }
            <span className="font-mono">{new Date().toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LiveEventsTracker;
