export default function Privacy() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-tt-black mb-8">Privacy Policy</h1>

        <div className="prose prose-lg text-tt-dark space-y-6">
          <p className="text-tt-dark">
            <strong>Last updated:</strong> April 28, 2026
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-tt-black">Overview</h2>
            <p>
              TallyTap is designed with your privacy in mind. Your financial data is personal, and we've built the app so it stays that way — stored locally on your device or in your own iCloud account.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-tt-black">Data Collection</h2>
            <p>
              <strong>TallyTap does not collect any personal data.</strong> All transactions, categories, and settings are stored on your device or in your personal iCloud account if you opt in to iCloud sync.
            </p>
            <p>We do not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Collect or store your personal information on our servers</li>
              <li>Access or analyze your financial transactions</li>
              <li>Share any data with third parties</li>
              <li>Use analytics or tracking tools</li>
              <li>Display advertisements</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-tt-black">Data Storage</h2>
            <p>Your data is stored in one of two places:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Local Storage:</strong> All transactions and categories are stored locally on your device using SwiftData with secure on-device storage.
              </li>
              <li>
                <strong>iCloud (Optional):</strong> If you enable iCloud sync during onboarding or in Settings, your data is synced through your personal iCloud account via CloudKit. This data is encrypted and managed entirely by Apple. We never have access to your iCloud data.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-tt-black">In-App Purchases</h2>
            <p>
              TallyTap offers a one-time Premium upgrade processed entirely through Apple's App Store via StoreKit. We do not handle or store any payment information. All purchase and entitlement data is managed by Apple.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-tt-black">Children's Privacy</h2>
            <p>
              TallyTap does not knowingly collect any information from children. The app is suitable for users of all ages as it does not collect any personal information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-tt-black">Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-tt-black">Contact</h2>
            <p>
              If you have questions about this privacy policy, please reach out via the <a href="/support" className="text-tt-green hover:underline">Support</a> page.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
