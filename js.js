// MBTI类型数据
const mbtiTypes = {
    'INTP': { name: '逻辑学家', stack: ['Ti', 'Ne', 'Si', 'Fe', 'Te', 'Ni', 'Se', 'Fi'] },
    'INTJ': { name: '建筑师', stack: ['Ni', 'Te', 'Fi', 'Se', 'Ne', 'Ti', 'Fe', 'Si'] },
    'INFP': { name: '调停者', stack: ['Fi', 'Ne', 'Si', 'Te', 'Fe', 'Ni', 'Se', 'Ti'] },
    'INFJ': { name: '提倡者', stack: ['Ni', 'Fe', 'Ti', 'Se', 'Ne', 'Fi', 'Te', 'Si'] },
    'ISTP': { name: '鉴赏家', stack: ['Ti', 'Se', 'Ni', 'Fe', 'Te', 'Si', 'Ne', 'Fi'] },
    'ISTJ': { name: '检查员', stack: ['Si', 'Te', 'Fi', 'Ne', 'Se', 'Ti', 'Fe', 'Ni'] },
    'ISFP': { name: '探险家', stack: ['Fi', 'Se', 'Ni', 'Te', 'Fe', 'Si', 'Ne', 'Ti'] },
    'ISFJ': { name: '守卫者', stack: ['Si', 'Fe', 'Ti', 'Ne', 'Se', 'Fi', 'Te', 'Ni'] },
    'ENTP': { name: '辩论家', stack: ['Ne', 'Ti', 'Fe', 'Si', 'Ni', 'Te', 'Fi', 'Se'] },
    'ENTJ': { name: '指挥官', stack: ['Te', 'Ni', 'Se', 'Fi', 'Ti', 'Ne', 'Si', 'Fe'] },
    'ENFP': { name: '竞选者', stack: ['Ne', 'Fi', 'Te', 'Si', 'Ni', 'Fe', 'Ti', 'Se'] },
    'ENFJ': { name: '主人公', stack: ['Fe', 'Ni', 'Se', 'Ti', 'Fi', 'Ne', 'Si', 'Te'] },
    'ESTP': { name: '企业家', stack: ['Se', 'Ti', 'Fe', 'Ni', 'Si', 'Te', 'Fi', 'Ne'] },
    'ESTJ': { name: '总管', stack: ['Te', 'Si', 'Ne', 'Fi', 'Ti', 'Se', 'Ni', 'Fe'] },
    'ESFP': { name: '表演者', stack: ['Se', 'Fi', 'Te', 'Ni', 'Si', 'Fe', 'Ti', 'Ne'] },
    'ESFJ': { name: '执政官', stack: ['Fe', 'Si', 'Ne', 'Ti', 'Fi', 'Se', 'Ni', 'Te'] }
};

// 初始化选择框
function initializeSelect() {
    const select = document.getElementById('mbti-select');
    const compareSelect = document.getElementById('compare-select');

    Object.entries(mbtiTypes).forEach(([type, data]) => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = `${type} - ${data.name}`;
        select.appendChild(option);

        // 为比较选择框创建选项
        const compareOption = option.cloneNode(true);
        compareSelect.appendChild(compareOption);
    });
}

