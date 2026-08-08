export const homeLocales = ["en", "ko", "jp", "cn"] as const;

export type HomeLocale = (typeof homeLocales)[number];

export type HomeContent = {
  locale: HomeLocale;
  languageTag: "ko" | "en" | "ja" | "zh-CN";
  path: "/" | "/ko" | "/jp" | "/cn";
  metadata: { title: string; description: string };
  shell: {
    skipToContent: string;
    homeLabel: string;
    primaryNavigationLabel: string;
    mobileNavigationTitle: string;
    mobileNavigationDescription: string;
    openNavigation: string;
    closeNavigation: string;
    nav: { principles: string; foundations: string };
    language: string;
    languageMenuLabel: string;
    theme: string;
    appearance: string;
    themes: { light: string; dark: string; system: string };
  };
  hero: {
    eyebrow: string;
    accessibleTitle: string;
    titleLines: readonly string[];
    description: string;
    primaryAction: string;
    languageNavigationLabel: string;
  };
  tagline: { accessibleLabel: string; segments: readonly string[] };
  principles: {
    description: string;
    items: readonly { title: string; description: string }[];
  };
  workflow: {
    eyebrow: string;
    title: string;
    description: string;
    steps: readonly { number: string; title: string; description: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly { question: string; answer: string }[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    action: string;
  };
  footer: {
    description: string;
    navigationLabel: string;
    groups: {
      system: string;
      foundations: string;
      resources: string;
    };
    links: {
      overview: string;
      principles: string;
      foundationCatalog: string;
      github: string;
    };
    signatureLabel: string;
  };
};
