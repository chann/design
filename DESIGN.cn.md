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

> **状态：**产品主题指南 · **DESIGN.md schema：**`alpha`
>
> 请先更新韩文 [DESIGN.md](./DESIGN.md)。实现指南发生变化时，
> [English](./DESIGN.en.md)、[日本語](./DESIGN.jp.md) 与
> [简体中文](./DESIGN.cn.md) 版本必须以相同结构和含义同步更新。

YAML front matter 是机器可读的 token 列表，正文说明如何应用这些值。若两者
出现冲突，精确值以 token 为准，设计意图、层级与行为以正文为准。

**MUST**、**SHOULD**、**MAY**分别表示必须、应当与可以。

## Overview

Comfort DESIGN.md 面向需要专注完成任务的 dashboard、创作工具、设置、电商与
运营流程。温暖的中性色、克制的蓝色操作、Geist、充足留白与清晰动效，共同构成
安静但有辨识度的产品界面。

从 shadcn/ui 组件开始。保留成熟的可访问性与交互习惯，再通过`DESIGN.md`调整颜色、
字体、间距、状态、动效与文案，最后在真实界面和生成的静态页面中检查结果。

参考站点通过 80 条 static route 发布 15 个 Foundation 与四种语言版本。公开的
component catalog 与 specimen route 暂不提供，待整体产品改进完成后重新设计信息
结构与示例。

| 品质            | 用户应当感受到                       | 界面中的表现                                 |
| --------------- | ------------------------------------ | -------------------------------------------- |
| **Comfort**     | “我可以专注完成任务。”               | 一个明确主操作、克制用色、渐进披露、稳定布局 |
| **Direct**      | “界面会跟随我的操作。”               | 按下即反馈、1:1 拖动、可中断与反向的动画     |
| **Trustworthy** | “我知道发生了什么，也知道如何恢复。” | 明确状态、行内校验、安全重试、撤销与具体确认 |

发生冲突时，依次保护可信度、直接性与视觉平静。安全和可访问性永远高于装饰。

**标志性特征：**

- 柔和的 `{colors.canvas}` 承托清晰的 `{colors.surface}`。
- `{colors.primary}` 仅用于 action、focus、link 与 selection，不作装饰。
- 大字紧凑而坚定，正文开放且易读。
- 圆角温和，但 pill 只用于状态和紧凑型 filter。
- 依靠 surface 对比、hairline 与克制阴影表达深度。
- motion 保留因果、方向与空间连续性。
- 每个 component 从一开始就考虑 keyboard、touch、长文本、多语言和明暗主题。

本系统借鉴高质量原生界面的设计纪律，但不复制任何平台或公司的界面。

## Colors

### 核心角色

