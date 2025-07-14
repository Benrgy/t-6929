
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updatePageSEO as updateSEO, generateBreadcrumbStructuredData } from '../utils/seoOptimizer';
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
          ? 'Lokaal Genieten in de Algarve voor Weinig | Goedkope Vluchten & Authentieke Ervaringen'
          : 'Enjoy Local Algarve for Less | Cheap Flights & Authentic Experiences',
        description: language === 'nl'
          ? 'De beste tips voor Nederlandse reizigers in de Algarve. Goedkope Transavia vluchten vanaf €39, betaalbare accommodaties, lokale ervaringen en autoverhuur. Bespaar tot 40%!'
          : 'The best tips for Dutch travelers to the Algarve. Cheap Transavia flights from €39, affordable accommodations, local experiences and car rental. Save up to 40%!',
        keywords: 'algarve goedkoop, algarve voor weinig, transavia algarve, nederlanders algarve, goedkope vakantie algarve, algarve tips nederlanders, lokale ervaringen algarve',
        canonical: window.location.href,
        structuredData: generateBreadcrumbStructuredData([
          { name: language === 'nl' ? 'Home' : 'Home', url: window.location.origin }
        ])
      });
    } else if (path === '/ervaringen') {
      updateSEO({
        title: language === 'nl' 
          ? 'Authentieke Algarve Ervaringen met Locals | Food Tours & Activiteiten'
          : 'Authentic Algarve Experiences with Locals | Food Tours & Activities',
        description: language === 'nl'
          ? 'Lokale ervaringen in de Algarve. Food tours, wijnproeverijen, kooklessen en natuurwandelingen met lokale gidsen. Echte beoordelingen van Nederlandse reizigers.'
          : 'Local experiences in the Algarve. Food tours, wine tastings, cooking classes and nature walks with local guides. Real reviews from Dutch travelers.',
        keywords: 'algarve food tours, algarve lokale ervaringen, algarve activiteiten, algarve wijnproeverij, algarve kookles',
        canonical: window.location.href,
        structuredData: generateBreadcrumbStructuredData([
          { name: language === 'nl' ? 'Home' : 'Home', url: window.location.origin },
          { name: language === 'nl' ? 'Ervaringen' : 'Experiences', url: window.location.href }
        ])
      });
    } else if (path === '/vluchten') {
      updateSEO({
        title: language === 'nl' 
          ? 'Goedkope Vluchten naar de Algarve | Transavia, TAP, Ryanair Vergelijken'
          : 'Cheap Flights to Algarve | Compare Transavia, TAP, Ryanair',
        description: language === 'nl'
          ? 'Vergelijk vliegtickets naar de Algarve van Transavia, TAP Air Portugal en Ryanair. Actuele prijzen vanaf Amsterdam, Rotterdam en Eindhoven. Bespaar op je vliegticket!'
          : 'Compare flight tickets to the Algarve from Transavia, TAP Air Portugal and Ryanair. Current prices from Amsterdam, Rotterdam and Eindhoven. Save on your flight ticket!',
        keywords: 'goedkope vluchten algarve, transavia algarve, tap air portugal algarve, ryanair algarve, vliegtickets algarve',
        canonical: window.location.href,
        structuredData: generateBreadcrumbStructuredData([
          { name: language === 'nl' ? 'Home' : 'Home', url: window.location.origin },
          { name: language === 'nl' ? 'Vluchten' : 'Flights', url: window.location.href }
        ])
      });
    }
  }, [location, language]);

  return { updateSEO };
};
