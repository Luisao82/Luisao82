/**
 * Punto de entrada principal.
 * Importa y ejecuta todos los módulos del portfolio.
 */
import { initTyping } from "./typing.js";
import { initSkillBars } from "./skills.js";
import { initContactForm } from "./contact.js";
import { initScrollGlitch } from "./effects.js";
import { initEasterEgg } from "./easter-egg.js";
import { initNav } from "./nav.js";

// Menú hamburguesa responsive
initNav("navToggle");

// Efecto de escritura del hero
initTyping("typing", [
  "Full Stack Developer",
  "Code Craftsman",
  "Retro Tech Lover",
  "Problem Solver",
  "Trianero",
]);

// Animación de barras de skills
initSkillBars(".skills-grid");

// Formulario de contacto
initContactForm("contactForm");

// Efectos visuales
initScrollGlitch();

// Easter egg en consola
initEasterEgg();
