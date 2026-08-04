import en from "./en";
import type { HomeLocale } from "./types";

export { homeLocales, type HomeContent, type HomeLocale } from "./types";

export const homeContents = { en } as const;

export function homeLocaleFromRoute(route: string): HomeLocale | null {
  if (route === "/") return "en";
  return null;
}

export function homePathForLocale(locale: HomeLocale) {
  return locale === "ko" ? "/" : `/${locale}`;
}
