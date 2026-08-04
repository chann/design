import * as React from "react";
import {
  BellIcon,
  BoldIcon,
  CheckIcon,
  InfoIcon,
  ItalicIcon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react";

import type { SpecimenProps } from "@/components/specimens/specimen-registry";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { ToastProvider, toast } from "@/components/ui/toast";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function AccordionSpecimen() {
  return (
    <div className="specimen-stage">
      <Accordion className="w-full max-w-xl" collapsible type="single">
        <AccordionItem value="behavior">
          <AccordionTrigger>Interaction behavior</AccordionTrigger>
          <AccordionContent>
            Preserve focus and disclose one concise answer at a time.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="accessibility">
          <AccordionTrigger>Accessibility contract</AccordionTrigger>
          <AccordionContent>
            Enter or Space toggles the focused heading; content remains in
            reading order.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function AlertSpecimen() {
  return (
    <div className="specimen-stage flex-col gap-3">
      <Alert className="max-w-xl">
        <InfoIcon />
        <AlertTitle>Reference updated</AlertTitle>
        <AlertDescription>
          The new interaction states are ready to review.
        </AlertDescription>
      </Alert>
      <Alert className="max-w-xl" variant="destructive">
        <Trash2Icon />
        <AlertTitle>Publication blocked</AlertTitle>
        <AlertDescription>
          Resolve the two missing accessibility checks before publishing.
        </AlertDescription>
      </Alert>
    </div>
  );
}

function AlertDialogSpecimen() {
  return (
    <div className="specimen-stage">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete draft</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this draft?</AlertDialogTitle>
            <AlertDialogDescription>
              This removes the local draft and cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep draft</AlertDialogCancel>
            <AlertDialogAction variant="destructive">
              Delete draft
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

function BadgeSpecimen() {
  return (
    <div className="specimen-stage flex-wrap gap-3">
      <Badge>Stable</Badge>
      <Badge variant="secondary">Draft</Badge>
      <Badge variant="outline">Experimental</Badge>
      <Badge variant="destructive">Blocked</Badge>
    </div>
  );
}

function ButtonSpecimen() {
  const [saving, setSaving] = React.useState(false);
  return (
    <div className="specimen-stage flex-wrap gap-3">
      <Button
        disabled={saving}
        onClick={() => {
          setSaving(true);
          window.setTimeout(() => setSaving(false), 900);
        }}
      >
        {saving ? <Spinner /> : <CheckIcon />}
        {saving ? "Saving…" : "Save changes"}
      </Button>
      <Button variant="secondary">Preview</Button>
      <Button variant="outline">Duplicate</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  );
}

function ButtonGroupSpecimen() {
  return (
    <div className="specimen-stage">
      <ButtonGroup aria-label="Document view">
        <Button variant="outline">Preview</Button>
        <Button variant="outline">View code</Button>
        <Button aria-label="Add view" size="icon" variant="outline">
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
}

function CollapsibleSpecimen() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="specimen-stage">
      <Collapsible
        className="w-full max-w-md rounded-xl border bg-card p-4"
        onOpenChange={setOpen}
        open={open}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <strong className="text-sm">Advanced options</strong>
            <p className="text-xs text-muted-foreground">
              {open ? "Expanded" : "Collapsed"}
            </p>
          </div>
          <CollapsibleTrigger asChild>
            <Button size="sm" variant="outline">
              {open ? "Hide" : "Show"}
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="pt-4 text-sm leading-6 text-muted-foreground">
          Keep rare settings discoverable without crowding the primary task.
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

function EmptySpecimen() {
  return (
    <div className="specimen-stage">
      <Empty className="max-w-lg border border-dashed">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <BellIcon />
          </EmptyMedia>
          <EmptyTitle>No notifications yet</EmptyTitle>
          <EmptyDescription>
            Completed reviews and publication results will appear here.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm" variant="outline">
            Review settings
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  );
}

function ProgressSpecimen() {
  const [progress, setProgress] = React.useState(42);
  return (
    <div className="specimen-stage flex-col gap-4">
      <div className="flex w-full max-w-lg items-center justify-between text-sm">
        <span>Catalog review</span>
        <span className="font-mono text-xs text-muted-foreground">
          {progress}%
        </span>
      </div>
      <Progress
        aria-label="Catalog review progress"
        className="max-w-lg"
        value={progress}
      />
      <Button
        onClick={() => setProgress((value) => (value >= 100 ? 16 : value + 21))}
        size="sm"
        variant="outline"
      >
        Advance progress
      </Button>
    </div>
  );
}

function SkeletonSpecimen() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading profile"
      className="specimen-stage"
    >
      <div className="flex w-full max-w-md items-center gap-4">
        <Skeleton className="size-12 rounded-full" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-4 w-2/5" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </div>
    </div>
  );
}

function SpinnerSpecimen() {
  return (
    <div className="specimen-stage flex-col gap-3" role="status">
      <Spinner className="size-6 text-primary" />
      <span className="text-sm text-muted-foreground">
        Checking references…
      </span>
    </div>
  );
}

function ToastSpecimen() {
  return (
    <div className="specimen-stage flex-wrap gap-3">
      <ToastProvider />
      <Button onClick={() => toast.success("Reference saved")}>
        Success toast
      </Button>
      <Button
        onClick={() =>
          toast.error("Couldn’t publish", {
            description: "Resolve the missing keyboard state and try again.",
          })
        }
        variant="outline"
      >
        Error toast
      </Button>
    </div>
  );
}

function ToggleSpecimen() {
  return (
    <div className="specimen-stage gap-3">
      <Toggle aria-label="Toggle bold" defaultPressed>
        <BoldIcon /> Bold
      </Toggle>
      <Toggle aria-label="Toggle italic" variant="outline">
        <ItalicIcon /> Italic
      </Toggle>
    </div>
  );
}

function ToggleGroupSpecimen() {
  return (
    <div className="specimen-stage">
      <ToggleGroup
        aria-label="Text alignment"
        defaultValue="left"
        type="single"
        variant="outline"
      >
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
        <ToggleGroupItem value="center">Center</ToggleGroupItem>
        <ToggleGroupItem value="right">Right</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

function TooltipSpecimen() {
  return (
    <div className="specimen-stage">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button aria-label="Notifications" size="icon" variant="outline">
              <BellIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Notifications</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export const actionFeedbackSpecimens = {
  accordion: AccordionSpecimen,
  alert: AlertSpecimen,
  "alert-dialog": AlertDialogSpecimen,
  badge: BadgeSpecimen,
  button: ButtonSpecimen,
  "button-group": ButtonGroupSpecimen,
  collapsible: CollapsibleSpecimen,
  empty: EmptySpecimen,
  progress: ProgressSpecimen,
  skeleton: SkeletonSpecimen,
  spinner: SpinnerSpecimen,
  toast: ToastSpecimen,
  toggle: ToggleSpecimen,
  "toggle-group": ToggleGroupSpecimen,
  tooltip: TooltipSpecimen,
} satisfies Record<string, React.ComponentType<SpecimenProps>>;
