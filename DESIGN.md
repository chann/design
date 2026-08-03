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

> **상태:** 규범적 디자인 참조 문서 · **DESIGN.md 스키마:** `alpha`
>
> **언어:** 한국어 [DESIGN.md](./DESIGN.md)가 기본이자 최종 기준(SSOT)입니다.
> 동기화된 번역본: [English](./DESIGN.en.md) · [简体中文](./DESIGN.cn.md) ·
> [日本語](./DESIGN.jp.md)

YAML front matter는 기계가 읽는 토큰 계약이고, 본문은 그 값을 언제 어떻게
적용할지 설명합니다. 둘이 충돌할 때 정확한 값은 토큰을, 의도·위계·동작은
본문을 따릅니다.

**MUST**, **SHOULD**, **MAY**는 각각 필수, 권장, 허용을 뜻합니다.

## Overview

Comfort Design System은 대시보드, 제작 도구, 설정, 커머스, 운영 워크플로처럼 집중이
필요한 제품 인터페이스를 위한 시스템입니다. 차가운 뉴트럴 표면, 절제된 단일
블루 액션 컬러, 시스템 우선 타이포그래피, 명확한 컨테인먼트, 원인과 이동
방향을 설명하는 모션이 핵심입니다.

| 품질            | 사용자가 느껴야 하는 것                    | 화면에서 확인되는 근거                                           |
| --------------- | ------------------------------------------ | ---------------------------------------------------------------- |
| **Comfort**     | “할 일에 집중할 수 있다.”                  | 하나의 명확한 주 액션, 절제된 색, 점진적 공개, 안정된 레이아웃   |
| **Direct**      | “인터페이스가 나를 따른다.”                | 누르는 순간의 반응, 1:1 드래그, 중단·역전 가능한 모션            |
| **Trustworthy** | “무슨 일이 일어났고 어떻게 복구할지 안다.” | 명시적 상태, 인라인 검증, 안전한 재시도, 실행 취소와 구체적 확인 |

세 품질이 충돌하면 신뢰, 직접성, 시각적 차분함 순으로 지킵니다. 안전과
접근성은 언제나 장식보다 우선합니다.

**시그니처 특성:**

- 부드러운 `{colors.canvas}` 위에 선명한 `{colors.surface}`를 배치합니다.
- `{colors.primary}`는 액션, 포커스, 링크, 선택에만 사용합니다.
- 큰 글자는 조밀하고 자신감 있게, 본문은 여유 있고 읽기 쉽게 구성합니다.
- 모서리는 부드럽게 다듬되 pill은 상태와 압축 필터에만 씁니다.
- 표면 대비, hairline, 절제된 그림자로 깊이를 만듭니다.
- 모션은 원인, 방향, 공간적 연속성을 보존합니다.
- 모든 컴포넌트는 키보드, 터치, 긴 콘텐츠, 다국어, 라이트·다크 테마를
  처음부터 고려합니다.

완성도 높은 네이티브 인터페이스의 규율을 참고하지만 특정 플랫폼이나 회사의
UI를 복제하지 않습니다.

## Colors

### 핵심 역할

