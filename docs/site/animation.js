(function () {
  const root = document.getElementById("root");
  if (!root) return;

  const vars = window.__hyperframes?.getVariables?.() || {};
  const lang = vars.lang || root.dataset.lang || "en";
  const isZh = lang.toLowerCase().startsWith("zh");
  const assetBase = root.dataset.assetBase || "../assets/generated/";
  const asset = (name) => new URL(name, new URL(assetBase, window.location.href)).href;
  const DURATION = 35;

  const copy = isZh
    ? {
        htmlLang: "zh-CN",
        language: "中文版",
        repo: "开源 Skill",
        brand: "多智能体专家团 Skill",
        source: "基于专家团产品化理念",
        heroTitle: "把复杂项目变成可审计的专家团协作。",
        heroSubtitle:
          "不是简单多开几个 Agent，而是先判断是否值得组团，再由主理人路由、专家执行、统一交付。",
        heroImage: "steward-routing-scene.png",
        heroCaption: "中文演示图：主理人分派任务、专家协作、交付回流。",
        heroPills: [
          ["先判断", "任务不复杂，就不强行专家团化"],
          ["再路由", "主理人负责拆解、预检和协调"],
          ["可追踪", "每个结论都保留理由和检查项"]
        ],
        problem: {
          kicker: "01 / 问题",
          title: "普通提示词会把复杂工作压成一团。",
          copy: "任务一大，就会同时混进研究、架构、实现、审核、交付标准。没有边界和负责人，多 Agent 只会更乱。",
          briefLabel: "原始任务",
          briefTitle: "帮我把这个项目做成可发布的开源 Skill",
          cards: [
            ["研究", "来源、资料、假设混在一起"],
            ["设计", "流程图好看，但不一定能执行"],
            ["实现", "谁负责改文件并验证不清楚"],
            ["审核", "质量门槛容易被省略"],
            ["交付", "最后只剩一段长总结"]
          ],
          warnings: ["无主理人", "专家边界不清", "交付无法复盘"]
        },
        sourceScene: {
          kicker: "02 / 来源理念",
          title: "文章启发：把专家和专家团产品化。",
          copy: "叶小钗在人人都是产品经理文章中拆解了专家团产品化思路：专家不是闲聊角色，而是带能力、边界、流程和交付标准的产品化单元。",
          image: "handoff-delivery-scene.png",
          imageCaption: "中文演示图：交付包、检查清单和决策轨迹。",
          articleTitle: "公开文章启发：多 Agent 协作可以这样产品化",
          articleMeta: "作者：叶小钗；发布：2026-07-04；平台：人人都是产品经理。",
          ideas: [
            ["专家 Agent", "每个专家有明确身份、能力、输入、输出和边界。"],
            ["专家团流程", "多个专家按预设工作流协作，而不是同时乱跑。"],
            ["主理人机制", "一个协调者负责接收任务、分派、整合、处理冲突。"]
          ]
        },
        adaptation: {
          kicker: "03 / 我们改了什么",
          title: "从产品案例，整理成通用开源 Skill。",
          copy: "这个仓库不是复刻任何产品提示词，而是抽出可迁移的方法，让其他编程 Agent 也能照着组建专家团。",
          bridge: [
            ["文章理念", "专家与专家团可以被产品化设计。"],
            ["方法抽象", "拆出触发条件、主理人、专家画像和交付协议。"],
            ["开源 Skill", "沉淀为可安装、可审计、可复用的 SKILL.md。"]
          ],
          changes: [
            ["工具无关", "不绑定某一个 Agent 平台。"],
            ["先做触发判断", "避免把小任务过度拆分。"],
            ["能力预检", "先确认专家团是否有资料、工具和权限。"],
            ["交付合约", "输出必须带证据、假设、风险和下一步。"]
          ]
        },
        steward: {
          kicker: "04 / 主理人",
          title: "专家团需要一个明确的主理人。",
          copy: "主理人不是多一个专家，而是负责把任务变成可分派、可合并、可交付的协作结构。",
          flow: [
            ["任务输入", "目标、约束、资料"],
            ["能力预检", "工具、信息、权限"],
            ["主理人", "拆解、路由、整合"],
            ["质量复核", "冲突、遗漏、风险"],
            ["研究专家", "来源与事实"],
            ["构建专家", "实现与产物"],
            ["审阅专家", "漏洞与缺口"]
          ],
          side: [
            ["何时启用", "跨领域、风险高、交付复杂时启用专家团。"],
            ["何时不用", "简单修复、单文件任务、信息不足时先拒绝组团。"],
            ["主理人职责", "维护协作节奏，而不是替所有专家做判断。"]
          ]
        },
        blueprint: {
          kicker: "05 / 专家画像",
          title: "每个专家都用 8 个锚点定义清楚。",
          copy: "专家越具体，协作越稳定。这个 Skill 要求每个专家先写清角色、任务、边界、工具和验收方式。",
          anchors: [
            ["使命", "解决什么问题"],
            ["边界", "不负责什么"],
            ["输入", "需要哪些资料"],
            ["工具", "允许调用什么"],
            ["输出", "交付格式"],
            ["协作", "如何交接"],
            ["否决", "什么情况必须暂停"],
            ["检查", "如何验收"]
          ],
          rosterTitle: "常见专家组合",
          roles: [
            ["研", "研究专家", "查来源、提炼事实、标记不确定。"],
            ["构", "架构专家", "拆系统、定接口、控制复杂度。"],
            ["实", "实现专家", "动手改文件并保持范围。"],
            ["审", "审阅专家", "找漏洞、风险和测试缺口。"],
            ["交", "交付专家", "整理说明、清单和下一步。"]
          ]
        },
        delivery: {
          kicker: "06 / 交付闭环",
          title: "最终不是聊天记录，而是可接手的交付包。",
          copy: "每个专家的输出进入统一合成：保留分歧、证据、假设和验证状态，让后续 Agent 或人类都能继续工作。",
          lanes: [
            ["专家输出", ["事实清单", "实现建议", "风险列表"]],
            ["主理人合成", ["冲突处理", "决策理由", "未决问题"]],
            ["最终交付", ["行动方案", "检查清单", "后续路由"]]
          ],
          checks: ["证据可追踪", "假设被标记", "风险不隐藏", "下一步明确"]
        },
        final: {
          kicker: "07 / 使用方式",
          title: "装进 Skill 后，其他编程 Agent 也能用。",
          copy: "它是一份方法协议：告诉 Agent 什么时候组团、怎么分派、怎么合并、怎么交付，而不是绑定某一个编程 Agent。",
          outputTitle: "标准输出应该包含",
          outputs: ["任务判断", "专家名单", "分工理由", "专家结论", "整合决策", "风险与假设", "验证状态", "下一步行动"],
          path: "skill/SKILL.md",
          ctaTitle: "适合优化未来的 Skill 和项目",
          ctaCopy: "当任务涉及多角色、多阶段、多产物时，先调用这个 Skill 设计专家团，再进入实际执行。",
          tags: ["portable", "auditable", "multi-agent", "open-source"]
        }
      }
    : {
        htmlLang: "en",
        language: "English",
        repo: "open-source Skill",
        brand: "Agent Expert Panel Skill",
        source: "Inspired by expert-team productization",
        heroTitle: "Turn complex projects into auditable expert-team work.",
        heroSubtitle:
          "Not just more agents. First decide whether a panel is worth it, then route through a steward, experts, and a reviewable handoff.",
        heroImage: "skill-infographic.png",
        heroCaption: "English infographic: the full method from trigger to delivery.",
        heroPills: [
          ["Fit first", "Do not panelize a simple task"],
          ["Route well", "A steward owns decomposition and synthesis"],
          ["Traceable", "Every decision keeps reasons and checks"]
        ],
        problem: {
          kicker: "01 / Problem",
          title: "A broad prompt collapses too much work into one blob.",
          copy: "Research, architecture, implementation, review, and delivery rules get mixed together. Without ownership and boundaries, adding agents only adds noise.",
          briefLabel: "Raw request",
          briefTitle: "Turn this project into a release-ready open-source Skill",
          cards: [
            ["Research", "Sources, facts, and assumptions blur together"],
            ["Design", "The diagram may look clear but still fail in use"],
            ["Build", "File ownership and verification stay vague"],
            ["Review", "Quality gates are easy to skip"],
            ["Deliver", "The result becomes one long summary"]
          ],
          warnings: ["No steward", "Blurry expert scope", "No review trail"]
        },
        sourceScene: {
          kicker: "02 / Source Idea",
          title: "The article's core idea: productize experts and expert teams.",
          copy: "Ye Xiaochai's article on Woshipm explains expert-team productization: capabilities, boundaries, workflows, and delivery checks.",
          image: "expert-panel-scene.png",
          imageCaption: "English scene: steward, experts, routing, and reviewable handoff.",
          articleTitle: "Article-inspired method: productizing multi-agent collaboration",
          articleMeta: "Author: Ye Xiaochai; published: 2026-07-04; platform: Woshipm.",
          ideas: [
            ["Expert agents", "Each expert has identity, capability, inputs, outputs, and limits."],
            ["Team workflows", "Experts collaborate through preset flows instead of running loose."],
            ["Steward layer", "One coordinator handles intake, routing, synthesis, and conflict."],
          ]
        },
        adaptation: {
          kicker: "03 / Adaptation",
          title: "We turned the case study into a reusable open-source Skill.",
          copy: "This repository does not copy any product prompts. It extracts the portable method so other coding agents can design expert panels too.",
          bridge: [
            ["Article concept", "Experts and expert teams can be designed like product units."],
            ["Method layer", "Trigger rules, steward duties, expert contracts, handoff rules."],
            ["Open Skill", "A portable SKILL.md that agents can install and follow."]
          ],
          changes: [
            ["Tool-neutral", "Not tied to one agent platform."],
            ["Trigger before dispatch", "Avoid coordination overhead for small work."],
            ["Capability preflight", "Check tools, evidence, permissions, and data."],
            ["Delivery contract", "Require evidence, assumptions, risks, and next steps."]
          ]
        },
        steward: {
          kicker: "04 / Steward",
          title: "An expert panel needs one accountable steward.",
          copy: "The steward is not another specialist. It turns the task into work that can be routed, merged, checked, and handed off.",
          flow: [
            ["Task intake", "Goal, constraints, materials"],
            ["Preflight", "Tools, data, access"],
            ["Steward", "Decompose, route, synthesize"],
            ["Quality review", "Conflicts, gaps, risks"],
            ["Research expert", "Sources and facts"],
            ["Builder expert", "Implementation and artifacts"],
            ["Reviewer expert", "Bugs and blind spots"]
          ],
          side: [
            ["When to use it", "Cross-domain, high-risk, or multi-deliverable work."],
            ["When not to", "Simple fixes, single-file tasks, or missing context."],
            ["Steward duty", "Keep coordination coherent without replacing expertise."]
          ]
        },
        blueprint: {
          kicker: "05 / Expert Blueprint",
          title: "Every expert is defined with 8 practical anchors.",
          copy: "The more explicit the expert contract, the more stable the collaboration. Each expert declares mission, scope, tools, handoff, and checks before work starts.",
          anchors: [
            ["Mission", "Problem to solve"],
            ["Boundary", "What not to own"],
            ["Inputs", "Required material"],
            ["Tools", "Allowed capability"],
            ["Output", "Delivery shape"],
            ["Handoff", "Collaboration rule"],
            ["Veto", "When to pause"],
            ["Checks", "Acceptance test"]
          ],
          rosterTitle: "Common expert panel",
          roles: [
            ["R", "Research", "Find sources, facts, uncertainty."],
            ["A", "Architecture", "Shape systems and interfaces."],
            ["B", "Builder", "Edit files and keep scope tight."],
            ["Q", "Reviewer", "Find bugs, risks, test gaps."],
            ["D", "Delivery", "Package the outcome and next steps."]
          ]
        },
        delivery: {
          kicker: "06 / Delivery Loop",
          title: "The final result is a handoff package, not a chat transcript.",
          copy: "Expert outputs are synthesized into a package that preserves disagreements, evidence, assumptions, and verification status.",
          lanes: [
            ["Expert outputs", ["Fact list", "Build advice", "Risk list"]],
            ["Steward synthesis", ["Conflict handling", "Decision reasons", "Open questions"]],
            ["Final handoff", ["Action plan", "Checklist", "Next routing"]]
          ],
          checks: ["Evidence trace", "Assumptions marked", "Risks visible", "Next step clear"]
        },
        final: {
          kicker: "07 / Use It",
          title: "Once installed, other coding agents can use the method too.",
          copy: "It is a coordination protocol: when to form a panel, how to assign experts, how to merge work, and how to deliver cleanly.",
          outputTitle: "A standard output includes",
          outputs: ["Fit decision", "Expert roster", "Routing reasons", "Expert findings", "Integrated decision", "Risks and assumptions", "Verification status", "Next action"],
          path: "skill/SKILL.md",
          ctaTitle: "Use it to improve future Skills and projects",
          ctaCopy: "When work involves multiple roles, stages, and deliverables, call this Skill first to design the expert panel, then execute.",
          tags: ["portable", "auditable", "multi-agent", "open-source"]
        }
      };

  document.documentElement.lang = copy.htmlLang;
  root.className = isZh ? "zh" : "en";

  const pillCards = copy.heroPills
    .map((item) => `<article class="hero-pill"><div class="pill-label">${item[0]}</div><div class="pill-title">${item[1]}</div></article>`)
    .join("");

  const chaosCards = copy.problem.cards
    .map((item) => `<article class="chaos-card"><b>${item[0]}</b><span>${item[1]}</span></article>`)
    .join("");

  const warnings = copy.problem.warnings.map((item) => `<div class="warning">${item}</div>`).join("");

  const ideas = copy.sourceScene.ideas
    .map(
      (item, index) => `
        <article class="idea-step">
          <div class="idea-num">${index + 1}</div>
          <div><b>${item[0]}</b><span>${item[1]}</span></div>
        </article>
      `
    )
    .join("");

  const bridge = copy.adaptation.bridge
    .map(
      (item, index) => `
        <article class="bridge-card panel">
          <h3>${item[0]}</h3>
          <p>${item[1]}</p>
        </article>
        ${index < copy.adaptation.bridge.length - 1 ? '<div class="bridge-arrow"></div>' : ""}
      `
    )
    .join("");

  const changes = copy.adaptation.changes
    .map((item) => `<article class="change-card"><b>${item[0]}</b><span>${item[1]}</span></article>`)
    .join("");

  const flow = copy.steward.flow;
  const side = copy.steward.side
    .map((item) => `<article class="side-item"><b>${item[0]}</b><span>${item[1]}</span></article>`)
    .join("");

  const anchors = copy.blueprint.anchors
    .map(
      (item, index) => `
        <article class="anchor-card">
          <div class="anchor-index">${index + 1}</div>
          <b>${item[0]}</b>
          <span>${item[1]}</span>
        </article>
      `
    )
    .join("");

  const roleColors = ["#245b9f", "#00796d", "#c3742f", "#9b4f77", "#c94c4c"];
  const roles = copy.blueprint.roles
    .map(
      (item, index) => `
        <article class="role-row" style="--role-color:${roleColors[index]}">
          <div class="role-dot">${item[0]}</div>
          <div><b>${item[1]}</b><span>${item[2]}</span></div>
        </article>
      `
    )
    .join("");

  const lanes = copy.delivery.lanes
    .map(
      (lane) => `
        <section class="lane panel">
          <h3>${lane[0]}</h3>
          <div class="packet-list">
            ${lane[1].map((item) => `<div class="packet">${item}<small>${copy.delivery.title}</small></div>`).join("")}
          </div>
        </section>
      `
    )
    .join("");

  const checks = copy.delivery.checks.map((item) => `<div class="check">${item}</div>`).join("");
  const outputs = copy.final.outputs.map((item) => `<div class="output-item">${item}</div>`).join("");
  const tags = copy.final.tags.map((item) => `<span class="cta-tag">${item}</span>`).join("");

  root.innerHTML = `
    <main class="stage ${isZh ? "zh" : "en"}">
      <div class="texture" data-layout-allow-overflow></div>
      <header class="topbar">
        <div class="brand-lockup">
          <div class="brand-mark">AEP</div>
          <div>
            <div class="brand-text">${copy.brand}</div>
            <div class="brand-subtext">${copy.source}</div>
          </div>
        </div>
        <div class="top-meta">
          <span class="meta-pill">${copy.language}</span>
          <span class="meta-pill">${copy.repo}</span>
        </div>
      </header>
      <div class="progress"><div class="progress-fill"></div></div>

      <section class="scene scene-hero">
        <div class="scene-inner hero-grid">
          <div class="hero-main">
            <div class="scene-kicker">00 / Agent Expert Panel</div>
            <h1 class="hero-title">${copy.heroTitle}</h1>
            <p class="hero-subtitle">${copy.heroSubtitle}</p>
            <div class="hero-pills">${pillCards}</div>
          </div>
          <figure class="image-board hero-image">
            <img src="${asset(copy.heroImage)}" alt="" data-layout-allow-overflow />
            <figcaption class="image-caption">${copy.heroCaption}</figcaption>
          </figure>
        </div>
      </section>

      <section class="scene scene-problem">
        <div class="scene-inner problem-grid">
          <div>
            <div class="scene-kicker">${copy.problem.kicker}</div>
            <h2 class="scene-title">${copy.problem.title}</h2>
            <p class="scene-copy">${copy.problem.copy}</p>
            <article class="brief-card panel">
              <div class="brief-label">${copy.problem.briefLabel}</div>
              <div class="brief-title">${copy.problem.briefTitle}</div>
              <div class="brief-lines"><div class="brief-line"></div><div class="brief-line"></div><div class="brief-line"></div></div>
            </article>
          </div>
          <div class="chaos-map">
            ${chaosCards}
            <div class="warning-strip">${warnings}</div>
          </div>
        </div>
      </section>

      <section class="scene scene-source">
        <div class="scene-inner source-grid">
          <figure class="image-board source-image">
            <img src="${asset(copy.sourceScene.image)}" alt="" data-layout-allow-overflow />
            <figcaption class="image-caption">${copy.sourceScene.imageCaption}</figcaption>
          </figure>
          <div class="source-content">
            <div class="scene-kicker">${copy.sourceScene.kicker}</div>
            <h2 class="scene-title">${copy.sourceScene.title}</h2>
            <p class="scene-copy">${copy.sourceScene.copy}</p>
            <div class="source-flow panel">
              <svg class="source-flow-svg" viewBox="0 0 520 208" aria-hidden="true">
                <path d="M92 58 C150 58 170 104 232 104" />
                <path d="M92 104 C148 104 174 104 232 104" />
                <path d="M92 150 C150 150 170 104 232 104" />
                <path d="M288 104 C346 104 372 104 430 104" />
              </svg>
              <div class="source-hub" aria-hidden="true"></div>
              <div class="idea-ladder">${ideas}</div>
              <div class="source-result">
                <b>${copy.adaptation.bridge[2][0]}</b>
                <span>${copy.adaptation.bridge[2][1]}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="scene scene-adaptation">
        <div class="scene-inner">
          <div class="scene-kicker">${copy.adaptation.kicker}</div>
          <h2 class="scene-title">${copy.adaptation.title}</h2>
          <p class="scene-copy">${copy.adaptation.copy}</p>
          <div class="bridge-grid">${bridge}</div>
          <div class="change-grid">${changes}</div>
        </div>
      </section>

      <section class="scene scene-steward">
        <div class="scene-inner steward-layout">
          <div>
            <div class="scene-kicker">${copy.steward.kicker}</div>
            <h2 class="scene-title">${copy.steward.title}</h2>
            <p class="scene-copy">${copy.steward.copy}</p>
            <div class="flow-canvas">
              <svg class="route-svg" viewBox="0 0 916 438" aria-hidden="true">
                <path d="M246 218 C300 218 330 213 374 213" />
                <path d="M487 165 C530 122 590 90 660 88" />
                <path d="M600 218 C660 218 700 215 748 215" />
                <path d="M487 281 C535 316 590 342 660 341" />
                <path d="M440 165 C420 130 420 112 432 102" />
                <path d="M440 281 C420 316 420 330 432 340" />
              </svg>
              <article class="flow-card input"><b>${flow[0][0]}</b><span>${flow[0][1]}</span></article>
              <article class="flow-card preflight"><b>${flow[1][0]}</b><span>${flow[1][1]}</span></article>
              <article class="flow-card steward"><b>${flow[2][0]}</b><span>${flow[2][1]}</span></article>
              <article class="flow-card review"><b>${flow[3][0]}</b><span>${flow[3][1]}</span></article>
              <article class="flow-card expert-a"><b>${flow[4][0]}</b><span>${flow[4][1]}</span></article>
              <article class="flow-card expert-b"><b>${flow[5][0]}</b><span>${flow[5][1]}</span></article>
              <article class="flow-card expert-c"><b>${flow[6][0]}</b><span>${flow[6][1]}</span></article>
            </div>
          </div>
          <aside class="side-stack">${side}</aside>
        </div>
      </section>

      <section class="scene scene-blueprint">
        <div class="scene-inner blueprint-grid">
          <div>
            <div class="scene-kicker">${copy.blueprint.kicker}</div>
            <h2 class="scene-title">${copy.blueprint.title}</h2>
            <p class="scene-copy">${copy.blueprint.copy}</p>
            <div class="anchor-grid">${anchors}</div>
          </div>
          <aside class="roster panel">
            <div class="roster-title">${copy.blueprint.rosterTitle}</div>
            <div class="role-list">${roles}</div>
          </aside>
        </div>
      </section>

      <section class="scene scene-delivery">
        <div class="scene-inner delivery-layout">
          <div class="scene-kicker">${copy.delivery.kicker}</div>
          <h2 class="scene-title">${copy.delivery.title}</h2>
          <p class="scene-copy">${copy.delivery.copy}</p>
          <div class="delivery-board">${lanes}</div>
          <div class="delivery-checks">${checks}</div>
        </div>
      </section>

      <section class="scene scene-final">
        <div class="scene-inner final-grid">
          <div>
            <div class="scene-kicker">${copy.final.kicker}</div>
            <h2 class="hero-title">${copy.final.title}</h2>
            <p class="hero-subtitle">${copy.final.copy}</p>
          </div>
          <aside>
            <article class="output-card panel">
              <h3 class="output-title">${copy.final.outputTitle}</h3>
              <div class="output-list">${outputs}</div>
              <div class="path-box">${copy.final.path}</div>
            </article>
            <article class="cta-card panel" style="margin-top:16px">
              <h3>${copy.final.ctaTitle}</h3>
              <p>${copy.final.ctaCopy}</p>
              <div class="cta-tags">${tags}</div>
            </article>
          </aside>
        </div>
      </section>
    </main>
  `;

  window.__timelines = window.__timelines || {};
  const tl = gsap.timeline({ paused: true });
  const scenes = [
    [".scene-problem", 4.2, 4.0],
    [".scene-source", 8.2, 4.4],
    [".scene-adaptation", 12.6, 4.2],
    [".scene-steward", 16.8, 4.7],
    [".scene-blueprint", 21.5, 4.5],
    [".scene-delivery", 26.0, 4.6],
    [".scene-final", 30.6, 4.4]
  ];

  tl.to(".progress-fill", { width: "100%", duration: DURATION, ease: "none" }, 0)
    .to(".texture", { x: -26, y: 18, duration: DURATION, ease: "none" }, 0);

  tl.set(".scene-hero", { autoAlpha: 1 }, 0)
    .from(".scene-hero .scene-kicker", { y: -10, duration: 0.42, ease: "power2.out" }, 0)
    .from(".scene-hero .hero-title", { y: 18, duration: 0.62, ease: "power3.out" }, 0.02)
    .from(".scene-hero .hero-subtitle", { y: 14, duration: 0.56, ease: "power3.out" }, 0.14)
    .to(".scene-hero", { autoAlpha: 0, duration: 0.44, ease: "power2.inOut" }, 3.76);

  function addScene(selector, start, dur) {
    const end = start + dur;
    tl.set(selector, { autoAlpha: 1 }, start)
      .fromTo(`${selector} .scene-kicker`, { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.42, ease: "power2.out" }, start + 0.08)
      .fromTo(`${selector} .scene-title, ${selector} .hero-title`, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.62, ease: "power3.out" }, start + 0.16)
      .fromTo(`${selector} .scene-copy, ${selector} .hero-subtitle`, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.56, ease: "power3.out" }, start + 0.34)
      .to(selector, { autoAlpha: 0, duration: 0.44, ease: "power2.inOut" }, end - 0.44);
  }

  scenes.forEach(([selector, start, dur]) => addScene(selector, start, dur));

  tl.fromTo(".hero-pill", { opacity: 0, y: 26 }, { opacity: 1, y: 0, stagger: 0.09, duration: 0.46, ease: "power2.out" }, 0.82)
    .from(".hero-image", { x: 42, scale: 0.97, duration: 0.72, ease: "power3.out" }, 0.08)
    .to(".hero-image img", { scale: 1.05, duration: 4.2, ease: "none" }, 0);

  tl.fromTo(".brief-card", { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 0.52, ease: "power2.out" }, 4.86)
    .fromTo(".chaos-card", { opacity: 0, y: 36, rotate: -2 }, { opacity: 1, y: 0, rotate: 0, stagger: 0.10, duration: 0.52, ease: "power2.out" }, 5.05)
    .fromTo(".warning", { opacity: 0, y: 18 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.36, ease: "power2.out" }, 6.55)
    .to(".chaos-card", { y: -8, stagger: 0.06, duration: 0.42, yoyo: true, repeat: 1, ease: "power2.inOut" }, 7.12);

  tl.fromTo(".source-image", { opacity: 0, x: -36, scale: 0.98 }, { opacity: 1, x: 0, scale: 1, duration: 0.66, ease: "power3.out" }, 8.58)
    .fromTo(".source-flow", { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.52, ease: "power2.out" }, 9.15)
    .fromTo(".idea-step, .source-result", { opacity: 0, x: 26 }, { opacity: 1, x: 0, stagger: 0.10, duration: 0.44, ease: "power2.out" }, 9.55);

  tl.fromTo(".bridge-card", { opacity: 0, y: 28 }, { opacity: 1, y: 0, stagger: 0.14, duration: 0.48, ease: "power2.out" }, 13.35)
    .fromTo(".bridge-arrow", { scaleX: 0, transformOrigin: "0% 50%" }, { scaleX: 1, stagger: 0.18, duration: 0.44, ease: "power2.out" }, 13.78)
    .fromTo(".change-card", { opacity: 0, y: 24 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.42, ease: "power2.out" }, 14.42);

  tl.fromTo(".flow-canvas", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.56, ease: "power2.out" }, 17.55)
    .fromTo(".flow-card", { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, stagger: 0.08, duration: 0.42, ease: "back.out(1.4)" }, 17.85)
    .fromTo(".route-svg path", { strokeDashoffset: 120 }, { strokeDashoffset: 0, stagger: 0.08, duration: 0.82, ease: "power2.out" }, 18.28)
    .fromTo(".side-item", { opacity: 0, x: 26 }, { opacity: 1, x: 0, stagger: 0.12, duration: 0.42, ease: "power2.out" }, 18.72)
    .to(".flow-card.steward", { scale: 1.04, duration: 0.34, yoyo: true, repeat: 1, ease: "power2.inOut" }, 19.92);

  tl.fromTo(".anchor-card", { opacity: 0, y: 24 }, { opacity: 1, y: 0, stagger: 0.055, duration: 0.34, ease: "power2.out" }, 22.25)
    .fromTo(".roster", { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.52, ease: "power2.out" }, 22.45)
    .fromTo(".role-row", { opacity: 0, x: 18 }, { opacity: 1, x: 0, stagger: 0.075, duration: 0.34, ease: "power2.out" }, 22.76);

  tl.fromTo(".lane", { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.12, duration: 0.48, ease: "power2.out" }, 26.82)
    .fromTo(".packet", { opacity: 0, y: 18 }, { opacity: 1, y: 0, stagger: 0.045, duration: 0.30, ease: "power2.out" }, 27.34)
    .fromTo(".check", { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.06, duration: 0.34, ease: "power2.out" }, 28.48);

  tl.fromTo(".output-card", { opacity: 0, x: 36 }, { opacity: 1, x: 0, duration: 0.56, ease: "power2.out" }, 31.24)
    .fromTo(".output-item", { opacity: 0, y: 16 }, { opacity: 1, y: 0, stagger: 0.045, duration: 0.28, ease: "power2.out" }, 31.62)
    .fromTo(".path-box", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.34, ease: "power2.out" }, 32.18)
    .fromTo(".cta-card", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.46, ease: "power2.out" }, 32.48)
    .fromTo(".cta-tag", { opacity: 0, y: 12 }, { opacity: 1, y: 0, stagger: 0.06, duration: 0.28, ease: "power2.out" }, 32.86)
    .to(".stage", { filter: "saturate(1.06)", duration: 0.45, ease: "power2.out" }, 34.15);

  tl.set(".scene-final", { autoAlpha: 1 }, DURATION - 0.08);

  window.__timelines.main = tl;

  if (!window.__hyperframes) {
    tl.repeat(-1).repeatDelay(0.5).play(0);
  }
})();
