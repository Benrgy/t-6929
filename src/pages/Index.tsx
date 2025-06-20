
import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';
import SearchBar from '../components/SearchBar';
import CategoryGrid from '../components/CategoryGrid';
import AlgarveLocationCard from '../components/AlgarveLocationCard';
import FAQSection from '../components/FAQSection';
import { ContentCategory } from '../types/algarve';
import { algarveLocations } from '../data/algarveLocations';
import { algarveQA } from '../data/algarveQA';
import { Helmet } from 'react-helmet';
import { Button } from '../components/ui/button';
import { ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

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
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{t('title')} - {language === 'nl' ? 'Authentieke Reisgids' : 'Authentic Travel Guide'}</title>
        <meta name="description" content={t('tagline')} />
        <meta name="keywords" content={language === 'nl' ? 
          'Algarve, Portugal, verborgen dorpen, lokale tips, authentiek reizen, goedkoop, budget, geheime stranden' : 
          'Algarve, Portugal, hidden villages, local tips, authentic travel, budget, secret beaches'} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
      </Helmet>
      
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold text-blue-600">{t('title')}</h1>
              <div className="hidden md:flex space-x-6">
                <button 
                  onClick={() => setSelectedCategory('hidden-villages')}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {t('hiddenVillages')}
                </button>
                <button 
                  onClick={() => setSelectedCategory('beaches-nature')}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {t('beachesNature')}
                </button>
                <button 
                  onClick={() => setSelectedCategory('food-drink')}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {t('foodDrink')}
                </button>
                <button 
                  onClick={() => setSelectedCategory('transport')}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
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
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('title')}
            </h1>
            <p className="text-xl mb-8 opacity-90">
              {t('tagline')}
            </p>
            
            <div className="max-w-lg mb-6">
              <SearchBar onSearch={setSearchQuery} />
            </div>
            
            <div className="flex gap-4">
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => window.open('https://booking.com/algarve', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {t('accommodation')}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => window.open('https://rentalcars.com/algarve', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {t('transport')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {language === 'nl' ? 'Ontdek de Authentieke Algarve' : 'Discover Authentic Algarve'}
          </h2>
          <CategoryGrid 
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        </div>

        {/* Search Results */}
        {searchQuery && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t('searchResults')}: "{searchQuery}"
            </h2>
          </div>
        )}

        {/* Locations */}
        {filteredLocations.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              {selectedCategory === 'all' ? 
                (language === 'nl' ? 'Alle Bestemmingen' : 'All Destinations') : 
                t(selectedCategory.replace('-', ''))
              }
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredLocations.map((location) => (
                <AlgarveLocationCard 
                  key={location.id} 
                  location={location}
                />
              ))}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {filteredFAQs.length > 0 && (
          <div className="mb-16">
            <FAQSection 
              faqs={filteredFAQs}
              title={t('faq')}
            />
          </div>
        )}

        {/* No Results */}
        {filteredLocations.length === 0 && filteredFAQs.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">{t('noResults')}</p>
            <Button 
              className="mt-4"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              {t('exploreMore')}
            </Button>
          </div>
        )}

        {/* Newsletter Section */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {language === 'nl' ? 'Blijf op de hoogte' : 'Stay Updated'}
            </h3>
            <p className="text-gray-600">
              {language === 'nl' ? 
                'Ontvang de nieuwste tips en geheime plekjes in de Algarve' :
                'Get the latest tips and secret spots in the Algarve'
              }
            </p>
          </div>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder={language === 'nl' ? 'Je e-mailadres' : 'Your email'}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button>
              {language === 'nl' ? 'Aanmelden' : 'Subscribe'}
            </Button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {language === 'nl' ? 'Contact & Tips Delen' : 'Contact & Share Tips'}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'nl' ? 'Deel je eigen tips' : 'Share your own tips'}
              </h4>
              <p className="text-gray-600 mb-4">
                {language === 'nl' ? 
                  'Ken je een geweldige plek die nog niet op onze site staat? Laat het ons weten!' :
                  'Know a great place that\'s not on our site yet? Let us know!'
                }
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>tips@algarveguide.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>{language === 'nl' ? 'Algarve, Portugal' : 'Algarve, Portugal'}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'nl' ? 'Stuur een bericht' : 'Send a message'}
              </h4>
              <div className="space-y-3">
                <input 
                  type="text" 
                  placeholder={language === 'nl' ? 'Je naam' : 'Your name'}
                  className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea 
                  placeholder={language === 'nl' ? 'Je bericht of tip...' : 'Your message or tip...'}
                  rows={4}
                  className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <Button className="w-full">
                  {language === 'nl' ? 'Versturen' : 'Send'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">{t('title')}</h3>
              <p className="text-gray-300 text-sm">
                {language === 'nl' ? 
                  'Jouw gids naar authentieke ervaringen in de Algarve, weg van de massa.' :
                  'Your guide to authentic experiences in the Algarve, away from the crowds.'
                }
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'nl' ? 'Ontdekken' : 'Explore'}
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><button onClick={() => setSelectedCategory('hidden-villages')}>{t('hiddenVillages')}</button></li>
                <li><button onClick={() => setSelectedCategory('beaches-nature')}>{t('beachesNature')}</button></li>
                <li><button onClick={() => setSelectedCategory('food-drink')}>{t('foodDrink')}</button></li>
                <li><button onClick={() => setSelectedCategory('transport')}>{t('transport')}</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'nl' ? 'Boeken' : 'Book'}
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="https://booking.com/algarve" target="_blank" rel="noopener noreferrer">{t('accommodation')}</a></li>
                <li><a href="https://rentalcars.com/algarve" target="_blank" rel="noopener noreferrer">{t('transport')}</a></li>
                <li><a href="https://getyourguide.com/algarve" target="_blank" rel="noopener noreferrer">{t('activities')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'nl' ? 'Informatie' : 'Information'}
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  {language === 'nl' ? 'Privacy Beleid' : 'Privacy Policy'}
                </li>
                <li>
                  {language === 'nl' ? 'Voorwaarden' : 'Terms of Service'}
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-300">
            <p>&copy; 2024 {t('title')}. {language === 'nl' ? 'Alle rechten voorbehouden.' : 'All rights reserved.'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
