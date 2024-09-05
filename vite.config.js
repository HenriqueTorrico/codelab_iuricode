import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@images",
        replacement: fileURLToPath(
          new URL("./src/assets/images", import.meta.url)
        ),
      },
      {
        find: "@styles",
        replacement: fileURLToPath(
          new URL("./src/assets/scss", import.meta.url)
        ),
      },
      {
        find: "@views",
        replacement: fileURLToPath(new URL("./src/views", import.meta.url)),
      },
    ],
  },
});
