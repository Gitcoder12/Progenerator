# API Key Security & Privacy

## What Stays in Your Browser

Your API keys are stored **only in browser localStorage**. They:

- Are never transmitted to this repo's servers
- Are never logged or tracked anywhere
- Only leave your browser when calling their respective APIs
- Are deleted when you clear browser data

## GitHub API

**Automatic (no key needed)**

- Used for public repo searches
- Rate limited: 60 requests/hour anonymous, 5000/hour with auth
- Data: Public repo metadata only

## DeepSeek API

**Required for AI analysis**

- Your key: Stored locally in your browser
- Cost: ~$0.001 per search (you control spending)
- Data sent: Topic + public repo context
- Get key: https://platform.deepseek.com/api-keys

## For Self-Hosters

Progenerator is a static HTML file. There is no build step and no server.

1. Download `index.html`
2. Open it in a browser (or host it anywhere static)
3. That's it

**Never commit `.env` files.** This repo has no `.env` and doesn't need
one. If you fork and add tooling, keep secrets out of git.

## Questions?

This is a client-side only app. Your keys never touch untrusted servers.