// 渲染认知功能堆栈
function renderFunctionStack(type) {
    const stackContainer = document.querySelector('.function-stack');
    stackContainer.innerHTML = '';

    if (!type || !mbtiTypes[type]) return;

    const typeHeader = document.createElement('div');
    typeHeader.className = 'type-header';
    typeHeader.innerHTML = `
<div style="
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: var(--card-shadow);
">
    <h2 style="
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
    ">
        <span>${type}</span>
        <span style="color: var(--text-gray); font-size: 1.25rem;">|</span>
        <span>${mbtiTypes[type].name}</span>
    </h2>

    <div class="type-dimensions" style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-bottom: 1.5rem;
    ">
        <div class="dimension" style="
            padding: 0.75rem;
            background: var(--bg-gray);
            border-radius: 0.5rem;
        ">
            <strong>${type[0] === 'E' ? '外向 (E)' : '内向 (I)'}</strong><br>
            <span style="font-size: 0.875rem; color: var(--text-gray);">
                ${type[0] === 'E' ? '从外部世界获取能量' : '从内部世界获取能量'}
            </span>
        </div>
        <div class="dimension" style="
            padding: 0.75rem;
            background: var(--bg-gray);
            border-radius: 0.5rem;
        ">
            <strong>${type[1] === 'S' ? '感知 (S)' : '直觉 (N)'}</strong><br>
            <span style="font-size: 0.875rem; color: var(--text-gray);">
                ${type[1] === 'S' ? '关注具体的事实和细节' : '关注概念和可能性'}
            </span>
        </div>
        <div class="dimension" style="
            padding: 0.75rem;
            background: var(--bg-gray);
            border-radius: 0.5rem;
        ">
            <strong>${type[2] === 'T' ? '思考 (T)' : '情感 (F)'}</strong><br>
            <span style="font-size: 0.875rem; color: var(--text-gray);">
                ${type[2] === 'T' ? '基于逻辑做出决策' : '基于价值观做出决策'}
            </span>
        </div>
        <div class="dimension" style="
            padding: 0.75rem;
            background: var(--bg-gray);
            border-radius: 0.5rem;
        ">
            <strong>${type[3] === 'J' ? '判断 (J)' : '知觉 (P)'}</strong><br>
            <span style="font-size: 0.875rem; color: var(--text-gray);">
                ${type[3] === 'J' ? '倾向计划和决策' : '倾向灵活和适应'}
            </span>
        </div>
    </div>

    <div style="
        background: var(--bg-gray);
        padding: 1rem;
        border-radius: 0.5rem;
        margin-bottom: 1.5rem;
        color: var(--text-gray);
        line-height: 1.6;
    ">
        ${typeDescriptions[type]}
    </div>

    <div class="personality-labels" style="
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
    ">
        ${personalityLabels[type].map(label => `
            <span class="personality-label" data-label="${label}" style="
                background: var(--bg-gray);
                padding: 0.25rem 0.75rem;
                border-radius: 1rem;
                font-size: 0.875rem;
                color: var(--primary-color);
                border: 1px solid var(--border-color);
                cursor: pointer;
                transition: all 0.2s;
            ">${label}</span>
        `).join('')}
    </div>

    <div class="label-description" style="
        display: none;
        background: white;
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: var(--card-shadow);
        margin-top: 1rem;
        border: 1px solid var(--border-color);
        animation: fadeIn 0.2s ease-out;
        color: var(--text-gray);
    "></div>
</div>

<div style="
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: var(--card-shadow);
">
    <h3 style="
        color: var(--primary-color);
        margin-bottom: 1.5rem;
        font-size: 1.25rem;
    ">认知功能堆栈</h3>
    <div class="function-stack-inner"></div>
</div>
`;
    stackContainer.appendChild(typeHeader);

    // 添加标签交互
    const labelDescription = typeHeader.querySelector('.label-description');
    typeHeader.querySelectorAll('.personality-label').forEach(label => {
        label.addEventListener('mouseover', () => {
            const labelText = label.dataset.label;
            labelDescription.textContent = personalityLabelDescriptions[type][labelText];
            labelDescription.style.display = 'block';

            // 更新所有标签样式
            typeHeader.querySelectorAll('.personality-label').forEach(l => {
                if (l === label) {
                    l.style.background = 'var(--primary-color)';
                    l.style.color = 'white';
                    l.style.transform = 'translateY(-2px)';
                    l.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                } else {
                    l.style.background = 'var(--bg-gray)';
                    l.style.color = 'var(--primary-color)';
                    l.style.transform = 'none';
                    l.style.boxShadow = 'none';
                }
            });
        });
    });

    // 点击其他地方隐藏标签说明
    document.addEventListener('click', (e) => {
        if (!e.target.classList.contains('personality-label')) {
            labelDescription.style.display = 'none';
            typeHeader.querySelectorAll('.personality-label').forEach(label => {
                label.style.background = 'var(--bg-gray)';
                label.style.color = 'var(--primary-color)';
                label.style.transform = 'none';
                label.style.boxShadow = 'none';
            });
        }
    });

    // 渲染认知功能堆栈
    const functionStackInner = typeHeader.querySelector('.function-stack-inner');
    mbtiTypes[type].stack.forEach((func, index) => {
        const functionItem = document.createElement('div');
        functionItem.className = 'function-item';

        const funct = functionDescriptions[func];
        functionItem.innerHTML = `
    <div style="
        display: flex;
        align-items: start;
        gap: 1rem;
        padding: 1rem;
        background: var(--bg-gray);
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        transition: all 0.2s;
    ">
        <div style="
            font-weight: bold;
            font-size: 1.125rem;
            min-width: 3rem;
            color: var(--primary-color);
        ">${func}</div>
        <div style="flex: 1;">
            <div style="
                margin-bottom: 0.5rem;
                font-weight: 500;
            ">${funct.name} - ${funct.description}</div>
            <div style="
                font-size: 0.875rem;
                color: var(--text-gray);
            ">
                <div style="
                    margin-bottom: 0.5rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 1px solid var(--border-color);
                ">${positionDescriptions[index]}</div>
                ${funct['position' + (index + 1) + 'Desc'].map(desc =>
            `<div style="
                        margin-bottom: 0.25rem;
                        padding-left: 1rem;
                        position: relative;
                    ">
                        <span style="
                            position: absolute;
                            left: 0;
                            color: var(--primary-color);
                        ">●</span>
                        ${desc}
                    </div>`
        ).join('')}
            </div>
        </div>
    </div>
`;
        functionStackInner.appendChild(functionItem);
    });

    // 添加悬浮效果
    functionStackInner.querySelectorAll('.function-item > div').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'translateY(-2px)';
            item.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'none';
            item.style.boxShadow = 'none';
        });
    });
}
// 渲染Socionics信息
function renderSocionicsInfo(type) {
    const socionicsContainer = document.querySelector('.socionics-info');
    if (!type || !socionicsTypes[type]) {
        socionicsContainer.innerHTML = '';
        return;
    }

    const socionicType = socionicsTypes[type];
    socionicsContainer.innerHTML = `
<div class="socionics-card">
    <h3>类型信息</h3>
    <p><strong>Socionics类型:</strong> ${socionicType.type} (${socionicType.name})</p>
    <p><strong>所属象限:</strong> ${socionicType.quadra}</p>
    <p><strong>类型描述:</strong> ${socionicType.description}</p>
</div>

<div class="socionics-card">
    <h3>关系网络</h3>
    <div class="relationship-grid">
        <div class="relationship-item">
            <h4>二元关系</h4>
            <p>${socionicType.romance}</p>
        </div>
        <div class="relationship-item">
            <h4>利益关系</h4>
            <p>${socionicType.benefit}</p>
        </div>
        <div class="relationship-item">
            <h4>监督关系</h4>
            <p>${socionicType.supervision}</p>
        </div>
    </div>
</div>
`;
}

