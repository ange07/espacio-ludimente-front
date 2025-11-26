import type { BlogPost } from './types';

// Placeholders temporales con colores del brand (Lila: B19CD9)
// TODO: Reemplazar con imágenes reales en public/images/blog/
export const posts: BlogPost[] = [
    {
        title: "¿Qué es la Terapia Cognitivo Conductual y por qué funciona?",
        excerpt: "Descubre por qué la TCC es el enfoque con mayor respaldo científico para trabajar con niños y adolescentes.",
        date: "2025-11-20",
        slug: "que-es-la-tcc",
        image: "https://placehold.co/800x450/B19CD9/FFFFFF?text=TCC+Infantil",
        imageAlt: "Ilustración sobre terapia cognitivo conductual infantil mostrando técnicas de regulación emocional"
    },
    {
        title: "5 Estrategias para Manejar Berrinches Intensos",
        excerpt: "Guía práctica para padres: validación emocional, límites claros y cuándo pedir ayuda profesional.",
        date: "2025-11-15",
        slug: "manejo-berrinches",
        image: "https://placehold.co/800x450/D69264/FFFFFF?text=Manejo+Berrinches",
        imageAlt: "Padre aplicando estrategias de validación emocional durante un momento difícil con su hijo"
    },
    {
        title: "La Ansiedad en Niños: Señales y Qué Hacer",
        excerpt: "Aprende a diferenciar entre miedos normales y ansiedad que requiere atención. Herramientas para casa.",
        date: "2025-11-10",
        slug: "ansiedad-ninos",
        image: "https://placehold.co/800x450/F4D03F/4A3B45?text=Ansiedad+Infantil",
        imageAlt: "Niño practicando técnicas de respiración y relajación para manejar la ansiedad"
    },
    {
        title: "Crianza Positiva: Límites Sin Gritos",
        excerpt: "Cómo establecer consecuencias naturales y dar instrucciones efectivas sin perder la conexión con tu hijo.",
        date: "2025-11-05",
        slug: "crianza-positiva",
        image: "https://placehold.co/800x450/FFF0F5/4A3B45?text=Crianza+Positiva",
        imageAlt: "Madre estableciendo límites de manera calmada y respetuosa con su hijo en un ambiente familiar"
    }
];
