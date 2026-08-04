import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const bubbleVariants = cva(
  "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6",
  {
    variants: {
      variant: {
        assistant: "rounded-tl-md border bg-card text-card-foreground",
        user: "ml-auto rounded-tr-md bg-primary text-primary-foreground",
        system: "mx-auto max-w-full bg-muted text-muted-foreground",
      },
    },
    defaultVariants: { variant: "assistant" },
  },
);

function Bubble({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof bubbleVariants>) {
  return (
    <div
      className={cn(bubbleVariants({ variant }), className)}
      data-slot="bubble"
      data-variant={variant ?? "assistant"}
      {...props}
    />
  );
}

export { Bubble, bubbleVariants };
