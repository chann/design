import cn from "./cn";
import en from "./en";
import jp from "./jp";
import ko from "./ko";
import type { HomeContent, HomeLocale } from "./types";

export { homeLocales, type HomeContent, type HomeLocale } from "./types";

export const homeContents = {
  en,
  ko,
  jp,
  cn,
} as const satisfies Record<HomeLocale, HomeContent>;

export function homePathForLocale(locale: HomeLocale) {
  return homeContents[locale].path;
}
