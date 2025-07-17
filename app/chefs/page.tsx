import Image from "next/image"
import Link from "next/link"
import { chefs } from "@/lib/data"

export default function ChefsPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">Mastery of Our Chefs</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            A team of talented culinary artists who create authentic French cuisine masterpieces with passion and
            perfection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {chefs.map((chef, index) => (
            <div
              key={chef.id}
              className={`elegant-card text-center ${index === 0 ? "lg:col-span-3 lg:max-w-2xl lg:mx-auto" : ""}`}
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={chef.image || "/placeholder.svg"}
                  alt={chef.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/30 to-transparent"></div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gradient mb-2">{chef.title}</h3>
              <p className="text-primary-300/80 font-medium mb-2">{chef.experience}</p>
              <p className="text-white/60 text-sm mb-4 font-medium italic">{chef.specialty}</p>
              <p className="text-white/70 leading-relaxed">{chef.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="/91b8d25dcbe5aa43e06ec28d67944590.jpg"
              alt="Chef at Work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent"></div>
          </div>
          <div className="elegant-card">
            <h2 className="font-serif text-3xl font-bold text-gradient mb-6">Culinary Philosophy</h2>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              Our chefs share a common passion for French cuisine and the pursuit of perfection. Every dish is prepared
              using traditional techniques and the finest ingredients.
            </p>
            <p className="text-white/70 leading-relaxed">
              We believe that cooking is an art that should bring joy and create unforgettable memories. Every day we
              strive to exceed your expectations.
            </p>
          </div>
        </div>

        <div className="elegant-card text-center">
          <h2 className="font-serif text-3xl font-bold text-gradient mb-6">Tradition and Innovation</h2>
          <p className="text-white/80 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
            Combining centuries-old French traditions with modern culinary techniques, our chefs create dishes that
            impress both in taste and presentation.
          </p>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Every dish tells a story - from ingredient selection to final serving.
          </p>
          <Link href="/reservation" className="elegant-button text-lg px-10 py-4">
            Reserve a Table
          </Link>
        </div>
      </div>
    </div>
  )
}
