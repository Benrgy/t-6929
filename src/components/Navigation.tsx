import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Plane, Users, Home, MapPin, Flag, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      to: '/experiences',
      label: language === 'nl' ? 'Ervaringen' : 'Experiences',
      icon: <Users className="w-4 h-4" />,
      description: language === 'nl' ? 'Lokale activiteiten' : 'Local activities'
    },
    {
      to: '/flights',
      label: language === 'nl' ? 'Vluchten' : 'Flights',
      icon: <Plane className="w-4 h-4" />,
      description: language === 'nl' ? 'Beste prijzen' : 'Best prices'
    },
    {
      to: '/over-ons',
      label: language === 'nl' ? 'Over Ons' : 'About Us',
      icon: <MapPin className="w-4 h-4" />,
      description: language === 'nl' ? 'Ons verhaal' : 'Our story'
    },
    {
      to: '/contact',
      label: language === 'nl' ? 'Contact' : 'Contact',
      icon: <Home className="w-4 h-4" />,
      description: language === 'nl' ? 'Neem contact op' : 'Get in touch'
    }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-100' 
          : 'bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200 group">
            <div className="relative">
              <Sun className="w-8 h-8 text-orange-500 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -inset-1 bg-orange-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 bg-clip-text text-transparent">
                {language === 'nl' ? 'Lokaal Genieten' : 'Local Experience'}
              </h1>
              <p className="text-xs text-gray-500 -mt-1">
                Algarve
              </p>
            </div>
          </Link>

          {/* Enhanced Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => {
              const isActive = location.pathname === item.to;
              return (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={item.to} 
                    className={`group relative px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive 
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                        : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className={isActive ? 'text-white' : 'text-gray-600 group-hover:text-orange-600'}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                      {item.description}
                    </div>
                    
                    {/* Hover effect */}
                    {!isActive && (
                      <div className="absolute inset-0 rounded-lg bg-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
                    )}
                  </Link>
                </motion.div>
              );
            })}
            
            {/* Language Switcher */}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                className="bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200 hover:border-orange-300 transition-all duration-200"
              >
                <Flag className="w-4 h-4 mr-2" />
                <span className="font-medium">{language === 'nl' ? 'EN' : 'NL'}</span>
              </Button>
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Mobile Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
              className="text-gray-600 hover:text-orange-600"
            >
              <Flag className="w-4 h-4" />
            </Button>
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 relative"
            >
              <motion.div
                animate={mobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="lg:hidden overflow-hidden bg-white border-t border-gray-200 shadow-lg"
      >
        <div className="px-4 py-4 space-y-2">
          {navigationItems.map((item, index) => {
            const isActive = location.pathname === item.to;
            return (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={item.to} 
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md' 
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className={isActive ? 'text-white' : 'text-gray-600'}>
                    {item.icon}
                  </span>
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className={`text-xs ${isActive ? 'text-orange-100' : 'text-gray-500'}`}>
                      {item.description}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;