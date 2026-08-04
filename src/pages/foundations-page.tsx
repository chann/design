import { useState } from "react";
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
import { foundationItems, siteHref } from "@/data/site";

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

export function FoundationsPage({ currentPath }: { currentPath: string }) {
  const [query, setQuery] = useState("");
  const [family, setFamily] = useState("all");
  const [results, setResults] = useState(foundationCatalog);

  return (
    <DocsLayout
      currentPath={currentPath}
      section="foundations"
      eyebrow="Foundations"
      title="Shared rules beneath every interface"
      description="Foundations translate Comfort’s principles into a reusable visual and behavioral language. Start with semantic roles, then compose with restraint."
      outline={[
        { id: "catalog", title: "Foundation catalog" },
        { id: "directory", title: "Complete directory" },
        { id: "layers", title: "System layers" },
      ]}
      previous={{
        href: "/principles",
        title: "Principles",
        description: "Design principles",
      }}
      next={foundationItems[0]}
    >
      <section className="scroll-mt-24 flex flex-col gap-5" id="catalog">
        <CatalogSearch
          family={family}
          items={foundationCatalog}
          onFamilyChange={setFamily}
          onResultsChange={setResults}
          onValueChange={setQuery}
          value={query}
        />
        {results.length > 0 ? (
          <BentoGrid>
            {results.map((record) => {
              const index = foundationCatalog.findIndex(
                (foundation) => foundation.slug === record.slug,
              );
              const item = foundationItems[index];
              const Icon = icons[index % icons.length];
              return (
                <a
                  className={cn(
                    "group rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    bentoSpans[index % bentoSpans.length],
                  )}
                  href={siteHref(item.href)}
                  key={item.href}
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
                      <span className="font-mono text-xs text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="relative z-10 mt-auto flex max-w-lg flex-col gap-2 pt-6">
                      <h2 className="text-xl font-semibold">{item.title}</h2>
                      <p
                        className={cn(
                          "text-pretty text-sm leading-6 text-muted-foreground",
                          index === 0 && "text-foreground/80",
                        )}
                      >
                        {item.description}
                      </p>
                    </div>
                    {index === 0 ? (
                      <footer className="relative z-10 mt-6 flex items-center justify-between">
                        <span className="text-xs font-medium text-foreground/80">
                          Reference + guidance
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
              <h2 className="font-semibold">No Foundations found</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Try a broader name or purpose.
              </p>
            </div>
          </div>
        )}
      </section>

      <section className="scroll-mt-24 flex flex-col gap-5" id="directory">
        <div className="flex flex-col gap-2">
          <p className="eyebrow">All 15 Foundations</p>
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">
            Complete directory
          </h2>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {foundationItems.map((item, index) => (
            <a
              className="group flex items-center justify-between rounded-xl border bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              href={siteHref(item.href)}
              key={item.href}
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
              System model
            </Badge>
            <CardTitle className="text-2xl">
              From intent to rendered interface
            </CardTitle>
            <CardDescription>
              Each layer gives the next one a stable contract.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-3">
            {[
              ["01", "Principles", "Why the interface behaves this way"],
              ["02", "Semantic tokens", "What roles stay stable across themes"],
              ["03", "Components", "How roles become reusable interactions"],
            ].map(([number, title, description]) => (
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
