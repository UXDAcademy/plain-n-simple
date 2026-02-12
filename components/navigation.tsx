"use client"

import { useState, useEffect } from "react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAFAF9]/80 backdrop-blur-xl border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="/app_icon.png"
            alt="Plain n' Simple logo"
            className="w-8 h-8 rounded-[22%]"
          />
          <span className="text-[#303030] font-semibold text-lg tracking-tight hidden sm:block">
            Plain n&apos; Simple
          </span>
        </a>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#demo"
            className="text-[#86868b] hover:text-[#303030] text-sm transition-colors duration-200"
          >
            See It Work
          </a>
          <a
            href="#features"
            className="text-[#86868b] hover:text-[#303030] text-sm transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-[#86868b] hover:text-[#303030] text-sm transition-colors duration-200"
          >
            Pre-Order
          </a>
        </div>

        {/* CTA */}
        <a
          href="#pricing"
          className="bg-[#303030] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#333] transition-all duration-200 active:scale-[0.97]"
        >
          Get Early Access
        </a>
      </nav>
    </header>
  )
}
