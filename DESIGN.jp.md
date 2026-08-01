---
version: alpha
name: Comfort Design System
description: A comfortable, clear, and trustworthy product interface built from cool neutral surfaces, a restrained blue action color, system-first typography, generous breathing room, and motion that preserves spatial continuity. The visual language is polished without becoming ornamental. It borrows the discipline of high-quality native interfaces while remaining distinctly web-native, accessible, responsive, and suitable for production applications.

colors:
  primary: "#0066CC"
  primary-strong: "#004F9E"
  on-primary: "#FFFFFF"
  ink: "#17181A"
  body: "#3F4650"
  muted: "#6B7280"
  canvas: "#F7F8FA"
  surface: "#FFFFFF"
  surface-soft: "#EEF1F5"
  surface-raised: "#FFFFFF"
  hairline: "#D7DCE2"
  destructive: "#B42318"
  on-destructive: "#FFFFFF"
  success: "#137333"
  warning: "#8A4B00"
  info: "#005EA8"
  dark-canvas: "#101317"
  dark-surface: "#1A1D23"
  dark-surface-raised: "#242832"
  dark-ink: "#F4F6F8"
  dark-body: "#BCC2CA"
  dark-hairline: "#39404B"
  dark-primary: "#78B7FF"
  dark-on-primary: "#0A243D"

typography:
  display:
    fontFamily: "Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: -0.035em
  headline-lg:
    fontFamily: "Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.03em
  headline-md:
    fontFamily: "Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 32px
    fontWeight: 680
    lineHeight: 1.15
    letterSpacing: -0.022em
  title-lg:
    fontFamily: "Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 24px
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: -0.015em
  title-md:
    fontFamily: "Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 20px
    fontWeight: 620
    lineHeight: 1.3
    letterSpacing: -0.01em
  body-lg:
    fontFamily: "Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.005em
  label:
    fontFamily: "Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.005em
  caption:
    fontFamily: "Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.01em
  code:
    fontFamily: "SFMono-Regular, Cascadia Code, Consolas, ui-monospace, monospace"
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
  section: 80px
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
    rounded: "{rounded.none}"
    padding: 0 24px
    height: 56px
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

# Comfort Design System

> **ステータス:** 規範的デザインリファレンス · **DESIGN.md schema:** `alpha`
>
> **言語:** 英語版 [DESIGN.md](./DESIGN.md) が最終基準です。この文書は同一の
> token と規範を反映した日本語訳です。

YAML front matter は機械可読の token 契約であり、本文はその値をいつ、どのように
適用するかを説明します。両者が矛盾する場合、正確な値は token、意図・階層・
挙動は本文を優先します。

**MUST**、**SHOULD**、**MAY** は必須、推奨、許容を表します。

## Overview

Comfort Design System は dashboard、制作ツール、設定、commerce、運用 workflow など、
集中を必要とする product interface のためのシステムです。クールな neutral
surface、節度ある単一の青い action color、system-first typography、明確な
containment、内容の出所と移動先を説明する motion を組み合わせます。

| 品質            | ユーザーが感じること                 | 確認できる設計根拠                                                        |
| --------------- | ------------------------------------ | ------------------------------------------------------------------------- |
| **Comfort**     | 「タスクに集中できる」               | 一つの明確な主 action、節度ある色、段階的開示、安定した layout            |
| **Direct**      | 「interface が操作についてくる」     | 押下時の即時 feedback、1:1 drag、中断・反転可能な motion                  |
| **Trustworthy** | 「何が起き、どう復旧できるか分かる」 | 明示的 state、inline validation、安全な retry、undo と具体的 confirmation |

競合する場合は、信頼性、直接性、視覚的な静けさの順に守ります。安全と
accessibility は常に装飾より優先します。

**特徴:**

- 柔らかな `{colors.canvas}` の上に明瞭な `{colors.surface}` を置きます。
- `{colors.primary}` は action、focus、link、selection のみに使います。
- 大きな文字は締まりと自信を持たせ、本文は開放的で読みやすくします。
- corner は穏やかに丸めますが、pill は status と compact filter に限定します。
- surface contrast、hairline、控えめな shadow で奥行きを作ります。
- motion は原因、方向、空間的連続性を保ちます。
- 各 component は keyboard、touch、長文、localization、light/dark theme を
  最初から考慮します。

高品質な native interface の規律を参考にしますが、特定の platform や企業の
interface を複製しません。

## Colors

### 中核 role

