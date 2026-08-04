import { ArrowRightIcon, CheckIcon, FileCode2Icon } from "lucide-react";

import { ComponentPreview } from "@/components/specimens/component-preview";
import { CheckList, DocsLayout } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { componentCatalog, getComponent } from "@/data/catalog";
import { componentItems, localizedRoute, siteHref } from "@/data/site";
import { docsContents, localizedComponent } from "@/content/docs";
import type { HomeLocale } from "@/content/home";

function componentName(title: string) {
  return title.replace(/\s+/g, "");
}

function createSnippet(title: string, module: string, comment: string) {
  const name = componentName(title);
  const modulePath = module.replace(/\.tsx$/, "");
  return `import { ${name} } from "@/components/ui/${modulePath}"

export function ${name}Example() {
  return (
    <${name}>
      {/* ${comment} */}
    </${name}>
  )
}`;
}

export function ComponentDetailPage({
  currentPath,
  locale,
  slug,
}: {
  currentPath: string;
  locale: HomeLocale;
  slug: string;
}) {
  const baseComponent = getComponent(slug);
  if (!baseComponent) return null;
  const component = localizedComponent(baseComponent, locale);
  const content = docsContents[locale].componentDetail;
  const family = docsContents[locale].families[component.family];
  const localizedComponents = componentCatalog.map((record) =>
    localizedComponent(record, locale),
  );

  const index = componentItems.findIndex((item) => item.href.endsWith(slug));
  const previous =
    index === 0
      ? {
          href: "/components",
          title: docsContents[locale].shell.sections.components,
          description: docsContents[locale].components.title,
        }
      : {
          ...componentItems[index - 1],
          description: localizedComponents[index - 1].description,
        };
  const next = componentItems[index + 1]
    ? {
        ...componentItems[index + 1],
        description: localizedComponents[index + 1].description,
      }
    : undefined;
  const related = localizedComponents
    .filter(
      (candidate) =>
        candidate.family === component.family &&
        candidate.slug !== component.slug,
    )
    .slice(0, 4);
  const snippet = createSnippet(
    component.title,
    component.module,
    content.snippetComment,
  );

  return (
    <DocsLayout
      currentPath={currentPath}
      locale={locale}
      section="components"
      eyebrow={content.componentEyebrow(family)}
      title={component.title}
      description={component.description}
      outline={[
        { id: "preview", title: content.preview },
        { id: "usage", title: content.usage },
        { id: "anatomy", title: content.anatomy },
        { id: "variants", title: content.variants },
        { id: "states", title: content.states },
        { id: "accessibility", title: content.accessibility },
        { id: "internationalization", title: content.internationalization },
        { id: "implementation", title: content.implementation },
        { id: "related", title: content.related },
      ]}
      previous={previous}
      next={next}
    >
      <section className="scroll-mt-24" id="preview">
        <ComponentPreview code={snippet} locale={locale} record={component} />
      </section>

      <section className="scroll-mt-24 flex flex-col gap-4" id="usage">
        <p className="eyebrow">{content.usageEyebrow}</p>
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          {content.usageTitle}
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
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">
          {content.anatomy}
        </h2>
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
          <p className="eyebrow">{content.variantsEyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
            {content.variantsTitle}
          </h2>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            [content.variantDefault, content.variantDefaultDescription],
            [family, content.variantFamilyDescription(family)],
            ["Comfort", content.variantComfortDescription],
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
          <p className="eyebrow">{content.statesEyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
            {content.statesTitle}
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
                {docsContents[locale].states[state]}
              </strong>
            </div>
          ))}
        </div>
      </section>

      <section className="scroll-mt-24 flex flex-col gap-5" id="accessibility">
        <div>
          <p className="eyebrow">{content.accessibilityEyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
            {content.accessibilityTitle}
          </h2>
        </div>
        <CheckList items={component.accessibility} />
      </section>

      <section
        className="scroll-mt-24 flex flex-col gap-5"
        id="internationalization"
      >
        <div>
          <p className="eyebrow">{content.i18nEyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
            {content.internationalization}
          </h2>
        </div>
        <CheckList items={[...content.i18nItems]} />
      </section>

      <section className="scroll-mt-24 flex flex-col gap-5" id="implementation">
        <div>
          <p className="eyebrow">{content.implementationEyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
            {content.implementationTitle}
          </h2>
        </div>
        <Card>
          <CardContent className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <FileCode2Icon className="size-5" />
              </span>
              <div>
                <strong className="text-sm">{content.verifiedModule}</strong>
                <code className="mt-1 block font-mono text-xs text-muted-foreground break-all">
                  src/components/ui/{component.module}
                </code>
              </div>
            </div>
            <Badge variant="outline">{content.sourceAvailable}</Badge>
          </CardContent>
        </Card>
        <p className="text-sm leading-6 text-muted-foreground">
          {content.implementationDescription}
        </p>
      </section>

      <section className="scroll-mt-24 flex flex-col gap-5" id="related">
        <div>
          <p className="eyebrow">{content.relatedEyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
            {content.relatedTitle}
          </h2>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {related.map((item) => (
            <a
              className="group flex items-center justify-between rounded-xl border bg-card p-4 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              href={siteHref(
                localizedRoute(`/components/${item.slug}`, locale),
              )}
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
