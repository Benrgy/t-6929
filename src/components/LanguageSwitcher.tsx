
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 w-full flex justify-between px-4 z-50">
      <Button
        variant="outline"
        className="text-sm font-bold text-white border-white/20 bg-white/10 hover:bg-white/20"
        onClick={() => window.open('https://maps.google.com/maps', '_blank', 'noopener,noreferrer')}
      >
        <ExternalLink size={16} className="mr-2" />
        Google Maps
      </Button>
      
      <div className="flex gap-2">
        <Button
          variant={language === 'nl' ? 'default' : 'outline'}
          onClick={() => setLanguage('nl')}
          className="text-sm"
          size="sm"
        >
          NL
        </Button>
        <Button
          variant={language === 'en' ? 'default' : 'outline'}
          onClick={() => setLanguage('en')}
          className="text-sm"
          size="sm"
        >
          EN
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
