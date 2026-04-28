import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-tt-black text-tt-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl overflow-hidden gradient-bg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                </svg>
              </div>
              <span className="font-bold text-xl">TallyTap</span>
            </div>
            <p className="text-tt-pearl text-sm">
              Track expenses in seconds. Log, report, and stay on top of your budget — no subscription required.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-tt-pearl text-sm">
              <li>
                <Link to="/#features" className="hover:text-tt-green transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/#pricing" className="hover:text-tt-green transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-tt-green transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-tt-green transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="font-semibold mb-4">Download</h3>
            <a
              href="https://apps.apple.com/app/tallytap"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-tt-charcoal hover:bg-tt-dark px-4 py-2 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-tt-pearl">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-tt-dark mt-8 pt-8 text-center text-tt-pearl text-sm">
          <p>&copy; {currentYear} TallyTap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
