# Homepage i18n and shadcn/DESIGN.md Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish a Korean-default homepage with English, Japanese, and Chinese URL editions that explains shadcn/ui as the component base and `DESIGN.md` as the product customization contract, while simplifying the footer and accelerating header dropdowns.

**Architecture:** Move all homepage and localized shell copy into typed locale modules under `src/content/home/`, then make the router, static generator, and React metadata consume those same modules. Keep the 84 existing documentation routes unprefixed, add only three localized homepage routes, and preserve the current documentation shell defaults. Use the repository's existing shadcn/Radix components and static GitHub Pages build.

**Tech Stack:** Node.js 22, Vite 8, React 19, TypeScript 6 strict mode, Tailwind CSS 4, repository-owned shadcn components, Radix UI, static GitHub Pages output, agent-browser.

## Global Constraints

- `/` MUST render Korean; `/en/`, `/jp/`, and `/cn/` MUST render English, Japanese, and Simplified Chinese.
- The URL path is the locale authority; do not redirect from browser language or local storage.
- Only the homepage and its header/footer shell are localized; the existing 84 documentation routes remain unprefixed and English.
- Homepage text MUST live in locale content modules so copy edits do not require JSX edits.
- shadcn/ui is the accessible component-source baseline; `DESIGN.md` customizes semantic tokens, behavior, state, motion, content, accessibility, and verification.
- Korean `DESIGN.md` remains the normative original; the en, jp, and cn files preserve heading order, token keys, inventory, and requirement strength.
- Remove the footer's 63-item component directory, but retain the component catalog destination in the compact System group.
- Utility dropdowns target approximately 140ms open and 100ms close motion, with reduced-motion parity.
- Natural-language text retains `word-break: keep-all`; code, commands, paths, URLs, and tokens retain safe wrapping or scrolling.
- Preserve light primary `#0066CC`, dark primary `#78B7FF`, the floating header gap, footer signature animation, and left/right rail treatment.
- Stage explicit paths only, never force-push, and push each verified Conventional Commit before beginning the next task.
- Repository `AGENTS.md` requires sequential main-thread execution; use `executing-plans`, not subagent dispatch.

---

## File responsibility map

- `src/content/home/types.ts`: locale, metadata, shell, homepage section, FAQ, and footer copy contracts.
- `src/content/home/en.ts`: complete English homepage and shell copy, initially extracted from JSX and revised to the shadcn + `DESIGN.md` model.
- `src/content/home/ko.ts`: normative Korean homepage and shell copy.
- `src/content/home/jp.ts`: natural Japanese homepage and shell copy using `ja` as the HTML language tag.
- `src/content/home/cn.ts`: natural Simplified Chinese homepage and shell copy using `zh-CN` as the HTML language tag.
- `src/content/home/index.ts`: locale registry plus route-to-locale and locale-to-route helpers.
- `src/pages/home-page.tsx`: locale-neutral homepage presentation; it consumes `HomeContent` and contains no user-facing prose.
- `src/components/site-shell.tsx`: localized homepage header/footer props, compact footer groups, and documentation-page English fallbacks.
- `src/components/footer-signature.tsx`: accepts localized assistive text while preserving the decorative wordmark.
- `src/App.tsx`: localized homepage routing, HTML language, canonical, alternate links, and runtime metadata.
- `src/data/site.ts`: stable product paths, documentation navigation, and DESIGN edition data; no homepage prose.
- `scripts/catalog-contract.mjs`: 87-route manifest with three localized homepage paths.
- `scripts/generate-routes.mjs`: locale-aware static HTML copies using metadata imported from the locale modules.
- `scripts/verify-site.mjs`: regression checks for content separation, routes, metadata, footer size, menu speed, and document alignment.
- `src/components/ui/dropdown-menu.tsx`: fast shared Radix dropdown entrance/exit classes.
- `index.html`: Korean root metadata and language alternates used as the default Vite entry.
- `DESIGN.md`, `DESIGN.en.md`, `DESIGN.jp.md`, `DESIGN.cn.md`: synchronized product, layout, localization, motion, and implementation contracts.
- `README.md`: repository-facing explanation and 87-route validation wording.

---

### Task 1: Separate homepage copy from presentation

**Files:**

- Create: `src/content/home/types.ts`
- Create: `src/content/home/en.ts`
- Create: `src/content/home/index.ts`
- Modify: `src/pages/home-page.tsx`
- Modify: `src/components/site-shell.tsx`
- Modify: `src/components/footer-signature.tsx`
- Modify: `src/App.tsx`
- Modify: `scripts/verify-site.mjs`

