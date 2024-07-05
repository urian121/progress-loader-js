import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "ProgressBarJS",
      fileName: (format) => `progress-bar-js.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
});