// 渲染象限信息
function renderQuadraInfo(type) {
    const quadraContainer = document.querySelector('.quadra-info');
    if (!type) {
        quadraContainer.innerHTML = '';
        return;
    }

    let quadraName;
    for (const [name, data] of Object.entries(quadras)) {
        if (data.types.includes(type)) {
            quadraName = name;
            quadraContainer.innerHTML = `
        <div class="quadra-title">${name}象限</div>
        <div class="quadra-description">${data.description}</div>
        <div class="type-list">
            <h4>同象限类型：</h4>
            ${data.types.map(t => `<span class="type-tag">${t} - ${mbtiTypes[t].name}</span>`).join('')}
        </div>
    `;
            break;
        }
    }
}

// 渲染类型比较
function renderComparison(type1, type2) {
    const container = document.querySelector('.comparison-container');
    if (!type1 || !type2 || !mbtiTypes[type1] || !mbtiTypes[type2]) {
        container.innerHTML = '';
        return;
    }

    const stack1 = mbtiTypes[type1].stack;
    const stack2 = mbtiTypes[type2].stack;

    container.innerHTML = `
<div class="type-column">
    <h3>${type1} - ${mbtiTypes[type1].name}</h3>
    <div class="function-stack">
        ${renderFunctionStackHTML(stack1)}
    </div>
</div>
<div class="type-column">
    <h3>${type2} - ${mbtiTypes[type2].name}</h3>
    <div class="function-stack">
        ${renderFunctionStackHTML(stack2)}
    </div>
</div>
`;
}

function renderFunctionStackHTML(stack) {
    return stack.map((func, index) => {
        const funct = functionDescriptions[func];
        return `
<div class="function-item">
    <div class="function-code">${func}</div>
    <div class="function-details">
        <div class="function-description">${functionDescriptions[func].name}</div>
        <div class="position-description">${positionDescriptions[index]}<br>●${funct['position' + (index + 1) + 'Desc'].join('<br>●')}</div>
    </div>
</div>
`}).join('');
}

// 渲染成长建议
function renderGrowthAdvice(type) {
    const container = document.querySelector('.growth-card');
    if (!type || !growthAdvice[type]) {
        container.innerHTML = '';
        return;
    }

    const advice = growthAdvice[type];
    container.innerHTML = `
<h3>个性优势</h3>
<ul>${advice.strengths.map(s => `<li>${s}</li>`).join('')}</ul>

<h3>发展机会</h3>
<ul>${advice.weaknesses.map(w => `<li>${w}</li>`).join('')}</ul>

<h3>成长建议</h3>
<ul>${advice.advice.map(a => `<li>${a}</li>`).join('')}</ul>
`;
}

// 测试相关函数
// 添加权重计算函数
function calculateWeightedPreference(preferences) {
    const weightedScores = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };

    preferences.forEach(pref => {
        weightedScores[pref.type] += pref.weight;
    });

    return {
        EI: weightedScores.E > weightedScores.I ? 'E' : 'I',
        SN: weightedScores.S > weightedScores.N ? 'S' : 'N',
        TF: weightedScores.T > weightedScores.F ? 'T' : 'F',
        JP: weightedScores.J > weightedScores.P ? 'J' : 'P'
    };
}