**Interfaces:**

- Produces: `HomeLocale`, `HomeContent`, `homeContents`, `homeLocaleFromRoute(route)`, `homePathForLocale(locale)`.
- Produces: `<HomePage currentPath content />`, `<SiteHeader currentPath homeContent? />`, and `<SiteFooter homeContent? />`.
- Preserves: the current English homepage at `/` until Task 2 switches the default to Korean.

- [ ] **Step 1: Add failing source-separation assertions**

Read `src/pages/home-page.tsx` and the new content paths in `scripts/verify-site.mjs`, then add assertions equivalent to:

```js
const homePageSource = await readFile(
  new URL("../src/pages/home-page.tsx", import.meta.url),
  "utf8",
);
const englishHomeContent = await readFile(
  new URL("../src/content/home/en.ts", import.meta.url),
  "utf8",
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
```

- [ ] **Step 2: Run the verifier and confirm the new contract fails**

Run: `npm run verify:site`

Expected: FAIL because `src/content/home/en.ts` does not exist or because the old JSX still contains homepage prose.

- [ ] **Step 3: Define the typed content boundary**

Create `src/content/home/types.ts` with these stable interfaces:

```ts
export const homeLocales = ["ko", "en", "jp", "cn"] as const;
export type HomeLocale = (typeof homeLocales)[number];

export type HomeContent = {
  locale: HomeLocale;
  languageTag: "ko" | "en" | "ja" | "zh-CN";
  path: "/" | "/en" | "/jp" | "/cn";
  metadata: { title: string; description: string };
  shell: {
    skipToContent: string;
    homeLabel: string;
    primaryNavigationLabel: string;
    mobileNavigationTitle: string;
    mobileNavigationDescription: string;
    openNavigation: string;
    closeNavigation: string;
    nav: { principles: string; foundations: string; components: string };
    language: string;
    languageMenuLabel: string;
    theme: string;
    appearance: string;
    themes: { light: string; dark: string; system: string };
  };
  hero: {
    eyebrow: string;
    accessibleTitle: string;
    titleLines: readonly string[];
    description: string;
    primaryAction: string;
    languageNavigationLabel: string;
  };
  proof: {
    accessibleLabel: string;
    items: readonly { value: string; label: string }[];
  };
  tagline: { accessibleLabel: string; segments: readonly string[] };
  benefits: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly { title: string; description: string }[];
    tokenFlow: readonly [string, string, string];
  };
  workflow: {
    eyebrow: string;
    title: string;
    description: string;
    steps: readonly { number: string; title: string; description: string }[];
  };
  productProof: {
    eyebrow: string;
    title: string;
    description: string;
    action: string;
    panelTitle: string;
    reviewed: string;
    metrics: readonly { value: string; label: string }[];
    verification: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly { question: string; answer: string }[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    action: string;
  };
  footer: {
    description: string;
    navigationLabel: string;
    groups: {
      system: string;
      foundations: string;
      resources: string;
      legal: string;
    };
    links: {
      overview: string;
      principles: string;
      foundationCatalog: string;
      componentCatalog: string;
      github: string;
      privacy: string;
      terms: string;
    };
    signatureLabel: string;
  };
};
```

- [ ] **Step 4: Create complete English content**

Create `src/content/home/en.ts` as a `satisfies HomeContent` object. Move every visible English sentence from `HomePage`, homepage `SiteHeader`, and `SiteFooter` into the matching field. Replace the old “framework optional” story with this exact core copy:

```ts
const en = {
  locale: "en",
  languageTag: "en",
  path: "/en",
  metadata: {
    title: "Comfort Design System | Customize shadcn with DESIGN.md",
    description:
      "Start with accessible shadcn/ui components, then use DESIGN.md to define your product’s tokens, states, motion, content, and verification rules.",
  },
  hero: {
    eyebrow: "shadcn/ui + DESIGN.md",
    accessibleTitle: "Start with shadcn. Make it yours with DESIGN.md.",
    titleLines: ["Start with shadcn.", "Make it yours", "with DESIGN.md."],
    description:
      "Use shadcn/ui as the accessible component baseline, then shape every semantic token, state, interaction, and content rule around your product.",
    primaryAction: "Read DESIGN.md",
    languageNavigationLabel: "Homepage languages",
  },
  cta: {
    eyebrow: "A clear contract for every interface decision",
    title: "Own the components. Define the system in DESIGN.md.",
    description:
      "Choose the shadcn components your product needs, then apply one shared contract for brand, behavior, accessibility, and release checks.",
    action: "Read DESIGN.md",
  },
} satisfies Pick<
  HomeContent,
  "locale" | "languageTag" | "path" | "metadata" | "hero" | "cta"
>;
```

