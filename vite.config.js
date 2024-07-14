import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ProgressLoaderJS",
      fileName: "index",
    },
    rollupOptions: {
      output: {
        format: "esm",
      },
    },
  },
  plugins: [
    dts({
      outputDir: "dist", // Especificar el directorio de salida para los archivos .d.ts
    }),
  ],
});
