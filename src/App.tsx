import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  ComponentDetailPage,
  type ComponentKey,
} from "@/pages/component-detail-page";
import { ComponentsPage } from "@/pages/components-page";
import { FoundationDetailPage } from "@/pages/foundation-detail-page";
import { FoundationsPage } from "@/pages/foundations-page";
import { HomePage } from "@/pages/home-page";
import { PrinciplesPage } from "@/pages/principles-page";
import { currentRoute, siteHref } from "@/data/site";

const foundationSlugs = new Set([
  "design-tokens",
  "color",
  "typography",
  "layout",
  "motion",
  "accessibility",
]);
const componentSlugs = new Set([
  "button",
  "card",
  "dialog",
  "input",
  "tabs",
  "alert",
  "badge",
  "checkbox",
  "select",
  "switch",
  "table",
  "skeleton",
]);

function NotFoundPage() {
  return (
    <main id="main-content" className="grid min-h-dvh place-items-center px-4">
      <div className="flex max-w-lg flex-col items-center gap-5 text-center">
        <span className="font-mono text-sm text-primary">404</span>
        <h1 className="text-4xl font-semibold tracking-[-0.04em]">
          This reference has moved.
        </h1>
        <p className="leading-7 text-muted-foreground">
          Return to the system overview and continue from a current principle,
          foundation, or component.
        </p>
        <Button asChild>
          <a href={siteHref("/")}>Back to Comfort</a>
        </Button>
      </div>
    </main>
  );
}

export default function App() {
  const route = currentRoute();

  useEffect(() => {
    const section = route.split("/").filter(Boolean).at(-1);
    const label = section
      ? section
          .split("-")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(" ")
      : "Comfort Design System";
    document.title =
      route === "/"
        ? "Comfort Design System"
        : `${label} · Comfort Design System`;
  }, [route]);

  if (route === "/") return <HomePage currentPath={route} />;
  if (route === "/principles") return <PrinciplesPage currentPath={route} />;
  if (route === "/foundations") return <FoundationsPage currentPath={route} />;
  if (route === "/components") return <ComponentsPage currentPath={route} />;

  const [, section, slug] = route.split("/");
  if (section === "foundations" && foundationSlugs.has(slug)) {
    return (
      <FoundationDetailPage
        currentPath={route}
        slug={
          slug as
            | "design-tokens"
            | "color"
            | "typography"
            | "layout"
            | "motion"
            | "accessibility"
        }
      />
    );
  }
  if (section === "components" && componentSlugs.has(slug)) {
    return (
      <ComponentDetailPage currentPath={route} slug={slug as ComponentKey} />
    );
  }

  return <NotFoundPage />;
}
