// @ts-check
import { defineConfig } from 'astro/config';
import remarkDirective from 'remark-directive';
import remarkAddClasses from './src/remark/addClasses.js';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkDirective, remarkAddClasses],
  },
  site: 'https://kidconcept.github.io',
  base: '/'
});
