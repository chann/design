import * as React from "react";

import { cn } from "@/lib/utils";

function Message({
  className,
  messageId,
  ...props
}: React.ComponentProps<"article"> & { messageId: string }) {
  return (
    <article
      className={cn("flex flex-col gap-3", className)}
      data-message-id={messageId}
      data-slot="message"
      id={`message-${messageId}`}
      {...props}
    />
  );
}

function MessageHeader({
  className,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <header
      className={cn(
        "flex items-center gap-2 text-xs font-medium text-muted-foreground",
        className,
      )}
      data-slot="message-header"
      {...props}
    />
  );
}

function MessageContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("min-w-0 text-sm leading-7", className)}
      data-slot="message-content"
      {...props}
    />
  );
}

function MessageActions({
  className,
  ...props
}: React.ComponentProps<"footer">) {
  return (
    <footer
      className={cn("flex flex-wrap items-center gap-1", className)}
      data-slot="message-actions"
      {...props}
    />
  );
}

export { Message, MessageActions, MessageContent, MessageHeader };
