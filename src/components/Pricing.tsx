const freeFeatures = [
  'Log unlimited transactions',
  'Monthly donut chart report',
  'Current + 1 prior month history',
  'Custom categories (colors & icons)',
  'Home screen & lock screen widget',
  'iCloud sync (opt-in)',
]

const premiumFeatures = [
  'Everything in Free',
  'Yearly bar chart (income vs expenses)',
  'Full transaction history — all months',
  'Import & Export CSV',
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-tt-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-tt-black mb-4">
            Simple,{' '}
            <span className="gradient-text">honest pricing</span>
          </h2>
          <p className="text-lg text-tt-dark max-w-2xl mx-auto">
            Free to use with everything you need. One optional upgrade — no subscription, no recurring fees, yours forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free tier */}
          <div className="rounded-2xl border-2 border-tt-pearl p-8 bg-tt-white">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-tt-black mb-1">Free</h3>
              <p className="text-tt-dark text-sm">Everything you need to get started</p>
              <p className="text-4xl font-extrabold text-tt-black mt-4">$0</p>
            </div>
            <ul className="space-y-3 mb-8">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-tt-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-tt-dark text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://apps.apple.com/app/tallytap"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border-2 border-tt-green text-tt-green px-6 py-3 rounded-xl font-semibold hover:bg-tt-green-muted transition-colors"
            >
              Download Free
            </a>
          </div>

          {/* Premium tier */}
          <div className="gradient-border rounded-2xl p-8 bg-tt-white relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="gradient-bg text-white text-xs font-semibold px-3 py-1 rounded-full">
                One-time purchase
              </span>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-tt-black mb-1">Premium</h3>
              <p className="text-tt-dark text-sm">For power users who want everything</p>
              <div className="flex items-baseline gap-1 mt-4">
                <p className="text-4xl font-extrabold text-tt-black">$4.99</p>
                <span className="text-tt-dark text-sm">one-time</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {premiumFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-tt-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-tt-dark text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://apps.apple.com/app/tallytap"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg block text-center text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Get Premium
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
