# VoiceRewrite

A web application for rewriting text to match your personal voice, improving clarity and readability.

## 🚀 Super Simple Deploy - 2 Steps Only!

### 👉 [START HERE - EASIEST DEPLOY GUIDE](./DEPLOY_INSTRUCTIONS.md)

**No Supabase! No Vercel! No manual database setup!**

**Just Railway (or Render) - Everything Automatic!**

1. **Connect GitHub to Railway** → Auto-detects Next.js, creates database
2. **Add 2 environment variables** → NEXTAUTH_SECRET, OPENAI_API_KEY
3. **Visit `/api/setup`** → Auto-creates demo user
4. **Done!** Your app is live!

**See [DEPLOY_INSTRUCTIONS.md](./DEPLOY_INSTRUCTIONS.md) for the complete 2-step guide.**

---

## Features

- **Personal Voice Profiles**: Create custom writing style profiles
- **Multiple Rewrite Modes**: General, More Natural, High Quality, Academic
- **Quality Metrics**: Readability, grammar, repetition, and more
- **History Tracking**: Save and restore past rewrites
- **Privacy-First**: Your writing samples are never shared

---

## Quick Deploy Options

### Option 1: Railway (Recommended - Auto Database!)
- ✅ Automatic PostgreSQL database
- ✅ 2 environment variables only
- ✅ One-click deploy
- **Guide:** [SIMPLE_DEPLOY.md](./SIMPLE_DEPLOY.md)

### Option 2: Render (Same as Railway)
- ✅ Automatic PostgreSQL database  
- ✅ 2 environment variables only
- ✅ One-click deploy
- **Guide:** [SIMPLE_DEPLOY.md](./SIMPLE_DEPLOY.md)

### Option 3: Replit (Everything in Browser)
- ✅ All in one place
- ✅ No separate services
- **Guide:** [ONE_CLICK_DEPLOY.md](./ONE_CLICK_DEPLOY.md)

---

## Local Development (Optional)

If you want to run locally:

```bash
npm install
npm run setup  # Generates Prisma + pushes schema
npm run dev
```

---

## Environment Variables

**For Railway/Render (auto-provides DATABASE_URL):**
- `NEXTAUTH_SECRET` - Generate at https://generate-secret.vercel.app/32
- `OPENAI_API_KEY` - From https://platform.openai.com/api-keys
- `NEXTAUTH_URL` - Auto-filled by platform

**For other platforms:**
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_URL` - Your app URL
- `NEXTAUTH_SECRET` - Random 32-char string
- `OPENAI_API_KEY` - Your OpenAI API key

---

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Prisma (PostgreSQL)
- NextAuth.js
- OpenAI API

---

## After Deployment

1. Visit your live URL
2. Go to `/api/setup` to automatically set up database and demo data
3. Login with: `demo@voicerewrite.com` / `demo123`
4. Start rewriting!

---

## Documentation

- **Simple Deploy:** [SIMPLE_DEPLOY.md](./SIMPLE_DEPLOY.md) ⭐ Start here!
- **One-Click Options:** [ONE_CLICK_DEPLOY.md](./ONE_CLICK_DEPLOY.md)
- **Detailed Setup:** [DEPLOY.md](./DEPLOY.md)
- **Project Summary:** [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)
