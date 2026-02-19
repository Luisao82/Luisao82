/**
 * Efecto de escritura (typewriter) para el hero.
 * Escribe y borra frases en bucle simulando una terminal.
 *
 * @param {string} elementId - ID del elemento donde se escribe el texto.
 * @param {string[]} phrases - Array de frases a mostrar.
 */
export function initTyping(elementId, phrases) {
  const typingElement = document.getElementById(elementId);
  if (!typingElement) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}
