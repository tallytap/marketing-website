import screenHome from '../assets/screen-home.png'
import screenAdd from '../assets/screen-add.png'
import screenReports from '../assets/screen-reports.png'
import screenTransactions from '../assets/screen-transactions.png'

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
          {/* Home screen — primary large mockup */}
          <div className="relative">
            <div className="w-64 sm:w-72 bg-tt-black rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full bg-tt-charcoal rounded-[2.5rem] overflow-hidden">
                <img
                  src={screenHome}
                  alt="TallyTap home screen showing net savings and spending by category"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Add transaction — second large mockup */}
          <div className="relative">
            <div className="w-64 sm:w-72 bg-tt-black rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full bg-tt-charcoal rounded-[2.5rem] overflow-hidden">
                <img
                  src={screenAdd}
                  alt="TallyTap add transaction sheet with number pad and category pills"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Smaller screens on the right — desktop only */}
          <div className="hidden lg:flex flex-col gap-6">
            <div className="w-48 bg-tt-black rounded-[2rem] p-2 shadow-xl">
              <div className="w-full bg-tt-charcoal rounded-[1.75rem] overflow-hidden">
                <img
                  src={screenReports}
                  alt="TallyTap reports screen with monthly donut chart"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="w-48 bg-tt-black rounded-[2rem] p-2 shadow-xl">
              <div className="w-full bg-tt-charcoal rounded-[1.75rem] overflow-hidden">
                <img
                  src={screenTransactions}
                  alt="TallyTap transactions list grouped by date"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
