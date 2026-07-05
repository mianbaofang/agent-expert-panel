# Methodology Source

This document records the public source, the extracted methodology, and the changes made for the open-source `agent-expert-panel` Skill.

## Public Source

- Article: [WorkBuddy专家团提示词全曝光：多Agent协作原来是这样产品化的](https://www.woshipm.com/ai/6424770.html)
- Author: Ye Xiaochai / 叶小钗
- Site: 人人都是产品经理
- Published: 2026-07-04

## Core Ideas Extracted

The article describes a product pattern for multi-agent collaboration:

1. A single expert is a packaged agent with a clear identity, domain method, workflow, deliverable style, and guardrails.
2. An expert team is not just several agents. It is a workflow with one steward/coordinator and multiple specialist members.
3. The steward performs intake, capability preflight, routing, communication mediation, synthesis, exception handling, and final delivery checks.
4. Preset workflows reduce ambiguity: sequential work, parallel work, review loops, escalation, and synthesis all need explicit rules.
5. The final result should be a productized collaboration interface, not a loose collection of personas.

## Open-Source Adaptation

This repository turns the public methodology into a portable Skill by adding:

| Need | Adaptation |
|---|---|
| Use across coding agents | Runtime-neutral language and `skill/agents/interface.yaml`. |
| Avoid over-design | Panel-fit check and migration signals. |
| Reusable specialist design | Eight-anchor expert blueprint. |
| Repeatable coordination | Steward blueprint and capability preflight table. |
| Clear work packets | Handoff contract for each member task. |
| Reviewability | Decision-trace requirements and validation checklist. |
| Failure resilience | Timeout, repeated-failure, conflict, ambiguity, and out-of-scope rules. |
| Open-source packaging | Bilingual README, tests, security audit, generated visuals, and HyperFrames demo. |

## What Is Not Included

This repository does not include:

- WorkBuddy private prompts;
- WorkBuddy product assets;
- private implementation details;
- claims that the open-source Skill reproduces WorkBuddy internals;
- generated API response payloads or private provider keys.

## Cross-Check

The local Fable summary in `E:/Object/igcse-a-level-revision-guide/docs/multi-agent-methodology.md` was used to cross-check the first draft of the Skill. The main gaps it surfaced were:

- the eight-anchor single-expert blueprint;
- explicit steward phases;
- reusable workflow patterns;
- migration signals from single-agent work to expert-panel work;
- decision trace and handoff rules.

Those gaps were added to `skill/SKILL.md`.
