import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";

import htmlBeautifier from "astro-html-beautifier";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [
    sitemap(),
    robotsTxt(),
    mdx(),
    htmlBeautifier({
      indent_size: 2,
    }),
  ],
});
