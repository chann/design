import { access, readFile } from "node:fs/promises";

import { catalogRoutes, readCatalog } from "./catalog-contract.mjs";

const root = new URL("../", import.meta.url);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

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

await access(new URL("DESIGN.md", root));
const css = await readFile(new URL("src/index.css", root), "utf8");
assert(css.includes("#0066cc"), "Light primary must remain #0066CC");
assert(css.includes("#78b7ff"), "Dark primary must remain #78B7FF");

console.log("Verified 63 components, 15 Foundations, and 84 routes.");
