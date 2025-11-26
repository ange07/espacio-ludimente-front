# Guías de Componentes

## Button Sizing Guide

Para mantener la consistencia visual y jerárquica, utiliza los siguientes tamaños de botón según el contexto:

### `size="sm"` (Small)
*   **Uso:** Acciones secundarias, dentro de tarjetas, headers o footers compactos.
*   **Ejemplos:** Botón de "WhatsApp" en header, botones dentro de una tabla.

### `size="md"` (Medium) - *Default*
*   **Uso:** Formularios, CTAs estándar, botones de navegación principal.
*   **Ejemplos:** Botón "Enviar" en formulario de contacto, "Leer más" en tarjetas de blog grandes.

### `size="lg"` (Large)
*   **Uso:** CTAs principales en Hero sections, puntos de conversión críticos.
*   **Ejemplos:** "Reservar primera sesión" en el Home, "Contáctanos" al final de una página de venta.

---

## Hover States

Todas las tarjetas interactivas deben usar la clase utilitaria `.card-hover` para garantizar una transición y elevación consistente.

```css
.card-hover {
  transition: all var(--transition-base);
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary);
}
```
