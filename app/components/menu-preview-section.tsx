import Link from "next/link"

export default function MenuPreviewSection() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
            <span className="text-primary-400 text-sm font-medium tracking-wider uppercase">Our Menu</span>
          </div>
          <h2 className="section-title">Exquisite French Cuisine</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From traditional appetizers to decadent desserts, every dish tells a story of French culinary heritage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="elegant-card text-center group cursor-pointer">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-primary-400 text-2xl">🥂</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-gradient mb-4">Appetizers</h3>
            <p className="text-white/70 mb-4">Elegant starters including foie gras, escargot, and artisanal pâtés</p>
            <p className="text-primary-300/80 text-sm italic">Les Entrées</p>
          </div>
          <div className="elegant-card text-center group cursor-pointer">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-primary-400 text-2xl">🥩</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-gradient mb-4">Main Courses</h3>
            <p className="text-white/70 mb-4">Masterfully prepared beef, duck, and seafood dishes</p>
            <p className="text-primary-300/80 text-sm italic">Les Plats Principaux</p>
          </div>
          <div className="elegant-card text-center group cursor-pointer">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-primary-400 text-2xl">🍰</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-gradient mb-4">Desserts</h3>
            <p className="text-white/70 mb-4">Decadent French pastries and traditional sweet endings</p>
            <p className="text-primary-300/80 text-sm italic">Les Desserts</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/menu" className="elegant-button">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  )
}
