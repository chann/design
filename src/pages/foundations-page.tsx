import { useMemo, useState } from "react";
import {
  AccessibilityIcon,
  ArrowRightIcon,
  BoxIcon,
  CaseUpperIcon,
  CircleDotDashedIcon,
  LayoutGridIcon,
  PaletteIcon,
} from "lucide-react";

import { CatalogSearch } from "@/components/catalog-search";
import { DocsLayout } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { foundationCatalog } from "@/data/catalog";
import { localizedRoute, siteHref } from "@/data/site";
import { docsContents, localizedFoundation } from "@/content/docs";
import type { HomeLocale } from "@/content/home";

const icons = [
  CircleDotDashedIcon,
  PaletteIcon,
  CaseUpperIcon,
  LayoutGridIcon,
  BoxIcon,
  AccessibilityIcon,
];
const bentoSpans = [
  "md:col-span-4 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
];

export function FoundationsPage({
  currentPath,
  locale,
}: {
  currentPath: string;
  locale: HomeLocale;
}) {
  const content = docsContents[locale].foundations;
  const foundations = useMemo(
    () =>
      foundationCatalog.map((record) => localizedFoundation(record, locale)),
    [locale],
  );
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(foundations);

  return (
    <DocsLayout
      currentPath={currentPath}
      locale={locale}
      section="foundations"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      outline={[
        { id: "catalog", title: content.outlineCatalog },
        { id: "directory", title: content.outlineDirectory },
        { id: "layers", title: content.outlineLayers },
      ]}
      previous={{
        href: "/principles",
        title: docsContents[locale].shell.sections.principles,
        description: docsContents[locale].principles.title,
      }}
      next={{
        href: `/foundations/${foundations[0].slug}`,
        title: foundations[0].title,
        description: foundations[0].description,
      }}
    >
      <section className="scroll-mt-24 flex flex-col gap-5" id="catalog">
        <CatalogSearch
          items={foundations}
          locale={locale}
          onResultsChange={setResults}
          onValueChange={setQuery}
          value={query}
        />
        {results.length > 0 ? (
          <BentoGrid>
            {results.map((record) => {
              const index = foundations.findIndex(
                (foundation) => foundation.slug === record.slug,
              );
              const item = foundations[index];
              const href = `/foundations/${item.slug}`;
              const Icon = icons[index % icons.length];
              return (
                <a
                  className={cn(
                    "group rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    bentoSpans[index % bentoSpans.length],
                  )}
                  href={siteHref(localizedRoute(href, locale))}
                  key={href}
                >
                  <BentoCard
                    className={cn(
                      index === 0 &&
                        "min-h-80 bg-primary/10 group-hover:bg-primary/15 md:min-h-0",
                    )}
                  >
                    <div
                      aria-hidden="true"
                      className={`foundation-card-art foundation-card-art-${index % 5}`}
                    >
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="flex size-11 items-center justify-center rounded-xl bg-background text-primary shadow-sm">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <span className="font-mono text-xs text-foreground/80">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="relative z-10 mt-auto flex max-w-lg flex-col gap-2 pt-6">
                      <h2 className="text-xl font-semibold">{item.title}</h2>
                      <p className="text-pretty text-sm leading-6 text-foreground/80">
                        {item.description}
                      </p>
                    </div>
                    {index === 0 ? (
                      <footer className="relative z-10 mt-6 flex items-center justify-between">
                        <span className="text-xs font-medium text-foreground/80">
                          {content.featuredNote}
                        </span>
                        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                      </footer>
                    ) : null}
                  </BentoCard>
                </a>
              );
            })}
          </BentoGrid>
        ) : (
          <div className="grid min-h-56 place-items-center rounded-2xl border border-dashed bg-muted/25 p-8 text-center">
            <div>
              <h2 className="font-semibold">{content.emptyTitle}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {content.emptyDescription}
              </p>
            </div>
          </div>
        )}
      </section>

      <section className="scroll-mt-24 flex flex-col gap-5" id="directory">
        <div className="flex flex-col gap-2">
          <p className="eyebrow">{content.directoryEyebrow}</p>
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">
            {content.directoryTitle}
          </h2>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {foundations.map((item, index) => (
            <a
              className="group flex items-center justify-between rounded-xl border bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              href={siteHref(
                localizedRoute(`/foundations/${item.slug}`, locale),
              )}
              key={item.slug}
            >
              <span>{item.title}</span>
              <span className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="scroll-mt-24" id="layers">
        <Card className="bg-muted/35">
          <CardHeader>
            <Badge variant="secondary" className="w-fit">
              {content.layersBadge}
            </Badge>
            <CardTitle className="text-2xl">{content.layersTitle}</CardTitle>
            <CardDescription>{content.layersDescription}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-3">
            {content.layers.map(([number, title, description]) => (
              <div className="rounded-xl border bg-background p-5" key={number}>
                <span className="font-mono text-xs text-primary">{number}</span>
                <h3 className="mt-8 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </DocsLayout>
  );
}
