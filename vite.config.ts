import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { compression } from "vite-plugin-compression2";
import svgr from "vite-plugin-svgr";

export default defineConfig({
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
