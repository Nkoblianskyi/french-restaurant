import Link from "next/link"
import Image from "next/image"

export default function ChefsPreviewSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
            <span className="text-primary-400 text-sm font-medium tracking-wider uppercase">Master Chefs</span>
          </div>
          <h2 className="section-title">Culinary Excellence</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Our team of talented culinary masters creates authentic French cuisine with passion and precision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="elegant-card text-center group">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/203d6aedc13a691413bb753d80c8583b.jpg"
                alt="Executive Chef"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-serif text-xl font-bold text-gradient mb-2">Executive Chef</h3>
            <p className="text-primary-300/80 text-sm mb-3">15 years of experience</p>
            <p className="text-white/70 text-sm">Master of classic French cuisine</p>
          </div>
          <div className="elegant-card text-center group">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/2606c1d55bc11d9afaabd39bbc7b68dc.jpg"
                alt="Sous Chef"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-serif text-xl font-bold text-gradient mb-2">Sous Chef</h3>
            <p className="text-primary-300/80 text-sm mb-3">10 years of experience</p>
            <p className="text-white/70 text-sm">Modern interpretation specialist</p>
          </div>
          <div className="elegant-card text-center group">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/6b8a1e9e4705b23d0def284ba6b2530b.jpg"
                alt="Pastry Chef"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-serif text-xl font-bold text-gradient mb-2">Pastry Chef</h3>
            <p className="text-primary-300/80 text-sm mb-3">8 years of experience</p>
            <p className="text-white/70 text-sm">French pastry virtuoso</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/chefs" className="elegant-button">
            Meet Our Chefs
          </Link>
        </div>
      </div>
    </section>
  )
}
