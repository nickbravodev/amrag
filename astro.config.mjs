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
      preserve_newlines: true,
      max_preserve_newlines: 2,
      space_in_paren: true,
      space_in_empty_paren: true,
    }),
  ],
});
