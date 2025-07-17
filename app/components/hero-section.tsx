import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/1d2f0b7e76a950b09a53e92f19ab7f60.jpg"
            alt="Restaurant Interior"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-primary-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-600/8 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="inline-block px-6 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
            <span className="text-primary-400 text-sm font-medium tracking-wider uppercase">Fine French Dining</span>
          </div>
          <h1 className="hero-text mb-6 animate-fade-in">Le Château Noir</h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-4 font-light text-shadow">
            Where Culinary Art Meets Excellence
          </p>
          <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the finest French cuisine in an atmosphere of unparalleled elegance. Every dish is a masterpiece
            crafted with passion and precision by our world-class chefs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/menu"
            className="elegant-button text-lg px-10 py-4 transform hover:scale-105 transition-all duration-300"
          >
            Explore Our Menu
          </Link>
          <Link
            href="/reservation"
            className="group relative overflow-hidden border-2 border-primary-500/50 text-primary-400 hover:text-dark-950 px-10 py-4 rounded-full transition-all duration-500 font-semibold text-lg backdrop-blur-sm"
          >
            <span className="absolute inset-0 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            <span className="relative">Reserve a Table</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
