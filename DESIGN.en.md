---
version: alpha
name: Comfort DESIGN.md
description: A shadcn/ui-first interface guide shaped with warm neutral color, restrained blue actions, Geist type, open spacing, and natural motion.

colors:
  primary: "#0066CC"
  primary-strong: "#004F9E"
  on-primary: "#FFFFFF"
  ink: "#171714"
  body: "#46463F"
  muted: "#6F7068"
  canvas: "#F7F7F2"
  surface: "#FFFFFF"
  surface-soft: "#EFEFE9"
  surface-raised: "#FFFFFF"
  hairline: "#D8D8D0"
  destructive: "#B42318"
  on-destructive: "#FFFFFF"
  success: "#137333"
  warning: "#8A4B00"
  info: "#005EA8"
  dark-canvas: "#131209"
  dark-surface: "#1C1B16"
  dark-surface-soft: "#24231D"
  dark-surface-raised: "#2B2922"
  dark-ink: "#F4F4EF"
  dark-body: "#B8B6AC"
  dark-muted: "#8E8C82"
  dark-hairline: "#3B3931"
  dark-primary: "#78B7FF"
  dark-on-primary: "#0A243D"

typography:
  display:
    fontFamily: "Geist Variable, Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 72px
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: -0.045em
  headline-lg:
    fontFamily: "Geist Variable, Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 52px
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: -0.035em
  headline-md:
    fontFamily: "Geist Variable, Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 32px
    fontWeight: 680
    lineHeight: 1.12
    letterSpacing: -0.022em
  title-lg:
    fontFamily: "Geist Variable, Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 24px
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: -0.015em
  title-md:
    fontFamily: "Geist Variable, Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 20px
    fontWeight: 620
    lineHeight: 1.3
    letterSpacing: -0.01em
  body-lg:
    fontFamily: "Geist Variable, Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-md:
    fontFamily: "Geist Variable, Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Geist Variable, Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.005em
  label:
    fontFamily: "Geist Variable, Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.005em
  caption:
    fontFamily: "Geist Variable, Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.01em
  code:
    fontFamily: "Geist Mono, SFMono-Regular, Cascadia Code, Consolas, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0

rounded:
  none: 0px
  sm: 6px
  md: 10px
  lg: 14px
  xl: 20px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px
  page-gutter: 24px

components:
  app-shell:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
  top-nav:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: 8px 12px
    height: 48px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 44px
  button-primary-pressed:
    backgroundColor: "{colors.primary-strong}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 44px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 44px
  button-destructive:
    backgroundColor: "{colors.destructive}"
    textColor: "{colors.on-destructive}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 44px
  button-icon:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 44px
  text-link:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-muted:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-raised:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 24px
  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 10px 12px
    height: 44px
  caption:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
  separator:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    height: 1px
  status-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: 6px 10px
  status-warning:
    backgroundColor: "{colors.warning}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: 6px 10px
  status-info:
    backgroundColor: "{colors.info}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: 6px 10px
  dialog:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 24px
  skeleton:
    backgroundColor: "{colors.surface-soft}"
    rounded: "{rounded.md}"
    height: 16px
  dark-app-shell:
    backgroundColor: "{colors.dark-canvas}"
    textColor: "{colors.dark-ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
  dark-card:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.dark-body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  dark-card-muted:
    backgroundColor: "{colors.dark-surface-soft}"
    textColor: "{colors.dark-muted}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  dark-card-raised:
    backgroundColor: "{colors.dark-surface-raised}"
    textColor: "{colors.dark-ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 24px
  dark-button-primary:
    backgroundColor: "{colors.dark-primary}"
    textColor: "{colors.dark-on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 44px
  dark-button-secondary:
    backgroundColor: "{colors.dark-surface-raised}"
    textColor: "{colors.dark-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 44px
  dark-separator:
    backgroundColor: "{colors.dark-hairline}"
    rounded: "{rounded.none}"
    height: 1px
---

<!-- markdownlint-disable MD013 -->

# Comfort DESIGN.md

