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
    
    // Track page view
    trackEvent('page_view', 'homepage', 'load');
  }, [language, trackEvent]);

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
      internalLink: '/experiences'
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
    trackEvent('affiliate_click', 'homepage', label);
    trackConversion('homepage_affiliate_click');
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

      {/* Modern Travel Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background with Multiple Layers */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/1f6daf6e-7023-4399-9b7b-85dee316066e.png"
            alt="Beautiful Algarve coastline"
            className="w-full h-full object-cover scale-110 animate-pulse"
          />
          <div className="absolute inset-0 hero-gradient opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 travel-float">
          <div className="w-16 h-16 rounded-full ocean-gradient opacity-20"></div>
        </div>
        <div className="absolute bottom-32 left-16 travel-wave">
          <div className="w-12 h-12 rounded-full sunset-gradient opacity-30"></div>
        </div>

        <div className="relative container mx-auto px-4 h-screen flex items-center">
          <div className="text-white max-w-6xl">
            {/* Modern Hero Content */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-6 border border-white/20">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <Flag className="w-5 h-5 text-orange-300" />
                <span className="font-medium">
                  {language === 'nl' ? 'Speciaal voor Nederlandse reizigers' : 'Especially for Dutch travelers'}
                </span>
              </div>
              
              <h1 className="hero-title mb-8">
                {language === 'nl' 
                  ? <>Ontdek de Échte<br/><span className="text-yellow-300">Algarve</span></>
                  : <>Discover the Real<br/><span className="text-yellow-300">Algarve</span></>
                }
              </h1>

              <p className="text-2xl md:text-3xl mb-8 max-w-4xl leading-relaxed font-light">
                {language === 'nl'
                  ? 'Authentieke ervaringen, lokale geheimen en eerlijke prijzen. Weg van de toeristische massa, naar de plekken waar locals komen.'
                  : 'Authentic experiences, local secrets and honest prices. Away from tourist crowds, to places where locals go.'
                }
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <Users className="w-8 h-8 text-blue-300 mb-3" />
                <h3 className="font-bold text-lg mb-2">
                  {language === 'nl' ? 'Van locals geleerd' : 'Learned from locals'}
                </h3>
                <p className="text-blue-100 text-sm">
                  {language === 'nl' ? 'Echte aanbevelingen van mensen die er wonen' : 'Real recommendations from people who live there'}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <Euro className="w-8 h-8 text-green-300 mb-3" />
                <h3 className="font-bold text-lg mb-2">
                  {language === 'nl' ? 'Transparante prijzen' : 'Transparent prices'}
                </h3>
                <p className="text-green-100 text-sm">
                  {language === 'nl' ? 'Geen verborgen kosten, eerlijke vergelijkingen' : 'No hidden costs, honest comparisons'}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <MapPin className="w-8 h-8 text-orange-300 mb-3" />
                <h3 className="font-bold text-lg mb-2">
                  {language === 'nl' ? 'Verborgen pareltjes' : 'Hidden gems'}
                </h3>
                <p className="text-orange-100 text-sm">
                  {language === 'nl' ? 'Plekken die toeristen nooit vinden' : 'Places tourists never find'}
                </p>
              </div>
            </div>

            {/* Modern CTA Buttons */}
            <div className="flex flex-wrap gap-6">
              <Link to="/experiences">
                <Button variant="hero" size="xl">
                  <Users className="w-6 h-6 mr-3" />
                  {language === 'nl' ? 'Ontdek Lokale Ervaringen' : 'Discover Local Experiences'}
                </Button>
              </Link>
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => handleAffiliateClick('https://www.booking.com/searchresults.html?ss=Algarve&aid=YOUR_BOOKING_AFFILIATE_ID', 'hero-booking')}
              >
                <ExternalLink className="w-5 h-5 mr-3" />
                {language === 'nl' ? 'Bekijk Droomdeals' : 'View Dream Deals'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Trust Bar */}
      <div className="sticky top-0 z-50 sunset-gradient text-white py-4 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center flex-wrap gap-8 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Plane className="w-4 h-4" />
              <span>{language === 'nl' ? 'Actuele vliegprijzen' : 'Current flight prices'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>{language === 'nl' ? 'Eerlijke reviews' : 'Honest reviews'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Euro className="w-4 h-4" />
              <span>{language === 'nl' ? 'Transparante prijzen' : 'Transparent prices'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Flag className="w-4 h-4" />
              <span>{language === 'nl' ? 'Nederlandse service' : 'Dutch service'}</span>
            </div>
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

      {/* Modern Services Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
              {language === 'nl' ? 'Jouw Algarve Reis Begint Hier' : 'Your Algarve Journey Starts Here'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'nl' 
                ? 'Alles wat je nodig hebt voor een authentieke Algarve-ervaring, op één plek verzameld'
                : 'Everything you need for an authentic Algarve experience, collected in one place'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card, index) => (
              <div key={card.id} className="travel-card group cursor-pointer">
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <img 
                    src={card.image} 
                    alt={language === 'nl' ? card.titleNL : card.titleEN}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6 p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                    {card.icon}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {language === 'nl' ? card.titleNL : card.titleEN}
                    </h3>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {language === 'nl' ? card.descriptionNL : card.descriptionEN}
                  </p>
                  
                  {(card.infoNL || card.infoEN) && (
                    <div className="bg-blue-50 rounded-xl p-4 mb-6">
                      <p className="text-blue-700 text-sm font-medium">
                        {language === 'nl' ? card.infoNL : card.infoEN}
                      </p>
                    </div>
                  )}
                  
                  <div className="space-y-3">
                    {card.internalLink ? (
                      <Link to={card.internalLink}>
                        <Button variant="ocean" size="lg" className="w-full">
                          {language === 'nl' ? card.ctaNL : card.ctaEN}
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        variant="ocean" 
                        size="lg"
                        className="w-full"
                        onClick={() => handleCardClick(card)}
                      >
                        {language === 'nl' ? card.ctaNL : card.ctaEN}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                    
                    {card.secondaryButtonNL && (
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="w-full"
                        onClick={() => card.secondaryLink && handleAffiliateClick(card.secondaryLink, `${card.id}-secondary`)}
                      >
                        {language === 'nl' ? card.secondaryButtonNL : card.secondaryButtonEN}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </div>
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
          <Link to="/over-ons" className="text-blue-600 underline ml-1">
            {language === 'nl' ? 'Lees meer over onze werkwijze' : 'Read more about our approach'}
          </Link>
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
                <li><Link to="/over-ons" className="text-gray-300 hover:text-white">
                  {language === 'nl' ? 'Over Ons' : 'About Us'}
                </Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                <li><Link to="/privacy" className="text-gray-300 hover:text-white">
                  {language === 'nl' ? 'Privacy Beleid' : 'Privacy Policy'}
                </Link></li>
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
