'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"whatsNew.txt": "661a63d275eface2f4e273e77a87d9bc",
"CNAME": "760611c40b84308a6323f4d2716cee15",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"manifest.json": "c8a9f2f18d34abca9d4e61e75860fac2",
"flutter_bootstrap.js": "17706aef65c55d7c9b6c821458fa1c5c",
"index.html": "d09995d3bfe2a08581fe3a2a1cfd91e4",
"/": "d09995d3bfe2a08581fe3a2a1cfd91e4",
"assets/icon.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/index.html": "813d6f6e79f527bf8ac11722231c07e6",
"assets/assets/icon.png": "af602fac753018adebde715467cd1e6e",
"assets/assets/loading.gif": "3535083b72550a2a022dc0c5eafee975",
"assets/assets/s1.png": "dfff3a2c9aff59873c642500684fce6a",
"assets/assets/s3.png": "f0e29149e9a66e12d86b520a54952e6d",
"assets/assets/s4.png": "da7d7dfcda630836f0ad1a0662c7188d",
"assets/assets/logo_white.png": "5f39c6e9fff9e32c0e96d1f2e7e66bd7",
"assets/assets/logo_black.png": "a2d6ce2f4fc36a91a11a2f6abc9b6966",
"assets/assets/loading_dark.gif": "f8099c42ccdd6a8b70a0f2a870dda1c8",
"assets/assets/s2.png": "4ca1523a6e8c45e4ebd91ba8314d44a0",
"assets/AssetManifest.bin.json": "9ab092b9557043103e8ced02d5291138",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.bin": "05daa3ff10d29593ce100bfaedb714be",
"assets/AssetManifest.json": "b3a68b0013633b05c7174b5e902cc568",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "5b99de64a74eff8f352c1aaec147f808",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ea0391529f6eecbd9d949b837dabe91a",
"version.json": "3a9b034e25d019088a7f7faaef098d36",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "70bd746de6b24ad392681617c076d863",
".git/HEAD": "8ce7462ab4a392b6ebdf64c8d36ccbc2",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/logs/HEAD": "911119199327eddd02ebc026d57a41de",
".git/logs/refs/heads/html": "911119199327eddd02ebc026d57a41de",
".git/logs/refs/remotes/origin/html": "2feb04af3429682eedd6456eb78cc783",
".git/index": "2af940ad63d24422250fce30801c580e",
".git/FETCH_HEAD": "999f0d3c10ab6fb9c3306a1e500926dc",
".git/refs/heads/html": "82fea26d0938af1a635c7ea835482f31",
".git/refs/remotes/origin/html": "82fea26d0938af1a635c7ea835482f31",
".git/objects/pack/pack-3f3909d6347d76b58a6ba7247025b6268e3d0a89.idx": "fbe8baffa760814746a7a0905c476791",
".git/objects/pack/pack-3f3909d6347d76b58a6ba7247025b6268e3d0a89.pack": "f422bde19eec7e90c9c644f3f585a06c",
".git/objects/pack/pack-3f3909d6347d76b58a6ba7247025b6268e3d0a89.rev": "4d85028cf0b02bb48441befd26b0f8ee",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"version.txt": "2542b79651fab56d0ebfff75a0fdf7be",
"splash/img/branding-2x.gif": "24819cf5b9dfc2795af613a6dbc4a80f",
"splash/img/light-3x.png": "5dc79a87f952f7e2a939b1d98677d620",
"splash/img/branding-dark-1x.gif": "0ea4586bdf56de7ae98dc9121f874ae3",
"splash/img/light-2x.png": "8e12c77260fbd79d5cd7ca24097293de",
"splash/img/branding-dark-2x.gif": "47f794868eb13cf9b022e397db94552f",
"splash/img/branding-dark-4x.gif": "8f467902a8699c38293a8cb76d879fa1",
"splash/img/dark-3x.png": "547bbdb2b0e782a7868b213c837214e2",
"splash/img/dark-1x.png": "24658dd48e42cded0cc10aa916e7eeb0",
"splash/img/branding-3x.gif": "f0536035b55121df556f7407d737f496",
"splash/img/dark-4x.png": "edf9300c39ff3b44b90cd654261efc30",
"splash/img/branding-1x.gif": "b671ce2d5b58fc5c7aa332d8daaced82",
"splash/img/light-4x.png": "9244cecccbabebe32f8736bd59df4e8f",
"splash/img/branding-dark-3x.gif": "42516802d19a483e1586eba1eaed0092",
"splash/img/branding-4x.gif": "d6ec405742e363e75cd2b292066595f6",
"splash/img/light-1x.png": "b27c576b6c305edf00d9b4650518f6c2",
"splash/img/dark-2x.png": "8ad4e9718d4bd3d352b0d6701dce5f7a",
"main.dart.js": "82987f2acf15c5e43303a1294dc7bb94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icon_small.png": "decd9438f27f0f559c8419759d28d2a0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
