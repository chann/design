# 🎨 shadcn/ui 기반 웹 애플리케이션 디자인 시스템 & 아키텍처 명세서 (`design.md`)

본 문서는 **`shadcn/ui`** 및 **Tailwind CSS**를 기반으로 구축되는 모던 웹 애플리케이션의 디자인 시스템, UI/UX 규격, 컴포넌트 아키텍처 및 개발 표준 가이드를 정의합니다. 프로젝트 개발 과정에서 일관된 사용자 경험(UX), 확장 가능한 코드베이스, 그리고 뛰어난 시각적 완성도(Visual Excellence)를 유지하기 위한 단일 진실 출처(Single Source of Truth) 역할을 합니다.

---

## 📋 목차 (Table of Contents)

1. [프로젝트 개요 및 핵심 원칙 (Overview & Core Principles)](#1-프로젝트-개요-및-핵심-원칙-overview--core-principles)
2. [기술 스택 및 핵심 아키텍처 (Tech Stack & Core Architecture)](#2-기술-스택-및-핵심-아키텍처-tech-stack--core-architecture)
3. [디자인 토큰 & 테마 시스템 (Design Tokens & Theme System)](#3-디자인-토큰--테마-시스템-design-tokens--theme-system)
4. [shadcn/ui 컴포넌트 아키텍처 (Component Architecture)](#4-shadcnui-컴포넌트-아키텍처-component-architecture)
5. [레이아웃 & 정보 설계 (Layout & Information Architecture)](#5-레이아웃--정보-설계-layout--information-architecture)
6. [상태 관리 & 데이터 흐름 (State Management & Data Flow)](#6-상태-관리--데이터-흐름-state-management--data-flow)
7. [개발 표준 & 코딩 컨벤션 (Development Standards & Conventions)](#7-개발-표준--코딩-컨벤션-development-standards--conventions)
8. [프로젝트 셋업 및 품질 체크리스트 (Setup & Quality Checklist)](#8-프로젝트-셋업-및-품질-체크리스트-setup--quality-checklist)

---

## 1. 프로젝트 개요 및 핵심 원칙 (Overview & Core Principles)

### 1.1 프로젝트 비전 (Vision)
본 디자인 시스템은 사용자에게 **시각적 경이로움(Wow factor)**과 **직관적이고 매끄러운 UX**를 제공하며, 개발자에게는 **강력한 타입 안정성**과 **최고 수준의 개발 생산성**을 제공하는 것을 목표로 합니다.

### 1.2 5대 핵심 디자인 원칙 (Core Design Principles)

| 원칙 | 설명 | 적용 방식 |
| :--- | :--- | :--- |
| **1. Ownership (코드 소유권)** | 패키지 의존성에 갇히지 않고 코드 자체를 프로젝트 내부로 소유합니다. | `shadcn/ui` CLI를 통해 컴포넌트를 `components/ui`에 직접 복사하여 필요에 따라 커스텀 구현 |
| **2. Accessibility First (접근성 우선)** | 모든 사용자가 제약 없이 사용할 수 있는 UI를 구현합니다. | Radix UI Primitives 기반 WAI-ARIA 표준 준수, 키보드 내비게이션 및 포커스 링 관리 |
| **3. Design Token Consistency (토큰 일관성)** | 하드코딩된 색상/크기를 배제하고 CSS 변수 및 Tailwind 클래스를 사용합니다. | Semantic Color Tokens (`--primary`, `--background`, `--muted` 등) 중심 설계 |
| **4. Micro-Interactions & Motion (생동감)** | 정적인 화면을 피하고 매끄러운 트랜지션과 시각적 피드백을 제공합니다. | Framer Motion 및 Tailwind CSS animations 활용한 상태 전환 및 호버 애니메이션 |
| **5. Composition over Inheritance (조합성)** | 복잡한 단일 컴포넌트 대신 유연하고 합성 가능한 작은 조각들을 조합합니다. | Radix `Slot` (`asChild`) 및 Compound Component 패턴 적극 채택 |

---

## 2. 기술 스택 및 핵심 아키텍처 (Tech Stack & Core Architecture)

### 2.1 메인 기술 스택 (Tech Stack)

```mermaid
graph TD
    A[Next.js App Router] --> B[React 19 & TypeScript]
    B --> C[Tailwind CSS v4/v3 & CSS Variables]
    C --> D[shadcn/ui & Radix UI Primitives]
    D --> E[Lucide Icons & Framer Motion]
    B --> F[TanStack Query & Zustand]
    B --> G[React Hook Form & Zod]
```

- **Core Framework**: [Next.js (App Router)](https://nextjs.org/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + CSS Variables (OKLCH / HSL)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (powered by [Radix UI Primitives](https://www.radix-ui.com/))
- **Utilities**: `clsx` + `tailwind-merge` (`cn()` helper), `class-variance-authority` (CVA)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) (Light / Dark / System Mode 지원)
- **Form & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **State Management**: [TanStack Query v5](https://tanstack.com/query) (서버 상태) + [Zustand](https://zustand-demo.pmnd.rs/) (전역 클라이언트 상태)

### 2.2 디렉토리 아키텍처 (Directory Structure)

```text
.
├── app/                      # Next.js App Router 페이지 및 레이아웃
│   ├── (auth)/               # 인증 관련 라우트 그룹
│   ├── (dashboard)/          # 대시보드 및 메인 앱 라우트 그룹
│   ├── api/                  # API Route Handlers
│   ├── globals.css           # 글로벌 CSS 및 CSS 변수 토큰 정의
│   ├── layout.tsx            # Root Layout (Theme, Query Provider 포함)
│   └── page.tsx              # 랜딩 / 메인 페이지
├── components/               # 재사용 가능한 UI 컴포넌트 모음
│   ├── ui/                   # shadcn/ui 원자적(Atomic) 컴포넌트 (Button, Dialog 등)
│   ├── common/               # 비즈니스 중립적 공통 컴포넌트 (Header, Footer 등)
│   ├── features/             # 도메인/기능별 특화 컴포넌트 (UserAvatar, PaymentCard 등)
│   └── providers/            # React Context Providers (ThemeProvider, QueryProvider 등)
├── config/                   # 앱 전역 설정 (site.ts, navigation.ts 등)
├── hooks/                    # 커스텀 커스텀 훅 (use-debounce.ts, use-media-query.ts 등)
├── lib/                      # 유틸리티 및 헬퍼 함수
│   ├── utils.ts              # cn() 함수 등 공통 유틸
│   └── validations/          # Zod 스키마 정의
├── types/                    # TypeScript 공통 타입 및 인터페이스
└── public/                   # 정적 자원 (이미지, 폰트, 파비콘)
```

---

## 3. 디자인 토큰 & 테마 시스템 (Design Tokens & Theme System)

`shadcn/ui`의 디자인 시스템은 **CSS 변수 기반의 시맨틱 토큰(Semantic Tokens)**을 채택하여 Light Mode와 Dark Mode 간의 전환을 매끄럽게 처리하고, 컴포넌트 레벨에서 하드코딩된 색상을 추상화합니다.

### 3.1 OKLCH / HSL 색상 변수 명세 (Color Tokens)

프로젝트에서는 최신 웹 표준인 **OKLCH** 또는 **HSL** 색상 공간을 사용하여 지각적으로 일관된 지각(Perceptual Uniformity) 및 매끄러운 그라데이션 변환을 구현합니다.

```css
/* app/globals.css 예시 명세 */
@layer base {
  :root {
    --background: oklch(0.99 0 0);           /* #ffffff / pure light */
    --foreground: oklch(0.14 0.005 285.8);   /* #09090b / deep zinc */

    --card: oklch(1 0 0);
    --card-foreground: oklch(0.14 0.005 285.8);

    --popover: oklch(1 0 0);
    --popover-foreground: oklch(0.14 0.005 285.8);

    --primary: oklch(0.21 0.006 285.8);       /* Deep slate/zinc primary */
    --primary-foreground: oklch(0.98 0 0);

    --secondary: oklch(0.96 0.003 264.5);     /* Soft gray highlight */
    --secondary-foreground: oklch(0.21 0.006 285.8);

    --muted: oklch(0.96 0.003 264.5);
    --muted-foreground: oklch(0.55 0.013 285.8);

    --accent: oklch(0.96 0.003 264.5);
    --accent-foreground: oklch(0.21 0.006 285.8);

    --destructive: oklch(0.57 0.24 27.3);     /* Vibrant alert red */
    --destructive-foreground: oklch(0.98 0 0);

    --border: oklch(0.91 0.005 285.8);
    --input: oklch(0.91 0.005 285.8);
    --ring: oklch(0.70 0.015 285.8);

    --chart-1: oklch(0.64 0.22 41.1);
    --chart-2: oklch(0.60 0.11 184.7);
    --chart-3: oklch(0.39 0.08 225.4);
    --chart-4: oklch(0.82 0.18 84.4);
    --chart-5: oklch(0.76 0.17 162.4);

    --sidebar-background: oklch(0.98 0 0);
    --sidebar-foreground: oklch(0.26 0.006 285.8);
    --sidebar-primary: oklch(0.21 0.006 285.8);
    --sidebar-primary-foreground: oklch(0.98 0 0);
    --sidebar-accent: oklch(0.96 0.003 264.5);
    --sidebar-accent-foreground: oklch(0.21 0.006 285.8);
    --sidebar-border: oklch(0.91 0.005 285.8);
    --sidebar-ring: oklch(0.70 0.015 285.8);

    --radius: 0.625rem;                      /* 10px base border-radius */
  }

  .dark {
    --background: oklch(0.14 0.005 285.8);   /* Dark background */
    --foreground: oklch(0.98 0 0);

    --card: oklch(0.18 0.006 285.8);
    --card-foreground: oklch(0.98 0 0);

    --popover: oklch(0.18 0.006 285.8);
    --popover-foreground: oklch(0.98 0 0);

    --primary: oklch(0.98 0 0);
    --primary-foreground: oklch(0.21 0.006 285.8);

    --secondary: oklch(0.26 0.006 285.8);
    --secondary-foreground: oklch(0.98 0 0);

    --muted: oklch(0.26 0.006 285.8);
    --muted-foreground: oklch(0.70 0.015 285.8);

    --accent: oklch(0.26 0.006 285.8);
    --accent-foreground: oklch(0.98 0 0);

    --destructive: oklch(0.39 0.14 22.7);
    --destructive-foreground: oklch(0.98 0 0);

    --border: oklch(0.26 0.006 285.8);
    --input: oklch(0.26 0.006 285.8);
    --ring: oklch(0.44 0.01 285.8);

    --chart-1: oklch(0.48 0.24 264.3);
    --chart-2: oklch(0.69 0.17 162.4);
    --chart-3: oklch(0.76 0.18 70.08);
    --chart-4: oklch(0.62 0.26 305.4);
    --chart-5: oklch(0.64 0.25 16.43);

    --sidebar-background: oklch(0.18 0.006 285.8);
    --sidebar-foreground: oklch(0.98 0 0);
    --sidebar-primary: oklch(0.48 0.24 264.3);
    --sidebar-primary-foreground: oklch(0.98 0 0);
    --sidebar-accent: oklch(0.26 0.006 285.8);
    --sidebar-accent-foreground: oklch(0.98 0 0);
    --sidebar-border: oklch(0.26 0.006 285.8);
    --sidebar-ring: oklch(0.44 0.01 285.8);
  }
}
```

### 3.2 시맨틱 토큰 매핑 매트릭스 (Semantic Token Mapping)

| 시맨틱 토큰 명 | 폰트/요소 용도 | Light Mode 느낌 | Dark Mode 느낌 |
| :--- | :--- | :--- | :--- |
| `bg-background` | 기본 뷰포트 / 문서 배경 | 순백색 / 클린 미색 | 은은한 딥 차콜/울트라 다크 |
| `text-foreground` | 메인 텍스트, 헤더 | 검정에 가까운 차콜 (`#09090b`) | 밝은 소프트 화이트 (`#fafafa`) |
| `bg-card` | 카드, 대화상자 컨테이너 | 순백색 패널 | 차콜 스틸 카드 |
| `bg-popover` | 드롭다운, 툴팁, 콤보박스 플로팅 레이어 | 돋보이는 플로팅 레이어 | 오버레이 포커스 레이어 |
| `bg-primary` | 핵심 버튼, 활성 탭, 강조 인디케이터 | 주 시선 집중 버튼 | 고대비 인디케이터 |
| `bg-muted` | 비활성 배경, 호버 피드백 레이어 | 연한 회색 트랙 | 다크 그레이 호버 |
| `text-muted-foreground` | 캡션, 보조 텍스트, 힌트 | 중간 톤 쿨 그레이 | 소프트 디밍 그레이 |
| `border` | 카드의 테두리, 구분선 | 얇은 미세 아웃라인 | 딥 다크 엣지 아웃라인 |
| `ring` | 키보드 포커스 링 인디케이터 | 선명한 파란/슬레이트 링 | 루미너스 링 |

### 3.3 타이포그래피 시스템 (Typography Hierarchy)

타이포그래피는 **Inter** 또는 **Outfit**과 같은 산세리프 폰트를 기본 세리프로 적용하며, 코드 영역은 **Fira Code** 또는 **JetBrains Mono**를 적용합니다.

```tsx
// typography 예시 매핑 가이드 (CVA 또는 Tailwind 클래스 사용)
const typographyVariants = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-6",
  blockquote: "mt-6 border-l-2 pl-6 italic text-muted-foreground",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground",
  code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
};
```

### 3.4 둥글기 (Border Radius Tokens)

`--radius` 변수를 기준으로 비율 계산에 의해 컴포넌트 둥글기가 유기적으로 조절됩니다.

```css
/* Tailwind radius mapping */
--radius: 0.625rem; /* lg: 10px */
rounded-lg: var(--radius);                /* 10px */
rounded-md: calc(var(--radius) - 2px);     /* 8px */
rounded-sm: calc(var(--radius) - 4px);     /* 6px */
rounded-full: 9999px;
```

### 3.5 그림자 & 깊이감 (Elevation & Shadows)

다크 모드와 라이트 모드 모두에서 깊이감을 표현하기 위해 다층 레이어 그림자를 적용합니다.

- **`shadow-sm`**: 일반 버튼, 뱃지, 입력 폼 포커스 시 미세 입체감
- **`shadow-md`**: 드롭다운 메뉴, 콤보박스, 선택 상자
- **`shadow-lg`**: 모달(Dialog), 다이얼로그 플로팅 윈도우
- **`shadow-xl` / `shadow-2xl`**: 가짓수 많은 드로어(Sheet), 토스트 알림(Sonner)

---

## 4. shadcn/ui 컴포넌트 아키텍처 (Component Architecture)

`shadcn/ui`는 전통적인 패키지 기반 UI 라이브러리와 달리 ** headless primitive(Radix UI)** 위에 **Tailwind CSS** 스타일링과 **CVA(Class Variance Authority)**를 결합하여 개발자가 코드의 완전한 통제권을 소유하는 패러다임을 제공합니다.

### 4.1 CVA 패턴 & `cn()` 헬퍼 유틸리티

모든 UI 컴포넌트는 `lib/utils.ts`에 정의된 `cn()` 유틸리티를 통해 클래스를 합성합니다. `clsx`는 조건부 클래스 결합을 처리하고, `tailwind-merge`는 Tailwind 클래스 간의 상충/충돌을 해결합니다.

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

#### CVA (Class Variance Authority) 구현 규격

```typescript
// components/ui/button.tsx 예시
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

### 4.2 Polymorphism (다형성) & `asChild` Pattern

Radix UI의 `Slot` 컴포넌트를 활용하여 DOM 계층 구조를 늘리지 않고 자식 요소(예: Next.js `<Link>`)에 원하는 버튼 스타일과 이벤트를 그대로 위임합니다.

```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

// DOM에 불필요한 <button>을 추가하지 않고 <a> 태그에 Button 스타일을 직접 적용
export function NavigationAction() {
  return (
    <Button asChild variant="outline" size="sm">
      <Link href="/dashboard">대시보드로 이동</Link>
    </Button>
  );
}
```

### 4.3 핵심 컴포넌트 30+ 분류 카탈로그 (Component Catalog)

프로젝트에서 사용하는 핵심 `shadcn/ui` 컴포넌트 목록과 분류별 용도 명세입니다.

```mermaid
graph LR
    Sub[shadcn/ui Catalog] --> Form[Form & Controls]
    Sub --> Overlay[Overlays & Dialogs]
    Sub --> Layout[Layout & Containers]
    Sub --> Nav[Navigation & Menu]
    Sub --> Data[Data Display & Feedback]
```

| 카테고리 | 컴포넌트 (Component) | 주요 역할 및 사용 시나리오 |
| :--- | :--- | :--- |
| **Form & Controls** | `Button` | 기본 액션 실행 버튼 (Primary, Destructive, Ghost, Link 등) |
| | `Input` / `Textarea` | 단일 행 / 다중 행 텍스트 입력 폼 |
| | `Select` / `Combobox` | 옵션 선택 드롭다운 및 검색 가능한 드롭다운 |
| | `Checkbox` / `RadioGroup` | 다중 선택 체크박스 및 단일 선택 라디오 버튼 |
| | `Switch` / `Slider` | 토글 스위치 및 연속적 수치 조절 슬라이더 |
| | `Form` | React Hook Form + Zod 통합 라벨, 에러 메세지 자동 매핑 폼 컴포넌트 |
| **Overlays & Dialogs** | `Dialog` | 모달 팝업 윈도우 (확인, 입력, 상세보기 등) |
| | `Sheet` | 화면 측면 슬라이딩 드로어 (모바일 메뉴, 상세 필터 등) |
| | `AlertDialog` | 파괴적 작업(삭제, 취소) 전 필수 확인 경고창 |
| | `Popover` | 클릭 시 호출되는 컨텍스트 플로팅 오버레이 |
| | `DropdownMenu` | 컨텍스트 메뉴, 프로필 드롭다운 메뉴 |
| | `Tooltip` / `HoverCard` | 아이콘/링크 호버 시 나타나는 힌트 및 서머리 팝업 |
| **Layout & Containers**| `Card` | 콘텐츠 모듈화를 위한 기본 카드 컨테이너 (`Header`, `Content`, `Footer`) |
| | `Sidebar` | 모던 대시보드 반응형 사이드바 패널 시스템 |
| | `Accordion` / `Collapsible` | 접이식 자주 묻는 질문(FAQ) 및 섹션 토글 |
| | `Tabs` | 동일 영역 내 탭 전환 제어 |
| | `ScrollArea` | 커스텀 크로스 브라우저 스크롤바 바인딩 |
| | `Separator` | 영역 분리용 시각적 구분선 (Horizontal / Vertical) |
| | `Resizable` | 사용자 분할 조절 가능한 레이아웃 패널 |
| **Navigation** | `NavigationMenu` | 메인 헤더 복합 내비게이션 메뉴 (Submenu 지원) |
| | `Breadcrumb` | 현재 페이지 경로 위치 추적 내비게이션 |
| | `Pagination` | 데이터 리스트 페이지 번호 이동 컨트롤 |
| | `Command` / `Kbd` | `Cmd+K` 단축키 대화상자 검색 팰릿 및 키보드 뱃지 |
| **Data & Feedback** | `Table` | 데이터 테이블 레이아웃 (`Header`, `Row`, `Cell`) |
| | `Avatar` | 사용자 프로필 이미지 및 이니셜 폴백 |
| | `Badge` | 상태 표시 태그 (Success, Warning, Info 등) |
| | `Skeleton` | 데이터 로딩 중 스켈레톤 플레이스홀더 애니메이션 |
| | `Progress` | 진행률 프로그레스 바 |
| | `Sonner` (Toast) | 화면 모서리 실시간 비동기 알림 토스트 메시지 |
| | `Carousel` | 이미지 및 상품 카드 슬라이더 (Embla Carousel 기반) |
| | `Chart` | Recharts 기반 대시보드 데이터 시각화 차트 컴포넌트 |

### 4.4 접근성(a11y) & 웹 표준 가이드라인

1. **WAI-ARIA 준수**: 모든 오버레이 컴포넌트(`Dialog`, `Sheet`, `Popover`)는 `aria-expanded`, `aria-haspopup`, `aria-describedby`를 자동으로 관리합니다.
2. **Focus Trapping**: 모달 열림 시 포커스는 모달 내부로 갇히며, `ESC` 키로 모달을 닫고 이전 요소로 포커스가 복원됩니다.
3. **Screen Reader 가이드 (`sr-only`)**: 아이콘 단독 버튼 사용 시 스크린 리더용 숨김 텍스트 필수 삽입.
   ```tsx
   <Button variant="ghost" size="icon">
     <BellIcon className="size-4" />
     <span className="sr-only">알림 확인하기</span>
   </Button>
   ```

---

## 5. 레이아웃 & 정보 설계 (Layout & Information Architecture)

### 5.1 Root App Shell 구조

애플리케이션은 **App Shell** 구조를 기반으로 전역 레이아웃을 구성하며, 반응형 사이드바 및 고정 헤더 영역을 통해 유연한 탐색 경험을 제공합니다.

```mermaid
graph TD
    Root[Root Layout] --> AppShell[App Shell Container]
    AppShell --> Header[Global Header / Navbar]
    AppShell --> Body[Main Body Layout]
    Body --> Sidebar[Responsive Sidebar]
    Body --> Content[Main Viewport / Scroll Area]
    AppShell --> Footer[Global Footer]
    Root --> Toast[Sonner Toast Container]
```

#### 메인 레이아웃 코드 구조

```tsx
// app/(dashboard)/layout.tsx 예시
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/common/app-sidebar";
import { ModeToggle } from "@/components/common/mode-toggle";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full bg-background text-foreground">
        <AppSidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          <header className="flex h-16 items-center justify-between border-b px-6 bg-card/80 backdrop-blur-md sticky top-0 z-30">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="text-lg font-semibold tracking-tight">대시보드</h1>
            </div>
            <div className="flex items-center gap-3">
              <ModeToggle />
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-6 md:p-8">
            <div className="mx-auto max-w-7xl space-y-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
```

### 5.2 반응형 레이아웃 전략 (Responsive Strategy)

Tailwind CSS의 모바일 퍼스트 브레이크포인트를 준수하며, 데스크톱과 모바일 간의 컴포넌트 전환을 유연하게 처리합니다.

| Breakpoint | 픽셀 범위 | UI 대응 전략 |
| :--- | :--- | :--- |
| **`sm`** | `>= 640px` | 폼 요소 2열 정렬, 모바일 드로어 간소화 |
| **`md`** | `>= 768px` | 사이드바 고정 패널 전환 (`Sheet` 닫힘), 대시보드 카드 2열 배치 |
| **`lg`** | `>= 1024px` | 그리드 3열 확장, 데이터 테이블 멀티 컬럼 표출 |
| **`xl`** | `>= 1280px` | 대시보드 메인 뷰포트 맥스 너비 (`max-w-7xl`) 정렬 및 우측 패널 표출 |
| **`2xl`** | `>= 1536px` | 와이드 스크린 4열 그리드 확장 |

### 5.3 모션 & 마이크로 애니메이션 (Motion & Micro-interactions)

- **Framer Motion 페이지 전환**: `AnimatePresence` 및 `motion.div`를 사용하여 페이지 간 슬라이드 / 페이드 효과 구현.
- **Skeleton Loading**: 비동기 데이터 수신 전 Layout Shift(누적 레이아웃 이동) 방지를 위한 스켈레톤 플레이스홀더 제공.
- **Hover & Active 효과**: 버튼 및 카드 호버 시 `hover:scale-[1.01] transition-transform duration-200 active:scale-[0.99]` 적용.

---

## 6. 상태 관리 & 데이터 흐름 (State Management & Data Flow)

### 6.1 Server Components vs Client Components 경계선

Next.js App Router의 성능 극대화를 위해 기본적으로 **Server Component**를 채택하고, 인터랙션이 발생하는 최외곽 지점에만 `"use client"`를 적용합니다.

```mermaid
graph TD
    Page[Server Page: app/dashboard/page.tsx] --> Fetch[Direct DB / API Fetching]
    Page --> Pass[Pass Data as Props]
    Pass --> ClientComp[Client Component: components/features/user-table.tsx]
    ClientComp --> Interactivity[State, Dialogs, Toast, Hooks]
```

- **Server Components**: 데이터 페칭, SEO 메타데이터, 보안에 민감한 API 토큰 처리, 대용량 라이브러리 실행.
- **Client Components (`"use client"`)**: `useState`, `useEffect`, Event Handlers(`onClick`, `onChange`), Radix UI Primitives (포커스 링, 포털 등).

### 6.2 폼 처리 & 검증 패턴 (React Hook Form + Zod + shadcn Form)

`shadcn/ui`의 `<Form>` 컴포넌트는 `react-hook-form`과 `zod`를 완벽히 래핑하여 스키마 타입 안정성, 에러 메시지 자동 접근성 매핑을 구현합니다.

```tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

// 1. Zod 검증 스키마 정의
const profileFormSchema = z.object({
  username: z.string().min(2, { message: "사용자 이름은 최소 2자 이상이어야 합니다." }),
  email: z.string().email({ message: "유효한 이메일 주소를 입력해 주세요." }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function ProfileForm() {
  // 2. useForm 훅 셋업
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  // 3. 제출 핸들러
  function onSubmit(data: ProfileFormValues) {
    toast.success("프로필이 성공적으로 업데이트되었습니다!", {
      description: `이름: ${data.username}, 이메일: ${data.email}`,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>사용자 이름</FormLabel>
              <FormControl>
                <Input placeholder="chann" {...field} />
              </FormControl>
              <FormDescription>공개 프로필에 표시될 사용자 이름입니다.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일 계정</FormLabel>
              <FormControl>
                <Input placeholder="example@domain.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">저장하기</Button>
      </form>
    </Form>
  );
}
```

### 6.3 비동기 UI & 피드백 시스템 (Async & Feedback)

- **Toast (Sonner)**: CUD(생성, 수정, 삭제) 처리 완료 또는 API 오류 발생 시 모서리에 인터랙티브 알림 표시.
- **Suspense & Loading**: React `Suspense`와 Next.js `loading.tsx`를 연동하여 skeleton 피드백 즉시 제공.
- **Error Boundary**: React `error.tsx` 페이지를 연동하여 특정 컴포넌트 오류 발생 시 앱 전체가 다운되지 않고 개별 복구 UI(Retry Button) 제시.



