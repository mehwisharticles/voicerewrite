# VoiceRewrite Setup Guide

## Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or remote)
- OpenAI API key

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/voicerewrite?schema=public"
   
   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   # Generate a secret: openssl rand -base64 32
   
   # OpenAI
   OPENAI_API_KEY="your-openai-api-key"
   
   # Stripe (optional for MVP)
   STRIPE_SECRET_KEY="sk_test_..."
   STRIPE_PUBLISHABLE_KEY="pk_test_..."
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
   ```

3. **Set Up Database**
   ```bash
   # Generate Prisma Client
   npm run db:generate
   
   # Push schema to database
   npm run db:push
   
   # Seed database with sample data
   npm run db:seed
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Open in Browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Demo Account

After running the seed script, you can log in with:
- Email: `demo@voicerewrite.com`
- Password: `demo123`

## Project Structure

```
voicerewrite/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── app/               # Main editor page
│   ├── profiles/          # Voice profiles management
│   ├── pricing/           # Pricing page
│   └── account/           # Account settings
├── components/            # React components
│   ├── editor/           # Editor components
│   ├── profiles/         # Profile components
│   └── ui/               # UI components
├── lib/                   # Utility libraries
│   ├── ai.ts             # AI rewrite logic
│   ├── auth.ts           # NextAuth configuration
│   ├── metrics.ts        # Quality metrics calculation
│   └── prisma.ts         # Prisma client
├── prisma/                # Prisma schema and migrations
│   ├── schema.prisma     # Database schema
│   └── seed.ts           # Seed script
└── types/                 # TypeScript type definitions
```

## Key Features

- ✅ Personal Voice Profiles
- ✅ Multiple Rewrite Modes (General, More Natural, High Quality, Academic)
- ✅ Quality Metrics (readability, repetition, passive voice, clichés)
- ✅ History & Restore
- ✅ Multi-language support (structure ready)
- ✅ Authentication (email/password)
- ✅ Responsive UI

## Next Steps

1. Set up Stripe for billing (optional)
2. Add more languages
3. Implement export functionality
4. Add OAuth providers (Google, GitHub, etc.)

## Troubleshooting

### Database Connection Issues
- Verify your `DATABASE_URL` is correct
- Ensure PostgreSQL is running
- Check database permissions

### OpenAI API Errors
- Verify your API key is valid
- Check your OpenAI account has credits
- Review API rate limits

### Authentication Issues
- Ensure `NEXTAUTH_SECRET` is set
- Verify `NEXTAUTH_URL` matches your app URL
- Clear browser cookies if needed
