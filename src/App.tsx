
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlgarveHomepage from './pages/AlgarveHomepage';
import ExperiencesPage from './pages/ExperiencesPage';
import FlightsPage from './pages/FlightsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import BreadcrumbNavigation from './components/BreadcrumbNavigation';
import { LanguageProvider } from './context/LanguageContext';
import { Toaster } from 'sonner';
import { Toaster as ShadcnToaster } from '@/components/ui/toaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ExitIntentPopup from './components/ExitIntentPopup';
import AffiliateTracker from './components/AffiliateTracker';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
    },
  },
});

function App() {
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Add SEO meta tags
    document.title = 'Lokaal Genieten in de Algarve voor Weinig | Goedkope Vluchten & Authentieke Ervaringen';
    
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'De beste tips voor Nederlandse reizigers in de Algarve. Goedkope Transavia vluchten vanaf €39, betaalbare accommodaties, lokale ervaringen en autoverhuur. Bespaar tot 40%!';
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'algarve goedkoop, algarve voor weinig, transavia algarve, nederlanders algarve, goedkope vakantie algarve, algarve tips nederlanders, lokale ervaringen algarve';
    document.head.appendChild(metaKeywords);

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "@id": "https://lokaalgenieten-algarve.com",
      "name": "Lokaal Genieten in de Algarve",
      "description": "Platform voor authentieke Algarve ervaringen en reisbenodigdheden",
      "url": "https://lokaalgenieten-algarve.com",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Algarve",
        "addressCountry": "PT"
      },
      "priceRange": "€€",
      "availableLanguage": ["nl", "en"]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Exit intent detection
    let exitIntentShown = false;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitIntentShown) {
        setShowExitPopup(true);
        exitIntentShown = true;
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      const existingLink = document.head.querySelector('link[href*="fonts.googleapis.com"]');
      if (existingLink) document.head.removeChild(existingLink);
    };
  }, []);

  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="min-h-screen bg-background font-sans antialiased">
            <Toaster />
            <ShadcnToaster />
            <AffiliateTracker />
            <BreadcrumbNavigation />
            <Routes>
              <Route path="/" element={<AlgarveHomepage />} />
              <Route path="/experiences" element={<ExperiencesPage />} />
              <Route path="/flights" element={<FlightsPage />} />
              <Route path="/over-ons" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ExitIntentPopup 
              isVisible={showExitPopup} 
              onClose={() => setShowExitPopup(false)} 
            />
          </div>
        </Router>
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
