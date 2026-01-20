export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top section with contact info */}
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-4">
          {/* Logo */}
          <div>
            <span className="text-xl font-bold text-[#0A3700]">
              Jaldi Pa<span className="text-[#9EE86F]">y</span>
            </span>
            <p className="mt-2 text-sm text-gray-600">
              Global money transfers made simple
            </p>
          </div>

          {/* Business */}
          <div>
            <h4 className="mb-3 font-medium text-[#0A3700]">Business</h4>
            <a
              href="mailto:info@anchorblock.vc"
              className="text-gray-600 hover:text-[#0A3700] transition"
            >
              info@anchorblock.vc
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 font-medium text-[#0A3700]">Contact</h4>
            <a
              href="mailto:support@jaldipay.com"
              className="text-gray-600 hover:text-[#0A3700] transition"
            >
              support@jaldipay.com
            </a>
          </div>

          {/* Socials */}
          <div>
            <h4 className="mb-3 font-medium text-[#0A3700]">Socials</h4>
            <ul className="flex items-center gap-4">
              <li>
                <a
                  className="flex items-center justify-center text-[#0A3700] transition hover:text-[#9EE86F]"
                  href="https://www.linkedin.com/company/anchorblock/"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h14c5,0,9-4,9-9V9C32,4,28,0,23,0z M12,25c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V13 c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V25z M9,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S10.7,11,9,11z M26,25c0,0.6-0.4,1-1,1h-3 c-0.6,0-1-0.4-1-1v-3.5v-2.9c0-2-0.8-3.1-2.3-3.1S16,18.6,16,20.6v4.4c0,0.6-0.4,1-1,1h-3c-0.6,0-1-0.4-1-1V13c0-0.6,0.4-1,1-1h4 c0.6,0,1,0.4,1,1v0.8c0.8-0.8,2.2-1.8,4.3-1.8c3.5,0,5.7,2.4,5.7,7.4V25z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-600">
              Copyright &copy; {new Date().getFullYear()} JaldiPay | Powered by Anchorblock. All Rights Reserved.
            </p>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <a href="#" className="text-gray-600 hover:text-[#0A3700] transition">
                Privacy Center
              </a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-gray-600 hover:text-[#0A3700] transition">
                Terms & Conditions
              </a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-gray-600 hover:text-[#0A3700] transition">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Payment methods */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-sm text-gray-500">We Accept:</span>
            <div className="flex items-center gap-2">
              {/* Stripe */}
              <div className="rounded bg-purple-500 px-2 py-1 text-xs font-medium text-white">
                Stripe
              </div>
              {/* Apple Pay */}
              <div className="rounded bg-gray-800 px-2 py-1 text-xs font-medium text-white">
                Pay
              </div>
              {/* Visa */}
              <div className="rounded bg-blue-600 px-2 py-1 text-xs font-bold text-white">
                VISA
              </div>
              {/* Amex */}
              <div className="rounded bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                AMEX
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