Expand this into the full `HomeContent` object using the interface from Step 3. Keep the existing 4/15/63 proof values, replace stale product-proof values with `87 static routes`, `15 semantic Foundations`, `63 component references`, and `4 aligned DESIGN.md editions`, and remove the install/account FAQ and CTA claims. The FAQ MUST include the relationship between shadcn/ui and `DESIGN.md`, ownership of copied component source, brand customization, coding-agent use, accessibility, and language alignment.

- [ ] **Step 5: Add registry and route helpers**

Create `src/content/home/index.ts`:

```ts
import en from "./en";
import { homeLocales, type HomeContent, type HomeLocale } from "./types";

export { homeLocales, type HomeContent, type HomeLocale } from "./types";

export const homeContents = { en } as const;

export function homeLocaleFromRoute(route: string): HomeLocale | null {
  if (route === "/") return "en";
  return null;
}

export function homePathForLocale(locale: HomeLocale) {
  return locale === "ko" ? "/" : `/${locale}`;
}
```

The temporary English root is intentional for this behavior-preserving task. Task 2 replaces the registry and route helper with all four locales.

- [ ] **Step 6: Make the homepage consume `HomeContent`**

Change the component signature and all mapped text:

```tsx
export function HomePage({
  currentPath,
  content,
}: {
  currentPath: string;
  content: HomeContent;
}) {
  // Generate FAQPage JSON-LD from content.faq.items.
}
```

Keep benefit icons in a presentation-only tuple and pair them by index:

```ts
const benefitIcons: readonly PhosphorIconName[] = [
  "brackets-curly",
  "circles-three-plus",
  "check-circle",
  "stack",
];
```

Pass `content.tagline` into `TaglineReveal`, map `content.hero.titleLines`, and use content fields for every heading, paragraph, link label, accessible label, proof item, workflow step, panel metric, FAQ item, and CTA.

- [ ] **Step 7: Make the shell accept localized content without changing docs**

Add optional props and English fallbacks:

```tsx
export function SiteHeader({
  currentPath,
  homeContent,
}: {
  currentPath: string;
  homeContent?: HomeContent;
}) {
  /* translated homepage shell; existing English docs fallback */
}

export function SiteFooter({ homeContent }: { homeContent?: HomeContent }) {
  /* translated homepage footer; existing English docs fallback */
}
```

Change `FooterSignature` to accept `accessibleLabel = "Comfort Design System, documented in DESIGN.md"` and pass `content.footer.signatureLabel` from localized homepages. Keep the visible `Comfort / DESIGN.md` string unchanged.

- [ ] **Step 8: Wire the behavior-preserving English content in `App`**

Import `en` or `homeContents.en`, and render:

```tsx
if (route === "/") {
  return <HomePage currentPath={route} content={homeContents.en} />;
}
```

- [ ] **Step 9: Run the focused and full checkpoint checks**

Run:

```bash
npm run check
npm run lint
npm run build
git diff --check
```

Expected: all pass; `/` remains usable in English; homepage prose is absent from `home-page.tsx`.

- [ ] **Step 10: Commit and push the content boundary**

```bash
git add scripts/verify-site.mjs src/App.tsx src/components/footer-signature.tsx src/components/site-shell.tsx src/content/home/types.ts src/content/home/en.ts src/content/home/index.ts src/pages/home-page.tsx
git commit -m "refactor(home): separate localized copy from presentation"
git push origin main
git rev-list --left-right --count HEAD...@{u}
```

Expected parity: `0 0`.

---

### Task 2: Publish Korean-default localized homepage routes

**Files:**

- Create: `src/content/home/ko.ts`
- Create: `src/content/home/jp.ts`
- Create: `src/content/home/cn.ts`
- Modify: `src/content/home/index.ts`
- Modify: `src/App.tsx`
- Modify: `src/components/site-shell.tsx`
- Modify: `src/pages/home-page.tsx`
- Modify: `scripts/catalog-contract.mjs`
- Modify: `scripts/generate-routes.mjs`
- Modify: `scripts/verify-site.mjs`
- Modify: `index.html`

**Interfaces:**

