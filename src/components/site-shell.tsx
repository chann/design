import { useEffect, useState, type ReactNode } from "react";
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
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
  componentItems,
  foundationItems,
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

function Brand({ current = false }: { current?: boolean }) {
  return (
    <a
      className="flex shrink-0 items-center gap-2.5 font-semibold tracking-[-0.02em]"
      href={siteHref("/")}
      aria-label="Comfort Design System home"
      aria-current={current ? "page" : undefined}
    >
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span className="hidden sm:inline">Comfort Design System</span>
      <span className="sm:hidden">Comfort</span>
    </a>
  );
}

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
      <header className="site-header sticky top-0 z-40 h-24 pointer-events-none">
        <div className="site-nav pointer-events-auto mx-auto mt-6 flex w-[calc(100%-2rem)] items-center gap-4 rounded-full border bg-background/80 px-3 py-2 shadow-lg backdrop-blur-3xl md:w-max">
          <Brand current={currentPath === "/"} />
          <nav
            className="ml-4 hidden items-center gap-1 md:flex"
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
              className="hidden md:inline-flex"
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
    <footer className="border-t">
      <div className="mx-auto grid max-w-[96rem] gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div className="flex max-w-md flex-col gap-3">
          <Brand />
          <p className="text-sm leading-6 text-muted-foreground">
            A practical design contract for comfortable, clear, and trustworthy
            product interfaces.
          </p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm"
        >
          {primaryNav.map((item) => (
            <a
              className="site-footer-link text-muted-foreground hover:text-foreground"
              href={siteHref(item.href)}
              key={item.href}
            >
              {item.title}
            </a>
          ))}
          <a
            className="site-footer-link text-muted-foreground hover:text-foreground"
            href={siteHref("/DESIGN.md")}
          >
            DESIGN.md
          </a>
          <a
            className="site-footer-link text-muted-foreground hover:text-foreground"
            href="https://github.com/chann/design"
          >
            GitHub
          </a>
          <a
            className="site-footer-link text-muted-foreground hover:text-foreground"
            href={siteHref("/privacy")}
          >
            Privacy
          </a>
          <a
            className="site-footer-link text-muted-foreground hover:text-foreground"
            href={siteHref("/terms")}
          >
            Terms
          </a>
        </nav>
      </div>
    </footer>
  );
}

type OutlineItem = { id: string; title: string };

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
  const items: NavItem[] =
    section === "foundations"
      ? [
          {
            href: "/foundations",
            title: "Overview",
            description: "Foundation overview",
          },
          ...foundationItems,
        ]
      : section === "components"
        ? [
            {
              href: "/components",
              title: "Overview",
              description: "Component overview",
            },
            ...componentItems,
          ]
        : [
            {
              href: "/principles",
              title: "Overview",
              description: "Design principles",
            },
          ];

  return (
    <>
      <SiteHeader currentPath={currentPath} />
      <div className="mx-auto grid max-w-[96rem] lg:grid-cols-[15rem_minmax(0,1fr)] xl:grid-cols-[15rem_minmax(0,1fr)_13rem]">
        <aside
          aria-label={`${section} section navigation`}
          className="hidden border-r lg:block"
        >
          <div className="sticky top-24 h-[calc(100dvh-6rem)] py-8">
            <ScrollArea className="h-full px-5">
              <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {section}
              </p>
              <nav
                className="flex flex-col gap-1"
                aria-label={`${section} navigation`}
              >
                {items.map((item) => (
                  <a
                    className={cn(
                      "rounded-lg px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                      currentPath === item.href &&
                        "bg-accent font-medium text-accent-foreground",
                    )}
                    href={siteHref(item.href)}
                    key={item.href}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </ScrollArea>
          </div>
        </aside>

        <main
          id="main-content"
          className="min-w-0 px-4 py-10 sm:px-8 sm:py-14 lg:px-10 xl:px-14"
        >
          <div className="mx-auto flex max-w-4xl flex-col gap-12">
            <header className="flex max-w-3xl flex-col gap-4">
              <p className="eyebrow">{eyebrow}</p>
              <h1 className="text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                {title}
              </h1>
              <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
                {description}
              </p>
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

        <aside aria-label="Page outline" className="hidden border-l xl:block">
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
