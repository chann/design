<!-- markdownlint-disable MD013 -->

# Calm Precision DESIGN.md

This repository contains a Google Stitch-compatible `DESIGN.md` for calm,
direct, and trustworthy product interfaces.

The system combines cool neutral surfaces, one restrained blue action color,
system-first typography, clear containment, spatially continuous motion, and
inclusive defaults. It borrows the discipline of high-quality native
interfaces while remaining distinctly web-native; it does not reproduce an
Apple interface.

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

- [Google Stitch: What is DESIGN.md?](https://stitch.withgoogle.com/docs/design-md/overview)
- [Google Stitch: The DESIGN.md specification](https://stitch.withgoogle.com/docs/design-md/specification)
- [Google Stitch: Validate with the CLI](https://stitch.withgoogle.com/docs/design-md/cli)
- [Refero Styles DESIGN.md gallery](https://styles.refero.design/)
- [getdesign.md gallery](https://getdesign.md/)
