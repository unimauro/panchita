const CACHE_NAME = 'panchita-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/main.js',
  '/img/panchita-hero.jpg',
  '/img/panchita-portrait.jpg',
  '/img/panchita1.jpg',
  '/img/panchita2.jpg',
  '/img/panchita3.jpg',
  '/img/panchita4.jpg',
  '/img/qr-panchita.png',
  '/img/favicon-192x192.png',
  '/img/favicon-512x512.png',
  '/manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
