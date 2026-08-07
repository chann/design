import type { HomeContent } from "./types";

const ko = {
  locale: "ko",
  languageTag: "ko",
  path: "/ko",
  metadata: {
    title: "Comfort DESIGN.md | shadcn으로 시작하는 제품 테마",
    description:
      "접근 가능한 shadcn/ui 컴포넌트로 시작하고 DESIGN.md로 제품의 토큰, 상태, 모션, 콘텐츠, 검증 규칙을 정의하세요.",
  },
  shell: {
    skipToContent: "본문으로 건너뛰기",
    homeLabel: "Comfort DESIGN.md 홈",
    primaryNavigationLabel: "주요 탐색",
    mobileNavigationTitle: "Comfort 탐색",
    mobileNavigationDescription:
      "원칙, 파운데이션, 컴포넌트 문서를 탐색합니다.",
    openNavigation: "탐색 메뉴 열기",
    closeNavigation: "탐색 메뉴 닫기",
    nav: {
      principles: "원칙",
      foundations: "파운데이션",
      components: "컴포넌트",
    },
    language: "언어",
    languageMenuLabel: "홈페이지 언어",
    theme: "테마",
    appearance: "화면 설정",
    themes: { light: "라이트", dark: "다크", system: "시스템" },
  },
  hero: {
    eyebrow: "shadcn/ui + DESIGN.md",
    accessibleTitle:
      "shadcn 컴포넌트로 시작하고 DESIGN.md로 테마를 정의하세요.",
    titleLines: [
      "shadcn 컴포넌트로 시작하고",
      "DESIGN.md로",
      "테마를 정의하세요.",
    ],
    description:
      "shadcn/ui를 그대로 활용하고, 색상과 글자, 간격, 상태, 모션을 DESIGN.md에서 제품에 맞게 정리하세요.",
    primaryAction: "DESIGN.md 읽기",
    languageNavigationLabel: "홈페이지 언어",
  },
  proof: {
    accessibleLabel: "Comfort 주요 수치",
    items: [
      { value: "4", label: "언어 판본" },
      { value: "15", label: "시맨틱 파운데이션" },
      { value: "63", label: "컴포넌트 레퍼런스" },
    ],
  },
  tagline: {
    accessibleLabel:
      "shadcn 컴포넌트로 시작하고 DESIGN.md로 제품의 테마를 만드세요.",
    segments: [
      "shadcn",
      "컴포넌트로",
      "시작하고",
      "DESIGN.md로",
      "제품의",
      "테마를",
      "만드세요.",
    ],
  },
  benefits: {
    eyebrow: "제품답게 바꿀 수 있는 기반",
    title:
      "신뢰할 수 있는 컴포넌트를 바탕으로, DESIGN.md에서 제품에 맞는 테마를 정의하세요.",
    description:
      "신뢰도 높은 shadcn/ui를 베이스로 사용합니다. DESIGN.md로 색상, 글자, 간격, 상태, 모션 등 세부 디자인을 정의하세요.",
    items: [
      {
        title: "신뢰도 높은 shadcn/ui를 베이스로",
        description:
          "키보드, 포커스, 오버레이 동작을 다시 만들지 않고 shadcn과 Radix의 기반을 활용합니다.",
      },
      {
        title: "DESIGN.md로 세부 디자인 정의",
        description:
          "컴포넌트를 꾸미기 전에 색상, 글자, 간격, 형태, 상태, 모션을 DESIGN.md의 시맨틱 역할에 연결합니다.",
      },
      {
        title: "팀이 같은 문서를 참고",
        description:
          "디자이너, 엔지니어, 코딩 에이전트가 흩어진 취향을 번역하는 대신 같은 규칙으로 작업합니다.",
      },
      {
        title: "완전한 경험까지 검증",
        description:
          "반응형 동작, 접근성, 다국어, 피드백, 복구를 출시까지 시스템의 일부로 유지합니다.",
      },
    ],
    tokenFlow: ["shadcn 소스", "DESIGN.md 역할", "제품 인터페이스"],
  },
  workflow: {
    eyebrow: "사용 흐름",
    title: "shadcn/ui에서 DESIGN.md 테마까지.",
    description:
      "신뢰도 높은 shadcn/ui를 베이스로 삼고, DESIGN.md로 세부 디자인을 정의한 뒤, 사용자가 경험할 모든 상태를 확인합니다.",
    steps: [
      {
        number: "01",
        title: "shadcn/ui를 베이스로 사용",
        description:
          "접근성과 상호작용이 검증된 shadcn/ui 컴포넌트에서 시작합니다.",
      },
      {
        number: "02",
        title: "DESIGN.md로 세부 디자인 정의",
        description:
          "추가한 컴포넌트에 시맨틱 토큰, 상태, 콘텐츠, 모션, 접근성 기준을 연결합니다.",
      },
      {
        number: "03",
        title: "모든 상태 검증",
        description:
          "출시 전에 반응형 동작, 테마, 키보드, 피드백, 다국어, 복구 흐름을 확인합니다.",
      },
    ],
  },
  productProof: {
    eyebrow: "제품으로 증명",
    title: "레퍼런스가 문서의 작업 방식을 직접 사용합니다.",
    description:
      "이 사이트도 shadcn 컴포넌트에서 시작해 DESIGN.md의 시맨틱 역할을 적용했어요. 파운데이션과 컴포넌트 상태, 확인 항목을 직접 살펴볼 수 있습니다.",
    action: "컴포넌트 레퍼런스 살펴보기",
    panelTitle: "라이브 레퍼런스",
    reviewed: "2026년 8월",
    metrics: [
      { value: "336", label: "정적 경로" },
      { value: "15", label: "시맨틱 파운데이션" },
      { value: "63", label: "컴포넌트 레퍼런스" },
      { value: "4", label: "지원 언어" },
    ],
    verification:
      "경로, 콘텐츠, 타입, 린트, 프로덕션 빌드 검증을 저장소에서 함께 실행합니다.",
  },
  faq: {
    eyebrow: "시작하기 전 질문",
    title: "shadcn이 제공하는 것과 DESIGN.md가 바꾸는 것을 구분하세요.",
    description:
      "익숙한 컴포넌트 코드는 그대로 활용하고, DESIGN.md에서 시각 언어와 동작, 출시 전 확인 항목을 제품에 맞게 다듬습니다.",
    items: [
      {
        question: "shadcn/ui와 DESIGN.md는 어떻게 함께 쓰나요?",
        answer:
          "shadcn/ui는 기본 컴포넌트 코드와 인터랙션 프리미티브를 제공합니다. DESIGN.md에는 그 코드에 적용할 토큰, 상태, 모션, 콘텐츠, 접근성, 확인 항목을 정리합니다.",
      },
      {
        question: "컴포넌트 코드를 제품에 맞게 고칠 수 있나요?",
        answer:
          "네. 필요한 shadcn 컴포넌트만 프로젝트에 추가하고, DESIGN.md에 적은 기준에 맞춰 계속 다듬을 수 있어요.",
      },
      {
        question: "DESIGN.md가 브랜드를 대신하나요?",
        answer:
          "아니요. 색상, 타이포그래피, 형태, 말투, 상호작용이 기여자마다 달라지지 않도록 제품의 브랜드 역할과 동작을 기록합니다.",
      },
      {
        question: "코딩 에이전트도 DESIGN.md를 참고할 수 있나요?",
        answer:
          "네. UI 작업 전에 DESIGN.md를 제공하면 구현과 리뷰가 같은 시맨틱 역할과 인수 조건을 기준으로 진행됩니다.",
      },
      {
        question: "접근성은 어떻게 다루나요?",
        answer:
          "기반 프리미티브의 시맨틱과 키보드 동작을 유지하고, 대비, 포커스, 모션, 콘텐츠, 복구 요구사항을 DESIGN.md에 명시합니다.",
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
    title: "shadcn으로 시작하고, DESIGN.md에서 제품답게 다듬으세요.",
    description:
      "필요한 shadcn 컴포넌트를 고른 뒤 브랜드, 동작, 접근성, 출시 전 확인 항목을 DESIGN.md에 정리하세요.",
    action: "DESIGN.md 읽기",
  },
  footer: {
    description:
      "shadcn 컴포넌트의 색상과 글자, 간격, 상태를 제품답게 다듬는 실용적인 DESIGN.md입니다.",
    navigationLabel: "푸터 탐색",
    groups: {
      system: "시스템",
      foundations: "파운데이션",
      resources: "리소스",
      legal: "법적 고지",
    },
    links: {
      overview: "개요",
      principles: "원칙",
      foundationCatalog: "파운데이션 살펴보기",
      componentCatalog: "컴포넌트 살펴보기",
      github: "GitHub 소스",
      privacy: "개인정보 처리방침",
      terms: "이용약관",
    },
    signatureLabel: "shadcn 컴포넌트의 테마를 정의하는 Comfort DESIGN.md",
  },
} satisfies HomeContent;

export default ko;
