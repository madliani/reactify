import { defineConfig } from "cspell"

const ignorePaths = [
    ".astro/",
    ".vitest/",
    "assets/",
    "coverage/",
    "dist/",
    "node_modules/",
    "package-lock.json",
    "pnpm-lock.yaml",
    "public/"
]

const importedDicts = ["@cspell/dict-ru_ru/cspell-ext.json"]

const GENERAL_DICT = "en, en-US, en-GB, companies, softwareTerms, misc"
const PL_DICT = "typescript, node, html, css"
const MISC_DICT = "fonts, fileTypes, npm"
const RU_DICT = "ru, ru-RU"
const dicts = [GENERAL_DICT, PL_DICT, MISC_DICT, RU_DICT]
const language = dicts.join(",")

const ENGLISH_WORDS = [
    "asynciterable",
    "browserslistrc",
    "commonmark",
    "fontsource",
    "hotfixes",
    "lightningcss",
    "madliani",
    "nanostores",
    "reactify",
    "roboto",
    "stylelintcache",
    "stylelintignore",
    "vite",
    "vitest"
]

export default defineConfig({
    ignorePaths,
    import: importedDicts,
    language,
    useGitignore: true,
    words: [...ENGLISH_WORDS]
})
