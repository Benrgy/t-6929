
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Star, Clock, Users, MapPin, ExternalLink, Filter } from 'lucide-react';

interface Experience {
  id: string;
  titleNL: string;
  titleEN: string;
  descriptionNL: string;
  descriptionEN: string;
  location: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  type: string;
  affiliateLink: string;
}

const ExperiencesPage: React.FC = () => {
  const { language } = useLanguage();
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [filteredExperiences, setFilteredExperiences] = useState<Experience[]>([]);

  const experiences: Experience[] = [
    {
      id: '1',
      titleNL: 'Lagos Food Tour met Sofia',
      titleEN: 'Lagos Food Tour with Sofia',
      descriptionNL: 'Ontdek de beste lokale restaurants en markten van Lagos. Proef traditionele pastéis de nata, verse vis en lokale wijnen.',
      descriptionEN: 'Discover the best local restaurants and markets in Lagos. Taste traditional pastéis de nata, fresh fish and local wines.',
      location: 'Lagos',
      duration: '3 uur',
      price: 45,
      rating: 4.9,
      reviews: 127,
      image: '/lovable-uploads/69bb7a55-5d7f-47aa-97d9-dba61283b32e.png',
      type: 'Food Tours',
      affiliateLink: 'https://www.getyourguide.com/lagos-l2631/?utm_source=lokaalgenieten'
    },
    {
      id: '2',
      titleNL: 'Wijnproeverij Tavira Wijngaard',
      titleEN: 'Wine Tasting Tavira Vineyard',
      descriptionNL: 'Bezoek een familiewijnmakerij in de heuvels rond Tavira. Inclusief lunch met lokale specialiteiten.',
      descriptionEN: 'Visit a family winery in the hills around Tavira. Including lunch with local specialties.',
      location: 'Tavira',
      duration: '4 uur',
      price: 75,
      rating: 4.8,
      reviews: 89,
      image: '/lovable-uploads/7cd264e6-e8b5-4596-afba-7ee9212621d5.png',
      type: 'Wijn',
      affiliateLink: 'https://www.viator.com/tours/Tavira/?utm_source=lokaalgenieten'
    },
    {
      id: '3',
      titleNL: 'Kookles Portugese Keuken Albufeira',
      titleEN: 'Portuguese Cooking Class Albufeira',
      descriptionNL: 'Leer traditionele Portugese gerechten maken in een lokale keuken. Recepten om mee naar huis te nemen.',
      descriptionEN: 'Learn to make traditional Portuguese dishes in a local kitchen. Recipes to take home.',
      location: 'Albufeira',
      duration: '2.5 uur',
      price: 55,
      rating: 4.7,
      reviews: 203,
      image: '/lovable-uploads/5e6c44cc-a8c6-4013-8464-49f82efa40fc.png',
      type: 'Koken',
      affiliateLink: 'https://www.getyourguide.com/albufeira-l2617/?utm_source=lokaalgenieten'
    },
    {
      id: '4',
      titleNL: 'Natuurwandeling Sagres Kliffen',
      titleEN: 'Nature Walk Sagres Cliffs',
      descriptionNL: 'Wandel langs de spectaculaire kliffen van Sagres met een lokale gids. Zie wilde bloemen en zeevogels.',
      descriptionEN: 'Walk along the spectacular cliffs of Sagres with a local guide. See wild flowers and seabirds.',
      location: 'Sagres',
      duration: '3.5 uur',
      price: 35,
      rating: 4.6,
      reviews: 156,
      image: '/lovable-uploads/4efa557c-610b-494e-b344-4d12e15b9324.png',
      type: 'Natuur',
      affiliateLink: 'https://www.viator.com/tours/Sagres/?utm_source=lokaalgenieten'
    }
  ];

  const locations = ['all', 'Lagos', 'Albufeira', 'Tavira', 'Sagres'];
  const types = ['all', 'Food Tours', 'Wijn', 'Koken', 'Natuur'];
  const priceRanges = ['all', '€', '€€', '€€€'];

  useEffect(() => {
    let filtered = experiences;

    if (selectedLocation !== 'all') {
      filtered = filtered.filter(exp => exp.location === selectedLocation);
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(exp => exp.type === selectedType);
    }

    if (selectedPrice !== 'all') {
      if (selectedPrice === '€') {
        filtered = filtered.filter(exp => exp.price <= 40);
      } else if (selectedPrice === '€€') {
        filtered = filtered.filter(exp => exp.price > 40 && exp.price <= 70);
      } else if (selectedPrice === '€€€') {
        filtered = filtered.filter(exp => exp.price > 70);
      }
    }

    setFilteredExperiences(filtered);
  }, [selectedLocation, selectedType, selectedPrice]);

  const handleAffiliateClick = (link: string, experienceId: string) => {
    console.log('Experience affiliate click tracked:', experienceId);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            {language === 'nl' ? 'Authentieke Algarve Ervaringen met Locals' : 'Authentic Algarve Experiences with Locals'}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {language === 'nl' ? 'Food tours, wijnproeverijen, kooklessen en meer' : 'Food tours, wine tastings, cooking classes and more'}
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold">
              {language === 'nl' ? 'Filter ervaringen:' : 'Filter experiences:'}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                {language === 'nl' ? 'Locatie:' : 'Location:'}
              </label>
              <select 
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="all">{language === 'nl' ? 'Alle locaties' : 'All locations'}</option>
                {locations.slice(1).map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {language === 'nl' ? 'Type:' : 'Type:'}
              </label>
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="all">{language === 'nl' ? 'Alle types' : 'All types'}</option>
                {types.slice(1).map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {language === 'nl' ? 'Prijs:' : 'Price:'}
              </label>
              <select 
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="all">{language === 'nl' ? 'Alle prijzen' : 'All prices'}</option>
                <option value="€">€ (tot €40)</option>
                <option value="€€">€€ (€40-70)</option>
                <option value="€€€">€€€ (€70+)</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperiences.map((experience) => (
              <Card key={experience.id} className="hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={experience.image} 
                    alt={language === 'nl' ? experience.titleNL : experience.titleEN}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-white text-gray-800">
                    {experience.type}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">{experience.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {language === 'nl' ? experience.titleNL : experience.titleEN}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(experience.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{experience.rating}</span>
                    <span className="text-sm text-gray-500">({experience.reviews} reviews)</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {language === 'nl' ? experience.descriptionNL : experience.descriptionEN}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">{experience.duration}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">€{experience.price}</div>
                      <div className="text-xs text-gray-500">per persoon</div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleAffiliateClick(experience.affiliateLink, experience.id)}
                  >
                    {language === 'nl' ? 'Meer Info & Boeken' : 'More Info & Book'}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencesPage;
