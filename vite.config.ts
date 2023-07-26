import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";

export default defineConfig({
    base: "/",
    build: {
        manifest: true
    },
    esbuild: {
        jsxFactory: "h",
        jsxFragment: "Fragment",
        jsxInject: "import React from 'react'"
    },
    plugins: [EnvironmentPlugin("all"), react()]
});
