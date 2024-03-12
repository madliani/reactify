import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import postCssModules from "postcss-modules";
import postCssPresetEnv from "postcss-preset-env";
import { defineConfig } from "vite";
import { compression } from "vite-plugin-compression2";

export default defineConfig({
    css: {
        postcss: {
            plugins: [autoprefixer, postCssModules, postCssPresetEnv]
        }
    },
    plugins: [
        react(),
        compression({
            algorithm: "brotliCompress",
            exclude: [/\.(br)$/, /\.(gz)$/]
        })
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
