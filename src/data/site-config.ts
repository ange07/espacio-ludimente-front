/**
 * site-config.ts
 * Configuración global del sitio Espacio Ludimente
 * Incluye URLs, textos principales, y configuraciones de servicios externos
 */

import type { SiteConfig, NavLink } from './types';

export const siteConfig: SiteConfig = {
  name: "Espacio Ludimente",
  tagline: "Donde la mente aprende y florece con calidez",
  eslogan: "Jugamos, sentimos, aprendemos, crecemos",
  description: "Centro de psicología infantil y adolescente con enfoque TCC en Mérida, Yucatán. Terapia basada en evidencia para niños y familias.",
  url: "https://espacioludimente.com",

  // URLs de servicios externos
  calendlyUrl: "https://calendly.com/espacioludimente/primera-sesion",

  // TODO: Reemplazar 'YOUR_FORM_ID' con el ID real de Formspree
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",

  // SEO
  defaultOgImage: "/og-image.jpg",
  twitterHandle: "@espacioludimente", // Opcional

  // Colores del branding (para referencia)
  colors: {
    primary: "#B19CD9",  // Lila
    secondary: "#D69264", // Terracota
    accent: "#F4D03F"     // Copal/Yellow
  }
};

/**
 * Navegación principal del sitio
 */
export const mainNavigation: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios", description: "Conoce nuestros servicios de psicología" },
  { label: "Sobre Nosotras", href: "/sobre-nosotras", description: "Conoce al equipo" },
  { label: "Blog", href: "/blog", description: "Artículos y recursos" },
  { label: "Contacto", href: "/contacto", description: "Ponte en contacto" }
];

/**
 * Enlaces del footer
 */
export const footerLinks = {
  main: mainNavigation,
  legal: [
    { label: "Aviso de Privacidad", href: "/aviso-privacidad" }
  ]
};
