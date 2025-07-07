
import React, { useEffect } from 'react';

// Declare gtag as a global function to avoid TypeScript errors
declare global {
  function gtag(...args: any[]): void;
}

const AffiliateTracker: React.FC = () => {
  useEffect(() => {
    // Add affiliate tracking parameters and icons
    const setupAffiliateLinks = () => {
      // Booking.com affiliate links
      const bookingLinks = document.querySelectorAll('a[href*="booking.com"]');
      bookingLinks.forEach(link => {
        if (!link.getAttribute('href')?.includes('aid=')) {
          const url = new URL(link.getAttribute('href') || '');
          url.searchParams.set('aid', 'YOUR_BOOKING_AFFILIATE_ID');
          link.setAttribute('href', url.toString());
        }
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer sponsored');
      });

      // Airbnb affiliate links
      const airbnbLinks = document.querySelectorAll('a[href*="airbnb"]');
      airbnbLinks.forEach(link => {
        link.setAttribute('href', 'https://www.airbnb.com/c/YOUR_REFERRAL_CODE?currency=EUR&s=67');
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer sponsored');
      });

      // Sunny Cars affiliate links
      const sunnyCarsLinks = document.querySelectorAll('a[href*="sunnycars"]');
      sunnyCarsLinks.forEach(link => {
        if (!link.getAttribute('href')?.includes('affiliate=')) {
          const url = new URL(link.getAttribute('href') || '');
          url.searchParams.set('affiliate', 'YOUR_SUNNY_CARS_ID');
          link.setAttribute('href', url.toString());
        }
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer sponsored');
      });

      // Add affiliate icons
      const affiliateLinks = document.querySelectorAll('a[rel*="sponsored"]');
      affiliateLinks.forEach(link => {
        if (!link.querySelector('.affiliate-icon')) {
          const icon = document.createElement('span');
          icon.className = 'affiliate-icon';
          icon.style.cssText = 'font-size:12px;opacity:0.7;margin-left:2px;';
          icon.title = 'Affiliate link - wij ontvangen commissie';
          icon.innerHTML = ' 🔗';
          link.appendChild(icon);
        }
      });
    };

    // Track affiliate clicks
    const trackAffiliateClicks = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.getAttribute('rel')?.includes('sponsored')) {
        console.log('Affiliate click tracked:', link.href);
        
        // Track with analytics (mock for now)
        if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
          gtag('event', 'affiliate_click', {
            'event_category': 'monetization',
            'event_label': link.hostname,
            'value': 1
          });
        }
      }
    };

    // Setup affiliate links
    setupAffiliateLinks();

    // Add click tracking
    document.addEventListener('click', trackAffiliateClicks);

    // Re-setup links when DOM changes (for dynamic content)
    const observer = new MutationObserver(() => {
      setupAffiliateLinks();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      document.removeEventListener('click', trackAffiliateClicks);
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AffiliateTracker;
