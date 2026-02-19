/**
 * Efectos visuales decorativos del portfolio.
 */

/**
 * Crea pixeles de colores aleatorios que aparecen y desaparecen
 * por toda la pantalla, dando un toque retro.
 */
export function initPixelDecoration() {
  const colors = [
    "var(--neon-green)",
    "var(--neon-cyan)",
    "var(--neon-magenta)",
  ];

  function createPixel() {
    const pixel = document.createElement("div");
    pixel.className = "pixel-decoration";
    pixel.style.left = Math.random() * window.innerWidth + "px";
    pixel.style.top = Math.random() * window.innerHeight + "px";
    pixel.style.background = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(pixel);

    setTimeout(() => {
      pixel.remove();
    }, 3000);
  }

  setInterval(createPixel, 500);
}

/**
 * Aplica un efecto glitch al body cuando el usuario
 * hace scroll rápido (salto > 50px).
 */
export function initScrollGlitch() {
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (Math.abs(currentScroll - lastScroll) > 50) {
      document.body.style.animation = "none";
      setTimeout(() => {
        document.body.style.animation = "";
      }, 100);
    }
    lastScroll = currentScroll;
  });
}
