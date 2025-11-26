# Guía de Imágenes - Espacio Ludimente

Este directorio contiene todas las imágenes del sitio web organizadas por categoría.

## 📁 Estructura de Carpetas

```
public/images/
├── blog/           # Imágenes de artículos de blog
├── services/       # Imágenes de servicios
├── team/           # Fotos del equipo
├── testimonials/   # Avatares opcionales de testimonios
├── og/             # Open Graph images para redes sociales
└── general/        # Hero images, backgrounds, decorativas
```

## 📐 Especificaciones por Tipo

### Blog (`/blog/`)
- **Dimensiones:** 1200x630px (ratio 1.91:1)
- **Formato preferido:** WebP (fallback JPG)
- **Peso máximo:** 200KB
- **Uso:** Imágenes destacadas de artículos
- **Nomenclatura:** `blog-nombre-articulo.webp`
- **Ejemplo:** `blog-manejo-ansiedad-infantil.webp`

### Servicios (`/services/`)
- **Dimensiones:** 600x400px (ratio 3:2)
- **Formato preferido:** WebP (fallback JPG)
- **Peso máximo:** 150KB
- **Uso:** Ilustraciones de servicios
- **Nomenclatura:** `service-nombre.webp`
- **Ejemplo:** `service-terapia-tcc.webp`

### Equipo (`/team/`)
- **Dimensiones:** 400x400px (cuadradas 1:1)
- **Formato preferido:** WebP (fallback JPG)
- **Peso máximo:** 100KB
- **Uso:** Fotos profesionales del equipo
- **Nomenclatura:** `nombre-apellido.webp`
- **Ejemplo:** `ana-garcia.webp`
- **Recomendaciones:**
  - Fondo neutro o desenfocado
  - Buena iluminación
  - Expresión amigable y profesional
  - Encuadre desde el pecho hacia arriba

### Testimonios (`/testimonials/`)
- **Dimensiones:** 200x200px (cuadradas 1:1)
- **Formato preferido:** WebP (fallback JPG)
- **Peso máximo:** 50KB
- **Uso:** Avatares opcionales (si las familias aprueban)
- **Nomenclatura:** `testimonial-iniciales.webp`
- **Ejemplo:** `testimonial-lm.webp`
- **Nota:** Por privacidad, considerar usar ilustraciones o iniciales

