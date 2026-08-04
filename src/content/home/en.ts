import type { HomeContent } from "./types";

const en = {
  locale: "en",
  languageTag: "en",
  path: "/en",
  metadata: {
    title: "Comfort Design System | Customize shadcn with DESIGN.md",
    description:
      "Start with accessible shadcn/ui components, then use DESIGN.md to define your product’s tokens, states, motion, content, and verification rules.",
  },
  shell: {
    skipToContent: "Skip to content",
    homeLabel: "Comfort Design System home",
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
    accessibleTitle: "Start with shadcn. Make it yours with DESIGN.md.",
    titleLines: ["Start with shadcn.", "Make it yours", "with DESIGN.md."],
    description:
      "Use shadcn/ui as the accessible component baseline, then shape every semantic token, state, interaction, and content rule around your product.",
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
      "Start with shadcn components. Turn them into your system with DESIGN.md.",
    segments: [
      "Start",
      "with",
      "shadcn",
      "components.",
      "Turn",
      "them",
      "into",
      "your",
      "system",
      "with",
      "DESIGN.md.",
    ],
  },
  benefits: {
    eyebrow: "A baseline you can make your own",
    title: "Keep accessible components. Replace generic decisions.",
    description:
      "shadcn/ui supplies source you can own. DESIGN.md gives that source one product-specific language for brand, behavior, and quality.",
    items: [
      {
        title: "Start from proven primitives",
        description:
          "Use shadcn and Radix behavior as the foundation instead of rebuilding keyboard, focus, and overlay mechanics.",
      },
      {
        title: "Define product meaning once",
        description:
          "Map color, type, spacing, radius, state, and motion to semantic roles in DESIGN.md before styling components.",
      },
      {
        title: "Give every contributor the same contract",
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
    title: "From shadcn source to a product-specific system.",
    description:
      "Choose only what the product needs, apply the shared design contract, then verify the states people will experience.",
    steps: [
      {
        number: "01",
        title: "Choose the shadcn components",
        description:
          "Copy the accessible component source your product needs and keep ownership in the repository.",
      },
      {
        number: "02",
        title: "Apply DESIGN.md roles",
        description:
          "Connect semantic tokens, states, content, motion, and accessibility rules to the owned components.",
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
      "This site begins with repository-owned shadcn components, applies DESIGN.md semantic roles, and exposes the resulting Foundations, component states, and verification checks for review.",
    action: "Inspect the component references",
    panelTitle: "Live reference",
    reviewed: "August 2026",
    metrics: [
      { value: "87", label: "static routes" },
      { value: "15", label: "semantic Foundations" },
      { value: "63", label: "component references" },
      { value: "4", label: "aligned DESIGN.md editions" },
    ],
    verification:
      "Route, content, type, lint, and production build checks are part of the repository.",
  },
  faq: {
    eyebrow: "Questions before you start",
    title: "Know what shadcn provides and what DESIGN.md changes.",
    description:
      "The component source stays familiar. The product contract makes its visual language, behavior, and release criteria specific.",
    items: [
      {
        question: "How do shadcn/ui and DESIGN.md work together?",
        answer:
          "shadcn/ui provides the baseline component source and interaction primitives. DESIGN.md defines the product-specific tokens, states, motion, content, accessibility, and verification applied to that source.",
      },
      {
        question: "Do we own the component code?",
        answer:
          "Yes. Copy only the shadcn components the product needs into its repository, then evolve them under the same DESIGN.md contract.",
      },
      {
        question: "Does DESIGN.md replace our brand?",
        answer:
          "No. It records your brand roles and product behavior so color, typography, shape, voice, and interaction stay coherent across contributors.",
      },
      {
        question: "Can coding agents use the contract?",
        answer:
          "Yes. Give an agent DESIGN.md before UI work so implementation and review use the same semantic roles and acceptance checks.",
      },
      {
        question: "How is accessibility handled?",
        answer:
          "Keep the proven semantics and keyboard behavior of the underlying primitives, then define contrast, focus, motion, content, and recovery requirements in DESIGN.md.",
      },
      {
        question: "How do the language editions stay aligned?",
        answer:
          "Korean, English, Japanese, and Simplified Chinese editions preserve the same token names, section order, component inventory, and requirement strength.",
      },
    ],
  },
  cta: {
    eyebrow: "A clear contract for every interface decision",
    title: "Own the components. Define the system in DESIGN.md.",
    description:
      "Choose the shadcn components your product needs, then apply one shared contract for brand, behavior, accessibility, and release checks.",
    action: "Read DESIGN.md",
  },
  footer: {
    description:
      "A practical DESIGN.md for customizing owned shadcn components into a clear, accessible, and product-specific interface system.",
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
      "Comfort Design System, customized with shadcn and documented in DESIGN.md",
  },
} satisfies HomeContent;

export default en;
