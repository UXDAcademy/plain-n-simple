"use client"

import { useState, useEffect, useCallback } from "react"

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

interface StatusData {
  emoji: string
  score: number
  title: string
  sentences: string
  color: string
  borderColor: string
}

const statuses: StatusData[] = [
  {
    emoji: "\u{1F4A9}",
    score: 28,
    title: "Certified BS",
    sentences: "6 of 36 sentences are clear & honest",
    color: "text-red-400",
    borderColor: "border-red-500/20",
  },
  {
    emoji: "\u{1F914}",
    score: 72,
    title: "Mixed Signals",
    sentences: "14 of 36 sentences are clear & honest",
    color: "text-yellow-400",
    borderColor: "border-yellow-500/20",
  },
  {
    emoji: "\u2705",
    score: 94,
    title: "Legit Opportunity",
    sentences: "30 of 36 sentences are clear & honest",
    color: "text-green-400",
    borderColor: "border-green-500/20",
  },
]

function CyclingPopup() {
  const [statusIndex, setStatusIndex] = useState(0)
  const [translationsLeft, setTranslationsLeft] = useState(4)
  const [displayScore, setDisplayScore] = useState(0)
  const [fading, setFading] = useState(false)

  const currentStatus = statuses[statusIndex]

  const cycleStatus = useCallback(() => {
    // Fade out
    setFading(true)

    setTimeout(() => {
      setStatusIndex((prev) => {
        const next = (prev + 1) % statuses.length
        return next
      })
      setTranslationsLeft((prev) => {
        if (prev <= 0) return 5
        return prev - 1
      })
      setDisplayScore(0)
      // Fade in
      setFading(false)
    }, 400)
  }, [])

  // Cycle every 3.5s
  useEffect(() => {
    const interval = setInterval(cycleStatus, 3500)
    return () => clearInterval(interval)
  }, [cycleStatus])

  // Animate score up
  useEffect(() => {
    if (fading) return
    const target = currentStatus.score
    let current = 0
    const interval = setInterval(() => {
      current += 3
      if (current >= target) {
        setDisplayScore(target)
        clearInterval(interval)
      } else {
        setDisplayScore(current)
      }
    }, 20)
    return () => clearInterval(interval)
  }, [statusIndex, fading, currentStatus.score])

  return (
    <div className="w-[300px] sm:w-[340px] mx-auto">
      <div className="bg-[#303030] rounded-2xl shadow-2xl shadow-black/20 text-white overflow-hidden">
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-white/[0.06] flex items-center gap-2.5">
          <img
            src="/app_icon.png"
            alt="Plain n' Simple logo"
            className="w-5 h-5 rounded-[22%]"
          />
          <span className="text-sm font-medium text-white/90">
            Plain n&apos; Simple
          </span>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5">
          {/* Translations counter */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-white/40">
                {translationsLeft} translation{translationsLeft !== 1 ? "s" : ""} left
              </p>
              <p className="text-xs text-white/40">Free tier</p>
            </div>
            <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${(translationsLeft / 5) * 100}%` }}
              />
            </div>
          </div>

          {/* Score card - cycles */}
          <div
            className={`transition-all duration-400 ${
              fading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            <div
              className={`bg-white/[0.04] rounded-xl p-5 border ${currentStatus.borderColor} transition-colors duration-500`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-5xl">{currentStatus.emoji}</span>
                <span
                  className={`text-4xl font-bold ${currentStatus.color} tabular-nums transition-colors duration-500`}
                >
                  {displayScore}%
                </span>
              </div>
              <h3
                className={`text-2xl font-bold ${currentStatus.color} mb-2 transition-colors duration-500`}
              >
                {currentStatus.title}
              </h3>
              <p className="text-sm text-gray-300">{currentStatus.sentences}</p>
            </div>
          </div>

          {/* Helper text */}
          <p className="text-xs text-gray-400 text-center">
            Hover over highlights for details
          </p>

          {/* CTA Button */}
          <a
            href="https://buy.stripe.com/00w14n1aAecK5jobCnfjG05"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] text-base"
          >
            Pre-Order for $75
          </a>
        </div>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA section */}
      <div className="pt-10 md:pt-14 pb-20 md:pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#303030] mb-4">
            Stop applying blindly
          </h2>
          <p className="text-lg text-[#86868b] mb-16 max-w-lg mx-auto leading-relaxed">
            Know what you&apos;re getting into before you waste your time.
            <br />
            Pre-order today and be the first to know when we launch.
          </p>

          {/* Cycling popup */}
          <CyclingPopup />
        </div>
      </div>

      {/* Giant brand text */}
      <div className="px-6 pb-2 select-none" aria-hidden="true">
        <div className="text-center">
          <span
            className="font-serif text-[#303030] leading-[0.85] tracking-tight block"
            style={{ fontSize: "clamp(80px, 14vw, 220px)" }}
          >
            Plain n&apos; Simple
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 py-20">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo + copyright */}
          <div className="flex items-center gap-2.5">
            <img
              src="/app_icon.png"
              alt="Plain n' Simple logo"
              className="w-5 h-5 rounded-[22%]"
            />
            <p className="text-xs text-[#86868b]">
              &copy; 2026 Plain n&apos; Simple by{" "}
              <a
                href="https://www.uxd.academy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#303030] transition-colors underline underline-offset-2 decoration-[#86868b]/30"
              >
                UXD Academy
              </a>
            </p>
          </div>

          {/* Center links */}
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-xs text-[#86868b] hover:text-[#303030] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="mailto:info@uxd.academy"
              className="text-xs text-[#86868b] hover:text-[#303030] transition-colors"
            >
              Give Feedback
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://twitter.com/uxdacademy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on X"
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#86868b] hover:text-[#303030] hover:bg-black/[0.04] transition-all duration-200"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com/company/uxd-academy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#86868b] hover:text-[#303030] hover:bg-black/[0.04] transition-all duration-200"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
