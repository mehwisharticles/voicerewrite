# 🚀 START HERE - Deploy in 5 Minutes (No Installation!)

## What You Need (All Free):
1. ✅ GitHub account
2. ✅ Vercel account  
3. ✅ Supabase account
4. ✅ OpenAI API key

---

## Step-by-Step:

### 1️⃣ Push to GitHub (2 minutes)
```bash
# If you don't have git installed, download from git-scm.com
# Or use GitHub Desktop: desktop.github.com

git init
git add .
git commit -m "VoiceRewrite app"
# Create new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/voicerewrite.git
git push -u origin main
```

### 2️⃣ Deploy to Vercel (1 minute)
1. Go to **[vercel.com/new](https://vercel.com/new)**
2. Click "Import Git Repository"
3. Select your GitHub repo
4. Click "Deploy" (don't add env vars yet)

### 3️⃣ Set Up Supabase Database (2 minutes)
1. Go to **[supabase.com](https://supabase.com)** → Sign up
2. Click "New Project"
3. Fill in:
   - Name: `voicerewrite`
   - Database Password: (save this!)
   - Region: Choose closest
4. Wait 2-3 minutes for setup
5. Go to **SQL Editor** (left sidebar)
6. Click "New Query"
7. Copy **ALL** text from `supabase-schema.sql` file
8. Paste and click **Run**
9. Go to **Settings** → **Database**
10. Find "Connection string" → Copy the **URI** format
    - Looks like: `postgresql://postgres.xxx:xxxxx@aws-0-us-east-1.pooler.supabase.com:6543/postgres`

### 4️⃣ Add Environment Variables (1 minute)
1. Go back to **Vercel** → Your project → **Settings** → **Environment Variables**
2. Add these 4 variables:

| Name | Value |
|------|-------|
| `DATABASE_URL` | Paste Supabase connection string (from step 3) |
| `NEXTAUTH_URL` | `https://your-project-name.vercel.app` |
| `NEXTAUTH_SECRET` | Go to [generate-secret.vercel.app/32](https://generate-secret.vercel.app/32) and copy |
| `OPENAI_API_KEY` | Get from [platform.openai.com/api-keys](https://platform.openai.com/api-keys) |

3. Click **Save** for each one

### 5️⃣ Redeploy (30 seconds)
1. Go to **Deployments** tab in Vercel
2. Click the **3 dots** on latest deployment
3. Click **Redeploy**
4. Wait 2 minutes

### 6️⃣ Seed Database (Optional - 10 seconds)
1. Visit: `https://your-project-name.vercel.app/api/seed`
2. You should see: `{"success":true,...}`
3. Demo account created:
   - Email: `demo@voicerewrite.com`
   - Password: `demo123`

---

## ✅ Done! Your App is Live!

Visit: `https://your-project-name.vercel.app`

**That's it!** No Node.js, no PostgreSQL, no npm install needed! 🎉

---

## Troubleshooting

**"Database connection failed"**
- Check DATABASE_URL is correct (URI format from Supabase)
- Make sure you ran the SQL schema in Supabase

**"NEXTAUTH_SECRET missing"**
- Make sure you added it in Vercel environment variables
- Redeploy after adding

**"OpenAI API error"**
- Check your API key is correct
- Make sure you have credits in OpenAI account

**Need help?** Check `DEPLOY.md` for more details.
