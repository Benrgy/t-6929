// Language Switching Functionality

class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('preferredLanguage') || 'nl';
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.updateContent();
        this.updateButtons();
    }
    
    bindEvents() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.switchLanguage(lang);
            });
        });
    }
    
    switchLanguage(lang) {
        if (lang === this.currentLanguage) return;
        
        this.currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang);
        
        this.updateContent();
        this.updateButtons();
        this.updateURL();
        this.trackLanguageChange();
        
        // Show notification
        const message = lang === 'nl' 
            ? '🇳🇱 Taal gewijzigd naar Nederlands'
            : '🇬🇧 Language changed to English';
        showToast(message, 'info');
    }
    
    updateContent() {
        const elements = document.querySelectorAll('[data-nl][data-en]');
        
        elements.forEach(element => {
            const content = element.dataset[this.currentLanguage];
            if (content) {
                element.textContent = content;
            }
        });
        
        // Update placeholders
        const inputs = document.querySelectorAll('input[data-placeholder-nl][data-placeholder-en]');
        inputs.forEach(input => {
            const placeholder = input.dataset[`placeholder${this.currentLanguage === 'nl' ? 'Nl' : 'En'}`];
            if (placeholder) {
                input.placeholder = placeholder;
            }
        });
        
        // Update document language
        document.documentElement.lang = this.currentLanguage;
        
        // Update meta tags
        this.updateSEOTags();
    }
    
    updateButtons() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(button => {
            const isActive = button.dataset.lang === this.currentLanguage;
            button.classList.toggle('active', isActive);
        });
    }
    
    updateURL() {
        // Add language parameter to URL without page reload
        const url = new URL(window.location);
        url.searchParams.set('lang', this.currentLanguage);
        window.history.replaceState({}, '', url);
    }
    
    updateSEOTags() {
        const titles = {
            '/': {
                nl: 'Lokaal Genieten in de Algarve voor Weinig | Goedkope Vluchten vanaf €79',
                en: 'Enjoy Local Algarve for Less | Cheap Flights from €79'
            },
            '/experiences/': {
                nl: 'Authentieke Algarve Ervaringen | Lokale Tips & Verborgen Parels',
                en: 'Authentic Algarve Experiences | Local Tips & Hidden Gems'
            },
            '/flights/': {
                nl: 'Goedkope Vluchten naar Algarve | Transavia vanaf €79',
                en: 'Cheap Flights to Algarve | Transavia from €79'
            }
        };
        
        const descriptions = {
            '/': {
                nl: 'Ontdek de echte Algarve voor weinig geld. Transavia vluchten vanaf €79, lokale tips van Nederlandse expats, verborgen stranden en authentieke ervaringen.',
                en: 'Discover the real Algarve for less money. Transavia flights from €79, local tips from Dutch expats, hidden beaches and authentic experiences.'
            },
            '/experiences/': {
                nl: 'Ontdek 15+ verborgen plekken in de Algarve met tips van Nederlandse expats. Van Benagil grotten tot Monchique bergen.',
                en: 'Discover 15+ hidden places in the Algarve with tips from Dutch expats. From Benagil caves to Monchique mountains.'
            },
            '/flights/': {
                nl: 'Vergelijk alle vluchten naar de Algarve. Transavia vanaf €79, inclusief boektips en seizoensprijzen.',
                en: 'Compare all flights to the Algarve. Transavia from €79, including booking tips and seasonal prices.'
            }
        };
        
        const currentPath = window.location.pathname;
        const pageKey = currentPath.endsWith('/') ? currentPath : currentPath + '/';
        
        // Update title
        if (titles[pageKey]) {
            document.title = titles[pageKey][this.currentLanguage];
        }
        
        // Update meta description
        if (descriptions[pageKey]) {
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.content = descriptions[pageKey][this.currentLanguage];
            }
        }
        
        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDesc = document.querySelector('meta[property="og:description"]');
        
        if (ogTitle && titles[pageKey]) {
            ogTitle.content = titles[pageKey][this.currentLanguage];
        }
        
        if (ogDesc && descriptions[pageKey]) {
            ogDesc.content = descriptions[pageKey][this.currentLanguage];
        }
    }
    
    trackLanguageChange() {
        if (window.gtag) {
            gtag('event', 'language_change', {
                event_category: 'engagement',
                event_label: this.currentLanguage,
                value: 1
            });
        }
    }
    
    // Utility methods
    t(key, fallback = key) {
        const translations = {
            // Navigation
            home: { nl: 'Home', en: 'Home' },
            experiences: { nl: 'Ervaringen', en: 'Experiences' },
            flights: { nl: 'Vluchten', en: 'Flights' },
            about: { nl: 'Over Ons', en: 'About Us' },
            contact: { nl: 'Contact', en: 'Contact' },
            
            // Common phrases
            readMore: { nl: 'Lees Meer', en: 'Read More' },
            bookNow: { nl: 'Boek Nu', en: 'Book Now' },
            learnMore: { nl: 'Meer Info', en: 'Learn More' },
            getStarted: { nl: 'Begin Nu', en: 'Get Started' },
            
            // Forms
            name: { nl: 'Naam', en: 'Name' },
            email: { nl: 'E-mail', en: 'Email' },
            message: { nl: 'Bericht', en: 'Message' },
            subject: { nl: 'Onderwerp', en: 'Subject' },
            send: { nl: 'Versturen', en: 'Send' },
            
            // Time periods
            spring: { nl: 'Lente', en: 'Spring' },
            summer: { nl: 'Zomer', en: 'Summer' },
            autumn: { nl: 'Herfst', en: 'Autumn' },
            winter: { nl: 'Winter', en: 'Winter' },
            
            // Airlines
            cheapest: { nl: 'Goedkoopste', en: 'Cheapest' },
            mostPopular: { nl: 'Meest Populair', en: 'Most Popular' },
            bestService: { nl: 'Beste Service', en: 'Best Service' },
            premium: { nl: 'Premium', en: 'Premium' },
            
            // FAQ
            faqTitle: { nl: 'Veelgestelde Vragen', en: 'Frequently Asked Questions' },
            
            // Newsletter
            newsletterTitle: { nl: 'Mis geen enkele deal!', en: "Don't miss any deal!" },
            newsletterDesc: { nl: 'Ontvang exclusieve vliegdeals en lokale tips in je inbox', en: 'Receive exclusive flight deals and local tips in your inbox' },
            subscribe: { nl: 'Aanmelden', en: 'Subscribe' }
        };
        
        return translations[key]?.[this.currentLanguage] || fallback;
    }
    
    formatPrice(amount, currency = 'EUR') {
        const locale = this.currentLanguage === 'nl' ? 'nl-NL' : 'en-US';
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency
        }).format(amount);
    }
    
    formatDate(date, options = {}) {
        const locale = this.currentLanguage === 'nl' ? 'nl-NL' : 'en-US';
        return new Intl.DateTimeFormat(locale, options).format(date);
    }
}

// Auto-detect language from browser or URL
function detectLanguage() {
    // Check URL parameter first
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && ['nl', 'en'].includes(urlLang)) {
        return urlLang;
    }
    
    // Check localStorage
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && ['nl', 'en'].includes(savedLang)) {
        return savedLang;
    }
    
    // Check browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('nl')) {
        return 'nl';
    }
    
    // Default to Dutch (target audience)
    return 'nl';
}

// Initialize language manager when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    const detectedLang = detectLanguage();
    if (detectedLang !== 'nl') {
        localStorage.setItem('preferredLanguage', detectedLang);
    }
    
    // Initialize language manager
    window.languageManager = new LanguageManager();
    
    console.log(`Language system initialized: ${window.languageManager.currentLanguage}`);
});

// Export for global use
window.LanguageManager = LanguageManager;