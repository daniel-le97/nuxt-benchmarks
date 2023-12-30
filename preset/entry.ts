import '#internal/nitro/virtual/polyfill'
import Elysia from "elysia";
const nitro = useNitroApp()
const webHandler = toWebHandler(nitro.h3App)

const app = new Elysia().all('/*', async(context) => {
    return await webHandler(context.request)
}).listen(3000, () => {
    console.log('listening on port 3000')
})

