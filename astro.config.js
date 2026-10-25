import reactIntegration from "@astrojs/react"
import sitemapIntegration from "@astrojs/sitemap"
import { defineConfig } from "astro/config"
import pathe from "pathe"

const PORT = 4321
const SITE = "https://madliani-reactify.vercel.app/"

const integrations = [reactIntegration(), sitemapIntegration()]
const viteAliasAstro = pathe.resolve(import.meta.dirname, "./astro/")
const viteAliasReact = pathe.resolve(import.meta.dirname, "./react/")

/** @type {import("astro").AstroConfig} */
export default defineConfig({
    base: "/",
    build: { inlineStylesheets: "never" },
    devToolbar: { enabled: true },
    integrations,
    output: "static",
    prefetch: { defaultStrategy: "tap" },
    server: { host: true, open: true, port: PORT },
    site: SITE,
    srcDir: "./astro/",

    vite: {
        css: { transformer: "postcss" },
        plugins: [],
        resolve: {
            alias: { "@astro": viteAliasAstro, "@react": viteAliasReact }
        }
    }
})
