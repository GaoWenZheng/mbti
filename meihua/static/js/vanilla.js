(() => {
  "use strict";

  const ELEMENT_COLORS = Object.freeze({
    金: "#D89114",
    木: "#40B043",
    水: "#3973F1",
    火: "#C50000",
    土: "#8D7047",
  });

  const GUA = [
    null,
    { name: "乾", icon: "☰", yao: [1, 1, 1], gan: [], zhi: ["戌", "亥"], wuxing: "金", color: ELEMENT_COLORS.金, shengke: [["坎"], ["震", "巽"], ["乾"], ["兑"]], cool: "丑", kong: "戌亥" },
    { name: "兑", icon: "☱", yao: [0, 1, 1], gan: ["庚", "辛"], zhi: ["酉"], wuxing: "金", color: ELEMENT_COLORS.金, shengke: [["坎"], ["震", "巽"], ["兑"], ["乾"]], cool: "丑", kong: "申酉" },
    { name: "离", icon: "☲", yao: [1, 0, 1], gan: ["丙", "丁"], zhi: ["午"], wuxing: "火", color: ELEMENT_COLORS.火, shengke: [["艮", "坤"], ["乾", "兑"], ["离"], []], cool: "戌", kong: "午未" },
    { name: "震", icon: "☳", yao: [0, 0, 1], gan: ["甲", "乙"], zhi: ["卯"], wuxing: "木", color: ELEMENT_COLORS.木, shengke: [["离"], ["艮", "坤"], ["震"], ["巽"]], cool: "未", kong: "寅卯" },
    { name: "巽", icon: "☴", yao: [1, 1, 0], gan: [], zhi: ["辰", "巳"], wuxing: "木", color: ELEMENT_COLORS.木, shengke: [["离"], ["艮", "坤"], ["巽"], ["震"]], cool: "未", kong: "辰巳" },
    { name: "坎", icon: "☵", yao: [0, 1, 0], gan: ["壬", "癸"], zhi: ["子"], wuxing: "水", color: ELEMENT_COLORS.水, shengke: [["震", "巽"], ["离"], ["坎"], []], cool: "辰", kong: "子丑" },
    { name: "艮", icon: "☶", yao: [1, 0, 0], gan: [], zhi: ["丑", "寅"], wuxing: "土", color: ELEMENT_COLORS.土, shengke: [["乾", "兑"], ["坎"], ["艮", "坤"], []], cool: null, kong: "子丑" },
    { name: "坤", icon: "☷", yao: [0, 0, 0], gan: [], zhi: ["未", "申"], wuxing: "土", color: ELEMENT_COLORS.土, shengke: [["乾", "兑"], ["坎"], ["艮", "坤"], []], cool: null, kong: "午未" },
  ];

  const HEXAGRAM_NAMES = {
    111111: "乾为天", 0: "坤为地", 10001: "水雷屯", 100010: "山水蒙",
    10111: "水天需", 111010: "天水讼", 10: "地水师", 10000: "水地比",
    110111: "风天小畜", 111011: "天泽履", 111: "地天泰", 111000: "天地否",
    111101: "天火同人", 101111: "火天大有", 100: "地山谦", 1000: "雷地豫",
    11001: "泽雷随", 100110: "山风蛊", 11: "地泽临", 110000: "风地观",
    101001: "火雷噬嗑", 100101: "山火贲", 100000: "山地剥", 1: "地雷复",
    111001: "天雷无妄", 100111: "山天大畜", 100001: "山雷颐", 11110: "泽风大过",
    10010: "坎为水", 101101: "离为火", 11100: "泽山咸", 1110: "雷风恒",
    111100: "天山遁", 1111: "雷天大壮", 101000: "火地晋", 101: "地火明夷",
    110101: "风火家人", 101011: "火泽睽", 10100: "水山蹇", 1010: "雷水解",
    100011: "山泽损", 110001: "风雷益", 11111: "泽天夬", 111110: "天风姤",
    11000: "泽地萃", 110: "地风升", 11010: "泽水困", 10110: "水风井",
    11101: "泽火革", 101110: "火风鼎", 1001: "震为雷", 100100: "艮为山",
    110100: "风山渐", 1011: "雷泽归妹", 1101: "雷火丰", 101100: "火山旅",
    110110: "巽为风", 11011: "兑为泽", 110010: "风水涣", 10011: "水泽节",
    110011: "风泽中孚", 1100: "雷山小过", 10101: "水火既济", 101010: "火水未济",
  };

  const SHENSHA = {
    rilu: { 甲: "寅", 乙: "卯", 丙: "巳", 丁: "午", 戊: "巳", 己: "午", 庚: "申", 辛: "酉", 壬: "亥", 癸: "子" },
    guiren: { 甲: ["丑", "未"], 乙: ["子", "申"], 丙: ["亥", "酉"], 丁: ["亥", "酉"], 戊: ["丑", "未"], 己: ["子", "申"], 庚: ["丑", "未"], 辛: ["午", "寅"], 壬: ["巳", "卯"], 癸: ["巳", "卯"] },
    taohua: { 子: "酉", 丑: "午", 寅: "卯", 卯: "子", 辰: "酉", 巳: "午", 午: "卯", 未: "子", 申: "酉", 酉: "午", 戌: "卯", 亥: "子" },
    yima: { 子: "寅", 丑: "亥", 寅: "申", 卯: "巳", 辰: "寅", 巳: "亥", 午: "申", 未: "巳", 申: "寅", 酉: "亥", 戌: "申", 亥: "巳" },
  };

  const STEMS = [..."甲乙丙丁戊己庚辛壬癸"];
  const BRANCHES = [..."子丑寅卯辰巳午未申酉戌亥"];
  const MONTH_BRANCHES = [..."寅卯辰巳午未申酉戌亥子丑"];
  const SHENSHA_ORDER = [
    "日禄", "贵人", "驿马", "桃花", "月德", "灾煞", "劫煞", "天德",
    "天医", "文昌", "将星", "华盖", "羊刃", "天马", "生气", "死气",
    "亡神", "病符", "丧门", "吊客", "破碎", "游都", "飞符", "血支",
    "孤辰", "寡宿", "官符", "死神",
  ];
  const MONTH_SHENSHA = {
    月德: [..."丙甲壬庚丙甲壬庚丙甲壬庚"],
    天德: [..."丁申壬辛亥甲癸寅丙乙巳庚"],
    天医: [..."戌亥子丑寅卯辰巳午未申酉"],
    天马: [..."午申戌子寅辰午申戌子寅辰"],
    生气: [..."子丑寅卯辰巳午未申酉戌亥"],
    死气: [..."午未申酉戌亥子丑寅卯辰巳"],
    血支: [..."丑寅卯辰巳午未申酉戌亥子"],
    死神: [..."巳午未申酉戌亥子丑寅卯辰"],
    孤辰: [..."巳巳巳申申申亥亥亥寅寅寅"],
    寡宿: [..."丑丑丑辰辰辰未未未戌戌戌"],
  };
  const STEM_SHENSHA = {
    文昌: { 甲: "巳", 乙: "午", 丙: "申", 丁: "酉", 戊: "申", 己: "酉", 庚: "亥", 辛: "子", 壬: "寅", 癸: "卯" },
    羊刃: { 甲: "卯", 乙: "寅", 丙: "午", 丁: "巳", 戊: "午", 己: "巳", 庚: "酉", 辛: "申", 壬: "子", 癸: "亥" },
    游都: { 甲: "丑", 己: "丑", 乙: "子", 庚: "子", 丙: "寅", 辛: "寅", 丁: "巳", 壬: "巳", 戊: "申", 癸: "申" },
    飞符: { 甲: "巳", 乙: "辰", 丙: "卯", 丁: "寅", 戊: "丑", 己: "午", 庚: "未", 辛: "申", 壬: "酉", 癸: "戌" },
  };
  const WANG_BRANCHES = [..."寅卯辰巳午未申酉戌亥子丑"];
  const WANG_ORDER = [
    ["木", "火", "水", "金", "土"], ["木", "火", "水", "金", "土"],
    ["土", "金", "火", "木", "水"], ["火", "土", "木", "水", "金"],
    ["火", "土", "木", "水", "金"], ["土", "金", "火", "木", "水"],
    ["金", "水", "土", "火", "木"], ["金", "水", "土", "火", "木"],
    ["土", "金", "火", "木", "水"], ["水", "木", "金", "土", "火"],
    ["水", "木", "金", "土", "火"], ["土", "金", "火", "木", "水"],
  ];
  const WANG_NAMES = ["旺", "相", "休", "囚", "死"];
  const RELATION_NAMES = ["生", "克", "冲", "合"];
  const GENERATES = { 木: "火", 火: "土", 土: "金", 金: "水", 水: "木" };
  const CONTROLS = { 木: "土", 土: "水", 水: "火", 火: "金", 金: "木" };
  const KONG_GUA = { 戌亥: "☰乾", 申酉: "☱兑", 午未: "☲离", 辰巳: "☴巽", 寅卯: "☳震", 子丑: "☵坎　☶艮" };
  const PERIOD_LABELS = { yearly: "年", monthly: "月", daily: "日", hourly: "时" };
  const YIJING_TEXTS = globalThis.YIJING_TEXTS || {};
  const DIVINATION_TYPES = [
    "天时", "人事", "家宅", "屋舍", "婚姻", "生产", "饮食", "求谋", "求名",
    "求财", "交易", "出行", "行人", "谒见", "失物", "疾病", "官讼", "坟墓",
  ];
  const GUA_IMAGES = {
    1: { direction: "西北", nature: "天、寒", people: "父、老人、官贵", body: "头、骨", animals: "马、狮、天鹅", objects: "金宝、珠玉、圆物、冠镜、刚物、木果", colors: "大赤、玄黄", character: "刚健、尊贵、果断" },
    2: { direction: "西", nature: "泽", people: "少女、巫、妾、奴婢", body: "口舌、肺", animals: "羊", objects: "毁折物、带口器、金刃、乐器、缺损物", colors: "白", character: "喜悦、口才、毁折" },
    3: { direction: "南", nature: "火、日、电、霓霞", people: "中女、文人", body: "目、心", animals: "雉、龟、蟹、蚌、鳖", objects: "甲胄、戈兵、文书、炉、干燥物、带壳物", colors: "红、赤、紫", character: "光明、文明、附丽" },
    4: { direction: "东", nature: "雷", people: "长男", body: "足、发、肝", animals: "龙、蛇、百虫", objects: "竹木、乐器、草木、柴、鲜物", colors: "青、碧、绿", character: "震动、奋起、声响" },
    5: { direction: "东南", nature: "风", people: "长女、僧尼、工匠", body: "股、胆、眼", animals: "鸡、百禽", objects: "绳、帆、扇、香、羽毛、枝叶、直物、工巧器", colors: "青、碧、绿", character: "进入、顺从、长直" },
    6: { direction: "北", nature: "水、雨、雪、月", people: "中男、江湖人、舟人、盗", body: "耳、血、肾", animals: "豕、鱼、狐、水族", objects: "沟渎、弓轮、盐、酒、带核物、桎梏", colors: "黑", character: "险陷、流动、隐伏" },
    7: { direction: "东北", nature: "山、土石", people: "少男、童子、阍寺", body: "手指、鼻、背", animals: "狗、鼠、虎、狐、黔喙", objects: "土石、瓜果、门阙、径路、藤生物", colors: "黄", character: "停止、阻隔、守成" },
    8: { direction: "西南", nature: "地、土", people: "母、老妇", body: "腹、脾胃", animals: "牛、百兽、百禽", objects: "布帛、文章、舆辇、方物、瓦器、书米谷", colors: "黄、黑", character: "柔顺、承载、包容" },
  };
  const THREE_ESSENTIALS = [
    { key: "ear", name: "耳要", hint: "记录当时听到的声音、言语、哭笑、动静" },
    { key: "eye", name: "目要", hint: "记录当时看到的人物、形状、颜色、动作" },
    { key: "mind", name: "心要", hint: "记录当时突然出现的念头、感受与直觉" },
  ];
  const TEN_RESPONSES = [
    { key: "weather", name: "天时", hint: "晴雨、云雾、日月、雷风" },
    { key: "geography", name: "地理", hint: "山水、道路、林木、窑灶、土石" },
    { key: "people", name: "人事", hint: "所遇人物、身份、动作与事件" },
    { key: "season", name: "时令", hint: "当令五行、寒暖、节候" },
    { key: "direction", name: "方卦", hint: "事情或来人的方向" },
    { key: "animal", name: "动物", hint: "所见禽兽虫鱼及其动作" },
    { key: "object", name: "静物", hint: "器物、形状、完整或破损" },
    { key: "speech", name: "言语", hint: "偶然听到的语句及语意" },
    { key: "sound", name: "声音", hint: "声响次数、远近、清浊、喜悲" },
    { key: "color", name: "五色", hint: "青赤黄白黑及综合色彩" },
    { key: "writing", name: "写字（附应）", hint: "偶见文字、笔画、书写内容" },
  ];

  const SOLAR_TERM_NAMES = [
    "小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨",
    "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑",
    "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至",
  ];
  const SOLAR_TERM_MINUTES = [
    0, 21208, 42467, 63836, 85337, 107014, 128867, 150921,
    173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033,
    353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758,
  ];

  const app = document.querySelector("#app");

  const state = {
    view: "form",
    mode: "numbers",
    divinationType: "人事",
    thing: "",
    numbers: "",
    top: null,
    bottom: null,
    moving: null,
    objectTop: 1,
    objectBottom: 3,
    time: new Date(),
    wangPeriod: "monthly",
    kuPeriod: "monthly",
    kongPeriod: "daily",
    classicIndex: 0,
    threeRecords: Object.fromEntries(THREE_ESSENTIALS.map((item) => [item.key, ""])),
    responseRecords: Object.fromEntries(TEN_RESPONSES.map((item) => [item.key, ""])),
    selectedShensha: new Set(["日禄", "贵人", "驿马", "桃花"]),
    shenshaExpanded: false,
  };

  const escapeHtml = (value = "") =>
    String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);

  const pad = (number) => String(number).padStart(2, "0");

  function formatDateTime(date, input = false) {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "";
    if (input) {
      return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
    }
    return `${date.getFullYear()}年${pad(date.getMonth() + 1)}月${pad(date.getDate())}日 ${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }

  function formatYmdHms(date) {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "";
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
  }

  function parseNumbers(value) {
    const raw = value.trim();
    if (!raw) return { valid: false, error: "", values: [] };
    const values = raw.split(/[^a-zA-Z0-9]+/).filter(Boolean);
    if (!values.length || values.some((item) => !/^\d+$/.test(item))) {
      return { valid: false, error: "报数里有非数字", values: [] };
    }
    return { valid: true, error: "", values: values.map(Number) };
  }

  function deriveNumbers(value) {
    const parsed = parseNumbers(value);
    if (!parsed.valid) return parsed;
    const { values } = parsed;
    let top;
    let bottom;
    let moving;
    if (values.length === 1) {
      top = values[0] % 8;
      bottom = values[0] % 8;
      moving = values[0] % 6;
    } else {
      const middle = Math.floor(values.length / 2);
      top = values.slice(0, middle).reduce((sum, number) => sum + number, 0) % 8;
      bottom = values.slice(middle).reduce((sum, number) => sum + number, 0) % 8;
      moving = values.reduce((sum, number) => sum + number, 0) % 6;
    }
    return {
      ...parsed,
      top: top || 8,
      bottom: bottom || 8,
      moving: moving || 6,
    };
  }

  function lunarDateParts(date) {
    const formatter = new Intl.DateTimeFormat("zh-CN-u-ca-chinese", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    const parts = Object.fromEntries(
      formatter.formatToParts(date).map((part) => [part.type, part.value]),
    );
    const monthText = (parts.month || "").replace("闰", "").replace("月", "");
    const monthNumbers = {
      正: 1, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6,
      七: 7, 八: 8, 九: 9, 十: 10, 十一: 11, 冬: 11,
      十二: 12, 腊: 12,
    };
    return {
      relatedYear: Number(parts.relatedYear),
      month: monthNumbers[monthText] || Number(monthText),
      monthLabel: parts.month,
      day: Number(parts.day),
      leap: (parts.month || "").includes("闰"),
    };
  }

  function deriveTimeGua(date) {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
      return { valid: false };
    }
    const lunar = lunarDateParts(date);
    if (!lunar.relatedYear || !lunar.month || !lunar.day) {
      return { valid: false };
    }
    const yearNumber = ((lunar.relatedYear - 4) % 12 + 12) % 12 + 1;
    const hourNumber = Math.floor((date.getHours() + 1) / 2) % 12 + 1;
    const upperSum = yearNumber + lunar.month + lunar.day;
    const total = upperSum + hourNumber;
    return {
      valid: true,
      top: upperSum % 8 || 8,
      bottom: total % 8 || 8,
      moving: total % 6 || 6,
      lunar,
      yearNumber,
      hourNumber,
      label: `${BRANCHES[yearNumber - 1]}年 ${lunar.monthLabel}${lunar.day}日 ${BRANCHES[hourNumber - 1]}时`,
    };
  }

  function applyTimeGua() {
    const derived = deriveTimeGua(state.time);
    state.numbers = "";
    state.top = derived.valid ? derived.top : null;
    state.bottom = derived.valid ? derived.bottom : null;
    state.moving = derived.valid ? derived.moving : null;
    return derived;
  }

  function deriveObjectGua(top, bottom, date) {
    if (!GUA[top] || !GUA[bottom] || !(date instanceof Date) || Number.isNaN(date.getTime())) {
      return { valid: false };
    }
    const hourNumber = Math.floor((date.getHours() + 1) / 2) % 12 + 1;
    const total = top + bottom + hourNumber;
    return {
      valid: true,
      top,
      bottom,
      moving: total % 6 || 6,
      hourNumber,
      total,
      label: `${GUA[top].icon}${GUA[top].name}为物象，${GUA[bottom].icon}${GUA[bottom].name}为${GUA_IMAGES[bottom].direction}方，${BRANCHES[hourNumber - 1]}时数${hourNumber}`,
    };
  }

  function applyObjectGua() {
    const derived = deriveObjectGua(state.objectTop, state.objectBottom, state.time);
    state.numbers = "";
    state.top = derived.valid ? derived.top : null;
    state.bottom = derived.valid ? derived.bottom : null;
    state.moving = derived.valid ? derived.moving : null;
    return derived;
  }

  function randomNumber(max) {
    if (globalThis.crypto?.getRandomValues) {
      const values = new Uint32Array(1);
      globalThis.crypto.getRandomValues(values);
      return (values[0] % max) + 1;
    }
    return Math.floor(Math.random() * max) + 1;
  }

  function generateRandomGua() {
    state.numbers = "";
    state.top = randomNumber(8);
    state.bottom = randomNumber(8);
    state.moving = randomNumber(6);
    state.time = new Date();
  }

  function validForm() {
    return Boolean(state.top && state.bottom && state.moving && !Number.isNaN(state.time.getTime()));
  }

  function renderForm() {
    const numberState = deriveNumbers(state.numbers);
    const timeState = deriveTimeGua(state.time);
    const objectState = deriveObjectGua(state.objectTop, state.objectBottom, state.time);
    app.innerHTML = `
      <div class="App">
        <div class="App-header">
          <div class="form-stack">
            <h3 class="form-title">梅花易数排盘</h3>
            <label class="form-row" for="divinationType">
              <span>占事类型：</span>
              <select class="ant-select" id="divinationType">
                ${DIVINATION_TYPES.map((type) => `<option value="${type}" ${state.divinationType === type ? "selected" : ""}>${type}</option>`).join("")}
              </select>
            </label>
            <label class="form-row" for="thingInput">
              <span>请输入事由：</span>
              <input class="ant-input" id="thingInput" value="${escapeHtml(state.thing)}" placeholder="请输入闻讯的是由(可选)" autocomplete="off">
            </label>
            <div class="tabs" role="tablist" aria-label="起卦方式">
              <button class="tab ${state.mode === "numbers" ? "active" : ""}" type="button" data-mode="numbers" role="tab" aria-selected="${state.mode === "numbers"}">报数起卦</button>
              <button class="tab ${state.mode === "time" ? "active" : ""}" type="button" data-mode="time" role="tab" aria-selected="${state.mode === "time"}">时间起卦</button>
              <button class="tab ${state.mode === "random" ? "active" : ""}" type="button" data-mode="random" role="tab" aria-selected="${state.mode === "random"}">自动起卦</button>
              <button class="tab ${state.mode === "manual" ? "active" : ""}" type="button" data-mode="manual" role="tab" aria-selected="${state.mode === "manual"}">手动起卦</button>
              <button class="tab ${state.mode === "object" ? "active" : ""}" type="button" data-mode="object" role="tab" aria-selected="${state.mode === "object"}">物象起卦</button>
            </div>
            <div class="tab-panel" ${state.mode === "numbers" ? "" : "hidden"}>
              <input class="ant-input ${numberState.error ? "error" : ""}" id="numbersInput" value="${escapeHtml(state.numbers)}" inputmode="numeric" placeholder="请输入报数，以空格分割" autocomplete="off">
              <span id="numberHelp" class="${numberState.error ? "form-err-txt" : "form-help-txt"}">
                ${numberState.error || "输入正确报数以后排盘按钮将会被启用"}
              </span>
            </div>
            <div class="tab-panel" ${state.mode === "time" ? "" : "hidden"}>
              <div class="cast-method-panel">
                <div class="time-cast-row">
                  <span>起卦时间：</span>
                  <input class="ant-input" id="timeCastInput" type="datetime-local" value="${formatDateTime(state.time, true)}">
                  <button class="ant-btn" id="timeCastNow" type="button">使用当前时间</button>
                </div>
                <div class="cast-preview">
                  <span>${timeState.valid ? timeState.label : "时间格式无效"}</span>
                  ${timeState.valid ? `<strong>上卦 ${GUA[timeState.top].icon}${GUA[timeState.top].name}　下卦 ${GUA[timeState.bottom].icon}${GUA[timeState.bottom].name}　${timeState.moving}爻动</strong>` : ""}
                </div>
              </div>
            </div>
            <div class="tab-panel" ${state.mode === "random" ? "" : "hidden"}>
              <div class="cast-method-panel random-panel">
                <span class="form-help-txt">由浏览器随机生成上卦、下卦和动爻</span>
                <div>
                  <button class="ant-btn" id="randomGuaButton" type="button">重新随机</button>
                  ${state.top && state.bottom && state.moving ? `<strong>　上卦 ${GUA[state.top].icon}${GUA[state.top].name}　下卦 ${GUA[state.bottom].icon}${GUA[state.bottom].name}　${state.moving}爻动</strong>` : ""}
                </div>
              </div>
            </div>
            <div class="tab-panel" ${state.mode === "manual" ? "" : "hidden"}>
              <div class="manual-stack">
                ${choiceGroup("上卦", "top", state.top)}
                ${choiceGroup("下卦", "bottom", state.bottom)}
                <div class="manual-row">
                  <span class="manual-label">变爻：</span>
                  <button class="ant-btn" type="button" id="timeMoving">时间取动爻</button>
                  <div class="radio-group">
                    ${[1, 2, 3, 4, 5, 6].map((line) => `<button class="choice ${state.moving === line ? "active" : ""}" type="button" data-moving="${line}">${["一", "二", "三", "四", "五", "六"][line - 1]}爻</button>`).join("")}
                  </div>
                  <input class="ant-input" id="timeInput" type="text" value="${escapeHtml(state.time?.toLocaleString() || "")}" aria-label="起卦时间">
                </div>
              </div>
            </div>
            <div class="tab-panel" ${state.mode === "object" ? "" : "hidden"}>
              <div class="object-cast-panel">
                <p class="object-formula">后天端法：物象为上卦，物来或所见方位为下卦，两卦数加时数取动爻。</p>
                <div class="object-cast-block">
                  <span class="manual-label">物象（上卦）：</span>
                  <div class="object-choice-grid">
                    ${GUA.slice(1).map((gua, index) => {
                      const guaIndex = index + 1;
                      return `<button class="object-choice ${state.objectTop === guaIndex ? "active" : ""}" type="button" data-object-top="${guaIndex}"><strong>${gua.icon}${gua.name}</strong><small>${GUA_IMAGES[guaIndex].nature} · ${GUA_IMAGES[guaIndex].objects.split("、").slice(0, 2).join("、")}</small></button>`;
                    }).join("")}
                  </div>
                </div>
                <div class="object-cast-block">
                  <span class="manual-label">方位（下卦）：</span>
                  <div class="direction-choice-grid">
                    ${GUA.slice(1).map((gua, index) => {
                      const guaIndex = index + 1;
                      return `<button class="direction-choice ${state.objectBottom === guaIndex ? "active" : ""}" type="button" data-object-bottom="${guaIndex}"><span>${GUA_IMAGES[guaIndex].direction}</span><strong>${gua.icon}${gua.name}</strong></button>`;
                    }).join("")}
                  </div>
                </div>
                <div class="time-cast-row">
                  <span>起卦时间：</span>
                  <input class="ant-input" id="objectTimeInput" type="datetime-local" value="${formatDateTime(state.time, true)}">
                  <button class="ant-btn" id="objectTimeNow" type="button">使用当前时间</button>
                </div>
                <div class="cast-preview">
                  <span>${objectState.valid ? objectState.label : "请选择物象与方位"}</span>
                  ${objectState.valid ? `<strong>上卦 ${GUA[objectState.top].icon}${GUA[objectState.top].name}　下卦 ${GUA[objectState.bottom].icon}${GUA[objectState.bottom].name}　${objectState.moving}爻动</strong>` : ""}
                </div>
              </div>
            </div>
            <details class="form-observation-details">
              <summary>三要、十应记录（可选）</summary>
              ${renderObservationFields()}
            </details>
            <div class="form-actions">
              <button class="ant-btn ant-btn-primary" id="castButton" type="button" ${validForm() ? "" : "disabled"}>起卦</button>
            </div>
          </div>
        </div>
      </div>`;
    bindFormEvents();
  }

  function choiceGroup(label, key, value) {
    return `
      <div class="manual-row">
        <span class="manual-label">${label}：</span>
        <div class="radio-group">
          ${GUA.slice(1).map((gua, index) => `<button class="choice ${value === index + 1 ? "active" : ""}" type="button" data-gua-key="${key}" data-gua="${index + 1}">${gua.icon}${gua.name}</button>`).join("")}
        </div>
      </div>`;
  }

  function renderObservationFields() {
    return `
      <div class="observation-fields">
        <div class="observation-group">
          <div class="observation-group-heading">
            <strong>三要</strong>
            <span>耳听、目视、心思，记录起卦当下的直接感应。</span>
          </div>
          <div class="three-record-grid">
            ${THREE_ESSENTIALS.map((item) => `
              <label class="record-field">
                <span>${item.name}<small>${item.hint}</small></span>
                <textarea data-record-group="threeRecords" data-record-key="${item.key}" placeholder="${item.hint}">${escapeHtml(state.threeRecords[item.key])}</textarea>
              </label>`).join("")}
          </div>
        </div>
        <div class="observation-group">
          <div class="observation-group-heading">
            <strong>十应</strong>
            <span>以体卦为主，将外部现象作为用；“写字”按原书列为附应。</span>
          </div>
          <div class="response-record-grid">
            ${TEN_RESPONSES.map((item) => `
              <label class="record-field">
                <span>${item.name}<small>${item.hint}</small></span>
                <textarea data-record-group="responseRecords" data-record-key="${item.key}" placeholder="${item.hint}">${escapeHtml(state.responseRecords[item.key])}</textarea>
              </label>`).join("")}
          </div>
        </div>
      </div>`;
  }

  function bindObservationEvents() {
    document.querySelectorAll("[data-record-group]").forEach((field) => {
      field.addEventListener("input", () => {
        state[field.dataset.recordGroup][field.dataset.recordKey] = field.value;
      });
    });
  }

  function bindFormEvents() {
    document.querySelector("#divinationType")?.addEventListener("change", (event) => {
      state.divinationType = event.target.value;
    });
    document.querySelector("#thingInput")?.addEventListener("input", (event) => {
      state.thing = event.target.value;
    });
    document.querySelectorAll("[data-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        state.mode = button.dataset.mode;
        if (state.mode === "numbers") applyNumbers();
        if (state.mode === "time") {
          state.time = new Date();
          applyTimeGua();
        }
        if (state.mode === "random") generateRandomGua();
        if (state.mode === "object") {
          state.time = new Date();
          applyObjectGua();
        }
        renderForm();
      });
    });
    document.querySelector("#numbersInput")?.addEventListener("input", (event) => {
      state.numbers = event.target.value;
      applyNumbers();
      const parsed = deriveNumbers(state.numbers);
      const help = document.querySelector("#numberHelp");
      help.className = parsed.error ? "form-err-txt" : "form-help-txt";
      help.textContent = parsed.error || "输入正确报数以后排盘按钮将会被启用";
      document.querySelector("#numbersInput").classList.toggle("error", Boolean(parsed.error));
      document.querySelector("#castButton").disabled = !validForm();
    });
    document.querySelectorAll("[data-gua]").forEach((button) => {
      button.addEventListener("click", () => {
        state[button.dataset.guaKey] = Number(button.dataset.gua);
        state.numbers = "";
        renderForm();
      });
    });
    document.querySelectorAll("[data-moving]").forEach((button) => {
      button.addEventListener("click", () => {
        state.moving = Number(button.dataset.moving);
        state.numbers = "";
        state.time = new Date();
        renderForm();
      });
    });
    document.querySelector("#timeMoving")?.addEventListener("click", () => {
      state.time = new Date();
      const moving = (state.time.getHours() + state.time.getMinutes()) % 6;
      state.moving = moving || 6;
      state.numbers = "";
      renderForm();
    });
    document.querySelector("#timeCastInput")?.addEventListener("change", (event) => {
      const date = new Date(event.target.value);
      if (!Number.isNaN(date.getTime())) {
        state.time = date;
        applyTimeGua();
        renderForm();
      }
    });
    document.querySelector("#timeCastNow")?.addEventListener("click", () => {
      state.time = new Date();
      applyTimeGua();
      renderForm();
    });
    document.querySelector("#randomGuaButton")?.addEventListener("click", () => {
      generateRandomGua();
      renderForm();
    });
    document.querySelectorAll("[data-object-top]").forEach((button) => {
      button.addEventListener("click", () => {
        state.objectTop = Number(button.dataset.objectTop);
        applyObjectGua();
        renderForm();
      });
    });
    document.querySelectorAll("[data-object-bottom]").forEach((button) => {
      button.addEventListener("click", () => {
        state.objectBottom = Number(button.dataset.objectBottom);
        applyObjectGua();
        renderForm();
      });
    });
    document.querySelector("#objectTimeInput")?.addEventListener("change", (event) => {
      const date = new Date(event.target.value);
      if (!Number.isNaN(date.getTime())) {
        state.time = date;
        applyObjectGua();
        renderForm();
      }
    });
    document.querySelector("#objectTimeNow")?.addEventListener("click", () => {
      state.time = new Date();
      applyObjectGua();
      renderForm();
    });
    document.querySelector("#timeInput")?.addEventListener("change", (event) => {
      const date = new Date(event.target.value);
      if (!Number.isNaN(date.getTime())) state.time = date;
      document.querySelector("#castButton").disabled = !validForm();
    });
    document.querySelector("#castButton")?.addEventListener("click", () => {
      if (!validForm()) return;
      if (state.mode === "numbers") applyNumbers();
      if (state.mode === "time") applyTimeGua();
      if (state.mode === "object") applyObjectGua();
      state.view = "result";
      state.classicIndex = 0;
      renderResult();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    bindObservationEvents();
  }

  function applyNumbers() {
    const derived = deriveNumbers(state.numbers);
    if (!derived.valid) {
      state.top = null;
      state.bottom = null;
      state.moving = null;
      return;
    }
    state.top = derived.top;
    state.bottom = derived.bottom;
    state.moving = derived.moving;
    state.time = new Date();
  }

  function renderResult() {
    const calendar = getCalendarInfo(state.time);
    calendar.shensha = calculateShensha(calendar);
    const original = [...GUA[state.top].yao, ...GUA[state.bottom].yao];
    const mutualTop = original.slice(1, 4);
    const mutualBottom = original.slice(2, 5);
    const changed = [...original];
    changed[6 - state.moving] = Number(!changed[6 - state.moving]);
    const changedTop = changed.slice(0, 3);
    const changedBottom = changed.slice(3);
    const opposite = original.map((line) => Number(!line));
    const oppositeTop = opposite.slice(0, 3);
    const oppositeBottom = opposite.slice(3);
    const reversed = [...original].reverse();
    const reversedTop = reversed.slice(0, 3);
    const reversedBottom = reversed.slice(3);
    const charts = [
      { title: "本卦", top: state.top, bottom: state.bottom, bits: original, moving: state.moving },
      { title: "互卦", top: guaIndex(mutualTop), bottom: guaIndex(mutualBottom), bits: [...mutualTop, ...mutualBottom] },
      { title: "变卦", top: guaIndex(changedTop), bottom: guaIndex(changedBottom), bits: changed },
      { title: "错卦", top: guaIndex(oppositeTop), bottom: guaIndex(oppositeBottom), bits: opposite },
      { title: "综卦", top: guaIndex(reversedTop), bottom: guaIndex(reversedBottom), bits: reversed },
    ];
    app.innerHTML = `
      <div class="App">
        <div class="meihua-container">
          <div class="meihua">
          ${renderTimeTable(calendar)}
          <div class="guaxiang">
            <div class="chart-grid">
              <div class="tiyong-column" aria-hidden="true">
                <h3>&nbsp;</h3>
                <span class="gua-name">&nbsp;</span>
                <div class="tiyong">${state.moving > 3 ? "用" : "体"}</div>
                <div>&nbsp;</div>
                <div class="tiyong">${state.moving > 3 ? "体" : "用"}</div>
                <h3 class="shengke">&nbsp;</h3>
              </div>
              ${charts.map((chart) => renderChart(chart, calendar)).join("")}
            </div>
          </div>
          ${renderProcessAnalysis(charts, calendar)}
          ${renderClassicTexts(charts)}
          ${renderAuxiliary(charts)}
          </div>
        </div>
      </div>`;
    bindResultEvents();
  }

  function renderTimeTable(calendar) {
    const periods = ["yearly", "monthly", "daily", "hourly"];
    const method = state.mode === "numbers"
      ? { label: "报数", value: state.numbers }
      : {
          label: "方式",
          value: {
            time: "时间起卦",
            random: "自动随机",
            manual: "手动指定",
            object: `后天物象：${GUA[state.objectTop].icon}${GUA[state.objectTop].name}为物，${GUA_IMAGES[state.objectBottom].direction}${GUA[state.objectBottom].icon}${GUA[state.objectBottom].name}为方`,
          }[state.mode] || "手动指定",
        };
    return `
      <table class="meihua-table">
        <colgroup>
          <col class="table-label-col">
          <col span="4">
        </colgroup>
        <tbody>
          <tr><td>占事</td><td colspan="4">${escapeHtml(state.divinationType)}</td></tr>
          <tr><td>事由</td><td colspan="4"><input class="editable-reason" id="resultThing" value="${escapeHtml(state.thing)}"></td></tr>
          <tr><td>${method.label}</td><td colspan="4">${escapeHtml(method.value)}　<button class="ant-btn ant-btn-primary" id="resetButton" type="button">重新起卦</button></td></tr>
          <tr><td>时间</td><td colspan="4">${state.time?.toLocaleString() || ""}</td></tr>
          <tr><td rowspan="2">节气</td><td colspan="4">${calendar.prevTerm.name} ${formatYmdHms(calendar.prevTerm.date)}</td></tr>
          <tr><td colspan="4">${calendar.nextTerm.name} ${formatYmdHms(calendar.nextTerm.date)}</td></tr>
          <tr>
            <td rowspan="2">时间</td>
            ${periods.map((period) => `<td class="selectable ${state.wangPeriod === period ? "active" : ""}" data-setting="wangPeriod" data-period="${period}">${PERIOD_LABELS[period]}</td>`).join("")}
          </tr>
          <tr>
            ${periods.map((period, index) => `<td class="selectable ${index === 0 ? "nostyle " : ""}${state.kuPeriod === period ? "active" : ""}" data-setting="kuPeriod" data-period="${period}"><strong ${index === 1 || index === 2 ? 'style="color:rgb(185 26 6)"' : ""}>${calendar.ganzhi[period]}</strong></td>`).join("")}
          </tr>
          <tr>
            <td rowspan="2">空亡</td>
            ${periods.map((period) => `<td class="selectable gray-text ${state.kongPeriod === period ? "active" : ""}" data-setting="kongPeriod" data-period="${period}">${calendar.kong[period]}</td>`).join("")}
          </tr>
          <tr>
            ${periods.map((period, index) => `<td class="selectable gray-text ${index === 0 ? "nostyle " : ""}${state.kongPeriod === period ? "active" : ""}" data-setting="kongPeriod" data-period="${period}">${KONG_GUA[calendar.kong[period]] || ""}</td>`).join("")}
          </tr>
          <tr>
            <td>全部神煞</td>
            <td colspan="4">
              <div class="shensha-panel">
                <div
                  class="shensha-list ${state.shenshaExpanded ? "expanded" : "collapsed"}"
                  id="allShenshaList"
                >
                  ${calendar.shensha.map((item) => `
                    <button
                      class="shensha-tag ${state.selectedShensha.has(item.name) ? "selected" : ""}"
                      type="button"
                      data-shensha="${item.name}"
                      aria-pressed="${state.selectedShensha.has(item.name)}"
                    >${item.name}-${item.targets.join("")}</button>`).join("")}
                </div>
                <button
                  class="shensha-toggle"
                  id="shenshaToggle"
                  type="button"
                  aria-controls="allShenshaList"
                  aria-expanded="${state.shenshaExpanded}"
                ><span>${state.shenshaExpanded ? "收起" : "展开"}</span><i aria-hidden="true"></i></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>`;
  }

  function renderChart(chart, calendar) {
    const upperMoving = chart.moving > 3 ? chart.moving - 3 : null;
    const lowerMoving = chart.moving <= 3 ? chart.moving : null;
    const tiIndex = state.moving > 3 ? chart.bottom : chart.top;
    const yongIndex = state.moving > 3 ? chart.top : chart.bottom;
    return `
      <section class="hexagram-column">
        <h3>${chart.title}</h3>
        <span class="hexagram-name">${hexagramName(chart.bits)}</span>
        ${renderGuaBox(chart.top, upperMoving, calendar)}
        ${renderArrow(chart.top, chart.bottom)}
        ${renderGuaBox(chart.bottom, lowerMoving, calendar)}
        ${renderRelation(tiIndex, yongIndex, calendar.branch[state.wangPeriod])}
      </section>`;
  }

  function renderGuaBox(index, movingLine, calendar) {
    const gua = GUA[index];
    const kuBranch = calendar.branch[state.kuPeriod];
    const kong = calendar.kong[state.kongPeriod];
    const flags = `${gua.cool === kuBranch ? "库" : ""}${isKong(index, kong) ? "空" : ""}`;
    const gods = getShensha(index, calendar);
    return `
      <div class="gua-container" aria-label="${gua.name}卦">
        <div class="gua">
          ${gua.yao.map((line, displayIndex) => `
            <div class="yao ${line ? "yang" : "yin"}">
              ${line ? `<i class="yao-item" style="background:${gua.color}"></i>` : `<i class="yao-item" style="background:${gua.color}"></i><i class="yao-item" style="background:${gua.color}"></i>`}
              ${movingLine === 3 - displayIndex ? `<span class="variable" title="动爻"><i class="variable-dot"></i></span>` : ""}
            </div>`).join("")}
        </div>
        <div class="cool">${flags}</div>
        <div class="shensha">${gods.map((god) => `<span>${god}</span>`).join("")}</div>
      </div>`;
  }

  function guaIndex(yao) {
    return GUA.findIndex((gua) => gua && gua.yao.join("") === yao.join(""));
  }

  function hexagramName(bits) {
    const key = String(Number(bits.join("")));
    return HEXAGRAM_NAMES[key] || "未名";
  }

  function getYijingText(bits) {
    return YIJING_TEXTS[bits.join("")] || null;
  }

  function renderClassicSummary(text, role) {
    if (!text) return "";
    return `
      <article class="classic-summary">
        <h3><span class="classic-role">${role}</span>第${text.sequence}卦 · ${text.name}</h3>
        <div class="classic-entry">
          <strong>卦辞</strong>
          <p>${escapeHtml(text.guaci)}</p>
        </div>
        <div class="classic-entry">
          <strong>大象</strong>
          <p>《象》曰：${escapeHtml(text.xiang)}</p>
        </div>
      </article>`;
  }

  function renderClassicTexts(charts) {
    const selectedIndex = Math.max(0, Math.min(state.classicIndex, charts.length - 1));
    const selectedChart = charts[selectedIndex];
    const selectedText = getYijingText(selectedChart.bits);
    const originalText = getYijingText(charts[0].bits);
    if (!selectedText || !originalText) return "";
    const isOriginal = selectedIndex === 0;
    const movingText = originalText.lines[state.moving - 1];
    return `
      <section class="classic-texts" aria-labelledby="classicTitle">
        <div class="classic-heading">
          <div>
            <h2 id="classicTitle">卦辞、爻辞与象辞</h2>
            <p>点击五卦切换经文，爻位自下而上排列。</p>
          </div>
          ${isOriginal
            ? `<span class="moving-line-badge">${escapeHtml(movingText.label)}动</span>`
            : `<span class="classic-current-badge">${escapeHtml(selectedChart.title)}</span>`}
        </div>
        <div class="classic-selector" role="tablist" aria-label="选择要查看经文的卦">
          ${charts.map((chart, index) => {
            const text = getYijingText(chart.bits);
            if (!text) return "";
            return `
              <button
                class="classic-selector-item ${index === selectedIndex ? "active" : ""}"
                type="button"
                role="tab"
                aria-selected="${index === selectedIndex}"
                data-classic-index="${index}"
              >
                <span>${escapeHtml(chart.title)}</span>
                <strong>${escapeHtml(hexagramName(chart.bits))}</strong>
                <small>第${text.sequence}卦 · ${escapeHtml(text.name)}</small>
              </button>`;
          }).join("")}
        </div>
        ${renderClassicSummary(selectedText, selectedChart.title)}
        <div class="yao-text-panel">
          <h3>${escapeHtml(selectedChart.title)}六爻</h3>
          <div class="yao-text-list">
            ${selectedText.lines.map((line, index) => {
              const isMoving = isOriginal && index + 1 === state.moving;
              return `
              <article class="yao-text-item ${isMoving ? "moving" : ""}">
                <div class="yao-text-main">
                  <strong>${escapeHtml(line.label)}</strong>
                  <p>${escapeHtml(line.text)}</p>
                  ${isMoving ? '<span class="moving-mark">动爻</span>' : ""}
                </div>
                <p class="small-xiang"><span>小象</span>《象》曰：${escapeHtml(line.xiang)}</p>
              </article>`;
            }).join("")}
          </div>
          ${selectedText.extras?.length ? `
            <div class="classic-extra">
              ${selectedText.extras.map((line) => `
                <strong>${escapeHtml(line.label)}</strong>
                <p>${escapeHtml(line.text)}　《象》曰：${escapeHtml(line.xiang)}</p>`).join("")}
            </div>` : ""}
        </div>
      </section>`;
  }

  function guaStrength(index, branch) {
    const wangIndex = WANG_BRANCHES.indexOf(branch);
    const order = WANG_ORDER[wangIndex] || WANG_ORDER[0];
    const rank = order.indexOf(GUA[index].wuxing);
    return {
      name: WANG_NAMES[rank] || "",
      rank,
      strong: rank >= 0 && rank <= 1,
      weak: rank >= 3,
    };
  }

  function bodyRelation(actorIndex, bodyIndex, actorLabel, branch) {
    const actor = GUA[actorIndex];
    const body = GUA[bodyIndex];
    const actorStrength = guaStrength(actorIndex, branch);
    const bodyStrength = guaStrength(bodyIndex, branch);
    let kind;
    let title;
    let explanation;
    let tone;

    if (actor.wuxing === body.wuxing) {
      kind = "same";
      title = "比和";
      explanation = "双方同气，关系较协调，发展趋于稳定。";
      tone = "neutral";
    } else if (GENERATES[actor.wuxing] === body.wuxing) {
      kind = "actor-generates-body";
      title = `${actorLabel}生体`;
      explanation = "外部力量生助体卦，主体较易获得支持。";
      tone = "positive";
    } else if (GENERATES[body.wuxing] === actor.wuxing) {
      kind = "body-generates-actor";
      title = `体生${actorLabel}`;
      explanation = "体卦向外生出，主体需要投入，容易产生消耗。";
      tone = "caution";
    } else if (CONTROLS[actor.wuxing] === body.wuxing) {
      kind = "actor-controls-body";
      title = `${actorLabel}克体`;
      explanation = "外部力量克制体卦，主体容易承受压力与阻力。";
      tone = "caution";
    } else {
      kind = "body-controls-actor";
      title = `体克${actorLabel}`;
      explanation = "体卦能够制约外部力量，事情可主动推动，但需要掌控。";
      tone = "positive";
    }

    let adjustment;
    if (kind === "actor-generates-body") {
      adjustment = actorStrength.strong
        ? "生助一方旺相，帮助较为有力。"
        : "生助一方力量有限，所得帮助需要等待条件成熟。";
    } else if (kind === "body-generates-actor") {
      adjustment = bodyStrength.weak
        ? "体卦偏弱而再向外泄，尤其要控制投入与消耗。"
        : "体卦尚有承受力，但仍以付出换取进展。";
    } else if (kind === "actor-controls-body") {
      adjustment = actorStrength.strong && bodyStrength.weak
        ? "克方旺而体卦偏弱，阻力表现较重。"
        : bodyStrength.strong && !actorStrength.strong
          ? "体卦旺而克方不强，虽有压力但尚可承受。"
          : actorStrength.weak && !bodyStrength.weak
            ? "克方偏弱，压力存在但落实力度有限。"
            : "双方力量接近，压力是否落实还要结合后续变化。";
    } else if (kind === "body-controls-actor") {
      adjustment = bodyStrength.strong && actorStrength.weak
        ? "体旺而对方偏弱，主体的控制和推进能力较强。"
        : bodyStrength.weak && actorStrength.strong
          ? "体弱而对方旺，虽有主动意图，实际掌控会比较费力。"
          : "有主动处理空间，成效取决于持续执行。";
    } else {
      adjustment = bodyStrength.strong
        ? "同类之气旺相，协调与稳定性更明显。"
        : "虽为比和，但整体气势不强，宜稳步推进。";
    }

    return {
      actorIndex,
      actorLabel,
      actorStrength,
      arrow: kind === "same"
        ? "↔"
        : kind.startsWith("actor-")
          ? "→"
          : "←",
      bodyIndex,
      bodyStrength,
      kind,
      title,
      explanation,
      adjustment,
      tone,
    };
  }

  function renderProcessRelation(relation) {
    const actor = GUA[relation.actorIndex];
    const body = GUA[relation.bodyIndex];
    return `
      <div class="process-relation">
        <div class="process-gua">
          <span>${escapeHtml(relation.actorLabel)}</span>
          <strong>${actor.icon}${actor.name}·${actor.wuxing}</strong>
          <small>${relation.actorStrength.name}</small>
        </div>
        <div class="process-relation-center">
          <span class="process-relation-badge ${relation.tone}">${escapeHtml(relation.title)}</span>
          <i aria-hidden="true">${relation.arrow}</i>
        </div>
        <div class="process-gua body">
          <span>体</span>
          <strong>${body.icon}${body.name}·${body.wuxing}</strong>
          <small>${relation.bodyStrength.name}</small>
        </div>
        <p>${escapeHtml(relation.explanation)}${escapeHtml(relation.adjustment)}</p>
      </div>`;
  }

  function relationScore(relation) {
    return {
      "actor-generates-body": 2,
      "body-controls-actor": 1,
      same: 1,
      "body-generates-actor": -1,
      "actor-controls-body": -2,
    }[relation.kind] || 0;
  }

  function processSummary(start, mutual, result) {
    const startScore = relationScore(start);
    const resultScore = relationScore(result);
    const mutualScore = mutual.reduce((sum, item) => sum + relationScore(item), 0);
    let trend;
    if (startScore < 0 && resultScore > 0) trend = "先难后缓";
    else if (startScore > 0 && resultScore < 0) trend = "先顺后紧";
    else if (startScore < 0 && resultScore < 0) trend = "压力延续";
    else if (startScore > 0 && resultScore > 0) trend = "前后较顺";
    else trend = "平中有变";

    const middle = mutualScore > 0
      ? "互卦阶段助力或可控因素较多"
      : mutualScore < 0
        ? "互卦阶段消耗与阻力较多"
        : "互卦阶段助力与阻力并存";
    const tone = startScore + mutualScore + resultScore > 1
      ? "positive"
      : startScore + mutualScore + resultScore < -1
        ? "caution"
        : "neutral";
    return {
      trend,
      tone,
      text: `本卦为“${start.title}”，${middle}，变卦为“${result.title}”。整体呈现“${trend}”的过程倾向。`,
    };
  }

  function renderProcessAnalysis(charts, calendar) {
    const movingOnUpper = state.moving > 3;
    const bodyIndex = movingOnUpper ? charts[0].bottom : charts[0].top;
    const useIndex = movingOnUpper ? charts[0].top : charts[0].bottom;
    const changedUseIndex = movingOnUpper ? charts[2].top : charts[2].bottom;
    const branch = calendar.branch[state.wangPeriod];
    const start = bodyRelation(useIndex, bodyIndex, "用", branch);
    const mutual = [
      bodyRelation(charts[1].top, bodyIndex, "互上", branch),
      bodyRelation(charts[1].bottom, bodyIndex, "互下", branch),
    ];
    const result = bodyRelation(changedUseIndex, bodyIndex, "变用", branch);
    const summary = processSummary(start, mutual, result);
    const body = GUA[bodyIndex];
    const use = GUA[useIndex];
    const movingPlace = movingOnUpper ? "上卦" : "下卦";
    const bodyPlace = movingOnUpper ? "下卦" : "上卦";
    return `
      <section class="process-analysis" aria-labelledby="processTitle">
        <div class="process-heading">
          <div>
            <h2 id="processTitle">体用互变过程分析</h2>
            <p>以原体卦为中心，依次观察本卦、互卦和变卦。</p>
          </div>
          <span class="process-trend ${summary.tone}">${escapeHtml(summary.trend)}</span>
        </div>
        <div class="process-basis">
          <strong>定体用</strong>
          <p>${state.moving}爻动于${movingPlace}，故${bodyPlace}${body.icon}${body.name}${body.wuxing}为体，${movingPlace}${use.icon}${use.name}${use.wuxing}为用；旺衰按${PERIOD_LABELS[state.wangPeriod]}柱${escapeHtml(calendar.ganzhi[state.wangPeriod])}判断。</p>
        </div>
        <div class="process-flow">
          <article class="process-stage">
            <div class="process-stage-title"><span>1</span><div><strong>本卦 · 起因</strong><small>当前状态与初始力量</small></div></div>
            ${renderProcessRelation(start)}
          </article>
          <div class="process-arrow" aria-hidden="true">→</div>
          <article class="process-stage">
            <div class="process-stage-title"><span>2</span><div><strong>互卦 · 过程</strong><small>两个中间因素分别与体比较</small></div></div>
            ${mutual.map(renderProcessRelation).join("")}
          </article>
          <div class="process-arrow" aria-hidden="true">→</div>
          <article class="process-stage">
            <div class="process-stage-title"><span>3</span><div><strong>变卦 · 结果</strong><small>变用与原体卦比较</small></div></div>
            ${renderProcessRelation(result)}
          </article>
        </div>
        <div class="process-conclusion ${summary.tone}">
          <strong>过程结论</strong>
          <p>${escapeHtml(summary.text)}</p>
        </div>
        <p class="process-note">错卦、综卦仅作对立面与换位观察，不参与主过程的体用重排。此处为象数关系提示，仍需结合具体占事判断。</p>
      </section>`;
  }

  function renderGuaImageCard(index, roles = []) {
    const gua = GUA[index];
    const image = GUA_IMAGES[index];
    return `
      <article class="gua-image-card ${roles.length ? "current" : ""}">
        <div class="gua-image-heading">
          <div><span class="gua-image-icon">${gua.icon}</span><strong>${gua.name}卦</strong><small>${gua.wuxing} · ${image.direction}</small></div>
          ${roles.length ? `<div class="gua-image-roles">${roles.map((role) => `<span>${role}</span>`).join("")}</div>` : ""}
        </div>
        <dl>
          <div><dt>自然</dt><dd>${escapeHtml(image.nature)}</dd></div>
          <div><dt>人物</dt><dd>${escapeHtml(image.people)}</dd></div>
          <div><dt>身体</dt><dd>${escapeHtml(image.body)}</dd></div>
          <div><dt>动物</dt><dd>${escapeHtml(image.animals)}</dd></div>
          <div><dt>物品</dt><dd>${escapeHtml(image.objects)}</dd></div>
          <div><dt>颜色</dt><dd>${escapeHtml(image.colors)}</dd></div>
          <div><dt>性情</dt><dd>${escapeHtml(image.character)}</dd></div>
        </dl>
      </article>`;
  }

  function renderAuxiliary(charts) {
    const movingOnUpper = state.moving > 3;
    const bodyIndex = movingOnUpper ? charts[0].bottom : charts[0].top;
    const useIndex = movingOnUpper ? charts[0].top : charts[0].bottom;
    return `
      <section class="auxiliary-tools" aria-labelledby="auxiliaryTitle">
        <div class="auxiliary-heading">
          <div>
            <h2 id="auxiliaryTitle">辅助功能</h2>
            <p>万物类象用于取象，三要、十应用于记录起卦当下的外应。</p>
          </div>
        </div>
        <details class="auxiliary-details">
          <summary>
            <span><strong>八卦万物类象</strong><small>当前体卦 ${GUA[bodyIndex].icon}${GUA[bodyIndex].name}，用卦 ${GUA[useIndex].icon}${GUA[useIndex].name}</small></span>
            <i data-label="展开查看"></i>
          </summary>
          <div class="gua-image-grid">
            ${GUA.slice(1).map((gua, index) => {
              const guaIndex = index + 1;
              const roles = [];
              if (guaIndex === bodyIndex) roles.push("体");
              if (guaIndex === useIndex) roles.push("用");
              return renderGuaImageCard(guaIndex, roles);
            }).join("")}
          </div>
        </details>
        <details class="auxiliary-details observation-details">
          <summary>
            <span><strong>三要、十应记录</strong><small>内容在起卦前后保持同步，可继续补记</small></span>
            <i data-label="展开记录"></i>
          </summary>
          ${renderObservationFields()}
        </details>
        <p class="auxiliary-note">类象与外应均以体卦为主参看生克，宜结合具体占事灵活取用，不作机械吉凶判断。</p>
      </section>`;
  }

  function relationIndex(subjectIndex, objectIndex) {
    const objectName = GUA[objectIndex].name;
    return GUA[subjectIndex].shengke.findIndex((group) => group.includes(objectName));
  }

  function relationSvg(name) {
    const icons = {
      "arrow-down": "M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z",
      "arrow-up": "M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z",
      "vertical-align-middle": "M859.9 474H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zm-353.6-74.7c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H550V104c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v156h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.6zm11.4 225.4a7.14 7.14 0 00-11.3 0L405.6 752.3a7.23 7.23 0 005.7 11.7H474v156c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V764h62.8c6 0 9.4-7 5.7-11.7L517.7 624.7z",
      swap: "M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z",
    };
    return `<svg viewBox="64 64 896 896" focusable="false" aria-hidden="true" data-icon="${name}"><path d="${icons[name]}"></path></svg>`;
  }

  function renderArrow(topIndex, bottomIndex) {
    const downward = relationIndex(topIndex, bottomIndex);
    if (downward === 0) {
      return `<div class="shengke-icon sheng" title="上卦生下卦">${relationSvg("arrow-down")}</div>`;
    }
    if (downward === 1) {
      return `<div class="shengke-icon ke" title="上卦克下卦">${relationSvg("arrow-down")}</div>`;
    }
    if (downward === 2) {
      return `<div class="shengke-icon chong" title="上下卦相冲">${relationSvg("vertical-align-middle")}</div>`;
    }
    if (downward === 3) {
      return `<div class="shengke-icon he" title="上下卦相合">${relationSvg("swap")}</div>`;
    }

    const upward = relationIndex(bottomIndex, topIndex);
    if (upward === 0) {
      return `<div class="shengke-icon sheng" title="下卦生上卦">${relationSvg("arrow-up")}</div>`;
    }
    if (upward === 1) {
      return `<div class="shengke-icon ke" title="下卦克上卦">${relationSvg("arrow-up")}</div>`;
    }
    if (upward === 2) {
      return `<div class="shengke-icon chong" title="上下卦相冲">${relationSvg("vertical-align-middle")}</div>`;
    }
    return `<div class="shengke-icon he" title="上下卦相合">${relationSvg("swap")}</div>`;
  }

  function renderRelation(tiIndex, yongIndex, branch) {
    const order = WANG_ORDER[WANG_BRANCHES.indexOf(branch)] || WANG_ORDER[0];
    let subject = "体";
    let object = "用";
    let subjectGua = GUA[tiIndex];
    let objectGua = GUA[yongIndex];
    let relation = relationIndex(tiIndex, yongIndex);
    if (relation < 0) {
      subject = "用";
      object = "体";
      subjectGua = GUA[yongIndex];
      objectGua = GUA[tiIndex];
      relation = relationIndex(yongIndex, tiIndex);
    }
    const subjectWang = WANG_NAMES[order.indexOf(subjectGua.wuxing)] || "";
    const objectWang = WANG_NAMES[order.indexOf(objectGua.wuxing)] || "";
    return `<h3 class="shengke"><span>${subjectWang}${subject}</span><span class="shengke-name">${RELATION_NAMES[relation] || "比"}</span><span>${objectWang}${object}</span></h3>`;
  }

  function isKong(index, kong) {
    return [...(kong || "")].some((branch) => GUA[index].kong?.includes(branch));
  }

  function branchOffset(branch, offset) {
    const index = BRANCHES.indexOf(branch);
    return BRANCHES[(index + offset + 12) % 12];
  }

  function trineTarget(branch, rules) {
    const group = Object.keys(rules).find((members) => members.includes(branch));
    return group ? rules[group] : "";
  }

  function monthTarget(name, monthBranch) {
    return MONTH_SHENSHA[name][MONTH_BRANCHES.indexOf(monthBranch)];
  }

  function calculateShensha(calendar) {
    const dayStem = calendar.dayStem;
    const dayBranch = calendar.dayBranch;
    const monthBranch = calendar.branch.monthly;
    const yearBranch = calendar.branch.yearly;
    const values = {
      日禄: SHENSHA.rilu[dayStem],
      贵人: SHENSHA.guiren[dayStem],
      驿马: SHENSHA.yima[dayBranch],
      桃花: SHENSHA.taohua[dayBranch],
      月德: monthTarget("月德", monthBranch),
      灾煞: trineTarget(dayBranch, { 申子辰: "午", 巳酉丑: "卯", 寅午戌: "子", 亥卯未: "酉" }),
      劫煞: trineTarget(dayBranch, { 申子辰: "巳", 巳酉丑: "寅", 寅午戌: "亥", 亥卯未: "申" }),
      天德: monthTarget("天德", monthBranch),
      天医: monthTarget("天医", monthBranch),
      文昌: STEM_SHENSHA.文昌[dayStem],
      将星: trineTarget(dayBranch, { 申子辰: "子", 巳酉丑: "酉", 寅午戌: "午", 亥卯未: "卯" }),
      华盖: trineTarget(dayBranch, { 申子辰: "辰", 巳酉丑: "丑", 寅午戌: "戌", 亥卯未: "未" }),
      羊刃: STEM_SHENSHA.羊刃[dayStem],
      天马: monthTarget("天马", monthBranch),
      生气: monthTarget("生气", monthBranch),
      死气: monthTarget("死气", monthBranch),
      亡神: trineTarget(dayBranch, { 申子辰: "亥", 巳酉丑: "申", 寅午戌: "巳", 亥卯未: "寅" }),
      病符: branchOffset(yearBranch, -1),
      丧门: branchOffset(yearBranch, 2),
      吊客: branchOffset(yearBranch, -2),
      破碎: trineTarget(monthBranch, { 寅巳申亥: "酉", 卯午酉子: "巳", 辰未戌丑: "丑" }),
      游都: STEM_SHENSHA.游都[dayStem],
      飞符: STEM_SHENSHA.飞符[dayStem],
      血支: monthTarget("血支", monthBranch),
      孤辰: monthTarget("孤辰", monthBranch),
      寡宿: monthTarget("寡宿", monthBranch),
      官符: branchOffset(yearBranch, 4),
      死神: monthTarget("死神", monthBranch),
    };
    return SHENSHA_ORDER.map((name) => ({
      name,
      targets: (Array.isArray(values[name]) ? values[name] : [values[name]]).filter(Boolean),
    }));
  }

  function getShensha(index, calendar) {
    const gua = GUA[index];
    const symbols = [...gua.gan, ...gua.zhi];
    return calendar.shensha
      .filter((item) => state.selectedShensha.has(item.name))
      .filter((item) => item.targets.some((target) => symbols.includes(target)))
      .map((item) => item.name);
  }

  function bindResultEvents() {
    document.querySelector("#resetButton")?.addEventListener("click", () => {
      state.view = "form";
      state.numbers = "";
      state.top = null;
      state.bottom = null;
      state.moving = null;
      state.classicIndex = 0;
      state.shenshaExpanded = false;
      state.time = new Date();
      renderForm();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.querySelector("#resultThing")?.addEventListener("input", (event) => {
      state.thing = event.target.value;
    });
    document.querySelectorAll("[data-setting]").forEach((cell) => {
      cell.addEventListener("click", () => {
        state[cell.dataset.setting] = cell.dataset.period;
        renderResult();
      });
    });
    document.querySelectorAll("[data-shensha]").forEach((button) => {
      button.addEventListener("click", () => {
        if (state.selectedShensha.has(button.dataset.shensha)) {
          state.selectedShensha.delete(button.dataset.shensha);
        } else {
          state.selectedShensha.add(button.dataset.shensha);
        }
        renderResult();
      });
    });
    document.querySelector("#shenshaToggle")?.addEventListener("click", () => {
      state.shenshaExpanded = !state.shenshaExpanded;
      renderResult();
      document.querySelector("#shenshaToggle")?.focus();
    });
    document.querySelectorAll("[data-classic-index]").forEach((button) => {
      button.addEventListener("click", () => {
        state.classicIndex = Number(button.dataset.classicIndex);
        renderResult();
        document.querySelector(`[data-classic-index="${state.classicIndex}"]`)?.focus();
      });
    });
    bindObservationEvents();
  }

  function julianDayNumber(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    const day = date.getDate();
    if (month <= 2) {
      year -= 1;
      month += 12;
    }
    const a = Math.floor(year / 100);
    const b = 2 - a + Math.floor(a / 4);
    return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + b - 1524;
  }

  function dayGanzhi(date, lateZi = true) {
    const adjusted = new Date(date);
    if (lateZi && adjusted.getHours() >= 23) adjusted.setDate(adjusted.getDate() + 1);
    const jdn = julianDayNumber(adjusted);
    return {
      stemIndex: (jdn + 9) % 10,
      branchIndex: (jdn + 1) % 12,
    };
  }

  function solarTerm(year, index) {
    const base = Date.UTC(1900, 0, 6, 2, 5);
    return new Date(base + 31556925974.7 * (year - 1900) + SOLAR_TERM_MINUTES[index] * 60000);
  }

  function surroundingTerms(date) {
    const terms = [];
    for (let year = date.getFullYear() - 1; year <= date.getFullYear() + 1; year += 1) {
      SOLAR_TERM_NAMES.forEach((name, index) => terms.push({ name, date: solarTerm(year, index), index }));
    }
    terms.sort((a, b) => a.date - b.date);
    let previous = terms[0];
    let next = terms[terms.length - 1];
    for (const term of terms) {
      if (term.date <= date) previous = term;
      if (term.date > date) {
        next = term;
        break;
      }
    }
    return { previous, next, terms };
  }

  function yearGanzhi(date) {
    let year = date.getFullYear();
    if (date < solarTerm(year, 2)) year -= 1;
    return { stemIndex: ((year - 4) % 10 + 10) % 10, branchIndex: ((year - 4) % 12 + 12) % 12 };
  }

  function monthGanzhi(date, yearStemIndex) {
    const year = date.getFullYear();
    const jieIndices = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];
    let sequence;
    if (date < solarTerm(year, 0)) {
      sequence = 10;
    } else if (date < solarTerm(year, 2)) {
      sequence = 11;
    } else {
      sequence = 0;
      for (let index = 0; index < jieIndices.length; index += 1) {
        if (date >= solarTerm(year, jieIndices[index])) sequence = index;
      }
    }
    const stemIndex = (yearStemIndex * 2 + 2 + sequence) % 10;
    const branchIndex = (2 + sequence) % 12;
    return { stemIndex, branchIndex };
  }

  function hourGanzhi(date, dayStemIndex) {
    const branchIndex = Math.floor((date.getHours() + 1) / 2) % 12;
    const stemIndex = ((dayStemIndex % 5) * 2 + branchIndex) % 10;
    return { stemIndex, branchIndex };
  }

  function ganzhiText(value) {
    return STEMS[value.stemIndex] + BRANCHES[value.branchIndex];
  }

  function xunKong(value) {
    const startBranch = (value.branchIndex - value.stemIndex + 12) % 12;
    return BRANCHES[(startBranch + 10) % 12] + BRANCHES[(startBranch + 11) % 12];
  }

  function getCalendarInfo(date) {
    const year = yearGanzhi(date);
    const month = monthGanzhi(date, year.stemIndex);
    const day = dayGanzhi(date, true);
    const hour = hourGanzhi(date, day.stemIndex);
    const terms = surroundingTerms(date);
    const items = { yearly: year, monthly: month, daily: day, hourly: hour };
    return {
      prevTerm: terms.previous,
      nextTerm: terms.next,
      ganzhi: Object.fromEntries(Object.entries(items).map(([key, value]) => [key, ganzhiText(value)])),
      kong: Object.fromEntries(Object.entries(items).map(([key, value]) => [key, xunKong(value)])),
      branch: Object.fromEntries(Object.entries(items).map(([key, value]) => [key, BRANCHES[value.branchIndex]])),
      dayStem: STEMS[day.stemIndex],
      dayBranch: BRANCHES[day.branchIndex],
    };
  }

  renderForm();
})();
