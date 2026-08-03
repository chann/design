# Complete System Catalog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn Comfort into a complete, project-specific reference for all 63 current shadcn/ui components and all 15 SEED Foundations, with synchronized DESIGN documents and an expanded animated footer.

**Architecture:** A checked-in JSON catalog is the canonical machine-readable inventory shared by typed React data accessors and Node build verifiers. Family-focused UI modules implement the component layer, while registry-driven specimen pages keep 63 detail routes maintainable without reducing specialized components to generic illustrations. The existing Vite static-route and GitHub Pages architecture remains intact.

**Tech Stack:** React 19.2, TypeScript 6, Vite 8.2, Tailwind CSS 4.3, Radix UI 1.6, Geist, local Phosphor artwork, Node 22 build scripts, agent-browser, GitHub Pages

## Global Constraints

- Korean `DESIGN.md` is canonical; `DESIGN.en.md`, `DESIGN.jp.md`, and `DESIGN.cn.md` mirror its section order and normative contract.
- Preserve light primary `#0066CC` and dark primary `#78B7FF`.
- Keep the header floating with a visible top gap while scrolling.
- Do not add vertical divider lines between the main reading column and either documentation rail.
- Do not restore a graphic logo.
- Every component needs a reusable implementation or composition contract, a real specimen, one static route, applicable states, and accessibility guidance.
- Every Foundation needs a visual specimen, semantic guidance, reference values, and related destinations.
- Preview and View code remain one segmented button group.
- The footer must distribute the sitemap and render a partially clipped text animation with reduced-motion parity.
- Use Geist for interface text and Geist Mono only for code, tokens, and tabular data.
- Keep global `word-break: keep-all` behavior for readable text while allowing code and URLs to overflow or wrap safely.
- Use explicit Git staging paths, ordinary pushes, and upstream parity checks; never blanket-stage or force-push.
- Completion requires 63 component records, 15 Foundation records, at least 84 generated routes, full validation, representative browser QA, successful GitHub Pages deployment, a clean worktree, and `0 0` parity.

---

## File responsibility map

### Canonical data and build contracts

- Create `src/data/catalog.json`: canonical 63-component and 15-Foundation inventory.
- Create `src/data/catalog.ts`: typed accessors, family grouping, slug lookup, and previous/next derivation.
- Create `scripts/catalog-contract.mjs`: Node reader and invariant helpers for build scripts.
- Create `scripts/verify-catalog.mjs`: fast catalog, route, module, and document contract checks.
- Modify `src/data/site.ts`: derive `componentItems`, `foundationItems`, and documentation navigation from the catalog.
- Modify `src/App.tsx`: derive recognized routes and metadata from catalog lookups.
- Modify `scripts/generate-routes.mjs`: derive routes from the catalog contract.
- Modify `scripts/verify-site.mjs`: verify generated output against the catalog contract.
- Delete `routes.json`: remove the duplicate hand-maintained route source after the build scripts derive it.

### Shell, discovery, and footer

- Create `src/components/catalog-search.tsx`: accessible client-side search and family filters.
- Create `src/components/footer-signature.tsx`: clipped intersection-driven signature animation.
- Modify `src/components/site-shell.tsx`: searchable grouped rails, expanded sitemap, and footer composition.
- Modify `src/index.css`: shell, open rails, search, sitemap, clipped signature, focus, responsive, and reduced-motion styles.

### Foundation experience

- Create `src/components/foundation-specimens.tsx`: exhaustive 15-specimen registry.
- Modify `src/pages/foundations-page.tsx`: complete Seed-inspired visual catalog.
- Modify `src/pages/foundation-detail-page.tsx`: data-driven 15-page detail template.

### Component implementation layer

- Existing primitives remain in `src/components/ui/accordion.tsx`, `alert.tsx`, `badge.tsx`, `breadcrumb.tsx`, `button.tsx`, `card.tsx`, `checkbox.tsx`, `dialog.tsx`, `dropdown-menu.tsx`, `field.tsx`, `input.tsx`, `label.tsx`, `scroll-area.tsx`, `select.tsx`, `separator.tsx`, `sheet.tsx`, `skeleton.tsx`, `sonner.tsx`, `switch.tsx`, `table.tsx`, `tabs.tsx`, and `tooltip.tsx`.
- Create 42 missing modules in `src/components/ui/`: `alert-dialog.tsx`, `aspect-ratio.tsx`, `attachment.tsx`, `avatar.tsx`, `bubble.tsx`, `button-group.tsx`, `calendar.tsx`, `carousel.tsx`, `chart.tsx`, `collapsible.tsx`, `combobox.tsx`, `command.tsx`, `context-menu.tsx`, `data-table.tsx`, `date-picker.tsx`, `direction.tsx`, `drawer.tsx`, `empty.tsx`, `hover-card.tsx`, `input-group.tsx`, `input-otp.tsx`, `item.tsx`, `kbd.tsx`, `marker.tsx`, `menubar.tsx`, `message.tsx`, `message-scroller.tsx`, `native-select.tsx`, `navigation-menu.tsx`, `pagination.tsx`, `popover.tsx`, `progress.tsx`, `radio-group.tsx`, `resizable.tsx`, `sidebar.tsx`, `slider.tsx`, `spinner.tsx`, `textarea.tsx`, `toast.tsx`, `toggle.tsx`, `toggle-group.tsx`, and `typography.tsx`.

