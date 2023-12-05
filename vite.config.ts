import react from "@vitejs/plugin-react";
import history from "connect-history-api-fallback";
import { defineConfig, type ViteDevServer } from "vite";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

function redirectAll() {
  return {
    name: "rewrite-all",
    configureServer(server: ViteDevServer) {
      return () => {
        const handler = history({
          disableDotRule: true,
          rewrites: [{ from: /\/$/, to: () => "/index.html" }],
        });

        server.middlewares.use((req, res, next) => {
          handler(req, res, next);
        });
      };
    },
  };
}

export default defineConfig({
  server: {
    port: 1024,
    proxy: {
      "/api/": {
        target: "http://127.0.0.1:3000",
        rewrite(path) {
          return path.replace(/^\/api\//, "/");
        },
      },
    },
  },
  plugins: [
    svgr({ svgrOptions: { icon: true, svgo: false } }),
    react(),
    checker({ typescript: true }),
    redirectAll(),
    tsconfigPaths(),
  ],
});
