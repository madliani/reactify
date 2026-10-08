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
                    setupFiles: ["./tests/setup.ts"]
                }
            }
        ]
    }
})
