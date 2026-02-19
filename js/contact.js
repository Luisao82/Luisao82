/**
 * Lógica del formulario de contacto.
 * Simula el envío con feedback visual en el botón.
 *
 * @param {string} formId - ID del formulario de contacto.
 */
export function initContactForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const btn = this.querySelector(".submit-btn");

    btn.textContent = "[ ENVIANDO... ]";
    btn.style.background = "var(--neon-cyan)";
    btn.style.color = "var(--dark-bg)";

    setTimeout(() => {
      btn.textContent = "[ ✓ MENSAJE ENVIADO ]";
      btn.style.background = "var(--neon-green)";

      setTimeout(() => {
        btn.textContent = "[ ENVIAR MENSAJE ]";
        btn.style.background = "transparent";
        btn.style.color = "var(--neon-green)";
        this.reset();
      }, 2000);
    }, 1500);
  });
}
