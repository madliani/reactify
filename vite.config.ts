import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";

export default defineConfig({
    base: "/",
    build: {
        manifest: true
    },
    plugins: [EnvironmentPlugin("all"), react()],
    server: {
        host: true
    }
});
