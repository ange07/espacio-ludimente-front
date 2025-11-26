/**
 * faq.ts
 * Preguntas frecuentes organizadas por categoría
 */

import type { FAQItem } from './types';

/**
 * FAQ para la página de reserva
 */
export const bookingFAQ: FAQItem[] = [
  {
    question: "¿Cuánto cuesta la primera sesión?",
    answer: "$500 MXN. El pago se puede realizar en efectivo o transferencia al finalizar.",
    category: "pricing"
  },
  {
    question: "¿Cuánto dura la sesión?",
    answer: "50 minutos aproximadamente.",
    category: "session"
  },
  {
    question: "¿Debo llevar algo?",
    answer: "No es necesario traer nada específico, solo tu disposición para platicar. Si tienes informes escolares previos, pueden ser útiles.",
    category: "preparation"
  },
  {
    question: "¿Qué pasa si no puedo asistir?",
    answer: "Te pedimos cancelar o reprogramar con al menos 24 horas de anticipación para no generar cargos.",
    category: "cancellation"
  }
];

/**
 * FAQ general (puede usarse en otras páginas o secciones)
 */
export const generalFAQ: FAQItem[] = [
  // Aquí se pueden agregar más preguntas frecuentes generales en el futuro
];
