/**
 * Easter egg: muestra un ASCII art en la consola del navegador
 * para los desarrolladores curiosos que abran las DevTools.
 */
export function initEasterEgg() {
  console.log(
    "%c ██╗     ██╗   ██╗██╗███████╗ █████╗  ██████╗     ██████╗ ███████╗██╗   ██╗ ",
    "color: #ff1414",
  );
  console.log(
    "%c ██║     ██║   ██║██║██╔════╝██╔══██╗██╔═══██║    ██╔══██╗██╔════╝██║   ██║",
    "color: #f84a4a",
  );
  console.log(
    "%c ██║     ██║   ██║██║███████╗███████║██║   ██║    ██║  ██║█████╗  ██║   ██║",
    "color: #ff7777",
  );
  console.log(
    "%c ██║     ██║   ██║██║╚════██║██╔══██║██║   ██║    ██║  ██║██╔══╝  ╚██╗ ██╔╝",
    "color: #ff7777",
  );
  console.log(
    "%c ███████╗╚██████╔╝██║███████║██║  ██║╚██████╔╝    ██████╔╝███████╗ ╚████╔╝ ",
    "color: #f84a4a",
  );
  console.log(
    "%c ╚══════╝ ╚═════╝ ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝     ╚═════╝ ╚══════╝  ╚═══╝  ",
    "color: #ff1414",
  );
  console.log(
    "%c Welcome, fellow developer! 🎮",
    "color: rgb(255, 0, 0); font-size: 16px;",
  );
}