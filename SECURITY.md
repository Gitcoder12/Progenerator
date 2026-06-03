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

If you deploy this yourself:

1. **Never commit `.env` files** to git
2. **Use `.env.example`** as a template
3. **Keys stay client-side** — no server processing needed
4. Optionally add a backend if you want to share API quotas

## Questions?

This is a client-side only app. Your keys never touch untrusted servers.
