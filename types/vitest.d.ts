import { defineConfig } from "vitest/config"

type UserConfig = Parameters<typeof defineConfig>[0]

export { UserConfig }
