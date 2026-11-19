import { defineConfig } from "lint-staged/config"

export default defineConfig({
    "*.{astro,ts,tsx}": ["eslint --fix", "prettier --write"]
})
