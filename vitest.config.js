import vitePluginReact from "@vitejs/plugin-react"
import { configDefaults, defineConfig } from "vitest/config"

const COVERAGE_REPORTER = ["html", "lcov"]
const INCLUDE = [
    "./react/**/*.test.ts",
    "./react/**/*.test.tsx",
    "./astro/**/*.test.ts"
]
const REPORTERS = ["default", "html"]
const SETUP_FILES = ["./tests/setup.ts"]

const vitePlugins = [vitePluginReact()]

/** @type {import("./types/vitest").UserConfig} */
export default defineConfig({
    resolve: { tsconfigPaths: true },
    test: {
        ...configDefaults,
        coverage: {
            enabled: true,
            provider: "v8",
            reporter: COVERAGE_REPORTER
        },
        environment: "happy-dom",
        globals: false,
        globalSetup: [],
        include: INCLUDE,
        name: "reactify-node",
        passWithNoTests: true,
        plugins: [...vitePlugins],
        reporters: REPORTERS,
        restoreMocks: true,
        sequence: { concurrent: true },
        setupFiles: SETUP_FILES
    }
})
