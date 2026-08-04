import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

import { catalogRoutes, readCatalog } from "./catalog-contract.mjs";

const root = new URL("../", import.meta.url);
const dist = new URL("../dist/", import.meta.url);
const routes = catalogRoutes(await readCatalog());

for (const route of routes) {
  if (route === "/") continue;

  const target = new URL(`.${route}/index.html`, dist);
  await mkdir(dirname(target.pathname), { recursive: true });
  await copyFile(new URL("index.html", dist), target);
}

await copyFile(new URL("index.html", dist), new URL("404.html", dist));

for (const file of [
  ".nojekyll",
  "DESIGN.md",
  "DESIGN.en.md",
  "DESIGN.cn.md",
  "DESIGN.jp.md",
]) {
  await copyFile(new URL(file, root), new URL(file, dist));
}

for (const file of ["favicon.png", "comfort-hero.webp"]) {
  await copyFile(new URL(`assets/${file}`, root), new URL(file, dist));
}

await mkdir(new URL("third-party/", dist), { recursive: true });
await copyFile(
  new URL("assets/icons/Phosphor-LICENSE.txt", root),
  new URL("third-party/Phosphor-LICENSE.txt", dist),
);

await writeFile(
  new URL("routes.json", dist),
  `${JSON.stringify(routes, null, 2)}\n`,
);
