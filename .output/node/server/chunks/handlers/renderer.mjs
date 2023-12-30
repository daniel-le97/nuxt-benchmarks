import{getRequestDependencies as e,getPreloadLinks as t,getPrefetchLinks as r,createRenderer as n}from"vue-bundle-renderer/runtime";import{e as s,s as o,a,g as i,b as d,c as l,u,j as p,f as c,h,i as f,k as m,l as y}from"../nitro/node-server.mjs";import{stringify as A,uneval as b}from"devalue";import{renderToString as g}from"vue/server-renderer";import{renderSSRHead as _}from"@unhead/ssr";import{version as v,unref as w}from"vue";import{createServerHead as C}from"unhead";import{defineHeadPlugin as x}from"@unhead/shared";import"node:http";import"node:https";import"fs";import"path";import"node:fs";import"node:url";const R=v.startsWith("3");function resolveUnrefHeadInput(e,t=""){if(e instanceof Promise)return e;const r="function"==typeof(n=e)?n():w(n);var n;return e&&r?Array.isArray(r)?r.map((e=>resolveUnrefHeadInput(e,t))):"object"==typeof r?Object.fromEntries(Object.entries(r).map((([e,t])=>"titleTemplate"===e||e.startsWith("on")?[e,w(t)]:[e,resolveUnrefHeadInput(t,e)]))):r:r}const S=x({hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=resolveUnrefHeadInput(t.input)}}}),j="usehead";function createServerHead(e={}){const t=C(e);return t.use(S),t.install=function(e){return{install(t){R&&(t.config.globalProperties.$unhead=e,t.config.globalProperties.$head=e,t.provide(j,e))}}.install}(t),t}const T=[],U={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[],style:[],script:[],noscript:[]},L="__nuxt",k="div";function buildAssetsURL(...e){return p(publicAssetsURL(),c().app.buildAssetsDir,...e)}function publicAssetsURL(...e){const t=c().app,r=t.cdnURL||t.baseURL;return e.length?p(r,...e):r}globalThis.__buildAssetsURL=buildAssetsURL,globalThis.__publicAssetsURL=publicAssetsURL;const getClientManifest=()=>import("../app/client.manifest.mjs").then((e=>e.default||e)).then((e=>"function"==typeof e?e():e)),$=lazyCachedFunction((()=>import("../app/styles.mjs").then((e=>e.default||e)))),H=lazyCachedFunction((async()=>{const e=await getClientManifest();if(!e)throw new Error("client.manifest is not available");const t=await import("../app/server.mjs").then((e=>e.default||e));if(!t)throw new Error("Server bundle is not available");return n(t,{manifest:e,renderToString:async function(e,t){const r=await g(e,t);return`<${k} id="${L}">${r}</${k}>`},buildAssetsURL:buildAssetsURL})})),P=lazyCachedFunction((async()=>{const e=await getClientManifest(),t=await import("../rollup/_virtual_spa-template.mjs").then((e=>e.template)).catch((()=>"")),r=n((()=>()=>{}),{manifest:e,renderToString:()=>`<${k} id="${L}">${t}</${k}>`,buildAssetsURL:buildAssetsURL}),s=await r.renderToString({});return{rendererContext:r.rendererContext,renderToString:e=>{const t=c();return e.modules=e.modules||new Set,e.payload={_errors:{},serverRendered:!1,data:{},state:{},once:new Set},e.config={public:t.public,app:t.app},Promise.resolve(s)}}})),I=/\/_payload(\.[a-zA-Z0-9]+)?.json(\?.*)?$/,N=(O=async n=>{const s=u(),o=n.path.startsWith("/__nuxt_error")?h(n):null;if(o&&o.statusCode&&(o.statusCode=parseInt(o.statusCode)),o&&!("__unenv__"in n.node.req))throw f({statusCode:404,statusMessage:"Page Not Found: /__nuxt_error"});const a=void 0;let d=o?.url||n.path;const l=I.test(d)&&!0;l&&(d=d.substring(0,d.lastIndexOf("/"))||"/",n._path=d,n.node.req.url=d);const p=m(n),b=createServerHead({plugins:T}),g={mode:"server"};b.push(U,g);const v={url:d,event:n,runtimeConfig:c(),noSSR:n.context.nuxt?.noSSR||!1===p.ssr&&!0||!1,head:b,error:!!o,nuxt:void 0,payload:o?{error:o}:{},_payloadReducers:{},islandContext:a},w=v.noSSR?await P():await H(),C=await w.renderToString(v).catch((async e=>{if(v._renderResponse&&"skipping render"===e.message)return{};const t=!o&&v.payload?.error||e;throw await(v.nuxt?.hooks.callHook("app:error",t)),t}));if(await(v.nuxt?.hooks.callHook("app:rendered",{ssrContext:v,renderResult:C})),v._renderResponse)return v._renderResponse;if(v.payload?.error&&!o)throw v.payload.error;if(l){const e=function(e){return{body:A(splitPayload(e).payload,e._payloadReducers),statusCode:i(e.event),statusMessage:y(e.event),headers:{"content-type":"application/json;charset=utf-8","x-powered-by":"Nuxt"}}}(v);return e}{const e=v.modules??v._registeredComponents;if(e)for(const t of await getClientManifest().then((e=>Object.values(e).filter((e=>e._globalCSS)).map((e=>e.src)))))e.add(t)}const x=await async function(e){const t=await $(),r=new Set;for(const n of e)if(n in t)for(const e of await t[n]())r.add(e);return Array.from(r).map((e=>({innerHTML:e})))}(v.modules??v._registeredComponents??[]),R=p.experimentalNoScripts,{styles:S,scripts:j}=e(v,w.rendererContext);b.push({style:x}),b.push({link:Object.values(S).map((e=>({rel:"stylesheet",href:w.rendererContext.buildAssetsURL(e.file)})))},g),R||(b.push({link:t(v,w.rendererContext)},g),b.push({link:r(v,w.rendererContext)},g),b.push({script:renderPayloadJsonScript({id:"__NUXT_DATA__",ssrContext:v,data:v.payload})},{...g,tagPosition:"bodyClose",tagPriority:"high"})),p.experimentalNoScripts||b.push({script:Object.values(j).map((e=>({type:e.module?"module":null,src:w.rendererContext.buildAssetsURL(e.file),defer:!e.module||null,crossorigin:""})))},g);const{headTags:L,bodyTags:k,bodyTagsOpen:N,htmlAttrs:O,bodyAttrs:z}=await _(b),M={island:Boolean(a),htmlAttrs:[O],head:normalizeChunks([L,v.styles]),bodyAttrs:[z],bodyPrepend:normalizeChunks([N,v.teleports?.body]),body:[C.html],bodyAppend:[k]};var B;return await s.hooks.callHook("render:html",M,{event:n}),{body:(B=M,`<!DOCTYPE html>\n<html ${joinAttrs(B.htmlAttrs)}>\n<head>${joinTags(B.head)}</head>\n<body ${joinAttrs(B.bodyAttrs)}>${joinTags(B.bodyPrepend)}${joinTags(B.body)}${joinTags(B.bodyAppend)}</body>\n</html>`),statusCode:i(n),statusMessage:y(n),headers:{"content-type":"text/html;charset=utf-8","x-powered-by":"Nuxt"}}},s((async e=>{if(e.path.endsWith("/favicon.ico"))return o(e,"Content-Type","image/x-icon"),a(e,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");const t=await O(e);if(!t){const t=i(e);return d(e,200===t?500:t),a(e,"No response returned from render handler: "+e.path)}const r=u();return await r.hooks.callHook("render:response",t,{event:e}),t.headers&&l(e,t.headers),(t.statusCode||t.statusMessage)&&d(e,t.statusCode,t.statusMessage),t.body})));var O;function lazyCachedFunction(e){let t=null;return()=>(null===t&&(t=e().catch((e=>{throw t=null,e}))),t)}function normalizeChunks(e){return e.filter(Boolean).map((e=>e.trim()))}function joinTags(e){return e.join("")}function joinAttrs(e){return e.join(" ")}function renderPayloadJsonScript(e){const t=e.data?A(e.data,e.ssrContext._payloadReducers):"",r={type:"application/json",id:e.id,innerHTML:t,"data-ssr":!e.ssrContext.noSSR};return e.src&&(r["data-src"]=e.src),[r,{innerHTML:`window.__NUXT__={};window.__NUXT__.config=${b(e.ssrContext.config)}`}]}function splitPayload(e){const{data:t,prerenderedAt:r,...n}=e.payload;return{initial:{...n,prerenderedAt:r},payload:{data:t,prerenderedAt:r}}}export{N as default};
//# sourceMappingURL=renderer.mjs.map