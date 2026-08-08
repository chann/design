import type { DocsContent } from "./types";

const ko = {
  locale: "ko",
  shell: {
    navigationLabel: "문서 탐색",
    browse: "문서 둘러보기",
    title: "Comfort 가이드",
    description: "원칙부터 파운데이션까지 차례로 살펴보세요.",
    readDesign: "DESIGN.md 읽기",
    paginationLabel: "이전·다음 문서",
    previous: "이전",
    next: "다음",
    reviewed: "마지막 확인 · 2026년 8월",
    outlineLabel: "현재 페이지 목차",
    outlineTitle: "이 페이지에서",
    overviewGroup: "시작하기",
    sections: {
      principles: "원칙",
      foundations: "파운데이션",
    },
  },
  search: {
    ariaLabel: "목록 검색",
    label: "이름으로 찾아보세요",
    placeholder: "이름이나 쓰임새를 입력하세요",
    reset: "검색 초기화",
    result: "개 결과",
    results: "개 결과",
  },
  principles: {
    eyebrow: "디자인 원칙",
    title: "편안한 제품을 만드는 네 가지 기준",
    description:
      "Comfort가 말하는 편안함은 부드러운 인상에 그치지 않아요. 다음 행동을 쉽게 알아보고, 결과를 예상하며, 필요한 만큼 자연스럽게 익힐 수 있어야 해요.",
    outlineModel: "한눈에 보기",
    outlineReview: "출시 전 확인",
    intent: "왜 필요한가요?",
    practice: "이렇게 적용해요",
    modelLabel: "네 가지 Comfort 원칙이 이어지는 흐름",
    modelCenter: "명확함에서 오는 신뢰",
    reviewBadge: "출시 전 점검",
    reviewTitle: "새 패턴을 내보내기 전에 확인하세요",
    reviewItems: [
      "색에 기대지 않아도 문구와 위치, 상태만으로 다음 행동을 알 수 있어요.",
      "비슷한 컴포넌트와 같은 방식으로 동작하고 시맨틱 토큰을 사용해요.",
      "피드백이 행동한 곳 가까이에 나타나고 다음 선택지를 알려줘요.",
      "익숙한 사용법을 바꾸지 않으면서 고급 기능을 단계적으로 보여줄 수 있어요.",
    ],
    items: [
      {
        id: "natural",
        number: "01",
        title: "자연스럽게",
        comfortTitle: "설명하지 않아도 다음 행동이 보여야 해요",
        summary:
          "사람이 이미 익숙한 표현과 움직임을 따릅니다. 생각하거나 조작하는 데 드는 부담을 줄여요.",
        practice:
          "쉬운 문장을 쓰고, 화면 안의 위치 관계를 유지하며, 주 행동은 시선이 머무는 곳에 둡니다.",
        question: "설명 없이 보아도 무엇을 해야 할지 알 수 있나요?",
      },
      {
        id: "certain",
        number: "02",
        title: "예측 가능하게",
        comfortTitle: "같은 상황에는 같은 방식으로 답해요",
        summary:
          "반복되는 규칙과 꼭 필요한 선택지만 남기면 사용자는 결과를 걱정하지 않고 행동할 수 있어요.",
        practice:
          "시맨틱 토큰을 사용하고, 비슷한 컴포넌트는 같은 상태와 피드백을 보여줍니다.",
        question: "누르기 전에 어떤 일이 생길지 예상할 수 있나요?",
      },
      {
        id: "meaningful",
        number: "03",
        title: "목적에 맞게",
        comfortTitle: "중요한 일에 시선을 모아요",
        summary:
          "시각 요소와 인터랙션은 목적을 분명히 하고, 진행 상태를 보여주며, 막혔을 때 돌아갈 길을 알려줘야 해요.",
        practice:
          "핵심 과업을 중심에 두고, 피드백은 행동한 곳 가까이에 보여주며, 결정을 방해하는 장식은 덜어냅니다.",
        question:
          "이 요소가 일을 끝내거나 현재 상태를 이해하는 데 도움이 되나요?",
      },
      {
        id: "growing",
        number: "04",
        title: "함께 자라게",
        comfortTitle: "처음에는 쉽고, 익숙해지면 더 깊게",
        summary:
          "처음 만난 사람에게도 유용하고, 쓰면서 더 많은 기능을 발견하며, 예상 밖의 변화 없이 확장할 수 있어야 해요.",
        practice:
          "고급 기능은 단계적으로 보여주고, 이미 익힌 사용법은 지키며, 피드백을 다음 개선에 반영합니다.",
        question: "기능이 늘어나도 처음 배운 사용법을 그대로 쓸 수 있나요?",
      },
    ],
  },
  foundations: {
    eyebrow: "파운데이션",
    title: "화면마다 반복되는 기준을 한곳에 모았어요",
    description:
      "색, 글자, 간격, 모션처럼 여러 화면에서 함께 쓰는 기준입니다. 먼저 역할을 정하고, 필요한 만큼 조합해 보세요.",
    outlineCatalog: "파운데이션 찾기",
    outlineDirectory: "전체 목록",
    outlineLayers: "적용 순서",
    featuredNote: "예시와 적용 방법",
    emptyTitle: "찾는 파운데이션이 없어요",
    emptyDescription: "더 짧은 이름이나 넓은 쓰임새로 검색해 보세요.",
    directoryEyebrow: "파운데이션 15개",
    directoryTitle: "전체 목록",
    layersBadge: "적용 순서",
    layersTitle: "의도에서 실제 화면까지",
    layersDescription:
      "앞 단계에서 정한 기준이 다음 단계의 선택을 더 쉽게 만들어요.",
    layers: [
      ["01", "원칙", "왜 이런 방식으로 동작해야 하는지 정해요"],
      ["02", "시맨틱 토큰", "테마가 달라도 유지할 역할을 정해요"],
      ["03", "컴포넌트", "역할을 반복해서 쓸 수 있는 UI로 만들어요"],
    ],
  },
  foundationDetail: {
    eyebrow: "파운데이션",
    overview: "미리보기",
    intent: "쓰임새",
    guidelines: "적용 방법",
    accessibility: "접근성",
    reference: "참고 값",
    intentEyebrow: "이 기준이 필요한 이유",
    intentTitle: "무엇을 일관되게 만드는지 확인하세요",
    guidanceBadge: "핵심 가이드",
    guidanceTitle: "제품에 적용할 때 살펴볼 점",
    accessibilityEyebrow: "누구나 사용할 수 있게",
    accessibilityTitle: "접근성 확인 항목",
    referenceTitle: "참고 값",
    referenceDescription:
      "역할 이름은 유지하고 실제 값은 테마, 화면 너비, 언어, 인터랙션 상태에 맞게 바꿀 수 있어요.",
    role: "역할",
    use: "쓰임새",
    value: "참고 값",
    sourceTitle: "DESIGN.md에서 더 자세히",
    sourceDescription:
      "실제 제품에 적용할 값과 확인 항목은 DESIGN.md에서 관리합니다. 이 페이지에서는 결과를 눈으로 확인할 수 있어요.",
    overviewDescription: "파운데이션 목록",
  },
  legal: {
    reviewed: "2026년 8월 3일 확인",
    issue: "GitHub에 문제 알리기",
    privacy: {
      eyebrow: "개인정보 안내",
      title: "필요한 정보만 다루는 정적 사이트예요",
      description:
        "Comfort를 둘러보는 데 계정이나 양식 제출, 분석용 프로필이 필요하지 않아요.",
      sections: [
        {
          title: "브라우저에 저장하는 정보",
          paragraphs: [
            "테마 메뉴에서 고른 밝은 화면 또는 어두운 화면 설정을 브라우저에 저장할 수 있어요. 사이트 데이터를 지우면 이 설정도 함께 사라집니다.",
            "이 저장소에는 계정, 입력 양식, 분석 도구, 광고, 추적 픽셀이 없습니다.",
          ],
        },
        {
          title: "호스팅과 외부 링크",
          paragraphs: [
            "호스팅 제공자는 정적 파일을 보내는 데 필요한 일반적인 요청 정보를 처리할 수 있어요.",
            "GitHub 등 외부 링크를 열면 해당 서비스의 개인정보 처리 방식이 적용됩니다.",
          ],
        },
        {
          title: "궁금한 점이 있나요?",
          paragraphs: [
            "사이트 동작이 달라지면 이 안내도 함께 바뀌어야 해요. 실제 동작과 안내가 다르면 GitHub 이슈로 알려주세요.",
          ],
        },
      ],
    },
    terms: {
      eyebrow: "이용 안내",
      title: "제품의 상황에 맞게 살펴보고 적용하세요",
      description:
        "Comfort는 디자인 방향과 동작 예시를 제공합니다. 제품과 사용자, 운영 환경에 맞는 검토는 별도로 필요해요.",
      sections: [
        {
          title: "이 사이트의 역할",
          paragraphs: [
            "사이트와 DESIGN.md에는 원칙, 토큰, 패턴, 구현 예시가 담겨 있어요. 제품에 적용하기 전에 필요한 조건을 충족하는지 확인하세요.",
            "지원 기간, 가동 시간, 호환성, 특정 제품 성과를 보장하지 않습니다.",
          ],
        },
        {
          title: "소스와 에셋 안내",
          paragraphs: [
            "외부에서 가져온 에셋에는 해당 라이선스 안내가 함께 있습니다. 코드나 에셋을 다시 쓰기 전에 저장소와 관련 안내를 확인하세요.",
          ],
        },
        {
          title: "변경 기록",
          paragraphs: [
            "시스템을 다듬으며 가이드와 예시는 바뀔 수 있어요. 자세한 변경 내용은 Git 기록에서 확인할 수 있습니다.",
          ],
        },
      ],
    },
  },
  notFound: {
    title: "페이지를 찾을 수 없어요",
    description: "홈으로 돌아가 원칙이나 파운데이션에서 다시 찾아보세요.",
    action: "Comfort 홈으로",
  },
} satisfies DocsContent;

export default ko;
