import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ExternalLink, Search, TrendingUp, Users, MapPin, Clock, Sun, Waves, Star, Play, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ searchQuery, onSearchChange }) => {
  const { language } = useLanguage();
  const [suggestions] = useState([
    'Tavira markten', 'Sagres zonsondergang', 'Monsaraz kasteel', 'Lagos grotten', 'Óbidos middeleeuws'
  ]);

  const handleSuggestionClick = (suggestion: string) => {
    onSearchChange(suggestion);
    setTimeout(() => {
      const element = document.querySelector('#featured-destinations');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const scrollToContent = () => {
    const element = document.querySelector('#featured-destinations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-400 via-red-500 to-pink-500">
      {/* Dynamic Background with Parallax */}
      <div className="absolute inset-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          src="/lovable-uploads/11f6c604-dd7e-4971-8d55-a247159bc234.png" 
          alt="Prachtige Algarve landschap"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/40 via-transparent to-red-800/60"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            y: [0, -20, 0], 
            rotate: [0, 5, 0],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 right-20"
        >
          <Sun className="w-12 h-12 text-yellow-300" />
        </motion.div>
        
        <motion.div 
          animate={{ 
            y: [0, 15, 0], 
            x: [0, 10, 0],
            opacity: [0.4, 0.7, 0.4] 
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-32 left-20"
        >
          <Waves className="w-8 h-8 text-blue-200" />
        </motion.div>
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8
            }}
            className={`absolute w-2 h-2 bg-white rounded-full`}
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + i * 15}%`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full px-6 py-3 text-sm font-medium">
              <Star className="w-4 h-4 mr-2 text-yellow-300" />
              {language === 'nl' ? '✨ Door Nederlandse Expats voor Nederlandse Reizigers' : '✨ By Dutch Expats for Dutch Travelers'}
            </div>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {language === 'nl' ? (
              <>
                Ontdek de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Echte</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Algarve</span>
              </>
            ) : (
              <>
                Discover the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Real</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Algarve</span>
              </>
            )}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {language === 'nl' 
              ? 'Authentieke ervaringen, lokale geheimen en bespaar tot 40% op je droomvakantie in Portugal'
              : 'Authentic experiences, local secrets and save up to 40% on your dream vacation in Portugal'
            }
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-2xl mx-auto mb-6"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder={language === 'nl' ? 'Zoek bestemmingen, ervaringen...' : 'Search destinations, experiences...'}
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-white/95 backdrop-blur-sm border-0 rounded-2xl shadow-2xl focus:ring-4 focus:ring-orange-300/50 placeholder-gray-500"
              />
            </div>
            
            {/* Search Suggestions */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="text-white/80 text-sm mr-2">{language === 'nl' ? 'Populair:' : 'Popular:'}</span>
              {suggestions.map((suggestion, index) => (
                <motion.button
                  key={suggestion}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full hover:bg-white/30 transition-all duration-200 border border-white/30"
                >
                  {suggestion}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl"
              onClick={scrollToContent}
            >
              <MapPin className="w-5 h-5 mr-2" />
              {language === 'nl' ? 'Ontdek Bestemmingen' : 'Discover Destinations'}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg rounded-xl transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              {language === 'nl' ? 'Bekijk Video' : 'Watch Video'}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-8 text-white/90 text-sm mb-8"
          >
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="font-semibold">4.9/5</span>
              <span className="ml-1">{language === 'nl' ? 'waardering' : 'rating'}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-300" />
              <span className="font-semibold">50k+</span>
              <span className="ml-1">{language === 'nl' ? 'reizigers' : 'travelers'}</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-300" />
              <span className="font-semibold">40%</span>
              <span className="ml-1">{language === 'nl' ? 'besparing' : 'savings'}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToContent}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/80"
          >
            <span className="text-sm mb-2">{language === 'nl' ? 'Scroll naar beneden' : 'Scroll down'}</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;