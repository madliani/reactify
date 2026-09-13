import { configDefaults, defineConfig } from "vitest/config"

/** @type {import("./types/vitest").UserConfig} */
export default defineConfig({
    plugins: [],
    resolve: { tsconfigPaths: true },
    test: {
        ...configDefaults,
        coverage: {
            enabled: false,
            provider: "v8",
            reporter: ["html", "lcov"]
        },
        environment: "happy-dom",
        globals: false,
        globalSetup: [],
        include: ["./src/**/*.test.ts"],
        name: "quoter-bot",
        passWithNoTests: true,
        reporters: ["default", "html"],
        setupFiles: []
    }
})
