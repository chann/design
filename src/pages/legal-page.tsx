import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { docsContents } from "@/content/docs";
import { homeContents, type HomeLocale } from "@/content/home";

type LegalKind = "privacy" | "terms";

export function LegalPage({
  currentPath,
  kind,
  locale,
}: {
  currentPath: string;
  kind: LegalKind;
  locale: HomeLocale;
}) {
  const docs = docsContents[locale];
  const content = docs.legal[kind];
  const homeContent = homeContents[locale];

  return (
    <>
      <SiteHeader currentPath={currentPath} homeContent={homeContent} />
      <main id="main-content">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <header className="flex max-w-xl flex-col gap-6">
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 className="text-balance text-4xl font-semibold sm:text-5xl">
              {content.title}
            </h1>
            <p className="text-pretty text-lg text-muted-foreground">
              {content.description}
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              {docs.legal.reviewed}
            </p>
          </header>
          <article className="flex flex-col gap-12">
            {content.sections.map((section) => (
              <section
                className="flex max-w-2xl flex-col gap-4"
                key={section.title}
              >
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    className="text-pretty text-base text-muted-foreground"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
            <a
              className="landing-text-link w-fit text-base font-semibold text-primary"
              href="https://github.com/chann/design/issues"
            >
              {docs.legal.issue}
            </a>
          </article>
        </div>
      </main>
      <SiteFooter homeContent={homeContent} />
    </>
  );
}
