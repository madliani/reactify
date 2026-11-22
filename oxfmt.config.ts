import { defineConfig } from "oxfmt"

export default defineConfig({
    arrowParens: "avoid",
    astro: {},
    bracketSameLine: false,
    bracketSpacing: true,
    embeddedLanguageFormatting: "auto",
    htmlWhitespaceSensitivity: "strict",
    ignorePatterns: [
        ".env*",
        "node_modules/",
        "npm-debug.log*",
        "pnpm-debug.log*",
        "pnpm-lock.yaml",
        "pnpm-workspace.yaml",
        "yarn-debug.log*",
        "yarn-error.log*",
        "*.tsbuildinfo",
        ".astro/",
        "dist/",
        ".vitest/",
        "coverage/",
        ".stylelintcache"
    ],
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
