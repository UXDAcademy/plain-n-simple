import { Navigation } from "@/components/navigation"

export default function PrivacyPage() {
  return (
    <main className="bg-[#FFF9F2] min-h-screen">
      <Navigation />

      <article className="max-w-2xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl sm:text-5xl font-serif text-[#303030] mb-12">
          Privacy Policy
        </h1>

        <div className="space-y-10 text-[#303030]">
          <section>
            <h2 className="text-lg font-semibold mb-3">Introduction</h2>
            <p className="text-sm text-[#424245] leading-relaxed">
              Plain n&apos; Simple (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
              &ldquo;us&rdquo;) is a Chrome extension built by UXD Academy that
              analyzes LinkedIn job postings. We are committed to protecting your
              privacy. This policy explains what data we collect and how we
              handle it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">What Data We Collect</h2>

            <h3 className="text-sm font-semibold text-[#303030] mb-2">
              Job Description Text
            </h3>
            <p className="text-sm text-[#424245] leading-relaxed mb-4">
              When you activate the extension on a LinkedIn job posting, the
              text content of the job description is sent to our analysis service
              for processing.
            </p>

            <h3 className="text-sm font-semibold text-[#303030] mb-2">
              Job Metadata (Signed-In Users)
            </h3>
            <p className="text-sm text-[#424245] leading-relaxed mb-3">
              When you are signed in, the extension collects the following from
              the LinkedIn job page:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-[#424245] leading-relaxed ml-2 mb-3">
              <li>Job title, company name, location, and salary range</li>
              <li>Posted date, applicant count, and actively hiring status</li>
              <li>The full job description text</li>
              <li>
                Doublespeak analysis results (flagged phrases, severity scores,
                translations)
              </li>
            </ul>
            <p className="text-sm text-[#424245] leading-relaxed mb-4">
              This data is stored in our database so you can view your
              translation history, get resume fit scores, and detect ghost job
              postings in the companion web app.
            </p>

            <h3 className="text-sm font-semibold text-[#303030] mb-2">
              Account Data
            </h3>
            <p className="text-sm text-[#424245] leading-relaxed mb-3">
              If you create an account, we store:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-[#424245] leading-relaxed ml-2 mb-4">
              <li>Your email address</li>
              <li>Authentication tokens (managed by Supabase Auth)</li>
              <li>Subscription status (managed by Stripe)</li>
            </ul>

            <p className="text-sm font-semibold text-[#303030] mb-3">
              We do NOT collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-[#424245] leading-relaxed ml-2">
              <li>Your LinkedIn profile data or credentials</li>
              <li>Your browsing history</li>
              <li>Your location</li>
              <li>
                Passwords (handled securely by Supabase Auth, never stored in
                plaintext)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">How We Use Your Data</h2>
            <p className="text-sm text-[#424245] leading-relaxed mb-3">
              Job descriptions are sent to our secure analysis service where
              they are:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm text-[#424245] leading-relaxed ml-2 mb-4">
              <li>Analyzed by AI to identify corporate jargon and buzzwords</li>
              <li>Translated into plain English explanations</li>
              <li>Returned to your browser for display</li>
            </ol>

            <p className="text-sm text-[#424245] leading-relaxed mb-3">
              For premium users, analysis results and job metadata are stored in
              our database (Supabase) to power:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-[#424245] leading-relaxed ml-2 mb-4">
              <li>Translation history in the companion web app</li>
              <li>Resume-to-job fit scoring</li>
              <li>Ghost job detection</li>
            </ul>

            <p className="text-sm text-[#424245] leading-relaxed mb-4">
              For free users (not signed in), analysis results are cached
              locally in your browser only and are never sent to our servers.
            </p>

            <p className="text-sm font-semibold text-[#303030] mb-3">
              We do NOT:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-[#424245] leading-relaxed ml-2">
              <li>
                Share your data with third parties for their own purposes
              </li>
              <li>Sell your data to anyone</li>
              <li>Use your data for advertising</li>
              <li>Track you across websites</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Payment Processing</h2>
            <p className="text-sm text-[#424245] leading-relaxed">
              Subscription payments are processed by Stripe. We do not store
              credit card numbers or payment details. Stripe handles all payment
              data according to their privacy policy. We only store your Stripe
              customer ID and subscription status to manage your account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Data Transmission</h2>
            <p className="text-sm text-[#424245] leading-relaxed mb-3">
              All data is transmitted securely using HTTPS encryption to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-[#424245] leading-relaxed ml-2">
              <li>
                Supabase (authentication, database storage, serverless
                functions)
              </li>
              <li>
                n8n.cloud (AI-powered job description analysis)
              </li>
              <li>Stripe (payment processing)</li>
              <li>
                Anthropic (resume parsing via Claude API &mdash; resume text
                only, no personal identifiers)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">
              Incognito/Private Browsing
            </h2>
            <p className="text-sm text-[#424245] leading-relaxed">
              The extension blocks all sensitive operations (analysis, sign-in,
              sign-up) in Incognito mode. No data is collected, transmitted, or
              cached in private browsing sessions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">
              Third-Party Services
            </h2>
            <p className="text-sm text-[#424245] leading-relaxed mb-3">
              We use the following services, each with their own privacy
              policies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-[#424245] leading-relaxed ml-2">
              <li>
                Supabase (authentication and database):{" "}
                <a
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#303030] underline underline-offset-2 decoration-[#303030]/20 hover:decoration-[#F59E0B]/40 hover:text-[#F59E0B] transition-colors"
                >
                  supabase.com/privacy
                </a>
              </li>
              <li>
                n8n.cloud (AI job analysis):{" "}
                <a
                  href="https://n8n.io/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#303030] underline underline-offset-2 decoration-[#303030]/20 hover:decoration-[#F59E0B]/40 hover:text-[#F59E0B] transition-colors"
                >
                  n8n.io/legal/privacy-policy
                </a>
              </li>
              <li>
                Stripe (payments):{" "}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#303030] underline underline-offset-2 decoration-[#303030]/20 hover:decoration-[#F59E0B]/40 hover:text-[#F59E0B] transition-colors"
                >
                  stripe.com/privacy
                </a>
              </li>
              <li>
                Anthropic (resume parsing):{" "}
                <a
                  href="https://www.anthropic.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#303030] underline underline-offset-2 decoration-[#303030]/20 hover:decoration-[#F59E0B]/40 hover:text-[#F59E0B] transition-colors"
                >
                  anthropic.com/privacy
                </a>
              </li>
            </ul>
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
            <h2 className="text-lg font-semibold mb-3">Data Retention</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-[#424245] leading-relaxed ml-2">
              <li>
                For anonymous users: Analysis results are cached in your browser
                for 24 hours, then automatically deleted. No data is stored on
                our servers.
              </li>
              <li>
                For signed-in users: Job data and analysis results are stored as
                long as your account is active. You can delete individual saved
                jobs at any time through the companion web app.
              </li>
              <li>
                Authentication tokens are stored locally in your browser and can
                be cleared by signing out.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Data Deletion</h2>
            <p className="text-sm text-[#424245] leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-[#424245] leading-relaxed ml-2">
              <li>
                Delete individual saved jobs through the companion web app
              </li>
              <li>Delete your uploaded resume at any time</li>
              <li>
                Request complete account deletion by contacting us (see below)
              </li>
              <li>
                Uninstall the extension at any time, which removes all locally
                cached data
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Compliance</h2>
            <p className="text-sm text-[#424245] leading-relaxed mb-3">
              This extension and companion web app comply with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-[#424245] leading-relaxed ml-2">
              <li>Chrome Web Store Developer Program Policies</li>
              <li>General Data Protection Regulation (GDPR)</li>
              <li>California Consumer Privacy Act (CCPA)</li>
            </ul>
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
        </div>
      </div>
    </main>
  )
}
