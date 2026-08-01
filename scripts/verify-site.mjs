import { access, readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const dist = new URL("../dist/", import.meta.url);
const routes = JSON.parse(
  await readFile(new URL("../routes.json", import.meta.url), "utf8"),
);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(routes[0] === "/", "The route manifest must begin with the home page");
assert(
  new Set(routes).size === routes.length,
  "The route manifest contains duplicates",
);
assert(
  routes.every((route) => route.startsWith("/")),
  "Every route must be absolute",
);

const siteData = await readFile(
  new URL("../src/data/site.ts", import.meta.url),
  "utf8",
);
const internalLinks = [...siteData.matchAll(/href:\s*"(\/[^"]+)"/g)].map(
  ([, href]) => href,
);

for (const href of internalLinks) {
  assert(
    routes.includes(href),
    `Navigation target is missing from routes.json: ${href}`,
  );
}

for (const route of routes) {
  const builtPage = route === "/" ? "index.html" : `.${route}/index.html`;
  await access(new URL(builtPage, dist));
}

for (const file of [
  ".nojekyll",
  "404.html",
  "DESIGN.md",
  "DESIGN.ko.md",
  "DESIGN.cn.md",
  "DESIGN.jp.md",
  "favicon.png",
  "comfort-hero.webp",
]) {
  await access(new URL(file, dist));
}

const componentConfig = JSON.parse(
  await readFile(new URL("../components.json", import.meta.url), "utf8"),
);
assert(
  componentConfig.style === "radix-nova",
  "Unexpected shadcn style preset",
);
assert(
  componentConfig.iconLibrary === "lucide",
  "Unexpected shadcn icon library",
);

for (const component of [
  "alert",
  "badge",
  "button",
  "card",
  "checkbox",
  "dialog",
  "field",
  "input",
  "select",
  "skeleton",
  "switch",
  "table",
  "tabs",
]) {
  await access(
    new URL(`../src/components/ui/${component}.tsx`, import.meta.url),
  );
}

const builtHtml = await readFile(new URL("index.html", dist), "utf8");
assert(
  builtHtml.includes("/design/assets/"),
  "Production assets must retain the GitHub Pages base path",
);

console.log(
  `Verified ${routes.length} static routes, ${internalLinks.length} navigation targets, and the shadcn component contract.`,
);
