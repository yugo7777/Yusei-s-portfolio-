document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => links.classList.remove("open"));
    });
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  const workCards = document.querySelectorAll(".work-card");

  if (filterButtons.length && workCards.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;
        workCards.forEach((card) => {
          const match = filter === "all" || card.dataset.genre === filter;
          card.classList.toggle("is-hidden", !match);
        });
      });
    });
  }

  const langButtons = document.querySelectorAll("[data-lang-btn]");

  if (langButtons.length) {
    const applyLang = (lang) => {
      document.documentElement.setAttribute("data-lang", lang);
      document.documentElement.setAttribute("lang", lang);
      langButtons.forEach((b) => b.classList.toggle("active", b.dataset.langBtn === lang));

      const title = document.body.getAttribute(`data-title-${lang}`);
      if (title) document.title = title;
    };

    langButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.langBtn;
        localStorage.setItem("lang", lang);
        applyLang(lang);
      });
    });

    applyLang(document.documentElement.getAttribute("data-lang") || "ja");
  }
});
