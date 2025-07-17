import Link from "next/link"
import Image from "next/image"

export default function AboutPreviewSection() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900/60 to-dark-800/40"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-6 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
              <span className="text-primary-400 text-sm font-medium tracking-wider uppercase">Our Story</span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-gradient mb-6">The Art of French Cuisine</h2>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              Our restaurant is a place where tradition meets innovation. Every dish is prepared with the finest
              ingredients and served in an atmosphere of authentic French elegance.
            </p>
            <p className="text-white/70 mb-8 leading-relaxed">
              Experience the magic of culinary artistry, where every meal becomes an unforgettable event, and flavors
              transport you to the finest restaurants of Paris.
            </p>
            <Link href="/about" className="elegant-button">
              Learn More About Us
            </Link>
          </div>
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/0b6a87b673d7996625a77e227127015d.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
