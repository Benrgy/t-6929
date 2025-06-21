
import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';
import SearchBar from '../components/SearchBar';
import CategoryGrid from '../components/CategoryGrid';
import LocationCard from '../components/LocationCard';
import FAQSection from '../components/FAQSection';
import { ContentCategory } from '../types/algarve';
import { algarveLocations } from '../data/algarveLocations';
import { algarveQA } from '../data/algarveQA';
import { Helmet } from 'react-helmet';
import { Button } from '../components/ui/button';
import { ExternalLink, Mail, Phone, MapPin, Search } from 'lucide-react';

const Index = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ContentCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = useMemo(() => {
    let filtered = algarveLocations;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(location => location.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(location => 
        location.name.toLowerCase().includes(query) ||
        location.description.en.toLowerCase().includes(query) ||
        location.description.nl.toLowerCase().includes(query) ||
        location.highlights.some(highlight => highlight.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  const filteredFAQs = useMemo(() => {
    let filtered = algarveQA;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(faq => 
        faq.question.en.toLowerCase().includes(query) ||
        faq.question.nl.toLowerCase().includes(query) ||
        faq.answer.en.toLowerCase().includes(query) ||
        faq.answer.nl.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{t('title')} - {language === 'nl' ? 'Authentieke Reisgids' : 'Authentic Travel Guide'}</title>
        <meta name="description" content={t('tagline')} />
        <meta name="keywords" content={language === 'nl' ? 
          'Algarve, Portugal, verborgen dorpen, lokale tips, authentiek reizen, goedkoop, budget, geheime stranden' : 
          'Algarve, Portugal, hidden villages, local tips, authentic travel, budget, secret beaches'} />
      </Helmet>
      
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {t('title')}
              </h1>
              <div className="hidden md:flex space-x-6">
                <button 
                  onClick={() => setSelectedCategory('hidden-villages')}
                  className={`text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md ${
                    selectedCategory === 'hidden-villages' ? 'bg-blue-50 text-blue-600' : ''
                  }`}
                >
                  {t('hiddenVillages')}
                </button>
                <button 
                  onClick={() => setSelectedCategory('beaches-nature')}
                  className={`text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md ${
                    selectedCategory === 'beaches-nature' ? 'bg-blue-50 text-blue-600' : ''
                  }`}
                >
                  {t('beachesNature')}
                </button>
                <button 
                  onClick={() => setSelectedCategory('food-drink')}
                  className={`text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md ${
                    selectedCategory === 'food-drink' ? 'bg-blue-50 text-blue-600' : ''
                  }`}
                >
                  {t('foodDrink')}
                </button>
                <button 
                  onClick={() => setSelectedCategory('transport')}
                  className={`text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md ${
                    selectedCategory === 'transport' ? 'bg-blue-50 text-blue-600' : ''
                  }`}
                >
                  {t('transport')}
                </button>
              </div>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/11f6c604-dd7e-4971-8d55-a247159bc234.png" 
            alt="Algarve landscape"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              {t('tagline')}
            </p>
            
            <div className="max-w-lg mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-800 shadow-lg border-0 focus:ring-2 focus:ring-white/20"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
              >
                {t('exploreMore')}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.open('https://booking.com/algarve', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {t('accommodation')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {language === 'nl' ? 'Ontdek de Authentieke Algarve' : 'Discover Authentic Algarve'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'nl' ? 
                'Van verborgen dorpen tot geheime stranden - vind jouw perfecte lokale ervaring' :
                'From hidden villages to secret beaches - find your perfect local experience'
              }
            </p>
          </div>
          <CategoryGrid 
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        </div>

        {/* Search Results */}
        {searchQuery && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('searchResults')}: "{searchQuery}"
            </h2>
          </div>
        )}

        {/* Locations Grid */}
        {filteredLocations.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              {selectedCategory === 'all' ? 
                (language === 'nl' ? 'Alle Bestemmingen' : 'All Destinations') : 
                t(selectedCategory.replace('-', ''))
              }
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredLocations.map((location) => (
                <LocationCard 
                  key={location.id} 
                  location={location}
                />
              ))}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {filteredFAQs.length > 0 && (
          <div className="mb-20">
            <FAQSection 
              faqs={filteredFAQs}
              title={t('faq')}
            />
          </div>
        )}

        {/* No Results */}
        {filteredLocations.length === 0 && filteredFAQs.length === 0 && searchQuery && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Geen resultaten gevonden</h3>
              <p className="text-gray-600 text-lg mb-6">{t('noResults')}</p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                {t('exploreMore')}
              </Button>
            </div>
          </div>
        )}

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {language === 'nl' ? 'Blijf op de hoogte van nieuwe ontdekkingen' : 'Stay Updated with New Discoveries'}
            </h3>
            <p className="text-gray-600 text-lg">
              {language === 'nl' ? 
                'Ontvang wekelijks de nieuwste tips over verborgen parels en lokale geheimen in de Algarve' :
                'Receive weekly tips about hidden gems and local secrets in the Algarve'
              }
            </p>
          </div>
          <div className="max-w-md mx-auto flex gap-3">
            <input 
              type="email" 
              placeholder={language === 'nl' ? 'Je e-mailadres' : 'Your email'}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button size="lg">
              {language === 'nl' ? 'Aanmelden' : 'Subscribe'}
            </Button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {language === 'nl' ? 'Deel je eigen geheime plekjes' : 'Share Your Own Secret Spots'}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">
                {language === 'nl' ? 'Ken je een geweldige plek?' : 'Know a great place?'}
              </h4>
              <p className="text-gray-600 mb-6">
                {language === 'nl' ? 
                  'We zijn altijd op zoek naar nieuwe verborgen parels in de Algarve. Deel jouw favoriete lokale plekjes met andere reizigers!' :
                  'We\'re always looking for new hidden gems in the Algarve. Share your favorite local spots with other travelers!'
                }
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>tips@algarveguide.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Algarve, Portugal</span>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder={language === 'nl' ? 'Je naam' : 'Your name'}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input 
                  type="email" 
                  placeholder={language === 'nl' ? 'Je e-mailadres' : 'Your email'}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea 
                  placeholder={language === 'nl' ? 'Vertel ons over je geheime plek...' : 'Tell us about your secret spot...'}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <Button className="w-full" size="lg">
                  {language === 'nl' ? 'Versturen' : 'Send'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">{t('title')}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {language === 'nl' ? 
                  'Jouw vertrouwde gids naar authentieke ervaringen in de Algarve, ver weg van de drukte van het massatoerisme.' :
                  'Your trusted guide to authentic experiences in the Algarve, far from the crowds of mass tourism.'
                }
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">
                {language === 'nl' ? 'Ontdekken' : 'Explore'}
              </h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><button className="hover:text-white transition-colors" onClick={() => setSelectedCategory('hidden-villages')}>{t('hiddenVillages')}</button></li>
                <li><button className="hover:text-white transition-colors" onClick={() => setSelectedCategory('beaches-nature')}>{t('beachesNature')}</button></li>
                <li><button className="hover:text-white transition-colors" onClick={() => setSelectedCategory('food-drink')}>{t('foodDrink')}</button></li>
                <li><button className="hover:text-white transition-colors" onClick={() => setSelectedCategory('transport')}>{t('transport')}</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">
                {language === 'nl' ? 'Boeken' : 'Book'}
              </h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="https://booking.com/algarve" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t('accommodation')}</a></li>
                <li><a href="https://rentalcars.com/algarve" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t('transport')}</a></li>
                <li><a href="https://getyourguide.com/algarve" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t('activities')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">
                {language === 'nl' ? 'Informatie' : 'Information'}
              </h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">
                  {language === 'nl' ? 'Privacy Beleid' : 'Privacy Policy'}
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors">
                  {language === 'nl' ? 'Voorwaarden' : 'Terms of Service'}
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 {t('title')}. {language === 'nl' ? 'Alle rechten voorbehouden.' : 'All rights reserved.'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