### Open Graph (`/og/`)
- **Dimensiones:** 1200x630px (ratio 1.91:1)
- **Formato:** JPG o PNG
- **Peso máximo:** 300KB
- **Uso:** Compartir en redes sociales (Facebook, Twitter, LinkedIn)
- **Nomenclatura:** `og-nombre-pagina.jpg`
- **Ejemplo:** `og-servicios.jpg`, `og-blog-articulo.jpg`
- **Incluir:**
  - Logo de Espacio Ludimente
  - Título claro y legible
  - Colores del branding (#B19CD9, #D69264, #F4D03F)

### General (`/general/`)
- **Dimensiones:** Variables según uso
- **Formato preferido:** WebP (fallback JPG)
- **Uso:** Hero images, backgrounds, decorativas
- **Nomenclatura:** `hero-nombre.webp`, `bg-nombre.webp`
- **Ejemplo:** `hero-homepage.webp`, `bg-contacto.webp`

## 🎨 Optimización de Imágenes

### Herramientas Recomendadas

1. **Squoosh.app** (Online, gratis)
   - URL: https://squoosh.app
   - Convierte a WebP
   - Ajusta calidad y tamaño
   - Compara antes/después

2. **TinyPNG** (Online, gratis hasta 20 imágenes)
   - URL: https://tinypng.com
   - Comprime PNG y JPG sin pérdida visible
   - Reduce hasta 70% del tamaño

3. **ImageOptim** (Mac, gratis)
   - Optimización batch
   - Sin pérdida de calidad

4. **Photopea** (Online, gratis)
   - Editor tipo Photoshop
   - Para recortar y ajustar dimensiones

### Proceso de Optimización

1. **Redimensionar** a las dimensiones especificadas
2. **Convertir a WebP** (mejor compresión)
3. **Mantener calidad 80-85%** (balance tamaño/calidad)
4. **Verificar peso final** (debe cumplir límites)
5. **Guardar versión JPG** como fallback (opcional)

## 🔄 Reemplazar Placeholders

Actualmente el sitio usa placeholders de `placehold.co`. Para reemplazarlos:

### Paso 1: Prepara la imagen
- Ajusta dimensiones según la categoría
- Optimiza usando las herramientas recomendadas
- Guarda en la carpeta correspondiente

### Paso 2: Actualiza el archivo de datos

**Para blog posts** (`/src/data/blog-posts.ts`):
```typescript
{
  title: "Título del artículo",
  image: "/images/blog/blog-nombre-articulo.webp",
  imageAlt: "Descripción detallada de la imagen para accesibilidad",
  // ... resto de campos
}
```

**Para equipo** (`/src/data/team.ts`):
```typescript
{
  name: "Ana García",
  image: "/images/team/ana-garcia.webp",
  imageAlt: "Fotografía de Ana García, psicóloga infantil",
  // ... resto de campos
}
```

### Paso 3: Verifica accesibilidad
- **SIEMPRE incluye `alt` text descriptivo**
- Describe qué se ve en la imagen
- No uses "imagen de..." o "foto de..."
- Ejemplo bueno: "Niña sonriendo mientras dibuja en terapia"
- Ejemplo malo: "Imagen 1" o "foto.jpg"

## ✅ Checklist de Calidad

Antes de agregar una imagen, verifica:

- [ ] Dimensiones correctas según categoría
- [ ] Peso dentro del límite especificado
- [ ] Formato WebP (o JPG si es necesario)
- [ ] Nomenclatura siguiendo la convención
- [ ] Alt text descriptivo y útil
- [ ] Imagen relevante al contenido
- [ ] Buena calidad visual (no pixelada)
- [ ] Fondo apropiado (no distrae del sujeto)

## 🎯 Texto Alternativo (Alt Text)

### Buenas Prácticas

**✅ Buenos ejemplos:**
- "Psicóloga trabajando con niño usando técnicas de TCC"
- "Sala de terapia infantil con juguetes educativos y colores cálidos"
- "Madre e hija sonriendo después de sesión exitosa"

**❌ Malos ejemplos:**
- "Imagen 1"
- "DSC_1234.jpg"
- "Foto de servicio"
- "" (vacío)

### Cuándo dejar alt vacío
- Imágenes puramente decorativas sin contenido informativo
- Íconos con texto explicativo adyacente
- Usar `alt=""` (no omitir el atributo)

## 📱 Responsive Images

Para imágenes grandes, considera usar el atributo `srcset`:

```html
<img
  src="/images/blog/articulo.webp"
  srcset="
    /images/blog/articulo-400.webp 400w,
    /images/blog/articulo-800.webp 800w,
    /images/blog/articulo-1200.webp 1200w
  "
  sizes="(max-width: 768px) 100vw, 800px"
  alt="Descripción de la imagen"
  loading="lazy"
/>
```

## 🔒 Consideraciones de Privacidad

### Imágenes de Niños
- **NUNCA publiques fotos de niños sin consentimiento explícito de los padres**
- Usa ilustraciones o stock photos en su lugar
- Si tienes consentimiento:
  - Guarda el documento firmado
  - No incluyas información identificable (uniforme escolar, nombres)
  - Considera difuminar rostros si es necesario

### Testimonios
- Usa iniciales en lugar de nombres completos
- No incluyas fotos sin autorización
- Considera usar avatares ilustrados

## 🚀 Despliegue

Antes de hacer deploy:

1. **Verifica que todas las rutas son correctas**
2. **Comprueba que los archivos existan en `/public/images/`**
3. **Prueba en local:** `npm run build && npm run preview`
4. **Revisa el tamaño total** de la carpeta images (idealmente < 5MB)

## 📞 Soporte

Si tienes dudas sobre:
- Qué imagen usar
- Cómo optimizar una imagen específica
- Problemas técnicos con imágenes

Consulta la documentación de Astro sobre imágenes:
https://docs.astro.build/en/guides/images/

---

**Última actualización:** 2025-01-26
**Versión:** 1.0
