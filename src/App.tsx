import { lazy, Suspense, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  componentCatalog,
  foundationCatalog,
  getComponent,
  getFoundation,
} from "@/data/catalog";
import { ComponentsPage } from "@/pages/components-page";
import { FoundationDetailPage } from "@/pages/foundation-detail-page";
import { FoundationsPage } from "@/pages/foundations-page";
import { HomePage } from "@/pages/home-page";
import { LegalPage } from "@/pages/legal-page";
import { PrinciplesPage } from "@/pages/principles-page";
import { currentRoute, siteHref } from "@/data/site";
import { homeContents } from "@/content/home";

const SITE_ORIGIN = "https://chann.github.io";
const HOME_TITLE = "Comfort Design System | Design clear interfaces";
const HOME_DESCRIPTION =
  "Comfort gives product teams and coding agents one DESIGN.md for 15 semantic Foundations, complete states, and 63 production-ready component references.";

type RouteMetadata = {
  title: string;
  description: string;
  canonicalRoute: string;
  robots: "index,follow" | "noindex,follow";
};

function upsertMeta(selector: string, attribute: string, value: string) {
  const element = document.querySelector<HTMLMetaElement>(selector);
  element?.setAttribute(attribute, value);
}

function routeMetadata(route: string): RouteMetadata {
  if (route === "/") {
    return {
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      canonicalRoute: route,
      robots: "index,follow",
    };
  }

  if (route === "/privacy") {
    return {
      title: "Privacy | Comfort Design System",
      description:
        "How the static Comfort reference handles theme preferences, hosting requests, and external links.",
      canonicalRoute: route,
      robots: "index,follow",
    };
  }

  if (route === "/terms") {
    return {
      title: "Terms | Comfort Design System",
      description:
        "Terms for using Comfort DESIGN.md, reference examples, source, and third party assets.",
      canonicalRoute: route,
      robots: "index,follow",
    };
  }

  const [, group, slug] = route.split("/");
  const documentedRoute =
    route === "/principles" ||
    route === "/foundations" ||
    route === "/components" ||
    (group === "foundations" && foundationSlugs.has(slug)) ||
    (group === "components" && componentSlugs.has(slug));

  if (!documentedRoute) {
    return {
      title: "Page not found | Comfort Design System",
      description:
        "Return to the Comfort Design System overview to find a current principle, foundation, or component reference.",
      canonicalRoute: "/",
      robots: "noindex,follow",
    };
  }

  const record = getFoundation(slug) ?? getComponent(slug);
  const section = route.split("/").filter(Boolean).at(-1);
  const label =
    record?.title ??
    (section
      ? section
          .split("-")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(" ")
      : "Reference");
  return {
    title: `${label} | Comfort Design System`,
    description: `Read the Comfort guidance for ${label.toLowerCase()}, including behavior, states, accessibility, and implementation checks.`,
    canonicalRoute: route,
    robots: "index,follow",
  };
}

const foundationSlugs = new Set(
  foundationCatalog.map((foundation) => foundation.slug),
);
const componentSlugs = new Set(
  componentCatalog.map((component) => component.slug),
);

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
    const metadata = routeMetadata(route);
    const canonicalUrl = new URL(
      siteHref(metadata.canonicalRoute, "/design/"),
      SITE_ORIGIN,
    ).href;

    document.title = metadata.title;
    upsertMeta('meta[name="description"]', "content", metadata.description);
    upsertMeta('meta[name="robots"]', "content", metadata.robots);
    upsertMeta('meta[property="og:title"]', "content", metadata.title);
    upsertMeta(
      'meta[property="og:description"]',
      "content",
      metadata.description,
    );
    upsertMeta('meta[property="og:url"]', "content", canonicalUrl);
    upsertMeta('meta[name="twitter:title"]', "content", metadata.title);
    upsertMeta(
      'meta[name="twitter:description"]',
      "content",
      metadata.description,
    );
    document
      .querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?.setAttribute("href", canonicalUrl);

    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (!hash) return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [route]);

  if (route === "/") {
    return <HomePage currentPath={route} content={homeContents.en} />;
  }
  if (route === "/principles") return <PrinciplesPage currentPath={route} />;
  if (route === "/foundations") return <FoundationsPage currentPath={route} />;
  if (route === "/components") return <ComponentsPage currentPath={route} />;
  if (route === "/privacy") {
    return <LegalPage currentPath={route} kind="privacy" />;
  }
  if (route === "/terms") {
    return <LegalPage currentPath={route} kind="terms" />;
  }

  const [, section, slug] = route.split("/");
  if (section === "foundations" && foundationSlugs.has(slug)) {
    return <FoundationDetailPage currentPath={route} slug={slug} />;
  }
  if (section === "components" && componentSlugs.has(slug)) {
    return (
      <Suspense fallback={<RouteSkeleton />}>
        <ComponentDetailPage currentPath={route} slug={slug} />
      </Suspense>
    );
  }

  return <NotFoundPage />;
}
