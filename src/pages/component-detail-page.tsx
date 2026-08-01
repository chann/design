import { useState } from "react";
import { AlertCircleIcon, InfoIcon, SaveIcon } from "lucide-react";

import { CheckList, DocsLayout } from "@/components/site-shell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { componentItems } from "@/data/site";

type ComponentKey =
  | "button"
  | "card"
  | "dialog"
  | "input"
  | "tabs"
  | "alert"
  | "badge"
  | "checkbox"
  | "select"
  | "switch"
  | "table"
  | "skeleton";

type ComponentDetail = {
  title: string;
  category: string;
  description: string;
  usage: string;
  anatomy: string[];
  doItems: string[];
  avoidItems: string[];
  properties: Array<[string, string, string]>;
};

const details: Record<ComponentKey, ComponentDetail> = {
  button: {
    title: "Button",
    category: "Action",
    description:
      "Initiates an immediate action with a clear visual hierarchy and a predictable feedback state.",
    usage:
      "Use a button for an operation that changes state, submits data, or opens an interaction layer. Use a link for navigation.",
    anatomy: [
      "Label or accessible name",
      "Optional leading or trailing icon",
      "Container, focus ring, and interaction state",
    ],
    doItems: [
      "Lead with a concise verb that describes the result.",
      "Keep one primary action in each decision area.",
      "Preserve the label while a request is in progress.",
    ],
    avoidItems: [
      "Do not use a button for ordinary page navigation.",
      "Do not distinguish actions by color alone.",
      "Do not hide a destructive result behind a vague label.",
    ],
    properties: [
      [
        "variant",
        "default | secondary | outline | ghost | destructive | link",
        "default",
      ],
      ["size", "xs | sm | default | lg | icon", "default"],
      ["disabled", "boolean", "false"],
    ],
  },
  card: {
    title: "Card",
    category: "Layout",
    description:
      "Groups related content and actions into a bounded, scannable surface.",
    usage:
      "Use a card when content benefits from independent grouping. Avoid wrapping every section in a card when hierarchy and spacing are enough.",
    anatomy: [
      "Header with title and description",
      "Optional action",
      "Content region and optional footer",
    ],
    doItems: [
      "Keep each card focused on one subject or task.",
      "Use the full header, content, and footer composition.",
      "Align repeated cards to support scanning.",
    ],
    avoidItems: [
      "Do not nest multiple bordered cards without a clear hierarchy.",
      "Do not make only part of a visually clickable card interactive.",
      "Do not use elevation as the only grouping cue.",
    ],
    properties: [
      ["size", "default | sm", "default"],
      ["className", "semantic styling extension", "—"],
      ["children", "composed card regions", "required"],
    ],
  },
  dialog: {
    title: "Dialog",
    category: "Overlay",
    description:
      "Focuses attention on a decision or short task while preserving the underlying context.",
    usage:
      "Use a dialog for a contained decision that must be resolved or dismissed before returning. Use a full page for complex or multi-step work.",
    anatomy: [
      "Visible title and supporting description",
      "Focused content",
      "Footer actions and close control",
    ],
    doItems: [
      "Name the decision in the title.",
      "Move focus into the dialog and return it on close.",
      "Place the safest clear path next to the primary action.",
    ],
    avoidItems: [
      "Do not open a dialog from another dialog.",
      "Do not use it for long-form browsing.",
      "Do not close destructive confirmations without an explicit choice.",
    ],
    properties: [
      ["open", "controlled open state", "—"],
      ["defaultOpen", "initial uncontrolled state", "false"],
      ["modal", "trap interaction outside", "true"],
    ],
  },
  input: {
    title: "Input",
    category: "Form",
    description:
      "Collects a short text value with a persistent label, relevant help, and actionable validation.",
    usage:
      "Use for short free-form values. Use a textarea for multi-line writing and a select for a bounded set of known options.",
    anatomy: ["Persistent label", "Text field", "Description or error message"],
    doItems: [
      "Use a visible label and a useful autocomplete token.",
      "Validate at a helpful point without interrupting entry.",
      "Explain how to correct an invalid value.",
    ],
    avoidItems: [
      "Do not use placeholder text as the only label.",
      "Do not erase an invalid value.",
      "Do not show requirements only after failure.",
    ],
    properties: [
      ["type", "HTML input type", "text"],
      ["aria-invalid", "validation state", "false"],
      ["disabled", "boolean", "false"],
    ],
  },
  tabs: {
    title: "Tabs",
    category: "Navigation",
    description:
      "Switches between peer views while keeping the surrounding context stable.",
    usage:
      "Use tabs for a small set of equal-level views that people may switch between repeatedly.",
    anatomy: [
      "Tab list",
      "Selected and unselected triggers",
      "One associated tab panel",
    ],
    doItems: [
      "Keep labels short and specific.",
      "Persist the active tab when it represents meaningful state.",
      "Use a visible selected state beyond color alone.",
    ],
    avoidItems: [
      "Do not use tabs for sequential steps.",
      "Do not wrap tab labels onto multiple lines.",
      "Do not hide critical content in a rarely discovered tab.",
    ],
    properties: [
      ["defaultValue", "initial tab value", "required"],
      ["orientation", "horizontal | vertical", "horizontal"],
      ["activationMode", "automatic | manual", "automatic"],
    ],
  },
  alert: {
    title: "Alert",
    category: "Feedback",
    description:
      "Surfaces contextual information that is important to the current task.",
    usage:
      "Use an inline alert for persistent context. Reserve toasts for brief confirmation that does not require a response.",
    anatomy: [
      "Status icon",
      "Concise title",
      "Supporting description or recovery action",
    ],
    doItems: [
      "Place the alert near the content it explains.",
      "State impact before technical detail.",
      "Provide recovery when action is required.",
    ],
    avoidItems: [
      "Do not use alerts for ordinary helper text.",
      "Do not stack many statuses without priority.",
      "Do not rely on color as the status label.",
    ],
    properties: [
      ["variant", "default | destructive", "default"],
      ["role", "status or alert when appropriate", "—"],
      ["children", "title and description", "required"],
    ],
  },
  badge: {
    title: "Badge",
    category: "Metadata",
    description:
      "Adds concise status, count, or classification metadata to another element.",
    usage:
      "Use a badge for brief supporting information. It should not become the primary action or carry a full sentence.",
    anatomy: [
      "Compact container",
      "Short text or count",
      "Optional semantic icon",
    ],
    doItems: [
      "Keep labels to one or two words.",
      "Use stable vocabulary across the product.",
      "Pair critical status color with text.",
    ],
    avoidItems: [
      "Do not turn badges into tiny buttons.",
      "Do not place paragraphs inside a badge.",
      "Do not invent a new color for every category.",
    ],
    properties: [
      ["variant", "default | secondary | outline | destructive", "default"],
      ["asChild", "merge with child element", "false"],
      ["children", "short label", "required"],
    ],
  },
  checkbox: {
    title: "Checkbox",
    category: "Form",
    description:
      "Selects one or more independent options, including an optional indeterminate group state.",
    usage:
      "Use checkboxes when multiple choices can be selected independently. Use a radio group when exactly one choice is required.",
    anatomy: [
      "Checkbox control",
      "Persistent option label",
      "Optional description",
    ],
    doItems: [
      "Make the label and control one click target.",
      "Use a positive statement that describes the selected state.",
      "Show indeterminate state for partially selected groups.",
    ],
    avoidItems: [
      "Do not use a checkbox for an immediate settings toggle.",
      "Do not make options mutually exclusive.",
      "Do not separate the control from its label.",
    ],
    properties: [
      ["checked", "boolean | indeterminate", "false"],
      ["required", "boolean", "false"],
      ["disabled", "boolean", "false"],
    ],
  },
  select: {
    title: "Select",
    category: "Form",
    description:
      "Chooses one option from a known list while keeping the closed control compact.",
    usage:
      "Use a select for a bounded list where seeing every option at once is not essential. Prefer radio controls for a short, high-stakes choice.",
    anatomy: [
      "Label and trigger",
      "Current value or placeholder",
      "Option menu",
    ],
    doItems: [
      "Use a label that explains the dimension being chosen.",
      "Order options predictably.",
      "Show the current choice in the closed trigger.",
    ],
    avoidItems: [
      "Do not hide fewer than three simple options in a menu.",
      "Do not use it for free-form search without combobox behavior.",
      "Do not mix navigation and selection.",
    ],
    properties: [
      ["defaultValue", "initial selected value", "—"],
      ["name", "submitted field name", "—"],
      ["disabled", "boolean", "false"],
    ],
  },
  switch: {
    title: "Switch",
    category: "Form",
    description:
      "Changes a setting between on and off and applies the result immediately.",
    usage:
      "Use a switch only when the change takes effect immediately. Use a checkbox when choices are collected for later submission.",
    anatomy: [
      "Switch control",
      "Setting label",
      "Optional description of impact",
    ],
    doItems: [
      "Phrase the label as the enabled setting.",
      "Apply the state immediately and confirm meaningful impact.",
      "Keep on and off behavior reversible.",
    ],
    avoidItems: [
      "Do not require a separate Save action.",
      "Do not use a switch for mutually exclusive choices.",
      "Do not replace a clear label with On and Off text alone.",
    ],
    properties: [
      ["checked", "controlled state", "—"],
      ["defaultChecked", "initial state", "false"],
      ["disabled", "boolean", "false"],
    ],
  },
  table: {
    title: "Table",
    category: "Data",
    description:
      "Compares structured information across consistent rows and columns.",
    usage:
      "Use a table when comparison across attributes matters. Use cards or a list when each item has a distinct narrative structure.",
    anatomy: [
      "Column headers",
      "Rows and data cells",
      "Caption, actions, or summary",
    ],
    doItems: [
      "Align data according to its meaning.",
      "Keep headers visible and specific.",
      "Preserve semantic table markup when the layout reflows.",
    ],
    avoidItems: [
      "Do not squeeze wide comparison into unreadable columns.",
      "Do not use a table for visual alignment only.",
      "Do not hide row actions without an accessible name.",
    ],
    properties: [
      ["caption", "accessible table context", "recommended"],
      ["scope", "header association", "column"],
      ["className", "responsive display extension", "—"],
    ],
  },
  skeleton: {
    title: "Skeleton",
    category: "Feedback",
    description:
      "Preserves the shape of incoming content while a known layout is loading.",
    usage:
      "Use when content structure is known and delay is likely to be noticed. Use a spinner for an indeterminate action without a stable content shape.",
    anatomy: [
      "Shapes matching final layout",
      "Subtle animation",
      "Stable surrounding container",
    ],
    doItems: [
      "Match the final content geometry.",
      "Keep the layout from shifting on completion.",
      "Respect reduced-motion preferences.",
    ],
    avoidItems: [
      "Do not show a skeleton for instant local transitions.",
      "Do not invent shapes unrelated to the result.",
      "Do not leave loading state without an error or empty fallback.",
    ],
    properties: [
      ["className", "final geometry", "required"],
      ["aria-hidden", "hide decorative placeholder", "true"],
      ["container", "communicates loading status", "recommended"],
    ],
  },
};

