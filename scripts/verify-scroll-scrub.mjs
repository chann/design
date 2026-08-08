import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import {
  DIM_WORD_OPACITY,
  calculateElementScrollProgress,
  calculateWordOpacity,
  clampScrollProgress,
} from "../src/lib/scroll-scrub.ts";

const viewportHeight = 1_000;
const height = 120;

assert.equal(clampScrollProgress(-1), 0);
assert.equal(clampScrollProgress(2), 1);
assert.equal(
  calculateElementScrollProgress({ top: 850, height }, viewportHeight),
  0,
);
assert.ok(
  Math.abs(
    calculateElementScrollProgress({ top: 615, height }, viewportHeight) - 0.5,
  ) < 1e-10,
);
assert.equal(
  calculateElementScrollProgress({ top: 380, height }, viewportHeight),
  1,
);
assert.equal(
  calculateElementScrollProgress({ top: 850, height }, viewportHeight),
  0,
  "scrolling back up must dim the sentence again",
);

assert.equal(calculateWordOpacity(0, 0, 4), DIM_WORD_OPACITY);
assert.ok(Math.abs(calculateWordOpacity(0.125, 0, 4) - 0.74) < 1e-10);
assert.equal(calculateWordOpacity(0.25, 0, 4), 1);
assert.equal(calculateWordOpacity(0.25, 1, 4), DIM_WORD_OPACITY);
assert.equal(calculateWordOpacity(1, 3, 4), 1);

assert.equal(calculateElementScrollProgress({ top: NaN, height }, 1_000), 1);
assert.equal(
  calculateElementScrollProgress({ top: 850, height: -1 }, 1_000),
  1,
);
assert.equal(calculateElementScrollProgress({ top: 850, height }, 0), 1);
assert.equal(calculateWordOpacity(NaN, 0, 4), 1);
assert.equal(calculateWordOpacity(0.5, -1, 4), 1);
assert.equal(calculateWordOpacity(0.5, 4, 4), 1);
assert.equal(calculateWordOpacity(0.5, 0, 0), 1);

const [cssSource, homePageSource, footerSignatureSource] = await Promise.all([
  readFile(new URL("../src/index.css", import.meta.url), "utf8"),
  readFile(new URL("../src/pages/home-page.tsx", import.meta.url), "utf8"),
  readFile(
    new URL("../src/components/footer-signature.tsx", import.meta.url),
    "utf8",
  ),
]);

assert.match(cssSource, /\.landing-reveal\s*\{[^}]*translateY\(16px\)/s);
assert.match(cssSource, /\.landing-reveal\s*\{[^}]*480ms/s);
assert.doesNotMatch(cssSource, /^\s*filter:\s*blur/m);
assert.ok(
  homePageSource.includes('typeof IntersectionObserver === "undefined"'),
);
assert.ok(
  footerSignatureSource.includes(
    'typeof IntersectionObserver === "undefined"',
  ),
);

console.log("Scroll scrub verification passed");
