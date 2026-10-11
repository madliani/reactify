import vitePluginReact from "@vitejs/plugin-react"
import { playwright } from "@vitest/browser-playwright"
import { configDefaults, defineConfig } from "vitest/config"

const vitePlugins = [vitePluginReact()]

/** @type {import("./types/vitest").UserConfig} */
export default defineConfig({
    plugins: [...vitePlugins],
    resolve: { tsconfigPaths: true },
    test: {
        projects: [
            {
                test: {
                    ...configDefaults,
                    browser: {
                        enabled: true,
                        headless: true,
                        instances: [
                            { browser: "chromium" },
                            { browser: "firefox" }
                        ],
                        provider: playwright()
                    },
                    coverage: {
                        enabled: true,
                        provider: "v8",
                        reporter: ["html", "lcov"]
                    },
                    globals: false,
                    globalSetup: [],
                    include: ["./react/**/*.browser.tsx"],
                    name: "reactify-browser",
                    passWithNoTests: true,
                    reporters: ["default", "html"],
                    restoreMocks: true,
                    setupFiles: ["./tests/setup.ts"]
                }
            }
        ]
    }
})
