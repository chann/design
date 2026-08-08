import { readFile } from "node:fs/promises";

const catalogUrl = new URL("../src/data/catalog.json", import.meta.url);

export async function readCatalog() {
  return JSON.parse(await readFile(catalogUrl, "utf8"));
}

export function catalogRoutes(catalog) {
  const documentationRoutes = [
    "/",
    "/principles",
    "/foundations",
    ...catalog.foundations.map(
      (foundation) => `/foundations/${foundation.slug}`,
    ),
    "/privacy",
    "/terms",
  ];

  return ["", "/ko", "/jp", "/cn"].flatMap((prefix) =>
    documentationRoutes.map((route) =>
      route === "/" ? prefix || "/" : `${prefix}${route}`,
    ),
  );
}
