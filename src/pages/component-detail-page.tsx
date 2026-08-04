import { ArrowRightIcon, CheckIcon, FileCode2Icon } from "lucide-react";

import { ComponentPreview } from "@/components/specimens/component-preview";
import { CheckList, DocsLayout } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { componentCatalog, getComponent } from "@/data/catalog";
import { componentItems, siteHref } from "@/data/site";

function familyLabel(family: string) {
  return family
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function componentName(title: string) {
  return title.replace(/\s+/g, "");
}

function createSnippet(title: string, module: string) {
  const name = componentName(title);
  const modulePath = module.replace(/\.tsx$/, "");
  return `import { ${name} } from "@/components/ui/${modulePath}"

export function ${name}Example() {
  return (
    <${name}>
      {/* Compose content with the documented anatomy and states. */}
    </${name}>
  )
}`;
}

export function ComponentDetailPage({
  currentPath,
  slug,
}: {
  currentPath: string;
  slug: string;
}) {
  const component = getComponent(slug);
  if (!component) return null;

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
  const related = componentCatalog
    .filter(
      (candidate) =>
        candidate.family === component.family &&
        candidate.slug !== component.slug,
    )
    .slice(0, 4);
  const snippet = createSnippet(component.title, component.module);

  return (
    <DocsLayout
      currentPath={currentPath}
      section="components"
      eyebrow={`${familyLabel(component.family)} component`}
      title={component.title}
      description={component.description}
      outline={[
        { id: "preview", title: "Preview and code" },
        { id: "usage", title: "Usage" },
        { id: "anatomy", title: "Anatomy" },
        { id: "variants", title: "Variants" },
        { id: "states", title: "States" },
        { id: "accessibility", title: "Accessibility" },
        { id: "internationalization", title: "Internationalization" },
        { id: "implementation", title: "Implementation" },
        { id: "related", title: "Related" },
      ]}
      previous={previous}
      next={next}
    >
      <section className="scroll-mt-24" id="preview">
        <ComponentPreview code={snippet} record={component} />
      </section>

      <section className="scroll-mt-24 flex flex-col gap-4" id="usage">
        <p className="eyebrow">When to use it</p>
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          Keep the task and result explicit
        </h2>
        <p className="max-w-2xl leading-7 text-muted-foreground">
          {component.usage}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {component.keywords.map((keyword) => (
            <Badge key={keyword} variant="secondary">
              {keyword}
            </Badge>
          ))}
        </div>
      </section>

      <section className="scroll-mt-24 flex flex-col gap-5" id="anatomy">
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">Anatomy</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {component.anatomy.map((part, partIndex) => (
            <Card size="sm" key={part}>
              <CardHeader>
                <span className="font-mono text-xs text-primary">
                  {String(partIndex + 1).padStart(2, "0")}
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium leading-6">{part}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="scroll-mt-24 flex flex-col gap-5" id="variants">
        <div>
          <p className="eyebrow">Composition</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
            Variants preserve one behavioral contract
          </h2>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            ["Default", "The clearest common path and semantic baseline."],
            [
              familyLabel(component.family),
              `Shared behavior for the ${familyLabel(component.family).toLowerCase()} family.`,
            ],
            [
              "Comfort",
              "Semantic tokens, restrained density, and complete feedback.",
            ],
          ].map(([title, description]) => (
            <Card key={title}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="scroll-mt-24 flex flex-col gap-5" id="states">
        <div>
          <p className="eyebrow">Interaction contract</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
            Required states
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {component.states.map((state) => (
            <div
              className="flex min-h-24 flex-col justify-between rounded-xl border bg-card p-4"
              key={state}
            >
              <CheckIcon className="size-4 text-primary" />
              <strong className="text-sm capitalize">
                {state.replace("-", " ")}
              </strong>
            </div>
          ))}
        </div>
      </section>

      <section className="scroll-mt-24 flex flex-col gap-5" id="accessibility">
        <div>
          <p className="eyebrow">Inclusive baseline</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
            Accessibility checks
          </h2>
        </div>
        <CheckList items={component.accessibility} />
      </section>

      <section
        className="scroll-mt-24 flex flex-col gap-5"
        id="internationalization"
      >
        <div>
          <p className="eyebrow">Four language editions</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
            Internationalization
          </h2>
        </div>
        <CheckList
          items={[
            "Allow at least 30% text expansion without clipping labels or controls.",
            "Use logical start and end positioning so RTL order can mirror safely.",
            "Keep component names and token identifiers stable while translating guidance.",
          ]}
        />
      </section>

      <section className="scroll-mt-24 flex flex-col gap-5" id="implementation">
        <div>
          <p className="eyebrow">Local source ownership</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
            Implementation contract
          </h2>
        </div>
        <Card>
          <CardContent className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <FileCode2Icon className="size-5" />
              </span>
              <div>
                <strong className="text-sm">Verified module</strong>
                <code className="mt-1 block font-mono text-xs text-muted-foreground break-all">
                  src/components/ui/{component.module}
                </code>
              </div>
            </div>
            <Badge variant="outline">Source available</Badge>
          </CardContent>
        </Card>
        <p className="text-sm leading-6 text-muted-foreground">
          This reference can be read without an account or setup. When the
          component is adopted in a product, keep feature-specific behavior in
          the consuming feature and preserve this shared interaction contract.
        </p>
      </section>

      <section className="scroll-mt-24 flex flex-col gap-5" id="related">
        <div>
          <p className="eyebrow">Same family</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
            Related destinations
          </h2>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {related.map((item) => (
            <a
              className="group flex items-center justify-between rounded-xl border bg-card p-4 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              href={siteHref(`/components/${item.slug}`)}
              key={item.slug}
            >
              {item.title}
              <ArrowRightIcon className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </section>
    </DocsLayout>
  );
}
