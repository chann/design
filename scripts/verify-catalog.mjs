import { readFile } from "node:fs/promises";

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
const foundationSlugs = catalog.foundations.map(({ slug }) => slug);

assert(catalog.foundations.length === 15, "Expected 15 Foundations");
assert(new Set(foundationSlugs).size === 15, "Foundation slugs must be unique");
assert(catalogRoutes(catalog).length === 80, "Expected 80 static routes");

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

for (const record of catalog.foundations) {
  assert(record.title.trim().length > 0, `Missing title for ${record.slug}`);
  assert(
    record.description.trim().length > 0,
    `Missing description for ${record.slug}`,
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

const designDocumentNames = [
  "DESIGN.md",
  "DESIGN.en.md",
  "DESIGN.jp.md",
  "DESIGN.cn.md",
];
const designDocuments = await Promise.all(
  designDocumentNames.map(async (file) => ({
    file,
    source: await readFile(new URL(file, root), "utf8"),
  })),
);
const requiredDesignHeadings = [
  "## Overview",
  "## Colors",
  "## Typography",
  "## Layout",
  "## Elevation & Depth",
  "## Shapes",
  "## Foundations",
  "## Components",
  "## Do's and Don'ts",
  "## Responsive Behavior",
  "## Interaction & Motion",
  "## Accessibility & Responsible UX",
  "## State & Feedback",
  "## Content & Localization",
  "## Implementation Guide",
  "## Verification",
  "## Iteration Guide",
  "## Known Gaps",
  "## References",
];
const canonicalFrontMatter = designDocuments[0].source.match(
  /^---\n([\s\S]*?)\n---/,
)?.[1];

for (const { file, source } of designDocuments) {
  let previousHeadingIndex = -1;
  for (const heading of requiredDesignHeadings) {
    assert(source.includes(heading), `${file} is missing ${heading}`);
    const headingIndex = source.indexOf(heading);
    assert(
      headingIndex > previousHeadingIndex,
      `${file} has an invalid section order at ${heading}`,
    );
    previousHeadingIndex = headingIndex;
  }
  const frontMatter = source.match(/^---\n([\s\S]*?)\n---/)?.[1];
  assert(
    frontMatter === canonicalFrontMatter,
    `${file} token front matter drifted`,
  );
  assert(source.includes("15"), `${file} must document 15 Foundations`);
  assert(
    source.includes("Comfort DESIGN.md"),
    `${file} must document the footer signature`,
  );
  assert(!source.includes("SSOT"), `${file} must avoid the SSOT abbreviation`);
  for (const record of catalog.foundations) {
    assert(source.includes(record.title), `${file} is missing ${record.title}`);
  }
}

const css = await readFile(new URL("src/index.css", root), "utf8");
assert(css.includes("#0066cc"), "Light primary must remain #0066CC");
assert(css.includes("#78b7ff"), "Dark primary must remain #78B7FF");

console.log("Verified 15 Foundations and 80 routes.");
