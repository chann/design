# Shadcn Product Language Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring the four DESIGN documents and the public site into one calm, warm product language built entirely from the repository's shadcn/ui components, while preserving 63 Components, 15 Foundations, 336 static routes, and all current locale paths.

**Architecture:** The four DESIGN documents define the shared semantic tokens, `src/index.css` maps those tokens into the existing Tailwind v4 and shadcn/ui theme, and typed locale modules provide every visible homepage string. The homepage composes only existing shadcn/ui primitives plus two product-level compositions: `ThemeWorkbench` and the existing `ComponentPreview`. Build-time source checks guard tokens, locale shape, route count, and component composition; browser checks cover responsive layout, interaction, themes, reduced motion, and accessibility.

**Tech Stack:** React 19.2, TypeScript 6, Vite 8.2, Tailwind CSS 4.3, shadcn/ui 4.16 with Radix Nova, Radix UI 1.6, Geist Variable, lucide-react, Node 22+, agent-browser, GitHub Pages

## Global Constraints

- Korean `DESIGN.md` is edited first. `DESIGN.en.md`, `DESIGN.jp.md`, and `DESIGN.cn.md` keep the same YAML keys, section order, token values, and intended meaning.
- Keep the public routes `/`, `/ko/`, `/jp/`, and `/cn/`. English remains at `/`; do not introduce `/en/`.
- Preserve all 63 Component records, 15 Foundation records, and 336 generated routes.
- Preserve light primary `#0066CC` and dark primary `#78B7FF`.
- `src/components/ui` remains the only base UI layer. Use its existing Button, Card, Tabs, Badge, Input, Switch, Field, Separator, Accordion, Sheet, Dropdown Menu, and Scroll Area implementations; do not add another button, card, tab, menu, or accordion style system.
- Use semantic utilities and CSS variables. Do not add raw Tailwind palette colors or one-off dark-mode colors to page components.
- Use full Card composition, keep every `TabsTrigger` inside `TabsList`, wrap inputs and switches with Field components, use `Separator` instead of raw `<hr>`, and keep lucide icons free of manual sizing inside shadcn/ui controls.
- Keep the floating header 24px from the viewport top, without vertical rails around documentation content.
- Keep the footer signature replay behavior. If `IntersectionObserver` is unavailable, render both landing sections and the signature visibly.
- Do not add decorative full-width gradients. Section entry uses opacity and at most 16px of vertical movement; it never uses blur.
- At `prefers-reduced-motion: reduce`, content and controls are visible immediately and do not rely on staggered motion.
- Every visible homepage sentence lives in `src/content/home/*.ts`; JSX contains only technical token names and code examples.
- The public copy uses direct, modest language and avoids exaggerated guarantees. Internal test commands keep their established `verify:*` names.
- Do not add the private research sources, their URLs, identifying details, or attribution to code, documents, comments, metadata, commit messages, or release notes.
- Run the Korean copy through the `human-friendly-writing` two-pass process: first remove awkward terminology, then improve sentence length and rhythm without changing technical facts.
- Use explicit staging paths, Conventional Commits, and an ordinary push after every completed checkpoint. Never blanket-stage, rewrite history, skip hooks, or force-push.
- If a checkpoint exposes unrelated user changes, leave them untouched and stage only this plan's files.

---

## File Responsibility Map

### Design language and theme rules

- Modify `DESIGN.md`: canonical Korean positioning, warm tokens, type scale, 96px section rhythm, shadcn/ui composition rules, motion, content, and implementation guidance.
- Modify `DESIGN.en.md`: English edition aligned to the Korean structure and values.
- Modify `DESIGN.jp.md`: Japanese edition aligned to the Korean structure and values.
- Modify `DESIGN.cn.md`: Simplified Chinese edition aligned to the Korean structure and values.
- Modify `src/index.css`: map the new light and dark tokens, landing typography, open section layouts, workbench, short control motion, responsive rules, and reduced-motion behavior.
- Modify `index.html`: update the static theme color and English fallback metadata.
- Modify `README.md`: describe the warm shadcn/ui product language and retain the 336-route build instructions.

### Typed homepage content

- Modify `src/content/home/types.ts`: rename legacy sections and add Theme Workbench labels.
- Modify `src/content/home/ko.ts`: canonical Korean homepage copy.
- Modify `src/content/home/en.ts`: natural English copy with the same meaning.
- Modify `src/content/home/jp.ts`: natural Japanese copy with the same meaning.
- Modify `src/content/home/cn.ts`: natural Simplified Chinese copy with the same meaning.

### Homepage composition

- Create `src/components/theme-workbench.tsx`: Card + Tabs + Badge + Field + Input + Switch + Button composition using current semantic tokens.
- Modify `src/pages/home-page.tsx`: new hero, summary, scroll sentence, open principles, separated workflow, reused Component preview, Accordion FAQ, and open CTA.
- Modify `src/components/site-shell.tsx`: shorten header control transitions and keep theme-storage fallback behavior.
- Modify `src/components/footer-signature.tsx`: show the signature immediately when `IntersectionObserver` is missing while preserving replay on re-entry.
- Delete `src/components/hero-letter-glitch.tsx`: remove the abstract canvas after the workbench is connected.
- Reuse `src/components/specimens/component-preview.tsx`: render the existing Button specimen and Preview/Code tabs on the homepage; do not copy its registry or specimen implementation.

### Checks and delivery

