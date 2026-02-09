# Quick Setup with Supabase (No Local Installation Required)

## Option 1: Deploy to Vercel (Recommended - 5 minutes)

1. **Fork/Clone this repository to GitHub**

2. **Go to [Vercel](https://vercel.com) and sign up/login**

3. **Click "New Project" and import your GitHub repository**

4. **Add Environment Variables in Vercel:**
   - `DATABASE_URL` - Get from Supabase (see below)
   - `NEXTAUTH_URL` - Your Vercel URL (auto-filled)
   - `NEXTAUTH_SECRET` - Generate: `openssl rand -base64 32` or use [this generator](https://generate-secret.vercel.app/32)
   - `OPENAI_API_KEY` - Your OpenAI API key from [platform.openai.com](https://platform.openai.com)

5. **Set up Supabase Database:**
   - Go to [supabase.com](https://supabase.com) and create a free account
   - Create a new project
   - Go to Settings > Database
   - Copy the "Connection string" (URI format)
   - Paste it as `DATABASE_URL` in Vercel
   - Go to SQL Editor in Supabase
   - Run the Prisma schema SQL (see `supabase-schema.sql`)

6. **Deploy!** Vercel will automatically build and deploy your app.

## Option 2: Use Supabase SQL Editor

Instead of Prisma migrations, you can run this SQL directly in Supabase:

```sql
-- Run this in Supabase SQL Editor
-- (See supabase-schema.sql file)
```

## Option 3: One-Click Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/voicerewrite)

After deploying, add the environment variables in Vercel dashboard.
