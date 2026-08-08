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
    sections: {
      principles: string;
      foundations: string;
    };
  };
  search: {
    ariaLabel: string;
    label: string;
    placeholder: string;
    reset: string;
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
};
