# 多智能体专家团 Skill

<p align="center">
  <a href="https://mianbaofang.github.io/agent-expert-panel/docs/site/project-intro-animation.zh-CN.html">
    <img src="docs/assets/intro-animation-preview-zh.gif" alt="多智能体专家团 Skill 中文介绍动画预览" width="100%">
  </a>
</p>

<p align="center">
  <a href="README.md">English</a>
  ·
  <a href="skill/">Skill</a>
  ·
  <a href="docs/site/project-intro-animation.zh-CN.html">中文介绍动画</a>
  ·
  <a href="docs/site/project-intro-animation.en.html">English Intro</a>
  ·
  <a href="docs/history/methodology-source.md">方法来源</a>
  ·
  <a href="ACKNOWLEDGEMENTS.md">致谢</a>
  ·
  <a href="DISCLAIMER.md">免责声明</a>
  ·
  <a href="tests/TEST-CASES.md">测试用例</a>
  ·
  <a href="SECURITY_AUDIT.md">安全审计</a>
  ·
  <a href="CHANGELOG.md">更新日志</a>
</p>

## 为什么做这个 Skill

很多多 Agent 工作流失败，不是因为 Agent 不够多，而是因为协作系统没有被设计好。

如果没有主理人、能力预检、交接契约、冲突处理和最终决策记录，所谓“多 Agent 协作”很容易变成一堆自信但互相割裂的局部答案。这个 Skill 把“专家团”整理成一套任何支持 Skill 的编程 Agent 都能读懂和复用的方法。

当你的项目、Skill、研究流程、内容生产线或产品流程已经宽到一个 prompt 不好稳定控制时，就可以用它判断是否需要专家团，以及该怎么拆主理人、专家成员、工作区、交付物和验收规则。

它本身不负责启动子 Agent。它负责教宿主 Agent 如何判断是否值得启用专家团、如何定义主理人、如何设计专家成员、如何路由任务、如何收集产物、如何处理失败，以及如何交付一份可审计的最终方案。

## 一眼看懂

| 问题 | 回答 |
|---|---|
| 适合谁 | 正在设计宽任务 Skill、Agent、研究流程、产品流程或内容生产线的人。 |
| 会输出什么 | 主理人角色、专家成员设计、路由规则、交接契约和验收门。 |
| 不做什么 | 不自己启动子 Agent，也不声称拥有 WorkBuddy 私有提示词。 |
| 最适合的第一次使用 | 让支持 Skill 的 Agent 读取 `skill/SKILL.md`，然后改造一个现有工作流。 |

## 方法来源与致谢

