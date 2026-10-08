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
                    include: ["./src/**/*.test.ts", "./src/**/*.test.tsx"],
                    name: "reactify-node",
                    passWithNoTests: true,
                    reporters: ["default", "html"],
                    setupFiles: ["./tests/setup.ts"]
                }
            }
        ]
    }
})
