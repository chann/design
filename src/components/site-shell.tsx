import { useEffect, useState, type ReactNode } from "react";
import {
  BookOpenIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PanelLeftIcon,
} from "lucide-react";

import { FooterSignature } from "@/components/footer-signature";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import en from "@/content/home/en";
import {
  homeContents,
  type HomeContent,
  type HomeLocale,
} from "@/content/home";
import { designDocumentForLocale, docsContents } from "@/content/docs";
import {
  componentCatalog,
  componentFamilies,
  foundationCatalog,
} from "@/data/catalog";
import {
  designEditions,
  localizedRoute,
  parseSiteRoute,
  routeForLocale,
  primaryNav,
  siteHref,
  type NavItem,
} from "@/data/site";

type Theme = "light" | "dark" | "system";

function applyTheme(theme: Theme) {
  const dark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
}

function Brand({
  className,
  current = false,
  homeHref = "/",
  homeLabel = "Comfort DESIGN.md home",
}: {
  className?: string;
  current?: boolean;
  homeHref?: string;
  homeLabel?: string;
}) {
  return (
    <a
      className={cn(
        "flex shrink-0 items-center font-semibold tracking-[-0.02em]",
        className,
      )}
      href={siteHref(homeHref)}
      aria-label={homeLabel}
      aria-current={current ? "page" : undefined}
    >
      <span className="hidden sm:inline">Comfort DESIGN.md</span>
      <span className="sm:hidden">Comfort</span>
    </a>
  );
}

function documentationGroups(locale: HomeLocale) {
  const docs = docsContents[locale];
  return [
    {
      title: docs.shell.overviewGroup,
      items: [
        { href: "/principles", title: docs.shell.sections.principles },
        { href: "/foundations", title: docs.shell.sections.foundations },
        { href: "/components", title: docs.shell.sections.components },
      ],
    },
    {
      title: docs.shell.sections.foundations,
      items: foundationCatalog.map(({ slug, title }) => ({
        href: `/foundations/${slug}`,
        title,
      })),
    },
    ...componentFamilies.map((family) => ({
      title: `${docs.shell.familyGroup} / ${docs.families[family]}`,
      items: componentCatalog
        .filter((component) => component.family === family)
        .map(({ slug, title }) => ({
          href: `/components/${slug}`,
          title,
        })),
    })),
  ];
}

function footerGroups(content: HomeContent) {
  return [
    {
      kind: "system",
      title: content.footer.groups.system,
      links: [
        { href: content.path, title: content.footer.links.overview },
        {
          href: localizedRoute("/principles", content.locale),
          title: content.footer.links.principles,
        },
        {
          href: localizedRoute("/foundations", content.locale),
          title: content.footer.links.foundationCatalog,
        },
        {
          href: localizedRoute("/components", content.locale),
          title: content.footer.links.componentCatalog,
        },
      ],
    },
    {
      kind: "foundations",
      title: content.footer.groups.foundations,
      links: foundationCatalog.map(({ slug, title }) => ({
        href: localizedRoute(`/foundations/${slug}`, content.locale),
        title,
      })),
    },
    {
      kind: "resources",
      title: content.footer.groups.resources,
      links: [
        ...designEditions.map(({ href, label }) => ({
          href,
          title: `DESIGN.md · ${label}`,
        })),
        {
          href: "https://github.com/chann/design",
          title: content.footer.links.github,
        },
      ],
    },
    {
      kind: "legal",
      title: content.footer.groups.legal,
      links: [
        {
          href: localizedRoute("/privacy", content.locale),
          title: content.footer.links.privacy,
        },
        {
          href: localizedRoute("/terms", content.locale),
          title: content.footer.links.terms,
        },
      ],
    },
  ];
}

function primaryNavTitle(href: string, shell: HomeContent["shell"]) {
  if (href === "/principles") return shell.nav.principles;
  if (href === "/foundations") return shell.nav.foundations;
  return shell.nav.components;
}

