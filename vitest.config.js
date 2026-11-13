import vitePluginReact from "@vitejs/plugin-react"
import { configDefaults, defineConfig } from "vitest/config"

/** @type {import("./types/vitest").UserConfig} */
const reactProjectConfig = {
    test: {
        ...configDefaults,
        coverage: { enabled: true, provider: "v8", reporter: ["html", "lcov"] },
        environment: "happy-dom",
        globals: false,
        globalSetup: [],
        include: ["./tests/react/**/*.test.ts", "./tests/react/**/*.test.tsx"],
        name: "reactify-node",
        passWithNoTests: true,
        plugins: [vitePluginReact()],
        reporters: ["default", "html"],
        restoreMocks: true,
        sequence: { concurrent: true },
        setupFiles: ["./tests/react/setup.ts"]
    }
}

export default defineConfig({
    resolve: { tsconfigPaths: true },
    test: { projects: [reactProjectConfig] }
})
