import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";

import { HeroLetterGlitch } from "@/components/hero-letter-glitch";
import { PhosphorIcon } from "@/components/phosphor-icon";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { designDocumentForLocale } from "@/content/docs";
import {
  homeContents,
  homePathForLocale,
  type HomeContent,
} from "@/content/home";
import { designEditions, siteHref } from "@/data/site";
import { useScrollScrubProgress } from "@/hooks/use-scroll-scrub-progress";
import { cn } from "@/lib/utils";
import { calculateWordOpacity } from "@/lib/scroll-scrub";

function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.unobserve(element);
      },
      { rootMargin: "0px 0px -12%", threshold: 0.08 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn("landing-reveal", visible && "is-visible", className)}
      ref={elementRef}
    >
      {children}
    </div>
  );
}

function TaglineReveal({ accessibleLabel, segments }: HomeContent["tagline"]) {
  const { elementRef, progress } = useScrollScrubProgress<HTMLHeadingElement>();

  return (
    <h2
      aria-label={accessibleLabel}
      className="tagline-copy"
      data-scroll-progress={progress.toFixed(4)}
      data-scroll-tagline
      ref={elementRef}
    >
      {segments.map((segment, index) => (
        <span
          aria-hidden="true"
          className="tagline-word"
          key={`${segment}-${index}`}
          style={{
            opacity: calculateWordOpacity(progress, index, segments.length),
          }}
        >
          {segment}
          {"\u00a0"}
        </span>
      ))}
    </h2>
  );
}

export function HomePage({
  currentPath,
  content,
}: {
  currentPath: string;
  content: HomeContent;
}) {
  useEffect(() => {
    document.getElementById("comfort-faq-schema")?.remove();
    const schema = document.createElement("script");
    schema.id = "comfort-faq-schema";
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faq.items.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    });
    document.head.append(schema);
    return () => schema.remove();
  }, [content.faq.items]);

  return (
    <>
      <SiteHeader currentPath={currentPath} homeContent={content} />
      <main id="main-content">
        <section className="landing-hero landing-section mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(28rem,0.95fr)] lg:items-center lg:gap-16 lg:px-8">
          <div className="flex min-w-0 flex-col gap-8">
            <div className="landing-enter flex flex-col gap-6">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <h1
                aria-label={content.hero.accessibleTitle}
                className="hero-heading"
              >
                {content.hero.titleLines.map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </h1>
              <p className="landing-lead text-muted-foreground">
                {content.hero.description}
              </p>
            </div>
            <div className="landing-enter landing-enter-late flex flex-col items-start gap-4">
              <Button asChild size="lg">
                <a href={siteHref(designDocumentForLocale[content.locale])}>
                  {content.hero.primaryAction}
                  <PhosphorIcon
                    aria-hidden="true"
                    data-icon="inline-end"
                    name="arrow-right"
                  />
                </a>
              </Button>
              <nav
                aria-label={content.hero.languageNavigationLabel}
                className="flex flex-wrap gap-x-5 gap-y-2 text-sm"
              >
                {designEditions.map((edition) => (
                  <a
                    aria-current={
                      edition.code === content.locale ? "page" : undefined
                    }
                    className="landing-text-link text-muted-foreground"
                    href={siteHref(homePathForLocale(edition.code))}
                    hrefLang={homeContents[edition.code].languageTag}
                    key={edition.code}
                    lang={homeContents[edition.code].languageTag}
                  >
                    {edition.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <HeroLetterGlitch />
        </section>

        <section className="landing-tagline landing-section mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TaglineReveal {...content.tagline} />
        </section>

        <section
          className="landing-principles landing-section mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          id="principles"
        >
          <Reveal className="landing-split">
            <div className="landing-section-header">
              <p>{content.principles.description}</p>
            </div>
            <div className="principles-list">
              {content.principles.items.map((item, index) => (
                <Fragment key={item.title}>
                  <article>
                    <span aria-hidden="true" className="section-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </article>
                  {index < content.principles.items.length - 1 && <Separator />}
                </Fragment>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="landing-section mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="landing-workflow landing-split">
            <header className="landing-section-header">
              <p className="eyebrow">{content.workflow.eyebrow}</p>
              <h2>{content.workflow.title}</h2>
              <p>{content.workflow.description}</p>
            </header>
            <ol className="workflow-list">
              {content.workflow.steps.map((step, index) => (
                <li key={step.number}>
                  <div className="workflow-list-row">
                    <span className="section-index">{step.number}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                  {index < content.workflow.steps.length - 1 && <Separator />}
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        <section className="landing-section mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="landing-split">
            <header className="landing-section-header">
              <p className="eyebrow">{content.faq.eyebrow}</p>
              <h2>{content.faq.title}</h2>
              <p>{content.faq.description}</p>
            </header>
            <Accordion className="faq-accordion" collapsible type="single">
              {content.faq.items.map(({ question, answer }, index) => (
                <AccordionItem key={question} value={`faq-${index + 1}`}>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>
                    <p>{answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </section>

        <section className="landing-section-tight mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <Reveal className="final-cta landing-cta-surface">
            <div className="landing-section-header">
              <p className="eyebrow">{content.cta.eyebrow}</p>
              <h2>{content.cta.title}</h2>
              <p>{content.cta.description}</p>
            </div>
            <Button asChild size="lg">
              <a href={siteHref(designDocumentForLocale[content.locale])}>
                {content.cta.action}
                <PhosphorIcon
                  aria-hidden="true"
                  data-icon="inline-end"
                  name="arrow-right"
                />
              </a>
            </Button>
          </Reveal>
        </section>
      </main>
      <SiteFooter homeContent={content} />
    </>
  );
}
