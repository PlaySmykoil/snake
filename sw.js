if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let d={};const o=e=>i(e,t),c={module:{uri:t},exports:d,require:o};s[t]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.0b01d13f.css",revision:null},{url:"assets/index.870fe1e8.js",revision:null},{url:"index.html",revision:"deb4818dad43cc13e6936e08ba10cf34"},{url:"pwa-192x192.png",revision:"fa12c7d60bc8bb5f47aa2938eddcae0f"},{url:"pwa-512x512.png",revision:"83a5abbdcdc776ffc2ceb7fe64d4d207"},{url:"manifest.webmanifest",revision:"71578dec6c511f3824d049361188d9ea"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
