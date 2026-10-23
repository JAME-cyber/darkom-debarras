/* Darkom-Debarras — Service Worker minimal
 * Stratégie conservatrice (v1) :
 *  - /assets/* (fichiers hashés Vite, immuables) : cache-first
 *  - navigations (pages HTML) : network-first, fallback cache, fallback "/"
 *  - JAMAIS : requêtes non-GET, cross-origin (emailjs, pexels), données client
 */
const VERSION = 'v1';
const ASSET_CACHE = `darkom-assets-${VERSION}`;
const PAGE_CACHE = `darkom-pages-${VERSION}`;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(ASSET_CACHE).then((cache) => cache.addAll(['/']))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== ASSET_CACHE && k !== PAGE_CACHE)
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Uniquement GET, même origine. Formulaires (emailjs) et images
  // tierces jamais interceptés.
  if (request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  // Fichiers build hashés Vite : immuables → cache-first.
  if (url.pathname.startsWith('/assets/')) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            if (response.ok) {
              const copy = response.clone();
              caches.open(ASSET_CACHE).then((cache) => cache.put(request, copy));
            }
            return response;
          })
      )
    );
    return;
  }

  // Navigations : network-first (contenu frais), fallback cache, fallback "/".
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(PAGE_CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached || caches.match('/'))
        )
    );
  }
  // Tout le reste (favicon, icônes, sitemap…) : réseau direct, pas de cache.
});
