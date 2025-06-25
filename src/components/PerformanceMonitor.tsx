
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface PerformanceMetrics {
  loadTime: number;
  fcp: number;
  lcp: number;
  cls: number;
}

const PerformanceMonitor: React.FC = () => {
  const { language } = useLanguage();
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    // Measure performance metrics
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const fcp = paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0;
      
      setMetrics({
        loadTime,
        fcp,
        lcp: 0, // Would need observer for real LCP
        cls: 0  // Would need observer for real CLS
      });
    };

    setTimeout(measurePerformance, 1000);
  }, []);

  // Show metrics only in development or when manually triggered
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setShowMetrics(!showMetrics);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showMetrics]);

  if (!showMetrics || !metrics) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-black bg-opacity-80 text-white p-3 rounded-lg text-xs font-mono z-50">
      <div className="mb-2 font-bold">
        {language === 'nl' ? '⚡ Performance Metrics' : '⚡ Performance Metrics'}
      </div>
      <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
      <div>FCP: {metrics.fcp.toFixed(2)}ms</div>
      <div className="text-xs text-gray-300 mt-2">
        Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;
