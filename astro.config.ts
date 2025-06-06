// import node from "@astrojs/node"; // это хуевина нужна для гибрида на сервере node.js
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import yaml from "@rollup/plugin-yaml";
import markdoc from "@astrojs/markdoc";
import { defaultLocale, locales } from "./source/utils/i18n.config";

// export const prerender = true;

// https://astro.build/config
export default defineConfig({
  // adapter: node({
  //   mode: "standalone"
  // }),
  // это хуевина нужна для гибрида на сервере node.js
  i18n: {
    defaultLocale,
    locales,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  // output: "hybrid",
  srcDir: "./source",
  compressHTML: true,
  // ужимает хуево, нужно ставить нормальный
  site: "https://zamkovenko.design",
  base: "/",
  server: {
    port: 2482,
  },
  vite: {
    plugins: [yaml()],
  },
  integrations: [tailwind(), markdoc()],
});
