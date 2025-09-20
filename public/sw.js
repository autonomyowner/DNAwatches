// Service Worker for mobile performance optimization
const CACHE_NAME = 'triomphe-v1';
const STATIC_CACHE = 'triomphe-static-v1';
const IMAGE_CACHE = 'triomphe-images-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/pricing',
  '/manifest.json'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && 
                cacheName !== STATIC_CACHE && 
                cacheName !== IMAGE_CACHE) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle images with cache-first strategy
  if (request.destination === 'image') {
    event.respondWith(
      caches.open(IMAGE_CACHE)
        .then((cache) => {
          return cache.match(request)
            .then((response) => {
              if (response) {
                return response;
              }
              
              return fetch(request)
                .then((fetchResponse) => {
                  // Only cache successful responses
                  if (fetchResponse.status === 200) {
                    cache.put(request, fetchResponse.clone());
                  }
                  return fetchResponse;
                })
                .catch(() => {
                  // Return a placeholder image if fetch fails
                  return new Response(
                    '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f3f4f6"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af">Image non disponible</text></svg>',
                    { headers: { 'Content-Type': 'image/svg+xml' } }
                  );
                });
            });
        })
    );
    return;
  }

  // Handle static assets with cache-first strategy
  if (url.origin === location.origin && 
      (url.pathname.startsWith('/_next/static/') || 
       url.pathname.endsWith('.js') || 
       url.pathname.endsWith('.css'))) {
    event.respondWith(
      caches.open(STATIC_CACHE)
        .then((cache) => {
          return cache.match(request)
            .then((response) => {
              if (response) {
                return response;
              }
              
              return fetch(request)
                .then((fetchResponse) => {
                  if (fetchResponse.status === 200) {
                    cache.put(request, fetchResponse.clone());
                  }
                  return fetchResponse;
                });
            });
        })
    );
    return;
  }

  // Handle pages with network-first strategy
  if (request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful responses
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(request, responseClone);
              });
          }
          return response;
        })
        .catch(() => {
          // Fallback to cache if network fails
          return caches.match(request)
            .then((response) => {
              if (response) {
                return response;
              }
              // Return offline page if no cache available
              return caches.match('/')
                .then((offlineResponse) => {
                  return offlineResponse || new Response(
                    '<html><body><h1>Hors ligne</h1><p>Veuillez vérifier votre connexion internet.</p></body></html>',
                    { headers: { 'Content-Type': 'text/html' } }
                  );
                });
            });
        })
    );
    return;
  }

  // Default: network-first for other requests
  event.respondWith(
    fetch(request)
      .catch(() => {
        return caches.match(request);
      })
  );
});
