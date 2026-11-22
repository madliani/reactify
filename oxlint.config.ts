import { defineConfig } from "oxlint"

const ignorePatterns = [".output/", "coverage/", "node_modules/"]

export default defineConfig({
    categories: { correctness: "error" },
    env: { builtin: true },
    ignorePatterns,
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
