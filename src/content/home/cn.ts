import type { HomeContent } from "./types";

const cn = {
  locale: "cn",
  languageTag: "zh-CN",
  path: "/cn",
  metadata: {
    title: "Comfort DESIGN.md | 定义shadcn主题",
    description:
      "从无障碍的shadcn/ui组件开始，再用DESIGN.md定义产品的令牌、状态、动效、内容和验证规则。",
  },
  shell: {
    skipToContent: "跳到正文",
    homeLabel: "Comfort DESIGN.md 首页",
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
    accessibleTitle: "从shadcn组件开始，用DESIGN.md定义主题。",
    titleLines: ["从shadcn组件开始，", "用DESIGN.md", "定义产品主题。"],
    description:
      "保留shadcn/ui的无障碍行为，再在DESIGN.md中定义产品的颜色、字体、间距、状态和动效。",
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
    accessibleLabel: "从shadcn组件开始，用DESIGN.md定义产品主题。",
    segments: ["从shadcn组件开始，", "用DESIGN.md", "定义产品主题。"],
  },
  benefits: {
    eyebrow: "可塑造成产品风格的基础",
    title: "保留无障碍组件，替换千篇一律的设计决策。",
    description:
      "以可靠的shadcn/ui作为基础，再在DESIGN.md中定义颜色、字体、间距、状态与动效。",
    items: [
      {
        title: "以可靠的shadcn/ui为基础",
        description:
          "直接采用shadcn和Radix的基础能力，无需重做键盘、焦点和浮层机制。",
      },
      {
        title: "在DESIGN.md中定义细节",
        description:
          "在装饰组件之前，把颜色、字体、间距、形状、状态和动效映射到DESIGN.md的语义角色。",
      },
      {
        title: "让团队参考同一份文档",
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
    title: "从shadcn/ui到DESIGN.md中的产品主题。",
    description:
      "以可靠的shadcn/ui作为基础，用DESIGN.md定义设计细节，再检查用户会经历的每一种状态。",
    steps: [
      {
        number: "01",
        title: "以shadcn/ui为基础",
        description: "从已经验证无障碍与交互行为的shadcn/ui组件开始。",
      },
      {
        number: "02",
        title: "用DESIGN.md定义设计细节",
        description:
          "把语义令牌、状态、内容、动效和无障碍要求连接到已加入的组件。",
      },
      {
        number: "03",
        title: "验证每一种状态",
        description: "发布前检查响应式、主题、键盘、反馈、多语言和恢复流程。",
      },
    ],
  },
  productProof: {
    eyebrow: "在产品中验证",
    title: "这份参考本身就遵循它所记录的流程。",
    description:
      "本网站也从shadcn组件开始，并应用DESIGN.md中的语义角色。你可以直接查看基础、组件状态和检查项。",
    action: "查看组件参考",
    panelTitle: "在线参考",
    reviewed: "2026年8月",
    metrics: [
      { value: "336", label: "静态路由" },
      { value: "15", label: "语义基础" },
      { value: "63", label: "组件参考" },
      { value: "4", label: "支持语言" },
    ],
    verification: "路由、内容、类型、lint和生产构建检查都在仓库中执行。",
  },
  faq: {
    eyebrow: "开始前的问题",
    title: "分清shadcn提供什么，以及DESIGN.md改变什么。",
    description:
      "继续使用熟悉的组件代码，再通过DESIGN.md把视觉语言、行为和发布检查调整到产品需要的样子。",
    items: [
      {
        question: "shadcn/ui和DESIGN.md如何配合？",
        answer:
          "shadcn/ui提供基础组件代码和交互原语；DESIGN.md整理这些代码采用的令牌、状态、动效、内容、无障碍要求和检查项。",
      },
      {
        question: "我们可以调整组件代码吗？",
        answer:
          "可以。只把产品需要的shadcn组件加入项目，再按照DESIGN.md中的指南持续改进。",
      },
      {
        question: "DESIGN.md会取代品牌吗？",
        answer:
          "不会。它记录产品的品牌角色和行为，让颜色、字体、形状、语气和交互在不同贡献者之间保持一致。",
      },
      {
        question: "编码智能体也能使用DESIGN.md吗？",
        answer:
          "可以。在UI工作开始前提供DESIGN.md，让实现和评审都遵循相同的语义角色与验收条件。",
      },
      {
        question: "如何处理无障碍？",
        answer:
          "保留底层原语的语义和键盘行为，并在DESIGN.md中定义对比度、焦点、动效、内容与恢复要求。",
      },
      {
        question: "可以在现有产品中逐步采用吗？",
        answer:
          "可以。从一个界面或常用组件开始，把token和state整理到DESIGN.md中，再逐步扩大范围。",
      },
    ],
  },
  cta: {
    eyebrow: "让界面更符合产品特点",
    title: "从shadcn开始，在DESIGN.md中完善产品细节。",
    description:
      "选择产品需要的shadcn组件，再把品牌、行为、无障碍和发布检查整理到DESIGN.md中。",
    action: "阅读DESIGN.md",
  },
  footer: {
    description:
      "一份实用的DESIGN.md，用于按产品需要调整shadcn组件的颜色、字体、间距、状态和动效。",
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
    signatureLabel: "使用shadcn组件定义产品主题的Comfort DESIGN.md",
  },
} satisfies HomeContent;

export default cn;
