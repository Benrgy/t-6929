// Analytics & Tracking - Enhanced for Static Site

class AnalyticsManager {
    constructor() {
        this.affiliateLinks = new Map();
        this.pageStartTime = Date.now();
        this.init();
    }
    
    init() {
        this.initGoogleAnalytics();
        this.initAffiliateTracking();
        this.initScrollTracking();
        this.initClickTracking();
        this.initPerformanceTracking();
        this.initConversionTracking();
        this.initErrorTracking();
        
        console.log('📊 Analytics system initialized');
    }
    
    // Google Analytics Setup
    initGoogleAnalytics() {
        // Replace with your actual GA4 measurement ID
        const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID';
        
        if (typeof gtag === 'undefined') {
            // Load Google Analytics script dynamically
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
            document.head.appendChild(script);
            
            // Initialize gtag
            window.dataLayer = window.dataLayer || [];
            window.gtag = function() { dataLayer.push(arguments); };
            gtag('js', new Date());
            gtag('config', GA_MEASUREMENT_ID, {
                page_title: document.title,
                page_location: window.location.href,
                custom_map: {
                    'custom_parameter_1': 'page_type',
                    'custom_parameter_2': 'user_type'
                }
            });
        }
        
        // Track initial page view
        this.trackPageView();
    }
    
    // Affiliate Link Tracking
    initAffiliateTracking() {
        // Map of affiliate partners and their tracking codes
        this.affiliatePartners = {
            transavia: {
                baseUrl: 'https://www.transavia.com',
                trackingParam: '?partner=lokaal-genieten',
                commission: 0.03
            },
            tap: {
                baseUrl: 'https://www.flytap.com',
                trackingParam: '?affiliate=lokaal-genieten',
                commission: 0.025
            },
            ryanair: {
                baseUrl: 'https://www.ryanair.com',
                trackingParam: '?partner=lokaal-genieten',
                commission: 0.02
            },
            klm: {
                baseUrl: 'https://www.klm.com',
                trackingParam: '?affiliate=lokaal-genieten',
                commission: 0.035
            },
            booking: {
                baseUrl: 'https://www.booking.com',
                trackingParam: '?aid=lokaal-genieten',
                commission: 0.04
            },
            skyscanner: {
                baseUrl: 'https://www.skyscanner.nl',
                trackingParam: '?associateid=lokaal-genieten',
                commission: 0.015
            }
        };
        
        // Add affiliate tracking to all relevant links
        this.setupAffiliateLinks();
    }
    
    setupAffiliateLinks() {
        const affiliateLinks = document.querySelectorAll('.affiliate-link, [data-airline]');
        
        affiliateLinks.forEach(link => {
            const airline = link.dataset.airline;
            const partner = this.affiliatePartners[airline];
            
            if (partner) {
                // Update href with tracking parameters
                const url = new URL(partner.baseUrl);
                url.search = partner.trackingParam;
                link.href = url.toString();
                
                // Add tracking attributes
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener sponsored');
                
                // Track clicks
                link.addEventListener('click', () => {
                    this.trackAffiliateClick(airline, partner);
                });
            }
        });
    }
    
    trackAffiliateClick(airline, partner) {
        // Track in Google Analytics
        if (window.gtag) {
            gtag('event', 'affiliate_click', {
                event_category: 'affiliate',
                event_label: airline,
                value: Math.round(partner.commission * 100), // Expected commission in cents
                custom_parameter_1: 'affiliate_link',
                custom_parameter_2: airline
            });
        }
        
        // Track in local storage for conversion attribution
        const clickData = {
            airline: airline,
            timestamp: Date.now(),
            page: window.location.pathname,
            referrer: document.referrer
        };
        
        this.storeConversionData('affiliate_click', clickData);
        
        console.log(`🔗 Affiliate click tracked: ${airline}`);
    }
    