// 用于计算理想类型的新算法
function calculateIdealType(answers) {
    const scores = {
        // 基础维度
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0,
        // 认知功能
        Te: 0, Ti: 0,
        Fe: 0, Fi: 0,
        Se: 0, Si: 0,
        Ne: 0, Ni: 0,
        // 类型匹配计数
        types: {}
    };

    // 计算加权分数
    answers.forEach(answer => {
        const questionImportance = answer.question.importance || 1.0;
        const weights = answer.selectedOption.weights;

        // 累加维度分数
        for (const [dimension, weight] of Object.entries(weights)) {
            if (dimension !== 'type') {
                scores[dimension] = (scores[dimension] || 0) + weight * questionImportance;
            }
        }

        // 记录类型倾向
        if (weights.type) {
            weights.type.split('').forEach((letter, index) => {
                if (letter !== 'X') {
                    const key = `pos${index}_${letter}`;
                    scores.types[key] = (scores.types[key] || 0) + questionImportance;
                }
            });
        }
    });

    // 确定最终类型
    const type = [
        scores.E > scores.I ? 'E' : 'I',
        scores.S > scores.N ? 'S' : 'N',
        scores.T > scores.F ? 'T' : 'F',
        scores.J > scores.P ? 'J' : 'P'
    ].join('');

    // 计算认知功能偏好
    const cognitiveFunctions = [
        { function: 'Te', score: scores.Te },
        { function: 'Ti', score: scores.Ti },
        { function: 'Fe', score: scores.Fe },
        { function: 'Fi', score: scores.Fi },
        { function: 'Se', score: scores.Se },
        { function: 'Si', score: scores.Si },
        { function: 'Ne', score: scores.Ne },
        { function: 'Ni', score: scores.Ni }
    ].sort((a, b) => b.score - a.score);

    // 确定兼容类型
    const compatibleTypes = determineCompatibleTypes(type, scores);

    return {
        primaryType: type,
        scores: scores,
        cognitiveFunctions: cognitiveFunctions,
        compatibleTypes: compatibleTypes
    };
}
// 确定兼容类型
function determineCompatibleTypes(primaryType, scores) {
    const compatibility = [];
    const allTypes = Object.keys(mbtiTypes);

    allTypes.forEach(type => {
        let compatibilityScore = 0;

        // 分析维度匹配度
        for (let i = 0; i < 4; i++) {
            const dimension = type[i];
            const oppositeDimension = dimension === 'E' ? 'I' :
                dimension === 'S' ? 'N' :
                    dimension === 'T' ? 'F' :
                        dimension === 'J' ? 'P' : dimension;

            const dimensionScore = scores[dimension] / (scores[dimension] + scores[oppositeDimension]);
            compatibilityScore += dimensionScore;
        }

        // 分析认知功能匹配度
        const typeStack = mbtiTypes[type].stack;
        typeStack.forEach((func, index) => {
            const functionScore = scores[func] * (1 - index * 0.1); // 越靠前权重越高
            compatibilityScore += functionScore;
        });

        compatibility.push({
            type: type,
            score: compatibilityScore
        });
    });

    // 按匹配度排序
    return compatibility.sort((a, b) => b.score - a.score).slice(0, 5);
}
// 显示结果的函数
function showRelationshipResults(results) {
    const resultCard = document.querySelector('.result-card');
    resultCard.innerHTML = `
<h3>你的理想伴侣类型分析</h3>
<div class="result-details">
    <div style="margin-bottom: 1.5rem;">
        <h4>主要匹配类型：${results.primaryType}</h4>
        <p>${mbtiTypes[results.primaryType].name}</p>
        <div style="
            background: var(--bg-gray);
            padding: 1rem;
            border-radius: 0.5rem;
            margin-top: 0.5rem;
        ">
            ${typeDescriptions[results.primaryType]}
        </div>
    </div>

    <div style="margin-bottom: 1.5rem;">
        <h4>特质偏好：</h4>
        <div style="display: grid; gap: 0.5rem; margin-top: 0.5rem;">
            ${results.cognitiveFunctions.slice(0, 4).map(cf => `
                <div style="
                    background: var(--bg-gray);
                    padding: 0.5rem;
                    border-radius: 0.5rem;
                ">
                    <strong>${cf.function}:</strong> 
                    ${getFunctionDescription(cf.function)}
                </div>
            `).join('')}
        </div>
    </div>

    <div style="margin-bottom: 1.5rem;">
        <h4>其他潜在匹配类型：</h4>
        <div style="display: grid; gap: 0.5rem; margin-top: 0.5rem;">
            ${results.compatibleTypes.slice(1).map(ct => `
                <div style="
                    background: var(--bg-gray);
                    padding: 0.5rem;
                    border-radius: 0.5rem;
                ">
                    <strong>${ct.type}</strong> - ${mbtiTypes[ct.type].name}
                    <div style="font-size: 0.9em; color: var(--text-gray);">
                        匹配度: ${(ct.score * 100 / results.compatibleTypes[0].score).toFixed(1)}%
                    </div>
                </div>
            `).join('')}
        </div>
    </div>

    <div style="
        background: var(--bg-gray);
        padding: 1rem;
        border-radius: 0.5rem;
        margin-top: 1rem;
        font-style: italic;
    ">
        注意：这个结果仅供参考。真实的感情关系还需要双方的用心经营和相互理解。性格类型只是参考因素之一，更重要的是双方的价值观契合度和共同成长的意愿。
    </div>
</div>
`;
}

function getFunctionDescription(func) {
    const descriptions = {
        'Te': '注重效率和逻辑的决策方式',
        'Ti': '深入的独立思考和分析能力',
        'Fe': '善于营造和谐的人际关系',
        'Fi': '强烈的个人价值观和真诚',
        'Se': '善于把握当下和实践能力',
        'Si': '重视传统和稳定的生活方式',
        'Ne': '创新思维和探索可能性',
        'Ni': '深刻的洞察力和远见'
    };
    return descriptions[func];
}
// 在渲染测试页面的代码中添加测试类型选择
function renderTestSelection() {
const container = document.querySelector('.test-container');
container.innerHTML = `
<div class="test-type-selection" style="
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
">
    <button class="test-type-button active" data-test="personality" style="
        flex: 1;
        padding: 1rem;
        border: none;
        border-radius: 0.5rem;
        background: var(--primary-color);
        color: white;
        cursor: pointer;
        transition: all 0.2s;
    ">性格类型测试</button>
    <button class="test-type-button" data-test="relationship" style="
        flex: 1;
        padding: 1rem;
        border: none;
        border-radius: 0.5rem;
        background: var(--bg-gray);
        color: var(--text-gray);
        cursor: pointer;
        transition: all 0.2s;
    ">理想恋爱对象测试</button>
</div>
<div class="progress-bar" style="
    width: 100%;
    height: 0.5rem;
    background: var(--bg-gray);
    border-radius: 0.25rem;
    margin-bottom: 2rem;
">
    <div class="progress" style="
        width: 0%;
        height: 100%;
        background: var(--primary-color);
        border-radius: 0.25rem;
        transition: width 0.3s ease;
    "></div>
</div>
<div class="question-container"></div>
<div class="result-card" style="display: none;"></div>
<button class="test-button" style="
    display: none;
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    background: var(--primary-color);
    color: white;
    cursor: pointer;
    margin-top: 2rem;
    transition: all 0.2s;
">重新开始测试</button>
`;

// 添加测试类型切换事件
const buttons = container.querySelectorAll('.test-type-button');
buttons.forEach(button => {
button.addEventListener('click', () => {
    buttons.forEach(b => {
        b.classList.remove('active');
        b.style.background = 'var(--bg-gray)';
        b.style.color = 'var(--text-gray)';
    });
    button.classList.add('active');
    button.style.background = 'var(--primary-color)';
    button.style.color = 'white';
    handleTestTypeChange(button.dataset.test);
});
});

// 添加重新开始按钮事件
container.querySelector('.test-button').addEventListener('click', handleTestRestart);

// 初始启动测试
handleTestTypeChange('personality');
}
let currentTestType = 'personality';
let currentQuestion = 0;
let answers = {
    personality: {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    },
    relationship: []
};

