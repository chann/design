import { SiteFooter, SiteHeader } from "@/components/site-shell";

type LegalKind = "privacy" | "terms";

const legalContent = {
  privacy: {
    eyebrow: "Privacy",
    title: "A static reference with minimal data handling.",
    description:
      "Comfort does not need an account, form submission, or analytics profile to show the design system.",
    sections: [
      {
        title: "What this site stores",
        paragraphs: [
          "The theme menu can store a light or dark preference in your browser. Removing site data clears that preference.",
          "This repository does not include accounts, forms, analytics, advertising, or tracking pixels.",
        ],
      },
      {
        title: "Hosting and external destinations",
        paragraphs: [
          "The hosting provider may process standard request information needed to deliver static files.",
          "Links to GitHub and other external destinations leave Comfort. Their own privacy practices apply after you follow those links.",
        ],
      },
      {
        title: "Questions",
        paragraphs: [
          "If the repository behavior changes, this page should change with it. Open a GitHub issue when the implementation and this notice do not match.",
        ],
      },
    ],
  },
  terms: {
    eyebrow: "Terms",
    title: "Use the reference with product judgment.",
    description:
      "Comfort documents a design approach and working examples. It does not replace review for your product, users, or operating context.",
    sections: [
      {
        title: "Reference purpose",
        paragraphs: [
          "The site and DESIGN.md files provide principles, tokens, patterns, and implementation examples. Validate them against your own requirements before adoption.",
          "Nothing on this site creates a commitment for support, uptime, compatibility, or a particular product outcome.",
        ],
      },
      {
        title: "Source and asset notices",
        paragraphs: [
          "Third party assets keep their included license notices. Review the repository and applicable notices before reusing source or assets.",
        ],
      },
      {
        title: "Changes",
        paragraphs: [
          "The contract and reference can change as the system is reviewed. Git history is the durable record of those changes.",
        ],
      },
    ],
  },
} as const;

export function LegalPage({
  currentPath,
  kind,
}: {
  currentPath: string;
  kind: LegalKind;
}) {
  const content = legalContent[kind];

  return (
    <>
      <SiteHeader currentPath={currentPath} />
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
              Reviewed August 3, 2026
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
              Open a GitHub issue
            </a>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
