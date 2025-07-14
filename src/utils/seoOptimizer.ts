// SEO Optimization utilities

export interface SEOMetaData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

export const updatePageSEO = (metadata: SEOMetaData) => {
  // Update title
  document.title = metadata.title;

  // Update meta description
  updateMetaTag('description', metadata.description);

  // Update keywords if provided
  if (metadata.keywords) {
    updateMetaTag('keywords', metadata.keywords);
  }

  // Update canonical URL if provided
  if (metadata.canonical) {
    updateLinkTag('canonical', metadata.canonical);
  }

  // Update Open Graph meta tags
  updateMetaProperty('og:title', metadata.title);
  updateMetaProperty('og:description', metadata.description);
  updateMetaProperty('og:url', window.location.href);
  
  if (metadata.ogImage) {
    updateMetaProperty('og:image', metadata.ogImage);
  }

  // Update Twitter meta tags
  updateMetaProperty('twitter:title', metadata.title);
  updateMetaProperty('twitter:description', metadata.description);

  // Add structured data if provided
  if (metadata.structuredData) {
    addStructuredData(metadata.structuredData);
  }
};

const updateMetaTag = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const updateMetaProperty = (property: string, content: string) => {
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const updateLinkTag = (rel: string, href: string) => {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    document.head.appendChild(link);
  }
  link.href = href;
};

const addStructuredData = (data: object) => {
  // Remove existing structured data script
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// SEO templates for different page types
export const seoTemplates = {
  homepage: {
    title: 'Lokaal Genieten in de Algarve voor Weinig | Goedkope Vluchten & Authentieke Ervaringen',
    description: 'De beste tips voor Nederlandse reizigers in de Algarve. Goedkope Transavia vluchten vanaf €39, betaalbare accommodaties, lokale ervaringen en autoverhuur. Bespaar tot 40%!',
    keywords: 'algarve goedkoop, algarve voor weinig, transavia algarve, nederlanders algarve, goedkope vakantie algarve'
  },
  experiences: {
    title: 'Authentieke Algarve Ervaringen | Lokale Tips & Geheime Plekken',
    description: 'Ontdek verborgen stranden, authentieke restaurants en lokale bezienswaardigheden in de Algarve. Exclusieve tips van locals voor een unieke vakantie.',
    keywords: 'algarve ervaringen, verborgen stranden algarve, lokale tips algarve, authentieke algarve'
  },
  flights: {
    title: 'Goedkope Vluchten naar de Algarve | Transavia & KLM Aanbiedingen',
    description: 'Vind de goedkoopste vluchten naar Faro. Vergelijk prijzen van Transavia, KLM en andere maatschappijen. Vluchten vanaf €39.',
    keywords: 'goedkope vluchten algarve, transavia faro, klm algarve, vliegtickets portugal'
  },
  about: {
    title: 'Over Ons | Lokaal Genieten in de Algarve',
    description: 'Leer meer over ons team van Algarve-experts. Wij helpen Nederlandse reizigers om authentiek en betaalbaar te genieten van de Algarve.',
    keywords: 'algarve experts, nederlandse reisgids algarve, lokale kennis algarve'
  },
  contact: {
    title: 'Contact | Vragen over de Algarve?',
    description: 'Heb je vragen over de Algarve? Neem contact met ons op voor persoonlijk reisadvies en tips van onze lokale experts.',
    keywords: 'algarve contact, reisadvies algarve, algarve vragen'
  }
};

// Generate location-specific SEO data
export const generateLocationSEO = (location: string, region?: string): SEOMetaData => ({
  title: `${location} Gids | Beste Tips & Bezienswaardigheden${region ? ` in ${region}` : ''}`,
  description: `Ontdek de beste bezienswaardigheden, restaurants en stranden in ${location}. Lokale tips en geheime plekken voor een perfecte vakantie.`,
  keywords: `${location.toLowerCase()}, ${location.toLowerCase()} bezienswaardigheden, ${location.toLowerCase()} restaurants, ${location.toLowerCase()} stranden`,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": location,
    "description": `Reisgids voor ${location} met lokale tips en bezienswaardigheden`,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": region || "Algarve",
      "addressCountry": "PT"
    }
  }
});

// Add missing exports for backward compatibility
export const updateSEO = updatePageSEO;

export const generateBreadcrumbStructuredData = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Performance monitoring for Core Web Vitals
export const initPerformanceMonitoring = () => {
  // Monitor Largest Contentful Paint
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
          // Track LCP in analytics
          if ((window as any).gtag) {
            (window as any).gtag('event', 'lcp', {
              custom_parameter: entry.startTime
            });
          }
        }
      });
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }

  // Monitor Cumulative Layout Shift
  if ('PerformanceObserver' in window) {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as any;
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value;
        }
      }
      
      console.log('CLS:', clsValue);
      if ((window as any).gtag) {
        (window as any).gtag('event', 'cls', {
          custom_parameter: clsValue
        });
      }
    });
    
    observer.observe({ entryTypes: ['layout-shift'] });
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalImages = [
    '/lovable-uploads/1f6daf6e-7023-4399-9b7b-85dee316066e.png',
    '/og-image.png'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};