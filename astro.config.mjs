import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE ?? "http://localhost",
  server: {
    port: 3001,
  },
  build: {
    format: "file",
  },
  devToolbar: {
    enabled: false,
  }
});
