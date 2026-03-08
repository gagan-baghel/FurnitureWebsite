"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Homeowner",
    quote:
      "Working with Priya was an absolute delight. She transformed our house into a home that perfectly reflects our personality while maintaining functionality. Her attention to detail and understanding of our needs exceeded our expectations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: 2,
    name: "Leela Patel",
    role: "CEO, Horizon Tech",
    quote:
      "Priya designed our office space with such thoughtfulness that it has significantly improved our team's productivity and morale. The blend of modern aesthetics with cultural elements creates a unique environment that impresses every client who visits.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: 3,
    name: "Vikram & Meera Singh",
    role: "Villa Owners",
    quote:
      "We approached Priya to redesign our ancestral home while preserving its heritage elements. The result is breathtaking—a perfect harmony of tradition and contemporary design. Every corner tells a story, and we couldn't be happier.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: 4,
    name: "Aisha Khan",
    role: "Restaurant Owner",
    quote:
      "The ambiance Priya created for my restaurant has become our unique selling point. Customers often comment on how the space feels both luxurious and comfortable. Her understanding of flow and functionality has been crucial to our success.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=100&h=100",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = testimonials.length - 1

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-white p-10 rounded-[40px]">
                <Quote className="text-velvet-green h-12 w-12 opacity-20 mb-6" />
                <p className="text-xl text-rich-brown italic mb-8">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-rich-brown">{testimonial.name}</h4>
                    <p className="text-rich-brown/70">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-end gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white hover:bg-white border-rich-brown text-rich-brown h-12 w-12"
          onClick={prevSlide}
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white hover:bg-white border-rich-brown text-rich-brown h-12 w-12"
          onClick={nextSlide}
        >
          <ArrowRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              currentIndex === index ? "bg-velvet-green w-6" : "bg-velvet-green/30",
            )}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
