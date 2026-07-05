---
name: agent-expert-panel
description: Design, audit, or optimize multi-agent expert-team workflows for skills, products, coding projects, content pipelines, research workflows, or agent systems. Use when the user asks for an Agent expert panel, 专家团, 多 Agent 协作, 主理人/orchestrator, expert roles, capability routing, preset workflows, handoff rules, workspace/artifact management, failure handling, or when an existing skill/project may need coordinated specialist agents. Do not use for merely running independent parallel tasks. Do not use for executing an already-written implementation plan unless the user asks to redesign its multi-agent collaboration model.
---

# Agent Expert Panel

## Core Model

Treat an expert panel as a productized multi-agent workflow, not a pile of personas.

- A single expert is a packaged agent: role anchor, domain method, workflow constraints, output template, tool boundaries, and success criteria.
- An expert panel is a packaged collaboration system: one steward coordinates specialist members through capability preflight, preset workflows, controlled handoffs, failure handling, and final integration.
- Default to a steward-executor pattern: the steward keeps the user goal and global judgment; members produce specialist outputs in isolated scopes.
- The reusable formula is: expert = general agent + domain method + deliverable template + workflow constraints.

## Portable Use

This skill is agent-agnostic. Any programming agent can use it by reading this `SKILL.md` and following its workflow and output contract.

If the host agent does not support automatic skill discovery, the user can invoke it by saying: "Read `skill/SKILL.md` from this repository and use it to optimize this skill/project for multi-agent expert-team collaboration."

## Fit Check

Before designing the panel, decide whether the task deserves one.

Use a panel when the work genuinely crosses domains, has separable specialist outputs, benefits from independent critique, or needs a repeatable workflow with clear handoffs.

Do not use a panel when one expert can do the job, when roles would only rename ordinary steps, when members would all need the same full context, or when agent overhead would be larger than the work.

Consider migrating from one agent to a panel when the current prompt has 3+ major branches, quality varies by task type, the work needs 3+ distinct professional phases, or the prompt is long because unrelated methods and deliverables are packed together.

If the fit is unclear, state the uncertainty and ask the smallest question needed to decide.

## Expert Blueprint

Define every specialist with these eight anchors. Keep each anchor short, concrete, and testable.

1. Role override and identity.
   State the active role, domain, personality, and memory anchors. Use this to stop the agent from drifting into a generic assistant mode.

2. Core mission.
   Give a one-sentence mission and the few outcomes this expert owns.

3. Rules and default behavior.
   List the expert's principles as do/don't rules. Include limits where it must refuse, escalate, or ask.

4. Workflow.
   Give numbered steps with task, required input, output, and success criteria. Force the expert to inspect real project/user materials when those are available.

5. Deliverable template and quality standard.
   Define the artifact format, fields or sections, and checklist. Prefer stable schemas over prose-only outputs when downstream agents will consume the result.

6. Tools and capability declaration.
   Name what the expert may use, what it can do, and what it cannot do. Do not let a member "try anyway" outside its capability.

7. Handoff and next-step guidance.
   Require a short summary, next recommended owner, blockers, and decisions needed.

8. Runtime context.
   Tell the expert its team, steward, upstream inputs, downstream consumers, and domain boundary.

## Design Workflow

1. Capture the outcome.
   Name the final deliverable, target user, success criteria, hard constraints, inputs, and what must not be done.

2. Define the steward.
   The steward owns requirement parsing, task decomposition, capability matching, schedule, handoffs, conflict resolution, decision trace, final synthesis, and user communication. The steward should not impersonate member outputs when a member is assigned to produce them.

3. Define each member as an expert.
   For every member, specify:
   - `agent_id`: stable system-facing identifier
   - user-facing name
   - mission and scope
   - required inputs
   - output contract
   - tools or skills it may use
   - explicit limitations and refusal conditions
   - quality checks for its output

4. Add capability preflight.
   Before dispatch, the steward must parse intent, compare it with the capability matrix, and choose one of three actions:
   - match: dispatch to the right member
   - mismatch: explain the limitation and offer a safer alternative
   - ambiguous: ask for clarification before dispatch

5. Preset the workflow.
   Convert common collaboration patterns into named workflows. For each workflow, define trigger conditions, phases, responsible member, decision points, handoff inputs, and final artifact shape. Do not leave the agent to invent the process from scratch when the pattern is known.

   Common patterns:
   - Sequential pipeline: A -> B -> C, such as analysis -> design -> implementation
   - Parallel and merge: A and B run independently, then C integrates
   - Review loop: A produces, B reviews, A fixes, B rechecks
   - Iterative refinement: A produces, B shapes, user feedback returns to A/B
   - Specialist escalation: steward stops normal flow and routes to a narrow expert when preflight detects a special risk

6. Control handoffs.
   Route cross-member information through the steward unless there is a specific reason to allow direct member-to-member exchange. Each handoff should include task, context, constraints, expected output, evidence requirements, deadline or stopping condition, and where artifacts should be placed.

7. Manage workspace and artifacts.
   When work creates files, define one team workspace and artifact map. The steward is responsible for collecting final files, checking that nothing important is scattered elsewhere, and cleaning temporary space only when cleanup is safe and expected.

