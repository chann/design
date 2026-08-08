import type { DocsContent } from "./types";

const jp = {
  locale: "jp",
  shell: {
    navigationLabel: "ドキュメントナビゲーション",
    browse: "ガイドを見る",
    title: "Comfort ガイド",
    description: "原則からファウンデーションまで順に確認できます。",
    readDesign: "DESIGN.md を読む",
    paginationLabel: "前後のドキュメント",
    previous: "前へ",
    next: "次へ",
    reviewed: "最終確認 · 2026年8月",
    outlineLabel: "ページ内目次",
    outlineTitle: "このページの内容",
    overviewGroup: "はじめに",
    sections: {
      principles: "原則",
      foundations: "ファウンデーション",
    },
  },
  search: {
    ariaLabel: "一覧を検索",
    label: "名前から探す",
    placeholder: "名前や用途を入力してください",
    reset: "検索をリセット",
    result: "件",
    results: "件",
  },
  principles: {
    eyebrow: "デザイン原則",
    title: "心地よいプロダクトをつくる4つの基準",
    description:
      "Comfortが目指すのは、柔らかな見た目だけではありません。次の操作がわかり、結果を予測でき、慣れた使い方のまま機能を広げられる体験です。",
    outlineModel: "全体像",
    outlineReview: "公開前の確認",
    intent: "なぜ必要か",
    practice: "どう使うか",
    modelLabel: "4つのComfort原則がつながる流れ",
    modelCenter: "明確さが生む信頼",
    reviewBadge: "公開前チェック",
    reviewTitle: "新しいパターンを公開する前に確認しましょう",
    reviewItems: [
      "色だけに頼らず、文言・配置・状態から次の操作がわかります。",
      "似たコンポーネントと同じ動きをし、semantic tokenを使っています。",
      "操作した場所の近くにフィードバックが表示され、次の選択肢がわかります。",
      "覚えた使い方を変えずに、高度な機能を段階的に表示できます。",
    ],
    items: [
      {
        id: "natural",
        number: "01",
        title: "自然に",
        comfortTitle: "説明がなくても次の操作が見える",
        summary:
          "すでに馴染みのある言葉と動きを使い、考える負担と操作の手間を減らします。",
        practice:
          "わかりやすい言葉を使い、位置関係を保ち、主な操作を視線が集まる場所に置きます。",
        question: "説明を読まなくても次に何をするかわかりますか？",
      },
      {
        id: "certain",
        number: "02",
        title: "予測できる",
        comfortTitle: "同じ状況には同じ方法で応える",
        summary:
          "繰り返されるルールと必要な選択肢に絞ることで、迷わず操作できます。",
        practice:
          "semantic tokenを使い、似たコンポーネントには同じ状態とフィードバックを用意します。",
        question: "操作する前に結果を予測できますか？",
      },
      {
        id: "meaningful",
        number: "03",
        title: "目的に沿う",
        comfortTitle: "大切な作業に視線を集める",
        summary:
          "見た目と操作は、目的を明確にし、進捗を示し、困ったときの戻り方を伝えるために使います。",
        practice:
          "中心となる作業を目立たせ、操作の近くにフィードバックを返し、判断を邪魔する装飾を減らします。",
        question: "作業の完了や現在の状態の理解に役立っていますか？",
      },
      {
        id: "growing",
        number: "04",
        title: "ともに育つ",
        comfortTitle: "最初は簡単に、慣れたらより深く",
        summary:
          "初めてでも役立ち、使うほど機能を見つけられ、驚かせる変更なしに広げられる設計にします。",
        practice:
          "高度な機能は段階的に見せ、覚えた使い方を保ち、フィードバックを次の改善に生かします。",
        question: "機能が増えても、覚えた使い方をそのまま使えますか？",
      },
    ],
  },
  foundations: {
    eyebrow: "ファウンデーション",
    title: "画面をまたいで使う基準をまとめました",
    description:
      "色、文字、余白、モーションなど、繰り返し使う基準です。まず役割を決め、必要な分だけ組み合わせます。",
    outlineCatalog: "ファウンデーションを探す",
    outlineDirectory: "すべての一覧",
    outlineLayers: "適用の流れ",
    featuredNote: "例と使い方",
    emptyTitle: "該当するファウンデーションがありません",
    emptyDescription: "短い名前や広い用途で検索してください。",
    directoryEyebrow: "15のファウンデーション",
    directoryTitle: "すべての一覧",
    layersBadge: "適用の流れ",
    layersTitle: "意図から実際の画面へ",
    layersDescription: "前の段階で決めた基準が、次の選択を簡単にします。",
    layers: [
      ["01", "原則", "なぜこの動きにするのかを決めます"],
      ["02", "Semantic token", "テーマが変わっても保つ役割を決めます"],
      ["03", "コンポーネント", "役割を再利用できるUIにします"],
    ],
  },
  foundationDetail: {
    eyebrow: "ファウンデーション",
    overview: "プレビュー",
    intent: "用途",
    guidelines: "使い方",
    accessibility: "アクセシビリティ",
    reference: "参考値",
    intentEyebrow: "この基準が必要な理由",
    intentTitle: "何を揃えるための基準か確認しましょう",
    guidanceBadge: "基本ガイド",
    guidanceTitle: "プロダクトで確認するポイント",
    accessibilityEyebrow: "誰でも使えるように",
    accessibilityTitle: "アクセシビリティの確認",
    referenceTitle: "参考値",
    referenceDescription:
      "役割名は保ち、値はテーマ、画面幅、言語、操作状態に合わせて調整できます。",
    role: "役割",
    use: "用途",
    value: "参考値",
    sourceTitle: "詳しくは DESIGN.md へ",
    sourceDescription:
      "実際に使う値と確認項目はDESIGN.mdで管理します。このページでは見た目と動きを確認できます。",
    overviewDescription: "ファウンデーション一覧",
  },
  notFound: {
    title: "ページが見つかりません",
    description: "ホームに戻り、原則またはファウンデーションから探してください。",
    action: "Comfortホームへ",
  },
} satisfies DocsContent;

export default jp;
