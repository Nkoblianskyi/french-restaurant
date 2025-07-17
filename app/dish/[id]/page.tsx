import Link from "next/link"
import Image from "next/image"
import { menuCategories } from "@/lib/data"
import { notFound } from "next/navigation"

interface DishPageProps {
  params: {
    id: string
  }
}

export default function DishPage({ params }: DishPageProps) {
  let dish = null
  let categoryName = ""

  for (const category of menuCategories) {
    const foundDish = category.dishes.find((d) => d.id === params.id)
    if (foundDish) {
      dish = foundDish
      categoryName = category.name
      break
    }
  }

  if (!dish) {
    notFound()
  }

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/menu"
          className="text-primary-400 hover:text-primary-300 mb-8 inline-flex items-center transition-colors group"
        >
          <svg
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Menu
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image src={dish.image || "/placeholder.svg"} alt={dish.name} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/40 to-transparent"></div>
            </div>
            <div className="absolute top-4 left-4 bg-primary-500/90 text-dark-950 px-3 py-1 rounded-full text-sm font-semibold">
              {categoryName}
            </div>
          </div>

          <div className="lg:sticky lg:top-32">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-gradient mb-4">{dish.name}</h1>
            <p className="text-primary-300/80 text-xl font-medium italic mb-6">{dish.nameEn}</p>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">{dish.description}</p>

            <div className="elegant-card mb-8">
              <h3 className="font-serif text-2xl font-bold text-gradient mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Dish Story
              </h3>
              <p className="text-white/70 leading-relaxed">{dish.story}</p>
            </div>

            <Link href="/reservation" className="elegant-button w-full text-center text-lg py-4 block">
              Reserve a Table
            </Link>
          </div>
        </div>

        {/* Related Dishes */}
        <div className="border-t border-primary-500/20 pt-12">
          <h3 className="font-serif text-3xl font-bold text-gradient mb-8 text-center">
            Other Dishes from This Category
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuCategories
              .find((cat) => cat.dishes.some((d) => d.id === dish.id))
              ?.dishes.filter((d) => d.id !== dish.id)
              .slice(0, 2)
              .map((relatedDish) => (
                <Link
                  key={relatedDish.id}
                  href={`/dish/${relatedDish.id}`}
                  className="elegant-card group cursor-pointer block"
                >
                  <div className="flex gap-6">
                    <div className="relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={relatedDish.image || "/placeholder.svg"}
                        alt={relatedDish.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif text-xl font-bold text-gradient mb-2">{relatedDish.name}</h4>
                      <p className="text-primary-300/80 text-sm mb-3 font-medium italic">{relatedDish.nameEn}</p>
                      <p className="text-white/70 mb-4 leading-relaxed">{relatedDish.description}</p>
                      <span className="text-primary-400 hover:text-primary-300 font-semibold transition-colors">
                        View →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
