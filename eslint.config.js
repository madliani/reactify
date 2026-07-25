import js from "@eslint/js";
import pluginCompat from "eslint-plugin-compat";
import pluginImport from "eslint-plugin-import";
import pluginJSXA11Y from "eslint-plugin-jsx-a11y";
import pluginNoUnsanitized from "eslint-plugin-no-unsanitized";
import pluginPromise from "eslint-plugin-promise";
import { configs as regExpConfigs } from "eslint-plugin-regexp";
import pluginSonarJS from "eslint-plugin-sonarjs";
import pluginSort from "eslint-plugin-sort";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import { configs as tsConfigs, parser as tsParser } from "typescript-eslint";

export default defineConfig([
    globalIgnores(["node_modules/"]),
    {
        extends: [
            js.configs.recommended,
            tsConfigs.recommended,
            pluginCompat.configs["flat/recommended"],
            pluginImport.flatConfigs.recommended,
            pluginImport.flatConfigs.typescript,
            pluginJSXA11Y.flatConfigs.recommended,
            pluginNoUnsanitized.configs.recommended,
            pluginPromise.configs["flat/recommended"],
            regExpConfigs["flat/recommended"],
            pluginSonarJS.configs.recommended,
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
