import js from "@eslint/js";
import pluginCompat from "eslint-plugin-compat";
import pluginImport from "eslint-plugin-import";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import { configs as tsConfigs, parser as tsParser } from "typescript-eslint";

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
            js.configs.recommended,
            tsConfigs.recommended,
            pluginCompat.configs["flat/recommended"],
            pluginImport.flatConfigs.recommended,
            pluginImport.flatConfigs.typescript
        ],
        languageOptions: {
            ecmaVersion: 2022,
            globals: {
                ...globals.browser
            },
            parser: tsParser,
            parserOptions: {
                allowReserved: false,
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: true,
                    jsx: true
                },
                project: ["tsconfig.json"]
            },
            sourceType: "module"
        },
        settings: {
            "import/resolver": {
                typescript: true
            }
        }
    }
]);
