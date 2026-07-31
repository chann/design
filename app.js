const root = document.documentElement;
const themeButton = document.querySelector("[data-theme-toggle]");
const themeModes = ["system", "light", "dark"];
const themeLabels = {
  system: "Theme: System",
  light: "Theme: Light",
  dark: "Theme: Dark",
};

function getStoredTheme() {
  try {
    const stored = localStorage.getItem("calm-precision-theme");
    return themeModes.includes(stored) ? stored : "system";
  } catch {
    return "system";
  }
}

function setTheme(mode, persist = true) {
  if (mode === "system") {
    delete root.dataset.theme;
  } else {
    root.dataset.theme = mode;
  }

  themeButton.textContent = themeLabels[mode];
  themeButton.setAttribute(
    "aria-label",
    `${themeLabels[mode]}. Activate to use ${
      themeLabels[
        themeModes[(themeModes.indexOf(mode) + 1) % themeModes.length]
      ]
    }.`,
  );
  themeButton.dataset.mode = mode;

  if (persist) {
    try {
      localStorage.setItem("calm-precision-theme", mode);
    } catch {}
  }
}

setTheme(getStoredTheme(), false);

themeButton.addEventListener("click", () => {
  const currentIndex = themeModes.indexOf(themeButton.dataset.mode);
  setTheme(themeModes[(currentIndex + 1) % themeModes.length]);
});

const revealItems = document.querySelectorAll(".reveal");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (reducedMotion.matches || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

const copyStatus = document.querySelector("[data-copy-status]");

async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const helper = document.createElement("textarea");
  helper.value = value;
  helper.setAttribute("readonly", "");
  helper.style.position = "fixed";
  helper.style.opacity = "0";
  document.body.append(helper);

  try {
    helper.select();
    if (!document.execCommand("copy")) {
      throw new Error("Browser copy command was rejected.");
    }
  } finally {
    helper.remove();
  }
}

document.querySelectorAll("[data-copy]").forEach((swatch) => {
  swatch.addEventListener("click", async () => {
    const value = swatch.dataset.copy;
    try {
      await copyText(value);
      copyStatus.textContent = `Copied ${value} to the clipboard.`;
    } catch {
      copyStatus.textContent = `Copy failed. Select ${value} manually.`;
    }
  });
});

const tabs = [...document.querySelectorAll('[role="tab"]')];

function activateTab(tab, focus = false) {
  tabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;

    const panel = document.getElementById(item.getAttribute("aria-controls"));
    panel.hidden = !selected;
  });

  if (focus) {
    tab.focus();
  }
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(tab));
  tab.addEventListener("keydown", (event) => {
    let nextIndex;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % tabs.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    activateTab(tabs[nextIndex], true);
  });
});

const dialog = document.querySelector("[data-spec-dialog]");
const dialogTrigger = document.querySelector("[data-dialog-open]");

dialogTrigger.addEventListener("click", () => {
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  }
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close("cancel");
  }
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
