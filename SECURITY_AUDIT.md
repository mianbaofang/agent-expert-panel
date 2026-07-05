# Security Audit

This file records the security review for the open-source `agent-expert-panel` repository.

## Audit Target

- Repository: `mianbaofang/agent-expert-panel`
- Scope: files intended for the public repository
- Goal: confirm no private API keys, raw provider responses, local caches, or private prompt assets are included

## Scan Results

### 1. API keys and tokens

Searched for common private-key patterns:

| Pattern | What it protects |
|---|---|
| `sk-[A-Za-z0-9]{20,}` | OpenAI / Google / generic private model keys |
| `ghp_[A-Za-z0-9]+` | GitHub personal access tokens |
| `Bearer [A-Za-z0-9]+` | Generic bearer tokens |
| `APIMART_API_KEY=<value>` | APIMart image key |
| `YAIROUTER_API_KEY=<value>` | Codex-only image router key |
| `CCAPI_IMAGE_API_KEY=<value>` | CCAPI Direct image key |
| `OPENAI_API_KEY=<value>` | OpenAI key |

Result: no private key values should be tracked.

### 2. Image-generation responses

The repository keeps final public images and prompt files, but must not keep raw provider response payloads.

Blocked or removed:

- `*.response.json`
- `docs/assets/generated/responses/`
- embedded `b64_json` payloads
- temporary provider URLs saved as response logs

### 3. Local tool caches

`.gitignore` covers:

- `node_modules/`
- `.env`, `.env.*`
- HyperFrames local caches and snapshots
- local frame workspaces
- raw API response JSON files

### 4. Public generated assets

The following files are intentional public assets:

| File | Reason |
|---|---|
| `docs/assets/generated/*.png` | Public GPT Image 2 visual assets for the README and animation. |
| `docs/assets/audio/agent-expert-panel-bgm.mp3` | Public MiniMax CLI generated instrumental BGM for the demo MP4 files. |
| `docs/assets/intro-animation-preview*.gif` | Public README preview animations. |
| `docs/assets/intro-animation-preview*.png` | Static preview images for the HTML language selector. |
| `docs/demo/agent-expert-panel-motion/renders/*.mp4` | Public bilingual rendered demo videos. |

Generated images are explanatory visuals, not private product assets.

## Publish Rules

1. No API keys in source.
2. No raw model response JSON.
3. No local browser/session/tool caches.
4. No WorkBuddy private prompts or assets.
5. No claims that cannot be verified from public sources or this repository.

## Re-running The Audit

```bash
rg -n "API_KEY|SECRET|TOKEN|Bearer|sk-" .
rg -n "\"b64_json\"|response\\.json|APIMART_API_KEY|YAIROUTER_API_KEY|CCAPI_IMAGE_API_KEY" .
git ls-files --others --exclude-standard
```

If any command returns a sensitive result, do not publish until it is removed.
