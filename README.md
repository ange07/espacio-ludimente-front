# Espacio Ludimente (MVP) 🧠✨

Bienvenido al repositorio del MVP de **Espacio Ludimente**, una plataforma para la práctica de psicología enfocada en niños y adolescentes. Este proyecto representa mi combinación de psicóloga escolar y desarrolladora Full Stack, combinando mi experiencia clínica con nuevas habilidades tecnológicas.

## 📋 Descripción del Proyecto

El objetivo de este MVP es crear un sitio web funcional, accesible y escalable que permita a los usuarios conocer los servicios de Espacio Ludimente, un centro psicológico infantil en Mérida. El desarrollo pone un énfasis especial en la **accesibilidad web** y la claridad en la experiencia de usuario (UX).

## 🛠 Stack Tecnológico y Justificación

Como desarrolladora Junior en proceso de aprendizaje, he seleccionado las tecnologías basándome en la facilidad de despliegue, la robustez del ecosistema y la separación clara de responsabilidades.

### Frontend 🎨
* **Tecnología:** React + Vite
* **Por qué:** Vite ofrece un entorno de desarrollo rápido y moderno. React me permite profundizar en la lógica de componentes y facilitar la integración de librerías de accesibilidad (crucial para este proyecto).
* **Deploy:** Vercel (por su configuración automática con Vite).

### Backend ⚙️
* **Tecnología:** Node.js + Express
* **Por qué:** Permite unificar el lenguaje (JavaScript) en todo el stack. Express es minimalista, ideal para aprender los fundamentos de las REST APIs sin abstracciones complejas.
* **Deploy:** Render (Servicio web para Node.js).

## 📂 Arquitectura de Repositorios

He optado por una estrategia **Multi-repo** para mantener la claridad mental y separar preocupaciones:

1.  **Frontend:** `espacio-ludimente-front` (Este repositorio)
2.  **Backend:** `espacio-ludimente-back`

**Justificación:** Mantener los repositorios separados facilita la configuración de CI/CD independiente y ayuda a entender claramente la comunicación cliente-servidor vía API.

## 🚀 Instalación y Uso (Local)

Para correr este proyecto en tu máquina local:

1.  **Clonar el repositorio:**
    ```bash
    git clone <https://github.com/ange07/espacio-ludimente-front.git>
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

## 👩‍💻 Autora

**Angélica Chin**
* Psicóloga & Desarrolladora Jr. Full Stack.
* *Intereses:* Tech for Good, Accesibilidad, EdTech.

---
*Este proyecto es parte de mi portafolio profesional y mi aprendizaje continuo en desarrollo web.*