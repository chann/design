import { useEffect, useRef, useState, type ReactNode } from "react";

import { HeroLetterGlitch } from "@/components/hero-letter-glitch";
import {
  PhosphorIcon,
  type PhosphorIconName,
} from "@/components/phosphor-icon";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { designEditions, siteHref } from "@/data/site";

const proofPoints = [
  { value: "4", label: "language editions" },
  { value: "6", label: "semantic foundations" },
  { value: "12", label: "component references" },
];

const benefits: Array<{
  title: string;
  description: string;
  icon: PhosphorIconName;
}> = [
  {
    title: "Decide with less debate",
    description:
      "Semantic roles settle color, type, space, motion, and hierarchy before implementation begins.",
    icon: "brackets-curly",
  },
  {
    title: "Keep every contributor aligned",
    description:
      "Designers, engineers, and coding agents work from the same source instead of translating scattered guidance.",
    icon: "circles-three-plus",
  },
  {
    title: "Design the whole journey",
    description:
      "Loading, empty, error, focus, and recovery states stay in DESIGN.md, not release week cleanup.",
    icon: "check-circle",
  },
  {
    title: "Grow without losing the rules",
    description:
      "Stable tokens let new patterns fit the system without making familiar interactions unpredictable.",
    icon: "stack",
  },
];

const steps = [
  {
    number: "01",
    title: "Share one source",
    description:
      "Give your team or coding agent DESIGN.md before interface work starts.",
  },
  {
    number: "02",
    title: "Map roles once",
    description:
      "Connect semantic colors, spacing, type, radius, and motion to the product stack.",
  },
  {
    number: "03",
    title: "Verify every state",
    description:
      "Check responsive behavior, accessibility, feedback, and recovery before release.",
  },
];

const faqs = [
  {
    question: "What is DESIGN.md?",
    answer:
      "DESIGN.md is Comfort’s shared specification for principles, semantic foundations, component behavior, states, and verification rules.",
  },
  {
    question: "Does it replace our brand?",
    answer:
      "No. Keep your product voice and identity. Comfort provides the interaction and system rules that help those choices remain coherent.",
  },
  {
    question: "Can coding agents use it?",
    answer:
      "Yes. Give an agent DESIGN.md before UI work so the same tokens, behavior, responsive rules, and acceptance checks guide implementation.",
  },
  {
    question: "Does it require React or shadcn?",
    answer:
      "No. The reference site uses React and shadcn, but DESIGN.md describes semantic roles and behavior that can map to another web stack.",
  },
  {
    question: "How does it handle accessibility?",
    answer:
      "Accessibility is part of DESIGN.md, including contrast, focus, keyboard use, reduced motion, semantics, and recovery from errors.",
  },
  {
    question: "What do I need to install?",
    answer:
      "Nothing. Open DESIGN.md in the browser, then map only the roles your product needs.",
  },
  {
    question: "Which language edition is authoritative?",
    answer:
      "Korean DESIGN.md is the default source of truth. English, Japanese, and Simplified Chinese editions preserve the same token structure and guidance.",
  },
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

function TaglineReveal() {
  const words = [
    "One",
    "DESIGN.md",
    "turns",
    "scattered",
    "decisions",
    "into",
    "a",
    "system",
    "your",
    "whole",
    "team",
    "can",
    "predict.",
  ];
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.unobserve(container);
      },
      { rootMargin: "0px 0px -30%", threshold: 0.15 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <h2
      aria-label="One DESIGN.md turns scattered decisions into a system your whole team can predict."
      className={cn(
        "tagline-copy max-w-[680px] text-balance text-4xl font-semibold sm:text-5xl lg:text-6xl",
        visible && "is-visible",
      )}
      ref={containerRef}
    >
      {words.map((word) => (
        <span aria-hidden="true" className="tagline-word" key={word}>
          {word}
          {"\u00a0"}
        </span>
      ))}
    </h2>
  );
}

