# ⚡ Super Simple Deploy - 2 Steps Only!

## Use Railway (Recommended - Auto Database!)

### Step 1: Connect GitHub
1. Go to **[railway.app](https://railway.app)** → Sign up
2. Click **"New Project"**
3. Click **"Deploy from GitHub repo"**
4. Select your repository
5. Railway **automatically**:
   - ✅ Detects Next.js
   - ✅ Creates PostgreSQL database
   - ✅ Sets up DATABASE_URL automatically
   - ✅ Starts building

### Step 2: Add 2 Environment Variables
In Railway dashboard → Variables tab, add:

1. `NEXTAUTH_SECRET` 
   - Go to: https://generate-secret.vercel.app/32
   - Copy the generated secret
   - Paste in Railway

2. `OPENAI_API_KEY`
   - Go to: https://platform.openai.com/api-keys
   - Create new key
   - Paste in Railway

3. `NEXTAUTH_URL`
   - Railway auto-fills this, but check it's: `https://your-app.railway.app`

### That's It! 🎉

Railway automatically:
- ✅ Provides database (no Supabase needed!)
- ✅ Sets DATABASE_URL
- ✅ Deploys your app
- ✅ Gives you a live URL

**Your app is live!** Visit the URL Railway gives you.

---

## First Time Setup (One-Time)

After deployment:

1. **Visit:** `https://your-app.railway.app/api/setup`
   - This automatically sets up the database and creates demo user
   - You should see: `{"success":true,...}`

2. **Login with demo account:**
   - Email: `demo@voicerewrite.com`
   - Password: `demo123`

**That's it!** The `/api/setup` endpoint handles everything automatically!

---

## Alternative: Render (Same Process)

1. Go to **[render.com](https://render.com)**
2. **New Web Service** → **Connect GitHub**
3. Render **automatically provides PostgreSQL**
4. Add same 2 environment variables
5. Deploy!

**Same 2-step process!** Both Railway and Render handle the database automatically.

---

## Why This is Better

❌ **Old way:** GitHub → Vercel → Supabase → Configure → Deploy (5 steps, 3 services)
✅ **New way:** Railway → Add 2 vars → Done (2 steps, 1 service)

**Everything happens in Railway!** No Supabase account needed!

---

## Need Help?

- Railway automatically runs the database migrations
- If you see errors, check that NEXTAUTH_SECRET and OPENAI_API_KEY are set
- Railway provides the DATABASE_URL automatically - don't change it!
