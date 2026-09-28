import pluginJS from "@eslint/js"
import pluginJSON from "@eslint/json"
import pluginMD from "@eslint/markdown"
import pluginAstro from "eslint-plugin-astro"
import pluginCompat from "eslint-plugin-compat"
import pluginImport from "eslint-plugin-import"
import pluginNoSecrets from "eslint-plugin-no-secrets"
import pluginPerfect from "eslint-plugin-perfectionist"
import { defineConfig, globalIgnores } from "eslint/config"
import globals from "globals"
import ts from "typescript-eslint"

const tsExtends = [
    pluginJS.configs.recommended,
    ts.configs.eslintRecommended,
    ts.configs.strict,
    ts.configs.stylistic,
    pluginPerfect.configs["recommended-alphabetical"],
    pluginImport.flatConfigs.recommended,
    pluginImport.flatConfigs.typescript
]

const tsLanguageOptions = {
    ecmaVersion: 2022,
    globals: globals.builtin,
    parserOptions: {
        allowReserved: false,
        ecmaFeatures: { globalReturn: false, impliedStrict: true }
    },
    sourceType: "module"
}

const tsPlugins = { "no-secrets": pluginNoSecrets }

const tsRules = {
    "import/no-named-as-default-member": "off",
    "import/order": "off",
    "no-secrets/no-pattern-match": "error",
    "no-secrets/no-secrets": "error"
}

const tsSettings = { "import/resolver": { typescript: true } }

const browserExtends = [pluginCompat.configs["flat/recommended"]]

const jsxLanguageOptions = {
    ...tsLanguageOptions,
    parserOptions: {
        ...tsLanguageOptions.parserOptions,
        ecmaFeatures: {
            ...tsLanguageOptions.parserOptions.ecmaFeatures,
            jsx: true
        }
    }
}

/** @type {import("eslint/config").Config} */
export default defineConfig([
    globalIgnores([
        ".astro/",
        ".vitest/",
        "coverage/",
        "dist/",
        "node_modules/",
        "package-lock.json"
    ]),
    {
        extends: [...tsExtends, ...browserExtends],
        files: ["**/*.ts"],
        languageOptions: { ...tsLanguageOptions },
        plugins: { ...tsPlugins },
        rules: { ...tsRules },
        settings: { ...tsSettings }
    },
    {
        extends: [...tsExtends],
        files: ["*.config.js"],
        languageOptions: { ...tsLanguageOptions, parser: ts.parser },
        plugins: { ...tsPlugins },
        rules: { ...tsRules },
        settings: {
            ...tsSettings,
            "import/resolver": { ...tsSettings["import/resolver"], node: true }
        }
    },
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
        extends: [...tsExtends, ...browserExtends],
        files: ["**/*.tsx"],
        languageOptions: { ...jsxLanguageOptions },
        plugins: { ...tsPlugins },
        rules: { ...tsRules },
        settings: { ...tsSettings }
    },
    {
        extends: [
            ...tsExtends,
            ...browserExtends,
            pluginAstro.configs["flat/recommended"]
        ],
        files: ["**/*.astro"],
        languageOptions: { ...jsxLanguageOptions },
        plugins: { ...tsPlugins },
        rules: { ...tsRules },
        settings: {
            ...tsSettings,
            "import/core-modules": ["astro:transitions"]
        }
    }
])
