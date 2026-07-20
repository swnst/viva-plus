// app.config.ts
import { defineConfig } from "@tanstack/react-start/config";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
var app_config_default = defineConfig({
  server: {
    preset: "vercel"
  },
  tsr: {
    dir: "./src/routes"
  },
  routers: {
    client: {
      entry: "./src/client.tsx"
    },
    ssr: {
      entry: "./src/server.ts"
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
      tsconfigPaths()
    ]
  }
});
export {
  app_config_default as default
};