> **Status:** Product theme guide · **DESIGN.md schema:** `alpha`
>
> Update Korean [DESIGN.md](./DESIGN.md) first. When its implementation guidance
> changes, the [English](./DESIGN.en.md),
> [日本語](./DESIGN.jp.md), and [简体中文](./DESIGN.cn.md) editions are updated with
> the same structure and meaning.

The YAML front matter is the machine-readable token list. The prose explains how
to apply those values. When the two disagree, use tokens for exact values and the
prose for intent, hierarchy, and behavior.

The key words **MUST**, **SHOULD**, and **MAY** express requirement strength.

## Overview

Comfort DESIGN.md covers product interfaces that require focus: dashboards,
creation tools, settings, commerce, and operational workflows. Warm neutral
color, restrained blue actions, Geist type, open spacing, and understandable
motion give those interfaces a calm character of their own.

Start with shadcn/ui components. Keep their accessible, familiar behavior, then
use `DESIGN.md` to shape color, type, spacing, states, motion, and content around
the product. Review the result in real screens and generated static pages.

The reference site covers 15 Foundations, 63 components across eight families,
and 336 static routes. Every detail route follows the same sequence: real
specimen, segmented Preview and View code control, usage, anatomy, states,
accessibility, internationalization, and implementation guidance.

The intended experience has three qualities:

| Quality         | User perception                               | How it appears in the interface                                                                            |
| --------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Comfort**     | “I can focus on the task.”                    | One clear primary action, restrained color, progressive disclosure, stable layout.                         |
| **Direct**      | “The interface follows me.”                   | Feedback begins on press, drag tracks 1:1, motion is interruptible and reversible.                         |
| **Trustworthy** | “I understand what happened and can recover.” | Explicit state, inline validation, safe retry, undo where possible, specific confirmation where necessary. |

When these qualities conflict, protect trust first, then directness, then visual
calm. Safety and accessibility always outrank decoration.

**Signature characteristics:**

- Soft off-white `{colors.canvas}` surrounds crisp `{colors.surface}` content.
- `{colors.primary}` marks actions, focus, links, and selection—not decoration.
- Large type is compact and confident; body type remains open and readable.
- Corners are gently rounded, with pills reserved for status and compact filters.
- Depth comes from surface contrast, hairlines, and restrained shadows.
- Motion preserves cause, direction, and spatial continuity.
- Every component anticipates keyboard, touch, long content, localization, and
  light/dark themes.

This system is inspired by the discipline of high-quality native interfaces; it
does not reproduce any platform or company interface.

## Colors

### Core roles

