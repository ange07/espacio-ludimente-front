/**
 * booking-process.ts
 * Pasos del proceso de reserva y tips para familias
 */

import type { BookingStep, BookingTip } from './types';

/**
 * Pasos del proceso de primera sesión
 */
export const bookingSteps: BookingStep[] = [
  {
    number: 1,
    title: "Conocemos a tu hijo",
    description: "Platicamos sobre lo que les preocupa y observamos la dinámica."
  },
  {
    number: 2,
    title: "Evaluación breve",
    description: "Identificamos las áreas clave a trabajar."
  },
  {
    number: 3,
    title: "Plan de acción",
    description: "Diseñamos juntos objetivos claros y medibles."
  }
];

/**
 * Tips útiles para padres antes de la primera sesión
 */
export const bookingTips: BookingTip[] = [
  {
    icon: "💡",
    text: "No es necesario decirle a tu hijo que va al \"psicólogo\". Puedes decirle que irán a un lugar a jugar y aprender sobre las emociones.",
    highlight: "Tip:"
  }
];
