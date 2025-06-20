
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
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
  );
};

export default LanguageSwitcher;