- **Primary** (`{colors.primary}` — #0066CC): 唯一の汎用 interaction accent。
  主 action、link、focus ring、active navigation、selected state に使います。
- **Primary Strong** (`{colors.primary-strong}` — #004F9E): pressed または
  強調された primary state。別の accent 系列には展開しません。
- **Canvas** (`{colors.canvas}` — #F7F8FA): 標準の page floor。
- **Surface** (`{colors.surface}` — #FFFFFF): card、control、主要 content。
- **Surface Soft** (`{colors.surface-soft}` — #EEF1F5): grouped control、静かな
  band、skeleton、補助 containment。
- **Surface Raised** (`{colors.surface-raised}` — #FFFFFF): elevation と一緒に
  使う floating content。

### Content と structure

- `{colors.ink}` は headline と主要 content に使います。
- `{colors.body}` は本文と secondary content に使います。
- `{colors.muted}` は caption と metadata に使い、必須情報を muted だけで
  伝えてはいけません。
- `{colors.hairline}` は divider、field outline、静かな境界に使います。

### Semantic role

- `{colors.destructive}` は不可逆または重大な action と error のみに使います。
- `{colors.success}` は server が確認した完了を表します。
- `{colors.warning}` はまだ回避できる結果を表します。
- `{colors.info}` は primary だと interaction と誤認される中立情報に使います。

status は色に加えて icon、label、pattern のいずれかを必ず併用します。

### Dark theme

dark mode は単純な反転ではなく semantic role ごとの tone mapping です。
`{colors.dark-canvas}` が floor、`{colors.dark-surface}` と
`{colors.dark-surface-raised}` が containment、`{colors.dark-ink}` と
`{colors.dark-body}` が content hierarchy を担います。
`{colors.dark-primary}` は発光感を避けつつ十分に目立たせます。

theme が変わっても semantic role、contrast、component hierarchy を保ちます。

## Typography

標準は system-first sans stack です。Inter を cross-platform の優先書体とし、
Apple platform では fallback を通して system font を使えます。custom font は
brand 上の理由、適切な license delivery、metric-compatible fallback がある場合
のみ導入します。

| Token                      | サイズ | Weight | Line height | Tracking | 用途                         |
| -------------------------- | ------ | ------ | ----------- | -------- | ---------------------------- |
| `{typography.display}`     | 64px   | 700    | 1.02        | -0.035em | 単一の hero statement        |
| `{typography.headline-lg}` | 48px   | 700    | 1.08        | -0.03em  | page title                   |
| `{typography.headline-md}` | 32px   | 680    | 1.15        | -0.022em | major section                |
| `{typography.title-lg}`    | 24px   | 650    | 1.25        | -0.015em | panel・feature title         |
| `{typography.title-md}`    | 20px   | 620    | 1.3         | -0.01em  | card・dialog title           |
| `{typography.body-lg}`     | 18px   | 400    | 1.55        | 0        | lead copy                    |
| `{typography.body-md}`     | 16px   | 400    | 1.55        | 0        | 標準本文と control           |
| `{typography.body-sm}`     | 14px   | 400    | 1.5         | 0.005em  | secondary UI copy            |
| `{typography.label}`       | 14px   | 600    | 1.3         | 0.005em  | button・tab・field label     |
| `{typography.caption}`     | 12px   | 500    | 1.4         | 0.01em   | metadata・compact status     |
| `{typography.code}`        | 14px   | 400    | 1.55        | 0        | code・command・machine value |

- 各 route には説明的な `h1` を一つ置き、見た目のために heading level を
  選びません。
- display は `clamp()` で可変にできますが、mobile でも hierarchy と可読性を
  保ちます。
- 本文は一行 45–75 文字を推奨します。
- 強調は新しい色やサイズより weight を先に使います。
- 基本は sentence case です。
- 数値比較には tabular figures を推奨します。
- CJK では言語固有の改行と広めの line height が必要な場合があります。
  Latin の metrics を翻訳文へ強制しません。

## Layout

### Spacing system

基準単位は 4px です。匿名の一時値ではなく YAML scale を使います。`xxs/xs` は
icon と label、`sm/md` は control と関連 content、`lg/xl` は card と group、
`xxl/section` は大きな領域の分離に使います。標準 page gutter は 24px で、
狭い画面では 16px、広い画面では 32px まで調整できます。

### Grid と containment

- app shell は viewport 全体に広がり、主要 content は最大 1440px に収めます。
- 広い workspace でも reading column は約 65 文字に制限します。
- page structure は 12-column grid、局所 composition は content-driven CSS
  Grid を使います。
- 1次元配置には Flexbox、兄弟間の間隔には `gap` を優先します。
- reusable component は container query、shell は viewport breakpoint で
  調整します。
- 高密度 workspace でも反復 action と navigation の位置は安定させます。

余白は判断単位を分け hierarchy を作るものです。空きを gradient、badge、
decorative card で埋めません。関連項目は近く、無関係な領域は明確な section
gap で分離します。

320 CSS px 以上で page-level horizontal scroll を許可しません。境界と
affordance が明確な data region だけ内部 horizontal scroll を許可します。

## Elevation & Depth

| Level             | 表現                                 | 用途                              |
| ----------------- | ------------------------------------ | --------------------------------- |
| **0 — Flat**      | canvas または surface、shadow なし   | page content、inset region        |
| **1 — Contained** | surface contrast + hairline          | card、grouped control、sticky bar |
| **2 — Floating**  | raised surface + 短く柔らかな shadow | menu、popover、non-modal panel    |
| **3 — Modal**     | raised surface + 広い shadow + scrim | dialog、modal sheet               |

```css
--shadow-1: 0 1px 2px rgb(16 24 40 / 6%), 0 4px 12px rgb(16 24 40 / 4%);
--shadow-2: 0 8px 24px rgb(16 24 40 / 10%), 0 2px 8px rgb(16 24 40 / 6%);
--shadow-3: 0 20px 50px rgb(16 24 40 / 16%), 0 8px 18px rgb(16 24 40 / 8%);
```

- shadow は実際の stacking relationship を説明しなければなりません。
- nested surface は shadow を増やす前に tone contrast を使います。
- focus や selection を elevation だけで示しません。
- translucent UI には reduced transparency、increased contrast、非対応
  browser のための opaque fallback が必要です。
- scrim は modal semantics、focus trap、background inert の代替ではありません。

## Shapes

形状は柔らかく、同時に精密です。

| Token            | 値     | 用途                                   |
| ---------------- | ------ | -------------------------------------- |
| `{rounded.none}` | 0px    | divider、full-bleed region、table seam |
| `{rounded.sm}`   | 6px    | tag、小型 control、code fragment       |
| `{rounded.md}`   | 10px   | button、input、menu item               |
| `{rounded.lg}`   | 14px   | card、grouped panel                    |
| `{rounded.xl}`   | 20px   | dialog、sheet、重要な floating surface |
| `{rounded.full}` | 9999px | 円形 icon button、status pill、avatar  |

nested surface は parent と同じか小さい radius を使います。pill は status、
compact filter、本当に円形の control のみに使います。segmented control は
capsule を反復せず一つの外形を共有します。

## Components

YAML component entry は再利用可能な visual atom を定義します。application
component は組み合わせられますが semantic role を変えてはいけません。

### Navigation と shell

`app-shell` は `{colors.canvas}` を静かな floor として使います。`top-nav` は
56px 高で、destination navigation と contextual action を分離します。空間上の
圧力がある場合のみ sidebar や sheet に変え、現在位置には visual と
programmatic の selected state を両方付けます。

### Button と link

- `button-primary`: task region ごとに一つ。具体的な動詞で結果を示します。
- `button-primary-pressed`: 押下原因へ即時反応し、現在の visual state から
  連続的に戻るか次へ進みます。
- `button-secondary`: surface fill と hairline を使う低強調 action。
- `button-destructive`: destructive result のみに使い、対象と action を明示。
- `button-icon`: 44px の円形 target。accessible name と必要な tooltip を提供。
- `text-link`: 本文内の destination navigation。色以外でも link と分かること。

button は default、hover、active、focus-visible、disabled、loading を
サポートします。loading 中も label または同等の accessible name を保ちます。
disabled は利用不可の理由説明の代わりにはなりません。

### Card と surface

`card` は標準 containment、`card-muted` は non-interactive な補助 group、
`card-raised` は実際の floating layer のみに使います。すべての paragraph や
metric を card で囲まず、typography と whitespace を先に使います。

clickable card の primary interactive target は一つです。secondary action は
別々に到達でき、無効な nested control を作ってはいけません。

### Input と form

`text-input` は最低 44px 高で、常設 label、明瞭な focus-visible、help・error
用の領域を持ちます。placeholder は例であり唯一の label にはできません。

1. validation failure 後も入力を保持します。
2. error は該当 field の横に置きます。
3. 複数 field が submit を妨げる場合は focus 可能な summary を追加します。
4. 問題と具体的な修正方法を示します。
5. server または trust boundary で再検証します。

password manager、paste、autocomplete、locale に適した input mode が動作する
必要があります。

### Overlay と feedback

`dialog` は level-3 elevation を使います。focus を trap し background を inert
にし、不可逆処理が失われる場合を除いて `Escape` で閉じ、invoker に focus を
戻します。

status pill は短い state label のみに使います。継続に必要な error と情報は
inline に置き、toast は結果が view 外にある短い確認だけに使います。

### Dark variant

dark variant は agent の推測を避けるため YAML に明示します。文書化されて
いない component も同等の dark semantic role を適用して初めて complete です。

## Do's and Don'ts

### Do

- component と実装で semantic token reference を使います。
- task region ごとに明確な primary action を一つ置きます。
- 色や container を増やす前に typography、spacing、content hierarchy を
  使います。
- causal event から feedback を開始し spatial continuity を維持します。
- pointer、touch、keyboard、assistive technology、zoom、localization、
  reduced motion、increased contrast を最初から支援します。
- refresh や回復可能な failure 中も利用可能 content を残します。
- destructive action の対象、結果、recovery path を明示します。
- 変更に対応する実 browser または device behavior を検証します。

### Don't

- reusable color、radius、shadow、spacing を component に raw value で
  埋め込みません。
- primary blue を装飾に使わず、一つの region に複数の primary action を
  置きません。
- すべての section を floating card にしません。
- hover を必須 content や action への唯一の経路にしません。
- animation 実行中という理由だけで input を lock しません。
- error を empty として、無期限処理を skeleton として表示せず、authoritative
  operation の成功前に「完了」と言いません。
- 強い focus-visible の代替なしに outline を消しません。
- layout に収めるため touch target、body type、必須 column を縮めません。

## Responsive Behavior

breakpoint は device brand ではなく content pressure を表します。

| 範囲       | 主な適応                                                      |
| ---------- | ------------------------------------------------------------- |
| `< 40rem`  | 1列、16px gutter、簡潔な label、sheet 型 secondary navigation |
| `40–48rem` | label が読める場合の2列 field                                 |
| `48–64rem` | persistent secondary navigation、密度の高い toolbar           |
| `64–80rem` | multi-column content、全 table control、side panel            |
| `80–90rem` | reading line を伸ばさない広い workspace                       |
| `> 90rem`  | centered 1440px content または意図的 full-width work surface  |

- 320 CSS px から始め、content が許すときだけ複雑さを追加します。
- control は最低 44×44px target と十分な隣接間隔を保ちます。
- grid は card を読めない幅へ縮めず column 数を減らします。
- table は重要な比較 data を残し、低優先 column のみ labeled detail へ
  折りたたみます。
- image は寸法を宣言し、重要な subject を safe crop 内に保ちます。
- 30% text expansion、200% text size、400% browser zoom でも core task を
  維持します。

## Interaction & Motion

motion は原因と連続性を説明します。

- press feedback は 100ms 以内に開始します。
- micro transition は通常 120–180ms、標準 state change は 180–240ms、大きな
  spatial transition は 240–360ms です。
- drag は threshold 後に pointer を 1:1 追従し grab offset を保ちます。
- release velocity は settling または target selection へ引き継ぎます。
- entry と exit は関連する origin と destination を共有します。
- すべての animation は現在の rendered state から中断・反転できます。
- gesture-critical path では `transform` と `opacity` を優先します。
- `prefers-reduced-motion` では travel、parallax、decorative loop を除きつつ
  即時 state feedback と論理的連続性を保ちます。

spring は direct manipulation と spatial settling、timed easing は opacity、
color、小さな non-spatial transition に適します。

## Accessibility & Responsible UX

最低基準は WCAG 2.2 AA です。

- native semantics を優先し、HTML で表せない場合のみ ARIA を使います。
- keyboard order は visual・reading order と一致し、focus は常に見え、
  overlay が閉じたら復元します。
- icon-only control に name を付け、dynamic status は適切な live region を
  使います。
- normal text は 4.5:1、large text は 3:1、non-text control と focus
  indicator は隣接色に対して 3:1 を満たします。
- string は component logic 外に置き、翻訳文の断片を連結しません。
- date、number、currency、plural、relative time は locale-aware formatter を
  使います。
- logical property で RTL を別 stylesheet なしに支援します。
- 必要な時点で最小権限を要求し、OS/browser prompt 前に目的を説明します。
- sensitive value を URL、analytics、log、toast に入れません。
- 安価で可逆な action は undo を優先し、irreversible、financial、legal、
  privacy-sensitive action は具体的に確認します。
- verified fact と誤解され得る AI・不確実 output は表示し、高影響 output には
  review step を設けます。

## State & Feedback

```text
idle → pending → success
             ↘ empty
             ↘ recoverable error → retrying
             ↘ terminal error

success → refreshing
success → stale または offline
```

- initial pending には usable data がなく、refreshing は旧 data を残します。
- skeleton は予測可能な final geometry と合わせます。spinner は小さな
  indeterminate action のみに使います。
- empty state は何が入る場所か、分かる場合は空の理由、最も有用な次 action を
  説明します。
- error は actionable scope に置き、結果、保持された作業の安全、recovery
  action の順で示します。
- optimistic update は成功可能性が高く、rollback が決定的で pending が見える
  場合のみ許可します。
- retry mutation は idempotent にするか、反復前に server と reconcile します。

shareable navigation state は URL、authoritative state は server、local
interaction state は component に置きます。shared store は実際の cross-tree
lifetime が必要になった後だけ導入します。

## Implementation Contract

reference implementation は Next.js App Router、React、TypeScript strict mode、
Tailwind CSS、所有する shadcn/ui source、必要な Radix primitive、Lucide、
Motion for React を想定します。library は交換できますが visual、interaction、
accessibility、evidence contract は低下させられません。

- Server Component が privileged data access と initial render を所有し、
  client boundary は interaction に必要な最小範囲にします。
- YAML role を CSS variable または theme token に一度 map し、component は raw
  value を重複させません。
- application primitive に domain logic を入れません。
- overlay、menu、tab、form、composite widget は検証済み semantic primitive
  から始めます。
- 意味のある component change は該当する default、hover、active、
  focus-visible、disabled、loading、empty、error、light、dark、
  reduced-motion、contrast、long-content、localized state を扱います。

| Layer      | Evidence                                                      |
| ---------- | ------------------------------------------------------------- |
| Static     | type、lint、token/reference validation、production build      |
| Component  | role、name、keyboard、focus、variant、state rendering         |
| Browser    | route、overlay、responsive layout、overflow、実 network state |
| Visual     | light/dark、320px、tablet、desktop、wide、zoom、long content  |
| Device・AT | 実 touch behavior と代表的 screen reader output               |

snapshot は対象 state を明記した場合だけ evidence になります。source と unit
test は未確認 browser、device、assistive-technology behavior の代替ではありません。

## Iteration Guide

1. 再利用する正確な値が変わる場合は YAML token を先に更新します。
2. canonical 8 section の順序を保ちながら該当本文を更新します。
3. 一度に一つの component family を扱い YAML key を参照します。
4. state variant は関連 component entry として追加します。
5. YAML component では raw value の反復でなく `{token.references}` を使います。
6. `npx @google/design.md lint DESIGN.jp.md` の error と warning を解消します。
7. light、dark、narrow、wide、keyboard、reduced motion、long content、
   locale state を確認します。
8. token または normative behavior が変わったら全言語版を同期します。

## Known Gaps

- 現在の palette は中立的な product baseline であり製品固有 brand ではありません。
- licensed custom font、logo、illustration、photography 方針は規定しません。
- motion range は production default で、gesture-heavy product には計測と
  physical-device tuning が必要です。
- data visualization には実際の data domain に応じた別の accessible palette
  が必要です。
- navigation、table density、editor canvas、map、media timeline、finance UI は
  information architecture 決定後に拡張します。
- 翻訳版は契約を維持しますが、実 product の copy、font、line breaking、RTL は
  個別検証が必要です。

## References

- [Google Stitch: What is DESIGN.md?](https://stitch.withgoogle.com/docs/design-md/overview)
- [Google Stitch: The DESIGN.md specification](https://stitch.withgoogle.com/docs/design-md/specification)
- [Google Stitch: Validate with the CLI](https://stitch.withgoogle.com/docs/design-md/cli)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Apple Human Interface Guidelines: Motion](https://developer.apple.com/design/human-interface-guidelines/motion)
- [Apple Human Interface Guidelines: Materials](https://developer.apple.com/design/human-interface-guidelines/materials)