export function HomePage({ currentPath }: { currentPath: string }) {
  useEffect(() => {
    document.getElementById("comfort-faq-schema")?.remove();
    const schema = document.createElement("script");
    schema.id = "comfort-faq-schema";
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    });
    document.head.append(schema);
    return () => schema.remove();
  }, []);

  return (
    <>
      <SiteHeader currentPath={currentPath} />
      <main id="main-content">
        <section className="landing-hero mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(28rem,0.95fr)] lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="flex flex-col gap-8">
            <div className="landing-enter flex flex-col gap-6">
              <p className="eyebrow">DESIGN.md for product teams</p>
              <h1
                aria-label="Ship interfaces people trust, from one clear DESIGN.md."
                className="hero-heading max-w-[680px] text-balance text-4xl font-semibold sm:text-6xl lg:text-7xl"
              >
                <span className="block">Ship interfaces</span>
                <span className="block">people trust,</span>
                <span className="block">from one clear</span>
                <span className="block">DESIGN.md.</span>
              </h1>
              <p className="max-w-[680px] text-pretty text-lg text-muted-foreground">
                Comfort gives designers, engineers, and coding agents the same
                semantic rules for clear decisions, complete states, and
                predictable interactions.
              </p>
            </div>
            <div className="landing-enter landing-enter-late flex flex-col items-start gap-4">
              <Button
                asChild
                className="h-auto px-3 py-2 text-base font-semibold duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <a href={siteHref("/DESIGN.md")}>
                  Read DESIGN.md
                  <PhosphorIcon
                    aria-hidden="true"
                    data-icon="inline-end"
                    name="arrow-right"
                  />
                </a>
              </Button>
              <nav
                aria-label="DESIGN.md language editions"
                className="flex flex-wrap gap-x-5 gap-y-2 text-sm"
              >
                {designEditions.map((edition) => (
                  <a
                    className="landing-text-link text-muted-foreground"
                    href={siteHref(edition.href)}
                    hrefLang={edition.languageTag}
                    key={edition.code}
                    lang={edition.languageTag}
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
          aria-label="Comfort in numbers"
          className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8"
        >
          <div className="proof-strip grid gap-6 rounded-2xl bg-secondary px-6 py-6 sm:grid-cols-3 lg:px-8">
            {proofPoints.map((item) => (
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
          <TaglineReveal />
        </section>

        <section className="bg-secondary" id="benefits">
          <Reveal className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-24 sm:px-6 lg:px-8">
            <header className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div className="flex flex-col gap-4">
                <p className="eyebrow">Why one DESIGN.md works</p>
                <h2 className="max-w-[680px] text-balance text-4xl font-semibold sm:text-5xl">
                  Replace scattered taste with shared decisions.
                </h2>
              </div>
              <p className="max-w-2xl text-pretty text-lg text-muted-foreground lg:justify-self-end">
                A good system removes uncertainty before it adds polish. Comfort
                makes the reasons, rules, states, and checks visible in one
                place.
              </p>
            </header>

            <div className="benefit-grid">
              {benefits.map(({ title, description, icon }, index) => (
                <article
                  className={cn(
                    "benefit-item",
                    index === 0 && "benefit-item-featured",
                  )}
                  key={title}
                >
                  <span className="benefit-icon" aria-hidden="true">
                    <PhosphorIcon name={icon} />
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="max-w-xl text-pretty text-base text-muted-foreground">
                      {description}
                    </p>
                  </div>
                  {index === 0 && (
                    <div className="benefit-token-map" aria-hidden="true">
                      <span>intent</span>
                      <PhosphorIcon name="flow-arrow" />
                      <span>role</span>
                      <PhosphorIcon name="flow-arrow" />
                      <strong>interface</strong>
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
              <p className="eyebrow">How it works</p>
              <h2 className="text-balance text-4xl font-semibold sm:text-5xl">
                From DESIGN.md to release in three clear steps.
              </h2>
              <p className="text-pretty text-base text-muted-foreground">
                Start with the source, connect it to your stack, then prove the
                behavior people will actually experience.
              </p>
            </header>
            <ol className="step-list">
              {steps.map((step) => (
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
              <p className="eyebrow">Proof in the product</p>
              <h2 className="text-balance text-4xl font-semibold sm:text-5xl">
                The reference runs on the rules it documents.
              </h2>
              <p className="text-pretty text-lg text-muted-foreground">
                This site turns DESIGN.md into responsive foundations,
                interactive component specimens, complete states, and production
                checks. The reference and the source stay close enough to audit.
              </p>
              <a
                className="landing-text-link w-fit text-base font-semibold text-primary"
                href={siteHref("/components")}
              >
                Inspect the component references
                <PhosphorIcon
                  aria-hidden="true"
                  className="size-5"
                  name="arrow-right"
                />
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
                  Live reference
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  August 2026
                </span>
              </div>
              <div className="implementation-proof-grid">
                {[
                  ["24", "static routes"],
                  ["24", "navigation targets"],
                  ["12", "interactive references"],
                  ["4", "aligned specifications"],
                ].map(([value, label]) => (
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
                Route, type, lint, and production build checks are part of the
                repository.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col gap-12">
            <header className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div className="flex flex-col gap-4">
                <p className="eyebrow">Questions before you start</p>
                <h2 className="max-w-[680px] text-balance text-4xl font-semibold sm:text-5xl">
                  Know what DESIGN.md changes, and what it leaves yours.
                </h2>
              </div>
              <p className="max-w-xl text-pretty text-base text-muted-foreground lg:justify-self-end">
                Comfort gives teams shared behavior and verification rules. Your
                product still owns its purpose, content, and identity.
              </p>
            </header>
            <div className="faq-grid">
              {faqs.map((item) => (
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
                One source for the next interface decision
              </p>
              <h2 className="text-balance text-4xl font-semibold sm:text-5xl">
                Give every contributor the same clear starting point.
              </h2>
              <p className="max-w-2xl text-pretty text-lg text-primary-foreground/80">
                Open DESIGN.md in the browser. No account, setup, or package
                install stands between your team and the source.
              </p>
            </div>
            <Button
              asChild
              variant="secondary"
              className="h-auto shrink-0 px-3 py-2 text-base font-semibold duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <a href={siteHref("/DESIGN.md")}>
                Read DESIGN.md
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
      <SiteFooter />
    </>
  );
}
