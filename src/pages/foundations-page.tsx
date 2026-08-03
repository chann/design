import {
  AccessibilityIcon,
  ArrowRightIcon,
  BoxIcon,
  CaseUpperIcon,
  CircleDotDashedIcon,
  LayoutGridIcon,
  PaletteIcon,
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
  return (
    <DocsLayout
      currentPath={currentPath}
      section="foundations"
      eyebrow="Foundations"
      title="Shared rules beneath every interface"
      description="Foundations translate Comfort’s principles into a reusable visual and behavioral language. Start with semantic roles, then compose with restraint."
      outline={[
        { id: "catalog", title: "Foundation catalog" },
        { id: "layers", title: "System layers" },
      ]}
      previous={{
        href: "/principles",
        title: "Principles",
        description: "Design principles",
      }}
      next={foundationItems[0]}
    >
      <section className="scroll-mt-24" id="catalog">
        <BentoGrid>
          {foundationItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <a
                className={cn(
                  "group rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  bentoSpans[index],
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
                  <Icon
                    aria-hidden="true"
                    className={cn(
                      "absolute -right-4 -top-4 size-32 text-primary opacity-[0.07] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-rotate-3 group-hover:scale-105",
                      index === 0 && "size-48 opacity-10",
                    )}
                    strokeWidth={1}
                  />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-background text-primary shadow-sm">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      0{index + 1}
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
