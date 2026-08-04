<!-- markdownlint-disable MD013 -->

# Comfort Design System

This repository contains a Google Stitch-compatible `DESIGN.md` for
comfortable, clear, and trustworthy product interfaces. Korean `DESIGN.md` is
the normative original; English, Japanese, and Simplified Chinese editions stay
synchronized with its structure, tokens, inventory, and requirement strength.

The system combines cool neutral surfaces, one restrained blue action color,
Geist typography, clear containment, spatially continuous motion, and
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
- **Foundations:** all 15 SEED-inspired semantic Foundations, adapted to
  Comfort's tokens and product language.
- **Components:** 63 interactive references across eight families, each with a
  real specimen, usage, anatomy, states, accessibility, and code view.

The documentation shell follows the information architecture of a mature
design-system reference: a floating header with a persistent 24px top gap,
contextual rails without vertical separators, an on-page outline, previous/next
navigation, a distributed sitemap, and a clipped `Comfort / DESIGN.md` footer
signature. Its content, token language, visual system, and examples are original
to Comfort.

## Technology

The reference site uses Vite 8, React 19, TypeScript 6, Tailwind CSS 4, and
repository-owned shadcn components with Radix UI and Base UI primitives.
TanStack Table, Recharts, Embla, and focused companion libraries support the
advanced specimens. Component source lives in `src/components/ui`;
Comfort-specific composition and guidance live in the page and shell layers.

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

The command verifies the 63/15 catalog and four DESIGN.md editions, then runs
ESLint, TypeScript, the production Vite build, 84-route generation, and static
site verification.

## Documentation

- **한국어 규범 원문:** [DESIGN.md](./DESIGN.md)
- **English:** [DESIGN.en.md](./DESIGN.en.md)
- **简体中文:** [DESIGN.cn.md](./DESIGN.cn.md)
- **日本語:** [DESIGN.jp.md](./DESIGN.jp.md)

All four files carry the same machine-readable YAML tokens, section order, and
63-component and 15-Foundation inventory. The translated editions preserve the
normative behavior defined by the Korean original.

## Format

Each document has two layers:

1. YAML front matter with exact colors, typography, radii, spacing, and
   component tokens.
2. Markdown rationale in the maintained order: `Overview → Colors → Typography
→ Layout → Elevation & Depth → Shapes → Foundations → Components → Do's and
Don'ts → Responsive Behavior → Interaction & Motion → Accessibility &
Responsible UX → State & Feedback → Content & Localization → Implementation
Contract → Verification Contract → Iteration Guide → Known Gaps → References`.

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
npx @google/design.md lint DESIGN.en.md
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
