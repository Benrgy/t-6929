// Main JavaScript - Core Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initSmoothScrolling();
    initLazyLoading();
    initExitIntent();
    initNewsletterForm();
    initContactForm();
    initServiceWorker();
    initBackToTop();
    initFAQToggle();
    
    console.log('✅ Lokaal Genieten Algarve website loaded successfully');
});

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            mobileToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on links
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('show');
                mobileToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('show');
                mobileToggle.classList.remove('active');
            }
        });
    }
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = link.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Lazy Loading for Images
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Exit Intent Popup
function initExitIntent() {
    const popup = document.getElementById('exit-popup');
    const closeBtn = popup?.querySelector('.popup-close');
    let hasShown = localStorage.getItem('exitIntentShown');
    let isExiting = false;
    
    if (!popup || hasShown) return;
    
    // Show popup on mouse leave
    document.addEventListener('mouseleave', function(e) {
        if (e.clientY <= 0 && !isExiting && !hasShown) {
            isExiting = true;
            showPopup();
        }
    });
    
    // Show popup on mobile scroll up
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', function() {
        if (window.innerWidth <= 768 && !hasShown && !isExiting) {
            if (window.scrollY < lastScrollY && window.scrollY > 100) {
                isExiting = true;
                showPopup();
            }
        }
        lastScrollY = window.scrollY;
    });
    
    function showPopup() {
        popup.classList.remove('hidden');
        localStorage.setItem('exitIntentShown', 'true');
        
        // Track event
        if (window.gtag) {
            gtag('event', 'exit_intent_popup_shown', {
                event_category: 'engagement'
            });
        }
    }
    
    // Close popup
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            popup.classList.add('hidden');
        });
    }
    
    // Close on outside click
    popup?.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.classList.add('hidden');
        }
    });
    
    // Handle popup form submission
    const popupForm = popup?.querySelector('.popup-form');
    if (popupForm) {
        popupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = popupForm.querySelector('input[type="email"]').value;
            
            // Track conversion
            if (window.gtag) {
                gtag('event', 'exit_intent_signup', {
                    event_category: 'conversion',
                    value: 1
                });
            }
            
            // Show success message
            showToast('🎉 Bedankt! Je krijgt binnenkort onze beste deals!', 'success');
            popup.classList.add('hidden');
            
            // Here you would typically send to your email service
            console.log('Exit intent email signup:', email);
        });
    }
}

// Newsletter Form
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = newsletterForm.querySelector('input[type="email"]').value;
            const button = newsletterForm.querySelector('button');
            const originalText = button.textContent;
            
            // Show loading state
            button.textContent = 'Bezig...';
            button.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Track conversion
                if (window.gtag) {
                    gtag('event', 'newsletter_signup', {
                        event_category: 'conversion',
                        value: 1
                    });
                }
                
                showToast('✅ Je bent aangemeld voor onze nieuwsbrief!', 'success');
                newsletterForm.reset();
                
                // Reset button
                button.textContent = originalText;
                button.disabled = false;
                
                console.log('Newsletter signup:', email);
            }, 1500);
        });
    }
}

// Contact Form
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            const button = contactForm.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            
            // Show loading state
            button.textContent = 'Versturen...';
            button.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                // Track event
                if (window.gtag) {
                    gtag('event', 'contact_form_submit', {
                        event_category: 'engagement'
                    });
                }
                
                showToast('📧 Bedankt voor je bericht! We nemen binnen 24 uur contact op.', 'success');
                contactForm.reset();
                
                // Reset button
                button.textContent = originalText;
                button.disabled = false;
                
                console.log('Contact form submitted:', data);
            }, 2000);
        });
    }
}

// Service Worker Registration
function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                    console.log('SW registered: ', registration);
                })
                .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
}

// Back to Top Button
function initBackToTop() {
    // Create back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Terug naar boven');
    backToTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: hsl(var(--ocean));
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow-lg);
    `;
    
    document.body.appendChild(backToTop);
    
    // Show/hide on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Track event
        if (window.gtag) {
            gtag('event', 'back_to_top_click', {
                event_category: 'navigation'
            });
        }
    });
}

// FAQ Toggle Functionality
function initFAQToggle() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            // Initially hide answers
            answer.style.display = 'none';
            question.style.cursor = 'pointer';
            question.innerHTML += ' <span class="faq-toggle">+</span>';
            
            question.addEventListener('click', function() {
                const toggle = question.querySelector('.faq-toggle');
                const isOpen = answer.style.display === 'block';
                
                if (isOpen) {
                    answer.style.display = 'none';
                    toggle.textContent = '+';
                } else {
                    answer.style.display = 'block';
                    toggle.textContent = '−';
                }
                
                // Track FAQ interactions
                if (window.gtag) {
                    gtag('event', 'faq_toggle', {
                        event_category: 'engagement',
                        event_label: question.textContent.replace(' +', '').replace(' −', '')
                    });
                }
            });
        }
    });
}

// Utility Functions

// Toast Notification System
function showToast(message, type = 'info') {
    // Remove existing toasts
    const existingToasts = document.querySelectorAll('.toast');
    existingToasts.forEach(toast => toast.remove());
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background color based on type
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    toast.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Format currency
function formatCurrency(amount, currency = 'EUR') {
    return new Intl.NumberFormat('nl-NL', {
        style: 'currency',
        currency: currency
    }).format(amount);
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Performance monitoring
function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const navigation = performance.getEntriesByType('navigation')[0];
                const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
                
                console.log(`Page load time: ${loadTime}ms`);
                
                // Track in analytics
                if (window.gtag) {
                    gtag('event', 'page_load_time', {
                        event_category: 'performance',
                        value: Math.round(loadTime)
                    });
                }
            }, 0);
        });
    }
}

// Initialize performance monitoring
measurePerformance();