8. Add failure handling.
   Define what happens when a member cannot complete, exceeds a time/retry limit, returns low-confidence output, conflicts with another member, or discovers the task is outside team capability. Prefer a short escalation rule over silent retries.

9. Validate before delivery.
   The steward checks role coverage, capability fit, artifact completeness, output quality, contradictions, assumptions, unresolved risks, decision trace, and whether the final answer satisfies the original user outcome.

## Steward Blueprint

Use this structure when writing the coordinator or main-agent prompt.

```markdown
# [Team Name] Steward

You coordinate a [N]-member expert team. You do not perform specialist tasks yourself when a member is assigned to own that domain.

Responsibilities:
1. Parse user requests.
2. Check team capability before dispatch.
3. Decompose work into expert tasks.
4. Route tasks with clear inputs, outputs, and success criteria.
5. Collect member outputs through the steward.
6. Resolve conflicts by asking the accountable member to reconsider with new context.
7. Package and validate the final delivery.
8. Record important routing decisions and assumptions.

Team roster:
- [agent_id]: [name] - [domain] - use when [trigger]

Phase 1: Intake
- Identify intent: generate, edit, analyze, review, implement, test, translate, package, or other.
- Check the capability table.
- If out of scope, explain the limitation and offer a safer alternative.
- If ambiguous, ask before dispatch.

Phase 2: Decomposition
- Break the request into expert-owned tasks.
- Choose serial, parallel, review-loop, or escalation flow.
- Prepare task briefs with input, constraints, output contract, and quality gate.

Phase 3: Execution
- Dispatch only to capable members.
- Keep cross-member messages flowing through the steward.
- Report timeout or repeated failure instead of silently retrying.

Phase 4: Integration
- Collect outputs.
- Check completeness, contradictions, artifacts, and unresolved risks.
- Return a user-facing summary and final files or instructions.
```

## Capability Matrix

Create a routing table before dispatch:

| User intent | In scope? | Route to | Required input | Output | Notes |
|---|---|---|---|---|---|
| [intent] | yes/no/clarify | [agent_id] | [input] | [artifact] | [limit or workflow] |

Preflight rule:

1. Parse the user intent.
2. Compare it with the matrix.
3. If matched, dispatch.
4. If unmatched, explain the limitation and offer alternatives.
5. If ambiguous, ask the user before dispatch.

## Handoff Contract

Every member task should include:

- owner `agent_id`
- task and why this member owns it
- inputs and source paths or prior outputs
- constraints and exclusions
- expected output format
- quality checklist
- handoff recipient or next phase
- failure/timeout rule

Member outputs should include:

- delivered artifact
- checks performed
- assumptions
- blockers or risks
- recommended next owner

## Failure Handling

Use explicit stop rules instead of vague persistence.

- Timeout or long-running work: tell the user what is waiting and what will happen next.
- Repeated failure: stop that task line, explain the reason, and offer alternatives.
- Ambiguous output: ask the accountable member to clarify the exact point.
- Conflict between members: send the conflict and evidence back through the steward; do not vote unless the workflow explicitly calls for it.
- Out of scope request: do not dispatch. Explain the missing capability.

## Output Contract

When designing or optimizing a panel, return:

1. Assumptions and whether a panel is warranted
2. Steward role definition
3. Member table with `agent_id`, mission, inputs, outputs, tools/skills, and limits
4. Expert blueprint notes for each member using the eight anchors
5. Capability preflight table
6. Preset workflow phases and selected workflow pattern
7. Handoff, workspace, and artifact rules
8. Failure handling and escalation rules
9. Decision trace requirements
10. Final validation checklist
11. Minimal next steps to install or apply the design

When auditing an existing skill or project for multi-agent readiness, lead with the highest-risk gaps, then give the smallest concrete fixes. Do not rewrite the whole system unless the user asked for a redesign.

## Quality Bar

The panel is ready only when another agent can answer these questions without guessing:

- Who owns the user's final outcome?
- Which member is allowed to do each kind of work?
- What inputs and outputs move between roles?
- What happens when no member is a good fit?
- Where do files and intermediate artifacts live?
- Which checks prove the final delivery is complete?
- Which routing decisions and assumptions must be traceable later?

## Design Principles

- Foundation first: define reusable structure before detailed execution.
- Single responsibility: each expert owns one domain and does not cross boundaries.
- Explicit handoff: downstream members can continue without guessing.
- Quality by design: build preflight and checklists into the workflow.
- Fail fast: surface capability gaps, ambiguity, and repeated failures early.
- User-centered delivery: return a readable summary, not only machine artifacts.
- Traceable decisions: the steward records important routing choices, assumptions, conflicts, and escalations.

## Boundaries

- Keep the simplest correct shape. A two-role steward plus one specialist is valid when that is all the work needs.
- Do not add vague "reviewer", "strategist", or "critic" roles without a distinct output contract.
- Do not use debate or voting when one accountable specialist decision is enough.
- Do not dispatch real subagents during design unless the user asked for execution or validation.
- Do not claim source-backed research, benchmarks, or tool capability unless verified in the current task.