- Modify `scripts/verify-site.mjs`: assert the shared token values, new typed sections, shadcn/ui composition, removed legacy canvas, unchanged 336 routes, and public-copy constraints.
- Modify `scripts/verify-scroll-scrub.mjs`: retain bidirectional word opacity checks and add reduced-motion-safe source assertions where appropriate.
- Use existing `scripts/verify-catalog.mjs`, `scripts/generate-routes.mjs`, and `package.json` commands unchanged unless a failing check shows a genuine gap.

---

### Task 1: Align DESIGN documents and semantic theme tokens

**Files:**

- Modify: `scripts/verify-site.mjs`
- Modify: `DESIGN.md`
- Modify: `DESIGN.en.md`
- Modify: `DESIGN.jp.md`
- Modify: `DESIGN.cn.md`
- Modify: `src/index.css`
- Modify: `index.html`
- Modify: `README.md`

**Interfaces:**

- Produces: one set of shared color and typography values in four DESIGN documents and shadcn/ui CSS variables.
- Consumes: current Tailwind v4 `@theme inline` mapping, `.dark` class switching, and existing semantic component classes such as `bg-background`, `bg-card`, `text-foreground`, and `border-border`.

- [ ] **Step 1: Add failing token and document checks**

Extend `scripts/verify-site.mjs` with the exact shared values. Keep the existing route and catalog assertions.

```js
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

for (const file of ["DESIGN.md", "DESIGN.en.md", "DESIGN.jp.md", "DESIGN.cn.md"]) {
  const source = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
  for (const token of sharedDesignTokens) {
    assert(source.includes(token), `${file} is missing the shared token: ${token}`);
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
  assert(cssSource.includes(token), `CSS is missing the shared token: ${token}`);
}
```

- [ ] **Step 2: Run the narrow check and confirm it fails for the old cool-gray theme**

Run: `npm run verify:site`

Expected: FAIL on the first new warm token assertion, while the 336-route precondition still passes.

- [ ] **Step 3: Update the canonical Korean DESIGN document**

Apply these exact YAML changes in `DESIGN.md`, leaving existing component inventory and section order intact:

```yaml
colors:
  primary: "#0066CC"
  ink: "#171714"
  body: "#46463F"
  muted: "#6F7068"
  canvas: "#F7F7F2"
  surface: "#FFFFFF"
  surface-soft: "#EFEFE9"
  surface-raised: "#FFFFFF"
  hairline: "#D8D8D0"
  dark-canvas: "#131209"
  dark-surface: "#1C1B16"
  dark-surface-soft: "#24231D"
  dark-surface-raised: "#2B2922"
  dark-ink: "#F4F4EF"
  dark-body: "#B8B6AC"
  dark-muted: "#8E8C82"
  dark-hairline: "#3B3931"
  dark-primary: "#78B7FF"

typography:
  display:
    fontFamily: "Geist Variable, Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 72px
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: -0.045em
  headline-lg:
    fontSize: 52px
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: -0.035em
  headline-md:
    fontSize: 32px
    fontWeight: 680
    lineHeight: 1.12
    letterSpacing: -0.022em
  body-lg:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.3
  code:
    fontFamily: "Geist Mono, SFMono-Regular, Cascadia Code, Consolas, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55

spacing:
  section: 96px
```

Rewrite the relevant prose so it says, in natural Korean:

- shadcn/ui is the component starting point; Comfort records the product's colors, type, spacing, states, and motion.
- Blue is reserved for actions, links, selection, and focus.
- Cards are used only for content that needs containment; headings, spacing, and Separator handle ordinary section boundaries.
- Page sections use about 96px of vertical rhythm.
- Entry motion lasts about 480ms, moves no more than 16px, and never uses blur.
- New interface work first uses installed `src/components/ui` pieces, then combines them at page level, and only promotes repeated compositions.

- [ ] **Step 4: Align the English, Japanese, and Chinese documents**

Copy the exact YAML token keys and values from `DESIGN.md` into the other three editions. Translate intent rather than Korean word order. Preserve every existing Component and Foundation entry and keep these headings in the existing order:

```text
Overview → Colors → Typography → Layout → Elevation & Depth → Shapes →
Foundations → Components → Do's and Don'ts → Responsive Behavior →
Interaction & Motion → Accessibility & Responsible UX → State & Feedback →
Content & Localization → Implementation Guide → Verification →
Iteration Guide → Known Gaps → References
```

- [ ] **Step 5: Map the tokens into the shadcn/ui theme**

Update `:root` and `.dark` in `src/index.css`. Keep primary, destructive, success, warning, info, chart, syntax, and foreground-pair semantics intact. Use the new values through existing variables rather than raw colors in JSX.

```css
:root {
  --background: #f7f7f2;
  --foreground: #171714;
  --card: #ffffff;
  --card-foreground: #171714;
  --popover: #ffffff;
  --popover-foreground: #171714;
  --primary: #0066cc;
  --primary-foreground: #ffffff;
  --secondary: #efefe9;
  --secondary-foreground: #171714;
  --muted: #efefe9;
  --muted-foreground: #6f7068;
  --accent: #e8e8e0;
  --accent-foreground: #171714;
  --border: #d8d8d0;
  --input: #c9c9c0;
  --ring: #0066cc;
}

.dark {
  --background: #131209;
  --foreground: #f4f4ef;
  --card: #1c1b16;
  --card-foreground: #f4f4ef;
  --popover: #2b2922;
  --popover-foreground: #f4f4ef;
  --primary: #78b7ff;
  --primary-foreground: #0a243d;
  --secondary: #24231d;
  --secondary-foreground: #f4f4ef;
  --muted: #24231d;
  --muted-foreground: #8e8c82;
  --accent: #2b2922;
  --accent-foreground: #f4f4ef;
  --border: #3b3931;
  --input: #514f45;
  --ring: #78b7ff;
}
```

