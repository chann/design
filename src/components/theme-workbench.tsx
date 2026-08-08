import { useState } from "react";
import { ArrowRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import type { HomeContent } from "@/content/home";
import { localizedRoute, siteHref } from "@/data/site";

const tokenRows = [
  {
    name: "background",
    value: "#F7F7F2 / #131209",
    cssVariable: "--background",
  },
  {
    name: "foreground",
    value: "#171714 / #F4F4EF",
    cssVariable: "--foreground",
  },
  {
    name: "primary",
    value: "#0066CC / #78B7FF",
    cssVariable: "--primary",
  },
  { name: "radius", value: "10px", cssVariable: "--radius" },
] as const;

export function ThemeWorkbench({
  content,
  locale,
}: {
  content: HomeContent["hero"]["workbench"];
  locale: HomeContent["locale"];
}) {
  const [saved, setSaved] = useState(false);

  return (
    <Card
      aria-label={content.accessibleLabel}
      className="theme-workbench"
      role="region"
    >
      <CardHeader>
        <CardTitle>{content.title}</CardTitle>
        <CardDescription>{content.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="tokens">
          <TabsList aria-label={content.tabsLabel}>
            <TabsTrigger value="tokens">{content.tokensTab}</TabsTrigger>
            <TabsTrigger value="components">
              {content.componentsTab}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tokens">
            <dl className="theme-token-list">
              {tokenRows.map((token) => (
                <div className="theme-token-row" key={token.name}>
                  <span
                    aria-hidden="true"
                    className="theme-token-swatch"
                    style={{ background: `var(${token.cssVariable})` }}
                  />
                  <dt>{token.name}</dt>
                  <dd>{token.value}</dd>
                </div>
              ))}
            </dl>
          </TabsContent>
          <TabsContent value="components">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="workbench-project">
                  {content.sampleFieldLabel}
                </FieldLabel>
                <Input
                  id="workbench-project"
                  placeholder={content.sampleFieldPlaceholder}
                />
              </Field>
              <Field orientation="horizontal">
                <FieldLabel htmlFor="workbench-notifications">
                  {content.sampleSwitchLabel}
                </FieldLabel>
                <Switch defaultChecked id="workbench-notifications" />
              </Field>
            </FieldGroup>
            <Separator />
            <div className="flex flex-wrap items-center gap-3">
              <Badge aria-live="polite" role="status" variant="secondary">
                {saved
                  ? content.sampleSavedBadge
                  : content.sampleReadyBadge}
              </Badge>
              <Button onClick={() => setSaved(true)} type="button">
                {content.samplePrimaryAction}
              </Button>
              <Button asChild variant="outline">
                <a href={siteHref(localizedRoute("/components", locale))}>
                  {content.sampleSecondaryAction}
                  <ArrowRightIcon aria-hidden="true" data-icon="inline-end" />
                </a>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
