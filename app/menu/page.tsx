import Link from "next/link"
import Image from "next/image"
import { menuCategories } from "@/lib/data"

export default function MenuPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">Our Menu</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Each dish is created with the finest ingredients and served with attention to detail. Discover the authentic
            flavors of France.
          </p>
        </div>

        {menuCategories.map((category, categoryIndex) => (
          <section
            key={category.id}
            className={`mb-20 ${categoryIndex > 0 ? "border-t border-primary-500/20 pt-20" : ""}`}
          >
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-gradient mb-2">{category.name}</h2>
              <p className="text-primary-300/80 text-lg font-medium italic">{category.nameEn}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.dishes.map((dish) => (
                <Link key={dish.id} href={`/dish/${dish.id}`} className="elegant-card group cursor-pointer block">
                  <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                    <Image
                      src={dish.image || "/placeholder.svg"}
                      alt={dish.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent"></div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-gradient mb-2">{dish.name}</h3>
                  <p className="text-primary-300/80 text-sm mb-3 font-medium italic">{dish.nameEn}</p>
                  <p className="text-white/70 mb-4 leading-relaxed">{dish.description}</p>
                  <span className="text-primary-400 hover:text-primary-300 font-semibold transition-colors group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <div className="text-center mt-16 elegant-card">
          <h3 className="font-serif text-2xl font-bold text-gradient mb-4">Ready to Experience?</h3>
          <p className="text-white/70 mb-6">Reserve your table and enjoy an unforgettable culinary experience</p>
          <Link href="/reservation" className="elegant-button">
            Make a Reservation
          </Link>
        </div>
      </div>
    </div>
  )
}
