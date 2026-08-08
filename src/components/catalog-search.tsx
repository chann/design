import { useEffect, useMemo } from "react";
import { SearchIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { docsContents } from "@/content/docs";
import type { HomeLocale } from "@/content/home";

export type CatalogSearchItem = {
  slug: string;
  title: string;
  description: string;
  keywords?: string[];
};

export function CatalogSearch<T extends CatalogSearchItem>({
  items,
  value,
  onValueChange,
  onResultsChange,
  locale,
}: {
  items: T[];
  value: string;
  onValueChange: (value: string) => void;
  onResultsChange: (items: T[]) => void;
  locale: HomeLocale;
}) {
  const copy = docsContents[locale].search;
  const results = useMemo(() => {
    const query = value.trim().toLocaleLowerCase();
    return items.filter((item) => {
      if (!query) return true;
      return [
        item.title,
        item.description,
        ...(item.keywords ?? []),
      ]
        .join(" ")
        .toLocaleLowerCase()
        .includes(query);
    });
  }, [items, value]);

  useEffect(() => onResultsChange(results), [onResultsChange, results]);

  const hasFilters = value.trim().length > 0;

  return (
    <section
      aria-label={copy.ariaLabel}
      className="catalog-search rounded-2xl border bg-card p-4 sm:p-5"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="flex flex-1 flex-col gap-2">
            <Label htmlFor="catalog-search-input">{copy.label}</Label>
            <div className="relative">
              <SearchIcon
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                autoComplete="off"
                className="h-10 pl-9 pr-9"
                id="catalog-search-input"
                onChange={(event) => onValueChange(event.target.value)}
                placeholder={copy.placeholder}
                type="search"
                value={value}
              />
            </div>
          </div>
          {hasFilters ? (
            <Button
              onClick={() => {
                onValueChange("");
              }}
              size="sm"
              type="button"
              variant="ghost"
            >
              <XIcon aria-hidden="true" data-icon="inline-start" />
              {copy.reset}
            </Button>
          ) : null}
        </div>
        <p aria-live="polite" className="text-xs text-muted-foreground">
          {results.length} {results.length === 1 ? copy.result : copy.results}
        </p>
      </div>
    </section>
  );
}
