
import { useState, useEffect } from 'react';

interface ABTestConfig {
  testId: string;
  variants: string[];
  traffic: number; // Percentage 0-100
  active: boolean;
}

interface ABTestResult {
  variant: string;
  isControl: boolean;
  testId: string;
}

const AB_TESTS: ABTestConfig[] = [
  {
    testId: 'hero_cta_text',
    variants: ['default', 'urgent', 'benefits'],
    traffic: 100,
    active: true
  },
  {
    testId: 'search_bar_position',
    variants: ['top', 'center', 'sticky'],
    traffic: 50,
    active: true
  },
  {
    testId: 'pricing_display',
    variants: ['euros', 'ranges', 'comparison'],
    traffic: 30,
    active: false
  }
];

export const useABTest = (testId: string): ABTestResult => {
  const [result, setResult] = useState<ABTestResult>({
    variant: 'default',
    isControl: true,
    testId
  });

  useEffect(() => {
    const test = AB_TESTS.find(t => t.testId === testId);
    
    if (!test || !test.active) {
      setResult({
        variant: 'default',
        isControl: true,
        testId
      });
      return;
    }

    // Check if user is in test traffic
    const userId = localStorage.getItem('analytics-session') || 'anonymous';
    const hash = simpleHash(userId + testId);
    const userPercentile = hash % 100;

    if (userPercentile >= test.traffic) {
      // User not in test traffic
      setResult({
        variant: 'default',
        isControl: true,
        testId
      });
      return;
    }

    // Assign variant
    const variantIndex = hash % test.variants.length;
    const variant = test.variants[variantIndex];
    
    setResult({
      variant,
      isControl: variant === 'default',
      testId
    });

    // Store test assignment
    const assignments = JSON.parse(localStorage.getItem('ab-assignments') || '{}');
    assignments[testId] = variant;
    localStorage.setItem('ab-assignments', JSON.stringify(assignments));

  }, [testId]);

  return result;
};

const simpleHash = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
};

export const getABTestVariant = (testId: string): string => {
  const assignments = JSON.parse(localStorage.getItem('ab-assignments') || '{}');
  return assignments[testId] || 'default';
};
