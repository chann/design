import type { HomeContent } from "./types";

const jp = {
  locale: "jp",
  languageTag: "ja",
  path: "/jp",
  metadata: {
    title: "Comfort DESIGN.md | shadcn/uiでプロダクトらしいデザインへ",
    description:
      "shadcn/uiのアクセシブルなコンポーネントを生かし、色、文字、余白、状態、動きをDESIGN.mdでプロダクトに合わせます。",
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
      "shadcn/uiから始めて、プロダクトのデザインを仕上げましょう。",
    titleLines: [
      "shadcn/uiから始めて、",
      "プロダクトのデザインを",
      "仕上げましょう。",
    ],
    description:
      "アクセシブルなコンポーネントはそのままに、色、文字、余白、状態、動きをDESIGN.mdに合わせて整えます。",
    primaryAction: "DESIGN.mdを読む",
    languageNavigationLabel: "ホームページの言語",
  },
  summary: {
    accessibleLabel: "Comfortの構成",
    items: [
      { value: "4", label: "言語" },
      { value: "15", label: "Foundation" },
      { value: "63", label: "Component" },
    ],
  },
  tagline: {
    accessibleLabel:
      "同じコンポーネントでも、プロダクトの言葉をまとえば印象は大きく変わります。",
    segments: [
      "同じ",
      "コンポーネントでも、",
      "プロダクトの",
      "言葉をまとえば",
      "印象は",
      "大きく",
      "変わります。",
    ],
  },
  principles: {
    eyebrow: "デザイン原則",
    title: "使い慣れた動作は保ち、プロダクトの印象は明確にします。",
    description:
      "基本動作を作り直さなくても、色、文字、余白、状態を整えればプロダクトの雰囲気は変わります。",
    items: [
      {
        title: "使い慣れた動作を保ちます。",
        description:
          "キーボード、フォーカス、オーバーレイはshadcn/uiの慣れた動作に沿います。",
      },
      {
        title: "プロダクトらしさを加えます。",
        description: "色、文字、余白、形をDESIGN.mdの役割へつなげます。",
      },
      {
        title: "実際の状態で確認します。",
        description:
          "小さな画面、ダークテーマ、長い文章、キーボード操作でも同じ流れを保ちます。",
      },
    ],
  },
  workflow: {
    eyebrow: "ワークフロー",
    title: "コンポーネントはshadcn/uiから、プロダクトらしさはDESIGN.mdから。",
    description:
      "必要なコンポーネントを選び、プロダクトの基準を記し、実際の画面で自然に動くかを確かめます。",
    steps: [
      {
        number: "01",
        title: "コンポーネントを選びます。",
        description: "必要なshadcn/uiコンポーネントから始めます。",
      },
      {
        number: "02",
        title: "プロダクトの基準を記します。",
        description: "トークン、状態、文言、動きをDESIGN.mdにまとめます。",
      },
      {
        number: "03",
        title: "実際の画面で確かめます。",
        description: "画面サイズ、入力方法、テーマ、言語を変えて確認します。",
      },
    ],
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
