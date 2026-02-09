# ⚡ Quick Start - No Installation Required

## Option 1: Deploy to Vercel (Easiest - 5 minutes)

### What You Need:
- GitHub account (free)
- Vercel account (free)
- Supabase account (free)
- OpenAI API key (get from [platform.openai.com](https://platform.openai.com/api-keys))

### Steps:

1. **Push Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   # Create repo on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/voicerewrite.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel auto-detects Next.js ✅

3. **Set Up Database (Supabase)**
   - Visit [supabase.com](https://supabase.com)
   - Create new project (free tier)
   - Wait 2-3 minutes for setup
   - Go to **Settings > Database**
   - Copy the **Connection string** (URI format)
   - Go to **SQL Editor**
   - Copy/paste contents of `supabase-schema.sql`
   - Click **Run**

4. **Add Environment Variables in Vercel**
   
   In Vercel project → Settings → Environment Variables:
   
   | Variable | Value |
   |----------|-------|
   | `DATABASE_URL` | Your Supabase connection string |
   | `NEXTAUTH_URL` | `https://your-project.vercel.app` |
   | `NEXTAUTH_SECRET` | [Generate here](https://generate-secret.vercel.app/32) |
   | `OPENAI_API_KEY` | Your OpenAI API key |

5. **Redeploy**
   - Go to Deployments tab
   - Click "Redeploy" (to apply env vars)

6. **Seed Database (Optional)**
   - Visit: `https://your-project.vercel.app/api/seed`
   - This creates demo user: `demo@voicerewrite.com` / `demo123`

**Done!** Your app is live! 🎉

---

## Option 2: Use Railway (Alternative)

1. Visit [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Railway provides PostgreSQL automatically
4. Add environment variables
5. Deploy!

---

## Option 3: Use Render (Alternative)

1. Visit [render.com](https://render.com)
2. New Web Service → Connect GitHub
3. Render provides PostgreSQL addon
4. Add environment variables
5. Deploy!

---

## After Deployment

1. Visit your live URL
2. Click "Get Started" or "Register"
3. Create your account
4. Start rewriting!

**Demo Account** (if you ran `/api/seed`):
- Email: `demo@voicerewrite.com`
- Password: `demo123`

---

## Need Help?

- **Vercel Issues**: Check [Vercel Docs](https://vercel.com/docs)
- **Supabase Issues**: Check [Supabase Docs](https://supabase.com/docs)
- **Database Schema**: See `supabase-schema.sql`
- **Full Setup Guide**: See `DEPLOY.md`

---

## Why This Works Without Local Installation

✅ **Vercel** - Hosts your app (no server setup needed)
✅ **Supabase** - Cloud PostgreSQL (no local database needed)
✅ **GitHub** - Stores your code (no local git needed)
✅ **All in the browser** - Just need accounts and API keys!

No Node.js, PostgreSQL, or npm install required on your machine! 🚀
