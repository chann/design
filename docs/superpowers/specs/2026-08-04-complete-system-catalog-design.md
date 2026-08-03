# Comfort complete system catalog design

Date: 2026-08-04

Status: approved for implementation

Canonical product contract: `DESIGN.md` in Korean

## Summary

Comfort will become a complete design-system reference rather than a twelve-component sample. The site will adapt the information architecture and documentation depth of shadcn/ui, the visual foundation teaching of SEED Design System, and the expanded footer treatment of chann/skills without copying any source site's brand expression.

The finished site will document all 63 components in the current shadcn/ui catalog and all 15 SEED Foundation subjects. Every catalog entry will have a static route, a Comfort-specific visual treatment, and enough behavioral guidance to be useful in product work. The footer will distribute the sitemap into clear groups and finish with an animated, partially clipped wordmark treatment.

## Goals

- Cover all 63 components listed by shadcn/ui on 2026-08-04.
- Cover all 15 subjects listed by SEED Foundations on 2026-08-04.
- Preserve Comfort's primary colors: `#0066CC` in light mode and `#78B7FF` in dark mode.
- Preserve the existing React, Radix, Tailwind, Vite, static-route, and GitHub Pages architecture.
- Give every component a reusable implementation or composition contract, an interactive specimen, a detail route, and state and accessibility guidance.
- Give every Foundation a visual specimen that teaches the concept rather than only listing tokens.
- Keep the floating header detached from the viewport edge while scrolling.
- Keep left and right documentation rails visually open, without vertical separator lines.
- Replace the concentrated footer links with a broad, grouped sitemap and a clipped text animation inspired by chann/skills.
- Synchronize the updated system contract across `DESIGN.md`, `DESIGN.en.md`, `DESIGN.jp.md`, and `DESIGN.cn.md`, with Korean remaining canonical.
- Fail verification when catalog coverage, static routes, document sections, or required accessibility contracts drift.

## Non-goals

- Reproducing shadcn/ui, SEED, or chann/skills branding.
- Changing the established primary color.
- Reintroducing a graphic logo in the header or footer.
- Migrating away from the current framework or replacing the existing routing model with a server framework.
- Adding accounts, installation requirements, analytics, or form submission to the public reference site.
- Treating every catalog entry as a separate dependency when native HTML, Radix, or an existing local primitive provides the required behavior.

## Reference coverage

### Component catalog: 63 of 63

The canonical component set is:

1. Accordion
2. Alert
3. Alert Dialog
4. Aspect Ratio
5. Attachment
6. Avatar
7. Badge
8. Breadcrumb
9. Bubble
10. Button
11. Button Group
12. Calendar
13. Card
14. Carousel
15. Chart
16. Checkbox
17. Collapsible
18. Combobox
19. Command
20. Context Menu
21. Data Table
22. Date Picker
23. Dialog
24. Direction
25. Drawer
26. Dropdown Menu
27. Empty
28. Field
29. Hover Card
30. Input
31. Input Group
32. Input OTP
33. Item
34. Kbd
35. Label
36. Marker
37. Menubar
38. Message
39. Message Scroller
40. Native Select
41. Navigation Menu
42. Pagination
43. Popover
44. Progress
45. Radio Group
46. Resizable
47. Scroll Area
48. Select
49. Separator
50. Sheet
51. Sidebar
52. Skeleton
53. Slider
54. Spinner
55. Switch
56. Table
57. Tabs
58. Textarea
59. Toast
60. Toggle
61. Toggle Group
62. Tooltip
63. Typography

The catalog groups these into eight browsing families: Actions, Forms, Navigation, Overlays, Data display, Feedback, Layout, and Conversation. A component can have one primary family and additional search terms, but it has one canonical route.

### Foundation catalog: 15 of 15

The canonical Foundation set is:

1. Design Token
2. Color
3. Typography
4. Iconography
5. Elevation
6. Gradient
7. Inclusive Design
8. International Design
9. Layout
10. Motion
11. Radius
12. Spacing
13. State
14. Voice and Tone
15. Writing

Gradient remains a documented Foundation even though Comfort forbids decorative background gradients. Its page will explain narrow, intentional uses such as data ramps, masks, and hero-heading text while preserving flat interface surfaces.

## Information architecture

### Canonical catalog data

`src/data/site.ts` will stop duplicating route lists across navigation and routing. Catalog data will expose typed component and Foundation records containing:

- `slug`, `title`, `description`, and `family`
- search terms and optional release marker
- detail-page summary, usage guidance, and accessibility notes
- specimen identifier and code example identifier
- previous and next destinations derived from catalog order

`App.tsx`, the documentation rails, index pages, route metadata, the route generator, and the verifier will consume the same records. A catalog entry without a route or a route without an entry is a build failure.

### Static route contract

The minimum generated route set is 84 routes:

- Home: 1
- Principles: 1
- Foundation index: 1
- Component index: 1
- Foundation details: 15
- Component details: 63
- Privacy and terms: 2

