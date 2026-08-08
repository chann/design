import type { HomeContent } from "./types";

const ko = {
  locale: "ko",
  languageTag: "ko",
  path: "/ko",
  metadata: {
    title: "Comfort DESIGN.md | shadcn/ui로 완성하는 제품 디자인",
    description:
      "shadcn/ui 컴포넌트는 그대로 활용하고, DESIGN.md로 색·글꼴·간격·상태·움직임을 제품에 맞게 다듬어 보세요.",
  },
  shell: {
    skipToContent: "본문으로 건너뛰기",
    homeLabel: "Comfort DESIGN.md 홈",
    primaryNavigationLabel: "주요 탐색",
    mobileNavigationTitle: "Comfort 탐색",
    mobileNavigationDescription: "원칙과 파운데이션 문서를 탐색합니다.",
    openNavigation: "탐색 메뉴 열기",
    closeNavigation: "탐색 메뉴 닫기",
    nav: {
      principles: "원칙",
      foundations: "파운데이션",
    },
    language: "언어",
    languageMenuLabel: "홈페이지 언어",
    theme: "테마",
    appearance: "화면 설정",
    themes: { light: "라이트", dark: "다크", system: "시스템" },
  },
  hero: {
    eyebrow: "shadcn/ui + DESIGN.md",
    accessibleTitle: "shadcn/ui로 시작하고, 제품의 디자인을 완성하세요.",
    titleLines: ["shadcn/ui로 시작하고,", "제품의 디자인을", "완성하세요."],
    description:
      "접근 가능한 컴포넌트는 그대로 두고, 색·글꼴·간격·상태·움직임을 DESIGN.md에 맞춰 다듬습니다.",
    primaryAction: "DESIGN.md 읽기",
    languageNavigationLabel: "홈페이지 언어",
  },
  tagline: {
    accessibleLabel:
      "같은 컴포넌트도 제품의 언어를 입으면 전혀 다르게 느껴집니다.",
    segments: [
      "같은",
      "컴포넌트도",
      "제품의",
      "언어를",
      "입으면",
      "전혀",
      "다르게",
      "느껴집니다.",
    ],
  },
  principles: {
    description:
      "기본 동작을 다시 만들지 않아도 색, 글꼴, 간격, 상태를 정리하면 제품의 분위기는 달라집니다.",
    items: [
      {
        title: "익숙한 사용법은 유지합니다.",
        description:
          "키보드, 포커스, 오버레이 동작은 shadcn/ui의 익숙한 방식을 따릅니다.",
      },
      {
        title: "제품에 맞는 인상을 더합니다.",
        description: "색, 글꼴, 간격, 형태를 DESIGN.md의 역할에 연결합니다.",
      },
      {
        title: "실제 상태에서 결과를 확인합니다.",
        description:
          "작은 화면, 다크 테마, 긴 문장, 키보드 입력에서도 같은 흐름을 지킵니다.",
      },
    ],
  },
  workflow: {
    eyebrow: "작업 흐름",
    title: "컴포넌트는 shadcn/ui에서, 제품다움은 DESIGN.md에서.",
    description:
      "필요한 컴포넌트를 고르고 제품의 기준을 적은 다음, 실제 화면에서 자연스럽게 작동하는지 살핍니다.",
    steps: [
      {
        number: "01",
        title: "컴포넌트를 고릅니다.",
        description: "제품에 필요한 shadcn/ui 컴포넌트부터 가져옵니다.",
      },
      {
        number: "02",
        title: "제품의 기준을 적습니다.",
        description: "토큰과 상태, 문구, 움직임을 DESIGN.md에 정리합니다.",
      },
      {
        number: "03",
        title: "실제 화면에서 살핍니다.",
        description: "여러 화면 크기와 입력 방식, 테마에서 결과를 확인합니다.",
      },
    ],
  },
  faq: {
    eyebrow: "시작하기 전 질문",
    title: "shadcn/ui가 맡는 부분과 DESIGN.md가 맡는 부분을 알아보세요.",
    description:
      "익숙한 컴포넌트 코드는 그대로 쓰고, DESIGN.md에서 제품의 모양과 동작, 출시 전 확인 항목을 정리합니다.",
    items: [
      {
        question: "shadcn/ui와 DESIGN.md는 어떻게 함께 쓰나요?",
        answer:
          "shadcn/ui는 기본 컴포넌트 코드와 상호작용을 제공합니다. DESIGN.md에는 그 코드에 적용할 토큰, 상태, 움직임, 문구, 접근성 기준을 정리합니다.",
      },
      {
        question: "컴포넌트 코드를 제품에 맞게 고칠 수 있나요?",
        answer:
          "네. 필요한 shadcn/ui 컴포넌트만 프로젝트에 추가한 뒤, DESIGN.md에 적은 기준에 맞춰 계속 다듬을 수 있습니다.",
      },
      {
        question: "DESIGN.md가 브랜드를 대신하나요?",
        answer:
          "아니요. 색, 글꼴, 형태, 말투와 동작이 작업하는 사람마다 달라지지 않도록 제품의 기준을 기록합니다.",
      },
      {
        question: "코딩 에이전트도 DESIGN.md를 참고할 수 있나요?",
        answer:
          "네. UI 작업 전에 DESIGN.md를 제공하면 구현과 리뷰가 같은 역할과 완료 기준을 바탕으로 진행됩니다.",
      },
      {
        question: "접근성은 어떻게 다루나요?",
        answer:
          "기본 컴포넌트의 의미와 키보드 동작은 유지합니다. 대비, 포커스, 움직임, 문구, 복구 기준은 DESIGN.md에 적습니다.",
      },
      {
        question: "기존 제품에도 단계적으로 적용할 수 있나요?",
        answer:
          "네. 한 화면이나 자주 쓰는 컴포넌트부터 시작해 토큰과 상태를 DESIGN.md에 정리한 뒤 범위를 넓혀가면 됩니다.",
      },
    ],
  },
  cta: {
    eyebrow: "제품다운 인터페이스를 만드는 기준",
    title: "shadcn/ui로 시작하고, DESIGN.md에서 제품답게 다듬으세요.",
    description:
      "필요한 shadcn/ui 컴포넌트를 고른 뒤 제품의 인상과 동작, 접근성, 출시 전 확인 항목을 DESIGN.md에 정리하세요.",
    action: "DESIGN.md 읽기",
  },
  footer: {
    description:
      "shadcn/ui 컴포넌트의 색, 글꼴, 간격, 상태를 제품답게 다듬는 실용적인 DESIGN.md입니다.",
    navigationLabel: "푸터 탐색",
    groups: {
      system: "시스템",
      foundations: "파운데이션",
      resources: "리소스",
    },
    links: {
      overview: "개요",
      principles: "원칙",
      foundationCatalog: "파운데이션 살펴보기",
      github: "GitHub 소스",
    },
    signatureLabel: "shadcn/ui로 제품의 디자인을 다듬는 Comfort DESIGN.md",
  },
} satisfies HomeContent;

export default ko;
