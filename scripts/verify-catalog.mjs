import { access, readFile } from "node:fs/promises";

import { catalogRoutes, readCatalog } from "./catalog-contract.mjs";

const root = new URL("../", import.meta.url);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const catalog = await readCatalog();
const foundationSpecimens = await readFile(
  new URL("src/components/foundation-specimens.tsx", root),
  "utf8",
);
const componentSlugs = catalog.components.map(({ slug }) => slug);
const foundationSlugs = catalog.foundations.map(({ slug }) => slug);

assert(catalog.components.length === 63, "Expected 63 components");
assert(catalog.foundations.length === 15, "Expected 15 Foundations");
assert(new Set(componentSlugs).size === 63, "Component slugs must be unique");
assert(new Set(foundationSlugs).size === 15, "Foundation slugs must be unique");
assert(catalogRoutes(catalog).length === 84, "Expected 84 static routes");

const coreModuleSlugs = new Set([
  "alert-dialog",
  "aspect-ratio",
  "avatar",
  "button-group",
  "calendar",
  "collapsible",
  "combobox",
  "command",
  "data-table",
  "date-picker",
  "empty",
  "input-group",
  "input-otp",
  "item",
  "kbd",
  "native-select",
  "pagination",
  "popover",
  "progress",
  "radio-group",
  "slider",
  "spinner",
  "textarea",
  "toast",
  "toggle",
  "toggle-group",
  "typography",
]);

for (const component of catalog.components.filter(({ slug }) =>
  coreModuleSlugs.has(slug),
)) {
  await access(new URL(`src/components/ui/${component.module}`, root));
}

for (const specimen of [
  "design-token",
  "color",
  "typography",
  "iconography",
  "elevation",
  "gradient",
  "inclusive-design",
  "international-design",
  "layout",
  "motion",
  "radius",
  "spacing",
  "state",
  "voice-and-tone",
  "writing",
]) {
  assert(
    foundationSpecimens.includes(`"${specimen}":`) ||
      foundationSpecimens.includes(`  ${specimen}:`),
    `Foundation specimen is missing: ${specimen}`,
  );
}

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

await access(new URL("DESIGN.md", root));
const css = await readFile(new URL("src/index.css", root), "utf8");
assert(css.includes("#0066cc"), "Light primary must remain #0066CC");
assert(css.includes("#78b7ff"), "Dark primary must remain #78B7FF");

console.log("Verified 63 components, 15 Foundations, and 84 routes.");
