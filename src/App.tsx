import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { foundationCatalog, getFoundation } from "@/data/catalog";
import { FoundationDetailPage } from "@/pages/foundation-detail-page";
import { FoundationsPage } from "@/pages/foundations-page";
import { HomePage } from "@/pages/home-page";
import { LegalPage } from "@/pages/legal-page";
import { PrinciplesPage } from "@/pages/principles-page";
import {
  currentRoute,
  localizedRoute,
  parseSiteRoute,
  siteHref,
} from "@/data/site";
import { homeContents, homeLocales, type HomeLocale } from "@/content/home";
import { docsContents } from "@/content/docs";

const SITE_ORIGIN = "https://chann.github.io";

type LocaleAlternate = {
  hrefLang: string;
  route: string;
};

type RouteMetadata = {
  title: string;
  description: string;
  canonicalRoute: string;
  robots: "index,follow" | "noindex,follow";
  languageTag: string;
  alternates?: readonly LocaleAlternate[];
};

function upsertMeta(selector: string, attribute: string, value: string) {
  const element = document.querySelector<HTMLMetaElement>(selector);
  element?.setAttribute(attribute, value);
}

function updateDocumentIdentity(languageTag: string, title: string) {
  document.documentElement.lang = languageTag;
  document.title = title;
}

function localizedMetadata(locale: HomeLocale) {
  return {
    ko: {
      guides: "가이드",
      privacy: "개인정보 안내",
      terms: "이용 안내",
      notFound: "페이지를 찾을 수 없습니다",
      description:
        "Comfort의 원칙, 파운데이션, 접근성·구현 가이드를 살펴보세요.",
    },
    en: {
      guides: "Guides",
      privacy: "Privacy",
      terms: "Terms",
      notFound: "Page not found",
      description:
        "Browse Comfort principles, foundations, accessibility notes, and implementation guidance.",
    },
    jp: {
      guides: "ガイド",
      privacy: "プライバシー",
      terms: "利用案内",
      notFound: "ページが見つかりません",
      description:
        "Comfortの原則、ファウンデーション、アクセシビリティと実装ガイドを確認できます。",
    },
    cn: {
      guides: "指南",
      privacy: "隐私说明",
      terms: "使用说明",
      notFound: "找不到页面",
      description: "查看Comfort的原则、基础、无障碍说明与实现指南。",
    },
  }[locale];
}

function routeMetadata(route: string): RouteMetadata {
  const { locale, contentRoute } = parseSiteRoute(route);
  const localeMetadata = localizedMetadata(locale);
  const alternates = [
    ...homeLocales.map((alternateLocale) => ({
      hrefLang: homeContents[alternateLocale].languageTag,
      route: localizedRoute(contentRoute, alternateLocale),
    })),
    { hrefLang: "x-default", route: localizedRoute(contentRoute, "en") },
  ];

  if (contentRoute === "/") {
    const content = homeContents[locale];
    return {
      ...content.metadata,
      canonicalRoute: content.path,
      robots: "index,follow",
      languageTag: content.languageTag,
      alternates,
    };
  }

  if (contentRoute === "/privacy") {
    return {
      title: `${localeMetadata.privacy} | Comfort DESIGN.md`,
      description: localeMetadata.description,
      canonicalRoute: route,
      robots: "index,follow",
      languageTag: homeContents[locale].languageTag,
      alternates,
    };
  }

  if (contentRoute === "/terms") {
    return {
      title: `${localeMetadata.terms} | Comfort DESIGN.md`,
      description: localeMetadata.description,
      canonicalRoute: route,
      robots: "index,follow",
      languageTag: homeContents[locale].languageTag,
      alternates,
    };
  }

  const [, group, slug] = contentRoute.split("/");
  const documentedRoute =
    contentRoute === "/principles" ||
    contentRoute === "/foundations" ||
    (group === "foundations" && foundationSlugs.has(slug));

  if (!documentedRoute) {
    return {
      title: `${localeMetadata.notFound} | Comfort DESIGN.md`,
      description: localeMetadata.description,
      canonicalRoute: localizedRoute("/", locale),
      robots: "noindex,follow",
      languageTag: homeContents[locale].languageTag,
    };
  }

  const record = getFoundation(slug);
  const section = contentRoute.split("/").filter(Boolean).at(-1);
  const label =
    record?.title ??
    (section
      ? section
          .split("-")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(" ")
      : "Reference");
  return {
    title: `${label} | Comfort DESIGN.md`,
    description: localeMetadata.description,
    canonicalRoute: route,
    robots: "index,follow",
    languageTag: homeContents[locale].languageTag,
    alternates,
  };
}

