import cn from "./cn";
import en from "./en";
import jp from "./jp";
import ko from "./ko";

import type { ComponentRecord, FoundationRecord } from "@/data/catalog";
import type { HomeLocale } from "@/content/home";
import type { DocsContent } from "./types";

export type { DocsContent } from "./types";

export const docsContents = {
  ko,
  en,
  jp,
  cn,
} as const satisfies Record<HomeLocale, DocsContent>;

export const designDocumentForLocale: Record<HomeLocale, string> = {
  ko: "/DESIGN.md",
  en: "/DESIGN.en.md",
  jp: "/DESIGN.jp.md",
  cn: "/DESIGN.cn.md",
};

const componentGuidance = {
  ko: {
    description: (title: string, family: string) =>
      `${title}의 실제 동작과 상태를 확인하고 ${family} 흐름에 맞게 적용해 보세요.`,
    usage: (title: string) =>
      `${title}가 사용자의 다음 행동을 더 분명하게 만들 때 사용합니다. 주요 과업과 결과를 가까이 두고, 불필요한 선택은 덜어내세요.`,
    accessibility: [
      "키보드만으로 모든 동작을 사용할 수 있는지 확인하세요.",
      "이름, 역할, 현재 상태를 보조 기술이 이해할 수 있어야 해요.",
      "색만으로 상태를 구분하지 말고 문구나 형태를 함께 사용하세요.",
    ],
  },
  en: {
    description: (title: string, family: string) =>
      `Review ${title} behavior and states, then adapt it to the ${family} flow.`,
    usage: (title: string) =>
      `Use ${title} when it makes the next action clearer. Keep the main task and result close together, and remove choices the task does not need.`,
    accessibility: [
      "Make every action available from the keyboard.",
      "Expose a clear name, role, and current state to assistive technology.",
      "Pair color with language or shape when communicating state.",
    ],
  },
  jp: {
    description: (title: string, family: string) =>
      `${title}の動きと状態を確認し、${family}の流れに合わせて使えます。`,
    usage: (title: string) =>
      `${title}によって次の操作がわかりやすくなる場面で使います。主な作業と結果を近くに置き、不要な選択肢を減らしてください。`,
    accessibility: [
      "すべての操作をキーボードだけでも利用できるようにします。",
      "名前、役割、現在の状態を支援技術に伝えます。",
      "状態は色だけで区別せず、文言や形も使います。",
    ],
  },
  cn: {
    description: (title: string, family: string) =>
      `查看${title}的行为与状态，再根据${family}流程进行调整。`,
    usage: (title: string) =>
      `当${title}能让下一步更清楚时使用它。把主要任务和结果放在一起，减少任务不需要的选项。`,
    accessibility: [
      "确保只使用键盘也能完成全部操作。",
      "向辅助技术提供清晰的名称、角色和当前状态。",
      "表达状态时不要只依赖颜色，同时使用文案或形状。",
    ],
  },
} as const;

const foundationGuidance = {
  ko: {
    description: (title: string) =>
      `${title}을 여러 화면에서 일관되게 적용하는 방법과 참고 값을 확인해 보세요.`,
    intent: (title: string) =>
      `${title}은 화면마다 달라지기 쉬운 선택을 공통 기준으로 정리해, 제품 전체를 더 빠르게 이해할 수 있게 도와줘요.`,
    rules: [
      "먼저 의미가 드러나는 역할 이름을 정한 뒤 실제 값을 연결하세요.",
      "한 화면만을 위한 예외보다 여러 흐름에서 다시 쓸 수 있는 기준을 우선하세요.",
      "테마와 화면 너비, 언어가 달라져도 같은 역할이 유지되는지 확인하세요.",
    ],
    accessibility: [
      "확대, 고대비, 동작 줄이기 설정에서도 정보를 잃지 않아야 해요.",
      "색이나 위치 하나에만 의미를 맡기지 마세요.",
      "키보드와 보조 기술로 같은 순서와 피드백을 경험할 수 있어야 해요.",
    ],
    use: (role: string) => `${role} 역할이 필요한 화면에 사용해요.`,
  },
  en: {
    description: (title: string) =>
      `See how ${title} stays consistent across screens, with guidance and reference values.`,
    intent: (title: string) =>
      `${title} turns choices that often drift between screens into shared roles, making the product easier to scan and maintain.`,
    rules: [
      "Name the semantic role before connecting it to a rendered value.",
      "Prefer a reusable rule over an exception made for one screen.",
      "Check that the role survives changes in theme, viewport, and language.",
    ],
    accessibility: [
      "Preserve information under zoom, high contrast, and reduced motion settings.",
      "Do not place meaning in color or position alone.",
      "Keep order and feedback available to keyboard and assistive technology users.",
    ],
    use: (role: string) => `Use where the ${role} role is needed.`,
  },
  jp: {
    description: (title: string) =>
      `${title}を画面間で揃える方法と参考値を確認できます。`,
    intent: (title: string) =>
      `${title}は、画面ごとにずれやすい選択を共通の役割にまとめ、プロダクト全体を理解しやすくします。`,
    rules: [
      "意味が伝わる役割名を先に決め、実際の値をつなげます。",
      "一つの画面だけの例外より、複数の流れで再利用できる基準を優先します。",
      "テーマ、画面幅、言語が変わっても役割が保たれるか確認します。",
    ],
    accessibility: [
      "拡大、高コントラスト、視差効果を減らす設定でも情報を失わないようにします。",
      "色や位置だけに意味を持たせません。",
      "キーボードと支援技術でも同じ順序とフィードバックを利用できるようにします。",
    ],
    use: (role: string) => `${role}の役割が必要な画面で使います。`,
  },
  cn: {
    description: (title: string) =>
      `查看${title}如何在不同界面保持一致，并参考用法与数值。`,
    intent: (title: string) =>
      `${title}把容易在界面之间偏移的选择整理为共通角色，让产品更容易理解和维护。`,
    rules: [
      "先定义能表达含义的角色名称，再连接实际值。",
      "优先使用可复用的准则，而不是只服务于单个界面的例外。",
      "确认主题、视口和语言变化后，角色仍然保持不变。",
    ],
    accessibility: [
      "在缩放、高对比度和减少动态效果的设置下也不要丢失信息。",
      "不要只用颜色或位置表达含义。",
      "确保键盘和辅助技术用户也能获得相同的顺序与反馈。",
    ],
    use: (role: string) => `用于需要${role}角色的界面。`,
  },
} as const;

export function localizedComponent(
  record: ComponentRecord,
  locale: HomeLocale,
): ComponentRecord {
  const copy = componentGuidance[locale];
  const family = docsContents[locale].families[record.family];
  return {
    ...record,
    description: copy.description(record.title, family),
    usage: copy.usage(record.title),
    accessibility: [...copy.accessibility],
  };
}

export function localizedFoundation(
  record: FoundationRecord,
  locale: HomeLocale,
): FoundationRecord {
  const copy = foundationGuidance[locale];
  return {
    ...record,
    description: copy.description(record.title),
    intent: copy.intent(record.title),
    rules: [...copy.rules],
    accessibility: [...copy.accessibility],
    values: record.values.map(([role, , value]) => [
      role,
      copy.use(role),
      value,
    ]),
  };
}