The branded not-found state remains a runtime fallback and is not counted as a generated destination.

### Documentation shell

Desktop documentation pages retain three regions: grouped navigation, main reading column, and local table of contents. The rails use whitespace and type hierarchy rather than vertical divider lines. The main column remains width-constrained for readable prose while previews can use the available content width.

The floating header keeps a visible top gap at every scroll position. Mobile navigation remains a full-height sheet, with current-destination semantics and direct access to `DESIGN.md`, theme, and source.

The left rail gains catalog search and collapsible family groups when the complete lists would otherwise become unwieldy. Search filters visible destinations without changing canonical URLs. The mobile sheet presents the same groups in reading order.

## Page designs

### Component index

The index combines a Seed-like visual introduction with shadcn-like catalog density:

- A concise page header and count summary
- Search and family filters
- An asymmetric bento feature area for representative component families
- A complete, compact list grouped by family
- Visible counts that derive from catalog data

The bento area is an orientation aid, not a substitute for the complete list. Every component remains reachable without search.

### Component detail

Every detail page uses the same semantic order:

1. Breadcrumb, family label, name, and purpose
2. Preview and View code segmented button group
3. Interactive specimen
4. Anatomy and composition contract
5. Variants and responsive behavior
6. State coverage
7. Accessibility and internationalization guidance
8. Implementation example
9. Previous and next navigation

The preview is a real interaction whenever the component is interactive. It cannot be a static illustration pretending to be the component. Component-family specimen modules share behavior where appropriate, while Calendar, Carousel, Chart, Command, Data Table, Date Picker, Drawer, Input OTP, Message Scroller, and Resizable receive dedicated specimens.

Each component must demonstrate the states that apply to it. The required vocabulary is default, hover, active, focus-visible, disabled, loading, empty, error, selected, expanded, and destructive. Not every component uses every state; the detail record must explicitly identify which states apply.

### Foundation index

The Foundation index uses a responsive visual grid inspired by SEED's browsable cards but rendered with Comfort colors, type, spacing, and restraint. Card artwork is generated with CSS and local iconography, not copied images. The grid varies scale and aspect ratio to avoid a generic repeated-card wall while preserving a predictable reading order.

### Foundation detail

Every Foundation page includes:

1. Intent and system role
2. A visual specimen
3. Semantic rules
4. Reference values
5. Do and do not guidance
6. Accessibility or internationalization implications
7. Related Foundations and components

Examples include a semantic token graph, color-role palette, type scale, icon grid, elevation stack, controlled gradient ramp, inclusive-design comparison, locale expansion specimen, responsive layout frame, motion timeline, nested-radius model, spacing rhythm, state machine, voice matrix, and writing before-and-after comparison.

## Component implementation strategy

The implementation uses the smallest dependency that preserves the expected behavior:

- Existing Radix and local primitives remain the basis for disclosure, selection, menus, overlays, tooltips, and focus management.
- Native HTML remains the basis for labels, text controls, progress, direction, and native select where it gives stronger semantics.
- Official ecosystem dependencies may be added for calendar, carousel, charts, tabular data, command menus, OTP, drawers, and resizable panels when reimplementing them would reduce behavior or accessibility.
- Composite components such as Date Picker, Combobox, Input Group, Navigation Menu, and Message are built by composing the primitive layer rather than duplicating interaction logic.

New primitives must resolve their colors, radius, spacing, elevation, and motion through Comfort tokens. Raw component-level design values are allowed only for intrinsic geometry that is not a reusable design role.

## Visual system

### Color and surfaces

- Light primary: `#0066CC`
- Dark primary: `#78B7FF`
- Cool neutral canvases and surfaces remain the dominant field.
- Primary appears on actions, focus, links, and selection, not as decoration.
- Backgrounds remain flat. The established hero heading remains the only broad text gradient.
- Semantic success, warning, destructive, and informational colors keep their distinct meanings.

### Typography and spacing

Geist remains the single interface typeface, with Geist Mono reserved for code, tokens, and tabular data. Headings use balanced wrapping and body text uses pretty wrapping. Global Korean word groups retain `word-break: keep-all` behavior without preventing safe overflow fallback for code and URLs.

Spacing and radius values continue to use the documented scales. Cards are used only where containment communicates a relationship. Dense catalogs use grouping, alignment, and whitespace before adding more surfaces.

### Motion

Entry motion uses `IntersectionObserver`, transforms, opacity, and the existing Comfort easing. Interaction feedback begins immediately and remains reversible. `prefers-reduced-motion` removes travel, decorative loops, and stagger while preserving state visibility.

## Footer design

The footer has two layers.

The sitemap layer spreads destinations across System, Foundations, Components, Resources, and Legal groups. Components and Foundations can be split into balanced subcolumns on wide screens. Mobile renders the same groups in semantic source order without a horizontal-scroll requirement.

