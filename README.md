# Agent Expert Panel Skill

<p align="center">
  <a href="https://mianbaofang.github.io/agent-expert-panel/docs/site/project-intro-animation.en.html">
    <img src="docs/assets/intro-animation-preview.gif" alt="35-second Agent Expert Panel English intro animation preview" width="100%">
  </a>
</p>

<p align="center">
  <a href="README.zh-CN.md">中文 README</a>
  ·
  <a href="skill/">Skill</a>
  ·
  <a href="docs/site/project-intro-animation.en.html">English intro</a>
  ·
  <a href="docs/site/project-intro-animation.zh-CN.html">Chinese intro</a>
  ·
  <a href="docs/history/methodology-source.md">Methodology source</a>
  ·
  <a href="ACKNOWLEDGEMENTS.md">Acknowledgements</a>
  ·
  <a href="DISCLAIMER.md">Disclaimer</a>
  ·
  <a href="tests/TEST-CASES.md">Test cases</a>
  ·
  <a href="SECURITY_AUDIT.md">Security audit</a>
  ·
  <a href="CHANGELOG.md">Changelog</a>
</p>

Agent Expert Panel is a reusable Skill for turning broad agent work into a coordinated expert team: one steward, clear specialist roles, handoff contracts, conflict handling, and a final decision trace.

> Read [Disclaimer](DISCLAIMER.md) before use. This project adapts public methodology into an open Skill and is not affiliated with or endorsed by WorkBuddy or any referenced third-party platform.

## At A Glance

| Question | Answer |
|---|---|
| Who is it for? | People building broad Skill, agent, research, product, or content workflows. |
| What does it output? | A steward role, expert-member design, routing rules, handoff contracts, and validation gates. |
| What does it not do? | It does not launch subagents by itself or claim private WorkBuddy prompt access. |
| Best first use | Ask a Skill-compatible agent to read `skill/SKILL.md` and redesign one existing workflow. |

## Why This Skill Exists

Multi-agent work usually fails for a boring reason: the agents are named, but the collaboration system is not designed.

If there is no steward, no capability preflight, no handoff contract, no conflict rule, and no final decision trace, "use several agents" quickly becomes a pile of confident partial answers. This Skill turns that loose idea into a portable workflow design method for any Skill-compatible coding agent.

Use it when a project, Skill, research workflow, content pipeline, or product process has become too broad for one prompt and needs a repeatable expert-team structure.

This Skill does not spawn subagents by itself. It teaches the host agent how to decide whether a panel is warranted, define a steward, design specialist members, route work, collect artifacts, handle failure, and deliver an auditable final package.

## Methodology Source And Acknowledgements

The starting point is Ye Xiaochai's public article on 人人都是产品经理: [WorkBuddy专家团提示词全曝光：多Agent协作原来是这样产品化的](https://www.woshipm.com/ai/6424770.html).

That article explains a useful product pattern: package a single expert as a reusable agent, then package an expert team as a coordinated multi-agent workflow with a steward, capability checks, preset workflows, mediated communication, exception handling, and delivery validation.

This repository does not copy WorkBuddy private prompts or product assets. It extracts the general design method and adapts it into an open, portable Skill contract.

Thanks to:

- Ye Xiaochai and 人人都是产品经理 for the public source article and analysis.
- WorkBuddy for making the expert-team productization pattern visible.
- Fable for the independent methodology summary used to cross-check and extend this Skill.
- HyperFrames and Huashu-Design for the bilingual motion-demo workflow used in this repository.
- GPT Image 2 and MiniMax CLI for the generated visual and music assets used in the demo.

## What We Changed For Open Source Use

| Area | Adaptation in this Skill |
|---|---|
| Portability | Removed runtime lock-in so any Skill-compatible agent can read `skill/SKILL.md`. |
| Trigger boundary | Added a panel-fit check so normal parallel work is not over-designed. |
| Expert design | Expanded each specialist into eight anchors: identity, mission, rules, workflow, deliverable, tools, handoff, and runtime context. |
| Steward design | Added coordinator phases for intake, decomposition, execution routing, integration, and final delivery. |
| Capability preflight | Added a capability matrix before dispatch: match, mismatch, clarify, or escalate. |
| Handoff | Added stable member-task packets with inputs, outputs, constraints, checks, and next owner. |
| Failure handling | Added rules for timeout, repeated failure, ambiguity, conflict, and out-of-scope work. |
| Traceability | Added decision-trace requirements so routing choices and assumptions can be reviewed later. |
| GitHub packaging | Added bilingual README files, license, contribution rules, security audit, test prompts, generated visuals, and a bilingual HyperFrames demo. |

## Quick Start

Most users do not need to install code. Give this Skill path to a Skill-compatible agent:

```text
https://github.com/mianbaofang/agent-expert-panel/tree/main/skill
```

Then ask:

```text
Install this Skill, then redesign my current project workflow as a multi-agent expert panel.
```

If your agent cannot auto-install Skills, ask it to read the file directly:

```text
Read skill/SKILL.md and use it to optimize this project for multi-agent expert-team collaboration.
```

## Run Modes

