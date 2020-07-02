self.addEventListener('install', function(event){
    console.log('[Service worker] installining Service worker....', event);
});


self.addEventListener('activate', function(event){
    console.log('[Service worker] activating Service worker....', event);
    return clients.claim();
});

self.addEventListener('fetch', function(event){
    console.log('[Service worker] fetch Service worker....', event); 
    event.respondWith(fetch(event.request));
});


