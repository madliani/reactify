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
    ...tsConfig,
    extends: [...tsConfig.extends, pluginCompat.configs["flat/recommended"]]
}

/** @type {import("./types/eslint.d").ConfigWithExtendsArray} */
const tsxConfig = {
    ...browserConfig,
    languageOptions: {
        ...browserConfig.languageOptions,
        parserOptions: {
            ...browserConfig.languageOptions.parserOptions,
            ecmaFeatures: {
                ...browserConfig.languageOptions.parserOptions.ecmaFeatures,
                jsx: true
            }
        }
    }
}

/** @type {import("./types/eslint.d").ConfigWithExtendsArray} */
const astroConfig = {
    ...browserConfig,
    extends: [
        ...browserConfig.extends,
        pluginAstro.configs["flat/recommended"]
    ],
    settings: {
        ...browserConfig.settings,
        "import/core-modules": ["astro:transitions"]
    }
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
    { ...tsConfig, files: ["*.config.js"] },
    { ...browserConfig, files: ["**/*.ts"] },
    { ...tsxConfig, files: ["**/*.tsx"] },
    { ...astroConfig, files: ["**/*.astro"] }
])
