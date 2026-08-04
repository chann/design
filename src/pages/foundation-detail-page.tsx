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

export function FoundationDetailPage({
  currentPath,
  slug,
}: {
  currentPath: string;
  slug: string;
}) {
  const foundation = getFoundation(slug);
  if (!foundation) return null;

  const Specimen =
    foundationSpecimens[foundation.specimen as FoundationSpecimenKey];
  const index = foundationItems.findIndex((item) => item.href.endsWith(slug));
  const previous =
    index === 0
      ? {
          href: "/foundations",
          title: "Foundations",
          description: "Foundation overview",
        }
      : foundationItems[index - 1];
  const next = foundationItems[index + 1] ?? {
    href: "/components",
    title: "Components",
    description: "Component catalog",
  };

  return (
    <DocsLayout
      currentPath={currentPath}
      section="foundations"
      eyebrow="Foundation"
      title={foundation.title}
      description={foundation.description}
      outline={[
        { id: "overview", title: "Overview" },
        { id: "intent", title: "Intent" },
        { id: "guidelines", title: "Guidelines" },
        { id: "accessibility", title: "Accessibility" },
        { id: "reference", title: "Reference values" },
      ]}
      previous={previous}
      next={next}
    >
      <section className="scroll-mt-24" id="overview">
        <Specimen />
      </section>

      <section className="scroll-mt-24 flex flex-col gap-4" id="intent">
        <p className="eyebrow">System intent</p>
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          What this foundation protects
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
            Core guidance
          </Badge>
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">
            Apply it with intent
          </h2>
        </div>
        <CheckList items={foundation.rules} />
      </section>

      <section className="scroll-mt-24 flex flex-col gap-5" id="accessibility">
        <div className="flex flex-col gap-2">
          <p className="eyebrow">Inclusive baseline</p>
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">
            Accessibility checks
          </h2>
        </div>
        <CheckList items={foundation.accessibility} />
      </section>

      <section className="scroll-mt-24 flex flex-col gap-5" id="reference">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">
            Reference values
          </h2>
          <p className="text-sm leading-6 text-muted-foreground">
            Semantic roles stay stable while rendered values adapt to theme,
            viewport, language, and interaction state.
          </p>
        </div>
        <Card>
          <CardContent className="px-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Role</TableHead>
                  <TableHead>Use</TableHead>
                  <TableHead>Reference</TableHead>
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
          <AlertTitle>Normative source</AlertTitle>
          <AlertDescription>
            Exact production values and acceptance rules live in DESIGN.md; this
            page makes their visual and behavioral intent inspectable.
          </AlertDescription>
        </Alert>
      </section>
    </DocsLayout>
  );
}
