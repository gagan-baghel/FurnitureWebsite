"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { portfolioProjects } from "@/lib/content"

const projects = portfolioProjects.slice(0, 6)

export default function ProjectGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleProjects = 3
  const maxIndex = projects.length - visibleProjects

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? maxIndex : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? 0 : prevIndex - 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleProjects)}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
              <Link href={`/portfolio/${project.slug}`} className="block group">
                <div className="relative overflow-hidden rounded-[40px]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-matte-black/70 via-matte-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-medium text-white mb-2">{project.title}</h3>
                    <p className="text-white/80 text-lg">
                      {project.category} | {project.location}
                    </p>
                    <div className="mt-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white group-hover:bg-velvet-green group-hover:text-white transition-colors">
                        <ArrowUpRight size={20} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-end gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "rounded-full bg-white hover:bg-white border-rich-brown text-rich-brown h-12 w-12",
            currentIndex <= 0 && "opacity-50 cursor-not-allowed",
          )}
          onClick={prevSlide}
          disabled={currentIndex <= 0}
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className={cn(
            "rounded-full bg-white hover:bg-white border-rich-brown text-rich-brown h-12 w-12",
            currentIndex >= maxIndex && "opacity-50 cursor-not-allowed",
          )}
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
        >
          <ArrowRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}