Update `index.html` theme color from `#f6f8fb` to `#f7f7f2`. Update the README's cool-neutral description to the new warm-neutral, shadcn/ui-first wording without changing commands or route counts.

- [ ] **Step 6: Run document and repository checks**

Run:

```bash
npx @google/design.md lint DESIGN.md
npx @google/design.md lint DESIGN.en.md
npx @google/design.md lint DESIGN.jp.md
npx @google/design.md lint DESIGN.cn.md
npm run validate
git diff --check
```

Expected: all document linters report no errors or warnings; `npm run validate` reports 63 Components, 15 Foundations, and 336 routes.

- [ ] **Step 7: Review wording and checkpoint the theme**

Run two manual passes over `DESIGN.md` and the Korean README-facing text. First replace awkward translated terminology while preserving API, token, component, and file names. Then break up long sentences and remove repetitive conclusions. Confirm no added line exposes private research material:

```bash
git diff --unified=0 -- DESIGN.md DESIGN.en.md DESIGN.jp.md DESIGN.cn.md README.md index.html src/index.css scripts/verify-site.mjs | rg '^\+.*https?://' || true
```

Expected: no newly added external URL.

Stage and publish only this checkpoint:

```bash
git add -u -- DESIGN.md DESIGN.en.md DESIGN.jp.md DESIGN.cn.md README.md index.html src/index.css scripts/verify-site.mjs
git diff --cached --check
git diff --cached --stat
git commit -m "feat(theme): establish warm shadcn product language"
git push origin main
git status --short --branch
```

Expected: commit succeeds, push advances `origin/main`, and the worktree is clean.

---

### Task 2: Reshape localized homepage content and remove legacy framing

**Files:**

- Modify: `scripts/verify-site.mjs`
- Modify: `src/content/home/types.ts`
- Modify: `src/content/home/ko.ts`
- Modify: `src/content/home/en.ts`
- Modify: `src/content/home/jp.ts`
- Modify: `src/content/home/cn.ts`
- Modify: `src/pages/home-page.tsx`
- Modify: `index.html`

**Interfaces:**

- Produces: one `HomeContent` shape with `summary`, `principles`, `systemPreview`, and localized `hero.workbench` labels.
- Consumes: `homeContents`, locale metadata, FAQ JSON-LD, `SiteHeader`, `SiteFooter`, and the current route-to-locale behavior.

- [ ] **Step 1: Add failing content-shape and copy checks**

Read `src/content/home/types.ts` and all four locale modules in `scripts/verify-site.mjs`, then assert the new names and absence of the retired names:

```js
const homeContentTypes = await readFile(
  new URL("../src/content/home/types.ts", import.meta.url),
  "utf8",
);
const localizedHomeSources = await Promise.all(
  ["ko", "en", "jp", "cn"].map((locale) =>
    readFile(new URL(`../src/content/home/${locale}.ts`, import.meta.url), "utf8"),
  ),
);

for (const field of ["summary:", "principles:", "systemPreview:", "workbench:"]) {
  assert(homeContentTypes.includes(field), `HomeContent is missing ${field}`);
}
for (const field of ["proof:", "benefits:", "productProof:", "reviewed:", "verification:", "tokenFlow:"]) {
  assert(!homeContentTypes.includes(field), `HomeContent still contains ${field}`);
}
for (const source of localizedHomeSources) {
  assert(!source.includes("productProof"), "Localized content still uses productProof");
  assert(
    !source.includes(["검증", "가능한"].join(" ")),
    "Public copy uses an exaggerated guarantee",
  );
}
```

- [ ] **Step 2: Run the narrow check and confirm the legacy shape fails**

Run: `npm run verify:site`

Expected: FAIL because `HomeContent` still defines `proof`, `benefits`, and `productProof`.

- [ ] **Step 3: Replace the typed content boundary**

Keep locale, metadata, shell, FAQ, CTA, and footer fields unchanged. Replace the homepage-specific section types with:

```ts
hero: {
  eyebrow: string;
  accessibleTitle: string;
  titleLines: readonly string[];
  description: string;
  primaryAction: string;
  languageNavigationLabel: string;
  workbench: {
    accessibleLabel: string;
    title: string;
    description: string;
    tabsLabel: string;
    tokensTab: string;
    componentsTab: string;
    sampleFieldLabel: string;
    sampleFieldPlaceholder: string;
    sampleSwitchLabel: string;
    sampleReadyBadge: string;
    sampleSavedBadge: string;
    samplePrimaryAction: string;
    sampleSecondaryAction: string;
  };
};
summary: {
  accessibleLabel: string;
  items: readonly { value: string; label: string }[];
};
tagline: { accessibleLabel: string; segments: readonly string[] };
principles: {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly { title: string; description: string }[];
};
workflow: {
  eyebrow: string;
  title: string;
  description: string;
  steps: readonly { number: string; title: string; description: string }[];
};
systemPreview: {
  eyebrow: string;
  title: string;
  description: string;
  action: string;
  panelTitle: string;
  metrics: readonly { value: string; label: string }[];
};
```

Remove `reviewed`, `verification`, and `tokenFlow`; they are not needed by the new page.

- [ ] **Step 4: Write the canonical Korean content**

