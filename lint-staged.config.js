import { defineConfig } from "lint-staged/config"

export default defineConfig({
    "*.{astro,json,md,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{ts,tsx}": ["tsc --noEmit"]
})
