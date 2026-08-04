import type { ComponentType } from "react";
import {
  AccessibilityIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  CircleIcon,
  ContrastIcon,
  FocusIcon,
  LanguagesIcon,
  MousePointer2Icon,
  SparklesIcon,
  SquareIcon,
  TypeIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const specimenClass =
  "foundation-specimen min-h-72 overflow-hidden rounded-2xl border bg-card p-5 sm:p-8";

function DesignTokenSpecimen() {
  return (
    <div className={cn(specimenClass, "grid place-items-center")}>
      <div className="grid w-full max-w-3xl items-center gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
        <div className="rounded-xl border bg-muted p-4">
          <span className="font-mono text-xs text-muted-foreground">alias</span>
          <strong className="mt-8 block font-mono text-sm">
            $color.bg.brand
          </strong>
        </div>
        <ArrowRightIcon className="mx-auto size-4 rotate-90 text-primary md:rotate-0" />
        <div className="rounded-xl border border-primary/40 bg-primary/10 p-4">
          <span className="font-mono text-xs text-primary">semantic role</span>
          <strong className="mt-8 block text-sm">Primary surface</strong>
        </div>
        <ArrowRightIcon className="mx-auto size-4 rotate-90 text-primary md:rotate-0" />
        <div className="grid grid-cols-2 overflow-hidden rounded-xl border">
          <span className="flex min-h-24 items-end bg-[#0066cc] p-3 text-xs font-semibold text-white">
            Light
          </span>
          <span className="flex min-h-24 items-end bg-[#78b7ff] p-3 text-xs font-semibold text-[#0a243d]">
            Dark
          </span>
        </div>
      </div>
    </div>
  );
}

function ColorSpecimen() {
  const colors = [
    ["Canvas", "bg-background", "text-foreground"],
    ["Surface", "bg-card", "text-card-foreground"],
    ["Action", "bg-primary", "text-primary-foreground"],
    ["Critical", "bg-destructive", "text-white dark:text-background"],
  ];
  return (
    <div className={cn(specimenClass, "grid grid-cols-2 gap-3 sm:grid-cols-4")}>
      {colors.map(([name, background, foreground]) => (
        <div
          className={cn(
            "flex min-h-52 flex-col justify-end rounded-xl border p-4",
            background,
            foreground,
          )}
          key={name}
        >
          <strong className="text-sm">{name}</strong>
          <span className="mt-1 text-xs opacity-75">semantic role</span>
        </div>
      ))}
    </div>
  );
}

function TypographySpecimen() {
  return (
    <div className={cn(specimenClass, "flex flex-col justify-center gap-6")}>
      <p className="text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
        Clear by default.
      </p>
      <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
        A small, deliberate hierarchy gives product language room to stay useful
        at every density.
      </p>
      <div className="flex flex-wrap gap-4 font-mono text-xs text-muted-foreground">
        <span>Display / 64</span>
        <span>Body / 16</span>
        <span>Metadata / 12</span>
      </div>
    </div>
  );
}

function IconographySpecimen() {
  const icons = [
    ArrowRightIcon,
    CheckIcon,
    CircleIcon,
    FocusIcon,
    SquareIcon,
    TypeIcon,
  ];
  return (
    <div className={cn(specimenClass, "grid place-items-center")}>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
        {icons.map((Icon, index) => (
          <div
            className="grid size-16 place-items-center rounded-xl border bg-muted/40 text-primary sm:size-20"
            key={index}
          >
            <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ElevationSpecimen() {
  return (
    <div className={cn(specimenClass, "grid place-items-center bg-muted/35")}>
      <div className="relative h-52 w-full max-w-xl">
        {[0, 1, 2].map((level) => (
          <div
            className={cn(
              "absolute flex h-28 w-[72%] items-end rounded-2xl border bg-card p-4",
              level === 0 && "left-0 top-0 shadow-sm",
              level === 1 && "left-[14%] top-10 shadow-lg",
              level === 2 && "left-[28%] top-20 shadow-2xl",
            )}
            key={level}
          >
            <span className="font-mono text-xs text-muted-foreground">
              elevation / 0{level + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GradientSpecimen() {
  return (
    <div className={cn(specimenClass, "flex flex-col justify-center gap-6")}>
      <div
        aria-label="Data scale from zero to one hundred"
        className="foundation-data-gradient h-32 rounded-xl border"
        role="img"
      />
      <div className="grid grid-cols-5 font-mono text-xs text-muted-foreground">
        {[0, 25, 50, 75, 100].map((value) => (
          <span className="last:text-right" key={value}>
            {value}
          </span>
        ))}
      </div>
      <p className="text-sm leading-6 text-muted-foreground">
        A bounded ramp communicates magnitude. It does not replace labels or
        become a decorative page wash.
      </p>
    </div>
  );
}

function InclusiveDesignSpecimen() {
  return (
    <div className={cn(specimenClass, "grid gap-4 sm:grid-cols-3")}>
      {[
        [FocusIcon, "Visible focus", "Keyboard position remains obvious."],
        [ContrastIcon, "Strong contrast", "Meaning survives different vision."],
        [
          AccessibilityIcon,
          "Forgiving target",
          "Actions stay reachable at 44 px.",
        ],
      ].map(([Icon, title, description]) => {
        const ItemIcon = Icon as typeof FocusIcon;
        return (
          <div
            className="flex flex-col justify-between rounded-xl border bg-muted/35 p-5"
            key={title as string}
          >
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-2 ring-primary ring-offset-2 ring-offset-card">
              <ItemIcon aria-hidden="true" className="size-5" />
            </span>
            <div className="mt-12">
              <strong className="text-sm">{title as string}</strong>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {description as string}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function InternationalDesignSpecimen() {
  return (
    <div className={cn(specimenClass, "grid gap-4 lg:grid-cols-2")}>
      <div className="flex flex-col justify-between rounded-xl border p-5">
        <div className="flex items-center gap-2 text-sm font-medium">
          <LanguagesIcon className="size-4 text-primary" /> Text expansion
        </div>
        <div className="mt-10 flex flex-col items-start gap-3">
          <span className="rounded-lg bg-muted px-3 py-2 text-sm">
            Save changes
          </span>
          <span className="min-w-[130%] rounded-lg bg-primary/10 px-3 py-2 text-sm text-primary">
            Änderungen speichern
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            Reserve +30% inline space
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-xl border p-5">
        <span className="text-sm font-medium">Logical direction</span>
        <div className="mt-10 flex flex-col gap-3">
          <div className="flex items-center justify-between rounded-lg bg-muted p-3 text-sm">
            <ArrowLeftIcon className="size-4" /> Previous
            <ArrowRightIcon className="size-4" />
          </div>
          <div
            className="flex items-center justify-between rounded-lg bg-muted p-3 text-sm"
            dir="rtl"
          >
            <ArrowLeftIcon className="size-4" /> السابق
            <ArrowRightIcon className="size-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

function LayoutSpecimen() {
  return (
    <div className={cn(specimenClass, "relative grid grid-cols-12 gap-2")}>
      {Array.from({ length: 12 }, (_, index) => (
        <span className="rounded-md bg-primary/8" key={index} />
      ))}
      <div className="absolute inset-x-8 top-8 col-span-12 rounded-xl border bg-card/95 p-4 shadow-sm">
        <span className="font-mono text-xs text-primary">12 columns</span>
      </div>
      <div className="absolute bottom-8 left-8 top-24 w-[24%] rounded-xl bg-primary/15 p-4 text-xs">
        Rail
      </div>
      <div className="absolute bottom-8 left-[31%] right-8 top-24 rounded-xl bg-muted p-4 text-xs">
        Reading flow
      </div>
    </div>
  );
}

function MotionSpecimen() {
  return (
    <div className={cn(specimenClass, "grid place-items-center")}>
      <div className="w-full max-w-2xl">
        <div
          className="foundation-motion-track"
          aria-label="Motion timing example"
        >
          <span className="foundation-motion-dot" />
        </div>
        <div className="mt-5 flex justify-between font-mono text-xs text-muted-foreground">
          <span>origin</span>
          <span>160 ms</span>
          <span>resolved</span>
        </div>
      </div>
    </div>
  );
}

function RadiusSpecimen() {
  return (
    <div className={cn(specimenClass, "grid grid-cols-2 gap-4 sm:grid-cols-4")}>
      {["rounded-sm", "rounded-lg", "rounded-2xl", "rounded-full"].map(
        (radius, index) => (
          <div
            className={cn(
              "flex aspect-square items-end border bg-primary/10 p-4 text-xs font-medium text-primary",
              radius,
            )}
            key={radius}
          >
            {index === 3 ? "full" : ["sm", "lg", "2xl"][index]}
          </div>
        ),
      )}
    </div>
  );
}

function SpacingSpecimen() {
  return (
    <div className={cn(specimenClass, "flex flex-col justify-center gap-4")}>
      {[4, 8, 12, 16, 24, 32].map((space) => (
        <div
          className="grid grid-cols-[3rem_1fr] items-center gap-4"
          key={space}
        >
          <span className="font-mono text-xs text-muted-foreground">
            {space}
          </span>
          <span
            className="h-3 rounded-full bg-primary"
            style={{ width: `${Math.max(8, space * 2.5)}%` }}
          />
        </div>
      ))}
    </div>
  );
}

function StateSpecimen() {
  return (
    <div className={cn(specimenClass, "grid place-items-center")}>
      <div className="grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["Default", "border bg-card"],
          ["Hover", "border-primary/50 bg-primary/5"],
          ["Pressed", "border-primary bg-primary text-primary-foreground"],
          ["Disabled", "border bg-muted opacity-45"],
        ].map(([state, style]) => (
          <div
            className={cn(
              "flex min-h-32 flex-col justify-between rounded-xl border p-4",
              style,
            )}
            key={state}
          >
            <MousePointer2Icon className="size-5" />
            <strong className="text-sm">{state}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function VoiceToneSpecimen() {
  return (
    <div className={cn(specimenClass, "grid gap-4 lg:grid-cols-2")}>
      <div className="flex flex-col justify-between rounded-xl border bg-muted/30 p-5">
        <Badge className="w-fit" variant="secondary">
          Unclear
        </Badge>
        <div className="mt-12">
          <strong>Something went wrong.</strong>
          <p className="mt-2 text-sm text-muted-foreground">
            Please try again.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-xl border border-primary/35 bg-primary/5 p-5">
        <Badge className="w-fit">Comfort voice</Badge>
        <div className="mt-12">
          <strong>We couldn’t save this draft.</strong>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Your changes are still here. Check the connection, then save again.
          </p>
        </div>
      </div>
    </div>
  );
}

function WritingSpecimen() {
  return (
    <div className={cn(specimenClass, "grid place-items-center")}>
      <div className="w-full max-w-2xl rounded-xl border bg-muted/25 p-5 sm:p-7">
        <div className="flex items-center justify-between gap-4 border-b pb-4">
          <span className="text-sm font-medium">Publish the release note</span>
          <SparklesIcon className="size-4 text-primary" />
        </div>
        <div className="mt-5 space-y-3 text-sm leading-6">
          <p className="text-muted-foreground line-through decoration-destructive">
            Click here in order to start publishing.
          </p>
          <p className="font-medium">Publish the note when it is ready.</p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="outline">Verb first</Badge>
            <Badge variant="outline">Sentence case</Badge>
            <Badge variant="outline">Name the result</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export type FoundationSpecimenKey =
  | "design-token"
  | "color"
  | "typography"
  | "iconography"
  | "elevation"
  | "gradient"
  | "inclusive-design"
  | "international-design"
  | "layout"
  | "motion"
  | "radius"
  | "spacing"
  | "state"
  | "voice-and-tone"
  | "writing";

export const foundationSpecimens: Record<FoundationSpecimenKey, ComponentType> =
  {
    "design-token": DesignTokenSpecimen,
    color: ColorSpecimen,
    typography: TypographySpecimen,
    iconography: IconographySpecimen,
    elevation: ElevationSpecimen,
    gradient: GradientSpecimen,
    "inclusive-design": InclusiveDesignSpecimen,
    "international-design": InternationalDesignSpecimen,
    layout: LayoutSpecimen,
    motion: MotionSpecimen,
    radius: RadiusSpecimen,
    spacing: SpacingSpecimen,
    state: StateSpecimen,
    "voice-and-tone": VoiceToneSpecimen,
    writing: WritingSpecimen,
  };
