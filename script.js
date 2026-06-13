const planets = [
  {
    id: "mercury",
    name: "水星",
    order: "第 1 颗行星",
    type: "rocky",
    image: "assets/mercury.png",
    distance: "0.39 AU",
    diameter: "4,879 km",
    temperature: "-173°C 至 427°C",
    orbit: "约 88 天",
    rotation: "约 59 天",
    moons: "无",
    rings: "无",
    intro:
      "水星距离太阳最近，也是太阳系中最小的行星。它几乎没有厚大气层来保存热量，因此白天被太阳强烈加热，夜晚又迅速降温，表面温差极大。水星布满撞击坑，记录了太阳系早期天体碰撞的历史。",
    fun: "一天比一年还长：水星自转很慢，公转却很快。"
  },
  {
    id: "venus",
    name: "金星",
    order: "第 2 颗行星",
    type: "rocky",
    image: "assets/venus.png",
    distance: "0.72 AU",
    diameter: "12,104 km",
    temperature: "约 465°C",
    orbit: "约 225 天",
    rotation: "约 243 天",
    moons: "无",
    rings: "无",
    intro:
      "金星大小与地球接近，常被称为地球的姊妹星。但它拥有非常厚的二氧化碳大气和强烈温室效应，表面温度高到足以熔化铅。金星的云层反射大量阳光，因此在夜空中格外明亮。",
    fun: "金星自转方向与多数行星相反。"
  },
  {
    id: "earth",
    name: "地球",
    order: "第 3 颗行星",
    type: "rocky",
    image: "assets/earth.png",
    distance: "1.00 AU",
    diameter: "12,742 km",
    temperature: "平均约 15°C",
    orbit: "约 365 天",
    rotation: "约 24 小时",
    moons: "1 颗",
    rings: "无",
    intro:
      "地球是目前已知唯一存在生命的行星。适中的距离让液态水长期存在，稳定的大气层帮助调节温度并保护生命免受部分宇宙辐射影响。海洋、陆地、大气和生物共同构成了复杂而活跃的地球系统。",
    fun: "从太空看，地球因海洋覆盖广阔而呈现蓝色。"
  },
  {
    id: "mars",
    name: "火星",
    order: "第 4 颗行星",
    type: "rocky",
    image: "assets/mars.png",
    distance: "1.52 AU",
    diameter: "6,779 km",
    temperature: "平均约 -63°C",
    orbit: "约 687 天",
    rotation: "约 24.6 小时",
    moons: "2 颗",
    rings: "无",
    intro:
      "火星因表面富含氧化铁而呈红色。它拥有太阳系最高的火山奥林帕斯山，也有巨大的峡谷系统。火星曾可能存在更温暖湿润的环境，因此成为人类寻找生命痕迹和未来深空探索的重要目标。",
    fun: "火星的一天与地球非常接近。"
  },
  {
    id: "jupiter",
    name: "木星",
    order: "第 5 颗行星",
    type: "gas",
    image: "assets/jupiter.png",
    distance: "5.20 AU",
    diameter: "139,820 km",
    temperature: "云顶约 -110°C",
    orbit: "约 11.9 年",
    rotation: "约 9.9 小时",
    moons: "95+ 颗",
    rings: "有",
    intro:
      "木星是太阳系中最大的行星，主要由氢和氦组成。它的体积巨大，质量超过其他行星总和的两倍。著名的大红斑是持续数百年的巨型风暴，木星强大的引力也深刻影响着太阳系小天体的运动。",
    fun: "木星自转极快，一天不到 10 小时。"
  },
  {
    id: "saturn",
    name: "土星",
    order: "第 6 颗行星",
    type: "gas",
    image: "assets/saturn.png",
    distance: "9.58 AU",
    diameter: "116,460 km",
    temperature: "云顶约 -140°C",
    orbit: "约 29.5 年",
    rotation: "约 10.7 小时",
    moons: "140+ 颗",
    rings: "有",
    intro:
      "土星以壮观的行星环闻名。它的环主要由冰粒、岩石碎片和尘埃组成，从远处看像明亮的光带。土星密度很低，虽然体积巨大，却比木星轻得多，是太阳系中最具辨识度的行星之一。",
    fun: "如果有足够大的水池，土星理论上会漂浮。"
  },
  {
    id: "uranus",
    name: "天王星",
    order: "第 7 颗行星",
    type: "ice",
    image: "assets/uranus.png",
    distance: "19.22 AU",
    diameter: "50,724 km",
    temperature: "约 -224°C",
    orbit: "约 84 年",
    rotation: "约 17 小时",
    moons: "27 颗",
    rings: "有",
    intro:
      "天王星是一颗寒冷的冰巨星，大气中含有甲烷，因此呈现蓝绿色。它最特别的地方是自转轴几乎横躺在轨道平面上，像是侧着身子围绕太阳运行。这让天王星的季节变化十分极端。",
    fun: "天王星的一个季节可能持续二十多年。"
  },
  {
    id: "neptune",
    name: "海王星",
    order: "第 8 颗行星",
    type: "ice",
    image: "assets/neptune.png",
    distance: "30.05 AU",
    diameter: "49,244 km",
    temperature: "约 -214°C",
    orbit: "约 165 年",
    rotation: "约 16 小时",
    moons: "14 颗",
    rings: "有",
    intro:
      "海王星是距离太阳最远的行星，接收到的阳光非常微弱。尽管寒冷遥远，它的大气却异常活跃，拥有高速气流和强烈风暴。海王星的发现曾依靠数学推算，是天文学史上的重要成就。",
    fun: "海王星上的风速可超过地球最强飓风数倍。"
  }
];

