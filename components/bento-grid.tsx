"use client"

import { useEffect, useState, useRef } from "react"
import {
  Sparkles,
  Palette,
  MousePointerClick,
  Zap,
  Eye,
} from "lucide-react"

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true)
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Analysis",
    description:
      "Every sentence analyzed by AI trained on thousands of job postings. Instantly know what's real and what's fluff.",
    span: "lg:col-span-2",
    gradient: "from-[#F59E0B]/5 to-transparent",
    iconBg: "bg-[#F59E0B]/10",
    iconColor: "text-[#F59E0B]",
  },
  {
    icon: Palette,
    title: "Color-Coded Clarity",
    description:
      "Green means genuine. Yellow is jargon. Orange is vague. Red is a red flag. See the truth at a glance.",
    span: "lg:col-span-1",
    gradient: "from-green-500/5 to-transparent",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-500",
  },
  {
    icon: MousePointerClick,
    title: "Hover for Details",
    description:
      "Hover any highlighted phrase to see exactly what it means in plain English — with context and advice.",
    span: "lg:col-span-1",
    gradient: "from-blue-500/5 to-transparent",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Zap,
    title: "One-Click Setup",
    description:
      "Install the extension, visit LinkedIn, and click translate. No account needed. Works in seconds.",
    span: "lg:col-span-1",
    gradient: "from-purple-500/5 to-transparent",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
  {
    icon: Eye,
    title: "Works on Any Job Posting",
    description:
      "Designed specifically for LinkedIn job pages. Detects and analyzes every section of the posting automatically.",
    span: "lg:col-span-1",
    gradient: "from-cyan-500/5 to-transparent",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
  },
]

export function BentoGrid() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section
      id="features"
      className="py-24 lg:py-32 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          ref={ref}
        >
          <h2 className="text-4xl sm:text-5xl font-serif text-[#303030] mb-4">
            See through the noise
          </h2>
          <p className="text-lg text-[#86868b] max-w-xl mx-auto">
            Everything you need to make smarter job decisions, built into one
            simple extension
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className={`${feature.span} group relative bg-white rounded-2xl p-7 border border-[#E5E7EB]/60 hover:border-[#E5E7EB] hover:shadow-lg hover:shadow-black/[0.02] hover:-translate-y-0.5 transition-all duration-500 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80 + 200}ms` }}
              >
                {/* Subtle gradient bg */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-10 h-10 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-base font-semibold text-[#303030] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#86868b] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
