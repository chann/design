import type { HomeContent } from "./types";

const cn = {
  locale: "cn",
  languageTag: "zh-CN",
  path: "/cn",
  metadata: {
    title: "Comfort Design System | 用DESIGN.md定制shadcn",
    description:
      "从无障碍的shadcn/ui组件开始，再用DESIGN.md定义产品的令牌、状态、动效、内容和验证规则。",
  },
  shell: {
    skipToContent: "跳到正文",
    homeLabel: "Comfort Design System 首页",
    primaryNavigationLabel: "主导航",
    mobileNavigationTitle: "Comfort 导航",
    mobileNavigationDescription: "浏览原则、基础和组件文档。",
    openNavigation: "打开导航",
    closeNavigation: "关闭导航",
    nav: { principles: "原则", foundations: "基础", components: "组件" },
    language: "语言",
    languageMenuLabel: "主页语言",
    theme: "主题",
    appearance: "显示设置",
    themes: { light: "浅色", dark: "深色", system: "跟随系统" },
  },
  hero: {
    eyebrow: "shadcn/ui + DESIGN.md",
    accessibleTitle: "从shadcn开始，用DESIGN.md塑造你的产品。",
    titleLines: ["从shadcn开始，", "用DESIGN.md", "塑造你的产品。"],
    description:
      "以shadcn/ui作为无障碍组件基础，再根据产品定义语义令牌、状态、交互和内容规则。",
    primaryAction: "阅读DESIGN.md",
    languageNavigationLabel: "主页语言",
  },
  proof: {
    accessibleLabel: "Comfort关键数据",
    items: [
      { value: "4", label: "语言版本" },
      { value: "15", label: "语义基础" },
      { value: "63", label: "组件参考" },
    ],
  },
  tagline: {
    accessibleLabel: "从shadcn组件开始，用DESIGN.md构建你的产品系统。",
    segments: ["从shadcn组件开始，", "用DESIGN.md", "构建你的产品系统。"],
  },
  benefits: {
    eyebrow: "可塑造成产品风格的基础",
    title: "保留无障碍组件，替换千篇一律的设计决策。",
    description:
      "shadcn/ui提供可直接拥有的源码，DESIGN.md则为这些源码注入统一的品牌、行为和质量语言。",
    items: [
      {
        title: "从成熟的原语开始",
        description:
          "直接采用shadcn和Radix的基础能力，无需重做键盘、焦点和浮层机制。",
      },
      {
        title: "只定义一次产品语义",
        description:
          "在装饰组件之前，把颜色、字体、间距、形状、状态和动效映射到DESIGN.md的语义角色。",
      },
      {
        title: "让所有贡献者遵循同一份契约",
        description:
          "设计师、工程师和编码智能体使用相同规则，不再反复翻译零散偏好。",
      },
      {
        title: "验证完整体验",
        description:
          "让响应式、无障碍、多语言、反馈和恢复流程始终属于系统的一部分。",
      },
    ],
    tokenFlow: ["shadcn源码", "DESIGN.md角色", "产品界面"],
  },
  workflow: {
    eyebrow: "使用流程",
    title: "从shadcn源码到产品级系统。",
    description:
      "只选择产品需要的组件，应用统一的设计契约，再验证用户会经历的每一种状态。",
    steps: [
      {
        number: "01",
        title: "选择shadcn组件",
        description:
          "复制产品需要的无障碍组件源码，并在自己的代码仓库中持有它们。",
      },
      {
        number: "02",
        title: "应用DESIGN.md角色",
        description:
          "把语义令牌、状态、内容、动效和无障碍规则连接到自有组件。",
      },
      {
        number: "03",
        title: "验证每一种状态",
        description:
          "发布前检查响应式、主题、键盘、反馈、多语言和恢复流程。",
      },
    ],
  },
  productProof: {
    eyebrow: "在产品中验证",
    title: "这份参考本身就遵循它所记录的流程。",
    description:
      "本网站从仓库自有的shadcn组件开始，应用DESIGN.md语义角色，并公开由此形成的基础、组件状态和验证项目。",
    action: "查看组件参考",
    panelTitle: "在线参考",
    reviewed: "2026年8月",
    metrics: [
      { value: "87", label: "静态路由" },
      { value: "15", label: "语义基础" },
      { value: "63", label: "组件参考" },
      { value: "4", label: "一致的DESIGN.md版本" },
    ],
    verification: "路由、内容、类型、lint和生产构建检查都在仓库中执行。",
  },
  faq: {
    eyebrow: "开始前的问题",
    title: "分清shadcn提供什么，以及DESIGN.md改变什么。",
    description:
      "组件源码保持熟悉，产品契约则让视觉语言、行为和发布标准更具体。",
    items: [
      {
        question: "shadcn/ui和DESIGN.md如何配合？",
        answer:
          "shadcn/ui提供基础组件源码和交互原语；DESIGN.md则是一份产品级设计契约，用来定义这些源码所采用的令牌、状态、动效、内容、无障碍和验证规则。",
      },
      {
        question: "我们会拥有组件代码吗？",
        answer:
          "会。只把产品需要的shadcn组件复制进仓库，并在同一份DESIGN.md契约下持续演进。",
      },
      {
        question: "DESIGN.md会取代品牌吗？",
        answer:
          "不会。它记录产品的品牌角色和行为，让颜色、字体、形状、语气和交互在不同贡献者之间保持一致。",
      },
      {
        question: "编码智能体也能使用这份契约吗？",
        answer:
          "可以。在UI工作开始前提供DESIGN.md，让实现和评审都遵循相同的语义角色与验收条件。",
      },
      {
        question: "如何处理无障碍？",
        answer:
          "保留底层原语的语义和键盘行为，并在DESIGN.md中定义对比度、焦点、动效、内容与恢复要求。",
      },
      {
        question: "四种语言版本如何保持一致？",
        answer:
          "以韩文版本为基准，英文、日文和中文版本保持相同的令牌名称、章节顺序、组件清单和要求强度。",
      },
    ],
  },
  cta: {
    eyebrow: "为每一个界面决策建立清晰契约",
    title: "拥有组件，把系统定义在DESIGN.md中。",
    description:
      "选择产品需要的shadcn组件，再用一份统一契约落实品牌、行为、无障碍和发布验证。",
    action: "阅读DESIGN.md",
  },
  footer: {
    description:
      "一份实用的DESIGN.md，用于把自有shadcn组件定制成清晰、无障碍且符合产品特质的界面系统。",
    navigationLabel: "页脚导航",
    groups: {
      system: "系统",
      foundations: "基础",
      resources: "资源",
      legal: "法律信息",
    },
    links: {
      overview: "概览",
      principles: "原则",
      foundationCatalog: "基础目录",
      componentCatalog: "组件目录",
      github: "GitHub源码",
      privacy: "隐私",
      terms: "条款",
    },
    signatureLabel:
      "使用shadcn定制并记录在DESIGN.md中的Comfort Design System",
  },
} satisfies HomeContent;

export default cn;
