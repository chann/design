<!-- markdownlint-disable MD013 -->

# Design System and Frontend Architecture

This repository contains a production-oriented design and frontend architecture
specification for products built with Next.js, React, Tailwind CSS, shadcn/ui,
and Motion.

The system translates Apple-inspired principles—direct manipulation, spatial
continuity, restrained materials, and inclusive defaults—into practical web
contracts. It does not reproduce an Apple interface.

## Documentation

- **English SSOT:** [DESIGN.md](./DESIGN.md)
- **한국어:** [DESIGN.ko.md](./DESIGN.ko.md)
- **简体中文:** [DESIGN.cn.md](./DESIGN.cn.md)
- **日本語:** [DESIGN.jp.md](./DESIGN.jp.md)

The English document is authoritative. Translations are informative and can lag
behind the current SSOT.

## What the specification covers

1. Product principles and a calm, direct, trustworthy experience target.
2. Next.js server/client boundaries and state ownership.
3. Tailwind CSS 4 semantic tokens, typography, spacing, themes, and elevation.
4. Responsive layouts, container queries, touch targets, reflow, and overflow.
5. Owned shadcn/ui primitives, component contracts, overlays, and composition.
6. Apple-inspired response, 1:1 tracking, interruptible springs, velocity handoff,
   momentum projection, rubber-banding, and spatial continuity.
7. Functional-layer materials with reduced-transparency and contrast fallbacks.
8. WCAG 2.2 AA, keyboard and screen reader behavior, localization, privacy, and
   safe destructive actions.
9. Loading, empty, error, offline, optimistic, rollback, and feedback states.
10. Content, navigation, search, table, chart, and notification patterns.
11. Test strategy, real-device evidence, setup commands, and definitions of ready
    and done.

Start with [DESIGN.md](./DESIGN.md). Its normative **MUST**, **SHOULD**, and
**MAY** requirements are intended to be used in implementation plans, component
reviews, and release gates.
