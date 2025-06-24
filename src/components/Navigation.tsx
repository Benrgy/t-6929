
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { ContentCategory } from '../types/algarve';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  selectedCategory: ContentCategory | 'all';
  onCategorySelect: (category: ContentCategory | 'all') => void;
}

const Navigation: React.FC<NavigationProps> = ({ selectedCategory, onCategorySelect }) => {
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'hidden-villages' as const, label: t('hiddenVillages'), emoji: '🏘️' },
    { id: 'beaches-nature' as const, label: t('beachesNature'), emoji: '🏖️' },
    { id: 'food-drink' as const, label: t('foodDrink'), emoji: '🍽️' },
    { id: 'transport' as const, label: t('transport'), emoji: '🚗' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🌅</span>
            <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {language === 'nl' ? 'Lokale Algarve' : 'Local Algarve'}
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onCategorySelect(item.id)}
                className={`flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors px-3 py-2 rounded-lg ${
                  selectedCategory === item.id ? 'bg-orange-50 text-orange-600' : ''
                }`}
              >
                <span>{item.emoji}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            <a href="#blog" className="text-gray-700 hover:text-orange-600 transition-colors px-3 py-2 rounded-lg font-medium">
              📰 {language === 'nl' ? 'Blog' : 'Blog'}
            </a>
            <a href="#faq" className="text-gray-700 hover:text-orange-600 transition-colors px-3 py-2 rounded-lg font-medium">
              ❓ FAQ
            </a>
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onCategorySelect(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 text-left px-4 py-3 rounded-lg transition-colors ${
                    selectedCategory === item.id 
                      ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-600' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xl">{item.emoji}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
              <a 
                href="#blog" 
                className="w-full flex items-center gap-3 text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-xl">📰</span>
                <span className="font-medium">{language === 'nl' ? 'Blog' : 'Blog'}</span>
              </a>
              <a 
                href="#faq" 
                className="w-full flex items-center gap-3 text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-xl">❓</span>
                <span className="font-medium">FAQ</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
