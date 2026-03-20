// @ts-check
import { defineConfig } from 'astro/config';
import remarkDirective from 'remark-directive';
import remarkAddClasses from './src/remark/addClasses.js';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkDirective, remarkAddClasses],
  },
  site: 'https://kidconcept.github.io',
  base: '/'
});