Use these exact lead sentences and keep the remaining labels short and conversational:

```ts
hero: {
  eyebrow: "shadcn/ui + DESIGN.md",
  accessibleTitle: "shadcn/ui로 시작하고, 제품의 디자인을 완성하세요.",
  titleLines: ["shadcn/ui로 시작하고,", "제품의 디자인을", "완성하세요."],
  description:
    "접근 가능한 컴포넌트는 그대로 두고, 색·글꼴·간격·상태·움직임을 DESIGN.md에 맞춰 다듬습니다.",
  primaryAction: "DESIGN.md 읽기",
  languageNavigationLabel: "홈페이지 언어",
  workbench: {
    accessibleLabel: "Comfort 테마 작업대",
    title: "Theme Workbench",
    description: "같은 토큰이 여러 컴포넌트에 어떻게 이어지는지 살펴보세요.",
    tabsLabel: "테마 작업대 보기",
    tokensTab: "Tokens",
    componentsTab: "Components",
    sampleFieldLabel: "프로젝트 이름",
    sampleFieldPlaceholder: "Comfort",
    sampleSwitchLabel: "변경 알림",
    sampleReadyBadge: "준비됨",
    sampleSavedBadge: "저장됨",
    samplePrimaryAction: "저장",
    sampleSecondaryAction: "컴포넌트 보기",
  },
},
summary: {
  accessibleLabel: "Comfort 구성",
  items: [
    { value: "4", label: "언어" },
    { value: "15", label: "Foundation" },
    { value: "63", label: "Component" },
  ],
},
tagline: {
  accessibleLabel: "같은 컴포넌트도 제품의 언어를 입으면 전혀 다르게 느껴집니다.",
  segments: ["같은", "컴포넌트도", "제품의", "언어를", "입으면", "전혀", "다르게", "느껴집니다."],
},
principles: {
  eyebrow: "디자인 원칙",
  title: "익숙한 사용법은 지키고, 제품의 인상은 분명하게 만듭니다.",
  description: "기본 동작을 다시 만들지 않아도 색, 글꼴, 간격, 상태를 정리하면 제품의 분위기는 달라집니다.",
  items: [
    { title: "익숙한 사용법은 유지합니다.", description: "키보드, 포커스, 오버레이 동작은 shadcn/ui의 익숙한 방식을 따릅니다." },
    { title: "제품에 맞는 인상을 더합니다.", description: "색, 글꼴, 간격, 형태를 DESIGN.md의 역할에 연결합니다." },
    { title: "실제 상태에서 결과를 확인합니다.", description: "작은 화면, 다크 테마, 긴 문장, 키보드 입력에서도 같은 흐름을 지킵니다." },
  ],
},
workflow: {
  eyebrow: "작업 흐름",
  title: "컴포넌트는 shadcn/ui에서, 제품다움은 DESIGN.md에서.",
  description: "필요한 컴포넌트를 고르고 제품의 기준을 적은 다음, 실제 화면에서 자연스럽게 작동하는지 살핍니다.",
  steps: [
    { number: "01", title: "컴포넌트를 고릅니다.", description: "제품에 필요한 shadcn/ui 컴포넌트부터 가져옵니다." },
    { number: "02", title: "제품의 기준을 적습니다.", description: "토큰과 상태, 문구, 움직임을 DESIGN.md에 정리합니다." },
    { number: "03", title: "실제 화면에서 살핍니다.", description: "여러 화면 크기와 입력 방식, 테마에서 결과를 확인합니다." },
  ],
},
systemPreview: {
  eyebrow: "실제 화면",
  title: "Comfort 토큰을 입힌 shadcn/ui를 직접 살펴보세요.",
  description: "Preview와 Code를 오가며 같은 컴포넌트가 문서의 색, 글꼴, 간격, 상태를 어떻게 쓰는지 볼 수 있습니다.",
  action: "컴포넌트 보기",
  panelTitle: "Button 미리보기",
  metrics: [
    { value: "336", label: "정적 경로" },
    { value: "15", label: "Foundation" },
    { value: "63", label: "Component" },
    { value: "4", label: "지원 언어" },
  ],
},
```

Run the `human-friendly-writing` term pass and rhythm pass over the entire Korean module. Preserve `shadcn/ui`, `DESIGN.md`, `Token`, `Component`, `Foundation`, route counts, and accessibility facts exactly.

- [ ] **Step 5: Align the other three locales without literal translation**

Use these lead lines and equivalent short labels; keep every object key and item count identical to Korean:

| Locale | Hero title | Hero description | Scroll sentence | Workflow title |
| --- | --- | --- | --- | --- |
| English | `Start with shadcn/ui. Finish the design for your product.` | `Keep the accessible components, then shape color, type, spacing, states, and motion around your DESIGN.md.` | `The same components feel entirely different once they speak your product's language.` | `Components from shadcn/ui. Product character from DESIGN.md.` |
| Japanese | `shadcn/uiから始めて、プロダクトのデザインを仕上げましょう。` | `アクセシブルなコンポーネントはそのままに、色、文字、余白、状態、動きをDESIGN.mdに合わせて整えます。` | `同じコンポーネントでも、プロダクトの言葉をまとえば印象は大きく変わります。` | `コンポーネントはshadcn/uiから、プロダクトらしさはDESIGN.mdから。` |
| Chinese | `从shadcn/ui开始，完成属于产品的设计。` | `保留组件原有的无障碍能力，再按照DESIGN.md调整颜色、字体、间距、状态和动效。` | `同一套组件，换上产品自己的语言后，感受会完全不同。` | `组件来自shadcn/ui，产品风格来自DESIGN.md。` |

