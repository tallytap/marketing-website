export default function Support() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-tt-black mb-8">Support</h1>

        <div className="prose prose-lg text-tt-dark space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-tt-black">Need Help?</h2>
            <p>
              We're here to help you get the most out of TallyTap. Check out the frequently asked questions below, or reach out directly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-tt-black">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="gradient-border rounded-xl p-6 bg-tt-white">
                <h3 className="font-semibold text-tt-black mb-2">How do I log a transaction?</h3>
                <p className="text-tt-dark">
                  Tap the <strong>+</strong> button on the Home tab or Categories tab. Choose Expense or Income, enter the amount using the number pad, pick a category, and tap Save — done in 3–4 taps.
                </p>
              </div>

              <div className="gradient-border rounded-xl p-6 bg-tt-white">
                <h3 className="font-semibold text-tt-black mb-2">How do I add a transaction from my home screen?</h3>
                <p className="text-tt-dark">
                  Add the TallyTap widget to your home screen. Tapping it opens the app directly to the Add Transaction sheet — no navigation required.
                </p>
              </div>

              <div className="gradient-border rounded-xl p-6 bg-tt-white">
                <h3 className="font-semibold text-tt-black mb-2">Is my data synced across devices?</h3>
                <p className="text-tt-dark">
                  Yes — if you enable iCloud sync during onboarding or in Settings, your transactions and categories sync automatically across all your Apple devices signed into the same iCloud account. You can toggle this at any time; a restart is required to apply the change.
                </p>
              </div>

              <div className="gradient-border rounded-xl p-6 bg-tt-white">
                <h3 className="font-semibold text-tt-black mb-2">How do I create custom categories?</h3>
                <p className="text-tt-dark">
                  Go to the <strong>Categories</strong> tab and tap the <strong>+</strong> button. Give your category a name, pick a color, choose an SF Symbol icon, and select whether it's an expense or income category. Eight expense and three income categories are seeded by default.
                </p>
              </div>

              <div className="gradient-border rounded-xl p-6 bg-tt-white">
                <h3 className="font-semibold text-tt-black mb-2">What does Premium include?</h3>
                <p className="text-tt-dark">
                  Premium is a one-time $4.99 purchase (no subscription). It unlocks: yearly bar charts comparing income vs expenses, full transaction history across all months, and CSV import/export for backing up or migrating your data.
                </p>
              </div>

              <div className="gradient-border rounded-xl p-6 bg-tt-white">
                <h3 className="font-semibold text-tt-black mb-2">How do I restore my Premium purchase?</h3>
                <p className="text-tt-dark">
                  Go to <strong>Settings → Upgrade to Premium → Restore Purchases</strong>. As long as you're signed in with the same Apple ID used for the original purchase, Premium will be restored at no additional charge.
                </p>
              </div>

              <div className="gradient-border rounded-xl p-6 bg-tt-white">
                <h3 className="font-semibold text-tt-black mb-2">How do I export my transactions?</h3>
                <p className="text-tt-dark">
                  Premium users can go to <strong>Settings → Import & Export</strong> and tap <strong>Export Transactions</strong>. A CSV file will be generated and shared via the system share sheet so you can save it to Files, email it, or open it in another app.
                </p>
              </div>

              <div className="gradient-border rounded-xl p-6 bg-tt-white">
                <h3 className="font-semibold text-tt-black mb-2">Where is my data stored?</h3>
                <p className="text-tt-dark">
                  All data is stored locally on your device. If you enable iCloud sync, it's also stored in your personal iCloud account via CloudKit. We never have access to your data.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-tt-black">Contact Us</h2>
            <p>
              Can't find what you're looking for? Email us at{' '}
              <a href="mailto:support@tallytap.app" className="text-tt-green hover:underline">
                support@tallytap.app
              </a>{' '}
              and we'll get back to you as soon as possible.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
