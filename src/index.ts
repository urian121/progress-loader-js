import "./progressLoader.css";

interface ProgressLoaderOptions {
  backgroundColor?: string; // Color para el fondo de .progress-loader
  barColor?: string; // Color para la barra de progreso de .progress-loader
}

const ProgressLoaderContainer = (options: string[]): HTMLDivElement => {
  // Remover cualquier barra de progreso existente
  const existingProgressLoader = document.querySelector(".content-progress-loader");
  if (existingProgressLoader) {
    existingProgressLoader.remove();
  }

  // Convertir el array de strings a un objeto ProgressLoaderOptions
  const optionsObject: ProgressLoaderOptions = {
    backgroundColor: options[0],
    barColor: options[1],
  };

  console.log(optionsObject.backgroundColor);
  console.log(optionsObject.barColor);

  const contentProgressLoader = document.createElement("div");
  contentProgressLoader.className = "content-progress-loader";

  if (optionsObject.backgroundColor) {
    contentProgressLoader.style.backgroundColor = optionsObject.backgroundColor;
  }

  const progressLoader = document.createElement("div");
  progressLoader.className = "progress-loader";

  if (optionsObject.barColor) {
    progressLoader.style.backgroundColor = optionsObject.barColor;
  }

  contentProgressLoader.appendChild(progressLoader);
  document.body.appendChild(contentProgressLoader);

  // Añadir clase de finalización después de completar la animación
  progressLoader.addEventListener("animationend", () => {
    contentProgressLoader.classList.add("hidden-content-progress-loader");
    setTimeout(() => {
      contentProgressLoader.remove(); // Remover el elemento completo de la barra de progreso después de la transición
    }, 2000); // Esperar 2 segundos (2000 ms) antes de eliminar el elemento
  });

  return contentProgressLoader;
};

export { ProgressLoaderContainer };
