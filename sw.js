// This is the service worker with the combined offline experience (Offline page + Offline copy of pages)

const CACHE = "offline-page";
const assets = [
  '/',
  '/index.html',
  '/Public/pdf/Resume%20ASJED.pdf',
  '/Public/images/pt.png',
  '/Public/images/mp.png',
  '/Public/images/fl.webp',  
  '/Public/images/beach.webm',
  '/Public/images/beach.mp4',
  '/Public/images/aspnet.webp',
  '/Public/images/sql.webp',
  '/Public/images/crm.webp',
  '/Public/images/html.webp',
  '/Public/images/css.webp',
  '/Public/images/bootstrap.webp',
  '/Public/images/javascript.webp',
  '/Public/images/jquery.webp',
  '/Public/images/adonet.webp',
  '/Public/images/linq.webp',
  '/Public/images/xml.webp',
  '/Public/images/googleform.webp',
  '/Public/images/csharp.webp',
  '/Public/images/json.webp',
  '/Public/images/ajax.webp',
  '/Public/images/ws.webp',
  '/Public/images/form.webp',
  '/Public/images/office.webp',
  '/Public/images/ssrs.webp',
  '/Public/images/mvc.webp',
  '/Public/images/apk_yellow.gif',
  '/Public/images/apk_green.gif',
  '/Public/images/apk_blue.gif',
  '/Public/images/apk_teal.gif',
  '/Public/images/apk_magenta.gif',
  '/Public/images/apk_orange.gif',
  '/Public/images/apk_grey.gif'
];

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "index.html";

// Install stage sets up the offline page in the cache and opens a new cache
self.addEventListener("install", function (event) {
  console.log("Install Event processing");

  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
        console.log("Cached offline page during install");
        return cache.addAll(assets);
      //return cache.add(offlineFallbackPage);
    })
  );
});

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then(function (response) {
          console.log("add page to offline cache: " + response.url);
          
        // If request was success, add or update it in the cache
        event.waitUntil(updateCache(event.request, response.clone()));

        return response;
      })
      .catch(function (error) {
        console.log("Network request Failed. Serving content from cache: " + error);
        return fromCache(event.request);
      })
  );
});

function fromCache(request) {
  // Check to see if you have it in the cache
  // Return response
  // If not in the cache, then return the offline page
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      if (!matching || matching.status === 404) {
        // The following validates that the request was for a navigation to a new document
        if (request.destination !== "document" || request.mode !== "navigate") {
          return Promise.reject("no-match");
        }

        return cache.match(offlineFallbackPage);
      }

      return matching;
    });
  });
}

function updateCache(request, response) {
  return caches.open(CACHE).then(function (cache) {
    return cache.put(request, response);
  });
}