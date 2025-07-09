import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { useAnalytics } from '../hooks/useAnalytics';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Plane, Home, Car, MapPin, Star, Users, Calendar, Euro, ExternalLink, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCard {
  id: string;
  titleNL: string;
  titleEN: string;
  descriptionNL: string;
  descriptionEN: string;
  infoNL: string;
  infoEN: string;
  ctaNL: string;
  ctaEN: string;
  icon: React.ReactNode;
  image: string;
  affiliateLink?: string;
  internalLink?: string;
  secondaryButtonNL?: string;
  secondaryButtonEN?: string;
  secondaryLink?: string;
}

const AlgarveHomepage: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [currentDate, setCurrentDate] = useState('');
  const [emailSignup, setEmailSignup] = useState('');
  
  // Initialize SEO and Analytics
  const { updateSEO } = useSEO();
  const { trackEvent, trackConversion } = useAnalytics();

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString(language === 'nl' ? 'nl-NL' : 'en-GB'));
  }, [language]);

  const serviceCards: ServiceCard[] = [
    {
      id: 'flights',
      titleNL: 'Vliegtickets naar de Algarve',
      titleEN: 'Flights to Algarve',
      descriptionNL: 'Vergelijk prijzen van Transavia, TAP, Ryanair en meer. Actuele prijzen en eerlijke vergelijking.',
      descriptionEN: 'Compare prices from Transavia, TAP, Ryanair and more. Current prices and honest comparison.',
      infoNL: 'Directe vluchten vanaf Amsterdam, Rotterdam, Eindhoven',
      infoEN: 'Direct flights from Amsterdam, Rotterdam, Eindhoven',
      ctaNL: 'Vergelijk Vluchten →',
      ctaEN: 'Compare Flights →',
      icon: <Plane className="w-8 h-8 text-blue-600" />,
      image: '/lovable-uploads/18170e0a-a211-46c5-97e6-3a78c27402e0.png',
      internalLink: '/vluchten'
    },
    {
      id: 'experiences',
      titleNL: 'Authentieke Lokale Ervaringen',
      titleEN: 'Authentic Local Experiences',
      descriptionNL: 'Echte beoordelingen van Nederlandse reizigers. Food tours, markten en culturele activiteiten.',
      descriptionEN: 'Real reviews from Dutch travelers. Food tours, markets and cultural activities.',
      infoNL: 'Prijzen variëren per seizoen',
      infoEN: 'Prices vary per season',
      ctaNL: 'Bekijk Ervaringen →',
      ctaEN: 'View Experiences →',
      icon: <Users className="w-8 h-8 text-orange-600" />,
      image: '/lovable-uploads/69bb7a55-5d7f-47aa-97d9-dba61283b32e.png',
      internalLink: '/ervaringen'
    },
    {
      id: 'accommodation',
      titleNL: 'Accommodaties Vergelijken',
      titleEN: 'Compare Accommodations',
      descriptionNL: 'Vergelijk hotels, appartementen en vakantiehuizen. Van Booking.com, Airbnb en lokale aanbieders.',
      descriptionEN: 'Compare hotels, apartments and vacation rentals. From Booking.com, Airbnb and local providers.',
      infoNL: '✓ Lees ervaringen van Nederlandse gasten',
      infoEN: '✓ Read experiences from Dutch guests',
      ctaNL: 'Booking.com →',
      ctaEN: 'Booking.com →',
      icon: <Home className="w-8 h-8 text-green-600" />,
      image: '/lovable-uploads/aa068899-7e0b-4ae3-b341-dd6487162cbe.png',
      affiliateLink: 'https://www.booking.com/searchresults.html?ss=Algarve&aid=YOUR_BOOKING_AFFILIATE_ID',
      secondaryButtonNL: 'Airbnb →',
      secondaryButtonEN: 'Airbnb →',
      secondaryLink: 'https://www.airbnb.com/c/YOUR_REFERRAL_CODE?currency=EUR&s=67'
    },
    {
      id: 'car-rental',
      titleNL: 'Autoverhuur Vergelijking',
      titleEN: 'Car Rental Comparison',
      descriptionNL: 'Eerlijke vergelijking van autoverhuurders. Let op: check altijd de kleine lettertjes!',
      descriptionEN: 'Honest comparison of car rental companies. Note: always check the fine print!',
      infoNL: 'Sunny Cars, RentalCars en lokale opties',
      infoEN: 'Sunny Cars, RentalCars and local options',
      ctaNL: 'Sunny Cars →',
      ctaEN: 'Sunny Cars →',
      icon: <Car className="w-8 h-8 text-purple-600" />,
      image: '/lovable-uploads/b9aa2dd6-4efa-41fc-aae0-35165399628f.png',
      affiliateLink: 'https://www.sunnycars.com/?affiliate=YOUR_SUNNY_CARS_ID',
      secondaryButtonNL: 'Meer Opties →',
      secondaryButtonEN: 'More Options →'
    },
    {
      id: 'tips',
      titleNL: 'Praktische Algarve Tips',
      titleEN: 'Practical Algarve Tips',
      descriptionNL: 'Gratis stranden, goedkope restaurants, OV-tips. Gebaseerd op ervaringen van Nederlandse bezoekers.',
      descriptionEN: 'Free beaches, cheap restaurants, public transport tips. Based on Dutch visitor experiences.',
      infoNL: '',
      infoEN: '',
      ctaNL: 'Lees Tips →',
      ctaEN: 'Read Tips →',
      icon: <MapPin className="w-8 h-8 text-red-600" />,
      image: '/lovable-uploads/2669c291-db3b-4115-a8d9-0003a827de60.png'
    },
    {
      id: 'faq',
      titleNL: 'Veelgestelde Vragen',
      titleEN: 'Frequently Asked Questions',
      descriptionNL: 'Eerlijke antwoorden op jullie vragen. Wanneer is het goedkoopst? Welke verzekeringen heb je nodig?',
      descriptionEN: 'Honest answers to your questions. When is it cheapest? What insurance do you need?',
      infoNL: '',
      infoEN: '',
      ctaNL: 'Bekijk FAQ →',
      ctaEN: 'View FAQ →',
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      image: '/lovable-uploads/3345ac42-9795-42d0-88c1-27c0dea43762.png'
    }
  ];

  const popularDestinations = [
    { name: 'Lagos', image: '/lovable-uploads/4efa557c-610b-494e-b344-4d12e15b9324.png' },
    { name: 'Albufeira', image: '/lovable-uploads/5e6c44cc-a8c6-4013-8464-49f82efa40fc.png' },
    { name: 'Vilamoura', image: '/lovable-uploads/63e730c2-2308-4d75-8212-b63d66f8574b.png' },
    { name: 'Tavira', image: '/lovable-uploads/7cd264e6-e8b5-4596-afba-7ee9212621d5.png' },
    { name: 'Portimão', image: '/lovable-uploads/8e60626c-f42a-44a4-b340-02d07588b487.png' }
  ];

  const handleAffiliateClick = (link: string, label: string) => {
    console.log('Affiliate click tracked:', label);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleCardClick = (card: ServiceCard) => {
    if (card.internalLink) {
      // Navigate to internal page
      window.location.href = card.internalLink;
    } else if (card.affiliateLink) {
      handleAffiliateClick(card.affiliateLink, card.id);
    }
  };

  const getSeasonPriceIndication = () => {
    const month = new Date().getMonth();
    if (month >= 6 && month <= 8) {
      return language === 'nl' 
        ? '☀️ Hoogseizoen: Vluchten en accommodaties zijn nu duurder'
        : '☀️ High season: Flights and accommodations are more expensive now';
    } else if (month >= 11 || month <= 2) {
      return language === 'nl'
        ? '❄️ Laagseizoen: Nu zijn de beste deals te vinden!'
        : '❄️ Low season: Best deals available now!';
    } else {
      return language === 'nl'
        ? '🌸 Middenseizoen: Goede balans tussen prijs en weer'
        : '🌸 Mid season: Good balance between price and weather';
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Language Toggle Header */}
      <div className="bg-blue-600 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm">
            🇳🇱 {language === 'nl' ? 'Speciaal voor Nederlandse reizigers' : 'Especially for Dutch travelers'}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setLanguage('nl')}
              className={`px-3 py-1 rounded text-sm ${language === 'nl' ? 'bg-white text-blue-600' : 'hover:bg-blue-500'}`}
            >
              🇳🇱 NL
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded text-sm ${language === 'en' ? 'bg-white text-blue-600' : 'hover:bg-blue-500'}`}
            >
              🇬🇧 EN
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,102,204,0.7), rgba(232,93,47,0.3)), url('/lovable-uploads/1f6daf6e-7023-4399-9b7b-85dee316066e.png')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            {language === 'nl' 
              ? 'Lokaal Genieten in de Algarve voor Weinig'
              : 'Enjoy Local Algarve for Less'
            }
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {language === 'nl'
              ? 'Authentieke ervaringen, goedkope vluchten en betaalbare accommodaties'
              : 'Authentic experiences, cheap flights and affordable accommodations'
            }
          </p>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-md mx-auto">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Flag className="w-5 h-5" />
              <span className="font-semibold">
                {language === 'nl' ? 'Voor Nederlandse reizigers' : 'For Dutch travelers'}
              </span>
            </div>
            <p className="text-gray-700 text-sm">
              {language === 'nl' ? 'Alles in het Nederlands' : 'Everything in Dutch'}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 h-16">
              <Plane className="w-5 h-5 mr-2" />
              {language === 'nl' ? 'Lokale Ervaringen' : 'Local Experiences'}
            </Button>
            <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 h-16">
              <Users className="w-5 h-5 mr-2" />
              {language === 'nl' ? 'Goedkope Vluchten' : 'Cheap Flights'}
            </Button>
            <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 h-16">
              <Home className="w-5 h-5 mr-2" />
              {language === 'nl' ? 'Accommodaties' : 'Accommodations'}
            </Button>
            <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 h-16">
              <Car className="w-5 h-5 mr-2" />
              {language === 'nl' ? 'Autoverhuur' : 'Car Rental'}
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="sticky top-0 z-50 bg-orange-500 text-white py-3 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center flex-wrap gap-6 text-sm">
            <span>✈️ {language === 'nl' ? 'Actuele vliegprijzen vergelijken' : 'Compare current flight prices'}</span>
            <span>🏠 {language === 'nl' ? 'Eerlijke reviews van accommodaties' : 'Honest accommodation reviews'}</span>
            <span>💰 {language === 'nl' ? 'Transparante prijzen, geen verborgen kosten' : 'Transparent prices, no hidden costs'}</span>
            <span>🇳🇱 {language === 'nl' ? 'Nederlandse uitleg en tips' : 'Dutch explanations and tips'}</span>
          </div>
        </div>
      </div>

      {/* Price Season Indicator */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 mx-4">
        <p className="text-yellow-800">{getSeasonPriceIndication()}</p>
        <p className="text-xs text-yellow-600 mt-1">
          {language === 'nl' ? 'Laatste update:' : 'Last update:'} {currentDate}
        </p>
      </div>

      {/* Main Services Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((card) => (
              <Card key={card.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={card.image} 
                    alt={language === 'nl' ? card.titleNL : card.titleEN}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    {card.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {language === 'nl' ? card.titleNL : card.titleEN}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 text-sm">
                    {language === 'nl' ? card.descriptionNL : card.descriptionEN}
                  </p>
                  
                  {(card.infoNL || card.infoEN) && (
                    <p className="text-blue-600 text-sm mb-4 font-medium">
                      {language === 'nl' ? card.infoNL : card.infoEN}
                    </p>
                  )}
                  
                  <div className="space-y-2">
                    {card.internalLink ? (
                      <Link to={card.internalLink}>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          {language === 'nl' ? card.ctaNL : card.ctaEN}
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => handleCardClick(card)}
                      >
                        {language === 'nl' ? card.ctaNL : card.ctaEN}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                    
                    {card.secondaryButtonNL && (
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => card.secondaryLink && handleAffiliateClick(card.secondaryLink, `${card.id}-secondary`)}
                      >
                        {language === 'nl' ? card.secondaryButtonNL : card.secondaryButtonEN}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Disclaimer */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mx-4 my-6">
        <p className="text-blue-800 text-sm">
          <strong>{language === 'nl' ? 'Eerlijkheid voorop:' : 'Honesty first:'}</strong>{' '}
          {language === 'nl' 
            ? 'Deze site bevat affiliate links. Als je via onze links boekt, ontvangen wij een kleine commissie zonder extra kosten voor jou. Wij selecteren alleen partners die wij zelf vertrouwen.'
            : 'This site contains affiliate links. If you book through our links, we receive a small commission at no extra cost to you. We only select partners we trust ourselves.'
          }
          <a href="/over-ons" className="text-blue-600 underline ml-1">
            {language === 'nl' ? 'Lees meer over onze werkwijze' : 'Read more about our approach'}
          </a>
        </p>
      </div>

      {/* Popular Destinations */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            {language === 'nl' ? 'Populaire Bestemmingen' : 'Popular Destinations'}
          </h2>
          
          <div className="flex overflow-x-auto gap-4 pb-4">
            {popularDestinations.map((destination) => (
              <div key={destination.name} className="flex-shrink-0 w-48">
                <Card className="hover:shadow-lg transition-shadow">
                  <div className="h-32 overflow-hidden rounded-t-lg">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold mb-2">{destination.name}</h3>
                    <Button size="sm" variant="outline">
                      {language === 'nl' ? 'Ontdek →' : 'Discover →'}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest Reviews Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            {language === 'nl' ? 'Wat Nederlandse bezoekers echt vinden:' : 'What Dutch visitors really think:'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-500 mr-2">
                  {[...Array(4)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  <Star className="w-4 h-4" />
                </div>
                <Badge variant="secondary">✓ {language === 'nl' ? 'Geverifieerd' : 'Verified'}</Badge>
              </div>
              <p className="text-gray-700 mb-2">
                {language === 'nl'
                  ? '"Handige tips, maar check altijd actuele prijzen. Vluchten kunnen duurder zijn in hoogseizoen."'
                  : '"Useful tips, but always check current prices. Flights can be more expensive in high season."'
                }
              </p>
              <p className="text-sm text-gray-500">- Mark uit Amsterdam</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-500 mr-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <Badge variant="secondary">✓ {language === 'nl' ? 'Geverifieerd' : 'Verified'}</Badge>
              </div>
              <p className="text-gray-700 mb-2">
                {language === 'nl'
                  ? '"Fijn dat ze eerlijk zijn over affiliate links. De tips kloppen echt!"'
                  : '"Nice that they are honest about affiliate links. The tips really work!"'
                }
              </p>
              <p className="text-sm text-gray-500">- Sandra uit Rotterdam</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            {language === 'nl' ? 'Ontvang de beste Algarve tips' : 'Receive the best Algarve tips'}
          </h2>
          <p className="mb-6 text-blue-100">
            {language === 'nl' 
              ? 'Max. 1 email per maand met actuele tips en deals'
              : 'Max. 1 email per month with current tips and deals'
            }
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder={language === 'nl' ? 'Je e-mailadres' : 'Your email address'}
              value={emailSignup}
              onChange={(e) => setEmailSignup(e.target.value)}
              className="flex-1 px-4 py-2 rounded text-gray-900"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              {language === 'nl' ? 'Aanmelden' : 'Subscribe'}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold mb-4">Lokaal Genieten Algarve</h3>
              <p className="text-gray-300 text-sm">
                {language === 'nl'
                  ? 'Nederlandse reisgids voor authentieke Algarve ervaringen'
                  : 'Dutch travel guide for authentic Algarve experiences'
                }
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">{language === 'nl' ? 'Snelle Links' : 'Quick Links'}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/over-ons" className="text-gray-300 hover:text-white">
                  {language === 'nl' ? 'Over Ons' : 'About Us'}
                </a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
                <li><a href="/privacy" className="text-gray-300 hover:text-white">
                  {language === 'nl' ? 'Privacy Beleid' : 'Privacy Policy'}
                </a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">{language === 'nl' ? 'Volg Ons' : 'Follow Us'}</h4>
              <div className="flex gap-3">
                <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
            <p>&copy; 2024 Lokaal Genieten Algarve. {language === 'nl' ? 'Alle rechten voorbehouden.' : 'All rights reserved.'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AlgarveHomepage;
