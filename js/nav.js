/**
 * Menú hamburguesa responsive.
 * Alterna la visibilidad del menú en móvil y lo cierra
 * automáticamente al pulsar un enlace de navegación.
 *
 * @param {string} toggleId - ID del botón hamburguesa.
 */
export function initNav(toggleId) {
  const toggle = document.getElementById(toggleId);
  if (!toggle) return;

  const nav = toggle.closest("nav");
  const ul = nav.querySelector("ul");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    ul.classList.toggle("nav-open");
  });

  // Cerrar menú al pulsar un enlace
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      ul.classList.remove("nav-open");
    });
  });
}
