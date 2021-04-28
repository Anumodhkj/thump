'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "83d003b08979b69418953976daeedf2a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e71c081c99bb46c3398714e45468382c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0301243f8ef5d7182aeaa8959764a1d8",
".git/logs/refs/heads/main": "e6689b8fdd024ca45e9a18e840873809",
".git/logs/refs/remotes/origin/main": "044853f61c13e3a2ae1a3d3fd5790ec1",
".git/objects/16/85f40c3c1e66da79cb1559f86f7a14e8fdb5e1": "22a9d6daf865fb15aadac3b7cb18a061",
".git/objects/1f/9599e5b2e5f8defb32d0f7837948b069fa301d": "26b8bb259144ed2fd8fb53b2f6963ec3",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/28/a6051130c820d4ff85ee144d81f6b71a5a1350": "19d7bd9630d29b2f5785c58f82ee0590",
".git/objects/38/af5fda4f16ebbaf10aa7930cd7e2a658d68cc7": "aabc658ee74f3ea692b6956e6dfba650",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ca9b1362bdc86c23bab550076592b11cef1ceb": "468f5acd784a5fd7c167c94e189b37a3",
".git/objects/62/10582d24461dfcc146d313ea85e207a793a94f": "d2e0d090396f5b05cb6b9dfd562df9a3",
".git/objects/6a/642d2640fda8a748ebc33025dc7b0594ae60c5": "2e6f0283e092e23455b67457ce945d91",
".git/objects/6b/c7e6ad5ac39ec72f52391b79dcfceae51b7c71": "95ea9e773830b91c7704793dc691799d",
".git/objects/6c/ce890ff4c594ea35957158500118c6bff5c7ff": "d39b31661c06461d4ddecaaad679d2f2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/132bee820b03fb8f2397b9b4f4832196679d65": "43ba5028f11b05c5035ced4a4f0b7f5a",
".git/objects/b1/ffe04bae03cdbfae55abc5fe269602e93a5f2c": "43fe4172567818dd5f1276d87517fcbd",
".git/objects/b4/a503aa0ac4362253e23485843bc7f629f01175": "552e136309f1d4bf523b8bc392251eb3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d9/b4207248e81c80e00a10b34e70806c13dfccd4": "a2c699ee626d0378e37675157b8a611d",
".git/objects/e3/0cb179818a6af6315936ec5e5f57d9280c79c7": "8f54607dbf30eece0d1f87a334d395ca",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ed/b4d19bab4a5c9d785acb736ee674b8239b4e20": "a7161918a1420a8de95def67c4fcf237",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/refs/heads/main": "5f6cf38c5f74e8a970dba696d78d3c96",
".git/refs/remotes/origin/main": "5f6cf38c5f74e8a970dba696d78d3c96",
"assets/AssetManifest.json": "8825b1a0a49be8cd023eceee81f83f72",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/about/aboutPageimage.png": "5d44667a8ae43641d0c1226b9594e285",
"assets/images/about/icon1.png": "350d9605b4ad5dc603f16edefb138386",
"assets/images/about/icon2.png": "d880cb7082d42ba25eb5ac060ca211f2",
"assets/images/about/icon3.png": "256b428790f81b15ab92537dfd8f3a34",
"assets/images/about/icon4.png": "c9d5035437277387bf9c6e07f6500b97",
"assets/images/about/icon5.png": "025e7814f4b2b80459445913007169a1",
"assets/images/about/slide1.png": "9d109864839dab6c6017c54eb2ddb568",
"assets/images/about/slide2.png": "7788eba7835af40f309141496de6f589",
"assets/images/about/Untitled-2.jpg": "8ae54f9724e590aebc5db1bd3e61377b",
"assets/images/about/Untitled-3.png": "366557fac8f901684594f788345a518f",
"assets/images/anjel.png": "35dcebaf94630154b0ff043becc71c30",
"assets/images/appbarimage.png": "ed5cabc3752e2fd6fc9f57a7ec04955b",
"assets/images/arrow.png": "9aaa153edd52de2903079d3af01fe166",
"assets/images/book.png": "a1956e165c9ca13faf5b05bbb34fe126",
"assets/images/branding.png": "085e0a8a446520985bacc9da97f6f747",
"assets/images/bulb.png": "1dfc1b6c33df493a1603e1bb3619e147",
"assets/images/chain.png": "a2e20b541a370c52d24416ece4fc66a7",
"assets/images/clg.png": "265d6544bf82d0b03b661c2a24538c81",
"assets/images/cook.png": "b5aad879e1aac102bb607a914ea0c10a",
"assets/images/girl.png": "2100a01d3dd6262f37782aae30a52223",
"assets/images/redline.png": "7a16ce50c0302b006d0238daa91b8e1d",
"assets/images/service/bluephoto.png": "d366ddb240ccb9944b3f7511c969cc1d",
"assets/images/service/brandcup.jpg": "a1d0924edf8c51f7e061dc3b809094ea",
"assets/images/service/goldgirl.png": "de530a829a832bdec67ea2aed926167b",
"assets/images/service/movieclip.png": "c8f36eec39bffb5e8bc53c07036665a1",
"assets/images/service/papercup.png": "b8b34d34f18fbbc944f4cff2c0645c21",
"assets/images/thumplogo.png": "e430e67cd635a1238f1ad75486933c68",
"assets/images/tlogo.png": "bda4bb09ed60a83844c58f95deb759ad",
"assets/images/work/1.png": "c894ddac36f27fae8919600c7a5fb335",
"assets/images/work/10.png": "323dc8566619a0fe894f096c50d17855",
"assets/images/work/11.png": "83b8d98191ee5b35a2549b5a136f828a",
"assets/images/work/12.png": "d156455d67669a92986f767930eb848e",
"assets/images/work/13.png": "415feb009cccaaec175681c9e35251f5",
"assets/images/work/14.png": "1960c852624e3aa8074ef2ba0b8b4daf",
"assets/images/work/15.png": "92feae30a8fad4fd8d3e47a7cd7b505f",
"assets/images/work/16.png": "cb446d22527e3ae40e60416c7143d4f5",
"assets/images/work/17.png": "e69f25d8719aca92883392bcfc7ae629",
"assets/images/work/18.png": "de93a434fc4f7460ac36f7dd0ce25b9a",
"assets/images/work/19.png": "f90bd8901a115cd9f1331394c450e11b",
"assets/images/work/2.png": "7f3486b49bff3e9e1ebdc02613cd3d9e",
"assets/images/work/20.png": "d26f9b4067314198eea4cd8241b507f6",
"assets/images/work/21.png": "3867533ec524f6c2c147dd53dc57ef35",
"assets/images/work/22.png": "fb32141d2b3acf347dbb2a9c10354dde",
"assets/images/work/23.png": "58236fe8dd097a9f6d5971d55a6cf177",
"assets/images/work/24.png": "3f4660ce2b39c9f11a4b6b544a83aa0f",
"assets/images/work/3.png": "1455ef30bea991d297aadea0b8264dbd",
"assets/images/work/4.png": "7745a12a5c283a4f0a71c472d0e7b81a",
"assets/images/work/5.png": "d4fff4db7c0963f46648a27c28391798",
"assets/images/work/6.png": "68d8a88377ef2c2daafc514fffd6aeb5",
"assets/images/work/7.png": "d83a8aca4ec5776dae915b4269a65c0c",
"assets/images/work/8.png": "3499bbe07e4328473c3aa810b0394aeb",
"assets/images/work/9.png": "d4284c135273e1d69e92b2d6a871f539",
"assets/NOTICES": "8c5309faed2cc22f4e723c8a51e818f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "be9eaea3f0bf04d8dedb7c0a4924b9bf",
"/": "be9eaea3f0bf04d8dedb7c0a4924b9bf",
"main.dart.js": "a580c2f9a1fbacbbdd338f95de140e1b",
"manifest.json": "0b99d61c43d9305058579ddf96e61348",
"version.json": "599744a8ca87cccbfc29c89481456fd9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
