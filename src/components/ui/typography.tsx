import * as React from "react";

import { cn } from "@/lib/utils";

function TypographyH1({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl",
        className,
      )}
      data-slot="typography-h1"
      {...props}
    />
  );
}

function TypographyH2({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-[-0.035em] text-balance",
        className,
      )}
      data-slot="typography-h2"
      {...props}
    />
  );
}

function TypographyH3({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-[-0.025em]",
        className,
      )}
      data-slot="typography-h3"
      {...props}
    />
  );
}

function TypographyH4({ className, ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
      className={cn("scroll-m-20 text-xl font-semibold", className)}
      data-slot="typography-h4"
      {...props}
    />
  );
}

function TypographyP({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("leading-7 text-pretty", className)}
      data-slot="typography-p"
      {...props}
    />
  );
}

function TypographyLead({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-xl leading-8 text-muted-foreground", className)}
      data-slot="typography-lead"
      {...props}
    />
  );
}

function TypographyLarge({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-lg font-semibold", className)}
      data-slot="typography-large"
      {...props}
    />
  );
}

function TypographySmall({
  className,
  ...props
}: React.ComponentProps<"small">) {
  return (
    <small
      className={cn("text-sm font-medium leading-none", className)}
      data-slot="typography-small"
      {...props}
    />
  );
}

function TypographyMuted({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-sm leading-6 text-muted-foreground", className)}
      data-slot="typography-muted"
      {...props}
    />
  );
}

function TypographyInlineCode({
  className,
  ...props
}: React.ComponentProps<"code">) {
  return (
    <code
      className={cn(
        "rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm font-medium break-all",
        className,
      )}
      data-slot="typography-inline-code"
      {...props}
    />
  );
}

function TypographyBlockquote({
  className,
  ...props
}: React.ComponentProps<"blockquote">) {
  return (
    <blockquote
      className={cn(
        "border-l-2 border-primary pl-5 text-base leading-7 text-muted-foreground italic",
        className,
      )}
      data-slot="typography-blockquote"
      {...props}
    />
  );
}

function TypographyList({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn("ml-6 list-disc space-y-2 leading-7", className)}
      data-slot="typography-list"
      {...props}
    />
  );
}

export {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyInlineCode,
  TypographyLarge,
  TypographyLead,
  TypographyList,
  TypographyMuted,
  TypographyP,
  TypographySmall,
};
