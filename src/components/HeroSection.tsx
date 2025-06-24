
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { ExternalLink, Search, TrendingUp, Users, MapPin, Clock, Sun, Waves } from 'lucide-react';
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
    setTimeout(() => {
      const element = document.querySelector('#search-results');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      {/* Immersive Hero Section */}
      <div className="relative h-screen bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/11f6c604-dd7e-4971-8d55-a247159bc234.png" 
            alt="Authentieke Algarve dorpje bij zonsondergang"
            className="w-full h-full object-cover opacity-40 scale-105 transition-transform duration-20000 hover:scale-110"
          />
        </div>
        
        {/* Atmospheric Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/30 via-transparent to-amber-800/40"></div>
        
        {/* Floating Elements for Vacation Atmosphere */}
        <div className="absolute top-20 right-10 animate-bounce opacity-60">
          <Sun className="w-8 h-8 text-yellow-300" />
        </div>
        <div className="absolute bottom-32 left-16 animate-pulse opacity-50">
          <Waves className="w-6 h-6 text-blue-200" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-5xl">
            {/* Sensory Immersion Introduction */}
            <div className="mb-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">
                  {language === 'nl' ? 'Live vanuit de Algarve' : 'Live from Algarve'}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {language === 'nl' 
                  ? <>Ruik je het al?<br/><span className="text-amber-200">De Algarve roept...</span></> 
                  : <>Can you smell it?<br/><span className="text-amber-200">The Algarve calls...</span></>
                }
              </h1>
            </div>
            
            {/* Immersive Storytelling Box */}
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20 shadow-2xl">
              <p className="text-xl md:text-2xl mb-6 leading-relaxed font-light">
                {language === 'nl' 
                  ? <>
                      <strong className="text-amber-200">Het is 3°C in Amsterdam</strong> als je in het vliegtuig stapt.<br/>
                      <strong className="text-amber-200">Het is 18°C</strong> als je er uitstapt...<br/><br/>
                      <em className="text-blue-100">De zoutige zeelucht vermengd met wilde rozemarijn. 
                      Het geluid van vissers die hun netten ophalen bij zonsopgang. 
                      Een espresso voor €0,80 in een café waar alleen locals komen.</em>
                    </>
                  : <>
                      <strong className="text-amber-200">It's 3°C in Amsterdam</strong> when you board the plane.<br/>
                      <strong className="text-amber-200">It's 18°C</strong> when you step off...<br/><br/>
                      <em className="text-blue-100">The salty sea air mixed with wild rosemary. 
                      The sound of fishermen hauling their nets at sunrise. 
                      An espresso for €0.80 in a café where only locals go.</em>
                    </>
                }
              </p>
              
              {/* Target Audience */}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
                  <Users className="w-4 h-4 text-green-300" />
                  <span>{language === 'nl' ? 'Voor slimme reizigers' : 'For smart travelers'}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
                  <MapPin className="w-4 h-4 text-blue-300" />
                  <span>{language === 'nl' ? 'Weg van de massa' : 'Away from crowds'}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
                  <Clock className="w-4 h-4 text-amber-300" />
                  <span>{language === 'nl' ? 'Authentieke ervaringen' : 'Authentic experiences'}</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Search with Vacation Context */}
            <div className="max-w-2xl mb-8">
              <h3 className="text-lg mb-4 text-amber-100">
                {language === 'nl' 
                  ? 'Waar droom je van? Vertel het ons...' 
                  : 'What are you dreaming of? Tell us...'
                }
              </h3>
              
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={language === 'nl' ? 'Thermale bronnen, verborgen dorpjes, goedkoop eten...' : 'Thermal springs, hidden villages, cheap eats...'}
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-800 shadow-2xl border-0 focus:ring-4 focus:ring-amber-300/50 text-lg backdrop-blur-sm bg-white/95"
                />
              </div>
              
              {/* Vacation-Style Suggestions */}
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-amber-200" />
                  <span className="text-sm text-amber-100">
                    {language === 'nl' ? 'Andere vakantiedromen:' : 'Other vacation dreams:'}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Call-to-Actions with Vacation Energy */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-2xl px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 border-2 border-orange-300/50"
                onClick={() => {
                  const element = document.querySelector('#budget-calculator');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {language === 'nl' ? '🧮 Plan je Droomescape (Gratis!)' : '🧮 Plan Your Dream Escape (Free!)'}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-6 py-4 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://booking.com/algarve', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                {language === 'nl' ? 'Ontdek Droomdeals' : 'Discover Dream Deals'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Authentic Local Recommendations - Immersive Style */}
      <div className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              {language === 'nl' ? '🏆 Waar Locals Hun Geheimen Delen' : '🏆 Where Locals Share Their Secrets'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {language === 'nl' 
                ? 'Deze plekken vind je in geen enkele reisgids. Ontdekt door Nederlandse families die er al jaren komen.'
                : 'These places you won\'t find in any guidebook. Discovered by Dutch families who have been coming for years.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Alte Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-orange-100">
              <div className="mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-gray-800">Alte</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'nl' 
                    ? '"María laat je haar geheime waterval zien. Ze spreekt geen Engels, maar glimlacht in alle talen."'
                    : '"María shows you her secret waterfall. She doesn\'t speak English, but smiles in all languages."'
                  }
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-bold text-xl">€35/nacht</span>
                  <span className="text-xs text-gray-500 bg-green-50 px-2 py-1 rounded-full">
                    {language === 'nl' ? 'Bij locals' : 'With locals'}
                  </span>
                </div>
              </div>
            </div>

            {/* Monsaraz Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-orange-100">
              <div className="mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-gray-800">Monsaraz</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'nl' 
                    ? '"Een middeleeuws stadje waar de tijd heeft stilgestaan. Perfect voor wie wil ontsnappen aan alles."'
                    : '"A medieval town where time stands still. Perfect for those who want to escape everything."'
                  }
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-bold text-xl">€40/nacht</span>
                  <span className="text-xs text-gray-500 bg-purple-50 px-2 py-1 rounded-full">
                    {language === 'nl' ? 'Authentiek' : 'Authentic'}
                  </span>
                </div>
              </div>
            </div>

            {/* Cacela Velha Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-orange-100">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Waves className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-gray-800">Cacela Velha</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {language === 'nl' 
                    ? '"60 inwoners, geen toeristen. Je eigen privéstrand bereikbaar via een geheim pad."'
                    : '"60 residents, no tourists. Your own private beach accessible via a secret path."'
                  }
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-bold text-xl">€30/nacht</span>
                  <span className="text-xs text-gray-500 bg-blue-50 px-2 py-1 rounded-full">
                    {language === 'nl' ? 'Verborgen' : 'Hidden'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Budget Calculator Section */}
      <div id="budget-calculator" className="py-20 bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-100 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-amber-100 rounded-full opacity-60 animate-bounce"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              {language === 'nl' ? '💰 Jouw Droemescape Calculator' : '💰 Your Dream Escape Calculator'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              {language === 'nl' 
                ? 'Ontdek hoe goedkoop jouw Algarve-avontuur kan zijn! Wij vergelijken echte prijzen van Nederlandse families die er al jaren komen. Geen toeristische prijzen, alleen lokale tarieven.'
                : 'Discover how affordable your Algarve adventure can be! We compare real prices from Dutch families who have been coming for years. No tourist prices, only local rates.'
              }
            </p>
            
            {/* Price Comparison Teaser */}
            <div className="mt-8 inline-flex items-center gap-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500 line-through">€150</div>
                <div className="text-xs text-gray-500">Tourist price</div>
              </div>
              <div className="text-3xl">→</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">€45</div>
                <div className="text-xs text-gray-500">
                  {language === 'nl' ? 'Lokale prijs' : 'Local price'}
                </div>
              </div>
              <div className="text-sm text-gray-600 max-w-xs">
                {language === 'nl' 
                  ? 'Echte besparing per dag voor 2 personen'
                  : 'Real savings per day for 2 people'
                }
              </div>
            </div>
          </div>
          <BudgetCalculator />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
