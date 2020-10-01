const cacheId = '1.0.0'
const cacheFiles = [
	'/app.js',
	'/Epilogue.woff2',
	'/index.html',
	'/main.css'
]

self.addEventListener('install', event => {
	event.waitUntil(
		caches
		.open(cacheId)
		.then(cache => cache.addAll(cacheFiles))
		.catch(console.error)
	)
})

self.addEventListener('activate', event => {
	const purgeOldCache = key => key != cacheId ?
		caches.delete(key) :
		null
	event.waitUntil(
		caches
		.keys()
		.then(keyList => Promise.all(keyList.map(purgeOldCache)))
		.catch(console.error)
	)
})

self.addEventListener('fetch', event => {
	event.respondWith(
		caches
		.match(event.request)
		.then(response => response || fetch(event.request)
			.then(response => caches
				.open(cacheId)
				.then(cache => {
					cache.put(event.request, response.clone())
					return response
				})
			)
		)
		.catch(console.error)
	)
})
