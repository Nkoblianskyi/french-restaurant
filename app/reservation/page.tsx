"use client"

import type React from "react"

import { useState } from "react"

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulation of submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="elegant-card">
            <div className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-serif text-4xl font-bold text-gradient mb-6">Thank You for Your Reservation!</h1>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              Your table reservation request has been received. We will contact you shortly to confirm the details.
            </p>
            <p className="text-white/70 mb-8">We look forward to welcoming you at Le Château Noir!</p>
            <div className="border-t border-primary-500/20 pt-6">
              <p className="text-white/60 text-sm">If you have any questions, we are always ready to help</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="section-title">Table Reservation</h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Reserve a table for an unforgettable evening at our restaurant. We will take care of every detail of your
            visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="elegant-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-primary-500/30 rounded-lg text-white placeholder-white/50 focus:border-primary-400 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/80 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-primary-500/30 rounded-lg text-white placeholder-white/50 focus:border-primary-400 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white/80 font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800/50 border border-primary-500/30 rounded-lg text-white placeholder-white/50 focus:border-primary-400 focus:outline-none transition-colors"
                    placeholder="+1 XXX XXX XXXX"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-white/80 font-medium mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-primary-500/30 rounded-lg text-white focus:border-primary-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-white/80 font-medium mb-2">
                      Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-primary-500/30 rounded-lg text-white focus:border-primary-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select time</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="21:30">9:30 PM</option>
                      <option value="22:00">10:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-white/80 font-medium mb-2">
                      Guests *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-primary-500/30 rounded-lg text-white focus:border-primary-400 focus:outline-none transition-colors"
                    >
                      <option value="1">1 person</option>
                      <option value="2">2 people</option>
                      <option value="3">3 people</option>
                      <option value="4">4 people</option>
                      <option value="5">5 people</option>
                      <option value="6">6 people</option>
                      <option value="7">7 people</option>
                      <option value="8">8 people</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/80 font-medium mb-2">
                    Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800/50 border border-primary-500/30 rounded-lg text-white placeholder-white/50 focus:border-primary-400 focus:outline-none transition-colors resize-none"
                    placeholder="Any special requests or dietary requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full elegant-button text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Make Reservation"}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="elegant-card">
              <h3 className="font-serif text-xl font-bold text-gradient mb-4">Reservation Information</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="text-white font-medium mb-1">Opening Hours</h4>
                  <p className="text-white/70">Tuesday - Sunday: 6:00 PM - 11:00 PM</p>
                  <p className="text-white/70">Monday: Closed</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Dress Code</h4>
                  <p className="text-white/70">Smart casual to formal attire</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Cancellation Policy</h4>
                  <p className="text-white/70">Please notify us 24 hours in advance</p>
                </div>
              </div>
            </div>

            <div className="elegant-card">
              <h3 className="font-serif text-xl font-bold text-gradient mb-4">Contact Us</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-white/70">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-white/70">reservations@lechateaunoir.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
