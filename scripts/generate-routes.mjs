import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

import { catalogRoutes, readCatalog } from "./catalog-contract.mjs";
import cn from "../src/content/home/cn.ts";
import en from "../src/content/home/en.ts";
import jp from "../src/content/home/jp.ts";
import ko from "../src/content/home/ko.ts";

const root = new URL("../", import.meta.url);
const dist = new URL("../dist/", import.meta.url);
const routes = catalogRoutes(await readCatalog());
const homeContents = [ko, en, jp, cn];
const homeByPath = new Map(
  homeContents.map((content) => [content.path, content]),
);
const template = await readFile(new URL("index.html", dist), "utf8");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceAttribute(html, marker, attribute, value) {
  const expression = new RegExp(
    `(<(?:meta|link)(?=[^>]*data-home-meta="${marker}")[^>]*${attribute}=")[^"]*(")`,
  );
  return html.replace(expression, (_, before, after) =>
    `${before}${escapeHtml(value)}${after}`,
  );
}

function canonicalUrl(route) {
  return new URL(
    route === "/" ? "/design/" : `/design${route}/`,
    "https://chann.github.io",
  ).href;
}

function localizedHomeHtml(content) {
  const canonical = canonicalUrl(content.path);
  let html = template.replace(
    /<html lang="[^"]+"/,
    `<html lang="${content.languageTag}"`,
  );
  html = replaceAttribute(
    html,
    "description",
    "content",
    content.metadata.description,
  );
  html = replaceAttribute(
    html,
    "og-title",
    "content",
    content.metadata.title,
  );
  html = replaceAttribute(
    html,
    "og-description",
    "content",
    content.metadata.description,
  );
  html = replaceAttribute(html, "og-url", "content", canonical);
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
  html = replaceAttribute(html, "canonical", "href", canonical);
  return html.replace(
    /(<title data-home-meta="title">)[\s\S]*?(<\/title>)/,
    (_, before, after) =>
      `${before}${escapeHtml(content.metadata.title)}${after}`,
  );
}

function documentationHtml(route) {
  const title = "Comfort Design System | Documentation";
  const description =
    "Browse the Comfort principles, Foundations, component references, accessibility guidance, and implementation checks.";
  const canonical = canonicalUrl(route);
  let html = template.replace(/<html lang="[^"]+"/, '<html lang="en"');
  html = replaceAttribute(html, "description", "content", description);
  html = replaceAttribute(html, "og-title", "content", title);
  html = replaceAttribute(html, "og-description", "content", description);
  html = replaceAttribute(html, "og-url", "content", canonical);
  html = replaceAttribute(html, "twitter-title", "content", title);
  html = replaceAttribute(
    html,
    "twitter-description",
    "content",
    description,
  );
  html = replaceAttribute(html, "canonical", "href", canonical);
  html = html.replace(
    /\n\s*<link(?=[^>]*data-home-alternate="true")[^>]*\/>/g,
    "",
  );
  return html.replace(
    /(<title data-home-meta="title">)[\s\S]*?(<\/title>)/,
    (_, before, after) => `${before}${title}${after}`,
  );
}

const koreanHtml = localizedHomeHtml(ko);
await writeFile(new URL("index.html", dist), koreanHtml);

for (const route of routes) {
  if (route === "/") continue;

  const target = new URL(`.${route}/index.html`, dist);
  await mkdir(dirname(target.pathname), { recursive: true });
  const localizedHome = homeByPath.get(route);
  await writeFile(
    target,
    localizedHome
      ? localizedHomeHtml(localizedHome)
      : documentationHtml(route),
  );
}

await writeFile(new URL("404.html", dist), koreanHtml);

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
