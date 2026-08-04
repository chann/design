import type { DocsContent } from "./types";

const en = {
  locale: "en",
  shell: {
    navigationLabel: "Documentation navigation",
    browse: "Browse docs",
    title: "Comfort guides",
    description: "Move from principles to foundations and components.",
    readDesign: "Read DESIGN.md",
    paginationLabel: "Previous and next documentation",
    previous: "Previous",
    next: "Next",
    reviewed: "Last reviewed · August 2026",
    outlineLabel: "Page outline",
    outlineTitle: "On this page",
    overviewGroup: "Get started",
    familyGroup: "Components",
    sections: {
      principles: "Principles",
      foundations: "Foundations",
      components: "Components",
    },
  },
  search: {
    ariaLabel: "Catalog filters",
    label: "Find by name",
    placeholder: "Search by name or purpose",
    reset: "Reset search",
    familyLabel: "Filter by family",
    all: "All",
    result: "result",
    results: "results",
  },
  principles: {
    eyebrow: "Design principles",
    title: "Four guides for comfortable products",
    description:
      "Comfort is more than a soft appearance. People should see the next step, anticipate the result, and discover more without losing what they already learned.",
    outlineModel: "At a glance",
    outlineReview: "Before release",
    intent: "Why it matters",
    practice: "How to apply it",
    modelLabel: "Four Comfort principles arranged as one continuous loop",
    modelCenter: "Trust through clarity",
    reviewBadge: "Release review",
    reviewTitle: "Check these points before a pattern ships",
    reviewItems: [
      "Language, placement, and state make the next action clear without relying on color alone.",
      "The pattern behaves like its peers and uses semantic tokens without one-off exceptions.",
      "Feedback appears near the action and offers a clear way forward or back.",
      "Advanced features can appear gradually without changing familiar behavior.",
    ],
    items: [
      {
        id: "natural",
        number: "01",
        title: "Natural",
        comfortTitle: "Make the next step feel familiar",
        summary:
          "Follow language and movement people already understand. Reduce the effort needed to think and act.",
        practice:
          "Use plain language, preserve spatial relationships, and place the main action where attention naturally settles.",
        question: "Would the next step still be clear without an explanation?",
      },
      {
        id: "certain",
        number: "02",
        title: "Certain",
        comfortTitle: "Respond the same way in the same situation",
        summary:
          "Repeatable rules and focused choices help people act without second-guessing the interface.",
        practice:
          "Use semantic tokens and give related components the same states and feedback.",
        question: "Can someone predict the result before they act?",
      },
      {
        id: "meaningful",
        number: "03",
        title: "Meaningful",
        comfortTitle: "Keep attention on the goal",
        summary:
          "Every visual and interaction choice should clarify purpose, show progress, or help someone recover.",
        practice:
          "Center the task, return feedback near the action, and remove decoration that competes with the next decision.",
        question: "Does this help complete the task or understand its state?",
      },
      {
        id: "growing",
        number: "04",
        title: "Growing",
        comfortTitle: "Start simple, then reveal more",
        summary:
          "A product should be useful on first contact, discoverable over time, and able to expand without surprises.",
        practice:
          "Layer advanced controls, preserve learned behavior, and use feedback to shape the next improvement.",
        question:
          "Can capability grow without changing what people already learned?",
      },
    ],
  },
  foundations: {
    eyebrow: "Foundations",
    title: "Shared rules for every interface",
    description:
      "Color, type, spacing, and motion repeat across the product. Define their roles first, then combine only what the task needs.",
    outlineCatalog: "Find a foundation",
    outlineDirectory: "Complete list",
    outlineLayers: "How layers connect",
    featuredNote: "Examples and guidance",
    emptyTitle: "No foundations found",
    emptyDescription: "Try a shorter name or a broader purpose.",
    directoryEyebrow: "15 foundations",
    directoryTitle: "Complete list",
    layersBadge: "System layers",
    layersTitle: "From intent to interface",
    layersDescription: "Each step narrows the choices needed in the next one.",
    layers: [
      ["01", "Principles", "Explain why the interface behaves this way"],
      [
        "02",
        "Semantic tokens",
        "Name the roles that stay stable across themes",
      ],
      ["03", "Components", "Turn those roles into reusable interactions"],
    ],
  },
  foundationDetail: {
    eyebrow: "Foundation",
    overview: "Preview",
    intent: "Purpose",
    guidelines: "Guidance",
    accessibility: "Accessibility",
    reference: "Reference values",
    intentEyebrow: "Why this matters",
    intentTitle: "See what this foundation keeps consistent",
    guidanceBadge: "Core guidance",
    guidanceTitle: "What to check when you apply it",
    accessibilityEyebrow: "Make it work for everyone",
    accessibilityTitle: "Accessibility checks",
    referenceTitle: "Reference values",
    referenceDescription:
      "Role names stay stable while values adapt to theme, viewport, language, and interaction state.",
    role: "Role",
    use: "Use",
    value: "Reference",
    sourceTitle: "Continue in DESIGN.md",
    sourceDescription:
      "DESIGN.md keeps the values and review points used by the product. This page makes the result easy to inspect.",
    overviewDescription: "Foundation overview",
  },
  components: {
    eyebrow: "Components",
    title: "Inspect the behavior, then adapt the code",
    description:
      "Review the behavior, states, accessibility, and module path for every current shadcn component in one place.",
    outlineFind: "Find a component",
    outlineExamples: "Featured components",
    outlineDirectory: "Complete family list",
    coverageEyebrow: "Complete coverage",
    coverageTitle: "63 components across 8 families",
    filtered: "Search results",
    featured: "Good places to start",
    matching: (count) => `${count} matching components`,
    startTitle: "Start with real behavior",
    emptyTitle: (query) => `No components match “${query}”`,
    emptyDescription: "Try a broader purpose or reset the family filter.",
    reset: "Reset search",
    directoryEyebrow: "Always available",
    directoryTitle: "Complete family list",
  },
  componentDetail: {
    componentEyebrow: (family) => `${family} component`,
    preview: "Preview and code",
    usage: "When to use it",
    anatomy: "Anatomy",
    variants: "Variants",
    states: "States",
    accessibility: "Accessibility",
    internationalization: "Internationalization",
    implementation: "Implementation",
    related: "Related",
    usageEyebrow: "When to use it",
    usageTitle: "Keep the task and result explicit",
    variantsEyebrow: "Composition",
    variantsTitle: "Keep behavior familiar across variants",
    variantDefault: "Default",
    variantDefaultDescription:
      "The clearest common path and semantic baseline.",
    variantFamilyDescription: (family) =>
      `Uses the shared behavior of the ${family} family.`,
    variantComfortDescription:
      "Semantic tokens, restrained density, and complete feedback.",
    statesEyebrow: "Interaction states",
    statesTitle: "States to verify",
    accessibilityEyebrow: "Make it work for everyone",
    accessibilityTitle: "Accessibility checks",
    i18nEyebrow: "Four language editions",
    i18nItems: [
      "Allow at least 30% text expansion without clipping labels or controls.",
      "Use logical start and end positions so direction can change safely.",
      "Keep component names and token identifiers stable while adapting guidance.",
    ],
    implementationEyebrow: "Add it to the project",
    implementationTitle: "Check the module path",
    verifiedModule: "Verified module",
    sourceAvailable: "Source available",
    implementationDescription:
      "After adding the component, keep feature behavior near the feature and retain its shared states and accessibility checks.",
    snippetComment: "Compose content with the documented anatomy and states.",
    relatedEyebrow: "Same family",
    relatedTitle: "Related components",
    copy: "Copy",
    copied: "Copied",
    previewTab: "Preview",
    codeTab: "View code",
    previewLabel: "Component example view",
    loading: "Loading example…",
    codeLabel: (title) => `${title} code example`,
  },
  legal: {
    reviewed: "Reviewed August 3, 2026",
    issue: "Open a GitHub issue",
    privacy: {
      eyebrow: "Privacy",
      title: "A static guide that handles very little data",
      description:
        "You do not need an account, form submission, or analytics profile to browse Comfort.",
      sections: [
        {
          title: "What your browser stores",
          paragraphs: [
            "The theme menu can save a light or dark preference in your browser. Clearing site data removes it.",
            "This repository has no accounts, forms, analytics, advertising, or tracking pixels.",
          ],
        },
        {
          title: "Hosting and external links",
          paragraphs: [
            "The hosting provider may process standard request information needed to deliver static files.",
            "GitHub and other external links use their own privacy practices after you leave Comfort.",
          ],
        },
        {
          title: "Questions",
          paragraphs: [
            "This notice should change when site behavior changes. Open a GitHub issue if the implementation and this page differ.",
          ],
        },
      ],
    },
    terms: {
      eyebrow: "Terms",
      title: "Review the guide in your product context",
      description:
        "Comfort provides design direction and working examples. Your product, users, and operating environment still need their own review.",
      sections: [
        {
          title: "Purpose of this guide",
          paragraphs: [
            "The site and DESIGN.md include principles, tokens, patterns, and implementation examples. Check them against your needs before adopting them.",
            "The guide does not promise support, uptime, compatibility, or a particular product result.",
          ],
        },
        {
          title: "Source and asset notices",
          paragraphs: [
            "Third-party assets retain their license notices. Review the repository and applicable notices before reusing code or assets.",
          ],
        },
        {
          title: "Changes",
          paragraphs: [
            "Guidance and examples can change as the system improves. Git history records those changes.",
          ],
        },
      ],
    },
  },
  notFound: {
    title: "We couldn’t find that page",
    description:
      "Return home and continue from principles, foundations, or components.",
    action: "Back to Comfort",
  },
  families: {
    actions: "Actions",
    forms: "Forms",
    navigation: "Navigation",
    overlays: "Overlays",
    "data-display": "Data display",
    feedback: "Feedback",
    layout: "Layout",
    conversation: "Conversation",
  },
  states: {
    default: "Default",
    hover: "Hover",
    active: "Active",
    "focus-visible": "Keyboard focus",
    disabled: "Disabled",
    loading: "Loading",
    empty: "Empty",
    error: "Error",
    selected: "Selected",
    expanded: "Expanded",
    destructive: "Destructive",
  },
} satisfies DocsContent;

export default en;
