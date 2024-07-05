import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"), // Asegúrate de que esto apunte a tu archivo de entrada
      name: "ProgressLoaderJS",
      fileName: (format) => `progress-loader-js.${format}.js`,
    },
    rollupOptions: {
      // Asegúrate de que las dependencias externas estén correctamente configuradas
      external: ["react", "vue"],
      output: {
        globals: {
          react: "React",
          vue: "Vue",
        },
      },
    },
  },
});
