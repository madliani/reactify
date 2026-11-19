import { defineConfig } from "lint-staged/config"

export default defineConfig({
    "*": "prettier --write",
    "*.{astro,ts,tsx}": "eslint --fix"
})
