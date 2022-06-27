import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8081,
    hmr: {
      host: "127.0.0.1",
      port: 8081,
    },
  },
});
