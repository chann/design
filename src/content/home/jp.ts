import type { HomeContent } from "./types";

const jp = {
  locale: "jp",
  languageTag: "ja",
  path: "/jp",
  metadata: {
    title: "Comfort Design System | shadcnをDESIGN.mdでカスタマイズ",
    description:
      "アクセシブルなshadcn/uiコンポーネントから始め、DESIGN.mdでプロダクトのトークン、状態、モーション、コンテンツ、検証ルールを定義します。",
  },
  shell: {
    skipToContent: "本文へ移動",
    homeLabel: "Comfort Design System ホーム",
    primaryNavigationLabel: "メインナビゲーション",
    mobileNavigationTitle: "Comfort ナビゲーション",
    mobileNavigationDescription:
      "原則、ファウンデーション、コンポーネントのドキュメントを閲覧します。",
    openNavigation: "ナビゲーションを開く",
    closeNavigation: "ナビゲーションを閉じる",
    nav: {
      principles: "原則",
      foundations: "ファウンデーション",
      components: "コンポーネント",
    },
    language: "言語",
    languageMenuLabel: "ホームページの言語",
    theme: "テーマ",
    appearance: "表示設定",
    themes: { light: "ライト", dark: "ダーク", system: "システム" },
  },
  hero: {
    eyebrow: "shadcn/ui + DESIGN.md",
    accessibleTitle: "shadcnから始め、DESIGN.mdでプロダクトらしく。",
    titleLines: ["shadcnから始め、", "DESIGN.mdで", "プロダクトらしく。"],
    description:
      "shadcn/uiをアクセシブルなコンポーネント基盤にし、セマンティックトークンから状態、インタラクション、コンテンツルールまでプロダクトに合わせて設計します。",
    primaryAction: "DESIGN.mdを読む",
    languageNavigationLabel: "ホームページの言語",
  },
  proof: {
    accessibleLabel: "Comfortの主な数値",
    items: [
      { value: "4", label: "言語版" },
      { value: "15", label: "セマンティックファウンデーション" },
      { value: "63", label: "コンポーネントリファレンス" },
    ],
  },
  tagline: {
    accessibleLabel:
      "shadcnコンポーネントから始め、DESIGN.mdでプロダクトのシステムをつくります。",
    segments: [
      "shadcnコンポーネントから始め、",
      "DESIGN.mdで",
      "プロダクトのシステムを",
      "つくります。",
    ],
  },
  benefits: {
    eyebrow: "自分たちらしく変えられる基盤",
    title:
      "アクセシブルなコンポーネントを保ち、一般的な判断を置き換えます。",
    description:
      "shadcn/uiは所有できるソースを提供します。DESIGN.mdは、そのソースにブランド、振る舞い、品質をまとめたプロダクト固有の言語を与えます。",
    items: [
      {
        title: "実績あるプリミティブから始める",
        description:
          "キーボード、フォーカス、オーバーレイの仕組みを作り直さず、shadcnとRadixの基盤を利用します。",
      },
      {
        title: "プロダクトの意味を一度だけ定義する",
        description:
          "コンポーネントを装飾する前に、色、書体、余白、形、状態、モーションをDESIGN.mdのセマンティックロールへ接続します。",
      },
      {
        title: "全員が同じ契約を使う",
        description:
          "デザイナー、エンジニア、コーディングエージェントが、散在する好みを翻訳せず同じルールで作業します。",
      },
      {
        title: "体験全体を検証する",
        description:
          "レスポンシブ、アクセシビリティ、多言語、フィードバック、復旧をリリースまでシステムの一部として保ちます。",
      },
    ],
    tokenFlow: ["shadcnソース", "DESIGN.mdロール", "プロダクトUI"],
  },
  workflow: {
    eyebrow: "使い方",
    title: "shadcnのソースからプロダクト固有のシステムへ。",
    description:
      "必要なコンポーネントだけを選び、共通のデザイン契約を適用して、利用者が触れるすべての状態を検証します。",
    steps: [
      {
        number: "01",
        title: "shadcnコンポーネントを選ぶ",
        description:
          "必要なアクセシブルなコンポーネントソースをコピーし、リポジトリで所有します。",
      },
      {
        number: "02",
        title: "DESIGN.mdのロールを適用する",
        description:
          "所有するコンポーネントへセマンティックトークン、状態、コンテンツ、モーション、アクセシビリティを接続します。",
      },
      {
        number: "03",
        title: "すべての状態を検証する",
        description:
          "リリース前にレスポンシブ、テーマ、キーボード、フィードバック、多言語、復旧を確認します。",
      },
    ],
  },
  productProof: {
    eyebrow: "プロダクトで実証",
    title: "このリファレンス自体が、記載した手順で作られています。",
    description:
      "このサイトはリポジトリ所有のshadcnコンポーネントから始め、DESIGN.mdのセマンティックロールを適用し、その結果となるファウンデーション、状態、検証項目を公開しています。",
    action: "コンポーネントリファレンスを見る",
    panelTitle: "ライブリファレンス",
    reviewed: "2026年8月",
    metrics: [
      { value: "87", label: "静的ルート" },
      { value: "15", label: "セマンティックファウンデーション" },
      { value: "63", label: "コンポーネントリファレンス" },
      { value: "4", label: "整合したDESIGN.md版" },
    ],
    verification:
      "ルート、コンテンツ、型、lint、本番ビルドの検証をリポジトリで実行します。",
  },
  faq: {
    eyebrow: "始める前の質問",
    title: "shadcnが提供するものと、DESIGN.mdが変えるもの。",
    description:
      "コンポーネントソースは馴染みのあるまま、プロダクト契約によって見た目、振る舞い、リリース基準を具体化します。",
    items: [
      {
        question: "shadcn/uiとDESIGN.mdはどう連携しますか？",
        answer:
          "shadcn/uiは基本コンポーネントソースとインタラクションプリミティブを提供します。DESIGN.mdは、そのソースへ適用するトークン、状態、モーション、コンテンツ、アクセシビリティ、検証を定めるプロダクト固有のデザイン契約です。",
      },
      {
        question: "コンポーネントコードを所有できますか？",
        answer:
          "はい。必要なshadcnコンポーネントだけをリポジトリへコピーし、同じDESIGN.md契約のもとで発展させます。",
      },
      {
        question: "DESIGN.mdはブランドの代わりですか？",
        answer:
          "いいえ。色、書体、形、言葉遣い、インタラクションを一貫させるため、ブランドロールとプロダクトの振る舞いを記録します。",
      },
      {
        question: "コーディングエージェントも使えますか？",
        answer:
          "はい。UI作業の前にDESIGN.mdを渡すことで、実装とレビューが同じセマンティックロールと受け入れ条件を使えます。",
      },
      {
        question: "アクセシビリティはどう扱いますか？",
        answer:
          "基盤プリミティブのセマンティクスとキーボード操作を保ち、コントラスト、フォーカス、モーション、コンテンツ、復旧要件をDESIGN.mdに定義します。",
      },
      {
        question: "4つの言語版はどう整合しますか？",
        answer:
          "韓国語版を基準に、英語、日本語、中国語版が同じトークン名、セクション順、コンポーネント一覧、要件の強さを保ちます。",
      },
    ],
  },
  cta: {
    eyebrow: "すべてのUI判断に明確な契約を",
    title: "コンポーネントを所有し、システムをDESIGN.mdに定義します。",
    description:
      "必要なshadcnコンポーネントを選び、ブランド、振る舞い、アクセシビリティ、リリース検証を一つの契約で適用します。",
    action: "DESIGN.mdを読む",
  },
  footer: {
    description:
      "所有するshadcnコンポーネントを、明確でアクセシブルなプロダクト固有のUIシステムへカスタマイズするための実践的なDESIGN.mdです。",
    navigationLabel: "フッターナビゲーション",
    groups: {
      system: "システム",
      foundations: "ファウンデーション",
      resources: "リソース",
      legal: "法的情報",
    },
    links: {
      overview: "概要",
      principles: "原則",
      foundationCatalog: "ファウンデーション一覧",
      componentCatalog: "コンポーネント一覧",
      github: "GitHubソース",
      privacy: "プライバシー",
      terms: "利用規約",
    },
    signatureLabel:
      "shadcnでカスタマイズし、DESIGN.mdに記録したComfort Design System",
  },
} satisfies HomeContent;

export default jp;
