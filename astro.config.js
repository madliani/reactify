import reactIntegration from "@astrojs/react"
import sitemapIntegration from "@astrojs/sitemap"
import vitePluginTW from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

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
    server: { host: true, open: true, port: PORT },
    site: "https://madliani-reactify.vercel.app/",

    vite: { plugins: [...vitePlugins] }
})
