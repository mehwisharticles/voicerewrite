# Railway Setup - The Easiest Way!

## Why Railway?

✅ **Automatic Database** - No Supabase setup needed!
✅ **Auto-detects Next.js** - No configuration needed!
✅ **2 Environment Variables Only** - That's it!
✅ **Free Tier Available** - Perfect for testing!

---

## Step-by-Step (2 Steps Only!)

### Step 1: Deploy to Railway

1. **Go to [railway.app](https://railway.app)**
2. **Sign up** (free, use GitHub)
3. **Click "New Project"**
4. **Click "Deploy from GitHub repo"**
5. **Select your repository** (or fork this one first)
6. **Railway automatically:**
   - Detects it's a Next.js app ✅
   - Creates a PostgreSQL database ✅
   - Sets DATABASE_URL automatically ✅
   - Starts building ✅

**Wait 2-3 minutes for build to complete**

### Step 2: Add Environment Variables

1. **In Railway dashboard**, go to your project
2. **Click "Variables" tab**
3. **Add these 3 variables:**

| Variable | How to Get |
|----------|------------|
| `NEXTAUTH_SECRET` | Visit https://generate-secret.vercel.app/32 and copy |
| `OPENAI_API_KEY` | Visit https://platform.openai.com/api-keys and create key |
| `NEXTAUTH_URL` | Railway shows this - it's like `https://your-app.railway.app` |

4. **Railway automatically redeploys** when you add variables

### That's It! 🎉

Your app is live at the URL Railway provides!

---

## First-Time Setup

After deployment:

1. **Visit your Railway URL**
2. **Go to:** `https://your-app.railway.app/api/setup`
   - This automatically sets up database tables and creates demo user
3. **You should see:** `{"success":true,"message":"Database setup complete!"}`
4. **Now login with:**
   - Email: `demo@voicerewrite.com`
   - Password: `demo123`

**The `/api/setup` endpoint does everything automatically!** No manual database setup needed!

---

## Database Setup (Automatic!)

Railway **automatically**:
- ✅ Creates PostgreSQL database
- ✅ Sets DATABASE_URL environment variable
- ✅ Runs Prisma migrations on first deploy
- ✅ Handles all database setup

**You don't need to:**
- ❌ Create Supabase account
- ❌ Run SQL scripts
- ❌ Configure database
- ❌ Set up connection strings

**Railway does it all!**

---

## Troubleshooting

**"Database connection failed"**
- Railway sets DATABASE_URL automatically - don't change it
- Make sure you didn't override it in Variables

**"Build failed"**
- Check that all environment variables are set
- Railway logs show the error

**"App not loading"**
- Wait 2-3 minutes after adding variables
- Check Railway logs for errors

---

## Why Railway is Best

| Feature | Railway | Vercel | Render |
|---------|---------|--------|--------|
| Auto Database | ✅ | ❌ | ✅ |
| Auto Setup | ✅ | ⚠️ | ✅ |
| Free Tier | ✅ | ✅ | ✅ |
| Easy Config | ✅ | ⚠️ | ✅ |

**Railway = Easiest setup!** 🚀