The signature layer uses large `Comfort / DESIGN.md` text in an overflow-hidden frame. On intersection, the text rises into view with a weighted easing and settles with part of its lower edge clipped by the footer boundary. A subtle variable-weight or tracking shift can accompany the rise. Reduced-motion users see the final clipped composition without animation. The treatment is text only and does not restore a removed logo.

## Content and localization

The public interface keeps established component names and concise English UI labels so code terminology stays stable. Korean `DESIGN.md` remains the canonical design contract. The English, Japanese, and Simplified Chinese documents mirror the Korean document's section order, normative rules, coverage lists, and front matter.

The language menu describes editions without repeating promotional SSOT copy in the page body. The site does not claim that an account or installation is required.

All example content is specific to Comfort product work. It avoids filler names, invented vanity metrics, vague AI language, dead links, and controls that do nothing.

## Error handling and resilience

- Unknown component or Foundation slugs render the branded not-found state.
- Catalog search returns a composed empty state with a clear reset action.
- Interactive examples keep user input after validation errors.
- Overlay examples restore focus to their trigger when closed.
- Asynchronous and loading specimens use layout-shaped skeletons and preserve accessible names.
- Message Scroller demonstrates anchored navigation and a jump-to-latest action without scroll jumps.
- Errors in examples are inline and actionable; no example uses `window.alert()`.

## Accessibility requirements

- WCAG 2.2 AA is the minimum target.
- All interactive previews work by keyboard and expose visible focus.
- Controls meet the 44 by 44 CSS pixel target where the component contract calls for direct touch interaction.
- Overlays trap focus, make background content inert, close according to their contract, and restore focus.
- Status is never expressed by color alone.
- Scrollable code and data regions receive an accessible region name and become keyboard-focusable only when they actually overflow.
- The site has no page-level horizontal overflow at 320 CSS pixels.
- Light and dark themes, 200 percent text, reduced motion, and long localized strings are verified.

## Verification contract

The repository verifier will check:

- exactly 63 canonical component records with unique slugs
- exactly 15 canonical Foundation records with unique slugs
- the expected 84 or more static routes and navigation destinations
- one detail route per catalog entry
- matching section structure in all four `DESIGN` documents
- no missing local links or generated destination files
- preservation of the primary-color contract
- required accessibility attributes for scrollable regions

Implementation checkpoints run lint, TypeScript checks, the site verifier, a production build, and `git diff --check` in proportion to their scope. Final verification runs the complete validation command and browser QA across representative index and detail routes in desktop and mobile, light and dark, normal and reduced-motion configurations. Axe violations, incomplete contrast checks, console errors, and horizontal overflow are reported separately.

GitHub Pages verification must prove that the published deployment contains the full catalog, footer signature, and current commit. Local, tracking, and upstream parity must finish at `0 0`.

## Realtime implementation checkpoints

1. `docs: define complete system catalog redesign`
   - This approved specification and its self-review.
2. `refactor(catalog): centralize complete route contracts`
   - Typed 63-component and 15-Foundation data, routing, navigation, and verifier coverage.
3. `feat(shell): expand discovery and footer navigation`
   - Searchable rails, open documentation layout, distributed sitemap, and clipped footer motion.
4. `feat(foundations): document the complete visual foundation set`
   - Foundation index, 15 routes, specimens, and cross-links.
5. `feat(components): add complete primitive and form catalog`
   - Actions, forms, feedback, and core display families.
6. `feat(components): add advanced and conversational catalog`
   - Data, layout, overlay, navigation, and conversation families.
7. `docs(system): synchronize the complete design contract`
   - Korean canonical contract and the three translated editions.
8. A corrective checkpoint only if final browser or deployment verification exposes a real defect.

Each checkpoint must be independently usable, verified for its stated scope, explicitly staged, committed with a Conventional Commit subject, pushed normally, and confirmed at upstream parity before the next checkpoint begins.

## Acceptance criteria

The redesign is complete only when all of the following are true:

- The current shadcn/ui list is represented 63 of 63.
- The current SEED Foundation list is represented 15 of 15.
- Every entry has a static detail route and appears in complete navigation.
- Every component has a real specimen or an explicit noninteractive typography or provider specimen when interaction does not apply.
- Specialized components preserve their defining behavior instead of being represented by a generic card.
- Component and Foundation index pages remain usable without search.
- The floating header retains its top gap while scrolling.
- No left or right documentation rail uses a vertical separator line.
- Preview and View code form one natural button group.
- The footer presents a distributed sitemap and a partially clipped animated text signature.
- The footer animation has reduced-motion parity.
- Light and dark themes retain the established primary colors.
- Korean remains the canonical `DESIGN.md`, and all three translations match its updated structure and contract.
- Full repository validation passes.
- Representative routes pass browser interaction, responsive, theme, reduced-motion, accessibility, console, and overflow checks.
- The deployed GitHub Pages site is verified at the final commit.
- The working tree is clean and local, tracking, and upstream parity is `0 0`.
