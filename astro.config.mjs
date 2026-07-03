// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { EMPRESA } from './src/config.mjs';

// https://astro.build/config
export default defineConfig({
  // Dominio real de la web. Se usa para el sitemap.xml y las URLs canónicas (SEO).
  // ⚠️ Cambia el dominio en src/config.mjs (campo `dominio`).
  site: EMPRESA.dominio,

  // URLs terminadas en barra (estándar y bueno para SEO).
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },

  // Genera automáticamente el sitemap.xml para Google.
  integrations: [sitemap()],
});
