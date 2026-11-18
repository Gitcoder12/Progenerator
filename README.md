# Progenerator
AI-powered project idea generator. Scans GitHub for what already exists, then uses DeepSeek to find unexplored gaps worth building.
Live: https://gitcoder12.github.io/Progenerator/


---

## AI-maintained project notes (secondary — 2026-11-13)

This section supplements the maintainer-authored README above. The original text has been restored verbatim from Git-history baseline `4bb268d7c720402a1362b2a3433c26cade7f3b2c`; this addendum does not replace or certify the original claims.

- The current source tree, runtime data and tests are the implementation source of truth. A roadmap item, draft PR or AI-generated description is not a shipped feature by itself.
- Preserve real and maintainer-provided data. Never silently substitute generated or placeholder data. Clearly label and isolate synthetic fixtures.
- Mark unverified sources, identifiers, metrics, benchmark results and external claims as unknown/unverified rather than guessing.
- Verify setup, execution, tests and public claims against the exact current commit before using this repository in a job, research or academic application.
- See [MODEL_AUDIT_ROUTER.md](MODEL_AUDIT_ROUTER.md) for independent model review instructions and the merge gate.

---

## Engineering Audit & Handover — 2026-11-17

**Reviewed commit:** `54769e3f14075c196e5040e1e5dcdd786a1f3cbc` (`main`).

### Confirmed findings
- The client searches GitHub using two unauthenticated repository-search requests and limits the context to a small number of top results. GitHub rate limiting can reduce or interrupt coverage.
- The DeepSeek API key is read from browser `localStorage` (`prg_ds_key`) and the AI request is made directly from the browser. The key is not encrypted by this application and is exposed to scripts running in the same origin/browser profile.
- The gap analysis receives repository names, descriptions, stars, languages, and topics—not full source code or a comprehensive survey of the domain. Generated ideas are hypotheses, not proof that a problem is unexplored.

### Next actions
1. Make browser-key storage opt-in with clear security guidance and a remove-key control.
2. Show search coverage, rate-limit state, and the exact repositories used as context.
3. Require human/literature validation of novelty before presenting an idea as an actual research gap.

**Verification status:** static source inspection only; live GitHub/DeepSeek calls and browser tests remain unverified.

---

## Examples Used
- Finding existing GitHub projects for a proposed idea
- Identifying underserved features in a developer-tool category
- Validating a generated idea against repositories and research
