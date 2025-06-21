
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ContentCategory } from '../types/algarve';

interface FooterSectionProps {
  onCategorySelect: (category: ContentCategory | 'all') => void;
}

const FooterSection: React.FC<FooterSectionProps> = ({ onCategorySelect }) => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">{t('title')}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {language === 'nl' ? 
                'Jouw vertrouwde gids naar authentieke ervaringen in de Algarve, ver weg van de drukte van het massatoerisme.' :
                'Your trusted guide to authentic experiences in the Algarve, far from the crowds of mass tourism.'
              }
            </p>
            <div className="mt-4 text-sm text-gray-400">
              <p>&copy; 2024 {t('title')}. {language === 'nl' ? 'Alle rechten voorbehouden.' : 'All rights reserved.'}</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">
              {language === 'nl' ? 'Ontdekken' : 'Explore'}
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><button className="hover:text-white transition-colors" onClick={() => onCategorySelect('hidden-villages')}>{t('hiddenVillages')}</button></li>
              <li><button className="hover:text-white transition-colors" onClick={() => onCategorySelect('beaches-nature')}>{t('beachesNature')}</button></li>
              <li><button className="hover:text-white transition-colors" onClick={() => onCategorySelect('food-drink')}>{t('foodDrink')}</button></li>
              <li><button className="hover:text-white transition-colors" onClick={() => onCategorySelect('transport')}>{t('transport')}</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">
              {language === 'nl' ? 'Boeken' : 'Book'}
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="https://booking.com/algarve" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t('accommodation')}</a></li>
              <li><a href="https://rentalcars.com/algarve" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t('transport')}</a></li>
              <li><a href="https://getyourguide.com/algarve" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t('activities')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">
              {language === 'nl' ? 'Informatie' : 'Information'}
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">
                {language === 'nl' ? 'Privacy Beleid' : 'Privacy Policy'}
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors">
                {language === 'nl' ? 'Voorwaarden' : 'Terms of Service'}
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">
                {language === 'nl' ? 'Blog' : 'Blog'}
              </a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
