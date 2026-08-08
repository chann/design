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
for (const route of [
  "/",
  "/components/button",
  "/ko/components/button",
  "/jp/foundations/color",
  "/cn/principles",
]) {
  assert(
    routes.includes(route),
    `Localized documentation route missing: ${route}`,
  );
}
assert(routes.length === 336, "The complete site must publish 336 routes");

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
const dropdownMenuSource = await readFile(
  new URL("../src/components/ui/dropdown-menu.tsx", import.meta.url),
  "utf8",
);
const homePageSource = await readFile(
  new URL("../src/pages/home-page.tsx", import.meta.url),
  "utf8",
);
const workbenchSource = await readFile(
  new URL("../src/components/theme-workbench.tsx", import.meta.url),
  "utf8",
);
const scrollScrubHookSource = await readFile(
  new URL("../src/hooks/use-scroll-scrub-progress.ts", import.meta.url),
  "utf8",
);
const englishHomeContent = await readFile(
  new URL("../src/content/home/en.ts", import.meta.url),
  "utf8",
);
const koreanHomeContent = await readFile(
  new URL("../src/content/home/ko.ts", import.meta.url),
  "utf8",
);
const homeContentTypes = await readFile(
  new URL("../src/content/home/types.ts", import.meta.url),
  "utf8",
);
const localizedHomeSources = await Promise.all(
  ["ko", "en", "jp", "cn"].map((locale) =>
    readFile(new URL(`../src/content/home/${locale}.ts`, import.meta.url), "utf8"),
  ),
);
const phosphorIconSource = await readFile(
  new URL("../src/components/phosphor-icon.tsx", import.meta.url),
  "utf8",
);
const cssSource = await readFile(
  new URL("../src/index.css", import.meta.url),
  "utf8",
);
const indexTemplate = await readFile(
  new URL("../index.html", import.meta.url),
  "utf8",
);
const readmeSource = await readFile(
  new URL("../README.md", import.meta.url),
  "utf8",
);

for (const primitive of [
  "@/components/ui/badge",
  "@/components/ui/button",
  "@/components/ui/card",
  "@/components/ui/field",
  "@/components/ui/input",
  "@/components/ui/separator",
  "@/components/ui/switch",
  "@/components/ui/tabs",
]) {
  assert(workbenchSource.includes(primitive), `ThemeWorkbench must use ${primitive}`);
}
assert(homePageSource.includes("<ThemeWorkbench"), "HomePage must render ThemeWorkbench");
assert(
  !homePageSource.includes(["Hero", "LetterGlitch"].join("")),
  "The abstract hero canvas must be removed",
);

for (const field of ["summary:", "principles:", "systemPreview:", "workbench:"]) {
  assert(homeContentTypes.includes(field), `HomeContent is missing ${field}`);
}
for (const field of [
  "proof:",
  "benefits:",
  "productProof:",
  "reviewed:",
  "verification:",
  "tokenFlow:",
]) {
  assert(!homeContentTypes.includes(field), `HomeContent still contains ${field}`);
}
for (const source of localizedHomeSources) {
  assert(!source.includes("productProof"), "Localized content still uses productProof");
  assert(
    !source.includes(["검증", "가능한"].join(" ")),
    "Public copy uses an exaggerated guarantee",
  );
}
const requiredDesignGuidance = [
  [
    "DESIGN.md",
    [
      "shadcn/ui 컴포넌트에서 시작합니다",
      "## Implementation Guide",
      "/ko/",
      "/jp/",
      "/cn/",
    ],
  ],
  [
    "DESIGN.en.md",
    [
      "Start with shadcn/ui components",
      "## Implementation Guide",
      "/ko/",
      "/jp/",
      "/cn/",
    ],
  ],
  [
    "DESIGN.jp.md",
    [
      "shadcn/uiコンポーネントから始めます",
      "## Implementation Guide",
      "/ko/",
      "/jp/",
      "/cn/",
    ],
  ],
  [
    "DESIGN.cn.md",
    [
      "从 shadcn/ui 组件开始",
      "## Implementation Guide",
      "/ko/",
      "/jp/",
      "/cn/",
    ],
  ],
];

for (const [file, requiredPhrases] of requiredDesignGuidance) {
  const source = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
  for (const phrase of requiredPhrases) {
    assert(source.includes(phrase), `${file} is missing: ${phrase}`);
  }
}

const sharedDesignTokens = [
  'canvas: "#F7F7F2"',
  'surface: "#FFFFFF"',
  'surface-soft: "#EFEFE9"',
  'surface-raised: "#FFFFFF"',
  'ink: "#171714"',
  'body: "#46463F"',
  'muted: "#6F7068"',
  'hairline: "#D8D8D0"',
  'dark-canvas: "#131209"',
  'dark-surface: "#1C1B16"',
  'dark-surface-soft: "#24231D"',
  'dark-surface-raised: "#2B2922"',
  'dark-ink: "#F4F4EF"',
  'dark-body: "#B8B6AC"',
  'dark-muted: "#8E8C82"',
  'dark-hairline: "#3B3931"',
  'primary: "#0066CC"',
  'dark-primary: "#78B7FF"',
  "fontSize: 72px",
  "lineHeight: 0.98",
  "letterSpacing: -0.045em",
  "section: 96px",
];