function startTest() {
    // 确保问题数据已加载
    if ((!testQuestions || !Array.isArray(testQuestions) || testQuestions.length === 0) &&
        (!relationshipQuestions || !Array.isArray(relationshipQuestions) || relationshipQuestions.length === 0)) {
        console.error('Questions data is not properly loaded');
        return;
    }

    currentQuestion = 0;
    answers = {
        personality: {
            E: 0, I: 0,
            S: 0, N: 0,
            T: 0, F: 0,
            J: 0, P: 0
        },
        relationship: []
    };

    const resultCard = document.querySelector('.result-card');
    resultCard.style.display = 'none';
    resultCard.innerHTML = '';

    document.querySelector('.test-button').style.display = 'none';
    document.querySelector('.progress').style.width = '0%';

    renderQuestion();
}

// 渲染问题
// 修改渲染问题的函数
function renderQuestion() {
try {
const container = document.querySelector('.question-container');
if (!container) return;

const questions = currentTestType === 'personality' ? testQuestions : relationshipQuestions;

// 验证问题数据
if (!questions || !Array.isArray(questions) || questions.length === 0) {
    console.error('Questions data not properly loaded');
    return;
}

// 验证当前问题索引
if (currentQuestion >= questions.length) {
    showResults();
    return;
}

const question = questions[currentQuestion];

// 验证问题格式
if (!question || !Array.isArray(question.options)) {
    console.error('Invalid question format:', question);
    return;
}

container.innerHTML = `
    <div class="question" style="
        background: white;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: var(--card-shadow);
        margin-bottom: 2rem;
    ">
        <h3 style="
            color: var(--primary-color);
            margin-bottom: 1.5rem;
        ">${question.question}</h3>
        <div class="options" style="
            display: grid;
            gap: 1rem;
        ">
            ${question.options.map((opt, idx) => `
                <div class="option" style="
                    padding: 1rem;
                    background: var(--bg-gray);
                    border-radius: 0.5rem;
                    cursor: pointer;
                    transition: all 0.2s;
                " data-index="${idx}">
                    ${opt.text}
                </div>
            `).join('')}
        </div>
    </div>
`;

// 添加选项悬浮效果
container.querySelectorAll('.option').forEach(option => {
    option.addEventListener('mouseover', () => {
        option.style.background = 'var(--primary-color)';
        option.style.color = 'white';
        option.style.transform = 'translateY(-2px)';
    });
    option.addEventListener('mouseout', () => {
        option.style.background = 'var(--bg-gray)';
        option.style.color = 'inherit';
        option.style.transform = 'none';
    });
});

// 更新进度条
const progress = document.querySelector('.progress');
if (progress) {
    progress.style.width = `${(currentQuestion + 1) / questions.length * 100}%`;
}

} catch (error) {
console.error('Error in rendering question:', error);
}
}
// 修改测试类型切换的函数
function handleTestTypeChange(type) {
try {
currentTestType = type;
currentQuestion = 0;
answers = {
    personality: {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    },
    relationship: []
};

// 验证测试类型
const questions = type === 'personality' ? testQuestions : relationshipQuestions;
if (!questions || !Array.isArray(questions)) {
    console.error(`Questions not loaded for type: ${type}`);
    return;
}

// 重置UI状态
const resultCard = document.querySelector('.result-card');
if (resultCard) {
    resultCard.style.display = 'none';
    resultCard.innerHTML = '';
}

const testButton = document.querySelector('.test-button');
if (testButton) {
    testButton.style.display = 'none';
}

const progress = document.querySelector('.progress');
if (progress) {
    progress.style.width = '0%';
}

// 渲染第一个问题
renderQuestion();

} catch (error) {
console.error('Error in handling test type change:', error);
}
}        
// 添加计算理想类型的函数
function calculateIdealTypes(preferences) {
    // 基础类型匹配计算
    function getBaseType(scores) {
        return {
            EI: scores.E > scores.I ? 'E' : 'I',
            SN: scores.S > scores.N ? 'S' : 'N',
            TF: scores.T > scores.F ? 'T' : 'F',
            JP: scores.J > scores.P ? 'J' : 'P'
        };
    }

    // 计算认知功能匹配度
    function calculateCognitiveFunctionScore(type, scores) {
        const typeStack = mbtiTypes[type].stack;
        let score = 0;
        typeStack.forEach((func, index) => {
            // 认知功能位置权重，越靠前权重越高
            const positionWeight = 1 - (index * 0.1);
            score += (scores[func] || 0) * positionWeight;
        });
        return score;
    }

    // 计算维度兼容性分数
    function calculateDimensionCompatibility(type, preferences) {
        let score = 0;
        const dimensions = [
            { pos: 0, dim: 'EI' },
            { pos: 1, dim: 'SN' },
            { pos: 2, dim: 'TF' },
            { pos: 3, dim: 'JP' }
        ];

        dimensions.forEach(({ pos, dim }) => {
            const typePreference = type[pos];
            const userPreference = preferences[dim];
            if (typePreference === userPreference) {
                score += 1;
            }
        });

        return score;
    }

    // 获取所有可能的类型
    const allTypes = Object.keys(mbtiTypes);
    const compatibilityScores = allTypes.map(type => {
        // 计算认知功能匹配度
        const cognitiveScore = calculateCognitiveFunctionScore(type, preferences.scores);

        // 计算维度兼容性
        const dimensionScore = calculateDimensionCompatibility(type, preferences.baseType);

        // 计算总分（可以调整权重）
        const totalScore = (cognitiveScore * 0.6) + (dimensionScore * 0.4);

        return {
            type,
            score: totalScore,
            cognitive: cognitiveScore,
            dimension: dimensionScore
        };
    });

    // 按总分排序
    return compatibilityScores.sort((a, b) => b.score - a.score);
}
// 主要计算函数
function calculateMatchResults(answers) {
// 初始化分数
const scores = {
// 基础维度
E: 0, I: 0,
S: 0, N: 0,
T: 0, F: 0,
J: 0, P: 0,
// 认知功能
Te: 0, Ti: 0,
Fe: 0, Fi: 0,
Se: 0, Si: 0,
Ne: 0, Ni: 0
};

// 累计权重分数
answers.forEach(answer => {
const weights = answer.selectedOption.weights;
const importance = answer.question.importance || 1.0;

// 累加各维度分数
Object.entries(weights).forEach(([dimension, weight]) => {
    if (dimension !== 'type' && scores.hasOwnProperty(dimension)) {
        scores[dimension] += weight * importance;
    }
});
});

// 计算首选维度
const baseType = {
EI: scores.E > scores.I ? 'E' : 'I',
SN: scores.S > scores.N ? 'S' : 'N',
TF: scores.T > scores.F ? 'T' : 'F',
JP: scores.J > scores.P ? 'J' : 'P'
};

// 计算维度强度
const dimensionStrengths = {
EI: Math.abs(scores.E - scores.I) / (scores.E + scores.I || 1),
SN: Math.abs(scores.S - scores.N) / (scores.S + scores.N || 1),
TF: Math.abs(scores.T - scores.F) / (scores.T + scores.F || 1),
JP: Math.abs(scores.J - scores.P) / (scores.J + scores.P || 1)
};

// 计算认知功能偏好
const cognitiveFunctions = [
{ function: 'Te', score: scores.Te },
{ function: 'Ti', score: scores.Ti },
{ function: 'Fe', score: scores.Fe },
{ function: 'Fi', score: scores.Fi },
{ function: 'Se', score: scores.Se },
{ function: 'Si', score: scores.Si },
{ function: 'Ne', score: scores.Ne },
{ function: 'Ni', score: scores.Ni }
].sort((a, b) => b.score - a.score);

// 确定主要类型
const primaryType = Object.values(baseType).join('');

// 计算类型匹配度
const typeCompatibility = Object.entries(mbtiTypes).map(([type, data]) => {
let compatibilityScore = 0;

// 计算认知功能匹配度
const functionScore = data.stack.reduce((score, func, index) => {
    const weight = 1 - (index * 0.1); // 位置权重
    const functionScore = scores[func] || 0;
    return score + (functionScore * weight);
}, 0);

// 计算维度匹配度
const dimensionScore = Object.entries(baseType).reduce((score, [dim, pref]) => {
    return score + (type.includes(pref) ? 1 : 0);
}, 0);

compatibilityScore = (functionScore * 0.7) + (dimensionScore * 0.3);

return {
    type,
    score: compatibilityScore,
    name: data.name
};
}).sort((a, b) => b.score - a.score);

return {
primaryType,
scores,
cognitiveFunctions,
dimensionStrengths,
compatibility: typeCompatibility.slice(0, 5)
};
}

