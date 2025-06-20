
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { Download, Map } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="fixed top-4 w-full flex justify-between px-4 z-50">
      <Button
        variant="outline"
        className="text-sm font-bold text-black"
        onClick={() => window.open('https://maps.me/', '_blank', 'noopener,noreferrer')}
      >
        <Download size={16} />
        <Map size={16} />
        {t('mapApp')}
      </Button>
      
      <div className="flex gap-2">
        <Button
          variant={language === 'es' ? 'default' : 'outline'}
          onClick={() => setLanguage('es')}
          className="text-sm"
        >
          ES
        </Button>
        <Button
          variant={language === 'en' ? 'default' : 'outline'}
          onClick={() => setLanguage('en')}
          className="text-sm"
        >
          EN
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
