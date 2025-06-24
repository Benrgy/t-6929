import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ImmersiveAtmosphere from '../components/ImmersiveAtmosphere';
import StatsSection from '../components/StatsSection';
import EnhancedSearchBar from '../components/EnhancedSearchBar';
import ContentSections from '../components/ContentSections';
import ComprehensiveFAQ from '../components/ComprehensiveFAQ';
import EventsCalendar from '../components/EventsCalendar';
import PageSections from '../components/PageSections';
import FooterSection from '../components/FooterSection';
import BackToTop from '../components/BackToTop';
import { ContentCategory } from '../types/algarve';
import { algarveLocations } from '../data/algarveLocations';
import { algarveQA } from '../data/algarveQA';
import { Helmet } from 'react-helmet';
import LocalStoriesSection from '../components/LocalStoriesSection';
import DetailedBudgetCalculator from '../components/DetailedBudgetCalculator';

interface SearchFilters {
  category: ContentCategory | 'all';
  budget: 'low' | 'medium' | 'high' | 'all';
  duration: 'short' | 'half-day' | 'full-day' | 'multi-day' | 'all';
  region: 'east-algarve' | 'central-algarve' | 'west-algarve' | 'interior' | 'all';
  familyFriendly: boolean;
  groupSize: 'solo' | 'couple' | 'family' | 'group' | 'all';
}

const Index = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ContentCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    category: 'all',
    budget: 'all',
    duration: 'all',
    region: 'all',
    familyFriendly: false,
    groupSize: 'all'
  });

  const handleAdvancedSearch = (query: string, filters: SearchFilters) => {
    setSearchQuery(query);
    setSearchFilters(filters);
    setSelectedCategory(filters.category);
    
    // Scroll to results
    setTimeout(() => {
      const element = document.querySelector('#search-results');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSearchFilters({
      category: 'all',
      budget: 'all',
      duration: 'all',
      region: 'all',
      familyFriendly: false,
      groupSize: 'all'
    });
  };

  const filteredLocations = useMemo(() => {
    let filtered = algarveLocations;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(location => location.category === selectedCategory);
    }
    
    if (searchFilters.region !== 'all') {
      filtered = filtered.filter(location => location.region === searchFilters.region);
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
  }, [selectedCategory, searchQuery, searchFilters]);

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
        <title>{language === 'nl' ? 'Ruik je het al? De Authentieke Algarve Roept - Jouw Lokale Reisgids' : 'Can You Smell It? The Authentic Algarve Calls - Your Local Travel Guide'}</title>
        <meta name="description" content={language === 'nl' ? 
          'Van 3°C in Amsterdam naar 18°C in de Algarve. Ontdek de echte Portugal zoals locals het beleven. Thermale bronnen, verborgen dorpen, authentieke ervaringen voor slimme reizigers.' :
          'From 3°C in Amsterdam to 18°C in the Algarve. Discover real Portugal like locals experience it. Thermal springs, hidden villages, authentic experiences for smart travelers.'} />
        <meta name="keywords" content={language === 'nl' ? 
          'Algarve lokale tips, thermale bronnen Portugal, authentieke dorpen, Nederlandse reizigers, lokale ervaring, Alte waterval, Monsaraz, geheime stranden, budgetreizen' : 
          'Algarve local tips, thermal springs Portugal, authentic villages, Dutch travelers, local experience, Alte waterfall, Monsaraz, secret beaches, budget travel'} />
        <meta property="og:title" content={`${language === 'nl' ? 'Ruik je het al? De Authentieke Algarve' : 'Can You Smell It? The Authentic Algarve'} - ${language === 'nl' ? 'Lokale Reisgids' : 'Local Travel Guide'}`} />
        <meta property="og:description" content={language === 'nl' ? 
          'Van winterse kou naar zonnige warmte. Ontdek de Algarve zoals locals het beleven, met thermale bronnen, verborgen dorven en authentieke ervaringen.' :
          'From winter cold to sunny warmth. Discover the Algarve like locals experience it, with thermal springs, hidden villages and authentic experiences.'} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>
      
      {/* Navigation */}
      <Navigation 
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      {/* Immersive Hero Section */}
      <HeroSection 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Immersive Atmosphere Section */}
      <ImmersiveAtmosphere />

      {/* Stats Section */}
      <StatsSection />

      <div className="container mx-auto px-4 py-16">
        {/* Enhanced Search Bar */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              {language === 'nl' ? '🔍 Vind jouw perfecte Algarve-ervaring' : '🔍 Find your perfect Algarve experience'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'nl' 
                ? 'Gebruik onze slimme zoekfunctie om precies te vinden wat bij jouw droomvakantie past. Van budget tot regio, wij helpen je zoeken.'
                : 'Use our smart search to find exactly what fits your dream vacation. From budget to region, we help you search.'
              }
            </p>
          </div>
          <EnhancedSearchBar 
            onSearch={handleAdvancedSearch}
          />
        </div>
      </div>

      {/* Detailed Budget Calculator */}
      <DetailedBudgetCalculator />

      {/* Local Stories Section */}
      <LocalStoriesSection />

      {/* Search Results Indicator */}
      {(searchQuery || searchFilters.category !== 'all' || searchFilters.budget !== 'all' || searchFilters.region !== 'all') && (
        <div id="search-results" className="bg-orange-50 py-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-gray-700">
                {language === 'nl' 
                  ? `Gevonden: ${filteredLocations.length} locaties en ${filteredFAQs.length} antwoorden`
                  : `Found: ${filteredLocations.length} locations and ${filteredFAQs.length} answers`
                }
              </p>
              {(searchQuery || getActiveFiltersCount() > 0) && (
                <button
                  onClick={handleClearSearch}
                  className="mt-2 text-orange-600 hover:text-orange-700 underline"
                >
                  {language === 'nl' ? 'Zoekfilters wissen' : 'Clear search filters'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Comprehensive FAQ Section */}
      <div id="faq">
        <ComprehensiveFAQ />
      </div>

      {/* Events Calendar */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <EventsCalendar />
        </div>
      </div>

      {/* Content Sections */}
      <ContentSections
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        searchQuery={searchQuery}
        filteredLocations={filteredLocations}
        filteredFAQs={filteredFAQs}
        searchFilters={searchFilters}
        onClearSearch={handleClearSearch}
      />

      {/* Page Sections */}
      <PageSections />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Footer */}
      <FooterSection onCategorySelect={setSelectedCategory} />
    </div>
  );

  function getActiveFiltersCount() {
    let count = 0;
    if (searchFilters.category !== 'all') count++;
    if (searchFilters.budget !== 'all') count++;
    if (searchFilters.duration !== 'all') count++;
    if (searchFilters.region !== 'all') count++;
    if (searchFilters.familyFriendly) count++;
    if (searchFilters.groupSize !== 'all') count++;
    return count;
  }
};

export default Index;
