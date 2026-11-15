const configs = [
    "stylelint-config-standard",
    "stylelint-config-html/astro",
    "stylelint-config-tailwindcss",
    "stylelint-config-clean-order"
]
const plugins = ["stylelint-no-unsupported-browser-features"]

const stylelintRules = {
    "at-rule-prelude-no-invalid": [true, { "ignoreAtRules": ["apply"] }],
    "import-notation": "string",
    "selector-class-pattern": null
}
const pluginRules = {
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
const rules = { ...stylelintRules, ...pluginRules }

export default {
    allowEmptyInput: true,
    cache: true,
    defaultSeverity: "error",
    extends: configs,
    fix: true,
    maxWarnings: 0,
    plugins,
    rules
}
