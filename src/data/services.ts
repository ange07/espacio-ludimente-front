import type { ServiceData } from './types';

export const services: ServiceData[] = [
    {
        title: "Terapia Individual TCC (Niños 6-12 años)",
        target: "Para niños con ansiedad, miedos, berrinches o problemas de conducta.",
        focus: ["Identificación de emociones", "Técnicas de regulación", "Reestructuración cognitiva", "Resolución de problemas"],
        method: "Sesiones de 50 min, juego terapéutico y participación activa de padres.",
        price: "$500 MXN por sesión",
        icon: "🧸"
    },
    {
        title: "Terapia Individual TCC (Adolescentes 13-17 años)",
        target: "Para ansiedad social, autoestima, manejo de ira o adaptación.",
        focus: ["Habilidades sociales", "Manejo de estrés", "Creencias limitantes", "Planificación"],
        method: "Sesiones de 50 min, diálogo directo y herramientas digitales.",
        price: "$500 MXN por sesión",
        icon: "🎧"
    },
    {
        title: "Evaluación Psicopedagógica",
        target: "Dificultades escolares, sospecha de TDAH o dislexia.",
        focus: ["Entrevista con padres", "Pruebas estandarizadas", "Observación conductual", "Informe detallado"],
        method: "Proceso de 3-4 sesiones con entrega de resultados.",
        price: "Cotización según caso",
        icon: "📋"
    },
    {
        title: "Talleres para Padres",
        target: "Crianza positiva, manejo de berrinches y ansiedad.",
        focus: ["Estrategias prácticas", "Límites con amor", "Resolución de dudas"],
        method: "Formato grupal (6-10 familias), 2 horas.",
        price: "$300 MXN por familia",
        icon: "users"
    }
];
