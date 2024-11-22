

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

    <div class="type-dimensions">
        <div class="dimension">
            <strong>${type[0] === 'E' ? '外向 (E)' : '内向 (I)'}</strong><br>
            <span style="font-size: 0.875rem; color: var(--text-gray);">
                ${type[0] === 'E' ? '从外部世界获取能量' : '从内部世界获取能量'}
            </span>
        </div>
        <div class="dimension">
            <strong>${type[1] === 'S' ? '感知 (S)' : '直觉 (N)'}</strong><br>
            <span style="font-size: 0.875rem; color: var(--text-gray);">
                ${type[1] === 'S' ? '关注具体的事实和细节' : '关注概念和可能性'}
            </span>
        </div>
        <div class="dimension">
            <strong>${type[2] === 'T' ? '思考 (T)' : '情感 (F)'}</strong><br>
            <span style="font-size: 0.875rem; color: var(--text-gray);">
                ${type[2] === 'T' ? '基于逻辑做出决策' : '基于价值观做出决策'}
            </span>
        </div>
        <div class="dimension">
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

    <div class="personality-labels">
        ${personalityLabels[type].map(label => `
            <span class="personality-label" data-label="${label}">${label}</span>
        `).join('')}
    </div>

    <div class="label-description"></div>
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

    // 获取类型数据
    const type1Data = {
        stack: mbtiTypes[type1].stack,
        description: typeDescriptions[type1],
        labels: personalityLabels[type1],
        socionics: socionicsTypes[type1]
    };

    const type2Data = {
        stack: mbtiTypes[type2].stack,
        description: typeDescriptions[type2],
        labels: personalityLabels[type2],
        socionics: socionicsTypes[type2]
    };

    container.innerHTML = `
    <div style="grid-column: 1 / -1; background: white; border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; box-shadow: var(--card-shadow);">
        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">类型对比分析</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div>
                <h4 style="margin-bottom: 1rem;">${type1} - ${mbtiTypes[type1].name}</h4>
                <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    ${type1Data.description}
                </div>
            </div>
            <div>
                <h4 style="margin-bottom: 1rem;">${type2} - ${mbtiTypes[type2].name}</h4>
                <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    ${type2Data.description}
                </div>
            </div>
        </div>
    </div>

    <div style="grid-column: 1 / -1; background: white; border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; box-shadow: var(--card-shadow);">
        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">认知功能对比</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div>
                ${renderFunctionStackHTML(type1Data.stack)}
            </div>
            <div>
                ${renderFunctionStackHTML(type2Data.stack)}
            </div>
        </div>
    </div>

    <div style="grid-column: 1 / -1; background: white; border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; box-shadow: var(--card-shadow);">
        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">性格特质对比</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div>
                <div class="personality-labels">
                    ${type1Data.labels.map(label => `
                        <span class="personality-label">${label}</span>
                    `).join('')}
                </div>
            </div>
            <div>
                <div class="personality-labels">
                    ${type2Data.labels.map(label => `
                        <span class="personality-label">${label}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    </div>

    <div style="grid-column: 1 / -1; background: white; border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; box-shadow: var(--card-shadow);">
        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">社会角色对比</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div>
                <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem;">
                    <h4 style="margin-bottom: 0.5rem;">Socionics类型：${type1Data.socionics.type}</h4>
                    <p style="color: var(--text-gray);">${type1Data.socionics.description}</p>
                </div>
            </div>
            <div>
                <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem;">
                    <h4 style="margin-bottom: 0.5rem;">Socionics类型：${type2Data.socionics.type}</h4>
                    <p style="color: var(--text-gray);">${type2Data.socionics.description}</p>
                </div>
            </div>
        </div>
    </div>

    <div style="grid-column: 1 / -1; background: white; border-radius: 1rem; padding: 2rem; box-shadow: var(--card-shadow);">
        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">互动模式分析</h3>
        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">沟通方式差异</h4>
            <p style="color: var(--text-gray);">
                ${type1}类型倾向于${getCommunicationStyle(type1)}，而${type2}类型倾向于${getCommunicationStyle(type2)}。
                在互动过程中，需要注意相互理解和包容这些差异。
            </p>
        </div>
        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">优势互补</h4>
            <p style="color: var(--text-gray);">
                ${getComplementaryStrengths(type1, type2)}
            </p>
        </div>
        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem;">
            <h4 style="margin-bottom: 0.5rem;">潜在挑战</h4>
            <p style="color: var(--text-gray);">
                ${getPotentialChallenges(type1, type2)}
            </p>
        </div>
    </div>
    `;
    container.innerHTML += `
    <div style="grid-column: 1 / -1; background: white; border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; box-shadow: var(--card-shadow);">
        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">相处模式分析</h3>
        
        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">互动动态</h4>
            <p style="color: var(--text-gray);">
                ${getInteractionDynamics(type1, type2)}
            </p>
        </div>

        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">能量流动</h4>
            <p style="color: var(--text-gray);">
                ${getEnergyFlow(type1, type2)}
            </p>
        </div>

        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem;">
            <h4 style="margin-bottom: 0.5rem;">决策过程</h4>
            <p style="color: var(--text-gray);">
                ${getDecisionMakingProcess(type1, type2)}
            </p>
        </div>
    </div>

    <div style="grid-column: 1 / -1; background: white; border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; box-shadow: var(--card-shadow);">
        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">成长机会分析</h3>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div>
                <h4 style="margin-bottom: 1rem;">${type1}可以从${type2}学习：</h4>
                <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem;">
                    ${getLearningOpportunities(type1, type2)}
                </div>
            </div>
            <div>
                <h4 style="margin-bottom: 1rem;">${type2}可以从${type1}学习：</h4>
                <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem;">
                    ${getLearningOpportunities(type2, type1)}
                </div>
            </div>
        </div>
    </div>

    <div style="grid-column: 1 / -1; background: white; border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; box-shadow: var(--card-shadow);">
        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">互动建议</h3>
        
        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">沟通建议</h4>
            ${getCommunicationTips(type1, type2)}
        </div>

        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">共处技巧</h4>
            ${getCoexistenceTips(type1, type2)}
        </div>

        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem;">
            <h4 style="margin-bottom: 0.5rem;">成长方向</h4>
            ${getGrowthDirections(type1, type2)}
        </div>
    </div>

    <div style="grid-column: 1 / -1; background: white; border-radius: 1rem; padding: 2rem; box-shadow: var(--card-shadow);">
        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">长期发展建议</h3>
        
        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">共同价值观构建</h4>
            <p style="color: var(--text-gray);">
                ${getValueAlignment(type1, type2)}
            </p>
        </div>

        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">潜在发展方向</h4>
            <p style="color: var(--text-gray);">
                ${getDevelopmentPotential(type1, type2)}
            </p>
        </div>

        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem;">
            <h4 style="margin-bottom: 0.5rem;">平衡策略</h4>
            <p style="color: var(--text-gray);">
                ${getBalanceStrategies(type1, type2)}
            </p>
        </div>
    </div>`;
    container.innerHTML += `
    <div style="grid-column: 1 / -1; background: white; border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; box-shadow: var(--card-shadow);">
        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">认知发展模式</h3>
        
        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">认知互补性</h4>
            ${getCognitiveSynergy(type1, type2)}
        </div>

        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">信息处理方式</h4>
            ${getInformationProcessing(type1, type2)}
        </div>

        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem;">
            <h4 style="margin-bottom: 0.5rem;">思维模式互动</h4>
            ${getThinkingPatterns(type1, type2)}
        </div>
    </div>

    <div style="grid-column: 1 / -1; background: white; border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; box-shadow: var(--card-shadow);">
        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">压力应对分析</h3>
        
        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">压力反应模式</h4>
            ${getStressResponse(type1, type2)}
        </div>

        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">支持策略</h4>
            ${getSupportStrategies(type1, type2)}
        </div>

        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem;">
            <h4 style="margin-bottom: 0.5rem;">恢复方式</h4>
            ${getRecoveryMethods(type1, type2)}
        </div>
    </div>

    <div style="grid-column: 1 / -1; background: white; border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; box-shadow: var(--card-shadow);">
        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">职场协作分析</h3>
        
        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">工作风格比较</h4>
            ${getWorkingStyles(type1, type2)}
        </div>

        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">团队角色</h4>
            ${getTeamRoles(type1, type2)}
        </div>

        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem;">
            <h4 style="margin-bottom: 0.5rem;">协作建议</h4>
            ${getCollaborationTips(type1, type2)}
        </div>
    </div>

    <div style="grid-column: 1 / -1; background: white; border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; box-shadow: var(--card-shadow);">
        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">生活方式整合</h3>
        
        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">日常习惯比较</h4>
            ${getDailyHabits(type1, type2)}
        </div>

        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">休闲活动偏好</h4>
            ${getLeisurePreferences(type1, type2)}
        </div>

        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem;">
            <h4 style="margin-bottom: 0.5rem;">生活节奏调和</h4>
            ${getLifestyleHarmonization(type1, type2)}
        </div>
    </div>

    <div style="grid-column: 1 / -1; background: white; border-radius: 1rem; padding: 2rem; box-shadow: var(--card-shadow);">
        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">深层心理动态</h3>
        
        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">核心需求分析</h4>
            ${getCoreNeeds(type1, type2)}
        </div>

        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.5rem;">潜意识影响</h4>
            ${getUnconsciousDynamics(type1, type2)}
        </div>

        <div style="background: var(--bg-gray); padding: 1rem; border-radius: 0.5rem;">
            <h4 style="margin-bottom: 0.5rem;">成长机遇</h4>
            ${getGrowthOpportunities(type1, type2)}
        </div>
    </div>
