
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ImmersiveAtmosphere from '../components/ImmersiveAtmosphere';
import StatsSection from '../components/StatsSection';
import SearchSection from '../components/SearchSection';
import ContentSections from '../components/ContentSections';
import ComprehensiveFAQ from '../components/ComprehensiveFAQ';
import EventsCalendar from '../components/EventsCalendar';
import PageSections from '../components/PageSections';
import FooterSection from '../components/FooterSection';
import BackToTop from '../components/BackToTop';
import SearchResultsIndicator from '../components/SearchResultsIndicator';
import { Helmet } from 'react-helmet';
import LocalStoriesSection from '../components/LocalStoriesSection';
import DetailedBudgetCalculator from '../components/DetailedBudgetCalculator';
import CommunityForum from '../components/CommunityForum';
import PhotoSharingSection from '../components/PhotoSharingSection';
import WeatherWidget from '../components/WeatherWidget';
import NearbyAttractionsWidget from '../components/NearbyAttractionsWidget';
import LiveEventsTracker from '../components/LiveEventsTracker';
import { useSearchAndFilters } from '../hooks/useSearchAndFilters';

const Index = () => {
  const { language } = useLanguage();
  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    searchFilters,
    handleAdvancedSearch,
    handleClearSearch,
    getActiveFiltersCount,
    filteredLocations,
    filteredFAQs
  } = useSearchAndFilters();

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{language === 'nl' ? 'Ruik je het al? De Authentieke Algarve Roept - Jouw Lokale Reisgids' : 'Can You Smell It? The Authentic Algarve Calls - Your Local Travel Guide'}</title>
        <meta name="description" content={language === 'nl' ? 
          'Van 3°C in Amsterdam naar 18°C in de Algarve. Ontdek de echte Portugal zoals locals het beleven. Thermale bronnen, verborgen dorven, authentieke ervaringen voor slimme reizigers.' :
          'From 3°C in Amsterdam to 18°C in the Algarve. Discover real Portugal like locals experience it. Thermal springs, hidden villages, authentic experiences for smart travelers.'} />
        <meta name="keywords" content={language === 'nl' ? 
          'Algarve lokale tips, thermale bronnen Portugal, authentieke dorven, Nederlandse reizigers, lokale ervaring, Alte waterval, Monsaraz, geheime stranden, budgetreizen' : 
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

      {/* Weather Widget */}
      <WeatherWidget />

      {/* Live Events Tracker */}
      <LiveEventsTracker />

      {/* Nearby Attractions Widget */}
      <NearbyAttractionsWidget />

      {/* Enhanced Search Section */}
      <SearchSection onSearch={handleAdvancedSearch} />

      {/* Detailed Budget Calculator */}
      <DetailedBudgetCalculator />

      {/* Local Stories Section */}
      <LocalStoriesSection />

      {/* Community Forum */}
      <CommunityForum />

      {/* Photo Sharing Section */}
      <PhotoSharingSection />

      {/* Search Results Indicator */}
      <SearchResultsIndicator
        searchQuery={searchQuery}
        activeFiltersCount={getActiveFiltersCount()}
        locationsCount={filteredLocations.length}
        faqsCount={filteredFAQs.length}
        onClearSearch={handleClearSearch}
      />

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
};

export default Index;