const quizSteps = [
  {
    question: "你更喜欢哪种探索环境？",
    options: [
      { label: "极端温差与岩石荒原", score: { mercury: 2, mars: 1 } },
      { label: "壮观风暴与巨大气态世界", score: { jupiter: 2, saturn: 1 } },
      { label: "遥远寒冷的深蓝边界", score: { neptune: 2, uranus: 1 } }
    ]
  },
  {
    question: "你最看重探索任务的哪一点？",
    options: [
      { label: "寻找生命与宜居环境", score: { earth: 2, mars: 2 } },
      { label: "研究大气、风暴和环系统", score: { jupiter: 1, saturn: 2, neptune: 1 } },
      { label: "挑战最陌生、最遥远的区域", score: { uranus: 2, neptune: 2 } }
    ]
  },
  {
    question: "你希望带回哪类发现？",
    options: [
      { label: "行星表面的地质线索", score: { mercury: 1, mars: 2, venus: 1 } },
      { label: "关于地球与生命的比较答案", score: { earth: 2, venus: 1, mars: 1 } },
      { label: "太阳系形成与演化的证据", score: { jupiter: 2, saturn: 2, uranus: 1 } }
    ]
  }
];

const grid = document.querySelector("#planetGrid");
const detail = document.querySelector("#planetDetail");
const table = document.querySelector("#planetTable");
const scaleBars = document.querySelector("#scaleBars");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

function renderPlanets(filter = "all") {
  const visible = filter === "all" ? planets : planets.filter((planet) => planet.type === filter);
  grid.innerHTML = visible
    .map(
      (planet) => `
      <button class="planet-card reveal" data-id="${planet.id}" type="button">
        <img src="${planet.image}" alt="${planet.name}高清行星插图" />
        <small>${planet.order}</small>
        <h3>${planet.name}</h3>
        <p>${planet.intro.slice(0, 58)}...</p>
        <span class="fact-pill">有趣知识：${planet.fun}</span>
      </button>
    `
    )
    .join("");
  observeReveals();
}