for (const file of [
  "DESIGN.md",
  "DESIGN.en.md",
  "DESIGN.jp.md",
  "DESIGN.cn.md",
]) {
  const source = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
  for (const token of sharedDesignTokens) {
    assert(
      source.includes(token),
      `${file} is missing the shared token: ${token}`,
    );
  }
}

for (const token of [
  "--background: #f7f7f2",
  "--foreground: #171714",
  "--card: #ffffff",
  "--secondary: #efefe9",
  "--muted-foreground: #6f7068",
  "--border: #d8d8d0",
  "--background: #131209",
  "--foreground: #f4f4ef",
  "--card: #1c1b16",
  "--secondary: #24231d",
  "--muted-foreground: #8e8c82",
  "--border: #3b3931",
]) {
  assert(
    cssSource.includes(token),
    `CSS is missing the shared token: ${token}`,
  );
}

assert(
  readmeSource.includes("336") &&
    readmeSource.includes("Start with shadcn/ui components"),
  "README must describe the shadcn theme workflow and 336-route build",
);

assert(
  indexTemplate.includes('lang="en"') &&
    indexTemplate.includes("shadcn/ui") &&
    indexTemplate.includes("Comfort DESIGN.md"),
  "Static metadata must use the English Comfort DESIGN.md positioning",
);
assert(
  !indexTemplate.includes("default source of truth") &&
    !readmeSource.includes("SSOT"),
  "Public metadata and documentation must avoid internal source-of-truth jargon",
);

