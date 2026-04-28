export default function AppPreview() {
  return (
    <section className="py-16 sm:py-24 bg-tt-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-tt-black mb-4">
            See it in action
          </h2>
          <p className="text-lg text-tt-dark max-w-2xl mx-auto">
            From the home dashboard to the lightning-fast add sheet — every screen is designed to keep you moving.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Home screen mockup */}
          <div className="relative">
            <div className="w-64 sm:w-72 bg-tt-black rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full bg-tt-charcoal rounded-[2.5rem] overflow-hidden">
                <MockHomeScreen />
              </div>
            </div>
          </div>

          {/* Add transaction mockup */}
          <div className="relative">
            <div className="w-64 sm:w-72 bg-tt-black rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full bg-tt-charcoal rounded-[2.5rem] overflow-hidden">
                <MockAddScreen />
              </div>
            </div>
          </div>

          {/* Smaller screens on the right (desktop only) */}
          <div className="hidden lg:flex flex-col gap-6">
            <div className="w-48 bg-tt-black rounded-[2rem] p-2 shadow-xl">
              <div className="w-full bg-tt-charcoal rounded-[1.75rem] overflow-hidden">
                <MockReportsScreen />
              </div>
            </div>
            <div className="w-48 bg-tt-black rounded-[2rem] p-2 shadow-xl">
              <div className="w-full bg-tt-charcoal rounded-[1.75rem] overflow-hidden">
                <MockCategoriesScreen />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MockHomeScreen() {
  return (
    <div className="bg-tt-white p-4 min-h-[520px]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-xs text-tt-dark">April 2026</p>
          <p className="text-xl font-bold text-tt-black">$1,240.00</p>
          <p className="text-xs text-tt-green font-medium">Net savings</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-tt-cream flex items-center justify-center">
          <svg className="w-4 h-4 text-tt-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        {[
          { label: 'Food & Drink', color: '#DC2626', pct: 75 },
          { label: 'Transport', color: '#0284C7', pct: 40 },
          { label: 'Shopping', color: '#9333EA', pct: 55 },
        ].map((cat) => (
          <div key={cat.label}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-tt-dark">{cat.label}</span>
            </div>
            <div className="h-1.5 bg-tt-pearl rounded-full">
              <div className="h-full rounded-full" style={{ width: `${cat.pct}%`, backgroundColor: cat.color }} />
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs font-semibold text-tt-dark mb-2">Recent</p>
      <div className="space-y-2">
        {[
          { name: 'Groceries', amount: '-$42.50', color: '#EA580C' },
          { name: 'Salary', amount: '+$3,200', color: '#00B894' },
          { name: 'Transport', amount: '-$12.00', color: '#0284C7' },
        ].map((tx) => (
          <div key={tx.name} className="flex items-center justify-between py-1.5 border-b border-tt-cream">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: tx.color + '33' }}>
                <div className="w-2 h-2 rounded-full m-2" style={{ backgroundColor: tx.color }} />
              </div>
              <span className="text-xs text-tt-black">{tx.name}</span>
            </div>
            <span className={`text-xs font-medium ${tx.amount.startsWith('+') ? 'text-tt-green' : 'text-tt-black'}`}>
              {tx.amount}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function MockAddScreen() {
  return (
    <div className="bg-tt-white p-4 min-h-[520px]">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs text-tt-dark font-medium">Expense</span>
        <span className="text-xs font-semibold text-tt-green">Income</span>
      </div>
      <div className="text-center mb-4">
        <p className="text-4xl font-bold text-tt-black">$42.50</p>
      </div>
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        {[
          { name: 'Food', color: '#DC2626' },
          { name: 'Transport', color: '#0284C7' },
          { name: 'Shopping', color: '#9333EA' },
        ].map((cat, i) => (
          <div
            key={cat.name}
            className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium"
            style={i === 0
              ? { backgroundColor: cat.color, color: 'white' }
              : { backgroundColor: '#f5f5f5', color: '#2d2d2d' }
            }
          >
            {cat.name}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {['1','2','3','4','5','6','7','8','9','.','0','⌫'].map((key) => (
          <div key={key} className="h-10 bg-tt-cream rounded-xl flex items-center justify-center text-sm font-medium text-tt-black">
            {key}
          </div>
        ))}
      </div>
      <div className="gradient-bg rounded-xl py-3 text-center">
        <span className="text-white font-semibold text-sm">Save</span>
      </div>
    </div>
  )
}

function MockReportsScreen() {
  return (
    <div className="bg-tt-white p-3 min-h-[380px]">
      <p className="text-xs font-semibold text-tt-black mb-3">Reports</p>
      <div className="flex justify-center mb-3">
        <div className="relative w-24 h-24">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle cx="18" cy="18" r="14" fill="none" stroke="#f5f5f5" strokeWidth="4"/>
            <circle cx="18" cy="18" r="14" fill="none" stroke="#DC2626" strokeWidth="4" strokeDasharray="40 60" strokeDashoffset="0"/>
            <circle cx="18" cy="18" r="14" fill="none" stroke="#0284C7" strokeWidth="4" strokeDasharray="25 75" strokeDashoffset="-40"/>
            <circle cx="18" cy="18" r="14" fill="none" stroke="#9333EA" strokeWidth="4" strokeDasharray="20 80" strokeDashoffset="-65"/>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xs font-bold text-tt-black">$860</p>
          </div>
        </div>
      </div>
      <div className="space-y-1.5">
        {[
          { name: 'Food', color: '#DC2626', amount: '$345' },
          { name: 'Transport', color: '#0284C7', amount: '$215' },
          { name: 'Shopping', color: '#9333EA', amount: '$300' },
        ].map((cat) => (
          <div key={cat.name} className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: cat.color }} />
            <span className="text-xs text-tt-dark flex-1">{cat.name}</span>
            <span className="text-xs font-medium text-tt-black">{cat.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockCategoriesScreen() {
  return (
    <div className="bg-tt-white p-3 min-h-[380px]">
      <p className="text-xs font-semibold text-tt-black mb-3">Categories</p>
      <p className="text-xs text-tt-dark mb-2 font-medium">Expenses</p>
      <div className="space-y-1.5 mb-3">
        {[
          { name: 'Food & Drink', color: '#DC2626' },
          { name: 'Transport', color: '#0284C7' },
          { name: 'Shopping', color: '#9333EA' },
          { name: 'Health', color: '#15803D' },
        ].map((cat) => (
          <div key={cat.name} className="flex items-center gap-2 py-1">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: cat.color + '22' }}>
              <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: cat.color }} />
            </div>
            <span className="text-xs text-tt-black">{cat.name}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-tt-dark mb-2 font-medium">Income</p>
      <div className="space-y-1.5">
        {[
          { name: 'Salary', color: '#00B894' },
          { name: 'Freelance', color: '#0891B2' },
        ].map((cat) => (
          <div key={cat.name} className="flex items-center gap-2 py-1">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: cat.color + '22' }}>
              <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: cat.color }} />
            </div>
            <span className="text-xs text-tt-black">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
