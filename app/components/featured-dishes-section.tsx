import Link from "next/link"
import Image from "next/image"
import { menuCategories } from "@/lib/data"

export default function FeaturedDishesSection() {
  const featuredDishes = menuCategories.flatMap((category) => category.dishes.slice(0, 1)).slice(0, 3)

  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
            <span className="text-primary-400 text-sm font-medium tracking-wider uppercase">Signature Dishes</span>
          </div>
          <h2 className="section-title">Culinary Masterpieces</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Each dish tells a story of French culinary tradition, reimagined with modern artistry
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish, index) => (
            <div
              key={dish.id}
              className="elegant-card group cursor-pointer transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-80 mb-8 rounded-2xl overflow-hidden">
                <Image
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-primary-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl font-bold text-gradient mb-3">{dish.name}</h3>
                <p className="text-primary-300/80 text-sm mb-4 font-medium italic">{dish.nameEn}</p>
                <p className="text-white/70 mb-6 leading-relaxed">{dish.description}</p>
                <Link
                  href={`/dish/${dish.id}`}
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold transition-colors group-hover:underline"
                >
                  Discover More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
