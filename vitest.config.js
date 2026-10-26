import vitePluginReact from "@vitejs/plugin-react"
import { configDefaults, defineConfig } from "vitest/config"

const vitePlugins = [vitePluginReact()]

/** @type {import("./types/vitest").UserConfig} */
const reactTests = {
    test: {
        ...configDefaults,
        coverage: { enabled: true, provider: "v8", reporter: ["html", "lcov"] },
        environment: "happy-dom",
        globals: false,
        globalSetup: [],
        include: ["./react/**/*.test.ts", "./react/**/*.test.tsx"],
        name: "reactify-node",
        passWithNoTests: true,
        plugins: [...vitePlugins],
        reporters: ["default", "html"],
        restoreMocks: true,
        sequence: { concurrent: true },
        setupFiles: ["./tests/setup.ts"]
    }
}

/** @type {import("./types/vitest").UserConfig} */
export default defineConfig({
    resolve: { tsconfigPaths: true },
    test: { projects: [reactTests] }
})
