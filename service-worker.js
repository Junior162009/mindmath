// service-worker.js mínimo para cachear archivos y funcionar como PWA

const CACHE_NAME = "mindmath-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./logo.png",
  "./manifest.json",
  "./style.css",
  "./script.js"
];

// Instalar y cachear recursos
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Servir desde cache si está disponible
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

