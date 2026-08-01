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
    return themeModes.includes(stored) ? stored : "light";
  } catch {
    return "light";
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

  const themeColor = document.querySelector('meta[name="theme-color"]');
  const isDark =
    mode === "dark" ||
    (mode === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  themeColor.setAttribute("content", isDark ? "#0B0B0A" : "#F7F6F3");

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

const menuButton = document.querySelector("[data-menu-toggle]");
const mobileNavigation = document.querySelector(".mobile-navigation");
const mobileLinks = [...mobileNavigation.querySelectorAll("a")];

function setMenu(open, returnFocus = false) {
  root.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
  mobileNavigation.setAttribute("aria-hidden", String(!open));
  mobileLinks.forEach((link) => {
    link.tabIndex = open ? 0 : -1;
  });

  if (open) {
    window.setTimeout(() => mobileLinks[0].focus(), 50);
  } else if (returnFocus) {
    menuButton.focus();
  }
}

menuButton.addEventListener("click", () => {
  setMenu(!root.classList.contains("menu-open"));
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (!root.classList.contains("menu-open")) return;

  if (event.key === "Escape") {
    setMenu(false, true);
    return;
  }

  if (event.key !== "Tab") return;

  const first = menuButton;
  const last = mobileLinks.at(-1);

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900 && root.classList.contains("menu-open")) {
    setMenu(false);
  }
});

const navigationLinks = [
  ...document.querySelectorAll(
    '.primary-nav a[href^="#"], .mobile-navigation a[href^="#"]',
  ),
];
const navigationSections = [
  document.querySelector("#top"),
  ...navigationLinks.map((link) =>
    document.querySelector(link.getAttribute("href")),
  ),
].filter((section, index, sections) => sections.indexOf(section) === index);

function setCurrentSection(id) {
  navigationLinks.forEach((link) => {
    const current = link.getAttribute("href") === `#${id}`;
    if (current) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

if ("IntersectionObserver" in window) {
  const navigationObserver = new IntersectionObserver(
    (entries) => {
      const current = entries.find((entry) => entry.isIntersecting);
      if (current) setCurrentSection(current.target.id);
    },
    { rootMargin: "-22% 0px -62% 0px", threshold: 0 },
  );

  navigationSections.forEach((section) => navigationObserver.observe(section));
}

const heroMaterial = document.querySelector("[data-hero-material]");
const canTiltHero = window.matchMedia("(pointer: fine)");

if (
  canTiltHero.matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  heroMaterial.addEventListener("pointermove", (event) => {
    const bounds = heroMaterial.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 16;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 12;
    heroMaterial.style.setProperty("--hero-x", `${x.toFixed(2)}px`);
    heroMaterial.style.setProperty("--hero-y", `${y.toFixed(2)}px`);
  });

  heroMaterial.addEventListener("pointerleave", () => {
    heroMaterial.style.setProperty("--hero-x", "0px");
    heroMaterial.style.setProperty("--hero-y", "0px");
  });
}

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
          entry.target.animate(
            [
              { opacity: 0, transform: "translateY(12px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 600,
              easing: "cubic-bezier(0.16, 1, 0.3, 1)",
              fill: "both",
            },
          );
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
    try {
      await navigator.clipboard.writeText(value);
      return;
    } catch {
      // Clipboard permissions can be denied in embedded or automated browsers.
      // Continue to the selection-based fallback below.
    }
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
