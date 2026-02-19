/**
 * Easter egg: muestra un ASCII art en la consola del navegador
 * para los desarrolladores curiosos que abran las DevTools.
 */
export function initEasterEgg() {
  console.log(
    "%c ██████╗ ███████╗██╗   ██╗    ███╗   ███╗ █████╗ ███████╗████████╗███████╗██████╗ ",
    "color: #39ff14",
  );
  console.log(
    "%c ██╔══██╗██╔════╝██║   ██║    ████╗ ████║██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗",
    "color: #39ff14",
  );
  console.log(
    "%c ██║  ██║█████╗  ██║   ██║    ██╔████╔██║███████║███████╗   ██║   █████╗  ██████╔╝",
    "color: #00ffff",
  );
  console.log(
    "%c ██║  ██║██╔══╝  ╚██╗ ██╔╝    ██║╚██╔╝██║██╔══██║╚════██║   ██║   ██╔══╝  ██╔══██╗",
    "color: #00ffff",
  );
  console.log(
    "%c ██████╔╝███████╗ ╚████╔╝     ██║ ╚═╝ ██║██║  ██║███████║   ██║   ███████╗██║  ██║",
    "color: #ff00ff",
  );
  console.log(
    "%c ╚═════╝ ╚══════╝  ╚═══╝      ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝",
    "color: #ff00ff",
  );
  console.log(
    "%c Welcome, fellow developer! 🎮",
    "color: #ffff00; font-size: 16px;",
  );
}
