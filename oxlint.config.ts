import { defineConfig } from "oxlint"

export default defineConfig({
    categories: { correctness: "error" },
    env: { builtin: true },
    ignorePatterns: [".output/", "coverage/", "node_modules/"],
    plugins: [
        "eslint",
        "import",
        "jsdoc",
        "node",
        "oxc",
        "promise",
        "typescript"
    ],
    rules: {}
})
