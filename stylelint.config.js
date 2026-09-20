/** @type {import("stylelint").Config} */
export default {
    allowEmptyInput: true,
    cache: true,
    defaultSeverity: "error",
    extends: ["stylelint-config-standard", "stylelint-config-clean-order"],
    fix: true,
    maxWarnings: 0,
    plugins: ["stylelint-no-unsupported-browser-features"],
    rules: {
        "import-notation": "string",
        "plugin/no-unsupported-browser-features": [
            true,
            {
                ignore: [
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
