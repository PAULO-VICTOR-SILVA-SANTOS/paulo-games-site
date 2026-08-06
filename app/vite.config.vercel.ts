import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import {
  higgsfieldDesignInspectorVitePlugin,
  higgsfieldDesignSourceBabelPlugin,
} from "./src/module/design-inspector/vite";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

// Vercel-only build config, kept separate from vite.config.ts on purpose.
// vite.config.ts hand-bundles the SSR output as a Cloudflare Worker (webworker
// target, cloudflare:workers external, noExternal) for the Higgsfield deploy
// pipeline, which assumes that exact dist/server/server.js shape. Nitro's own
// platform detection conflicts with that hand-rolled bundling, so this file
// swaps in the `nitro()` plugin and drops the Workers-specific overrides
// instead of branching the shared config. Run via `bun run build:vercel`;
// Vercel's build environment auto-selects the vercel preset.
const QUANTA_ICONS_SHIM = fileURLToPath(new URL("./src/lib/quanta-icons.ts", import.meta.url));

export default defineConfig(({ mode }) => {
  const designInspectorEnabled = process.env.HF_DESIGN_INSPECTOR === "1" || mode === "design";

  return {
    resolve: {
      tsconfigPaths: true,
      alias: [{ find: /^@higgsfield-ai\/icons(\/.*)?$/, replacement: QUANTA_ICONS_SHIM }],
    },
    plugins: [
      svgr({
        svgrOptions: {
          icon: true,
          svgProps: { fill: "currentColor" },
          svgoConfig: {
            plugins: [{ name: "preset-default", params: { overrides: { removeViewBox: false } } }],
          },
        },
      }),
      tanstackStart({ server: { entry: "server" } }),
      nitro(),
      higgsfieldDesignInspectorVitePlugin(designInspectorEnabled),
      react({
        babel: {
          plugins: designInspectorEnabled ? [higgsfieldDesignSourceBabelPlugin] : [],
        },
      }),
      tailwindcss(),
    ],
  };
});
