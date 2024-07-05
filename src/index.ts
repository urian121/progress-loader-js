import "./progressLoader.css";

interface ProgressLoaderOptions {
  backgroundColor?: string; // Color para el fondo de .progress-bar-js
  barColor?: string; // Color para la barra de progreso de .progress-bar-value
}

const ProgressLoaderContainer = (options: string[]): HTMLDivElement => {
  // Remover cualquier barra de progreso existente
  const existingProgressBar = document.querySelector(".progress-bar-js");
  if (existingProgressBar) {
    existingProgressBar.remove();
  }

  // Convertir el array de strings a un objeto ProgressBarOptions
  const optionsObject: ProgressLoaderOptions = {
    backgroundColor: options[0],
    barColor: options[1],
  };

  const progressBarJS = document.createElement("div");
  progressBarJS.className = "progress-bar-js";

  if (optionsObject.backgroundColor) {
    progressBarJS.style.backgroundColor = optionsObject.backgroundColor;
  }

  const progressBarValue = document.createElement("div");
  progressBarValue.className = "progress-bar-value";

  if (optionsObject.barColor) {
    progressBarValue.style.backgroundColor = optionsObject.barColor;
  }

  progressBarJS.appendChild(progressBarValue);
  document.body.appendChild(progressBarJS);

  // Remover la barra de progreso después de que termine la animación
  progressBarValue.addEventListener("animationend", () => {
    progressBarJS.remove(); // Remover el elemento completo de la barra de progreso
  });

  return progressBarJS;
};

export { ProgressLoaderContainer };
