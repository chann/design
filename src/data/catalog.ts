import manifest from "./catalog.json";

export type FoundationRecord = {
  slug: string;
  title: string;
  description: string;
  intent: string;
  rules: string[];
  values: Array<[string, string, string]>;
  accessibility: string[];
  related: string[];
  specimen: string;
};

export type FoundationSlug = (typeof manifest.foundations)[number]["slug"];

export const foundationCatalog = manifest.foundations as FoundationRecord[];

export function getFoundation(slug: string) {
  return foundationCatalog.find((foundation) => foundation.slug === slug);
}
