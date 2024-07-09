import "./progressLoader.css";
import { ProgressLoaderOptions } from "../interfaces/index";

/**
 * Crea y muestra una barra de progreso con opciones personalizables.
 *
 * @param options Opciones para personalizar la barra de progreso.
 *                - `backgroundColor`: Color de fondo opcional para el contenedor de la barra de progreso.
 *                - `barColor`: Color opcional para la barra de progreso misma.
 * @returns El contenedor HTML creado que contiene la barra de progreso.
 */

const defaultOptions: ProgressLoaderOptions = {
  backgroundColor: "#ccc",
  barColor: "#f11946",
};

const ProgressLoaderContainer = (
  options: [string, string] = [defaultOptions.backgroundColor || "", defaultOptions.barColor || ""]
): HTMLDivElement => {
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
    }, 1000);
  });

  return contentProgressLoader;
};

export { ProgressLoaderContainer };
