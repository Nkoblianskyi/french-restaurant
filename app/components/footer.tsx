import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-primary-500/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold font-serif text-gradient mb-4">FrenchTaste</h3>
            <p className="text-white/70 mb-6 max-w-md">
              Discover authentic French cuisine in an atmosphere of unparalleled elegance. Every dish is a work of art,
              created with love and mastery.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-white/70 hover:text-primary-400 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/design" className="text-white/70 hover:text-primary-400 transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link href="/chefs" className="text-white/70 hover:text-primary-400 transition-colors">
                  Chefs
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-white/70 hover:text-primary-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="text-white/70 hover:text-primary-400 transition-colors">
                  Reservations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-500/20 mt-8 pt-8 text-center">
          <p className="text-white/50">© 2025 HyperLend. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
