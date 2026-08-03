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
assert(routes.includes("/privacy"), "The privacy route must be published");
assert(routes.includes("/terms"), "The terms route must be published");

const siteData = await readFile(
  new URL("../src/data/site.ts", import.meta.url),
  "utf8",
);
const internalLinks = [...siteData.matchAll(/href:\s*"(\/[^"]+)"/g)].map(
  ([, href]) => href,
);
const { siteHref } = await import("../src/data/site.ts");

for (const href of internalLinks.filter((href) => !href.endsWith(".md"))) {
  assert(
    routes.includes(href),
    `Navigation target is missing from routes.json: ${href}`,
  );
}

const designEditions = [
  "DESIGN.md",
  "DESIGN.en.md",
  "DESIGN.jp.md",
  "DESIGN.cn.md",
];

for (const edition of designEditions) {
  assert(
    siteData.includes(`href: "/${edition}"`),
    `The language menu is missing ${edition}`,
  );
}

const designSource = await readFile(
  new URL("../DESIGN.md", import.meta.url),
  "utf8",
);
assert(
  designSource.includes(
    "한국어 [DESIGN.md](./DESIGN.md)가 기본이자 최종 기준(SSOT)입니다.",
  ),
  "Korean DESIGN.md must declare itself as the authoritative default",
);

assert(
  siteHref("/principles#natural", "/design/") === "/design/principles/#natural",
  "Static paths must place the trailing slash before the fragment",
);
assert(
  siteHref("/components/button?density=compact", "/design/") ===
    "/design/components/button/?density=compact",
  "Static paths must place the trailing slash before the query",
);

for (const route of routes) {
  const builtPage = route === "/" ? "index.html" : `.${route}/index.html`;
  await access(new URL(builtPage, dist));
}

for (const file of [
  ".nojekyll",
  "404.html",
  ...designEditions,
  "favicon.png",
  "comfort-hero.webp",
  "third-party/Phosphor-LICENSE.txt",
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
assert(
  builtHtml.includes('rel="canonical" href="https://chann.github.io/design/"'),
  "The production home page must have a canonical URL",
);
assert(
  builtHtml.includes('name="twitter:card" content="summary_large_image"'),
  "The production home page must have Twitter card metadata",
);
assert(
  builtHtml.includes('name="robots" content="index,follow"'),
  "The production home page must allow indexing",
);

console.log(
  `Verified ${routes.length} static routes, ${internalLinks.length} navigation targets, and the shadcn component contract.`,
);
