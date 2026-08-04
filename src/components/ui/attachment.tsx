import * as React from "react";
import { FileIcon, Loader2Icon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type AttachmentProps = React.ComponentProps<"div"> & {
  name: string;
  meta?: string;
  status?: "ready" | "uploading" | "error";
  onRemove?: () => void;
};

function Attachment({
  name,
  meta,
  status = "ready",
  onRemove,
  className,
  ...props
}: AttachmentProps) {
  return (
    <div
      className={cn(
        "flex min-w-0 items-center gap-3 rounded-xl border bg-card p-3",
        status === "error" && "border-destructive/50",
        className,
      )}
      data-slot="attachment"
      data-status={status}
      {...props}
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground">
        {status === "uploading" ? (
          <Loader2Icon aria-hidden="true" className="size-4 animate-spin" />
        ) : (
          <FileIcon aria-hidden="true" className="size-4" />
        )}
      </span>
      <span className="min-w-0 flex-1">
        <strong className="block truncate text-sm font-medium">{name}</strong>
        {meta ? (
          <span
            className={cn(
              "block text-xs text-muted-foreground",
              status === "error" && "text-destructive",
            )}
          >
            {meta}
          </span>
        ) : null}
      </span>
      {onRemove ? (
        <Button
          aria-label={`Remove ${name}`}
          onClick={onRemove}
          size="icon-sm"
          type="button"
          variant="ghost"
        >
          <XIcon aria-hidden="true" />
        </Button>
      ) : null}
    </div>
  );
}

export { Attachment };
