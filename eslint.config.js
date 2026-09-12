import pluginJS from "@eslint/js";
import pluginJSON from "@eslint/json";
import pluginCompat from "eslint-plugin-compat";
import pluginImport from "eslint-plugin-import";
import pluginNoSecrets from "eslint-plugin-no-secrets";
import pluginPerfect from "eslint-plugin-perfectionist";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import ts from "typescript-eslint";

/** @type {import("eslint/config").Config} */
export default defineConfig([
    globalIgnores([
        ".vitest/",
        "coverage/",
        "dist/",
        "node_modules/",
        "package-lock.json"
    ]),
    {
        extends: [
            pluginJS.configs.recommended,
            ts.configs.eslintRecommended,
            ts.configs.strict,
            ts.configs.stylistic,
            pluginPerfect.configs["recommended-alphabetical"],
            pluginImport.flatConfigs.recommended,
            pluginImport.flatConfigs.typescript,
            pluginCompat.configs["flat/recommended"]
        ],
        files: ["*.config.js", "**/*.ts", "**/*.tsx"],
        languageOptions: {
            ecmaVersion: 2022,
            globals: globals.builtin,
            parser: ts.parser,
            parserOptions: {
                allowReserved: false,
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: true,
                    jsx: false
                }
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
        settings: {
            "import/resolver": {
                typescript: true
            }
        }
    },
    {
        files: ["*.tsx"],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }
    },
    { files: ["*.config.js"], settings: { "import/resolver": { node: true } } },
    {
        extends: [pluginJSON.configs.recommended],
        files: ["**/*.json", "**/*.jsonc"],
        language: "json/jsonc",
        rules: { "json/sort-keys": "error" }
    }
]);