- Consumes: `HomeContent`, `homeContents`, `homeLocaleFromRoute`, and `homePathForLocale` from Task 1.
- Produces: `/`, `/en/`, `/jp/`, `/cn/` with localized body, shell, metadata, JSON-LD, canonical, and `hreflang`.
- Produces: an 87-entry route manifest.

- [ ] **Step 1: Add failing locale-route and metadata checks**

Extend `scripts/verify-site.mjs`:

```js
for (const route of ["/", "/en", "/jp", "/cn"]) {
  assert(routes.includes(route), `Localized homepage route missing: ${route}`);
}
assert(routes.length === 87, "The complete site must publish 87 routes");

const localizedHomes = [
  ["index.html", 'lang="ko"', "/design/"],
  ["en/index.html", 'lang="en"', "/design/en/"],
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
```

- [ ] **Step 2: Run the production build and verify the new checks fail**

Run: `npm run build`

Expected: FAIL because `/en`, `/jp`, `/cn` are absent and the root HTML still declares English.

- [ ] **Step 3: Write the three complete translations**

Create `ko.ts`, `jp.ts`, and `cn.ts`, each satisfying `HomeContent`. Use these exact metadata and hero contracts, then translate every remaining Task 1 field with the same meaning and array sizes:

```ts
// ko.ts
metadata: {
  title: "Comfort Design System | shadcn을 DESIGN.md로 커스터마이징",
  description:
    "접근 가능한 shadcn/ui 컴포넌트로 시작하고 DESIGN.md로 제품의 토큰, 상태, 모션, 콘텐츠, 검증 규칙을 정의하세요.",
},
hero: {
  eyebrow: "shadcn/ui + DESIGN.md",
  accessibleTitle: "shadcn으로 시작하고 DESIGN.md로 제품답게 만드세요.",
  titleLines: ["shadcn으로 시작하고", "DESIGN.md로", "제품답게 만드세요."],
  description:
    "shadcn/ui를 접근 가능한 컴포넌트 기반으로 삼고, 시맨틱 토큰부터 상태, 상호작용, 콘텐츠 규칙까지 제품에 맞게 설계하세요.",
  primaryAction: "DESIGN.md 읽기",
  languageNavigationLabel: "홈페이지 언어",
},

// jp.ts
metadata: {
  title: "Comfort Design System | shadcnをDESIGN.mdでカスタマイズ",
  description:
    "アクセシブルなshadcn/uiコンポーネントから始め、DESIGN.mdでプロダクトのトークン、状態、モーション、コンテンツ、検証ルールを定義します。",
},
hero: {
  eyebrow: "shadcn/ui + DESIGN.md",
  accessibleTitle: "shadcnから始め、DESIGN.mdでプロダクトらしく。",
  titleLines: ["shadcnから始め、", "DESIGN.mdで", "プロダクトらしく。"],
  description:
    "shadcn/uiをアクセシブルなコンポーネント基盤にし、セマンティックトークンから状態、インタラクション、コンテンツルールまでプロダクトに合わせて設計します。",
  primaryAction: "DESIGN.mdを読む",
  languageNavigationLabel: "ホームページの言語",
},

// cn.ts
metadata: {
  title: "Comfort Design System | 用DESIGN.md定制shadcn",
  description:
    "从无障碍的shadcn/ui组件开始，再用DESIGN.md定义产品的令牌、状态、动效、内容和验证规则。",
},
hero: {
  eyebrow: "shadcn/ui + DESIGN.md",
  accessibleTitle: "从shadcn开始，用DESIGN.md塑造你的产品。",
  titleLines: ["从shadcn开始，", "用DESIGN.md", "塑造你的产品。"],
  description:
    "以shadcn/ui作为无障碍组件基础，再根据产品定义语义令牌、状态、交互和内容规则。",
  primaryAction: "阅读DESIGN.md",
  languageNavigationLabel: "主页语言",
},
```

The Korean FAQ MUST call shadcn/ui “기본 컴포넌트 소스” and `DESIGN.md` “제품별 디자인 계약.” Japanese should use “基本コンポーネントソース” and “プロダクト固有のデザイン契約.” Chinese should use “基础组件源码” and “产品级设计契约.” Do not add install/account copy.

- [ ] **Step 4: Complete the locale registry and route helpers**

Replace the temporary Task 1 registry:

```ts
import cn from "./cn";
import en from "./en";
import jp from "./jp";
import ko from "./ko";

export const homeContents = { ko, en, jp, cn } as const satisfies Record<
  HomeLocale,
  HomeContent
>;

const localeByRoute = new Map(
  Object.values(homeContents).map((content) => [content.path, content.locale]),
);

export function homeLocaleFromRoute(route: string): HomeLocale | null {
  return localeByRoute.get(route) ?? null;
}

export function homePathForLocale(locale: HomeLocale) {
  return homeContents[locale].path;
}
```

