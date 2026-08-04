import * as React from "react";
import {
  BlocksIcon,
  BotMessageSquareIcon,
  ChartNoAxesCombinedIcon,
  FormInputIcon,
  LayoutGridIcon,
  MenuIcon,
  MousePointerClickIcon,
  PanelsTopLeftIcon,
  SearchXIcon,
} from "lucide-react";

import { CatalogSearch } from "@/components/catalog-search";
import { DocsLayout } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  componentCatalog,
  componentFamilies,
  foundationCatalog,
  type ComponentFamily,
} from "@/data/catalog";
import { componentItems, siteHref } from "@/data/site";
import { cn } from "@/lib/utils";

const familyIcons: Record<ComponentFamily, typeof BlocksIcon> = {
  actions: MousePointerClickIcon,
  forms: FormInputIcon,
  navigation: MenuIcon,
  overlays: PanelsTopLeftIcon,
  "data-display": ChartNoAxesCombinedIcon,
  feedback: BlocksIcon,
  layout: LayoutGridIcon,
  conversation: BotMessageSquareIcon,
};

const featuredSlugs = [
  "button",
  "calendar",
  "navigation-menu",
  "dialog",
  "chart",
  "toast",
  "resizable",
  "message-scroller",
  "data-table",
  "input-otp",
  "carousel",
  "sidebar",
];

const bentoSpans = [
  "md:col-span-4 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-2",
];

function familyLabel(family: string) {
  return family
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export function ComponentsPage({ currentPath }: { currentPath: string }) {
  const [query, setQuery] = React.useState("");
  const [family, setFamily] = React.useState("all");
  const [results, setResults] = React.useState(componentCatalog);
  const hasFilters = query.trim().length > 0 || family !== "all";
  const displayed = hasFilters
    ? results
    : featuredSlugs.flatMap((slug) =>
        componentCatalog.filter((component) => component.slug === slug),
      );

  function resetFilters() {
    setQuery("");
    setFamily("all");
  }

  const lastFoundation = foundationCatalog.at(-1);

  return (
    <DocsLayout
      currentPath={currentPath}
      section="components"
      eyebrow="Components"
      title="Predictable parts for product work"
      description="Comfort documents every current shadcn component as an interaction contract: real behavior, complete states, accessible structure, and implementation guidance in one coherent system."
      outline={[
        { id: "catalog", title: "Find a component" },
        { id: "featured", title: "Component specimens" },
        { id: "directory", title: "Complete family list" },
      ]}
      previous={
        lastFoundation
          ? {
              href: `/foundations/${lastFoundation.slug}`,
              title: lastFoundation.title,
              description: lastFoundation.description,
            }
          : undefined
      }
      next={componentItems[0]}
    >
      <section className="scroll-mt-24 flex flex-col gap-5" id="catalog">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Complete coverage</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
              63 components across 8 families
            </h2>
          </div>
          <Badge variant="outline">shadcn · radix-nova</Badge>
        </div>
        <CatalogSearch
          family={family}
          items={componentCatalog}
          onFamilyChange={setFamily}
          onResultsChange={setResults}
          onValueChange={setQuery}
          value={query}
        />
      </section>

      <section className="scroll-mt-24 flex flex-col gap-5" id="featured">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="eyebrow">
              {hasFilters ? "Filtered results" : "Representative specimens"}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
              {hasFilters
                ? `${results.length} matching components`
                : "Start from a real behavior"}
            </h2>
          </div>
        </div>
        {displayed.length > 0 ? (
          <BentoGrid>
            {displayed.map((record, index) => {
              const Icon = familyIcons[record.family];
              return (
                <a
                  className={cn(
                    "group rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    bentoSpans[index % bentoSpans.length],
                  )}
                  href={siteHref(`/components/${record.slug}`)}
                  key={record.slug}
                >
                  <BentoCard
                    className={cn(
                      index === 0 &&
                        "min-h-80 bg-primary/10 group-hover:bg-primary/15 md:min-h-0",
                    )}
                  >
                    <div
                      aria-hidden="true"
                      className={`component-card-art component-card-art-${index % 4}`}
                    >
                      <i />
                      <i />
                    </div>
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="grid size-10 place-items-center rounded-xl bg-background text-primary shadow-sm">
                        <Icon className="size-5" />
                      </span>
                      <Badge variant="outline">
                        {familyLabel(record.family)}
                      </Badge>
                    </div>
                    <div className="relative z-10 mt-auto max-w-lg pt-8">
                      <h3 className="text-xl font-semibold">{record.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-foreground">
                        {record.description}
                      </p>
                    </div>
                  </BentoCard>
                </a>
              );
            })}
          </BentoGrid>
        ) : (
          <Empty className="min-h-64 border border-dashed">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SearchXIcon />
              </EmptyMedia>
              <EmptyTitle>No components match “{query}”</EmptyTitle>
              <EmptyDescription>
                Search a broader purpose or clear the active family filter.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button onClick={resetFilters} size="sm" variant="outline">
                Reset filters
              </Button>
            </EmptyContent>
          </Empty>
        )}
      </section>

      <section className="scroll-mt-24 flex flex-col gap-6" id="directory">
        <div>
          <p className="eyebrow">Always available</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
            Complete family list
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {componentFamilies.map((componentFamily) => {
            const Icon = familyIcons[componentFamily];
            const components = componentCatalog.filter(
              (component) => component.family === componentFamily,
            );
            return (
              <section
                className="rounded-2xl border bg-card p-5"
                key={componentFamily}
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <Icon className="size-4 text-primary" />
                    {familyLabel(componentFamily)}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {components.length}
                  </span>
                </div>
                <ul className="grid gap-1 sm:grid-cols-2">
                  {components.map((component) => (
                    <li key={component.slug}>
                      <a
                        className="block rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        href={siteHref(`/components/${component.slug}`)}
                      >
                        {component.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </section>
    </DocsLayout>
  );
}
