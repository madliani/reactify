import { defineConfig } from "cspell"

const GENERAL_DICT = "en, en-US, en-GB, companies, softwareTerms, misc"
const PL_DICT = "typescript, node, html, css"
const MISC_DICT = "fonts, fileTypes, npm"
const RU_DICT = "ru, ru-RU"

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

const dicts = [GENERAL_DICT, PL_DICT, MISC_DICT, RU_DICT]
const language = dicts.join(",")

const englishWords = [
    "asynciterable",
    "browserslistrc",
    "commonmark",
    "fontawesome",
    "fontsource",
    "fortawesome",
    "heroui",
    "hotfixes",
    "madliani",
    "nanostores",
    "nowrap",
    "preinitialized",
    "reactify",
    "stylelintcache",
    "stylelintignore",
    "vite",
    "vitest"
]
const words = [...englishWords]

export default defineConfig({
    ignorePaths,
    import: importedDicts,
    language,
    useGitignore: true,
    words
})
