
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { ExternalLink, Search } from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ searchQuery, onSearchChange }) => {
  const { t, language } = useLanguage();

  return (
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
                onChange={(e) => onSearchChange(e.target.value)}
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
  );
};

export default HeroSection;
