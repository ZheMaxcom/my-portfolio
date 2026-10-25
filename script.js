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

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".more-toggle");
  const panel = document.getElementById("more-about");
  if (!button || !panel) return;

  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") !== "true";

    button.setAttribute("aria-expanded", String(open));
    button.textContent = open ? "Сховати" : "Детальніше про мене";
    panel.classList.toggle("is-open", open);
    panel.setAttribute("aria-hidden", String(!open));
  });
});
