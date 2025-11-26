/**
 * types.ts
 * Tipos centralizados para el proyecto Espacio Ludimente
 */

// ============================================
// SERVICIOS
// ============================================

export interface ServiceData {
  title: string;
  target: string;
  focus: string[];
  method: string;
  price: string;
  icon: string;
}

// ============================================
// EQUIPO
// ============================================

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt?: string; // Alt text para accesibilidad
}

// ============================================
// BLOG
// ============================================

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image?: string;
  imageAlt?: string; // Alt text para accesibilidad
}

// ============================================
// TESTIMONIOS
// ============================================

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

// ============================================
// CARACTERÍSTICAS/FEATURES
// ============================================

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

// ============================================
// FAQ
// ============================================

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

// ============================================
// CONTACTO
// ============================================

export interface ContactInfo {
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    fullAddress: string;
  };
  phone: {
    primary: string;
    secondary: string;
    formatted: {
      primary: string;
      secondary: string;
    };
  };
  email: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  social: SocialLink[];
  location: {
    lat: number;
    lng: number;
    googleMapsUrl: string;
  };
}

export interface SocialLink {
  platform: string;
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

// ============================================
// PROCESO DE RESERVA
// ============================================

export interface BookingStep {
  number: number;
  title: string;
  description: string;
}

export interface BookingTip {
  icon: string;
  text: string;
  highlight?: string;
}

// ============================================
// CONFIGURACIÓN DEL SITIO
// ============================================

export interface SiteConfig {
  name: string;
  tagline: string;
  eslogan: string;
  description: string;
  url: string;
  calendlyUrl: string;
  formspreeEndpoint: string;
  defaultOgImage: string;
  twitterHandle?: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}
