
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calendar, Clock, MapPin, Users, Bell, Ticket } from 'lucide-react';

interface LiveEvent {
  id: string;
  title: string;
  type: 'festival' | 'market' | 'concert' | 'cultural' | 'sports';
  location: string;
  startTime: string;
  endTime: string;
  isLive: boolean;
  attendees: number;
  price: string;
  description: string;
  isPopular: boolean;
  image: string;
}

const LiveEventsTracker: React.FC = () => {
  const { language } = useLanguage();
  const [events, setEvents] = useState<LiveEvent[]>([]);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    // Simulate real-time events data
    const mockEvents: LiveEvent[] = [
      {
        id: '1',
        title: language === 'nl' ? 'Vismarkt Lagos' : 'Lagos Fish Market',
        type: 'market',
        location: 'Lagos Centrum',
        startTime: '08:00',
        endTime: '14:00',
        isLive: true,
        attendees: 45,
        price: 'Gratis',
        description: language === 'nl' ? 'Dagelijkse vismarkt met de verse vangst van lokale vissers' : 'Daily fish market with fresh catch from local fishermen',
        isPopular: true,
        image: '/lovable-uploads/af70a74d-bb6d-488b-990d-9526e92d4eae.png'
      },
      {
        id: '2',
        title: language === 'nl' ? 'Flamenco Avond' : 'Flamenco Evening',
        type: 'cultural',
        location: 'Tavira',
        startTime: '20:30',
        endTime: '23:00',
        isLive: false,
        attendees: 78,
        price: '€15',
        description: language === 'nl' ? 'Authentieke flamenco voorstelling in historisch centrum' : 'Authentic flamenco performance in historic center',
        isPopular: true,
        image: '/lovable-uploads/2669c291-db3b-4115-a8d9-0003a827de60.png'
      },
      {
        id: '3',
        title: language === 'nl' ? 'Surfles voor Beginners' : 'Beginner Surf Lesson',
        type: 'sports',
        location: 'Sagres',
        startTime: '16:00',
        endTime: '18:00',
        isLive: false,
        attendees: 12,
        price: '€35',
        description: language === 'nl' ? 'Leer surfen op de beste golven van de Algarve' : 'Learn to surf on the best waves of the Algarve',
        isPopular: false,
        image: '/lovable-uploads/ca8e90bd-76e4-4ea6-afba-820b7b457d1e.png'
      },
      {
        id: '4',
        title: language === 'nl' ? 'Keramiek Workshop' : 'Pottery Workshop',
        type: 'cultural',
        location: 'Alte',
        startTime: '14:00',
        endTime: '17:00',
        isLive: true,
        attendees: 8,
        price: '€25',
        description: language === 'nl' ? 'Maak traditionele Portugese keramiek met lokale kunstenaars' : 'Create traditional Portuguese ceramics with local artists',
        isPopular: false,
        image: '/lovable-uploads/5fd20688-6816-43ff-87bc-fb5b01ab43eb.png'
      }
    ];

    setEvents(mockEvents);
  }, [language]);

  const eventTypes = [
    { id: 'all', label: language === 'nl' ? 'Alle Events' : 'All Events', icon: '🎯' },
    { id: 'festival', label: language === 'nl' ? 'Festivals' : 'Festivals', icon: '🎉' },
    { id: 'market', label: language === 'nl' ? 'Markten' : 'Markets', icon: '🛒' },
    { id: 'cultural', label: language === 'nl' ? 'Cultuur' : 'Cultural', icon: '🎭' },
    { id: 'sports', label: language === 'nl' ? 'Sport' : 'Sports', icon: '⚽' }
  ];

  const filteredEvents = selectedType === 'all' 
    ? events 
    : events.filter(event => event.type === selectedType);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'festival': return 'bg-purple-100 text-purple-700';
      case 'market': return 'bg-green-100 text-green-700';
      case 'cultural': return 'bg-blue-100 text-blue-700';
      case 'sports': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const toggleNotification = (eventId: string) => {
    if (notifications.includes(eventId)) {
      setNotifications(notifications.filter(id => id !== eventId));
    } else {
      setNotifications([...notifications, eventId]);
    }
  };

  return (
    <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            🎪 {language === 'nl' ? 'Live Events & Activiteiten' : 'Live Events & Activities'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'nl'
              ? 'Wat gebeurt er nu in de Algarve? Real-time updates van festivals, markten, en lokale evenementen.'
              : 'What\'s happening now in the Algarve? Real-time updates on festivals, markets, and local events.'
            }
          </p>
        </div>

        {/* Event Type Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {eventTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedType === type.id
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-purple-100 shadow-sm'
              }`}
            >
              <span>{type.icon}</span>
              {type.label}
            </button>
          ))}
        </div>

        {/* Live Events Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {event.isLive && (
                    <Badge className="bg-red-500 text-white animate-pulse">
                      🔴 LIVE
                    </Badge>
                  )}
                  {event.isPopular && (
                    <Badge className="bg-yellow-500 text-white">
                      🔥 Populair
                    </Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={getTypeColor(event.type)}>
                    {event.type}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{event.startTime} - {event.endTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} {language === 'nl' ? 'deelnemers' : 'attendees'}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-lg text-purple-600">{event.price}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleNotification(event.id)}
                      className={notifications.includes(event.id) ? 'bg-purple-100' : ''}
                    >
                      <Bell className={`w-4 h-4 mr-1 ${notifications.includes(event.id) ? 'text-purple-600' : ''}`} />
                      {notifications.includes(event.id) 
                        ? (language === 'nl' ? 'Herinnering aan' : 'Reminder on')
                        : (language === 'nl' ? 'Herinner mij' : 'Remind me')
                      }
                    </Button>
                  </div>
                  <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                    <Ticket className="w-4 h-4 mr-2" />
                    {language === 'nl' ? 'Meer info' : 'More info'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Real-time Updates */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            📺 {language === 'nl' ? 'Real-time Updates' : 'Real-time Updates'}
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <span className="text-green-500">🟢</span>
              <span className="text-sm">
                <strong>Vismarkt Lagos</strong> - {language === 'nl' ? '12 nieuwe bezoekers in laatste 15 min' : '12 new visitors in last 15 min'}
              </span>
              <span className="text-xs text-gray-500 ml-auto">2 min geleden</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <span className="text-blue-500">🔵</span>
              <span className="text-sm">
                <strong>Flamenco Avond</strong> - {language === 'nl' ? 'Nog 5 plekken beschikbaar' : 'Only 5 spots remaining'}
              </span>
              <span className="text-xs text-gray-500 ml-auto">8 min geleden</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveEventsTracker;
