import "./loading.css";

function createProgressBar(options = {}) {
  // Crear el contenedor de la barra de progreso
  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";

  // Crear el valor de la barra de progreso
  const progressBarValue = document.createElement("div");
  progressBarValue.className = "progress-bar-value";

  // Aplicar opciones personalizadas si existen
  if (options.color) {
    progressBarValue.style.backgroundColor = options.color;
  }

  if (options.height) {
    progressBar.style.height = options.height;
  }

  if (options.width) {
    progressBar.style.width = options.width;
  }

  progressBar.appendChild(progressBarValue);
  document.body.appendChild(progressBar);

  return progressBar;
}

// Ejemplo de uso
const progressBar = createProgressBar({
  color: "rgb(5, 114, 206)",
  height: "4px",
  width: "100%",
});

export default createProgressBar;
