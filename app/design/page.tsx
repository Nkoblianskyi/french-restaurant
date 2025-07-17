import Image from "next/image"
import { restaurantImages } from "@/lib/data"

export default function DesignPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="section-title">Restaurant Design</h1>
          <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
            Every corner of our restaurant is designed to provide you with unforgettable impressions and the atmosphere
            of authentic French elegance.
          </p>
        </div>

        {/* Hero Image Section - Using first image from data */}
        <div className="relative h-[70vh] rounded-3xl overflow-hidden mb-20 group">
          <Image
            src={restaurantImages[0]?.image || "/placeholder.svg?height=800&width=1400"}
            alt={restaurantImages[0]?.title || "Main Dining Room"}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent"></div>
          <div className="absolute bottom-12 left-12 right-12">
            <div className="max-w-2xl">
              <h2 className="font-serif text-5xl font-bold text-white mb-4 text-shadow">
                {restaurantImages[0]?.title || "Main Dining Room"}
              </h2>
              <p className="text-white/90 text-xl leading-relaxed text-shadow">
                {restaurantImages[0]?.description || "Elegant interior with panoramic windows and exquisite details"}
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Grid - Using data from restaurantImages */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          {/* Large featured image - Second image */}
          {restaurantImages[3] && (
            <div className="col-span-12 lg:col-span-8 row-span-2">
              <div className="elegant-card group cursor-pointer h-full">
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src={restaurantImages[3].image || "/placeholder.svg?height=500&width=800"}
                    alt={restaurantImages[3].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="font-serif text-3xl font-bold text-white mb-3 text-shadow">
                      {restaurantImages[3].title}
                    </h3>
                    <p className="text-white/90 text-lg text-shadow">{restaurantImages[3].description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Two smaller images on the right */}
          {restaurantImages[1] && (
            <div className="col-span-12 lg:col-span-4">
              <div className="elegant-card group cursor-pointer h-full">
                <div className="relative h-60 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={restaurantImages[1].image || "/placeholder.svg?height=300&width=400"}
                    alt={restaurantImages[1].title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent"></div>
                </div>
                <h3 className="font-serif text-xl font-bold text-gradient mb-2">{restaurantImages[1].title}</h3>
                <p className="text-white/70 text-sm">{restaurantImages[1].description}</p>
              </div>
            </div>
          )}

          {restaurantImages[2] && (
            <div className="col-span-12 lg:col-span-4">
              <div className="elegant-card group cursor-pointer h-full">
                <div className="relative h-60 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={restaurantImages[2].image || "/placeholder.svg?height=300&width=400"}
                    alt={restaurantImages[2].title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent"></div>
                </div>
                <h3 className="font-serif text-xl font-bold text-gradient mb-2">{restaurantImages[2].title}</h3>
                <p className="text-white/70 text-sm">{restaurantImages[2].description}</p>
              </div>
            </div>
          )}
        </div>

        {/* Three column section - Using remaining images or additional content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {restaurantImages[4] && (
            <div className="elegant-card group cursor-pointer">
              <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                <Image
                  src={restaurantImages[4].image || "/placeholder.svg?height=300&width=400"}
                  alt={restaurantImages[4].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-primary-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-primary-400 text-xl">🌿</span>
                  </div>
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gradient mb-3">{restaurantImages[4].title}</h3>
              <p className="text-white/70 leading-relaxed">{restaurantImages[4].description}</p>
            </div>
          )}

          {/* Additional design elements */}
          <div className="elegant-card group cursor-pointer">
            <div className="relative h-64 rounded-xl overflow-hidden mb-6">
              <Image
                src="/db0a147c90e3b067dc4635f4c14cd29a.jpg"
                alt="Cocktail Bar"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 bg-primary-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-primary-400 text-xl">🍸</span>
                </div>
              </div>
            </div>
            <h3 className="font-serif text-2xl font-bold text-gradient mb-3">Cocktail Bar</h3>
            <p className="text-white/70 leading-relaxed">
              Sophisticated bar area featuring premium spirits and signature cocktails crafted by expert mixologists
            </p>
          </div>

          <div className="elegant-card group cursor-pointer">
            <div className="relative h-64 rounded-xl overflow-hidden mb-6">
              <Image
                src="/93ebe54c78eaff725a2280c7dd2fce17.jpg"
                alt="Lounge Area"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 bg-primary-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-primary-400 text-xl">🛋️</span>
                </div>
              </div>
            </div>
            <h3 className="font-serif text-2xl font-bold text-gradient mb-3">Lounge Area</h3>
            <p className="text-white/70 leading-relaxed">
              Comfortable seating area with plush velvet furniture, perfect for pre-dinner drinks and conversation
            </p>
          </div>
        </div>

        {/* Design Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="elegant-card">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-400 text-2xl">✨</span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-gradient">Design Philosophy</h2>
              </div>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                Our interior seamlessly blends classic French elegance with contemporary sophistication. Every element
                has been carefully curated to create an atmosphere that transports you to the finest establishments of
                Paris.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-white/70">Warm lighting creates an intimate and welcoming atmosphere</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-white/70">Premium materials including marble, velvet, and crystal accents</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-white/70">Carefully selected artwork and decorative elements</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/ae12ed4d101f7aa90bcbf106665390f8.jpg"
                alt="Interior Details"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="elegant-card mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">150</div>
              <p className="text-white/70 text-sm uppercase tracking-wider">Seats</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">500+</div>
              <p className="text-white/70 text-sm uppercase tracking-wider">Wine Selection</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">12</div>
              <p className="text-white/70 text-sm uppercase tracking-wider">Private Rooms</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
              <p className="text-white/70 text-sm uppercase tracking-wider">Ambiance</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center elegant-card">
          <h2 className="font-serif text-4xl font-bold text-gradient mb-6">Experience the Elegance</h2>
          <p className="text-white/80 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Every detail has been thoughtfully designed to create an unforgettable dining experience. From the moment
            you enter, you'll be immersed in an atmosphere of refined luxury and French sophistication.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/reservation" className="elegant-button text-lg px-10 py-4">
              Reserve Your Table
            </a>
            <a
              href="/menu"
              className="border-2 border-primary-500/50 text-primary-400 hover:bg-primary-500/10 px-10 py-4 rounded-full transition-all duration-300 font-semibold text-lg backdrop-blur-sm"
            >
              View Our Menu
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
