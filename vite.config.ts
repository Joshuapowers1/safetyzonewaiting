import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import vitePrerender from "vite-plugin-prerender";
import { landingSlugs } from "./src/pages/landing/configs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      vitePrerender({
        staticDir: path.resolve(__dirname, "dist"),
        routes: [
          "/",
          "/contact",
          "/support",
          "/privacy",
          "/privacy-policy",
          "/terms",
          ...landingSlugs.map((slug) => `/${slug}`),
        ],
        renderer: "@prerenderer/renderer-puppeteer",
        rendererOptions: {
          renderAfterTime: 5000,
          maxConcurrentRoutes: 4,
        },
        postProcess(renderedRoute: { html: string }) {
          // Strip the inline script that restores scroll position; keep everything else
          return renderedRoute;
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
