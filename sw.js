// The name of my cache
const CACHE = "static-v1"

// static files for offline uses
const FILES = [
    "./",
    "./index.html",
    "./src/styles/main.css",
    "./src/script/fetch.js",
    "./src/script/main.js",
    "./src/assets/icons/dog.png",
    "./src/assets/icons/paw.png",
    "./manifest.json",
];

// Step 1. Install: saves the files in cache
self.addEventListener("install", (event) => {
    console.log("Service worker: install")

    event.waitUntil(
        caches.open(CACHE).then((cache) => cache.addAll(FILES))
    )
});

// Step 2. Activate: service worker is activate and it is ready to be use.
 // Remember to close all open tabs in your browser to activate a new service worker.
self.addEventListener("activate", () => {
    console.log("Service worker: activate");
});

// Step 3. Fetch: strategy cache first, where we first checks if the files exist in cache, if not we fetch it from the network
self.addEventListener("fetch", (event) => {
    console.log("Service worker: fetch", event.request.url)

    event.respondWith(

        caches.match(event.request).then((response) => {
            if (response) {
                // Found in cache
                return response;
            } else {
                // Not in caches, get it from the network
                return fetch(event.request)
            }
        })
    )
})