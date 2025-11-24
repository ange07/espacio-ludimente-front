# 🏗️ Arquitectura del Sitio Web - Espacio Ludimente

**Documento:** Plan de estructura y contenido para el MVP
**Objetivo:** Guía de construcción para las 2 semanas de desarrollo
**Última actualización:** Noviembre 24, 2025

---

## 📐 Estructura de Páginas

### Páginas Principales (MVP - Fase 1)

| Página | Ruta | Prioridad | Descripción |
|--------|------|-----------|-------------|
| **Home** | `/` | 🔴 Alta | Landing page principal con hero, servicios destacados, testimonios, CTA |
| **Servicios** | `/servicios` | 🔴 Alta | Lista completa de servicios con detalles (TCC infantil, evaluaciones, talleres) |
| **Sobre Nosotras** | `/sobre-nosotras` | 🟡 Media | Historia, equipo (Angélica y María Teresa), formación, enfoque TCC |
| **Blog/Recursos** | `/blog` | 🟡 Media | Artículos educativos sobre crianza, emociones, TCC |
| **Contacto** | `/contacto` | 🔴 Alta | Formulario de contacto, datos, mapa de ubicación |
| **Reservar Sesión** | `/reservar` | 🔴 Alta | Widget de Calendly para agendar primera sesión |

### Páginas Secundarias (Post-MVP)

| Página | Ruta | Descripción |
|--------|------|-------------|
| **FAQ** | `/preguntas-frecuentes` | Preguntas comunes sobre terapia TCC, costos, duración |
| **Recursos Descargables** | `/recursos` | PDFs, hojas de trabajo para padres |
| **Talleres** | `/talleres` | Información sobre talleres grupales y eventos |

---

## 🧩 Componentes Reutilizables

### Componentes de Layout

#### 1. `Header.astro`
**Ubicación:** `src/components/Header.astro`

**Contenido:**
- Logo de Espacio Ludimente (versión horizontal)
- Navegación principal:
  - Inicio
  - Servicios
  - Sobre Nosotras
  - Blog
  - Contacto
  - **CTA:** "Reservar Sesión" (botón destacado en Primary)
- Menú hamburguesa para móvil

