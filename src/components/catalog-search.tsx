import { useEffect, useMemo } from "react";
import { SearchIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { docsContents } from "@/content/docs";
import type { HomeLocale } from "@/content/home";
import type { ComponentFamily } from "@/data/catalog";

export type CatalogSearchItem = {
  slug: string;
  title: string;
  description: string;
  family?: string;
  keywords?: string[];
};

export function CatalogSearch<T extends CatalogSearchItem>({
  items,
  value,
  family,
  onValueChange,
  onFamilyChange,
  onResultsChange,
  locale,
}: {
  items: T[];
  value: string;
  family: string;
  onValueChange: (value: string) => void;
  onFamilyChange: (family: string) => void;
  onResultsChange: (items: T[]) => void;
  locale: HomeLocale;
}) {
  const copy = docsContents[locale].search;
  const families = useMemo(
    () => [
      ...new Set(items.flatMap((item) => (item.family ? [item.family] : []))),
    ],
    [items],
  );
  const results = useMemo(() => {
    const query = value.trim().toLocaleLowerCase();
    return items.filter((item) => {
      if (family !== "all" && item.family !== family) return false;
      if (!query) return true;
      return [
        item.title,
        item.description,
        item.family ?? "",
        ...(item.keywords ?? []),
      ]
        .join(" ")
        .toLocaleLowerCase()
        .includes(query);
    });
  }, [family, items, value]);

  useEffect(() => onResultsChange(results), [onResultsChange, results]);

  const hasFilters = value.trim().length > 0 || family !== "all";

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
                onFamilyChange("all");
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
        {families.length > 0 ? (
          <div
            aria-label={copy.familyLabel}
            className="flex flex-wrap gap-2"
            role="group"
          >
            {["all", ...families].map((option) => (
              <button
                aria-pressed={family === option}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium capitalize text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  family === option &&
                    "border-primary bg-primary text-primary-foreground hover:border-primary hover:text-primary-foreground",
                )}
                key={option}
                onClick={() => onFamilyChange(option)}
                type="button"
              >
                {option === "all"
                  ? copy.all
                  : docsContents[locale].families[option as ComponentFamily]}
              </button>
            ))}
          </div>
        ) : null}
        <p aria-live="polite" className="text-xs text-muted-foreground">
          {results.length} {results.length === 1 ? copy.result : copy.results}
        </p>
      </div>
    </section>
  );
}