- [ ] **Step 5: Render and link the active homepage locale**

In `App`, resolve `const homeLocale = homeLocaleFromRoute(route)` before documentation routing and render `homeContents[homeLocale]`. In the homepage language menu, map `homeLocales` to `siteHref(homePathForLocale(locale))`, set `hrefLang` to the target content's language tag, and show localized language names: `한국어`, `English`, `日本語`, `简体中文`.

The Brand link on localized homepages MUST point to the current language home. Documentation pages continue using `/`.

- [ ] **Step 6: Add locale-aware runtime metadata**

Extend `RouteMetadata` with `languageTag` and optional `alternates`. For homepage routes, use `HomeContent.metadata`. Set `document.documentElement.lang`, canonical, Open Graph, Twitter, and alternate links. Use stable IDs so route changes update instead of duplicate:

```ts
function syncHomeAlternates(alternates: readonly LocaleAlternate[]) {
  document
    .querySelectorAll('link[data-home-alternate="true"]')
    .forEach((link) => link.remove());
  for (const alternate of alternates) {
    const link = document.createElement("link");
    link.rel = "alternate";
    link.hreflang = alternate.hrefLang;
    link.href = new URL(siteHref(alternate.path, "/design/"), SITE_ORIGIN).href;
    link.dataset.homeAlternate = "true";
    document.head.append(link);
  }
}
```

Include `x-default` pointing to `/design/`.

- [ ] **Step 7: Generate localized static entry HTML from the content modules**

Add `/en`, `/jp`, `/cn` immediately after `/` in `catalogRoutes`. In `generate-routes.mjs`, import the four locale modules directly by `.ts` path; Node 22 strips their erasable TypeScript syntax. Implement:

```js
const siteOrigin = "https://chann.github.io";
const siteBase = "/design";

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function homeUrl(path) {
  return `${siteOrigin}${siteBase}${path === "/" ? "/" : `${path}/`}`;
}

function replaceAttribute(html, marker, attribute, value) {
  const pattern = new RegExp(
    `(<[^>]+data-home-meta="${marker}"[^>]*\\s${attribute}=")[^"]*(")`,
  );
  return html.replace(pattern, `$1${escapeAttribute(value)}$2`);
}

function replaceTitle(html, value) {
  return html.replace(
    /(<title data-home-meta="title">)[^<]*(<\/title>)/,
    `$1${escapeAttribute(value)}$2`,
  );
}

function localizedHomeHtml(template, content, allContents) {
  const url = homeUrl(content.path);
  const alternates = [
    ...allContents.map(
      (item) =>
        `<link data-home-alternate="true" rel="alternate" hreflang="${item.languageTag}" href="${homeUrl(item.path)}" />`,
    ),
    `<link data-home-alternate="true" rel="alternate" hreflang="x-default" href="${homeUrl("/")}" />`,
  ].join("\n    ");

  let html = template.replace(
    /<html lang="[^"]+"/,
    `<html lang="${content.languageTag}"`,
  );
  html = replaceTitle(html, content.metadata.title);
  html = replaceAttribute(
    html,
    "description",
    "content",
    content.metadata.description,
  );
  html = replaceAttribute(html, "og-title", "content", content.metadata.title);
  html = replaceAttribute(
    html,
    "og-description",
    "content",
    content.metadata.description,
  );
  html = replaceAttribute(html, "og-url", "content", url);
  html = replaceAttribute(
    html,
    "twitter-title",
    "content",
    content.metadata.title,
  );
  html = replaceAttribute(
    html,
    "twitter-description",
    "content",
    content.metadata.description,
  );
  html = replaceAttribute(html, "canonical", "href", url);
  html = html.replace(/\s*<link data-home-alternate="true"[^>]*\/>/g, "");
  return html.replace(
    /\s*(<link data-home-meta="canonical")/,
    `\n    ${alternates}\n    $1`,
  );
}
```

Read `dist/index.html` once, rewrite it as Korean, then create locale-specific `/en/index.html`, `/jp/index.html`, and `/cn/index.html`. Continue copying the Korean entry to documentation routes because React replaces documentation metadata at runtime.

- [ ] **Step 8: Make `index.html` the Korean root template**

Set `<html lang="ko">`, the exact Korean Task 2 title/description, Korean Open Graph/Twitter values, and four alternates plus x-default. Add stable `data-home-meta` markers matching Step 7 to title, description, Open Graph title/description/URL, Twitter title/description, and canonical elements; add `data-home-alternate="true"` to each alternate. Keep the canonical `https://chann.github.io/design/` and existing image/assets.

