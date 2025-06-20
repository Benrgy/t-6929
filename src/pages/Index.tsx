
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
import { ExternalLink } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();
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
        <title>{t('title')} - Authentieke Reisgids</title>
        <meta name="description" content={t('tagline')} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
      </Helmet>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="relative">
          <LanguageSwitcher />
          <div className="container mx-auto px-4 py-16">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 pt-16">
                {t('title')}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                {t('tagline')}
              </p>
              
              <div className="max-w-2xl mx-auto mb-8">
                <SearchBar onSearch={setSearchQuery} />
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
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
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {t('exploreMore')}
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
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {selectedCategory === 'all' ? t('exploreMore') : t(selectedCategory.replace('-', ''))}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="mb-12">
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

        {/* Affiliate Marketing Section */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Plan Your Perfect Algarve Trip
          </h3>
          <p className="text-gray-600 mb-6">
            Get the best deals on accommodation, transport, and activities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              onClick={() => window.open('https://booking.com/algarve', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Book Hotels
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open('https://rentalcars.com/algarve', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Rent a Car
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open('https://getyourguide.com/algarve', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Book Tours
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
