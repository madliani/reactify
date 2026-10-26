import vitePluginReact from "@vitejs/plugin-react"
import { configDefaults, defineConfig } from "vitest/config"

const INCLUDE = [
    "./react/**/*.test.ts",
    "./react/**/*.test.tsx",
    "./astro/**/*.test.ts"
]
const SETUP_FILES = ["./tests/setup.ts"]

const vitePlugins = [vitePluginReact()]
const plugins = [...vitePlugins]

/** @type {import("./types/vitest").UserConfig} */
const reactTests = {
    test: {
        ...configDefaults,
        coverage: { enabled: true, provider: "v8", reporter: ["html", "lcov"] },
        environment: "happy-dom",
        globals: false,
        globalSetup: [],
        include: INCLUDE,
        name: "reactify-node",
        passWithNoTests: true,
        plugins,
        reporters: ["default", "html"],
        restoreMocks: true,
        sequence: { concurrent: true },
        setupFiles: SETUP_FILES
    }
}

/** @type {import("./types/vitest").UserConfig} */
export default defineConfig({
    resolve: { tsconfigPaths: true },
    test: { projects: [reactTests] }
})
