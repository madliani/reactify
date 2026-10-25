import { defineConfig } from "cspell"

const IGNORE_PATHS = [
    ".vitest/",
    "assets/",
    "coverage/",
    "dist/",
    "node_modules/",
    "package-lock.json",
    "pnpm-lock.yaml",
    "public/"
]
const IMPORT = ["@cspell/dict-ru_ru/cspell-ext.json"]

const GENERAL_DICT = "en, en-US, en-GB, companies, softwareTerms, misc"
const PL_DICT = "typescript, node, html, css"
const MISCELLANEOUS_DICT = "fonts, fileTypes, npm"
const RUSSIAN_DICT = "ru, ru-RU"

const dicts = [GENERAL_DICT, PL_DICT, MISCELLANEOUS_DICT, RUSSIAN_DICT]
const language = dicts.join(",")

const englishWords = [
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

const russianWords = []

/** @type {import("cspell").CSpellSettings} */
export default defineConfig({
    ignorePaths: IGNORE_PATHS,
    import: IMPORT,
    language: language,
    useGitignore: true,
    words: [...englishWords, ...russianWords]
})
