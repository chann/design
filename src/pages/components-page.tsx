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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
const categories = [
  "Action",
  "Layout",
  "Overlay",
  "Form",
  "Navigation",
  "Feedback",
  "Metadata",
  "Form",
  "Form",
  "Form",
  "Data",
  "Feedback",
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
        href: "/foundations/accessibility",
        title: "Accessibility",
        description: "Accessibility foundation",
      }}
      next={componentItems[0]}
    >
      <section className="scroll-mt-24" id="catalog">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {componentItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <a className="group" href={siteHref(item.href)} key={item.href}>
                <Card className="h-full min-h-60 transition-[transform,box-shadow] group-hover:-translate-y-0.5 group-hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-6 flex items-center justify-between">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary-text">
                        <Icon />
                      </span>
                      <Badge variant="outline">{categories[index]}</Badge>
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="leading-6">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto justify-between">
                    <span className="text-xs text-muted-foreground">
                      Interactive reference
                    </span>
                    <span aria-hidden="true">↗</span>
                  </CardFooter>
                </Card>
              </a>
            );
          })}
        </div>
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
                <span className="font-mono text-xs text-primary-text">
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
