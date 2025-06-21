
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Star, MapPin, Users } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const UserTipsSection: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const userTips = [
    {
      id: 1,
      author: 'Maria S.',
      location: 'Tavira',
      tip: language === 'nl' 
        ? 'De beste pastéis de nata vind je bij Pastelaria Ramos, niet bij grote bakkerijen!'
        : 'The best pastéis de nata you\'ll find at Pastelaria Ramos, not at big bakeries!',
      category: 'food-drink',
      likes: 23,
      date: '2 dagen geleden'
    },
    {
      id: 2,
      author: 'João P.',
      location: 'Benagil',
      tip: language === 'nl'
        ? 'Ga vroeg in de ochtend (8u) naar Benagil Cave - veel minder druk en beter licht!'
        : 'Go early morning (8am) to Benagil Cave - much less crowded and better light!',
      category: 'beaches-nature',
      likes: 31,
      date: '5 dagen geleden'
    },
    {
      id: 3,
      author: 'Anna K.',
      location: 'Monchique',
      tip: language === 'nl'
        ? 'Neem de lokale bus 120 naar Monchique - slechts €2,50 en prachtige bergzichten onderweg!'
        : 'Take local bus 120 to Monchique - only €2.50 and beautiful mountain views on the way!',
      category: 'transport',
      likes: 18,
      date: '1 week geleden'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'hidden-villages': return 'bg-green-100 text-green-800';
      case 'beaches-nature': return 'bg-blue-100 text-blue-800';
      case 'food-drink': return 'bg-orange-100 text-orange-800';
      case 'transport': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'food-drink': return language === 'nl' ? 'Eten & Drinken' : 'Food & Drink';
      case 'beaches-nature': return language === 'nl' ? 'Stranden' : 'Beaches';
      case 'transport': return language === 'nl' ? 'Vervoer' : 'Transport';
      default: return category;
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {language === 'nl' ? 'Tips van Reizigers' : 'Traveler Tips'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {language === 'nl' 
              ? 'Echte tips van mensen die de Algarve hebben ontdekt'
              : 'Real tips from people who have discovered the Algarve'
            }
          </p>
          
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="lg">
                {language === 'nl' ? 'Deel jouw tip' : 'Share your tip'}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>
                  {language === 'nl' ? 'Deel jouw geheime tip' : 'Share your secret tip'}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder={language === 'nl' ? 'Jouw naam' : 'Your name'}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="text" 
                  placeholder={language === 'nl' ? 'Locatie (bijv. Tavira)' : 'Location (e.g. Tavira)'}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
                <textarea 
                  placeholder={language === 'nl' ? 'Jouw geheime tip...' : 'Your secret tip...'}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <Button className="w-full" onClick={() => setIsOpen(false)}>
                  {language === 'nl' ? 'Versturen' : 'Submit'}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {userTips.map((tip) => (
            <Card key={tip.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="font-medium text-gray-900">{tip.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{tip.location}</span>
                    </div>
                  </div>
                  <Badge className={getCategoryColor(tip.category)}>
                    {getCategoryName(tip.category)}
                  </Badge>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{tip.tip}"
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{tip.likes} {language === 'nl' ? 'likes' : 'likes'}</span>
                  </div>
                  <span>{tip.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline">
            {language === 'nl' ? 'Bekijk alle tips' : 'View all tips'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserTipsSection;
