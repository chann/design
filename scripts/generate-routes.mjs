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
const homeContents = [en, ko, jp, cn];
const homeByPath = new Map(
  homeContents.map((content) => [content.path, content]),
);
const homeByLocale = new Map(
  homeContents.map((content) => [content.locale, content]),
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
  return html.replace(
    expression,
    (_, before, after) => `${before}${escapeHtml(value)}${after}`,
  );
}

function canonicalUrl(route) {
  return new URL(
    route === "/" ? "/design/" : `/design${route}/`,
    "https://chann.github.io",
  ).href;
}

function publishedRoute(contentRoute, locale) {
  const prefix = homeByLocale.get(locale).path;
  if (contentRoute === "/") return prefix;
  return prefix === "/" ? contentRoute : `${prefix}${contentRoute}`;
}

function parsePublishedRoute(route) {
  for (const content of homeContents.filter((item) => item.path !== "/")) {
    if (route === content.path || route.startsWith(`${content.path}/`)) {
      return {
        content,
        contentRoute: route.slice(content.path.length) || "/",
      };
    }
  }
  return { content: en, contentRoute: route };
}

function replaceAlternate(html, languageTag, route) {
  const expression = new RegExp(
    `(<link(?=[^>]*data-home-alternate="true")(?=[^>]*hreflang="${languageTag}")[^>]*href=")[^"]*(")`,
  );
  return html.replace(
    expression,
    (_, before, after) => `${before}${canonicalUrl(route)}${after}`,
  );
}

function syncAlternates(html, contentRoute) {
  let updated = html;
  for (const content of homeContents) {
    updated = replaceAlternate(
      updated,
      content.languageTag,
      publishedRoute(contentRoute, content.locale),
    );
  }
  return replaceAlternate(
    updated,
    "x-default",
    publishedRoute(contentRoute, "en"),
  );
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
  html = replaceAttribute(html, "og-title", "content", content.metadata.title);
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
  html = html.replace(
    /(<title data-home-meta="title">)[\s\S]*?(<\/title>)/,
    (_, before, after) =>
      `${before}${escapeHtml(content.metadata.title)}${after}`,
  );
  return syncAlternates(html, "/");
}

function documentationHtml(route) {
  const { content, contentRoute } = parsePublishedRoute(route);
  const metadata = {
    ko: {
      title: "Comfort DESIGN.md | 가이드",
      description:
        "Comfort의 원칙, 파운데이션, 컴포넌트 예시와 접근성·구현 가이드를 살펴보세요.",
    },
    en: {
      title: "Comfort DESIGN.md | Guides",
      description:
        "Browse Comfort principles, foundations, component examples, accessibility notes, and implementation guidance.",
    },
    jp: {
      title: "Comfort DESIGN.md | ガイド",
      description:
        "Comfortの原則、ファウンデーション、コンポーネント例、アクセシビリティと実装ガイドを確認できます。",
    },
    cn: {
      title: "Comfort DESIGN.md | 指南",
      description: "查看Comfort的原则、基础、组件示例、无障碍说明与实现指南。",
    },
  }[content.locale];
  const { title, description } = metadata;
  const canonical = canonicalUrl(route);
  let html = template.replace(
    /<html lang="[^"]+"/,
    `<html lang="${content.languageTag}"`,
  );
  html = replaceAttribute(html, "description", "content", description);
  html = replaceAttribute(html, "og-title", "content", title);
  html = replaceAttribute(html, "og-description", "content", description);
  html = replaceAttribute(html, "og-url", "content", canonical);
  html = replaceAttribute(html, "twitter-title", "content", title);
  html = replaceAttribute(html, "twitter-description", "content", description);
  html = replaceAttribute(html, "canonical", "href", canonical);
  html = html.replace(
    /(<title data-home-meta="title">)[\s\S]*?(<\/title>)/,
    (_, before, after) => `${before}${escapeHtml(title)}${after}`,
  );
  return syncAlternates(html, contentRoute);
}

const englishHtml = localizedHomeHtml(en);
await writeFile(new URL("index.html", dist), englishHtml);

for (const route of routes) {
  if (route === "/") continue;

  const target = new URL(`.${route}/index.html`, dist);
  await mkdir(dirname(target.pathname), { recursive: true });
  const localizedHome = homeByPath.get(route);
  await writeFile(
    target,
    localizedHome ? localizedHomeHtml(localizedHome) : documentationHtml(route),
  );
}

await writeFile(new URL("404.html", dist), englishHtml);

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