- **Primary** (`{colors.primary}` — #0066CC): 유일한 범용 인터랙션
  액센트입니다. 주 액션, 링크, 포커스 링, 활성 내비게이션, 선택 상태에 씁니다.
- **Primary Strong** (`{colors.primary-strong}` — #004F9E): 눌림 또는 강화된
  primary 상태입니다. 별도의 액센트 계열처럼 확장하지 않습니다.
- **Canvas** (`{colors.canvas}` — #F7F8FA): 기본 페이지 바닥입니다.
- **Surface** (`{colors.surface}` — #FFFFFF): 카드, 컨트롤, 핵심 콘텐츠
  영역입니다.
- **Surface Soft** (`{colors.surface-soft}` — #EEF1F5): 그룹 컨트롤, 조용한
  밴드, skeleton, 보조 컨테이너에 씁니다.
- **Surface Raised** (`{colors.surface-raised}` — #FFFFFF): elevation과 함께
  쓰는 떠 있는 콘텐츠입니다.

### 콘텐츠와 구조

- **Ink** (`{colors.ink}`): 제목과 주요 콘텐츠.
- **Body** (`{colors.body}`): 본문과 보조 콘텐츠.
- **Muted** (`{colors.muted}`): 캡션과 메타데이터. 필수 정보를 muted만으로
  전달해서는 안 됩니다.
- **Hairline** (`{colors.hairline}`): 구분선, 필드 외곽선, 조용한 경계.

### 시맨틱 역할

- `{colors.destructive}`는 되돌릴 수 없거나 영향이 큰 액션과 오류에만 씁니다.
- `{colors.success}`는 서버가 확인한 완료를 뜻합니다.
- `{colors.warning}`은 아직 피할 수 있는 결과를 알립니다.
- `{colors.info}`는 primary가 인터랙션으로 오해될 수 있는 중립 정보에 씁니다.

상태는 색과 함께 아이콘, 라벨, 패턴 중 하나 이상을 반드시 사용합니다.

### 다크 테마

다크 모드는 단순 반전이 아니라 역할 기반 톤 재매핑입니다.
`{colors.dark-canvas}`가 바닥, `{colors.dark-surface}`와
`{colors.dark-surface-raised}`가 컨테이너, `{colors.dark-ink}`와
`{colors.dark-body}`가 콘텐츠 위계를 담당합니다. `{colors.dark-primary}`는
빛나 보이지 않으면서 충분히 눈에 띄어야 합니다.

테마 전환 후에도 시맨틱 역할, 대비, 컴포넌트 위계가 유지되어야 합니다.

## Typography

기본은 시스템 우선 sans stack입니다. Inter를 크로스플랫폼 기본으로 삼되 Apple
플랫폼에서는 fallback을 통해 시스템 글꼴이 렌더링될 수 있습니다. 커스텀
글꼴은 브랜드 이유, 라이선스 배포, metric-compatible fallback이 있을 때만
도입합니다.

| 토큰                       | 크기 | 굵기 | 행간 | 자간     | 용도               |
| -------------------------- | ---- | ---- | ---- | -------- | ------------------ |
| `{typography.display}`     | 64px | 700  | 1.02 | -0.035em | 단일 hero 문장     |
| `{typography.headline-lg}` | 48px | 700  | 1.08 | -0.03em  | 페이지 제목        |
| `{typography.headline-md}` | 32px | 680  | 1.15 | -0.022em | 주요 섹션          |
| `{typography.title-lg}`    | 24px | 650  | 1.25 | -0.015em | 패널·기능 제목     |
| `{typography.title-md}`    | 20px | 620  | 1.3  | -0.01em  | 카드·대화상자 제목 |
| `{typography.body-lg}`     | 18px | 400  | 1.55 | 0        | 리드 문장          |
| `{typography.body-md}`     | 16px | 400  | 1.55 | 0        | 기본 본문과 컨트롤 |
| `{typography.body-sm}`     | 14px | 400  | 1.5  | 0.005em  | 보조 UI 문구       |
| `{typography.label}`       | 14px | 600  | 1.3  | 0.005em  | 버튼·탭·필드 라벨  |
| `{typography.caption}`     | 12px | 500  | 1.4  | 0.01em   | 메타데이터·상태    |
| `{typography.code}`        | 14px | 400  | 1.55 | 0        | 코드·명령·기계 값  |

- 각 route에는 설명적인 `h1`이 하나 있어야 하며 heading level을 외형 때문에
  고르지 않습니다.
- display 크기는 `clamp()`로 조절하되 모바일에서도 위계와 가독성을 지킵니다.
- 본문 한 줄은 45–75자를 권장합니다.
- 강조는 새 색이나 더 큰 크기보다 굵기를 먼저 사용합니다.
- 기본 문체는 sentence case입니다.
- 비교 숫자는 tabular figures를 권장합니다.
- CJK는 언어별 줄바꿈과 더 넉넉한 행간이 필요할 수 있습니다. Latin 수치를
  번역문에 강제하지 않습니다.

## Layout

### 간격 체계

기본 단위는 4px입니다. 임의 값을 만들지 말고 YAML scale을 사용합니다.
`xxs/xs`는 아이콘과 라벨, `sm/md`는 컨트롤과 관련 콘텐츠, `lg/xl`은 카드와
그룹, `xxl/section`은 큰 영역 구분에 사용합니다. 기본 page gutter는 24px이며
좁은 화면에서 16px, 넓은 화면에서 32px까지 조정할 수 있습니다.

### 그리드와 컨테이너

- app shell은 viewport를 채우고 핵심 콘텐츠는 최대 1440px 안에 둡니다.
- 읽기 열은 넓은 workspace에서도 약 65자로 제한합니다.
- 페이지 구조는 12-column grid, 지역적 구성은 content-driven CSS Grid를
  사용합니다.
- 1차원 정렬은 Flexbox, 형제 간 간격은 `gap`을 우선합니다.
- 재사용 컴포넌트는 container query, shell은 viewport breakpoint로
  조절합니다.
- 밀도 높은 workspace도 반복 액션과 내비게이션 위치는 안정적으로 유지합니다.

여백은 판단 단위를 분리하고 위계를 세우는 도구입니다. 빈 공간을 gradient,
badge, 장식 카드로 채우지 않습니다. 관련된 것은 가깝게, 관련 없는 영역은
명확한 section gap으로 구분합니다.

320 CSS px 이상에서 페이지 전체 가로 스크롤은 허용하지 않습니다. 데이터
영역의 경계와 affordance가 명확할 때만 해당 영역 내부 스크롤을 허용합니다.

## Elevation & Depth

| 레벨              | 처리                                  | 용도                          |
| ----------------- | ------------------------------------- | ----------------------------- |
| **0 — Flat**      | canvas 또는 surface, shadow 없음      | 페이지 콘텐츠, inset 영역     |
| **1 — Contained** | surface 대비 + hairline               | 카드, 그룹 컨트롤, sticky bar |
| **2 — Floating**  | raised surface + 짧고 부드러운 shadow | menu, popover, 비모달 panel   |
| **3 — Modal**     | raised surface + 넓은 shadow + scrim  | dialog, modal sheet           |

```css
--shadow-1: 0 1px 2px rgb(16 24 40 / 6%), 0 4px 12px rgb(16 24 40 / 4%);
--shadow-2: 0 8px 24px rgb(16 24 40 / 10%), 0 2px 8px rgb(16 24 40 / 6%);
--shadow-3: 0 20px 50px rgb(16 24 40 / 16%), 0 8px 18px rgb(16 24 40 / 8%);
```

- shadow는 실제 stacking 관계를 설명해야 합니다.
- 중첩 surface는 shadow를 더하기 전에 톤 대비를 사용합니다.
- 포커스나 선택을 elevation만으로 표현하지 않습니다.
- 반투명 UI에는 reduced transparency, increased contrast, 미지원 브라우저용
  불투명 fallback이 필요합니다.
- scrim은 시각적 경쟁을 줄일 뿐 modal semantics, focus trap, background
  inert를 대신하지 않습니다.

## Shapes

형태 언어는 부드럽지만 정밀합니다.

| 토큰             | 값     | 용도                                  |
| ---------------- | ------ | ------------------------------------- |
| `{rounded.none}` | 0px    | divider, full-bleed 영역, table seam  |
| `{rounded.sm}`   | 6px    | tag, 작은 control, code fragment      |
| `{rounded.md}`   | 10px   | button, input, menu item              |
| `{rounded.lg}`   | 14px   | card, grouped panel                   |
| `{rounded.xl}`   | 20px   | dialog, sheet, 큰 floating surface    |
| `{rounded.full}` | 9999px | 원형 icon button, status pill, avatar |

중첩 surface는 부모와 같거나 더 작은 radius를 씁니다. pill은 상태, 압축 필터,
실제 원형 컨트롤에만 사용합니다. segmented control은 개별 capsule을 반복하지
말고 하나의 외곽 실루엣을 공유합니다.

## Components

YAML component entry는 재사용 가능한 시각 원자를 정의합니다. application
component는 이를 조합하되 시맨틱 역할을 바꾸면 안 됩니다.

### 내비게이션과 shell

`app-shell`은 `{colors.canvas}`를 조용한 바닥으로 사용합니다. `top-nav`는
56px 높이이며 목적지 내비게이션과 맥락 액션을 분리합니다. 공간이 부족할 때만
sidebar나 sheet로 전환하고, 현재 목적지는 시각적·프로그램적 선택 상태를 모두
제공합니다.

### 버튼과 링크

- `button-primary`: task region마다 하나. 구체적 동사로 결과를 명명합니다.
- `button-primary-pressed`: 누른 원인에 즉시 반응하고 현재 상태에서 연속적으로
  복귀하거나 다음 상태로 이동합니다.
- `button-secondary`: surface fill과 hairline을 쓰는 낮은 강조 액션입니다.
- `button-destructive`: 파괴적 결과에만 쓰며 객체와 액션을 라벨에 명시합니다.
- `button-icon`: 44px 원형 target. accessible name과 필요 시 tooltip을
  제공합니다.
- `text-link`: 본문 안의 목적지 이동이며 색상 외 단서로도 링크임을 알 수 있어야
  합니다.

버튼은 default, hover, active, focus-visible, disabled, loading 상태를
지원합니다. loading 중에도 라벨 또는 동등한 accessible name을 유지합니다.
disabled는 액션을 사용할 수 없는 이유를 설명하는 수단이 아닙니다.

### 카드와 surface

`card`는 표준 컨테이너, `card-muted`는 비인터랙티브 보조 그룹,
`card-raised`는 실제 floating layer에만 사용합니다. 모든 문장이나 지표를
카드로 감싸지 말고 타이포그래피와 여백을 먼저 사용합니다.

클릭 가능한 카드는 주 interactive target이 하나여야 합니다. 보조 액션은
별도로 접근 가능해야 하며 잘못된 중첩 control을 만들면 안 됩니다.

### 입력과 폼

`text-input`은 최소 44px 높이, 지속 라벨, 명확한 focus-visible, 도움말·오류
공간을 가집니다. placeholder는 예시일 뿐 유일한 라벨이 될 수 없습니다.

1. 검증 실패 후에도 입력을 보존합니다.
2. 오류는 해당 field 옆에 둡니다.
3. 여러 field가 제출을 막으면 focus되는 summary를 추가합니다.
4. 문제와 구체적 해결 방법을 말합니다.
5. server 또는 trust boundary에서 다시 검증합니다.

password manager, paste, autocomplete, locale별 input mode가 동작해야 합니다.

### overlay와 feedback

`dialog`는 level-3 elevation을 사용합니다. focus를 가두고 background를 inert로
만들며, irreversible operation이 유실되는 경우가 아니라면 `Escape`로 닫고
호출자에게 focus를 돌려줍니다.

status pill은 짧은 상태 라벨에만 사용합니다. 계속 봐야 하는 오류와 정보는
inline에 둡니다. toast는 결과가 화면 밖에 있는 짧은 확인에만 사용합니다.

### 다크 변형

다크 variant는 agent가 임의로 매핑하지 않도록 YAML에 명시합니다. 문서화되지
않은 컴포넌트는 동등한 dark semantic role을 적용해야 완료로 간주합니다.

## Do's and Don'ts

### Do

- component와 구현에서 semantic token reference를 사용합니다.
- task region마다 명확한 primary action을 하나 둡니다.
- 새 색이나 container보다 타이포그래피, 간격, 콘텐츠 위계를 먼저 사용합니다.
- causal event에서 feedback을 시작하고 공간적 연속성을 유지합니다.
- pointer, touch, keyboard, assistive technology, zoom, localization,
  reduced motion, increased contrast를 처음부터 지원합니다.
- refresh와 복구 가능한 실패 중에도 쓸 수 있는 콘텐츠를 유지합니다.
- 파괴적 action의 객체, 결과, 복구 경로를 구체적으로 명명합니다.
- 변경과 관련된 실제 browser 또는 device 동작을 검증합니다.

### Don't

- 재사용할 색, radius, shadow, spacing을 component 안에 raw value로 넣지 않습니다.
- primary blue를 장식으로 쓰거나 한 영역에 primary action을 여러 개 두지 않습니다.
- 모든 section을 floating card 안에 넣지 않습니다.
- hover를 필수 콘텐츠나 액션의 유일한 경로로 만들지 않습니다.
- animation 실행 중이라는 이유로 input을 잠그지 않습니다.
- error를 empty로, 무기한 작업을 skeleton으로 표시하거나 서버 확인 전에
  “완료”라고 말하지 않습니다.
- 더 강한 focus-visible 대체 없이 outline을 제거하지 않습니다.
- layout을 맞추려고 touch target, body type, 필수 column을 축소하지 않습니다.

## Responsive Behavior

breakpoint는 기기 이름이 아니라 콘텐츠 압력을 뜻합니다.

| 범위       | 주요 적응                                               |
| ---------- | ------------------------------------------------------- |
| `< 40rem`  | 1열, 16px gutter, 간결한 label, sheet형 보조 navigation |
| `40–48rem` | label이 읽히는 경우 2열 field                           |
| `48–64rem` | 지속 secondary navigation, 조밀한 toolbar               |
| `64–80rem` | 다열 content, 전체 table control, side panel            |
| `80–90rem` | reading line을 늘리지 않는 넓은 workspace               |
| `> 90rem`  | 1440px 중앙 content 또는 의도적 full-width 작업면       |

- 320 CSS px에서 시작하고 콘텐츠가 허용할 때만 복잡도를 늘립니다.
- control은 최소 44×44px target과 충분한 인접 간격을 유지합니다.
- grid는 card를 읽기 어려울 만큼 줄이지 말고 column 수를 줄입니다.
- table은 필수 비교 정보를 보존하고 낮은 우선순위 column만 labeled detail로
  접습니다.
- image는 치수를 선언하고 의미 있는 피사체가 safe crop 안에 남도록 합니다.
- 30% text expansion, 200% text size, 400% browser zoom에서도 핵심 task가
  유지되어야 합니다.

## Interaction & Motion

모션은 원인과 연속성을 설명합니다.

- press feedback은 100ms 안에 시작합니다.
- micro transition은 보통 120–180ms, 표준 상태 변화는 180–240ms, 큰 spatial
  transition은 240–360ms 범위를 사용합니다.
- drag는 threshold 이후 pointer를 1:1로 추적하고 grab offset을 보존합니다.
- release velocity는 settling 또는 target 선택에 이어집니다.
- entry와 exit는 관련된 origin과 destination을 공유합니다.
- 모든 animation은 현재 렌더링 상태에서 중단·역전할 수 있어야 합니다.
- gesture-critical path는 `transform`과 `opacity`를 우선합니다.
- `prefers-reduced-motion`에서는 travel, parallax, decorative loop를 제거하되
  즉각적인 상태 feedback과 논리적 연속성은 유지합니다.

spring은 direct manipulation과 spatial settling에, timed easing은 opacity,
color, 작은 비공간 전환에 적합합니다.

## Accessibility & Responsible UX

최소 목표는 WCAG 2.2 AA입니다.

- native semantics를 먼저 사용하고 HTML로 표현할 수 없을 때만 ARIA를 추가합니다.
- keyboard 순서는 시각·읽기 순서와 같고 focus는 항상 보이며 overlay가 닫히면
  호출 위치로 복구됩니다.
- icon-only control에는 name이 있고 동적 status는 적절한 live region을 씁니다.
- 일반 text는 4.5:1, large text는 3:1, non-text control과 focus indicator는
  인접 색 대비 3:1을 충족합니다.
- 모든 string은 component logic 밖에 두며 번역 문장 조각을 이어 붙이지 않습니다.
- 날짜, 숫자, 통화, 복수형, 상대 시간은 locale-aware formatter를 사용합니다.
- logical property를 사용해 RTL을 별도 stylesheet 없이 지원합니다.
- 최소 권한을 필요한 순간 요청하고 OS/browser prompt 전에 목적을 설명합니다.
- 민감한 값은 URL, analytics, log, toast에 넣지 않습니다.
- 저비용 가역 action은 undo를 우선하고, irreversible·financial·legal·privacy
  action은 구체적 문구로 확인합니다.
- 검증된 사실로 오해할 수 있는 AI·불확실 출력은 표시하고 영향이 큰 출력에는
  review 단계를 둡니다.

## State & Feedback

```text
idle → pending → success
             ↘ empty
             ↘ recoverable error → retrying
             ↘ terminal error

success → refreshing
success → stale 또는 offline
```

- initial pending에는 쓸 수 있는 data가 없고 refreshing에는 이전 data를 유지합니다.
- skeleton은 예측 가능한 최종 geometry와 같아야 합니다. spinner는 작고
  indeterminate한 action에만 씁니다.
- empty state는 무엇이 들어가는지, 가능한 경우 왜 비었는지, 다음 action을
  설명합니다.
- error는 조치 가능한 scope에 두고 결과, 보존된 작업의 안전, 복구 action을
  순서대로 말합니다.
- optimistic update는 성공 가능성이 높고 rollback이 결정적이며 pending 상태가
  보일 때만 사용합니다.
- 재시도 mutation은 idempotent하거나 반복 전 server 상태를 reconcile합니다.

공유 가능한 navigation state는 URL, authoritative state는 server, local
interaction은 component에 둡니다. shared store는 실제 cross-tree lifetime이
확인된 뒤에만 도입합니다.

## Implementation Contract

참조 구현은 Next.js App Router, React, TypeScript strict mode, Tailwind CSS,
소유하는 shadcn/ui source, 필요한 Radix primitive, Lucide, Motion for React를
가정합니다. 라이브러리는 바꿀 수 있지만 시각·인터랙션·접근성·증거 계약은
바꿀 수 없습니다.

- Server Component가 privileged data access와 initial render를 소유하고 client
  boundary는 interaction에 필요한 최소 범위로 둡니다.
- YAML role을 CSS variable 또는 theme token에 한 번 매핑하고 component는
  raw value를 중복하지 않습니다.
- application primitive에는 domain logic을 넣지 않습니다.
- overlay, menu, tab, form, composite widget은 검증된 semantic primitive에서
  시작합니다.
- 의미 있는 component 변경은 해당하는 default, hover, active, focus-visible,
  disabled, loading, empty, error, light, dark, reduced-motion, contrast,
  long-content, localized state를 다룹니다.

| 계층      | 필요한 증거                                                     |
| --------- | --------------------------------------------------------------- |
| Static    | type, lint, token/reference validation, production build        |
| Component | role, name, keyboard, focus, variant, state rendering           |
| Browser   | route, overlay, responsive layout, overflow, 실제 network state |
| Visual    | light/dark, 320px, tablet, desktop, wide, zoom, long content    |
| Device·AT | 실제 touch 동작과 대표 screen reader 출력                       |

snapshot은 어떤 상태를 다루는지 명시할 때만 증거가 됩니다. source와 unit test는
확인하지 못한 browser, device, assistive-technology 동작의 대체 증거가 아닙니다.

## Iteration Guide

1. 재사용 정확 값이 바뀌면 YAML token을 먼저 수정합니다.
2. canonical 8개 section 순서를 유지하며 해당 본문을 함께 수정합니다.
3. 한 번에 하나의 component family를 다루고 YAML key를 참조합니다.
4. state variant는 관련 component entry로 추가합니다.
5. YAML component에서는 raw value 반복 대신 `{token.references}`를 사용합니다.
6. `npx @google/design.md lint DESIGN.md`의 error와 warning을 해결합니다.
7. light, dark, narrow, wide, keyboard, reduced motion, long content, locale
   상태를 확인합니다.
8. token 또는 normative behavior가 바뀌면 모든 언어본을 동기화합니다.

## Known Gaps

- 현재 palette는 제품별 브랜드가 아니라 뉴트럴한 출발점입니다.
- licensed custom font, logo, illustration, photography 방향은 포함하지 않습니다.
- motion 범위는 기본값이며 gesture-heavy 제품은 측정과 실제 기기 조율이
  필요합니다.
- data visualization은 실제 데이터 영역에 맞춘 별도 accessible palette가
  필요합니다.
- navigation, table density, editor canvas, map, media timeline, finance UI는
  정보 구조가 정해진 뒤 확장해야 합니다.
- 번역본은 계약을 보존하지만 실제 제품의 copy, font, line breaking, RTL은
  제품별로 다시 검증해야 합니다.

## References

- [Google Stitch: What is DESIGN.md?](https://stitch.withgoogle.com/docs/design-md/overview)
- [Google Stitch: The DESIGN.md specification](https://stitch.withgoogle.com/docs/design-md/specification)
- [Google Stitch: Validate with the CLI](https://stitch.withgoogle.com/docs/design-md/cli)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Apple Human Interface Guidelines: Motion](https://developer.apple.com/design/human-interface-guidelines/motion)
- [Apple Human Interface Guidelines: Materials](https://developer.apple.com/design/human-interface-guidelines/materials)
