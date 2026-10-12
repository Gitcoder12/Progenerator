import { defineConfig } from "vite";

export default defineConfig({
  base: "/Progenerator/",
  build: {
    outDir: "dist",
    sourcemap: true,
    target: "es2022",
  },
  server: {
    port: 5173,
    open: true,
  },
});
