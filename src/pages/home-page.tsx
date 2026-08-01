import {
  ArrowRightIcon,
  BlocksIcon,
  BookOpenIcon,
  BracesIcon,
  Layers3Icon,
  MoveRightIcon,
  SparklesIcon,
} from "lucide-react";

import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { principles, siteHref } from "@/data/site";

const destinations = [
  {
    href: "/principles",
    title: "Principles",
    description: "Four durable values for comfortable product decisions.",
    icon: SparklesIcon,
    meta: "4 values",
  },
  {
    href: "/foundations",
    title: "Foundations",
    description:
      "The visual, structural, and inclusive rules beneath every pattern.",
    icon: Layers3Icon,
    meta: "6 foundations",
  },
  {
    href: "/components",
    title: "Components",
    description: "Production-ready patterns composed from shadcn primitives.",
    icon: BlocksIcon,
    meta: "12 references",
  },
];

function SystemPreview() {
  return (
    <div
      className="comfort-stage"
      role="img"
      aria-label="A layered blue and neutral interface material study"
    >
      <div className="comfort-stage-grid" />
      <span className="stage-note stage-note-a">24 px</span>
      <span className="stage-note stage-note-b">160 ms</span>
      <span className="stage-note stage-note-c">AA</span>
      <div className="stage-orbit stage-orbit-a" />
      <div className="stage-orbit stage-orbit-b" />
      <div className="stage-core">
        <span>Comfort</span>
        <MoveRightIcon />
        <strong>Clarity</strong>
      </div>
      <div className="stage-focus">Focus visible</div>
    </div>
  );
}

export function HomePage({ currentPath }: { currentPath: string }) {
  return (
    <>
      <SiteHeader currentPath={currentPath} />
      <main id="main-content">
        <section className="mx-auto grid max-w-[96rem] gap-10 px-4 py-12 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(30rem,1.1fr)] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div className="flex max-w-2xl flex-col gap-7">
            <Badge variant="secondary" className="w-fit">
              Design system · Alpha
            </Badge>
            <div className="flex flex-col gap-5">
              <h1 className="text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-6xl xl:text-7xl">
                Comfort in every state. Clarity in every action.
              </h1>
              <p className="max-w-xl text-pretty text-lg leading-8 text-muted-foreground">
                A detailed design contract for calm product work—semantic
                tokens, predictable components, and guidance that keeps people
                oriented.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={siteHref("/foundations")}>
                  Explore foundations <ArrowRightIcon data-icon="inline-end" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={siteHref("/DESIGN.md")}>Read DESIGN.md</a>
              </Button>
            </div>
          </div>
          <SystemPreview />
        </section>

        <section className="border-y bg-muted/35">
          <div className="mx-auto grid max-w-[96rem] md:grid-cols-3">
            {destinations.map(
              ({ href, title, description, icon: Icon, meta }) => (
                <a
                  className="group border-b p-6 transition-colors hover:bg-background md:border-r md:border-b-0 last:border-0 lg:p-8"
                  href={siteHref(href)}
                  key={href}
                >
                  <div className="flex flex-col gap-8">
                    <div className="flex items-center justify-between">
                      <span className="flex size-10 items-center justify-center rounded-xl border bg-background text-primary">
                        <Icon />
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {meta}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-xl font-semibold tracking-[-0.02em]">
                        {title}
                      </h2>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {description}
                      </p>
                      <span className="mt-2 flex items-center gap-1.5 text-sm font-medium text-primary">
                        Open reference{" "}
                        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </a>
              ),
            )}
          </div>
        </section>

        <section className="mx-auto flex max-w-[96rem] flex-col gap-10 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div className="flex flex-col gap-3">
              <p className="eyebrow">Design principles</p>
              <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                Comfort is a product behavior.
              </h2>
            </div>
            <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground lg:justify-self-end">
              A comfortable interface reduces uncertainty before it adds
              delight. These four values turn that idea into a repeatable
              decision model.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((principle) => (
              <Card className="min-h-72" key={principle.id}>
                <CardHeader>
                  <CardDescription>{principle.number}</CardDescription>
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="font-medium leading-6">
                    {principle.comfortTitle}
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {principle.summary}
                  </p>
                </CardContent>
                <CardFooter>
                  <a
                    className="flex items-center gap-1.5 text-sm font-medium"
                    href={siteHref(`/principles#${principle.id}`)}
                  >
                    Read the principle <ArrowRightIcon className="size-4" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-y bg-foreground text-background">
          <div className="mx-auto grid max-w-[96rem] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8 lg:py-28">
            <div className="flex max-w-xl flex-col gap-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-background/60">
                Built to be used
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                From reference to interface.
              </h2>
              <p className="text-base leading-7 text-background/70">
                Each component page combines an interactive specimen, anatomy,
                state guidance, and implementation notes. The code uses the same
                shadcn primitives it documents.
              </p>
              <Button asChild variant="secondary" size="lg" className="w-fit">
                <a href={siteHref("/components")}>
                  Browse components <ArrowRightIcon data-icon="inline-end" />
                </a>
              </Button>
            </div>
            <Tabs
              defaultValue="preview"
              className="rounded-2xl bg-background p-2 text-foreground"
            >
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="tokens">Tokens</TabsTrigger>
                <TabsTrigger value="contract">Contract</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="p-4 sm:p-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly focus</CardTitle>
                    <CardDescription>
                      A calm surface with one clear next action.
                    </CardDescription>
                    <CardAction>
                      <Badge>On track</Badge>
                    </CardAction>
                  </CardHeader>
                  <CardContent className="grid gap-3 sm:grid-cols-3">
                    {["Clarity", "Consistency", "Recovery"].map(
                      (label, index) => (
                        <div className="rounded-lg bg-muted p-4" key={label}>
                          <span className="text-xs text-muted-foreground">
                            0{index + 1}
                          </span>
                          <p className="mt-4 font-medium">{label}</p>
                        </div>
                      ),
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="tokens" className="p-4 sm:p-6">
                <pre className="overflow-x-auto rounded-xl bg-muted p-5 font-mono text-xs leading-6">
                  <code>{`--primary: #0066CC;\n--canvas: #F7F8FA;\n--radius-lg: 14px;\n--motion-standard: 160ms;`}</code>
                </pre>
              </TabsContent>
              <TabsContent value="contract" className="p-4 sm:p-6">
                <div className="flex min-h-40 flex-col items-center justify-center gap-3 rounded-xl border border-dashed text-center">
                  <BracesIcon />
                  <p className="font-medium">Semantic roles first</p>
                  <p className="max-w-sm text-sm text-muted-foreground">
                    Components consume stable roles instead of repeating raw
                    values.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="mx-auto max-w-[96rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Card className="bg-primary text-primary-foreground ring-0">
            <CardHeader className="p-6 sm:p-10">
              <CardDescription className="text-primary-foreground">
                Source of truth
              </CardDescription>
              <CardTitle className="max-w-3xl text-3xl tracking-[-0.04em] sm:text-5xl">
                A multilingual contract, ready for design and implementation
                work.
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 px-6 pb-6 sm:grid-cols-[1fr_auto] sm:items-end sm:px-10 sm:pb-10">
              <p className="max-w-2xl leading-7 text-primary-foreground">
                The English specification and Korean, Simplified Chinese, and
                Japanese references share the same normative tokens and
                structure.
              </p>
              <Button asChild variant="secondary" size="lg">
                <a href={siteHref("/DESIGN.md")}>
                  <BookOpenIcon data-icon="inline-start" /> Open the contract
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
