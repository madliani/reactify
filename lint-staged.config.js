import { defineConfig } from "lint-staged/config"

export default defineConfig({
    "*.{astro,json,md,ts,tsx}": [
        "oxlint --fix --no-error-on-unmatched-pattern",
        "prettier --write"
    ]
})
