import Link from "next/link"
import Image from "next/image"

export default function DesignPreviewSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
            <span className="text-primary-400 text-sm font-medium tracking-wider uppercase">Restaurant Design</span>
          </div>
          <h2 className="section-title">Elegant Atmosphere</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Every corner of our restaurant is designed to provide you with an unforgettable experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="elegant-card group cursor-pointer md:col-span-2">
            <div className="relative h-64 rounded-xl overflow-hidden mb-6">
              <Image
                src="/9a40291faaaf9cc1f722292aea31a187.jpg"
                alt="Main Dining Room"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-serif text-xl font-bold text-white mb-1">Main Dining Room</h3>
                <p className="text-white/80 text-sm">Elegant interior with panoramic windows</p>
              </div>
            </div>
          </div>
          <div className="elegant-card group cursor-pointer">
            <div className="relative h-64 rounded-xl overflow-hidden mb-6">
              <Image
                src="/45d3ffa0d1d4e5d462d4741104ead697.jpg"
                alt="Cheese Cellar"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-serif text-lg font-bold text-white mb-1">Cheese Cellar</h3>
                <p className="text-white/80 text-sm">Collection of the finest French cheeses</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/design" className="elegant-button">
            Explore Our Design
          </Link>
        </div>
      </div>
    </section>
  )
}
