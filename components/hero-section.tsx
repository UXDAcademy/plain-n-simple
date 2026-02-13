"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-16 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Pill badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#303030]/[0.04] border border-[#303030]/[0.06] mb-18 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          <span className="text-sm text-[#86868b]">Chrome Extension for LinkedIn</span>
        </div>

        {/* Headline */}
        <h1
          className={`text-5xl sm:text-6xl lg:text-[88px] font-serif text-[#303030] leading-[1.05] tracking-tight mb-6 transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Job postings in{" "}
          <span className="bg-[#F59E0B]/25 px-2 -mx-1 rounded">
            plain English
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg sm:text-xl text-[#86868b] max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          See what LinkedIn job descriptions really mean before you waste time
          applying. AI-powered analysis that cuts through corporate jargon.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 items-center justify-center mb-12 transition-all duration-700 delay-[450ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="https://buy.stripe.com/00w14n1aAecK5jobCnfjG05"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-8 py-3.5 rounded-lg text-base font-medium hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 active:scale-[0.97]"
          >
            Pre-Order Today
          </a>
          <a
            href="#demo"
            className="text-[#303030] px-8 py-3.5 rounded-lg text-base font-medium border border-[#303030]/10 hover:border-[#303030]/20 hover:bg-[#303030]/[0.02] transition-all duration-200"
          >
            See it in action
          </a>
        </div>

        {/* Social proof line */}
        <div
          className={`text-center text-sm text-[#86868b] transition-all duration-700 delay-[600ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span>Built by{" "}
            <a
              href="https://www.uxd.academy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#303030] hover:text-[#F59E0B] transition-colors underline underline-offset-2 decoration-[#303030]/20 hover:decoration-[#F59E0B]/40"
            >
              UXD Academy
            </a>
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-24">
          <div className="w-6 h-10 rounded-full border-2 border-[#575757] flex items-start justify-center pt-2">
            <div className="w-1 h-2.5 rounded-full bg-[#575757] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
