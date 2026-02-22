// Service Worker for My Kitchen (PWA)
const CACHE_NAME = 'my-kitchen-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Simple pass-through for now to satisfy PWA criteria
  event.respondWith(fetch(event.request));
});
