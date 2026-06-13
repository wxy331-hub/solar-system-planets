const planetDetails = {
  mercury: {
    name: "水星",
    english: "Mercury",
    order: "距离太阳最近的第 1 颗行星",
    image: "../assets/mercury.webp",
    theme: "closest",
    tag: "岩石行星 · 极端温差 · 撞击坑世界",
    lead:
      "水星是太阳系中最小、也最靠近太阳的行星。它看起来像布满陨石坑的月球，却拥有巨大的金属核心和微弱磁场，是研究内太阳系形成历史的重要窗口。",
    stats: [
      ["平均距离", "0.39 AU"],
      ["平均直径", "4,879 km"],
      ["公转周期", "约 88 天"],
      ["自转周期", "约 58.6 天"],
      ["温度范围", "-173°C 至 427°C"],
      ["卫星/环", "无 / 无"]
    ],
    sections: [
      {
        title: "为什么水星如此特别？",
        text:
          "水星离太阳最近，受到强烈阳光照射，但它几乎没有真正意义上的大气层，因此不能像地球那样保温。白天表面会被晒得极热，夜晚又会快速降温，形成太阳系行星中最剧烈的昼夜温差之一。"
      },
      {
        title: "表面和内部结构",
        text:
          "水星表面密布撞击坑、平原和巨大的陡崖。科学家认为，这些陡崖可能与行星内部冷却收缩有关。水星的金属核心比例很高，使它虽然体积小，却拥有较高密度和微弱磁场。"
      },
      {
        title: "人类怎样探索它？",
        text:
          "NASA 的 Mariner 10 首次近距离飞掠水星，MESSENGER 则进入水星轨道并进行了多年观测，帮助人类认识水星表面成分、磁场、极区冰沉积等问题。"
      }
    ],
    mission: "适合探索的问题：为什么一颗小行星能拥有这么大的金属核心？极区永久阴影中为何可能保存水冰？",
    observation: "观测提示：水星离太阳视角很近，通常只能在日出前或日落后短时间寻找，观测时要避免直视太阳。",
    quiz: {
      question: "水星表面昼夜温差巨大的主要原因是什么？",
      answer: "几乎没有厚大气层来调节和保存热量。"
    },
    source: "https://science.nasa.gov/mercury/"
  },
  venus: {
    name: "金星",
    english: "Venus",
    order: "距离太阳第 2 颗行星",
    image: "../assets/venus.webp",
    theme: "hot",
    tag: "岩石行星 · 厚重大气 · 强温室效应",
    lead:
      "金星大小与地球相近，却是太阳系表面最炽热的行星。厚厚的二氧化碳大气和硫酸云层让它成为理解温室效应、行星气候演化的重要对照样本。",
    stats: [
      ["平均距离", "0.72 AU"],
      ["平均直径", "12,104 km"],
      ["公转周期", "约 225 天"],
      ["自转周期", "约 243 天"],
      ["表面温度", "约 465°C"],
      ["卫星/环", "无 / 无"]
    ],
    sections: [
      {
        title: "地球的姊妹星，却完全不同",
        text:
          "金星与地球大小接近、组成相似，因此常被称为地球的姊妹星。但金星大气极其浓厚，表面气压远高于地球，强烈温室效应让它长期维持极高温度。"
      },
      {
        title: "被云层隐藏的世界",
        text:
          "从可见光看，金星表面被厚云遮挡。雷达探测显示，金星拥有火山地貌、广阔平原和复杂的构造结构。它的自转很慢，并且方向与多数行星相反。"
      },
      {
        title: "探索价值",
        text:
          "研究金星能帮助我们理解类地行星的气候边界：为什么两个大小相近的行星，一个适宜生命，一个却变成高温高压世界。未来任务将继续关注它的大气、地质活动和演化历史。"
      }
    ],
    mission: "适合探索的问题：温室效应如何改变一颗行星的长期命运？金星今天是否仍存在火山活动？",
    observation: "观测提示：金星非常明亮，常在清晨或傍晚出现，因此有“晨星”“昏星”的称呼。",
    quiz: {
      question: "金星表面极热的核心原因是什么？",
      answer: "浓厚二氧化碳大气造成强烈温室效应。"
    },
    source: "https://science.nasa.gov/venus/"
  },
  earth: {
    name: "地球",
    english: "Earth",
    order: "距离太阳第 3 颗行星",
    image: "../assets/earth.webp",
    theme: "life",
    tag: "岩石行星 · 液态水 · 已知生命家园",
    lead:
      "地球是目前已知唯一存在生命的行星。适中的太阳距离、液态水、保护性大气层和活跃地质系统共同塑造了这个蓝色星球。",
    stats: [
      ["平均距离", "1.00 AU"],
      ["平均直径", "12,742 km"],
      ["公转周期", "约 365 天"],
      ["自转周期", "约 24 小时"],
      ["平均温度", "约 15°C"],
      ["卫星/环", "1 颗 / 无"]
    ],
    sections: [
      {
        title: "为什么地球适合生命？",
        text:
          "地球位于太阳系宜居带附近，表面可长期存在液态水。大气层既能提供适宜压力和温度，又能阻挡部分有害辐射。磁场还帮助地球抵御太阳风的持续侵蚀。"
      },
      {
        title: "活跃的行星系统",
        text:
          "地球不是静止的岩石球。板块运动、火山、海洋环流、大气循环和生命活动不断改变它的表面环境。正因为系统活跃，地球气候和生态才呈现复杂变化。"
      },
      {
        title: "从太空重新认识家园",
        text:
          "卫星观测让人类能持续追踪云层、海洋、陆地、冰盖和大气变化。研究地球也是理解其他行星的基础：我们用地球作为参照，判断哪些环境可能适合生命。"
      }
    ],
    mission: "适合探索的问题：液态水、大气、磁场和生命之间如何相互影响？",
    observation: "观测提示：从太空看地球呈蓝色，是因为海洋覆盖了大部分表面，同时白色云层不断变化。",
    quiz: {
      question: "地球最显著的行星特征是什么？",
      answer: "目前已知唯一拥有生命，并长期存在液态水。"
    },
    source: "https://science.nasa.gov/earth/facts/"
  },
  mars: {
    name: "火星",
    english: "Mars",
    order: "距离太阳第 4 颗行星",
    image: "../assets/mars.webp",
    theme: "red",
    tag: "岩石行星 · 红色荒原 · 未来探索前哨",
    lead:
      "火星因富含氧化铁的尘土呈现红色，是人类最熟悉、也最想深入探索的行星之一。它可能曾经拥有更温暖湿润的环境，因此与寻找生命痕迹密切相关。",
    stats: [
      ["平均距离", "1.52 AU"],
      ["平均直径", "6,779 km"],
      ["公转周期", "约 687 天"],
      ["自转周期", "约 24.6 小时"],
      ["平均温度", "约 -63°C"],
      ["卫星/环", "2 颗 / 无"]
    ],
    sections: [
      {
        title: "红色来自哪里？",
        text:
          "火星表面岩石和尘土中含有大量氧化铁，类似铁锈，因此呈现红色。稀薄大气无法有效保温，今天的火星寒冷干燥，但地貌显示远古火星可能存在河流、湖泊甚至更稳定的水环境。"
      },
      {
        title: "壮观地貌",
        text:
          "火星拥有太阳系最高的火山奥林帕斯山，也有巨大的水手峡谷。极冠、沙丘、干涸河道和撞击坑共同记录了火星复杂的气候与地质历史。"
      },
      {
        title: "机器人先行",
        text:
          "火星车、轨道器和着陆器已经长期工作，分析岩石、寻找水活动证据，并为未来载人探索积累经验。火星是理解类地行星演化和生命可能性的关键目标。"
      }
    ],
    mission: "适合探索的问题：火星是否曾经适合微生物生存？人类未来能否在火星长期驻留？",
    observation: "观测提示：火星在接近冲日时更明亮，用小型望远镜有时能看到极冠和暗色地貌。",
    quiz: {
      question: "火星为什么看起来偏红？",
      answer: "表面尘土和岩石富含氧化铁。"
    },
    source: "https://science.nasa.gov/mars/"
  },
  jupiter: {
    name: "木星",
    english: "Jupiter",
    order: "距离太阳第 5 颗行星",
    image: "../assets/jupiter.webp",
    theme: "giant",
    tag: "气态巨行星 · 大红斑 · 强磁场",
    lead:
      "木星是太阳系最大的行星，质量超过其他行星总和的两倍。它像一个巨大的气体实验室，展示着高速云带、强烈风暴和庞大磁场。",
    stats: [
      ["平均距离", "5.20 AU"],
      ["平均直径", "139,820 km"],
      ["公转周期", "约 11.9 年"],
      ["自转周期", "约 9.9 小时"],
      ["云顶温度", "约 -110°C"],
      ["卫星/环", "95+ 颗 / 有"]
    ],
    sections: [
      {
        title: "太阳系的巨人",
        text:
          "木星主要由氢和氦组成，没有像地球那样清晰坚硬的表面。它的体积和质量极大，强引力影响许多小天体轨道，也塑造了复杂的卫星系统。"
      },
      {
        title: "大红斑与云带",
        text:
          "木星表面可见的条纹其实是不同纬度的大气云带。大红斑是一场存在很久的巨大风暴，尺寸足以容纳地球级别的尺度，是木星最著名的标志。"
      },
      {
        title: "卫星世界",
        text:
          "木星的伽利略卫星包括木卫一、木卫二、木卫三和木卫四。其中木卫二冰壳下可能存在海洋，成为寻找地外生命环境的重要目标。"
      }
    ],
    mission: "适合探索的问题：木星如何影响太阳系结构？木卫二地下海洋是否具备生命条件？",
    observation: "观测提示：木星很明亮，用双筒望远镜有机会看到伽利略卫星排成一线。",
    quiz: {
      question: "木星最著名的巨大风暴叫什么？",
      answer: "大红斑。"
    },
    source: "https://science.nasa.gov/jupiter/"
  },
  saturn: {
    name: "土星",
    english: "Saturn",
    order: "距离太阳第 6 颗行星",
    image: "../assets/saturn.webp",
    theme: "ring",
    tag: "气态巨行星 · 壮观行星环 · 多卫星系统",
    lead:
      "土星以明亮宽阔的行星环闻名，是太阳系中最容易辨认的行星之一。它的环、卫星和低密度气态结构，让人类看到行星系统可以多么丰富。",
    stats: [
      ["平均距离", "9.58 AU"],
      ["平均直径", "116,460 km"],
      ["公转周期", "约 29.5 年"],
      ["自转周期", "约 10.7 小时"],
      ["云顶温度", "约 -140°C"],
      ["卫星/环", "140+ 颗 / 有"]
    ],
    sections: [
      {
        title: "行星环的秘密",
        text:
          "土星环由无数冰粒、岩石碎片和尘埃组成。它们看似连续，实际是由大量小颗粒绕土星运行形成的巨大盘状结构。环的亮度和层次让土星成为望远镜中的经典目标。"
      },
      {
        title: "低密度巨行星",
        text:
          "土星主要由氢和氦组成，平均密度比水还低。它没有固体表面，外观上的云带来自大气层运动，内部则在高压下呈现更复杂的物质状态。"
      },
      {
        title: "泰坦和冰卫星",
        text:
          "土星最大的卫星泰坦拥有浓厚大气和液态甲烷、乙烷湖泊。土卫二喷出的冰羽流提示地下可能有海洋，这些卫星让土星系统成为天体生物学的重要研究对象。"
      }
    ],
    mission: "适合探索的问题：行星环如何形成和演化？土卫二地下海洋是否可能支持生命所需条件？",
    observation: "观测提示：小型望远镜就能看到土星环，是入门天文观测中最震撼的目标之一。",
    quiz: {
      question: "土星环主要由什么组成？",
      answer: "大量冰粒、岩石碎片和尘埃。"
    },
    source: "https://science.nasa.gov/saturn/"
  },
  uranus: {
    name: "天王星",
    english: "Uranus",
    order: "距离太阳第 7 颗行星",
    image: "../assets/uranus.webp",
    theme: "tilt",
    tag: "冰巨星 · 横躺自转 · 蓝绿色大气",
    lead:
      "天王星是一颗寒冷的冰巨星，最特别之处是自转轴几乎横躺。它像是侧身绕太阳运行，使季节变化极其漫长而奇特。",
    stats: [
      ["平均距离", "19.22 AU"],
      ["平均直径", "50,724 km"],
      ["公转周期", "约 84 年"],
      ["自转周期", "约 17 小时"],
      ["低温环境", "约 -224°C"],
      ["卫星/环", "27 颗 / 有"]
    ],
    sections: [
      {
        title: "为什么像横躺着转？",
        text:
          "天王星自转轴倾斜接近 98 度，几乎平躺在轨道上。科学家推测，这可能与早期太阳系中的巨大碰撞有关。这样的倾角让它的极区会长时间面向或背向太阳。"
      },
      {
        title: "冰巨星不是冰球",
        text:
          "天王星被称为冰巨星，是因为内部含有较多水、氨、甲烷等挥发性物质。大气中的甲烷吸收红光，使它呈现蓝绿色。它也有暗淡的行星环和多个卫星。"
      },
      {
        title: "遥远而少被探访",
        text:
          "目前只有 Voyager 2 曾近距离飞掠天王星，因此它仍有许多未知问题。研究天王星有助于理解冰巨星，也有助于比较系外行星中常见的类似天体。"
      }
    ],
    mission: "适合探索的问题：巨大的自转轴倾角怎样影响气候？冰巨星内部结构与气态巨行星有何不同？",
    observation: "观测提示：天王星亮度较暗，通常需要望远镜和准确星图才能稳定识别。",
    quiz: {
      question: "天王星最独特的运动特征是什么？",
      answer: "自转轴几乎横躺，像侧着身子绕太阳运行。"
    },
    source: "https://science.nasa.gov/uranus/"
  },
  neptune: {
    name: "海王星",
    english: "Neptune",
    order: "距离太阳最远的第 8 颗行星",
    image: "../assets/neptune.webp",
    theme: "deep",
    tag: "冰巨星 · 高速风暴 · 深蓝边界",
    lead:
      "海王星是八大行星中距离太阳最远的一颗。即使阳光微弱，它的大气依然极其活跃，拥有强风和大型风暴，是太阳系边缘的深蓝世界。",
    stats: [
      ["平均距离", "30.05 AU"],
      ["平均直径", "49,244 km"],
      ["公转周期", "约 165 年"],
      ["自转周期", "约 16 小时"],
      ["低温环境", "约 -214°C"],
      ["卫星/环", "14 颗 / 有"]
    ],
    sections: [
      {
        title: "数学预言发现的行星",
        text:
          "海王星的发现与天王星轨道异常有关。科学家通过计算推测远处可能存在另一颗行星，随后观测确认了海王星的位置，这是天文学史上数学预测与观测验证结合的经典案例。"
      },
      {
        title: "深蓝色与高速风",
        text:
          "海王星大气中含有甲烷，呈现蓝色。它虽然远离太阳，却拥有强烈大气环流和高速风暴，说明行星内部热量也可能推动大气运动。"
      },
      {
        title: "海卫一的线索",
        text:
          "海王星最大的卫星海卫一以逆行轨道运行，可能曾是被海王星捕获的柯伊伯带天体。它的存在让海王星系统与太阳系边缘小天体联系起来。"
      }
    ],
    mission: "适合探索的问题：太阳系边缘为何仍有强烈天气？海卫一是否保存了外太阳系早期线索？",
    observation: "观测提示：海王星肉眼不可见，需要望远镜和精确定位，通常呈小而蓝的圆点。",
    quiz: {
      question: "海王星为何在天文学史上很特别？",
      answer: "它是在数学预测后通过观测确认的行星。"
    },
    source: "https://science.nasa.gov/neptune/"
  }
};

