export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-tt-cream to-tt-white py-16 sm:py-24">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-tt-green/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-tt-green-light/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* App icon */}
          <div className="mb-8 flex justify-center">
           <img 
              src="/tallytap.png" 
              alt="TallyTap" 
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg"
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-tt-black mb-4">
            Track expenses{' '}
            <span className="gradient-text">in seconds</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-tt-dark mb-8 max-w-2xl mx-auto">
            Log any transaction in 3–4 taps. Beautiful reports, custom categories, and a home screen widget — all without a subscription.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <a
              href="https://apps.apple.com/app/tallytap"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity flex items-center gap-3 shadow-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </a>
            <a
              href="#features"
              className="text-tt-dark hover:text-tt-green font-semibold text-lg flex items-center gap-2 transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
