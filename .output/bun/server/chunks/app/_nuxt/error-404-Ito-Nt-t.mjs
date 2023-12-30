import{mergeProps as e,withCtx as t,createTextVNode as r,toDisplayString as a,useSSRContext as i,defineComponent as o,computed as l,ref as s,h as n,resolveComponent as d}from"vue";import{m as u,j as p,p as c,x as f,y as v,z as m}from"../../../index.mjs";import{_ as h,b as g,u as x,a as b,n as y}from"../server.mjs";import{ssrRenderAttrs as S,ssrInterpolate as w,ssrRenderComponent as C}from"vue/server-renderer";import"fs";import"path";import"node:fs";import"node:url";import"unhead";import"@unhead/shared";function defineNuxtLink(e){const t=e.componentName||"NuxtLink",resolveTrailingSlashBehavior=(t,r)=>{if(!t||"append"!==e.trailingSlash&&"remove"!==e.trailingSlash)return t;if("string"==typeof t)return applyTrailingSlashBehavior(t,e.trailingSlash);const a="path"in t?t.path:r(t).path;return{...t,name:void 0,path:applyTrailingSlashBehavior(a,e.trailingSlash)}};return o({name:t,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(t,{slots:r}){const a=x(),i=b(),o=l((()=>{const e=t.to||t.href||"";return resolveTrailingSlashBehavior(e,a.resolve)})),v=l((()=>"string"==typeof o.value&&u(o.value,{acceptRelative:!0}))),m=l((()=>!!t.external||(!(!t.target||"_self"===t.target)||"object"!=typeof o.value&&(""===o.value||v.value)))),h=s(!1);return()=>{var l,s,u;if(!m.value){const a={ref:undefined,to:o.value,activeClass:t.activeClass||e.activeClass,exactActiveClass:t.exactActiveClass||e.exactActiveClass,replace:t.replace,ariaCurrentValue:t.ariaCurrentValue,custom:t.custom};return t.custom||(h.value&&(a.class=t.prefetchedClass||e.prefetchedClass),a.rel=t.rel),n(d("RouterLink"),a,r.default)}const g="object"==typeof o.value?null!=(l=null==(s=a.resolve(o.value))?void 0:s.href)?l:null:!o.value||t.external||v.value?o.value||null:resolveTrailingSlashBehavior(p(i.app.baseURL,o.value),a.resolve),x=t.target||null,b=t.noRel?null:((...e)=>e.find((e=>void 0!==e)))(t.rel,e.externalRelAttribute,g?"noopener noreferrer":"")||null,navigate=()=>y(g,{replace:t.replace});return t.custom?r.default?r.default({href:g,navigate:navigate,get route(){if(!g)return;const e=c(g);return{path:e.pathname,fullPath:e.pathname,get query(){return f(e.search)},hash:e.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:g}},rel:b,target:x,isExternal:m.value,isActive:!1,isExactActive:!1}):null:n("a",{ref:undefined,href:g,rel:b,target:x},null==(u=r.default)?void 0:u.call(r))}}})}const k=defineNuxtLink({componentName:"NuxtLink"});function applyTrailingSlashBehavior(e,t){const r="append"===t?v:m;return u(e)&&!e.startsWith("http")?e:r(e,!0)}const q={__name:"error-404",__ssrInlineRender:!0,props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(i){const o=i;return g({title:`${o.statusCode} - ${o.statusMessage} | ${o.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(o,l,s,n)=>{const d=k;l(`<div${S(e({class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},n))} data-v-ccd3db62><div class="fixed left-0 right-0 spotlight z-10" data-v-ccd3db62></div><div class="max-w-520px text-center z-20" data-v-ccd3db62><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-ccd3db62>${w(i.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-ccd3db62>${w(i.description)}</p><div class="w-full flex items-center justify-center" data-v-ccd3db62>`),l(C(d,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:t(((e,t,o,l)=>{if(!t)return[r(a(i.backHome),1)];t(`${w(i.backHome)}`)})),_:1},s)),l("</div></div></div>")}}},N=q.setup;q.setup=(e,t)=>{const r=i();return(r.modules||(r.modules=new Set)).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"),N?N(e,t):void 0};const j=h(q,[["__scopeId","data-v-ccd3db62"]]);export{j as default};
//# sourceMappingURL=error-404-Ito-Nt-t.mjs.map