### Specimens and pages

- Create `src/components/specimens/component-preview.tsx`: shared Preview and View code surface.
- Create `src/components/specimens/catalog-contract-specimen.tsx`: honest noninteractive contract surface used until a specialized specimen is registered and retained for provider or typography records.
- Create `src/components/specimens/action-feedback-specimens.tsx`: action and feedback registry entries.
- Create `src/components/specimens/form-specimens.tsx`: form and selection registry entries.
- Create `src/components/specimens/navigation-overlay-specimens.tsx`: navigation and overlay registry entries.
- Create `src/components/specimens/data-layout-specimens.tsx`: data display and layout registry entries.
- Create `src/components/specimens/conversation-specimens.tsx`: Attachment, Bubble, Marker, Message, and Message Scroller entries.
- Create `src/components/specimens/specimen-registry.tsx`: exhaustive component-slug registry.
- Modify `src/pages/components-page.tsx`: complete searchable catalog and family bento grid.
- Replace `src/pages/component-detail-page.tsx`: focused data-driven detail template.

### Normative documents

- Modify `DESIGN.md`, `DESIGN.en.md`, `DESIGN.jp.md`, and `DESIGN.cn.md`: catalog coverage, Foundation coverage, component-family contracts, footer signature, content, localization, and verification rules.

---

### Task 1: Establish the canonical catalog and route contract

**Files:**

- Create: `src/data/catalog.json`
- Create: `src/data/catalog.ts`
- Create: `scripts/catalog-contract.mjs`
- Create: `scripts/verify-catalog.mjs`
- Modify: `src/data/site.ts`
- Modify: `src/App.tsx`
- Create: `src/components/specimens/catalog-contract-specimen.tsx`
- Modify: `src/pages/component-detail-page.tsx`
- Modify: `src/pages/foundation-detail-page.tsx`
- Modify: `scripts/generate-routes.mjs`
- Modify: `scripts/verify-site.mjs`
- Modify: `package.json`
- Delete: `routes.json`

**Interfaces:**

- Produces: `ComponentRecord`, `FoundationRecord`, `ComponentFamily`, `componentCatalog`, `foundationCatalog`, `componentFamilies`, `getComponent(slug)`, `getFoundation(slug)`, `groupComponentsByFamily()`, `CatalogContractSpecimen`, and Node `readCatalog()` / `catalogRoutes()`.
- Consumes: Existing `NavItem`, `siteHref()`, route metadata logic, static-route generation, and the approved 63/15 lists.

- [ ] **Step 1: Add the failing catalog verifier**

Create `scripts/verify-catalog.mjs` with exact count, slug, family, primary-color, and route invariants:

```js
import { access, readFile } from "node:fs/promises";

import { catalogRoutes, readCatalog } from "./catalog-contract.mjs";

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const catalog = await readCatalog();
const componentSlugs = catalog.components.map(({ slug }) => slug);
const foundationSlugs = catalog.foundations.map(({ slug }) => slug);

assert(catalog.components.length === 63, "Expected 63 components");
assert(catalog.foundations.length === 15, "Expected 15 Foundations");
assert(new Set(componentSlugs).size === 63, "Component slugs must be unique");
assert(new Set(foundationSlugs).size === 15, "Foundation slugs must be unique");
assert(catalogRoutes(catalog).length === 84, "Expected 84 static routes");

for (const record of [...catalog.components, ...catalog.foundations]) {
  assert(record.title.trim().length > 0, `Missing title for ${record.slug}`);
  assert(
    record.description.trim().length > 0,
    `Missing description for ${record.slug}`,
  );
}

for (const record of catalog.components) {
  assert(record.usage.trim().length > 0, `Missing usage for ${record.slug}`);
  assert(record.anatomy.length > 0, `Missing anatomy for ${record.slug}`);
  assert(
    record.accessibility.length > 0,
    `Missing accessibility for ${record.slug}`,
  );
}

for (const record of catalog.foundations) {
  assert(record.intent.trim().length > 0, `Missing intent for ${record.slug}`);
  assert(record.rules.length > 0, `Missing rules for ${record.slug}`);
  assert(record.values.length > 0, `Missing values for ${record.slug}`);
  assert(
    record.accessibility.length > 0,
    `Missing accessibility for ${record.slug}`,
  );
}

await access(new URL("../DESIGN.md", import.meta.url));
const css = await readFile(
  new URL("../src/index.css", import.meta.url),
  "utf8",
);
assert(css.includes("#0066cc"), "Light primary must remain #0066CC");
assert(css.includes("#78b7ff"), "Dark primary must remain #78B7FF");

console.log("Verified 63 components, 15 Foundations, and 84 routes.");
```

