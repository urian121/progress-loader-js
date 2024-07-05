import "./progressLoader.css";

interface ProgressLoaderOptions {
  backgroundColor?: string; // Color para el fondo de .progress-bar-js
  barColor?: string; // Color para la barra de progreso de .progress-bar-value
}

const ProgressLoaderContainer = (options: string[]): HTMLDivElement => {
  // Remover cualquier barra de progreso existente
  const existingProgressLoader = document.querySelector(".progress-loader-js");
  if (existingProgressLoader) {
    existingProgressLoader.remove();
  }

  // Convertir el array de strings a un objeto ProgressBarOptions
  const optionsObject: ProgressLoaderOptions = {
    backgroundColor: options[0],
    barColor: options[1],
  };

  const progressLoader = document.createElement("div");
  progressLoader.className = "progress-loader-js";

  if (optionsObject.backgroundColor) {
    progressLoader.style.backgroundColor = optionsObject.backgroundColor;
  }

  const progressLoaderValue = document.createElement("div");
  progressLoaderValue.className = "progress-loader-value";

  if (optionsObject.barColor) {
    progressLoaderValue.style.backgroundColor = optionsObject.barColor;
  }

  progressLoader.appendChild(progressLoaderValue);
  document.body.appendChild(progressLoader);

  // Remover la barra de progreso después de que termine la animación
  progressLoaderValue.addEventListener("animationend", () => {
    progressLoader.remove(); // Remover el elemento completo de la barra de progreso
  });

  return progressLoader;
};

export { ProgressLoaderContainer };
