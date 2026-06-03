const CACHE_VERSION = "746f7502e876";
const CACHE_NAME = `reword-cache-${CACHE_VERSION}`;
const BASE_PATH = new URL(self.registration.scope).pathname;
const withBase = (path) => `${BASE_PATH}${path}`.replace(/\/{2,}/g, "/");
const APP_SHELL = [withBase(""), withBase("offline.html"), withBase("manifest.json"), withBase("icons/icon-192.png"), withBase("icons/icon-512.png")];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const isNavigation = event.request.mode === "navigate" || event.request.headers.get("accept")?.includes("text/html");

  if (isNavigation) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(withBase(""), copy));
          return response;
        })
        .catch(() => caches.match(withBase("")).then((cached) => cached || caches.match(withBase("offline.html"))))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (response.ok && event.request.url.startsWith(self.location.origin)) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => caches.match(withBase("offline.html")));
    })
  );
});
