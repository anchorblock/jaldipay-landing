import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main footer content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
            {/* Brand Column - Takes 2 columns on md+ */}
            <div className="col-span-2">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-bold text-[#0A3700]">
                  Jaldi Pa<span className="text-[#9EE86F]">y</span>
                </span>
              </Link>
              <p className="mt-4 text-sm text-gray-600 max-w-xs">
                Fast, secure, and affordable international money transfers to 50+ countries. Your trusted partner for global remittance.
              </p>

              {/* Social Links */}
              {/* <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/anchorblock/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A3700]/10 text-[#0A3700] transition-all hover:bg-[#0A3700] hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/anchorblock"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A3700]/10 text-[#0A3700] transition-all hover:bg-[#0A3700] hover:text-white"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="mailto:faruk@jaldipay.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A3700]/10 text-[#0A3700] transition-all hover:bg-[#0A3700] hover:text-white"
                  aria-label="Email"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div> */}
            </div>

            {/* Services Column */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-[#0A3700] uppercase tracking-wider">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/#send" className="text-sm text-gray-600 hover:text-[#0A3700] transition">
                    Send Money
                  </Link>
                </li>
                <li>
                  <Link href="/#receive" className="text-sm text-gray-600 hover:text-[#0A3700] transition">
                    Receive Money
                  </Link>
                </li>
                <li>
                  <span className="text-sm text-gray-400">Cards (Coming Soon)</span>
                </li>
                <li>
                  <Link href="/#business" className="text-sm text-gray-600 hover:text-[#0A3700] transition">
                    Business
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-[#0A3700] uppercase tracking-wider">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/#about" className="text-sm text-gray-600 hover:text-[#0A3700] transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-600 hover:text-[#0A3700] transition">
                    Contact
                  </Link>
                </li>
                {/* <li>
                  <a href="https://anchorblock.vc" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#0A3700] transition">
                    Anchorblock
                  </a>
                </li> */}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-[#0A3700] uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/terms" className="text-sm text-gray-600 hover:text-[#0A3700] transition">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-gray-600 hover:text-[#0A3700] transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="text-sm text-gray-600 hover:text-[#0A3700] transition">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-[#0A3700] uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-[#9EE86F] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:faruk@jaldipay.com" className="text-sm text-gray-600 hover:text-[#0A3700] transition break-all">
                    info@jaldipay.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-[#9EE86F] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-gray-600">24/7 Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Copyright */}
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} JaldiPay. All rights reserved.
            </p>

            {/* Payment methods */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">We accept:</span>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-12 items-center justify-center rounded bg-white border border-gray-200 shadow-sm">
                  <svg className="h-4" viewBox="0 0 50 16" fill="none">
                    <path d="M19.5 14.3h-3.1l2-12h3l-1.9 12zm-5.9-12l-2.9 8.2-.3-1.7-.3-1.7-1-5.5s-.1-.8-.9-.8h-5l-.1.3s1 .2 2.2.8l2.4 9.2h3.2l4.9-12h-2.2zm25.5 12h2.8l-2.4-12h-2.6c-.7 0-1.2.4-1.5 1l-4.3 11h3l.6-1.7h3.6l.4 1.7zm-3.1-4l1.5-4.1.8 4.1h-2.3zm-6.8-5.5l.4-2.5s-1.3-.5-2.6-.5c-1.5 0-4.9.6-4.9 3.7 0 2.9 4 2.9 4 4.4 0 1.5-3.6 1.2-4.8.3l-.4 2.6s1.3.6 3.3.6c2 0 5-1 5-3.8 0-2.9-4.1-3.2-4.1-4.4 0-1.2 2.8-1.1 4.1-.4z" fill="#1A1F71"/>
                  </svg>
                </div>
                <div className="flex h-8 w-12 items-center justify-center rounded bg-white border border-gray-200 shadow-sm">
                  <svg className="h-5" viewBox="0 0 50 30" fill="none">
                    <circle cx="18" cy="15" r="12" fill="#EB001B"/>
                    <circle cx="32" cy="15" r="12" fill="#F79E1B"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M25 23.7c2.4-2.1 3.9-5.2 3.9-8.7s-1.5-6.6-3.9-8.7c-2.4 2.1-3.9 5.2-3.9 8.7s1.5 6.6 3.9 8.7z" fill="#FF5F00"/>
                  </svg>
                </div>
                <div className="flex h-8 w-12 items-center justify-center rounded bg-[#6772E5] shadow-sm">
                  <span className="text-xs font-bold text-white">stripe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
