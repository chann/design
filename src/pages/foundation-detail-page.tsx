import {
  AccessibilityIcon,
  ArrowRightIcon,
  BoxIcon,
  CircleDotDashedIcon,
  InfoIcon,
  LayoutGridIcon,
  PaletteIcon,
  TypeIcon,
} from "lucide-react";

import { CheckList, DocsLayout } from "@/components/site-shell";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { foundationItems } from "@/data/site";

type FoundationKey =
  | "design-tokens"
  | "color"
  | "typography"
  | "layout"
  | "motion"
  | "accessibility";

const details: Record<
  FoundationKey,
  {
    title: string;
    description: string;
    why: string;
    rules: string[];
    roles: Array<[string, string, string]>;
  }
> = {
  "design-tokens": {
    title: "Design tokens",
    description:
      "A semantic vocabulary that keeps design decisions portable across themes, platforms, and product surfaces.",
    why: "Raw values describe appearance. Semantic tokens describe intent. Comfort components depend on intent so a theme can change without rewriting behavior.",
    rules: [
      "Name roles by purpose, not by a single color or component.",
      "Map aliases to one global source before component-level use.",
      "Treat light and dark values as parallel outcomes of the same role.",
    ],
    roles: [
      ["background", "Page canvas", "#F7F8FA"],
      ["foreground", "Primary text", "#17181A"],
      ["primary", "Primary action", "#0066CC"],
      ["border", "Structure", "#D7DCE2"],
    ],
  },
  color: {
    title: "Color",
    description:
      "Cool neutral surfaces create quiet structure while a restrained blue signals action, selection, and focus.",
    why: "Comfort uses color to clarify hierarchy and state, never as the only source of meaning. Most product surfaces stay neutral so actionable blue remains useful.",
    rules: [
      "Reserve primary blue for actions, active selection, and focus.",
      "Pair status color with text, iconography, or shape.",
      "Evaluate contrast in both themes and every interactive state.",
    ],
    roles: [
      ["canvas", "App background", "#F7F8FA"],
      ["surface", "Content surface", "#FFFFFF"],
      ["primary", "Action and focus", "#0066CC"],
      ["destructive", "Critical action", "#B42318"],
    ],
  },
  typography: {
    title: "Typography",
    description:
      "A compact type hierarchy for product content, supporting information, and dense data without sacrificing readability.",
    why: "Type carries most of a product’s meaning. Comfort uses limited sizes, strong hierarchy, and relaxed body leading so people can scan quickly and read carefully.",
    rules: [
      "Use sentence case for interface labels and headings.",
      "Keep line length near 45–75 characters for prose.",
      "Use tabular numerals or monospace only where alignment communicates structure.",
    ],
    roles: [
      ["display", "Hero statement", "64 / 1.02"],
      ["headline-md", "Page section", "32 / 1.15"],
      ["body-md", "Product copy", "16 / 1.55"],
      ["caption", "Supporting metadata", "12 / 1.4"],
    ],
  },
  layout: {
    title: "Layout",
    description:
      "Responsive containers, deliberate density, and a durable reading order help every screen feel composed rather than compressed.",
    why: "A layout is comfortable when content priority survives every viewport. Comfort scales gutters and columns while preserving reading order and reachable actions.",
    rules: [
      "Design source order for the smallest viewport first.",
      "Use the spacing scale before introducing an exception.",
      "Keep primary actions near the content or decision they resolve.",
    ],
    roles: [
      ["page-gutter", "Compact viewport", "24 px"],
      ["content", "Readable docs width", "896 px"],
      ["section", "Major vertical rhythm", "80 px"],
      ["grid", "Wide product layouts", "12 columns"],
    ],
  },
  motion: {
    title: "Motion",
    description:
      "Short transitions preserve spatial continuity and explain state changes without slowing the task.",
    why: "Motion should answer where something came from, what changed, or whether an action completed. Decorative movement is secondary to orientation.",
    rules: [
      "Keep routine feedback between 100 and 240 milliseconds.",
      "Animate opacity and transforms instead of layout when possible.",
      "Provide a meaningful reduced-motion state, not a broken or delayed one.",
    ],
    roles: [
      ["instant", "Pressed and focus feedback", "100 ms"],
      ["standard", "Most transitions", "160 ms"],
      ["deliberate", "Panels and overlays", "240 ms"],
      ["curve", "Product motion", "cubic-bezier(.2,.8,.2,1)"],
    ],
  },
  accessibility: {
    title: "Accessibility",
    description:
      "Semantics, contrast, focus, and forgiving interaction are foundational contracts—not a finishing pass.",
    why: "Comfort depends on people being able to understand and operate the interface in different contexts, with different inputs, and at different levels of perception.",
    rules: [
      "Prefer native semantics and preserve a logical focus order.",
      "Keep focus visible and never rely on color alone.",
      "Support zoom, reflow, keyboard input, and reduced motion by default.",
    ],
    roles: [
      ["target", "Minimum compact target", "44 × 44 px"],
      ["focus", "Visible focus ring", "2 px + offset"],
      ["contrast", "Body text target", "4.5 : 1"],
      ["reflow", "No two-axis reading", "320 CSS px"],
    ],
  },
};

