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

const gitIgnorePath = pathe.resolve(import.meta.dirname, ".gitignore")

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

const jsxConfig = {
    languageOptions: {
        ...tsConfig.languageOptions,
        parserOptions: {
            ...tsConfig.languageOptions.parserOptions,
            ecmaFeatures: {
                ...tsConfig.languageOptions.parserOptions.ecmaFeatures,
                jsx: true
            }
        }
    }
}

const browserConfig = { extends: [pluginCompat.configs["flat/recommended"]] }

/** @type {import("eslint/config").Config} */
export default defineConfig([
    includeIgnoreFile(gitIgnorePath),
    globalIgnores([
        ".astro/",
        ".vitest/",
        "coverage/",
        "dist/",
        "node_modules/",
        "package-lock.json"
    ]),
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
        settings: {
            ...tsConfig.settings,
            "import/resolver": {
                ...tsConfig.settings["import/resolver"],
                node: true
            }
        }
    },
    {
        extends: [...tsConfig.extends, ...browserConfig.extends],
        files: ["**/*.ts"],
        languageOptions: tsConfig.languageOptions,
        plugins: tsConfig.plugins,
        rules: tsConfig.rules,
        settings: tsConfig.settings
    },
    {
        extends: [...tsConfig.extends, ...browserConfig.extends],
        files: ["**/*.tsx"],
        languageOptions: jsxConfig.languageOptions,
        plugins: tsConfig.plugins,
        rules: tsConfig.rules,
        settings: tsConfig.settings
    },
    {
        extends: [
            ...tsConfig.extends,
            ...browserConfig.extends,
            pluginAstro.configs["flat/recommended"]
        ],
        files: ["**/*.astro"],
        languageOptions: tsConfig.languageOptions,
        plugins: tsConfig.plugins,
        rules: tsConfig.rules,
        settings: {
            ...tsConfig.settings,
            "import/core-modules": ["astro:transitions"]
        }
    }
])