- [ ] **Step 9: Run route, type, lint, and build verification**

Run:

```bash
npm run verify:catalog
npm run lint
npm run check
npm run build
git diff --check
```

Expected: 63 components, 15 Foundations, 87 routes, and four localized static homepage entries pass.

- [ ] **Step 10: Browser-check every local homepage before commit**

Start `npm run dev -- --host 127.0.0.1 --port 4173`. For `/design/`, `/design/en/`, `/design/jp/`, and `/design/cn/`, verify with agent-browser:

```js
({
  path: location.pathname,
  lang: document.documentElement.lang,
  title: document.title,
  heading: document.querySelector("h1")?.getAttribute("aria-label"),
  canonical: document.querySelector('link[rel="canonical"]')?.href,
  alternates: document.querySelectorAll('link[rel="alternate"]').length,
  overflow: document.documentElement.scrollWidth - innerWidth,
});
```

Expected: matching locale, 5 alternates (four languages plus x-default), and overflow `0` at 390px and 1440px.

- [ ] **Step 11: Commit and push the localized homepages**

```bash
git add index.html scripts/catalog-contract.mjs scripts/generate-routes.mjs scripts/verify-site.mjs src/App.tsx src/components/site-shell.tsx src/content/home/cn.ts src/content/home/en.ts src/content/home/index.ts src/content/home/jp.ts src/content/home/ko.ts src/content/home/types.ts src/pages/home-page.tsx
git commit -m "feat(i18n): publish Korean-first localized homepages"
git push origin main
git rev-list --left-right --count HEAD...@{u}
```

Expected parity: `0 0`.

---

### Task 3: Remove the expanded component directory from the footer

**Files:**

- Modify: `src/components/site-shell.tsx`
- Modify: `src/index.css`
- Modify: `scripts/verify-site.mjs`

**Interfaces:**

- Consumes: localized footer labels from `HomeContent.footer`.
- Produces: System, Foundations, Resources, and Legal footer groups only.
- Preserves: System's compact Component catalog destination and the footer signature.

- [ ] **Step 1: Add a failing footer-size regression**

In `scripts/verify-site.mjs` assert:

```js
assert(
  !shellSource.includes("links: componentCatalog.map"),
  "The footer must not repeat the complete component directory",
);
assert(
  shellSource.includes('kind: "foundations"') &&
    shellSource.includes('kind: "resources"') &&
    shellSource.includes('kind: "legal"'),
  "The compact footer must retain its useful destinations",
);
```

- [ ] **Step 2: Run the verifier and confirm it fails**

Run: `npm run verify:site`

Expected: FAIL because `footerGroups` still maps `componentCatalog` into 63 footer links.

- [ ] **Step 3: Build localized compact footer groups**

Replace the constant `footerGroups` with `footerGroups(homeContent?)`. Remove the Components group. Keep:

```ts
[
  { title: labels.groups.system, links: systemLinks },
  { title: labels.groups.foundations, links: foundationLinks },
  { title: labels.groups.resources, links: designAndGitHubLinks },
  { title: labels.groups.legal, links: legalLinks },
];
```

Use stable `kind: "system" | "foundations" | "resources" | "legal"` values for layout classes instead of comparing translated titles.

- [ ] **Step 4: Rebalance the footer grid**

Use a four-group 12-column desktop layout: System 3, Foundations 4, Resources 3, Legal 2. Keep Foundations in two columns at `sm` and remove every Components-specific column rule. Do not add vertical separators.

- [ ] **Step 5: Verify footer height and responsive behavior**

Run `npm run build`, then inspect root and `/en/` at 1440px and 390px. Confirm:

- no heading for the expanded Components group;
- one compact Component catalog link remains in System;
- footer navigation is materially shorter than the pre-change footer;
- footer signature remains centered and animated;
- horizontal overflow is `0`.

- [ ] **Step 6: Commit and push the compact footer**

```bash
git add scripts/verify-site.mjs src/components/site-shell.tsx src/index.css
git commit -m "refactor(footer): remove the expanded component directory"
git push origin main
git rev-list --left-right --count HEAD...@{u}
```

Expected parity: `0 0`.

---

