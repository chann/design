import * as React from "react";
import {
  ArrowUpDownIcon,
  FileTextIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import type { SpecimenProps } from "@/components/specimens/specimen-registry";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { DataTable, type DataTableColumn } from "@/components/ui/data-table";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  TypographyBlockquote,
  TypographyH2,
  TypographyInlineCode,
  TypographyLead,
  TypographyMuted,
  TypographyP,
} from "@/components/ui/typography";

function AspectRatioSpecimen() {
  return (
    <div className="specimen-stage">
      <AspectRatio
        className="grid max-w-2xl place-items-center overflow-hidden rounded-xl border bg-muted/40"
        ratio={16 / 9}
      >
        <div className="absolute inset-6 rounded-xl border border-primary/25" />
        <div className="text-center">
          <strong className="text-2xl">16:9</strong>
          <p className="mt-2 text-sm text-muted-foreground">
            Stable media geometry before content loads
          </p>
        </div>
      </AspectRatio>
    </div>
  );
}

function AvatarSpecimen() {
  return (
    <div className="specimen-stage gap-6">
      <AvatarGroup>
        {[
          ["CH", true],
          ["DS", false],
          ["QA", true],
        ].map(([initials, online]) => (
          <Avatar key={initials as string}>
            <AvatarFallback>{initials as string}</AvatarFallback>
            {online ? <AvatarBadge /> : null}
          </Avatar>
        ))}
        <AvatarGroupCount>+4</AvatarGroupCount>
      </AvatarGroup>
      <span className="text-sm text-muted-foreground">Review team</span>
    </div>
  );
}

function CardSpecimen() {
  return (
    <div className="specimen-stage">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Component coverage</CardTitle>
          <CardDescription>All required routes are published.</CardDescription>
          <CardAction>
            <Button aria-label="More actions" size="icon-sm" variant="ghost">
              <MoreHorizontalIcon />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <strong className="text-4xl tracking-[-0.04em]">63 / 63</strong>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">
          Verified against the catalog manifest
        </CardFooter>
      </Card>
    </div>
  );
}

