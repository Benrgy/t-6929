
import React, { useEffect } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';
import { useABTest } from '../hooks/useABTest';

interface ConversionTrackerProps {
  children: React.ReactNode;
}

const ConversionTracker: React.FC<ConversionTrackerProps> = ({ children }) => {
  const { trackEvent, trackConversion } = useAnalytics();
  const heroTest = useABTest('hero_cta_text');

  useEffect(() => {
    // Track scroll depth
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      // Track milestone scroll depths
      if (scrollPercent >= 25 && !sessionStorage.getItem('scroll-25')) {
        trackEvent('engagement', 'scroll_depth', '25_percent');
        sessionStorage.setItem('scroll-25', 'true');
      }
      if (scrollPercent >= 50 && !sessionStorage.getItem('scroll-50')) {
        trackEvent('engagement', 'scroll_depth', '50_percent');
        sessionStorage.setItem('scroll-50', 'true');
      }
      if (scrollPercent >= 75 && !sessionStorage.getItem('scroll-75')) {
        trackEvent('engagement', 'scroll_depth', '75_percent');
        sessionStorage.setItem('scroll-75', 'true');
      }
      if (scrollPercent >= 90 && !sessionStorage.getItem('scroll-90')) {
        trackEvent('engagement', 'scroll_depth', '90_percent');
        sessionStorage.setItem('scroll-90', 'true');
      }
    };

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent >= 30 && !sessionStorage.getItem('time-30s')) {
        trackEvent('engagement', 'time_on_page', '30_seconds');
        sessionStorage.setItem('time-30s', 'true');
      }
      if (timeSpent >= 60 && !sessionStorage.getItem('time-60s')) {
        trackEvent('engagement', 'time_on_page', '1_minute');
        sessionStorage.setItem('time-60s', 'true');
      }
      if (timeSpent >= 180 && !sessionStorage.getItem('time-180s')) {
        trackEvent('engagement', 'time_on_page', '3_minutes');
        sessionStorage.setItem('time-180s', 'true');
      }
    };

    // Track clicks on external links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href) {
        const isExternal = !link.href.includes(window.location.hostname);
        if (isExternal) {
          trackEvent('navigation', 'external_link_click', link.href);
          trackConversion('external_link', 1);
        }
      }
    };

    // Track form interactions
    const handleFormInteraction = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        trackEvent('form', 'field_interaction', target.getAttribute('name') || 'unknown');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleLinkClick);
    document.addEventListener('focus', handleFormInteraction, true);
    
    const timeInterval = setInterval(trackTimeOnPage, 10000); // Check every 10 seconds

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleLinkClick);
      document.removeEventListener('focus', handleFormInteraction, true);
      clearInterval(timeInterval);
    };
  }, [trackEvent, trackConversion]);

  return <>{children}</>;
};

export default ConversionTracker;
