import type { HomeContent } from "./types";

const en = {
  locale: "en",
  languageTag: "en",
  path: "/",
  metadata: {
    title: "Comfort DESIGN.md | Shape shadcn/ui for your product",
    description:
      "Start with accessible shadcn/ui components, then shape color, type, spacing, states, and motion around your DESIGN.md.",
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
      "Start with shadcn/ui. Finish the design for your product.",
    titleLines: [
      "Start with shadcn/ui.",
      "Finish the design",
      "for your product.",
    ],
    description:
      "Keep the accessible components, then shape color, type, spacing, states, and motion around your DESIGN.md.",
    primaryAction: "Read DESIGN.md",
    languageNavigationLabel: "Homepage languages",
  },
  summary: {
    accessibleLabel: "What Comfort includes",
    items: [
      { value: "4", label: "languages" },
      { value: "15", label: "Foundations" },
      { value: "63", label: "Components" },
    ],
  },
  tagline: {
    accessibleLabel:
      "The same components feel entirely different once they speak your product's language.",
    segments: [
      "The same",
      "components",
      "feel entirely",
      "different",
      "once they speak",
      "your product's",
      "language.",
    ],
  },
  principles: {
    eyebrow: "Design principles",
    title: "Keep familiar behavior. Give the product a distinct character.",
    description:
      "You do not need to rebuild the basics. Clear choices for color, type, spacing, and states are enough to change how the product feels.",
    items: [
      {
        title: "Keep familiar behavior.",
        description:
          "Follow shadcn/ui conventions for keyboard, focus, and overlay behavior.",
      },
      {
        title: "Add product character.",
        description:
          "Connect color, type, spacing, and shape to the roles in DESIGN.md.",
      },
      {
        title: "Review real states.",
        description:
          "Keep the same flow on small screens, in dark themes, with long copy, and from the keyboard.",
      },
    ],
  },
  workflow: {
    eyebrow: "Workflow",
    title: "Components from shadcn/ui. Product character from DESIGN.md.",
    description:
      "Choose the components, write down the product rules, then review how they work in real screens.",
    steps: [
      {
        number: "01",
        title: "Choose the components.",
        description: "Bring in the shadcn/ui components the product needs.",
      },
      {
        number: "02",
        title: "Write down the product rules.",
        description:
          "Capture tokens, states, content, and motion in DESIGN.md.",
      },
      {
        number: "03",
        title: "Review real screens.",
        description:
          "Check different screen sizes, input methods, themes, and languages.",
      },
    ],
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
      foundationCatalog: "Explore foundations",
      componentCatalog: "Explore components",
      github: "GitHub source",
      privacy: "Privacy",
      terms: "Terms",
    },
    signatureLabel:
      "Comfort DESIGN.md for defining a product theme with shadcn components",
  },
} satisfies HomeContent;

export default en;
