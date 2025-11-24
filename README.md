# Espacio Ludimente (MVP) 🧠✨

Bienvenido al repositorio del MVP de **Espacio Ludimente**, un sitio web para un centro de psicología enfocado en niños y adolescentes. Este proyecto representa mi camino como psicóloga escolar que está aprendiendo desarrollo web, combinando mi experiencia clínica con nuevas habilidades tecnológicas.

## 📋 Descripción del Proyecto

El objetivo de este MVP es crear un **sitio web informativo, accesible y profesional** que permita a las familias conocer los servicios de Espacio Ludimente, un centro psicológico infantil en Mérida, Yucatán. El desarrollo pone un énfasis especial en la **accesibilidad web** y la claridad en la experiencia de usuario (UX).

**Meta:** Sitio funcional en 2 semanas ⏱️

## 🛠 Stack Tecnológico y Justificación

Como desarrolladora Junior en proceso de aprendizaje (con experiencia en HTML, CSS y JavaScript vanilla), he seleccionado tecnologías que me permiten:
- ✅ Construir el sitio rápidamente
- ✅ Aprender conceptos modernos de forma gradual
- ✅ Usar herramientas que sean escalables para el futuro

### Frontend 🎨
* **Tecnología:** Astro
* **Por qué Astro:**
  - **Fácil de aprender:** Puedo escribir HTML, CSS y JavaScript como ya sé, pero con superpoderes (componentes reutilizables)
  - **Ultra-rápido:** Astro genera sitios estáticos optimizados automáticamente (perfecto para SEO)
  - **Flexible:** Puedo usar React/Vue solo en partes específicas cuando lo necesite (progresivo)
  - **Ideal para sitios informativos:** Diseñado específicamente para blogs, landing pages y sitios de contenido
  - **Markdown nativo:** Perfecto para el blog de recursos
* **Deploy:** Netlify o Vercel (configuración automática, gratis)

### Backend ⚙️
* **Tecnología (Fase 1 - MVP):** No hay backend propio por ahora
* **Por qué:** Para el MVP usaremos servicios externos gratuitos que nos dan funcionalidad sin complejidad:
  - **Formularios de contacto:** Formspree o Web3Forms
  - **Sistema de reservas:** Calendly (integrado en el sitio)
  - **Blog/Recursos:** Archivos Markdown (manejados por Astro)
  - **Analytics:** Google Analytics o Plausible

* **Roadmap Futuro (Fase 2):** Cuando necesitemos gestionar pacientes, historias clínicas y un dashboard administrativo, evaluaremos opciones de backend (probablemente Node.js + Express o Supabase)

### Por Qué NO React + Express Directo
* **React:** Excelente para aplicaciones complejas, pero tiene curva de aprendizaje pronunciada. Para un sitio informativo, Astro es más eficiente y fácil.
* **Express backend:** No lo necesitamos aún. Los servicios externos nos dan lo que necesitamos sin mantenimiento.
* **Estrategia:** Aprendo lo esencial primero, luego escalo cuando sea necesario.

## 📂 Estructura del Proyecto

Por ahora, todo vive en un solo repositorio (monorepo simplificado):

```
espacio-ludimente-front/
├── src/
│   ├── components/      # Componentes reutilizables (Header, Footer, Card, etc.)
│   ├── layouts/         # Layouts de página (MainLayout.astro)
│   ├── pages/           # Páginas del sitio (index.astro, servicios.astro, etc.)
│   ├── content/         # Contenido en Markdown (blog posts, recursos)
│   └── styles/          # Estilos globales y variables CSS
├── public/              # Archivos estáticos (imágenes, fonts, favicon)
└── astro.config.mjs     # Configuración de Astro
```

**Justificación:** Para un sitio estático, no necesitamos separar frontend/backend. Cuando agreguemos el dashboard en el futuro, crearemos `espacio-ludimente-admin` como repo separado.

