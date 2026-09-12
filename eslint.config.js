import js from "@eslint/js";
import pluginCompat from "eslint-plugin-compat";
import pluginImport from "eslint-plugin-import";
import pluginNoUnsanitized from "eslint-plugin-no-unsanitized";
import pluginSort from "eslint-plugin-sort";
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
            pluginImport.flatConfigs.typescript,
            pluginNoUnsanitized.configs.recommended,
            pluginSort.configs["flat/recommended"]
        ],

        languageOptions: {
            ecmaVersion: 2022,

            globals: {
                ...globals.browser,
                ...globals.jest
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

        rules: {
            "sort/imports": "off"
        },

        settings: {
            "import/resolver": {
                typescript: true
            }
        }
    }
]);
