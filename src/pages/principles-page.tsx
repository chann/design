import {
  ArrowUpRightIcon,
  CompassIcon,
  EyeIcon,
  RouteIcon,
  SproutIcon,
} from "lucide-react";

import { CheckList, DocsLayout } from "@/components/site-shell";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { principles, type Principle } from "@/data/site";

const principleIcons = [CompassIcon, EyeIcon, RouteIcon, SproutIcon];

function PrincipleCard({
  principle,
  index,
}: {
  principle: Principle;
  index: number;
}) {
  const Icon = principleIcons[index];
  return (
    <section className="scroll-mt-24" id={principle.id}>
      <Card>
        <CardHeader className="border-b pb-5 sm:grid sm:grid-cols-[1fr_auto]">
          <div className="flex flex-col gap-2">
            <CardDescription>
              {principle.number} · {principle.title}
            </CardDescription>
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">
              {principle.comfortTitle}
            </h2>
          </div>
          <span className="mt-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary sm:mt-0">
            <Icon />
          </span>
        </CardHeader>
        <CardContent className="grid gap-8 py-2 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h3 className="font-medium">Intent</h3>
            <p className="text-sm leading-6 text-muted-foreground">
              {principle.summary}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-medium">Put it into practice</h3>
            <p className="text-sm leading-6 text-muted-foreground">
              {principle.practice}
            </p>
          </div>
          <blockquote className="rounded-xl bg-muted p-5 text-sm font-medium leading-6 md:col-span-2">
            “{principle.question}”
          </blockquote>
        </CardContent>
      </Card>
    </section>
  );
}

export function PrinciplesPage({ currentPath }: { currentPath: string }) {
  return (
    <DocsLayout
      currentPath={currentPath}
      section="principles"
      eyebrow="Design principles"
      title="Four values for comfortable products"
      description="Comfort is not softness for its own sake. It is the confidence that comes from natural behavior, certain rules, meaningful guidance, and room to grow."
      outline={[
        { id: "model", title: "The model" },
        ...principles.map(({ id, title }) => ({ id, title })),
        { id: "review", title: "Review checklist" },
      ]}
      next={{
        href: "/foundations",
        title: "Foundations",
        description: "System foundations",
      }}
    >
      <section className="scroll-mt-24" id="model">
        <div
          className="principle-map"
          aria-label="Four Comfort principles arranged as one continuous decision loop"
        >
          <div className="principle-map-center">
            <span>Comfort</span>
            <strong>Trust through clarity</strong>
          </div>
          {principles.map((principle, index) => (
            <span
              className={`principle-node principle-node-${index + 1}`}
              key={principle.id}
            >
              {principle.number}
              <b>{principle.title}</b>
            </span>
          ))}
        </div>
      </section>

      <Alert>
        <CompassIcon />
        <AlertTitle>Reference model</AlertTitle>
        <AlertDescription>
          This framework adapts Ant Design’s Natural, Certain, Meaningful, and
          Growing values to Comfort’s product language and implementation
          contract. It is an interpretation, not a reproduction.{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="https://ant.design/docs/spec/values/"
            target="_blank"
            rel="noreferrer"
          >
            Read the original values{" "}
            <ArrowUpRightIcon className="inline size-3.5" />
          </a>
        </AlertDescription>
      </Alert>

      <div className="flex flex-col gap-5">
        {principles.map((principle, index) => (
          <PrincipleCard
            principle={principle}
            index={index}
            key={principle.id}
          />
        ))}
      </div>

      <section
        className="scroll-mt-24 rounded-2xl border bg-muted/35 p-6 sm:p-8"
        id="review"
      >
        <div className="mb-6 flex flex-col gap-2">
          <Badge variant="secondary" className="w-fit">
            Decision review
          </Badge>
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">
            Before a pattern ships
          </h2>
        </div>
        <CheckList
          items={[
            "The next action is understandable from language, placement, and state—not color alone.",
            "The pattern behaves like its peers and uses semantic tokens without one-off exceptions.",
            "Feedback arrives close to the action and gives a clear path forward or back.",
            "Advanced capability can appear progressively without changing learned behavior.",
          ]}
        />
      </section>
    </DocsLayout>
  );
}
