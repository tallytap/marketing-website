const features = [
  {
    icon: QuickAddIcon,
    title: 'Quick Add',
    description: 'Log any expense or income in just 3–4 taps. A calculator-style pad and category pills make it the fastest way to track spending on the go.',
  },
  {
    icon: ReportsIcon,
    title: 'Beautiful Reports',
    description: 'See exactly where your money goes with a monthly donut chart by category. Upgrade to Premium for yearly bar charts comparing income vs expenses.',
  },
  {
    icon: CategoriesIcon,
    title: 'Custom Categories',
    description: 'Create your own expense and income categories with custom colors and icons. 8 expense and 3 income categories are seeded for you out of the box.',
  },
  {
    icon: CloudIcon,
    title: 'iCloud Sync',
    description: 'Opt-in iCloud sync keeps your transactions and categories up to date across all your Apple devices. Your data stays in your iCloud account.',
  },
  {
    icon: WidgetIcon,
    title: 'Home Screen Widget',
    description: 'See today\'s spending and this month\'s total at a glance — right from your home or lock screen. Tap the widget to jump straight to adding a transaction.',
  },
  {
    icon: ExportIcon,
    title: 'Import & Export',
    description: 'Back up your full transaction history as a CSV file or import data from another source. Available with Premium — one-time purchase, no subscription.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-tt-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-tt-black mb-4">
            Everything you need to{' '}
            <span className="gradient-text">stay on budget</span>
          </h2>
          <p className="text-lg text-tt-dark max-w-2xl mx-auto">
            TallyTap is built around one goal: getting out of your way so logging a transaction feels instant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="gradient-border rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow bg-tt-white"
            >
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-tt-black mb-2">
                {feature.title}
              </h3>
              <p className="text-tt-dark">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function QuickAddIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  )
}

function ReportsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  )
}

function CategoriesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  )
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  )
}

function WidgetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  )
}

function ExportIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
  )
}
