const CACHE_NAME = "zikir-takip-v5";
const APP_FILES = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon.svg"];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES))
    );
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys
                .filter(key => key.startsWith("zikir-takip-") && key !== CACHE_NAME)
                .map(key => caches.delete(key))
        )).then(() => self.clients.claim())
    );
});

// İnternet varken her zaman güncel dosyayı getir; bağlantı yoksa önbelleği kullan.
self.addEventListener("fetch", event => {
    if (event.request.method !== "GET") return;

    const requestURL = new URL(event.request.url);
    if (requestURL.origin !== self.location.origin) return;

    event.respondWith(
        fetch(event.request).then(response => {
            if (response && response.ok) {
                const copy = response.clone();
                event.waitUntil(
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy))
                );
            }
            return response;
        }).catch(async () => {
            const cached = await caches.match(event.request);
            if (cached) return cached;

            if (event.request.mode === "navigate") {
                return (await caches.match("./index.html")) || Response.error();
            }
            return Response.error();
        })
    );
});
