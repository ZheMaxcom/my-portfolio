const STORAGE_KEY = "theme";

function getSavedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.classList.toggle("theme-dark", isDark);

  const button = document.querySelector(".theme-toggle");
  if (!button) return;

  button.textContent = isDark ? "☀️" : "🌙";
  button.setAttribute(
    "aria-label",
    isDark ? "Увімкнути світлу тему" : "Увімкнути темну тему"
  );
}

applyTheme(getSavedTheme());

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(getSavedTheme());

  const button = document.querySelector(".theme-toggle");
  if (!button) return;

  button.addEventListener("click", () => {
    const next = document.documentElement.classList.contains("theme-dark")
      ? "light"
      : "dark";

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* тема все одно перемкнеться на цій вкладці */
    }

    applyTheme(next);
  });
});
