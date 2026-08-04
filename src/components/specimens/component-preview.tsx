import * as React from "react";
import { CheckIcon, Code2Icon, CopyIcon, EyeIcon } from "lucide-react";

import {
  specimenRegistry,
  type SpecimenProps,
} from "@/components/specimens/specimen-registry";
import { SyntaxCode } from "@/components/syntax-code";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ComponentRecord } from "@/data/catalog";

function CopyCodeButton({ value }: { value: string }) {
  const [copied, setCopied] = React.useState(false);
  const timerRef = React.useRef<number | undefined>(undefined);

  React.useEffect(
    () => () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    },
    [],
  );

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Button
      aria-label={copied ? "Code copied" : "Copy code"}
      onClick={copy}
      size="sm"
      type="button"
      variant="ghost"
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      {copied ? "Copied" : "Copy"}
    </Button>
  );
}

export function ComponentPreview({
  record,
  code,
}: {
  record: ComponentRecord;
  code: string;
}) {
  const Specimen = specimenRegistry[
    record.specimen as keyof typeof specimenRegistry
  ] as React.ComponentType<SpecimenProps>;

  return (
    <Tabs
      className="component-preview gap-0 overflow-hidden rounded-xl border bg-card"
      defaultValue="preview"
    >
      <div className="flex min-h-12 items-center border-b bg-muted/20 px-3">
        <TabsList
          aria-label="Component example view"
          className="component-preview-view-switch h-9 gap-0 rounded-lg border bg-muted/60 p-1"
        >
          <TabsTrigger
            className="h-7 flex-none rounded-r-none px-3 text-[0.8rem]"
            value="preview"
          >
            <EyeIcon aria-hidden="true" data-icon="inline-start" />
            Preview
          </TabsTrigger>
          <TabsTrigger
            className="h-7 flex-none rounded-l-none px-3 text-[0.8rem]"
            value="code"
          >
            <Code2Icon aria-hidden="true" data-icon="inline-start" />
            View code
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent className="m-0" value="preview">
        <React.Suspense
          fallback={
            <div aria-busy="true" className="specimen-stage flex-col gap-3">
              <span className="size-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              <span className="text-sm text-muted-foreground">
                Loading specimen…
              </span>
            </div>
          }
        >
          <Specimen record={record} />
        </React.Suspense>
      </TabsContent>
      <TabsContent className="m-0" value="code">
        <div className="flex min-h-11 items-center justify-between border-b bg-muted/20 px-3">
          <span className="font-mono text-xs text-muted-foreground">TSX</span>
          <CopyCodeButton value={code} />
        </div>
        <SyntaxCode
          className="component-preview-code"
          focusable="auto"
          label={`${record.title} example`}
          language="tsx"
          value={code}
        />
      </TabsContent>
    </Tabs>
  );
}
