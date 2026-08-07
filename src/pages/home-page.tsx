import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRightIcon } from "lucide-react";

import { HeroLetterGlitch } from "@/components/hero-letter-glitch";
import {
  PhosphorIcon,
  type PhosphorIconName,
} from "@/components/phosphor-icon";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import {
  homeContents,
  homePathForLocale,
  type HomeContent,
} from "@/content/home";
import { cn } from "@/lib/utils";
import { calculateWordOpacity } from "@/lib/scroll-scrub";
import { designEditions, siteHref } from "@/data/site";
import { localizedRoute } from "@/data/site";
import { designDocumentForLocale } from "@/content/docs";
import { useScrollScrubProgress } from "@/hooks/use-scroll-scrub-progress";

const benefitIcons: readonly PhosphorIconName[] = [
  "brackets-curly",
  "circles-three-plus",
  "check-circle",
  "stack",
];

function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

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
      className="tagline-copy max-w-[680px] text-balance text-4xl font-semibold sm:text-5xl lg:text-6xl"
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
        <section className="landing-hero mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(28rem,0.95fr)] lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="flex flex-col gap-8">
            <div className="landing-enter flex flex-col gap-6">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <h1
                aria-label={content.hero.accessibleTitle}
                className="hero-heading max-w-[680px] text-balance text-4xl font-semibold sm:text-6xl lg:text-7xl"
              >
                {content.hero.titleLines.map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </h1>
              <p className="max-w-[680px] text-pretty text-lg text-muted-foreground">
                {content.hero.description}
              </p>
            </div>
            <div className="landing-enter landing-enter-late flex flex-col items-start gap-4">
              <Button
                asChild
                className="h-auto px-3 py-2 text-base font-semibold duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <a href={siteHref(designDocumentForLocale[content.locale])}>
                  {content.hero.primaryAction}
                  <ArrowRightIcon aria-hidden="true" data-icon="inline-end" />
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

        <section
          aria-label={content.proof.accessibleLabel}
          className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8"
        >
          <div className="proof-strip grid gap-6 rounded-2xl bg-secondary px-6 py-6 sm:grid-cols-3 lg:px-8">
            {content.proof.items.map((item) => (
              <div className="flex items-baseline gap-3" key={item.label}>
                <strong className="font-mono text-3xl font-semibold text-primary">
                  {item.value}
                </strong>
                <span className="text-sm text-muted-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <TaglineReveal {...content.tagline} />
        </section>

        <section className="bg-secondary" id="benefits">
          <Reveal className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-24 sm:px-6 lg:px-8">
            <header className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div className="flex flex-col gap-4">
                <p className="eyebrow">{content.benefits.eyebrow}</p>
                <h2 className="max-w-[680px] text-balance text-4xl font-semibold sm:text-5xl">
                  {content.benefits.title}
                </h2>
              </div>
              <p className="max-w-2xl text-pretty text-lg text-muted-foreground lg:justify-self-end">
                {content.benefits.description}
              </p>
            </header>

            <div className="benefit-grid">
              {content.benefits.items.map(({ title, description }, index) => (
                <article
                  className={cn(
                    "benefit-item",
                    index === 0 && "benefit-item-featured",
                  )}
                  key={title}
                >
                  <span className="benefit-icon" aria-hidden="true">
                    <PhosphorIcon name={benefitIcons[index]} />
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="max-w-xl text-pretty text-base text-muted-foreground">
                      {description}
                    </p>
                  </div>
                  {index === 0 && (
                    <div className="benefit-token-map" aria-hidden="true">
                      <span>{content.benefits.tokenFlow[0]}</span>
                      <ArrowRightIcon />
                      <span>{content.benefits.tokenFlow[1]}</span>
                      <ArrowRightIcon />
                      <strong>{content.benefits.tokenFlow[2]}</strong>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <header className="flex max-w-xl flex-col gap-4">
              <p className="eyebrow">{content.workflow.eyebrow}</p>
              <h2 className="text-balance text-4xl font-semibold sm:text-5xl">
                {content.workflow.title}
              </h2>
              <p className="text-pretty text-base text-muted-foreground">
                {content.workflow.description}
              </p>
            </header>
            <ol className="step-list">
              {content.workflow.steps.map((step) => (
                <li className="step-item" key={step.number}>
                  <span className="font-mono text-sm text-primary">
                    {step.number}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="max-w-xl text-pretty text-base text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        <section className="bg-card">
          <Reveal className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className="flex max-w-xl flex-col gap-6">
              <p className="eyebrow">{content.productProof.eyebrow}</p>
              <h2 className="text-balance text-4xl font-semibold sm:text-5xl">
                {content.productProof.title}
              </h2>
              <p className="text-pretty text-lg text-muted-foreground">
                {content.productProof.description}
              </p>
              <a
                className="landing-text-link w-fit text-base font-semibold text-primary"
                href={siteHref(localizedRoute("/components", content.locale))}
              >
                {content.productProof.action}
                <ArrowRightIcon aria-hidden="true" className="size-5" />
              </a>
            </div>
            <div className="implementation-proof">
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2 text-sm font-semibold">
                  <PhosphorIcon
                    aria-hidden="true"
                    className="size-5 text-primary"
                    name="globe"
                  />
                  {content.productProof.panelTitle}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {content.productProof.reviewed}
                </span>
              </div>
              <div className="implementation-proof-grid">
                {content.productProof.metrics.map(({ value, label }) => (
                  <div key={label}>
                    <strong className="font-mono text-3xl font-semibold">
                      {value}
                    </strong>
                    <span className="text-sm text-muted-foreground">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <PhosphorIcon
                  aria-hidden="true"
                  className="size-5 text-primary"
                  name="check-circle"
                />
                {content.productProof.verification}
              </p>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col gap-12">
            <header className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div className="flex flex-col gap-4">
                <p className="eyebrow">{content.faq.eyebrow}</p>
                <h2 className="max-w-[680px] text-balance text-4xl font-semibold sm:text-5xl">
                  {content.faq.title}
                </h2>
              </div>
              <p className="max-w-xl text-pretty text-base text-muted-foreground lg:justify-self-end">
                {content.faq.description}
              </p>
            </header>
            <div className="faq-grid">
              {content.faq.items.map((item) => (
                <article className="faq-item" key={item.question}>
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <p className="text-pretty text-base text-muted-foreground">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <Reveal className="final-cta">
            <div className="flex max-w-3xl flex-col gap-6">
              <p className="text-sm font-semibold text-primary-foreground/70">
                {content.cta.eyebrow}
              </p>
              <h2 className="text-balance text-4xl font-semibold sm:text-5xl">
                {content.cta.title}
              </h2>
              <p className="max-w-2xl text-pretty text-lg text-primary-foreground/80">
                {content.cta.description}
              </p>
            </div>
            <Button
              asChild
              variant="secondary"
              className="h-auto shrink-0 px-3 py-2 text-base font-semibold duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <a href={siteHref(designDocumentForLocale[content.locale])}>
                {content.cta.action}
                <ArrowRightIcon aria-hidden="true" data-icon="inline-end" />
              </a>
            </Button>
          </Reveal>
        </section>
      </main>
      <SiteFooter homeContent={content} />
    </>
  );
}
