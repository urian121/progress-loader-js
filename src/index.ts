import "./progressLoader.css";
import { ProgressLoaderOptions } from "../interfaces/index";

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

  // Crear y configurar el contenedor principal de la barra de progreso
  const contentProgressLoader = document.createElement("div");
  contentProgressLoader.className = "content-progress-loader";

  // Aplicar color de fondo si está definido en las opciones
  if (optionsObject.backgroundColor) {
    contentProgressLoader.style.backgroundColor = optionsObject.backgroundColor;
  }

  // Crear y configurar la barra de progreso
  const progressLoader = document.createElement("div");
  progressLoader.className = "progress-loader";

  // Aplicar color de la barra si está definido en las opciones
  if (optionsObject.barColor) {
    progressLoader.style.backgroundColor = optionsObject.barColor;
  }

  contentProgressLoader.appendChild(progressLoader);
  document.body.appendChild(contentProgressLoader);

  // Agregar la barra de progreso al contenedor principal y luego al cuerpo del documento
  progressLoader.addEventListener("animationend", () => {
    contentProgressLoader.classList.add("hidden-content-progress-loader");
    setTimeout(() => {
      contentProgressLoader.remove(); // Remover el elemento completo de la barra de progreso después de la transición
    }, 2000); // Esperar 2 segundos (2000 ms) antes de eliminar el elemento
  });

  return contentProgressLoader;
};

export { ProgressLoaderContainer };
