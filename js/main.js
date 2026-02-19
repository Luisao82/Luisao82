/**
 * Punto de entrada principal.
 * Importa y ejecuta todos los módulos del portfolio.
 */
import { initTyping } from "./typing.js";
import { initSkillBars } from "./skills.js";
import { initContactForm } from "./contact.js";
import { initPixelDecoration, initScrollGlitch } from "./effects.js";
import { initEasterEgg } from "./easter-egg.js";
import { initNav } from "./nav.js";

// Menú hamburguesa responsive
initNav("navToggle");

// Efecto de escritura del hero
initTyping("typing", [
  "Full Stack Developer",
  "Pixel Art Enthusiast",
  "Code Craftsman",
  "Retro Tech Lover",
  "Problem Solver",
]);

// Animación de barras de skills
initSkillBars(".skills-grid");

// Formulario de contacto
initContactForm("contactForm");

// Efectos visuales
initPixelDecoration();
initScrollGlitch();

// Easter egg en consola
initEasterEgg();