const planetOrder = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
const planet = planetDetails[document.body.dataset.planet];
const root = document.querySelector("#planetDetailPage");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

function renderDetailPage() {
  if (!planet || !root) return;
  document.title = `${planet.name}｜探索太阳系：八大行星的奥秘`;
  const currentIndex = planetOrder.indexOf(document.body.dataset.planet);
  const previous = planetDetails[planetOrder[(currentIndex + planetOrder.length - 1) % planetOrder.length]];
  const next = planetDetails[planetOrder[(currentIndex + 1) % planetOrder.length]];

  root.innerHTML = `
    <section class="planet-hero planet-theme-${planet.theme}">
      <div class="planet-hero-bg" aria-hidden="true"></div>
      <div class="planet-hero-copy reveal">
        <a class="back-link" href="../index.html#planets">返回八大行星</a>
        <p class="eyebrow">${planet.english.toUpperCase()} DOSSIER</p>
        <h1>${planet.name}</h1>
        <p class="planet-order">${planet.order}</p>
        <p class="hero-copy">${planet.lead}</p>
        <div class="hero-actions">
          <a class="primary-btn" href="#profile">查看行星档案</a>
          <a class="ghost-btn" href="${planet.source}" target="_blank" rel="noreferrer">NASA 资料源</a>
        </div>
      </div>
      <figure class="planet-hero-visual reveal">
        <img src="${planet.image}" alt="${planet.name}高清行星图像" />
        <figcaption>${planet.tag}</figcaption>
      </figure>
    </section>

    <section class="section detail-section" id="profile">
      <div class="section-heading reveal">
        <p class="eyebrow">PLANET PROFILE</p>
        <h2>${planet.name}核心档案</h2>
        <p>下面的数据采用常见天文科普口径整理，适合快速比较不同星球的大小、距离和运动周期。</p>
      </div>
      <div class="detail-stat-grid reveal">
        ${planet.stats.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}
      </div>
    </section>

    <section class="section story-section">
      <div class="story-grid">
        ${planet.sections
          .map(
            (item, index) => `
          <article class="story-card glass-card reveal">
            <span class="story-index">0${index + 1}</span>
            <h2>${item.title}</h2>
            <p>${item.text}</p>
          </article>`
          )
          .join("")}
      </div>
    </section>

    <section class="section mission-detail">
      <div class="mission-detail-grid">
        <article class="glass-card reveal">
          <p class="eyebrow">MISSION QUESTIONS</p>
          <h2>值得继续探索的问题</h2>
          <p>${planet.mission}</p>
        </article>
        <article class="glass-card reveal">
          <p class="eyebrow">SKYWATCHING</p>
          <h2>观测提示</h2>
          <p>${planet.observation}</p>
        </article>
        <article class="glass-card reveal quiz-mini">
          <p class="eyebrow">QUICK CHECK</p>
          <h2>${planet.quiz.question}</h2>
          <button class="ghost-btn" type="button" id="showAnswer">显示答案</button>
          <p class="answer" id="answer">${planet.quiz.answer}</p>
        </article>
      </div>
    </section>

    <section class="section planet-navigation">
      <a class="ghost-btn" href="${previous.english.toLowerCase()}.html">上一颗：${previous.name}</a>
      <a class="primary-btn" href="../index.html#planets">回到太阳系展厅</a>
      <a class="ghost-btn" href="${next.english.toLowerCase()}.html">下一颗：${next.name}</a>
    </section>
  `;
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

renderDetailPage();
observeReveals();

document.addEventListener("click", (event) => {
  if (event.target.closest("#showAnswer")) {
    document.querySelector("#answer").classList.add("visible-answer");
  }
});

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

