import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   manifest: true,
  //   rollupOptions: {
  //     input: "backend/server.js",
  //   },
  // },
});
