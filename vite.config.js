import { resolve } from 'path'
import { defineConfig, resolvePackageData } from "vite";
import react from "@vitejs/plugin-react";

const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  plugins: [react()],
  build: {
    outDir,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        page1: resolve(__dirname, 'page1.html'),
        page2: resolve(__dirname, 'page2.html'),
        page3: resolve(__dirname, 'page3.html'),
      }
    }
  }
});