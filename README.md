<!-- markdownlint-disable MD013 -->

# Comfort Design System

This repository contains a Google Stitch-compatible `DESIGN.md` for
comfortable, clear, and trustworthy product interfaces.

The system combines cool neutral surfaces, one restrained blue action color,
system-first typography, clear containment, spatially continuous motion, and
inclusive defaults. It borrows the discipline of high-quality native
interfaces while remaining distinctly web-native; it does not reproduce an
Apple interface.

## Reference site

Explore the design system as a live, responsive reference:

**[Open the Comfort Design System](https://chann.github.io/design/)**

The site maps the normative tokens into light and dark themes, responsive
specimens, and detailed reference pages:

- **Principles:** Natural, Certain, Meaningful, and Growing, adapted to
  Comfort's product language.
- **Foundations:** design tokens, color, typography, layout, motion, and
  accessibility.
- **Components:** 12 interactive references with anatomy, usage guidance,
  states, and API tables.

The documentation shell follows the information architecture of a mature
design-system reference: persistent primary navigation, contextual sidebars,
an on-page outline, and previous/next navigation. Its content, token language,
visual system, and examples are original to Comfort.

## Technology

The reference site uses Vite, React, TypeScript, Tailwind CSS, and generated
shadcn components with Radix primitives. Component source lives in
`src/components/ui`; Comfort-specific composition and guidance live in the
page and shell layers.

Static route copies are generated at build time so every documentation URL
loads directly on GitHub Pages without a client-side redirect.

## Develop

Use Node.js 22 or later:

```bash
npm ci
npm run dev
```

Run the full local gate before publishing:

```bash
npm run validate
```

The command runs ESLint, TypeScript, the production Vite build, and static
route generation. The four `DESIGN.md` files are validated separately with
Google's official linter below.

## Documentation

- **English SSOT:** [DESIGN.md](./DESIGN.md)
- **한국어:** [DESIGN.ko.md](./DESIGN.ko.md)
- **简体中文:** [DESIGN.cn.md](./DESIGN.cn.md)
- **日本語:** [DESIGN.jp.md](./DESIGN.jp.md)

All four files carry the same machine-readable YAML tokens and canonical
section order. English is authoritative; translations preserve the same
normative behavior in Korean, Simplified Chinese, and Japanese.

## Format

Each document has two layers:

1. YAML front matter with exact colors, typography, radii, spacing, and
   component tokens.
2. Markdown rationale in the canonical Stitch order:
   `Overview → Colors → Typography → Layout → Elevation & Depth → Shapes →
Components → Do's and Don'ts`.

Project-specific sections follow the canonical core and cover responsive
behavior, interaction and motion, accessibility, state and feedback,
implementation, verification, iteration, and known gaps.

The YAML values are normative for exact tokens. The prose is normative for
intent, hierarchy, interaction, and delivery behavior.

## Use

Give [DESIGN.md](./DESIGN.md) to a coding or design agent before UI work:

```text
Read DESIGN.md, apply its token and component contracts, and preserve its
interaction, accessibility, responsive, and verification requirements.
```

Map YAML roles to the consuming application's CSS variables or theme
configuration once. Components should consume semantic roles instead of
repeating raw colors, radii, or spacing values.

## Validate

Use Google's official linter:

```bash
npx @google/design.md lint DESIGN.md
npx @google/design.md lint DESIGN.ko.md
npx @google/design.md lint DESIGN.cn.md
npx @google/design.md lint DESIGN.jp.md
```

The documents are expected to produce no errors or warnings. The informational
token summary is normal.

## References

- [Ant Design: Design Values](https://ant.design/docs/spec/values/)
- [shadcn/ui documentation](https://ui.shadcn.com/docs)
- [SEED Design System](https://seed-design.io/)
- [Google Stitch: What is DESIGN.md?](https://stitch.withgoogle.com/docs/design-md/overview)
- [Google Stitch: The DESIGN.md specification](https://stitch.withgoogle.com/docs/design-md/specification)
- [Google Stitch: Validate with the CLI](https://stitch.withgoogle.com/docs/design-md/cli)
- [Refero Styles DESIGN.md gallery](https://styles.refero.design/)
- [getdesign.md gallery](https://getdesign.md/)