- **Primary** (`{colors.primary}` — #0066CC): The only general interaction accent.
  Use for the primary action, links, focus rings, active navigation, and selected
  states.
- **Primary Strong** (`{colors.primary-strong}` — #004F9E): Pressed or emphasized
  primary state. It MUST NOT become a second accent family.
- **Canvas** (`{colors.canvas}` — #F7F7F2): Warm off-white page floor.
- **Surface** (`{colors.surface}` — #FFFFFF): Cards, controls, and principal
  content regions.
- **Surface Soft** (`{colors.surface-soft}` — #EFEFE9): Grouped controls, quiet
  bands, skeletons, and secondary containment.
- **Surface Raised** (`{colors.surface-raised}` — #FFFFFF): Floating content that
  also receives an elevation treatment.

### Content and structure

- **Ink** (`{colors.ink}` — #171714): Headlines and primary content.
- **Body** (`{colors.body}` — #46463F): Running copy and secondary content.
- **Muted** (`{colors.muted}` — #6F7068): Captions and metadata; never the sole
  carrier of essential information.
- **Hairline** (`{colors.hairline}` — #D8D8D0): Dividers, field outlines, and
  quiet boundaries.

### Semantic roles

- **Destructive** (`{colors.destructive}` — #B42318): Irreversible or
  high-consequence actions and errors—not generic emphasis.
- **Success** (`{colors.success}` — #137333): Confirmed completion.
- **Warning** (`{colors.warning}` — #8A4B00): A consequence that can still be
  avoided.
- **Info** (`{colors.info}` — #005EA8): Neutral system information when the
  primary action color would imply interactivity.

Status MUST use an icon, label, or pattern in addition to color.

### Dark theme

Dark mode is a tonal remapping, not a simple inversion:

- `{colors.dark-canvas}` is the page floor.
- `{colors.dark-surface}` and `{colors.dark-surface-raised}` create containment.
- `{colors.dark-ink}` and `{colors.dark-body}` preserve readable hierarchy.
- `{colors.dark-primary}` keeps actions recognizable without glowing.

Theme changes MUST preserve semantic roles, contrast, and component hierarchy.
Never hardcode a light-theme color inside a component.

## Typography

Geist Variable is the primary face for headings, body text, and controls. Geist
Mono is reserved for code, tokens, numbers, and short technical labels. If the
web fonts do not load, each stack falls back to the platform's sans-serif or
monospace face.

| Token                      | Size | Weight | Line height | Tracking | Role                               |
| -------------------------- | ---- | ------ | ----------- | -------- | ---------------------------------- |
| `{typography.display}`     | 72px | 700    | 0.98        | -0.045em | Hero or singular product statement |
| `{typography.headline-lg}` | 52px | 700    | 1.02        | -0.035em | Page title                         |
| `{typography.headline-md}` | 32px | 680    | 1.12        | -0.022em | Major section                      |
| `{typography.title-lg}`    | 24px | 650    | 1.25        | -0.015em | Panel or feature title             |
| `{typography.title-md}`    | 20px | 620    | 1.3         | -0.01em  | Card or dialog title               |
| `{typography.body-lg}`     | 18px | 400    | 1.6         | 0        | Lead copy                          |
| `{typography.body-md}`     | 16px | 400    | 1.6         | 0        | Default body and controls          |
| `{typography.body-sm}`     | 14px | 400    | 1.5         | 0.005em  | Secondary UI copy                  |
| `{typography.label}`       | 14px | 600    | 1.3         | 0.005em  | Buttons, tabs, and field labels    |
| `{typography.caption}`     | 12px | 500    | 1.4         | 0.01em   | Metadata and compact status        |
| `{typography.code}`        | 14px | 400    | 1.55        | 0        | Code, commands, and machine values |

Rules:

- Every route MUST have one descriptive `h1`; heading levels follow document
  structure, not visual size.
- Display sizes SHOULD scale with `clamp()` while preserving the hierarchy and
  never dropping below a legible mobile size.
- Body copy SHOULD stay between 45 and 75 characters per line.
- Emphasis comes from weight before extra color or size.
- Use sentence case. Uppercase is reserved for short technical labels where the
  product voice requires it.
- Numeric comparisons SHOULD use tabular figures.
- CJK copy MAY require language-specific line breaking and additional leading;
  do not force Latin metrics onto translated text.

## Layout

### Spacing system

The base unit is 4px. Use the YAML scale rather than one-off values:

- `{spacing.xxs}` / `{spacing.xs}`: icon-label and compact control gaps.
- `{spacing.sm}` / `{spacing.md}`: control padding and related content.
- `{spacing.lg}` / `{spacing.xl}`: cards, groups, and page regions.
- `{spacing.xxl}` / `{spacing.section}`: major editorial separation.
- Major page sections use about 96px of vertical separation on wide screens.
- `{spacing.page-gutter}`: default page gutter; it may reduce to 16px on narrow
  screens and grow to 32px on wide screens.

### Grid and containment

- The application shell spans the viewport; principal content is centered at a
  maximum width of 1440px.
- Reading columns max out near 65 characters even when the surrounding workspace
  is wide.
- Use a 12-column grid for page structure and content-driven CSS Grid for local
  composition.
- Use Flexbox for one-dimensional alignment and `gap` for sibling rhythm.
- Container queries SHOULD govern reusable components; viewport breakpoints
  govern the shell.
- Dense workspaces MAY use the full width, but repeated actions and navigation
  remain in stable locations.

### Whitespace philosophy

Whitespace separates decisions and establishes hierarchy. It is not empty space
to be filled with gradients, badges, or decorative cards. Related items sit close;
unrelated regions receive a clear section gap. Progressive disclosure keeps the
common path visible and advanced controls one level deeper.

The documentation header remains a floating surface 24px from the viewport top
both initially and after scroll. Left and right documentation rails have no
vertical separators; whitespace alone distinguishes them from the reading
column. The footer keeps a compact System, Foundations, Resources, and Legal
sitemap. It links to the Components catalog once instead of repeating all 63
component detail links, then closes with a partially clipped,
intersection-driven `Comfort DESIGN.md` text signature. Reduced motion shows
its final state without travel.

No page-level horizontal scrolling is allowed from 320 CSS px upward. A data
region MAY scroll horizontally when its boundary and affordance are explicit.

## Elevation & Depth

Depth explains interaction and stacking:

| Level             | Treatment                                    | Use                                  |
| ----------------- | -------------------------------------------- | ------------------------------------ |
| **0 — Flat**      | Canvas or surface, no shadow                 | Page content, inset regions          |
| **1 — Contained** | Surface contrast plus hairline               | Cards, grouped controls, sticky bars |
| **2 — Floating**  | Raised surface plus soft short shadow        | Menus, popovers, non-modal panels    |
| **3 — Modal**     | Raised surface plus broader shadow and scrim | Dialogs and modal sheets             |

Suggested implementation values:

```css
--shadow-1: 0 1px 2px rgb(16 24 40 / 6%), 0 4px 12px rgb(16 24 40 / 4%);
--shadow-2: 0 8px 24px rgb(16 24 40 / 10%), 0 2px 8px rgb(16 24 40 / 6%);
--shadow-3: 0 20px 50px rgb(16 24 40 / 16%), 0 8px 18px rgb(16 24 40 / 8%);
```

- A shadow MUST correspond to a real stacking relationship.
- Nested surfaces SHOULD use tonal contrast before adding another shadow.
- Focus and selection MUST NOT be conveyed by elevation alone.
- Translucent navigation or overlays require an opaque fallback for reduced
  transparency, increased contrast, and unsupported browsers.
- Scrims block visual competition but never replace correct modal semantics,
  focus trapping, or background inertness.

## Shapes

The shape language is softly engineered: compact controls feel precise, while
larger containers have enough rounding to feel approachable.

| Token            | Value  | Use                                          |
| ---------------- | ------ | -------------------------------------------- |
| `{rounded.none}` | 0px    | Dividers, full-bleed regions, table seams    |
| `{rounded.sm}`   | 6px    | Tags, small controls, code fragments         |
| `{rounded.md}`   | 10px   | Buttons, inputs, menu items                  |
| `{rounded.lg}`   | 14px   | Cards and grouped panels                     |
| `{rounded.xl}`   | 20px   | Dialogs, sheets, prominent floating surfaces |
| `{rounded.full}` | 9999px | Circular icon buttons, status pills, avatars |

Rules:

- Nested surfaces use the same or a smaller radius than their parent.
- Pills are reserved for status, compact filters, and truly circular controls.
- Adjacent segmented controls share an outer silhouette instead of repeating
  separate rounded capsules.
- Media crops inherit the container radius; essential content stays inside the
  safe crop area.
- Shape never substitutes for a label, selected state, or accessible name.

## Foundations

The Foundation catalog borrows the legible information architecture of SEED
Foundations, then rewrites it for Comfort tokens and product contexts. Its 15
entries are **Design Token, Color, Typography, Iconography, Elevation, Gradient,
Inclusive Design, International Design, Layout, Motion, Radius, Spacing, State,
Voice and Tone, and Writing**.

- Every Foundation route includes intent, rules, reference values, a real visual
  specimen, accessibility checks, and related destinations.
- Color preserves light `#0066CC` and dark `#78B7FF` primary values without
  inventing a decorative secondary brand palette.
- International Design verifies long Korean, English, Japanese, and Chinese
  strings together with 30% text expansion, RTL, and locale-aware formatting.
- Motion compares base, fast, and slow timing and removes travel and decorative
  loops under reduced motion.
- State explains transitions from default through hover, active, focus-visible,
  disabled, loading, empty, and error without changing the underlying geometry.

`src/data/catalog.json` is the machine-readable route and inventory list; this
document explains how to select and apply Foundations. Counts
and titles MUST remain aligned.

## Components

The shadcn/ui components in `src/components/ui` are the only base UI layer.
Pages compose them without changing their semantic roles or accessible behavior.
`DESIGN.md` sets their color, type, spacing, shape, states, and motion.

For new interface work, first use an installed shadcn/ui component. Next, make a
page-level composition from existing pieces. Promote it to a shared component
only after the same composition serves more than one real screen.

The 63 components are maintained in eight families:

- **Actions (4):** Button, Button Group, Toggle, Toggle Group
- **Forms (15):** Calendar, Checkbox, Combobox, Date Picker, Field, Input,
  Input Group, Input OTP, Label, Native Select, Radio Group, Select, Slider,
  Switch, Textarea
- **Navigation (7):** Breadcrumb, Command, Menubar, Navigation Menu, Pagination,
  Sidebar, Tabs
- **Overlays (9):** Alert Dialog, Context Menu, Dialog, Drawer, Dropdown Menu,
  Hover Card, Popover, Sheet, Tooltip
- **Data display (10):** Avatar, Badge, Card, Carousel, Chart, Data Table, Item,
  Kbd, Table, Typography
- **Feedback (8):** Accordion, Alert, Collapsible, Empty, Progress, Skeleton,
  Spinner, Toast
- **Layout (5):** Aspect Ratio, Direction, Resizable, Scroll Area, Separator
- **Conversation (5):** Attachment, Bubble, Marker, Message, Message Scroller

Every route provides a real interactive specimen rather than a placeholder and
lazy-loads its family bundle. Preview and View code form one contiguous segmented
control, and the code panel exposes an in-context copy result.

### Navigation and shell

**`app-shell`** uses `{colors.canvas}` as a quiet floor. **`top-nav`** is 56px high,
keeps navigation destinations separate from contextual actions, and may become a
sidebar or sheet only when space pressure requires it. The current destination
has a visible and programmatic selected state.

### Buttons and links

- **`button-primary`**: one per task region. It names the outcome with a concrete
  verb and uses `{colors.primary}`.
- **`button-primary-pressed`**: immediate causal feedback; it MUST return to or
  continue from the current visual state without a discontinuity.
- **`button-secondary`**: lower-emphasis action with a surface fill and hairline.
- **`button-destructive`**: only for a destructive outcome; the label names the
  object and action.
- **`button-icon`**: 44px circular target with an accessible name and tooltip when
  the symbol is not universal.
- **`text-link`**: destination navigation inside prose. It remains recognizable
  without relying on color alone.

Buttons support default, hover, active, focus-visible, disabled, and loading
states. Loading retains the label or an equivalent accessible name. Disabled is
not a substitute for explaining an unavailable action.

### Cards and surfaces

**`card`** is the standard contained region. **`card-muted`** groups secondary
content without appearing interactive. **`card-raised`** is reserved for a true
floating layer. Do not wrap every paragraph or metric in a card; use hierarchy and
whitespace first.

A clickable card has one primary interactive target. Nested secondary actions
must remain separately reachable and must not create invalid nested controls.

### Inputs and forms

**`text-input`** is at least 44px high with a persistent label, visible
focus-visible treatment, and space for help or error text. Placeholder text is an
example, never the only label. Validation:

1. Preserves the user's input.
2. Places the error beside the field.
3. Adds a focused summary when multiple fields block submission.
4. Names the problem and a concrete fix.
5. Runs again at the server or trust boundary.

Password managers, paste, autocomplete, and locale-appropriate input modes MUST
work.

### Overlays and feedback

**`dialog`** uses `{rounded.xl}` and level-3 elevation. Dialogs trap focus, make
background content inert, close with `Escape` unless doing so would lose an
irreversible operation, and restore focus to the invoker.

Status components use compact pills only for short state labels. Persistent
errors and information needed to continue belong inline, not in a transient
toast. Toasts are reserved for brief confirmation whose result is otherwise out
of view.

### Dark variants

Dark variants are explicit YAML entries so agents do not guess theme mappings.
They preserve hierarchy rather than mirror raw light values. Components without a
documented dark variant inherit the equivalent semantic dark role before they are
considered complete.

## Do's and Don'ts

### Do

- Use semantic token references in components and implementation.
- Give each task region one obvious primary action.
- Let typography, spacing, and content hierarchy create emphasis before adding
  another color or container.
- Start feedback at the causal event and preserve spatial continuity.
- Support pointer, touch, keyboard, assistive technology, zoom, localization,
  reduced motion, and increased contrast from the start.
- Keep usable content visible during refresh and recoverable failure.
- Name destructive objects, consequences, and recovery paths.
- Verify the real browser or device behavior represented by the change.

### Don't

- Don't introduce raw reusable colors, radii, shadows, or spacing inside a
  component.
- Don't use primary blue as decoration or assign multiple primary actions to one
  region.
- Don't place every section inside a floating card.
- Don't make hover the only route to essential content or actions.
- Don't lock input merely because an animation is running.
- Don't show an empty state for an error, a skeleton for indefinite work, or
  “Done” before the server confirms the operation.
- Don't remove focus outlines without a stronger focus-visible replacement.
- Don't shrink touch targets, body type, or essential columns to make a layout fit.

## Responsive Behavior

Breakpoints represent content pressure rather than device brands:

| Range      | Typical adaptation                                                        |
| ---------- | ------------------------------------------------------------------------- |
| `< 40rem`  | One column, 16px gutter, compact labels, sheet-based secondary navigation |
| `40–48rem` | Two-column fields when labels remain readable                             |
| `48–64rem` | Persistent secondary navigation and denser toolbars                       |
| `64–80rem` | Multi-column content, full table controls, side panels                    |
| `80–90rem` | Wider workspace without stretching reading lines                          |
| `> 90rem`  | Centered 1440px content or an intentionally full-width work surface       |

- Start at 320 CSS px and add complexity only when content allows it.
- Controls maintain a minimum 44×44px target. Adjacent targets have enough
  separation to prevent accidental activation.
- Grids reduce columns instead of shrinking cards below readable widths.
- Tables preserve essential comparison data; low-priority columns may collapse
  into labeled details.
- Images declare dimensions, keep meaningful subjects inside safe crops, and use
  responsive sources.
- Layouts tolerate at least 30% text expansion, 200% text size, and 400% browser
  zoom without blocking core tasks.

## Interaction & Motion

Motion communicates cause and continuity. It never exists only to make the
interface feel “alive.”

- Press feedback begins within 100ms.
- Micro transitions usually complete in 120–180ms; standard state changes in
  180–240ms; larger spatial transitions in 240–360ms.
- Header language and theme utility dropdowns open in about 140–150ms and close
  in about 100ms. Travel stays at or below 4px and keyboard focus return is
  preserved.
- Ordinary sections enter over about 480ms using opacity and no more than 16px
  of vertical movement. Do not use blur.
- Dragged objects track the pointer 1:1 after any documented threshold and
  preserve the grab offset.
- Release behavior carries velocity into settling or target selection.
- Entry and exit use related origins and destinations.
- Every animation can be interrupted and reversed from its current rendered
  state. Input is never blocked solely to protect an animation.
- Animate `transform` and `opacity` on gesture-critical paths; measure before
  animating layout-heavy properties.
- `prefers-reduced-motion` removes travel, parallax, and decorative loops while
  preserving immediate state feedback and logical continuity.

Springs are appropriate for direct manipulation and spatial settling. Timed
easing is appropriate for opacity, color, and small non-spatial transitions. A
team MAY tune exact values, but one interaction family must share one motion
language.

## Accessibility & Responsible UX

WCAG 2.2 AA is the minimum target.

- Use native semantics first; add ARIA only where native HTML cannot express the
  behavior.
- Keyboard order follows visual and reading order. Focus is always visible and
  restored after overlays close or content is removed.
- Icon-only controls have names; dynamic status uses an appropriately polite live
  region.
- Text meets 4.5:1 contrast and large text 3:1. Non-text controls and focus
  indicators meet 3:1 against adjacent colors.
- Color is never the only status channel.
- All strings are externalized. Never concatenate translated sentence fragments.
- Dates, numbers, currency, plurals, and relative time use locale-aware formatters.
- Use logical properties so RTL does not require a parallel layout.
- Request the least permission at the moment it is needed and explain the purpose
  before the browser or operating-system prompt.
- Sensitive values never enter URLs, analytics, logs, or toast messages.
- Prefer undo for cheap reversible changes. Confirm irreversible, financial,
  legal, privacy-sensitive, or broad-permission actions with specific copy.
- AI-generated or uncertain output is labeled when users could mistake it for
  verified fact; high-impact output requires a review step.

## State & Feedback

Every data surface defines:

```text
idle → pending → success
             ↘ empty
             ↘ recoverable error → retrying
             ↘ terminal error

success → refreshing
success → stale or offline
```

- Initial pending has no usable data; refreshing keeps usable data visible.
- Skeletons match predictable final geometry. Spinners are for compact,
  indeterminate actions—not entire pages.
- Empty states explain what belongs there, why it is empty when known, and the
  most useful next action.
- Errors stay at the actionable scope and follow: outcome, safety of retained
  work, recovery action.
- Optimistic updates are allowed only when success is likely, rollback is
  deterministic, and pending state is visible.
- Retried mutations are idempotent or reconcile with the server before repeating.
- A toast undo remains available long enough to use and has a persistent
  alternative for consequential changes.

Shareable navigation state belongs in the URL. State confirmed by the server stays
on the server. Local interaction state stays local. A shared store is introduced
only after a real cross-tree lifetime requires it.

## Content & Localization

Update Korean `DESIGN.md` first. The en, jp, and cn editions preserve
the same heading order, tokens, inventory, and MUST, SHOULD, and MAY strength.
Translations preserve meaning while using natural syntax and punctuation for
each language.

- The homepage and every detail page use English `/` by default and support Korean
  `/ko/`, Japanese `/jp/`, and Chinese `/cn/`. Use the URL path for locale selection
  and overrides any stored preference.
- Complete homepage copy and metadata live in typed modules at
  `src/content/home/ko.ts`, `en.ts`, `jp.ts`, and `cn.ts`. Presentation components
  contain no direct prose, so copy-only changes touch only the matching content
  file.
- Site copy does not expose internal document-governance terminology. The
  language selector identifies the current and available editions with `KO`,
  `EN`, `JP`, and `CN`.
- Natural-language text defaults to `word-break: keep-all`. Code, commands,
  URLs, file paths, and tokens scroll or wrap safely inside their own regions.
- Labels prefer outcome-oriented verbs over vague nouns; placeholders never
  replace labels.
- Do not concatenate translatable sentence fragments. Use locale-aware formatters
  for dates, numbers, currencies, and plurals.
- Keep 30% text expansion, CJK line breaking, RTL logical properties, and 200%
  text size in the minimum localized regression set.

## Implementation Guide

The current reference implementation uses Vite 8.2, React 19.2, TypeScript 6 in
strict mode, Tailwind CSS 4.3, Radix UI and Base UI primitives, Lucide, TanStack
Table, Recharts, and Embla. It uses shadcn/ui as the baseline component source
and `DESIGN.md` as the product theme guide. These libraries are replaceable, but
visual, interaction, accessibility, and verification quality must not decline.

- Vite builds a static site under the `/design/` base and generates 336 route
  artifacts from the catalog manifest.
- Map YAML roles to CSS variables or theme tokens once. Components consume role
  tokens and MUST NOT duplicate raw values.
- Application primitives remain domain-free. Promote a composition to shared
  code only after multiple real consumers share behavior, not merely appearance.
- Overlays, menus, tabs, forms, and composite widgets start from tested semantic
  primitives instead of reimplementing keyboard behavior.
- Meaningful component changes cover relevant default, hover, active,
  focus-visible, disabled, loading, empty, error, light, dark, reduced-motion,
  contrast, long-content, and localized states.

## Verification

Completion requires `npm run verify:catalog`, `npm run lint`, `npm run check`,
and `npm run build` to pass. Catalog verification checks exactly 63 components,
15 Foundations, 336 static routes, identical inventory across four language
editions, and light `#0066CC` plus dark `#78B7FF` primary values.

Static output MUST include English `dist/index.html`, Korean
`dist/ko/index.html`, Japanese `dist/jp/index.html`, and Chinese
`dist/cn/index.html`. Verify the `lang`, canonical, and `hreflang` set for each
artifact, with English as `x-default`.

Browser QA exercises representative specimens from every family at 390px and
1440px, including search, empty/reset, overlay focus return, form input, table
sorting, chart, carousel, message anchoring, Preview and View code, and copy
feedback. Checks also cover the scrolled header top gap, absence of page
overflow and rail separators, light/dark themes, and reduced motion. Axe
violations MUST be zero; untestable `incomplete` findings are reported separately.
After deployment, confirm a successful GitHub Pages job, live routes, a clean
worktree, and `0 0` local/upstream/live-remote alignment.

| Layer                           | Check                                                              |
| ------------------------------- | ------------------------------------------------------------------ |
| Static                          | Types, lint, token/reference validation, production build          |
| Component                       | Roles, names, keyboard, focus, variants, state rendering           |
| Browser                         | Routing, overlays, responsive layout, overflow, real network state |
| Visual                          | Light/dark, 320px, tablet, desktop, wide, zoom, long content       |
| Device and assistive technology | Physical touch behavior and representative screen-reader output    |

Use generated snapshots only when the state they cover is named. Source and unit
tests do not substitute for browser, device, or assistive-technology checks.

## Iteration Guide

1. Change the YAML token first when an exact reusable value changes.
2. When inventory changes, update `catalog.json`, the real module, specimen,
   route, and all four component and Foundation lists as one logical unit.
3. Preserve this document's core heading order and update Korean `DESIGN.md`
   first.
4. Add state variants to the relevant component entry and use
   `{token.references}` instead of raw reusable values.
5. Mirror the same meaning and MUST, SHOULD, and MAY strength in en, jp, and cn.
6. Run `npm run validate` and `git diff --check`.
7. Exercise light, dark, narrow, wide, keyboard, reduced-motion, long-content,
   and localized states in a real browser.
8. Finish explicit staging, an ordinary push, and `0 0` parity for each logical
   unit.

## Known Gaps

- The palette is a neutral product baseline, not a product-specific brand
  identity. A consuming product may remap semantic values while preserving roles
  and contrast.
- No licensed custom font, logo, illustration language, or photography direction
  is prescribed.
- Motion ranges are production defaults; gesture-heavy products still need
  measured tuning and physical-device review.
- Data visualization needs a separate, accessible categorical and sequential
  palette derived for the actual data domain.
- Product-specific navigation, table density, editor canvases, maps, media
  timelines, and financial interfaces require extensions after their information
  architecture is known.
- Other language editions preserve the same guidance, but every product must
  still verify its actual copy, fonts, line breaking, and RTL behavior.

## References

- [Google Stitch: What is DESIGN.md?](https://stitch.withgoogle.com/docs/design-md/overview)
- [Google Stitch: The DESIGN.md specification](https://stitch.withgoogle.com/docs/design-md/specification)
- [Google Stitch: Validate with the CLI](https://stitch.withgoogle.com/docs/design-md/cli)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Apple Human Interface Guidelines: Motion](https://developer.apple.com/design/human-interface-guidelines/motion)
- [Apple Human Interface Guidelines: Materials](https://developer.apple.com/design/human-interface-guidelines/materials)
- [Next.js: Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [Tailwind CSS: Theme variables](https://tailwindcss.com/docs/theme)
- [Motion for React](https://motion.dev/docs/react)
