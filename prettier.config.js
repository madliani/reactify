/** @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions} */
export default {
    arrowParens: "avoid",
    bracketSameLine: false,
    bracketSpacing: true,
    embeddedLanguageFormatting: "auto",
    endOfLine: "auto",
    htmlWhitespaceSensitivity: "strict",
    objectWrap: "collapse",
    plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    printWidth: 80,
    proseWrap: "always",
    quoteProps: "preserve",
    semi: false,
    singleAttributePerLine: false,
    singleQuote: false,
    tabWidth: 4,
    tailwindStylesheet: "./src/styles/global.css",
    trailingComma: "none",
    useTabs: false
}
