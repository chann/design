import * as React from "react";
import { HeartIcon, SendIcon } from "lucide-react";

import type { SpecimenProps } from "@/components/specimens/specimen-registry";
import { Attachment } from "@/components/ui/attachment";
import { Bubble } from "@/components/ui/bubble";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Marker } from "@/components/ui/marker";
import {
  Message,
  MessageActions,
  MessageContent,
  MessageHeader,
} from "@/components/ui/message";
import {
  MessageScroller,
  type MessageScrollerApi,
} from "@/components/ui/message-scroller";

function AttachmentSpecimen() {
  const [status, setStatus] = React.useState<"uploading" | "ready" | "error">(
    "uploading",
  );
  const [visible, setVisible] = React.useState(true);
  return (
    <div className="specimen-stage flex-col gap-4">
      {visible ? (
        <Attachment
          className="w-full max-w-md"
          meta={
            status === "uploading"
              ? "Uploading · 64%"
              : status === "error"
                ? "Upload failed · Retry available"
                : "PDF · 2.4 MB · Ready"
          }
          name="comfort-component-audit.pdf"
          onRemove={() => setVisible(false)}
          status={status}
        />
      ) : (
        <p className="text-sm text-muted-foreground">Attachment removed.</p>
      )}
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => setStatus("ready")} size="sm" variant="outline">
          Complete upload
        </Button>
        <Button onClick={() => setStatus("error")} size="sm" variant="outline">
          Show error
        </Button>
        {!visible ? (
          <Button onClick={() => setVisible(true)} size="sm" variant="ghost">
            Restore
          </Button>
        ) : null}
      </div>
    </div>
  );
}

function BubbleSpecimen() {
  return (
    <div className="specimen-stage items-stretch">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-3">
        <Bubble>
          The component guide now includes loading, empty, error, and
          focus-visible states.
        </Bubble>
        <Bubble variant="user">Great—publish the verified reference.</Bubble>
        <Bubble variant="system">Published · 14:32</Bubble>
      </div>
    </div>
  );
}

function MarkerSpecimen() {
  const [active, setActive] = React.useState("implementation");
  const steps = ["request", "analysis", "implementation", "verification"];
  return (
    <div className="specimen-stage">
      <nav
        aria-label="Conversation progress"
        className="w-full max-w-xs rounded-xl border bg-card p-2"
      >
        {steps.map((step, index) => (
          <Marker
            active={active === step}
            complete={steps.indexOf(active) > index}
            key={step}
            label={step[0].toUpperCase() + step.slice(1)}
            onClick={() => setActive(step)}
          />
        ))}
      </nav>
    </div>
  );
}

function MessageSpecimen() {
  const [liked, setLiked] = React.useState(false);
  return (
    <div className="specimen-stage items-stretch">
      <Message
        className="mx-auto w-full max-w-xl rounded-xl border bg-card p-5"
        messageId="component-review"
      >
        <MessageHeader>Comfort agent · just now</MessageHeader>
        <MessageContent>
          <p>
            I verified the component against keyboard, responsive, and
            reduced-motion guidance.
          </p>
          <Collapsible className="mt-3">
            <CollapsibleTrigger asChild>
              <Button size="sm" variant="ghost">
                Show verification detail
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 rounded-lg bg-muted p-3 text-xs text-muted-foreground">
              336 routes · zero Axe violations · primary token preserved
            </CollapsibleContent>
          </Collapsible>
        </MessageContent>
        <MessageActions>
          <Button
            aria-pressed={liked}
            onClick={() => setLiked((value) => !value)}
            size="sm"
            variant={liked ? "secondary" : "ghost"}
          >
            <HeartIcon /> {liked ? "Helpful" : "Mark helpful"}
          </Button>
        </MessageActions>
      </Message>
    </div>
  );
}

type DemoMessage = { id: string; author: "agent" | "user"; text: string };

const initialMessages: DemoMessage[] = [
  { id: "m3", author: "user", text: "Review the form components." },
  { id: "m4", author: "agent", text: "Calendar and Date Picker are verified." },
  { id: "m5", author: "user", text: "Check keyboard behavior too." },
  { id: "m6", author: "agent", text: "Focus order and escape behavior pass." },
  { id: "m7", author: "user", text: "What remains?" },
  { id: "m8", author: "agent", text: "Only the final browser sweep." },
];

function MessageScrollerSpecimen() {
  const apiRef = React.useRef<MessageScrollerApi>(null);
  const [messages, setMessages] = React.useState(initialMessages);
  const [activeMessageId, setActiveMessageId] = React.useState("m8");

  function prependHistory() {
    setMessages((current) => {
      if (current.some((message) => message.id === "m1")) return current;
      return [
        { id: "m1", author: "user", text: "Start the catalog audit." },
        {
          id: "m2",
          author: "agent",
          text: "I’ll preserve every verified state.",
        },
        ...current,
      ];
    });
  }

  function streamReply() {
    setMessages((current) => [
      ...current,
      {
        id: `m${current.length + 3}`,
        author: "agent",
        text: `Streamed update ${current.length - initialMessages.length + 1}: the reader stays anchored only near the latest message.`,
      },
    ]);
  }

  return (
    <div className="specimen-stage flex-col items-stretch gap-3">
      <div className="flex flex-wrap gap-2">
        <Button onClick={prependHistory} size="sm" variant="outline">
          Prepend history
        </Button>
        <Button onClick={streamReply} size="sm" variant="outline">
          <SendIcon /> Stream reply
        </Button>
        <Button
          onClick={() => apiRef.current?.jumpToLatest()}
          size="sm"
          variant="ghost"
        >
          Jump to latest
        </Button>
      </div>
      <div className="grid min-h-0 gap-3 md:grid-cols-[9rem_1fr]">
        <nav
          aria-label="Message markers"
          className="hidden rounded-xl border bg-card p-2 md:block"
        >
          {messages.map((message, index) => (
            <Marker
              active={activeMessageId === message.id}
              complete={
                messages.findIndex((item) => item.id === activeMessageId) >
                index
              }
              key={message.id}
              label={message.id.toUpperCase()}
              onClick={() => apiRef.current?.jumpToMessage(message.id)}
            />
          ))}
        </nav>
        <div className="rounded-xl border bg-muted/25 p-3">
          <MessageScroller
            onActiveMessageChange={setActiveMessageId}
            ref={apiRef}
          >
            <div className="flex flex-col gap-5 p-2">
              {messages.map((message) => (
                <Message key={message.id} messageId={message.id}>
                  <MessageHeader>
                    {message.author === "agent" ? "Comfort agent" : "You"}
                  </MessageHeader>
                  <MessageContent>
                    <Bubble
                      variant={
                        message.author === "agent" ? "assistant" : "user"
                      }
                    >
                      {message.text}
                    </Bubble>
                  </MessageContent>
                </Message>
              ))}
            </div>
          </MessageScroller>
        </div>
      </div>
      <span className="sr-only" aria-live="polite">
        Active message {activeMessageId}
      </span>
    </div>
  );
}

export const conversationSpecimens = {
  attachment: AttachmentSpecimen,
  bubble: BubbleSpecimen,
  marker: MarkerSpecimen,
  message: MessageSpecimen,
  "message-scroller": MessageScrollerSpecimen,
} satisfies Record<string, React.ComponentType<SpecimenProps>>;
