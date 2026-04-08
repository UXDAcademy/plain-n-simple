"use client"

import { useState } from "react"
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!email.trim()) return

    setStatus("loading")
    setErrorMessage("")

    try {
      // TODO: Connect to your email service (Beehiiv, ConvertKit, Supabase, etc.)
      // For now, simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 800))
      setStatus("success")
      setEmail("")
    } catch {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <section className="py-20 lg:py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#303030]/5 rounded-full px-4 py-1.5 mb-6">
          <Mail className="w-4 h-4 text-[#303030]" />
          <span className="text-xs font-medium text-[#303030] uppercase tracking-wide">
            Weekly newsletter
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-serif text-[#303030] mb-4">
          The Honesty Report
        </h2>
        <p className="text-lg text-[#86868b] mb-10 max-w-lg mx-auto leading-relaxed">
          The worst job postings of the week, decoded. Plus tips to spot red
          flags before you waste your time applying.
        </p>

        {status === "success" ? (
          <div className="flex items-center justify-center gap-3 bg-[#10B981]/10 text-[#059669] rounded-2xl py-5 px-6">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <p className="font-medium">
              You&apos;re in. Check your inbox for a welcome email.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full bg-white border border-[#E5E7EB] rounded-xl py-4 px-5 text-[#303030] placeholder:text-[#86868b]/60 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all text-base"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex items-center justify-center gap-2 bg-blue-500 text-white py-4 px-7 rounded-xl font-semibold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none text-base whitespace-nowrap"
            >
              {status === "loading" ? (
                "Subscribing..."
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-500 text-sm mt-3">{errorMessage}</p>
        )}

        <p className="text-xs text-[#86868b] mt-4">
          Free, weekly, no spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
