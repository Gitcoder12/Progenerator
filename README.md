# Progenerator

**A browser-based project-idea explorer combining GitHub repository search with AI-assisted gap analysis.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://gitcoder12.github.io/Progenerator/)
[![License](https://img.shields.io/badge/license-see%20LICENSE-lightgrey)](LICENSE)

Progenerator accepts a topic, searches public GitHub repositories for related work, and sends the resulting context to DeepSeek to propose possible project opportunities.

## Features

- Search public GitHub repositories by topic.
- Display repository names, descriptions, stars, languages, and metadata.
- Use a user-supplied DeepSeek API key for idea generation.
- Generate and filter project suggestions.
- Save selected ideas in browser local storage.

## Quick Start

Open `index.html` in a modern browser, or serve it locally:

```bash
git clone https://github.com/Gitcoder12/Progenerator.git
cd Progenerator
python -m http.server 8000
```

Open `http://localhost:8000`, add a DeepSeek API key, and search for a topic.

## Tech Stack

HTML · CSS · Vanilla JavaScript · GitHub REST API · DeepSeek API · Browser Local Storage

## Configuration and Limits

- The DeepSeek key is stored in browser `localStorage` and used directly by the browser.
- GitHub public search is called without a backend; unauthenticated requests are subject to GitHub's rate limits.
- Search results represent matching public repositories, not a complete survey of a research or commercial field.

## Scope and Limitations

AI-generated ideas are hypotheses for further investigation, not proof that an idea is novel, feasible, or commercially unserved. Check papers, patents, products, and existing repositories before making investment or research decisions. Keep API keys out of shared or public browser profiles.

## License

See [LICENSE](LICENSE).

---

## Project handbook

- [Activity log](ACTIVITY_LOG.md) · [Feature upgrade plan](FEATURE_UPGRADE_PLAN.md)
- [Company and team fit](COMPANY_FIT.md) · [README explanation draft](README_ADDENDUM_DRAFT.md)
- [README quality checklist](README_QUALITY_CHECKLIST.md)
- [Contributing](CONTRIBUTING.md) · [Agent instructions](AGENTS.md) · [Agent skills](SKILLS.md)

## Understanding the project

### In plain language

A project idea explorer that searches public GitHub repositories for a topic and uses AI to suggest possible gaps or new directions.

### Technical and research view

Static browser frontend using public GitHub repository search and a user-provided DeepSeek key for idea generation. It presents repository metadata and generated project suggestions. Search results are incomplete and generated ideas require human verification; the tool does not prove novelty or market demand.

Document GitHub API query construction, result fields, rate limits, provider request format, prompt construction and browser storage. Explain how suggestions cite their source records.

For future work, see [FEATURE_UPGRADE_PLAN.md](FEATURE_UPGRADE_PLAN.md), [ACTIVITY_LOG.md](ACTIVITY_LOG.md), [COMPANY_FIT.md](COMPANY_FIT.md) and [CONTRIBUTING.md](CONTRIBUTING.md).
