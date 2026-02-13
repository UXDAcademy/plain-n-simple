"use client"

import React, { useState, useCallback, useEffect, useRef } from "react"
import { Loader2, Building2, MapPin } from "lucide-react"

type DemoState = "idle" | "loading" | "results"

interface TooltipData {
  type: "green" | "yellow" | "orange" | "red"
  phrase: string
  explanation: string
  label: string
}

const tooltipData: Record<string, TooltipData> = {
  green1: {
    type: "green",
    phrase: "Agentic AI team",
    explanation:
      "They're actually building AI agents. This is real, cutting-edge work — not just buzzword bingo.",
    label: "Clean language",
  },
  green2: {
    type: "green",
    phrase: "design and build scalable systems",
    explanation:
      "Standard software engineering work. They want you to build systems that can grow and handle more users over time.",
    label: "Clean language",
  },
  green3: {
    type: "green",
    phrase: "Our Agentic AI team is pioneering",
    explanation:
      "They're actually building AI agents. This is real, cutting-edge work — not just buzzword bingo.",
    label: "Clean language",
  },
  green4: {
    type: "green",
    phrase: "deliver intelligent, autonomous systems",
    explanation:
      "Clear goal statement. They want AI that works independently to help users and reduce manual work.",
    label: "Clean language",
  },
  green5: {
    type: "green",
    phrase: "Build and orchestrate AI agents end-to-end",
    explanation:
      "Actual technical work description. You'll design the full pipeline from task definition to deployment.",
    label: "Clean language",
  },
  green6: {
    type: "green",
    phrase: "Design the visual style, interface and interaction flow",
    explanation:
      "Standard UX/design work. Clear and honest description of responsibilities.",
    label: "Clean language",
  },
  green7: {
    type: "green",
    phrase: "Bachelor's degree in human computer interaction",
    explanation:
      "Standard education requirement with flexibility ('or equivalent experience'). Fair and reasonable.",
    label: "Clean language",
  },
  yellow1: {
    type: "yellow",
    phrase: "orchestrate agentic workflows",
    explanation:
      "You'll coordinate multiple AI agents to work together. Legitimate work, but they're using jargon instead of saying 'make AI tools talk to each other.'",
    label: "Minor issue",
  },
  yellow2: {
    type: "yellow",
    phrase: "B2B and B2C use cases",
    explanation:
      "They serve both businesses and consumers. Normal, but vague — ask which you'd focus on.",
    label: "Minor issue",
  },
  yellow3: {
    type: "yellow",
    phrase: "Clear communication and cross-functional collaboration",
    explanation:
      "You'll work with other teams. Normal and expected, but the phrase is corporate speak for 'lots of meetings.'",
    label: "Minor issue",
  },
  yellow4: {
    type: "yellow",
    phrase: "Develop conceptual diagrams, wireframes, visual mockups",
    explanation:
      "Standard design deliverables. Nothing wrong here, just corporate-speak for 'do design work.'",
    label: "Minor issue",
  },
  yellow5: {
    type: "yellow",
    phrase: "Ability to adopt and contribute to design systems",
    explanation:
      "They have a design system you'll need to follow. Reasonable, but may limit creative freedom.",
    label: "Minor issue",
  },
  orange1: {
    type: "orange",
    phrase: "travel to the corporate HQ from time to time",
    explanation:
      "Vague requirement alert. 'From time to time' could mean monthly, quarterly, or whenever they want. Ask for specifics in the interview.",
    label: "Moderate concern",
  },
  orange2: {
    type: "orange",
    phrase: "5+ years of experience",
    explanation:
      "Standard experience requirement, but they may be flexible. If you have 3-4 years and strong skills, still apply.",
    label: "Moderate concern",
  },
  red1: {
    type: "red",
    phrase: "leveraging AI coding assistants...enterprise-grade solutions",
    explanation:
      "They expect you to use AI tools like GitHub Copilot to work faster. Sounds innovative but might mean unrealistic timelines. Ask about deadlines.",
    label: "Major red flag",
  },
  red2: {
    type: "red",
    phrase: "developing and automating evals to rigorously test",
    explanation:
      "Testing AI is genuinely complex, but 'rigorously' is doing heavy lifting here. Expect long debugging sessions and moving goalposts.",
    label: "Major red flag",
  },
  red3: {
    type: "red",
    phrase:
      "Ensure you do not over-engineer solutions. Manage coding agents.",
    explanation:
      "Translation: They want quick and dirty solutions. This often means technical debt, no time for proper architecture, and rush jobs.",
    label: "Major red flag",
  },
  red4: {
    type: "red",
    phrase:
      "accessibility standards, including WCAG 2.0+ company compliance",
    explanation:
      "Accessibility is important, but listing it in 'minimum qualifications' when it's rarely the core job suggests they're checking boxes for compliance.",
    label: "Major red flag",
  },
}

