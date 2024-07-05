import "./loading.css";

export function createProgressBarJs(options = {}) {
  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";

  const progressBarValue = document.createElement("div");
  progressBarValue.className = "progress-bar-value";

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

  // Añadir la animación solo una vez
  progressBarValue.style.animation = "indeterminateAnimation 1s linear";
  progressBarValue.addEventListener("animationend", () => {
    progressBarValue.style.animation = "";
  });

  return progressBar;
}
