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
import {
  docsContents,
  localizedComponent,
  localizedFoundation,
} from "@/content/docs";
import type { HomeLocale } from "@/content/home";
import { localizedRoute } from "@/data/site";

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

export function ComponentsPage({
  currentPath,
  locale,
}: {
  currentPath: string;
  locale: HomeLocale;
}) {
  const content = docsContents[locale].components;
  const components = componentCatalog.map((record) =>
    localizedComponent(record, locale),
  );
  const [query, setQuery] = React.useState("");
  const [family, setFamily] = React.useState("all");
  const [results, setResults] = React.useState(components);
  const hasFilters = query.trim().length > 0 || family !== "all";
  const displayed = hasFilters
    ? results
    : featuredSlugs.flatMap((slug) =>
        components.filter((component) => component.slug === slug),
      );

  function resetFilters() {
    setQuery("");
    setFamily("all");
  }

  const lastFoundationRecord = foundationCatalog.at(-1);
  const lastFoundation = lastFoundationRecord
    ? localizedFoundation(lastFoundationRecord, locale)
    : undefined;

  return (
    <DocsLayout
      currentPath={currentPath}
      locale={locale}
      section="components"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      outline={[
        { id: "catalog", title: content.outlineFind },
        { id: "featured", title: content.outlineExamples },
        { id: "directory", title: content.outlineDirectory },
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
      next={{
        ...componentItems[0],
        description: components[0].description,
      }}
    >
      <section className="scroll-mt-24 flex flex-col gap-5" id="catalog">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">{content.coverageEyebrow}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
              {content.coverageTitle}
            </h2>
          </div>
          <Badge variant="outline">shadcn · radix-nova</Badge>
        </div>
        <CatalogSearch
          family={family}
          items={components}
          locale={locale}
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
              {hasFilters ? content.filtered : content.featured}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
              {hasFilters
                ? content.matching(results.length)
                : content.startTitle}
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
                  href={siteHref(
                    localizedRoute(`/components/${record.slug}`, locale),
                  )}
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
                        {docsContents[locale].families[record.family]}
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
              <EmptyTitle>{content.emptyTitle(query)}</EmptyTitle>
              <EmptyDescription>{content.emptyDescription}</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button onClick={resetFilters} size="sm" variant="outline">
                {content.reset}
              </Button>
            </EmptyContent>
          </Empty>
        )}
      </section>

      <section className="scroll-mt-24 flex flex-col gap-6" id="directory">
        <div>
          <p className="eyebrow">{content.directoryEyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
            {content.directoryTitle}
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
                    {docsContents[locale].families[componentFamily]}
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
                        href={siteHref(
                          localizedRoute(
                            `/components/${component.slug}`,
                            locale,
                          ),
                        )}
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
