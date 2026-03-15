'use client'

import { useEffect, useState } from 'react'

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
      <div className="flex min-h-screen items-center justify-center bg-[#FFF9F2] font-[Inter]">
        <p className="text-lg text-[#86868b]">Verifying your email...</p>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFF9F2] font-[Inter]">
        <h1 className="mb-4 font-serif text-5xl text-[#303030] md:text-[96px]">
          Something went wrong
        </h1>
        <p className="mb-8 text-center text-[#86868b]">
          We couldn&apos;t verify your email. The link may have expired.
        </p>
        <a
          href="https://www.linkedin.com/jobs/"
          className="rounded-xl bg-[#2b7fff] px-8 py-4 text-base font-semibold text-white"
        >
          Go to LinkedIn
        </a>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFF9F2] px-5 font-[Inter]">
      {/* Title */}
      <h1 className="mb-12 font-serif text-5xl text-[#303030] md:text-[96px] md:leading-tight">
        Your Account is Ready!
      </h1>

      {/* Overlay — single flexbox card, no absolute positioning */}
      <div className="w-full max-w-[360px] rounded-2xl bg-[#303030] flex flex-col items-start pb-6 gap-5 text-left text-xl text-white font-[Inter]">
        {/* Header */}
        <div className="self-stretch border-b border-[#454545] flex items-center px-5 pt-5 pb-6 gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ampersand-icon.svg"
            alt=""
            className="h-6 w-6 rounded"
          />
          <div className="w-[284px] font-semibold shrink-0">
            Plain n&apos; Simple
          </div>
        </div>

        {/* Content */}
        <div className="self-stretch flex flex-col items-start px-5 gap-6 text-center text-[48px]">
          {/* Status frame */}
          <div className="self-stretch rounded-2xl bg-[#383838] border-[0.5px] border-[#187a4a] flex flex-col items-start py-6 gap-4 text-left">
            {/* Checkmark + percentage row */}
            <div className="self-stretch h-12 flex items-start justify-center gap-[23px]">
              <div className="text-[48px] font-semibold leading-none">✅</div>
              <div className="h-12 w-[208px] text-[36px] font-semibold text-[#05df73] text-right flex items-center justify-end shrink-0">
                100%
              </div>
            </div>

            {/* Status + subtext */}
            <div className="self-stretch flex flex-col items-start gap-3 text-center text-[28px] text-[#05df73]">
              <div className="self-stretch font-semibold">Email Confirmed</div>
              <div className="self-stretch text-sm text-[#d1d5dc]">
                Return to LinkedIn and sign in
              </div>
            </div>
          </div>

          {/* Instruction */}
          <div className="self-stretch text-xs text-[#9aa1af] text-center">
            Open Plain n&apos; Simple, select a job and translate.
          </div>

          {/* CTA button */}
          <a href="https://www.linkedin.com" className="self-stretch">
            <div className="self-stretch rounded-xl bg-[#2b7fff] flex items-center justify-center py-[19px] px-[90px] text-base">
              <div className="h-[18px] w-[141px] font-semibold shrink-0 flex items-center justify-center">
                Return to LinkedIn
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Footer link */}
      <a
        href="https://www.useplainandsimple.app"
        className="mt-10 text-lg font-medium text-[#86868b] underline hover:text-[#303030] transition-colors"
      >
        www.useplainandsimple.app
      </a>
    </div>
  )
}