这个 Skill 的起点来自叶小钗在人人都是产品经理发布的文章：[《WorkBuddy专家团提示词全曝光：多Agent协作原来是这样产品化的》](https://www.woshipm.com/ai/6424770.html)。

那篇文章拆解了一个很有价值的产品化模式：先把单个专家包装成可复用 Agent，再把专家团包装成有主理人、能力预检、预设 workflow、消息中转、异常处理和交付检查的多 Agent 协作流程。

这个开源仓库没有复制 WorkBuddy 的私有提示词或产品资产，而是把公开文章里的通用方法抽象出来，改造成开放、可迁移、可被其他编程 Agent 使用的 Skill 契约。

特别感谢：

- 叶小钗和人人都是产品经理提供的公开分析文章。
- WorkBuddy 展示出的专家团产品化思路。
- Fable 生成的独立方法论总结，用来交叉检查和补全这个 Skill。
- HyperFrames 和 Huashu-Design，本仓库的中英文动画演示基于它们的工作流制作。
- GPT Image 2 和 MiniMax CLI，本仓库演示中的生成视觉和背景音乐基于它们制作。

## 针对开源使用做了哪些修改

| 方向 | 本 Skill 的改造 |
|---|---|
| 跨 Agent 使用 | 去掉运行环境绑定，让任意支持 Skill 的 Agent 读取 `skill/SKILL.md` 后都能使用。 |
| 触发边界 | 增加“是否值得做专家团”的判断，避免普通并行任务被过度设计。 |
| 单专家设计 | 增加 8 个锚点：身份、使命、规则、流程、交付物、工具、交接、运行上下文。 |
| 主理人设计 | 增加接收需求、拆解任务、执行路由、整合交付等阶段。 |
| 能力预检 | 增加 capability matrix，派发前先判断匹配、越界、需澄清或需升级。 |
| 交接契约 | 增加成员任务包格式：输入、输出、约束、质量检查、下一负责人。 |
| 异常处理 | 增加超时、重复失败、输出含糊、专家冲突、能力越界的处理规则。 |
| 可追溯 | 要求主理人记录关键路由决策、假设、冲突和升级原因。 |
| 开源包装 | 增加中英文 README、许可证、贡献说明、安全审计、测试用例、生成图片和双语动画。 |

## 快速使用

普通用户不需要安装代码。把下面 Skill 路径发给支持 Skill 的 Agent：

```text
https://github.com/mianbaofang/agent-expert-panel/tree/main/skill
```

然后说：

```text
请安装这个 Skill，然后帮我把当前项目工作流改造成多 Agent 专家团协作模式。
```

如果你的 Agent 不支持自动安装 Skill，可以让它直接读文件：

```text
请读取 skill/SKILL.md，并用它帮我优化这个项目的多 Agent 专家团协作设计。
```

## 运行模式

| 模式 | 适合场景 | 输出范围 |
|---|---|---|
| 专家团设计 | 从零设计一个宽任务工作流 | 主理人、专家成员、路由、交接、工作区、异常规则 |
| Skill 审计 | 已经有一个 Skill 或项目 prompt | 是否值得做专家团、缺少哪些角色、风险点、最小修改 |
| 工作流改造 | 项目已经宽到一个 Agent 不好稳定处理 | 从单 Agent 流程迁移到专家团的落地方案 |
| 审核闭环 | 输出质量不稳定 | 审核专家、验收门、冲突解决、决策追踪 |

## 能力矩阵

| 能力 | 是否内置 | 说明 |
|---|---:|---|
| 专家团适配判断 | 是 | 防止一个专家就能解决的事被过度拆分。 |
| 单专家蓝图 | 是 | 8 个锚点，用于定义可复用专家。 |
| 主理人蓝图 | 是 | 接收、拆解、路由、整合、交付。 |
| 能力预检 | 是 | 派发前先判断匹配、越界、需澄清或需升级。 |
| Workflow 模式菜单 | 是 | 串行、并行合并、审核循环、迭代优化、专家升级。 |
| 交接契约 | 是 | 每个专家任务都有稳定输入输出格式。 |
| 工作区和产物规则 | 是 | 防止中间文件散落和最终交付不完整。 |
| 异常处理 | 是 | 超时、失败、含糊、冲突、越界都有处理规则。 |
| 真实子 Agent 执行 | 否 | 由宿主 Agent 决定如何启动或模拟子 Agent。 |
| WorkBuddy 私有提示词 | 否 | 只抽象公开文章中的通用方法。 |

## 输出契约

用于设计或优化专家团时，宿主 Agent 应输出：

1. 假设，以及是否真的需要专家团。
2. 主理人角色定义。
3. 成员表：`agent_id`、使命、输入、输出、工具或 Skill、边界。
4. 每个成员的 8 个专家锚点。
5. 能力预检表。
6. 预设 workflow 阶段和所选协作模式。
7. 交接、工作区和产物规则。
8. 异常处理和升级规则。
9. 决策可追溯要求。
10. 最终验收清单。
11. 安装或落地的最小下一步。

## 动画演示

这个仓库的动画排版对齐了 `ai-ecommerce-workflow` 和 `decision-brief` 的做法：README 顶部直接放可点击 GIF 预览，并提供独立的 GitHub Pages HTML 页面。最终 MP4 使用 MiniMax CLI 生成的无歌词背景音乐，并混在 HyperFrames 动画下方。

文件位置：

```text
docs/site/project-intro-animation.zh-CN.html
docs/site/project-intro-animation.en.html
docs/assets/intro-animation-preview-zh.gif
docs/assets/intro-animation-preview.gif
docs/assets/audio/agent-expert-panel-bgm.mp3
docs/assets/generated/steward-routing-scene.png
docs/assets/generated/handoff-delivery-scene.png
docs/demo/agent-expert-panel-motion/
docs/demo/agent-expert-panel-motion/renders/agent-expert-panel.zh-CN.mp4
docs/demo/agent-expert-panel-motion/renders/agent-expert-panel.en.mp4
```

重新渲染：

```bash
cd docs/demo/agent-expert-panel-motion
npm run check
npm run render        # 先渲染无声动画，再混入 BGM
npm run render:gifs
```

## 仓库结构

```text
skill/
  SKILL.md                 Agent 使用的核心工作流
  agents/interface.yaml    通用 Skill 元数据
  agents/openai.yaml       OpenAI/Codex UI 元数据

docs/
  assets/                  README GIF/PNG 预览和生成视觉
  site/                    可直接打开的双语 HTML 动画
  demo/                    HyperFrames 源工程和渲染结果
  history/                 方法来源说明

tests/
  TEST-CASES.md            触发和输出形态检查

README.md                  英文说明
README.zh-CN.md            中文说明
CONTRIBUTING.md            贡献说明
SECURITY_AUDIT.md          安全审计
CHANGELOG.md               更新日志
LICENSE                    MIT 许可
```

## 边界

这个 Skill 不做这些事：

- 不自己启动子 Agent；
- 不把所有复杂任务都强行改造成专家团；
- 不编造宿主运行环境没有的工具能力；
- 不包含 WorkBuddy 私有提示词或产品资产；
- 不声称未经验证的研究、基准测试或交付证据；
- 不替代具体项目里的工程判断。

## 开发者说明

发布或提交 PR 前建议运行：

```bash
rg -n "API_KEY|SECRET|TOKEN|Bearer|sk-" .
python scripts/quick_validate.py skill  # 可选：如果你本地有自己的 Skill 校验脚本
cd docs/demo/agent-expert-panel-motion && npm run check
```

如果修改了 Skill 行为，请同步更新：

- `skill/SKILL.md`
- `README.md`
- `README.zh-CN.md`
- `tests/TEST-CASES.md`
- `CHANGELOG.md`

## 状态

当前公开包已经包含可迁移的 Skill 契约、中英文 README、测试提示、贡献规则、安全审计、生成视觉和双语 HyperFrames 动画源码。它可以作为方法论指导，直接交给支持 Skill 的 Agent 运行。

## 开源协议

MIT。仓库中的 Skill、文档、动画源码、生成图片、GIF 预览、背景音乐和最终 MP4 演示文件，均作为本开源项目的一部分按 MIT 协议发布。

本仓库不包含 WorkBuddy 私有提示词、私有产品资产或非公开实现细节。README 中提到 WorkBuddy 和叶小钗文章，只用于来源致谢和方法论背景说明。

完整的非关联声明、引用来源和使用边界见 [DISCLAIMER.md](DISCLAIMER.md) 与 [ACKNOWLEDGEMENTS.md](ACKNOWLEDGEMENTS.md)。
