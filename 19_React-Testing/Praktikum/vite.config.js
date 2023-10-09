import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  test: {
    global : true,
    environment: "jsdom",
    setupFiles: "./src/__tests__/setup.js"
  }
});
