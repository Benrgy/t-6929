
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();
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
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <span className="text-2xl">🌅</span>
            <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {language === 'nl' ? 'Lokale Algarve' : 'Local Algarve'}
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/experiences" 
              className={`text-gray-700 hover:text-orange-600 transition-colors px-3 py-2 rounded-lg font-medium ${
                location.pathname === '/experiences' ? 'bg-orange-50 text-orange-600' : ''
              }`}
            >
              🎯 {language === 'nl' ? 'Ervaringen' : 'Experiences'}
            </Link>
            <Link 
              to="/flights" 
              className={`text-gray-700 hover:text-orange-600 transition-colors px-3 py-2 rounded-lg font-medium ${
                location.pathname === '/flights' ? 'bg-orange-50 text-orange-600' : ''
              }`}
            >
              ✈️ {language === 'nl' ? 'Vluchten' : 'Flights'}
            </Link>
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
            <Link 
              to="/over-ons" 
              className={`text-gray-700 hover:text-orange-600 transition-colors px-3 py-2 rounded-lg font-medium ${
                location.pathname === '/over-ons' ? 'bg-orange-50 text-orange-600' : ''
              }`}
            >
              ℹ️ {language === 'nl' ? 'Over Ons' : 'About'}
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-700 hover:text-orange-600 transition-colors px-3 py-2 rounded-lg font-medium ${
                location.pathname === '/contact' ? 'bg-orange-50 text-orange-600' : ''
              }`}
            >
              📞 Contact
            </Link>
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
              <Link 
                to="/experiences"
                className="w-full flex items-center gap-3 text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-xl">🎯</span>
                <span className="font-medium">{language === 'nl' ? 'Ervaringen' : 'Experiences'}</span>
              </Link>
              <Link 
                to="/flights"
                className="w-full flex items-center gap-3 text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-xl">✈️</span>
                <span className="font-medium">{language === 'nl' ? 'Vluchten' : 'Flights'}</span>
              </Link>
              <Link 
                to="/over-ons"
                className="w-full flex items-center gap-3 text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-xl">ℹ️</span>
                <span className="font-medium">{language === 'nl' ? 'Over Ons' : 'About'}</span>
              </Link>
              <Link 
                to="/contact"
                className="w-full flex items-center gap-3 text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-xl">📞</span>
                <span className="font-medium">Contact</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
