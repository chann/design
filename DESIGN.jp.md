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

> **ステータス:** プロダクトテーマガイド · **DESIGN.md schema:** `alpha`
>
> 韓国語版 [DESIGN.md](./DESIGN.md) を先に更新します。実装ガイドを変更した場合、
> [English](./DESIGN.en.md)・[日本語](./DESIGN.jp.md)・
> [简体中文](./DESIGN.cn.md) も同じ構造と意味で更新します。

YAML front matter は機械可読の token 一覧であり、本文はその値をいつ、どのように
適用するかを説明します。両者が矛盾する場合、正確な値は token、意図・階層・
挙動は本文を優先します。

**MUST**、**SHOULD**、**MAY** は必須、推奨、許容を表します。

## Overview

Comfort DESIGN.md は、集中が必要な dashboard、制作ツール、設定、commerce、
運用 workflow のためのインターフェースガイドです。温かみのあるニュートラル
カラー、控えめなブルーのアクション、Geist、ゆとりある余白、分かりやすい動きで、
落ち着きのあるプロダクトらしさをつくります。

shadcn/uiコンポーネントから始めます。アクセシビリティと使い慣れた動作は保ち、
色、文字、余白、状態、動き、文言を`DESIGN.md`でプロダクトに合わせます。最後に
実際の画面と生成した静的ページで確認します。

参照サイトは 15 の Foundation、8 family・63 component、336 static route を
収録します。各 detail route は real specimen、Preview・View code の segmented
control、usage、anatomy、state、accessibility、internationalization、実装ガイドを
同じ順序で示します。

