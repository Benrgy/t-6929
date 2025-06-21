
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { ExternalLink, Search, TrendingUp, Users, MapPin, Clock } from 'lucide-react';
import BudgetCalculator from './BudgetCalculator';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ searchQuery, onSearchChange }) => {
  const { t, language } = useLanguage();
  const [suggestions] = useState([
    'goedkoop auto huren Algarve', 'authentieke markten Faro', 'Tavira', 'Sagres', 'Monsaraz', 'Cacela Velha', 'Benagil Cave'
  ]);

  const handleSuggestionClick = (suggestion: string) => {
    onSearchChange(suggestion);
    // Scroll to results
    setTimeout(() => {
      const element = document.querySelector('#search-results');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-gradient-to-r from-green-600 to-orange-600 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/11f6c604-dd7e-4971-8d55-a247159bc234.png" 
            alt="Algarve landscape"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-orange-800/60"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {language === 'nl' ? 'Jouw Local Reismaatje' : 'Your Local Travel Companion'}
            </h1>
            
            {/* Target Audience Introduction */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <p className="text-xl md:text-2xl mb-4 leading-relaxed">
                {language === 'nl' 
                  ? 'Voor slimme reizigers die de Algarve écht willen beleven – zonder massa\'s en hoge prijzen!'
                  : 'For smart travelers who want to experience the real Algarve – without crowds and high prices!'
                }
              </p>
              <div className="flex flex-wrap gap-4 text-sm opacity-90">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{language === 'nl' ? 'Lokale geheimen' : 'Local secrets'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{language === 'nl' ? 'Verborgen parels' : 'Hidden gems'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{language === 'nl' ? 'Bewezen tips' : 'Proven tips'}</span>
                </div>
              </div>
            </div>
            
            <div className="max-w-lg mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={language === 'nl' ? 'Waar ben je naar op zoek? Dorpen, vervoer, eten, tips...' : 'What are you looking for? Villages, transport, food, tips...'}
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-800 shadow-lg border-0 focus:ring-2 focus:ring-white/20"
                />
              </div>
              
              {/* Search Suggestions */}
              <div className="mt-3">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 opacity-70" />
                  <span className="text-sm opacity-70">
                    {language === 'nl' ? 'Populair:' : 'Popular:'}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full text-sm transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg px-8 py-3"
                onClick={() => {
                  const element = document.querySelector('#budget-calculator');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {language === 'nl' ? '🧮 Bereken je Budget (Gratis!)' : '🧮 Calculate Your Budget (Free!)'}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-6"
                onClick={() => window.open('https://booking.com/algarve', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {language === 'nl' ? 'Bekijk Deals' : 'View Deals'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Destinations Section */}
      <div className="py-12 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            {language === 'nl' ? '🏆 Lokale Aanraders' : '🏆 Local Recommendations'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Alte</h3>
              <p className="text-gray-600 text-sm mb-3">
                {language === 'nl' ? 'Verborgen waterval + authentiek dorpsleven' : 'Hidden waterfall + authentic village life'}
              </p>
              <span className="text-green-600 font-semibold">€35/nacht</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Monsaraz</h3>
              <p className="text-gray-600 text-sm mb-3">
                {language === 'nl' ? 'Middeleeuws stadje zonder toeristen' : 'Medieval town without tourists'}
              </p>
              <span className="text-green-600 font-semibold">€40/nacht</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Cacela Velha</h3>
              <p className="text-gray-600 text-sm mb-3">
                {language === 'nl' ? 'Geheim strand + vissersdorp' : 'Secret beach + fishing village'}
              </p>
              <span className="text-green-600 font-semibold">€30/nacht</span>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Calculator Section */}
      <div id="budget-calculator" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              {language === 'nl' ? '💰 Bereken je Vakantiebudget' : '💰 Calculate Your Holiday Budget'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'nl' 
                ? 'Ontdek hoe goedkoop jouw Algarve-reis kan zijn! Wij vergelijken actuele prijzen en geven je slimme bespaartips.'
                : 'Discover how affordable your Algarve trip can be! We compare current prices and give smart saving tips.'
              }
            </p>
          </div>
          <BudgetCalculator />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
