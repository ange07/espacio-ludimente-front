// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configuración básica para el sitio
  site: 'https://espacioludimente.com', // Cambia esto por tu dominio real cuando lo tengas

  // Puerto de desarrollo
  server: {
    port: 4321
  },

  // Configuración de build
  build: {
    // Genera sitemap automáticamente
    sitemap: true
  }
});
