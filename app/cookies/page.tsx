export default function CookiesPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-title">Cookie Policy</h1>

        <div className="elegant-card space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary-400 mb-4">1. What are Cookies</h2>
            <p className="text-white/70">
              Cookies are small text files that are stored on your device when you visit websites. They help us improve
              your experience using our site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary-400 mb-4">2. Types of Cookies We Use</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary-300 mb-2">Essential Cookies</h3>
                <p className="text-white/70">
                  These cookies are necessary for the site to function and cannot be disabled. They are usually set in
                  response to your actions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary-300 mb-2">Functional Cookies</h3>
                <p className="text-white/70">
                  These cookies allow the site to remember your choices and provide enhanced, more personalized
                  features.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary-300 mb-2">Analytics Cookies</h3>
                <p className="text-white/70">
                  These cookies help us understand how visitors interact with the site by collecting and reporting
                  information anonymously.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary-400 mb-4">3. How We Use Cookies</h2>
            <p className="text-white/70 mb-4">We use cookies to:</p>
            <ul className="text-white/70 space-y-2 ml-6">
              <li>• Ensure proper site functionality</li>
              <li>• Remember your preferences</li>
              <li>• Analyze traffic and site usage</li>
              <li>• Improve user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary-400 mb-4">4. Managing Cookies</h2>
            <p className="text-white/70 mb-4">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your
              computer and set up most browsers to prevent them from being placed.
            </p>
            <p className="text-white/70">
              However, if you do this, you may have to manually adjust some preferences every time you visit a site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary-400 mb-4">5. Changes to Cookie Policy</h2>
            <p className="text-white/70">
              We may update this cookie policy from time to time. Any changes will be posted on this page with a new
              "last updated" date.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary-400 mb-4">6. Contact</h2>
            <p className="text-white/70">
              If you have questions about our use of cookies, please contact us through the feedback form on our
              website.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
