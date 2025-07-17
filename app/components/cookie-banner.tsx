"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass-effect border-t border-primary-500/20 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-white/80 text-sm">
              We use cookies to enhance your experience on our website. By continuing to use the site, you agree to our{" "}
              <Link href="/cookies" className="text-primary-400 hover:text-primary-300 underline">
                cookie policy
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-white/70 hover:text-white border border-white/20 rounded-lg transition-colors"
            >
              Decline
            </button>
            <button onClick={acceptCookies} className="elegant-button">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
