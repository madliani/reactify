import type { defineConfig } from "eslint/config"

type ConfigWithExtendsArray = Parameters<typeof defineConfig>[0]

export type { ConfigWithExtendsArray }