For each locale, add all thirteen `workbench` labels, three summary values, three principle items, three workflow steps, four preview metrics, six FAQ items, CTA, and footer strings. Avoid the retired product-proof wording in every language.

- [ ] **Step 6: Make HomePage compile against the new shape**

In `src/pages/home-page.tsx`, rename field reads without changing the old layout yet:

```tsx
content.proof       -> content.summary
content.benefits    -> content.principles
content.productProof -> content.systemPreview
```

Remove reads of `tokenFlow`, `reviewed`, and `verification`. Temporarily render only the preserved `systemPreview.metrics` where the old panel expects data. Task 4 replaces the layout.

Update `index.html` fallback title and description to match the English hero direction.

- [ ] **Step 7: Check, review, and publish the content checkpoint**

Run:

```bash
npm run lint
npm run check
npm run build
git diff --check
rg -n 'productProof|content\.proof|content\.benefits|reviewed:|verification:|tokenFlow:' src/content/home src/pages/home-page.tsx
```

Expected: build passes with 336 routes; the final search returns no matches.

Stage and publish:

```bash
git add -u -- index.html scripts/verify-site.mjs src/content/home/types.ts src/content/home/ko.ts src/content/home/en.ts src/content/home/jp.ts src/content/home/cn.ts src/pages/home-page.tsx
git diff --cached --check
git diff --cached --stat
git commit -m "refactor(copy): clarify localized product language"
git push origin main
git status --short --branch
```

---

### Task 3: Replace the abstract hero with Theme Workbench

**Files:**

- Modify: `scripts/verify-site.mjs`
- Create: `src/components/theme-workbench.tsx`
- Modify: `src/pages/home-page.tsx`
- Modify: `src/index.css`
- Delete: `src/components/hero-letter-glitch.tsx`

**Interfaces:**

- Produces: `ThemeWorkbench({ content }: { content: HomeContent["hero"]["workbench"] })`.
- Consumes: installed Radix-based shadcn/ui Card, Tabs, Badge, Field, Input, Switch, Button, and Separator modules plus semantic CSS variables.

- [ ] **Step 1: Add failing workbench composition checks**

Extend `scripts/verify-site.mjs`:

```js
const workbenchSource = await readFile(
  new URL("../src/components/theme-workbench.tsx", import.meta.url),
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
assert(!homePageSource.includes("HeroLetterGlitch"), "The abstract hero canvas must be removed");
```

- [ ] **Step 2: Run the narrow check and confirm the component is absent**

Run: `npm run verify:site`

Expected: FAIL while reading the missing `src/components/theme-workbench.tsx`.

- [ ] **Step 3: Create the workbench from installed shadcn/ui pieces**

Create `src/components/theme-workbench.tsx` with this structure. Keep token names and values technical; take every human-facing label from `content`.

```tsx
import { useState } from "react";
import { ArrowRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { HomeContent } from "@/content/home";
import { localizedRoute, siteHref } from "@/data/site";

const tokenRows = [
  { name: "background", value: "#F7F7F2 / #131209", cssVariable: "--background" },
  { name: "foreground", value: "#171714 / #F4F4EF", cssVariable: "--foreground" },
  { name: "primary", value: "#0066CC / #78B7FF", cssVariable: "--primary" },
  { name: "radius", value: "10px", cssVariable: "--radius" },
] as const;

export function ThemeWorkbench({
  content,
  locale,
}: {
  content: HomeContent["hero"]["workbench"];
  locale: HomeContent["locale"];
}) {
  const [saved, setSaved] = useState(false);

  return (
    <Card aria-label={content.accessibleLabel} className="theme-workbench" role="region">
      <CardHeader>
        <CardTitle>{content.title}</CardTitle>
        <CardDescription>{content.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="tokens">
          <TabsList aria-label={content.tabsLabel}>
            <TabsTrigger value="tokens">{content.tokensTab}</TabsTrigger>
            <TabsTrigger value="components">{content.componentsTab}</TabsTrigger>
          </TabsList>
          <TabsContent value="tokens">
            <dl className="theme-token-list">
              {tokenRows.map((token) => (
                <div className="theme-token-row" key={token.name}>
                  <span
                    aria-hidden="true"
                    className="theme-token-swatch"
                    style={{ background: `var(${token.cssVariable})` }}
                  />
                  <dt>{token.name}</dt>
                  <dd>{token.value}</dd>
                </div>
              ))}
            </dl>
          </TabsContent>
          <TabsContent value="components">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="workbench-project">{content.sampleFieldLabel}</FieldLabel>
                <Input id="workbench-project" placeholder={content.sampleFieldPlaceholder} />
              </Field>
              <Field orientation="horizontal">
                <FieldLabel htmlFor="workbench-notifications">{content.sampleSwitchLabel}</FieldLabel>
                <Switch defaultChecked id="workbench-notifications" />
              </Field>
            </FieldGroup>
            <Separator />
            <div className="flex flex-wrap items-center gap-3">
              <Badge aria-live="polite" role="status" variant="secondary">
                {saved ? content.sampleSavedBadge : content.sampleReadyBadge}
              </Badge>
              <Button onClick={() => setSaved(true)} type="button">
                {content.samplePrimaryAction}
              </Button>
              <Button asChild variant="outline">
                <a href={siteHref(localizedRoute("/components", locale))}>
                  {content.sampleSecondaryAction}
                  <ArrowRightIcon aria-hidden="true" data-icon="inline-end" />
                </a>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
```

