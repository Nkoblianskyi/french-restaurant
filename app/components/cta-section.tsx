import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 to-dark-800/60"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="elegant-card">
          <div className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h2 className="font-serif text-4xl font-bold text-gradient mb-6">Ready for an Unforgettable Evening?</h2>
          <p className="text-white/80 text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            Reserve your table now and allow us to create a special culinary experience that will remain in your memory
            forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/reservation" className="elegant-button text-lg px-12 py-4">
              Make a Reservation
            </Link>
            <Link
              href="/menu"
              className="border-2 border-primary-500/50 text-primary-400 hover:bg-primary-500/10 px-12 py-4 rounded-full transition-all duration-300 font-semibold text-lg backdrop-blur-sm"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
