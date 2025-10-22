(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/RouteMap.tsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/node_modules_9e61d894._.js",
  "static/chunks/components_RouteMap_tsx_ce2d0517._.js",
  {
    "path": "static/chunks/node_modules_leaflet_dist_leaflet_ef5f0413.css",
    "included": [
      "[project]/node_modules/leaflet/dist/leaflet.css [app-client] (css)"
    ]
  },
  "static/chunks/components_RouteMap_tsx_0d4092a2._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/RouteMap.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
"[project]/node_modules/hammerjs/hammer.js [app-client] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/node_modules_hammerjs_hammer_6abbf8d8.js",
  "static/chunks/node_modules_hammerjs_hammer_94d2f476.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/node_modules/hammerjs/hammer.js [app-client] (ecmascript)");
    });
});
}),
]);