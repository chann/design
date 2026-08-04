import type { HomeContent } from "./types";

const en = {
  locale: "en",
  languageTag: "en",
  path: "/",
  metadata: {
    title: "Comfort DESIGN.md | Define your shadcn theme",
    description:
      "Start with accessible shadcn/ui components, then use DESIGN.md to define your product’s tokens, states, motion, content, and verification rules.",
  },
  shell: {
    skipToContent: "Skip to content",
    homeLabel: "Comfort DESIGN.md home",
    primaryNavigationLabel: "Primary navigation",
    mobileNavigationTitle: "Comfort navigation",
    mobileNavigationDescription:
      "Browse principles, Foundations, and components.",
    openNavigation: "Open navigation",
    closeNavigation: "Close navigation",
    nav: {
      principles: "Principles",
      foundations: "Foundations",
      components: "Components",
    },
    language: "Language",
    languageMenuLabel: "Homepage languages",
    theme: "Theme",
    appearance: "Appearance",
    themes: { light: "Light", dark: "Dark", system: "System" },
  },
  hero: {
    eyebrow: "shadcn/ui + DESIGN.md",
    accessibleTitle:
      "Start with shadcn components. Define your theme in DESIGN.md.",
    titleLines: [
      "Start with shadcn components.",
      "Define your theme",
      "in DESIGN.md.",
    ],
    description:
      "Keep shadcn/ui’s accessible behavior, then define product color, type, spacing, states, and motion in DESIGN.md.",
    primaryAction: "Read DESIGN.md",
    languageNavigationLabel: "Homepage languages",
  },
  proof: {
    accessibleLabel: "Comfort in numbers",
    items: [
      { value: "4", label: "language editions" },
      { value: "15", label: "semantic Foundations" },
      { value: "63", label: "component references" },
    ],
  },
  tagline: {
    accessibleLabel:
      "Start with shadcn components. Define your product theme in DESIGN.md.",
    segments: [
      "Start",
      "with",
      "shadcn",
      "components.",
      "Define",
      "your",
      "product",
      "theme",
      "with",
      "DESIGN.md.",
    ],
  },
  benefits: {
    eyebrow: "A baseline you can make your own",
    title: "Keep accessible components. Replace generic decisions.",
    description:
      "Use trusted shadcn/ui components as the baseline. Define color, type, spacing, states, and motion in DESIGN.md.",
    items: [
      {
        title: "Use trusted shadcn/ui as the baseline",
        description:
          "Use shadcn and Radix behavior as the foundation instead of rebuilding keyboard, focus, and overlay mechanics.",
      },
      {
        title: "Define the details in DESIGN.md",
        description:
          "Map color, type, spacing, radius, state, and motion to semantic roles in DESIGN.md before styling components.",
      },
      {
        title: "Keep the team on one document",
        description:
          "Designers, engineers, and coding agents work from the same rules rather than translating scattered preferences.",
      },
      {
        title: "Verify the complete experience",
        description:
          "Responsive behavior, accessibility, localization, feedback, and recovery remain part of the system through release.",
      },
    ],
    tokenFlow: ["shadcn source", "DESIGN.md role", "product interface"],
  },
  workflow: {
    eyebrow: "How it works",
    title: "From shadcn/ui to a theme defined in DESIGN.md.",
    description:
      "Use trusted shadcn/ui as the baseline, define the design details in DESIGN.md, then verify every state people will experience.",
    steps: [
      {
        number: "01",
        title: "Use shadcn/ui as the baseline",
        description:
          "Start with shadcn/ui components whose accessibility and interaction behavior have already been tested.",
      },
      {
        number: "02",
        title: "Define design details in DESIGN.md",
        description:
          "Connect semantic tokens, states, content, motion, and accessibility guidance to the components you added.",
      },
      {
        number: "03",
        title: "Verify every state",
        description:
          "Check responsive behavior, themes, keyboard use, feedback, localization, and recovery before release.",
      },
    ],
  },
  productProof: {
    eyebrow: "Proof in the product",
    title: "The reference uses the workflow it documents.",
    description:
      "This site also starts with shadcn components and applies the semantic roles in DESIGN.md. You can inspect the resulting Foundations, component states, and review checks.",
    action: "Inspect the component references",
    panelTitle: "Live reference",
    reviewed: "August 2026",
    metrics: [
      { value: "336", label: "static routes" },
      { value: "15", label: "semantic Foundations" },
      { value: "63", label: "component references" },
      { value: "4", label: "supported languages" },
    ],
    verification:
      "Route, content, type, lint, and production build checks are part of the repository.",
  },
  faq: {
    eyebrow: "Questions before you start",
    title: "Know what shadcn provides and what DESIGN.md changes.",
    description:
      "The component code stays familiar. DESIGN.md adapts its visual language, behavior, and release checks to the product.",
    items: [
      {
        question: "How do shadcn/ui and DESIGN.md work together?",
        answer:
          "shadcn/ui provides the baseline component source and interaction primitives. DESIGN.md defines the product-specific tokens, states, motion, content, accessibility, and verification applied to that source.",
      },
      {
        question: "Can we adapt the component code?",
        answer:
          "Yes. Add only the shadcn components the product needs, then keep improving them with the guidance in DESIGN.md.",
      },
      {
        question: "Does DESIGN.md replace our brand?",
        answer:
          "No. It records your brand roles and product behavior so color, typography, shape, voice, and interaction stay coherent across contributors.",
      },
      {
        question: "Can coding agents use DESIGN.md?",
        answer:
          "Yes. Give an agent DESIGN.md before UI work so implementation and review use the same semantic roles and acceptance checks.",
      },
      {
        question: "How is accessibility handled?",
        answer:
          "Keep the proven semantics and keyboard behavior of the underlying primitives, then define contrast, focus, motion, content, and recovery requirements in DESIGN.md.",
      },
      {
        question: "Can we adopt it gradually in an existing product?",
        answer:
          "Yes. Start with one screen or a frequently used component, document its tokens and states in DESIGN.md, then expand the scope.",
      },
    ],
  },
  cta: {
    eyebrow: "Clear guidance for every interface decision",
    title: "Start with shadcn. Shape the product in DESIGN.md.",
    description:
      "Choose the shadcn components your product needs, then capture brand, behavior, accessibility, and release checks in DESIGN.md.",
    action: "Read DESIGN.md",
  },
  footer: {
    description:
      "A practical DESIGN.md for shaping shadcn color, type, spacing, states, and motion around your product.",
    navigationLabel: "Footer navigation",
    groups: {
      system: "System",
      foundations: "Foundations",
      resources: "Resources",
      legal: "Legal",
    },
    links: {
      overview: "Overview",
      principles: "Principles",
      foundationCatalog: "Foundation catalog",
      componentCatalog: "Component catalog",
      github: "GitHub source",
      privacy: "Privacy",
      terms: "Terms",
    },
    signatureLabel:
      "Comfort DESIGN.md for defining a product theme with shadcn components",
  },
} satisfies HomeContent;

export default en;
