
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { ContentCategory } from '../types/algarve';

interface NavigationProps {
  selectedCategory: ContentCategory | 'all';
  onCategorySelect: (category: ContentCategory | 'all') => void;
}

const Navigation: React.FC<NavigationProps> = ({ selectedCategory, onCategorySelect }) => {
  const { t, language } = useLanguage();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {t('title')}
            </h1>
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => onCategorySelect('hidden-villages')}
                className={`text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md ${
                  selectedCategory === 'hidden-villages' ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                {t('hiddenVillages')}
              </button>
              <button 
                onClick={() => onCategorySelect('beaches-nature')}
                className={`text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md ${
                  selectedCategory === 'beaches-nature' ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                {t('beachesNature')}
              </button>
              <button 
                onClick={() => onCategorySelect('food-drink')}
                className={`text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md ${
                  selectedCategory === 'food-drink' ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                {t('foodDrink')}
              </button>
              <button 
                onClick={() => onCategorySelect('transport')}
                className={`text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md ${
                  selectedCategory === 'transport' ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                {t('transport')}
              </button>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md">
                {language === 'nl' ? 'Blog' : 'Blog'}
              </a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md">
                FAQ
              </a>
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