    // Scroll Depth Tracking
    initScrollTracking() {
        const scrollThresholds = [25, 50, 75, 90, 100];
        const trackedThresholds = new Set();
        
        const trackScrollDepth = () => {
            const scrollPercent = Math.round(
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
            );
            
            scrollThresholds.forEach(threshold => {
                if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
                    trackedThresholds.add(threshold);
                    
                    if (window.gtag) {
                        gtag('event', 'scroll_depth', {
                            event_category: 'engagement',
                            event_label: `${threshold}%`,
                            value: threshold
                        });
                    }
                }
            });
        };
        
        // Throttled scroll tracking
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    trackScrollDepth();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
    
    // Click Tracking
    initClickTracking() {
        // Track important button clicks
        const trackableButtons = document.querySelectorAll(
            '.btn-primary, .btn-ocean, .service-card, .experience-card, .cta-button'
        );
        
        trackableButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const buttonText = button.textContent?.trim() || 'Unknown';
                const buttonType = button.className.includes('btn-primary') ? 'primary' : 'secondary';
                
                if (window.gtag) {
                    gtag('event', 'button_click', {
                        event_category: 'engagement',
                        event_label: buttonText,
                        custom_parameter_1: buttonType,
                        custom_parameter_2: window.location.pathname
                    });
                }
            });
        });
        
        // Track external link clicks
        const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="lokaal-genieten"])');
        externalLinks.forEach(link => {
            link.addEventListener('click', () => {
                const domain = new URL(link.href).hostname;
                
                if (window.gtag) {
                    gtag('event', 'external_link_click', {
                        event_category: 'engagement',
                        event_label: domain,
                        value: 1
                    });
                }
            });
        });
    }
    
    // Performance Tracking
    initPerformanceTracking() {
        // Core Web Vitals tracking
        if ('web-vital' in window) {
            // This would require importing web-vitals library
            // For now, we'll track basic performance metrics
        }
        
        // Track page load time
        window.addEventListener('load', () => {
            setTimeout(() => {
                const navigation = performance.getEntriesByType('navigation')[0];
                const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
                
                if (window.gtag) {
                    gtag('event', 'page_load_time', {
                        event_category: 'performance',
                        value: Math.round(loadTime),
                        custom_parameter_1: 'load_time',
                        custom_parameter_2: this.getPageType()
                    });
                }
                
                // Track if load time is slow
                if (loadTime > 3000) {
                    gtag('event', 'slow_page_load', {
                        event_category: 'performance',
                        value: Math.round(loadTime)
                    });
                }
            }, 0);
        });
        
        // Track time on page
        window.addEventListener('beforeunload', () => {
            const timeOnPage = Date.now() - this.pageStartTime;
            
            if (window.gtag && timeOnPage > 1000) { // Only track if more than 1 second
                gtag('event', 'time_on_page', {
                    event_category: 'engagement',
                    value: Math.round(timeOnPage / 1000), // Convert to seconds
                    custom_parameter_1: this.getPageType()
                });
            }
        });
    }
    
    // Conversion Tracking
    initConversionTracking() {
        // Track form submissions
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                const formType = this.getFormType(form);
                
                if (window.gtag) {
                    gtag('event', 'form_submit', {
                        event_category: 'conversion',
                        event_label: formType,
                        value: this.getConversionValue(formType)
                    });
                }
                
                // Store conversion data
                this.storeConversionData('form_submit', {
                    type: formType,
                    timestamp: Date.now(),
                    page: window.location.pathname
                });
            });
        });
        
        // Track email link clicks
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        emailLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.gtag) {
                    gtag('event', 'email_click', {
                        event_category: 'conversion',
                        event_label: 'contact_attempt',
                        value: 5 // Assign value to email contacts
                    });
                }
            });
        });
        
        // Track phone link clicks
        const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
        phoneLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.gtag) {
                    gtag('event', 'phone_click', {
                        event_category: 'conversion',
                        event_label: 'contact_attempt',
                        value: 8 // Assign higher value to phone contacts
                    });
                }
            });
        });
    }
    
    // Error Tracking
    initErrorTracking() {
        // Track JavaScript errors
        window.addEventListener('error', (e) => {
            if (window.gtag) {
                gtag('event', 'javascript_error', {
                    event_category: 'error',
                    event_label: e.message,
                    value: 1,
                    custom_parameter_1: e.filename,
                    custom_parameter_2: e.lineno
                });
            }
        });
        
        // Track unhandled promise rejections
        window.addEventListener('unhandledrejection', (e) => {
            if (window.gtag) {
                gtag('event', 'unhandled_rejection', {
                    event_category: 'error',
                    event_label: e.reason?.message || 'Unknown error',
                    value: 1
                });
            }
        });
        
        // Track 404 errors (if on 404 page)
        if (document.title.includes('404') || window.location.pathname.includes('404')) {
            if (window.gtag) {
                gtag('event', '404_error', {
                    event_category: 'error',
                    event_label: window.location.pathname,
                    value: 1,
                    custom_parameter_1: document.referrer
                });
            }
        }
    }
    
    // Utility Methods
    trackPageView() {
        if (window.gtag) {
            gtag('event', 'page_view', {
                page_title: document.title,
                page_location: window.location.href,
                page_path: window.location.pathname,
                custom_parameter_1: this.getPageType(),
                custom_parameter_2: this.getUserType()
            });
        }
    }
    
    getPageType() {
        const path = window.location.pathname;
        if (path === '/') return 'homepage';
        if (path.includes('experiences')) return 'experiences';
        if (path.includes('flights')) return 'flights';
        if (path.includes('contact')) return 'contact';
        if (path.includes('over-ons')) return 'about';
        return 'other';
    }
    
    getUserType() {
        // Determine user type based on behavior
        const hasVisitedBefore = localStorage.getItem('hasVisited');
        const affiliateClicks = localStorage.getItem('affiliateClicks');
        
        if (affiliateClicks && JSON.parse(affiliateClicks).length > 0) {
            return 'converter';
        } else if (hasVisitedBefore) {
            return 'returning';
        } else {
            localStorage.setItem('hasVisited', 'true');
            return 'new';
        }
    }
    
    getFormType(form) {
        if (form.id === 'newsletter-form') return 'newsletter';
        if (form.classList.contains('contact-form')) return 'contact';
        if (form.classList.contains('popup-form')) return 'exit_intent';
        return 'unknown';
    }
    
    getConversionValue(formType) {
        const values = {
            newsletter: 2,
            contact: 10,
            exit_intent: 5,
            unknown: 1
        };
        return values[formType] || 1;
    }
    
    storeConversionData(type, data) {
        const key = `${type}_data`;
        const existing = JSON.parse(localStorage.getItem(key) || '[]');
        existing.push(data);
        
        // Keep only last 50 entries
        if (existing.length > 50) {
            existing.splice(0, existing.length - 50);
        }
        
        localStorage.setItem(key, JSON.stringify(existing));
    }
    
    // Public API for manual tracking
    track(eventName, parameters = {}) {
        if (window.gtag) {
            gtag('event', eventName, {
                event_category: parameters.category || 'custom',
                event_label: parameters.label,
                value: parameters.value || 1,
                ...parameters
            });
        }
        console.log(`📊 Custom event tracked: ${eventName}`, parameters);
    }
    
    trackConversion(type, value = 1) {
        if (window.gtag) {
            gtag('event', 'conversion', {
                event_category: 'conversion',
                event_label: type,
                value: value
            });
        }
        console.log(`💰 Conversion tracked: ${type} (value: ${value})`);
    }
}

// Initialize analytics when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    window.analyticsManager = new AnalyticsManager();
});

// Export for global use
window.AnalyticsManager = AnalyticsManager;
