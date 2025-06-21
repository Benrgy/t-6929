
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, MapPin, Clock, Euro } from 'lucide-react';

interface Event {
  id: string;
  title: {
    nl: string;
    en: string;
  };
  location: string;
  date: string;
  month: string;
  cost: string;
  category: 'festival' | 'market' | 'cultural' | 'food' | 'nature';
  description: {
    nl: string;
    en: string;
  };
}

const EventsCalendar: React.FC = () => {
  const { language } = useLanguage();
  const [selectedMonth, setSelectedMonth] = useState('all');

  const events: Event[] = [
    {
      id: '1',
      title: {
        nl: 'Festa da Amendoeira',
        en: 'Almond Blossom Festival'
      },
      location: 'Monchique',
      date: '15-28 februari',
      month: 'februari',
      cost: 'Gratis',
      category: 'festival',
      description: {
        nl: 'Vier de amandelbloesem met lokale muziek, dans en traditioneel eten. Vraag bij het gemeentehuis naar de geheime wandelroutes!',
        en: 'Celebrate almond blossoms with local music, dance and traditional food. Ask at city hall for secret hiking routes!'
      }
    },
    {
      id: '2',
      title: {
        nl: 'Markt van Loulé',
        en: 'Loulé Market'
      },
      location: 'Loulé',
      date: 'Elke zaterdag',
      month: 'altijd',
      cost: '€2-15',
      category: 'market',
      description: {
        nl: 'Authentieke markt sinds 1291. Tip: Ga vroeg (8u) voor verse vis en vraag naar "preço de amigo" (vriendenprijzen).',
        en: 'Authentic market since 1291. Tip: Go early (8am) for fresh fish and ask for "preço de amigo" (friend prices).'
      }
    },
    {
      id: '3',
      title: {
        nl: 'Festival do Marisco',
        en: 'Seafood Festival'
      },
      location: 'Olhão',
      date: '10-20 augustus',
      month: 'augustus',
      cost: '€5-12 per gerecht',
      category: 'food',
      description: {
        nl: 'Het beste zeevruchten festival van de Algarve. Geheime tip: Eet bij de kraam van fisherman Manuel - hij spreekt Nederlands!',
        en: 'The best seafood festival in Algarve. Secret tip: Eat at fisherman Manuel\'s stand - he speaks Dutch!'
      }
    },
    {
      id: '4',
      title: {
        nl: 'Flamingo Spotting',
        en: 'Flamingo Spotting'
      },
      location: 'Ria Formosa',
      date: 'September-maart',
      month: 'winter',
      cost: 'Gratis',
      category: 'nature',
      description: {
        nl: 'Beste periode om flamingo\'s te spotten. Ga bij zonsopgang naar de zoutpannen van Tavira. Verrekijker vergeten? Leen er één bij Café Central.',
        en: 'Best period to spot flamingos. Go at sunrise to Tavira salt pans. Forgot binoculars? Borrow one at Café Central.'
      }
    },
    {
      id: '5',
      title: {
        nl: 'Feira da Serra',
        en: 'Mountain Fair'
      },
      location: 'São Brás de Alportel',
      date: '1ste zondag van de maand',
      month: 'maandelijks',
      cost: '€1-8',
      category: 'cultural',
      description: {
        nl: 'Lokale ambachtelijke producten en traditionele muziek. Probeer de medronho van Señor António - zijn geheime recept sinds 1960!',
        en: 'Local crafts and traditional music. Try medronho from Señor António - his secret recipe since 1960!'
      }
    }
  ];

  const months = [
    { value: 'all', label: language === 'nl' ? 'Alle maanden' : 'All months' },
    { value: 'februari', label: language === 'nl' ? 'Februari' : 'February' },
    { value: 'augustus', label: language === 'nl' ? 'Augustus' : 'August' },
    { value: 'winter', label: language === 'nl' ? 'Winter' : 'Winter' },
    { value: 'maandelijks', label: language === 'nl' ? 'Maandelijks' : 'Monthly' },
    { value: 'altijd', label: language === 'nl' ? 'Het hele jaar' : 'Year round' }
  ];

  const filteredEvents = selectedMonth === 'all' 
    ? events 
    : events.filter(event => event.month === selectedMonth);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'festival': return 'bg-purple-100 text-purple-800';
      case 'market': return 'bg-green-100 text-green-800';
      case 'cultural': return 'bg-blue-100 text-blue-800';
      case 'food': return 'bg-orange-100 text-orange-800';
      case 'nature': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl text-green-700">
          <Calendar className="w-6 h-6" />
          {language === 'nl' ? 'Lokale Evenementen & Geheimen' : 'Local Events & Secrets'}
        </CardTitle>
        <p className="text-gray-600">
          {language === 'nl' 
            ? 'Ontdek authentieke evenementen waar locals naartoe gaan'
            : 'Discover authentic events where locals go'
          }
        </p>
      </CardHeader>
      
      <CardContent>
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {months.map((month) => (
              <Button
                key={month.value}
                variant={selectedMonth === month.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedMonth(month.value)}
                className={selectedMonth === month.value 
                  ? "bg-green-600 hover:bg-green-700" 
                  : "hover:bg-green-50 hover:border-green-300"
                }
              >
                {month.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          {filteredEvents.map((event) => (
            <div key={event.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-white">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex flex-col items-center min-w-[60px] p-2 bg-orange-100 rounded-lg">
                      <Clock className="w-4 h-4 text-orange-600 mb-1" />
                      <span className="text-xs font-medium text-orange-600">
                        {event.date}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">
                        {event.title[language]}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Euro className="w-4 h-4" />
                          {event.cost}
                        </div>
                      </div>
                      <Badge className={getCategoryColor(event.category)}>
                        {event.category}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {event.description[language]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>{language === 'nl' ? 'Geen evenementen gevonden voor deze periode' : 'No events found for this period'}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EventsCalendar;
