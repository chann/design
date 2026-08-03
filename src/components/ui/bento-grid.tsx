import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function BentoGrid({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "grid grid-flow-row-dense grid-cols-1 gap-4 md:auto-rows-[14rem] md:grid-cols-6",
        className,
      )}
      data-slot="bento-grid"
      {...props}
    />
  );
}

export function BentoCard({ className, ...props }: ComponentProps<"article">) {
  return (
    <article
      className={cn(
        "relative flex h-full min-h-56 flex-col overflow-hidden rounded-2xl bg-muted/60 p-6 transition-[background-color,box-shadow,transform] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-0.5 group-hover:bg-muted group-hover:shadow-lg group-active:translate-y-px",
        className,
      )}
      data-slot="bento-card"
      {...props}
    />
  );
}