// 展示结果的函数
function showDetailedResults(results) {
const container = document.querySelector('.test-container');
const questionContainer = container.querySelector('.question-container');
const resultCard = container.querySelector('.result-card');
const testButton = container.querySelector('.test-button');

// 隐藏问题容器
if (questionContainer) {
questionContainer.style.display = 'none';
}

// 显示结果和重新开始按钮
resultCard.style.display = 'block';
testButton.style.display = 'block';

resultCard.innerHTML = `
<div style="background: white; border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; box-shadow: var(--card-shadow);">
    <h3 style="color: var(--primary-color); margin-bottom: 1.5rem;">你的理想伴侣类型分析</h3>
    
    <div style="margin-bottom: 2rem;">
        <h4 style="margin-bottom: 1rem;">最佳匹配类型</h4>
        <div style="background: var(--bg-gray); padding: 1.5rem; border-radius: 0.5rem;">
            <div style="font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;">
                ${results.compatibility[0].type} - ${results.compatibility[0].name}
            </div>
            <p style="color: var(--text-gray);">${typeDescriptions[results.compatibility[0].type]}</p>
        </div>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="margin-bottom: 1rem;">认知功能偏好</h4>
        <div style="display: grid; gap: 0.5rem;">
            ${results.cognitiveFunctions.slice(0, 4).map(cf => `
                <div style="
                    background: var(--bg-gray);
                    padding: 1rem;
                    border-radius: 0.5rem;
                ">
                    <strong>${cf.function}:</strong> 
                    ${functionDescriptions[cf.function].description}
                </div>
            `).join('')}
        </div>
    </div>

    <div style="margin-bottom: 2rem;">
        <h4 style="margin-bottom: 1rem;">其他潜在匹配类型</h4>
        <div style="display: grid; gap: 0.5rem;">
            ${results.compatibility.slice(1).map(match => `
                <div style="
                    background: var(--bg-gray);
                    padding: 1rem;
                    border-radius: 0.5rem;
                ">
                    <div style="margin-bottom: 0.5rem;">
                        <strong>${match.type}</strong> - ${match.name}
                    </div>
                    <div style="font-size: 0.9em; color: var(--text-gray);">
                        匹配度: ${(match.score * 100 / results.compatibility[0].score).toFixed(1)}%
                    </div>
                </div>
            `).join('')}
        </div>
    </div>

    <div style="
        background: var(--bg-gray);
        padding: 1rem;
        border-radius: 0.5rem;
        font-style: italic;
        color: var(--text-gray);
    ">
        注意：这个结果仅供参考。真实的感情关系还需要双方的用心经营和相互理解。
        性格类型只是参考因素之一，更重要的是双方的价值观契合度和共同成长的意愿。
    </div>
</div>
`;
}
// 修改重新开始测试的处理
function handleTestRestart() {
const container = document.querySelector('.test-container');
const questionContainer = container.querySelector('.question-container');
const resultCard = container.querySelector('.result-card');
const testButton = container.querySelector('.test-button');
const progress = container.querySelector('.progress');

// 重置所有状态
currentQuestion = 0;
answers = {
personality: {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
},
relationship: []
};

// 重置UI
if (questionContainer) {
questionContainer.style.display = 'block';
}
if (resultCard) {
resultCard.style.display = 'none';
resultCard.innerHTML = '';
}
if (testButton) {
testButton.style.display = 'none';
}
if (progress) {
progress.style.width = '0%';
}

// 重新渲染第一个问题
renderQuestion();
}

