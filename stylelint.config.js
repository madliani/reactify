const configs = [
    "stylelint-config-standard",
    "stylelint-config-html/astro",
    "stylelint-config-tailwindcss",
    "stylelint-config-clean-order"
]
const plugins = ["stylelint-no-unsupported-browser-features"]

const stylelintRules = {
    "import-notation": "string",
    "selector-class-pattern": null
}
const PLUGIN_RULES = {
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
    ]
}
const RULES = { ...stylelintRules, ...PLUGIN_RULES }

export default {
    allowEmptyInput: true,
    cache: true,
    defaultSeverity: "error",
    extends: configs,
    fix: true,
    maxWarnings: 0,
    plugins,
    rules: RULES
}
