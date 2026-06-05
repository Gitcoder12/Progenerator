# Contributing to Progenerator

## Improving the AI Prompt
The gap analysis prompt is in `index.html`. Improving it improves result quality.
Good prompts should instruct the model to:
- Identify underrepresented problem domains
- Score by feasibility for a solo developer
- Avoid suggesting already-saturated ideas

## Adding a New API Source
Currently uses GitHub + DeepSeek. To add another:
1. Create a `fetchFrom<Source>()` function
2. Normalize results to `{ name, description, stars, url }`
3. Pass to the AI context builder
