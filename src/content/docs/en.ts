import type { DocsContent } from "./types";

const en = {
  locale: "en",
  shell: {
    navigationLabel: "Documentation navigation",
    browse: "Browse docs",
    title: "Comfort guides",
    description: "Move from principles to Foundations.",
    readDesign: "Read DESIGN.md",
    paginationLabel: "Previous and next documentation",
    previous: "Previous",
    next: "Next",
    reviewed: "Last reviewed · August 2026",
    outlineLabel: "Page outline",
    outlineTitle: "On this page",
    overviewGroup: "Get started",
    sections: {
      principles: "Principles",
      foundations: "Foundations",
    },
  },
  search: {
    ariaLabel: "Catalog filters",
    label: "Find by name",
    placeholder: "Search by name or purpose",
    reset: "Reset search",
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
  notFound: {
    title: "We couldn’t find that page",
    description: "Return home and continue from principles or Foundations.",
    action: "Back to Comfort",
  },
} satisfies DocsContent;

export default en;
