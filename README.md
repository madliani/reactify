# Reactify

<div align="center">
    <img
        alt="Reactify logo"
        aria-label="Reactify logo"
        height="96px"
        src="./assets/icons/reactify-logo.svg"
        title="Reactify logo"
        width="96px"
    />
    <h3 align="center">A starter kit for React</h3>
</div>

## Tech Stack

<div align="center">
    <img alt="Astro" src="https://img.shields.io/badge/Astro-BC52EE.svg?style=for-the-badge&logo=Astro&logoColor=white" />
    <img alt="Node.js" src="https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white" title="Node.js" />
    <img alt="pnpm" src="https://img.shields.io/badge/pnpm-F69220.svg?style=for-the-badge&logo=pnpm&logoColor=white" title="pnpm" />
    <img alt="Radix UI" src="https://img.shields.io/badge/Radix%20UI-161618.svg?style=for-the-badge&logo=Radix-UI&logoColor=white">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" title="TypeScript" />
    <img alt="Vitest" src="https://img.shields.io/badge/Vitest-6E9F18.svg?style=for-the-badge&logo=Vitest&logoColor=white" title="Vitest" />
</div>

## Overview

This is a starter kit for React.

## Features

1. SEO-friendly

## Screenshots

<div align="center">
    <figure>
        <img alt="A screenshot of the homepage" src="./assets/images/reactify-homepage.png" title="A screenshot of the homepage">
        <figcaption>A screenshot of the homepage</figcaption>
    </figure>
</div>

## Prerequisites

Before setting up the website, make sure you have:

1. `Node.js`: a runtime environment for running the website
2. `pnpm`: a package manager for installing dependencies

## Installation

Follow these steps to set up the website:

1. Clone the repository:

    ```bash
    git clone https://github.com/madliani/reactify.git
    cd reactify
    ```

2. Install dependencies:

    ```bash
    pnpm install
    ```

3. Run tests:

    ```bash
    pnpm test
    ```

4. Build the website:

    ```bash
    pnpm build
    ```

## Project Structure

**Note:** The website is a `React`-based single-page application (SPA), but it
uses `Astro` as a bundler, a router, and an alternative for `React Helmet`.

- `assets/`: a directory containing assets for the `README.md` file
    - `assets/icons/`: a directory containing icons for the `README.md` file
    - `assets/images/`: a directory containing images for the `README.md`
- `public/`: a directory containing assets for the website
    - `assets/icons/`: a directory containing icons for the website
    - `assets/images`: a directory containing icons for the website
- `src/`: a directory containing source files of the website
    - `src/blocks/`: a directory containing `Astro`-based blocks of the website
        - `src/blocks/metadata.astro`: a file containing metadata, which makes
          the website more SEO-friendly
    - `src/components/`: a directory containing `Astro`-based components of the
      website
    - `src/configurations/`: a directory containing configuration files for the
      website
        - `src/configurations/metadata.config.json`: a configuration file for
          the `metadata` block
    - `src/layouts/`: a directory containing `Astro`-based layouts of the
      website
    - `src/pages/`: a directory containing `Astro`-based pages of the website
    - `src/react/`: a directory containing `React`-based components of the web
      app
    - `src/templates/`: a directory containing `Astro`-based templates for the
      pages of the website
- `types/`: a directory containing type declarations for the configuration files
    - `types/vitest.ts`: a file containing type declarations for the `Vitest`
      configuration file
- `.env`: an file, which contains environment variables (local and ignored by
  `Git`)
- `.browserslistrc`: a `Browserslist` configuration file
- `.gitattributes`: a `Git` attributes file
- `.gitignore`: a `Git` ignore file
- `.prettierignore`: a `Prettier` ignore file
- `.stylelintignore`: a `Stylelint` ignore file
- `.tsbuildinfo`: a file of the `TypeScript` compiler, which contains
  incremental compilation information (local and ignored by `Git`)
- `AUTHORS.txt`: an `AUTHORS` file
- `CHANGELOG.md`: a `CHANGELOG.md` file
- `CONTRIBUTING.md`: a `CONTRIBUTING.md` file
- `cspell.config.js`: a JavaScript-based `cSpell` configuration file
- `eslint.config.js`: a JavaScript-based `ESLint` configuration file
- `index.html`: an `index.html` file
- `LICENSE.txt`: a license file
- `package.json`: a `package.json` file
- `pnpm-lock.yaml`: a `pnpm` lockfile
- `pnpm-workspace.yaml`: a `pnpm-workspace.yaml` file
- `prettier.config.js`: a JavaScript-based `Prettier` configuration file
- `README.md`: a `README` file
- `tsconfig.app.json`: a `TypeScript` configuration file for the web app
- `tsconfig.json`: a base `TypeScript` configuration file
- `tsconfig.json`: a main `TypeScript` configuration file
- `tsconfig.test.json`: a `TypeScript` configuration file for the tests
- `tsdown.config.js`: a JavaScript-based `tsdown` configuration file
- `vitest.config.js`: a JavaScript-based `Vitest` configuration file

## Branches

- `stable`: a stable branch for production builds
- `unstable`: an unstable branch for development and testing

**Note:** If you were expecting to see additional branches here, please see
[Git Workflow](./README.md#git-workflow).

## Git Workflow

This is my personal project that I'm developing alone and for my own purposes.
For that reason, a **simplified** `Git` workflow is used here.

The **simplified** `Git` workflow contains the following steps:

0. Pull from the remote (optional)
1. Synchronize the `unstable` branch with the `stable` branch
2. Make a new branch for a new feature, bugfix, or hotfix from the `unstable`
   branch
3. Push branch to the remote
4. Implement the feature, bugfix, or hotfix within the branch
5. Test the feature, bugfix, or hotfix within the branch
6. Synchronize the `unstable` branch with the `stable` branch (optional)
7. Synchronize the branch with the `unstable` branch (optional)
8. Retest the feature, bugfix, or hotfix within the branch (optional)
9. Merge the branch into the `unstable` branch
10. Merge the `unstable` branch into `stable` branch
11. Make a release within the `stable` branch
12. Delete the branch
13. Push changes to the remote

**Note:** The optional steps are needed if you are developing a few features,
bugfixes, or hotfixes at the same time.

## Notes for developer

1. The size of the image for `The Open Graph protocol` should be `1200x630`
   pixels.
2. For compatibility reasons, in the project, I used the
   [Nano Stores](https://github.com/nanostores/nanostores/) state manager, which
   both works with `Astro` and `React`. It allows you to share the state of the
   web app between the `Astro`-based and `React`-based components, and also it's
   [officially recommended](https://docs.astro.build/en/recipes/sharing-state-islands)
   by the `Astro` developers.

## FAQs

<details>
<summary>Under what license is the source code distributed?</summary>

The source code is distributed under the [Unlicense](./LICENSE.txt) license.

</details>

<details>
<summary>How do I start contributing to the project?</summary>

To learn about contributing to the project, see
[CONTRIBUTING.md](./CONTRIBUTING.md).

</details>

<details>
<summary>Why are some development dependencies necessary?</summary>

These dependencies are necessary for other dependencies to work correctly.

| Dependency | Purpose                                 |
| ---------- | --------------------------------------- |
| tslib      | Dependency for the `typescript` package |

## Attributions

1. In the [React logo](./assets/icons/reactify-logo.svg), painted by me, used
   the [React logo](https://icon-icons.com/icon/react-original-logo/146374),
   from [Icon-Icons.com](https://icon-icons.com/), painted by
   [Julien Monty](https://icon-icons.com/authors/934-julien-monty/) and licensed
   under the `Free for commerical use` license.
