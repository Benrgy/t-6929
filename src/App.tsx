
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { LanguageProvider } from './context/LanguageContext';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import OfflineIndicator from './components/OfflineIndicator';
import PerformanceMonitor from './components/PerformanceMonitor';
import ConversionTracker from './components/ConversionTracker';
import PerformanceAnalytics from './components/PerformanceAnalytics';
import PerformanceOptimizer from './components/PerformanceOptimizer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

function App() {
  useEffect(() => {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    // Add manifest link
    const link = document.createElement('link');
    link.rel = 'manifest';
    link.href = '/manifest.json';
    document.head.appendChild(link);

    // Performance optimization: Preload critical routes
    const preloadRoutes = () => {
      const routes = ['/'];
      routes.forEach(route => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      });
    };

    preloadRoutes();

    return () => {
      const existingLink = document.head.querySelector('link[rel="manifest"]');
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, []);

  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ConversionTracker>
            <div className="min-h-screen bg-background font-sans antialiased">
              <Toaster />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              
              {/* PWA Features */}
              <PWAInstallPrompt />
              <OfflineIndicator />
              <PerformanceMonitor />
              <PerformanceAnalytics />
              <PerformanceOptimizer />
            </div>
          </ConversionTracker>
        </Router>
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