- [ ] **Step 2: Run the verifier to prove the contract is absent**

Run: `node scripts/verify-catalog.mjs`

Expected: FAIL because `scripts/catalog-contract.mjs` and `src/data/catalog.json` do not exist.

- [ ] **Step 3: Create the canonical manifest and typed facade**

Use this schema in `src/data/catalog.ts`:

```ts
import manifest from "./catalog.json";

export type ComponentFamily =
  | "actions"
  | "forms"
  | "navigation"
  | "overlays"
  | "data-display"
  | "feedback"
  | "layout"
  | "conversation";

export type ComponentState =
  | "default"
  | "hover"
  | "active"
  | "focus-visible"
  | "disabled"
  | "loading"
  | "empty"
  | "error"
  | "selected"
  | "expanded"
  | "destructive";

export type ComponentRecord = {
  slug: string;
  title: string;
  description: string;
  usage: string;
  anatomy: string[];
  accessibility: string[];
  family: ComponentFamily;
  keywords: string[];
  states: ComponentState[];
  specimen: string;
  module: string;
};

export type FoundationRecord = {
  slug: string;
  title: string;
  description: string;
  intent: string;
  rules: string[];
  values: Array<[string, string, string]>;
  accessibility: string[];
  related: string[];
  specimen: string;
};

export type ComponentSlug = ComponentRecord["slug"];
export type FoundationSlug = FoundationRecord["slug"];
export const componentCatalog = manifest.components as ComponentRecord[];
export const foundationCatalog = manifest.foundations as FoundationRecord[];
export const getComponent = (slug: string) =>
  componentCatalog.find((item) => item.slug === slug);
export const getFoundation = (slug: string) =>
  foundationCatalog.find((item) => item.slug === slug);
```

Populate `catalog.json` with the exact 63 component titles and 15 Foundation titles from the approved spec. Use lower-kebab-case slugs, one of the eight exact family values, applicable state lists, a stable specimen key, and the exact `src/components/ui/<module>.tsx` path. Map Toast to `toast.tsx`, Accessibility to `inclusive-design`, and Design Token to `design-token` so public routes match the current reference vocabulary.

- [ ] **Step 4: Implement the shared Node contract**

Create `scripts/catalog-contract.mjs`:

```js
import { readFile } from "node:fs/promises";

const catalogUrl = new URL("../src/data/catalog.json", import.meta.url);

export async function readCatalog() {
  return JSON.parse(await readFile(catalogUrl, "utf8"));
}

export function catalogRoutes(catalog) {
  return [
    "/",
    "/principles",
    "/foundations",
    ...catalog.foundations.map(({ slug }) => `/foundations/${slug}`),
    "/components",
    ...catalog.components.map(({ slug }) => `/components/${slug}`),
    "/privacy",
    "/terms",
  ];
}
```

- [ ] **Step 5: Keep every newly published route honest and renderable**

Create `CatalogContractSpecimen` as a permanent noninteractive anatomy and state surface. It must identify itself as a contract view, never imitate an interactive control, and accept this exact interface:

```ts
export type CatalogContractSpecimenProps = {
  title: string;
  anatomy: string[];
  states: string[];
};
```

In `component-detail-page.tsx` and `foundation-detail-page.tsx`, retain the existing twelve and six specialized specimens through keyed maps, use catalog records for page identity and previous/next navigation, and render `CatalogContractSpecimen` only where a specialized specimen has not landed yet. This keeps all 84 static routes useful and prevents a detail path from crashing or presenting a fake interaction between checkpoints.

- [ ] **Step 6: Derive navigation and routing from the catalog**

In `src/data/site.ts`, remove the hand-written twelve-component and six-Foundation arrays and map catalog records into `NavItem` values. In `src/App.tsx`, replace literal slug sets with `getComponent(slug)` and `getFoundation(slug)`, update the home description to 63/15 coverage, and pass plain `slug` strings to the data-driven page components.

- [ ] **Step 7: Derive generated routes and verifier expectations**

Update both Node build scripts to call `readCatalog()` and `catalogRoutes()`. Delete root `routes.json`; continue writing `dist/routes.json` for public inspection. Extend `verify-site.mjs` to compare built routes with the derived array. Module-path enforcement belongs to Tasks 4 and 5, when those files are added.

- [ ] **Step 8: Add the fast verification command**

Add these package scripts without changing the existing `validate` order:

```json
{
  "verify:catalog": "node scripts/verify-catalog.mjs",
  "validate": "npm run lint && npm run check && npm run verify:catalog && npm run build"
}
```

- [ ] **Step 9: Run the task checks**

Run:

```bash
npm run verify:catalog
npm run lint
npm run check
npm run build
git diff --check
```

Expected: 63 components, 15 Foundations, 84 routes, zero lint errors, zero TypeScript errors, successful production build, and no whitespace errors.

- [ ] **Step 10: Commit and push the route contract**

Stage only the explicit files listed for Task 1, commit `refactor(catalog): centralize complete route contracts`, push normally, then run `git rev-list --left-right --count HEAD...@{u}` and require `0 0`.

---