### Task 4: Accelerate shared header dropdown motion

**Files:**

- Modify: `src/components/ui/dropdown-menu.tsx`
- Modify: `scripts/verify-site.mjs`

**Interfaces:**

- Produces: common dropdown content with fast open/close animation for locale and theme menus.
- Preserves: Radix focus, keyboard, Escape, outside-click, and selection behavior.

- [ ] **Step 1: Add a failing duration contract**

Read the dropdown source in `verify-site.mjs` and assert:

```js
assert(
  dropdownSource.includes("duration-150") &&
    !dropdownSource.includes("duration-700"),
  "Utility dropdowns must use the fast motion contract",
);
```

- [ ] **Step 2: Run the verifier and confirm it fails**

Run: `npm run verify:site`

Expected: FAIL because `DropdownMenuContent` uses `duration-700`.

- [ ] **Step 3: Replace the slow motion classes**

In `DropdownMenuContent`, use `duration-150 ease-out` for opening, `data-closed:duration-100` for closing, and change directional travel from `*-2` to `*-1`:

```tsx
"... duration-150 ease-out data-closed:duration-100 ... " +
  "data-[side=bottom]:slide-in-from-top-1 ...";
```

Do not change item focus classes or primitive props.

- [ ] **Step 4: Verify perceived speed and keyboard behavior**

Run `npm run build`, open a localized homepage, then:

- click the language trigger and confirm content is visible within 200ms;
- press Escape and confirm focus returns to the trigger;
- open with Enter, move with ArrowDown, and select with Enter;
- repeat for Theme;
- enable reduced motion and confirm there is no visible travel delay.

- [ ] **Step 5: Commit and push the menu performance improvement**

```bash
git add scripts/verify-site.mjs src/components/ui/dropdown-menu.tsx
git commit -m "perf(menu): accelerate utility dropdown motion"
git push origin main
git rev-list --left-right --count HEAD...@{u}
```

Expected parity: `0 0`.

---

### Task 5: Synchronize the shadcn + DESIGN.md contract across documentation

**Files:**

- Modify: `DESIGN.md`
- Modify: `DESIGN.en.md`
- Modify: `DESIGN.jp.md`
- Modify: `DESIGN.cn.md`
- Modify: `README.md`
- Modify: `scripts/verify-site.mjs`

**Interfaces:**

- Produces: four documents with matching section order and requirement strength.
- Produces: repository documentation that describes 87 static routes and the same component-source/customization model.

- [ ] **Step 1: Add failing cross-document contract checks**

Load all four DESIGN files and assert each contains its localized equivalent of the following concepts:

```js
const requiredDesignContracts = [
  [
    "DESIGN.md",
    [
      "shadcn/ui를 기본 컴포넌트 소스",
      "제품별 디자인 계약",
      "/en/",
      "/jp/",
      "/cn/",
    ],
  ],
  [
    "DESIGN.en.md",
    [
      "shadcn/ui as the baseline component source",
      "product-specific design contract",
      "/en/",
      "/jp/",
      "/cn/",
    ],
  ],
  [
    "DESIGN.jp.md",
    [
      "shadcn/uiを基本コンポーネントソース",
      "プロダクト固有のデザイン契約",
      "/en/",
      "/jp/",
      "/cn/",
    ],
  ],
  [
    "DESIGN.cn.md",
    ["shadcn/ui作为基础组件源码", "产品级设计契约", "/en/", "/jp/", "/cn/"],
  ],
];
```

Also assert `README.md` includes `87` and the phrase `shadcn/ui component source`.

- [ ] **Step 2: Run the verifier and confirm the documentation contract fails**

Run: `npm run verify:site`

Expected: FAIL because the current documents describe the stack but not the baseline/customization workflow or localized homepage routes.

- [ ] **Step 3: Update the normative Korean document**

Edit these sections in `DESIGN.md`:

- Overview: add the three-step shadcn source → `DESIGN.md` contract → verified product flow.
- Layout: replace the distributed component sitemap description with a compact footer contract that does not repeat all 63 component links.
- Components: state that selected shadcn source is copied into the product and consumes semantic roles from `DESIGN.md`.
- Interaction & Motion: define utility dropdown open around 140ms and close around 100ms.
- Content & Localization: document Korean `/`, plus `/en/`, `/jp/`, `/cn/`, path-authoritative locale selection, and separate typed content modules.
- Implementation Contract: identify shadcn/ui as the baseline component source and `DESIGN.md` as the product-specific design contract.
- Verification Contract: change 84 routes to 87 and require all four localized home artifacts.

