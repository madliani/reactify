import reactIntegration from "@astrojs/react"
import sitemapIntegration from "@astrojs/sitemap"
import { defineConfig } from "astro/config"
import pathe from "pathe"

const PORT = 4321

const integrations = [reactIntegration(), sitemapIntegration()]

/** @type {import("astro").AstroConfig} */
export default defineConfig({
    base: "/",
    build: { inlineStylesheets: "never" },
    devToolbar: { enabled: true },
    integrations,
    output: "static",
    prefetch: { defaultStrategy: "tap" },
    server: { host: true, open: true, port: PORT },
    site: "https://madliani-reactify.vercel.app/",
    srcDir: "./astro/",

    vite: {
        css: { transformer: "postcss" },
        plugins: [],
        resolve: {
            alias: {
                "@astro": pathe.resolve(import.meta.dirname, "./astro/"),
                "@react": pathe.resolve(import.meta.dirname, "./react/")
            }
        }
    }
})
