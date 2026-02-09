# 🎯 READ THIS FIRST - Easiest Way to Deploy!

## ⚡ Use Railway - 2 Steps, No Manual Setup!

### Why Railway?
- ✅ **Automatic database** - Railway creates PostgreSQL for you
- ✅ **Auto-detects Next.js** - No configuration needed
- ✅ **Only 2 environment variables** - That's it!
- ✅ **Free tier available** - Perfect for testing

---

## The 2 Steps:

### 1️⃣ Deploy to Railway
1. Go to **[railway.app](https://railway.app)** → Sign up (free)
2. Click **"New Project"** → **"Deploy from GitHub repo"**
3. Select your repository
4. **Railway automatically:**
   - ✅ Detects Next.js
   - ✅ Creates PostgreSQL database
   - ✅ Sets DATABASE_URL automatically
   - ✅ Starts building

**Wait 2-3 minutes**

### 2️⃣ Add Environment Variables
In Railway dashboard → **Variables** tab, add:

| Variable | How to Get |
|----------|------------|
| `NEXTAUTH_SECRET` | Visit https://generate-secret.vercel.app/32 |
| `OPENAI_API_KEY` | Visit https://platform.openai.com/api-keys |

**Railway auto-redeploys!**

---

## First-Time Setup

1. Visit: `https://your-app.railway.app/api/setup`
2. You'll see: `{"success":true,...}`
3. Login with:
   - Email: `demo@voicerewrite.com`
   - Password: `demo123`

**Done!** 🎉

---

## That's It!

**No Supabase account needed!**  
**No Vercel account needed!**  
**No manual database setup!**  
**Just Railway + 2 environment variables!**

---

## Need More Help?

- **Detailed Guide:** [DEPLOY_INSTRUCTIONS.md](./DEPLOY_INSTRUCTIONS.md)
- **Simple Guide:** [SIMPLE_DEPLOY.md](./SIMPLE_DEPLOY.md)
- **Railway Details:** [railway-setup.md](./railway-setup.md)

---

## Quick Comparison

| Platform | Steps | Database Setup | Best For |
|----------|-------|----------------|----------|
| **Railway** | 2 | ✅ Automatic | **Easiest!** |
| **Render** | 2 | ✅ Automatic | **Easiest!** |
| **Vercel+Supabase** | 5 | ❌ Manual | Production |

**Choose Railway or Render for the easiest setup!** 🚀
