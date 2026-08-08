import type { HomeContent } from "./types";

const cn = {
  locale: "cn",
  languageTag: "zh-CN",
  path: "/cn",
  metadata: {
    title: "Comfort DESIGN.md | 用shadcn/ui完成产品设计",
    description:
      "保留shadcn/ui组件原有的无障碍能力，再用DESIGN.md调整颜色、字体、间距、状态和动效。",
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
    accessibleTitle: "从shadcn/ui开始，完成属于产品的设计。",
    titleLines: ["从shadcn/ui开始，", "完成属于产品的", "设计。"],
    description:
      "保留组件原有的无障碍能力，再按照DESIGN.md调整颜色、字体、间距、状态和动效。",
    primaryAction: "阅读DESIGN.md",
    languageNavigationLabel: "主页语言",
    workbench: {
      accessibleLabel: "Comfort主题工作台",
      title: "Theme Workbench",
      description: "看看同一组token如何贯穿不同组件。",
      tabsLabel: "主题工作台视图",
      tokensTab: "Tokens",
      componentsTab: "Components",
      sampleFieldLabel: "项目名称",
      sampleFieldPlaceholder: "Comfort",
      sampleSwitchLabel: "变更通知",
      sampleReadyBadge: "已就绪",
      sampleSavedBadge: "已保存",
      samplePrimaryAction: "保存",
      sampleSecondaryAction: "查看组件",
    },
  },
  summary: {
    accessibleLabel: "Comfort构成",
    items: [
      { value: "4", label: "语言" },
      { value: "15", label: "Foundation" },
      { value: "63", label: "Component" },
    ],
  },
  tagline: {
    accessibleLabel: "同一套组件，换上产品自己的语言后，感受会完全不同。",
    segments: [
      "同一套组件，",
      "换上产品",
      "自己的语言后，",
      "感受会",
      "完全不同。",
    ],
  },
  principles: {
    eyebrow: "设计原则",
    title: "保留熟悉的用法，也让产品拥有清晰的风格。",
    description:
      "无需重做基本交互。只要梳理颜色、字体、间距和状态，产品的整体感受就会不同。",
    items: [
      {
        title: "保留熟悉的用法。",
        description:
          "键盘、焦点和浮层沿用shadcn/ui中熟悉的交互方式。",
      },
      {
        title: "加入产品自己的风格。",
        description: "把颜色、字体、间距和形状连接到DESIGN.md中的角色。",
      },
      {
        title: "在真实状态中查看结果。",
        description:
          "在小屏、深色主题、长文案和键盘操作中保持相同流程。",
      },
    ],
  },
  workflow: {
    eyebrow: "工作流程",
    title: "组件来自shadcn/ui，产品风格来自DESIGN.md。",
    description:
      "选择需要的组件，写下产品规则，再到真实界面中看看它们是否自然好用。",
    steps: [
      {
        number: "01",
        title: "选择组件。",
        description: "先加入产品需要的shadcn/ui组件。",
      },
      {
        number: "02",
        title: "写下产品规则。",
        description: "在DESIGN.md中整理token、状态、文案和动效。",
      },
      {
        number: "03",
        title: "查看真实界面。",
        description: "切换屏幕尺寸、输入方式、主题和语言查看结果。",
      },
    ],
  },
  systemPreview: {
    eyebrow: "真实界面",
    title: "看看应用Comfort token后的shadcn/ui。",
    description:
      "在Preview与Code之间切换，查看组件如何使用文档中的颜色、字体、间距和状态。",
    action: "查看组件",
    panelTitle: "Button预览",
    metrics: [
      { value: "336", label: "静态路由" },
      { value: "15", label: "Foundation" },
      { value: "63", label: "Component" },
      { value: "4", label: "支持语言" },
    ],
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
      foundationCatalog: "查看基础",
      componentCatalog: "查看组件",
      github: "GitHub源码",
      privacy: "隐私",
      terms: "条款",
    },
    signatureLabel: "使用shadcn组件定义产品主题的Comfort DESIGN.md",
  },
} satisfies HomeContent;

export default cn;
