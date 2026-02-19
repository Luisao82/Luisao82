/**
 * Animación de las barras de skills.
 * Usa IntersectionObserver para animar el ancho de las barras
 * cuando el grid de skills entra en el viewport.
 *
 * @param {string} selector - Selector CSS del grid de skills.
 */
export function initSkillBars(selector) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fills = entry.target.querySelectorAll(".skill-bar-fill");
          fills.forEach((fill) => {
            const width = fill.dataset.width;
            fill.style.width = width + "%";
          });
        }
      });
    },
    { threshold: 0.5 },
  );

  document.querySelectorAll(selector).forEach((grid) => {
    observer.observe(grid);
  });
}
