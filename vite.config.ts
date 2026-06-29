import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: "node-server",
  },
  vite: {
    server: {
      host: "0.0.0.0",
      port: 5000,
      allowedHosts: true,
    },
    resolve: {
      dedupe: ["react", "react-dom", "framer-motion"],
    },
    ssr: {
      noExternal: ["framer-motion"],
    },
  },
});
