import{defineComponent as t,onErrorCaptured as o,createVNode as e}from"vue";import{c as r}from"../server.mjs";import"../../nitro/node-server.mjs";import"node:http";import"node:https";import"fs";import"path";import"node:fs";import"node:url";import"unhead";import"@unhead/shared";import"vue/server-renderer";const n={},s=t({props:{context:{type:Object,required:!0}},setup(t){const s=n[t.context.name];if(!s)throw r({statusCode:404,statusMessage:`Island component not found: ${t.context.name}`});return o((t=>{console.log(t)})),()=>e(s||"span",{...t.context.props,"nuxt-ssr-component-uid":""})}});export{s as default};
//# sourceMappingURL=island-renderer-xq5m2Cff.mjs.map