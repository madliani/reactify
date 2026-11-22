import vitePluginReact from "@vitejs/plugin-react"
import { configDefaults, defineConfig } from "vitest/config"

export default defineConfig({
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
                    globalSetup: [],
                    globals: false,
                    include: [
                        "./tests/react/**/*.test.ts",
                        "./tests/react/**/*.test.tsx"
                    ],
                    name: "reactify-node",
                    passWithNoTests: true,
                    plugins: [vitePluginReact()],
                    reporters: ["default", "html"],
                    restoreMocks: true,
                    sequence: { concurrent: true },
                    setupFiles: ["./tests/react/setup.ts"]
                }
            }
        ]
    }
})