const icons = {
  "design-tokens": CircleDotDashedIcon,
  color: PaletteIcon,
  typography: TypeIcon,
  layout: LayoutGridIcon,
  motion: BoxIcon,
  accessibility: AccessibilityIcon,
};

function FoundationSpecimen({ type }: { type: FoundationKey }) {
  if (type === "color")
    return (
      <div className="grid min-h-72 grid-cols-2 overflow-hidden rounded-2xl border sm:grid-cols-4">
        {[
          ["Canvas", "#F7F8FA", "text-zinc-950"],
          ["Surface", "#FFFFFF", "text-zinc-950"],
          ["Primary", "#0066CC", "text-white"],
          ["Ink", "#17181A", "text-white"],
        ].map(([name, value, color]) => (
          <div
            className={`flex flex-col justify-end p-5 ${color}`}
            style={{ background: value }}
            key={name}
          >
            <strong>{name}</strong>
            <span className="font-mono text-xs">{value}</span>
          </div>
        ))}
      </div>
    );
  if (type === "typography")
    return (
      <div className="flex min-h-72 flex-col justify-center gap-7 rounded-2xl border bg-card p-6 sm:p-10">
        <p className="text-5xl font-semibold tracking-[-0.05em]">
          Comfort reads clearly.
        </p>
        <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
          Familiar forms, compact hierarchy, and generous rhythm keep product
          language easy to scan and steady to read.
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Display · Body · Metadata
        </p>
      </div>
    );
  if (type === "layout")
    return (
      <div
        className="layout-specimen"
        aria-label="Responsive twelve-column layout specimen"
      >
        {Array.from({ length: 12 }, (_, i) => (
          <i key={i} />
        ))}
        <span className="layout-block layout-block-a">Navigation</span>
        <span className="layout-block layout-block-b">Content</span>
        <span className="layout-block layout-block-c">Aside</span>
      </div>
    );
  if (type === "motion")
    return (
      <div className="grid min-h-72 place-items-center overflow-hidden rounded-2xl border bg-muted/50">
        <div className="motion-orbit">
          <i />
          <span>160 ms</span>
        </div>
      </div>
    );
  if (type === "accessibility")
    return (
      <div className="grid min-h-72 gap-4 rounded-2xl border bg-card p-6 sm:grid-cols-2 sm:p-10">
        <button className="focus-specimen">Keyboard focus</button>
        <div className="flex flex-col justify-center gap-3 rounded-xl bg-muted p-5">
          <span className="text-sm font-medium">Meaning beyond color</span>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <InfoIcon className="size-4" /> Info status with icon and label
          </span>
        </div>
      </div>
    );
  return (
    <div className="token-specimen">
      <span className="token-root">semantic role</span>
      <ArrowRightIcon />
      <span>theme alias</span>
      <ArrowRightIcon />
      <span>component token</span>
    </div>
  );
}

export function FoundationDetailPage({
  currentPath,
  slug,
}: {
  currentPath: string;
  slug: FoundationKey;
}) {
  const detail = details[slug];
  const index = foundationItems.findIndex((item) => item.href.endsWith(slug));
  const Icon = icons[slug];
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
      title={detail.title}
      description={detail.description}
      outline={[
        { id: "overview", title: "Overview" },
        { id: "system", title: "System reference" },
        { id: "guidelines", title: "Guidelines" },
        { id: "implementation", title: "Implementation" },
      ]}
      previous={previous}
      next={next}
    >
      <section className="scroll-mt-24" id="overview">
        <FoundationSpecimen type={slug} />
      </section>
      <section
        className="scroll-mt-24 grid gap-5 md:grid-cols-[auto_1fr]"
        id="system"
      >
        <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon />
        </span>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">
            Why it matters
          </h2>
          <p className="max-w-2xl leading-7 text-muted-foreground">
            {detail.why}
          </p>
        </div>
      </section>
      <Separator />
      <section className="scroll-mt-24 flex flex-col gap-5" id="guidelines">
        <div className="flex flex-col gap-2">
          <Badge variant="secondary" className="w-fit">
            Core guidance
          </Badge>
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">
            Use the foundation with intent
          </h2>
        </div>
        <CheckList items={detail.rules} />
      </section>
      <section className="scroll-mt-24 flex flex-col gap-5" id="implementation">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">
            Reference values
          </h2>
          <p className="text-sm text-muted-foreground">
            Semantic roles remain stable; rendered values can adapt by theme and
            context.
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
                {detail.roles.map(([role, use, value]) => (
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
            Exact production tokens live in DESIGN.md. This page explains their
            visual and behavioral intent.
          </AlertDescription>
        </Alert>
      </section>
    </DocsLayout>
  );
}
