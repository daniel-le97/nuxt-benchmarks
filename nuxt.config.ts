// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro:{
    output:{
      'dir':'./.output/deno',
    },
    preset:'deno-server',
    minify:true,
  }
})
