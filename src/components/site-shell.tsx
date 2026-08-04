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
import {
  componentCatalog,
  componentFamilies,
  foundationCatalog,
} from "@/data/catalog";
import {
  designEditions,
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
}: {
  className?: string;
  current?: boolean;
}) {
  return (
    <a
      className={cn(
        "flex shrink-0 items-center font-semibold tracking-[-0.02em]",
        className,
      )}
      href={siteHref("/")}
      aria-label="Comfort Design System home"
      aria-current={current ? "page" : undefined}
    >
      <span className="hidden sm:inline">Comfort Design System</span>
      <span className="sm:hidden">Comfort</span>
    </a>
  );
}

const documentationGroups = [
  {
    title: "Overview",
    items: [
      { href: "/principles", title: "Principles" },
      { href: "/foundations", title: "Foundations" },
      { href: "/components", title: "Components" },
    ],
  },
  {
    title: "Foundations",
    items: foundationCatalog.map(({ slug, title }) => ({
      href: `/foundations/${slug}`,
      title,
    })),
  },
  ...componentFamilies.map((family) => ({
    title: `Components / ${family.replace("-", " ")}`,
    items: componentCatalog
      .filter((component) => component.family === family)
      .map(({ slug, title }) => ({
        href: `/components/${slug}`,
        title,
      })),
  })),
];

