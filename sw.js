// Service Worker for Lokaal Genieten Algarve
// Version 1.0.0

const CACHE_NAME = 'algarve-tips-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/experiences/',
  '/flights/', 
  '/over-ons/',
  '/contact/',
  '/assets/css/main.css',
  '/assets/css/components.css',
  '/assets/css/responsive.css',
  '/assets/js/main.js',
  '/assets/js/language.js',
  '/assets/js/analytics.js',
  '/manifest.json',
  '/404.html'
];

// Dynamic content to cache on request
const DYNAMIC_ASSETS = [
  '/assets/images/',
  '/lovable-uploads/',
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com'
];

// Install Event - Cache static assets
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached');
        return self.skipWaiting();
      })
      .catch(err => {
        console.error('Service Worker: Error caching static assets', err);
      })
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then(keys => {
        return Promise.all(
          keys.map(key => {
            if (key !== STATIC_CACHE && key !== DYNAMIC_CACHE) {
              console.log('Service Worker: Removing old cache', key);
              return caches.delete(key);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// Fetch Event - Serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip cross-origin requests that aren't fonts or images
  if (url.origin !== location.origin && 
      !url.origin.includes('fonts.googleapis.com') &&
      !url.origin.includes('fonts.gstatic.com') &&
      !url.origin.includes('lovable-uploads')) {
    return;
  }
  
  event.respondWith(
    caches.match(request)
      .then(response => {
        // Return cached version if available
        if (response) {
          return response;
        }
        
        // Otherwise fetch from network
        return fetch(request)
          .then(fetchResponse => {
            // Don't cache non-successful responses
            if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
              return fetchResponse;
            }
            
            // Check if we should cache this dynamically
            const shouldCacheDynamically = DYNAMIC_ASSETS.some(pattern => 
              request.url.includes(pattern)
            );
            
            if (shouldCacheDynamically) {
              // Clone the response for caching
              const responseToCache = fetchResponse.clone();
              
              caches.open(DYNAMIC_CACHE)
                .then(cache => {
                  cache.put(request, responseToCache);
                })
                .catch(err => {
                  console.error('Service Worker: Error caching dynamic asset', err);
                });
            }
            
            return fetchResponse;
          })
          .catch(err => {
            console.error('Service Worker: Fetch failed', err);
            
            // Return 404 page for navigation requests that fail
            if (request.destination === 'document') {
              return caches.match('/404.html');
            }
            
            // Return a fallback for other requests
            throw err;
          });
      })
  );
});

// Background Sync for offline form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(
      // Process offline form submissions when back online
      processOfflineForms()
    );
  }
});

// Push notification handling
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Nieuwe Algarve tips beschikbaar!',
    icon: '/assets/images/icon-192x192.png',
    badge: '/assets/images/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Bekijk Tips',
        icon: '/assets/images/action-explore.png'
      },
      {
        action: 'close', 
        title: 'Sluiten',
        icon: '/assets/images/action-close.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Lokaal Genieten Algarve', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/experiences/')
    );
  } else if (event.action === 'close') {
    // Just close the notification
    return;
  } else {
    // Default action - open homepage
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper function to process offline form submissions
async function processOfflineForms() {
  try {
    // This would integrate with IndexedDB to store offline form submissions
    // and process them when back online
    console.log('Service Worker: Processing offline forms');
    
    // Implementation would go here for handling offline contact form submissions
    // For now, we'll just log that the sync event occurred
    
  } catch (error) {
    console.error('Service Worker: Error processing offline forms', error);
  }
}

// Cache size management
async function cleanOldCaches() {
  const cache = await caches.open(DYNAMIC_CACHE);
  const requests = await cache.keys();
  
  // Remove oldest entries if cache gets too large (e.g., > 50 items)
  if (requests.length > 50) {
    const oldestRequests = requests.slice(0, requests.length - 40);
    await Promise.all(
      oldestRequests.map(request => cache.delete(request))
    );
  }
}

// Periodic cache cleanup
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAN_CACHE') {
    cleanOldCaches();
  }
});

// Update notification
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'UPDATE_AVAILABLE') {
    // Notify the main thread that an update is available
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage({
          type: 'UPDATE_AVAILABLE',
          message: 'Een nieuwe versie van de app is beschikbaar!'
        });
      });
    });
  }
});
