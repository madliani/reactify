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
    categories: { correctness: "error" },
    env: { builtin: true },
    ignorePatterns,
    options: { typeAware: true },
    plugins: [
        "eslint",
        "import",
        "jsdoc",
        "node",
        "oxc",
        "promise",
        "typescript"
    ],
    rules: { "eslint/sort-imports": "off", "eslint/sort-keys": "error" }
})
