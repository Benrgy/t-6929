import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Sun, MapPin, Mail, Phone, ExternalLink, Heart, Star, Users, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const FooterSection: React.FC = () => {
  const { language } = useLanguage();

  const quickLinks = [
    { to: '/experiences', label: language === 'nl' ? 'Ervaringen' : 'Experiences' },
    { to: '/flights', label: language === 'nl' ? 'Vluchten' : 'Flights' },
    { to: '/over-ons', label: language === 'nl' ? 'Over Ons' : 'About Us' },
    { to: '/contact', label: language === 'nl' ? 'Contact' : 'Contact' }
  ];

  const popularDestinations = [
    'Tavira', 'Sagres', 'Monsaraz', 'Lagos', 'Óbidos', 'Cacela Velha'
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'Youtube' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Sun className="w-8 h-8 text-orange-500" />
                <div className="absolute -inset-1 bg-orange-500/20 rounded-full blur"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  {language === 'nl' ? 'Lokaal Genieten' : 'Local Experience'}
                </h3>
                <p className="text-sm text-gray-400">Algarve</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {language === 'nl' ? 
                'Jouw vertrouwde Nederlandse gids voor authentieke Algarve ervaringen. Ontdek verborgen pareltjes en bespaar tot 40% op je droomvakantie.' :
                'Your trusted Dutch guide for authentic Algarve experiences. Discover hidden gems and save up to 40% on your dream vacation.'
              }
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-orange-400" />
                <span>Algarve, Portugal</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-orange-400" />
                <span>info@lokaal-genieten-algarve.nl</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">
              {language === 'nl' ? 'Snelle Links' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Trust Indicators */}
            <div className="mt-8 space-y-2">
              <div className="flex items-center text-green-400 text-sm">
                <Star className="w-4 h-4 mr-2" />
                <span>4.9/5 {language === 'nl' ? 'klantwaardering' : 'customer rating'}</span>
              </div>
              <div className="flex items-center text-blue-400 text-sm">
                <Users className="w-4 h-4 mr-2" />
                <span>50,000+ {language === 'nl' ? 'tevreden reizigers' : 'happy travelers'}</span>
              </div>
            </div>
          </motion.div>

          {/* Popular Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">
              {language === 'nl' ? 'Populaire Bestemmingen' : 'Popular Destinations'}
            </h4>
            <ul className="space-y-3">
              {popularDestinations.map((destination, index) => (
                <li key={destination}>
                  <button className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm text-left group">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-block"></span>
                    {destination}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">
              {language === 'nl' ? 'Blijf Verbonden' : 'Stay Connected'}
            </h4>
            
            <p className="text-gray-300 text-sm mb-4">
              {language === 'nl' 
                ? 'Volg ons voor de nieuwste tips en aanbiedingen'
                : 'Follow us for the latest tips and deals'
              }
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-200 group"
                  aria-label={social.label}
                >
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center">
                <Heart className="w-3 h-3 mr-2 text-red-400" />
                <span>{language === 'nl' ? 'Gemaakt met liefde' : 'Made with love'}</span>
              </div>
              <div className="flex items-center">
                <ExternalLink className="w-3 h-3 mr-2 text-green-400" />
                <span>{language === 'nl' ? 'Betrouwbare partners' : 'Trusted partners'}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; 2024 {language === 'nl' ? 'Lokaal Genieten Algarve' : 'Local Experience Algarve'}. {language === 'nl' ? 'Alle rechten voorbehouden.' : 'All rights reserved.'}</p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                {language === 'nl' ? 'Privacy Beleid' : 'Privacy Policy'}
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                {language === 'nl' ? 'Algemene Voorwaarden' : 'Terms of Service'}
              </Link>
              <button className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                {language === 'nl' ? 'Cookie Instellingen' : 'Cookie Settings'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
    </footer>
  );
};

export default FooterSection;