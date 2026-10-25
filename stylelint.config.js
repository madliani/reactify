const EXTENDS = [
    "stylelint-config-standard",
    "stylelint-config-html/astro",
    "stylelint-config-clean-order"
]
const PLUGINS = ["stylelint-no-unsupported-browser-features"]

/** @type {import("stylelint").Config} */
export default {
    allowEmptyInput: true,
    cache: true,
    defaultSeverity: "error",
    extends: EXTENDS,
    fix: true,
    maxWarnings: 0,
    plugins: PLUGINS,
    rules: {
        "import-notation": "string",
        "plugin/no-unsupported-browser-features": [
            true,
            {
                ignore: [
                    "css-cascade-layers",
                    "css-logical-props",
                    "css-media-range-syntax",
                    "css-nesting",
                    "intrinsic-width",
                    "viewport-unit-variants"
                ],
                severity: "error"
            }
        ],
        "selector-class-pattern": null
    }
}
