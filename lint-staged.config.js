import { defineConfig } from "lint-staged/config"

export default defineConfig({
    "*": [
        "oxlint --fix --no-error-on-unmatched-pattern",
        "oxfmt --write --no-error-on-unmatched-pattern"
    ]
})