### Task 2: Expand discovery and build the signature footer

**Files:**

- Create: `src/components/catalog-search.tsx`
- Create: `src/components/footer-signature.tsx`
- Modify: `src/components/site-shell.tsx`
- Modify: `src/index.css`
- Modify: `scripts/verify-site.mjs`

**Interfaces:**

- Consumes: `componentCatalog`, `foundationCatalog`, `componentFamilies`, `siteHref()`, and `DocsLayout` navigation props.
- Produces: `CatalogSearch<T>`, `FooterSignature`, grouped desktop/mobile rails, and grouped sitemap link arrays.

- [ ] **Step 1: Add source-contract assertions for the shell**

Extend `verify-site.mjs` to read `site-shell.tsx`, `footer-signature.tsx`, and `index.css`. Assert the footer exposes five sitemap groups, the signature has `aria-hidden="true"`, the visible footer still has an accessible home link, the signature uses an observer, and the reduced-motion block resolves `.footer-signature-text` without animation travel.

- [ ] **Step 2: Run the verifier and confirm the shell contract fails**

Run: `npm run build`

Expected: FAIL because `footer-signature.tsx` and the five sitemap groups are absent.

- [ ] **Step 3: Implement the generic catalog search**

Create a controlled component with this interface:

```ts
export type CatalogSearchItem = {
  slug: string;
  title: string;
  description: string;
  family?: string;
  keywords?: string[];
};

export function CatalogSearch<T extends CatalogSearchItem>({
  items,
  value,
  family,
  onValueChange,
  onFamilyChange,
  onResultsChange,
}: {
  items: T[];
  value: string;
  family: string;
  onValueChange: (value: string) => void;
  onFamilyChange: (family: string) => void;
  onResultsChange: (items: T[]) => void;
});
```

Use a persistent `Label`, `Input`, family toggle buttons with `aria-pressed`, a result count live region, and a Reset action shown only when filters are active.

- [ ] **Step 4: Replace the concentrated footer**

Define source arrays for System, Foundations, Components, Resources, and Legal. Render headings with lists, balance full Foundation and Component links into subcolumns on wide screens, and preserve semantic list order on mobile. Keep the text-only `Brand` home link and legal links.

- [ ] **Step 5: Implement the clipped signature**

`FooterSignature` uses `IntersectionObserver` to toggle `is-visible` once, renders visible text only once for assistive technology, and renders the decorative oversized text with `aria-hidden="true"`:

```tsx
<div className={cn("footer-signature", visible && "is-visible")} ref={ref}>
  <span className="sr-only">
    Comfort Design System, documented in DESIGN.md
  </span>
  <span aria-hidden="true" className="footer-signature-text">
    Comfort / DESIGN.md
  </span>
</div>
```

- [ ] **Step 6: Open the documentation rails without dividers**

Keep the existing three-column layout but remove rail border classes and any `border-left` or `border-right` rules that create vertical separation. Use sticky positioning, whitespace, muted section labels, and current-item fill. Preserve the header's `top-0`, `h-24`, and `pt-6` combination so the nav pill remains detached while scrolling.

- [ ] **Step 7: Add responsive and reduced-motion styles**

Use `clamp(4.5rem, 13vw, 12rem)` for the signature, `line-height: 0.72`, overflow clipping, and transform-only entrance motion. In reduced motion, set transform and opacity directly to their final values. At narrow widths, change sitemap columns to one or two columns without horizontal overflow.

- [ ] **Step 8: Run shell verification**

Run:

```bash
npm run lint
npm run check
npm run build
git diff --check
```

Start Vite, open `/design/components/` and `/design/foundations/` at 1440 by 1100 and 390 by 844, scroll the header and footer, and confirm no page-level overflow with `document.documentElement.scrollWidth === innerWidth`.

- [ ] **Step 9: Commit and push the shell outcome**

Stage only the five Task 2 files, commit `feat(shell): expand discovery and footer navigation`, push, and require upstream parity `0 0`.

---

### Task 3: Complete the 15 visual Foundations

**Files:**

- Create: `src/components/foundation-specimens.tsx`
- Modify: `src/pages/foundations-page.tsx`
- Modify: `src/pages/foundation-detail-page.tsx`
- Modify: `src/index.css`
- Modify: `scripts/verify-catalog.mjs`

**Interfaces:**

- Consumes: `FoundationRecord`, `foundationCatalog`, `getFoundation()`, `DocsLayout`, `BentoGrid`, and existing UI primitives.
- Produces: `FoundationSpecimenKey`, `foundationSpecimens: Record<FoundationSpecimenKey, ComponentType>`, and exhaustive 15-route detail rendering.

- [ ] **Step 1: Make the verifier require all 15 specimen keys**

Assert the exact set: `design-token`, `color`, `typography`, `iconography`, `elevation`, `gradient`, `inclusive-design`, `international-design`, `layout`, `motion`, `radius`, `spacing`, `state`, `voice-and-tone`, and `writing`.

- [ ] **Step 2: Run the fast verifier and confirm missing specimens fail**

