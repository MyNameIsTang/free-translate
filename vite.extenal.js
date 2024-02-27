/* eslint-disable no-undef */
import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        "content-script": path.resolve(
          __dirname,
          "./extenal/content-script.js"
        ),
        "service-worker": path.resolve(
          __dirname,
          "./extenal/service-worker.js"
        ),
      },
      output: {
        entryFileNames: "[name].bundle.js", // 输出文件名格式
        chunkFileNames: "[name].chunk.js", // 非入口chunk文件名格式
        assetFileNames: "[name].[ext]", // 资源文件名格式
      },
    },
  },
});
