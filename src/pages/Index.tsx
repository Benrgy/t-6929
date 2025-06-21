
import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import AdvancedSearchBar from '../components/AdvancedSearchBar';
import ContentSections from '../components/ContentSections';
import PageSections from '../components/PageSections';
import FooterSection from '../components/FooterSection';
import BackToTop from '../components/BackToTop';
import { ContentCategory } from '../types/algarve';
import { algarveLocations } from '../data/algarveLocations';
import { algarveQA } from '../data/algarveQA';
import { Helmet } from 'react-helmet';

interface SearchFilters {
  category: ContentCategory | 'all';
  budget: 'low' | 'medium' | 'high' | 'all';
  duration: 'short' | 'half-day' | 'full-day' | 'all';
  region: 'east-algarve' | 'central-algarve' | 'west-algarve' | 'interior' | 'all';
  familyFriendly: boolean;
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
    familyFriendly: false
  });

  const handleAdvancedSearch = (query: string, filters: SearchFilters) => {
    setSearchQuery(query);
    setSearchFilters(filters);
    setSelectedCategory(filters.category);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSearchFilters({
      category: 'all',
      budget: 'all',
      duration: 'all',
      region: 'all',
      familyFriendly: false
    });
  };

  const filteredLocations = useMemo(() => {
    let filtered = algarveLocations;
    
    // Apply basic category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(location => location.category === selectedCategory);
    }
    
    // Apply advanced filters
    if (searchFilters.region !== 'all') {
      filtered = filtered.filter(location => location.region === searchFilters.region);
    }
    
    // Apply search query
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
        <title>{t('title')} - {language === 'nl' ? 'Authentieke Reisgids' : 'Authentic Travel Guide'}</title>
        <meta name="description" content={t('tagline')} />
        <meta name="keywords" content={language === 'nl' ? 
          'Algarve, Portugal, verborgen dorven, lokale tips, authentiek reizen, goedkoop, budget, geheime stranden' : 
          'Algarve, Portugal, hidden villages, local tips, authentic travel, budget, secret beaches'} />
        <meta property="og:title" content={`${t('title')} - ${language === 'nl' ? 'Authentieke Reisgids' : 'Authentic Travel Guide'}`} />
        <meta property="og:description" content={t('tagline')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>
      
      {/* Navigation */}
      <Navigation 
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      {/* Hero Section */}
      <HeroSection 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Stats Section */}
      <StatsSection />

      <div className="container mx-auto px-4 py-16">
        {/* Advanced Search Bar */}
        <div className="mb-12">
          <AdvancedSearchBar 
            onSearch={handleAdvancedSearch}
            className="max-w-4xl mx-auto"
          />
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
};

export default Index;