Run: `npm run verify:catalog`

Expected: FAIL listing the nine Foundation specimens not present in the current six-page implementation.

- [ ] **Step 3: Build an exhaustive specimen registry**

Export a typed union and record:

```ts
export type FoundationSpecimenKey =
  | "design-token"
  | "color"
  | "typography"
  | "iconography"
  | "elevation"
  | "gradient"
  | "inclusive-design"
  | "international-design"
  | "layout"
  | "motion"
  | "radius"
  | "spacing"
  | "state"
  | "voice-and-tone"
  | "writing";

export const foundationSpecimens: Record<
  FoundationSpecimenKey,
  React.ComponentType
> = {
  "design-token": DesignTokenSpecimen,
  color: ColorSpecimen,
  typography: TypographySpecimen,
  iconography: IconographySpecimen,
  elevation: ElevationSpecimen,
  gradient: GradientSpecimen,
  "inclusive-design": InclusiveDesignSpecimen,
  "international-design": InternationalDesignSpecimen,
  layout: LayoutSpecimen,
  motion: MotionSpecimen,
  radius: RadiusSpecimen,
  spacing: SpacingSpecimen,
  state: StateSpecimen,
  "voice-and-tone": VoiceToneSpecimen,
  writing: WritingSpecimen,
};
```

Each specimen renders its named concept directly. Gradient uses a controlled data ramp and mask rather than a decorative page background. Motion includes a static reduced-motion state. International Design shows 30 percent expansion and RTL logical order.

- [ ] **Step 4: Replace the six-item Foundation page**

Render all 15 records with CSS-generated art, variable bento spans, stable DOM order, visible titles, and descriptions. Add search but retain a complete grouped list below the feature grid so every destination remains reachable without filters.

- [ ] **Step 5: Replace the Foundation detail union and record**

Look up each record by slug, render its registered specimen, and derive previous/next links from catalog order. Read detail prose from the exact per-record `intent`, `rules`, `values`, `accessibility`, and `related` fields in `catalog.json`. Unknown slugs return `null` to App's not-found flow.

- [ ] **Step 6: Run Foundation verification**

Run:

```bash
npm run verify:catalog
npm run lint
npm run check
npm run build
git diff --check
```

Browser-check `/foundations/`, `/foundations/gradient/`, `/foundations/international-design/`, and `/foundations/state/` in both themes and one mobile viewport.

- [ ] **Step 7: Commit and push the Foundation outcome**

Stage only the five Task 3 files plus `src/data/catalog.json` when its Foundation content changes. Commit `feat(foundations): document the complete visual foundation set`, push, and require parity `0 0`.

---

### Task 4: Add core action, form, feedback, and display components

**Files:**

- Create: `src/components/ui/alert-dialog.tsx`
- Create: `src/components/ui/aspect-ratio.tsx`
- Create: `src/components/ui/avatar.tsx`
- Create: `src/components/ui/button-group.tsx`
- Create: `src/components/ui/calendar.tsx`
- Create: `src/components/ui/collapsible.tsx`
- Create: `src/components/ui/combobox.tsx`
- Create: `src/components/ui/command.tsx`
- Create: `src/components/ui/data-table.tsx`
- Create: `src/components/ui/date-picker.tsx`
- Create: `src/components/ui/empty.tsx`
- Create: `src/components/ui/input-group.tsx`
- Create: `src/components/ui/input-otp.tsx`
- Create: `src/components/ui/item.tsx`
- Create: `src/components/ui/kbd.tsx`
- Create: `src/components/ui/native-select.tsx`
- Create: `src/components/ui/pagination.tsx`
- Create: `src/components/ui/popover.tsx`
- Create: `src/components/ui/progress.tsx`
- Create: `src/components/ui/radio-group.tsx`
- Create: `src/components/ui/slider.tsx`
- Create: `src/components/ui/spinner.tsx`
- Create: `src/components/ui/textarea.tsx`
- Create: `src/components/ui/toast.tsx`
- Create: `src/components/ui/toggle.tsx`
- Create: `src/components/ui/toggle-group.tsx`
- Create: `src/components/ui/typography.tsx`
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `scripts/verify-catalog.mjs`

**Interfaces:**

- Consumes: Existing `cn()`, `Button`, `Input`, `Popover`, `Select`, `Table`, Radix primitives, and Comfort CSS tokens.
- Produces: named shadcn-compatible exports for the 27 listed modules and module-existence coverage for the corresponding catalog records.

- [ ] **Step 1: Make the verifier check module paths for this family**

For each catalog record whose module belongs to Task 4, call `access()` on the exact local module path. Do not skip a record because another component can approximate it.

- [ ] **Step 2: Run the verifier and confirm missing modules fail**

Run: `npm run verify:catalog`

Expected: FAIL with the first missing Task 4 module path.

- [ ] **Step 3: Install behavior-preserving dependencies**

Run:

```bash
npm install @tanstack/react-table cmdk date-fns input-otp react-day-picker
```

Use these only in Calendar, Command, Data Table, Date Picker, Combobox, and Input OTP. Keep native HTML for Native Select, Progress, and Textarea.

