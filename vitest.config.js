import vitePluginReact from "@vitejs/plugin-react"
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
                    sequence: { concurrent: false },
                    setupFiles: ["./react/tests/setup.ts"]
                }
            }
        ]
    }
})