function syncAlternates(alternates: readonly LocaleAlternate[] = []) {
  document
    .querySelectorAll('link[data-home-alternate="true"]')
    .forEach((element) => element.remove());

  for (const alternate of alternates) {
    const link = document.createElement("link");
    link.rel = "alternate";
    link.hreflang = alternate.hrefLang;
    link.href = new URL(
      siteHref(alternate.route, "/design/"),
      SITE_ORIGIN,
    ).href;
    link.dataset.homeAlternate = "true";
    document.head.append(link);
  }
}

const foundationSlugs = new Set(
  foundationCatalog.map((foundation) => foundation.slug),
);
function NotFoundPage({ locale }: { locale: HomeLocale }) {
  const content = docsContents[locale].notFound;
  return (
    <main id="main-content" className="grid min-h-dvh place-items-center px-4">
      <div className="flex max-w-lg flex-col items-center gap-5 text-center">
        <span className="font-mono text-sm text-primary">404</span>
        <h1 className="text-4xl font-semibold tracking-[-0.04em]">
          {content.title}
        </h1>
        <p className="leading-7 text-muted-foreground">{content.description}</p>
        <Button asChild>
          <a href={siteHref(localizedRoute("/", locale))}>{content.action}</a>
        </Button>
      </div>
    </main>
  );
}

export default function App() {
  const route = currentRoute();
  const { locale, contentRoute } = parseSiteRoute(route);

  useEffect(() => {
    const metadata = routeMetadata(route);
    const canonicalUrl = new URL(
      siteHref(metadata.canonicalRoute, "/design/"),
      SITE_ORIGIN,
    ).href;

    updateDocumentIdentity(metadata.languageTag, metadata.title);
    upsertMeta('meta[name="description"]', "content", metadata.description);
    upsertMeta('meta[name="robots"]', "content", metadata.robots);
    upsertMeta('meta[property="og:title"]', "content", metadata.title);
    upsertMeta(
      'meta[property="og:description"]',
      "content",
      metadata.description,
    );
    upsertMeta('meta[property="og:url"]', "content", canonicalUrl);
    upsertMeta('meta[name="twitter:title"]', "content", metadata.title);
    upsertMeta(
      'meta[name="twitter:description"]',
      "content",
      metadata.description,
    );
    document
      .querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?.setAttribute("href", canonicalUrl);
    syncAlternates(metadata.alternates);

    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (!hash) return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [route]);

  if (contentRoute === "/") {
    return <HomePage currentPath={route} content={homeContents[locale]} />;
  }
  if (contentRoute === "/principles") {
    return <PrinciplesPage currentPath={route} locale={locale} />;
  }
  if (contentRoute === "/foundations") {
    return <FoundationsPage currentPath={route} locale={locale} />;
  }
  if (contentRoute === "/privacy") {
    return <LegalPage currentPath={route} kind="privacy" locale={locale} />;
  }
  if (contentRoute === "/terms") {
    return <LegalPage currentPath={route} kind="terms" locale={locale} />;
  }

  const [, section, slug] = contentRoute.split("/");
  if (section === "foundations" && foundationSlugs.has(slug)) {
    return (
      <FoundationDetailPage currentPath={route} locale={locale} slug={slug} />
    );
  }
  return <NotFoundPage locale={locale} />;
}
