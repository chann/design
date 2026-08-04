import type { HomeContent } from "./types";

const ko = {
  locale: "ko",
  languageTag: "ko",
  path: "/",
  metadata: {
    title: "Comfort Design System | shadcn을 DESIGN.md로 커스터마이징",
    description:
      "접근 가능한 shadcn/ui 컴포넌트로 시작하고 DESIGN.md로 제품의 토큰, 상태, 모션, 콘텐츠, 검증 규칙을 정의하세요.",
  },
  shell: {
    skipToContent: "본문으로 건너뛰기",
    homeLabel: "Comfort Design System 홈",
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
    accessibleTitle: "shadcn으로 시작하고 DESIGN.md로 제품답게 만드세요.",
    titleLines: ["shadcn으로 시작하고", "DESIGN.md로", "제품답게 만드세요."],
    description:
      "shadcn/ui를 접근 가능한 컴포넌트 기반으로 삼고, 시맨틱 토큰부터 상태, 상호작용, 콘텐츠 규칙까지 제품에 맞게 설계하세요.",
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
      "shadcn 컴포넌트로 시작하고 DESIGN.md로 우리 제품의 시스템을 만드세요.",
    segments: [
      "shadcn",
      "컴포넌트로",
      "시작하고",
      "DESIGN.md로",
      "우리",
      "제품의",
      "시스템을",
      "만드세요.",
    ],
  },
  benefits: {
    eyebrow: "제품답게 바꿀 수 있는 기반",
    title: "접근 가능한 컴포넌트는 지키고, 일반적인 결정은 바꾸세요.",
    description:
      "shadcn/ui는 직접 소유할 수 있는 소스를 제공합니다. DESIGN.md는 그 소스에 브랜드, 동작, 품질을 아우르는 제품별 언어를 부여합니다.",
    items: [
      {
        title: "검증된 프리미티브에서 시작",
        description:
          "키보드, 포커스, 오버레이 동작을 다시 만들지 않고 shadcn과 Radix의 기반을 활용합니다.",
      },
      {
        title: "제품의 의미를 한 번만 정의",
        description:
          "컴포넌트를 꾸미기 전에 색상, 글자, 간격, 형태, 상태, 모션을 DESIGN.md의 시맨틱 역할에 연결합니다.",
      },
      {
        title: "모든 기여자가 같은 계약을 사용",
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
    title: "shadcn 소스에서 제품별 시스템까지.",
    description:
      "제품에 필요한 컴포넌트만 고르고, 공통 디자인 계약을 적용한 뒤, 사용자가 경험할 모든 상태를 검증합니다.",
    steps: [
      {
        number: "01",
        title: "shadcn 컴포넌트 선택",
        description:
          "제품에 필요한 접근 가능한 컴포넌트 소스를 복사하고 저장소에서 직접 소유합니다.",
      },
      {
        number: "02",
        title: "DESIGN.md 역할 적용",
        description:
          "소유한 컴포넌트에 시맨틱 토큰, 상태, 콘텐츠, 모션, 접근성 규칙을 연결합니다.",
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
      "이 사이트는 저장소가 소유한 shadcn 컴포넌트에서 시작해 DESIGN.md의 시맨틱 역할을 적용하고, 그 결과인 파운데이션, 컴포넌트 상태, 검증 항목을 공개합니다.",
    action: "컴포넌트 레퍼런스 살펴보기",
    panelTitle: "라이브 레퍼런스",
    reviewed: "2026년 8월",
    metrics: [
      { value: "87", label: "정적 경로" },
      { value: "15", label: "시맨틱 파운데이션" },
      { value: "63", label: "컴포넌트 레퍼런스" },
      { value: "4", label: "정렬된 DESIGN.md 판본" },
    ],
    verification:
      "경로, 콘텐츠, 타입, 린트, 프로덕션 빌드 검증을 저장소에서 함께 실행합니다.",
  },
  faq: {
    eyebrow: "시작하기 전 질문",
    title: "shadcn이 제공하는 것과 DESIGN.md가 바꾸는 것을 구분하세요.",
    description:
      "컴포넌트 소스는 익숙하게 유지하고, 제품 계약으로 시각 언어와 동작, 출시 기준을 구체화합니다.",
    items: [
      {
        question: "shadcn/ui와 DESIGN.md는 어떻게 함께 쓰나요?",
        answer:
          "shadcn/ui는 기본 컴포넌트 소스와 인터랙션 프리미티브를 제공합니다. DESIGN.md는 그 소스에 적용할 토큰, 상태, 모션, 콘텐츠, 접근성, 검증을 담은 제품별 디자인 계약입니다.",
      },
      {
        question: "컴포넌트 코드를 직접 소유하나요?",
        answer:
          "네. 제품에 필요한 shadcn 컴포넌트만 저장소로 복사한 뒤 같은 DESIGN.md 계약 아래에서 발전시킵니다.",
      },
      {
        question: "DESIGN.md가 브랜드를 대신하나요?",
        answer:
          "아니요. 색상, 타이포그래피, 형태, 말투, 상호작용이 기여자마다 달라지지 않도록 제품의 브랜드 역할과 동작을 기록합니다.",
      },
      {
        question: "코딩 에이전트도 이 계약을 사용할 수 있나요?",
        answer:
          "네. UI 작업 전에 DESIGN.md를 제공하면 구현과 리뷰가 같은 시맨틱 역할과 인수 조건을 기준으로 진행됩니다.",
      },
      {
        question: "접근성은 어떻게 다루나요?",
        answer:
          "기반 프리미티브의 시맨틱과 키보드 동작을 유지하고, 대비, 포커스, 모션, 콘텐츠, 복구 요구사항을 DESIGN.md에 명시합니다.",
      },
      {
        question: "네 언어 판본은 어떻게 맞추나요?",
        answer:
          "한국어 판본을 기준으로 영어, 일본어, 중국어 판본이 같은 토큰 이름, 섹션 순서, 컴포넌트 목록, 요구 강도를 유지합니다.",
      },
    ],
  },
  cta: {
    eyebrow: "모든 인터페이스 결정을 위한 명확한 계약",
    title: "컴포넌트는 소유하고, 시스템은 DESIGN.md에 정의하세요.",
    description:
      "제품에 필요한 shadcn 컴포넌트를 고르고 브랜드, 동작, 접근성, 출시 검증을 하나의 공통 계약으로 적용하세요.",
    action: "DESIGN.md 읽기",
  },
  footer: {
    description:
      "소유한 shadcn 컴포넌트를 명확하고 접근 가능하며 제품다운 인터페이스 시스템으로 커스터마이징하기 위한 실용적인 DESIGN.md입니다.",
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
      foundationCatalog: "파운데이션 카탈로그",
      componentCatalog: "컴포넌트 카탈로그",
      github: "GitHub 소스",
      privacy: "개인정보 처리방침",
      terms: "이용약관",
    },
    signatureLabel:
      "shadcn으로 커스터마이징하고 DESIGN.md에 문서화한 Comfort Design System",
  },
} satisfies HomeContent;

export default ko;
