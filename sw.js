const CACHE_NAME = 'inventory-app-v2';

// 安裝事件
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// 啟動事件
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// 攔截請求 (支援離線開啟)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
