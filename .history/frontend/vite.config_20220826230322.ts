import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.js"),
      name: "MyLib",
      // the proper extensions will be added
      fileName: "my-lib",
    },
  },
});
