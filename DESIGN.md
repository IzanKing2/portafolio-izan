# 🎨 Design System & Redesign Plan (Stitch)

This document outlines the current design tokens of the portfolio and provides a strategic plan for **Stitch** to redesign and improve the user interface to a premium, state-of-the-art web application.

## 1. Current Design State

### Color Palette
- **Background (`--color-bg`)**: `#0a0a0f` (Deep dark blue/black)
- **Surface (`--color-surface`)**: `#13131a` (Darker grey/blue for cards/navbar)
- **Accent (`--color-accent`)**: `#f5c400` (Vibrant Yellow)
- **Text Primary (`--color-text`)**: `#e8e8f0` (Off-white)
- **Text Muted (`--color-text-muted`)**: `#7a7a9a` (Slate grey)

### Typography & Layout
- **Font Family**: `Inter`, sans-serif.
- **Max Width**: `1100px` for content containment.
- **Interactions**: Custom cursor implementation (native cursor is hidden `cursor: none`).

### Animations
- **Canvas Particles**: The Hero section features a custom, interactive particle system reacting to mouse proximity.
- **Scroll Reveals**: Uses a standard `.fade-in` class (Y-axis translation `28px` to `0`, opacity `0` to `1` over `0.6s`).

---

## 2. Redesign & Improvement Strategy for Stitch

To elevate this portfolio from "good" to "premium" (10/10), Stitch should implement the following aesthetic and UX enhancements:

### A. Evolve the Color System (Dynamic Theming)
- **Dark Mode Polish**: Introduce subtle gradients to the surfaces rather than flat colors. Use **Glassmorphism** for the Navbar and floating cards (e.g., `backdrop-filter: blur(12px); background: rgba(19, 19, 26, 0.7);`).
- **Light Mode Support**: Generate an inverted palette (e.g., Background: `#f8f9fa`, Surface: `#ffffff`, Accent: `#e6b800`).
- **Accent Gradients**: Instead of a flat yellow `#f5c400`, use a modern gradient for text highlights or buttons (e.g., `linear-gradient(135deg, #f5c400, #ffea8c)`).

### B. Typography Elevation
- **Fluid Typography**: Use `clamp()` for font sizes so headings scale perfectly across mobile and ultrawide screens.
- **Secondary Font**: Pair `Inter` with a more characterful font for major headings (e.g., `Outfit` or `Plus Jakarta Sans`) to create contrast, leaving `Inter` for body text.

### C. Layout Modernization (Bento Grid)
- **Proyectos & Tecnologías**: Redesign the card layouts into a **Bento Grid** style. It makes the UI look highly modern and maximizes screen real estate with asymmetric but balanced blocks.
- **Micro-animations**: Add magnetic hover effects to buttons and project cards (using framer-motion or advanced CSS transforms) so they feel "alive".

### D. Refine the Custom Cursor
- Ensure the custom cursor has a blending mode (`mix-blend-mode: difference`) so it contrasts intelligently against both dark backgrounds and the yellow accent elements, preventing it from getting lost.

## 3. Stitch Implementation Guidelines

1. **Do not break existing Canvas**: The hero canvas is a strong technical showcase. Wrap the redesign around it.
2. **CSS Modules to Global Tokens**: Consolidate the new colors into `src/index.css` under both `:root` and `[data-theme='light']` selectors.
3. **Accessibility (a11y)**: When applying new colors (especially against the yellow accent), ensure the contrast ratio meets WCAG AA standards (e.g., using dark text `#0a0a0f` on yellow buttons).
