import "./progressBarJS.css";

interface ProgressBarOptions {
  color?: string;
}

const ProgressBarJSContainer = (options: ProgressBarOptions = {}): HTMLDivElement => {
  // Remover cualquier barra de progreso existente
  const existingProgressBar = document.querySelector(".progress-bar-js");
  if (existingProgressBar) {
    existingProgressBar.remove();
  }

  const progressBarJS = document.createElement("div");
  progressBarJS.className = "progress-bar-js";

  const progressBarValue = document.createElement("div");
  progressBarValue.className = "progress-bar-value";

  if (options.color) {
    progressBarValue.style.backgroundColor = options.color;
  }

  progressBarJS.appendChild(progressBarValue);
  document.body.appendChild(progressBarJS);

  // Remover la barra de progreso después de que termine la animación
  progressBarValue.addEventListener("animationend", () => {
    progressBarJS.remove(); // Remover el elemento completo de la barra de progreso
  });

  return progressBarJS;
};

export { ProgressBarJSContainer };
