# Progenerator

AI-powered project idea generator that checks existing repos and suggests unexplored or difficult projects.

## Quick Start

1. Open the app (no installation needed)
2. Click "SET API KEY" and enter your DeepSeek API key
3. Enter a topic and hit "Explore"
4. Get ranked ideas of what hasn't been built yet

## 🔐 Security & Privacy

### API Keys
All API keys are stored **only in your browser's localStorage**. They are:
- ✅ Never sent to this repo's servers
- ✅ Never logged or tracked
- ✅ Only sent directly to their respective API providers (DeepSeek)
- ✅ Deleted when you clear browser data

### What Data Leaves Your Browser
- **GitHub API**: Public repo search queries
- **DeepSeek API**: Topic + repo context for AI analysis

### What Stays Local
- Your saved ideas
- Your API key
- Search history

## API Keys Required

### DeepSeek API Key (Required)
- **Cost**: ~$0.001 per search
- **Get it**: https://platform.deepseek.com/api-keys
- **Why**: Powers the AI gap analysis that finds unexplored projects

### GitHub API (Optional)
- Used automatically via public endpoints
- No key needed for basic searches
- Rate limited to 10 req/min without auth

## How It Works

1. **Scan GitHub** → Fetches top repos matching your topic
2. **AI Analysis** → DeepSeek identifies gaps and unexplored areas
3. **Rank Ideas** → Returns 8 ideas ranked by impact + novelty
4. **Save & Export** → Store ideas locally or export as JSON

## Features

- 🔍 Real-time GitHub scanning
- 🤖 AI-powered gap analysis
- 💾 Save ideas locally
- 📊 Difficulty & feasibility scoring
- ⬇️ Export results as JSON
- 🎨 Dark mode UI with smooth animations

## No Installation

Just open `Progenerator.html` in your browser. It's a single-file app with zero dependencies.

## Environment Variables

If self-hosting, these are stored locally only:

```env
# .env.example
VITE_DEEPSEEK_API_KEY=sk-your-key-here
```

## License

MIT