Use `className` only for the composition's layout. The installed components retain their variants, typography, focus treatment, and semantic colors.

- [ ] **Step 4: Connect the workbench and remove the canvas**

Replace the `HeroLetterGlitch` import and element in `src/pages/home-page.tsx`:

```tsx
import { ThemeWorkbench } from "@/components/theme-workbench";

<ThemeWorkbench content={content.hero.workbench} locale={content.locale} />
```

Delete `src/components/hero-letter-glitch.tsx`. Remove every `hero-glitch-*` variable, selector, and keyframe from `src/index.css`. Add `.theme-workbench`, `.theme-token-list`, `.theme-token-row`, and `.theme-token-swatch` layout rules with semantic variables only. At narrow widths, the card and every token row must stay within the containing column.

- [ ] **Step 5: Check shadcn/ui composition and publish the hero checkpoint**

Run:

```bash
npm run lint
npm run check
npm run build
git diff --check
rg -n 'HeroLetterGlitch|hero-letter-glitch|hero-glitch' src scripts
rg -n 'space-[xy]-|bg-(blue|gray|slate|zinc)-|text-(blue|gray|slate|zinc)-' src/components/theme-workbench.tsx
```

Expected: build passes; both searches return no matches.

Stage and publish:

```bash
git add -- scripts/verify-site.mjs src/components/theme-workbench.tsx
git add -u -- src/pages/home-page.tsx src/index.css src/components/hero-letter-glitch.tsx
git diff --cached --check
git diff --cached --stat
git commit -m "feat(hero): add shadcn theme workbench"
git push origin main
git status --short --branch
```

---

### Task 4: Rebuild the homepage flow with shadcn/ui compositions

**Files:**

- Modify: `scripts/verify-site.mjs`
- Modify: `scripts/verify-scroll-scrub.mjs`
- Modify: `src/pages/home-page.tsx`
- Modify: `src/components/site-shell.tsx`
- Modify: `src/components/footer-signature.tsx`
- Modify: `src/index.css`
- Reuse unchanged: `src/components/specimens/component-preview.tsx`
- Reuse unchanged: `src/components/specimens/specimen-registry.tsx`

**Interfaces:**

- Produces: the approved hero → summary → scroll sentence → principles → workflow → system preview → FAQ → CTA flow.
- Consumes: `getComponent("button")`, `ComponentPreview`, localized docs labels, FAQ JSON-LD, `calculateWordOpacity`, existing theme storage, and the footer signature.

- [ ] **Step 1: Add failing structure and fallback checks**

Extend `scripts/verify-site.mjs`:

```js
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
  footerSignatureSource.includes('typeof IntersectionObserver === "undefined"'),
  "Footer signature needs a no-observer fallback",
);
assert(
  cssSource.includes("480ms") && !cssSource.includes("filter: blur"),
  "Landing motion must use the short no-blur behavior",
);
```

- [ ] **Step 2: Run the narrow check and confirm the old card layout fails**

Run: `npm run verify:site`

Expected: FAIL on `summary-row` or the Accordion assertion.

- [ ] **Step 3: Make observer-driven content safe without browser support**

Update `Reveal` in `src/pages/home-page.tsx` and `FooterSignature` in `src/components/footer-signature.tsx` before changing layout:

```tsx
useEffect(() => {
  const element = elementRef.current;
  if (!element) return;
  if (typeof IntersectionObserver === "undefined") {
    setVisible(true);
    return;
  }
  // Keep the existing observer path.
}, []);
```

For the footer, use the same branch with `signatureRef` and preserve `setVisible(entry.isIntersecting)` so re-entry still replays.

- [ ] **Step 4: Replace card walls with open semantic sections**

In `src/pages/home-page.tsx`:

1. Keep the two-column hero and render `ThemeWorkbench` on the right.
2. Render `content.summary.items` in `.summary-row` with no enclosing Card.
3. Keep `TaglineReveal`; only word opacity changes with scroll.
4. Render principles as a two-column section. The right `.principles-list` contains three `<article>` elements separated by shadcn/ui `Separator` components.
5. Render workflow as `.workflow-list`; each step uses its number, heading, paragraph, and a `Separator` between rows.
6. Reuse the existing Button specimen in `.system-preview`.

Use the existing catalog instead of duplicating the specimen:

```tsx
import { ComponentPreview } from "@/components/specimens/component-preview";
import { getComponent } from "@/data/catalog";

const featuredComponent = getComponent("button");
if (!featuredComponent) {
  throw new Error("The Button component is required for the homepage preview");
}

const featuredCode = `<Button>Continue</Button>`;

<ComponentPreview
  code={featuredCode}
  locale={content.locale}
  record={featuredComponent}
/>
```

Place `content.systemPreview.metrics` in a simple four-column caption row below the preview. Use the section action as a shadcn/ui Button link to the localized Component catalog.

- [ ] **Step 5: Replace static FAQ cards with Accordion**

Use the installed Radix Accordion API and keep FAQ JSON-LD generation unchanged:

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

