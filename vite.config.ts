import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import postCssPresetEnv from "postcss-preset-env";
import { defineConfig } from "vite";

export default defineConfig({
    base: "/",
    css: {
        postcss: {
            plugins: [autoprefixer, postCssPresetEnv]
        }
    },
    plugins: [react()],
    server: {
        cors: true,
        hmr: true,
        host: true,
        open: true,
        port: 8080,
        strictPort: true
    }
});
