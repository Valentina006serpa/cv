(() => {
  const toggle = document.getElementById("language-toggle");
  const year = document.getElementById("year");
  let language = "es";

  year.textContent = new Date().getFullYear();

  toggle.addEventListener("click", () => {
    language = language === "es" ? "en" : "es";
    document.documentElement.lang = language;
    document.querySelectorAll("[data-es][data-en]").forEach((element) => {
      const value = element.dataset[language];
      if (value !== undefined) element.innerHTML = value;
    });
    toggle.textContent = language === "es" ? "EN" : "ES";
    toggle.setAttribute("aria-label", language === "es" ? "Switch to English" : "Cambiar a español");
  });
})();