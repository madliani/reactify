import reactIntegration from "@astrojs/react"
import sitemapIntegration from "@astrojs/sitemap"
import vitePluginTW from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import pathe from "pathe"

const ASTRO_DIRECTORY = "./astro/"
const PORT = 4321
const SITE = "https://madliani-reactify.vercel.app/"

const viteAliasAstro = pathe.resolve(import.meta.dirname, "./astro/")
const viteAliasReact = pathe.resolve(import.meta.dirname, "./react/")

export default defineConfig({
    base: "/",
    build: { inlineStylesheets: "never" },
    compressHTML: true,
    devToolbar: { enabled: true },
    integrations: [reactIntegration(), sitemapIntegration()],
    output: "static",
    prefetch: { defaultStrategy: "tap" },
    server: { host: true, open: true, port: PORT },
    site: SITE,
    srcDir: ASTRO_DIRECTORY,

    vite: {
        css: { transformer: "postcss" },
        plugins: [vitePluginTW({ optimize: { minify: true } })],
        resolve: {
            alias: { "@astro": viteAliasAstro, "@react": viteAliasReact }
        }
    }
})