- **Primary** (`{colors.primary}` — #0066CC)：唯一的通用交互强调色，用于
  主操作、link、focus ring、激活 navigation 与选中状态。
- **Primary Strong** (`{colors.primary-strong}` — #004F9E)：按下或强化的
  primary 状态，不得扩展成第二套强调色。
- **Canvas** (`{colors.canvas}` — #F7F7F2)：默认页面底色。
- **Surface** (`{colors.surface}` — #FFFFFF)：card、control 和主要内容区。
- **Surface Soft** (`{colors.surface-soft}` — #EFEFE9)：分组 control、安静的
  band、skeleton 与次级容器。
- **Surface Raised** (`{colors.surface-raised}` — #FFFFFF)：与 elevation
  配合的浮层内容。

### 内容与结构

- `{colors.ink}` 用于标题与主要内容。
- `{colors.body}` 用于正文与次级内容。
- `{colors.muted}` 用于 caption 与 metadata；必要信息不得仅依赖 muted。
- `{colors.hairline}` 用于 divider、输入边界与低对比结构线。

### 语义角色

- `{colors.destructive}` 只表示不可逆或高后果操作与错误。
- `{colors.success}` 表示服务端已确认完成。
- `{colors.warning}` 表示仍可避免的后果。
- `{colors.info}` 用于不应被误解为交互的中性系统信息。

状态必须在颜色之外同时使用 icon、label 或 pattern。

### 深色主题

深色模式是按语义进行色调映射，不是简单反色。`{colors.dark-canvas}` 是底层，
`{colors.dark-surface}` 与 `{colors.dark-surface-raised}` 表示容器，
`{colors.dark-ink}` 与 `{colors.dark-body}` 表示内容层级。
`{colors.dark-primary}` 必须足够醒目但不能产生刺眼发光感。

主题切换后必须保留语义、对比度与 component 层级。

## Typography

默认使用 Geist Variable。中英文混排时以合适的 system sans 作为 fallback，保证
字形与换行自然。code、command、token 与数值使用 Geist Mono。

| Token                      | 字号 | 字重 | 行高 | 字距     | 用途                     |
| -------------------------- | ---- | ---- | ---- | -------- | ------------------------ |
| `{typography.display}`     | 72px | 700  | 0.98 | -0.045em | 单一 hero 陈述           |
| `{typography.headline-lg}` | 52px | 700  | 1.02 | -0.035em | 页面标题                 |
| `{typography.headline-md}` | 32px | 680  | 1.12 | -0.025em | 主要 section             |
| `{typography.title-lg}`    | 24px | 650  | 1.25 | -0.015em | panel 或 feature 标题    |
| `{typography.title-md}`    | 20px | 620  | 1.3  | -0.01em  | card 或 dialog 标题      |
| `{typography.body-lg}`     | 18px | 400  | 1.55 | 0        | 引导正文                 |
| `{typography.body-md}`     | 16px | 400  | 1.6  | 0        | 默认正文与 control       |
| `{typography.body-sm}`     | 14px | 400  | 1.5  | 0.005em  | 次级 UI 文案             |
| `{typography.label}`       | 14px | 600  | 1.3  | 0.005em  | button、tab、field label |
| `{typography.caption}`     | 12px | 500  | 1.4  | 0.01em   | metadata 与紧凑状态      |
| `{typography.code}`        | 14px | 400  | 1.55 | 0        | code、command、机器值    |

- 每个 route 必须有一个描述性的 `h1`；heading level 不得因外观而选择。
- display 可用 `clamp()` 响应式缩放，但移动端仍需保持层级与可读性。
- 正文每行建议 45–75 个字符。
- 优先通过字重而不是新颜色或更大字号进行强调。
- 默认使用 sentence case。
- 数值比较应使用 tabular figures。
- CJK 需要语言适配的换行与可能更宽松的行高，不应强套 Latin 指标。

## Layout

### 间距系统

基础单位为 4px。使用 YAML scale，不创建无名的临时值。`xxs/xs` 用于 icon 与
label，`sm/md` 用于 control 和相关内容，`lg/xl` 用于 card 与 group，
`xxl/section` 用于主要区域分隔。默认 section 间距为 96px，page gutter 为 24px，
可在窄屏降至 16px，
在宽屏增至 32px。

### Grid 与容器

- app shell 占满 viewport，主要内容最大宽度为 1440px。
- 即使 workspace 很宽，阅读列仍控制在约 65 个字符。
- 页面结构用 12-column grid，本地组合用 content-driven CSS Grid。
- 一维排列用 Flexbox，兄弟元素间距优先用 `gap`。
- 可复用 component 优先用 container query，shell 用 viewport breakpoint。
- 高密度 workspace 可以利用全宽，但重复 action 与 navigation 保持稳定位置。

留白用于分隔决策和建立层级，不应被 gradient、badge 或装饰 card 填满。Card 只用于
确实需要成组或操作边界的内容；普通 section 通过标题、留白与 Separator 区分。

文档 shell 的 header 在初始状态与滚动后都保持为距 viewport 顶部 24px 的
floating surface。左右 documentation rail 与正文之间不设置 vertical separator，
只用留白区分。footer 分布 System、Foundations、Resources、Legal sitemap 分组，
在新结构准备好之前不显示 component catalog link，并以滚动进入时部分露出的大型 `Comfort DESIGN.md` text signature
收尾。reduced motion 下不产生位移，直接显示最终状态。

从 320 CSS px 起不得出现页面级横向滚动。只有边界和操作提示明确的数据区域
可以在自身内部横向滚动。

## Elevation & Depth

| 层级              | 表现                                 | 用途                              |
| ----------------- | ------------------------------------ | --------------------------------- |
| **0 — Flat**      | canvas 或 surface，无 shadow         | 页面内容、inset 区域              |
| **1 — Contained** | surface 对比 + hairline              | card、grouped control、sticky bar |
| **2 — Floating**  | raised surface + 短而柔和的 shadow   | menu、popover、非模态 panel       |
| **3 — Modal**     | raised surface + 更宽 shadow + scrim | dialog、modal sheet               |

```css
--shadow-1: 0 1px 2px rgb(16 24 40 / 6%), 0 4px 12px rgb(16 24 40 / 4%);
--shadow-2: 0 8px 24px rgb(16 24 40 / 10%), 0 2px 8px rgb(16 24 40 / 6%);
--shadow-3: 0 20px 50px rgb(16 24 40 / 16%), 0 8px 18px rgb(16 24 40 / 8%);
```

- shadow 必须对应真实 stacking 关系。
- 嵌套 surface 在增加 shadow 前先使用色调对比。
- focus 与 selection 不得只靠 elevation 表示。
- 半透明 UI 必须提供 reduced transparency、increased contrast 与不支持
  浏览器所需的不透明 fallback。
- scrim 不能替代正确的 modal semantics、focus trap 和 background inert。

## Shapes

形状语言柔和但精确。

| Token            | 值     | 用途                                  |
| ---------------- | ------ | ------------------------------------- |
| `{rounded.none}` | 0px    | divider、full-bleed 区域、table seam  |
| `{rounded.sm}`   | 6px    | tag、小型 control、code fragment      |
| `{rounded.md}`   | 10px   | button、input、menu item              |
| `{rounded.lg}`   | 14px   | card、grouped panel                   |
| `{rounded.xl}`   | 20px   | dialog、sheet、重要 floating surface  |
| `{rounded.full}` | 9999px | 圆形 icon button、status pill、avatar |

嵌套 surface 使用与父级相同或更小的 radius。pill 仅用于状态、紧凑 filter 与
真正的圆形 control。segmented control 应共享一个外轮廓，而不是重复胶囊。

## Foundations

Foundation catalog 借鉴 SEED Foundations 清晰的信息架构，再按照 Comfort 的
token 与产品语境重写。15 个条目为 **Design Token、Color、Typography、
Iconography、Elevation、Gradient、Inclusive Design、International Design、
Layout、Motion、Radius、Spacing、State、Voice and Tone、Writing**。

- 每个 Foundation route 都提供 intent、规则、参考值、真实 visual specimen、
  accessibility 检查与相关 destination。
- Color 保留 light `#0066CC` 与 dark `#78B7FF` primary，不创建装饰性的第二套
  brand palette。
- International Design 同时验证韩文、英文、日文、中文长文、30% text
  expansion、RTL 与 locale-aware format。
- Motion 比较 base、fast、slow timing，并在 reduced motion 下移除位移和装饰循环。
- State 在同一 geometry 中解释 default、hover、active、focus-visible、disabled、
  loading、empty 与 error 的转换。

`src/data/catalog.json` 是 route 与 inventory 的机器可读清单；本文定义如何选择和
应用 Foundation 的方法。条目数量与 title 必须始终一致。

## Components

以`src/components/ui`中的 shadcn/ui 组件作为唯一基础 UI 层。application component
可以组合它们，但必须保持语义角色。

实现时先选择合适的 shadcn/ui primitive，再映射 semantic token，最后只添加必要的
composition。不要仅为视觉效果另建一套 primitive。

公开 component catalog 与详细 specimen route 目前不纳入发布范围。整体产品改进
完成后，重新定义 information architecture、example quality 与 state verification
标准，再从头构建。在此之前，`src/components/ui` 只作为参考站点内部的
implementation layer 保留。

### Navigation 与 shell

`app-shell` 以 `{colors.canvas}` 作为安静底层。`top-nav` 高 56px，将目的地
navigation 与上下文 action 分开。只有空间压力需要时才切换为 sidebar 或
sheet；当前位置同时具备视觉和程序化 selected state。

### Button 与 link

- `button-primary`：每个 task region 一个，并用具体动词命名结果。
- `button-primary-pressed`：在按下时立即反馈，并从当前视觉状态连续返回或前进。
- `button-secondary`：使用 surface fill 与 hairline 的低强调操作。
- `button-destructive`：只用于破坏性结果，label 明确对象与动作。
- `button-icon`：44px 圆形 target，提供 accessible name，必要时提供 tooltip。
- `text-link`：正文中的目的地 navigation，不能只靠颜色表明链接身份。

button 支持 default、hover、active、focus-visible、disabled 与 loading。
loading 时保留 label 或等价 accessible name。disabled 不能替代不可用原因说明。

### Card 与 surface

`card` 是标准容器，`card-muted` 是非交互次级分组，`card-raised` 只用于真正
floating layer。不要把每段文字或每个指标都包进 card；先使用排版和留白。

可点击 card 只有一个主 interactive target。次级 action 必须独立可达，也不得
形成非法嵌套 control。

### 输入与表单

`text-input` 至少高 44px，具有持续 label、清晰 focus-visible，并为 help 或
error 留出空间。placeholder 只是示例，不能作为唯一 label。

1. 校验失败后保留用户输入。
2. error 放在对应 field 旁边。
3. 多个 field 阻止提交时增加可聚焦 summary。
4. 说明问题与具体修复方式。
5. 在 server 或 trust boundary 再次校验。

password manager、paste、autocomplete 和本地化 input mode 必须可用。

### Overlay 与 feedback

`dialog` 使用 level-3 elevation。它必须 trap focus、使背景 inert，并在不会
丢失不可逆操作时支持 `Escape` 关闭，关闭后把 focus 恢复到调用者。

status pill 只用于短状态。继续操作所需的错误与信息放在 inline；toast 仅用于
结果不在当前视野内的简短确认。

### 深色 variant

深色 variant 在 YAML 中显式定义，避免 agent 自行猜测。未单独记录的 component
必须映射到等价的 dark semantic role 后才算完整。

## Do's and Don'ts

### Do

- 在 component 和实现中使用 semantic token reference。
- 每个 task region 只设置一个明显 primary action。
- 在增加颜色或容器前先使用 typography、spacing 与内容层级。
- 从 causal event 开始 feedback，并保持空间连续性。
- 从一开始支持 pointer、touch、keyboard、assistive technology、zoom、
  localization、reduced motion 与 increased contrast。
- refresh 与可恢复失败时保留仍可使用的内容。
- 明确破坏性 action 的对象、后果与恢复路径。
- 验证与变更对应的真实 browser 或 device 行为。

### Don't

- 不在 component 中硬编码可复用 color、radius、shadow 或 spacing。
- 不把 primary blue 当装饰，也不在同一区域放多个 primary action。
- 不把所有 section 都放进 floating card。
- 不让 hover 成为必要内容或 action 的唯一入口。
- 不因 animation 正在执行而锁定 input。
- 不把 error 显示成 empty，不给无限期工作显示 skeleton，也不在服务端确认前
  显示“完成”。
- 不在没有更强 focus-visible 替代时移除 outline。
- 不为塞进布局而缩小 touch target、body type 或必要 column。

## Responsive Behavior

breakpoint 表示内容压力，而不是设备品牌。

| 范围       | 主要适配                                               |
| ---------- | ------------------------------------------------------ |
| `< 40rem`  | 单列、16px gutter、简洁 label、sheet 型次级 navigation |
| `40–48rem` | label 仍易读时使用双列 field                           |
| `48–64rem` | 持久 secondary navigation、更密 toolbar                |
| `64–80rem` | 多列内容、完整 table control、side panel               |
| `80–90rem` | 不拉长阅读行的宽 workspace                             |
| `> 90rem`  | 居中 1440px 内容或有意的 full-width 工作面             |

- 从 320 CSS px 开始，只在内容允许时增加复杂度。
- control 保持至少 44×44px target，并为相邻 target 留足间距。
- grid 通过减少 column 而不是把 card 压缩到难以阅读来适配。
- table 保留必要比较信息，只把低优先级 column 折叠为 labeled detail。
- image 声明尺寸，并让有意义主体留在 safe crop 内。
- 30% 文本扩张、200% text size 与 400% browser zoom 下核心任务仍可完成。

## Interaction & Motion

motion 用来解释因果与连续性。

- press feedback 在 100ms 内开始。
- micro transition 通常为 120–180ms，标准状态变化 180–240ms，大型 spatial
  transition 240–360ms。
- drag 在 threshold 后 1:1 跟随 pointer，并保留 grab offset。
- release velocity 延续到 settling 或 target selection。
- entry 与 exit 共享相关 origin 和 destination。
- 所有 animation 都能从当前渲染状态中断与反向。
- gesture-critical path 优先动画 `transform` 与 `opacity`。
- `prefers-reduced-motion` 去除 travel、parallax 与 decorative loop，但保留
  即时状态反馈和逻辑连续性。
- landing section 只使用 opacity 与不超过 16px 的 translate，并在 480ms 内完成。
  不使用 blur，也不添加纯装饰位移。

spring 适合 direct manipulation 与 spatial settling；timed easing 适合
opacity、color 与小型非空间过渡。

## Accessibility & Responsible UX

最低目标是 WCAG 2.2 AA。

- 优先 native semantics，只有 HTML 无法表达时才增加 ARIA。
- keyboard 顺序与视觉、阅读顺序一致；focus 始终可见，overlay 关闭后恢复。
- icon-only control 有 name，动态 status 使用合适的 live region。
- 普通 text 达到 4.5:1，大字号 3:1，non-text control 与 focus indicator 相对
  邻近颜色达到 3:1。
- 所有 string 位于 component logic 外，不拼接翻译句子片段。
- 日期、数字、货币、复数与相对时间使用 locale-aware formatter。
- 使用 logical property，使 RTL 无需平行 stylesheet。
- 在需要时请求最小权限，并在 OS/browser prompt 前解释用途。
- 敏感值不得出现在 URL、analytics、log 或 toast。
- 低成本可逆操作优先 undo；不可逆、金融、法律、隐私操作使用具体确认文案。
- 可能被误认为已验证事实的 AI 或不确定输出必须标注，高影响输出需要 review。

## State & Feedback

```text
idle → pending → success
             ↘ empty
             ↘ recoverable error → retrying
             ↘ terminal error

success → refreshing
success → stale 或 offline
```

- initial pending 没有可用数据；refreshing 保留旧数据。
- skeleton 与可预测的最终 geometry 一致。spinner 只用于小型 indeterminate
  action。
- empty state 说明这里应有什么、已知时说明为何为空，并给出最有用的下一步。
- error 留在可操作 scope，并依次说明结果、已保留内容的安全状态和恢复 action。
- optimistic update 只在成功概率高、rollback 确定且 pending 可见时使用。
- 重试 mutation 必须 idempotent，或在重复前与 server reconcile。

可分享 navigation state 放在 URL，需要服务端确认的 state 留在 server，本地
interaction state 留在 component。只有真实 cross-tree lifetime 出现后才引入
shared store。

## Content & Localization

先更新韩文 `DESIGN.md`；en、jp、cn 版本保持相同 heading 顺序、token、
inventory，以及 MUST、SHOULD、MAY 的强度。翻译保留含义，同时使用各语言自然的
语序与标点。

- 主页与所有详情页默认使用英文 `/`，并提供韩文 `/ko/`、日文 `/jp/` 与中文
  `/cn/`。语言选择优先读取 URL path，再读取浏览器中的偏好。
- 主页文案与 metadata 分别位于 `src/content/home/en.ts`、`ko.ts`、`jp.ts` 与
  `cn.ts`；详情页文案位于 `src/content/docs/`。
- site copy 不暴露内部文档治理术语。language selector 仅以 `KO`、`EN`、`JP`、
  `CN` 明确当前版本与可切换版本。
- 自然语言默认使用 `word-break: keep-all`。code、command、URL、file path、token
  在各自区域内安全 scroll 或 wrap。
- label 优先使用能说明结果的动词，而非模糊名词；placeholder 不能代替 label。
- 不拼接可翻译句子片段。日期、数字、货币与复数使用 locale-aware formatter。
- 将 30% text expansion、CJK line breaking、RTL logical property、200% text size
  纳入最小 localized regression set。

## Implementation Guide

当前参考实现使用 Vite 8.2、React 19.2、TypeScript 6 strict mode、Tailwind CSS
4.3、shadcn/ui source、Radix UI 与 Base UI primitive、Lucide、TanStack Table、
Recharts、Embla。库可以替换，但视觉、交互、可访问性与验证质量不能降低。

- Vite 在 `/design/` base 下构建 static site，并从 catalog manifest 生成 80 个
  route artifact。
- 将 YAML role 一次映射为 CSS variable 或 theme token，component 不重复 raw
  value。
- application primitive 不包含 domain logic。
- overlay、menu、tab、form 与 composite widget 从已测试 semantic primitive
  开始。
- 有意义的 component 变更覆盖相关 default、hover、active、focus-visible、
  disabled、loading、empty、error、light、dark、reduced-motion、contrast、
  long-content 与 localized state。

## Verification

完成前必须通过 `npm run verify:catalog`、`npm run lint`、`npm run check` 与
`npm run build`。catalog verification 必须确认正好 15 个 Foundation、80 条
static route、四种语言版本具有相同 Foundation inventory，以及 light
`#0066CC` 与 dark `#78B7FF` primary。

static output 必须包含英文 `dist/index.html`、韩文 `dist/ko/index.html`、日文
`dist/jp/index.html` 与中文 `dist/cn/index.html`。逐项检查 `lang`、canonical、
`hreflang`，并将英文设为 `x-default`。

browser QA 在 390px 与 1440px 检查首页、原则、Foundation 列表与详情 route，覆盖
search、empty/reset、Foundation specimen 与前后 navigation，并检查滚动后的 header top gap、
page overflow 与 rail separator 是否消失，以及 light/dark 和 reduced motion。
Axe violation 必须为 0；无法判定的 `incomplete` 单独记录。deployment 需确认
GitHub Pages job、live route、clean worktree，以及 local、upstream、live remote
的 `0 0` parity 均正常。

| 层级         | 检查项                                                          |
| ------------ | --------------------------------------------------------------- |
| Static       | type、lint、token/reference validation、production build        |
| Component    | role、name、keyboard、focus、variant、state rendering           |
| Browser      | route、overlay、responsive layout、overflow、真实 network state |
| Visual       | light/dark、320px、tablet、desktop、wide、zoom、long content    |
| Device 与 AT | 真实 touch 行为和代表性 screen reader 输出                      |

snapshot 只有在明确覆盖状态时才作为检查资料。source 与 unit test 不能替代尚未检查的
browser、device 或 assistive-technology 行为。

## Iteration Guide

1. 可复用精确值变化时先修改 YAML token。
2. inventory 变化时，将 `catalog.json`、实际 module、specimen、route，以及四种
   语言的 component 与 Foundation 清单作为一个逻辑单元更新。
3. 保持本文核心 heading 顺序，并先更新韩文 `DESIGN.md`。
4. state variant 添加到相关 component entry，并使用 `{token.references}`，
   不重复 raw value。
5. en、jp、cn 版本反映相同含义与 MUST、SHOULD、MAY 强度。
6. 运行 `npm run validate` 与 `git diff --check`。
7. 在真实 browser 中检查 light、dark、narrow、wide、keyboard、reduced motion、
   long content 与 locale state。
8. 每个逻辑单元都完成显式 staging、普通 push 与 `0 0` parity。

## Known Gaps

- 当前 palette 是中性的产品起点，不是产品专属品牌。
- 未规定 licensed custom font、logo、illustration 或 photography 语言。
- motion 范围是生产默认值；gesture-heavy 产品仍需测量和真机调整。
- data visualization 需要根据实际数据域制定独立的 accessible palette。
- navigation、table density、editor canvas、map、media timeline 与 finance UI
  要在信息架构确定后扩展。
- 译本保留合同，但实际产品的文案、字体、换行与 RTL 仍需逐项验证。

## References

- [Google Stitch: What is DESIGN.md?](https://stitch.withgoogle.com/docs/design-md/overview)
- [Google Stitch: The DESIGN.md specification](https://stitch.withgoogle.com/docs/design-md/specification)
- [Google Stitch: Validate with the CLI](https://stitch.withgoogle.com/docs/design-md/cli)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Apple Human Interface Guidelines: Motion](https://developer.apple.com/design/human-interface-guidelines/motion)
- [Apple Human Interface Guidelines: Materials](https://developer.apple.com/design/human-interface-guidelines/materials)
