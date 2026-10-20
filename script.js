const themeBtn = document.getElementById("theme-btn");

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

themeBtn.addEventListener("click", toggleTheme);
