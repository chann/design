import cn from "./cn";
import en from "./en";
import jp from "./jp";
import ko from "./ko";
import type { HomeContent, HomeLocale } from "./types";

export { homeLocales, type HomeContent, type HomeLocale } from "./types";

export const homeContents = {
  ko,
  en,
  jp,
  cn,
} as const satisfies Record<HomeLocale, HomeContent>;

const localeByRoute = new Map<string, HomeLocale>(
  Object.values(homeContents).map((content) => [content.path, content.locale]),
);

export function homeLocaleFromRoute(route: string): HomeLocale | null {
  return localeByRoute.get(route) ?? null;
}

export function homePathForLocale(locale: HomeLocale) {
  return homeContents[locale].path;
}
