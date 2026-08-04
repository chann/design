import { access, readFile } from "node:fs/promises";

import { catalogRoutes, readCatalog } from "./catalog-contract.mjs";

const root = new URL("../", import.meta.url);
const dist = new URL("../dist/", import.meta.url);
const catalog = await readCatalog();
const routes = catalogRoutes(catalog);

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
assert(routes.length === 84, "The complete catalog must publish 84 routes");

const siteData = await readFile(
  new URL("../src/data/site.ts", import.meta.url),
  "utf8",
);
const shellSource = await readFile(
  new URL("../src/components/site-shell.tsx", import.meta.url),
  "utf8",
);
const footerSignatureSource = await readFile(
  new URL("../src/components/footer-signature.tsx", import.meta.url),
  "utf8",
);
const cssSource = await readFile(
  new URL("../src/index.css", import.meta.url),
  "utf8",
);

for (const group of [
  "System",
  "Foundations",
  "Components",
  "Resources",
  "Legal",
]) {
  assert(
    shellSource.includes(`title: "${group}"`),
    `Footer sitemap group is missing: ${group}`,
  );
}
assert(
  shellSource.includes('aria-label="Comfort Design System home"'),
  "The footer must retain an accessible home link",
);
assert(
  footerSignatureSource.includes('aria-hidden="true"'),
  "The decorative footer signature must be hidden from assistive technology",
);
assert(
  footerSignatureSource.includes("IntersectionObserver"),
  "The footer signature must enter when it reaches the viewport",
);
const reducedMotionSource = cssSource.split(
  "@media (prefers-reduced-motion: reduce)",
)[1];
assert(
  reducedMotionSource?.includes(".footer-signature-text") &&
    reducedMotionSource.includes("transform: translateY(0)") &&
    reducedMotionSource.includes("opacity: 1"),
  "Reduced motion must show the footer signature without animation travel",
);
const internalLinks = [...siteData.matchAll(/href:\s*"(\/[^"]+)"/g)].map(
  ([, href]) => href,
);
function siteHref(path, basePath) {
  if (/^(https?:|#)/.test(path)) return path;
  const suffixIndex = path.search(/[?#]/);
  const pathname = suffixIndex === -1 ? path : path.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? "" : path.slice(suffixIndex);
  const base = basePath.replace(/\/$/, "");
  if (/\.[a-z]+$/i.test(pathname)) return `${base}${pathname}${suffix}`;
  const route = pathname === "/" ? `${base}/` : `${base}${pathname}/`;
  return `${route}${suffix}`;
}

for (const href of internalLinks.filter((href) => !href.endsWith(".md"))) {
  assert(
    routes.includes(href),
    `Navigation target is missing from routes.json: ${href}`,
  );
}

for (const foundation of catalog.foundations) {
  assert(
    routes.includes(`/foundations/${foundation.slug}`),
    `Foundation route is missing: ${foundation.slug}`,
  );
}

for (const component of catalog.components) {
  assert(
    routes.includes(`/components/${component.slug}`),
    `Component route is missing: ${component.slug}`,
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
  designSource.includes("한국어 [DESIGN.md](./DESIGN.md)가 규범 원문입니다."),
  "Korean DESIGN.md must declare itself as the normative source",
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
