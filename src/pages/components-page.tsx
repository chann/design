import {
  BellRingIcon,
  CheckSquareIcon,
  ChevronsUpDownIcon,
  CircleAlertIcon,
  CreditCardIcon,
  LayoutListIcon,
  MousePointerClickIcon,
  PanelTopIcon,
  RectangleHorizontalIcon,
  Rows3Icon,
  TextCursorInputIcon,
  ToggleLeftIcon,
} from "lucide-react";

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
import { componentCatalog, foundationCatalog } from "@/data/catalog";
import { componentItems, siteHref } from "@/data/site";

const icons = [
  MousePointerClickIcon,
  CreditCardIcon,
  PanelTopIcon,
  TextCursorInputIcon,
  Rows3Icon,
  CircleAlertIcon,
  BellRingIcon,
  CheckSquareIcon,
  ChevronsUpDownIcon,
  ToggleLeftIcon,
  LayoutListIcon,
  RectangleHorizontalIcon,
];
const bentoSpans = [
  "md:col-span-4 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-4",
  "md:col-span-2",
];

export function ComponentsPage({ currentPath }: { currentPath: string }) {
  return (
    <DocsLayout
      currentPath={currentPath}
      section="components"
      eyebrow="Components"
      title="Predictable parts for product work"
      description="Comfort components are composed from shadcn primitives, themed with semantic tokens, and documented as interaction contracts rather than screenshots."
      outline={[
        { id: "catalog", title: "Component catalog" },
        { id: "contract", title: "Composition contract" },
      ]}
      previous={{
        href: `/foundations/${foundationCatalog.at(-1)?.slug}`,
        title: foundationCatalog.at(-1)?.title ?? "Foundations",
        description:
          foundationCatalog.at(-1)?.description ?? "Foundation catalog",
      }}
      next={componentItems[0]}
    >
      <section className="scroll-mt-24" id="catalog">
        <BentoGrid>
          {componentItems.map((item, index) => {
            const Icon = icons[index % icons.length];
            const category = componentCatalog[index].family
              .split("-")
              .map((word) => word[0].toUpperCase() + word.slice(1))
              .join(" ");
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
                    index === 10 && "bg-card shadow-sm",
                  )}
                >
                  <Icon
                    aria-hidden="true"
                    className={cn(
                      "absolute -right-4 -top-4 size-32 text-primary opacity-[0.07] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-rotate-3 group-hover:scale-105",
                      index === 0 && "size-48 opacity-10",
                      index === 10 && "right-6 top-6 size-36",
                    )}
                    strokeWidth={1}
                  />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-background text-primary shadow-sm">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <Badge variant="outline">{category}</Badge>
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
                        Interactive reference
                      </span>
                      <span aria-hidden="true">↗</span>
                    </footer>
                  ) : null}
                </BentoCard>
              </a>
            );
          })}
        </BentoGrid>
      </section>

      <section className="scroll-mt-24" id="contract">
        <Card className="overflow-hidden bg-muted/35">
          <CardHeader>
            <CardTitle className="text-2xl">Composition contract</CardTitle>
            <CardDescription>
              Every Comfort component keeps three layers visible.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-3">
            {[
              ["Primitive", "Radix behavior and accessible interaction"],
              ["Component", "shadcn composition and variant API"],
              ["Comfort", "Semantic tokens, guidance, and product voice"],
            ].map(([title, description], index) => (
              <div className="rounded-xl border bg-background p-5" key={title}>
                <span className="font-mono text-xs text-primary">
                  0{index + 1}
                </span>
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
