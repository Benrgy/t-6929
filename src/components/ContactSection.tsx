
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
      <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        {language === 'nl' ? 'Deel je eigen geheime plekjes' : 'Share Your Own Secret Spots'}
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-semibold text-lg mb-4">
            {language === 'nl' ? 'Ken je een geweldige plek?' : 'Know a great place?'}
          </h4>
          <p className="text-gray-600 mb-6">
            {language === 'nl' ? 
              'We zijn altijd op zoek naar nieuwe verborgen parels in de Algarve. Deel jouw favoriete lokale plekjes met andere reizigers!' :
              'We\'re always looking for new hidden gems in the Algarve. Share your favorite local spots with other travelers!'
            }
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>tips@algarveguide.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>Algarve, Portugal</span>
            </div>
          </div>
        </div>
        <div>
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder={language === 'nl' ? 'Je naam' : 'Your name'}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input 
              type="email" 
              placeholder={language === 'nl' ? 'Je e-mailadres' : 'Your email'}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <textarea 
              placeholder={language === 'nl' ? 'Vertel ons over je geheime plek...' : 'Tell us about your secret spot...'}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
            <Button className="w-full" size="lg">
              {language === 'nl' ? 'Versturen' : 'Send'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
