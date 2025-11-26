/**
 * image-config.ts
 * Configuración y helpers para manejo de imágenes
 * Facilita la gestión de rutas y placeholders
 */

/**
 * Categorías de imágenes disponibles
 */
export type ImageCategory = 'blog' | 'services' | 'team' | 'testimonials' | 'og' | 'general';

/**
 * Configuración de dimensiones por categoría
 */
export const imageDimensions = {
  blog: { width: 1200, height: 630, ratio: '1.91:1' },
  services: { width: 600, height: 400, ratio: '3:2' },
  team: { width: 400, height: 400, ratio: '1:1' },
  testimonials: { width: 200, height: 200, ratio: '1:1' },
  og: { width: 1200, height: 630, ratio: '1.91:1' },
  general: { width: 1920, height: 1080, ratio: '16:9' }
} as const;

/**
 * Obtiene la ruta completa de una imagen
 * @param category - Categoría de la imagen
 * @param filename - Nombre del archivo (con extensión)
 * @returns Ruta completa desde /public
 */
export function getImagePath(category: ImageCategory, filename: string): string {
  return `/images/${category}/${filename}`;
}

/**
 * Genera URL de placeholder usando placehold.co
 * @param width - Ancho de la imagen
 * @param height - Alto de la imagen
 * @param text - Texto a mostrar en el placeholder
 * @param bgColor - Color de fondo (hex sin #)
 * @param textColor - Color del texto (hex sin #)
 * @returns URL del placeholder
 */
export function getPlaceholder(
  width: number,
  height: number,
  text: string = 'Imagen',
  bgColor: string = 'E0E0E0',
  textColor: string = '757575'
): string {
  const encodedText = encodeURIComponent(text);
  return `https://placehold.co/${width}x${height}/${bgColor}/${textColor}?text=${encodedText}`;
}

/**
 * Genera placeholder basado en categoría
 * @param category - Categoría de la imagen
 * @param text - Texto a mostrar
 * @returns URL del placeholder
 */
export function getCategoryPlaceholder(category: ImageCategory, text?: string): string {
  const dims = imageDimensions[category];
  const defaultText = text || category.charAt(0).toUpperCase() + category.slice(1);
  return getPlaceholder(dims.width, dims.height, defaultText);
}

/**
 * Valida si una ruta de imagen existe (para uso en build time)
 * @param imagePath - Ruta de la imagen
 * @returns Boolean indicando si la imagen existe
 */
export function isPlaceholder(imagePath: string): boolean {
  return imagePath.includes('placehold.co') || imagePath.includes('placeholder');
}

/**
 * Obtiene el alt text por defecto para una categoría
 * @param category - Categoría de la imagen
 * @param name - Nombre descriptivo
 * @returns Texto alternativo sugerido
 */
export function getDefaultAltText(category: ImageCategory, name: string): string {
  const altTemplates: Record<ImageCategory, string> = {
    blog: `Ilustración del artículo: ${name}`,
    services: `Ilustración del servicio: ${name}`,
    team: `Fotografía de ${name}, miembro del equipo`,
    testimonials: `Avatar de ${name}`,
    og: `Imagen de compartir en redes sociales: ${name}`,
    general: `Imagen: ${name}`
  };

  return altTemplates[category];
}

/**
 * Configuración de formatos soportados
 */
export const supportedFormats = {
  preferred: ['webp', 'avif'],
  fallback: ['jpg', 'jpeg', 'png'],
  all: ['webp', 'avif', 'jpg', 'jpeg', 'png', 'gif', 'svg']
} as const;

/**
 * Límites de peso por categoría (en KB)
 */
export const maxFileSizes = {
  blog: 200,
  services: 150,
  team: 100,
  testimonials: 50,
  og: 300,
  general: 500
} as const;

/**
 * Genera un srcset para imágenes responsive
 * @param basePath - Ruta base de la imagen sin extensión
 * @param extension - Extensión del archivo (ej: 'webp')
 * @param widths - Array de anchos disponibles
 * @returns String de srcset
 */
export function generateSrcSet(
  basePath: string,
  extension: string,
  widths: number[] = [400, 800, 1200]
): string {
  return widths
    .map(width => `${basePath}-${width}.${extension} ${width}w`)
    .join(', ');
}

/**
 * Helpers para rutas comunes
 */
export const imagePaths = {
  /**
   * Ruta para imagen de blog
   */
  blog: (slug: string, extension: string = 'webp') =>
    getImagePath('blog', `blog-${slug}.${extension}`),

  /**
   * Ruta para imagen de servicio
   */
  service: (serviceName: string, extension: string = 'webp') =>
    getImagePath('services', `service-${serviceName}.${extension}`),

  /**
   * Ruta para foto de equipo
   */
  teamMember: (name: string, extension: string = 'webp') => {
    const normalizedName = name.toLowerCase().replace(/\s+/g, '-');
    return getImagePath('team', `${normalizedName}.${extension}`);
  },

  /**
   * Ruta para Open Graph image
   */
  og: (pageName: string, extension: string = 'jpg') =>
    getImagePath('og', `og-${pageName}.${extension}`),

  /**
   * Ruta para imagen general/hero
   */
  hero: (pageName: string, extension: string = 'webp') =>
    getImagePath('general', `hero-${pageName}.${extension}`)
};

/**
 * Ejemplo de uso:
 *
 * import { getImagePath, getCategoryPlaceholder, imagePaths } from './image-config';
 *
 * // Obtener ruta de imagen real
 * const blogImage = imagePaths.blog('manejo-ansiedad-infantil');
 * // => "/images/blog/blog-manejo-ansiedad-infantil.webp"
 *
 * // Obtener placeholder
 * const placeholder = getCategoryPlaceholder('blog', 'Próximamente');
 * // => "https://placehold.co/1200x630/E0E0E0/757575?text=Pr%C3%B3ximamente"
 *
 * // En un componente:
 * <img
 *   src={blogImage}
 *   alt="Artículo sobre manejo de ansiedad infantil"
 *   loading="lazy"
 * />
 */
