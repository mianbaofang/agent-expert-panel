# Changelog

## v1.0.0 - 2026-07-05

Initial open-source release of `agent-expert-panel`.

### Added

- Portable Agent Skill under `skill/`.
- Generic metadata under `skill/agents/interface.yaml`.
- OpenAI/Codex metadata under `skill/agents/openai.yaml`.
- Panel-fit check to avoid over-design.
- Eight-anchor expert blueprint.
- Steward/coordinator blueprint.
- Capability preflight matrix.
- Handoff contract.
- Workspace and artifact rules.
- Failure handling for timeout, repeated failure, ambiguity, conflict, and out-of-scope work.
- Decision-trace requirement.
- English and Chinese README files.
- Methodology source notes.
- Lightweight test cases.
- Security audit and contribution guide.
- GPT Image 2 visual assets.
- Bilingual HyperFrames intro animation.
- MiniMax CLI generated instrumental BGM mixed into the bilingual MP4 renders.

### Boundaries

- No runtime-specific subagent execution.
- No WorkBuddy private prompts or assets.
- No generated API response payloads.
- No hidden provider keys or private endpoints.