// 辅助函数
function getDimensionLabel(dimension) {
    const labels = {
        EI: '外向 (E) vs 内向 (I)',
        SN: '感知 (S) vs 直觉 (N)',
        TF: '思考 (T) vs 情感 (F)',
        JP: '判断 (J) vs 知觉 (P)'
    };
    return labels[dimension] || dimension;
}

function getCognitiveFunctionDescription(func) {
    const descriptions = {
        Te: '外向思维：注重效率和逻辑的决策方式',
        Ti: '内向思维：深入的独立思考和分析能力',
        Fe: '外向情感：善于营造和谐的人际关系',
        Fi: '内向情感：强烈的个人价值观和真诚',
        Se: '外向感知：善于把握当下和实践能力',
        Si: '内向感知：重视传统和稳定的生活方式',
        Ne: '外向直觉：创新思维和探索可能性',
        Ni: '内向直觉：深刻的洞察力和远见'
    };
    return descriptions[func] || func;
}
function showResults() {
    const resultCard = document.querySelector('.result-card');
    resultCard.style.display = 'block';

    if (currentTestType === 'personality') {
        const type = calculateType();
        resultCard.innerHTML = `
    <h3>你的MBTI类型可能是：</h3>
    <div class="result-details">
        <p><strong>${type}</strong> - ${mbtiTypes[type].name}</p>
        <p>这个结果仅供参考，建议进行更详细的专业测试。</p>
    </div>
`;
    } else {
        const preferences = calculateWeightedPreference(answers.relationship);
        const idealTypes = calculateIdealTypes(preferences);

        resultCard.innerHTML = `
    <h3>你的理想伴侣类型可能是：</h3>
    <div class="result-details">
        <div style="margin-bottom: 1rem;">
            <strong>首选类型：</strong>
            <p>${idealTypes[0]} - ${mbtiTypes[idealTypes[0]].name}</p>
            <div style="
                background: var(--bg-gray);
                padding: 1rem;
                border-radius: 0.5rem;
                margin-top: 0.5rem;
                color: var(--text-gray);
            ">
                ${typeDescriptions[idealTypes[0]]}
            </div>
        </div>
        
        <div style="margin-top: 1.5rem;">
            <strong>其他潜在匹配类型：</strong>
            <div style="
                display: grid;
                gap: 0.5rem;
                margin-top: 0.5rem;
            ">
                ${idealTypes.slice(1).map(type => `
                    <div style="
                        background: var(--bg-gray);
                        padding: 0.5rem;
                        border-radius: 0.5rem;
                        color: var(--text-gray);
                    ">
                        ${type} - ${mbtiTypes[type].name}
                    </div>
                `).join('')}
            </div>
        </div>
        
        <p style="
            margin-top: 1.5rem;
            padding: 1rem;
            background: var(--bg-gray);
            border-radius: 0.5rem;
            color: var(--text-gray);
        ">注意：这个结果仅供参考。真实的感情关系还需要双方的用心经营和相互理解。</p>
    </div>
`;
    }

    document.querySelector('.test-button').style.display = 'block';
    document.querySelector('.question-container').innerHTML = '';
}

