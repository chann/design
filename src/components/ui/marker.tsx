import * as React from "react";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Marker({
  className,
  label,
  active = false,
  complete = false,
  ...props
}: React.ComponentProps<"button"> & {
  label: string;
  active?: boolean;
  complete?: boolean;
}) {
  return (
    <button
      aria-current={active ? "step" : undefined}
      className={cn(
        "group/marker flex min-h-8 items-center gap-2 rounded-lg px-2 text-left text-xs text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
        active && "bg-primary/10 font-medium text-primary",
        className,
      )}
      data-slot="marker"
      type="button"
      {...props}
    >
      <span
        className={cn(
          "grid size-4 shrink-0 place-items-center rounded-full border bg-background",
          (active || complete) && "border-primary text-primary",
          complete && "bg-primary text-primary-foreground",
        )}
      >
        {complete ? (
          <CheckIcon aria-hidden="true" className="size-2.5" />
        ) : null}
      </span>
      <span className="truncate">{label}</span>
    </button>
  );
}

export { Marker };
