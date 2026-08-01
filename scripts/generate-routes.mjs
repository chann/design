import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

const root = new URL("../", import.meta.url);
const dist = new URL("../dist/", import.meta.url);
const routes = JSON.parse(
  await readFile(new URL("../routes.json", import.meta.url), "utf8"),
);

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
  "DESIGN.ko.md",
  "DESIGN.cn.md",
  "DESIGN.jp.md",
]) {
  await copyFile(new URL(file, root), new URL(file, dist));
}

for (const file of ["favicon.png", "comfort-hero.webp"]) {
  await copyFile(new URL(`assets/${file}`, root), new URL(file, dist));
}

await writeFile(
  new URL("routes.json", dist),
  `${JSON.stringify(routes, null, 2)}\n`,
);
