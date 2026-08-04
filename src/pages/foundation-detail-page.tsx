import { InfoIcon } from "lucide-react";

import {
  foundationSpecimens,
  type FoundationSpecimenKey,
} from "@/components/foundation-specimens";
import { CheckList, DocsLayout } from "@/components/site-shell";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getFoundation } from "@/data/catalog";
import { foundationItems } from "@/data/site";
import { docsContents, localizedFoundation } from "@/content/docs";
import type { HomeLocale } from "@/content/home";

export function FoundationDetailPage({
  currentPath,
  locale,
  slug,
}: {
  currentPath: string;
  locale: HomeLocale;
  slug: string;
}) {
  const baseFoundation = getFoundation(slug);
  if (!baseFoundation) return null;
  const foundation = localizedFoundation(baseFoundation, locale);
  const content = docsContents[locale].foundationDetail;

  const Specimen =
    foundationSpecimens[foundation.specimen as FoundationSpecimenKey];
  const index = foundationItems.findIndex((item) => item.href.endsWith(slug));
  const previous =
    index === 0
      ? {
          href: "/foundations",
          title: docsContents[locale].shell.sections.foundations,
          description: content.overviewDescription,
        }
      : foundationItems[index - 1];
  const next = foundationItems[index + 1] ?? {
    href: "/components",
    title: docsContents[locale].shell.sections.components,
    description: docsContents[locale].components.title,
  };

  return (
    <DocsLayout
      currentPath={currentPath}
      locale={locale}
      section="foundations"
      eyebrow={content.eyebrow}
      title={foundation.title}
      description={foundation.description}
      outline={[
        { id: "overview", title: content.overview },
        { id: "intent", title: content.intent },
        { id: "guidelines", title: content.guidelines },
        { id: "accessibility", title: content.accessibility },
        { id: "reference", title: content.reference },
      ]}
      previous={previous}
      next={next}
    >
      <section className="scroll-mt-24" id="overview">
        <Specimen />
      </section>

      <section className="scroll-mt-24 flex flex-col gap-4" id="intent">
        <p className="eyebrow">{content.intentEyebrow}</p>
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          {content.intentTitle}
        </h2>
        <p className="max-w-2xl leading-7 text-muted-foreground">
          {foundation.intent}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {foundation.related.map((related) => (
            <Badge key={related} variant="secondary">
              {related
                .split("-")
                .map((word) => word[0].toUpperCase() + word.slice(1))
                .join(" ")}
            </Badge>
          ))}
        </div>
      </section>

      <section className="scroll-mt-24 flex flex-col gap-5" id="guidelines">
        <div className="flex flex-col gap-2">
          <Badge className="w-fit" variant="secondary">
            {content.guidanceBadge}
          </Badge>
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">
            {content.guidanceTitle}
          </h2>
        </div>
        <CheckList items={foundation.rules} />
      </section>

      <section className="scroll-mt-24 flex flex-col gap-5" id="accessibility">
        <div className="flex flex-col gap-2">
          <p className="eyebrow">{content.accessibilityEyebrow}</p>
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">
            {content.accessibilityTitle}
          </h2>
        </div>
        <CheckList items={foundation.accessibility} />
      </section>

      <section className="scroll-mt-24 flex flex-col gap-5" id="reference">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">
            {content.referenceTitle}
          </h2>
          <p className="text-sm leading-6 text-muted-foreground">
            {content.referenceDescription}
          </p>
        </div>
        <Card>
          <CardContent className="px-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{content.role}</TableHead>
                  <TableHead>{content.use}</TableHead>
                  <TableHead>{content.value}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {foundation.values.map(([role, use, value]) => (
                  <TableRow key={role}>
                    <TableCell className="font-mono text-xs">{role}</TableCell>
                    <TableCell>{use}</TableCell>
                    <TableCell className="font-mono text-xs">{value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Alert>
          <InfoIcon />
          <AlertTitle>{content.sourceTitle}</AlertTitle>
          <AlertDescription>{content.sourceDescription}</AlertDescription>
        </Alert>
      </section>
    </DocsLayout>
  );
}
