---
name: GitHub authentication recovery
description: When connected-status reports disagree with git push authentication.
---

A healthy GitHub connection report does not prove that workspace Git credentials are valid. Treat the actual git push response as authoritative.

**Why:** Git push rejected authentication even when the source-control connection reported healthy and binding reported it already active; reconnect prompts also rejected that connection.

**How to apply:** Use the integration recovery flow first. If the prompt cannot open, consult current Replit documentation and direct the user to disconnect/reconnect GitHub under account settings → Git Providers. Never request tokens in chat or claim the push succeeded.
