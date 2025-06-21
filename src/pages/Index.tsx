import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';
import CategoryGrid from '../components/CategoryGrid';
import LocationCard from '../components/LocationCard';
import FAQSection from '../components/FAQSection';
import HeroSection from '../components/HeroSection';
import NewsletterSection from '../components/NewsletterSection';
import ContactSection from '../components/ContactSection';
import BlogSection from '../components/BlogSection';
import UserTipsSection from '../components/UserTipsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BackToTop from '../components/BackToTop';
import StatsSection from '../components/StatsSection';
import { ContentCategory } from '../types/algarve';
import { algarveLocations } from '../data/algarveLocations';
import { algarveQA } from '../data/algarveQA';
import { Helmet } from 'react-helmet';
import { Button } from '../components/ui/button';

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
                <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md">
                  {language === 'nl' ? 'Blog' : 'Blog'}
                </a>
                <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md">
                  FAQ
                </a>
              </div>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Stats Section */}
      <StatsSection />

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
          <div className="mb-20" id="faq">
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
        <NewsletterSection />

        {/* Contact Section */}
        <ContactSection />
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* User Tips Section */}
      <UserTipsSection />

      {/* Blog Section */}
      <div id="blog">
        <BlogSection />
      </div>

      {/* Back to Top Button */}
      <BackToTop />

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
                <li><a href="#blog" className="hover:text-white transition-colors">
                  {language === 'nl' ? 'Blog' : 'Blog'}
                </a></li>
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
