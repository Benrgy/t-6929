
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';

const NewsletterSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-16">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          {language === 'nl' ? 'Blijf op de hoogte van nieuwe ontdekkingen' : 'Stay Updated with New Discoveries'}
        </h3>
        <p className="text-gray-600 text-lg">
          {language === 'nl' ? 
            'Ontvang wekelijks de nieuwste tips over verborgen parels en lokale geheimen in de Algarve' :
            'Receive weekly tips about hidden gems and local secrets in the Algarve'
          }
        </p>
      </div>
      <div className="max-w-md mx-auto flex gap-3">
        <input 
          type="email" 
          placeholder={language === 'nl' ? 'Je e-mailadres' : 'Your email'}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Button size="lg">
          {language === 'nl' ? 'Aanmelden' : 'Subscribe'}
        </Button>
      </div>
    </div>
  );
};

export default NewsletterSection;
