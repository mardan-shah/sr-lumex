"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "SR Lumex smart glass transformed our office space, providing privacy when needed while maintaining an open, collaborative environment. The energy savings have been substantial.",
    author: "Sarah Johnson",
    position: "Facilities Director, TechCorp",
    image: "/placeholder.svg?height=100&width=100&text=SJ",
  },
  {
    quote:
      "The installation was seamless and the results are stunning. Our clients are always impressed by the technology, and it's become a signature feature of our design studio.",
    author: "Michael Chen",
    position: "Principal Architect, Modern Design",
    image: "/placeholder.svg?height=100&width=100&text=MC",
  },
  {
    quote:
      "As a luxury hotel, we needed a solution that offered both privacy and elegance. SR Lumex delivered on both fronts, and the integration with our smart room controls was flawless.",
    author: "Elena Rodriguez",
    position: "Operations Manager, Grand Plaza Hotel",
    image: "/placeholder.svg?height=100&width=100&text=ER",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-white dark:bg-[#121212]">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#121212] dark:text-white">What Our Clients Say</h2>
          </div>

          <div className="relative bg-[#ECECEC] dark:bg-[#1E1E1E] rounded-2xl p-8 md:p-12 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#007BFF]/10 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#50C878]/10 rounded-full -ml-20 -mb-20" />

            <div className="relative z-10">
              <Quote className="h-12 w-12 text-[#007BFF] mb-6" />

              <div className="min-h-[200px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <p className="text-xl md:text-2xl font-medium text-[#121212] dark:text-white italic">
                      "{testimonials[current].quote}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonials[current].image || "/placeholder.svg"}
                          alt={testimonials[current].author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121212] dark:text-white">{testimonials[current].author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonials[current].position}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex justify-between items-center mt-8">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setAutoplay(false)
                        setCurrent(index)
                      }}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === current ? "bg-[#007BFF]" : "bg-gray-300"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prev}
                    className="rounded-full"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={next}
                    className="rounded-full"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
