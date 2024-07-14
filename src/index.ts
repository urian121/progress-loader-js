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

const ProgressLoaderContainer = (options: ProgressLoaderOptions = {}): HTMLDivElement => {
  // Remover cualquier barra de progreso existente
  const existingProgressLoader = document.querySelector(".content-progress-loader");
  if (existingProgressLoader) {
    existingProgressLoader.remove();
  }

  // Merge opciones pasadas con opciones predeterminadas
  const finalOptions: ProgressLoaderOptions = {
    ...defaultOptions,
    ...options,
  };

  // Crear y configurar el contenedor principal de la barra de progreso
  const contentProgressLoader = document.createElement("div");
  contentProgressLoader.className = "content-progress-loader";
  contentProgressLoader.style.backgroundColor = finalOptions.backgroundColor || "";

  // Crear y configurar la barra de progreso
  const progressLoader = document.createElement("div");
  progressLoader.className = "progress-loader";
  progressLoader.style.backgroundColor = finalOptions.barColor || "";

  // Agregar la barra de progreso al contenedor principal y luego al cuerpo del documento
  contentProgressLoader.appendChild(progressLoader);
  document.body.appendChild(contentProgressLoader);

  progressLoader.addEventListener("animationend", () => {
    contentProgressLoader.classList.add("hidden-content-progress-loader");
    setTimeout(() => {
      contentProgressLoader.remove();
    }, 1000);
  });

  return contentProgressLoader;
};

export { ProgressLoaderContainer };
