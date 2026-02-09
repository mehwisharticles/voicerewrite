import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create a demo user
  const passwordHash = await bcrypt.hash('demo123', 10)
  
  const user = await prisma.user.upsert({
    where: { email: 'demo@voicerewrite.com' },
    update: {},
    create: {
      email: 'demo@voicerewrite.com',
      passwordHash,
      name: 'Demo User',
      subscriptionPlan: 'pro',
      subscriptionStatus: 'active',
    },
  })

  // Create a sample voice profile
  const existingProfile = await prisma.voiceProfile.findFirst({
    where: {
      userId: user.id,
      name: 'Professional & Clear',
    },
  })

  const voiceProfile = existingProfile || await prisma.voiceProfile.create({
    data: {
      userId: user.id,
      name: 'Professional & Clear',
      language: 'en',
      fingerprintJson: {
        avgSentenceLength: { min: 15, max: 25 },
        formalityLevel: 'professional',
        contractionsFrequency: 'low',
        preferredTransitions: ['however', 'furthermore', 'consequently', 'therefore'],
        readingLevel: 'college',
      },
      rulesJson: {
        do: ['Use active voice', 'Be concise', 'Use specific examples'],
        dont: ['Avoid jargon', 'No filler words', 'No redundant phrases'],
      },
    },
  })

  // Create a sample rewrite job
  const sampleInput = `Artificial intelligence has revolutionized many industries. AI is being used in healthcare. AI helps doctors diagnose diseases. AI is also used in finance. AI can detect fraud. The future of AI looks bright.`

  await prisma.rewriteJob.create({
    data: {
      userId: user.id,
      voiceProfileId: voiceProfile.id,
      mode: 'General',
      language: 'en',
      inputText: sampleInput,
      outputText: `Artificial intelligence has revolutionized numerous industries. In healthcare, AI assists physicians in diagnosing diseases more accurately. Financial institutions leverage AI to detect fraudulent transactions. The future of artificial intelligence appears promising.`,
      changeLog: [
        'Reduced repetition of "AI"',
        'Improved sentence variety',
        'Enhanced flow between ideas',
        'Made language more professional',
      ],
      metricsJson: {
        wordCount: 35,
        sentenceCount: 4,
        avgSentenceLength: 8.75,
        readabilityScore: 65,
        repetitionScore: 0.15,
        passiveVoiceCount: 0,
        clicheFlags: [],
      },
    },
  })

  console.log('Seed data created successfully!')
  console.log('Demo user:', user.email)
  console.log('Password: demo123')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
