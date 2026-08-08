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
    nav: { principles: string; foundations: string; components: string };
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
    workbench: {
      accessibleLabel: string;
      title: string;
      description: string;
      tabsLabel: string;
      tokensTab: string;
      componentsTab: string;
      sampleFieldLabel: string;
      sampleFieldPlaceholder: string;
      sampleSwitchLabel: string;
      sampleReadyBadge: string;
      sampleSavedBadge: string;
      samplePrimaryAction: string;
      sampleSecondaryAction: string;
    };
  };
  summary: {
    accessibleLabel: string;
    items: readonly { value: string; label: string }[];
  };
  tagline: { accessibleLabel: string; segments: readonly string[] };
  principles: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly { title: string; description: string }[];
  };
  workflow: {
    eyebrow: string;
    title: string;
    description: string;
    steps: readonly { number: string; title: string; description: string }[];
  };
  systemPreview: {
    eyebrow: string;
    title: string;
    description: string;
    action: string;
    panelTitle: string;
    metrics: readonly { value: string; label: string }[];
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
      legal: string;
    };
    links: {
      overview: string;
      principles: string;
      foundationCatalog: string;
      componentCatalog: string;
      github: string;
      privacy: string;
      terms: string;
    };
    signatureLabel: string;
  };
};
