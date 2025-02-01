// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
const { SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ""
);

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: SANITY_STUDIO_PROJECT_ID,
      dataset: SANITY_STUDIO_DATASET,
      useCdn: false, // See note on using the CDN
      apiVersion: "2025-01-28", // insert the current date to access the latest version of the API
      stega: {
        studioUrl: "http://localhost:3333",
      },
    }),
    react(),
  ],
});