- [ ] **Step 4: Implement disclosure and display primitives**

Implement Alert Dialog, Aspect Ratio, Avatar, Collapsible, Empty, Item, Kbd, Progress, Spinner, Toast, and Typography. Match existing local module conventions: `data-slot` attributes, `cn()` composition, forwarded native props, token classes, visible focus, and no component-local hardcoded brand colors.

- [ ] **Step 5: Implement action grouping and toggles**

Implement Button Group, Toggle, and Toggle Group so grouped controls share one outer silhouette, keyboard focus remains visible, pressed state uses `aria-pressed` or Radix state attributes, and nested radius follows the existing token scale.

- [ ] **Step 6: Implement form primitives and compositions**

Implement Calendar, Combobox, Command, Data Table, Date Picker, Input Group, Input OTP, Native Select, Radio Group, Slider, and Textarea. Preserve labels, error descriptions, input values after validation failures, keyboard selection, paste for OTP, and responsive table overflow.

Use explicit exported composition signatures such as:

```ts
export type DataTableColumn<T> = {
  id: string;
  header: string;
  cell: (row: T) => React.ReactNode;
};

export function DataTable<T>({
  columns,
  data,
  emptyMessage,
}: {
  columns: DataTableColumn<T>[];
  data: T[];
  emptyMessage: string;
});
```

- [ ] **Step 7: Run core component verification**

Run:

```bash
npm run verify:catalog
npm run lint
npm run check
npm run build
git diff --check
```

Expected: every Task 4 module exists, dependency lockfile is stable, TypeScript is strict-clean, and the production build succeeds.

- [ ] **Step 8: Commit and push the core component outcome**

Stage the exact 27 UI files, `package.json`, `package-lock.json`, and `scripts/verify-catalog.mjs`. Commit `feat(components): add core interaction catalog`, push, and require parity `0 0`.

---

### Task 5: Add navigation, overlay, data, layout, and conversation components

**Files:**

- Create: `src/components/ui/attachment.tsx`
- Create: `src/components/ui/bubble.tsx`
- Create: `src/components/ui/carousel.tsx`
- Create: `src/components/ui/chart.tsx`
- Create: `src/components/ui/context-menu.tsx`
- Create: `src/components/ui/direction.tsx`
- Create: `src/components/ui/drawer.tsx`
- Create: `src/components/ui/hover-card.tsx`
- Create: `src/components/ui/marker.tsx`
- Create: `src/components/ui/menubar.tsx`
- Create: `src/components/ui/message.tsx`
- Create: `src/components/ui/message-scroller.tsx`
- Create: `src/components/ui/navigation-menu.tsx`
- Create: `src/components/ui/resizable.tsx`
- Create: `src/components/ui/sidebar.tsx`
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `scripts/verify-catalog.mjs`

**Interfaces:**

- Consumes: Radix menus and overlays, `ScrollArea`, `Button`, catalog families, and Task 4 action/form primitives.
- Produces: named exports for the remaining 15 missing modules, `MessageScrollerApi`, and complete module-existence verification for all 63 catalog records.

- [ ] **Step 1: Require every remaining module path**

Remove any family filter from the module-existence loop so `verify-catalog.mjs` checks all 63 records. Run `npm run verify:catalog` and expect failure at `attachment.tsx`.

- [ ] **Step 2: Install advanced behavior dependencies**

Run:

```bash
npm install embla-carousel-react react-resizable-panels recharts vaul
```

Use Embla only for Carousel, Recharts only for Chart, react-resizable-panels only for Resizable, and Vaul only for Drawer.

- [ ] **Step 3: Implement navigation and overlay modules**

Implement Context Menu, Direction, Drawer, Hover Card, Menubar, Navigation Menu, Resizable, and Sidebar. Preserve keyboard navigation, escape behavior, outside-click behavior, focus restoration, logical direction, labelled resize handles, and mobile sheet fallback for Sidebar.

- [ ] **Step 4: Implement data-rich modules**

Implement Carousel and Chart with responsive containers, named accessible regions, non-color series labels, keyboard carousel controls, and reduced-motion behavior. Chart must expose a data table or text summary in the specimen rather than relying on SVG alone.

- [ ] **Step 5: Implement conversation modules**

Implement Attachment, Bubble, Marker, Message, and Message Scroller as focused composition APIs. Use this scrolling contract:

```ts
export type MessageScrollerApi = {
  jumpToMessage: (id: string) => void;
  jumpToLatest: () => void;
};

export type MessageScrollerProps = {
  activeMessageId?: string;
  children: React.ReactNode;
  onActiveMessageChange?: (id: string) => void;
};
```

Message Scroller keeps streamed content anchored only when the reader is already near the latest message, preserves scroll position when older messages prepend, and reveals a named Jump to latest button when detached.

- [ ] **Step 6: Run advanced component verification**

Run:

```bash
npm run verify:catalog
npm run lint
npm run check
npm run build
git diff --check
```

Expected: all 63 module paths exist and compile, all dependencies are locked, and production build succeeds.

