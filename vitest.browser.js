import { playwright } from "@vitest/browser-playwright"
import { configDefaults, defineConfig } from "vitest/config"

/** @type {import("./types/vitest").UserConfig} */
export default defineConfig({
    plugins: [],
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
                    include: ["./src/**/*.test.ts", "./src/**/*.test.tsx"],
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