| 品質            | ユーザーが感じること                 | 画面での表れ方                                                            |
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
- **Canvas** (`{colors.canvas}` — #F7F7F2): 標準の page floor。
- **Surface** (`{colors.surface}` — #FFFFFF): card、control、主要 content。
- **Surface Soft** (`{colors.surface-soft}` — #EFEFE9): grouped control、静かな
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

基本書体は Geist Variable です。英数字と日本語が混ざる場面では、読みやすさを
保てる system sans を fallback に使います。code、command、token、数値には
Geist Mono を使います。

| Token                      | サイズ | Weight | Line height | Tracking | 用途                         |
| -------------------------- | ------ | ------ | ----------- | -------- | ---------------------------- |
| `{typography.display}`     | 72px   | 700    | 0.98        | -0.045em | 単一の hero statement        |
| `{typography.headline-lg}` | 52px   | 700    | 1.02        | -0.035em | page title                   |
| `{typography.headline-md}` | 32px   | 680    | 1.12        | -0.025em | major section                |
| `{typography.title-lg}`    | 24px   | 650    | 1.25        | -0.015em | panel・feature title         |
| `{typography.title-md}`    | 20px   | 620    | 1.3         | -0.01em  | card・dialog title           |
| `{typography.body-lg}`     | 18px   | 400    | 1.55        | 0        | lead copy                    |
| `{typography.body-md}`     | 16px   | 400    | 1.6         | 0        | 標準本文と control           |
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
`xxl/section` は大きな領域の分離に使います。標準の section 間隔は 96px、
page gutter は 24px で、
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
decorative card で埋めません。Card はまとまりや操作上の境界が必要な場所だけに
使い、通常の section は heading、余白、Separator で区切ります。

document shell の header は初期状態と scroll 後の両方で viewport 上端から 24px
離れた floating surface として維持します。左右の documentation rail と本文の
間に vertical separator を置かず、余白だけで領域を分けます。footer は System、
Foundations、Resources、Legal の compact sitemap のみを配置します。63 component
を繰り返さず Components catalog への link を一つだけ置き、交差時に一部が現れる
大きな `Comfort DESIGN.md` text signature で閉じます。reduced motion では
移動せず最終状態を即時表示します。

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

## Foundations

Foundation catalog は SEED Foundations の読みやすい情報構造を参考にしつつ、
Comfort の token と product context に合わせて再構成します。15項目は
**Design Token, Color, Typography, Iconography, Elevation, Gradient, Inclusive Design,
International Design, Layout, Motion, Radius, Spacing, State, Voice and Tone,
Writing** です。

- 各 Foundation route は intent、rule、reference value、実際の visual
  specimen、accessibility check、関連 destination を提供します。
- Color は light `#0066CC` と dark `#78B7FF` の primary を維持し、装飾用の
  secondary brand palette を追加しません。
- International Design は韓国語・英語・日本語・中国語の長文、30% text
  expansion、RTL、locale-aware format を同時に検証します。
- Motion は base・fast・slow timing を比較し、reduced motion では移動と装飾的な
  loop を除去します。
- State は geometry を変えず、default から hover・active・focus-visible・
  disabled・loading・empty・error への変化を説明します。

`src/data/catalog.json` は route と inventory の機械可読リストであり、本書は
Foundation の選択と適用を説明するガイドです。件数と title は常に一致させます。

## Components

`src/components/ui` の shadcn/ui コンポーネントを唯一の基本 UI レイヤーとして
使います。application component はそれらを組み合わせられますが、semantic role
を変えてはいけません。

実装は shadcn/ui primitive を選び、semantic token を適用し、必要な composition
だけを加える順序で進めます。見た目の都合だけで独自 primitive を増やしません。

63 component は次の 8 family で管理します。

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

各 route は placeholder ではなく実際の interactive specimen を提供し、family
bundle 単位で lazy-load します。Preview と View code は隙間のない一つの
segmented control とし、code panel 内で copy 結果を確認できるようにします。

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
- error を empty として、無期限処理を skeleton として表示せず、server が
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
- header の language・theme utility dropdown は約 140–150ms で開き、約 100ms で
  閉じます。移動は 4px 以下に抑え、keyboard focus return を保ちます。
- drag は threshold 後に pointer を 1:1 追従し grab offset を保ちます。
- release velocity は settling または target selection へ引き継ぎます。
- entry と exit は関連する origin と destination を共有します。
- すべての animation は現在の rendered state から中断・反転できます。
- gesture-critical path では `transform` と `opacity` を優先します。
- `prefers-reduced-motion` では travel、parallax、decorative loop を除きつつ
  即時 state feedback と論理的連続性を保ちます。
- landing section は opacity と 16px 以下の translate だけを使い、480ms 以内に
  表示します。blur や装飾目的の移動は加えません。

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

shareable navigation state は URL、server で確認する state は server、local
interaction state は component に置きます。shared store は実際の cross-tree
lifetime が必要になった後だけ導入します。

## Content & Localization

韓国語 `DESIGN.md` を先に更新し、en・jp・cn 版は同じ heading 順序、token、
inventory、MUST・SHOULD・MAY の強度を保ちます。翻訳は意味を維持しながら、
各言語で自然な語順と句読点を使います。

- homepage とすべての detail page は英語 `/` を既定とし、韓国語 `/ko/`、
  日本語 `/jp/`、中国語 `/cn/` を提供します。locale 選択は URL path を優先し、保存済み
  preference より優先します。
- homepage の全 copy と metadata は `src/content/home/ko.ts`、`en.ts`、`jp.ts`、
  `cn.ts` の typed content module に分離します。presentation component に文言を
  直接置かず、copy-only change は対応する content file だけを変更します。
- site copy に内部の文書運用用語を露出しません。language selector は `KO`、
  `EN`、`JP`、`CN` で現在版と移動可能な版だけを明確に示します。
- 自然言語は `word-break: keep-all` を既定とし、code、command、URL、file path、
  token は領域内で安全に scroll または wrap します。
- label は曖昧な名詞より結果が分かる動詞を優先し、placeholder で代用しません。
- 翻訳対象の文を断片連結せず、日付・数値・通貨・複数形は locale-aware
  formatter を使います。
- 30% text expansion、CJK line breaking、RTL logical property、200% text size を
  localized regression の最小セットに含めます。

## Implementation Guide

現在の reference implementation は Vite 8.2、React 19.2、TypeScript 6 strict
mode、Tailwind CSS 4.3、Radix UI と Base UI primitive、Lucide、TanStack Table、
Recharts、Embla を使います。shadcn/uiを基本コンポーネントソースとし、
`DESIGN.md` をプロダクトテーマガイドとして適用します。library は交換できますが
visual、interaction、accessibility、verification の品質は低下させません。

- Vite は `/design/` base 下の static site を build し、catalog manifest から
  336 route artifact を生成します。
- YAML role を CSS variable または theme token に一度 map し、component は raw
  value を重複させません。
- application primitive に domain logic を入れません。
- overlay、menu、tab、form、composite widget は検証済み semantic primitive
  から始めます。
- 意味のある component change は該当する default、hover、active、
  focus-visible、disabled、loading、empty、error、light、dark、
  reduced-motion、contrast、long-content、localized state を扱います。

## Verification

完了前に `npm run verify:catalog`、`npm run lint`、`npm run check`、
`npm run build` をすべて通過させます。catalog verification は正確に 63
component、15 Foundation、336 static route、4言語版の同一 inventory、light
`#0066CC` と dark `#78B7FF` primary を確認します。

static output は英語 `dist/index.html`、韓国語 `dist/ko/index.html`、日本語
`dist/jp/index.html`、中国語 `dist/cn/index.html` をすべて含めます。各 artifact
の `lang`、canonical、`hreflang` set と英語 `x-default` を検証します。

browser QA は 390px と 1440px で全 family の代表 specimen を実行し、search、
empty/reset、overlay focus 復帰、form input、table sort、chart、carousel、message
anchor、Preview・View code、copy feedback を確認します。scroll 後の header top
gap、page overflow と rail separator の不在、light/dark、reduced motion も合わせて
確認します。Axe violation は 0 とし、判定不能な `incomplete` は別に報告します。
deployment では GitHub Pages job、live route、clean worktree、local・upstream・
live remote の `0 0` parity がそろっていることを確認します。

| Layer      | 確認項目                                                      |
| ---------- | ------------------------------------------------------------- |
| Static     | type、lint、token/reference validation、production build      |
| Component  | role、name、keyboard、focus、variant、state rendering         |
| Browser    | route、overlay、responsive layout、overflow、実 network state |
| Visual     | light/dark、320px、tablet、desktop、wide、zoom、long content  |
| Device・AT | 実 touch behavior と代表的 screen reader output               |

snapshot は対象 state を明記した場合だけ確認資料として扱います。source と unit
test は未確認 browser、device、assistive-technology behavior の代替ではありません。

## Iteration Guide

1. 再利用する正確な値が変わる場合は YAML token を先に更新します。
2. inventory 変更時は `catalog.json`、実際の module、specimen、route、4言語の
   component・Foundation リストを一つの論理単位で更新します。
3. 本書の主要 heading 順序を維持し、韓国語 `DESIGN.md` を先に更新します。
4. state variant は関連 component entry に追加し、raw value ではなく
   `{token.references}` を使います。
5. en・jp・cn 版に同じ意味と MUST・SHOULD・MAY の強度を反映します。
6. `npm run validate` と `git diff --check` を実行します。
7. light、dark、narrow、wide、keyboard、reduced motion、long content、locale
   state を実 browser で確認します。
8. 論理単位ごとの明示的 staging、通常 push、`0 0` parity を完了します。

## Known Gaps

- 現在の palette は中立的な product baseline であり製品固有 brand ではありません。
- licensed custom font、logo、illustration、photography 方針は規定しません。
- motion range は production default で、gesture-heavy product には計測と
  physical-device tuning が必要です。
- data visualization には実際の data domain に応じた別の accessible palette
  が必要です。
- navigation、table density、editor canvas、map、media timeline、finance UI は
  information architecture 決定後に拡張します。
- 他言語版も同じガイドを保ちますが、実 product の copy、font、line breaking、RTL は
  個別検証が必要です。

## References

- [Google Stitch: What is DESIGN.md?](https://stitch.withgoogle.com/docs/design-md/overview)
- [Google Stitch: The DESIGN.md specification](https://stitch.withgoogle.com/docs/design-md/specification)
- [Google Stitch: Validate with the CLI](https://stitch.withgoogle.com/docs/design-md/cli)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Apple Human Interface Guidelines: Motion](https://developer.apple.com/design/human-interface-guidelines/motion)
- [Apple Human Interface Guidelines: Materials](https://developer.apple.com/design/human-interface-guidelines/materials)
