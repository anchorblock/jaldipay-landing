export const metadata = {
  title: "Terms & Conditions - JaldiPay",
  description: "Read the terms and conditions for using JaldiPay's global money transfer services.",
};

export default function TermsPage() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-[#9EE86F]/20 px-4 py-1 text-sm font-medium text-[#0A3700] mb-4">
            Legal
          </span>
          <h1 className="text-3xl font-bold text-[#0A3700] md:text-4xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-gray-600">
            Last updated: January 2025
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12">
          <div className="prose prose-gray max-w-none">
            {/* Introduction */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-[#0A3700] mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to JaldiPay. These Terms and Conditions (&quot;Terms&quot;) govern your use of our money transfer services, website, and mobile applications (collectively, the &quot;Services&quot;). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                JaldiPay is operated by Anchorblock, a company committed to providing fast, secure, and transparent international money transfer services.
              </p>
            </section>

            {/* Eligibility */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-[#0A3700] mb-4">2. Eligibility</h2>
              <p className="text-gray-600 leading-relaxed">To use our Services, you must:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Provide accurate and complete identification information</li>
                <li>Not be a resident of any jurisdiction where our Services are prohibited</li>
                <li>Not be on any government sanctions list or restricted persons list</li>
              </ul>
            </section>

            {/* Account Registration */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-[#0A3700] mb-4">3. Account Registration & KYC</h2>
              <p className="text-gray-600 leading-relaxed">
                To access our Services, you must create an account and complete our Know Your Customer (KYC) verification process. You agree to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your login credentials confidential and secure</li>
                <li>Notify us immediately of any unauthorized access to your account</li>
                <li>Submit valid government-issued identification documents when requested</li>
              </ul>
            </section>

            {/* Money Transfer Services */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-[#0A3700] mb-4">4. Money Transfer Services</h2>
              <p className="text-gray-600 leading-relaxed">Our money transfer services are subject to the following conditions:</p>

              <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">4.1 Transfer Limits</h3>
              <p className="text-gray-600 leading-relaxed">
                Transfer limits may apply based on your verification level, jurisdiction, and applicable regulations. We reserve the right to modify these limits at any time.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">4.2 Exchange Rates</h3>
              <p className="text-gray-600 leading-relaxed">
                Exchange rates displayed are indicative and may change before your transaction is completed. The final exchange rate will be confirmed at the time of transaction execution.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">4.3 Fees</h3>
              <p className="text-gray-600 leading-relaxed">
                Our fee structure is transparent and will be displayed before you confirm any transaction. Fees may vary based on the transfer amount, destination country, and payment method.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">4.4 Processing Time</h3>
              <p className="text-gray-600 leading-relaxed">
                While we strive to process transfers instantly, processing times may vary depending on the destination country, payment method, and compliance requirements.
              </p>
            </section>

            {/* Prohibited Activities */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-[#0A3700] mb-4">5. Prohibited Activities</h2>
              <p className="text-gray-600 leading-relaxed">You agree not to use our Services for:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                <li>Money laundering or terrorist financing</li>
                <li>Fraud or any illegal activities</li>
                <li>Violating any applicable laws or regulations</li>
                <li>Circumventing transfer limits or restrictions</li>
                <li>Using false or misleading information</li>
                <li>Unauthorized commercial purposes</li>
              </ul>
            </section>

            {/* Compliance */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-[#0A3700] mb-4">6. Regulatory Compliance</h2>
              <p className="text-gray-600 leading-relaxed">
                JaldiPay operates in compliance with applicable anti-money laundering (AML) laws, counter-terrorism financing (CTF) regulations, and sanctions requirements. We may:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                <li>Request additional information or documentation at any time</li>
                <li>Delay or refuse transactions that raise compliance concerns</li>
                <li>Report suspicious activities to relevant authorities</li>
                <li>Freeze or close accounts as required by law</li>
              </ul>
            </section>

            {/* Privacy */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-[#0A3700] mb-4">7. Privacy & Data Protection</h2>
              <p className="text-gray-600 leading-relaxed">
                Your privacy is important to us. Our collection, use, and disclosure of personal information is governed by our Privacy Policy. By using our Services, you consent to our data practices as described in our Privacy Policy.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-[#0A3700] mb-4">8. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All content, trademarks, and intellectual property on our platform are owned by JaldiPay or its licensors. You may not copy, modify, distribute, or create derivative works without our prior written consent.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-[#0A3700] mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                To the maximum extent permitted by law, JaldiPay shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our Services. Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-[#0A3700] mb-4">10. Dispute Resolution</h2>
              <p className="text-gray-600 leading-relaxed">
                Any disputes arising from these Terms or our Services shall be resolved through good faith negotiation. If negotiation fails, disputes shall be submitted to binding arbitration in accordance with applicable arbitration rules.
              </p>
            </section>

            {/* Modifications */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-[#0A3700] mb-4">11. Modifications to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website. Your continued use of our Services after changes are posted constitutes acceptance of the modified Terms.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold text-[#0A3700] mb-4">12. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> info@jaldipay.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
