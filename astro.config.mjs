// @ts-check

import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://icecream.hinjourn.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
