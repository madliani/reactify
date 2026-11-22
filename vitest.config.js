import vitePluginReact from "@vitejs/plugin-react"
import { configDefaults, defineConfig } from "vitest/config"

const TEST_TIMEOUT = 5000

const tests = ["./tests/react/**/*.test.ts", "./tests/react/**/*.test.tsx"]
const setupFiles = ["./tests/react/setup.ts"]

export default defineConfig({
    resolve: { tsconfigPaths: true },
    test: {
        ...configDefaults,
        coverage: { enabled: true, provider: "v8", reporter: ["html", "lcov"] },
        environment: "happy-dom",
        globalSetup: [],
        globals: false,
        include: tests,
        name: "reactify-node",
        passWithNoTests: true,
        plugins: [vitePluginReact()],
        reporters: ["default", "html"],
        restoreMocks: true,
        sequence: { concurrent: true },
        setupFiles: setupFiles,
        testTimeout: TEST_TIMEOUT
    }
})
