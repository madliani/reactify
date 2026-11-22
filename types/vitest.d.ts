import type { defineConfig } from "vitest/config"

type UserConfig = Parameters<typeof defineConfig>[0]

export type { UserConfig }
