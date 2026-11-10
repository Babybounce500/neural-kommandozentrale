const CACHE_NAME = 'kommandozentrale-pwa-v1';
const PRECACHE_URLS = [
  './KOMMANDOZENTRALE-V2.html',
  './IFRAME-BOT-V2.html',
  './SUB-AGENTS.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-192.png',
  './icon-maskable-512.png'
];

// Live data proxies -- never cache/serve these from the SW, always hit the network fresh.
const NO_INTERCEPT_HOSTS = [
  'theserver-open-ai.replit.app',
  'gemini-os.replit.app',
  'glow-up-gemini.replit.app',
  'domusaurea.tech'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (NO_INTERCEPT_HOSTS.some(h => url.hostname.includes(h))) return;

  const isSameOrigin = url.origin === self.location.origin;
  const isFont = url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com');

  if (isSameOrigin) {
    event.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, copy)).catch(() => {});
        return res;
      }).catch(() => caches.match(req).then(cached => cached || caches.match('./KOMMANDOZENTRALE-V2.html')))
    );
    return;
  }

  if (isFont) {
    event.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, copy)).catch(() => {});
        return res;
      }))
    );
  }
});
