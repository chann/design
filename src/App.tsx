import { lazy, Suspense, useEffect } from "react";

import { Button } from "@/components/ui/button";
import type { ComponentKey } from "@/pages/component-detail-page";
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

const ComponentDetailPage = lazy(() =>
  import("@/pages/component-detail-page").then((module) => ({
    default: module.ComponentDetailPage,
  })),
);

function RouteSkeleton() {
  return (
    <main
      aria-busy="true"
      aria-label="Loading component reference"
      className="mx-auto flex min-h-dvh max-w-4xl flex-col gap-8 px-4 py-24 sm:px-8"
      id="main-content"
    >
      <div className="route-skeleton h-4 w-24 rounded-md bg-muted" />
      <div className="route-skeleton h-12 w-3/4 rounded-lg bg-muted" />
      <div className="route-skeleton h-24 w-full rounded-xl bg-muted" />
      <div className="route-skeleton h-80 w-full rounded-2xl bg-muted" />
    </main>
  );
}

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
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (!hash) return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView();
    });
    return () => window.cancelAnimationFrame(frame);
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
      <Suspense fallback={<RouteSkeleton />}>
        <ComponentDetailPage currentPath={route} slug={slug as ComponentKey} />
      </Suspense>
    );
  }

  return <NotFoundPage />;
}