function openPlanet(id) {
  const planet = planets.find((item) => item.id === id);
  if (!planet) return;
  document.querySelectorAll(".planet-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.id === id);
  });
  detail.classList.add("open");
  detail.innerHTML = `
    <img src="${planet.image}" alt="${planet.name}详情图像" />
    <div>
      <p class="eyebrow">${planet.order}</p>
      <h3>${planet.name}</h3>
      <p>${planet.intro}</p>
      <span class="fact-pill">有趣知识：${planet.fun}</span>
      <div class="detail-facts">
        <div><span>距离太阳</span><strong>${planet.distance}</strong></div>
        <div><span>平均直径</span><strong>${planet.diameter}</strong></div>
        <div><span>温度</span><strong>${planet.temperature}</strong></div>
        <div><span>公转周期</span><strong>${planet.orbit}</strong></div>
        <div><span>自转周期</span><strong>${planet.rotation}</strong></div>
        <div><span>卫星/行星环</span><strong>${planet.moons} / ${planet.rings}</strong></div>
      </div>
    </div>
  `;
  detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function renderTable() {
  table.innerHTML = planets
    .map(
      (planet) => `
        <tr>
          <td>${planet.name}</td>
          <td>${planet.distance}</td>
          <td>${planet.diameter}</td>
          <td>${planet.temperature}</td>
          <td>${planet.orbit}</td>
          <td>${planet.moons}</td>
          <td>${planet.rings}</td>
        </tr>
      `
    )
    .join("");
}

function renderScaleBars() {
  const maxDiameter = 139820;
  scaleBars.innerHTML = planets
    .map((planet) => {
      const numeric = Number(planet.diameter.replace(/[^0-9]/g, ""));
      const width = Math.max(5, (numeric / maxDiameter) * 100);
      return `
        <div class="scale-row">
          <span>${planet.name}</span>
          <div class="scale-line" style="width:${width}%"></div>
          <span>${planet.diameter}</span>
        </div>
      `;
    })
    .join("");
}

function observeReveals() {
  const reveals = document.querySelectorAll(".reveal:not(.visible)");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((item) => observer.observe(item));
}

let quizIndex = 0;
const quizScore = {};
const quizQuestion = document.querySelector("#quizQuestion");
const quizOptions = document.querySelector("#quizOptions");
const quizResult = document.querySelector("#quizResult");

function renderQuiz() {
  const step = quizSteps[quizIndex];
  quizQuestion.textContent = step.question;
  quizOptions.innerHTML = step.options
    .map((option, index) => `<button type="button" data-index="${index}">${option.label}</button>`)
    .join("");
}

function chooseQuiz(index) {
  const option = quizSteps[quizIndex].options[index];
  Object.entries(option.score).forEach(([id, value]) => {
    quizScore[id] = (quizScore[id] || 0) + value;
  });
  quizIndex += 1;
  if (quizIndex < quizSteps.length) {
    renderQuiz();
    return;
  }
  const winnerId = Object.entries(quizScore).sort((a, b) => b[1] - a[1])[0][0];
  const winner = planets.find((planet) => planet.id === winnerId);
  quizOptions.innerHTML = `<button type="button" id="restartQuiz">重新测试</button>`;
  quizResult.style.display = "block";
  quizResult.innerHTML = `<strong>推荐目的地：${winner.name}</strong><br />${winner.intro}`;
  document.querySelector("#restartQuiz").addEventListener("click", () => {
    quizIndex = 0;
    Object.keys(quizScore).forEach((key) => delete quizScore[key]);
    quizResult.style.display = "none";
    quizResult.innerHTML = "";
    renderQuiz();
  });
}

document.addEventListener("click", (event) => {
  const card = event.target.closest(".planet-card");
  if (card) openPlanet(card.dataset.id);

  const filter = event.target.closest(".filter-btn");
  if (filter) {
    document.querySelectorAll(".filter-btn").forEach((button) => button.classList.remove("active"));
    filter.classList.add("active");
    renderPlanets(filter.dataset.filter);
  }

  const quizButton = event.target.closest("#quizOptions button:not(#restartQuiz)");
  if (quizButton) chooseQuiz(Number(quizButton.dataset.index));
});

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", () => {
  nav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
});

renderPlanets();
renderTable();
renderScaleBars();
renderQuiz();
observeReveals();
