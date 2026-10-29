self.addEventListener('fetch', (event) => {
  // Pass-through fetch handler required for PWA installation
  event.respondWith(fetch(event.request));
});
