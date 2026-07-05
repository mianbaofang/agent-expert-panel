# Contributing

Thanks for improving `agent-expert-panel`.

This repository is an Agent Skill, not a multi-agent runtime. Contributions should keep the Skill portable, reviewable, and simple enough for other coding agents to use.

## Good Contributions

- Clearer expert-panel fit checks.
- Better steward, expert, handoff, and failure-handling templates.
- More realistic test prompts.
- Better bilingual documentation.
- Safer guidance for capability preflight and tool boundaries.
- Improvements to the HyperFrames demo that keep the same repository style.

## Boundaries

Do not add:

- hard-coded private API keys, bearer tokens, or private provider endpoints;
- WorkBuddy private prompts or product assets;
- claims that this repository reproduces WorkBuddy internals;
- automatic subagent execution logic tied to one runtime;
- speculative roles, settings, or abstractions that are not used by the Skill;
- generated API response payloads.

## Before Opening A Pull Request

Run these checks from the repository root:

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

## Style

- Keep `skill/SKILL.md` actionable.
- Move long background notes into `docs/history/`.
- Keep examples portable across host agents.
- Prefer explicit boundaries over invented flexibility.
- Keep generated visual assets public-safe and free of secrets.
