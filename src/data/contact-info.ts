/**
 * contact-info.ts
 * Información de contacto centralizada para Espacio Ludimente
 * Usada en Footer, página de contacto, y otros componentes
 */

import type { ContactInfo } from './types';

export const contactInfo: ContactInfo = {
  address: {
    street: "C. 52 107",
    neighborhood: "Francisco de Montejo II",
    city: "Mérida",
    state: "Yucatán",
    zipCode: "97203",
    fullAddress: "C. 52 107, Francisco de Montejo II, 97203 Mérida, Yucatán"
  },

  phone: {
    primary: "+529992590623",
    secondary: "+529999002640",
    formatted: {
      primary: "999-259-0623",
      secondary: "999-900-2640"
    }
  },

  email: "contacto.ludimente@gmail.com",

  hours: {
    weekdays: "9:00 AM - 7:00 PM",
    weekends: "9:00 AM - 2:00 PM"
  },

  social: [
    {
      platform: "instagram",
      name: "Instagram",
      url: "https://instagram.com/espacioludimente",
      icon: "instagram",
      ariaLabel: "Instagram"
    },
    {
      platform: "facebook",
      name: "Facebook",
      url: "https://facebook.com/espacioludimente",
      icon: "facebook",
      ariaLabel: "Facebook"
    },
    {
      platform: "whatsapp",
      name: "WhatsApp",
      url: "https://wa.me/529992590623?text=Hola,%20me%20gustaría%20agendar%20una%20sesión",
      icon: "whatsapp",
      ariaLabel: "WhatsApp"
    }
  ],

  location: {
    lat: 21.0366667,
    lng: -89.6499999,
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8977453149246!2d-89.6499999!3d21.0366667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAyJzEyLjAiTiA4OcKwMzknMDAuMCJX!5e0!3m2!1ses-419!2smx!4v1600000000000!5m2!1ses-419!2smx"
  }
};

/**
 * Helper functions para formatear información de contacto
 */

export function getPhoneHref(phoneNumber: string): string {
  return `tel:${phoneNumber}`;
}

export function getEmailHref(email: string): string {
  return `mailto:${email}`;
}

export function getWhatsAppHref(phoneNumber: string, message?: string): string {
  const defaultMessage = "Hola, me gustaría agendar una sesión";
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

export function getFormattedAddress(): string {
  return contactInfo.address.fullAddress;
}
