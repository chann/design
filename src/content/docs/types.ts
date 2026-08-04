import type { ComponentFamily, ComponentState } from "@/data/catalog";
import type { Principle } from "@/data/site";
import type { HomeLocale } from "@/content/home";

type PageSection = {
  eyebrow: string;
  title: string;
  description: string;
};

type LegalSection = {
  title: string;
  paragraphs: readonly string[];
};

type LegalPageContent = PageSection & {
  sections: readonly LegalSection[];
};

export type DocsContent = {
  locale: HomeLocale;
  shell: {
    navigationLabel: string;
    browse: string;
    title: string;
    description: string;
    readDesign: string;
    paginationLabel: string;
    previous: string;
    next: string;
    reviewed: string;
    outlineLabel: string;
    outlineTitle: string;
    overviewGroup: string;
    familyGroup: string;
    sections: {
      principles: string;
      foundations: string;
      components: string;
    };
  };
  search: {
    ariaLabel: string;
    label: string;
    placeholder: string;
    reset: string;
    familyLabel: string;
    all: string;
    result: string;
    results: string;
  };
  principles: PageSection & {
    outlineModel: string;
    outlineReview: string;
    intent: string;
    practice: string;
    modelLabel: string;
    modelCenter: string;
    referenceTitle: string;
    referenceDescription: string;
    referenceAction: string;
    reviewBadge: string;
    reviewTitle: string;
    reviewItems: readonly string[];
    items: readonly Principle[];
  };
  foundations: PageSection & {
    outlineCatalog: string;
    outlineDirectory: string;
    outlineLayers: string;
    featuredNote: string;
    emptyTitle: string;
    emptyDescription: string;
    directoryEyebrow: string;
    directoryTitle: string;
    layersBadge: string;
    layersTitle: string;
    layersDescription: string;
    layers: readonly (readonly [string, string, string])[];
  };
  foundationDetail: {
    eyebrow: string;
    overview: string;
    intent: string;
    guidelines: string;
    accessibility: string;
    reference: string;
    intentEyebrow: string;
    intentTitle: string;
    guidanceBadge: string;
    guidanceTitle: string;
    accessibilityEyebrow: string;
    accessibilityTitle: string;
    referenceTitle: string;
    referenceDescription: string;
    role: string;
    use: string;
    value: string;
    sourceTitle: string;
    sourceDescription: string;
    overviewDescription: string;
  };
  components: PageSection & {
    outlineFind: string;
    outlineExamples: string;
    outlineDirectory: string;
    coverageEyebrow: string;
    coverageTitle: string;
    filtered: string;
    featured: string;
    matching: (count: number) => string;
    startTitle: string;
    emptyTitle: (query: string) => string;
    emptyDescription: string;
    reset: string;
    directoryEyebrow: string;
    directoryTitle: string;
  };
  componentDetail: {
    componentEyebrow: (family: string) => string;
    preview: string;
    usage: string;
    anatomy: string;
    variants: string;
    states: string;
    accessibility: string;
    internationalization: string;
    implementation: string;
    related: string;
    usageEyebrow: string;
    usageTitle: string;
    variantsEyebrow: string;
    variantsTitle: string;
    variantDefault: string;
    variantDefaultDescription: string;
    variantFamilyDescription: (family: string) => string;
    variantComfortDescription: string;
    statesEyebrow: string;
    statesTitle: string;
    accessibilityEyebrow: string;
    accessibilityTitle: string;
    i18nEyebrow: string;
    i18nItems: readonly string[];
    implementationEyebrow: string;
    implementationTitle: string;
    verifiedModule: string;
    sourceAvailable: string;
    implementationDescription: string;
    snippetComment: string;
    relatedEyebrow: string;
    relatedTitle: string;
    copy: string;
    copied: string;
    previewTab: string;
    codeTab: string;
    previewLabel: string;
    loading: string;
    codeLabel: (title: string) => string;
  };
  legal: {
    reviewed: string;
    issue: string;
    privacy: LegalPageContent;
    terms: LegalPageContent;
  };
  notFound: {
    title: string;
    description: string;
    action: string;
  };
  families: Record<ComponentFamily, string>;
  states: Record<ComponentState, string>;
};
