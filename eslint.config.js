import pluginJS from "@eslint/js"
import pluginJSON from "@eslint/json"
import pluginMD from "@eslint/markdown"
import pluginAstro from "eslint-plugin-astro"
import pluginCompat from "eslint-plugin-compat"
import pluginImport from "eslint-plugin-import"
import pluginNoSecrets from "eslint-plugin-no-secrets"
import pluginPerfect from "eslint-plugin-perfectionist"
import { defineConfig, globalIgnores, includeIgnoreFile } from "eslint/config"
import globals from "globals"
import pathe from "pathe"
import ts from "typescript-eslint"

const GLOBAL_IGNORE_PATTERNS = ["package-lock.json"]

const gitIgnorePath = pathe.resolve(import.meta.dirname, ".gitignore")

const browserExtends = [pluginCompat.configs["flat/recommended"]]

const ASTRO_CORE_MODULES = ["astro:transitions"]
const astroExtends = [pluginAstro.configs["flat/recommended"]]
const astroSettings = { "import/core-modules": [...ASTRO_CORE_MODULES] }

/** @type {import("./types/eslint.d").ConfigWithExtendsArray} */
const tsConfig = {
    extends: [
        pluginJS.configs.recommended,
        ts.configs.eslintRecommended,
        ts.configs.strict,
        ts.configs.stylistic,
        pluginPerfect.configs["recommended-alphabetical"],
        pluginImport.flatConfigs.recommended,
        pluginImport.flatConfigs.typescript
    ],
    languageOptions: {
        ecmaVersion: 2022,
        globals: globals.builtin,
        parserOptions: {
            allowReserved: false,
            ecmaFeatures: { globalReturn: false, impliedStrict: true }
        },
        sourceType: "module"
    },
    plugins: { "no-secrets": pluginNoSecrets },
    rules: {
        "import/no-named-as-default-member": "off",
        "import/order": "off",
        "no-secrets/no-pattern-match": "error",
        "no-secrets/no-secrets": "error"
    },
    settings: { "import/resolver": { typescript: true } }
}

/** @type {import("./types/eslint.d").ConfigWithExtendsArray} */
const browserConfig = {
    extends: [...tsConfig.extends, ...browserExtends],
    languageOptions: tsConfig.languageOptions,
    plugins: tsConfig.plugins,
    rules: tsConfig.rules,
    settings: tsConfig.settings
}

/** @type {import("./types/eslint.d").ConfigWithExtendsArray} */
const tsxConfig = {
    extends: browserConfig.extends,
    languageOptions: {
        ...browserConfig.languageOptions,
        parserOptions: {
            ...browserConfig.languageOptions.parserOptions,
            ecmaFeatures: {
                ...browserConfig.languageOptions.parserOptions.ecmaFeatures,
                jsx: true
            }
        }
    },
    plugins: browserConfig.plugins,
    rules: browserConfig.rules,
    settings: browserConfig.settings
}

/** @type {import("./types/eslint.d").ConfigWithExtendsArray} */
const astroConfig = {
    extends: [...browserExtends, ...astroExtends],
    languageOptions: browserConfig.languageOptions,
    plugins: browserConfig.plugins,
    rules: browserConfig.rules,
    settings: { ...browserConfig.settings, ...astroSettings }
}

export default defineConfig([
    includeIgnoreFile(gitIgnorePath),
    globalIgnores(GLOBAL_IGNORE_PATTERNS),
    {
        extends: [pluginJSON.configs.recommended],
        files: ["**/*.json", "**/*.jsonc"],
        language: "json/jsonc",
        rules: { "json/sort-keys": "error" }
    },
    {
        extends: [pluginMD.configs.recommended],
        files: ["**/*.md"],
        language: "markdown/commonmark",
        rules: { "markdown/no-missing-label-refs": "off" }
    },
    {
        extends: tsConfig.extends,
        files: ["*.config.js"],
        languageOptions: tsConfig.languageOptions,
        plugins: tsConfig.plugins,
        rules: tsConfig.rules,
        settings: tsConfig.settings
    },
    {
        extends: browserConfig.extends,
        files: ["**/*.ts"],
        languageOptions: tsConfig.languageOptions,
        plugins: tsConfig.plugins,
        rules: tsConfig.rules,
        settings: tsConfig.settings
    },
    {
        extends: tsConfig.extends,
        files: ["**/*.tsx"],
        languageOptions: tsxConfig.languageOptions,
        plugins: tsxConfig.plugins,
        rules: tsxConfig.rules,
        settings: tsxConfig.settings
    },
    {
        extends: astroConfig.extends,
        files: ["**/*.astro"],
        languageOptions: astroConfig.languageOptions,
        plugins: astroConfig.plugins,
        rules: astroConfig.rules,
        settings: astroConfig.settings
    }
])
