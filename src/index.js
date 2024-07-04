import "./loading.css";

const progressBar = document.createElement("div");
progressBar.className = "progress-bar";

progressBar.innerHTML = `
    <div class="progress-bar-value"></div>`;
document.body.appendChild(progressBar);