- [ ] **Step 7: Commit and push the advanced component outcome**

Stage the exact 15 UI files, dependency files, and verifier. Commit `feat(components): add advanced and conversation catalog`, push, and require parity `0 0`.

---

### Task 6: Build the complete component documentation experience

**Files:**

- Create: `src/components/specimens/component-preview.tsx`
- Create: `src/components/specimens/action-feedback-specimens.tsx`
- Create: `src/components/specimens/form-specimens.tsx`
- Create: `src/components/specimens/navigation-overlay-specimens.tsx`
- Create: `src/components/specimens/data-layout-specimens.tsx`
- Create: `src/components/specimens/conversation-specimens.tsx`
- Create: `src/components/specimens/specimen-registry.tsx`
- Modify: `src/pages/components-page.tsx`
- Replace: `src/pages/component-detail-page.tsx`
- Modify: `src/index.css`
- Modify: `scripts/verify-catalog.mjs`

**Interfaces:**

- Consumes: all 63 UI modules, `ComponentRecord`, `componentCatalog`, `getComponent()`, `CatalogSearch`, `SyntaxCode`, and `DocsLayout`.
- Produces: `ComponentPreview`, `SpecimenProps`, `specimenRegistry: Record<ComponentSlug, ComponentType<SpecimenProps>>`, complete catalog index, and focused detail template.

- [ ] **Step 1: Add an exhaustiveness assertion for 63 specimen registrations**

Use the TypeScript `satisfies` operator on the registry and add a fast source check that every catalog `specimen` key appears in one specimen module. Run `npm run verify:catalog` and expect missing keys to fail.

- [ ] **Step 2: Extract the Preview and View code group**

Move the current preview toolbar into `component-preview.tsx`. Use one `TabsList` or one `role="group"` with two contiguous controls, `aria-label="Component example view"`, visible selected state, Copy action inside the code panel, and a focusable named region only when code overflows.

- [ ] **Step 3: Implement action and feedback specimens**

Register Accordion, Alert, Alert Dialog, Badge, Button, Button Group, Collapsible, Empty, Progress, Skeleton, Spinner, Toast, Toggle, Toggle Group, and Tooltip. Demonstrate actual open, selected, loading, destructive, and dismissal behavior where applicable.

- [ ] **Step 4: Implement form specimens**

Register Calendar, Checkbox, Combobox, Command, Date Picker, Field, Input, Input Group, Input OTP, Label, Native Select, Radio Group, Select, Slider, Switch, and Textarea. Include one inline error flow that preserves input and a search-empty state with a reset action.

- [ ] **Step 5: Implement navigation and overlay specimens**

Register Breadcrumb, Context Menu, Dialog, Direction, Drawer, Dropdown Menu, Hover Card, Menubar, Navigation Menu, Pagination, Popover, Sheet, Sidebar, and Tabs. Verify trigger focus restoration and current-page semantics.

- [ ] **Step 6: Implement data and layout specimens**

Register Aspect Ratio, Avatar, Card, Carousel, Chart, Data Table, Item, Kbd, Marker, Resizable, Scroll Area, Separator, Table, and Typography. Give Chart a text summary and Data Table labelled sortable controls.

- [ ] **Step 7: Implement conversation specimens**

Register Attachment, Bubble, Message, and Message Scroller alongside Marker's conversational variant. Demonstrate attachment upload state, incoming and outgoing grouping, reactions, collapsible content, anchored streaming, history prepend, and Jump to latest.

- [ ] **Step 8: Replace the catalog index**

Render a count header, controlled search, family filters, asymmetric representative bento cards, and an always-present complete family list. When search returns nothing, show a composed empty state with the query and Reset filters button.

- [ ] **Step 9: Replace the 1,284-line detail page**

Use `getComponent(slug)`, registered specimen lookup, catalog-derived states, detail content, and previous/next records. Keep sections for preview/code, anatomy, variants, states, accessibility, internationalization, implementation, and related destinations. Remove the twelve-key union and hardcoded detail record.

- [ ] **Step 10: Run component documentation checks**

Run:

```bash
npm run verify:catalog
npm run lint
npm run check
npm run build
git diff --check
```

Browser-check `/components/`, `/components/button/`, `/components/calendar/`, `/components/chart/`, `/components/data-table/`, `/components/dialog/`, `/components/input-otp/`, and `/components/message-scroller/` in both themes and one mobile viewport. Exercise every specialized specimen named in the spec.

- [ ] **Step 11: Commit and push the documentation outcome**

Stage only the seven specimen files, two page files, CSS, and verifier. Commit `feat(components): publish the complete component reference`, push, and require parity `0 0`.

---

### Task 7: Synchronize the four DESIGN contracts

**Files:**

- Modify: `DESIGN.md`
- Modify: `DESIGN.en.md`
- Modify: `DESIGN.jp.md`
- Modify: `DESIGN.cn.md`
- Modify: `scripts/verify-catalog.mjs`

**Interfaces:**