- [ ] **Step 4: Translate the same contract into English, Japanese, and Chinese**

Apply the same section changes in the same order. Preserve exact tokens, headings, 63/15 inventory, MUST/SHOULD/MAY strength, code identifiers, and URL paths. Use the exact terms from Step 1 so automated checks are stable.

- [ ] **Step 5: Update README product and build wording**

Explain:

```text
Start with repository-owned shadcn/ui component source. Use DESIGN.md as the
product-specific contract for semantic tokens, component states, motion,
content, accessibility, and verification.
```

Document Korean root plus `/en/`, `/jp/`, `/cn/`, the separated locale content directory, compact footer, fast dropdowns, and 87-route build verification. Remove stale “84-route” wording.

- [ ] **Step 6: Validate Markdown, document structure, and full application**

Run:

```bash
npx prettier --check README.md DESIGN.md DESIGN.en.md DESIGN.jp.md DESIGN.cn.md
npx @google/design.md lint DESIGN.md
npx @google/design.md lint DESIGN.en.md
npx @google/design.md lint DESIGN.jp.md
npx @google/design.md lint DESIGN.cn.md
npm run validate
git diff --check
```

Expected: no formatter errors, no DESIGN.md linter warnings/errors, and the full repository gate passes with 87 routes.

- [ ] **Step 7: Commit and push the synchronized documentation**

```bash
git add DESIGN.md DESIGN.en.md DESIGN.jp.md DESIGN.cn.md README.md scripts/verify-site.mjs
git commit -m "docs: define the shadcn customization workflow"
git push origin main
git rev-list --left-right --count HEAD...@{u}
```

Expected parity: `0 0`.

---

### Task 6: Complete browser, accessibility, deployment, and parity audit

**Files:**

- Modify only if a concrete regression is found; any fix gets its own focused commit and immediate push.

**Interfaces:**

- Consumes: all previous tasks.
- Produces: evidence that every requested behavior works locally and on GitHub Pages.

- [ ] **Step 1: Run the clean full gate**

Run:

```bash
npm run validate
git diff --check
git status --short --branch
```

Expected: all checks pass and the worktree is clean.

- [ ] **Step 2: Run four-locale responsive browser QA**

Serve the production build with `npm run preview -- --host 127.0.0.1 --port 4173`. At both 1440×960 and 390×844, inspect `/design/`, `/design/en/`, `/design/jp/`, `/design/cn/` and record:

- matching `lang`, title, canonical, and five alternate links;
- localized hero, navigation, FAQ, CTA, footer description, and group labels;
- correct language-switch destinations;
- no expanded component directory in the footer;
- footer signature center delta `0`;
- `document.documentElement.scrollWidth - innerWidth === 0`;
- no console errors.

- [ ] **Step 3: Run interaction and accessibility QA**

For each locale, keyboard-open the language menu, select another locale, return, open Theme, switch light/dark/system, and verify focus restoration. Run:

```bash
npx --yes @axe-core/cli http://127.0.0.1:4173/design/ --exit
npx --yes @axe-core/cli http://127.0.0.1:4173/design/en/ --exit
npx --yes @axe-core/cli http://127.0.0.1:4173/design/jp/ --exit
npx --yes @axe-core/cli http://127.0.0.1:4173/design/cn/ --exit
```

Expected: zero violations. Report incomplete/manual-review items separately if the CLI emits them.

- [ ] **Step 4: Fix any discovered regression as a new checkpoint**

If QA finds a defect, write a focused regression assertion, implement the fix, run the affected checks plus `npm run validate`, stage only those paths, commit with an accurate `fix(...)` subject, push, and prove `0 0`. Do not amend prior pushed commits.

- [ ] **Step 5: Wait for the final GitHub Pages workflow**

Run `gh run list --branch main --limit 5`, identify the run for the final SHA, then `gh run watch <run-id> --exit-status --interval 5`.

Expected: the Pages deployment completes successfully.

- [ ] **Step 6: Verify the live site and remote parity**

Repeat the locale metadata, visible copy, language-switch, footer, dropdown, overflow, and console checks at:

```text
https://chann.github.io/design/
https://chann.github.io/design/en/
https://chann.github.io/design/jp/
https://chann.github.io/design/cn/
```

Finish with:

```bash
git fetch origin
git log --oneline 890ee58..HEAD
git status --short --branch
git rev-list --left-right --count HEAD...@{u}
```

Expected: clean worktree, all planned commits visible, and parity `0 0`.