function ThemeMenu({ content = en }: { content?: HomeContent }) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem("comfort-theme");
      return saved === "light" || saved === "dark" ? saved : "system";
    } catch {
      return "system";
    }
  });

  useEffect(() => {
    applyTheme(theme);
    try {
      if (theme === "system") localStorage.removeItem("comfort-theme");
      else localStorage.setItem("comfort-theme", theme);
    } catch {
      // The selected theme still applies for this visit when storage is blocked.
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => theme === "system" && applyTheme("system");
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [theme]);

  const labels = content.shell.themes;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          aria-label={`${content.shell.theme}: ${labels[theme]}`}
          className="gap-2"
        >
          <span className="text-muted-foreground">{content.shell.theme}</span>
          <span>{labels[theme]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{content.shell.appearance}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(value) => setTheme(value as Theme)}
        >
          <DropdownMenuRadioItem value="light">
            {labels.light}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">
            {labels.dark}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">
            {labels.system}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function LanguageMenu({
  currentPath,
  homeContent,
}: {
  currentPath: string;
  homeContent: HomeContent;
}) {
  const items = designEditions.map((edition) => ({
    ...edition,
    href: routeForLocale(currentPath, edition.code),
    languageTag: homeContents[edition.code].languageTag,
  }));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          aria-label={homeContent.shell.languageMenuLabel}
          className="gap-2"
        >
          <span className="text-muted-foreground">
            {homeContent.shell.language}
          </span>
          <span>{homeContent.locale.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-52">
        <DropdownMenuLabel>
          {homeContent.shell.languageMenuLabel}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {items.map((edition) => (
            <DropdownMenuItem asChild key={edition.code}>
              <a
                aria-current={
                  homeContent.locale === edition.code ? "page" : undefined
                }
                className="justify-between gap-4"
                href={siteHref(edition.href)}
                hrefLang={edition.languageTag}
                lang={edition.languageTag}
              >
                <span>{edition.label}</span>
                <span className="text-xs text-muted-foreground">
                  {edition.code.toUpperCase()}
                </span>
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MobileNavigation({
  currentPath,
  content = en,
}: {
  currentPath: string;
  content?: HomeContent;
}) {
  const { contentRoute } = parseSiteRoute(currentPath);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="mobile-menu-button md:hidden"
        >
          <span className="mobile-menu-icon" aria-hidden="true">
            <i />
            <i />
          </span>
          <span className="sr-only">{content.shell.openNavigation}</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="top"
        showCloseButton={false}
        className="mobile-menu-content inset-0 h-dvh w-full max-w-none border-0 p-0 shadow-none"
      >
        <SheetHeader className="flex-row items-center justify-between p-4">
          <Brand
            current={contentRoute === "/"}
            homeHref={content.path}
            homeLabel={content.shell.homeLabel}
          />
          <SheetTitle className="sr-only">
            {content.shell.mobileNavigationTitle}
          </SheetTitle>
          <SheetDescription className="sr-only">
            {content.shell.mobileNavigationDescription}
          </SheetDescription>
          <SheetClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="mobile-menu-button is-open"
            >
              <span className="mobile-menu-icon" aria-hidden="true">
                <i />
                <i />
              </span>
              <span className="sr-only">{content.shell.closeNavigation}</span>
            </Button>
          </SheetClose>
        </SheetHeader>
        <div className="flex min-h-0 flex-1 flex-col justify-between gap-8 overflow-y-auto px-4 pb-8 pt-12">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {primaryNav.map((item) => {
              const href = localizedRoute(item.href, content.locale);
              const current = contentRoute.startsWith(item.href);
              return (
                <SheetClose asChild key={item.href}>
                  <a
                    aria-current={current ? "page" : undefined}
                    className={cn("mobile-menu-link", current && "is-current")}
                    href={siteHref(href)}
                  >
                    {primaryNavTitle(item.href, content.shell)}
                  </a>
                </SheetClose>
              );
            })}
          </nav>
          <div className="mobile-menu-utilities flex flex-col gap-6">
            <LanguageMenu currentPath={currentPath} homeContent={content} />
            <ThemeMenu content={content} />
            <div className="flex flex-wrap gap-6 text-sm">
              <a href={siteHref(designDocumentForLocale[content.locale])}>
                DESIGN.md
              </a>
              <a href="https://github.com/chann/design">GitHub</a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function SiteHeader({
  currentPath,
  homeContent,
}: {
  currentPath: string;
  homeContent?: HomeContent;
}) {
  const content = homeContent ?? en;
  const { contentRoute } = parseSiteRoute(currentPath);

  return (
    <>
      <a className="skip-link" href="#main-content">
        {content.shell.skipToContent}
      </a>
      <header className="site-header pointer-events-none sticky top-0 z-40 h-24 pt-6">
        <div className="site-nav pointer-events-auto mx-auto flex w-[calc(100%-2rem)] items-center gap-2 rounded-full border bg-background/80 px-3 py-2 shadow-lg backdrop-blur-3xl md:w-max">
          <Brand
            className="px-2"
            current={contentRoute === "/"}
            homeHref={content.path}
            homeLabel={content.shell.homeLabel}
          />
          <nav
            className="ml-2 hidden items-center gap-1 md:flex"
            aria-label={content.shell.primaryNavigationLabel}
          >
            {primaryNav.map((item) => {
              const current = contentRoute.startsWith(item.href);
              return (
                <Button
                  asChild
                  variant={current ? "secondary" : "ghost"}
                  size="sm"
                  key={item.href}
                >
                  <a
                    aria-current={current ? "page" : undefined}
                    href={siteHref(localizedRoute(item.href, content.locale))}
                  >
                    {primaryNavTitle(item.href, content.shell)}
                  </a>
                </Button>
              );
            })}
          </nav>
          <div className="ml-auto flex items-center gap-1">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hidden lg:inline-flex"
            >
              <a
                href="https://github.com/chann/design"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Button>
            <div className="hidden md:block">
              <LanguageMenu currentPath={currentPath} homeContent={content} />
            </div>
            <div className="hidden lg:block">
              <ThemeMenu content={content} />
            </div>
            <MobileNavigation currentPath={currentPath} content={content} />
          </div>
        </div>
      </header>
    </>
  );
}

export function SiteFooter({
  homeContent,
}: {
  homeContent?: HomeContent;
} = {}) {
  const content = homeContent ?? en;
  const groups = footerGroups(content);

  return (
    <footer className="site-footer overflow-hidden border-t">
      <div className="mx-auto max-w-[96rem] px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="flex max-w-xl flex-col gap-3">
          <Brand homeHref={content.path} homeLabel={content.shell.homeLabel} />
          <p className="text-sm leading-6 text-muted-foreground">
            {content.footer.description}
          </p>
        </div>
        <nav
          aria-label={content.footer.navigationLabel}
          className="mt-12 grid gap-x-8 gap-y-10 text-sm sm:grid-cols-2 lg:grid-cols-12"
        >
          {groups.map((group) => (
            <section
              className={cn(
                group.kind === "system" && "lg:col-span-3",
                group.kind === "foundations" && "sm:col-span-2 lg:col-span-4",
                group.kind === "resources" && "lg:col-span-3",
                group.kind === "legal" && "lg:col-span-2",
              )}
              key={group.title}
            >
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                {group.title}
              </h2>
              <ul
                className={cn(
                  "flex flex-col gap-2.5",
                  group.kind === "foundations" &&
                    "sm:block sm:columns-2 sm:[&>li]:mb-2.5",
                )}
              >
                {group.links.map((link) => (
                  <li className="break-inside-avoid" key={link.href}>
                    <a
                      className="site-footer-link text-muted-foreground hover:text-foreground"
                      href={siteHref(link.href)}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </div>
      <FooterSignature accessibleLabel={content.footer.signatureLabel} />
    </footer>
  );
}

type OutlineItem = { id: string; title: string };

function DocsNavigationList({
  currentPath,
  locale,
  closeOnSelect = false,
}: {
  currentPath: string;
  locale: HomeLocale;
  closeOnSelect?: boolean;
}) {
  const docs = docsContents[locale];
  return (
    <div className="flex flex-col gap-7">
      {documentationGroups(locale).map((group) => (
        <div className="flex flex-col gap-2" key={group.title}>
          <p className="px-2.5 text-xs font-medium text-foreground">
            {group.title}
          </p>
          <nav
            className="flex flex-col gap-0.5"
            aria-label={`${group.title} · ${docs.shell.navigationLabel}`}
          >
            {group.items.map((item) => {
              const href = localizedRoute(item.href, locale);
              const link = (
                <a
                  aria-current={currentPath === href ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                    currentPath === href &&
                      "bg-accent font-medium text-accent-foreground",
                  )}
                  href={siteHref(href)}
                >
                  {item.title}
                </a>
              );

              return closeOnSelect ? (
                <SheetClose asChild key={item.href}>
                  {link}
                </SheetClose>
              ) : (
                <span className="contents" key={item.href}>
                  {link}
                </span>
              );
            })}
          </nav>
        </div>
      ))}
    </div>
  );
}

function DocsMobileNavigation({
  currentPath,
  locale,
}: {
  currentPath: string;
  locale: HomeLocale;
}) {
  const docs = docsContents[locale];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <PanelLeftIcon data-icon="inline-start" />
          {docs.shell.browse}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[min(24rem,90vw)] border-0 p-0">
        <SheetHeader className="border-b px-5 py-4">
          <SheetTitle>{docs.shell.title}</SheetTitle>
          <SheetDescription>{docs.shell.description}</SheetDescription>
        </SheetHeader>
        <ScrollArea className="min-h-0 flex-1 px-3 py-5">
          <DocsNavigationList
            currentPath={currentPath}
            locale={locale}
            closeOnSelect={true}
          />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

export function DocsLayout({
  currentPath,
  locale,
  section,
  eyebrow,
  title,
  description,
  outline,
  previous,
  next,
  children,
}: {
  currentPath: string;
  locale: HomeLocale;
  section: "principles" | "foundations" | "components";
  eyebrow: string;
  title: string;
  description: string;
  outline: OutlineItem[];
  previous?: NavItem;
  next?: NavItem;
  children: ReactNode;
}) {
  const docs = docsContents[locale];
  const homeContent = homeContents[locale];
  const sectionTitle = docs.shell.sections[section];
  const sectionPath = localizedRoute(`/${section}`, locale);
  const isSectionOverview = currentPath === sectionPath;
  const designDocument = designDocumentForLocale[locale];

  return (
    <>
      <SiteHeader currentPath={currentPath} homeContent={homeContent} />
      <div className="mx-auto grid max-w-[96rem] lg:grid-cols-[17rem_minmax(0,1fr)] xl:grid-cols-[17rem_minmax(0,1fr)_14rem]">
        <aside
          aria-label={docs.shell.navigationLabel}
          className="hidden lg:block"
        >
          <div className="sticky top-24 h-[calc(100dvh-6rem)] py-8">
            <ScrollArea className="h-full px-4">
              <DocsNavigationList currentPath={currentPath} locale={locale} />
            </ScrollArea>
          </div>
        </aside>

        <main
          id="main-content"
          className="min-w-0 px-4 py-10 sm:px-8 sm:py-12 lg:px-10 xl:px-12"
        >
          <div className="mx-auto flex max-w-3xl flex-col gap-14">
            <div className="lg:hidden">
              <DocsMobileNavigation currentPath={currentPath} locale={locale} />
            </div>
            <header className="flex flex-col gap-6">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <a href={siteHref(designDocument)}>DESIGN.md</a>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {isSectionOverview ? (
                      <BreadcrumbPage>{sectionTitle}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <a href={siteHref(sectionPath)}>{sectionTitle}</a>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {!isSectionOverview && (
                    <>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>{title}</BreadcrumbPage>
                      </BreadcrumbItem>
                    </>
                  )}
                </BreadcrumbList>
              </Breadcrumb>
              <div className="flex items-start justify-between gap-6">
                <div className="flex max-w-2xl flex-col gap-4">
                  <p className="eyebrow">{eyebrow}</p>
                  <h1 className="text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                    {title}
                  </h1>
                  <p className="text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
                    {description}
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="hidden shrink-0 sm:inline-flex"
                >
                  <a href={siteHref(designDocument)}>
                    <BookOpenIcon data-icon="inline-start" />
                    {docs.shell.readDesign}
                  </a>
                </Button>
              </div>
            </header>
            {children}
            <nav
              className="grid gap-3 border-t pt-8 sm:grid-cols-2"
              aria-label={docs.shell.paginationLabel}
            >
              {previous ? (
                <a
                  className="doc-pager"
                  href={siteHref(localizedRoute(previous.href, locale))}
                >
                  <ChevronLeftIcon />
                  <span>
                    <small>{docs.shell.previous}</small>
                    {previous.title}
                  </span>
                </a>
              ) : (
                <span />
              )}
              {next && (
                <a
                  className="doc-pager justify-end text-right"
                  href={siteHref(localizedRoute(next.href, locale))}
                >
                  <span>
                    <small>{docs.shell.next}</small>
                    {next.title}
                  </span>
                  <ChevronRightIcon />
                </a>
              )}
            </nav>
            <p className="text-xs text-muted-foreground">
              {docs.shell.reviewed}
            </p>
          </div>
        </main>

        <aside aria-label={docs.shell.outlineLabel} className="hidden xl:block">
          <nav
            className="sticky top-24 flex flex-col gap-1 px-5 py-8 text-sm"
            aria-label={docs.shell.outlineLabel}
          >
            <p className="mb-2 font-medium">{docs.shell.outlineTitle}</p>
            {outline.map((item) => (
              <a
                className="rounded-md py-1.5 text-muted-foreground hover:text-foreground"
                href={`#${item.id}`}
                key={item.id}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </aside>
      </div>
      <SiteFooter homeContent={homeContent} />
    </>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li className="flex gap-3 text-sm leading-6" key={item}>
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckIcon className="size-3" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