| Mode | Use when | Output scope |
|---|---|---|
| Panel design | You are starting a broad workflow from scratch | Steward, expert members, routing, handoff, workspace, failure rules |
| Skill audit | You already have a Skill or project prompt | Whether a panel is warranted, missing roles, risk points, minimal changes |
| Workflow retrofit | A project has grown too wide for one agent | Migration plan from single-agent workflow to expert panel |
| Review loop | Output quality is unstable | Reviewer role, acceptance gates, conflict resolution, decision trace |

## Capability Matrix

| Capability | Built in? | Notes |
|---|---:|---|
| Panel fit check | Yes | Prevents over-building when one expert is enough. |
| Single-expert blueprint | Yes | Eight anchors for reusable specialist agents. |
| Steward blueprint | Yes | Intake, decomposition, routing, integration, delivery. |
| Capability preflight | Yes | Match / mismatch / clarify before dispatch. |
| Workflow pattern menu | Yes | Sequential, parallel+merge, review loop, iterative refinement, escalation. |
| Handoff contract | Yes | Stable task packet for each expert member. |
| Workspace and artifact rules | Yes | Keeps intermediate outputs collected and reviewable. |
| Failure handling | Yes | Timeout, repeated failure, ambiguity, conflict, out-of-scope. |
| Runtime-specific subagent execution | No | The host agent decides how to spawn or simulate agents. |
| Private WorkBuddy prompt access | No | This repo abstracts public methodology only. |

## Output Contract

For a design or optimization request, the host agent should return:

1. Assumptions and whether a panel is warranted.
2. Steward role definition.
3. Member table with `agent_id`, mission, inputs, outputs, tools/skills, and limits.
4. Expert blueprint notes for each member using the eight anchors.
5. Capability preflight table.
6. Preset workflow phases and selected workflow pattern.
7. Handoff, workspace, and artifact rules.
8. Failure handling and escalation rules.
9. Decision trace requirements.
10. Final validation checklist.
11. Minimal next steps to install or apply the design.

## Animation Demo

The bilingual intro follows the same repository style used in `ai-ecommerce-workflow` and `decision-brief`: a clickable GIF preview at the top of each README, plus standalone GitHub Pages HTML pages. The final MP4 renders use a MiniMax CLI generated instrumental BGM mixed under the HyperFrames animation.

Files:

```text
docs/site/project-intro-animation.en.html
docs/site/project-intro-animation.zh-CN.html
docs/assets/intro-animation-preview.gif
docs/assets/intro-animation-preview-zh.gif
docs/assets/audio/agent-expert-panel-bgm.mp3
docs/assets/generated/skill-infographic.png
docs/demo/agent-expert-panel-motion/
docs/demo/agent-expert-panel-motion/renders/agent-expert-panel.en.mp4
docs/demo/agent-expert-panel-motion/renders/agent-expert-panel.zh-CN.mp4
```

Re-render:

```bash
cd docs/demo/agent-expert-panel-motion
npm run check
npm run render        # silent HyperFrames render + BGM mix
npm run render:gifs
```

## Repository Layout

```text
skill/
  SKILL.md                 portable agent-facing workflow
  agents/interface.yaml    generic Skill metadata
  agents/openai.yaml       OpenAI/Codex UI metadata

docs/
  assets/                  README GIF/PNG previews and generated visuals
  site/                    standalone bilingual HTML intro pages
  demo/                    HyperFrames source and renders
  history/                 methodology source notes

tests/
  TEST-CASES.md            trigger and output-shape checks

README.md                  English README
README.zh-CN.md            Chinese README
CONTRIBUTING.md            contribution rules
SECURITY_AUDIT.md          open-source safety notes
CHANGELOG.md               release notes
LICENSE                    MIT license
```

## Boundaries

This Skill does not:

- execute subagents by itself;
- force every complex task into a multi-agent panel;
- invent tool capabilities the host runtime does not have;
- include WorkBuddy proprietary prompts or private assets;
- claim research, benchmarks, or delivery evidence that has not been verified;
- replace project-specific engineering judgment.

## Development Notes

Before publishing or opening a pull request, run:

```bash
rg -n "API_KEY|SECRET|TOKEN|Bearer|sk-" .
python scripts/quick_validate.py skill  # optional, if you copy in your local validator
cd docs/demo/agent-expert-panel-motion && npm run check
```

If you change Skill behavior, update:

- `skill/SKILL.md`
- `README.md`
- `README.zh-CN.md`
- `tests/TEST-CASES.md`
- `CHANGELOG.md`

## Status

The public package includes the portable Skill contract, bilingual README files, test prompts, contribution rules, security audit, generated visuals, and bilingual HyperFrames demo source. It is ready to use as methodology guidance in any Skill-compatible agent runtime.

## License

MIT. The Skill, documentation, demo source, generated images, GIF previews, music, and rendered MP4 files in this repository are published as part of the open-source project under the MIT license.

The repository does not include WorkBuddy private prompts, private product assets, or non-public implementation details. References to WorkBuddy and Ye Xiaochai's article are source attribution and methodology context only.

See [DISCLAIMER.md](DISCLAIMER.md) and [ACKNOWLEDGEMENTS.md](ACKNOWLEDGEMENTS.md) for the full non-affiliation, attribution, and usage boundary notes.