function ComponentSpecimen({ type }: { type: ComponentKey }) {
  const [enabled, setEnabled] = useState(true);
  const [checked, setChecked] = useState(true);

  switch (type) {
    case "button":
      return (
        <div className="specimen-panel flex flex-wrap items-center justify-center gap-3">
          <Button>
            <SaveIcon data-icon="inline-start" />
            Save changes
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Delete</Button>
          <Button disabled>Unavailable</Button>
        </div>
      );
    case "card":
      return (
        <div className="specimen-panel">
          <Card className="mx-auto max-w-md">
            <CardHeader>
              <CardTitle>Release readiness</CardTitle>
              <CardDescription>
                Three checks remain before publication.
              </CardDescription>
              <CardAction>
                <Badge>In review</Badge>
              </CardAction>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-muted p-4 text-sm">
                Build, accessibility, and remote parity
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button size="sm">Review checks</Button>
            </CardFooter>
          </Card>
        </div>
      );
    case "dialog":
      return (
        <div className="specimen-panel grid place-items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Publish this reference?</DialogTitle>
                <DialogDescription>
                  The latest Comfort documentation will become available to
                  everyone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button>Publish</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      );
    case "input":
      return (
        <div className="specimen-panel">
          <FieldGroup className="mx-auto max-w-md">
            <Field>
              <FieldLabel htmlFor="email-example">Work email</FieldLabel>
              <Input
                id="email-example"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
              />
              <FieldDescription>
                We’ll only use this for release notices.
              </FieldDescription>
            </Field>
            <Field data-invalid="true">
              <FieldLabel htmlFor="project-example">Project key</FieldLabel>
              <Input
                id="project-example"
                aria-invalid="true"
                defaultValue="comfort design"
              />
              <FieldDescription>
                Use lowercase letters and hyphens only.
              </FieldDescription>
            </Field>
          </FieldGroup>
        </div>
      );
    case "tabs":
      return (
        <div className="specimen-panel">
          <Tabs defaultValue="overview" className="mx-auto max-w-lg">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="states">States</TabsTrigger>
              <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
            </TabsList>
            <TabsContent
              value="overview"
              className="rounded-xl border p-5 text-sm leading-6"
            >
              Use peer views inside one stable context.
            </TabsContent>
            <TabsContent
              value="states"
              className="rounded-xl border p-5 text-sm leading-6"
            >
              Keep hover, focus, selected, and disabled states distinct.
            </TabsContent>
            <TabsContent
              value="accessibility"
              className="rounded-xl border p-5 text-sm leading-6"
            >
              Arrow keys move focus; the selected tab owns its panel.
            </TabsContent>
          </Tabs>
        </div>
      );
    case "alert":
      return (
        <div className="specimen-panel flex flex-col gap-3">
          <Alert>
            <InfoIcon />
            <AlertTitle>Reference updated</AlertTitle>
            <AlertDescription>
              Color guidance now includes dark-theme pairings.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>Build could not finish</AlertTitle>
            <AlertDescription>
              Resolve the two invalid token references and try again.
            </AlertDescription>
          </Alert>
        </div>
      );
    case "badge":
      return (
        <div className="specimen-panel flex flex-wrap items-center justify-center gap-3">
          <Badge>Stable</Badge>
          <Badge variant="secondary">Draft</Badge>
          <Badge variant="outline">Experimental</Badge>
          <Badge variant="destructive">Blocked</Badge>
        </div>
      );
    case "checkbox":
      return (
        <div className="specimen-panel">
          <FieldGroup className="mx-auto max-w-md">
            <Field orientation="horizontal">
              <Checkbox
                id="release-notes"
                checked={checked}
                onCheckedChange={(value) => setChecked(value === true)}
              />
              <FieldLabel htmlFor="release-notes">
                Send release notes
              </FieldLabel>
            </Field>
            <Field orientation="horizontal" data-disabled="true">
              <Checkbox id="managed-setting" disabled />
              <FieldLabel htmlFor="managed-setting">
                Managed by organization
              </FieldLabel>
            </Field>
          </FieldGroup>
        </div>
      );
    case "select":
      return (
        <div className="specimen-panel">
          <Field className="mx-auto max-w-sm">
            <FieldLabel htmlFor="density-select">Interface density</FieldLabel>
            <Select defaultValue="comfortable">
              <SelectTrigger id="density-select">
                <SelectValue placeholder="Select density" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="compact">Compact</SelectItem>
                <SelectItem value="comfortable">Comfortable</SelectItem>
                <SelectItem value="spacious">Spacious</SelectItem>
              </SelectContent>
            </Select>
            <FieldDescription>
              Comfortable is recommended for mixed product work.
            </FieldDescription>
          </Field>
        </div>
      );
    case "switch":
      return (
        <div className="specimen-panel">
          <FieldGroup className="mx-auto max-w-md">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldLabel htmlFor="notifications">
                  Release notifications
                </FieldLabel>
                <FieldDescription>
                  Receive a message when a deployment completes.
                </FieldDescription>
              </FieldContent>
              <Switch
                id="notifications"
                checked={enabled}
                onCheckedChange={setEnabled}
              />
            </Field>
          </FieldGroup>
        </div>
      );
    case "table":
      return (
        <div className="specimen-panel overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Token</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right">Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["primary", "Action", "#0066CC"],
                ["canvas", "Background", "#F7F8FA"],
                ["radius-lg", "Container", "14 px"],
              ].map((row) => (
                <TableRow key={row[0]}>
                  {row.map((cell, index) => (
                    <TableCell
                      className={
                        index === 2
                          ? "text-right font-mono text-xs"
                          : index === 0
                            ? "font-mono text-xs"
                            : ""
                      }
                      key={cell}
                    >
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      );
    case "skeleton":
      return (
        <div
          className="specimen-panel"
          aria-busy="true"
          aria-label="Loading profile"
        >
          <div className="mx-auto flex max-w-md items-center gap-4">
            <Skeleton className="size-12 rounded-full" />
            <div className="flex flex-1 flex-col gap-2">
              <Skeleton className="h-4 w-2/5" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </div>
        </div>
      );
  }
}

function GuidanceColumns({ detail }: { detail: ComponentDetail }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardDescription className="text-emerald-700 dark:text-emerald-400">
            Do
          </CardDescription>
          <CardTitle>Keep the task clear</CardTitle>
        </CardHeader>
        <CardContent>
          <CheckList items={detail.doItems} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardDescription className="text-destructive">Avoid</CardDescription>
          <CardTitle>Protect predictability</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-3">
            {detail.avoidItems.map((item) => (
              <li className="flex gap-3 text-sm leading-6" key={item}>
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-destructive" />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export function ComponentDetailPage({
  currentPath,
  slug,
}: {
  currentPath: string;
  slug: ComponentKey;
}) {
  const detail = details[slug];
  const index = componentItems.findIndex((item) => item.href.endsWith(slug));
  const previous =
    index === 0
      ? {
          href: "/components",
          title: "Components",
          description: "Component catalog",
        }
      : componentItems[index - 1];
  const next = componentItems[index + 1];

  return (
    <DocsLayout
      currentPath={currentPath}
      section="components"
      eyebrow={`${detail.category} component`}
      title={detail.title}
      description={detail.description}
      outline={[
        { id: "preview", title: "Preview" },
        { id: "when-to-use", title: "When to use" },
        { id: "anatomy", title: "Anatomy" },
        { id: "guidelines", title: "Guidelines" },
        { id: "api", title: "API reference" },
      ]}
      previous={previous}
      next={next}
    >
      <section className="scroll-mt-24" id="preview">
        <ComponentSpecimen type={slug} />
      </section>
      <section
        className="scroll-mt-24 grid gap-4 md:grid-cols-[10rem_1fr]"
        id="when-to-use"
      >
        <div>
          <Badge variant="secondary">When to use</Badge>
        </div>
        <p className="leading-7 text-muted-foreground">{detail.usage}</p>
      </section>
      <section className="scroll-mt-24 flex flex-col gap-5" id="anatomy">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">Anatomy</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {detail.anatomy.map((item, index) => (
            <div className="rounded-xl border bg-card p-5" key={item}>
              <span className="font-mono text-xs text-primary">
                0{index + 1}
              </span>
              <p className="mt-8 text-sm font-medium leading-6">{item}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="scroll-mt-24 flex flex-col gap-5" id="guidelines">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Guidelines
        </h2>
        <GuidanceColumns detail={detail} />
      </section>
      <section className="scroll-mt-24 flex flex-col gap-5" id="api">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">
            API reference
          </h2>
          <p className="text-sm text-muted-foreground">
            Comfort uses the shadcn component contract directly and layers
            semantic styling on top.
          </p>
        </div>
        <Card>
          <CardContent className="px-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Default</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {detail.properties.map(([property, type, defaultValue]) => (
                  <TableRow key={property}>
                    <TableCell className="font-mono text-xs">
                      {property}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {type}
                    </TableCell>
                    <TableCell className="font-mono text-xs">
                      {defaultValue}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Accordion type="single" collapsible>
          <AccordionItem value="implementation">
            <AccordionTrigger>Implementation note</AccordionTrigger>
            <AccordionContent className="leading-6 text-muted-foreground">
              Compose the generated shadcn primitive from{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                src/components/ui
              </code>
              . Keep product-specific behavior in the consuming feature, and
              extend variants only when a repeated semantic need is proven.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </DocsLayout>
  );
}

export type { ComponentKey };
