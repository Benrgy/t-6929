
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { 
  MapPin, 
  Clock, 
  Euro, 
  Car, 
  ExternalLink, 
  Star, 
  Camera,
  Users,
  MessageSquare,
  Heart
} from 'lucide-react';

interface VillageData {
  name: string;
  region: string;
  description: { nl: string; en: string };
  mainImage: string;
  gallery: string[];
  localSecrets: string[];
  budgetTips: string[];
  practicalInfo: {
    parking: string;
    transport: string;
    bestTime: string;
  };
  accommodations: Array<{
    name: string;
    price: string;
    description: string;
    link?: string;
  }>;
  restaurants: Array<{
    name: string;
    specialty: string;
    price: string;
  }>;
  userReviews: Array<{
    name: string;
    city: string;
    review: string;
    rating: number;
  }>;
}

interface VillageDetailPageProps {
  villageData: VillageData;
}

const VillageDetailPage: React.FC<VillageDetailPageProps> = ({ villageData }) => {
  const { language } = useLanguage();
  const [userTip, setUserTip] = useState('');
  const [userName, setUserName] = useState('');
  const [userCity, setUserCity] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleSubmitTip = () => {
    // This would normally send to a backend
    console.log('New tip submitted:', { userName, userCity, userTip });
    alert(language === 'nl' ? 'Bedankt voor je tip! We nemen hem mee.' : 'Thanks for your tip! We\'ll include it.');
    setUserTip('');
    setUserName('');
    setUserCity('');
    setShowReviewForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={villageData.mainImage}
          alt={villageData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{villageData.name}</h1>
          <div className="flex items-center gap-2 text-lg opacity-90">
            <MapPin className="w-5 h-5" />
            <span>{villageData.region}</span>
          </div>
        </div>
        <Badge className="absolute top-8 right-8 bg-green-600 text-white px-4 py-2 text-lg">
          {language === 'nl' ? '🏆 Local Aanrader' : '🏆 Local Recommendation'}
        </Badge>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  {language === 'nl' ? 'Waarom zo bijzonder?' : 'Why so special?'}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {villageData.description[language]}
                </p>
              </CardContent>
            </Card>

            {/* Local Secrets */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-500" />
                  {language === 'nl' ? 'Lokale Geheimen' : 'Local Secrets'}
                </h2>
                <div className="space-y-4">
                  {villageData.localSecrets.map((secret, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0" />
                      <p className="text-gray-700">{secret}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Budget Tips */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  <Euro className="w-6 h-6 text-green-600" />
                  {language === 'nl' ? 'Budgettips' : 'Budget Tips'}
                </h2>
                <div className="space-y-4">
                  {villageData.budgetTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                      <Euro className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Photo Gallery */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  <Camera className="w-6 h-6 text-blue-500" />
                  {language === 'nl' ? 'Foto-impressie' : 'Photo Gallery'}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {villageData.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${villageData.name} ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* User Reviews */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  <Users className="w-6 h-6 text-purple-500" />
                  {language === 'nl' ? 'Ervaringen van Bezoekers' : 'Visitor Experiences'}
                </h2>
                <div className="space-y-6">
                  {villageData.userReviews.map((review, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6 py-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="font-semibold">{review.name}</span>
                        <span className="text-gray-500">uit {review.city}</span>
                      </div>
                      <p className="text-gray-700 italic">"{review.review}"</p>
                    </div>
                  ))}
                </div>
                
                {/* Add Review Form */}
                <div className="mt-8 pt-6 border-t">
                  {!showReviewForm ? (
                    <Button 
                      onClick={() => setShowReviewForm(true)}
                      variant="outline"
                      className="w-full"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      {language === 'nl' ? 'Deel jouw ervaring' : 'Share your experience'}
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">
                        {language === 'nl' ? 'Deel jouw tip of ervaring:' : 'Share your tip or experience:'}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          placeholder={language === 'nl' ? 'Je naam' : 'Your name'}
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                        />
                        <Input
                          placeholder={language === 'nl' ? 'Je woonplaats' : 'Your city'}
                          value={userCity}
                          onChange={(e) => setUserCity(e.target.value)}
                        />
                      </div>
                      <Textarea
                        placeholder={language === 'nl' ? 'Wat vond je bijzonder aan dit dorp? Heb je een geheime tip?' : 'What did you find special about this village? Do you have a secret tip?'}
                        value={userTip}
                        onChange={(e) => setUserTip(e.target.value)}
                        rows={4}
                      />
                      <div className="flex gap-3">
                        <Button onClick={handleSubmitTip} className="bg-green-600 hover:bg-green-700">
                          {language === 'nl' ? 'Verstuur tip' : 'Submit tip'}
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => setShowReviewForm(false)}
                        >
                          {language === 'nl' ? 'Annuleren' : 'Cancel'}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Practical Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {language === 'nl' ? 'Praktische Info' : 'Practical Info'}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-blue-600" />
                    <span className="font-medium">Parkeren:</span>
                    <span className="text-gray-600">{villageData.practicalInfo.parking}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="font-medium">Beste tijd:</span>
                    <span className="text-gray-600">{villageData.practicalInfo.bestTime}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-purple-600 mt-0.5" />
                    <div>
                      <span className="font-medium">Vervoer:</span>
                      <p className="text-gray-600 text-xs mt-1">{villageData.practicalInfo.transport}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accommodations */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {language === 'nl' ? 'Overnachten' : 'Accommodation'}
                </h3>
                <div className="space-y-4">
                  {villageData.accommodations.map((acc, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{acc.name}</h4>
                        <span className="text-green-600 font-bold">{acc.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{acc.description}</p>
                      {acc.link && (
                        <Button 
                          size="sm"
                          onClick={() => window.open(acc.link, '_blank')}
                          className="w-full"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          {language === 'nl' ? 'Bekijk beschikbaarheid' : 'Check availability'}
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Restaurants */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {language === 'nl' ? 'Lokaal eten' : 'Local Food'}
                </h3>
                <div className="space-y-3">
                  {villageData.restaurants.map((restaurant, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <div>
                        <h4 className="font-medium">{restaurant.name}</h4>
                        <p className="text-gray-600 text-sm">{restaurant.specialty}</p>
                      </div>
                      <span className="text-green-600 font-semibold">{restaurant.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600"
                onClick={() => window.open('https://airbnb.com/algarve', '_blank')}
              >
                <Heart className="w-4 h-4 mr-2" />
                {language === 'nl' ? 'Boek je verblijf' : 'Book your stay'}
              </Button>
              <Button 
                variant="outline"
                className="w-full"
                onClick={() => window.open('https://rentalcars.com/algarve', '_blank')}
              >
                <Car className="w-4 h-4 mr-2" />
                {language === 'nl' ? 'Huur een auto' : 'Rent a car'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillageDetailPage;
