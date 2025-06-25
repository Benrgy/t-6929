import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  userId?: string;
}

interface UserSession {
  sessionId: string;
  startTime: number;
  pageViews: number;
  events: AnalyticsEvent[];
  userAgent: string;
  referrer: string;
}

export const useAnalytics = () => {
  const location = useLocation();

  // Initialize session
  useEffect(() => {
    const sessionId = localStorage.getItem('analytics-session') || generateSessionId();
    localStorage.setItem('analytics-session', sessionId);
    
    // Track page view
    trackPageView(location.pathname);
  }, [location]);

  const generateSessionId = (): string => {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const trackPageView = useCallback((path: string) => {
    const event: AnalyticsEvent = {
      event: 'page_view',
      category: 'navigation',
      action: 'view',
      label: path,
      value: Date.now()
    };
    
    // Store in localStorage for offline capability
    storeAnalyticsEvent(event);
    
    // Send to analytics service (mock for now)
    console.log('📊 Page View Tracked:', event);
  }, []);

  const trackEvent = useCallback((category: string, action: string, label?: string, value?: number) => {
    const event: AnalyticsEvent = {
      event: 'custom_event',
      category,
      action,
      label,
      value
    };
    
    storeAnalyticsEvent(event);
    console.log('📊 Event Tracked:', event);
  }, []);

  const trackConversion = useCallback((type: string, value?: number) => {
    const event: AnalyticsEvent = {
      event: 'conversion',
      category: 'engagement',
      action: type,
      value
    };
    
    storeAnalyticsEvent(event);
    console.log('🎯 Conversion Tracked:', event);
  }, []);

  const storeAnalyticsEvent = (event: AnalyticsEvent) => {
    const events = JSON.parse(localStorage.getItem('analytics-events') || '[]');
    events.push({ ...event, timestamp: Date.now() });
    
    // Keep only last 100 events to avoid storage bloat
    const recentEvents = events.slice(-100);
    localStorage.setItem('analytics-events', JSON.stringify(recentEvents));
  };

  return {
    trackEvent,
    trackConversion,
    trackPageView
  };
};