`;
}

function getCommunicationStyle(type) {
    const styles = {
        'E': '更直接和外向的表达',
        'I': '更内敛和深思熟虑的表达',
        'S': '关注具体细节和实际经验',
        'N': '关注概念和可能性',
        'T': '偏重逻辑和客观分析',
        'F': '重视情感和价值观',
        'J': '追求明确的结构和计划',
        'P': '保持灵活和开放的态度'
    };
    
    return [styles[type[0]], styles[type[1]], styles[type[2]], styles[type[3]]].join('，');
}

function getComplementaryStrengths(type1, type2) {
    // 根据类型组合分析互补优势
    if (type1[0] !== type2[0]) {
        return '一方的外向特质可以帮助另一方更好地与外界互动，而内向特质则可以帮助伙伴深入思考和反省。这种平衡可以让关系更加完整。';
    }
    if (type1[1] !== type2[1]) {
        return '感知型和直觉型的结合可以带来更全面的视角，既能关注现实细节，又能探索未来可能性。';
    }
    if (type1[2] !== type2[2]) {
        return '思考型和情感型的结合可以在决策时既考虑逻辑和效率，又能顾及人际关系和价值观。';
    }
    return '双方的相似性可以带来更好的理解和共鸣，但也需要注意发展互补的能力。';
}

function getPotentialChallenges(type1, type2) {
    // 分析可能的挑战点
    let challenges = [];
    
    if (type1[0] !== type2[0]) {
        challenges.push('社交能量和需求的差异可能导致误解');
    }
    if (type1[1] !== type2[1]) {
        challenges.push('信息处理和关注点的不同可能造成沟通障碍');
    }
    if (type1[2] !== type2[2]) {
        challenges.push('决策方式的差异可能引发冲突');
    }
    if (type1[3] !== type2[3]) {
        challenges.push('生活方式和规划习惯的不同可能带来摩擦');
    }
    
    return challenges.length > 0 
        ? `主要的挑战包括：${challenges.join('；')}。克服这些挑战需要双方的理解、包容和积极沟通。`
        : '虽然性格相似可能减少冲突，但也要警惕可能的思维定式和视角局限。';
}
function getInteractionDynamics(type1, type2) {
    const dynamics = {
        'EI': '外向型会带动能量流动，内向型提供深度思考',
        'IE': '内向型提供稳定基础，外向型促进社交互动',
        'SN': '感知型关注现实细节，直觉型提供未来展望',
        'NS': '直觉型开拓新可能，感知型确保实际可行',
        'TF': '思考型提供逻辑分析，情感型关注人际和谐',
        'FT': '情感型维护关系健康，思考型提供客观判断',
        'JP': '判断型提供结构规划，感知型带来灵活应变',
        'PJ': '感知型保持开放选项，判断型确保目标达成'
    };

    let result = [];
    for(let i = 0; i < 4; i++) {
        if(type1[i] !== type2[i]) {
            result.push(dynamics[type1[i] + type2[i]]);
        }
    }

    return result.length > 0 ? result.join('。') + '。' : 
        '双方的相似性有助于相互理解，但也需要注意避免共同的盲点。';
}

function getEnergyFlow(type1, type2) {
    if(type1[0] !== type2[0]) {
        return `${type1[0] === 'E' ? type1 : type2}类型倾向于引导外部能量和社交互动，而${type1[0] === 'I' ? type1 : type2}类型则提供内在的深度和反思。这种能量的互补可以创造动态平衡。`;
    }
    return '双方的能量方向相似，可以很好地理解彼此的社交需求和独处需要，但要注意避免能量过度集中或消耗。';
}

function getDecisionMakingProcess(type1, type2) {
    let process = '';
    if(type1[2] !== type2[2]) {
        process += `${type1[2] === 'T' ? type1 : type2}类型倾向于基于逻辑和客观分析做决定，而${type1[2] === 'F' ? type1 : type2}类型更注重价值观和人际影响。`;
    } else {
        process += '双方的决策倾向相似，';
    }
    
    if(type1[3] !== type2[3]) {
        process += `${type1[3] === 'J' ? type1 : type2}类型偏好提前计划和做出决定，而${type1[3] === 'P' ? type1 : type2}类型倾向于保持选项开放和灵活应变。`;
    } else {
        process += '在计划和执行方面有相似的偏好。';
    }
    
    return process;
}

function getLearningOpportunities(typeFrom, typeTo) {
    let opportunities = [];
    
    if(typeFrom[0] !== typeTo[0]) {
        opportunities.push(typeFrom[0] === 'E' ? 
            '学习深入思考和独处的价值' : 
            '培养更活跃的社交能力和外在表达');
    }
    
    if(typeFrom[1] !== typeTo[1]) {
        opportunities.push(typeFrom[1] === 'S' ? 
            '发展抽象思维和远见规划能力' : 
            '提升对细节的关注和实践能力');
    }
    
    if(typeFrom[2] !== typeTo[2]) {
        opportunities.push(typeFrom[2] === 'T' ? 
            '增强情感智慧和人际敏感度' : 
            '培养逻辑分析和客观决策能力');
    }
    
    if(typeFrom[3] !== typeTo[3]) {
        opportunities.push(typeFrom[3] === 'J' ? 
            '学习保持灵活和适应变化' : 
            '发展计划和组织能力');
    }

    return opportunities.length > 0 ? 
        `<ul style="list-style-type: disc; padding-left: 1.5rem;">
            ${opportunities.map(opp => `<li style="margin-bottom: 0.5rem; color: var(--text-gray);">${opp}</li>`).join('')}
        </ul>` : 
        '<p style="color: var(--text-gray);">性格相似可以加深理解，建议共同探索新的成长方向。</p>';
}

function getCommunicationTips(type1, type2) {
    let tips = [];
    
    if(type1[0] !== type2[0]) {
        tips.push(`外向型（${type1[0] === 'E' ? type1 : type2}）需要给予内向型（${type1[0] === 'I' ? type1 : type2}）足够的独处时间和空间。`);
        tips.push(`内向型需要主动表达需求，外向型则需要学会倾听和等待。`);
    }
    
    if(type1[1] !== type2[1]) {
        tips.push(`感知型（${type1[1] === 'S' ? type1 : type2}）分享具体细节时，直觉型（${type1[1] === 'N' ? type1 : type2}）需要保持耐心。`);
        tips.push(`直觉型讨论抽象概念时，感知型需要寻求具体例子。`);
    }
    
    return tips.length > 0 ? 
        `<ul style="list-style-type: disc; padding-left: 1.5rem;">
            ${tips.map(tip => `<li style="margin-bottom: 0.5rem; color: var(--text-gray);">${tip}</li>`).join('')}
        </ul>` :
        '<p style="color: var(--text-gray);">沟通方式相似，可以专注于深化理解和拓展视角。</p>';
}

function getCoexistenceTips(type1, type2) {
    let tips = [];
    
    if(type1[2] !== type2[2]) {
        tips.push(`思考型（${type1[2] === 'T' ? type1 : type2}）需要更多地表达关心和理解。`);
        tips.push(`情感型（${type1[2] === 'F' ? type1 : type2}）可以学习客观分析问题。`);
    }
    
    if(type1[3] !== type2[3]) {
        tips.push(`判断型（${type1[3] === 'J' ? type1 : type2}）需要学会适度放松计划。`);
        tips.push(`感知型（${type1[3] === 'P' ? type1 : type2}）可以配合一些基本规划。`);
    }
    
    return tips.length > 0 ? 
        `<ul style="list-style-type: disc; padding-left: 1.5rem;">
            ${tips.map(tip => `<li style="margin-bottom: 0.5rem; color: var(--text-gray);">${tip}</li>`).join('')}
        </ul>` :
        '<p style="color: var(--text-gray);">生活方式相似，可以共同建立舒适的生活节奏。</p>';
}

function getGrowthDirections(type1, type2) {
    let directions = [
        '共同发展的领域：',
        '- 培养互补优势，弥补各自不足',
        '- 建立有效的沟通模式',
        '- 发展共同兴趣和活动',
        '- 创造成长的支持系统',
        '- 保持开放和包容的态度'
    ];

    return `<ul style="list-style-type: none; padding-left: 0;">
        ${directions.map(dir => `<li style="margin-bottom: 0.5rem; color: var(--text-gray);">${dir}</li>`).join('')}
    </ul>`;
}

function getValueAlignment(type1, type2) {
    return `建议关注以下方面来构建共同价值观：
    1. 相互理解和尊重各自的核心价值观
    2. 找到共同的生活目标和理想
    3. 建立共同的决策机制
    4. 创造共享的生活愿景
    5. 保持开放对话，持续调整和成长`;
}

function getDevelopmentPotential(type1, type2) {
    return `双方可以在以下领域共同发展：
    1. 互补能力的培养和分享
    2. 建立共同的兴趣和目标
    3. 创造互相支持的成长环境
    4. 发展更深层的理解和连接
    5. 探索新的互动和合作方式`;
}

function getBalanceStrategies(type1, type2) {
    return `平衡双方差异的建议策略：
    1. 建立清晰的沟通机制
    2. 保持适度的独立空间
    3. 创造共同的生活规律
    4. 定期进行深入交流
    5. 保持灵活和开放的心态`;
}
function getCognitiveSynergy(type1, type2) {
    const stack1 = mbtiTypes[type1].stack;
    const stack2 = mbtiTypes[type2].stack;
    
    let synergy = '<ul style="list-style-type: disc; padding-left: 1.5rem;">';
    
    // 分析主导功能的互动
    synergy += `<li style="margin-bottom: 0.5rem; color: var(--text-gray);">
        主导功能互动：${stack1[0]}与${stack2[0]}的协同效应
        ${analyzeDominantInteraction(stack1[0], stack2[0])}
    </li>`;
    
    // 分析辅助功能的配合
    synergy += `<li style="margin-bottom: 0.5rem; color: var(--text-gray);">
        辅助功能配合：${stack1[1]}与${stack2[1]}的互补作用
        ${analyzeAuxiliaryInteraction(stack1[1], stack2[1])}
    </li>`;
    
    synergy += '</ul>';
    return synergy;
}

function getInformationProcessing(type1, type2) {
    const processStyles = {
        'Se': '关注直接经验和感官信息',
        'Si': '重视过往经验和具体细节',
        'Ne': '探索可能性和新联系',
        'Ni': '寻找深层含义和未来趋势',
        'Te': '关注逻辑和效率',
        'Ti': '追求内在理解和分析',
        'Fe': '考虑群体和谐和情感需求',
        'Fi': '基于个人价值观做决定'
    };
    
    const style1 = mbtiTypes[type1].stack.slice(0, 2);
    const style2 = mbtiTypes[type2].stack.slice(0, 2);
    
    return `<ul style="list-style-type: disc; padding-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            ${type1}：${style1.map(s => processStyles[s]).join('，')}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            ${type2}：${style2.map(s => processStyles[s]).join('，')}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            互补建议：${getProcessingComplementarity(style1, style2)}
        </li>
    </ul>`;
}

function getThinkingPatterns(type1, type2) {
    return `<ul style="list-style-type: disc; padding-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            思维特点对比：${compareThinkingStyles(type1, type2)}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            决策方式互补：${analyzeDecisionMaking(type1, type2)}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            问题解决策略：${getProblemSolvingApproach(type1, type2)}
        </li>
    </ul>`;
}

function getStressResponse(type1, type2) {
    return `<ul style="list-style-type: disc; padding-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            ${type1}的压力反应：${getTypeStressResponse(type1)}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            ${type2}的压力反应：${getTypeStressResponse(type2)}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            互助建议：${getStressSupportSuggestions(type1, type2)}
        </li>
    </ul>`;
}

function getSupportStrategies(type1, type2) {
    return `<ul style="list-style-type: disc; padding-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            情绪支持方式：${getEmotionalSupport(type1, type2)}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            实际帮助方式：${getPracticalSupport(type1, type2)}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            长期支持策略：${getLongTermSupport(type1, type2)}
        </li>
    </ul>`;
}

function getRecoveryMethods(type1, type2) {
    return `<ul style="list-style-type: disc; padding-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            个人恢复方式：${getPersonalRecovery(type1, type2)}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            共同恢复活动：${getJointRecovery(type1, type2)}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            恢复环境营造：${getRecoveryEnvironment(type1, type2)}
        </li>
    </ul>`;
}

function getWorkingStyles(type1, type2) {
    return `<ul style="list-style-type: disc; padding-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            工作方式比较：${compareWorkStyles(type1, type2)}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            效率优化建议：${getEfficiencyTips(type1, type2)}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            协作模式建议：${getCollaborationMode(type1, type2)}
        </li>
    </ul>`;
}

function getTeamRoles(type1, type2) {
    return `<ul style="list-style-type: disc; padding-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            角色优势：${getTeamStrengths(type1, type2)}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            互补作用：${getTeamComplementarity(type1, type2)}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            潜在挑战：${getTeamChallenges(type1, type2)}
        </li>
    </ul>`;
}

function getCollaborationTips(type1, type2) {
    return `<ul style="list-style-type: disc; padding-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            沟通策略：${getCommunicationStrategy(type1, type2)}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            任务分配：${getTaskAllocation(type1, type2)}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            冲突处理：${getConflictResolution(type1, type2)}
        </li>
    </ul>`;
}

function getDailyHabits(type1, type2) {
    return `<ul style="list-style-type: disc; padding-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            作息规律：${getRoutineComparison(type1, type2)}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            生活习惯：${getHabitComparison(type1, type2)}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            调和建议：${getHabitHarmonization(type1, type2)}
        </li>
    </ul>`;
}
// --- 生活方式分析相关函数 ---
function getLeisurePreferences(type1, type2) {
    const preferences = {
        'E': ['社交活动', '群体运动', '热闹的环境'],
        'I': ['独处活动', '个人爱好', '安静的环境'],
        'S': ['具体的体验', '实际的活动', '传统的娱乐'],
        'N': ['探索新事物', '创意活动', '非常规体验'],
        'T': ['智力挑战', '策略游戏', '技术相关'],
        'F': ['艺术欣赏', '情感交流', '人文活动'],
        'J': ['规划的活动', '有组织的项目', '固定的习惯'],
        'P': ['即兴活动', '灵活的安排', '自发的体验']
    };

    return `<ul style="list-style-type: disc; padding-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            ${type1}偏好：${preferences[type1[0]].concat(preferences[type1[1]], preferences[type1[2]], preferences[type1[3]]).join('、')}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            ${type2}偏好：${preferences[type2[0]].concat(preferences[type2[1]], preferences[type2[2]], preferences[type2[3]]).join('、')}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            共同活动建议：${getSharedActivities(type1, type2)}
        </li>
    </ul>`;
}

function getLifestyleHarmonization(type1, type2) {
    const lifestylePatterns = {
        'J': {
            routine: '规律的生活方式',
            planning: '提前规划',
            organization: '有序的环境'
        },
        'P': {
            routine: '灵活的生活方式',
            planning: '即兴决定',
            organization: '适应性强的环境'
        }
    };

    let harmonization = '<ul style="list-style-type: disc; padding-left: 1.5rem;">';
    
    if (type1[3] === type2[3]) {
        harmonization += `<li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            生活节奏相似，可以轻松建立共同的生活模式
        </li>`;
    } else {
        harmonization += `<li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            ${type1}倾向${lifestylePatterns[type1[3]].routine}，而${type2}倾向${lifestylePatterns[type2[3]].routine}，
            需要通过沟通找到平衡点
        </li>`;
    }

    harmonization += `<li style="margin-bottom: 0.5rem; color: var(--text-gray);">
        调和建议：${getHarmonizationTips(type1, type2)}
    </li>`;

    harmonization += '</ul>';
    return harmonization;
}

function getHarmonizationTips(type1, type2) {
    let tips = [];
    
    // 基于外向/内向维度的建议
    if (type1[0] !== type2[0]) {
        tips.push('在社交活动和独处时间上达成平衡');
    }
    
    // 基于感知/直觉维度的建议
    if (type1[1] !== type2[1]) {
        tips.push('结合实际需求和创新想法来规划生活');
    }
    
    // 基于思考/情感维度的建议
    if (type1[2] !== type2[2]) {
        tips.push('在理性决策和情感需求之间找到平衡点');
    }
    
    // 基于判断/知觉维度的建议
    if (type1[3] !== type2[3]) {
        tips.push('在计划性和灵活性之间取得平衡');
    }
    
    return tips.join('；');
}

// --- 核心需求分析相关函数 ---
function getCoreNeeds(type1, type2) {
    const coreNeeds = {
        'INTJ': ['独立思考', '实现目标', '持续改进', '战略规划'],
        'INTP': ['理解原理', '探索可能', '逻辑分析', '智识追求'],
        'ENTJ': ['掌控局面', '实现目标', '系统效率', '长期规划'],
        'ENTP': ['创新可能', '智识挑战', '灵活应变', '探索新知'],
        'INFJ': ['理解意义', '和谐关系', '个人成长', '实现理想'],
        'INFP': ['价值认同', '真实表达', '个人成长', '理想追求'],
        'ENFJ': ['帮助他人', '和谐关系', '团队发展', '积极影响'],
        'ENFP': ['探索可能', '真实表达', '创新体验', '情感联结'],
        'ISTJ': ['秩序规范', '责任履行', '系统效率', '稳定保障'],
        'ISFJ': ['助人行善', '稳定和谐', '责任履行', '照顾他人'],
        'ESTJ': ['效率执行', '秩序管理', '目标达成', '规范遵守'],
        'ESFJ': ['和谐关系', '照顾他人', '团队合作', '传统价值'],
        'ISTP': ['技术精通', '独立自主', '问题解决', '实践操作'],
        'ISFP': ['审美体验', '价值表达', '个人空间', '当下体验'],
        'ESTP': ['即时行动', '实践体验', '问题解决', '把握机会'],
        'ESFP': ['生活体验', '社交互动', '即时快乐', '自由表达']
    };

    return `<ul style="list-style-type: disc; padding-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            ${type1}核心需求：${coreNeeds[type1].join('、')}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            ${type2}核心需求：${coreNeeds[type2].join('、')}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            需求协调建议：${getNeedsAlignment(type1, type2)}
        </li>
    </ul>`;
}

function getUnconsciousDynamics(type1, type2) {
    const dynamics = {
        'shadow': getShadowFunctions(type1, type2),
        'stress': getStressBehaviors(type1, type2),
        'growth': getGrowthPotential(type1, type2)
    };

    return `<ul style="list-style-type: disc; padding-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            影子功能互动：${dynamics.shadow}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            压力行为模式：${dynamics.stress}
        </li>
        <li style="margin-bottom: 0.5rem; color: var(--text-gray);">
            成长潜力：${dynamics.growth}
        </li>
    </ul>`;
}

function getShadowFunctions(type1, type2) {
    const stack1 = mbtiTypes[type1].stack;
    const stack2 = mbtiTypes[type2].stack;
    
    // 获取影子功能（第5-8位的功能）
    const shadows1 = stack1.slice(4);
    const shadows2 = stack2.slice(4);
    
    return `${type1}的影子功能（${shadows1.join(', ')}）与${type2}的影子功能（${shadows2.join(', ')}）
        可能在压力情况下相互触发，需要注意相互理解和支持。`;
}

// --- 团队协作分析相关函数 ---
function getTeamStrengths(type1, type2) {
    const strengths = {
        'INTJ': ['战略规划', '系统思维', '独立工作能力'],
        'INTP': ['概念创新', '逻辑分析', '问题解决'],
        'ENTJ': ['领导决策', '目标达成', '组织管理'],
        'ENTP': ['创意思维', '适应变化', '方案创新'],
        'INFJ': ['远见卓识', '人际洞察', '协调能力'],
        'INFP': ['创意表达', '价值坚守', '个人辅导'],
        'ENFJ': ['团队建设', '人才培养', '愿景传达'],
        'ENFP': ['激发热情', '创新思维', '关系建立'],
        'ISTJ': ['执行力强', '细节把控', '流程优化'],
        'ISFJ': ['任务可靠', '团队支持', '服务精神'],
        'ESTJ': ['项目管理', '效率提升', '标准制定'],
        'ESFJ': ['团队协作', '关系维护', '服务导向'],
        'ISTP': ['技术精专', '危机处理', '实践能力'],
        'ISFP': ['艺术创造', '和谐维护', '实践技能'],
        'ESTP': ['资源调配', '现场应变', '问题解决'],
        'ESFP': ['人际互动', '团队活力', '实践导向']
    };

    return `${type1}的团队优势（${strengths[type1].join('、')}）与
            ${type2}的团队优势（${strengths[type2].join('、')}）
            可以形成良好的互补。`;
}

function getTeamComplementarity(type1, type2) {
    let complementarity = [];
    
    // 分析思维方式互补
    if (type1[1] !== type2[1]) {
        complementarity.push(type1[1] === 'S' ? 
            `${type1}提供实际观点，${type2}提供创新思维` :
            `${type1}提供创新思维，${type2}提供实际观点`);
    }
    
    // 分析决策方式互补
    if (type1[2] !== type2[2]) {
        complementarity.push(type1[2] === 'T' ?
            `${type1}提供逻辑分析，${type2}关注人际影响` :
            `${type1}关注人际影响，${type2}提供逻辑分析`);
    }
    
    // 分析工作方式互补
    if (type1[3] !== type2[3]) {
        complementarity.push(type1[3] === 'J' ?
            `${type1}提供规划结构，${type2}带来灵活应变` :
            `${type1}带来灵活应变，${type2}提供规划结构`);
    }
    
    return complementarity.join('；');
}

function getTeamChallenges(type1, type2) {
    let challenges = [];
    
    // 分析潜在的沟通挑战
    if (type1[0] !== type2[0]) {
        challenges.push('信息交流方式的差异可能导致沟通障碍');
    }
    
    // 分析决策冲突
    if (type1[2] !== type2[2]) {
        challenges.push('决策标准的不同可能导致意见分歧');
    }
    
    // 分析工作节奏差异
    if (type1[3] !== type2[3]) {
        challenges.push('工作步调的差异可能造成配合困难');
    }
    
    return challenges.join('；');
}

// --- 压力管理相关函数 ---
function getTypeStressResponse(type) {
    const stressResponses = {
        'INTJ': ['退缩到内心世界', '变得异常批判', '忽视他人感受'],
        'INTP': ['变得情绪化', '过度分析', '难以做决定'],
        'ENTJ': ['变得控制欲强', '情绪爆发', '忽视细节'],
        'ENTP': ['变得焦虑不安', '过度思考', '忽视现实需求'],
        'INFJ': ['退缩封闭', '过度敏感', '自我怀疑'],
        'INFP': ['情绪波动大', '自我批判', '回避现实'],
        'ENFJ': ['变得控制欲强', '情绪化', '自我怀疑'],
        'ENFP': ['变得焦躁', '难以专注', '情绪波动'],
        'ISTJ': ['变得固执', '过分关注细节', '情绪压抑'],
        'ISFJ': ['变得焦虑', '过度担忧', '难以拒绝'],
        'ESTJ': ['变得专制', '情绪爆发', '过度批评'],
        'ESFJ': ['变得过度敏感', '寻求认可', '情绪化'],
        'ISTP': ['退缩封闭', '变得冷漠', '忽视感受'],
        'ISFP': ['退缩回避', '情绪化', '自我怀疑'],
        'ESTP': ['变得冲动', '寻求刺激', '忽视后果'],
        'ESFP': ['变得焦虑', '寻求关注', '逃避责任']
    };

    return stressResponses[type].join('；');
}

function getStressSupportSuggestions(type1, type2) {
    let suggestions = [];
    
    // 基于外向/内向维度的支持建议
    if (type1[0] !== type2[0]) {
        suggestions.push(type1[0] === 'E' ?
            `${type2}需要给予${type1}表达和互动的空间` :
            `${type2}需要理解${type1}需要独处的时间`);
    }
    
    // 基于思考/情感维度的支持建议
    if (type1[2] !== type2[2]) {
        suggestions.push(type1[2] === 'T' ?
            `${type2}需要给予${type1}理性分析的时间` :
            `${type2}需要关注${type1}的情感需求`);
    }
    
    return suggestions.join('；');
}

// --- 其他辅助函数 ---
function getSharedActivities(type1, type2) {
    const activities = [];
    
    // 基于共同偏好推荐活动
    if (type1[0] === type2[0]) {
        activities.push(type1[0] === 'E' ? 
            '可以一起参加社交活动和群体运动' : 
            '可以一起进行安静的独处活动');
    }
    
    if (type1[1] === type2[1]) {
        activities.push(type1[1] === 'S' ? 
            '享受具体的实践活动' : 
            '探索创意和概念性的活动');
    }
    
    if (type1[2] === type2[2]) {
        activities.push(type1[2] === 'T' ? 
            '参与智力挑战和策略游戏' : 
            '从事艺术和人文活动');
    }
    
    return activities.join('；');
}

// --- 工作风格分析相关函数 ---
function compareWorkStyles(type1, type2) {
    const workStyles = {
        'INTJ': ['独立工作', '长期规划', '追求完美'],
        'INTP': ['独立研究', '概念创新', '深入分析'],
        'ENTJ': ['团队领导', '目标驱动', '效率至上'],
        'ENTP': ['创新思维', '灵活应变', '方案设计'],
        'INFJ': ['独立思考', '人际洞察', '价值导向'],
        'INFP': ['独立创作', '价值驱动', '追求理想'],
        'ENFJ': ['团队协作', '人际关注', '目标导向'],
        'ENFP': ['创意表达', '人际互动', '灵活多变'],
        'ISTJ': ['系统有序', '细节关注', '可靠稳定'],
        'ISFJ': ['责任驱动', '细节关注', '服务导向'],
        'ESTJ': ['结构化工作', '效率驱动', '目标明确'],
        'ESFJ': ['团队合作', '关系导向', '服务精神'],
        'ISTP': ['实践导向', '问题解决', '灵活应变'],
        'ISFP': ['实践创新', '价值导向', '灵活适应'],
        'ESTP': ['行动导向', '现实应对', '灵活机动'],
        'ESFP': ['团队互动', '实践导向', '灵活适应']
    };

    return `${type1}的工作风格（${workStyles[type1].join('、')}）与
            ${type2}的工作风格（${workStyles[type2].join('、')}）的比较和互补。`;
}

function getEfficiencyTips(type1, type2) {
    let tips = [];
    
    // 基于判断/知觉维度的效率建议
    if (type1[3] !== type2[3]) {
        tips.push(type1[3] === 'J' ?
            `${type1}可以帮助建立结构，${type2}可以提供灵活性` :
            `${type1}可以提供灵活性，${type2}可以帮助建立结构`);
    }
    
    // 基于思考/情感维度的效率建议
    if (type1[2] !== type2[2]) {
        tips.push(type1[2] === 'T' ?
            `${type1}可以提供逻辑分析，${type2}可以关注团队和谐` :
            `${type1}可以关注团队和谐，${type2}可以提供逻辑分析`);
    }
    
    return tips.join('；');
}

function getCollaborationMode(type1, type2) {
    let modes = [];
    
    // 分析协作模式
    if (type1[0] === type2[0]) {
        modes.push(type1[0] === 'E' ?
            '可以采用开放式协作，多进行即时沟通' :
            '可以采用独立工作为主，定期同步的模式');
    } else {
        modes.push('需要平衡独立工作和团队互动的时间');
    }
    
    // 分析决策模式
    if (type1[2] === type2[2]) {
        modes.push(type1[2] === 'T' ?
            '可以采用基于数据和逻辑的决策模式' :
            '可以采用基于共识和价值观的决策模式');
    } else {
        modes.push('需要兼顾逻辑分析和价值考量');
    }
    
    return modes.join('；');
}

function analyzeDominantInteraction(func1, func2) {
    // 认知功能互动分析表
    const interactionMap = {
        'Ti': {
            'Ti': '双方都重视逻辑分析，可能形成深入的理论讨论',
            'Te': '内外逻辑思维的结合，有助于全面的问题解决',
            'Fi': '逻辑与价值观的碰撞，需要相互理解和包容',
            'Fe': '个人逻辑与群体和谐的平衡',
            'Si': '逻辑分析与经验细节的结合',
            'Se': '理论分析与实践行动的互补',
            'Ni': '深度思考与直觉洞察的结合',
            'Ne': '逻辑分析与创新思维的激发'
        },
        'Te': {
            'Ti': '外部效率与内部逻辑的结合',
            'Te': '高效的执行力，但可能忽视灵活性',
            'Fi': '效率与价值观的平衡需求',
            'Fe': '组织效率与人际和谐的结合',
            'Si': '系统执行与细节把控的结合',
            'Se': '效率导向与实践应变的配合',
            'Ni': '执行效率与战略眼光的结合',
            'Ne': '系统效率与创新可能的平衡'
        },
        'Fi': {
            'Ti': '个人价值与逻辑分析的平衡',
            'Te': '内在价值与外部效率的协调',
            'Fi': '强烈的价值认同，但需要客观视角',
            'Fe': '个人与群体价值观的调和',
            'Si': '价值观与传统经验的结合',
            'Se': '价值追求与现实体验的平衡',
            'Ni': '价值理想与远见卓识的结合',
            'Ne': '个人价值与可能性探索的融合'
        },
        'Fe': {
            'Ti': '群体和谐与逻辑分析的平衡',
            'Te': '人际关系与效率系统的结合',
            'Fi': '外部和谐与内在价值的调和',
            'Fe': '强大的群体凝聚力，但需要独立思考',
            'Si': '群体传统与情感联结的维护',
            'Se': '社交互动与即时应变的结合',
            'Ni': '群体和谐与未来洞察的结合',
            'Ne': '人际互动与创新思维的激发'
        },
        'Si': {
            'Ti': '经验细节与逻辑分析的结合',
            'Te': '传统执行与系统效率的配合',
            'Fi': '经验累积与价值判断的结合',
            'Fe': '传统维护与群体和谐的平衡',
            'Si': '深厚的经验积累，但需要创新视角',
            'Se': '内外感知经验的互补',
            'Ni': '传统经验与未来洞察的平衡',
            'Ne': '稳定基础与创新可能的结合'
        },
        'Se': {
            'Ti': '实践行动与逻辑分析的互补',
            'Te': '现实应变与效率系统的结合',
            'Fi': '感官体验与价值追求的平衡',
            'Fe': '实践互动与群体和谐的配合',
            'Si': '当下体验与经验参考的结合',
            'Se': '强大的实践能力，但需要深度思考',
            'Ni': '当下行动与远见规划的平衡',
            'Ne': '实践探索与创新思维的激发'
        },
        'Ni': {
            'Ti': '直觉洞察与逻辑分析的结合',
            'Te': '远见规划与执行效率的配合',
            'Fi': '未来愿景与价值追求的融合',
            'Fe': '远见卓识与群体利益的平衡',
            'Si': '未来展望与经验借鉴的结合',
            'Se': '战略眼光与实践行动的互补',
            'Ni': '强大的远见能力，但需要务实检验',
            'Ne': '深度洞察与创新思维的激发'
        },
        'Ne': {
            'Ti': '创新思维与逻辑分析的结合',
            'Te': '创意发想与系统执行的平衡',
            'Fi': '可能性探索与价值追求的融合',
            'Fe': '创新带动与群体互动的配合',
            'Si': '创新思维与经验基础的结合',
            'Se': '创意发想与实践探索的互补',
            'Ni': '表面创新与深度洞察的结合',
            'Ne': '丰富的创新能力，但需要务实执行'
        }
    };

    return interactionMap[func1][func2] || 
           interactionMap[func2][func1] || 
           '需要进一步探索互动模式';
}

function analyzeAuxiliaryInteraction(func1, func2) {
    // 辅助功能互动分析
    let analysis = '';
    
    // 判断是否为互补功能
    const isComplementary = (f1, f2) => {
        const complementaryPairs = {
            'Ti': ['Fe', 'Se', 'Ne'],
            'Te': ['Fi', 'Si', 'Ni'],
            'Fi': ['Te', 'Se', 'Ne'],
            'Fe': ['Ti', 'Si', 'Ni'],
            'Si': ['Ne', 'Te', 'Fe'],
            'Se': ['Ni', 'Ti', 'Fi'],
            'Ni': ['Se', 'Te', 'Fe'],
            'Ne': ['Si', 'Ti', 'Fi']
        };
        return complementaryPairs[f1].includes(f2);
    };

    if (func1 === func2) {
        analysis = '辅助功能相同，可能强化某些特质但也可能放大盲点';
    } else if (isComplementary(func1, func2)) {
        analysis = '辅助功能互补，有助于平衡和全面发展';
    } else {
        analysis = '辅助功能差异较大，需要更多理解和适应';
    }

    return analysis + '；' + analyzeDominantInteraction(func1, func2);
}

function analyzeDecisionMaking(type1, type2) {
    const decisionStyles = {
        'TJ': '倾向于基于逻辑和系统的决策',
        'TP': '倾向于灵活的逻辑分析决策',
        'FJ': '倾向于基于价值观和结构的决策',
        'FP': '倾向于灵活的价值导向决策'
    };

    const style1 = `${type1[2]}${type1[3]}`;
    const style2 = `${type2[2]}${type2[3]}`;

    let analysis = `${type1}${decisionStyles[style1]}，而${type2}${decisionStyles[style2]}。`;

    if (style1 === style2) {
        analysis += '决策风格相似，容易达成共识，但要注意避免共同盲点。';
    } else {
        analysis += '决策风格互补，可以实现更全面的考虑，但需要相互理解和包容。';
    }

    return analysis;
}

function compareThinkingStyles(type1, type2) {
    const thinkingPatterns = {
        'NT': '系统的概念思维',
        'NF': '理想化的创新思维',
        'ST': '实用的逻辑思维',
        'SF': '实际的价值思维'
    };

    const pattern1 = `${type1[1]}${type1[2]}`;
    const pattern2 = `${type2[1]}${type2[2]}`;

    return `${type1}表现为${thinkingPatterns[pattern1]}，
            ${type2}表现为${thinkingPatterns[pattern2]}，
            ${pattern1 === pattern2 ? '思维模式相似，易于理解' : '思维模式互补，需要bridge'}`;
}

function getProblemSolvingApproach(type1, type2) {
    const approaches = {
        'TJ': ['系统分析', '目标导向', '效率优先'],
        'TP': ['灵活分析', '探索可能', '适应性强'],
        'FJ': ['价值考量', '共识导向', '关系优先'],
        'FP': ['灵活适应', '价值导向', '创意解决']
    };

    const style1 = `${type1[2]}${type1[3]}`;
    const style2 = `${type2[2]}${type2[3]}`;

    return `${type1}倾向于${approaches[style1].join('、')}的解决方式，
            而${type2}倾向于${approaches[style2].join('、')}的解决方式。
            ${getApproachSuggestion(style1, style2)}`;
}

function getApproachSuggestion(style1, style2) {
    if (style1 === style2) {
        return '解决问题的方式相似，可以快速达成共识，但要注意避免共同的盲点。';
    }

    const suggestions = {
        'TJ-TP': '可以结合系统性和灵活性',
        'TJ-FJ': '可以平衡效率和人际关系',
        'TJ-FP': '需要在结构和灵活性之间找到平衡',
        'TP-FJ': '需要平衡探索性和确定性',
        'TP-FP': '可以结合逻辑分析和价值考量',
        'FJ-FP': '可以平衡共识需求和个人价值'
    };

    const key = [style1, style2].sort().join('-');
    return suggestions[key] || '需要建立互补的问题解决模式';
}
function getProcessingComplementarity(style1, style2) {
    // 定义每种认知功能的信息处理特点
    const processingStyles = {
        'Ti': {
            style: '内部逻辑分析',
            strength: '深入理解概念',
            complement: {
                'Fe': '平衡逻辑分析与人际和谐',
                'Se': '将理论分析与实践体验结合',
                'Ne': '结合系统分析与创新思维',
                'Fi': '整合逻辑思维与价值判断',
                'Te': '连接内部逻辑与外部效率',
                'Si': '结合分析思维与经验积累',
                'Ni': '融合逻辑分析与直觉洞察'
            }
        },
        'Te': {
            style: '外部逻辑组织',
            strength: '系统效率管理',
            complement: {
                'Fi': '平衡效率与价值取向',
                'Si': '结合系统管理与细节执行',
                'Ni': '整合效率管理与战略规划',
                'Ti': '连接外部效率与内部逻辑',
                'Fe': '结合系统管理与人际协调',
                'Se': '融合效率管理与实践应变',
                'Ne': '平衡系统效率与创新思维'
            }
        },
        'Fi': {
            style: '内部价值判断',
            strength: '个人价值认同',
            complement: {
                'Te': '平衡价值判断与效率管理',
                'Se': '结合价值观与现实体验',
                'Ne': '整合价值判断与创新可能',
                'Fe': '连接个人价值与群体和谐',
                'Ti': '融合价值判断与逻辑分析',
                'Si': '结合价值观与传统经验',
                'Ni': '平衡价值追求与远见规划'
            }
        },
        'Fe': {
            style: '外部情感协调',
            strength: '群体和谐维护',
            complement: {
                'Ti': '平衡群体和谐与逻辑分析',
                'Si': '结合人际和谐与经验传承',
                'Ni': '整合群体协调与远见规划',
                'Fi': '连接群体和谐与个人价值',
                'Te': '融合人际协调与效率管理',
                'Se': '结合群体互动与实践体验',
                'Ne': '平衡人际和谐与创新思维'
            }
        },
        'Si': {
            style: '内部感知积累',
            strength: '经验细节把控',
            complement: {
                'Ne': '平衡传统经验与创新思维',
                'Te': '结合经验积累与效率管理',
                'Fe': '整合传统维护与群体和谐',
                'Se': '连接内部经验与外部体验',
                'Ti': '融合经验积累与逻辑分析',
                'Fi': '结合传统经验与价值判断',
                'Ni': '平衡经验参考与未来规划'
            }
        },
        'Se': {
            style: '外部感知体验',
            strength: '现实适应能力',
            complement: {
                'Ni': '平衡现实体验与远见规划',
                'Ti': '结合实践体验与逻辑分析',
                'Fi': '整合感官体验与价值判断',
                'Si': '连接外部体验与内部经验',
                'Te': '融合实践应变与效率管理',
                'Fe': '结合实践体验与群体互动',
                'Ne': '平衡现实体验与创新思维'
            }
        },
        'Ni': {
            style: '内部直觉洞察',
            strength: '远见战略规划',
            complement: {
                'Se': '平衡远见规划与现实体验',
                'Te': '结合战略眼光与效率执行',
                'Fe': '整合远见规划与群体利益',
                'Ne': '连接深度洞察与创新思维',
                'Ti': '融合直觉洞察与逻辑分析',
                'Fi': '结合远见规划与价值追求',
                'Si': '平衡未来规划与经验借鉴'
            }
        },
        'Ne': {
            style: '外部直觉联想',
            strength: '创新可能探索',
            complement: {
                'Si': '平衡创新思维与传统经验',
                'Ti': '结合创新思维与逻辑分析',
                'Fi': '整合创新探索与价值判断',
                'Ni': '连接表面创新与深度洞察',
                'Te': '融合创新思维与效率系统',
                'Fe': '结合创新思维与群体互动',
                'Se': '平衡创意发想与实践探索'
            }
        }
    };

    let complementarityAnalysis = [];

    // 分析每个功能的处理风格
    style1.forEach((func, index) => {
        const func2 = style2[index];
        if (func !== func2) {
            const style1Info = processingStyles[func];
            const style2Info = processingStyles[func2];
            
            // 获取互补关系
            const complementInfo = style1Info.complement[func2];
            
            complementarityAnalysis.push(
                `${func}的${style1Info.style}与${func2}的${style2Info.style}可以${complementInfo}`
            );
        }
    });

    // 如果没有差异，返回相似性分析
    if (complementarityAnalysis.length === 0) {
        return '信息处理方式相似，可以加强优势但需要注意潜在盲点';
    }

    return complementarityAnalysis.join('；') + '。';
}

function analyzeInformationPathways(type1, type2) {
    // 分析信息获取和处理的路径
    const pathways = {
        'N': {
            primary: '概念性信息',
            focus: '潜在可能性',
            strength: '抽象思维'
        },
        'S': {
            primary: '具体信息',
            focus: '现实细节',
            strength: '实践经验'
        },
        'T': {
            process: '逻辑分析',
            emphasis: '客观标准',
            approach: '系统思考'
        },
        'F': {
            process: '价值评估',
            emphasis: '人际影响',
            approach: '情感考量'
        }
    };

    let analysis = [];
    
    // 分析信息获取方式
    if (type1[1] !== type2[1]) {
        analysis.push(`${type1}倾向于通过${pathways[type1[1]].primary}来理解世界，
            关注${pathways[type1[1]].focus}，
            而${type2}更注重${pathways[type2[1]].primary}，
            专注于${pathways[type2[1]].focus}`);
    }

    // 分析信息处理方式
    if (type1[2] !== type2[2]) {
        analysis.push(`${type1}通过${pathways[type1[2]].process}处理信息，
            强调${pathways[type1[2]].emphasis}，
            而${type2}倾向于${pathways[type2[2]].process}，
            注重${pathways[type2[2]].emphasis}`);
    }

    return analysis.length > 0 ? 
        analysis.join('。') + '。这种差异可以带来更全面的信息处理视角。' :
        '信息处理路径相似，可以加强共同优势，但要注意补充其他视角。';
}

function getInformationSynergy(type1, type2) {
    // 分析信息处理的协同效应
    const synergies = {
        'NT': {
            strength: '概念性分析',
            focus: '系统创新',
            challenge: '可能忽视具体细节和人际因素'
        },
        'NF': {
            strength: '创意洞察',
            focus: '价值创新',
            challenge: '可能忽视逻辑验证和实际可行性'
        },
        'ST': {
            strength: '实践分析',
            focus: '效率优化',
            challenge: '可能忽视创新可能和情感因素'
        },
        'SF': {
            strength: '实际关怀',
            focus: '具体服务',
            challenge: '可能忽视系统思考和抽象概念'
        }
    };

    const style1 = `${type1[1]}${type1[2]}`;
    const style2 = `${type2[1]}${type2[2]}`;

    if (style1 === style2) {
        const style = synergies[style1];
        return `双方都擅长${style.strength}，专注于${style.focus}，
                但需要注意${style.challenge}`;
    }

    return `${type1}的${synergies[style1].strength}与${type2}的${synergies[style2].strength}
            可以互补，结合${synergies[style1].focus}和${synergies[style2].focus}的优势，
            互相弥补各自的局限性。`;
}

function getProcessingDevelopment(type1, type2) {
    // 分析信息处理的发展方向
    const developments = {
        'I': {
            focus: '深度处理',
            strength: '独立思考',
            development: '提高外部交流'
        },
        'E': {
            focus: '广度处理',
            strength: '信息获取',
            development: '加强内部整合'
        },
        'N': {
            focus: '模式识别',
            strength: '创新思维',
            development: '增强实践应用'
        },
        'S': {
            focus: '细节观察',
            strength: '实际操作',
            development: '提升抽象思维'
        }
    };

    let suggestions = [];

    // 分析每个维度的发展方向
    ['I/E', 'N/S'].forEach(dimension => {
        const [type1Trait, type2Trait] = [type1, type2].map(t => 
            dimension.includes(t[0]) ? t[0] : t[1]
        );

        if (type1Trait !== type2Trait) {
            suggestions.push(
                `${type1}可以向${type2}学习${developments[type2Trait].strength}，
                ${type2}可以向${type1}学习${developments[type1Trait].strength}`
            );
        }
    });

    return suggestions.length > 0 ?
        suggestions.join('；') + '。' :
        '可以共同发展互补的信息处理能力。';
}

function getEmotionalSupport(type1, type2) {
    // 定义不同类型的情感支持方式
    const supportStyles = {
        'NFJ': {
            style: '深度理解和共情',
            approach: ['提供情感共鸣', '关注长期成长', '给予有意义的建议'],
            strength: '洞察情感需求'
        },
        'NFP': {
            style: '真诚理解和接纳',
            approach: ['倾听和认可感受', '支持自我表达', '提供创意解决方案'],
            strength: '提供情感认同'
        },
        'NTJ': {
            style: '分析和解决导向',
            approach: ['提供理性分析', '帮助制定计划', '寻找根本解决方案'],
            strength: '提供清晰方向'
        },
        'NTP': {
            style: '理解和探索导向',
            approach: ['提供新的视角', '探讨可能性', '寻找创新解决方案'],
            strength: '开拓思维空间'
        },
        'SFJ': {
            style: '实际关怀和照顾',
            approach: ['提供具体帮助', '营造舒适环境', '关注日常需求'],
            strength: '实际生活支持'
        },
        'SFP': {
            style: '轻松和实用支持',
            approach: ['陪伴和分散注意力', '提供实际帮助', '创造愉快体验'],
            strength: '改善当前心情'
        },
        'STJ': {
            style: '实际解决问题',
            approach: ['提供具体建议', '协助制定计划', '采取实际行动'],
            strength: '解决实际问题'
        },
        'STP': {
            style: '行动导向支持',
            approach: ['提供实践方案', '陪伴行动', '寻找直接解决方法'],
            strength: '实践性支持'
        }
    };

    // 获取双方的支持风格
    const style1 = `${type1[1]}${type1[2]}${type1[3]}`;
    const style2 = `${type2[1]}${type2[2]}${type2[3]}`;
    
    const support1 = supportStyles[style1];
    const support2 = supportStyles[style2];

    // 生成互补支持建议
    let suggestions = [];
    
    // 分析支持方式的互补性
    if (support1 && support2) {
        suggestions.push(`${type1}可以通过${support1.style}来支持，特长是${support1.strength}`);
        suggestions.push(`${type2}可以通过${support2.style}来支持，特长是${support2.strength}`);
        
        // 如果风格不同，添加互补建议
        if (style1 !== style2) {
            suggestions.push('建议结合双方优势：');
            suggestions.push(`- ${type1}：${support1.approach.join('、')}`);
            suggestions.push(`- ${type2}：${support2.approach.join('、')}`);
        }
    }

    return suggestions.join('。');
}

function getPracticalSupport(type1, type2) {
    // 定义不同类型的实际支持方式
    const practicalStyles = {
        'NJ': {
            style: '提供长期规划和建议',
            methods: ['帮助制定发展计划', '提供系统性建议', '关注未来发展']
        },
        'NP': {
            style: '提供创新解决方案',
            methods: ['探索多种可能性', '提供灵活建议', '激发新思路']
        },
        'SJ': {
            style: '提供具体实用帮助',
            methods: ['协助日常事务', '建立有效流程', '提供实际资源']
        },
        'SP': {
            style: '提供即时行动支持',
            methods: ['及时解决问题', '提供实践帮助', '陪伴行动']
        },
        'TJ': {
            style: '提供系统性解决方案',
            methods: ['分析问题根源', '制定行动计划', '追踪执行效果']
        },
        'TP': {
            style: '提供灵活解决方案',
            methods: ['分析多个选项', '适应性建议', '解决具体问题']
        },
        'FJ': {
            style: '提供结构化关怀',
            methods: ['关注情感需求', '建立支持系统', '持续跟进反馈']
        },
        'FP': {
            style: '提供灵活关怀',
            methods: ['随时提供支持', '适应需求变化', '创造正面体验']
        }
    };

    // 获取基本支持风格
    const getStyleKey = (type) => `${type[1]}${type[3]}`;
    const getThinkingKey = (type) => `${type[2]}${type[3]}`;

    const style1 = practicalStyles[getStyleKey(type1)];
    const style2 = practicalStyles[getStyleKey(type2)];
    const thinking1 = practicalStyles[getThinkingKey(type1)];
    const thinking2 = practicalStyles[getThinkingKey(type2)];

    let analysis = [];

    // 组合支持建议
    if (style1 && style2) {
        analysis.push(`${type1}倾向于${style1.style}，具体方式包括：${style1.methods.join('、')}`);
        analysis.push(`${type2}倾向于${style2.style}，具体方式包括：${style2.methods.join('、')}`);
    }

    // 添加思维方式的互补建议
    if (thinking1 && thinking2 && getThinkingKey(type1) !== getThinkingKey(type2)) {
        analysis.push('互补支持建议：');
        analysis.push(`- ${type1}可以提供：${thinking1.methods.join('、')}`);
        analysis.push(`- ${type2}可以提供：${thinking2.methods.join('、')}`);
    }

    return analysis.join('。');
}

function getLongTermSupport(type1, type2) {
    // 定义长期支持特点
    const longTermTraits = {
        'NJ': {
            focus: '远景规划',
            strength: '战略思维',
            support: ['帮助设定长期目标', '提供发展建议', '关注成长方向']
        },
        'NP': {
            focus: '潜能发展',
            strength: '创新思维',
            support: ['探索发展可能', '激发创新想法', '保持成长动力']
        },
        'SJ': {
            focus: '稳定发展',
            strength: '执行力',
            support: ['建立稳定框架', '保持持续进步', '提供实际支持']
        },
        'SP': {
            focus: '实践成长',
            strength: '适应能力',
            support: ['提供实践机会', '培养应变能力', '鼓励尝试新事物']
        },
        'TJ': {
            focus: '目标达成',
            strength: '系统思维',
            support: ['制定详细计划', '追踪进度', '优化方法']
        },
        'TP': {
            focus: '能力提升',
            strength: '分析能力',
            support: ['分析改进空间', '提供反馈', '优化解决方案']
        },
        'FJ': {
            focus: '价值实现',
            strength: '人际影响',
            support: ['关注个人价值', '维护关系网络', '提供情感支持']
        },
        'FP': {
            focus: '自我实现',
            strength: '价值认同',
            support: ['支持个人选择', '提供理解认可', '鼓励自我表达']
        }
    };

    // 获取双方的长期支持特点
    const getTraitKey = (type) => `${type[1]}${type[3]}`;
    const getTFKey = (type) => `${type[2]}${type[3]}`;

    const trait1 = longTermTraits[getTraitKey(type1)];
    const trait2 = longTermTraits[getTraitKey(type2)];
    const thinking1 = longTermTraits[getTFKey(type1)];
    const thinking2 = longTermTraits[getTFKey(type2)];

    let supportAnalysis = [];

    // 分析基本支持特点
    if (trait1 && trait2) {
        supportAnalysis.push(`${type1}的长期支持特点：`);
        supportAnalysis.push(`- 关注${trait1.focus}`);
        supportAnalysis.push(`- 优势在于${trait1.strength}`);
        supportAnalysis.push(`- 支持方式：${trait1.support.join('、')}`);

        supportAnalysis.push(`${type2}的长期支持特点：`);
        supportAnalysis.push(`- 关注${trait2.focus}`);
        supportAnalysis.push(`- 优势在于${trait2.strength}`);
        supportAnalysis.push(`- 支持方式：${trait2.support.join('、')}`);
    }

    // 添加互补支持建议
    if (thinking1 && thinking2 && getTFKey(type1) !== getTFKey(type2)) {
        supportAnalysis.push('互补支持策略：');
        supportAnalysis.push(`- ${type1}可以通过${thinking1.strength}提供支持`);
        supportAnalysis.push(`- ${type2}可以通过${thinking2.strength}提供支持`);
        supportAnalysis.push('建议结合双方优势，建立全面的支持系统');
    }

    return supportAnalysis.join('\n');
}

function getPersonalRecovery(type1, type2) {
    // 定义个人恢复方式
    const recoveryStyles = {
        'IN': {
            methods: ['独处思考', '概念探索', '阅读研究'],
            needs: ['安静环境', '思考空间', '深度理解']
        },
        'IS': {
            methods: ['独处休息', '熟悉活动', '实践爱好'],
            needs: ['稳定环境', '个人空间', '具体放松']
        },
        'EN': {
            methods: ['创意活动', '社交讨论', '新体验'],
            needs: ['思维刺激', '互动机会', '创新空间']
        },
        'ES': {
            methods: ['社交活动', '运动娱乐', '实践体验'],
            needs: ['互动环境', '感官刺激', '实际活动']
        },
        'TJ': {
            methods: ['系统整理', '目标规划', '能力提升'],
            needs: ['秩序结构', '清晰目标', '效率提升']
        },
        'TP': {
            methods: ['问题解决', '技能学习', '灵活调整'],
            needs: ['自主空间', '探索机会', '逻辑理解']
        },
        'FJ': {
            methods: ['情感交流', '价值实现', '关系维护'],
            needs: ['情感支持', '价值认同', '和谐关系']
        },
        'FP': {
            methods: ['自我表达', '价值探索', '情感体验'],
            needs: ['真实表达', '价值认同', '情感空间']
        }
    };

    // 获取恢复风格
    const getMainStyle = (type) => `${type[0]}${type[1]}`;
    const getThinkingStyle = (type) => `${type[2]}${type[3]}`;

    const style1Main = recoveryStyles[getMainStyle(type1)];
    const style2Main = recoveryStyles[getMainStyle(type2)];
    const style1Think = recoveryStyles[getThinkingStyle(type1)];
    const style2Think = recoveryStyles[getThinkingStyle(type2)];

    let recoveryAnalysis = [];

    // 分析个人恢复特点
    if (style1Main && style2Main) {
        recoveryAnalysis.push(`${type1}的恢复方式：`);
        recoveryAnalysis.push(`- 主要方法：${style1Main.methods.join('、')}`);
        recoveryAnalysis.push(`- 基本需求：${style1Main.needs.join('、')}`);
        if (style1Think) {
            recoveryAnalysis.push(`- 思维恢复：${style1Think.methods.join('、')}`);
        }

        recoveryAnalysis.push(`\n${type2}的恢复方式：`);
        recoveryAnalysis.push(`- 主要方法：${style2Main.methods.join('、')}`);
        recoveryAnalysis.push(`- 基本需求：${style2Main.needs.join('、')}`);
        if (style2Think) {
            recoveryAnalysis.push(`- 思维恢复：${style2Think.methods.join('、')}`);
        }
    }

    // 添加互补建议
    if (getMainStyle(type1) !== getMainStyle(type2)) {
        recoveryAnalysis.push('\n互补恢复建议：');
        recoveryAnalysis.push('- 尊重彼此的恢复方式和节奏');
        recoveryAnalysis.push('- 在需要时提供对方习惯的支持方式');
        recoveryAnalysis.push('- 建立兼顾双方需求的恢复环境');
    }

    return recoveryAnalysis.join('\n');
}

function getJointRecovery(type1, type2) {
    // 定义共同恢复活动
    const jointActivities = {
        'NN': ['概念讨论', '创意探索', '学习新知识'],
        'NS': ['结合理论和实践', '探索新体验', '分享见解'],
        'SS': ['实践活动', '运动休闲', '享受当下'],
        'TT': ['解决问题', '分析讨论', '能力提升'],
        'TF': ['平衡理性和感性', '互相理解', '共同成长'],
        'FF': ['情感分享', '价值探讨', '关系建立'],
        'JJ': ['规划活动', '建立规律', '共同目标'],
        'JP': ['平衡计划和灵活', '互相适应', '综合安排'],
        'PP': ['自由探索', '即兴活动', '随性放松']
    };

    // 获取活动组合
    const getPair = (aspect1, aspect2, key) => {
        const pair = [type1[key], type2[key]].sort().join('');
        return jointActivities[pair] || jointActivities[`${aspect1}${aspect2}`];
    };

    let recommendations = [];

    // 分析不同维度的共同活动
    const nsPair = getPair('N', 'S', 1);
    const tfPair = getPair('T', 'F', 2);
    const jpPair = getPair('J', 'P', 3);

    if (nsPair) {
        recommendations.push('认知活动：' + nsPair.join('、'));
    }
    if (tfPair) {
        recommendations.push('决策活动：' + tfPair.join('、'));
    }
    if (jpPair) {
        recommendations.push('生活方式：' + jpPair.join('、'));
    }

    // 添加平衡建议
    recommendations.push('\n建议：');
    recommendations.push('- 寻找双方都感兴趣的活动');
    recommendations.push('- 轮流选择恢复方式');
    recommendations.push('- 创造适合双方的活动节奏');
    recommendations.push('- 保持开放和理解的态度');

    return recommendations.join('\n');
}

function getRecoveryEnvironment(type1, type2) {
    // 定义理想的恢复环境
    const environmentPreferences = {
        'I': {
            space: ['安静的个人空间', '低刺激环境', '私密区域'],
            atmosphere: ['平和', '独立', '深思']
        },
        'E': {
            space: ['开放的活动空间', '社交场所', '互动区域'],
            atmosphere: ['活力', '互动', '表达']
        },
        'N': {
            elements: ['概念探索空间', '创意环境', '学习资源'],
            features: ['启发性', '创新性', '可能性']
        },
        'S': {
            elements: ['实践场所', '感官体验', '具体工具'],
            features: ['实用性', '舒适性', '可操作性']
        },
        'T': {
            organization: ['逻辑布局', '效率设计', '系统安排'],
            focus: ['目标导向', '问题解决', '能力提升']
        },
        'F': {
            organization: ['情感舒适', '价值表达', '关系维护'],
            focus: ['人际和谐', '个人价值', '情感交流']
        }
    };

    let environmentSuggestions = [];

    // 分析各个维度的环境需求
    ['I/E', 'N/S', 'T/F'].forEach(dimension => {
        const [type1Trait, type2Trait] = [type1, type2].map(t => 
            dimension.includes(t[0]) ? t[0] : 
            dimension.includes(t[1]) ? t[1] : t[2]
        );

        if (type1Trait === type2Trait) {
            // 相同偏好
            const pref = environmentPreferences[type1Trait];
            environmentSuggestions.push(`共同需求：`);
            Object.values(pref).forEach(aspects => {
                environmentSuggestions.push(`- ${aspects.join('、')}`);
            });
        } else {
            // 不同偏好
            environmentSuggestions.push(`平衡需求：`);
            environmentSuggestions.push(`- ${type1}需要：${Object.values(environmentPreferences[type1Trait]).flat().join('、')}`);
            environmentSuggestions.push(`- ${type2}需要：${Object.values(environmentPreferences[type2Trait]).flat().join('、')}`);
        }
    });

    // 添加整合建议
    environmentSuggestions.push('\n环境营造建议：');
    environmentSuggestions.push('- 创造具有灵活性的空间');
    environmentSuggestions.push('- 设置不同功能的区域');
    environmentSuggestions.push('- 平衡社交和独处需求');
    environmentSuggestions.push('- 兼顾实用性和舒适度');

    return environmentSuggestions.join('\n');
}
function getCommunicationStrategy(type1, type2) {
    // 定义沟通风格和策略
    const communicationStyles = {
        'INTJ': {
            style: '直接而简洁',
            strengths: ['逻辑清晰', '战略思维', '直接表达'],
            preferences: ['重点导向', '避免冗余', '注重效率'],
            challenges: ['可能显得过于直接', '忽视情感因素', '不耐琐碎细节']
        },
        'INTP': {
            style: '分析而深入',
            strengths: ['概念清晰', '逻辑分析', '探索思维'],
            preferences: ['理论讨论', '精确表达', '深入探讨'],
            challenges: ['可能过于复杂', '忽视实际应用', '难以简化表达']
        },
        'ENTJ': {
            style: '果断而系统',
            strengths: ['目标明确', '组织能力强', '富有说服力'],
            preferences: ['效率导向', '系统思维', '直接反馈'],
            challenges: ['可能过于主导', '忽视他人感受', '期望过高']
        },
        'ENTP': {
            style: '创新而灵活',
            strengths: ['思维敏捷', '创意丰富', '善于辩论'],
            preferences: ['头脑风暴', '概念探讨', '开放对话'],
            challenges: ['可能过于理论', '不够实际', '难以做结论']
        },
        'INFJ': {
            style: '洞察而和谐',
            strengths: ['深度理解', '善于倾听', '富有洞察力'],
            preferences: ['个人交流', '寻求意义', '和谐氛围'],
            challenges: ['可能过于含蓄', '难以直接表达', '过度理想化']
        },
        'INFP': {
            style: '真诚而理想',
            strengths: ['同理心强', '价值导向', '创意表达'],
            preferences: ['真诚对话', '价值探讨', '个人化交流'],
            challenges: ['可能过于敏感', '难以处理冲突', '主观倾向']
        },
        'ENFJ': {
            style: '富有魅力而关怀',
            strengths: ['人际敏感', '表达能力强', '善于激励'],
            preferences: ['关系建立', '团队和谐', '积极反馈'],
            challenges: ['可能过分迁就', '避免冲突', '情感卷入']
        },
        'ENFP': {
            style: '热情而创新',
            strengths: ['表达活力', '创意思维', '关系建立'],
            preferences: ['开放对话', '创意交流', '情感共鸣'],
            challenges: ['可能过于分散', '难以聚焦', '情绪化']
        },
        'ISTJ': {
            style: '可靠而具体',
            strengths: ['注重细节', '实事求是', '清晰明确'],
            preferences: ['具体信息', '循序渐进', '实际问题'],
            challenges: ['可能过于刻板', '缺乏灵活性', '难以创新']
        },
        'ISFJ': {
            style: '体贴而实际',
            strengths: ['细心周到', '实际支持', '可靠稳定'],
            preferences: ['具体关怀', '实际帮助', '传统方式'],
            challenges: ['可能过于保守', '难以创新', '避免改变']
        },
        'ESTJ': {
            style: '高效而实际',
            strengths: ['组织能力', '执行力强', '明确直接'],
            preferences: ['效率导向', '实际行动', '明确指示'],
            challenges: ['可能过于专制', '忽视感受', '不够灵活']
        },
        'ESFJ': {
            style: '和谐而实际',
            strengths: ['人际关系', '实际支持', '组织能力'],
            preferences: ['和谐氛围', '具体帮助', '传统方式'],
            challenges: ['可能过度关心', '依赖认同', '避免冲突']
        },
        'ISTP': {
            style: '简洁而灵活',
            strengths: ['问题解决', '实践能力', '适应性强'],
            preferences: ['直接表达', '实际问题', '灵活应对'],
            challenges: ['可能过于简短', '忽视情感', '难以规划']
        },
        'ISFP': {
            style: '温和而适应',
            strengths: ['审美能力', '实践导向', '和谐关系'],
            preferences: ['个人空间', '实际体验', '和谐氛围'],
            challenges: ['可能过于被动', '难以表达', '回避冲突']
        },
        'ESTP': {
            style: '活力而直接',
            strengths: ['行动导向', '实践能力', '适应性强'],
            preferences: ['直接行动', '即时反应', '实际解决'],
            challenges: ['可能过于冲动', '忽视计划', '轻视细节']
        },
        'ESFP': {
            style: '活泼而友好',
            strengths: ['人际互动', '实践能力', '表现力强'],
            preferences: ['轻松氛围', '即时互动', '实际体验'],
            challenges: ['可能过于表面', '难以深入', '缺乏规划']
        }
    };

    // 获取双方的沟通特点
    const style1 = communicationStyles[type1];
    const style2 = communicationStyles[type2];

    // 生成沟通策略建议
    let strategies = [];
    
    // 分析双方沟通特点
    strategies.push('沟通特点分析：');
    strategies.push(`${type1}：${style1.style}型沟通`);
    strategies.push(`- 优势：${style1.strengths.join('、')}`);
    strategies.push(`- 偏好：${style1.preferences.join('、')}`);
    strategies.push(`- 挑战：${style1.challenges.join('、')}`);
    strategies.push('');
    strategies.push(`${type2}：${style2.style}型沟通`);
    strategies.push(`- 优势：${style2.strengths.join('、')}`);
    strategies.push(`- 偏好：${style2.preferences.join('、')}`);
    strategies.push(`- 挑战：${style2.challenges.join('、')}`);

    // 生成互补建议
    strategies.push('\n互补策略建议：');
    strategies = strategies.concat(generateComplementaryStrategies(type1, type2));

    return strategies.join('\n');
}

function generateComplementaryStrategies(type1, type2) {
    let strategies = [];

    // 基于外向/内向维度的建议
    if (type1[0] !== type2[0]) {
        strategies.push('能量管理：');
        strategies.push(`- ${type1[0] === 'E' ? type1 : type2}需要控制表达欲望，给予对方思考空间`);
        strategies.push(`- ${type1[0] === 'I' ? type1 : type2}需要适当增加互动，表达自己的想法`);
    }

    // 基于感知/直觉维度的建议
    if (type1[1] !== type2[1]) {
        strategies.push('信息交流：');
        strategies.push(`- ${type1[1] === 'S' ? type1 : type2}需要多分享具体细节和实例`);
        strategies.push(`- ${type1[1] === 'N' ? type1 : type2}需要说明概念背后的实际应用`);
    }

    // 基于思考/情感维度的建议
    if (type1[2] !== type2[2]) {
        strategies.push('决策讨论：');
        strategies.push(`- ${type1[2] === 'T' ? type1 : type2}需要考虑情感影响和人际因素`);
        strategies.push(`- ${type1[2] === 'F' ? type1 : type2}需要提供逻辑分析和客观理由`);
    }

    // 基于判断/知觉维度的建议
    if (type1[3] !== type2[3]) {
        strategies.push('行动协调：');
        strategies.push(`- ${type1[3] === 'J' ? type1 : type2}需要保持一定的灵活性和开放性`);
        strategies.push(`- ${type1[3] === 'P' ? type1 : type2}需要注意计划和时间节点`);
    }

    // 添加通用建议
    strategies.push('\n通用建议：');
    strategies.push('- 定期进行开放和诚实的沟通');
    strategies.push('- 尊重并接纳彼此的沟通方式');
    strategies.push('- 在冲突时注意倾听和理解');
    strategies.push('- 建立有效的反馈机制');
    strategies.push('- 保持耐心和包容的态度');

    return strategies;
}

function getTaskAllocation(type1, type2) {
    // 定义不同类型的任务偏好和优势
    const taskPreferences = {
        'NT': {
            strengths: ['战略规划', '系统分析', '创新思维'],
            tasks: ['概念设计', '战略制定', '系统优化']
        },
        'NF': {
            strengths: ['创意表达', '人际互动', '价值导向'],
            tasks: ['团队建设', '创意策划', '沟通协调']
        },
        'ST': {
            strengths: ['执行力强', '注重细节', '实践能力'],
            tasks: ['项目执行', '数据分析', '流程优化']
        },
        'SF': {
            strengths: ['人际关系', '实际支持', '细节关注'],
            tasks: ['客户服务', '团队支持', '日常运营']
        },
        'EJ': {
            strengths: ['组织管理', '目标导向', '决策果断'],
            tasks: ['团队领导', '项目管理', '决策制定']
        },
        'EP': {
            strengths: ['灵活应变', '创新思维', '适应能力'],
            tasks: ['危机处理', '创新项目', '资源调配']
        },
        'IJ': {
            strengths: ['深入思考', '计划性强', '专注力强'],
            tasks: ['研究分析', '质量控制', '长期规划']
        },
        'IP': {
            strengths: ['独立思考', '问题解决', '适应性强'],
            tasks: ['技术开发', '创意设计', '专业研究']
        }
    };

    let allocation = [];
    
    // 分析主要风格
    const getStyleKeys = (type) => [
        `${type[1]}${type[2]}`,  // NT, NF, ST, SF
        `${type[0]}${type[3]}`   // EJ, EP, IJ, IP
    ];

    const style1Keys = getStyleKeys(type1);
    const style2Keys = getStyleKeys(type2);

    allocation.push('任务分配建议：');
    allocation.push(`\n${type1}适合的任务领域：`);
    style1Keys.forEach(key => {
        if (taskPreferences[key]) {
            allocation.push(`- 优势：${taskPreferences[key].strengths.join('、')}`);
            allocation.push(`- 推荐任务：${taskPreferences[key].tasks.join('、')}`);
        }
    });

    allocation.push(`\n${type2}适合的任务领域：`);
    style2Keys.forEach(key => {
        if (taskPreferences[key]) {
            allocation.push(`- 优势：${taskPreferences[key].strengths.join('、')}`);
            allocation.push(`- 推荐任务：${taskPreferences[key].tasks.join('、')}`);
        }
    });

    // 添加协作建议
    allocation.push('\n协作建议：');
    allocation.push('- 基于各自优势分配主要职责');
    allocation.push('- 在关键决策点结合双方视角');
    allocation.push('- 建立互补的工作流程');
    allocation.push('- 保持regular同步和沟通');
    allocation.push('- 相互支持和学习');

    return allocation.join('\n');
}

function getConflictResolution(type1, type2) {
    // 定义冲突处理风格
    const conflictStyles = {
        'NT': {
            approach: '逻辑分析',
            methods: ['客观分析', '寻找根本原因', '系统解决'],
            focus: '问题本质'
        },
        'NF': {
            approach: '价值协调',
            methods: ['寻求共识', '关注感受', '探讨意义'],
            focus: '关系和谐'
        },
        'ST': {
            approach: '实际解决',
            methods: ['直接处理', '实践验证', '效率导向'],
            focus: '具体问题'
        },
        'SF': {
            approach: '和谐维护',
            methods: ['情感关注', '实际帮助', '维护关系'],
            focus: '实际需求'
        },
        'TJ': {
            approach: '系统解决',
            methods: ['制定计划', '明确责任', '追踪结果'],
            focus: '效率和结果'
        },
        'TP': {
            approach: '灵活应对',
            methods: ['分析选项', '适应调整', '问题解决'],
            focus: '多元可能'
        },
        'FJ': {
            approach: '和谐导向',
            methods: ['寻求共识', '关系维护', '情感关注'],
            focus: '群体和谐'
        },
        'FP': {
            approach: '价值平衡',
            methods: ['个人关注', '灵活调整', '价值对话'],
            focus: '个人需求'
        }
    };

    let resolution = [];
    
    // 分析冲突处理风格
    const getStyleKeys = (type) => [
        `${type[1]}${type[2]}`,  // NT, NF, ST, SF
        `${type[2]}${type[3]}`   // TJ, TP, FJ, FP
    ];

    const style1Keys = getStyleKeys(type1);
    const style2Keys = getStyleKeys(type2);

    resolution.push('冲突处理风格分析：');
    resolution.push(`\n${type1}的处理方式：`);
    style1Keys.forEach(key => {
        if (conflictStyles[key]) {
            resolution.push(`- 方法：${conflictStyles[key].approach}`);
            resolution.push(`- 策略：${conflictStyles[key].methods.join('、')}`);
            resolution.push(`- 关注点：${conflictStyles[key].focus}`);
        }
    });

    resolution.push(`\n${type2}的处理方式：`);
    style2Keys.forEach(key => {
        if (conflictStyles[key]) {
            resolution.push(`- 方法：${conflictStyles[key].approach}`);
            resolution.push(`- 策略：${conflictStyles[key].methods.join('、')}`);
            resolution.push(`- 关注点：${conflictStyles[key].focus}`);
        }
    });

    // 添加冲突解决建议
    resolution.push('\n冲突解决建议：');
    resolution.push('1. 预防策略：');
    resolution.push('- 建立清晰的沟通机制');
    resolution.push('- 定期进行期望对齐');
    resolution.push('- 保持开放和诚实的对话');

    resolution.push('\n2. 处理策略：');
    resolution.push('- 及时识别和承认冲突');
    resolution.push('- 各自表达观点和感受');
    resolution.push('- 共同寻找解决方案');
    resolution.push('- 达成可行的行动计划');

    resolution.push('\n3. 后续跟进：');
    resolution.push('- 执行商定的解决方案');
    resolution.push('- 定期评估进展');
    resolution.push('- 及时调整和改进');
    resolution.push('- 强化积极的互动模式');

    return resolution.join('\n');
}
function getRoutineComparison(type1, type2) {
    // 定义不同类型的日常习惯特征
    const routinePatterns = {
        'IJ': {
            schedule: '规律且有计划',
            preferences: ['固定的作息时间', '计划性强', '注重个人空间'],
            habits: ['提前规划', '按部就班', '独处时间'],
            strengths: ['自律性强', '时间管理好', '专注力强']
        },
        'IP': {
            schedule: '灵活且自主',
            preferences: ['弹性作息', '随性安排', '重视独立'],
            habits: ['根据状态调整', '即兴决定', '独立空间'],
            strengths: ['适应性强', '创造力强', '自主性高']
        },
        'EJ': {
            schedule: '规律且积极',
            preferences: ['明确的日程', '社交活动', '目标导向'],
            habits: ['按计划行动', '主动社交', '追踪进度'],
            strengths: ['执行力强', '组织能力好', '目标明确']
        },
        'EP': {
            schedule: '活跃且自发的',
            preferences: ['灵活安排', '即兴活动', '社交互动'],
            habits: ['随机应变', '寻找刺激', '社交导向'],
            strengths: ['应变能力强', '活力充沛', '社交能力强']
        },
        'ST': {
            daily: '实际且有序',
            preferences: ['具体任务', '实用导向', '效率优先'],
            habits: ['关注细节', '实践验证', '系统行动'],
            strengths: ['执行力强', '注重实效', '可靠稳定']
        },
        'SF': {
            daily: '务实且关怀',
            preferences: ['日常关怀', '实际帮助', '人际和谐'],
            habits: ['照顾他人', '实际服务', '维护关系'],
            strengths: ['细心周到', '实际支持', '关系维护']
        },
        'NT': {
            daily: '理性且创新',
            preferences: ['概念探索', '系统思考', '效率优化'],
            habits: ['学习研究', '策略规划', '优化系统'],
            strengths: ['创新能力', '系统思维', '战略眼光']
        },
        'NF': {
            daily: '理想且富同理心',
            preferences: ['意义追求', '价值实现', '人际关怀'],
            habits: ['自我提升', '关系经营', '创意表达'],
            strengths: ['同理心强', '创造力强', '价值导向']
        }
    };

    // 获取两种类型的作息特征
    const getPatternKeys = (type) => [
        `${type[0]}${type[3]}`,  // IJ, IP, EJ, EP
        `${type[1]}${type[2]}`   // ST, SF, NT, NF
    ];

    const pattern1Keys = getPatternKeys(type1);
    const pattern2Keys = getPatternKeys(type2);

    let comparison = [];

    // 分析作息模式
    comparison.push('作息习惯比较：');
    comparison.push(`\n${type1}的日常模式：`);
    pattern1Keys.forEach(key => {
        if (routinePatterns[key]) {
            const pattern = routinePatterns[key];
            comparison.push(`- 总体特征：${pattern.schedule || pattern.daily}`);
            comparison.push(`- 偏好：${pattern.preferences.join('、')}`);
            comparison.push(`- 习惯：${pattern.habits.join('、')}`);
            comparison.push(`- 优势：${pattern.strengths.join('、')}`);
        }
    });

    comparison.push(`\n${type2}的日常模式：`);
    pattern2Keys.forEach(key => {
        if (routinePatterns[key]) {
            const pattern = routinePatterns[key];
            comparison.push(`- 总体特征：${pattern.schedule || pattern.daily}`);
            comparison.push(`- 偏好：${pattern.preferences.join('、')}`);
            comparison.push(`- 习惯：${pattern.habits.join('、')}`);
            comparison.push(`- 优势：${pattern.strengths.join('、')}`);
        }
    });

    // 添加协调建议
    comparison.push('\n作息协调建议：');
    comparison = comparison.concat(getRoutineHarmonizationTips(type1, type2));

    return comparison.join('\n');
}

function getHabitComparison(type1, type2) {
    // 定义不同类型的习惯特征
    const habitPatterns = {
        'SJ': {
            routines: ['固定作息', '按计划行事', '定期维护'],
            organization: ['系统整理', '规范执行', '细节关注'],
            preferences: ['传统方式', '稳定环境', '明确规则']
        },
        'SP': {
            routines: ['灵活作息', '即兴行动', '实践体验'],
            organization: ['实用安排', '随机应变', '行动导向'],
            preferences: ['自由空间', '感官体验', '实际操作']
        },
        'NJ': {
            routines: ['目标导向', '长期规划', '系统思考'],
            organization: ['概念整理', '战略安排', '持续优化'],
            preferences: ['创新方式', '发展空间', '效率提升']
        },
        'NP': {
            routines: ['探索模式', '创意发挥', '灵活调整'],
            organization: ['概念联系', '可能性探索', '适应变化'],
            preferences: ['自由创新', '思维空间', '多元选择']
        },
        'TJ': {
            routines: ['效率导向', '系统规划', '逻辑安排'],
            organization: ['目标分解', '进度跟踪', '结果评估'],
            preferences: ['清晰结构', '理性决策', '效率优先']
        },
        'TP': {
            routines: ['分析导向', '问题解决', '灵活应对'],
            organization: ['逻辑分类', '原理探索', '优化改进'],
            preferences: ['独立思考', '技术创新', '系统分析']
        },
        'FJ': {
            routines: ['关系导向', '价值实现', '和谐追求'],
            organization: ['人际协调', '情感关注', '团队合作'],
            preferences: ['和谐环境', '价值认同', '关系维护']
        },
        'FP': {
            routines: ['价值导向', '情感表达', '自我实现'],
            organization: ['个性化安排', '灵活调适', '价值追求'],
            preferences: ['真实表达', '情感共鸣', '个人空间']
        }
    };

    const getHabitKeys = (type) => [
        `${type[1]}${type[3]}`,  // SJ, SP, NJ, NP
        `${type[2]}${type[3]}`   // TJ, TP, FJ, FP
    ];

    let comparison = [];
    const habit1Keys = getHabitKeys(type1);
    const habit2Keys = getHabitKeys(type2);

    comparison.push('习惯模式分析：');
    comparison.push(`\n${type1}的习惯特征：`);
    habit1Keys.forEach(key => {
        if (habitPatterns[key]) {
            const pattern = habitPatterns[key];
            comparison.push(`- 日常习惯：${pattern.routines.join('、')}`);
            comparison.push(`- 组织方式：${pattern.organization.join('、')}`);
            comparison.push(`- 偏好特征：${pattern.preferences.join('、')}`);
        }
    });

    comparison.push(`\n${type2}的习惯特征：`);
    habit2Keys.forEach(key => {
        if (habitPatterns[key]) {
            const pattern = habitPatterns[key];
            comparison.push(`- 日常习惯：${pattern.routines.join('、')}`);
            comparison.push(`- 组织方式：${pattern.organization.join('、')}`);
            comparison.push(`- 偏好特征：${pattern.preferences.join('、')}`);
        }
    });

    // 添加习惯协调建议
    comparison.push('\n习惯协调建议：');
    comparison = comparison.concat(getHabitHarmonizationTips(type1, type2));

    return comparison.join('\n');
}

function getHabitHarmonization(type1, type2) {
    let harmonization = [];
    
    // 基于判断/知觉维度的建议
    if (type1[3] !== type2[3]) {
        harmonization.push('计划与灵活性的平衡：');
        harmonization.push(`- ${type1[3] === 'J' ? type1 : type2}可以提供结构和规划`);
        harmonization.push(`- ${type1[3] === 'P' ? type1 : type2}可以带来灵活性和适应性`);
        harmonization.push('- 在重要事项上遵循计划，日常生活保持适度弹性');
    }

    // 基于感知/直觉维度的建议
    if (type1[1] !== type2[1]) {
        harmonization.push('\n具体与抽象的平衡：');
        harmonization.push(`- ${type1[1] === 'S' ? type1 : type2}关注实际细节和具体需求`);
        harmonization.push(`- ${type1[1] === 'N' ? type1 : type2}提供长远视角和创新想法`);
        harmonization.push('- 结合实际需求和发展愿景来安排生活');
    }

    // 基于思考/情感维度的建议
    if (type1[2] !== type2[2]) {
        harmonization.push('\n逻辑与价值的平衡：');
        harmonization.push(`- ${type1[2] === 'T' ? type1 : type2}注重效率和逻辑安排`);
        harmonization.push(`- ${type1[2] === 'F' ? type1 : type2}关注情感需求和价值实现`);
        harmonization.push('- 在效率和人文关怀间找到平衡点');
    }

    // 通用建议
    harmonization.push('\n通用协调建议：');
    harmonization.push('1. 建立基本规律：');
    harmonization.push('- 确定共同的作息时间');
    harmonization.push('- 建立必要的生活规则');
    harmonization.push('- 保持适度的灵活性');

    harmonization.push('\n2. respect个人空间：');
    harmonization.push('- 尊重彼此的习惯差异');
    harmonization.push('- 保留个人调整的空间');
    harmonization.push('- 建立互不干扰的区域');

    harmonization.push('\n3. 建立沟通机制：');
    harmonization.push('- 定期讨论生活安排');
    harmonization.push('- 及时反馈不适感受');
    harmonization.push('- 共同调整和改进');

    return harmonization.join('\n');
}

function getRoutineHarmonizationTips(type1, type2) {
    let tips = [];

    // 基于外向/内向维度的建议
    if (type1[0] !== type2[0]) {
        tips.push('社交能量管理：');
        tips.push(`- ${type1[0] === 'E' ? type1 : type2}需要适当控制社交活动频率`);
        tips.push(`- ${type1[0] === 'I' ? type1 : type2}需要保持适度的社交参与`);
        tips.push('- 平衡社交活动和独处时间');
    }

    // 基于判断/知觉维度的建议
    if (type1[3] !== type2[3]) {
        tips.push('\n日程安排：');
        tips.push(`- ${type1[3] === 'J' ? type1 : type2}可以负责建立基本框架`);
        tips.push(`- ${type1[3] === 'P' ? type1 : type2}可以提供灵活调整的空间`);
        tips.push('- 在重要事项上保持计划性，日常事务保持弹性');
    }

    // 作息建议
    tips.push('\n具体建议：');
    tips.push('1. 时间管理：');
    tips.push('- 确定共同的核心时间');
    tips.push('- 建立灵活的日程安排');
    tips.push('- 预留调整的空间');

    tips.push('\n2. 空间安排：');
    tips.push('- 划分个人活动区域');
    tips.push('- 创造共享空间');
    tips.push('- 保持环境整洁');

    tips.push('\n3. 活动协调：');
    tips.push('- 平衡独处和互动时间');
    tips.push('- 尊重个人习惯');
    tips.push('- 建立共同活动');

    return tips;
}
function getHabitHarmonizationTips(type1, type2) {
    // 定义不同类型组合的具体协调建议
    const harmonizationTips = {
        'J-P': {
            title: '计划性与灵活性的平衡',
            general: [
                '在重要事务上遵循计划',
                '日常生活保持适度弹性',
                '建立可调整的例行程序'
            ],
            specific: {
                'J': ['适当放松对计划的控制', '接受临时变动的可能', '预留调整的空间'],
                'P': ['培养基本的规律性', '遵守重要的时间节点', '提前做些计划准备']
            }
        },
        'E-I': {
            title: '社交与独处的平衡',
            general: [
                '平衡社交活动和独处时间',
                '建立互不干扰的空间',
                '尊重能量恢复方式'
            ],
            specific: {
                'E': ['控制社交活动频率', '减少无必要的打扰', '理解独处的价值'],
                'I': ['适度参与共同活动', '主动表达个人需求', '保持基本的交流']
            }
        },
        'S-N': {
            title: '实践与理想的平衡',
            general: [
                '结合实际需求和发展愿景',
                '平衡具体细节和整体规划',
                '建立实用的行动计划'
            ],
            specific: {
                'S': ['开放接纳新的可能', '关注长远发展', '理解创新的价值'],
                'N': ['注意实际可行性', '关注具体细节', '脚踏实地执行']
            }
        },
        'T-F': {
            title: '逻辑与情感的平衡',
            general: [
                '兼顾效率和人文关怀',
                '平衡理性决策和情感需求',
                '建立共情的交流方式'
            ],
            specific: {
                'T': ['考虑情感因素', '表达关心和理解', '增加人性化考虑'],
                'F': ['培养客观分析', '建立理性框架', '注意实际效率']
            }
        }
    };

    let tips = [];

    // 分析每个维度的差异并提供建议
    for (let i = 0; i < 4; i++) {
        if (type1[i] !== type2[i]) {
            const dimensionPair = `${type1[i]}-${type2[i]}`;
            const reversePair = `${type2[i]}-${type1[i]}`;
            const tipKey = harmonizationTips[dimensionPair] ? dimensionPair : reversePair;
            
            if (harmonizationTips[tipKey]) {
                const tip = harmonizationTips[tipKey];
                tips.push(`\n${tip.title}：`);
                tips.push('通用建议：');
                tip.general.forEach(g => tips.push(`- ${g}`));
                
                tips.push(`\n${type1}的调整建议：`);
                tip.specific[type1[i]].forEach(s => tips.push(`- ${s}`));
                
                tips.push(`\n${type2}的调整建议：`);
                tip.specific[type2[i]].forEach(s => tips.push(`- ${s}`));
            }
        }
    }

    // 添加通用的习惯协调建议
    tips.push('\n总体协调建议：');
    tips.push('1. 时间管理：');
    tips.push('- 设定共同的核心时间');
    tips.push('- 保留个人自由时间');
    tips.push('- 定期同步和调整安排');

    tips.push('\n2. 空间安排：');
    tips.push('- 明确各自的私人空间');
    tips.push('- 创造舒适的共享环境');
    tips.push('- 保持环境的整洁有序');

    tips.push('\n3. 沟通机制：');
    tips.push('- 建立定期沟通的习惯');
    tips.push('- 及时表达需求和困扰');
    tips.push('- 共同解决问题和改进');

    tips.push('\n4. 习惯培养：');
    tips.push('- 逐步建立共同习惯');
    tips.push('- 相互学习好的习惯');
    tips.push('- 保持开放和包容的态度');

    // 添加具体的日常建议
    tips.push('\n日常实践建议：');
    tips.push('1. 作息协调');
    tips = tips.concat(getDailyRoutineTips(type1, type2));

    tips.push('\n2. 环境营造');
    tips = tips.concat(getEnvironmentTips(type1, type2));

    tips.push('\n3. 活动安排');
    tips = tips.concat(getActivityTips(type1, type2));

    return tips;
}

function getDailyRoutineTips(type1, type2) {
    let tips = [];
    
    // 基于类型特征提供具体的作息建议
    if (type1[3] !== type2[3]) {  // J/P差异
        tips.push('- 确定必要的固定作息时间');
        tips.push('- 允许适度的灵活调整');
        tips.push('- 在重要事项上保持准时');
    }

    if (type1[0] !== type2[0]) {  // E/I差异
        tips.push('- 安排独处和互动的时间段');
        tips.push('- 建立能量恢复的机制');
        tips.push('- 尊重各自的生理节奏');
    }

    return tips;
}

function getEnvironmentTips(type1, type2) {
    let tips = [];
    
    // 基于类型特征提供环境布置建议
    if (type1[1] !== type2[1]) {  // S/N差异
        tips.push('- 平衡实用性和创意性');
        tips.push('- 兼顾秩序感和灵活性');
        tips.push('- 创造多功能的空间');
    }

    if (type1[2] !== type2[2]) {  // T/F差异
        tips.push('- 结合效率和舒适度');
        tips.push('- 平衡功能性和温馨感');
        tips.push('- 建立个性化的区域');
    }

    return tips;
}

function getActivityTips(type1, type2) {
    let tips = [];
    
    // 基于类型特征提供活动安排建议
    if (type1[0] !== type2[0]) {  // E/I差异
        tips.push('- 平衡社交和独处活动');
        tips.push('- 保持适度的互动频率');
        tips.push('- 尊重能量管理需求');
    }

    if (type1[1] !== type2[1]) {  // S/N差异
        tips.push('- 结合实践和创新活动');
        tips.push('- 平衡常规和新尝试');
        tips.push('- 照顾不同的兴趣爱好');
    }

    return tips;
}
function getNeedsAlignment(type1, type2) {
    // 定义不同性格类型的核心需求
    const coreNeeds = {
        'NJ': {
            primary: ['远见规划', '系统发展', '持续改进'],
            secondary: ['清晰愿景', '有序进展', '目标达成'],
            stress: ['缺乏方向', '混乱无序', '效率低下']
        },
        'NP': {
            primary: ['自由探索', '创新可能', '概念理解'],
            secondary: ['思维空间', '灵活选择', '持续学习'],
            stress: ['过度限制', '重复枯燥', '缺乏创新']
        },
        'SJ': {
            primary: ['秩序稳定', '具体规划', '可靠保障'],
            secondary: ['清晰流程', '实际成果', '传统价值'],
            stress: ['突发变化', '模糊不清', '规则打破']
        },
        'SP': {
            primary: ['实践体验', '即时响应', '感官刺激'],
            secondary: ['行动自由', '实际操作', '当下体验'],
            stress: ['过度约束', '理论空谈', '远期承诺']
        },
        'TJ': {
            primary: ['效率成果', '逻辑秩序', '目标实现'],
            secondary: ['系统优化', '清晰标准', '进度控制'],
            stress: ['低效混乱', '情绪干扰', '目标模糊']
        },
        'TP': {
            primary: ['理论理解', '问题解决', '系统分析'],
            secondary: ['独立思考', '技术精进', '原理探索'],
            stress: ['情感压力', '过度控制', '教条限制']
        },
        'FJ': {
            primary: ['关系和谐', '价值实现', '团队合作'],
            secondary: ['情感联结', '意义追求', '共识达成'],
            stress: ['冲突对抗', '价值冲突', '关系破裂']
        },
        'FP': {
            primary: ['真实表达', '价值认同', '情感体验'],
            secondary: ['个人空间', '灵活关系', '自我实现'],
            stress: ['价值否定', '强制要求', '情感压抑']
        }
    };

    // 定义不同组合的互补策略
    const complementaryStrategies = {
        'NJ-NP': '平衡规划与探索',
        'NJ-SJ': '结合远见与实践',
        'NJ-SP': '整合战略与行动',
        'NP-SJ': '平衡创新与稳定',
        'NP-SP': '结合概念与实践',
        'SJ-SP': '平衡规范与灵活',
        'TJ-TP': '结合执行与分析',
        'TJ-FJ': '平衡效率与和谐',
        'TJ-FP': '整合目标与价值',
        'TP-FJ': '平衡逻辑与情感',
        'TP-FP': '结合分析与价值',
        'FJ-FP': '平衡团队与个人'
    };

    let alignment = [];
    
    // 获取两种类型的核心特征
    const getTypeKeys = (type) => [
        `${type[1]}${type[3]}`,  // NJ, NP, SJ, SP
        `${type[2]}${type[3]}`   // TJ, TP, FJ, FP
    ];

    const type1Keys = getTypeKeys(type1);
    const type2Keys = getTypeKeys(type2);

    // 分析核心需求
    alignment.push('核心需求分析：');
    alignment.push(`\n${type1}的需求特征：`);
    type1Keys.forEach(key => {
        if (coreNeeds[key]) {
            alignment.push(`- 主要需求：${coreNeeds[key].primary.join('、')}`);
            alignment.push(`- 次要需求：${coreNeeds[key].secondary.join('、')}`);
            alignment.push(`- 压力源：${coreNeeds[key].stress.join('、')}`);
        }
    });

    alignment.push(`\n${type2}的需求特征：`);
    type2Keys.forEach(key => {
        if (coreNeeds[key]) {
            alignment.push(`- 主要需求：${coreNeeds[key].primary.join('、')}`);
            alignment.push(`- 次要需求：${coreNeeds[key].secondary.join('、')}`);
            alignment.push(`- 压力源：${coreNeeds[key].stress.join('、')}`);
        }
    });

    // 分析互补策略
    alignment.push('\n需求协调策略：');
    type1Keys.forEach(key1 => {
        type2Keys.forEach(key2 => {
            const strategyKey = [key1, key2].sort().join('-');
            if (complementaryStrategies[strategyKey]) {
                alignment.push(`- ${complementaryStrategies[strategyKey]}`);
            }
        });
    });

    // 添加具体建议
    alignment = alignment.concat(getNeedsHarmonizationTips(type1, type2));

    return alignment.join('\n');
}

function getNeedsHarmonizationTips(type1, type2) {
    let tips = [];
    
    tips.push('\n具体协调建议：');

    // 基于外向/内向维度的建议
    if (type1[0] !== type2[0]) {
        tips.push('1. 能量需求平衡：');
        tips.push(`- ${type1[0] === 'E' ? type1 : type2}需要社交互动的能量补充`);
        tips.push(`- ${type1[0] === 'I' ? type1 : type2}需要独处时间的能量恢复`);
        tips.push('- 建立能量平衡的日常节奏');
    }

    // 基于感知/直觉维度的建议
    if (type1[1] !== type2[1]) {
        tips.push('\n2. 信息处理需求：');
        tips.push(`- ${type1[1] === 'S' ? type1 : type2}需要具体详实的信息`);
        tips.push(`- ${type1[1] === 'N' ? type1 : type2}需要概念性的理解`);
        tips.push('- 在沟通中兼顾细节和整体');
    }

    // 基于思考/情感维度的建议
    if (type1[2] !== type2[2]) {
        tips.push('\n3. 决策方式需求：');
        tips.push(`- ${type1[2] === 'T' ? type1 : type2}需要逻辑和效率`);
        tips.push(`- ${type1[2] === 'F' ? type1 : type2}需要价值和和谐`);
        tips.push('- 在决策中平衡理性和情感');
    }

    // 基于判断/知觉维度的建议
    if (type1[3] !== type2[3]) {
        tips.push('\n4. 生活方式需求：');
        tips.push(`- ${type1[3] === 'J' ? type1 : type2}需要计划和确定性`);
        tips.push(`- ${type1[3] === 'P' ? type1 : type2}需要灵活和可能性`);
        tips.push('- 在生活中保持适度的弹性');
    }

    // 添加压力管理建议
    tips = tips.concat(getStressManagementTips(type1, type2));

    // 添加成长建议
    tips = tips.concat(getGrowthAlignmentTips(type1, type2));

    return tips;
}

function getStressManagementTips(type1, type2) {
    let tips = [];
    
    tips.push('\n压力管理建议：');
    tips.push('1. 识别压力信号：');
    tips.push('- 注意对方的压力表现');
    tips.push('- 理解不同的压力源');
    tips.push('- 及时沟通压力状况');

    tips.push('\n2. 支持策略：');
    tips.push('- 提供对方需要的支持方式');
    tips.push('- 保持适度的界限感');
    tips.push('- 建立压力缓解机制');

    tips.push('\n3. 恢复策略：');
    tips.push('- 尊重各自的恢复方式');
    tips.push('- 创造有利的恢复环境');
    tips.push('- 保持健康的生活习惯');

    return tips;
}

function getGrowthAlignmentTips(type1, type2) {
    let tips = [];
    
    tips.push('\n共同成长建议：');
    tips.push('1. 互补学习：');
    tips.push(`- ${type1}可以学习：${getGrowthAreas(type1, type2)}`);
    tips.push(`- ${type2}可以学习：${getGrowthAreas(type2, type1)}`);

    tips.push('\n2. 发展方向：');
    tips.push('- 建立共同的成长目标');
    tips.push('- 支持彼此的个人发展');
    tips.push('- 创造学习和分享的机会');

    tips.push('\n3. 长期规划：');
    tips.push('- 协调个人和共同目标');
    tips.push('- 定期回顾和调整方向');
    tips.push('- 保持开放和成长的心态');

    return tips;
}

function getGrowthAreas(typeFrom, typeTo) {
    // 定义不同类型组合的学习方向
    const growthDirections = {
        'E->I': ['深度思考', '独立工作', '自我反省'],
        'I->E': ['社交技能', '外部表达', '团队协作'],
        'S->N': ['抽象思维', '创新视角', '长远规划'],
        'N->S': ['实践能力', '细节关注', '现实应用'],
        'T->F': ['情感智慧', '人际敏感', '价值考量'],
        'F->T': ['逻辑分析', '客观决策', '效率提升'],
        'J->P': ['灵活应变', '开放态度', '即兴发挥'],
        'P->J': ['计划执行', '结构组织', '目标管理']
    };

    let areas = [];
    
    // 分析每个维度的差异
    for (let i = 0; i < 4; i++) {
        if (typeFrom[i] !== typeTo[i]) {
            const direction = `${typeFrom[i]}->${typeTo[i]}`;
            const growthArea = growthDirections[direction];
            if (growthArea) {
                areas = areas.concat(growthArea);
            }
        }
    }

    return areas.join('、');
}
function getStressBehaviors(type1, type2) {
    // 定义不同类型在压力下的表现特征
    const stressPatterns = {
        'INTJ': {
            early: ['变得过分批判', '强迫性计划', '退出社交'],
            severe: ['情绪爆发', '自我怀疑', '完美主义倾向'],
            triggers: ['无能和低效', '失去控制', '逻辑混乱'],
            recovery: ['需要独处思考', '系统重建', '理性分析']
        },
        'INTP': {
            early: ['过度分析', '忽视细节', '社交退缩'],
            severe: ['决策瘫痪', '情绪不稳', '自我怀疑'],
            triggers: ['逻辑缺陷', '外部压力', '时间限制'],
            recovery: ['需要思考空间', '探索新概念', '独立解决']
        },
        'ENTJ': {
            early: ['变得专制', '工作狂倾向', '情绪急躁'],
            severe: ['失去耐心', '过度控制', '忽视他人'],
            triggers: ['效率低下', '能力质疑', '失去控制'],
            recovery: ['需要成就感', '系统重建', '目标确认']
        },
        'ENTP': {
            early: ['过度辩论', '注意力分散', '忽视细节'],
            severe: ['情绪波动', '决策困难', '怀疑一切'],
            triggers: ['限制束缚', '重复枯燥', '失去可能性'],
            recovery: ['需要创新空间', '探索选项', '理论讨论']
        },
        'INFJ': {
            early: ['过度理想化', '自我封闭', '回避冲突'],
            severe: ['情绪敏感', '自我否定', '极端完美主义'],
            triggers: ['价值冲突', '人际压力', '失去意义'],
            recovery: ['需要独处时间', '价值重建', '创意表达']
        },
        'INFP': {
            early: ['情感封闭', '自我批判', '逃避现实'],
            severe: ['情绪崩溃', '价值怀疑', '失去方向'],
            triggers: ['价值否定', '冲突压力', '失去真实性'],
            recovery: ['需要情感支持', '价值确认', '创意释放']
        },
        'ENFJ': {
            early: ['过度关心', '情绪化', '控制倾向'],
            severe: ['人际耗竭', '自我否定', '价值混乱'],
            triggers: ['关系冲突', '价值质疑', '失去和谐'],
            recovery: ['需要认可支持', '关系修复', '意义重建']
        },
        'ENFP': {
            early: ['过度分散', '情绪不稳', '逃避责任'],
            severe: ['方向迷失', '价值怀疑', '自我否定'],
            triggers: ['限制压抑', '失去可能', '价值冲突'],
            recovery: ['需要自由空间', '创意释放', '情感支持']
        },
        'ISTJ': {
            early: ['过分固执', '细节执着', '情感封闭'],
            severe: ['规则强化', '无法变通', '情绪压抑'],
            triggers: ['规则打破', '混乱无序', '突发变化'],
            recovery: ['需要秩序重建', '程序确认', '独处时间']
        },
        'ISFJ': {
            early: ['过度担忧', '细节纠结', '回避冲突'],
            severe: ['情绪内耗', '责任过重', '自我否定'],
            triggers: ['关系破裂', '责任压力', '改变冲击'],
            recovery: ['需要稳定环境', '关系和谐', '例行程序']
        },
        'ESTJ': {
            early: ['控制加强', '情绪暴躁', '批判增加'],
            severe: ['独断专行', '情感失控', '过度工作'],
            triggers: ['效率低下', '规则违反', '失去控制'],
            recovery: ['需要秩序重建', '目标确认', '成果展现']
        },
        'ESFJ': {
            early: ['过度操心', '情绪化', '寻求认可'],
            severe: ['人际耗竭', '自我否定', '角色混乱'],
            triggers: ['关系冲突', '否定批评', '失去和谐'],
            recovery: ['需要关系修复', '角色确认', '情感支持']
        },
        'ISTP': {
            early: ['退出互动', '冷漠疏离', '行动减少'],
            severe: ['情感麻木', '能力怀疑', '系统崩溃'],
            triggers: ['能力质疑', '过度约束', '逻辑混乱'],
            recovery: ['需要独处空间', '动手实践', '系统重建']
        },
        'ISFP': {
            early: ['情感退缩', '回避冲突', '行动减少'],
            severe: ['价值怀疑', '自我否定', '创造力丧失'],
            triggers: ['价值冲突', '自由限制', '情感压抑'],
            recovery: ['需要自由空间', '审美体验', '情感表达']
        },
        'ESTP': {
            early: ['冲动增加', '注意力散乱', '风险行为'],
            severe: ['情绪爆发', '行为失控', '系统崩溃'],
            triggers: ['限制束缚', '缺乏刺激', '能力质疑'],
            recovery: ['需要行动自由', '实践体验', '即时成就']
        },
        'ESFP': {
            early: ['过度社交', '注意力分散', '逃避责任'],
            severe: ['情绪波动', '自我怀疑', '方向迷失'],
            triggers: ['自由限制', '否定批评', '重复枯燥'],
            recovery: ['需要社交支持', '感官刺激', '即时快乐']
        }
    };

    // 分析两种类型的压力行为模式
    let analysis = [];

    // 分析每种类型的压力表现
    [type1, type2].forEach(type => {
        const pattern = stressPatterns[type];
        if (pattern) {
            analysis.push(`${type}的压力行为模式：`);
            analysis.push(`- 早期信号：${pattern.early.join('、')}`);
            analysis.push(`- 严重表现：${pattern.severe.join('、')}`);
            analysis.push(`- 主要触发：${pattern.triggers.join('、')}`);
            analysis.push(`- 恢复需求：${pattern.recovery.join('、')}`);
            analysis.push('');
        }
    });

    // 添加互动建议
    analysis = analysis.concat(getStressInteractionTips(type1, type2));

    return analysis.join('\n');
}

function getStressInteractionTips(type1, type2) {
    let tips = [];
    
    tips.push('压力互动建议：');

    // 基于能量方向的建议（E/I）
    if (type1[0] !== type2[0]) {
        tips.push('\n1. 能量管理：');
        tips.push(`- ${type1[0] === 'E' ? type1 : type2}压力下需要互动和表达`);
        tips.push(`- ${type1[0] === 'I' ? type1 : type2}压力下需要独处和内省`);
        tips.push('- 尊重彼此不同的压力释放方式');
    }

    // 基于信息处理的建议（S/N）
    if (type1[1] !== type2[1]) {
        tips.push('\n2. 问题处理：');
        tips.push(`- ${type1[1] === 'S' ? type1 : type2}需要具体的解决方案`);
        tips.push(`- ${type1[1] === 'N' ? type1 : type2}需要探索可能性`);
        tips.push('- 结合实际和创新的解决思路');
    }

    // 基于决策方式的建议（T/F）
    if (type1[2] !== type2[2]) {
        tips.push('\n3. 支持方式：');
        tips.push(`- ${type1[2] === 'T' ? type1 : type2}需要逻辑分析和解决方案`);
        tips.push(`- ${type1[2] === 'F' ? type1 : type2}需要情感支持和理解`);
        tips.push('- 平衡理性分析和情感支持');
    }

    // 基于生活方式的建议（J/P）
    if (type1[3] !== type2[3]) {
        tips.push('\n4. 恢复策略：');
        tips.push(`- ${type1[3] === 'J' ? type1 : type2}需要重建结构和控制`);
        tips.push(`- ${type1[3] === 'P' ? type1 : type2}需要保持灵活和开放`);
        tips.push('- 在结构和灵活性之间找到平衡');
    }

    // 添加预防和恢复建议
    tips = tips.concat(getStressPreventionTips(type1, type2));
    tips = tips.concat(getStressRecoveryTips(type1, type2));

    return tips;
}

function getStressPreventionTips(type1, type2) {
    let tips = [];
    
    tips.push('\n压力预防策略：');
    tips.push('1. 日常观察：');
    tips.push('- 关注对方的压力信号');
    tips.push('- 识别潜在的压力源');
    tips.push('- 保持开放的沟通');

    tips.push('\n2. 环境调整：');
    tips.push('- 创造支持性环境');
    tips.push('- 减少已知的压力源');
    tips.push('- 维护健康的界限');

    tips.push('\n3. 定期交流：');
    tips.push('- 分享压力状况');
    tips.push('- 讨论预防措施');
    tips.push('- 建立支持机制');

    return tips;
}

function getStressRecoveryTips(type1, type2) {
    let tips = [];
    
    tips.push('\n压力恢复策略：');
    tips.push('1. 及时介入：');
    tips.push('- 识别严重程度');
    tips.push('- 提供适当支持');
    tips.push('- 尊重恢复节奏');

    tips.push('\n2. 恢复方案：');
    tips.push('- 建立恢复计划');
    tips.push('- 调整生活节奏');
    tips.push('- 寻求必要帮助');

    tips.push('\n3. 长期预防：');
    tips.push('- 建立压力管理机制');
    tips.push('- 培养健康习惯');
    tips.push('- 增强心理韧性');

    return tips;
}
function getGrowthPotential(type1, type2) {
    // 定义不同类型的成长潜力和发展方向
    const growthPatterns = {
        'INTJ': {
            strengths: ['战略思维', '系统规划', '独立分析'],
            growth_areas: ['情感表达', '人际互动', '灵活适应'],
            development_path: ['培养同理心', '提升沟通技巧', '增强适应性'],
            ideal_environment: ['知识丰富', '自主空间', '持续改进']
        },
        'INTP': {
            strengths: ['逻辑分析', '概念创新', '问题解决'],
            growth_areas: ['执行力', '情感交流', '实践应用'],
            development_path: ['强化执行', '发展情商', '联系实际'],
            ideal_environment: ['探索自由', '思考空间', '创新机会']
        },
        'ENTJ': {
            strengths: ['领导能力', '目标达成', '战略规划'],
            growth_areas: ['情感敏感度', '灵活性', '耐心'],
            development_path: ['培养同理心', '增加适应性', '提升包容性'],
            ideal_environment: ['挑战机会', '领导角色', '系统环境']
        },
        'ENTP': {
            strengths: ['创新思维', '适应能力', '概念整合'],
            growth_areas: ['执行力', '细节关注', '情感稳定'],
            development_path: ['加强执行', '提升专注', '深化关系'],
            ideal_environment: ['创新空间', '思维激发', '灵活环境']
        },
        'INFJ': {
            strengths: ['洞察力', '同理心', '创造力'],
            growth_areas: ['自我主张', '实践能力', '界限设定'],
            development_path: ['增强表达', '提升实践', '建立界限'],
            ideal_environment: ['和谐氛围', '意义导向', '个人空间']
        },
        'INFP': {
            strengths: ['创造力', '价值观', '同理心'],
            growth_areas: ['执行力', '现实应对', '决策能力'],
            development_path: ['强化执行', '增加实践', '提升决断'],
            ideal_environment: ['价值认同', '创意空间', '个人发展']
        },
        'ENFJ': {
            strengths: ['人际影响', '团队建设', '愿景传达'],
            growth_areas: ['个人界限', '客观分析', '自我关注'],
            development_path: ['建立界限', '增强理性', '平衡自我'],
            ideal_environment: ['团队合作', '价值实现', '人际互动']
        },
        'ENFP': {
            strengths: ['创新能力', '人际魅力', '适应性'],
            growth_areas: ['专注力', '执行力', '细节管理'],
            development_path: ['提升专注', '强化执行', '注重细节'],
            ideal_environment: ['创新机会', '人际互动', '灵活空间']
        },
        'ISTJ': {
            strengths: ['责任心', '组织能力', '细节关注'],
            growth_areas: ['创新思维', '灵活性', '情感表达'],
            development_path: ['增加创新', '提升适应性', '开放表达'],
            ideal_environment: ['秩序结构', '清晰规则', '稳定环境']
        },
        'ISFJ': {
            strengths: ['责任心', '关怀他人', '实践能力'],
            growth_areas: ['自我主张', '创新思维', '应对变化'],
            development_path: ['增强自信', '培养创新', '提升适应'],
            ideal_environment: ['和谐稳定', '明确角色', '支持性环境']
        },
        'ESTJ': {
            strengths: ['组织能力', '执行力', '目标达成'],
            growth_areas: ['情感敏感度', '灵活性', '创新思维'],
            development_path: ['提升同理心', '增加适应性', '培养创新'],
            ideal_environment: ['结构清晰', '效率导向', '目标明确']
        },
        'ESFJ': {
            strengths: ['人际关系', '组织能力', '服务精神'],
            growth_areas: ['独立性', '创新思维', '自我关注'],
            development_path: ['加强独立', '培养创新', '平衡自我'],
            ideal_environment: ['和谐氛围', '团队合作', '明确角色']
        },
        'ISTP': {
            strengths: ['问题解决', '技术能力', '危机应对'],
            growth_areas: ['长期规划', '情感表达', '人际互动'],
            development_path: ['发展规划', '提升表达', '增进关系'],
            ideal_environment: ['实践机会', '独立空间', '技术环境']
        },
        'ISFP': {
            strengths: ['审美能力', '同理心', '实践能力'],
            growth_areas: ['主动性', '长期规划', '自我主张'],
            development_path: ['增强主动', '培养规划', '加强表达'],
            ideal_environment: ['艺术空间', '自由表达', '真实体验']
        },
        'ESTP': {
            strengths: ['行动力', '问题解决', '适应能力'],
            growth_areas: ['长期规划', '情感深度', '持续性'],
            development_path: ['培养规划', '深化情感', '增强持续'],
            ideal_environment: ['行动机会', '实践体验', '灵活环境']
        },
        'ESFP': {
            strengths: ['人际魅力', '实践能力', '适应性'],
            growth_areas: ['规划能力', '深度思考', '持续专注'],
            development_path: ['增强规划', '深化思考', '提升专注'],
            ideal_environment: ['社交机会', '实践体验', '自由表达']
        }
    };

    let analysis = analyzePotentialCompatibility(type1, type2);
    
    // 分析具体成长机会
    let potential = ['成长潜力分析：'];
    
    [type1, type2].forEach(type => {
        const pattern = growthPatterns[type];
        if (pattern) {
            potential.push(`\n${type}的发展特征：`);
            potential.push(`- 核心优势：${pattern.strengths.join('、')}`);
            potential.push(`- 成长领域：${pattern.growth_areas.join('、')}`);
            potential.push(`- 发展路径：${pattern.development_path.join('、')}`);
            potential.push(`- 理想环境：${pattern.ideal_environment.join('、')}`);
        }
    });

    // 添加互补成长建议
    potential.push('\n互补成长机会：');
    potential = potential.concat(getComplementaryGrowthTips(type1, type2));

    // 添加共同发展建议
    potential.push('\n共同发展方向：');
    potential = potential.concat(getSharedDevelopmentTips(type1, type2));

    return potential.join('\n');
}

function analyzePotentialCompatibility(type1, type2) {
    // 分析两种类型的互补性和成长潜力
    let compatibility = {
        cognitive: analyzeCognitivePotential(type1, type2),
        interaction: analyzeInteractionPotential(type1, type2),
        development: analyzeSharedDevelopment(type1, type2)
    };

    return compatibility;
}

function analyzeCognitivePotential(type1, type2) {
    // 分析认知功能的互补性
    const cognitivePairs = {
        'Ni-Ne': '直觉深度与广度的互补',
        'Si-Se': '经验积累与即时感知的互补',
        'Ti-Te': '内部逻辑与外部效率的互补',
        'Fi-Fe': '个人价值与群体和谐的互补'
    };

    let potential = [];
    
    // 比较主要认知功能
    const stack1 = mbtiTypes[type1].stack.slice(0, 2);
    const stack2 = mbtiTypes[type2].stack.slice(0, 2);
    
    stack1.forEach(func1 => {
        stack2.forEach(func2 => {
            const pair = [func1, func2].sort().join('-');
            if (cognitivePairs[pair]) {
                potential.push(cognitivePairs[pair]);
            }
        });
    });

    return potential;
}

function analyzeInteractionPotential(type1, type2) {
    // 分析互动模式的潜力
    let potential = [];
    
    // 分析能量方向（E/I）的互补
    if (type1[0] !== type2[0]) {
        potential.push('内外能量的平衡互补');
    }
    
    // 分析信息处理（S/N）的互补
    if (type1[1] !== type2[1]) {
        potential.push('具象与抽象思维的结合');
    }
    
    // 分析决策方式（T/F）的互补
    if (type1[2] !== type2[2]) {
        potential.push('逻辑与价值判断的平衡');
    }
    
    // 分析生活方式（J/P）的互补
    if (type1[3] !== type2[3]) {
        potential.push('计划与灵活性的结合');
    }

    return potential;
}

function analyzeSharedDevelopment(type1, type2) {
    // 分析共同发展方向
    let development = [];

    // 基于共同的维度提供发展建议
    for (let i = 0; i < 4; i++) {
        if (type1[i] === type2[i]) {
            switch(type1[i]) {
                case 'E':
                    development.push('共同发展社交领导力');
                    break;
                case 'I':
                    development.push('深化独立思考能力');
                    break;
                case 'S':
                    development.push('强化实践执行能力');
                    break;
                case 'N':
                    development.push('提升创新战略思维');
                    break;
                case 'T':
                    development.push('发展系统分析能力');
                    break;
                case 'F':
                    development.push('增强人际影响力');
                    break;
                case 'J':
                    development.push('完善规划组织能力');
                    break;
                case 'P':
                    development.push('提升适应创新能力');
                    break;
            }
        }
    }

    return development;
}

function getComplementaryGrowthTips(type1, type2) {
    let tips = [];

    // 基于类型差异提供互补成长建议
    if (type1[0] !== type2[0]) {  // E/I差异
        tips.push(`- ${type1[0] === 'E' ? type1 : type2}可以学习内省和深度思考`);
        tips.push(`- ${type1[0] === 'I' ? type1 : type2}可以发展社交和表达能力`);
    }

    if (type1[1] !== type2[1]) {  // S/N差异
        tips.push(`- ${type1[1] === 'S' ? type1 : type2}可以培养创新和远见`);
        tips.push(`- ${type1[1] === 'N' ? type1 : type2}可以加强实践和细节关注`);
    }

    if (type1[2] !== type2[2]) {  // T/F差异
        tips.push(`- ${type1[2] === 'T' ? type1 : type2}可以提升情感智慧`);
        tips.push(`- ${type1[2] === 'F' ? type1 : type2}可以强化逻辑分析`);
    }

    if (type1[3] !== type2[3]) {  // J/P差异
        tips.push(`- ${type1[3] === 'J' ? type1 : type2}可以增加灵活适应性`);
        tips.push(`- ${type1[3] === 'P' ? type1 : type2}可以提升计划执行力`);
    }

    return tips;
}

function getSharedDevelopmentTips(type1, type2) {
    let tips = [];

    tips.push('1. 共同学习领域：');
    tips.push('- 沟通技巧的提升');
    tips.push('- 情商能力的发展');
    tips.push('- 领导力的培养');
    tips.push('- 创新思维的开发');

    tips.push('\n2. 发展策略：');
    tips.push('- 定期进行成长对话');
    tips.push('- 共同参与学习活动');
    tips.push('- 互相提供建设性反馈');
    tips.push('- 建立成长支持系统');

    tips.push('\n3. 长期目标：');
    tips.push('- 建立共同的价值观');
    tips.push('- 发展互补的能力');
    tips.push('- 创造协同效应');
    tips.push('- 实现共同成长');

    return tips;
}
function getGrowthOpportunities(type1, type2) {
    // 定义每种类型的关键成长机会
    const growthOpportunities = {
        'INTJ': {
            personal: ['发展情感智慧', '提升人际敏感度', '增强灵活性'],
            professional: ['领导力培养', '团队协作', '沟通技巧'],
            relationship: ['情感表达', '同理心培养', '耐心倾听'],
            challenges: ['过度完美主义', '情感疏离', '固执己见']
        },
        'INTP': {
            personal: ['提升执行力', '发展情商', '建立规律'],
            professional: ['项目管理', '实践应用', '团队合作'],
            relationship: ['情感表达', '建立联结', '主动维护'],
            challenges: ['拖延倾向', '社交回避', '过度分析']
        },
        'ENTJ': {
            personal: ['培养同理心', '提升包容性', '放松控制'],
            professional: ['情商提升', '团队建设', '创新思维'],
            relationship: ['情感敏感度', '倾听技巧', '平等对话'],
            challenges: ['控制欲强', '情感忽视', '急躁苛刻']
        },
        'ENTP': {
            personal: ['提升执行力', '培养专注', '建立规律'],
            professional: ['项目完成', '时间管理', '细节关注'],
            relationship: ['承诺稳定', '情感深度', '责任担当'],
            challenges: ['注意力分散', '缺乏持续', '情感飘忽']
        },
        'INFJ': {
            personal: ['自我主张', '建立界限', '实践能力'],
            professional: ['决策果断', '项目执行', '自信表达'],
            relationship: ['需求表达', '自我价值', '合理期待'],
            challenges: ['过度理想化', '自我否定', '回避冲突']
        },
        'INFP': {
            personal: ['提升执行力', '现实应对', '决策能力'],
            professional: ['目标设定', '时间管理', '项目完成'],
            relationship: ['界限设定', '现实期待', '冲突处理'],
            challenges: ['现实回避', '优柔寡断', '自我否定']
        },
        'ENFJ': {
            personal: ['自我关注', '建立界限', '独立判断'],
            professional: ['客观分析', '压力管理', '资源分配'],
            relationship: ['个人空间', '需求表达', '合理期待'],
            challenges: ['过度操心', '自我忽视', '讨好倾向']
        },
        'ENFP': {
            personal: ['提升专注', '执行力', '规律生活'],
            professional: ['项目管理', '细节关注', '计划执行'],
            relationship: ['承诺稳定', '深度发展', '责任担当'],
            challenges: ['注意力分散', '缺乏持续', '规划不足']
        },
        'ISTJ': {
            personal: ['增加灵活性', '创新思维', '开放心态'],
            professional: ['创新能力', '变革适应', '愿景思维'],
            relationship: ['情感表达', '同理心', '灵活互动'],
            challenges: ['过度保守', '抗拒变化', '情感压抑']
        },
        'ISFJ': {
            personal: ['自我主张', '创新思维', '变化适应'],
            professional: ['主动创新', '决策果断', '领导力'],
            relationship: ['需求表达', '界限设定', '自我价值'],
            challenges: ['过度顺从', '自我忽视', '抗拒变化']
        },
        'ESTJ': {
            personal: ['情感智慧', '灵活适应', '包容性'],
            professional: ['创新思维', '团队建设', '同理心'],
            relationship: ['情感交流', '耐心倾听', '灵活互动'],
            challenges: ['固执己见', '情感忽视', '过度控制']
        },
        'ESFJ': {
            personal: ['独立判断', '自我价值', '创新思维'],
            professional: ['独立决策', '创新能力', '压力管理'],
            relationship: ['自我边界', '独立空间', '理性判断'],
            challenges: ['过度依赖', '自我否定', '讨好他人']
        },
        'ISTP': {
            personal: ['情感表达', '长期规划', '承诺能力'],
            professional: ['团队协作', '项目管理', '沟通技巧'],
            relationship: ['情感投入', '关系维护', '稳定发展'],
            challenges: ['情感疏离', '计划不足', '承诺恐惧']
        },
        'ISFP': {
            personal: ['自我主张', '目标设定', '计划执行'],
            professional: ['领导能力', '决策果断', '长期规划'],
            relationship: ['主动表达', '冲突处理', '关系引导'],
            challenges: ['被动退缩', '目标模糊', '回避责任']
        },
        'ESTP': {
            personal: ['长期规划', '情感深度', '承诺能力'],
            professional: ['战略思维', '项目管理', '团队建设'],
            relationship: ['情感投入', '稳定发展', '深度连接'],
            challenges: ['冲动行事', '缺乏规划', '情感浅尝']
        },
        'ESFP': {
            personal: ['规划能力', '深度思考', '自我约束'],
            professional: ['项目管理', '战略思维', '执行力'],
            relationship: ['承诺稳定', '深度发展', '责任担当'],
            challenges: ['即兴冲动', '缺乏规划', '责任回避']
        }
    };

    let opportunities = [];
    
    // 分析两种类型的成长机会
    opportunities.push('个人成长机会分析：');
    [type1, type2].forEach(type => {
        const growth = growthOpportunities[type];
        if (growth) {
            opportunities.push(`\n${type}的成长方向：`);
            opportunities.push(`- 个人发展：${growth.personal.join('、')}`);
            opportunities.push(`- 职业发展：${growth.professional.join('、')}`);
            opportunities.push(`- 关系发展：${growth.relationship.join('、')}`);
            opportunities.push(`- 需要注意：${growth.challenges.join('、')}`);
        }
    });

    // 添加互补成长建议
    opportunities.push('\n互补成长机会：');
    opportunities = opportunities.concat(getComplementaryOpportunities(type1, type2));

    // 添加共同发展建议
    opportunities.push('\n共同发展机会：');
    opportunities = opportunities.concat(getSharedOpportunities(type1, type2));

    // 添加实践建议
    opportunities.push('\n实践发展建议：');
    opportunities = opportunities.concat(getPracticalDevelopmentTips(type1, type2));

    return opportunities.join('\n');
}

function getComplementaryOpportunities(type1, type2) {
    let opportunities = [];
    
    // 分析维度差异带来的互补机会
    if (type1[0] !== type2[0]) {  // E/I差异
        opportunities.push('能量互补：');
        opportunities.push(`- ${type1[0] === 'E' ? type1 : type2}可以帮助拓展社交视野`);
        opportunities.push(`- ${type1[0] === 'I' ? type1 : type2}可以提供深度思考`);
    }

    if (type1[1] !== type2[1]) {  // S/N差异
        opportunities.push('认知互补：');
        opportunities.push(`- ${type1[1] === 'S' ? type1 : type2}可以提供实践经验`);
        opportunities.push(`- ${type1[1] === 'N' ? type1 : type2}可以开拓创新视野`);
    }

    if (type1[2] !== type2[2]) {  // T/F差异
        opportunities.push('决策互补：');
        opportunities.push(`- ${type1[2] === 'T' ? type1 : type2}可以提供逻辑分析`);
        opportunities.push(`- ${type1[2] === 'F' ? type1 : type2}可以增进情感理解`);
    }

    if (type1[3] !== type2[3]) {  // J/P差异
        opportunities.push('生活方式互补：');
        opportunities.push(`- ${type1[3] === 'J' ? type1 : type2}可以提供规划结构`);
        opportunities.push(`- ${type1[3] === 'P' ? type1 : type2}可以带来灵活适应`);
    }

    return opportunities;
}

function getSharedOpportunities(type1, type2) {
    let opportunities = [];

    // 基于共同维度提供发展机会
    let commonDimensions = [];
    for (let i = 0; i < 4; i++) {
        if (type1[i] === type2[i]) {
            commonDimensions.push(type1[i]);
        }
    }

    if (commonDimensions.includes('E')) {
        opportunities.push('共同发展外向优势：');
        opportunities.push('- 拓展社交网络');
        opportunities.push('- 提升领导能力');
        opportunities.push('- 增强影响力');
    }

    if (commonDimensions.includes('I')) {
        opportunities.push('共同发展内向优势：');
        opportunities.push('- 深化思考能力');
        opportunities.push('- 提升专注度');
        opportunities.push('- 培养独立性');
    }

    if (commonDimensions.includes('S')) {
        opportunities.push('共同发展实践优势：');
        opportunities.push('- 强化执行能力');
        opportunities.push('- 提升效率');
        opportunities.push('- 完善细节管理');
    }

    if (commonDimensions.includes('N')) {
        opportunities.push('共同发展直觉优势：');
        opportunities.push('- 培养创新能力');
        opportunities.push('- 发展战略思维');
        opportunities.push('- 拓展可能性');
    }

    return opportunities;
}

function getPracticalDevelopmentTips(type1, type2) {
    let tips = [];

    tips.push('1. 学习与成长：');
    tips.push('- 共同参与培训和学习');
    tips.push('- 分享知识和经验');
    tips.push('- 互相提供反馈和建议');

    tips.push('\n2. 能力提升：');
    tips.push('- 制定共同的发展目标');
    tips.push('- 相互激励和督促');
    tips.push('- 庆祝进步和成就');

    tips.push('\n3. 关系发展：');
    tips.push('- 建立有效的沟通机制');
    tips.push('- 培养共同兴趣');
    tips.push('- 创造共享经验');

    tips.push('\n4. 长期规划：');
    tips.push('- 设定共同的远景目标');
    tips.push('- 制定发展路线图');
    tips.push('- 定期评估和调整');

    return tips;
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
<div class="test-type-selection">
    <button class="test-type-button active" data-test="personality">性格类型测试</button>
    <button class="test-type-button" data-test="relationship" style="
        background: var(--bg-gray);
        color: var(--text-gray);
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