export function InteractiveDemo() {
  const [state, setState] = useState<DemoState>("idle")
  const [translationsLeft, setTranslationsLeft] = useState(5)
  const [showHighlights, setShowHighlights] = useState(false)
  const [score, setScore] = useState(0)
  const [activeDataKey, setActiveDataKey] = useState<string | null>(null)
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({})
  const sectionRef = useRef<HTMLDivElement>(null)
  const jobContentRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const dismissTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
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

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current)
    }
  }, [])

  // Dismiss tooltip on scroll or resize (fixed tooltip won't follow scroll)
  useEffect(() => {
    const dismiss = () => setActiveDataKey(null)
    window.addEventListener("scroll", dismiss, true)
    window.addEventListener("resize", dismiss)
    return () => {
      window.removeEventListener("scroll", dismiss, true)
      window.removeEventListener("resize", dismiss)
    }
  }, [])

  const computeTooltipPosition = useCallback((spanEl: HTMLElement) => {
    const container = jobContentRef.current
    if (!container) return

    const spanRect = spanEl.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    const estimatedTooltipHeight = 200

    // Left: always aligned to the card content's left padding edge
    const paddingLeft = parseFloat(getComputedStyle(container).paddingLeft) || 0
    const left = containerRect.left + paddingLeft

    // Check if tooltip would overflow below viewport
    if (spanRect.bottom + estimatedTooltipHeight + 12 > viewportHeight) {
      // Show above the sentence
      setTooltipStyle({
        position: "fixed",
        left: `${left}px`,
        top: `${spanRect.top - 8}px`,
        transform: "translateY(-100%)",
        width: "min(320px, calc(100vw - 48px))",
        zIndex: 9999,
      })
    } else {
      // Show below the sentence
      setTooltipStyle({
        position: "fixed",
        left: `${left}px`,
        top: `${spanRect.bottom + 8}px`,
        width: "min(320px, calc(100vw - 48px))",
        zIndex: 9999,
      })
    }
  }, [])

  const handleSpanMouseEnter = useCallback(
    (dataKey: string, spanEl: HTMLElement) => {
      // Cancel any pending dismiss
      if (dismissTimerRef.current) {
        clearTimeout(dismissTimerRef.current)
        dismissTimerRef.current = null
      }
      setActiveDataKey(dataKey)
      computeTooltipPosition(spanEl)
    },
    [computeTooltipPosition]
  )

  const handleSpanMouseLeave = useCallback(() => {
    // Small delay so user can move cursor to the tooltip
    dismissTimerRef.current = setTimeout(() => {
      setActiveDataKey(null)
    }, 150)
  }, [])

  const handleTooltipMouseEnter = useCallback(() => {
    // Cancel dismiss when cursor enters tooltip
    if (dismissTimerRef.current) {
      clearTimeout(dismissTimerRef.current)
      dismissTimerRef.current = null
    }
  }, [])

  const handleTooltipMouseLeave = useCallback(() => {
    // Dismiss when cursor leaves tooltip
    dismissTimerRef.current = setTimeout(() => {
      setActiveDataKey(null)
    }, 100)
  }, [])

  const handleTranslate = useCallback(() => {
    if (state === "loading") return
    setState("loading")
    setShowHighlights(false)
    setScore(0)
    setActiveDataKey(null)

    setTimeout(() => {
      setTranslationsLeft((prev) => Math.max(0, prev - 1))
    }, 500)

    setTimeout(() => {
      setState("results")
      setShowHighlights(true)
      let currentScore = 0
      const targetScore = 72
      const interval = setInterval(() => {
        currentScore += 3
        if (currentScore >= targetScore) {
          setScore(targetScore)
          clearInterval(interval)
        } else {
          setScore(currentScore)
        }
      }, 30)
    }, 2500)
  }, [state])

  const handleReset = useCallback(() => {
    setState("idle")
    setShowHighlights(false)
    setScore(0)
    setActiveDataKey(null)
  }, [])

  const getHighlightColor = (type: string) => {
    switch (type) {
      case "green":
        return "bg-green-400/20 decoration-green-400/40"
      case "yellow":
        return "bg-yellow-400/20 decoration-yellow-400/40"
      case "orange":
        return "bg-orange-400/20 decoration-orange-400/40"
      case "red":
        return "bg-red-400/20 decoration-red-400/40"
      default:
        return ""
    }
  }

  const HighlightSpan = ({
    dataKey,
    children,
  }: {
    dataKey: string
    children: React.ReactNode
  }) => {
    const data = tooltipData[dataKey]
    if (!showHighlights || !data) return <>{children}</>

    return (
      <span
        className={`${getHighlightColor(data.type)} px-0.5 rounded cursor-help underline underline-offset-2 decoration-2 transition-all duration-500 hover:brightness-90`}
        onMouseEnter={(e) => handleSpanMouseEnter(dataKey, e.currentTarget)}
        onMouseLeave={handleSpanMouseLeave}
      >
        {children}
      </span>
    )
  }

  const activeTooltipData = activeDataKey ? tooltipData[activeDataKey] : null

  return (
    <section
      id="demo"
      ref={sectionRef}
      className="relative py-24 lg:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-serif text-[#303030] mb-4">
            Try it yourself
          </h2>
          <p className="text-lg text-[#86868b] max-w-xl mx-auto">
            Click &ldquo;Translate This Job&rdquo;
          </p>
        </div>

        {/* Demo container */}
        <div
          className={`flex flex-col lg:flex-row gap-6 items-start justify-center transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* LEFT: LinkedIn Job Card - FULL */}
          <div
            className={`flex-1 max-w-[800px] bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-visible transition-all duration-300 ${
              state === "loading" ? "animate-pulse" : ""
            }`}
          >
            {/* Job Header */}
            <div className="p-6 lg:p-8 border-b border-gray-100">
              <div className="flex gap-4 items-start">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 text-xl lg:text-2xl mb-1">
                    Full Stack AI Engineer
                  </h3>
                  <p className="text-gray-600">RealPage, Inc.</p>
                  <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4" />
                    Richardson, TX (Remote)
                  </p>
                </div>
              </div>
            </div>

            {/* Job Description - FULL CONTENT */}
            <div ref={jobContentRef} className="p-6 lg:p-8 relative text-sm text-gray-700 leading-relaxed space-y-6">
              {/* Overview Section */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Overview
                </h4>
                <p className="mb-3">
                  <HighlightSpan dataKey="green1">
                    We are looking for a Full Stack AI Engineer to join our
                    Agentic AI team.
                  </HighlightSpan>{" "}
                  <HighlightSpan dataKey="green2">
                    In this role, you will design and build scalable systems that
                    power conversational AI agents
                  </HighlightSpan>{" "}
                  <HighlightSpan dataKey="yellow1">
                    and orchestrate agentic workflows.
                  </HighlightSpan>
                </p>

                <p className="mb-3">
                  <HighlightSpan dataKey="yellow1">
                    {
                      "You'll work across the stack—front-end, back-end, and cloud—while"
                    }
                  </HighlightSpan>{" "}
                  <HighlightSpan dataKey="red1">
                    leveraging AI coding assistants and modern agentic frameworks
                    to deliver enterprise-grade solutions.
                  </HighlightSpan>{" "}
                  <HighlightSpan dataKey="green2">
                    A key part of your responsibilities will include
                  </HighlightSpan>{" "}
                  <HighlightSpan dataKey="red2">
                    developing and automating evals to rigorously test Agentic AI
                    applications for performance, reliability, and safety.
                  </HighlightSpan>
                </p>
              </div>

              {/* About the Team Section */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  About The Team
                </h4>
                <p className="mb-3">
                  <HighlightSpan dataKey="green3">
                    Our Agentic AI team is pioneering agentic AI development in
                    the prop tech domain.
                  </HighlightSpan>{" "}
                  <HighlightSpan dataKey="yellow2">
                    We build extensive Agentic AI solutions spanning across
                    multiple B2B and B2C use cases.
                  </HighlightSpan>{" "}
                  <HighlightSpan dataKey="green4">
                    Our mission is to deliver intelligent, autonomous systems
                    that improve engagement, reduce operational overhead, and
                    ensure compliance and quality.
                  </HighlightSpan>
                </p>

                <p className="mb-3">
                  <HighlightSpan dataKey="orange1">
                    This team has been coming to our HQ one week out of the month
                    - it will be expected that you will travel to the corporate HQ
                    from time to time.
                  </HighlightSpan>
                </p>
              </div>

              {/* Responsibilities Section */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Responsibilities
                </h4>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <HighlightSpan dataKey="green5">
                      Build and orchestrate AI agents end-to-end: design tasks,
                      tools, memory, planning, and guardrails; implement agent
                      workflows using modern agentic frameworks (e.g., LangChain,
                      Agents SDKs).
                    </HighlightSpan>
                  </li>
                  <li>
                    <HighlightSpan dataKey="yellow3">
                      Clear communication and cross-functional collaboration with
                      Product, QA, Support, Design and our Customers to deliver
                      outcomes; communicate technical decisions and trade-offs
                      clearly to both technical and non-technical stakeholders.
                    </HighlightSpan>
                  </li>
                  <li>
                    <HighlightSpan dataKey="red3">
                      Develop with AI coding assistants (e.g., Copilot-style
                      tools) to accelerate delivery while ensuring output meets
                      enterprise design, coding, security, reliability,
                      performance, and compliance standards. Ensure you do not
                      over-engineer solutions. Manage coding agents.
                    </HighlightSpan>
                  </li>
                  <li>
                    <HighlightSpan dataKey="green6">
                      Design the visual style, interface and interaction flow of
                      applications and experiences that adhere to design standards
                      and the patterns of a design system.
                    </HighlightSpan>
                  </li>
                  <li>
                    <HighlightSpan dataKey="yellow4">
                      Develop conceptual diagrams, wireframes, visual mockups and
                      prototypes to articulate your vision for the desired
                      outcomes and develop solutions that clearly formulate and
                      test hypotheses.
                    </HighlightSpan>
                  </li>
                </ul>
              </div>

              {/* Qualifications Section */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Minimum Qualifications
                </h4>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <HighlightSpan dataKey="green7">
                      {
                        "Bachelor's degree in human computer interaction, human factors engineering, computer science, visual design, library sciences or other related discipline, or equivalent experience or training."
                      }
                    </HighlightSpan>
                  </li>
                  <li>
                    <HighlightSpan dataKey="orange2">
                      5+ years of experience as a UX practitioner with a
                      background in user experience design, interaction design or
                      similar.
                    </HighlightSpan>
                  </li>
                  <li>
                    <HighlightSpan dataKey="red4">
                      Experience with accessibility standards, including WCAG 2.0+
                      company compliance, localization and inclusive design.
                    </HighlightSpan>
                  </li>
                  <li>
                    <HighlightSpan dataKey="yellow5">
                      Ability to adopt and contribute to design systems and
                      standardization across the enterprise.
                    </HighlightSpan>
                  </li>
                </ul>
              </div>

              {/* Loading shimmer overlay */}
              {state === "loading" && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer" />
              )}
            </div>
          </div>

          {/* RIGHT: Plain n' Simple Popup - STICKY */}
          <div className="w-full lg:w-[340px] flex-shrink-0 lg:sticky lg:top-24">
            <div className="bg-[#303030] rounded-2xl shadow-2xl shadow-black/10 text-white overflow-hidden">
              {/* Popup Header */}
              <div className="px-5 py-3.5 border-b border-white/[0.06] flex items-center gap-2.5">
                <img
                  src="/app_icon.png"
                  alt="Plain n' Simple logo"
                  className="w-5 h-5 rounded"
                />
                <span className="text-sm font-medium text-white/90">
                  Plain n&apos; Simple
                </span>
              </div>

              {/* Popup Content */}
              <div className="p-5 space-y-5">
                {/* Translations counter */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-white/40">
                      {translationsLeft} translations left
                    </p>
                    <p className="text-xs text-white/40">Free tier</p>
                  </div>
                  <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all duration-500"
                      style={{
                        width: `${(translationsLeft / 5) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                {/* State-specific content */}
                {state === "idle" && (
                  <button
                    onClick={handleTranslate}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] animate-pulse-glow text-base"
                  >
                    Translate This Job
                  </button>
                )}

                {state === "loading" && (
                  <div className="text-center py-1">
                    <div className="flex items-center justify-center gap-2 text-white/50 mb-4">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-sm">
                        Reading between the lines...
                      </span>
                    </div>
                    <div
                      className="w-full bg-white/[0.06] h-[52px] flex items-center justify-center rounded-lg"
                    >
                      <span className="text-sm text-white/30 font-medium">
                        Translating...
                      </span>
                    </div>
                  </div>
                )}

                {state === "results" && (
                  <div className="space-y-4">
                    {/* Score card */}
                    <div className="bg-white/[0.04] rounded-xl p-5 border border-yellow-500/20">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-5xl">{"🤔"}</span>
                        <span className="text-4xl font-bold text-yellow-400 tabular-nums">
                          {score}%
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                        Mixed Signals
                      </h3>
                      <p className="text-sm text-gray-300">
                        14 of 36 sentences are clear &amp; honest
                      </p>
                    </div>

                    <p className="text-xs text-gray-400 text-center">
                      Hover over highlights for details
                    </p>

                    <button
                      onClick={handleReset}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg transition-all duration-200 active:scale-[0.98] text-base"
                    >
                      Translate Again
                    </button>
                  </div>
                )}

                {/* Upgrade link */}
                <button className="w-full text-gray-400 hover:text-gray-300 text-sm transition-colors">
                  Upgrade to Premium
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed tooltip — rendered outside card to prevent layout shift */}
        {activeTooltipData && (
          <div
            ref={tooltipRef}
            style={tooltipStyle}
            onMouseEnter={handleTooltipMouseEnter}
            onMouseLeave={handleTooltipMouseLeave}
          >
            <div className="bg-[#303030] text-white p-4 rounded-xl shadow-2xl border border-white/10">
              {/* Phrase */}
              <div className="text-[10px] uppercase tracking-wider mb-1.5 text-white/30">
                Phrase Detected
              </div>
              <div className="text-sm font-medium mb-3 text-white/90 leading-snug">
                &ldquo;{activeTooltipData.phrase}&rdquo;
              </div>

              {/* Explanation */}
              <div className="text-[10px] uppercase tracking-wider mb-1.5 text-white/30">
                Real Talk
              </div>
              <div className="text-sm mb-3 text-white/70 leading-relaxed">
                {activeTooltipData.explanation}
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 text-xs pt-2 border-t border-white/[0.06]">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    activeTooltipData.type === "green"
                      ? "bg-green-400"
                      : activeTooltipData.type === "yellow"
                      ? "bg-yellow-400"
                      : activeTooltipData.type === "orange"
                      ? "bg-orange-400"
                      : "bg-red-400"
                  }`}
                />
                <span className="text-white/50">{activeTooltipData.label}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 24px 4px rgba(59, 130, 246, 0.15);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }
      `}</style>
    </section>
  )
}
