


// 测试问题数据
const testQuestions = [
    // E vs I 外向/内向
    {
        question: "在社交场合中，你更倾向于：",
        options: [{ text: "主动与人交谈，从互动中获得能量", type: "E" }, { text: "保持安静观察，独处时感觉更自在", type: "I" }]
    },
    {
        question: "在遇到问题时，你更喜欢：",
        options: [{ text: "与他人讨论，通过交谈寻找解决方案", type: "E" }, { text: "独自思考，在内心分析问题", type: "I" }]
    },
    {
        question: "周末休息时，你更倾向于：",
        options: [{ text: "参加社交活动，与朋友聚会", type: "E" }, { text: "待在家里，享受独处时光", type: "I" }]
    },
    {
        question: "在团队中，你通常会：",
        options: [{ text: "积极发言，分享想法", type: "E" }, { text: "先听取他人意见，仔细思考后再发言", type: "I" }]
    },
    {
        question: "你更容易从哪里获得能量：",
        options: [{ text: "与他人互动和交流", type: "E" }, { text: "独处和自我反思", type: "I" }]
    },

    // S vs N 感知/直觉
    {
        question: "在获取信息时，你更注重：",
        options: [{ text: "具体的事实和细节", type: "S" }, { text: "概念和可能性", type: "N" }]
    },
    {
        question: "你更相信：",
        options: [{ text: "实际经验和具体事例", type: "S" }, { text: "直觉和未来潜力", type: "N" }]
    },
    {
        question: "在解决问题时，你更倾向于：",
        options: [{ text: "遵循已证实有效的方法", type: "S" }, { text: "尝试新的、创新的解决方案", type: "N" }]
    },
    {
        question: "你更关注：",
        options: [{ text: "当下的现实情况", type: "S" }, { text: "未来的可能性", type: "N" }]
    },
    {
        question: "在学习新事物时，你更喜欢：",
        options: [{ text: "循序渐进，掌握具体细节", type: "S" }, { text: "先了解整体概念，再关注细节", type: "N" }]
    },

    // T vs F 思考/情感
    {
        question: "在做决定时，你更依赖：",
        options: [{ text: "逻辑分析和客观事实", type: "T" }, { text: "个人价值观和感受", type: "F" }]
    },
    {
        question: "在处理冲突时，你更看重：",
        options: [{ text: "找出问题的逻辑解决方案", type: "T" }, { text: "维护人际关系的和谐", type: "F" }]
    },
    {
        question: "你认为更重要的是：",
        options: [{ text: "保持客观公正", type: "T" }, { text: "考虑他人感受", type: "F" }]
    },
    {
        question: "在评价事物时，你更倾向于：",
        options: [{ text: "分析利弊，追求合理性", type: "T" }, { text: "考虑对人的影响，追求和谐", type: "F" }]
    },
    {
        question: "面对批评时，你更希望得到：",
        options: [{ text: "直接的、客观的反馈", type: "T" }, { text: "温和的、体贴的建议", type: "F" }]
    },

    // J vs P 判断/知觉
    {
        question: "你更喜欢：",
        options: [{ text: "提前计划，按计划执行", type: "J" }, { text: "保持灵活，随机应变", type: "P" }]
    },
    {
        question: "对待工作/学习任务时，你倾向于：",
        options: [{ text: "制定清晰的计划和期限", type: "J" }, { text: "保持开放，视情况调整", type: "P" }]
    },
    {
        question: "你更喜欢的工作环境是：",
        options: [{ text: "有明确的规则和结构", type: "J" }, { text: "灵活自由，可以随时调整", type: "P" }]
    },
    {
        question: "面对决定时，你更倾向于：",
        options: [{ text: "尽快做出决定并执行", type: "J" }, { text: "保持开放，继续收集信息", type: "P" }]
    },
    {
        question: "你的生活方式更接近：",
        options: [{ text: "有序、计划、可控", type: "J" }, { text: "随性、适应、自然", type: "P" }]
    },

    // 额外的深入性格特征问题
    {
        question: "在团队项目中，你更看重：",
        options: [{ text: "效率和成果", type: "T" }, { text: "团队氛围和合作", type: "F" }]
    },
    {
        question: "你更容易记住：",
        options: [{ text: "具体的细节和事实", type: "S" }, { text: "整体印象和联系", type: "N" }]
    },
    {
        question: "压力下，你更倾向于：",
        options: [{ text: "制定计划，寻求控制", type: "J" }, { text: "保持开放，寻找选项", type: "P" }]
    },
    {
        question: "在新环境中，你通常会：",
        options: [{ text: "主动寻找社交机会", type: "E" }, { text: "等待他人来接近你", type: "I" }]
    },
    {
        question: "你更喜欢的工作类型是：",
        options: [{ text: "有明确流程和规范的工作", type: "S" }, { text: "需要创新和想象力的工作", type: "N" }]
    }
];
// 认知功能描述数据
const functionDescriptions = {
    "Ti": {
        "name": "内倾思维",
        "description": "分析、分类和理解概念的内在逻辑。追求内在的逻辑一致性。",
        "position1Desc": ["持续追求逻辑一致性", "建立个人的理论体系", "深入分析问题的核心", "重视概念的准确性", "追求理解事物的本质"],
        "position2Desc": ["支持主要决策过程", "提供理性分析框架", "帮助系统化信息", "平衡感性与理性"],
        "position3Desc": ["可能表现不够成熟", "在压力下容易过度分析", "需要时间发展", "可能显得犹豫不决"],
        "position4Desc": ["在压力下可能过度教条", "可能忽视情感因素", "需要刻意发展", "是成长的重要方向"],
        "position5Desc": ["过度追求完美的逻辑体系", "陷入无休止的分析和推理", "对他人的逻辑观点过度批判", "在压力下表现强迫性思考", "难以接受不完美的解决方案"],
        "position6Desc": ["在压力下表现为僵化思维", "过分强调细节的逻辑一致性", "难以灵活应对实际情况", "可能表现出过度教条主义", "对不合逻辑的事物强烈抵触"],
        "position7Desc": ["容易忽视或排斥主观逻辑分析", "对深入思考感到不适和抗拒", "倾向于采用现成的解决方案", "难以建立个人的理论体系", "对逻辑推理缺乏耐心"],
        "position8Desc": ["极度排斥深入的逻辑分析", "可能完全依赖他人的判断", "对理论探讨产生焦虑", "难以独立进行系统思考", "对抽象概念产生排斥"]
    },
    "Te": {
        "name": "外倾思维",
        "description": "组织外部世界，实现目标的效率和逻辑。关注客观事实和系统。",
        "position1Desc": ["追求效率和结果", "建立系统和流程", "重视客观数据", "擅长规划执行", "注重实际成效"],
        "position2Desc": ["协助决策和执行", "提供实用解决方案", "优化工作流程", "平衡理想与现实"],
        "position3Desc": ["可能过于死板", "忽视人际感受", "需要更多灵活性", "可能显得专制"],
        "position4Desc": ["在压力下可能强加控制", "可能忽视直觉", "需要学会放松", "是自我完善的方向"],
        "position5Desc": ["过度追求效率和完美执行", "强制推行个人的工作方式", "对结果有不切实际的期望", "难以容忍计划的变动", "在压力下变得过度控制"],
        "position6Desc": ["在压力下变得独断专行", "过分依赖规则和程序", "忽视人性化管理的需求", "可能表现出控制欲过强", "对效率低下极度不耐烦"],
        "position7Desc": ["对组织和规划感到力不从心", "难以建立有效的工作系统", "容易陷入效率低下的困境", "对管理职责感到压力", "回避决策和领导角色"],
        "position8Desc": ["极度排斥组织和管理工作", "难以应对结构化的任务", "对效率和生产力感到焦虑", "完全依赖他人的决策和规划", "逃避任何系统性工作"]
    },
    "Fi": {
        "name": "内倾情感",
        "description": "深入理解个人价值观和情感。重视真实性和个人信念。",
        "position1Desc": ["强烈的个人价值观", "追求真实与真诚", "深刻的情感体验", "重视个人真实性", "坚持道德准则"],
        "position2Desc": ["协助价值判断", "提供道德指引", "增进自我了解", "平衡理性决策"],
        "position3Desc": ["可能过于主观", "难以表达情感", "需要更多客观性", "可能显得固执"],
        "position4Desc": ["在压力下情绪波动", "可能过度理想化", "需要接纳现实", "是情感成长的关键"],
        "position5Desc": ["过度坚持个人价值观", "对道德问题极度敏感", "难以接受与己不同的价值观", "在价值冲突时情绪激动", "对自我认同过分执着"],
        "position6Desc": ["对他人的价值观持批判态度", "在道德判断上过于严苛", "难以理解他人的情感需求", "可能表现出道德优越感", "对价值观差异缺乏包容"],
        "position7Desc": ["难以识别自身的情感需求", "对个人价值观感到困惑", "回避深入的情感体验", "难以形成稳定的价值体系", "对情感决策缺乏信心"],
        "position8Desc": ["极度排斥情感决策", "对价值观探讨感到不适", "难以建立情感连结", "对自我价值产生怀疑", "逃避任何情感深度"]
    },
    "Fe": {
        "name": "外倾情感",
        "description": "理解和调和群体情感。关注人际和谐与社交互动。",
        "position1Desc": ["敏锐感知群体氛围", "促进人际和谐", "关注他人需求", "善于情感表达", "追求社群和谐"],
        "position2Desc": ["改善人际关系", "营造积极氛围", "促进团队合作", "平衡个人与集体"],
        "position3Desc": ["可能过分迎合", "忽视自身需求", "需要建立界限", "可能情绪化"],
        "position4Desc": ["在压力下社交焦虑", "可能过度敏感", "需要学会自处", "是社交发展的重点"],
        "position5Desc": ["过度关注社交和谐", "强迫性地迎合他人", "对群体氛围过分敏感", "难以处理冲突情况", "在社交压力下情绪失控"],
        "position6Desc": ["对社交规范过度执着", "批判他人的情感表达", "在人际互动中显得生硬", "对社交礼仪过分苛求", "难以接受非传统的社交方式"],
        "position7Desc": ["难以理解群体动态", "对社交互动感到不适", "回避情感表达和分享", "在群体中感到格格不入", "难以维持社交关系"],
        "position8Desc": ["极度排斥社交活动", "对群体互动产生焦虑", "难以理解社交暗示", "完全回避情感交流", "对社交场合感到恐惧"]
    },
    "Ni": {
        "name": "内倾直觉",
        "description": "看到深层模式和未来可能性。综合信息形成深刻见解。",
        "position1Desc": ["深度洞察力", "预见未来趋势", "整合复杂信息", "追求长远愿景", "理解深层含义"],
        "position2Desc": ["提供战略视角", "发现隐藏模式", "预测可能结果", "平衡具体与抽象"],
        "position3Desc": ["可能过度解读", "忽视当下细节", "需要更多实践", "可能显得神秘"],
        "position4Desc": ["在压力下过度担忧", "可能陷入幻想", "需要脚踏实地", "是直觉发展的方向"],
        "position5Desc": ["过度沉迷未来预测", "对直觉印象过分执着", "难以接受计划变更", "对未来过度焦虑", "陷入阴暗的预感"],
        "position6Desc": ["对直觉洞察持怀疑态度", "批判他人的远见规划", "对未来发展过分担忧", "难以接受模糊性", "对直觉型决策不信任"],
        "position7Desc": ["难以看清长远影响", "对未来规划感到困惑", "回避战略性思考", "难以理解隐含意义", "对直觉判断缺乏信心"],
        "position8Desc": ["极度排斥未来规划", "对远见卓识感到不适", "难以理解象征意义", "完全依赖具体事实", "对不确定性产生焦虑"]
    },
    "Ne": {
        "name": "外倾直觉",
        "description": "探索可能性和新想法。发现概念间的联系。",
        "position1Desc": ["创新思维活跃", "发现多种可能", "联系不同概念", "享受头脑风暴", "追求新奇体验"],
        "position2Desc": ["激发创意灵感", "提供多元视角", "促进思维发散", "平衡传统与创新"],
        "position3Desc": ["可能注意力分散", "难以做出决定", "需要更多聚焦", "可能过于理想"],
        "position4Desc": ["在压力下举棋不定", "可能忽视现实", "需要学会专注", "是创造力的基础"],
        "position5Desc": ["过度追求新奇可能性", "对创新变革强迫性追求", "难以专注于现实任务", "在压力下思维发散失控", "对稳定性产生抵触"],
        "position6Desc": ["对创新想法持批判态度", "排斥非传统方法", "对可能性探索缺乏耐心", "难以接受开放性结果", "对创意思维表现怀疑"],
        "position7Desc": ["难以产生创新想法", "对可能性探索感到疲惫", "回避头脑风暴活动", "难以理解抽象概念", "对创意过程缺乏信心"],
        "position8Desc": ["极度排斥创新思维", "对可能性探索感到焦虑", "难以应对变化和创新", "完全依赖既定方案", "对新想法产生恐惧"]
    },
    "Si": {
        "name": "内倾感知",
        "description": "详细记忆过去经验。重视传统和具体细节。",
        "position1Desc": ["重视传统经验", "关注细节完整", "建立稳定秩序", "保持可靠责任", "重视实践经验"],
        "position2Desc": ["提供经验参考", "维护日常秩序", "确保可靠性", "平衡创新与传统"],
        "position3Desc": ["可能过分保守", "抗拒变化", "需要更多开放", "可能固守过往"],
        "position4Desc": ["在压力下过度担心", "可能过分保守", "需要接纳改变", "是稳定性的来源"],
        "position5Desc": ["过度依赖过往经验", "对细节完美主义倾向", "难以适应新环境", "在变化中感到不安", "对传统做法过分执着"],
        "position6Desc": ["对习惯改变持批判态度", "过分强调程序和规范", "对新方法表现抗拒", "难以接受非传统做法", "对经验偏差过分敏感"],
        "position7Desc": ["难以维持日常规律", "对细节观察力不足", "容易忽视实际经验", "难以建立稳定习惯", "对传统价值缺乏认同"],
        "position8Desc": ["极度排斥常规和习惯", "对细节关注产生焦虑", "难以保持稳定作息", "完全忽视传统经验", "对规律生活感到压抑"]
    },
    "Se": {
        "name": "外倾感知",
        "description": "敏锐感知当下环境。享受身体体验和即时反应。",
        "position1Desc": ["享受当下体验", "敏锐感知环境", "快速反应变化", "追求感官刺激", "善于实践操作"],
        "position2Desc": ["提升现实适应", "把握机会时机", "增强行动力", "平衡思考与行动"],
        "position3Desc": ["可能冲动行事", "忽视长远影响", "需要更多规划", "可能过度刺激"],
        "position4Desc": ["在压力下感官过敏", "可能逃避现实", "需要学会节制", "是行动力的基础"],
        "position5Desc": ["过度追求感官刺激", "对现实体验强迫性需求", "难以控制冲动行为", "在压力下寻求刺激", "对安静环境感到不适"],
        "position6Desc": ["对感官体验持批判态度", "排斥物质享受", "对现实活动缺乏投入", "难以享受当下时刻", "对体验型学习表示怀疑"],
        "position7Desc": ["难以把握当下机会", "对环境变化反应迟钝", "回避实践性活动", "难以适应现实情况", "对身体感知缺乏敏锐"],
        "position8Desc": ["极度排斥感官体验", "对物质世界感到焦虑", "难以应对实际情况", "完全逃避现实活动", "对身体活动感到恐惧"]
    }
}
const socionicsTypes = {
    'INTP': {
        type: 'LII',
        name: '研究者',
        quadra: 'Alpha',
        romance: 'ESFJ (ESE)',
        benefit: 'ENFJ (EIE)',
        supervision: 'ISFP (SEI)',
        description: '理性的分析者，专注于系统和理论的逻辑结构。在Alpha象限中，强调知识共享和理性讨论。'
    },
    'INTJ': {
        type: 'ILI',
        name: '评论家',
        quadra: 'Gamma',
        romance: 'ESFP (SEE)',
        benefit: 'ENTJ (LIE)',
        supervision: 'ISFJ (ESI)',
        description: '战略思考者，擅长预测趋势和分析系统漏洞。在Gamma象限中，注重效率和现实可行性。'
    },
    'INFP': {
        type: 'EII',
        name: '人道主义者',
        quadra: 'Delta',
        romance: 'ESTJ (LSE)',
        benefit: 'ENFP (IEE)',
        supervision: 'ISTP (SLI)',
        description: '道德价值的守护者，关注个人成长和伦理准则。在Delta象限中，追求稳定和渐进式改革。'
    },
    'INFJ': {
        type: 'IEI',
        name: '先知',
        quadra: 'Beta',
        romance: 'ESTP (SLE)',
        benefit: 'ENFJ (EIE)',
        supervision: 'ISTJ (LSI)',
        description: '富有洞察力的理想主义者，关注社会变革。在Beta象限中，强调力量和意志力的重要性。'
    },
    'ISTP': {
        type: 'SLI',
        name: '工匠',
        quadra: 'Delta',
        romance: 'ENFP (IEE)',
        benefit: 'ESTJ (LSE)',
        supervision: 'INFJ (IEI)',
        description: '实践型专家，专注于技术和工艺的完善。在Delta象限中，重视实用性和可靠性。'
    },
    'ISTJ': {
        type: 'LSI',
        name: '检查官',
        quadra: 'Beta',
        romance: 'ENFJ (EIE)',
        benefit: 'ESTP (SLE)',
        supervision: 'INFP (EII)',
        description: '系统的组织者，注重规则和秩序。在Beta象限中，强调纪律和责任。'
    },
    'ISFP': {
        type: 'SEI',
        name: '调解者',
        quadra: 'Alpha',
        romance: 'ENTJ (LIE)',
        benefit: 'ESFJ (ESE)',
        supervision: 'INTJ (ILI)',
        description: '感性的享乐主义者，善于创造舒适氛围。在Alpha象限中，重视和谐与舒适。'
    },
    'ISFJ': {
        type: 'ESI',
        name: '卫士',
        quadra: 'Gamma',
        romance: 'ENTP (ILE)',
        benefit: 'ESFP (SEE)',
        supervision: 'INTP (LII)',
        description: '忠诚的保护者，维护传统和关系。在Gamma象限中，注重安全和责任。'
    },
    'ENTP': {
        type: 'ILE',
        name: '发起者',
        quadra: 'Alpha',
        romance: 'ISFJ (ESI)',
        benefit: 'INTP (LII)',
        supervision: 'ESFJ (ESE)',
        description: '创新的思想家，善于发现新机会。在Alpha象限中，推动思想交流和创新。'
    },
    'ENTJ': {
        type: 'LIE',
        name: '企业家',
        quadra: 'Gamma',
        romance: 'ISFP (SEI)',
        benefit: 'INTJ (ILI)',
        supervision: 'ESFP (SEE)',
        description: '果断的领导者，追求效率和成功。在Gamma象限中，强调目标和成就。'
    },
    'ENFP': {
        type: 'IEE',
        name: '心理学家',
        quadra: 'Delta',
        romance: 'ISTP (SLI)',
        benefit: 'INFP (EII)',
        supervision: 'ESTJ (LSE)',
        description: '充满想象力的激励者，关注他人潜能。在Delta象限中，追求个人成长和社会和谐。'
    },
    'ENFJ': {
        type: 'EIE',
        name: '导师',
        quadra: 'Beta',
        romance: 'ISTJ (LSI)',
        benefit: 'INFJ (IEI)',
        supervision: 'ESTP (SLE)',
        description: '富有魅力的领导者，善于动员和激励他人。在Beta象限中，推动集体行动和变革。'
    },
    'ESTP': {
        type: 'SLE',
        name: '政治家',
        quadra: 'Beta',
        romance: 'INFJ (IEI)',
        benefit: 'ISTJ (LSI)',
        supervision: 'ENFP (IEE)',
        description: '实践型领导者，善于掌控局势。在Beta象限中，强调力量和行动。'
    },
    'ESTJ': {
        type: 'LSE',
        name: '管理者',
        quadra: 'Delta',
        romance: 'INFP (EII)',
        benefit: 'ISTP (SLI)',
        supervision: 'ENFJ (EIE)',
        description: '实用主义的组织者，追求效率和结果。在Delta象限中，重视秩序和实际成果。'
    },
    'ESFP': {
        type: 'SEE',
        name: '政治家',
        quadra: 'Gamma',
        romance: 'INTJ (ILI)',
        benefit: 'ISFJ (ESI)',
        supervision: 'ENTJ (LIE)',
        description: '热情的表演者，善于把握机会。在Gamma象限中，追求实际利益和影响力。'
    },
    'ESFJ': {
        type: 'ESE',
        name: '热情者',
        quadra: 'Alpha',
        romance: 'INTP (LII)',
        benefit: 'ISFP (SEI)',
        supervision: 'ENTP (ILE)',
        description: '群体活动的组织者，创造和谐氛围。在Alpha象限中，促进社交互动和情感交流。'
    }
};
const personalityLabels = {
    'INTP': [
        '理性的', '逻辑的', '创新的', '独立的', '好奇的',
        '分析的', '沉静的', '灵活的', '适应的', '客观的'
    ],
    'INTJ': [
        '战略的', '独立的', '分析的', '决断的', '理性的',
        '完美的', '创新的', '专注的', '有远见的', '系统的'
    ],
    'INFP': [
        '理想的', '富同情心的', '创造的', '忠诚的', '适应的',
        '温和的', '关怀的', '敏感的', '包容的', '真诚的'
    ],
    'INFJ': [
        '洞察的', '理想的', '富同情心的', '有远见的', '创造的',
        '温和的', '坚定的', '完美的', '独特的', '神秘的'
    ],
    'ISTP': [
        '灵活的', '冷静的', '实践的', '逻辑的', '独立的',
        '适应的', '观察的', '效率的', '冒险的', '客观的'
    ],
    'ISTJ': [
        '可靠的', '实际的', '系统的', '尽责的', '传统的',
        '组织的', '稳重的', '专注的', '逻辑的', '保守的'
    ],
    'ISFP': [
        '艺术的', '灵活的', '敏感的', '和谐的', '自然的',
        '观察的', '适应的', '忠诚的', '温和的', '关怀的'
    ],
    'ISFJ': [
        '忠诚的', '体贴的', '负责的', '传统的', '实际的',
        '细心的', '温和的', '可靠的', '组织的', '保护的'
    ],
    'ENTP': [
        '创新的', '活力的', '适应的', '机智的', '灵活的',
        '分析的', '好奇的', '理论的', '战略的', '辩论的'
    ],
    'ENTJ': [
        '领导的', '决断的', '战略的', '自信的', '效率的',
        '直接的', '理性的', '目标导向的', '分析的', '有魄力的'
    ],
    'ENFP': [
        '热情的', '创造的', '适应的', '创新的', '活力的',
        '乐观的', '灵活的', '关怀的', '自发的', '表现的'
    ],
    'ENFJ': [
        '热情的', '富同情心的', '负责的', '理想的', '社交的',
        '合作的', '关怀的', '忠诚的', '有魅力的', '鼓舞的'
    ],
    'ESTP': [
        '活力的', '冒险的', '实践的', '灵活的', '自发的',
        '适应的', '行动的', '果断的', '效率的', '现实的'
    ],
    'ESTJ': [
        '组织的', '实际的', '负责的', '系统的', '效率的',
        '直接的', '逻辑的', '决断的', '传统的', '目标导向的'
    ],
    'ESFP': [
        '活力的', '热情的', '自发的', '适应的', '友好的',
        '实践的', '社交的', '表现的', '乐观的', '灵活的'
    ],
    'ESFJ': [
        '友好的', '负责的', '合作的', '传统的', '关怀的',
        '组织的', '体贴的', '实际的', '社交的', '和谐的'
    ]
};
const personalityLabelDescriptions = {
    'INTP': {
        '理性的': '倾向于用逻辑和理性分析问题，重视客观真理',
        '逻辑的': '善于发现事物间的逻辑关系，追求系统性理解',
        '创新的': '喜欢探索新想法，勇于挑战传统观念',
        '独立的': '享受独立思考和工作，不依赖他人的认可',
        '好奇的': '对知识和概念有强烈的求知欲，喜欢深入研究',
        '分析的': '善于分解复杂问题，找出核心要素',
        '沉静的': '倾向于安静思考，不喜欢喧闹的环境',
        '灵活的': '思维灵活，能从多个角度看待问题',
        '适应的': '能够根据逻辑需求调整自己的想法和方法',
        '客观的': '追求客观事实，不受个人情感影响'
    },
    'INTJ': {
        '战略的': '善于长远规划，着眼于未来发展',
        '独立的': '高度自主，依靠自己的判断做决定',
        '分析的': '深入分析问题，寻找最优解决方案',
        '决断的': '一旦确定目标，会坚定地执行计划',
        '理性的': '基于逻辑和事实做决策，而非情感',
        '完美的': '追求高标准，致力于持续改进',
        '创新的': '勇于突破常规，探索创新解决方案',
        '专注的': '能够长期专注于重要目标和项目',
        '有远见的': '能预见未来趋势和可能的发展方向',
        '系统的': '善于建立和优化系统化的方法'
    },
    'INFP': {
        '理想的': '追求更美好的可能性，有强烈的理想主义倾向',
        '富同情心的': '深刻理解他人感受，富有同理心',
        '创造的': '具有丰富的想象力和创造力',
        '忠诚的': '对重要的人和价值观保持忠诚',
        '适应的': '能根据情况灵活调整自己的方式',
        '温和的': '处事温和，避免冲突和对抗',
        '关怀的': '真诚关心他人的需求和感受',
        '敏感的': '对周围环境和他人情绪高度敏感',
        '包容的': '愿意接纳不同的观点和价值观',
        '真诚的': '重视真实的自我表达和真诚的关系'
    },
    'INFJ': {
        '洞察的': '能深入理解他人和情境的深层含义',
        '理想的': '追求完美和理想化的解决方案',
        '富同情心的': '天生具有同理心，理解他人感受',
        '有远见的': '能预见未来发展和潜在问题',
        '创造的': '具有独特的创造力和想象力',
        '温和的': '行事温和，避免直接冲突',
        '坚定的': '在核心价值观上保持坚定',
        '完美的': '追求完美，要求高标准',
        '独特的': '思维方式和处事风格独特',
        '神秘的': '给人深邃神秘的印象'
    },
    'ISTP': {
        '灵活的': '能够快速适应新情况和环境',
        '冷静的': '面对问题保持冷静理性',
        '实践的': '喜欢动手实践，解决具体问题',
        '逻辑的': '依照逻辑思维处理问题',
        '独立的': '喜欢独立工作和思考',
        '适应的': '适应力强，能随机应变',
        '观察的': '善于观察细节和技术特点',
        '效率的': '追求高效率的解决方案',
        '冒险的': '愿意尝试新事物和冒险',
        '客观的': '保持客观中立的态度'
    },
    'ISTJ': {
        '可靠的': '做事可靠，值得信赖',
        '实际的': '注重实际和现实可行性',
        '系统的': '喜欢有序和系统化的方法',
        '尽责的': '对职责认真负责',
        '传统的': '尊重传统和既定规则',
        '组织的': '善于组织和安排事务',
        '稳重的': '行事稳重，不冒进',
        '专注的': '能专注于任务直到完成',
        '逻辑的': '按照逻辑思维行事',
        '保守的': '倾向于保守稳妥的方案'
    },
    'ISFP': {
        '艺术的': '具有艺术天赋和审美能力',
        '灵活的': '能灵活应对各种情况',
        '敏感的': '对美和情感敏感',
        '和谐的': '追求人际关系的和谐',
        '自然的': '为人自然，不做作',
        '观察的': '善于观察周围的细节',
        '适应的': '适应能力强',
        '忠诚的': '对重要的人和事保持忠诚',
        '温和的': '性格温和，待人友善',
        '关怀的': '关心他人的感受'
    },
    'ISFJ': {
        '忠诚的': '对他人和职责保持忠诚',
        '体贴的': '细心体贴他人需求',
        '负责的': '做事负责任，可靠',
        '传统的': '重视传统价值观',
        '实际的': '注重实际和细节',
        '细心的': '注意细节，认真仔细',
        '温和的': '性格温和，平易近人',
        '可靠的': '做事可靠，值得信赖',
        '组织的': '善于组织和规划',
        '保护的': '愿意保护和照顾他人'
    },
    'ENTP': {
        '创新的': '善于提出创新想法和解决方案',
        '活力的': '充满活力和热情',
        '适应的': '适应能力强，灵活多变',
        '机智的': '反应快，思维敏捷',
        '灵活的': '思维和行动都很灵活',
        '分析的': '善于分析问题和概念',
        '好奇的': '对新事物保持强烈好奇心',
        '理论的': '喜欢探讨理论和可能性',
        '战略的': '具有战略思维能力',
        '辩论的': '善于辩论和表达观点'
    },
    'ENTJ': {
        '领导的': '具有天生的领导才能',
        '决断的': '善于做出决策并执行',
        '战略的': '具有长远的战略眼光',
        '自信的': '对自己的能力充满信心',
        '效率的': '追求高效率和结果',
        '直接的': '表达直接，不拐弯抹角',
        '理性的': '用理性方式处理问题',
        '目标导向的': '强烈关注目标实现',
        '分析的': '善于分析和规划',
        '有魄力的': '做事果断，有决断力'
    },
    'ENFP': {
        '热情的': '对生活充满热情和活力',
        '创造的': '富有创造力和想象力',
        '适应的': '适应能力强，思维灵活',
        '创新的': '喜欢尝试新事物和想法',
        '活力的': '精力充沛，富有感染力',
        '乐观的': '保持乐观积极的态度',
        '灵活的': '处事灵活，不拘泥于规则',
        '关怀的': '关心他人的感受和需求',
        '自发的': '行动自发，随性而为',
        '表现的': '善于表达自己的想法'
    },
    'ENFJ': {
        '热情的': '对他人和事业充满热情',
        '富同情心的': '深刻理解和关心他人',
        '负责的': '对承诺负责任',
        '理想的': '追求理想和完美',
        '社交的': '善于社交和建立关系',
        '合作的': '重视团队合作',
        '关怀的': '真诚关心他人福祉',
        '忠诚的': '对关系和理想保持忠诚',
        '有魅力的': '具有个人魅力和感染力',
        '鼓舞的': '善于激励和鼓舞他人'
    },
    'ESTP': {
        '活力的': '充满活力和行动力',
        '冒险的': '喜欢冒险和刺激',
        '实践的': '重视实践和实际行动',
        '灵活的': '能灵活应对各种情况',
        '自发的': '行动自发，随机应变',
        '适应的': '适应能力强',
        '行动的': '偏好立即行动',
        '果断的': '决策果断，不拖延',
        '效率的': '追求效率和实效',
        '现实的': '注重现实和实际'
    },
    'ESTJ': {
        '组织的': '善于组织和管理',
        '实际的': '注重实际效果',
        '负责的': '责任心强',
        '系统的': '喜欢系统化的方法',
        '效率的': '追求效率和成果',
        '直接的': '沟通直接明确',
        '逻辑的': '依据逻辑做决定',
        '决断的': '决策果断迅速',
        '传统的': '尊重传统和规则',
        '目标导向的': '注重目标达成'
    },
    'ESFP': {
        '活力的': '充满活力和热情',
        '热情的': '对生活充满热情',
        '自发的': '行动自发，随性而为',
        '适应的': '适应能力强',
        '友好的': '待人友好亲切',
        '实践的': '注重实际体验',
        '社交的': '善于社交互动',
        '表现的': '善于表现自我',
        '乐观的': '保持乐观积极',
        '灵活的': '处事灵活机动'
    },
    'ESFJ': {
        '友好的': '待人友善和蔼',
        '负责的': '对责任认真负责',
        '合作的': '重视团队合作',
        '传统的': '尊重传统价值观',
        '关怀的': '关心他人需求',
        '组织的': '善于组织安排',
        '体贴的': '为他人着想',
        '实际的': '注重实际需求',
        '社交的': '善于社交互动',
        '和谐的': '追求人际和谐'
    }
};
const typeDescriptions = {
    'INTP': '擅长理论分析和解决复杂问题的思考者。他们喜欢探索想法，理解概念的内在逻辑，并且总是寻求更深层的知识。独立性强，重视智识的追求，但可能需要更多关注实践和情感表达。他们通常在科学研究、技术开发、系统分析等领域表现出色。',

    'INTJ': '战略性的规划者和富有远见的思考者。他们善于制定系统性的解决方案，并且有很强的洞察力。追求效率和卓越，具有独立的思维方式和坚定的决心。他们通常在战略规划、系统设计和创新领域有出色表现。',

    'INFP': '富有同理心和创造力的理想主义者。他们重视个人价值观和内在和谐，对他人的情感有敏锐的感知能力。具有强烈的创造力和表达欲望，追求真实和意义。他们常在艺术创作、心理咨询、写作等领域展现才华。',

    'INFJ': '具有洞察力和远见的理想主义者。他们能深入理解他人，同时保持独特的个人视角。重视和谐与个人成长，具有强烈的使命感。他们往往在咨询、教育、创意写作等需要深度理解和创造力的领域表现出色。',

    'ISTP': '灵活的问题解决者和技术专家。他们善于理解系统如何运作，并且有很强的动手能力。喜欢探索和冒险，追求自由和独立。他们通常在工程技术、手工艺、运动等需要实践技能的领域表现优秀。',

    'ISTJ': '可靠、务实的传统维护者。他们重视秩序和规则，关注细节和准确性。具有强烈的责任感和忠诚度，依赖经验和事实做决策。他们常在行政管理、财务会计、质量控制等需要精确和可靠性的领域有出色表现。',

    'ISFP': '富有艺术感和同理心的探索者。他们重视个人体验和审美，具有强烈的创造力。追求自由表达和真实生活，对美和和谐有敏锐的感知。他们常在艺术、设计、手工艺等创造性领域展现才华。',

    'ISFJ': '细心、负责的照顾者和守护者。他们具有强烈的责任感和服务精神，关注他人的需求。重视传统和稳定，善于记忆细节。他们通常在护理、教育、客户服务等需要耐心和关怀的领域表现出色。',

    'ENTP': '充满创意和想象力的创新者。他们善于发现新的可能性，喜欢挑战常规思维。适应力强，享受智力挑战和辩论。他们常在创业、咨询、研发等需要创新思维的领域有杰出表现。',

    'ENTJ': '果断的领导者和战略规划者。他们有组织能力和远见，追求效率和成功。目标导向，善于规划和执行。他们通常在企业管理、项目领导、战略咨询等需要领导力的领域表现优秀。',

    'ENFP': '热情、创造性的激励者。他们充满活力和创造力，善于激发他人潜能。追求新可能性，重视自由和真实表达。他们常在创意工作、培训教育、公共关系等需要创造力和人际交往的领域有出色表现。',

    'ENFJ': '富有魅力的引导者和培养者。他们关注他人成长和团体和谐，具有领导才能。善于激励他人，追求意义和真实关系。他们通常在教育、咨询、组织发展等需要领导力和人际互动的领域表现出色。',

    'ESTP': '充满活力的行动者和问题解决者。他们善于在当下行动，享受刺激和挑战。适应力强，善于解决即时问题。他们常在销售、创业、运动等需要快速反应和实践能力的领域有杰出表现。',

    'ESTJ': '高效的组织者和执行者。他们重视秩序和规则，善于管理和执行。实用主义者，追求具体成果。他们通常在项目管理、行政管理、法律等需要组织能力和执行力的领域表现优秀。',

    'ESFP': '活泼的表演者和享乐主义者。他们热爱生活和社交，善于让他人开心。适应力强，喜欢即时体验。他们常在表演艺术、销售、公共关系等需要表现力和社交能力的领域有出色表现。',

    'ESFJ': '热心的社交者和关怀者。他们关注他人需求，重视和谐关系。具有强烈的责任感和服务精神，重视传统和社会价值。他们通常在社会服务、医疗保健、教育等需要人际交往和服务精神的领域表现优秀。'
};
const loveGuides = {
    'INTP': {
        traits: [
            '重视智识交流的伴侣关系',
            '需要个人空间和独立思考的时间',
            '可能在情感表达上显得含蓄',
            '寻求深度的思想交流和理解',
            '重视伴侣的智力水平和逻辑思维'
        ],
        strengths: [
            '愿意进行深入的话题讨论',
            '尊重伴侣的独立性',
            '以理性方式解决问题',
            '忠诚且重视承诺',
            '愿意为关系提供创新解决方案'
        ],
        challenges: [
            '可能忽视伴侣的情感需求',
            '不擅长处理日常的情感交流',
            '可能过于理性化感情问题',
            '需要努力表达爱意和关心',
            '可能显得过于疏离'
        ],
        advice: [
            '学习识别和回应伴侣的情感需求',
            '培养定期表达关心的习惯',
            '保持开放和真诚的沟通',
            '在理性分析之外关注感受',
            '主动创造共处的温馨时刻'
        ],
        idealPartners: ['ENTJ', 'ESTJ', 'ENFJ', 'INFJ'],
        compatibility: {
            best: ['ENTJ', 'ESTJ'],
            good: ['ENFJ', 'INFJ', 'ENTP', 'INTP'],
            challenging: ['ESFJ', 'ISFJ', 'ESFP', 'ISFP']
        }
    },
    'INTJ': {
        traits: [
            '追求深度和意义的关系',
            '重视智力契合和共同目标',
            '计划性强，注重未来发展',
            '保持独立性和个人空间',
            '期待高质量的思想交流'
        ],
        strengths: [
            '忠诚且投入',
            '善于制定长期规划',
            '注重个人和关系的成长',
            '理性处理问题',
            '尊重伴侣的独立性'
        ],
        challenges: [
            '可能过于完美主义',
            '情感表达可能不够直接',
            '有时显得过于独立',
            '可能忽视日常情感交流',
            '对伴侣期望较高'
        ],
        advice: [
            '学会适时表达温柔和关怀',
            '接纳不完美的时刻',
            '培养情感表达能力',
            '增加日常互动的温度',
            '保持开放和包容的心态'
        ],
        idealPartners: ['ENFP', 'ENTP', 'ENFJ', 'ENTJ'],
        compatibility: {
            best: ['ENFP', 'ENTP'],
            good: ['ENFJ', 'ENTJ', 'INTJ', 'INFJ'],
            challenging: ['ESFJ', 'ISFJ', 'ESTP', 'ISTP']
        }
    },
    'INFP': {
        traits: [
            '追求理想和深刻的感情连接',
            '重视真诚和个人价值观',
            '富有同理心和理解力',
            '需要个人空间和独处时间',
            '向往浪漫和独特的爱情'
        ],
        strengths: [
            '深刻的情感理解能力',
            '富有创意的表达方式',
            '真诚且忠诚',
            '愿意为关系付出',
            '善于创造浪漫氛围'
        ],
        challenges: [
            '可能理想化关系',
            '过分敏感',
            '难以直接表达需求',
            '容易陷入情绪',
            '可能逃避冲突'
        ],
        advice: [
            '保持理想但接纳现实',
            '学会适时表达自己的需求',
            '培养处理冲突的能力',
            '建立健康的情绪界限',
            '平衡理想和现实的期待'
        ],
        idealPartners: ['ENFJ', 'ENTJ', 'INFJ', 'INTJ'],
        compatibility: {
            best: ['ENFJ', 'ENTJ'],
            good: ['INFJ', 'INTJ', 'INFP', 'ENFP'],
            challenging: ['ESTP', 'ISTP', 'ESTJ', 'ISTJ']
        }
    },
    'INFJ': {
        traits: [
            '追求深刻和有意义的连接',
            '具有强烈的直觉和洞察力',
            '重视精神层面的契合',
            '需要真诚和深度的交流',
            '向往和谐且有深度的关系'
        ],
        strengths: [
            '深刻的理解力',
            '强烈的同理心',
            '富有创意的问题解决能力',
            '注重关系的长期发展',
            '善于营造情感联结'
        ],
        challenges: [
            '可能过分理想化',
            '容易承担过多责任',
            '有时过度敏感',
            '可能过分追求完美',
            '难以表达消极情绪'
        ],
        advice: [
            '学会设立健康的界限',
            '接纳不完美的现实',
            '培养直接表达的能力',
            '平衡付出和自我照顾',
            '保持独立性'
        ],
        idealPartners: ['ENFP', 'ENTP', 'INTJ', 'INFP'],
        compatibility: {
            best: ['ENFP', 'ENTP'],
            good: ['INTJ', 'INFP', 'INFJ', 'ENFJ'],
            challenging: ['ESTP', 'ISTP', 'ESTJ', 'ISTJ']
        }
    },
    'ISTP': {
        traits: [
            '重视个人空间和自由',
            '实践导向的问题解决者',
            '直接且真实的表达方式',
            '注重当下的体验',
            '适应力强且灵活'
        ],
        strengths: [
            '诚实直接',
            '解决问题能力强',
            '尊重伴侣的独立性',
            '灵活且适应力强',
            '不会过分情绪化'
        ],
        challenges: [
            '可能显得过于疏离',
            '不擅长情感表达',
            '可能回避承诺',
            '难以规划长期关系',
            '可能忽视伴侣情感需求'
        ],
        advice: [
            '培养情感表达能力',
            '学会关注伴侣需求',
            '建立稳定的交流习惯',
            '适当规划未来',
            '增加情感投入'
        ],
        idealPartners: ['ESTJ', 'ENTJ', 'ESFJ', 'ENFJ'],
        compatibility: {
            best: ['ESTJ', 'ENTJ'],
            good: ['ESFJ', 'ENFJ', 'ISTP', 'ESTP'],
            challenging: ['INFP', 'ENFP', 'INFJ', 'ENFJ']
        }
    },
    'ISTJ': {
        traits: [
            '重视责任和承诺',
            '注重传统和稳定性',
            '实际且可靠',
            '重视诚信和忠诚',
            '追求长期稳定的关系'
        ],
        strengths: [
            '忠诚可靠',
            '责任心强',
            '实际且稳定',
            '注重承诺',
            '善于维护关系'
        ],
        challenges: [
            '可能过于传统',
            '不善表达情感',
            '可能显得过于严肃',
            '适应变化较慢',
            '可能忽视浪漫需求'
        ],
        advice: [
            '培养情感表达能力',
            '增加关系的趣味性',
            '保持开放和灵活',
            '学习创造浪漫',
            '接纳新的相处方式'
        ],
        idealPartners: ['ESFP', 'ESTP', 'ENFP', 'ENTP'],
        compatibility: {
            best: ['ESFP', 'ESTP'],
            good: ['ENFP', 'ENTP', 'ISTJ', 'ESTJ'],
            challenging: ['INFJ', 'INTJ', 'INFP', 'INTP']
        }
    },
    'ISFP': {
        traits: [
            '重视真实和自然的情感表达',
            '享受当下的相处时光',
            '富有艺术感和审美能力',
            '温和且富有同理心',
            '注重个人空间'
        ],
        strengths: [
            '真诚温和',
            '富有同理心',
            '善于创造美好时刻',
            '适应力强',
            '重视情感交流'
        ],
        challenges: [
            '可能过于被动',
            '难以做出长期规划',
            '不善于表达需求',
            '可能逃避问题',
            '决策能力需要提升'
        ],
        advice: [
            '学习主动表达需求',
            '培养规划能力',
            '增强决策能力',
            '建立健康的沟通模式',
            '平衡独处和相处时间'
        ],
        idealPartners: ['ENFJ', 'ESFJ', 'ESTJ', 'ENTJ'],
        compatibility: {
            best: ['ENFJ', 'ESFJ'],
            good: ['ESTJ', 'ENTJ', 'ISFP', 'ESFP'],
            challenging: ['INTP', 'ENTP', 'INTJ', 'ENTJ']
        }
    },
    'ISFJ': {
        traits: [
            '富有同理心和照顾能力',
            '重视稳定和安全感',
            '注重细节和体贴',
            '追求和谐的关系',
            '重视传统价值观'
        ],
        strengths: [
            '体贴周到',
            '重视承诺',
            '善于营造温馨氛围',
            '注重细节',
            '富有同理心'
        ],
        challenges: [
            '可能过分在意他人需求',
            '难以表达个人需求',
            '可能过度保护',
            '不善于处理冲突',
            '可能压抑自我'
        ],
        advice: [
            '学会表达自己的需求',
            '建立健康的界限',
            '培养独立性',
            '增强处理冲突的能力',
            '平衡付出和自我照顾'
        ],
        idealPartners: ['ESFP', 'ESTP', 'ENFP', 'ENTP'],
        compatibility: {
            best: ['ESFP', 'ESTP'],
            good: ['ENFP', 'ENTP', 'ISFJ', 'ESFJ'],
            challenging: ['INTJ', 'ENTJ', 'INTP', 'ENTP']
        }
    },
    'ENTP': {
        traits: [
            '思维活跃且富有创造力',
            '享受智力挑战和辩论',
            '重视思想交流',
            '适应力强且灵活',
            '追求新鲜和变化'
        ],
        strengths: [
            '思维敏捷',
            '善于沟通',
            '创意丰富',
            '幽默风趣',
            '适应力强'
        ],
        challenges: [
            '可能难以专注',
            '容易厌倦常规',
            '可能忽视情感需求',
            '难以做出承诺',
            '可能过于喜欢辩论'
        ],
        advice: [
            '培养持久的专注力',
            '平衡理性和感性',
            '学会倾听而非总是辩论',
            '增强情感敏感度',
            '建立稳定的相处模式'
        ],
        idealPartners: ['INFJ', 'INTJ', 'ENFJ', 'ENTJ'],
        compatibility: {
            best: ['INFJ', 'INTJ'],
            good: ['ENFJ', 'ENTJ', 'ENTP', 'INTP'],
            challenging: ['ISFJ', 'ESFJ', 'ISTJ', 'ESTJ']
        }
    },
    'ENTJ': {
        traits: [
            '目标导向且有领导力',
            '重视效率和成就',
            '直接且坦诚',
            '追求卓越',
            '注重长期发展'
        ],
        strengths: [
            '决断力强',
            '有规划能力',
            '注重成长',
            '直接坦诚',
            '重视承诺'
        ],
        challenges: [
            '可能过于主导',
            '情感表达可能生硬',
            '可能过分追求完美',
            '可能忽视他人感受',
            '期望较高'
        ],
        advice: [
            '培养温和的表达方式',
            '增强情感敏感度',
            '学会放松和享受当下',
            '平衡工作与感情',
            '接纳他人的不完美'
        ],
        idealPartners: ['INFP', 'INTP', 'ENFP', 'ENTP'],
        compatibility: {
            best: ['INFP', 'INTP'],
            good: ['ENFP', 'ENTP', 'ENTJ', 'INTJ'],
            challenging: ['ISFJ', 'ESFJ', 'ISFP', 'ESFP']
        }
    },
    'ENFP': {
        traits: [
            '热情活泼且富有创造力',
            '重视真实的情感连接',
            '追求成长和可能性',
            '善于理解他人',
            '享受新鲜体验'
        ],
        strengths: [
            '热情洋溢',
            '富有同理心',
            '创意十足',
            '善于交流',
            '适应力强'
        ],
        challenges: [
            '可能情绪波动大',
            '难以做出决定',
            '容易分散注意力',
            '可能过度理想化',
            '难以处理细节'
        ],
        advice: [
            '培养稳定性',
            '提高决策能力',
            '设立实际的期望',
            '关注细节',
            '平衡理想和现实'
        ],
        idealPartners: ['INTJ', 'INFJ', 'ENTJ', 'ENFJ'],
        compatibility: {
            best: ['INTJ', 'INFJ'],
            good: ['ENTJ', 'ENFJ', 'ENFP', 'INFP'],
            challenging: ['ISTJ', 'ESTJ', 'ISFJ', 'ESFJ']
        }
    },
    'ENFJ': {
        traits: [
            '富有同理心且善解人意',
            '重视和谐关系',
            '有领导魅力',
            '注重个人成长',
            '追求深度连接'
        ],
        strengths: [
            '善于沟通',
            '富有同理心',
            '关心他人成长',
            '有责任心',
            '善于营造和谐'
        ],
        challenges: [
            '可能过分在意他人感受',
            '容易情绪耗竭',
            '可能忽视自身需求',
            '过分理想化',
            '难以说不'
        ],
        advice: [
            '学会设立界限',
            '平衡他人和自身需求',
            '接纳不完美',
            '培养自我关怀',
            '保持独立性'
        ],
        idealPartners: ['INFP', 'ISFP', 'INTP', 'ISTP'],
        compatibility: {
            best: ['INFP', 'ISFP'],
            good: ['INTP', 'ISTP', 'ENFJ', 'INFJ'],
            challenging: ['ESTJ', 'ISTJ', 'ENTJ', 'INTJ']
        }
    },
    'ESTP': {
        traits: [
            '活力充沛且冒险精神强',
            '注重当下体验',
            '实用主义者',
            '适应力强',
            '直接坦率'
        ],
        strengths: [
            '行动力强',
            '善于解决问题',
            '适应力好',
            '坦诚直接',
            '富有魅力'
        ],
        challenges: [
            '可能缺乏长期规划',
            '难以承诺',
            '可能忽视情感需求',
            '容易冲动',
            '不擅长处理复杂情感'
        ],
        advice: [
            '培养长期规划意识',
            '增强情感敏感度',
            '学会深入交流',
            '提高承诺能力',
            '平衡冒险和稳定'
        ],
        idealPartners: ['ISFJ', 'ISTJ', 'ESFJ', 'ESTJ'],
        compatibility: {
            best: ['ISFJ', 'ISTJ'],
            good: ['ESFJ', 'ESTJ', 'ESTP', 'ISTP'],
            challenging: ['INFJ', 'ENFJ', 'INFP', 'ENFP']
        }
    },
    'ESTJ': {
        traits: [
            '注重责任和秩序',
            '实际且有组织能力',
            '重视传统和规则',
            '直接坦率',
            '追求效率'
        ],
        strengths: [
            '责任心强',
            '可靠稳定',
            '组织能力强',
            '直接诚实',
            '重视承诺'
        ],
        challenges: [
            '可能过于固执',
            '情感表达可能生硬',
            '可能过于专制',
            '不够灵活',
            '可能忽视感受'
        ],
        advice: [
            '培养灵活性',
            '增强情感表达',
            '学会倾听和体谅',
            '接纳不同观点',
            '平衡理性和感性'
        ],
        idealPartners: ['ISFP', 'ISTP', 'ESFP', 'ESTP'],
        compatibility: {
            best: ['ISFP', 'ISTP'],
            good: ['ESFP', 'ESTP', 'ESTJ', 'ISTJ'],
            challenging: ['INFJ', 'ENFJ', 'INFP', 'ENFP']
        }
    },
    'ESFP': {
        traits: [
            '热情活泼且富有魅力',
            '享受当下生活',
            '善于交际',
            '适应力强',
            '重视体验和乐趣'
        ],
        strengths: [
            '热情开朗',
            '富有魅力',
            '善于营造氛围',
            '适应力强',
            '乐于分享'
        ],
        challenges: [
            '可能缺乏规划',
            '容易冲动',
            '难以做出承诺',
            '可能过于依赖他人',
            '不擅长处理压力'
        ],
        advice: [
            '培养规划能力',
            '提高独立性',
            '学会深入思考',
            '增强承诺意识',
            '平衡娱乐和责任'
        ],
        idealPartners: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'],
        compatibility: {
            best: ['ISTJ', 'ISFJ'],
            good: ['ESTJ', 'ESFJ', 'ESFP', 'ISFP'],
            challenging: ['INTJ', 'ENTJ', 'INTP', 'ENTP']
        }
    },
    'ESFJ': {
        traits: [
            '热心善良且重视和谐',
            '注重传统和责任',
            '善于照顾他人',
            '重视稳定关系',
            '追求温暖的家庭生活'
        ],
        strengths: [
            '关心体贴',
            '善于组织',
            '重视承诺',
            '善于营造氛围',
            '富有同理心'
        ],
        challenges: [
            '可能过分在意他人想法',
            '难以处理批评',
            '可能过度保护',
            '对变化适应较慢',
            '可能忽视自身需求'
        ],
        advice: [
            '培养独立性',
            '学会接受批评',
            '增强适应能力',
            '关注自身需求',
            '平衡付出和索取'
        ],
        idealPartners: ['ISTP', 'ISFP', 'ESTP', 'ESFP'],
        compatibility: {
            best: ['ISTP', 'ISFP'],
            good: ['ESTP', 'ESFP', 'ESFJ', 'ISFJ'],
            challenging: ['INTJ', 'ENTJ', 'INTP', 'ENTP']
        }
    }
};
// 位置说明
const positionDescriptions = [
    '主导功能 - 最自然和熟练使用的功能',
    '辅助功能 - 支持主导功能的平衡器',
    '第三功能 - 较不成熟，需要发展的功能',
    '劣势功能 - 最不发达的意识功能',
    '对立角色 - 主导功能的对立面',
    '批判角色 - 辅助功能的对立面',
    '欺骗角色 - 第三功能的对立面',
    '恶魔角色 - 最不发达的无意识功能'
];

// 象限数据
const quadras = {
    'Alpha': {
        types: ['ENTP', 'INTP', 'ISFJ', 'ESFJ'],
        description: '重视开放讨论、创新思维、舒适氛围。偏好逻辑分析和可能性探索，强调知识共享和和谐关系。'
    },
    'Beta': {
        types: ['ESTP', 'ISTP', 'ENFJ', 'INFJ'],
        description: '重视力量、意志力和集体行动。强调纪律、责任和社会变革，偏好果断决策和强力领导。'
    },
    'Gamma': {
        types: ['ENTJ', 'INTJ', 'ESFP', 'ISFP'],
        description: '注重效率和实际成果。追求目标达成和现实利益，重视个人成就和影响力。'
    },
    'Delta': {
        types: ['ESTJ', 'ISTJ', 'ENFP', 'INFP'],
        description: '追求稳定和渐进改革。重视道德价值和个人成长，注重实用性和可靠性。'
    }
};