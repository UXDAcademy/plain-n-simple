"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How does Plain n' Simple work?",
    answer:
      "Our AI analyzes every sentence in a LinkedIn job posting and classifies it by clarity and honesty. Each sentence gets color-coded — green for genuine language, yellow for minor jargon, orange for vague or ambiguous requirements, and red for red flags or suspicious claims. You also get an overall honesty score from 0–100%.",
  },
  {
    question: "Is it really free?",
    answer:
      "Yes. The free tier gives you 5 translations per day with no signup required. You get full access to color-coded analysis, hover tooltips, and LinkedIn integration. No credit card, no trial period — free forever.",
  },
  {
    question: "What data do you collect?",
    answer:
      "Privacy comes first. On the free tier, all analysis is cached locally in your browser — nothing is sent to our servers. Premium users get server-side storage for saved analyses, but we never sell your data or share it with third parties. The extension does not work in incognito mode.",
  },
  {
    question: "Does it work outside LinkedIn?",
    answer:
      "Currently, Plain n' Simple is built specifically for LinkedIn job postings. We chose to focus on one platform and do it really well. Support for other job boards is on our roadmap.",
  },
  {
    question: "What do the colors mean?",
    answer:
      "Green means the language is clear, specific, and honest. Yellow flags minor corporate jargon that's mostly harmless. Orange highlights vague or ambiguous requirements that could mean anything. Red marks serious red flags — misleading claims, unrealistic expectations, or language that often signals a bad work environment.",
  },
  {
    question: "What is ghost job detection?",
    answer:
      "Ghost jobs are postings from companies that aren't actively hiring — they're collecting resumes, boosting their employer brand, or satisfying internal policies. Our premium ghost job detection analyzes posting patterns, company signals, and listing age to flag jobs that are likely not real.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. There are no contracts or lock-in periods. You can cancel your premium subscription at any time from your account settings, and you'll keep access through the end of your billing period.",
  },
]

function FAQItemComponent({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-[#E5E7EB] last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 sm:py-6 text-left group"
      >
        <span className="text-base sm:text-lg font-medium text-[#303030] pr-4 group-hover:text-[#1a1a1a] transition-colors">
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#86868b] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5 sm:pb-6" : "max-h-0"
        }`}
      >
        <p className="text-[#6B7280] leading-relaxed text-sm sm:text-base pr-8">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export function FAQSection() {
  return (
    <section className="py-20 lg:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-serif text-[#303030] mb-4">
            Questions & answers
          </h2>
          <p className="text-lg text-[#86868b]">
            Everything you need to know about Plain n&apos; Simple
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#E5E7EB] px-6 sm:px-8 shadow-sm">
          {faqs.map((faq, i) => (
            <FAQItemComponent key={i} item={faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
