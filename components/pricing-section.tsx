"use client"

import { Check, Chrome } from "lucide-react"

const freeTier = {
  name: "Free Forever",
  price: "$0",
  period: "/month",
  description: "5 translations/day",
  features: [
    "LinkedIn integration",
    "Color-coded analysis",
    "Hover tooltips",
    "Privacy-first",
    "No signup required",
  ],
  cta: "Add to Chrome—Free",
  ctaHref: "https://chrome.google.com/webstore",
  highlighted: false,
}

const premiumTier = {
  name: "Premium",
  price: "$4.99",
  period: "/month",
  description: "Unlimited translations",
  features: [
    "Everything in Free",
    "Unlimited daily use",
    "Priority support",
    "Advanced filters",
    "Export reports",
    "Save job analyses",
  ],
  cta: "Upgrade to Premium",
  ctaHref: "#",
  highlighted: true,
}

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-20 lg:py-32 px-6 lg:px-10 bg-[#FFF9F2]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-medium text-[#303030] mb-4">
            Choose your plan
          </h2>
          <p className="text-lg text-[#6B7280]">
            Free forever or unlimited power—you decide
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Free Tier */}
          <div className="bg-white rounded-3xl p-8 border border-[#E5E7EB] shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-serif font-bold text-[#303030] mb-4">
              {freeTier.name}
            </h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-bold text-[#303030]">
                {freeTier.price}
              </span>
              <span className="text-[#6B7280]">{freeTier.period}</span>
            </div>
            <p className="text-[#6B7280] mb-6">{freeTier.description}</p>

            <ul className="space-y-3 mb-8">
              {freeTier.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-[#303030]">
                  <Check className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={freeTier.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-blue-500 text-white py-4 rounded-xl font-medium hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20 hover:bg-blue-600 transition-all duration-200 active:scale-[0.98]"
            >
              <Chrome className="w-5 h-5" />
              {freeTier.cta}
            </a>
          </div>

          {/* Premium Tier */}
          <div className="relative bg-white rounded-3xl p-8 border-[3px] border-[#E5C899] shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
            {/* Badge */}
            <div className="absolute -top-3 right-6 bg-[#E5C899] text-[#303030] text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#303030] mb-4">
              {premiumTier.name}
            </h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-bold text-[#303030]">
                {premiumTier.price}
              </span>
              <span className="text-[#6B7280]">{premiumTier.period}</span>
            </div>
            <p className="text-[#6B7280] mb-6">{premiumTier.description}</p>

            <ul className="space-y-3 mb-8">
              {premiumTier.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-[#303030]">
                  <Check className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={premiumTier.ctaHref}
              className="flex items-center justify-center gap-2 w-full bg-[#E5C899] text-[#303030] py-4 rounded-xl font-medium hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#D4B888] transition-all duration-200 active:scale-[0.98]"
            >
              {premiumTier.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
