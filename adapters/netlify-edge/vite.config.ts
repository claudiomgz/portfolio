import { netlifyEdgeAdapter } from "@builder.io/qwik-city/adapters/netlify-edge/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["src/entry.netlify-edge.tsx", "@qwik-city-plan"],
        external: [ 'fs', 'path' ], // Externalizar explícitamente los modulos
      },
      outDir: ".netlify/edge-functions/entry.netlify-edge",
    },
    plugins: [netlifyEdgeAdapter()],
  };
});
