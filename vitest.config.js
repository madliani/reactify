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
                    coverage: {
                        enabled: true,
                        provider: "v8",
                        reporter: ["html", "lcov"]
                    },
                    environment: "happy-dom",
                    globals: false,
                    globalSetup: [],
                    include: [
                        "./react/**/*.test.ts",
                        "./react/**/*.test.tsx",
                        "./astro/**/*.test.ts"
                    ],
                    name: "reactify-node",
                    passWithNoTests: true,
                    reporters: ["default", "html"],
                    restoreMocks: true,
                    sequence: { concurrent: true },
                    setupFiles: ["./tests/setup.ts"]
                }
            },
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
                    include: [
                        "./react/**/*.test.ts",
                        "./react/**/*.test.tsx",
                        "./astro/**/*.test.ts"
                    ],
                    name: "reactify-browser",
                    passWithNoTests: true,
                    reporters: ["default", "html"],
                    restoreMocks: true,
                    sequence: { concurrent: false },
                    setupFiles: ["./tests/setup.ts"]
                }
            }
        ]
    }
})
