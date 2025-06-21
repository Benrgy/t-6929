
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Star, ThumbsUp, MessageCircle, User, Calendar } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  helpful: number;
  category: string;
  verified: boolean;
}

const ReviewsSection: React.FC = () => {
  const { language } = useLanguage();
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  const reviews: Review[] = [
    {
      id: '1',
      author: 'Sarah van D.',
      location: 'Tavira',
      rating: 5,
      title: language === 'nl' ? 'Prachtig authentiek dorpje!' : 'Beautiful authentic village!',
      content: language === 'nl' 
        ? 'Tavira is echt een parel! Geen massatoerisme, vriendelijke locals en het eilandstrand is fenomenaal. De tips over de camera obscura waren goud waard.'
        : 'Tavira is truly a gem! No mass tourism, friendly locals and the island beach is phenomenal. The tips about the camera obscura were worth gold.',
      date: '3 dagen geleden',
      helpful: 12,
      category: 'hidden-villages',
      verified: true
    },
    {
      id: '2',
      author: 'Mark B.',
      location: 'Benagil Cave',
      rating: 4,
      title: language === 'nl' ? 'Mooi maar wel druk' : 'Beautiful but crowded',
      content: language === 'nl'
        ? 'De grot is absoluut de moeite waard, maar ga inderdaad vroeg zoals jullie aanraden. Om 9 uur was het al behoorlijk druk. Kajaktocht was fantastisch!'
        : 'The cave is definitely worth it, but do go early as you recommend. At 9 AM it was already quite crowded. Kayak tour was fantastic!',
      date: '1 week geleden',
      helpful: 8,
      category: 'beaches-nature',
      verified: true
    },
    {
      id: '3',
      author: 'Lisa M.',
      location: 'Monchique',
      rating: 5,
      title: language === 'nl' ? 'Verborgen bergparadijs' : 'Hidden mountain paradise',
      content: language === 'nl'
        ? 'Wat een ontdekking! De medronho-proeverij was een leuke ervaring en het uitzicht vanaf Fóia is adembenemend. Perfect voor wie van rust houdt.'
        : 'What a discovery! The medronho tasting was a fun experience and the view from Fóia is breathtaking. Perfect for those who love peace and quiet.',
      date: '2 weken geleden',
      helpful: 15,
      category: 'hidden-villages',
      verified: false
    }
  ];

  const renderStars = (rating: number, interactive: boolean = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating 
                ? 'text-yellow-400 fill-yellow-400' 
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={interactive ? () => setSelectedRating(star) : undefined}
          />
        ))}
      </div>
    );
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'hidden-villages': return language === 'nl' ? 'Verborgen Dorpen' : 'Hidden Villages';
      case 'beaches-nature': return language === 'nl' ? 'Stranden & Natuur' : 'Beaches & Nature';
      case 'food-drink': return language === 'nl' ? 'Eten & Drinken' : 'Food & Drink';
      default: return category;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'hidden-villages': return 'bg-green-100 text-green-800';
      case 'beaches-nature': return 'bg-blue-100 text-blue-800';
      case 'food-drink': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {language === 'nl' ? 'Ervaringen van Reizigers' : 'Traveler Experiences'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {language === 'nl' 
              ? 'Lees wat andere reizigers zeggen over hun ontdekkingen in de Algarve'
              : 'Read what other travelers say about their discoveries in the Algarve'
            }
          </p>
          
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                {language === 'nl' ? 'Schrijf een review' : 'Write a review'}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  {language === 'nl' ? 'Deel jouw ervaring' : 'Share your experience'}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'nl' ? 'Jouw beoordeling' : 'Your rating'}
                  </label>
                  {renderStars(selectedRating, true)}
                </div>
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
                <input 
                  type="text" 
                  placeholder={language === 'nl' ? 'Titel van je review' : 'Review title'}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
                <textarea 
                  placeholder={language === 'nl' ? 'Vertel over je ervaring...' : 'Tell about your experience...'}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <Button className="w-full" onClick={() => setIsOpen(false)}>
                  {language === 'nl' ? 'Review plaatsen' : 'Submit review'}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">{review.author}</span>
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs">
                            {language === 'nl' ? 'Geverifieerd' : 'Verified'}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        {renderStars(review.rating)}
                        <span className="text-sm text-gray-500">• {review.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className={getCategoryColor(review.category)}>
                    {getCategoryName(review.category)}
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-lg mb-3">{review.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{review.content}"
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{review.date}</span>
                  </div>
                  <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{review.helpful} {language === 'nl' ? 'nuttig' : 'helpful'}</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            {language === 'nl' ? 'Bekijk alle reviews' : 'View all reviews'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
