import vitePluginReact from "@vitejs/plugin-react"
import { configDefaults, defineConfig } from "vitest/config"

const reactTests = ["./tests/react/**/*.test.ts", "./tests/react/**/*.test.tsx"]
const reactSetupFiles = ["./tests/react/setup.ts"]

export default defineConfig({
    resolve: { tsconfigPaths: true },
    test: {
        ...configDefaults,
        coverage: { enabled: true, provider: "v8", reporter: ["html", "lcov"] },
        environment: "happy-dom",
        globalSetup: [],
        globals: false,
        include: reactTests,
        name: "reactify-node",
        passWithNoTests: true,
        plugins: [vitePluginReact()],
        reporters: ["default", "html"],
        restoreMocks: true,
        sequence: { concurrent: true },
        setupFiles: reactSetupFiles,
        testTimeout: 5000
    }
})
