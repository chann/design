import manifest from "./catalog.json";

export type ComponentFamily =
  | "actions"
  | "forms"
  | "navigation"
  | "overlays"
  | "data-display"
  | "feedback"
  | "layout"
  | "conversation";

export type ComponentState =
  | "default"
  | "hover"
  | "active"
  | "focus-visible"
  | "disabled"
  | "loading"
  | "empty"
  | "error"
  | "selected"
  | "expanded"
  | "destructive";

export type ComponentRecord = {
  slug: string;
  title: string;
  description: string;
  usage: string;
  anatomy: string[];
  accessibility: string[];
  family: ComponentFamily;
  keywords: string[];
  states: ComponentState[];
  specimen: string;
  module: string;
};

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

export const componentFamilies: ComponentFamily[] = [
  "actions",
  "forms",
  "navigation",
  "overlays",
  "data-display",
  "feedback",
  "layout",
  "conversation",
];

export const componentCatalog = manifest.components as ComponentRecord[];
export const foundationCatalog = manifest.foundations as FoundationRecord[];

export function getComponent(slug: string) {
  return componentCatalog.find((component) => component.slug === slug);
}

export function getFoundation(slug: string) {
  return foundationCatalog.find((foundation) => foundation.slug === slug);
}

export function groupComponentsByFamily() {
  return componentFamilies.map((family) => ({
    family,
    components: componentCatalog.filter(
      (component) => component.family === family,
    ),
  }));
}