const footerGroups = [
  {
    title: "System",
    links: [
      { href: "/", title: "Overview" },
      { href: "/principles", title: "Principles" },
      { href: "/foundations", title: "Foundation catalog" },
      { href: "/components", title: "Component catalog" },
    ],
  },
  {
    title: "Foundations",
    links: foundationCatalog.map(({ slug, title }) => ({
      href: `/foundations/${slug}`,
      title,
    })),
  },
  {
    title: "Components",
    links: componentCatalog.map(({ slug, title }) => ({
      href: `/components/${slug}`,
      title,
    })),
  },
  {
    title: "Resources",
    links: [
      ...designEditions.map(({ href, label }) => ({
        href,
        title: `DESIGN.md · ${label}`,
      })),
      { href: "https://github.com/chann/design", title: "GitHub source" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", title: "Privacy" },
      { href: "/terms", title: "Terms" },
    ],
  },
];

function ThemeMenu() {
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

  const labels = { light: "Light", dark: "Dark", system: "System" };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          aria-label={`Theme: ${labels[theme]}`}
          className="gap-2"
        >
          <span className="text-muted-foreground">Theme</span>
          <span>{labels[theme]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(value) => setTheme(value as Theme)}
        >
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function LanguageMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          aria-label="DESIGN.md language editions"
          className="gap-2"
        >
          <span className="text-muted-foreground">DESIGN.md</span>
          <span>KO</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-52">
        <DropdownMenuLabel>Language editions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {designEditions.map((edition) => (
            <DropdownMenuItem asChild key={edition.code}>
              <a
                className="justify-between gap-4"
                href={siteHref(edition.href)}
                hrefLang={edition.languageTag}
                lang={edition.languageTag}
              >
                <span>{edition.label}</span>
                <span className="text-xs text-muted-foreground">
                  {edition.note}
                </span>
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MobileNavigation({ currentPath }: { currentPath: string }) {
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
          <span className="sr-only">Open navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="top"
        showCloseButton={false}
        className="mobile-menu-content inset-0 h-dvh w-full max-w-none border-0 p-0 shadow-none"
      >
        <SheetHeader className="flex-row items-center justify-between p-4">
          <Brand current={currentPath === "/"} />
          <SheetTitle className="sr-only">Comfort navigation</SheetTitle>
          <SheetDescription className="sr-only">
            Principles, foundations, and components.
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
              <span className="sr-only">Close navigation</span>
            </Button>
          </SheetClose>
        </SheetHeader>
        <div className="flex min-h-0 flex-1 flex-col justify-between gap-8 overflow-y-auto px-4 pb-8 pt-12">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {primaryNav.map((item) => (
              <SheetClose asChild key={item.href}>
                <a
                  aria-current={
                    currentPath.startsWith(item.href) ? "page" : undefined
                  }
                  className={cn(
                    "mobile-menu-link",
                    currentPath.startsWith(item.href) && "is-current",
                  )}
                  href={siteHref(item.href)}
                >
                  {item.title}
                </a>
              </SheetClose>
            ))}
          </nav>
          <div className="mobile-menu-utilities flex flex-col gap-6">
            <LanguageMenu />
            <ThemeMenu />
            <div className="flex flex-wrap gap-6 text-sm">
              <a href={siteHref("/DESIGN.md")}>DESIGN.md</a>
              <a href="https://github.com/chann/design">GitHub</a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function SiteHeader({ currentPath }: { currentPath: string }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header pointer-events-none sticky top-0 z-40 h-24 pt-6">
        <div className="site-nav pointer-events-auto mx-auto flex w-[calc(100%-2rem)] items-center gap-2 rounded-full border bg-background/80 px-3 py-2 shadow-lg backdrop-blur-3xl md:w-max">
          <Brand className="px-2" current={currentPath === "/"} />
          <nav
            className="ml-2 hidden items-center gap-1 md:flex"
            aria-label="Primary navigation"
          >
            {primaryNav.map((item) => (
              <Button
                asChild
                variant={
                  currentPath.startsWith(item.href) ? "secondary" : "ghost"
                }
                size="sm"
                key={item.href}
              >
                <a
                  aria-current={
                    currentPath.startsWith(item.href) ? "page" : undefined
                  }
                  href={siteHref(item.href)}
                >
                  {item.title}
                </a>
              </Button>
            ))}
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
              <LanguageMenu />
            </div>
            <div className="hidden lg:block">
              <ThemeMenu />
            </div>
            <MobileNavigation currentPath={currentPath} />
          </div>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer overflow-hidden border-t">
      <div className="mx-auto max-w-[96rem] px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="flex max-w-xl flex-col gap-3">
          <Brand />
          <p className="text-sm leading-6 text-muted-foreground">
            A practical DESIGN.md for comfortable, clear, and trustworthy
            product interfaces—from semantic foundations to complete component
            states.
          </p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="mt-12 grid gap-x-8 gap-y-10 text-sm sm:grid-cols-2 lg:grid-cols-12"
        >
          {footerGroups.map((group) => (
            <section
              className={cn(
                group.title === "System" && "lg:col-span-2",
                group.title === "Foundations" && "sm:col-span-2 lg:col-span-3",
                group.title === "Components" && "sm:col-span-2 lg:col-span-4",
                group.title === "Resources" && "lg:col-span-2",
                group.title === "Legal" && "lg:col-span-1",
              )}
              key={group.title}
            >
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                {group.title}
              </h2>
              <ul
                className={cn(
                  "flex flex-col gap-2.5",
                  group.title === "Foundations" &&
                    "sm:block sm:columns-2 sm:[&>li]:mb-2.5",
                  group.title === "Components" &&
                    "sm:block sm:columns-2 sm:[&>li]:mb-2.5 xl:columns-3",
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
      <FooterSignature />
    </footer>
  );
}

type OutlineItem = { id: string; title: string };

function DocsNavigationList({
  currentPath,
  closeOnSelect = false,
}: {
  currentPath: string;
  closeOnSelect?: boolean;
}) {
  return (
    <div className="flex flex-col gap-7">
      {documentationGroups.map((group) => (
        <div className="flex flex-col gap-2" key={group.title}>
          <p className="px-2.5 text-xs font-medium text-foreground">
            {group.title}
          </p>
          <nav
            className="flex flex-col gap-0.5"
            aria-label={`${group.title} documentation`}
          >
            {group.items.map((item) => {
              const link = (
                <a
                  aria-current={currentPath === item.href ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                    currentPath === item.href &&
                      "bg-accent font-medium text-accent-foreground",
                  )}
                  href={siteHref(item.href)}
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

function DocsMobileNavigation({ currentPath }: { currentPath: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <PanelLeftIcon data-icon="inline-start" />
          Browse docs
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[min(24rem,90vw)] border-0 p-0">
        <SheetHeader className="border-b px-5 py-4">
          <SheetTitle>Documentation</SheetTitle>
          <SheetDescription>
            Browse principles, foundations, and components.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="min-h-0 flex-1 px-3 py-5">
          <DocsNavigationList currentPath={currentPath} closeOnSelect={true} />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

export function DocsLayout({
  currentPath,
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
  section: "principles" | "foundations" | "components";
  eyebrow: string;
  title: string;
  description: string;
  outline: OutlineItem[];
  previous?: NavItem;
  next?: NavItem;
  children: ReactNode;
}) {
  const sectionTitle =
    section === "principles"
      ? "Principles"
      : section === "foundations"
        ? "Foundations"
        : "Components";
  const sectionPath = `/${section}`;
  const isSectionOverview = currentPath === sectionPath;

  return (
    <>
      <SiteHeader currentPath={currentPath} />
      <div className="mx-auto grid max-w-[96rem] lg:grid-cols-[17rem_minmax(0,1fr)] xl:grid-cols-[17rem_minmax(0,1fr)_14rem]">
        <aside
          aria-label="Documentation navigation"
          className="hidden lg:block"
        >
          <div className="sticky top-24 h-[calc(100dvh-6rem)] py-8">
            <ScrollArea className="h-full px-4">
              <DocsNavigationList currentPath={currentPath} />
            </ScrollArea>
          </div>
        </aside>

        <main
          id="main-content"
          className="min-w-0 px-4 py-10 sm:px-8 sm:py-12 lg:px-10 xl:px-12"
        >
          <div className="mx-auto flex max-w-3xl flex-col gap-14">
            <div className="lg:hidden">
              <DocsMobileNavigation currentPath={currentPath} />
            </div>
            <header className="flex flex-col gap-6">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <a href={siteHref("/DESIGN.md")}>DESIGN.md</a>
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
                  <a href={siteHref("/DESIGN.md")}>
                    <BookOpenIcon data-icon="inline-start" />
                    Read source
                  </a>
                </Button>
              </div>
            </header>
            {children}
            <nav
              className="grid gap-3 border-t pt-8 sm:grid-cols-2"
              aria-label="Pagination"
            >
              {previous ? (
                <a className="doc-pager" href={siteHref(previous.href)}>
                  <ChevronLeftIcon />
                  <span>
                    <small>Previous</small>
                    {previous.title}
                  </span>
                </a>
              ) : (
                <span />
              )}
              {next && (
                <a
                  className="doc-pager justify-end text-right"
                  href={siteHref(next.href)}
                >
                  <span>
                    <small>Next</small>
                    {next.title}
                  </span>
                  <ChevronRightIcon />
                </a>
              )}
            </nav>
            <p className="text-xs text-muted-foreground">
              Last reviewed · August 2026
            </p>
          </div>
        </main>

        <aside aria-label="Page outline" className="hidden xl:block">
          <nav
            className="sticky top-24 flex flex-col gap-1 px-5 py-8 text-sm"
            aria-label="On this page"
          >
            <p className="mb-2 font-medium">On this page</p>
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
      <SiteFooter />
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
