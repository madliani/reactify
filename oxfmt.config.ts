import { defineConfig } from "oxfmt"

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
    arrowParens: "avoid",
    astro: true,
    bracketSameLine: false,
    bracketSpacing: true,
    embeddedLanguageFormatting: "auto",
    htmlWhitespaceSensitivity: "strict",
    ignorePatterns,
    objectWrap: "collapse",
    printWidth: 80,
    proseWrap: "always",
    quoteProps: "preserve",
    semi: false,
    singleAttributePerLine: false,
    singleQuote: false,
    sortPackageJson: false,
    tabWidth: 4,
    trailingComma: "none",
    useTabs: false
})
