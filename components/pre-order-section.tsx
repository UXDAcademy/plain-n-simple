"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Zap } from "lucide-react"

interface FeatureItem {
  label: string
  comingSoon?: boolean
}

function FeatureRow({ feature }: { feature: FeatureItem }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0">
        <Check className="w-3 h-3 text-[#10B981]" />
      </div>
      <span className="text-sm text-[#303030]">
        {feature.label}
        {feature.comingSoon && (
          <span className="ml-1.5 text-[10px] font-medium text-[#F59E0B] bg-[#F59E0B]/10 px-1.5 py-0.5 rounded-full uppercase tracking-wide">
            Coming soon
          </span>
        )}
      </span>
    </div>
  )
}

const freeTierFeatures: FeatureItem[] = [
  { label: "5 translations" },
  { label: "Color-coded analysis" },
  { label: "LinkedIn integration" },
  { label: "Hover tooltips with explanations" },
]

const paidFeatures: FeatureItem[] = [
  { label: "Unlimited translations" },
  { label: "AI-powered jargon detection" },
  { label: "Color-coded analysis" },
  { label: "LinkedIn integration" },
  { label: "Resume-to-Job match", comingSoon: true },
  { label: "Ghost job detection", comingSoon: true },
  { label: "Compare job analyses", comingSoon: true },
]

export function PreOrderSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-24 lg:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 mb-6">
            <Zap className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span className="text-sm font-medium text-[#92400E]">
              Early Access Pricing
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#303030] mb-4">
            Choose your plan
          </h2>
          <p className="text-lg text-[#86868b] max-w-xl mx-auto">
            Start free or lock in early access pricing before we launch
          </p>
        </div>

        {/* Pricing cards grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* ─── FREE TIER ─── */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E5E7EB] shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#303030] mb-4">Free</h3>
            <div className="mb-1">
              <span className="text-5xl font-bold text-[#303030] tracking-tight">
                $0
              </span>
            </div>
            <p className="text-sm text-[#86868b] mb-6">Upgrade to premium at anytime</p>

            <div className="w-full h-px bg-[#E5E7EB] mb-6" />

            <div className="space-y-3 mb-8">
              {freeTierFeatures.map((feature, i) => (
                <FeatureRow key={i} feature={feature} />
              ))}
            </div>

            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-4 rounded-lg text-sm font-semibold border border-[#E5E7EB] text-[#303030] hover:bg-[#F3F4F6] hover:border-[#D1D5DB] transition-all duration-200 active:scale-[0.98]"
            >
              Coming Soon
            </a>
          </div>

          {/* ─── MONTHLY PREMIUM ─── */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E5E7EB] shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#303030] mb-4">
              Monthly
            </h3>
            <div className="mb-1">
              <span className="text-5xl font-bold text-[#303030] tracking-tight">
                $15
              </span>
              <span className="text-[#86868b] ml-1">/mo</span>
            </div>
            <p className="text-sm text-[#86868b] mb-6">Cancel anytime</p>

            <div className="w-full h-px bg-[#E5E7EB] mb-6" />

            <div className="space-y-3 mb-8">
              {paidFeatures.map((feature, i) => {
                // Monthly tier: swap "Unlimited translations" for "30 translations per month"
                const displayFeature =
                  feature.label === "Unlimited translations"
                    ? { ...feature, label: "30 translations per month" }
                    : feature
                return <FeatureRow key={i} feature={displayFeature} />
              })}
            </div>

            <a
              href="#"
              className="block w-full text-center py-4 rounded-lg text-sm font-semibold border border-[#E5E7EB] text-[#303030] hover:bg-[#F3F4F6] hover:border-[#D1D5DB] transition-all duration-200 active:scale-[0.98]"
            >
              Coming Soon
            </a>
            <p className="text-xs text-[#86868b] text-center mt-3">
              Secure checkout via Stripe
            </p>
          </div>

          {/* ─── YEARLY PREMIUM (BEAM BORDER) ─── */}
          <div className="relative rounded-3xl p-[2px] hover:-translate-y-0.5 transition-all duration-300 beam-card">
            {/* Animated beam border */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="beam-border absolute inset-0 rounded-3xl" />
            </div>

            {/* Card content */}
            <div className="relative bg-white rounded-[22px] p-7 sm:p-8 shadow-lg">
              {/* Header row with Annual + Pre-Order Discount label */}
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-semibold text-[#303030]">
                  Annual
                </h3>
                <span className="text-[10px] font-semibold text-[#92400E] bg-[#F59E0B]/10 px-2.5 py-1 rounded-full uppercase tracking-wide border border-[#F59E0B]/20">
                  Pre-Order Discount
                </span>
              </div>

              <div className="mb-1">
                <span className="text-5xl font-bold text-[#303030] tracking-tight">
                  $6.25
                </span>
                <span className="text-[#86868b] ml-1">/mo</span>
              </div>
              <p className="text-sm text-[#86868b] mb-6">
                Billed annually
              </p>

              <div className="w-full h-px bg-[#E5E7EB] mb-6" />

              <div className="space-y-3 mb-8">
                {paidFeatures.map((feature, i) => (
                  <FeatureRow key={i} feature={feature} />
                ))}
              </div>

              <a
                href="https://buy.stripe.com/00w14n1aAecK5jobCnfjG05"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 rounded-lg text-sm font-semibold bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 active:scale-[0.98]"
              >
                Pre-Order for $75{" "}
                <span className="text-white/40 line-through font-normal ml-1">
                  $120
                </span>
              </a>
              <p className="text-xs text-[#86868b] text-center mt-3">
                Secure checkout via Stripe. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .beam-card {
          background: #E5E7EB;
        }
        .beam-border {
          background: conic-gradient(
            from var(--beam-angle, 0deg) at 50% 50%,
            transparent 0deg,
            transparent 260deg,
            #3B82F6 280deg,
            #60A5FA 300deg,
            #3B82F6 320deg,
            transparent 340deg,
            transparent 360deg
          );
          animation: beam-rotate 4s linear infinite;
        }
        @keyframes beam-rotate {
          0% {
            --beam-angle: 0deg;
          }
          100% {
            --beam-angle: 360deg;
          }
        }
        @property --beam-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
      `}</style>
    </section>
  )
}
