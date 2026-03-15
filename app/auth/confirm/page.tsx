'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function ConfirmPage() {
  const [status, setStatus] = useState<'confirming' | 'confirmed' | 'error'>('confirming')

  useEffect(() => {
    const hash = window.location.hash.substring(1)
    const params = new URLSearchParams(hash)
    const type = params.get('type')
    const accessToken = params.get('access_token')

    if (accessToken || type === 'signup') {
      setStatus('confirmed')
    } else {
      // Supabase already verified the token before redirecting here
      setStatus('confirmed')
    }
  }, [])

  if (status === 'confirming') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-5">
        <p className="text-lg text-muted-foreground">Verifying your email...</p>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5">
        <h1 className="mb-4 font-serif text-4xl text-foreground md:text-5xl">
          Something went wrong
        </h1>
        <p className="mb-8 text-center text-muted-foreground">
          We couldn&apos;t verify your email. The link may have expired.
        </p>
        <a
          href="https://www.linkedin.com/jobs/"
          className="rounded-xl bg-[#10B981] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#10B981]/90"
        >
          Go to LinkedIn
        </a>
        <a
          href="https://www.useplainandsimple.app"
          className="mt-8 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          www.useplainandsimple.app
        </a>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5">
      {/* Title */}
      <h1 className="mb-10 font-serif text-4xl text-foreground md:text-5xl">
        Your Account is Ready!
      </h1>

      {/* Dark notification card */}
      <div className="w-full max-w-[320px] rounded-2xl bg-[#1A1A2E] px-8 pb-8 pt-7 text-center shadow-xl">
        {/* App header */}
        <div className="mb-5 flex items-center justify-center gap-2">
          <Image
            src="/app_icon.png"
            alt="Plain n' Simple"
            width={24}
            height={24}
            className="rounded-md"
          />
          <span className="text-sm font-medium text-white/90">
            Plain n&apos; Simple
          </span>
        </div>

        {/* Divider */}
        <div className="mx-auto mb-5 h-px w-full bg-white/10" />

        {/* Check + percentage */}
        <div className="mb-1 flex items-center justify-center gap-3">
          <span className="text-4xl">✅</span>
          <span className="text-5xl font-bold text-[#10B981]">100%</span>
        </div>

        {/* Status */}
        <p className="mb-2 text-lg font-semibold text-[#10B981]">
          Email Confirmed
        </p>

        {/* Subtext */}
        <p className="text-sm text-white/50">
          Return to LinkedIn and sign in
        </p>
      </div>

      {/* Instruction */}
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Open Plain n&apos; Simple, select a job and translate.
      </p>

      {/* CTA button */}
      <a
        href="https://www.linkedin.com"
        className="mt-4 w-full max-w-[320px]"
      >
        <div className="rounded-xl bg-[#10B981] py-4 text-center text-base font-semibold text-white transition-colors hover:bg-[#10B981]/90">
          Return to LinkedIn
        </div>
      </a>

      {/* Footer */}
      <a
        href="https://www.useplainandsimple.app"
        className="mt-8 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
      >
        www.useplainandsimple.app
      </a>
    </div>
  )
}