- Consumes: final 63/15 catalog, actual component states, shell/footer behavior, and canonical Korean terminology.
- Produces: four structurally aligned normative documents and `verifyDesignEditions()` heading/coverage checks.

- [ ] **Step 1: Add failing document parity assertions**

Parse headings from all four documents, normalize translated heading labels to canonical section identifiers, and require this ordered set:

```js
const requiredSections = [
  "overview",
  "colors",
  "typography",
  "layout",
  "elevation-depth",
  "shapes",
  "foundations",
  "components",
  "responsive-behavior",
  "interaction-motion",
  "accessibility-responsible-ux",
  "state-feedback",
  "content-localization",
  "implementation-contract",
  "verification-contract",
  "iteration-guide",
  "known-gaps",
  "references",
];
```

Also require explicit `63` component and `15` Foundation coverage markers in every edition. Run `npm run verify:catalog` and expect document parity failure.

- [ ] **Step 2: Update canonical Korean DESIGN.md**

Add a Foundation coverage table for all 15 subjects, an eight-family component contract for all 63 entries, specialized behavior for advanced and conversation components, open-rail shell rules, segmented preview/code behavior, footer sitemap/signature motion, content/localization rules, catalog invariants, and final browser/deployment verification. Preserve existing YAML tokens and primary color values.

- [ ] **Step 3: Synchronize English, Japanese, and Chinese editions**

Mirror the Korean section order, tables, MUST/SHOULD/MAY strength, coverage lists, state vocabulary, and verification requirements. Translate prose as complete sentences while preserving code identifiers, token names, component names, numbers, and links.

- [ ] **Step 4: Run document verification**

Run:

```bash
npm run verify:catalog
npx prettier --check DESIGN.md DESIGN.en.md DESIGN.jp.md DESIGN.cn.md
npm run lint
npm run check
npm run build
git diff --check
```

Expected: matching canonical sections, 63/15 coverage in every edition, preserved primary tokens, successful build, and no format or whitespace errors.

- [ ] **Step 5: Commit and push the document contract**

Stage only the four DESIGN files and `scripts/verify-catalog.mjs`. Commit `docs(system): synchronize the complete design contract`, push, and require parity `0 0`.

---

### Task 8: Complete browser, accessibility, deployment, and parity audit

**Files:**

- Modify only files required by defects proven during this task.

**Interfaces:**

- Consumes: all prior task outputs and the acceptance criteria in the approved spec.
- Produces: fresh full-validation evidence, browser evidence, public deployment evidence, optional corrective commit, clean worktree, and upstream parity.

- [ ] **Step 1: Run the complete repository gate**

Run:

```bash
npm run validate
git diff --check
```

Expected: lint, TypeScript, catalog verifier, production build, 84 static routes, and whitespace checks all pass.

- [ ] **Step 2: Prove catalog and route coverage from built artifacts**

Inspect `dist/routes.json` and require 84 unique routes, 63 `/components/` details, 15 `/foundations/` details, both legal routes, and no missing `index.html`. Confirm all four DESIGN files are in `dist`.

- [ ] **Step 3: Run desktop browser QA**

Start the Vite server on its announced port. At 1440 by 1100, verify Home, Components, Foundations, one item from every component family, all specialized specimen routes, Privacy, Terms, and the not-found state. Exercise search, filters, Preview/View code, copy, overlays, forms, carousel, chart summary, table sorting, resizable handles, theme menu, language links, Message Scroller, and footer entry motion.

- [ ] **Step 4: Run mobile and reduced-motion QA**

At 390 by 844 and 320 by 800, verify the mobile menu, complete grouped navigation, catalog search, representative detail pages, tables/code regions, footer sitemap, and clipped signature. Emulate `prefers-reduced-motion: reduce`; prove the footer and Foundation motion specimens render stable final states without travel.

- [ ] **Step 5: Run accessibility and runtime diagnostics**

Run Axe on Home, Components, Foundations, Calendar, Dialog, Data Table, and Message Scroller. Require zero violations. Record incomplete contrast checks separately and inspect their actual backgrounds. Require zero console errors and zero page-level horizontal overflow on every sampled route.

- [ ] **Step 6: Correct only proven defects**

For each failing acceptance criterion, add the narrowest source correction, rerun the exact failing browser or build check, then rerun `npm run validate` and `git diff --check`. If a correction is needed, stage only its explicit files, commit `fix(site): resolve final catalog verification defects`, push normally, and require parity `0 0`.

- [ ] **Step 7: Verify GitHub Pages publication**

Wait for the workflow triggered by the final pushed commit. Require successful completion, open `https://chann.github.io/design/`, confirm the public route manifest reports 84 routes, verify representative component and Foundation paths, and confirm the deployed footer signature and current copy are present.

- [ ] **Step 8: Prove final repository state**

Run:

```bash
git log --oneline 30a2e83..HEAD
git status --short --branch
git rev-list --left-right --count HEAD...@{u}
git ls-remote origin refs/heads/main
```

Expected: all planned checkpoints are published, the worktree is clean, local/tracking parity is `0 0`, and remote main resolves to local HEAD.
