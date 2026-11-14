# Progenerator — Feature Upgrade Plan

## Objective

A project idea explorer that searches public GitHub repositories for a topic and uses AI to suggest possible gaps or new directions.

## P0 — privacy and source trust

- [ ] Document API key handling and ensure keys are not persisted, exported or logged accidentally.
- [ ] Show search timestamp, query, result limit and API failure state; label GitHub search as incomplete.

## P1 — useful idea workflow

- [ ] Deduplicate related repositories and expose evidence behind a suggested gap.
- [ ] Let users save an idea with source repositories and a clear human-review status.

## P2 — evaluation

- [ ] Evaluate suggestion usefulness with a rubric and human-labelled examples.
- [ ] Add source-aware similarity and avoid claiming an idea is original without wider research.

## Contributor work packages

1. Search/API reliability and source attribution.
2. Deduplication and related-project evidence.
3. Key handling and user-saved ideas.
4. Human evaluation of suggestion usefulness and novelty limits.

## Definition of done

- [ ] API keys are not leaked or stored unexpectedly.
- [ ] Search limitations and freshness are shown.
- [ ] Suggestions cite source repositories and are clearly AI-generated.
- [ ] Novelty and market claims are not made without independent evidence.
