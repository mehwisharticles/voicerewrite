'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function AccountPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <a href="/app" className="text-xl font-bold text-primary-600">VoiceRewrite</a>
              <nav className="hidden md:flex gap-4">
                <a href="/app" className="text-gray-600 hover:text-gray-900">Editor</a>
                <a href="/profiles" className="text-gray-600 hover:text-gray-900">Voice Profiles</a>
                <a href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                <a href="/account" className="text-gray-700 hover:text-gray-900 font-medium">Account</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{session.user?.email}</span>
              <a href="/api/auth/signout" className="text-sm text-gray-600 hover:text-gray-900">
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Account Settings</h1>

        <div className="bg-white rounded-lg border shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Account Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="text-gray-900">{session.user?.email}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <div className="text-gray-900">{session.user?.name || 'Not set'}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Subscription</h2>
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium text-gray-900">Current Plan</div>
              <div className="text-gray-600">Free Plan</div>
            </div>
            <a href="/pricing">
              <Button>Upgrade to Pro</Button>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Data & Privacy</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium text-gray-900">Export Your Data</div>
                <div className="text-sm text-gray-600">Download all your rewrites and voice profiles</div>
              </div>
              <Button variant="outline">Export</Button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium text-gray-900">Delete Account</div>
                <div className="text-sm text-gray-600">Permanently delete your account and all data</div>
              </div>
              <Button variant="outline" className="text-red-600 hover:text-red-700">
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
