# 🚀 Deploy VoiceRewrite - No Local Installation Required

## Quick Deploy to Vercel (Recommended)

### Step 1: Push to GitHub
1. Create a new repository on GitHub
2. Push this code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/voicerewrite.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js

### Step 3: Set Up Supabase Database (Free)
1. Go to [supabase.com](https://supabase.com) and create account (free)
2. Create a new project
3. Wait for project to be ready (2-3 minutes)
4. Go to **Settings > Database**
5. Copy the **Connection string** (URI format)
   - It looks like: `postgresql://postgres:[YOUR-PASSWORD]@db.xxx.supabase.co:5432/postgres`
6. Go to **SQL Editor** in Supabase
7. Copy and paste the contents of `supabase-schema.sql` and run it

### Step 4: Add Environment Variables in Vercel
In your Vercel project dashboard, go to **Settings > Environment Variables** and add:

```
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.xxx.supabase.co:5432/postgres
NEXTAUTH_URL=https://your-project.vercel.app
NEXTAUTH_SECRET=[generate a random 32-character string]
OPENAI_API_KEY=sk-[your-openai-key]
```

**To generate NEXTAUTH_SECRET:**
- Visit: https://generate-secret.vercel.app/32
- Or run: `openssl rand -base64 32`

**To get OpenAI API Key:**
- Visit: https://platform.openai.com/api-keys
- Create a new secret key

### Step 5: Redeploy
After adding environment variables, go to **Deployments** tab and click **Redeploy**

### Step 6: Seed Database (Optional)
After deployment, visit: `https://your-project.vercel.app/api/seed` (we'll create this)

That's it! Your app is live at `https://your-project.vercel.app`

---

## Alternative: Use Railway (Even Easier)

1. Go to [railway.app](https://railway.app) and sign up
2. Click "New Project" > "Deploy from GitHub repo"
3. Select your repository
4. Railway auto-detects Next.js
5. Add environment variables in Railway dashboard
6. Railway provides PostgreSQL automatically - just copy the DATABASE_URL
7. Deploy!

---

## One-Click Deploy Button

Add this to your README.md:

```markdown
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_GITHUB_REPO_URL)
```

---

## After Deployment

1. Visit your deployed URL
2. Register a new account
3. Start using VoiceRewrite!

**Note:** The seed script creates a demo user, but you'll need to run it manually or create your own account.
