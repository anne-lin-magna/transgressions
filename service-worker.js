/* eslint-disable no-restricted-globals */

self.addEventListener("install", (event) => {
    console.log('Service Worker: Installing...');
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    console.log('Service Worker: Activating...');
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', () => {
    // Listener registered — required for PWA installability
});
