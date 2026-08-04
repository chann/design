import { lazy, type ComponentType } from "react";

import type { ComponentRecord, ComponentSlug } from "@/data/catalog";

export type SpecimenProps = { record: ComponentRecord };

type SpecimenMap = Record<string, ComponentType<SpecimenProps>>;
type SpecimenLoader = () => Promise<SpecimenMap>;

const loadActionFeedback: SpecimenLoader = () =>
  import("@/components/specimens/action-feedback-specimens").then(
    (module) => module.actionFeedbackSpecimens,
  );
const loadForms: SpecimenLoader = () =>
  import("@/components/specimens/form-specimens").then(
    (module) => module.formSpecimens,
  );
const loadNavigationOverlay: SpecimenLoader = () =>
  import("@/components/specimens/navigation-overlay-specimens").then(
    (module) => module.navigationOverlaySpecimens,
  );
const loadDataLayout: SpecimenLoader = () =>
  import("@/components/specimens/data-layout-specimens").then(
    (module) => module.dataLayoutSpecimens,
  );
const loadConversation: SpecimenLoader = () =>
  import("@/components/specimens/conversation-specimens").then(
    (module) => module.conversationSpecimens,
  );

function lazySpecimen(loader: SpecimenLoader, key: string) {
  return lazy(async () => {
    const specimens = await loader();
    return { default: specimens[key] };
  });
}

export const specimenRegistry = {
  accordion: lazySpecimen(loadActionFeedback, "accordion"),
  alert: lazySpecimen(loadActionFeedback, "alert"),
  "alert-dialog": lazySpecimen(loadActionFeedback, "alert-dialog"),
  badge: lazySpecimen(loadActionFeedback, "badge"),
  button: lazySpecimen(loadActionFeedback, "button"),
  "button-group": lazySpecimen(loadActionFeedback, "button-group"),
  collapsible: lazySpecimen(loadActionFeedback, "collapsible"),
  empty: lazySpecimen(loadActionFeedback, "empty"),
  progress: lazySpecimen(loadActionFeedback, "progress"),
  skeleton: lazySpecimen(loadActionFeedback, "skeleton"),
  spinner: lazySpecimen(loadActionFeedback, "spinner"),
  toast: lazySpecimen(loadActionFeedback, "toast"),
  toggle: lazySpecimen(loadActionFeedback, "toggle"),
  "toggle-group": lazySpecimen(loadActionFeedback, "toggle-group"),
  tooltip: lazySpecimen(loadActionFeedback, "tooltip"),
  calendar: lazySpecimen(loadForms, "calendar"),
  checkbox: lazySpecimen(loadForms, "checkbox"),
  combobox: lazySpecimen(loadForms, "combobox"),
  command: lazySpecimen(loadForms, "command"),
  "date-picker": lazySpecimen(loadForms, "date-picker"),
  field: lazySpecimen(loadForms, "field"),
  input: lazySpecimen(loadForms, "input"),
  "input-group": lazySpecimen(loadForms, "input-group"),
  "input-otp": lazySpecimen(loadForms, "input-otp"),
  label: lazySpecimen(loadForms, "label"),
  "native-select": lazySpecimen(loadForms, "native-select"),
  "radio-group": lazySpecimen(loadForms, "radio-group"),
  select: lazySpecimen(loadForms, "select"),
  slider: lazySpecimen(loadForms, "slider"),
  switch: lazySpecimen(loadForms, "switch"),
  textarea: lazySpecimen(loadForms, "textarea"),
  breadcrumb: lazySpecimen(loadNavigationOverlay, "breadcrumb"),
  "context-menu": lazySpecimen(loadNavigationOverlay, "context-menu"),
  dialog: lazySpecimen(loadNavigationOverlay, "dialog"),
  direction: lazySpecimen(loadNavigationOverlay, "direction"),
  drawer: lazySpecimen(loadNavigationOverlay, "drawer"),
  "dropdown-menu": lazySpecimen(loadNavigationOverlay, "dropdown-menu"),
  "hover-card": lazySpecimen(loadNavigationOverlay, "hover-card"),
  menubar: lazySpecimen(loadNavigationOverlay, "menubar"),
  "navigation-menu": lazySpecimen(loadNavigationOverlay, "navigation-menu"),
  pagination: lazySpecimen(loadNavigationOverlay, "pagination"),
  popover: lazySpecimen(loadNavigationOverlay, "popover"),
  sheet: lazySpecimen(loadNavigationOverlay, "sheet"),
  sidebar: lazySpecimen(loadNavigationOverlay, "sidebar"),
  tabs: lazySpecimen(loadNavigationOverlay, "tabs"),
  "aspect-ratio": lazySpecimen(loadDataLayout, "aspect-ratio"),
  avatar: lazySpecimen(loadDataLayout, "avatar"),
  card: lazySpecimen(loadDataLayout, "card"),
  carousel: lazySpecimen(loadDataLayout, "carousel"),
  chart: lazySpecimen(loadDataLayout, "chart"),
  "data-table": lazySpecimen(loadDataLayout, "data-table"),
  item: lazySpecimen(loadDataLayout, "item"),
  kbd: lazySpecimen(loadDataLayout, "kbd"),
  resizable: lazySpecimen(loadDataLayout, "resizable"),
  "scroll-area": lazySpecimen(loadDataLayout, "scroll-area"),
  separator: lazySpecimen(loadDataLayout, "separator"),
  table: lazySpecimen(loadDataLayout, "table"),
  typography: lazySpecimen(loadDataLayout, "typography"),
  attachment: lazySpecimen(loadConversation, "attachment"),
  bubble: lazySpecimen(loadConversation, "bubble"),
  marker: lazySpecimen(loadConversation, "marker"),
  message: lazySpecimen(loadConversation, "message"),
  "message-scroller": lazySpecimen(loadConversation, "message-scroller"),
} satisfies Record<ComponentSlug, ComponentType<SpecimenProps>>;
