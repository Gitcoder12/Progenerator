# Progenerator — README Explanation Draft

## In plain language

A project idea explorer that searches public GitHub repositories for a topic and uses AI to suggest possible gaps or new directions.

## How to use it

Enter a topic. The tool searches public GitHub repositories and passes relevant metadata to the configured AI provider to suggest directions worth investigating.

## Technical explanation

Static browser frontend using public GitHub repository search and a user-provided DeepSeek key for idea generation. It presents repository metadata and generated project suggestions. Search results are incomplete and generated ideas require human verification; the tool does not prove novelty or market demand.

Document GitHub API query construction, result fields, rate limits, provider request format, prompt construction and browser storage. Explain how suggestions cite their source records.

## Limitations

GitHub search is not the entire software ecosystem. Generated ideas may already exist, may be impractical or may not have market demand. Human research is required before claiming novelty.

## Security

State where a user-supplied provider key goes and whether it is retained. Do not commit real keys.
