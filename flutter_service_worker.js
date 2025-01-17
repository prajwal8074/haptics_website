'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"whatsNew.txt": "382b0f5185773fa0f67a8ed8056c7759",
"CNAME": "760611c40b84308a6323f4d2716cee15",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"manifest.json": "c8a9f2f18d34abca9d4e61e75860fac2",
"flutter_bootstrap.js": "7ce7ddd56299e831fb4eae5a1dd4f790",
"index.html": "c8fb5e66aea93cedb19056b1b319b6b7",
"/": "c8fb5e66aea93cedb19056b1b319b6b7",
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
".git/COMMIT_EDITMSG": "c8825dced8eefac18997fd4e85f0352b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "7aef804c3629120a1bb91c016550ac93",
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
".git/logs/HEAD": "58bb3b96293d1ccf09a89e4df61b83e5",
".git/logs/refs/heads/html": "58bb3b96293d1ccf09a89e4df61b83e5",
".git/logs/refs/remotes/origin/html": "299e15aa2983fd252c7a043eb0e0c8dd",
".git/index": "22f4e1e11c81ca03e6bfe0c2e05b88b8",
".git/FETCH_HEAD": "bdee951b01d5fe45a4c472cd5130f566",
".git/refs/heads/html": "47c1fcaedec76969aadca3701c3e5e06",
".git/refs/remotes/origin/html": "47c1fcaedec76969aadca3701c3e5e06",
".git/objects/09/78dbcff94abfcbb38e778547c2dfef1eb28aa7": "ce1b41f0900df3bf5c981c37c96339fb",
".git/objects/0a/fe07cec42517643af7ace8c1da45dfcf63e653": "2bd54027f1ce920533c9509f0c996796",
".git/objects/0a/2c067b75355aae29d3b936180df718471811dc": "03e5237b7309eab5170acc526dac8910",
".git/objects/47/fe4892f9bc05a9bacbd7d36375e823e96df733": "ef6fb13750215d919446ad3ae61ad97b",
".git/objects/c6/4c516bd0849362c8a2c39beb847a6d74b02b78": "36bbe94235c2bcd2de77ca461fb74466",
".git/objects/c6/968945237d0da6d49968f2ddc4710ad83ab434": "8c0ae16ebe23d1e03d8aa25971803e78",
".git/objects/c6/a27c5f846f13dd358f7571ea1a8bd77cb64e01": "a54178390ae4d29841b4d96bf15d6fb7",
".git/objects/86/7a1a7a1320adf173c516c766eee517fc6d8f47": "740c36228866d22613560b4b5f8eb984",
".git/objects/73/730422cb63edf320999c3d8bf8111feaa24c1d": "5daf7ffa05a04255ae8bb9f1e182f23a",
".git/objects/a2/0ae5b1caeac9797d4943ed12c6e64f8cf33f85": "1648f61ddb9c917b545db84a2a3acdee",
".git/objects/00/7d89acf3bca89211b383938d860d84cdb423e4": "9c95ab755c1a6e0b05c4e815e27d85ea",
".git/objects/00/3d18c4917d850477706dac57967cee23086538": "e6ce43ad00b670fba8c7f8e0089968d8",
".git/objects/ab/9bd640722d3fc4eb7bccf7205bd159132f751a": "0fb6da543bd44457e44067c819ee67c7",
".git/objects/94/975852adeacf6e955c84bd5aa426f624d13435": "3f633649f28171c1564a648b62f29164",
".git/objects/57/3ac7a3d10e7ef84535042cee3e0e4c1a424c5c": "632d8c755bca39a234b4566145ec91bb",
".git/objects/82/02aee2a50912c742ee4505aad28bec5d8c1c4f": "690168e5b6be38342b10b276712c8239",
".git/objects/db/6917c05028930368b57c86e057eea1d7f6014e": "7e77c4d89dbbff497b83e8463a5c06bf",
".git/objects/d7/430c4d8d9f97dad4271ec15e19ac8c514acc23": "030b9fca927574c25e0e75c6e086abe1",
".git/objects/4b/cb332fe048da2ad3a91bd52f8090aa177f6fa2": "0a2d38a83c3636a5585fe2fbb5c1bccb",
".git/objects/96/689e6f76c98e9c253ad1f288667d178a5d2c2d": "efd87a14710bfa0131a0604e4d9b116f",
".git/objects/04/129160c5a0c92a399bb73c374a353093fca7f6": "7513f742969a3f558ddc5f4f07159400",
".git/objects/ea/710abb95bce0d9783e3160cccfdb3109eb34b7": "24c0be092b9c9c3e13da16250ff984c2",
".git/objects/cd/8c421a05f2d99eaa8bc1d818e7e956fc42a961": "0a0bfaf01a4677941fb323afb42a1450",
".git/objects/63/1b6f5dd9a7ca329d2687fcd95ddbd23b443550": "3a2532c208897add6e326e5d09800c19",
".git/objects/74/ad83973d214f3e17caab4bea1d78e3ee6bd500": "52495c7878eaeabebe4601e2b81b93d3",
".git/objects/e2/d4d71d81591e8b83089489493b6764d20217ef": "e7c14c8c0e7715411d8ef2eb58f13d10",
".git/objects/b5/642f53e994e5021a6efcee848b9187b6c4f7e2": "ea785bdc18dd9164e1ef18032ec92ce4",
".git/objects/66/86e6a60c8927cf049011eebd8d06f2f8546dc4": "da4fc56edcf338ba1dea5791b323104f",
".git/objects/7d/89b4a040333fbd80a2b911776f928ee9e29ffa": "21e14f190206e8a981a7f68671180005",
".git/objects/pack/pack-ad0df3a5cbba0781e735e0f92811580d95bad2ba.idx": "f4b2fdf909ca41a522d15bfa8f9f4ed4",
".git/objects/pack/pack-ad0df3a5cbba0781e735e0f92811580d95bad2ba.pack": "1bf81c2469c5ab7f2b4a738fe19515c6",
".git/objects/pack/pack-ad0df3a5cbba0781e735e0f92811580d95bad2ba.rev": "d77e9af237a56337ee7e66f00854cf9b",
".git/objects/6e/146577fb2f57239818078f8f488fd2fd126da8": "100265782229dace6ad4b2f2ddffa37d",
".git/objects/6e/1077db3303d9ce1aef787dc9500075fe47f189": "cb6b78ac9a472c9a2536d736f423f17a",
".git/objects/e8/81001e2fada88e339d8243a94260fdb3524001": "0edf9130e0bfac9f57b33d1a926c465a",
".git/objects/a0/070805d67270f295f8d5ead945a5d45c272df6": "a02c122f62debc773a0fa721f8907967",
".git/objects/44/c20126352a7ac06cd11b2394ab0ee6185ae391": "79e5c3ba4492c94d01bc6d21be442a7a",
".git/objects/90/e916ead8d7428c9d08ede0af268514b83a2727": "32d160d1f152e73d014961fcd0333e91",
".git/objects/84/370a8bb960a6a1a7d6ae1603e06ca70fd58d63": "4f395f32f4b21d95e8a271e0d0ea6b02",
".git/objects/f7/c40f8634366f2fe5836a9daf017cb2ffafff64": "4b7c095a13d26bd66c9e3a4bea020d0f",
".git/objects/ad/a22f0714a87c313b67b76bc02ed09691922733": "ee6306ab33d2410b704903c29d91243a",
".git/objects/a3/e815dcb77de284e4542d29b32a2f1be5b19528": "2bdd2d279c2e3a7a137e58ea3ca57ae9",
".git/objects/07/3032ab31fbf8cd99339766a57c5c7f27887025": "df0047dac4bb8df66213ee521552a325",
".git/objects/33/53ecff05d0eaff49f39462d63f565d730808a3": "ac428230f6593435fa60366c114a53ff",
".git/objects/f5/941f762bd08b8b31e7faa80215fef98ee41417": "a8159c093c3575487e167b5e5b09b88b",
".git/objects/e5/cc6900082125f6bf98716d2ab936cc69450c2f": "3059aef6ca648f6c727534d9e21e2ce8",
".git/objects/14/0767a20b629dd3ea323d180259d1220e382d5b": "aa22381abc593cf85e670f00ebecc77d",
".git/objects/9d/55fbd9bc199fd5f717f01c9b9f5b8878ece979": "78d16438b32f9fe07cb12b1be4b21617",
".git/objects/cb/2506581a3b6876bb8894b920aa5b1467e2f4f2": "45ad1f87139f577652779eee4fa0bcf3",
".git/objects/cc/dfb210fa00c68c42c25c967824e85d6717026a": "9c56d3b72d65dd734fc53884e974c882",
".git/objects/41/2bbdbfae7f37c24a4b93ddd0cce3f1a4333c13": "e1531c520ac0cb19e68968f2625a2610",
".git/objects/41/f777566687a4bd94382ee74a9fa89e271818e6": "06810fb8f237b9f84f56fe1d26ffa0b4",
".git/objects/9f/8e9b69a33f4e8067d5b21661a35d8856758aba": "9393dbd0376652d2e8bae438a1bf5cc7",
".git/objects/b2/bd9d684f27171e28963b3cea855379762b3f04": "188b56e2c30f1a227791a4aab6b18c23",
".git/objects/60/7a3d0727e004e5deceb7065bcdd8abcb5ca8af": "c9800390428b35d9b26d7bfaa34efa6d",
".git/objects/60/f550527e99251006a178859a3cfb4240a6b12f": "cc7a8f560c517018ee9bb4fb09691afd",
".git/objects/75/f5377ad29094a3747e8373c0bf79ea62395080": "be98b60ab670b39b72050199305f4d66",
".git/objects/4c/34719d9b9910c859ed8170d6a7e90cc641f3c9": "372d50961f5e332cb3a4afc3c8c0335a",
".git/objects/ed/8c6d884d6bb21fd150141b68cd44bca3231c5e": "c37f497215ed813783ac8ef7fcb5cf6e",
".git/objects/bf/ecab41e1a851789d02256a8afa3d5f2db93cd6": "263352b98215fea17b46b2f61352ea7f",
".git/objects/3a/3f9da2cd835dbe9e61984cc8f3b212f59c0bef": "792999311c1711d00f4b59bdb4f712c8",
".git/objects/a6/856ddbd35fd1f9a16eebaeed53933bf3005c94": "979ac042a561b04aeff694157e4bdeff",
".git/objects/1f/7dfda551ea86e3eddc6f0f3cae7cab75dd774c": "72dcfc5633bd884f6a68844aa3408505",
".git/objects/89/ac6b1ad0df1260994abf9c8b02b877285dc72d": "c7188863df6234e376f85ca218537fef",
".git/objects/89/66ac2e48d03859e518789e5664c7579d43e76a": "4d0cd1fade7dbe4a81c9debd6d235b88",
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
"version.txt": "e4c2e8edac362acab7123654b9e73432",
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
"main.dart.js": "9242d85b098a1b947df44ea99becb739",
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
