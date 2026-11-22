import { defineConfig } from "oxfmt"

export default defineConfig({
    arrowParens: "avoid",
    bracketSameLine: false,
    bracketSpacing: true,
    embeddedLanguageFormatting: "auto",
    htmlWhitespaceSensitivity: "strict",
    objectWrap: "collapse",
    printWidth: 80,
    proseWrap: "always",
    quoteProps: "preserve",
    semi: false,
    singleAttributePerLine: false,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "none",
    useTabs: false,
    sortPackageJson: false,
    astro: {},
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
    ]
})
