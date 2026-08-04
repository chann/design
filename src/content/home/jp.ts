import type { HomeContent } from "./types";

const jp = {
  locale: "jp",
  languageTag: "ja",
  path: "/jp",
  metadata: {
    title: "Comfort DESIGN.md | shadcnのテーマを定義",
    description:
      "アクセシブルなshadcn/uiコンポーネントから始め、DESIGN.mdでプロダクトのトークン、状態、モーション、コンテンツ、検証ルールを定義します。",
  },
  shell: {
    skipToContent: "本文へ移動",
    homeLabel: "Comfort DESIGN.md ホーム",
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
    accessibleTitle:
      "shadcnコンポーネントから始め、DESIGN.mdでテーマを定義します。",
    titleLines: [
      "shadcnコンポーネントから始め、",
      "DESIGN.mdで",
      "テーマを定義します。",
    ],
    description:
      "shadcn/uiのアクセシブルな動きを保ち、色、文字、余白、状態、モーションをDESIGN.mdでプロダクトに合わせます。",
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
      "shadcnコンポーネントから始め、DESIGN.mdでプロダクトのテーマをつくります。",
    segments: [
      "shadcnコンポーネントから始め、",
      "DESIGN.mdで",
      "プロダクトのテーマを",
      "つくります。",
    ],
  },
  benefits: {
    eyebrow: "自分たちらしく変えられる基盤",
    title: "アクセシブルなコンポーネントを保ち、一般的な判断を置き換えます。",
    description:
      "信頼性の高いshadcn/uiをベースにします。色、文字、余白、状態、モーションの詳細をDESIGN.mdで定義します。",
    items: [
      {
        title: "信頼性の高いshadcn/uiをベースに",
        description:
          "キーボード、フォーカス、オーバーレイの仕組みを作り直さず、shadcnとRadixの基盤を利用します。",
      },
      {
        title: "DESIGN.mdで詳細を定義",
        description:
          "コンポーネントを装飾する前に、色、書体、余白、形、状態、モーションをDESIGN.mdのセマンティックロールへ接続します。",
      },
      {
        title: "チームで同じ文書を参照",
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
    title: "shadcn/uiからDESIGN.mdで定義するテーマへ。",
    description:
      "信頼性の高いshadcn/uiをベースにし、DESIGN.mdで細部を定義して、利用者が触れるすべての状態を確認します。",
    steps: [
      {
        number: "01",
        title: "shadcn/uiをベースに使う",
        description:
          "アクセシビリティとインタラクションが確認されたshadcn/uiコンポーネントから始めます。",
      },
      {
        number: "02",
        title: "DESIGN.mdで詳細を定義する",
        description:
          "追加したコンポーネントへセマンティックトークン、状態、コンテンツ、モーション、アクセシビリティを接続します。",
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
      "このサイトもshadcnコンポーネントから始め、DESIGN.mdのセマンティックロールを適用しています。ファウンデーション、状態、確認項目を実際に見られます。",
    action: "コンポーネントリファレンスを見る",
    panelTitle: "ライブリファレンス",
    reviewed: "2026年8月",
    metrics: [
      { value: "336", label: "静的ルート" },
      { value: "15", label: "セマンティックファウンデーション" },
      { value: "63", label: "コンポーネントリファレンス" },
      { value: "4", label: "対応言語" },
    ],
    verification:
      "ルート、コンテンツ、型、lint、本番ビルドの検証をリポジトリで実行します。",
  },
  faq: {
    eyebrow: "始める前の質問",
    title: "shadcnが提供するものと、DESIGN.mdが変えるもの。",
    description:
      "馴染みのあるコンポーネントコードを使いながら、DESIGN.mdで見た目、振る舞い、公開前の確認項目を整えます。",
    items: [
      {
        question: "shadcn/uiとDESIGN.mdはどう連携しますか？",
        answer:
          "shadcn/uiは基本コンポーネントコードとインタラクションプリミティブを提供します。DESIGN.mdには、適用するトークン、状態、モーション、コンテンツ、アクセシビリティ、確認項目をまとめます。",
      },
      {
        question: "コンポーネントコードを調整できますか？",
        answer:
          "はい。必要なshadcnコンポーネントだけをプロジェクトに追加し、DESIGN.mdのガイドに沿って改善できます。",
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
        question: "既存のプロダクトにも段階的に導入できますか？",
        answer:
          "はい。一つの画面やよく使うコンポーネントから始め、tokenとstateをDESIGN.mdにまとめてから範囲を広げられます。",
      },
    ],
  },
  cta: {
    eyebrow: "プロダクトらしいUIをつくるガイド",
    title: "shadcnから始め、DESIGN.mdでプロダクトらしく。",
    description:
      "必要なshadcnコンポーネントを選び、ブランド、振る舞い、アクセシビリティ、公開前の確認項目をDESIGN.mdにまとめます。",
    action: "DESIGN.mdを読む",
  },
  footer: {
    description:
      "shadcnコンポーネントの色、文字、余白、状態をプロダクトらしく整える実践的なDESIGN.mdです。",
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
      foundationCatalog: "ファウンデーションを見る",
      componentCatalog: "コンポーネントを見る",
      github: "GitHubソース",
      privacy: "プライバシー",
      terms: "利用規約",
    },
    signatureLabel: "shadcnコンポーネントのテーマを定義するComfort DESIGN.md",
  },
} satisfies HomeContent;

export default jp;
