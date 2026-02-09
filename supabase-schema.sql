-- Run this SQL in Supabase SQL Editor
-- This creates all the tables needed for VoiceRewrite

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  email TEXT UNIQUE NOT NULL,
  "passwordHash" TEXT,
  name TEXT,
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "updatedAt" TIMESTAMP DEFAULT NOW(),
  "stripeCustomerId" TEXT UNIQUE,
  "subscriptionStatus" TEXT,
  "subscriptionPlan" TEXT DEFAULT 'free'
);

-- Accounts table (for OAuth if needed)
CREATE TABLE IF NOT EXISTS accounts (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "userId" TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  provider TEXT NOT NULL,
  "providerAccountId" TEXT NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_at INTEGER,
  token_type TEXT,
  scope TEXT,
  id_token TEXT,
  session_state TEXT,
  UNIQUE(provider, "providerAccountId")
);

-- Sessions table
CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "sessionToken" TEXT UNIQUE NOT NULL,
  "userId" TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires TIMESTAMP NOT NULL
);

-- Voice Profiles table
CREATE TABLE IF NOT EXISTS voice_profiles (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "userId" TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  language TEXT DEFAULT 'en',
  "fingerprintJson" JSONB NOT NULL,
  "rulesJson" JSONB NOT NULL,
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "updatedAt" TIMESTAMP DEFAULT NOW()
);

-- Rewrite Jobs table
CREATE TABLE IF NOT EXISTS rewrite_jobs (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "userId" TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  "voiceProfileId" TEXT REFERENCES voice_profiles(id) ON DELETE SET NULL,
  mode TEXT NOT NULL,
  language TEXT DEFAULT 'en',
  "inputText" TEXT NOT NULL,
  "outputText" TEXT NOT NULL,
  "changeLog" JSONB NOT NULL,
  "metricsJson" JSONB NOT NULL,
  "createdAt" TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_voice_profiles_user_id ON voice_profiles("userId");
CREATE INDEX IF NOT EXISTS idx_rewrite_jobs_user_id ON rewrite_jobs("userId");
CREATE INDEX IF NOT EXISTS idx_rewrite_jobs_created_at ON rewrite_jobs("createdAt" DESC);