<Accordion className="faq-accordion" collapsible type="single">
  {content.faq.items.map(({ question, answer }, index) => (
    <AccordionItem key={question} value={`faq-${index + 1}`}>
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>
        <p>{answer}</p>
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
```

Build the final CTA as an open section with a shadcn/ui `Separator` above it, a short text block, and one Button link. Remove the full blue CTA card.

- [ ] **Step 6: Apply the final spacing, typography, and motion**

In `src/index.css`:

- Set shared landing section padding to about 96px on wide screens and proportionally less on small screens.
- Use `clamp()` for the 72px display title and 52px large statement.
- Limit readable paragraphs to roughly 68 characters.
- Keep `.landing-reveal` at `transform: translateY(16px)` and `transition: opacity 480ms, transform 480ms`.
- Remove the old 900ms landing entrance, 700ms control transitions, featured benefit card, implementation panel, and decorative landing gradient rules.
- Set ordinary control transitions to 120–180ms. Keep the installed dropdown's 150ms open and 100ms close timing.
- Keep the header at `pt-6`, rounded-full, and semantic `bg-background/80`; shorten `.mobile-menu-button` to 160ms.
- At 320px and wider, use `min-width: 0`, wrapping, and one-column fallbacks so no page-level horizontal overflow appears.
- In `@media (prefers-reduced-motion: reduce)`, set landing and footer content to visible with no transform or delay.

- [ ] **Step 7: Run the full local check and publish the landing checkpoint**

Run:

```bash
npm run validate
git diff --check
rg -n '<hr|proof-strip|benefit-grid|benefit-item-featured|implementation-proof|duration-700|filter: blur' src/pages/home-page.tsx src/components/site-shell.tsx src/index.css
rg -n 'space-[xy]-|bg-(blue|gray|slate|zinc)-|text-(blue|gray|slate|zinc)-' src/pages/home-page.tsx src/components/theme-workbench.tsx
```

Expected: validation passes with 63 Components, 15 Foundations, and 336 routes; searches return no matches.

Stage and publish:

```bash
git add -u -- scripts/verify-site.mjs scripts/verify-scroll-scrub.mjs src/pages/home-page.tsx src/components/site-shell.tsx src/components/footer-signature.tsx src/index.css
git diff --cached --check
git diff --cached --stat
git commit -m "feat(landing): apply open shadcn product flow"
git push origin main
git status --short --branch
```

---

### Task 5: Browser, accessibility, deployment, and Git alignment

**Files:**

- Modify only if a failure requires a focused fix: files from Tasks 1–4 and their matching check.
- Do not add screenshots, browser profiles, or temporary reports to the repository.

**Interfaces:**

- Produces: local browser behavior, accessibility scan results, a successful Pages workflow, live-route responses, and matching local, tracking, and live-remote commits.
- Consumes: `npm run preview`, agent-browser, `gh`, `curl`, and Git read-only checks.

- [ ] **Step 1: Start the built site and create an isolated browser session**

Run `npm run build`, then start the preview server in a persistent terminal:

```bash
npm run preview -- --host 127.0.0.1
```

Use a session scoped to this repository:

```bash
agent-browser --session design-product-language open http://127.0.0.1:4173/design/
agent-browser --session design-product-language wait --load networkidle
agent-browser --session design-product-language snapshot -i
```

- [ ] **Step 2: Check 320px, 390px, and 1440px layouts**

First check the narrowest supported width at the English root:

```bash
agent-browser --session design-product-language set viewport 320 760
agent-browser --session design-product-language screenshot --full /tmp/design-home-320.png
agent-browser --session design-product-language eval "document.documentElement.scrollWidth - document.documentElement.clientWidth"
```

Expected: `0`.

Then visit `/design/`, `/design/ko/`, `/design/jp/`, and `/design/cn/` and run both representative viewport sizes:

```bash
agent-browser --session design-product-language set viewport 390 844
agent-browser --session design-product-language screenshot --full /tmp/design-home-390.png
agent-browser --session design-product-language eval "({overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth, headings: [...document.querySelectorAll('h1,h2')].map((node) => node.textContent?.trim())})"

agent-browser --session design-product-language set viewport 1440 1000
agent-browser --session design-product-language screenshot --full /tmp/design-home-1440.png
agent-browser --session design-product-language eval "({overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth, sections: document.querySelectorAll('main > section').length})"
```

Expected: `overflow` is `0` at all widths; each locale shows the hero, workbench, summary, scroll sentence, principles, workflow, preview, FAQ, and CTA in the same order.

- [ ] **Step 3: Exercise keyboard and pointer interactions**

On the Korean homepage, use `snapshot -i` and fresh refs after every state-changing action:

- Switch Theme Workbench from Tokens to Components.
- Fill the project Input.
- Toggle the Switch off and on.
- Activate both workbench Buttons.
- Expand and collapse at least two FAQ items.
- Open the language Dropdown Menu and follow one locale link.
- Open the theme Dropdown Menu and select light, dark, then system.
- At 390px, open and close the mobile Sheet.
- Traverse the page with Tab and confirm focus remains visible and follows reading order.

After the interactions, run:

```bash
agent-browser --session design-product-language errors
agent-browser --session design-product-language console
```

Expected: no page errors, no unhandled console errors, and every control is keyboard-operable.

- [ ] **Step 4: Check light, dark, reduced motion, and 200% text**

Run:

```bash
agent-browser --session design-product-language set media light
agent-browser --session design-product-language screenshot --full /tmp/design-home-light.png
agent-browser --session design-product-language set media dark
agent-browser --session design-product-language screenshot --full /tmp/design-home-dark.png
agent-browser --session design-product-language set media light reduced-motion
agent-browser --session design-product-language reload
agent-browser --session design-product-language eval "({hiddenReveals: [...document.querySelectorAll('.landing-reveal,.footer-signature')].filter((node) => getComputedStyle(node).opacity === '0').length, movingReveals: [...document.querySelectorAll('.landing-reveal')].filter((node) => getComputedStyle(node).transform !== 'none').length})"
agent-browser --session design-product-language eval "document.documentElement.style.fontSize = '200%'"
agent-browser --session design-product-language eval "document.documentElement.scrollWidth - document.documentElement.clientWidth"
agent-browser --session design-product-language reload
agent-browser --session design-product-language eval "[...document.querySelectorAll('p,h1,h2,h3,button,a')].forEach((node) => { const text = node.textContent?.trim(); if (text) node.textContent = `${text} ${text.slice(0, Math.ceil(text.length * 0.3))}`; }); document.documentElement.scrollWidth - document.documentElement.clientWidth"
```

Expected: `hiddenReveals` and `movingReveals` are `0`; neither 200% text nor a 30% sentence expansion produces page-level horizontal overflow or unreachable controls.

- [ ] **Step 5: Run accessibility scans**

Run at the root and each localized homepage in both light and dark media:

```bash
agent-browser --session design-product-language set media light
for route in '' 'ko/' 'jp/' 'cn/'; do
  agent-browser --session design-product-language a11y "http://127.0.0.1:4173/design/${route}" --tags wcag2a,wcag2aa
done
agent-browser --session design-product-language set media dark
for route in '' 'ko/' 'jp/' 'cn/'; do
  agent-browser --session design-product-language a11y "http://127.0.0.1:4173/design/${route}" --tags wcag2a,wcag2aa
done
```

Expected: zero new violations. Record any incomplete/manual checks separately; do not call them passing violations.

- [ ] **Step 6: Fix any browser issue in the owning task and re-run its checks**

For each failure, make the smallest source change in the owning file, update the nearest automated assertion, repeat the relevant browser step, then run `npm run validate`. If source changes are needed, create one focused checkpoint:

```bash
git add -u -- DESIGN.md DESIGN.en.md DESIGN.jp.md DESIGN.cn.md README.md index.html scripts/verify-site.mjs scripts/verify-scroll-scrub.mjs src/content/home/types.ts src/content/home/ko.ts src/content/home/en.ts src/content/home/jp.ts src/content/home/cn.ts src/pages/home-page.tsx src/components/theme-workbench.tsx src/components/site-shell.tsx src/components/footer-signature.tsx src/index.css
git diff --cached --check
git commit -m "fix(landing): resolve responsive and accessibility issues"
git push origin main
```

Do not create an empty fix commit when no issue is found.

- [ ] **Step 7: Re-run final repository checks and close the browser**

Run:

```bash
npm run validate
git diff --check
git status --short --branch
git diff --unified=0 origin/main...HEAD -- DESIGN.md DESIGN.en.md DESIGN.jp.md DESIGN.cn.md README.md index.html src scripts | rg '^\+.*https?://' || true
agent-browser --session design-product-language close
```

Expected: validation passes, worktree is clean, and no private research URL was added.

- [ ] **Step 8: Wait for GitHub Pages and inspect the public site**

Find and watch the workflow for the final commit:

```bash
gh run list --workflow pages.yml --branch main --limit 1 --json databaseId,headSha,status,conclusion,url
DESIGN_PAGES_RUN_ID="$(gh run list --workflow pages.yml --branch main --limit 1 --json databaseId --jq '.[0].databaseId')"
gh run watch "$DESIGN_PAGES_RUN_ID" --exit-status
```

Then check representative public routes:

```bash
curl -fsSI 'https://chann.github.io/design/'
curl -fsSI 'https://chann.github.io/design/ko/'
curl -fsSI 'https://chann.github.io/design/jp/'
curl -fsSI 'https://chann.github.io/design/cn/'
curl -fsSI 'https://chann.github.io/design/components/button/'
```

Open the public root with agent-browser and confirm title, description, `lang`, canonical, locale alternates, theme switching, and the workbench once more.

- [ ] **Step 9: Confirm local, tracking, and live-remote alignment**

Run:

```bash
git fetch origin main
git rev-list --left-right --count main...origin/main
git rev-parse HEAD
git rev-parse origin/main
git ls-remote origin refs/heads/main
git status --short --branch
```

Expected: `0 0`; all three commit hashes match; `## main...origin/main` has no ahead/behind marker or file entries.

---

## Plan Self-Review Checklist

- [ ] Every approved section is represented: hero workbench, summary, scroll sentence, open principles, three-step workflow, reused Preview/Code specimen, Accordion FAQ, and open CTA.
- [ ] Every new interactive surface is composed from installed `src/components/ui` modules.
- [ ] No step adds a second component library, decorative canvas, broad landing gradient, or duplicate specimen registry.
- [ ] Locale paths remain `/`, `/ko/`, `/jp/`, and `/cn/`; route count remains 336.
- [ ] `HomeContent` type names, locale keys, and JSX reads agree exactly.
- [ ] Theme values agree across all DESIGN documents, CSS, workbench display, and source checks.
- [ ] Korean copy has term and rhythm passes without changing technical facts.
- [ ] Mobile, dark mode, reduced motion, keyboard, 200% text, and accessibility checks are explicit.
- [ ] Each implementation checkpoint has a failing check, a passing check, explicit staging, a Conventional Commit, and an ordinary push.
- [ ] Final delivery includes Pages success and `0 0` local/tracking/live-remote alignment.
- [ ] No placeholder, private research name, URL, identifying detail, or attribution appears in repository output.
