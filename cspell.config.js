import { defineConfig } from "cspell"

const GENERAL_DICT = "en, en-US, en-GB, companies, softwareTerms, misc"
const PL_DICT = "typescript, node, html, css"
const MISC_DICT = "fonts, fileTypes, npm"

const RU_DICT = "ru, ru-RU"

const IMPORT = ["@cspell/dict-ru_ru/cspell-ext.json"]

const DICTS = [GENERAL_DICT, PL_DICT, MISC_DICT, RU_DICT]
const LANGUAGE = DICTS.join(",")

const ENGLISH_WORDS = [
    "asynciterable",
    "browserslistrc",
    "commonmark",
    "fontsource",
    "hotfixes",
    "madliani",
    "nanostores",
    "reactify",
    "roboto",
    "stylelintcache",
    "stylelintignore",
    "vite",
    "vitest"
]
const WORDS = [...ENGLISH_WORDS]

/** @type {import("cspell").CSpellSettings} */
export default defineConfig({
    ignorePaths: [
        ".astro/",
        ".vitest/",
        "assets/",
        "coverage/",
        "dist/",
        "node_modules/",
        "package-lock.json",
        "pnpm-lock.yaml",
        "public/"
    ],
    import: IMPORT,
    language: LANGUAGE,
    useGitignore: true,
    words: WORDS
})
