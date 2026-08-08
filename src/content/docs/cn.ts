import type { DocsContent } from "./types";

const cn = {
  locale: "cn",
  shell: {
    navigationLabel: "文档导航",
    browse: "浏览文档",
    title: "Comfort 指南",
    description: "依次查看原则和基础。",
    readDesign: "阅读 DESIGN.md",
    paginationLabel: "上一篇与下一篇文档",
    previous: "上一篇",
    next: "下一篇",
    reviewed: "最近检查 · 2026年8月",
    outlineLabel: "页面目录",
    outlineTitle: "本页内容",
    overviewGroup: "开始使用",
    sections: { principles: "原则", foundations: "基础" },
  },
  search: {
    ariaLabel: "筛选列表",
    label: "按名称查找",
    placeholder: "输入名称或用途",
    reset: "重置搜索",
    result: "项结果",
    results: "项结果",
  },
  principles: {
    eyebrow: "设计原则",
    title: "打造舒适产品的四项准则",
    description:
      "Comfort追求的不只是柔和的外观。用户应该能看懂下一步、预期操作结果，并在不改变熟悉用法的前提下逐步发现更多功能。",
    outlineModel: "整体了解",
    outlineReview: "发布前检查",
    intent: "为什么需要",
    practice: "如何应用",
    modelLabel: "四项Comfort原则组成的连续流程",
    modelCenter: "清晰带来信任",
    reviewBadge: "发布前检查",
    reviewTitle: "发布新模式前请确认这些事项",
    reviewItems: [
      "无需只依赖颜色，也能从文案、位置和状态看懂下一步操作。",
      "与相似组件保持一致，并使用semantic token而非临时例外。",
      "反馈出现在操作附近，并给出清晰的继续或返回路径。",
      "无需改变熟悉的用法，也能逐步展示进阶功能。",
    ],
    items: [
      {
        id: "natural",
        number: "01",
        title: "自然",
        comfortTitle: "无需解释也能看懂下一步",
        summary: "使用人们已经熟悉的语言和动作，减少思考与操作负担。",
        practice:
          "使用简单文案，保持空间关系，把主要操作放在视线自然停留的位置。",
        question: "不看说明也知道下一步该做什么吗？",
      },
      {
        id: "certain",
        number: "02",
        title: "可预期",
        comfortTitle: "相同情况使用相同方式回应",
        summary: "稳定的规则和必要的选项能让用户放心操作，不必反复猜测。",
        practice: "使用semantic token，让相似组件具备一致的状态与反馈。",
        question: "操作之前能预期结果吗？",
      },
      {
        id: "meaningful",
        number: "03",
        title: "有目的",
        comfortTitle: "让注意力回到重要任务",
        summary:
          "视觉和交互应帮助用户看懂目的、确认进度，并在遇到问题时找到返回路径。",
        practice:
          "突出核心任务，在操作附近提供反馈，减少干扰下一步判断的装饰。",
        question: "它能帮助完成任务或理解当前状态吗？",
      },
      {
        id: "growing",
        number: "04",
        title: "可成长",
        comfortTitle: "初次使用简单，熟悉后逐步深入",
        summary:
          "第一次使用就能发挥作用，随着使用逐步发现更多功能，并能平稳扩展。",
        practice:
          "逐步展示高级功能，保留已经学会的用法，把反馈用于下一次改进。",
        question: "功能增加后还能沿用已经学会的操作吗？",
      },
    ],
  },
  foundations: {
    eyebrow: "基础",
    title: "集中管理各个界面反复使用的准则",
    description:
      "颜色、字体、间距和动效会在产品中重复出现。先确定它们的作用，再按任务需要进行组合。",
    outlineCatalog: "查找基础",
    outlineDirectory: "完整列表",
    outlineLayers: "应用顺序",
    featuredNote: "示例与用法",
    emptyTitle: "没有找到相关基础",
    emptyDescription: "请尝试更短的名称或更宽泛的用途。",
    directoryEyebrow: "15项基础",
    directoryTitle: "完整列表",
    layersBadge: "应用顺序",
    layersTitle: "从意图到实际界面",
    layersDescription: "前一步确定的准则会让下一步更容易选择。",
    layers: [
      ["01", "原则", "说明界面为什么采用这种行为"],
      ["02", "Semantic token", "定义切换主题后仍然稳定的角色"],
      ["03", "组件", "把角色变成可以重复使用的交互"],
    ],
  },
  foundationDetail: {
    eyebrow: "基础",
    overview: "预览",
    intent: "用途",
    guidelines: "应用方法",
    accessibility: "无障碍",
    reference: "参考值",
    intentEyebrow: "为什么需要这项准则",
    intentTitle: "看看它让哪些体验保持一致",
    guidanceBadge: "核心指南",
    guidanceTitle: "应用到产品时需要检查什么",
    accessibilityEyebrow: "让每个人都能使用",
    accessibilityTitle: "无障碍检查",
    referenceTitle: "参考值",
    referenceDescription:
      "角色名称保持稳定，实际值可以根据主题、视口、语言和交互状态调整。",
    role: "角色",
    use: "用途",
    value: "参考值",
    sourceTitle: "在 DESIGN.md 中继续了解",
    sourceDescription:
      "产品实际使用的值和检查项由DESIGN.md管理，本页用于直观查看结果。",
    overviewDescription: "基础概览",
  },
  legal: {
    reviewed: "2026年8月3日检查",
    issue: "在GitHub报告问题",
    privacy: {
      eyebrow: "隐私说明",
      title: "只处理必要信息的静态网站",
      description: "浏览Comfort无需账号、提交表单或建立分析档案。",
      sections: [
        {
          title: "浏览器保存的信息",
          paragraphs: [
            "主题菜单可以把浅色或深色偏好保存在浏览器中。清除站点数据后，这项设置也会被移除。",
            "本仓库不包含账号、表单、分析工具、广告或跟踪像素。",
          ],
        },
        {
          title: "托管与外部链接",
          paragraphs: [
            "托管服务商可能会处理发送静态文件所需的常规请求信息。",
            "打开GitHub等外部链接后，将适用对应服务的隐私处理方式。",
          ],
        },
        {
          title: "有疑问？",
          paragraphs: [
            "网站行为发生变化时，本说明也应随之更新。如果实际行为与说明不一致，请通过GitHub Issue告知我们。",
          ],
        },
      ],
    },
    terms: {
      eyebrow: "使用说明",
      title: "请结合产品实际情况进行检查",
      description:
        "Comfort提供设计方向与可运行示例。产品、用户和运行环境仍需要单独评估。",
      sections: [
        {
          title: "本指南的用途",
          paragraphs: [
            "网站与DESIGN.md包含原则、token、pattern和实现示例。采用前请确认它们满足你的需求。",
            "本指南不承诺支持周期、可用时间、兼容性或特定产品结果。",
          ],
        },
        {
          title: "源代码与素材说明",
          paragraphs: [
            "第三方素材保留各自的许可说明。复用代码或素材前，请检查仓库及相关说明。",
          ],
        },
        {
          title: "变更",
          paragraphs: [
            "随着系统改进，指南和示例可能发生变化。详细变更可在Git历史中查看。",
          ],
        },
      ],
    },
  },
  notFound: {
    title: "找不到这个页面",
    description: "返回首页，从原则或基础中继续查找。",
    action: "返回Comfort首页",
  },
} satisfies DocsContent;

export default cn;
