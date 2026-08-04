import { componentCatalog, foundationCatalog } from "./catalog";

export type NavItem = {
  href: string;
  title: string;
  description: string;
};

export type Principle = {
  id: string;
  number: string;
  title: string;
  comfortTitle: string;
  summary: string;
  practice: string;
  question: string;
};

export type DesignEdition = {
  code: "ko" | "en" | "jp" | "cn";
  href: string;
  label: string;
  languageTag: string;
  note: string;
};

export const designEditions: DesignEdition[] = [
  {
    code: "ko",
    href: "/DESIGN.md",
    label: "한국어",
    languageTag: "ko",
    note: "기본",
  },
  {
    code: "en",
    href: "/DESIGN.en.md",
    label: "English",
    languageTag: "en",
    note: "Translation",
  },
  {
    code: "jp",
    href: "/DESIGN.jp.md",
    label: "日本語",
    languageTag: "ja",
    note: "翻訳",
  },
  {
    code: "cn",
    href: "/DESIGN.cn.md",
    label: "简体中文",
    languageTag: "zh-CN",
    note: "翻译",
  },
];

export const primaryNav = [
  { href: "/principles", title: "Principles" },
  { href: "/foundations", title: "Foundations" },
  { href: "/components", title: "Components" },
];

export const principles: Principle[] = [
  {
    id: "natural",
    number: "01",
    title: "Natural",
    comfortTitle: "Make the next step feel familiar",
    summary:
      "Match the way people already perceive, decide, and move. Interfaces should lower both cognitive and physical effort.",
    practice:
      "Use familiar language, preserve spatial relationships, and place primary actions where intent naturally resolves.",
    question: "Would this still feel obvious without an explanation?",
  },
  {
    id: "certain",
    number: "02",
    title: "Certain",
    comfortTitle: "Turn consistency into trust",
    summary:
      "Stable rules, restrained choices, and repeatable patterns let people act without second-guessing the interface.",
    practice:
      "Build from semantic tokens, keep component contracts predictable, and reserve exceptions for meaningful differences.",
    question: "Can someone predict what happens before they act?",
  },
  {
    id: "meaningful",
    number: "03",
    title: "Meaningful",
    comfortTitle: "Guide attention toward the goal",
    summary:
      "Every visual and interaction choice should clarify purpose, confirm progress, or help someone recover.",
    practice:
      "Center the task, return feedback close to the action, and remove decoration that competes with the next decision.",
    question: "Does this help complete the task or understand its state?",
  },
  {
    id: "growing",
    number: "04",
    title: "Growing",
    comfortTitle: "Reveal capability with confidence",
    summary:
      "Products should expand with their users: useful at first contact, discoverable over time, and adaptable without surprise.",
    practice:
      "Layer advanced controls, preserve learned behavior, and treat feedback as an input to the system rather than an exception.",
    question: "Can this become more powerful without becoming less familiar?",
  },
];

export const foundationItems: NavItem[] = foundationCatalog.map(
  ({ slug, title, description }) => ({
    href: `/foundations/${slug}`,
    title,
    description,
  }),
);

export const componentItems: NavItem[] = componentCatalog.map(
  ({ slug, title, description }) => ({
    href: `/components/${slug}`,
    title,
    description,
  }),
);

export const docsNavigation = [
  { title: "Overview", items: [{ href: "/principles", title: "Principles" }] },
  {
    title: "Foundations",
    items: [{ href: "/foundations", title: "Overview" }, ...foundationItems],
  },
  {
    title: "Components",
    items: [{ href: "/components", title: "Overview" }, ...componentItems],
  },
];

export function siteHref(path: string, basePath = import.meta.env.BASE_URL) {
  if (/^(https?:|#)/.test(path)) return path;
  const suffixIndex = path.search(/[?#]/);
  const pathname = suffixIndex === -1 ? path : path.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? "" : path.slice(suffixIndex);
  const base = basePath.replace(/\/$/, "");
  if (/\.[a-z]+$/i.test(pathname)) return `${base}${pathname}${suffix}`;
  const route = pathname === "/" ? `${base}/` : `${base}${pathname}/`;
  return `${route}${suffix}`;
}

export function currentRoute() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  let route = window.location.pathname;
  if (base && route.startsWith(base)) route = route.slice(base.length);
  route = `/${route}`.replace(/\/+/g, "/").replace(/\/$/, "");
  return route || "/";
}