for (const group of ["System", "Foundations", "Resources", "Legal"]) {
  assert(
    englishHomeContent.includes(`: "${group}"`),
    `Footer sitemap group is missing: ${group}`,
  );
}
assert(
  !shellSource.includes('kind: "components"') &&
    !shellSource.includes("links: componentCatalog.map"),
  "The footer must link to the component catalog without listing every component",
);
assert(
  dropdownMenuSource.includes("duration-150") &&
    dropdownMenuSource.includes("data-closed:duration-100") &&
    !dropdownMenuSource.includes("duration-700"),
  "Header dropdowns must use short open and close transitions",
);
assert(
  shellSource.includes("aria-label={homeLabel}") &&
    englishHomeContent.includes('homeLabel: "Comfort DESIGN.md home"'),
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
assert(
  !homePageSource.includes("Ship interfaces people trust") &&
    !homePageSource.includes("What is DESIGN.md?"),
  "Homepage prose must live outside the presentation component",
);
assert(
  englishHomeContent.includes("shadcn/ui") &&
    englishHomeContent.includes("DESIGN.md"),
  "English homepage content must explain the shadcn and DESIGN.md model",
);
assert(
  koreanHomeContent.includes(
    "shadcn/ui로 시작하고, 제품의 디자인을 완성하세요.",
  ),
  "Korean homepage must use the requested theme-focused headline",
);
assert(
  koreanHomeContent.includes(
    "익숙한 사용법은 지키고, 제품의 인상은 분명하게 만듭니다.",
  ) &&
    koreanHomeContent.includes(
      "접근 가능한 컴포넌트는 그대로 두고, 색·글꼴·간격·상태·움직임을 DESIGN.md에 맞춰 다듬습니다.",
    ) &&
    !koreanHomeContent.includes(
      "접근 가능한 컴포넌트는 지키고, 일반적인 결정은 바꾸세요.",
    ) &&
    !koreanHomeContent.includes("접근 가능한 shadcn/ui를 그대로 활용하고"),
  "Korean homepage must use the revised component and theme copy",
);
assert(
  homePageSource.includes("data-scroll-tagline") &&
    homePageSource.includes("data-scroll-progress") &&
    homePageSource.includes(
      "calculateWordOpacity(progress, index, segments.length)",
    ),
  "Homepage tagline must highlight each segment from viewport scroll progress",
);
assert(
  scrollScrubHookSource.includes(
    'window.addEventListener("scroll", scheduleMeasure, { passive: true })',
  ) &&
    scrollScrubHookSource.includes(
      'window.addEventListener("resize", scheduleMeasure)',
    ) &&
    scrollScrubHookSource.includes("requestAnimationFrame") &&
    scrollScrubHookSource.includes("cancelAnimationFrame") &&
    scrollScrubHookSource.includes("prefers-reduced-motion: reduce"),
  "Scroll-linked highlighting must be frame-limited, responsive, and motion-safe",
);
assert(
  homePageSource.includes('from "lucide-react"') &&
    homePageSource.includes("<ArrowRightIcon") &&
    !phosphorIconSource.includes("M245.66,74.34"),
  "Homepage arrows must use Lucide and omit the previous flow-arrow path",
);
assert(
  cssSource.includes(".theme-workbench") &&
    cssSource.includes(".theme-token-row") &&
    cssSource.includes(".theme-token-swatch"),
  "Theme Workbench layout styles must be present",
);

for (const marker of [
  "summary-row",
  "principles-list",
  "workflow-list",
  "system-preview",
  "<ComponentPreview",
  "<Accordion",
  "<AccordionItem",
  "<Separator",
]) {
  assert(homePageSource.includes(marker), `Homepage is missing ${marker}`);
}
for (const retired of [
  "proof-strip",
  "benefit-grid",
  "benefit-item-featured",
  "implementation-proof",
]) {
  assert(!homePageSource.includes(retired), `Homepage still uses ${retired}`);
}
assert(
  homePageSource.includes('typeof IntersectionObserver === "undefined"'),
  "Landing sections need a no-observer fallback",
);
assert(
  footerSignatureSource.includes(
    'typeof IntersectionObserver === "undefined"',
  ),
  "Footer signature needs a no-observer fallback",
);
assert(
  cssSource.includes("480ms") && !cssSource.includes("filter: blur"),
  "Landing motion must use the short no-blur behavior",
);
assert(
  /\.mobile-menu-button\s*\{[^}]*overflow:\s*hidden/s.test(cssSource),
  "The mobile menu button must contain expanded accessible labels",
);
assert(
  homePageSource.includes("<li key={step.number}>") &&
    !homePageSource.includes("<Fragment key={step.number}>"),
  "Workflow separators must remain inside valid list items",
);
assert(
  footerSignatureSource.includes("--footer-signature-index") &&
    footerSignatureSource.includes("footer-signature-letter"),
  "The footer signature must reveal its letters in sequence",
);
assert(
  /\.footer-signature\s*\{[^}]*justify-content:\s*center/s.test(cssSource) &&
    /\.footer-signature-text\s*\{[^}]*text-align:\s*center/s.test(cssSource),
  "The footer signature must remain centered",
);
const reducedMotionSource = cssSource.split(
  "@media (prefers-reduced-motion: reduce)",
)[1];
assert(
  /\.tagline-word\s*\{[^}]*will-change:\s*opacity/s.test(cssSource) &&
    reducedMotionSource?.includes(".tagline-word") &&
    reducedMotionSource.includes("opacity: 1 !important"),
  "Tagline highlighting must retain an immediate reduced-motion state",
);
assert(
  reducedMotionSource?.includes(".footer-signature-letter") &&
    reducedMotionSource.includes("transform: none") &&
    reducedMotionSource.includes("opacity: 1"),
  "Reduced motion must show the footer signature without animation travel",
);
assert(
  /body\s*\{[^}]*overflow-wrap:\s*anywhere/s.test(cssSource),
  "Keep-all text must retain an emergency wrap for long localized strings",
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
  designSource.includes("shadcn/ui 컴포넌트에서 시작합니다."),
  "Korean DESIGN.md must include the theme-focused positioning",
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

const localizedHomes = [
  ["index.html", 'lang="en"', "/design/"],
  ["ko/index.html", 'lang="ko"', "/design/ko/"],
  ["jp/index.html", 'lang="ja"', "/design/jp/"],
  ["cn/index.html", 'lang="zh-CN"', "/design/cn/"],
];

for (const [file, lang, canonicalPath] of localizedHomes) {
  const html = await readFile(new URL(file, dist), "utf8");
  assert(html.includes(lang), `${file} has the wrong language`);
  assert(
    html.includes(`href="https://chann.github.io${canonicalPath}"`),
    `${file} has the wrong canonical`,
  );
  assert(
    html.includes('hreflang="x-default"'),
    `${file} must publish homepage alternates`,
  );
}

for (const [file, lang, canonicalPath] of [
  ["principles/index.html", 'lang="en"', "/design/principles/"],
  ["ko/principles/index.html", 'lang="ko"', "/design/ko/principles/"],
  ["jp/principles/index.html", 'lang="ja"', "/design/jp/principles/"],
  ["cn/principles/index.html", 'lang="zh-CN"', "/design/cn/principles/"],
]) {
  const html = await readFile(new URL(file, dist), "utf8");
  assert(html.includes(lang), `${file} has the wrong language`);
  assert(
    html.includes(`href="https://chann.github.io${canonicalPath}"`),
    `${file} has the wrong canonical`,
  );
  assert(
    html.includes('hreflang="x-default"'),
    `${file} must publish localized documentation alternates`,
  );
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
  /<link(?=[^>]*rel="canonical")(?=[^>]*href="https:\/\/chann\.github\.io\/design\/")[^>]*>/s.test(
    builtHtml,
  ),
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
  `Verified ${routes.length} static routes, ${internalLinks.length} navigation targets, and the shadcn theme guidance.`,
);
