const relationshipQuestions = [
    // 第1类：社交互动偏好（5题）
    {
        question: "你希望伴侣在社交场合中表现如何？",
        options: [
            {
                text: "非常活跃外向，善于带动气氛",
                weights: {
                    E: 2.0,
                    Fe: 1.5,
                    Se: 1.2,
                    type: 'EXFX'
                }
            },
            {
                text: "适度外向，选择性社交",
                weights: {
                    E: 1.0,
                    I: 0.5,
                    Fe: 0.8,
                    Fi: 0.8,
                    type: 'XNXX'
                }
            },
            {
                text: "安静内敛，但善于倾听",
                weights: {
                    I: 1.5,
                    Fi: 1.2,
                    Ni: 0.8,
                    type: 'IXFX'
                }
            },
            {
                text: "独立自主，注重深度交流",
                weights: {
                    I: 2.0,
                    Ti: 1.2,
                    Ni: 1.0,
                    type: 'IXTX'
                }
            }
        ],
        importance: 1.5
    },
    {
        question: "在社交活动中，你期望伴侣如何与你互动？",
        options: [
            {
                text: "一直陪在身边互动交流",
                weights: {
                    E: 1.8,
                    Fe: 1.5,
                    Se: 1.0,
                    type: 'EXFX'
                }
            },
            {
                text: "给予适度关注但保持独立空间",
                weights: {
                    I: 1.2,
                    Fi: 1.0,
                    Ti: 1.0,
                    type: 'IXXP'
                }
            },
            {
                text: "默契地保持距离但随时支持",
                weights: {
                    I: 1.5,
                    Ni: 1.2,
                    Fi: 1.0,
                    type: 'IXFJ'
                }
            },
            {
                text: "完全尊重对方的社交方式",
                weights: {
                    P: 1.5,
                    Ne: 1.2,
                    Fi: 1.0,
                    type: 'XXXP'
                }
            }
        ],
        importance: 1.3
    },
    {
        question: "你希望伴侣如何处理与朋友的关系？",
        options: [
            {
                text: "经常组织或参与朋友聚会",
                weights: {
                    E: 2.0,
                    Fe: 1.5,
                    Se: 1.2,
                    type: 'EXFX'
                }
            },
            {
                text: "保持稳定的小圈子关系",
                weights: {
                    I: 1.2,
                    Si: 1.5,
                    Fi: 1.0,
                    type: 'ISXX'
                }
            },
            {
                text: "与少数知己保持深入联系",
                weights: {
                    I: 1.8,
                    Ni: 1.2,
                    Fi: 1.0,
                    type: 'INXX'
                }
            },
            {
                text: "根据兴趣和需求灵活社交",
                weights: {
                    N: 1.5,
                    Ne: 1.2,
                    P: 1.0,
                    type: 'XNXP'
                }
            }
        ],
        importance: 1.2
    },
    {
        question: "在参加社交活动时，你希望伴侣？",
        options: [
            {
                text: "主动介绍你认识新朋友",
                weights: {
                    E: 1.8,
                    Fe: 1.5,
                    Se: 1.0,
                    type: 'EXFJ'
                }
            },
            {
                text: "让你自然融入群体",
                weights: {
                    P: 1.5,
                    Ne: 1.2,
                    Fe: 0.8,
                    type: 'XXXP'
                }
            },
            {
                text: "在你需要时提供支持",
                weights: {
                    F: 1.5,
                    Fi: 1.2,
                    Si: 1.0,
                    type: 'XXFX'
                }
            },
            {
                text: "理解并尊重你的社交界限",
                weights: {
                    I: 1.5,
                    Ti: 1.2,
                    Ni: 1.0,
                    type: 'IXTX'
                }
            }
        ],
        importance: 1.4
    },
    {
        question: "在与陌生人交往时，你期望伴侣？",
        options: [
            {
                text: "活跃气氛，化解尴尬",
                weights: {
                    E: 2.0,
                    Fe: 1.5,
                    Se: 1.2,
                    type: 'EXFX'
                }
            },
            {
                text: "保持礼貌专业的态度",
                weights: {
                    T: 1.5,
                    Te: 1.2,
                    Si: 1.0,
                    type: 'XXTJ'
                }
            },
            {
                text: "真诚友善但不过分热络",
                weights: {
                    F: 1.5,
                    Fi: 1.2,
                    Si: 1.0,
                    type: 'XXFJ'
                }
            },
            {
                text: "根据场合灵活应对",
                weights: {
                    N: 1.5,
                    Ne: 1.2,
                    P: 1.0,
                    type: 'XNXP'
                }
            }
        ],
        importance: 1.3
    },

    // 第2类：沟通方式偏好（5题）
    {
        question: "在日常交流中，你更希望伴侣？",
        options: [
            {
                text: "详细分享日常经历和感受",
                weights: {
                    E: 1.8,
                    Fe: 1.5,
                    Se: 1.0,
                    type: 'EXFX'
                }
            },
            {
                text: "交流重要事项和深度话题",
                weights: {
                    N: 1.5,
                    Ni: 1.2,
                    Ti: 1.0,
                    type: 'XNTX'
                }
            },
            {
                text: "以行动表达关心",
                weights: {
                    S: 1.5,
                    Se: 1.2,
                    Fi: 1.0,
                    type: 'XSXP'
                }
            },
            {
                text: "保持适度交流和个人空间",
                weights: {
                    I: 1.5,
                    Ti: 1.2,
                    Si: 1.0,
                    type: 'IXTX'
                }
            }
        ],
        importance: 1.6
    },
    {
        question: "在处理矛盾时，你希望伴侣采取什么方式？",
        options: [
            {
                text: "立即开诚布公地讨论",
                weights: {
                    E: 1.8,
                    Te: 1.5,
                    J: 1.2,
                    type: 'EXTJ'
                }
            },
            {
                text: "先冷静思考后温和沟通",
                weights: {
                    I: 1.5,
                    Fi: 1.2,
                    Ni: 1.0,
                    type: 'IXFX'
                }
            },
            {
                text: "通过行动表达和解意愿",
                weights: {
                    S: 1.5,
                    Se: 1.2,
                    Fi: 1.0,
                    type: 'XSFP'
                }
            },
            {
                text: "找到创新的解决方案",
                weights: {
                    N: 1.5,
                    Ne: 1.2,
                    Ti: 1.0,
                    type: 'XNTP'
                }
            }
        ],
        importance: 1.8
    },
    {
        question: "在表达情感时，你期望伴侣？",
        options: [
            {
                text: "经常用语言表达爱意",
                weights: {
                    E: 1.8,
                    Fe: 1.5,
                    N: 1.0,
                    type: 'ENFX'
                }
            },
            {
                text: "用实际行动表示关心",
                weights: {
                    S: 1.5,
                    Si: 1.2,
                    Te: 1.0,
                    type: 'XSTJ'
                }
            },
            {
                text: "在重要时刻表达深情",
                weights: {
                    I: 1.5,
                    Fi: 1.2,
                    Ni: 1.0,
                    type: 'IXFX'
                }
            },
            {
                text: "以创意方式表达感情",
                weights: {
                    N: 1.5,
                    Ne: 1.2,
                    Fe: 1.0,
                    type: 'XNFP'
                }
            }
        ],
        importance: 1.7
    },
    {
        question: "在分享个人想法时，你希望伴侣如何回应？",
        options: [
            {
                text: "积极参与讨论并提供反馈",
                weights: {
                    E: 1.8,
                    Te: 1.5,
                    Ne: 1.0,
                    type: 'ENTX'
                }
            },
            {
                text: "认真倾听并给予理解",
                weights: {
                    I: 1.5,
                    Fi: 1.2,
                    Fe: 1.0,
                    type: 'IXFJ'
                }
            },
            {
                text: "提供实用的建议",
                weights: {
                    S: 1.5,
                    Te: 1.2,
                    J: 1.0,
                    type: 'XSTJ'
                }
            },
            {
                text: "分享类似经历和感受",
                weights: {
                    F: 1.5,
                    Fe: 1.2,
                    Si: 1.0,
                    type: 'XXFJ'
                }
            }
        ],
        importance: 1.5
    },
    {
        question: "在讨论未来计划时，你期望伴侣？",
        options: [
            {
                text: "提供详细的规划和建议",
                weights: {
                    J: 1.8,
                    Te: 1.5,
                    Si: 1.0,
                    type: 'XXTJ'
                }
            },
            {
                text: "开放探讨各种可能性",
                weights: {
                    N: 1.5,
                    Ne: 1.2,
                    P: 1.0,
                    type: 'XNXP'
                }
            },
            {
                text: "关注实际可行性",
                weights: {
                    S: 1.5,
                    Si: 1.2,
                    Te: 1.0,
                    type: 'XSTJ'
                }
            },
            {
                text: "考虑双方的感受和需求",
                weights: {
                    F: 1.5,
                    Fi: 1.2,
                    Fe: 1.0,
                    type: 'XXFX'
                }
            }
        ],
        importance: 1.6
    },

    // 第3类：生活方式偏好（5题）
    {
        question: "在日常生活中，你希望伴侣的作息习惯是？",
        options: [
            {
                text: "规律且有计划性",
                weights: {
                    J: 2.0,
                    Si: 1.5,
                    Te: 1.0,
                    type: 'XSXJ'
                }
            },
            {
                text: "灵活但保持基本规律",
                weights: {
                    P: 1.5,
                    Ne: 1.2,
                    Si: 0.8,
                    type: 'XXXP'
                }
            },
            {
                text: "自然随性，不受约束",
                weights: {
                    P: 2.0,
                    Se: 1.5,
                    Ne: 1.0,
                    type: 'XXXP'
                }
            },
            {
                text: "根据效率安排时间",
                weights: {
                    T: 1.5,
                    Te: 1.2,
                    Ni: 1.0,
                    type: 'XNTJ'
                }
            }
        ],
        importance: 1.4
    },
    {
        question: "对于家务分工，你期望伴侣？",
        options: [
            {
                text: "严格执行分工计划",
                weights: {
                    J: 2.0,
                    Te: 1.5,
                    Si: 1.2,
                    type: 'XXTJ'
                }
            },
            {
                text: "灵活协商互相配合",
                weights: {
                    F: 1.5,
                    Fe: 1.2,
                    Ne: 1.0,
                    type: 'XXFP'
                }
            },
            {
                text: "自发主动承担职责",
                weights: {
                    Si: 1.5,
                    Fi: 1.2,
                    J: 1.0,
                    type: 'XSFJ'
                }
            },
            {
                text: "根据实际情况随机应对",
                weights: {
                    P: 1.8,
                    Se: 1.5,
                    Ne: 1.0,
                    type: 'XXXP'
                }
            }
        ],
        importance: 1.5
    },
    {
        question: "在饮食习惯上，你希望伴侣？",
        options: [
            {
                text: "规律饮食，注重健康",
                weights: {
                    J: 1.8,
                    Si: 1.5,
                    Te: 1.0,
                    type: 'XSXJ'
                }
            },
            {
                text: "愿意尝试新的美食",
                weights: {
                    N: 1.5,
                    Ne: 1.2,
                    Se: 1.0,
                    type: 'XNXP'
                }
            },
            {
                text: "重视用餐氛围和体验",
                weights: {
                    F: 1.5,
                    Fi: 1.2,
                    Se: 1.0,
                    type: 'XXFP'
                }
            },
            {
                text: "注重效率和实用性",
                weights: {
                    T: 1.5,
                    Te: 1.2,
                    Si: 1.0,
                    type: 'XXTJ'
                }
            }
        ],
        importance: 1.3
    },
    {
        question: "对于金钱管理，你期望伴侣？",
        options: [
            {
                text: "严格规划，精打细算",
                weights: {
                    J: 2.0,
                    Te: 1.5,
                    Si: 1.2,
                    type: 'XXTJ'
                }
            },
            {
                text: "平衡储蓄和享受",
                weights: {
                    S: 1.5,
                    Si: 1.2,
                    Fe: 1.0,
                    type: 'XSFJ'
                }
            },
            {
                text: "注重投资和长远规划",
                weights: {
                    N: 1.5,
                    Ni: 1.2,
                    Te: 1.0,
                    type: 'XNTJ'
                }
            },
            {
                text: "随机应变，灵活处理",
                weights: {
                    P: 1.8,
                    Ne: 1.5,
                    Se: 1.0,
                    type: 'XXXP'
                }
            }
        ],
        importance: 1.7
    },
    
    // 第4类：思维方式偏好（5题）
    {
        question: "在做决定时，你希望伴侣如何思考？",
        options: [
            {
                text: "依据逻辑和事实分析",
                weights: {
                    T: 2.0,
                    Te: 1.5,
                    Ti: 1.2,
                    type: 'XXTX'
                }
            },
            {
                text: "考虑情感和价值观",
                weights: {
                    F: 2.0,
                    Fi: 1.5,
                    Fe: 1.2,
                    type: 'XXFX'
                }
            },
            {
                text: "权衡各方利弊",
                weights: {
                    T: 1.5,
                    Ti: 1.2,
                    Ni: 1.0,
                    type: 'XXTJ'
                }
            },
            {
                text: "相信直觉判断",
                weights: {
                    N: 1.8,
                    Ni: 1.5,
                    Fi: 1.0,
                    type: 'XNFX'
                }
            }
        ],
        importance: 1.8
    },
    {
        question: "在解决问题时，你期望伴侣？",
        options: [
            {
                text: "系统分析，逐步解决",
                weights: {
                    T: 1.8,
                    Te: 1.5,
                    Si: 1.2,
                    type: 'XXTJ'
                }
            },
            {
                text: "创新思维，寻找新方案",
                weights: {
                    N: 2.0,
                    Ne: 1.5,
                    Ti: 1.0,
                    type: 'XNXP'
                }
            },
            {
                text: "关注实际可行性",
                weights: {
                    S: 1.8,
                    Si: 1.5,
                    Te: 1.0,
                    type: 'XSXJ'
                }
            },
            {
                text: "考虑对人的影响",
                weights: {
                    F: 1.8,
                    Fe: 1.5,
                    Ni: 1.0,
                    type: 'XXFJ'
                }
            }
        ],
        importance: 1.6
    },
    {
        question: "在学习新事物时，你希望伴侣？",
        options: [
            {
                text: "深入研究原理和概念",
                weights: {
                    N: 1.8,
                    Ti: 1.5,
                    Ni: 1.2,
                    type: 'XNTX'
                }
            },
            {
                text: "注重实践和应用",
                weights: {
                    S: 1.8,
                    Se: 1.5,
                    Te: 1.0,
                    type: 'XSXP'
                }
            },
            {
                text: "善于总结和归纳",
                weights: {
                    T: 1.5,
                    Ti: 1.2,
                    Ni: 1.0,
                    type: 'XXTJ'
                }
            },
            {
                text: "乐于分享和交流",
                weights: {
                    E: 1.8,
                    Fe: 1.5,
                    Ne: 1.0,
                    type: 'EXFX'
                }
            }
        ],
        importance: 1.4
    },
    
    // 第5类：情感表达偏好（5题）
    {
        question: "在表达爱意时，你期望伴侣？",
        options: [
            {
                text: "经常说爱和甜言蜜语",
                weights: {
                    E: 2.0,
                    Fe: 1.5,
                    Se: 1.0,
                    type: 'EXFX'
                }
            },
            {
                text: "用行动表达关心",
                weights: {
                    S: 1.8,
                    Si: 1.5,
                    Te: 1.0,
                    type: 'XSXJ'
                }
            },
            {
                text: "在特殊时刻表达深情",
                weights: {
                    I: 1.5,
                    Fi: 1.2,
                    Ni: 1.0,
                    type: 'IXFX'
                }
            },
            {
                text: "创意浪漫的表达方式",
                weights: {
                    N: 1.8,
                    Ne: 1.5,
                    Fe: 1.0,
                    type: 'XNFP'
                }
            }
        ],
        importance: 1.7
    },
    {
        question: "在伴侣心情低落时，你希望对方？",
        options: [
            {
                text: "主动寻求你的安慰",
                weights: {
                    E: 1.8,
                    Fe: 1.5,
                    Fi: 1.0,
                    type: 'EXFX'
                }
            },
            {
                text: "独处后再与你分享",
                weights: {
                    I: 2.0,
                    Fi: 1.5,
                    Ni: 1.0,
                    type: 'IXFX'
                }
            },
            {
                text: "理性分析解决问题",
                weights: {
                    T: 1.8,
                    Te: 1.5,
                    Ti: 1.0,
                    type: 'XXTX'
                }
            },
            {
                text: "通过活动转移注意力",
                weights: {
                    S: 1.5,
                    Se: 1.2,
                    Fe: 1.0,
                    type: 'XSXP'
                }
            }
        ],
        importance: 1.6
    },
    {
        question: "在纪念日或特殊场合，你期望伴侣？",
        options: [
            {
                text: "精心策划惊喜",
                weights: {
                    N: 1.8,
                    Fe: 1.5,
                    Ne: 1.2,
                    type: 'ENFX'
                }
            },
            {
                text: "按传统方式庆祝",
                weights: {
                    S: 1.5,
                    Si: 1.2,
                    Fe: 1.0,
                    type: 'XSFJ'
                }
            },
            {
                text: "一起创造独特回忆",
                weights: {
                    N: 1.5,
                    Fi: 1.2,
                    Se: 1.0,
                    type: 'XNFP'
                }
            },
            {
                text: "以实际行动表示重视",
                weights: {
                    S: 1.8,
                    Te: 1.5,
                    Si: 1.0,
                    type: 'XSTJ'
                }
            }
        ],
        importance: 1.5
    },
    {
        question: "在表达不满或批评时，你希望伴侣？",
        options: [
            {
                text: "直接明确指出问题",
                weights: {
                    T: 2.0,
                    Te: 1.5,
                    Se: 1.0,
                    type: 'EXTJ'
                }
            },
            {
                text: "委婉温和地表达",
                weights: {
                    F: 1.8,
                    Fe: 1.5,
                    Fi: 1.0,
                    type: 'XXFJ'
                }
            },
            {
                text: "等待适当时机沟通",
                weights: {
                    I: 1.5,
                    Fi: 1.2,
                    Ni: 1.0,
                    type: 'IXFJ'
                }
            },
            {
                text: "通过行动暗示不满",
                weights: {
                    S: 1.5,
                    Si: 1.2,
                    Fi: 1.0,
                    type: 'ISXP'
                }
            }
        ],
        importance: 1.7
    },
    {
        question: "在分享成功喜悦时，你期望伴侣？",
        options: [
            {
                text: "热情地一起庆祝",
                weights: {
                    E: 2.0,
                    Fe: 1.5,
                    Se: 1.2,
                    type: 'EXFX'
                }
            },
            {
                text: "给予肯定和支持",
                weights: {
                    F: 1.5,
                    Fi: 1.2,
                    Ni: 1.0,
                    type: 'XXFJ'
                }
            },
            {
                text: "分析成功的原因",
                weights: {
                    T: 1.8,
                    Ti: 1.5,
                    Ne: 1.0,
                    type: 'XXTX'
                }
            },
            {
                text: "平静地分享喜悦",
                weights: {
                    I: 1.5,
                    Fi: 1.2,
                    Si: 1.0,
                    type: 'IXFX'
                }
            }
        ],
        importance: 1.4
    },
    
    // 第6类：价值观和目标（5题）
    {
        question: "在长期目标规划上，你希望伴侣？",
        options: [
            {
                text: "有明确的职业和人生规划",
                weights: {
                    J: 2.0,
                    Te: 1.5,
                    Ni: 1.2,
                    type: 'XNTJ'
                }
            },
            {
                text: "保持开放和适应性",
                weights: {
                    P: 1.8,
                    Ne: 1.5,
                    Fi: 1.0,
                    type: 'XNXP'
                }
            },
            {
                text: "注重生活质量和平衡",
                weights: {
                    F: 1.5,
                    Fi: 1.2,
                    Si: 1.0,
                    type: 'XXFJ'
                }
            },
            {
                text: "追求个人成长和突破",
                weights: {
                    N: 1.8,
                    Ni: 1.5,
                    Fi: 1.0,
                    type: 'XNFX'
                }
            }
        ],
        importance: 1.9
    },
    {
        question: "在价值观方面，你期望伴侣？",
        options: [
            {
                text: "坚持传统道德观念",
                weights: {
                    S: 1.8,
                    Si: 1.5,
                    Fe: 1.0,
                    type: 'XSFJ'
                }
            },
            {
                text: "持开放包容的态度",
                weights: {
                    N: 1.8,
                    Ne: 1.5,
                    Fi: 1.0,
                    type: 'XNFP'
                }
            },
            {
                text: "重视个人独立性",
                weights: {
                    T: 1.5,
                    Ti: 1.2,
                    Fi: 1.0,
                    type: 'XXTX'
                }
            },
            {
                text: "注重社会责任",
                weights: {
                    F: 1.8,
                    Fe: 1.5,
                    Ni: 1.0,
                    type: 'XXFJ'
                }
            }
        ],
        importance: 1.8
    },
    {
        question: "对于家庭责任，你希望伴侣？",
        options: [
            {
                text: "严格履行传统角色",
                weights: {
                    S: 2.0,
                    Si: 1.5,
                    Fe: 1.0,
                    type: 'XSFJ'
                }
            },
            {
                text: "平等分担责任",
                weights: {
                    T: 1.8,
                    Te: 1.5,
                    Fe: 1.0,
                    type: 'XXTJ'
                }
            },
            {
                text: "灵活调整分工",
                weights: {
                    P: 1.5,
                    Ne: 1.2,
                    Fe: 1.0,
                    type: 'XXXP'
                }
            },
            {
                text: "根据能力承担",
                weights: {
                    T: 1.5,
                    Ti: 1.2,
                    Se: 1.0,
                    type: 'XXTX'
                }
            }
        ],
        importance: 1.7
    },
    
    // 第7类：决策方式偏好（5题）
    {
        question: "在重大决策时，你期望伴侣？",
        options: [
            {
                text: "理性分析利弊",
                weights: {
                    T: 2.0,
                    Te: 1.5,
                    Ni: 1.2,
                    type: 'XNTJ'
                }
            },
            {
                text: "考虑情感因素",
                weights: {
                    F: 1.8,
                    Fi: 1.5,
                    Fe: 1.0,
                    type: 'XXFX'
                }
            },
            {
                text: "权衡现实条件",
                weights: {
                    S: 1.5,
                    Si: 1.2,
                    Te: 1.0,
                    type: 'XSTJ'
                }
            },
            {
                text: "相信直觉判断",
                weights: {
                    N: 1.8,
                    Ni: 1.5,
                    Fi: 1.0,
                    type: 'XNFX'
                }
            }
        ],
        importance: 1.9
    },
    {
        question: "在日常选择中，你希望伴侣？",
        options: [
            {
                text: "快速果断决定",
                weights: {
                    J: 2.0,
                    Te: 1.5,
                    Se: 1.0,
                    type: 'EXTJ'
                }
            },
            {
                text: "充分考虑后决定",
                weights: {
                    I: 1.5,
                    Ti: 1.2,
                    Ni: 1.0,
                    type: 'IXXJ'
                }
            },
            {
                text: "保持选项开放",
                weights: {
                    P: 1.8,
                    Ne: 1.5,
                    Fi: 1.0,
                    type: 'XXXP'
                }
            },
            {
                text: "寻求共识后决定",
                weights: {
                    F: 1.5,
                    Fe: 1.2,
                    Si: 1.0,
                    type: 'XXFJ'
                }
            }
        ],
        importance: 1.6
    },
    {
        question: "面对重要抉择时，你期望伴侣？",
        options: [
            {
                text: "收集充分信息后决策",
                weights: {
                    T: 1.8,
                    Ti: 1.5,
                    Si: 1.2,
                    type: 'IXTJ'
                }
            },
            {
                text: "考虑对关系的影响",
                weights: {
                    F: 2.0,
                    Fe: 1.5,
                    Ni: 1.0,
                    type: 'XXFJ'
                }
            },
            {
                text: "寻找灵活的折衷方案",
                weights: {
                    P: 1.8,
                    Ne: 1.5,
                    Fe: 1.0,
                    type: 'XNXP'
                }
            },
            {
                text: "根据经验快速判断",
                weights: {
                    S: 1.5,
                    Se: 1.2,
                    Te: 1.0,
                    type: 'XSTJ'
                }
            }
        ],
        importance: 1.8
    },
    
    // 第8类：压力处理方式（5题）
    {
        question: "在压力情况下，你希望伴侣？",
        options: [
            {
                text: "理性分析并积极解决",
                weights: {
                    T: 2.0,
                    Te: 1.5,
                    Ni: 1.0,
                    type: 'XNTJ'
                }
            },
            {
                text: "寻求情感支持和理解",
                weights: {
                    F: 1.8,
                    Fe: 1.5,
                    Fi: 1.0,
                    type: 'XXFX'
                }
            },
            {
                text: "需要独处时间调整",
                weights: {
                    I: 1.8,
                    Ti: 1.5,
                    Ni: 1.0,
                    type: 'IXXX'
                }
            },
            {
                text: "通过行动转移注意力",
                weights: {
                    S: 1.5,
                    Se: 1.2,
                    Te: 1.0,
                    type: 'XSXP'
                }
            }
        ],
        importance: 1.7
    },
    {
        question: "遇到困难时，你期望伴侣？",
        options: [
            {
                text: "保持冷静理性分析",
                weights: {
                    T: 2.0,
                    Ti: 1.5,
                    Ni: 1.0,
                    type: 'XXTX'
                }
            },
            {
                text: "积极寻求外部帮助",
                weights: {
                    E: 1.8,
                    Fe: 1.5,
                    Se: 1.0,
                    type: 'EXXX'
                }
            },
            {
                text: "与你共同承担压力",
                weights: {
                    F: 1.8,
                    Fe: 1.5,
                    Si: 1.0,
                    type: 'XXFJ'
                }
            },
            {
                text: "保持乐观灵活应对",
                weights: {
                    P: 1.5,
                    Ne: 1.2,
                    Fe: 1.0,
                    type: 'ENFP'
                }
            }
        ],
        importance: 1.8
    },
    {
        question: "在情绪低落时，你希望伴侣？",
        options: [
            {
                text: "给予实际的帮助和建议",
                weights: {
                    S: 1.8,
                    Te: 1.5,
                    Si: 1.0,
                    type: 'XSTJ'
                }
            },
            {
                text: "提供情感支持和理解",
                weights: {
                    F: 2.0,
                    Fe: 1.5,
                    Fi: 1.0,
                    type: 'XXFX'
                }
            },
            {
                text: "尊重你的独处需求",
                weights: {
                    I: 1.8,
                    Fi: 1.5,
                    Ti: 1.0,
                    type: 'IXXX'
                }
            },
            {
                text: "帮你转移注意力",
                weights: {
                    E: 1.5,
                    Se: 1.2,
                    Fe: 1.0,
                    type: 'ESXX'
                }
            }
        ],
        importance: 1.6
    },
    {
        question: "面对重大变化时，你期望伴侣？",
        options: [
            {
                text: "制定详细的应对计划",
                weights: {
                    J: 2.0,
                    Te: 1.5,
                    Si: 1.0,
                    type: 'XXTJ'
                }
            },
            {
                text: "保持开放和适应性",
                weights: {
                    P: 1.8,
                    Ne: 1.5,
                    Se: 1.0,
                    type: 'XXXP'
                }
            },
            {
                text: "关注情感需求和调适",
                weights: {
                    F: 1.8,
                    Fi: 1.5,
                    Ni: 1.0,
                    type: 'XXFX'
                }
            },
            {
                text: "理性评估风险和机会",
                weights: {
                    T: 1.8,
                    Ti: 1.5,
                    Ne: 1.0,
                    type: 'XNTX'
                }
            }
        ],
        importance: 1.7
    },
    
    // 第9类：休闲活动偏好（5题）
    {
        question: "在休闲时光，你希望伴侣？",
        options: [
            {
                text: "一起参与社交活动",
                weights: {
                    E: 2.0,
                    Fe: 1.5,
                    Se: 1.0,
                    type: 'EXXX'
                }
            },
            {
                text: "享受安静的二人世界",
                weights: {
                    I: 1.8,
                    Fi: 1.5,
                    Si: 1.0,
                    type: 'IXXX'
                }
            },
            {
                text: "尝试新鲜有趣的事物",
                weights: {
                    N: 1.8,
                    Ne: 1.5,
                    Se: 1.0,
                    type: 'XNXP'
                }
            },
            {
                text: "保持规律的休闲方式",
                weights: {
                    S: 1.5,
                    Si: 1.2,
                    Je: 1.0,
                    type: 'XSXJ'
                }
            }
        ],
        importance: 1.5
    },
    {
        question: "对于假期安排，你期望伴侣？",
        options: [
            {
                text: "提前规划所有细节",
                weights: {
                    J: 2.0,
                    Te: 1.5,
                    Si: 1.0,
                    type: 'XXTJ'
                }
            },
            {
                text: "保持灵活即兴发挥",
                weights: {
                    P: 1.8,
                    Ne: 1.5,
                    Se: 1.0,
                    type: 'XXXP'
                }
            },
            {
                text: "注重舒适和放松",
                weights: {
                    S: 1.5,
                    Si: 1.2,
                    Fi: 1.0,
                    type: 'XSXP'
                }
            },
            {
                text: "追求新鲜和冒险",
                weights: {
                    N: 1.8,
                    Ne: 1.5,
                    Se: 1.0,
                    type: 'XNXP'
                }
            }
        ],
        importance: 1.4
    },
    {
        question: "在娱乐选择上，你希望伴侣？",
        options: [
            {
                text: "偏好知识性娱乐",
                weights: {
                    N: 1.8,
                    Ti: 1.5,
                    Ni: 1.0,
                    type: 'XNTX'
                }
            },
            {
                text: "享受感官体验",
                weights: {
                    S: 1.8,
                    Se: 1.5,
                    Fi: 1.0,
                    type: 'XSXP'
                }
            },
            {
                text: "重视社交互动",
                weights: {
                    E: 1.8,
                    Fe: 1.5,
                    Se: 1.0,
                    type: 'EXXX'
                }
            },
            {
                text: "追求艺术审美",
                weights: {
                    N: 1.5,
                    Fi: 1.2,
                    Ni: 1.0,
                    type: 'XNFX'
                }
            }
        ],
        importance: 1.3
    },
    {
        question: "在兴趣爱好上，你期望伴侣？",
        options: [
            {
                text: "有共同的兴趣爱好",
                weights: {
                    F: 1.8,
                    Fe: 1.5,
                    Si: 1.0,
                    type: 'XXFJ'
                }
            },
            {
                text: "保持独立的爱好",
                weights: {
                    I: 1.8,
                    Ti: 1.5,
                    Fi: 1.0,
                    type: 'IXXX'
                }
            },
            {
                text: "愿意相互学习交流",
                weights: {
                    N: 1.5,
                    Ne: 1.2,
                    Fe: 1.0,
                    type: 'XNFX'
                }
            },
            {
                text: "尊重彼此的选择",
                weights: {
                    T: 1.5,
                    Fi: 1.2,
                    Ti: 1.0,
                    type: 'XXTP'
                }
            }
        ],
        importance: 1.5
    }
];