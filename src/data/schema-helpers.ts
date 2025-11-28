/**
 * schema-helpers.ts
 * Funciones helper para generar Schema.org JSON-LD
 * Mejora el SEO con datos estructurados
 */

import { siteConfig } from './site-config';
import { contactInfo } from './contact-info';
import type { BlogPost } from './types';

/**
 * Schema para Organization (Organización)
 * Se usa en todas las páginas para identificar el negocio
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/favicon.svg`,
    "sameAs": contactInfo.social.map(s => s.url),
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": contactInfo.phone.primary,
      "contactType": "customer service",
      "areaServed": "MX",
      "availableLanguage": "Spanish"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${contactInfo.address.street}, ${contactInfo.address.neighborhood}`,
      "addressLocality": contactInfo.address.city,
      "addressRegion": contactInfo.address.state,
      "postalCode": contactInfo.address.zipCode,
      "addressCountry": "MX"
    }
  };
}

/**
 * Schema para LocalBusiness (Negocio Local)
 * Se usa en la página principal y de contacto
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "telephone": contactInfo.phone.primary,
    "email": contactInfo.email,
    "priceRange": "$$",
    "image": `${siteConfig.url}${siteConfig.defaultOgImage}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${contactInfo.address.street}, ${contactInfo.address.neighborhood}`,
      "addressLocality": contactInfo.address.city,
      "addressRegion": contactInfo.address.state,
      "postalCode": contactInfo.address.zipCode,
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": contactInfo.location.lat,
      "longitude": contactInfo.location.lng
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "sameAs": contactInfo.social.map(s => s.url)
  };
}

/**
 * Schema para ProfessionalService (Servicio Profesional)
 * Se usa en la página de servicios
 */
export function getProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": siteConfig.name,
    "description": "Centro de psicología infantil y adolescente con enfoque TCC",
    "url": `${siteConfig.url}/servicios`,
    "serviceType": [
      "Terapia Cognitivo Conductual Infantil",
      "Evaluación Psicopedagógica",
      "Talleres para Padres"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Mérida, Yucatán"
    },
    "provider": {
      "@type": "Organization",
      "name": siteConfig.name,
      "telephone": contactInfo.phone.primary
    }
  };
}

/**
 * Schema para BlogPosting (Artículo de Blog)
 * Se usa en cada página individual de blog
 */
export function getBlogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image?.startsWith('http') ? post.image : `${siteConfig.url}${post.image}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.url
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/favicon.svg`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`
    }
  };
}

/**
 * Schema para WebSite (Sitio Web)
 * Se usa en la página principal
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.url}/blog?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

/**
 * Schema para BreadcrumbList (Migas de Pan)
 * Se usa en páginas internas para mostrar la jerarquía
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteConfig.url}${item.url}`
    }))
  };
}

/**
 * Combina múltiples schemas en un array
 * Google soporta múltiples schemas en la misma página
 */
export function combineSchemas(...schemas: any[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas
  };
}
