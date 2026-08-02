import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),

    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
    }),

    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
  ],

  server: {
    port: 5173,
    open: true,
  },

  build: {
    sourcemap: false,

    cssCodeSplit: true,

    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks(id) {
  if (!id.includes("node_modules")) return;

  if (
    id.includes("react") ||
    id.includes("react-dom") ||
    id.includes("scheduler") ||
    id.includes("react-router")
  ) {
    return "react";
  }

  if (id.includes("framer-motion")) {
    return "motion";
  }

  if (id.includes("gsap")) {
    return "gsap";
  }

  if (id.includes("swiper")) {
    return "swiper";
  }

  if (id.includes("lucide-react")) {
    return "icons";
  }

  return "vendor";
}
      },
    },
  },
});