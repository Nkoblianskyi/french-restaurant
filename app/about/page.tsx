import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">About HyperLend</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A story of passion for French cuisine and the pursuit of perfection
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-serif text-4xl font-bold text-primary-400 mb-6">Our Story</h2>
            <p className="text-white/80 text-lg mb-6">
              HyperLend was born from a dream to create an authentic French restaurant where every guest would
              feel the magic of culinary art. Our passion for French cuisine and pursuit of perfection is embodied in
              every detail.
            </p>
            <p className="text-white/70 mb-6">
              We believe that food is not just nourishment, but a way to bring people together, create memories and give
              unforgettable emotions. Every dish on our menu tells a story of French traditions.
            </p>
            <p className="text-white/70">
              Our restaurant is a place where time stops and every moment becomes special.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="/9aadc5f49729c5f4eae2fb20e8478468.jpg"
              alt="Restaurant Interior"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="elegant-card text-center">
            <h3 className="font-serif text-2xl font-bold text-primary-400 mb-4">Cheese Cellar</h3>
            <p className="text-white/70">
              Collection of the finest French cheeses and artisanal delicacies.
            </p>
          </div>
          <div className="elegant-card text-center">
            <h3 className="font-serif text-2xl font-bold text-primary-400 mb-4">Mastery</h3>
            <p className="text-white/70">
              Our chefs are true masters of their craft, combining traditional techniques with modern approaches.
            </p>
          </div>
          <div className="elegant-card text-center">
            <h3 className="font-serif text-2xl font-bold text-primary-400 mb-4">Atmosphere</h3>
            <p className="text-white/70">
              Elegant interior and attentive service create the perfect atmosphere for special moments.
            </p>
          </div>
        </div>

        <div className="elegant-card text-center">
          <h2 className="font-serif text-3xl font-bold text-primary-400 mb-6">Our Mission</h2>
          <p className="text-white/80 text-lg mb-6 max-w-3xl mx-auto">
            We strive to preserve and pass on the beauty of French culinary tradition, creating a space where every
            guest feels special. Our mission is to give unforgettable experiences through the art of taste.
          </p>
          <Link href="/reservation" className="elegant-button">
            Join Us
          </Link>
        </div>
      </div>
    </div>
  )
}
