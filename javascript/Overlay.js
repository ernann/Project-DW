window.addEventListener("load", () => {
  const overlay = document.getElementById("loading-overlay");
  const fill = overlay.querySelector(".progress-fill");
  const percentText = overlay.querySelector(".percent");

  let percent = 0;
  const interval = setInterval(() => {
    percent++;
    fill.style.width = percent + "%";
    percentText.textContent = percent + "%";

    if (percent >= 100) {
      clearInterval(interval);
      overlay.style.display = "none";
    }
  }, 30); // kecepatan loading (ms)
});
