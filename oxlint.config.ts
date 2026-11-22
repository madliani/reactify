import { defineConfig } from "oxlint"

const ignorePatterns = [
    ".astro/",
    ".env*",
    ".stylelintcache",
    ".vitest/",
    "*.tsbuildinfo",
    "coverage/",
    "dist/",
    "node_modules/",
    "npm-debug.log*",
    "pnpm-debug.log*",
    "pnpm-lock.yaml",
    "pnpm-workspace.yaml",
    "yarn-debug.log*",
    "yarn-error.log*"
]

export default defineConfig({
    categories: {
        correctness: "error",
        nursery: "error",
        perf: "error",
        restriction: "error"
    },
    env: { astro: true, browser: true, builtin: true },
    ignorePatterns,
    options: { typeAware: true },
    plugins: [
        "eslint",
        "import",
        "jsdoc",
        "jsx-a11y",
        "node",
        "oxc",
        "promise",
        "react-perf",
        "react",
        "typescript",
        "vitest"
    ],
    rules: {
        "eslint/sort-imports": "off",
        "eslint/sort-keys": "error",
        "import/no-default-export": "off",
        "import/unambiguous": "off",
        "oxc/no-async-await": "off",
        "oxc/no-rest-spread-properties": "off",
        "react/forbid-component-props": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-no-literals": "off",
        "vitest/require-test-timeout": "off"
    }
})
