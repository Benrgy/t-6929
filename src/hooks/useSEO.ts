
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateSEO, generateBreadcrumbStructuredData } from '../utils/seoOptimizer';
import { useLanguage } from '../context/LanguageContext';

export const useSEO = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    // Auto-optimize SEO based on current route
    const path = location.pathname;
    
    if (path === '/') {
      updateSEO({
        title: language === 'nl' 
          ? 'Authentieke Algarve Reisgids - Lokale Tips & Verborgen Pareltjes'
          : 'Authentic Algarve Travel Guide - Local Tips & Hidden Gems',
        description: language === 'nl'
          ? 'Ontdek de echte Algarve met lokale insider tips. Thermale bronnen, authentieke dorpen, geheime stranden en meer. Van locals voor reizigers.'
          : 'Discover the real Algarve with local insider tips. Thermal springs, authentic villages, secret beaches and more. From locals for travelers.',
        keywords: ['algarve', 'portugal', 'travel guide', 'local tips', 'authentic', 'thermal springs', 'hidden gems'],
        canonicalUrl: window.location.href,
        structuredData: generateBreadcrumbStructuredData([
          { name: language === 'nl' ? 'Home' : 'Home', url: window.location.origin }
        ])
      });
    }
  }, [location, language]);

  return { updateSEO };
};
