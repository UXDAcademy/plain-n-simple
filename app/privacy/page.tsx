import { Navigation } from "@/components/navigation"

export default function PrivacyPage() {
  return (
    <main className="bg-[#FAFAF9] min-h-screen">
      <Navigation />

      <article className="max-w-2xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl sm:text-5xl font-serif text-[#303030] mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#86868b] mb-12">
          Last updated: February 2026
        </p>

        <div className="space-y-10 text-[#303030]">
          <section>
            <h2 className="text-lg font-semibold mb-3">Introduction</h2>
            <p className="text-sm text-[#424245] leading-relaxed">
              Plain n&apos; Simple (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
              &ldquo;us&rdquo;) is a Chrome extension built by UXD Academy that
              analyzes LinkedIn job postings. We are committed to protecting your
              privacy. This policy explains what data we collect (spoiler: almost
              none) and how we handle it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Data Collection</h2>
            <p className="text-sm text-[#424245] leading-relaxed mb-3">
              We do not collect, store, or transmit any personal data. The
              extension processes job posting content entirely within your
              browser. Specifically:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-[#424245] leading-relaxed ml-2">
              <li>
                We do not collect your name, email address, or any identifying
                information
              </li>
              <li>
                We do not track which job postings you view or analyze
              </li>
              <li>
                We do not store any job posting content on our servers
              </li>
              <li>
                We do not access your LinkedIn account credentials or profile
                data
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Data Storage</h2>
            <p className="text-sm text-[#424245] leading-relaxed">
              All analysis happens locally in your browser. We do not operate
              servers that store user data. Your translation history and
              preferences are stored only in your browser&apos;s local storage
              and are never sent to us or any third party.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">
              Third-Party Services
            </h2>
            <p className="text-sm text-[#424245] leading-relaxed">
              The extension may use AI services to analyze job posting text. When
              this occurs, only the job posting text is sent for analysis &mdash;
              never your personal information. We do not share any data with
              advertisers or data brokers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Cookies</h2>
            <p className="text-sm text-[#424245] leading-relaxed">
              Plain n&apos; Simple does not use cookies. Our marketing website
              uses Vercel Analytics, which collects anonymous, aggregated usage
              data with no personally identifiable information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">
              Changes to This Policy
            </h2>
            <p className="text-sm text-[#424245] leading-relaxed">
              We may update this privacy policy from time to time. Any changes
              will be posted on this page with an updated revision date. Your
              continued use of the extension after any changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
            <p className="text-sm text-[#424245] leading-relaxed">
              If you have any questions about this privacy policy or our
              practices, please contact us at{" "}
              <a
                href="mailto:info@uxd.academy"
                className="text-[#303030] underline underline-offset-2 decoration-[#303030]/20 hover:decoration-[#F59E0B]/40 hover:text-[#F59E0B] transition-colors"
              >
                info@uxd.academy
              </a>
              .
            </p>
          </section>
        </div>
      </article>

      {/* Simple footer for privacy page */}
      <div className="border-t border-black/[0.04] px-6 py-6">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
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
                className="hover:text-[#303030] transition-colors"
              >
                UXD Academy
              </a>
            </p>
          </div>
          <a
            href="/"
            className="text-xs text-[#86868b] hover:text-[#303030] transition-colors"
          >
            &larr; Back to home
          </a>
        </div>
      </div>
    </main>
  )
}
