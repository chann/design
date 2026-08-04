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
import { docsContents } from "@/content/docs";
import type { HomeLocale } from "@/content/home";
import type { Principle } from "@/data/site";

const principleIcons = [CompassIcon, EyeIcon, RouteIcon, SproutIcon];

function PrincipleCard({
  principle,
  index,
  intentLabel,
  practiceLabel,
}: {
  principle: Principle;
  index: number;
  intentLabel: string;
  practiceLabel: string;
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
            <h3 className="font-medium">{intentLabel}</h3>
            <p className="text-sm leading-6 text-muted-foreground">
              {principle.summary}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-medium">{practiceLabel}</h3>
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

export function PrinciplesPage({
  currentPath,
  locale,
}: {
  currentPath: string;
  locale: HomeLocale;
}) {
  const content = docsContents[locale].principles;
  const principles = content.items;

  return (
    <DocsLayout
      currentPath={currentPath}
      locale={locale}
      section="principles"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      outline={[
        { id: "model", title: content.outlineModel },
        ...principles.map(({ id, title }) => ({ id, title })),
        { id: "review", title: content.outlineReview },
      ]}
      next={{
        href: "/foundations",
        title: docsContents[locale].shell.sections.foundations,
        description: docsContents[locale].foundations.title,
      }}
    >
      <section className="scroll-mt-24" id="model">
        <div className="principle-map" aria-label={content.modelLabel}>
          <div className="principle-map-center">
            <span>Comfort</span>
            <strong>{content.modelCenter}</strong>
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
        <AlertTitle>{content.referenceTitle}</AlertTitle>
        <AlertDescription>
          {content.referenceDescription}{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="https://ant.design/docs/spec/values/"
            target="_blank"
            rel="noreferrer"
          >
            {content.referenceAction}{" "}
            <ArrowUpRightIcon className="inline size-3.5" />
          </a>
        </AlertDescription>
      </Alert>

      <div className="flex flex-col gap-5">
        {principles.map((principle, index) => (
          <PrincipleCard
            principle={principle}
            index={index}
            intentLabel={content.intent}
            practiceLabel={content.practice}
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
            {content.reviewBadge}
          </Badge>
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">
            {content.reviewTitle}
          </h2>
        </div>
        <CheckList items={[...content.reviewItems]} />
      </section>
    </DocsLayout>
  );
}
