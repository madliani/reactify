import pluginTailwindCSS from "@tailwindcss/vite";
import pluginReactSWC from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { compression as pluginCompression } from "vite-plugin-compression2";

export default defineConfig({
    plugins: [
        pluginCompression({
            algorithm: "brotliCompress",
            exclude: [/\.(br)$/, /\.(gz)$/]
        }),
        pluginReactSWC(),
        pluginTailwindCSS()
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