## 🚀 Instalación y Uso (Local)

Para correr este proyecto en tu máquina local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/ange07/espacio-ludimente-front.git
   cd espacio-ludimente-front
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Esto abrirá el sitio en `http://localhost:4321`

4. **Construir para producción:**
   ```bash
   npm run build
   ```

## 📅 Plan de Desarrollo (2 Semanas)

### Semana 1: Fundamentos y Estructura
- **Día 1-2:** Setup de Astro + estructura de carpetas + primer componente
- **Día 3-4:** Página Home (Hero, servicios, testimonios)
- **Día 5-7:** Páginas Servicios, Sobre Nosotras, Blog básico

### Semana 2: Integración y Pulido
- **Día 8-9:** Integración de formulario de contacto y Calendly
- **Día 10-11:** Estilos finales (identidad de marca), accesibilidad
- **Día 12-13:** Testing, responsive design, SEO básico
- **Día 14:** Deploy en Netlify/Vercel 🎉

## 🎨 Identidad Visual

Este proyecto sigue el **Manual de Identidad de Marca de Espacio Ludimente** (ver `src/manual-identidad-ludimente.md`).

**Colores principales:**
- Lila Primary: `#B19CD9`
- Terracota Secondary: `#D69264`
- Copal Accent: `#F4D03F`
- Piedra Text: `#4A3B45`
- Crema Surface: `#FFF0F5`

**Tipografía:**
- Títulos: Lora (Serif)
- Cuerpo: Montserrat (Sans-serif)

## 🔌 Servicios Externos Integrados

### Formulario de Contacto
- **Servicio:** Formspree (https://formspree.io)
- **Plan:** Gratis (50 envíos/mes)
- **Implementación:** Formulario HTML apuntando a endpoint de Formspree

### Sistema de Reservas
- **Servicio:** Calendly (https://calendly.com)
- **Plan:** Gratis (1 tipo de evento)
- **Implementación:** Widget embebido en página "Reservar Sesión"

### Blog/Recursos
- **Tecnología:** Astro Content Collections (nativo)
- **Formato:** Archivos Markdown en `src/content/blog/`
- **Ventajas:** Control total, sin dependencia externa, super rápido

## 📚 Recursos de Aprendizaje

Si estás aprendiendo Astro como yo:
- [Documentación oficial de Astro](https://docs.astro.build) (excelente tutorial)
- [Astro Crash Course - YouTube](https://www.youtube.com/results?search_query=astro+crash+course)
- [Astro + Tailwind Tutorial](https://docs.astro.build/en/guides/integrations-guide/tailwind/)

## 🗺️ Roadmap Futuro

### Fase 2: Dashboard Administrativo (después del MVP)
- Gestión de pacientes y expedientes
- Historias clínicas digitales
- Sistema de citas propio
- Backend: Node.js + Express + PostgreSQL o Supabase
- Frontend: Panel admin con React o Vue

### Fase 3: Features Avanzadas
- Portal de padres (seguimiento de progreso)
- Recursos descargables (PDFs, hojas de trabajo)
- Sistema de pagos (Stripe/PayPal)
- Blog con comentarios y búsqueda

## 👩‍💻 Autora

**Angélica Chin**
* Psicóloga Escolar & Desarrolladora Jr. en formación
* *Intereses:* Tech for Good, Accesibilidad, Psicología Infantil
* *Aprendiendo:* Astro, desarrollo web moderno, UX/UI

---

## 📝 Notas de Desarrollo

**Última actualización:** Noviembre 24, 2025

Este proyecto es parte de mi portafolio profesional y mi aprendizaje continuo en desarrollo web. Si encuentras algo que se puede mejorar o tienes sugerencias, son bienvenidas.

**Stack actualizado:** De React + Vite + Express → Astro + servicios externos (decisión tomada para priorizar velocidad de desarrollo y curva de aprendizaje gradual).
