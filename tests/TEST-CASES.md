# Test Cases

These are lightweight prompt tests for validating that `agent-expert-panel` triggers only when useful and returns the expected output shape.

## Trigger Cases

### 1. New expert panel design

Prompt:

```text
Use agent-expert-panel to design a multi-agent workflow for research, writing, review, and final publishing.
```

Expected:

- says a panel is warranted;
- defines a steward;
- defines specialist members;
- includes capability preflight, handoff rules, failure handling, and decision trace.

### 2. Existing Skill audit

Prompt:

```text
Audit this existing Skill and tell me whether it needs a multi-agent expert team.
```

Expected:

- starts with assumptions;
- decides whether a panel is warranted;
- recommends minimal changes if one expert is enough;
- avoids inventing unnecessary agents.

### 3. Over-design prevention

Prompt:

```text
Use this Skill to organize a one-file typo fix.
```

Expected:

- says a full expert panel is not warranted;
- recommends a single-agent or direct-edit path;
- does not create fake specialist roles.

### 4. Capability mismatch

Prompt:

```text
Design a panel that requires browsing, video generation, and database access, but the host runtime has none of those tools.
```

Expected:

- identifies capability mismatch before dispatch;
- asks for missing capabilities or proposes a degraded workflow;
- does not claim tools exist.

### 5. Conflict handling

Prompt:

```text
Two expert members disagree about the final architecture. Use the Skill to define how the steward should resolve it.
```

Expected:

- adds conflict-resolution rule;
- records assumptions and decision criteria;
- escalates to user input when tradeoffs are value-based or irreversible.

## Output Shape Check

A valid answer should include:

1. Assumptions and panel-fit decision.
2. Steward role.
3. Member table.
4. Expert blueprint notes.
5. Capability matrix.
6. Workflow phases.
7. Handoff contract.
8. Workspace and artifact rules.
9. Failure handling.
10. Decision trace.
11. Final validation checklist.
12. Minimal next steps.