function CarouselSpecimen() {
  return (
    <div className="specimen-stage px-16">
      <Carousel className="w-full max-w-lg" opts={{ align: "start" }}>
        <CarouselContent>
          {["Default", "Hover", "Focus-visible", "Disabled"].map(
            (state, index) => (
              <CarouselItem className="basis-4/5 sm:basis-1/2" key={state}>
                <div className="flex min-h-40 flex-col justify-between rounded-xl border bg-card p-5">
                  <span className="font-mono text-xs text-primary">
                    0{index + 1}
                  </span>
                  <strong>{state}</strong>
                </div>
              </CarouselItem>
            ),
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

const chartData = [
  { month: "May", references: 28 },
  { month: "Jun", references: 41 },
  { month: "Jul", references: 52 },
  { month: "Aug", references: 63 },
];

const chartConfig = {
  references: { label: "Documented references", color: "var(--primary)" },
} satisfies ChartConfig;

function ChartSpecimen() {
  return (
    <div className="specimen-stage flex-col gap-4">
      <ChartContainer
        aria-label="Documented component references by month"
        className="h-56 w-full max-w-2xl"
        config={chartConfig}
        role="img"
      >
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis axisLine={false} dataKey="month" tickLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
          <Bar dataKey="references" fill="var(--color-references)" radius={6} />
        </BarChart>
      </ChartContainer>
      <div className="w-full max-w-2xl rounded-lg bg-muted/50 p-3 text-sm">
        <strong>Text summary:</strong> coverage grew from 28 references in May
        to 63 in August.
      </div>
    </div>
  );
}

type CoverageRow = { component: string; family: string; status: string };

const coverageColumns: DataTableColumn<CoverageRow>[] = [
  { id: "component", header: "Component", cell: (row) => row.component },
  { id: "family", header: "Family", cell: (row) => row.family },
  { id: "status", header: "Status", cell: (row) => row.status },
];

const coverageRows: CoverageRow[] = [
  { component: "Button", family: "Actions", status: "Ready" },
  { component: "Calendar", family: "Forms", status: "Ready" },
  { component: "Message", family: "Conversation", status: "Review" },
];

function DataTableSpecimen() {
  const [descending, setDescending] = React.useState(false);
  const rows = descending ? [...coverageRows].reverse() : coverageRows;
  return (
    <div className="specimen-stage flex-col items-stretch gap-3">
      <Button
        aria-label="Sort component names"
        className="w-fit"
        onClick={() => setDescending((value) => !value)}
        size="sm"
        variant="outline"
      >
        <ArrowUpDownIcon /> {descending ? "Descending" : "Ascending"}
      </Button>
      <DataTable
        columns={coverageColumns}
        data={rows}
        emptyMessage="No components match this filter."
        label="Component coverage"
      />
    </div>
  );
}

function ItemSpecimen() {
  return (
    <div className="specimen-stage">
      <div className="w-full max-w-lg rounded-xl border bg-card p-2">
        <Item>
          <ItemMedia variant="icon">
            <FileTextIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>DESIGN.md</ItemTitle>
            <ItemDescription>
              Updated 4 minutes ago · 63 components
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="sm" variant="outline">
              Open
            </Button>
          </ItemActions>
        </Item>
      </div>
    </div>
  );
}

function KbdSpecimen() {
  return (
    <div className="specimen-stage flex-col gap-4">
      <span className="text-sm text-muted-foreground">
        Open component search
      </span>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <span>+</span>
        <Kbd>K</Kbd>
      </KbdGroup>
    </div>
  );
}

function ResizableSpecimen() {
  return (
    <div className="specimen-stage">
      <ResizablePanelGroup
        className="h-64 max-w-2xl overflow-hidden rounded-xl border"
        orientation="horizontal"
      >
        <ResizablePanel defaultSize={35} minSize={20}>
          <div className="grid h-full place-items-center bg-muted/40 text-sm">
            Navigation
          </div>
        </ResizablePanel>
        <ResizableHandle
          aria-label="Resize navigation and content"
          withHandle
        />
        <ResizablePanel defaultSize={65} minSize={35}>
          <div className="grid h-full place-items-center bg-card text-sm">
            Content
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

function ScrollAreaSpecimen() {
  return (
    <div className="specimen-stage">
      <ScrollArea className="h-56 w-full max-w-md rounded-xl border bg-card p-4">
        <div className="space-y-5 pr-4">
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index}>
              <strong className="text-sm">Reference {index + 1}</strong>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A compact summary remains reachable by wheel, touch, and
                keyboard.
              </p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

function SeparatorSpecimen() {
  return (
    <div className="specimen-stage">
      <div className="w-full max-w-lg rounded-xl border bg-card p-5">
        <strong>Foundation</strong>
        <p className="mt-2 text-sm text-muted-foreground">
          Color and typography
        </p>
        <Separator className="my-5" />
        <div className="flex h-5 items-center gap-4 text-sm">
          <span>Light</span>
          <Separator orientation="vertical" />
          <span>Dark</span>
          <Separator orientation="vertical" />
          <span>System</span>
        </div>
      </div>
    </div>
  );
}

function TableSpecimen() {
  return (
    <div className="specimen-stage items-stretch">
      <div className="overflow-x-auto rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Token</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["primary", "Action", "#0066CC"],
              ["canvas", "Background", "#F7F8FA"],
              ["radius-lg", "Container", "10 px"],
            ].map(([token, role, value]) => (
              <TableRow key={token}>
                <TableCell className="font-mono text-xs">{token}</TableCell>
                <TableCell>{role}</TableCell>
                <TableCell className="text-right font-mono text-xs">
                  {value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function TypographySpecimen() {
  return (
    <div className="specimen-stage items-stretch">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-5">
        <TypographyH2>Typography makes intent visible</TypographyH2>
        <TypographyLead>
          A compact hierarchy keeps product language readable and predictable.
        </TypographyLead>
        <TypographyP>
          Use <TypographyInlineCode>semantic roles</TypographyInlineCode> before
          introducing one-off sizes or weights.
        </TypographyP>
        <TypographyBlockquote>
          Clear writing and clear hierarchy reinforce each other.
        </TypographyBlockquote>
        <TypographyMuted>
          Geist Variable · sentence case · keep-all
        </TypographyMuted>
      </div>
    </div>
  );
}

export const dataLayoutSpecimens = {
  "aspect-ratio": AspectRatioSpecimen,
  avatar: AvatarSpecimen,
  card: CardSpecimen,
  carousel: CarouselSpecimen,
  chart: ChartSpecimen,
  "data-table": DataTableSpecimen,
  item: ItemSpecimen,
  kbd: KbdSpecimen,
  resizable: ResizableSpecimen,
  "scroll-area": ScrollAreaSpecimen,
  separator: SeparatorSpecimen,
  table: TableSpecimen,
  typography: TypographySpecimen,
} satisfies Record<string, React.ComponentType<SpecimenProps>>;
