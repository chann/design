import * as React from "react";
import { ArrowDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type MessageScrollerApi = {
  jumpToMessage: (id: string) => void;
  jumpToLatest: () => void;
};

export type MessageScrollerProps = {
  activeMessageId?: string;
  children: React.ReactNode;
  onActiveMessageChange?: (id: string) => void;
};

type ScrollerMetrics = {
  firstMessageId?: string;
  scrollHeight: number;
};

const MessageScroller = React.forwardRef<
  MessageScrollerApi,
  MessageScrollerProps
>(function MessageScroller(
  { activeMessageId, children, onActiveMessageChange },
  forwardedRef,
) {
  const viewportRef = React.useRef<HTMLDivElement>(null);
  const nearLatestRef = React.useRef(true);
  const metricsRef = React.useRef<ScrollerMetrics>({ scrollHeight: 0 });
  const [detached, setDetached] = React.useState(false);

  const jumpToMessage = React.useCallback((id: string) => {
    const viewport = viewportRef.current;
    const target = Array.from(
      viewport?.querySelectorAll<HTMLElement>("[data-message-id]") ?? [],
    ).find((element) => element.dataset.messageId === id);
    target?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, []);

  const jumpToLatest = React.useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport.scrollTo({ top: viewport.scrollHeight, behavior: "smooth" });
    nearLatestRef.current = true;
    setDetached(false);
  }, []);

  React.useImperativeHandle(
    forwardedRef,
    () => ({ jumpToMessage, jumpToLatest }),
    [jumpToLatest, jumpToMessage],
  );

  React.useEffect(() => {
    if (activeMessageId) jumpToMessage(activeMessageId);
  }, [activeMessageId, jumpToMessage]);

  React.useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const firstMessageId =
      viewport.querySelector<HTMLElement>("[data-message-id]")?.dataset
        .messageId;
    const previous = metricsRef.current;
    const contentWasPrepended =
      previous.firstMessageId !== undefined &&
      firstMessageId !== previous.firstMessageId;

    if (contentWasPrepended && !nearLatestRef.current) {
      viewport.scrollTop += viewport.scrollHeight - previous.scrollHeight;
    } else if (nearLatestRef.current) {
      viewport.scrollTop = viewport.scrollHeight;
    }

    metricsRef.current = {
      firstMessageId,
      scrollHeight: viewport.scrollHeight,
    };
  }, [children]);

  function handleScroll() {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const remaining =
      viewport.scrollHeight - viewport.clientHeight - viewport.scrollTop;
    const nearLatest = remaining <= 64;
    nearLatestRef.current = nearLatest;
    setDetached(!nearLatest);

    const viewportTop = viewport.getBoundingClientRect().top;
    const messages = Array.from(
      viewport.querySelectorAll<HTMLElement>("[data-message-id]"),
    );
    const active = messages.reduce<HTMLElement | undefined>((closest, item) => {
      if (item.getBoundingClientRect().bottom < viewportTop) return closest;
      if (!closest) return item;
      return Math.abs(item.getBoundingClientRect().top - viewportTop) <
        Math.abs(closest.getBoundingClientRect().top - viewportTop)
        ? item
        : closest;
    }, undefined);
    if (active?.dataset.messageId) {
      onActiveMessageChange?.(active.dataset.messageId);
    }
  }

  return (
    <div className="relative" data-slot="message-scroller">
      <div
        aria-live="polite"
        aria-relevant="additions text"
        className={cn(
          "max-h-[32rem] overflow-y-auto overscroll-contain scroll-smooth rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          detached && "pb-14",
        )}
        onScroll={handleScroll}
        ref={viewportRef}
        role="log"
        tabIndex={0}
      >
        {children}
      </div>
      {detached ? (
        <Button
          className="absolute bottom-3 left-1/2 -translate-x-1/2 shadow-lg"
          onClick={jumpToLatest}
          size="sm"
          type="button"
          variant="secondary"
        >
          <ArrowDownIcon aria-hidden="true" data-icon="inline-start" />
          Jump to latest
        </Button>
      ) : null}
    </div>
  );
});

export { MessageScroller };