function calculateType() {
    const personalityAnswers = answers.personality;
    const type = [
        personalityAnswers.E > personalityAnswers.I ? 'E' : 'I',
        personalityAnswers.S > personalityAnswers.N ? 'S' : 'N',
        personalityAnswers.T > personalityAnswers.F ? 'T' : 'F',
        personalityAnswers.J > personalityAnswers.P ? 'J' : 'P'
    ].join('');
    return type;
}
function renderLoveGuide(type) {
    const container = document.querySelector('.love-guide');
    if (!type || !loveGuides[type]) {
        container.innerHTML = '';
        return;
    }

    const guide = loveGuides[type];
    container.innerHTML = `
<div style="background: white; border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; box-shadow: var(--card-shadow);">
    <h3 style="color: var(--primary-color); margin-bottom: 1.5rem;">恋爱特质</h3>
    <div style="display: grid; gap: 1rem;">
        ${guide.traits.map(trait => `
            <div style="
                background: var(--bg-gray);
                padding: 1rem;
                border-radius: 0.5rem;
                color: var(--text-gray);
            ">${trait}</div>
        `).join('')}
    </div>
</div>

<div style="background: white; border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; box-shadow: var(--card-shadow);">
    <h3 style="color: var(--primary-color); margin-bottom: 1.5rem;">关系优势</h3>
    <div style="display: grid; gap: 1rem;">
        ${guide.strengths.map(strength => `
            <div style="
                background: var(--bg-gray);
                padding: 1rem;
                border-radius: 0.5rem;
                color: var(--text-gray);
            ">${strength}</div>
        `).join('')}
    </div>
</div>

<div style="background: white; border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; box-shadow: var(--card-shadow);">
    <h3 style="color: var(--primary-color); margin-bottom: 1.5rem;">潜在挑战</h3>
    <div style="display: grid; gap: 1rem;">
        ${guide.challenges.map(challenge => `
            <div style="
                background: var(--bg-gray);
                padding: 1rem;
                border-radius: 0.5rem;
                color: var(--text-gray);
            ">${challenge}</div>
        `).join('')}
    </div>
</div>

<div style="background: white; border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; box-shadow: var(--card-shadow);">
    <h3 style="color: var(--primary-color); margin-bottom: 1.5rem;">成长建议</h3>
    <div style="display: grid; gap: 1rem;">
        ${guide.advice.map(advice => `
            <div style="
                background: var(--bg-gray);
                padding: 1rem;
                border-radius: 0.5rem;
                color: var(--text-gray);
            ">${advice}</div>
        `).join('')}
    </div>
</div>

<div style="background: white; border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; box-shadow: var(--card-shadow);">
    <h3 style="color: var(--primary-color); margin-bottom: 1.5rem;">类型匹配</h3>
    <div style="display: grid; gap: 1rem;">
        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem;">
            <strong style="color: var(--primary-color);">最佳匹配：</strong>
            <div style="color: var(--text-gray);">${guide.compatibility.best.join(', ')}</div>
        </div>
        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem;">
            <strong style="color: var(--primary-color);">良好匹配：</strong>
            <div style="color: var(--text-gray);">${guide.compatibility.good.join(', ')}</div>
        </div>
        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem;">
            <strong style="color: var(--primary-color);">具有挑战：</strong>
            <div style="color: var(--text-gray);">${guide.compatibility.challenging.join(', ')}</div>
        </div>
    </div>
</div>
`;
}
// 事件监听器设置
function setupEventListeners() {
    // MBTI类型选择
    const select = document.getElementById('mbti-select');
    const compareSelect = document.getElementById('compare-select');
    select.addEventListener('change', (e) => {
        const type = e.target.value;
        renderFunctionStack(type);
        renderSocionicsInfo(type);
        renderQuadraInfo(type);
        renderGrowthAdvice(type);
        renderLoveGuide(type);
        if (compareSelect.value) {
            renderComparison(select.value, compareSelect.value);
        }
    });

    // 比较类型选择

    compareSelect.addEventListener('change', (e) => {
        const mainType = select.value;
        const compareType = e.target.value;
        renderComparison(mainType, compareType);
    });

    // 标签切换
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const targetId = tab.dataset.tab;
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(targetId).classList.add('active');

            if (targetId === 'test') {
                startTest();
            }
        });
    });

    // 测试选项点击的处理
    document.querySelector('.test-container').addEventListener('click', async (e) => {
if (!e.target.classList.contains('option')) return;

try {
const questions = currentTestType === 'personality' ? testQuestions : relationshipQuestions;

// 验证当前问题是否有效
if (!questions || !questions[currentQuestion]) {
    console.error('Invalid question index or questions not loaded');
    return;
}

const currentQuestionData = questions[currentQuestion];
const optionIndex = Array.from(e.target.parentNode.children).indexOf(e.target);

// 验证选项索引是否有效
if (optionIndex < 0 || !currentQuestionData.options[optionIndex]) {
    console.error('Invalid option index');
    return;
}

if (currentTestType === 'personality') {
    // 个性测试处理
    const option = currentQuestionData.options[optionIndex];
    if (option && option.type) {
        answers.personality[option.type]++;
    }
} else {
    // 关系测试处理
    const selectedOption = currentQuestionData.options[optionIndex];
    answers.relationship.push({
        question: currentQuestionData,
        selectedOption: selectedOption,
        questionIndex: currentQuestion
    });
}

// 更新问题计数
currentQuestion++;

// 处理测试完成
if (currentQuestion >= questions.length) {
    if (currentTestType === 'personality') {
        showResults();
    } else {
        const results = await calculateMatchResults(answers.relationship);
        showDetailedResults(results);
    }
    document.querySelector('.test-button').style.display = 'block';
} else {
    renderQuestion();
}

// 更新进度条
const progress = document.querySelector('.progress');
if (progress) {
    progress.style.width = `${(currentQuestion / questions.length) * 100}%`;
}

} catch (error) {
console.error('Error in test processing:', error);
}
});
// 重新开始测试按钮
    document.querySelector('.test-button').addEventListener('click', () => {
        startTest();
        document.querySelector('.test-button').style.display = 'none';
    });
}

// 初始化应用
function initializeApp() {
    initializeSelect();
    setupEventListeners();
    renderTestSelection();
}

// 启动应用
document.addEventListener('DOMContentLoaded', initializeApp);