**Estilos:**
- Fondo: Crema (#FFF0F5)
- Texto: Piedra (#4A3B45)
- Botón CTA: Lila Primary (#B19CD9) con texto Piedra
- Sticky (se queda fijo al hacer scroll)

---

#### 2. `Footer.astro`
**Ubicación:** `src/components/Footer.astro`

**Contenido:**
- **Columna 1:** Logo + eslogan ("Jugamos, sentimos, aprendemos, crecemos")
- **Columna 2:** Enlaces rápidos
  - Servicios
  - Blog
  - Sobre Nosotras
  - FAQ
- **Columna 3:** Contacto
  - Dirección: C. 52 107, Francisco de Montejo II, Mérida
  - Teléfono: 999-259-0623 / 999-900-2640
  - Email: contacto.ludimente@gmail.com
- **Columna 4:** Redes sociales (iconos)
  - Instagram
  - Facebook
  - WhatsApp
- **Legal:** Copyright © 2025 Espacio Ludimente | Aviso de Privacidad

**Estilos:**
- Fondo: Terracota (#D69264)
- Texto: Crema (#FFF0F5)
- Enlaces con hover en Amarillo Copal

---

### Componentes de Contenido

#### 3. `ServiceCard.astro`
**Props:** `title`, `description`, `icon`, `link`

**Uso:** Mostrar servicios en Home y página de Servicios

**Estructura:**
```html
<div class="service-card">
  <div class="icon">[Ícono en Primary]</div>
  <h3>[Título del servicio]</h3>
  <p>[Descripción breve]</p>
  <a href="[link]">Conocer más →</a>
</div>
```

**Estilos:**
- Fondo: Blanco
- Borde: 2px solid Outline (Lila al 30%)
- Border radius: 16px
- Padding: 24px
- Hover: Fondo cambia a Primary Container (#F3E5F5)

---

#### 4. `TestimonialCard.astro`
**Props:** `quote`, `author`, `photo` (opcional)

**Uso:** Testimonios de familias

**Estructura:**
```html
<div class="testimonial-card">
  <blockquote>"[Testimonio]"</blockquote>
  <cite>- [Nombre del padre/madre]</cite>
</div>
```

**Estilos:**
- Fondo: Blob lila suave (Primary Container)
- Texto: Lora italic para la cita
- Comillas decorativas en Amarillo Copal

---

#### 5. `Hero.astro`
**Ubicación:** `src/components/Hero.astro`

**Uso:** Sección principal de Home

**Contenido:**
- Título H1: "Herramientas para que tu hijo crezca *feliz*" (palabra "feliz" en italic)
- Subtítulo: "Psicología Infantil y Adolescente con enfoque TCC en Mérida, Yucatán"
- 2 CTAs:
  - **Principal:** "Reserva tu primera sesión" (link a /reservar)
  - **Secundario:** "Conoce nuestros servicios" (link a /servicios)
- Imagen/ilustración de niños jugando (siguiendo estilo fotográfico del manual)

**Estilos:**
- Fondo: Crema (#FFF0F5) con blob decorativo en Lila suave
- Título: Lora Bold 57px
- Subtítulo: Montserrat Regular 20px
- Botón principal: Lila Primary
- Botón secundario: Terracota

---

#### 6. `BlogPostCard.astro`
**Props:** `title`, `excerpt`, `date`, `slug`, `image` (opcional)

**Uso:** Lista de posts en /blog

**Estructura:**
```html
<article class="blog-card">
  <img src="[image]" alt="[title]">
  <div class="content">
    <time>[Fecha]</time>
    <h3>[Título]</h3>
    <p>[Extracto breve]</p>
    <a href="/blog/[slug]">Leer más →</a>
  </div>
</article>
```

---

#### 7. `Button.astro`
**Props:** `variant` (primary, secondary, tertiary), `href`, `text`

**Uso:** Botones consistentes en todo el sitio

**Variantes:**
- **Primary:** Fondo Lila, texto Piedra
- **Secondary:** Fondo Terracota, texto Crema
- **Tertiary:** Solo borde, sin fondo

---

#### 8. `ContactForm.astro`
**Ubicación:** `src/components/ContactForm.astro`

**Uso:** Formulario de contacto en /contacto

**Campos:**
- Nombre completo (required)
- Email (required)
- Teléfono (optional)
- Mensaje (required, textarea)
- Botón: "Enviar mensaje"

**Integración:** Formspree

**HTML:**
```html
<form action="https://formspree.io/f/[TU-ID]" method="POST">
  <!-- campos -->
</form>
```

---

## 📄 Contenido Detallado por Página

### HOME (`/`)

#### Sección 1: Hero
- Ver componente `Hero.astro` arriba

#### Sección 2: ¿Qué Hacemos?
**Título:** "Acompañamos a niños y familias con herramientas reales"

**3 Columnas:**
1. **Terapia TCC** → Técnicas basadas en evidencia para ansiedad, miedos, berrinches
2. **Evaluaciones** → Diagnósticos psicopedagógicos completos y confiables
3. **Talleres** → Capacitación para padres y escuelas

(Usar `ServiceCard.astro`)

#### Sección 3: ¿Por Qué Espacio Ludimente?
**Título:** "Estructura que abraza"

**4 Diferenciadores (iconos + texto):**
1. 🧠 **Basado en evidencia:** TCC probada científicamente
2. 💜 **Herramientas prácticas:** No solo escuchamos, equipamos
3. 📊 **Objetivos claros:** Sabrás qué trabajamos y por qué
4. 🌿 **Calidez humana:** Profesionalismo sin frialdad

#### Sección 4: Testimonios
**Título:** "Lo que dicen las familias"

Carrusel con 3-4 testimonios (usar `TestimonialCard.astro`)

**Ejemplos de testimonios:**
> "Antes de venir a Ludimente, los berrinches de mi hijo nos abrumaban. Ahora tenemos herramientas claras y vemos progreso cada semana. ¡Gracias!"
> — Laura M., mamá de Santiago (6 años)

> "Lo que más me gustó fue la transparencia. Desde el día 1 supimos qué iban a trabajar y cómo medirían el avance."
> — Carlos P., papá de Sofía (9 años)

#### Sección 5: CTA Final
**Fondo:** Lila suave (blob)

**Título:** "¿Listos para empezar?"

**Texto:** "La primera sesión es una evaluación inicial donde conocemos a tu hijo, entendemos qué está pasando y diseñamos un plan personalizado."

**2 Botones:**
- "Reservar primera sesión" (Primary)
- "Escribirnos por WhatsApp" (Secondary, link a WhatsApp)

---

### SERVICIOS (`/servicios`)

**Hero pequeño:**
- Título: "Nuestros Servicios"
- Subtítulo: "Herramientas específicas para cada necesidad"

**Lista de Servicios (cada uno es una card expandida):**

#### 1. Terapia Individual TCC (Niños 6-12 años)
**¿Para quién es?**
- Niños con ansiedad, miedos, fobias
- Berrinches intensos o problemas de conducta
- Dificultades para regular emociones
- Baja tolerancia a la frustración

**¿Qué trabajaremos?**
- Identificación y expresión de emociones
- Técnicas de regulación (respiración, relajación)
- Reestructuración de pensamientos negativos
- Resolución de problemas paso a paso

**¿Cómo lo hacemos?**
- Sesiones de 50 minutos, 1 vez por semana
- Juego con propósito terapéutico
- Tareas para casa (generalizamos el aprendizaje)
- Participación activa de los padres

**Inversión:** $500 MXN por sesión

**CTA:** "Reservar evaluación inicial"

---

#### 2. Terapia Individual TCC (Adolescentes 13-17 años)
**¿Para quién es?**
- Ansiedad social o académica
- Problemas de autoestima
- Manejo de ira o frustración
- Dificultades de adaptación

**¿Qué trabajaremos?**
- Habilidades sociales y comunicación asertiva
- Manejo de ansiedad y estrés
- Pensamientos automáticos y creencias
- Planificación y organización

**¿Cómo lo hacemos?**
- Sesiones de 50 minutos
- Conversación directa (menos juego, más diálogo)
- Herramientas digitales (apps de mindfulness, journaling)
- Autonomía creciente del adolescente

**Inversión:** $500 MXN por sesión

---

#### 3. Evaluación Psicopedagógica
**¿Para quién es?**
- Niños con dificultades escolares (lectura, escritura, matemáticas)
- Sospecha de TDAH, dislexia u otras condiciones
- Escuelas que requieren diagnóstico formal

**¿Qué incluye?**
- Entrevista con padres
- Aplicación de pruebas estandarizadas
- Observación conductual
- Informe detallado con recomendaciones
- Sesión de devolución de resultados

**Duración:** 3-4 sesiones

**Inversión:** Cotización según caso

---

#### 4. Talleres para Padres
**Temas:**
- "Berrinches: Qué hacer y qué no hacer"
- "Límites con amor: Crianza positiva TCC"
- "Ayudando a mi hijo con la ansiedad"

**Formato:** Grupal (6-10 familias), 2 horas

**Inversión:** $300 MXN por familia

---

### SOBRE NOSOTRAS (`/sobre-nosotras`)

**Hero:**
- Título: "Psicólogas con corazón de maestras"
- Foto profesional de Angélica y María Teresa

**Sección 1: Nuestra Historia**
Texto (2-3 párrafos):
> Espacio Ludimente nació de una pregunta: ¿Por qué la terapia infantil tiene que sentirse fría o aburrida?
> Somos Angélica y María Teresa, psicólogas escolares con especialidad en Terapia Cognitivo Conductual. Después de años trabajando en escuelas y consultorio, decidimos crear un espacio donde las familias encuentren lo que nosotras hubiéramos querido para nuestros propios hijos...

**Sección 2: Equipo**

**Card: Psic. Angélica del Carmen Chin Cantillo**
- Foto profesional
- Formación:
  - Licenciatura en Psicología - Universidad [X]
  - Especialidad en TCC Infantil - [Institución]
  - Certificación en Evaluación Psicopedagógica
- Áreas de especialidad: Ansiedad infantil, TDAH, habilidades sociales
- Email: angelica@espacioludimente.com

**Card: Psic. María Teresa Castillo Vega**
- Foto profesional
- Formación: [Similar]
- Áreas de especialidad: [Específicas]
- Email: teresa@espacioludimente.com

**Sección 3: ¿Por Qué TCC?**
Texto explicativo:
> La Terapia Cognitivo Conductual es el enfoque con más respaldo científico para trabajar con niños y adolescentes. A diferencia de otros enfoques, la TCC:
> - Se enfoca en el presente (no en el pasado)
> - Ofrece herramientas concretas y medibles
> - Tiene objetivos claros desde el inicio
> - Involucra activamente a la familia...

---

### BLOG/RECURSOS (`/blog`)

**Hero:**
- Título: "Recursos para Familias"
- Subtítulo: "Artículos, tips y herramientas basadas en evidencia"

**Lista de Posts (grid de `BlogPostCard.astro`)**

**Posts iniciales (3-4 para el MVP):**

1. **"¿Qué es la Terapia Cognitivo Conductual y por qué funciona?"**
   - Explicación sencilla de TCC
   - Diferencias con otros enfoques
   - Cuándo buscar ayuda

2. **"5 Estrategias para Manejar Berrinches Intensos"**
   - Validación emocional
   - Límites claros
   - Técnicas de distracción
   - Refuerzo positivo
   - Cuando pedir ayuda profesional

3. **"La Ansiedad en Niños: Señales y Qué Hacer"**
   - Síntomas físicos y conductuales
   - Diferencia entre miedo y ansiedad
   - Herramientas para ayudar en casa
   - Cuándo buscar terapia

4. **"Crianza Positiva: Límites Sin Gritos"**
   - Por qué los castigos no funcionan
   - Consecuencias naturales vs. punitivas
   - Cómo dar instrucciones efectivas
   - Refuerzo positivo paso a paso

---

### CONTACTO (`/contacto`)

**2 Columnas:**

**Columna Izquierda: Formulario**
- Usar `ContactForm.astro` (integrado con Formspree)

**Columna Derecha: Información**
- **Dirección:**
  - C. 52 107, Francisco de Montejo II
    97203 Mérida, Yucatán
  - [Mapa de Google Maps embebido]

- **Teléfono:**
  - 999-259-0623
  - 999-900-2640

- **Email:**
  - contacto.ludimente@gmail.com

- **WhatsApp:**
  - Botón directo a chat de WhatsApp

- **Horarios:**
  - Lunes a Viernes: 9:00 AM - 7:00 PM
  - Sábados: 9:00 AM - 2:00 PM

---

### RESERVAR SESIÓN (`/reservar`)

**Contenido:**

**Sección 1: Texto explicativo**
> **¿Cómo funciona la primera sesión?**
>
> La primera sesión es una evaluación inicial de 50 minutos donde:
> 1. Conocemos a tu hijo y escuchamos tu preocupación
> 2. Realizamos una evaluación breve de la situación
> 3. Diseñamos juntos un plan de trabajo con objetivos claros
> 4. Resolvemos dudas sobre el proceso y la inversión
>
> No es necesario que tu hijo sepa que va al "psicólogo". Puedes decirle que van a conocer un lugar donde aprenderá sobre sus emociones jugando.

**Sección 2: Widget de Calendly**
```html
<!-- Calendly inline widget begin -->
<div class="calendly-inline-widget"
     data-url="https://calendly.com/espacioludimente/primera-sesion"
     style="min-width:320px;height:700px;">
</div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<!-- Calendly inline widget end -->
```

**Sección 3: FAQ rápido**
- ¿Cuánto cuesta la primera sesión? → $500 MXN
- ¿Cuánto dura? → 50 minutos
- ¿Debo llevar algo? → No, solo a tu hijo y tu disposición a platicar
- ¿Qué pasa si no puedo asistir? → Cancela con 24h de anticipación (puedes hacerlo desde el email de confirmación)

---

## 🎨 Guía de Estilos Rápida

### Colores (Variables CSS)

```css
:root {
  /* Colores primarios */
  --color-primary: #B19CD9;
  --color-secondary: #D69264;
  --color-accent: #F4D03F;
  --color-text: #4A3B45;
  --color-surface: #FFF0F5;

  /* Colores de fondo */
  --color-background: #FFFFFF;
  --color-primary-container: #F3E5F5;
  --color-secondary-container: #FFF8E1;

  /* Outline */
  --color-outline: rgba(177, 156, 217, 0.3);
}
```

### Tipografía

```css
/* Importar desde Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Montserrat:wght@300;400;600&display=swap');

/* Variables tipográficas */
:root {
  --font-display: 'Lora', serif;
  --font-body: 'Montserrat', sans-serif;

  /* Tamaños */
  --text-h1: 3.56rem; /* 57px */
  --text-h2: 2.25rem; /* 36px */
  --text-h3: 1.75rem; /* 28px */
  --text-body: 1rem; /* 16px */
  --text-small: 0.875rem; /* 14px */
}

/* Aplicación */
h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--color-text);
}

body, p, a, button {
  font-family: var(--font-body);
  font-weight: 400;
  color: var(--color-text);
}
```

### Espaciado

```css
:root {
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 48px;
  --spacing-xl: 96px;
}
```

### Border Radius

```css
:root {
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 9999px;
}
```

---

## ✅ Checklist de Implementación

### Semana 1

**Día 1-2: Setup**
- [ ] Inicializar proyecto Astro (`npm create astro@latest`)
- [ ] Configurar estructura de carpetas
- [ ] Crear variables CSS globales (`src/styles/global.css`)
- [ ] Importar Google Fonts (Lora + Montserrat)
- [ ] Crear componentes base: `Header.astro`, `Footer.astro`

**Día 3-4: Home**
- [ ] Componente `Hero.astro`
- [ ] Componente `ServiceCard.astro`
- [ ] Sección "¿Qué Hacemos?"
- [ ] Sección "¿Por Qué Espacio Ludimente?"
- [ ] Componente `TestimonialCard.astro` + Carrusel
- [ ] CTA Final

**Día 5-7: Páginas Secundarias**
- [ ] Página `/servicios`
- [ ] Página `/sobre-nosotras`
- [ ] Página `/blog` (solo estructura + 2 posts de prueba)

### Semana 2

**Día 8-9: Funcionalidad**
- [ ] Página `/contacto` + integración Formspree
- [ ] Página `/reservar` + integración Calendly
- [ ] Componente `ContactForm.astro`

**Día 10-11: Estilos y Accesibilidad**
- [ ] Responsive design (móvil, tablet, desktop)
- [ ] Pruebas de contraste de color (WCAG AA)
- [ ] Focus states para teclado
- [ ] Alt text en todas las imágenes
- [ ] Semantic HTML (nav, main, article, etc.)

**Día 12-13: Testing y SEO**
- [ ] Meta tags (title, description) en cada página
- [ ] Open Graph para redes sociales
- [ ] Favicon
- [ ] Robots.txt
- [ ] Sitemap.xml
- [ ] Lighthouse audit (Performance, SEO, Accessibility)

**Día 14: Deploy**
- [ ] Build de producción (`npm run build`)
- [ ] Deploy en Netlify/Vercel
- [ ] Conectar dominio (si ya lo tienes)
- [ ] Configurar analytics (Google Analytics o Plausible)

---

## 🚀 Próximos Pasos

Una vez tengas el sitio desplegado:

1. **Crear contenido real del blog** (al menos 4-6 artículos)
2. **Conseguir testimonios reales** de familias (con permiso)
3. **Tomar fotos profesionales** del espacio físico y del equipo
4. **SEO local:** Registrarse en Google My Business
5. **Redes sociales:** Crear perfiles de Instagram y Facebook, linkar al sitio

---

**Documento creado por:** Angélica Chin
**Con asistencia de:** Claude (Anthropic)
**Fecha:** Noviembre 24, 2025
