import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import postCssModules from "postcss-modules";
import postCssPresetEnv from "postcss-preset-env";
import { defineConfig } from "vite";
import { compression } from "vite-plugin-compression2";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    css: {
        postcss: {
            plugins: [autoprefixer, postCssModules, postCssPresetEnv]
        }
    },
    plugins: [
        compression({
            algorithm: "brotliCompress",
            exclude: [/\.(br)$/, /\.(gz)$/]
        }),
        react(),
        svgr()
    ],
    server: {
        cors: true,
        hmr: true,
        host: true,
        open: true,
        port: 8080,
        strictPort: true
    }
});
