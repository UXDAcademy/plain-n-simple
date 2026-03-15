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
      setStatus('confirmed')
    }
  }, [])

  if (status === 'confirming') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FFF9F2] px-5">
        <p className="text-lg text-[#86868b]">Verifying your email...</p>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFF9F2] px-5">
        <h1 className="mb-4 font-serif text-5xl text-[#303030] md:text-[96px]">
          Something went wrong
        </h1>
        <p className="mb-8 text-center text-[#86868b]">
          We couldn&apos;t verify your email. The link may have expired.
        </p>
        <a
          href="https://www.linkedin.com/jobs/"
          className="rounded-xl bg-[#2b7fff] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#2b7fff]/90"
        >
          Go to LinkedIn
        </a>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFF9F2] px-5">
      {/* Title */}
      <h1 className="mb-12 font-serif text-5xl text-[#303030] md:text-[96px] md:leading-tight">
        Your Account is Ready!
      </h1>

      {/* Dark card — everything except footer is inside */}
      <div className="w-full max-w-[360px] rounded-2xl bg-[#303030] px-5 pb-5 pt-6">
        {/* App header */}
        <div className="mb-4 flex items-center justify-center gap-2">
          <Image
            src="/app_icon.png"
            alt="Plain n' Simple"
            width={24}
            height={24}
            className="rounded-md"
          />
          <span className="text-xl font-semibold text-white">
            Plain n&apos; Simple
          </span>
        </div>

        {/* Divider */}
        <div className="mb-5 h-px w-full bg-[#454545]" />

        {/* Status container — inner card */}
        <div className="mb-5 rounded-2xl border-[0.5px] border-[#187a4a] bg-[#383838] px-5 py-5">
          {/* Check + percentage */}
          <div className="mb-2 flex items-center justify-between px-2">
            <span className="text-5xl">✅</span>
            <span className="text-4xl font-semibold text-[#05df73]">100%</span>
          </div>

          {/* Status */}
          <p className="mb-2 text-center text-[28px] font-semibold text-[#05df73]">
            Email Confirmed
          </p>

          {/* Subtext */}
          <p className="text-center text-sm text-[#d1d5dc]">
            Return to LinkedIn and sign in
          </p>
        </div>

        {/* Instruction */}
        <p className="mb-4 text-center text-xs text-[#9aa1af]">
          Open Plain n&apos; Simple, select a job and translate.
        </p>

        {/* CTA button */}
        <a href="https://www.linkedin.com">
          <div className="rounded-xl bg-[#2b7fff] py-4 text-center text-base font-semibold text-white transition-colors hover:bg-[#2b7fff]/90">
            Return to LinkedIn
          </div>
        </a>
      </div>

      {/* Footer — outside the card */}
      <p className="mt-10 text-lg font-medium text-[#86868b]">
        www.useplainandsimple.app
      </p>
    </div>
  )
}
