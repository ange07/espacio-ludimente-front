/**
 * sitemap.xml.ts
 * Genera dinámicamente el sitemap del sitio
 * Incluye todas las páginas estáticas y las páginas dinámicas de blog
 */

import { siteConfig } from '../data/site-config';
import { posts } from '../data/blog-posts';

// Páginas estáticas del sitio
const staticPages = [
  { url: '', changefreq: 'weekly', priority: 1.0 },           // Homepage
  { url: 'servicios', changefreq: 'monthly', priority: 0.9 }, // Servicios
  { url: 'sobre-nosotras', changefreq: 'monthly', priority: 0.8 }, // Sobre nosotras
  { url: 'blog', changefreq: 'weekly', priority: 0.9 },       // Blog index
  { url: 'reservar', changefreq: 'monthly', priority: 0.95 }, // Reservar
  { url: 'contacto', changefreq: 'monthly', priority: 0.85 }  // Contacto
];

// Generar la fecha actual en formato ISO
const today = new Date().toISOString();

export async function GET() {
  // Generar URLs de páginas estáticas
  const staticUrls = staticPages.map((page) => `
  <url>
    <loc>${siteConfig.url}/${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');

  // Generar URLs de posts de blog
  const blogUrls = posts.map((post) => `
  <url>
    <loc>${siteConfig.url}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('');

  // Construir el XML completo
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}${blogUrls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
