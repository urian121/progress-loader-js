import "./loading.css";

const createProgressBarJS = (options = {}) => {
  const progressBarJS = document.createElement("div");
  progressBarJS.className = "progress-bar";

  const progressBarValue = document.createElement("div");
  progressBarValue.className = "progress-bar-value";

  if (options.color) {
    progressBarValue.style.backgroundColor = options.color;
  }

  progressBarJS.appendChild(progressBarValue);
  document.body.appendChild(progressBarJS);

  // Añadir la animación solo una vez
  progressBarValue.style.animation = "indeterminateAnimation 1s linear";
  progressBarValue.addEventListener("animationend", () => {
    progressBarValue.style.animation = "";
  });

  return progressBarJS;
};

export { createProgressBarJS };
