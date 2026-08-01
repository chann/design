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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { foundationItems, siteHref } from "@/data/site";

const icons = [
  CircleDotDashedIcon,
  PaletteIcon,
  CaseUpperIcon,
  LayoutGridIcon,
  BoxIcon,
  AccessibilityIcon,
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
        <div className="grid gap-4 md:grid-cols-2">
          {foundationItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <a className="group" href={siteHref(item.href)} key={item.href}>
                <Card className="h-full transition-[transform,box-shadow] group-hover:-translate-y-0.5 group-hover:shadow-lg">
                  <CardHeader>
                    <span className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon />
                    </span>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="leading-6">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="justify-between">
                    <span className="text-xs text-muted-foreground">
                      Reference + guidance
                    </span>
                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                  </CardFooter>
                </Card>
              </a>
            );
          })}
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
