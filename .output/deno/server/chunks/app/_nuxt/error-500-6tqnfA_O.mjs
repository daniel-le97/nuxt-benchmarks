import{_ as e,b as t}from"../server.mjs";import{mergeProps as i,useSSRContext as s}from"npm:vue";import{ssrRenderAttrs as o,ssrInterpolate as r}from"npm:vue/server-renderer";const a={__name:"error-500",__ssrInlineRender:!0,props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:500},statusMessage:{type:String,default:"Server error"},description:{type:String,default:"This page is temporarily unavailable."}},setup(e){const s=e;return t({title:`${s.statusCode} - ${s.statusMessage} | ${s.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(t,s,a,d)=>{s(`<div${o(i({class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},d))} data-v-df79c84d><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-df79c84d></div><div class="max-w-520px text-center" data-v-df79c84d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-df79c84d>${r(e.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-df79c84d>${r(e.description)}</p></div></div>`)}}},d=a.setup;a.setup=(e,t)=>{const i=s();return(i.modules||(i.modules=new Set)).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"),d?d(e,t):void 0};const n=e(a,[["__scopeId","data-v-df79c84d"]]);export{n as default};
//# sourceMappingURL=error-500-6tqnfA_O.mjs.map