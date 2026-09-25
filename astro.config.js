import reactIntegration from "@astrojs/react"
import sitemapIntegration from "@astrojs/sitemap"
import vitePluginTW from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import path from "node:path"

const PORT = 4321

const integrations = [reactIntegration(), sitemapIntegration()]
const vitePlugins = [vitePluginTW()]

/** @type {import("astro").AstroConfig} */
export default defineConfig({
    base: "/",
    build: { inlineStylesheets: "never" },
    devToolbar: { enabled: true },
    integrations: [...integrations],
    output: "static",
    prefetch: { defaultStrategy: "tap" },
    server: {
        cors: true,
        hmr: true,
        host: true,
        open: true,
        port: PORT,
        strictPort: true
    },
    site: "https://madliani-reactify.vercel.app/",

    vite: {
        css: { transformer: "postcss" },
        plugins: [...vitePlugins],
        resolve: {
            alias: {
                "@react": path.resolve(import.meta.dirname, "./src/react/"),
                "@src": path.resolve(import.meta.dirname, "./src/")
            }
        }
    }
})
