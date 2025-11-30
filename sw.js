// 這是 PWA 的核心 Service Worker 檔案
// 它的存在是為了讓 Chrome 認為這是一個 "可安裝" 的 APP

const CACHE_NAME = 'inventory-app-v1';

// 安裝時 (什麼都不做，只為了觸發 PWA 判定)
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// 啟動時
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// 攔截網路請求 (讓 APP 在離線時也能打開)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
