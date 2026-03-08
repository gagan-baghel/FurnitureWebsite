import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { portfolioProjects } from "@/lib/content"

export const metadata: Metadata = {
  title: "Portfolio – Interior Design Projects Across India",
  description:
    "Browse Priya Sharma's portfolio of 200+ interior design projects: luxury villas, minimalist apartments, modern offices, boutique hotels, and heritage renovations across Mumbai, Delhi, Bangalore, Hyderabad, and beyond.",
  alternates: {
    canonical: "https://priyainteriors.com/portfolio",
  },
  openGraph: {
    title: "Portfolio – Interior Design Projects Across India",
    description:
      "200+ residential, commercial, and hospitality projects — from minimalist apartments in Mumbai to heritage renovations in Kolkata.",
    url: "https://priyainteriors.com/portfolio",
    images: [{ url: "/appScreenshot.png", width: 1200, height: 630, alt: "Priya Sharma Interior Design Portfolio" }],
  },
}

export default function PortfolioPage() {
  return (
    <main className="pt-28 bg-cream">
      <section className="py-12 md:py-20 bg-cream rounded-bl-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-rich-brown mb-6">
              <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
              Our Work
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-rich-brown mb-6">
              Our <span className="italic">Portfolio</span>
            </h1>
            <div className="w-20 h-1 bg-velvet-green mx-auto mb-8"></div>
            <p className="text-lg text-rich-brown/80 mb-8">
              Explore our collection of thoughtfully designed spaces that reflect our commitment to beauty,
              functionality, and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 border-b border-rich-brown/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="ghost" className="text-velvet-green hover:bg-velvet-green/10 rounded-full">
              All Projects
            </Button>
            <Button
              variant="ghost"
              className="text-rich-brown hover:text-velvet-green hover:bg-velvet-green/10 rounded-full"
            >
              Residential
            </Button>
            <Button
              variant="ghost"
              className="text-rich-brown hover:text-velvet-green hover:bg-velvet-green/10 rounded-full"
            >
              Commercial
            </Button>
            <Button
              variant="ghost"
              className="text-rich-brown hover:text-velvet-green hover:bg-velvet-green/10 rounded-full"
            >
              Hospitality
            </Button>
            <Button
              variant="ghost"
              className="text-rich-brown hover:text-velvet-green hover:bg-velvet-green/10 rounded-full"
            >
              Institutional
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <Link key={project.id} href={`/portfolio/${project.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-[40px]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-matte-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-medium text-white mb-1">{project.title}</h3>
                      <p className="text-white/80 text-sm">
                        {project.category} | {project.location}, {project.year}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-rich-brown group-hover:text-velvet-green transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-rich-brown/80 text-sm mb-2">
                    {project.category} | {project.location}
                  </p>
                  <p className="text-rich-brown/70 text-sm line-clamp-2">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button className="bg-velvet-green hover:bg-velvet-green/90 text-white rounded-full">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream rounded-tr-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-rich-brown mb-6">
              <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
              Testimonials
            </div>
            <h2 className="text-3xl font-serif font-light text-rich-brown mb-6">
              Client <span className="italic">Testimonials</span>
            </h2>
            <div className="w-20 h-1 bg-velvet-green mx-auto mb-8"></div>
            <div className="relative bg-white p-8 rounded-[40px]">
              <svg
                className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 h-12 w-12 text-velvet-green opacity-20"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-xl italic text-rich-brown/80 mb-8">
                "Working with Priya and her team was an absolute pleasure. They took the time to understand our
                lifestyle and preferences, and translated that into a home that feels uniquely ours. The attention to
                detail and thoughtful touches throughout the space continue to impress us and our guests."
              </p>
              <div>
                <p className="font-medium text-rich-brown">Arjun & Meera Kapoor</p>
                <p className="text-rich-brown/70">Residential Client, Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-matte-black text-white rounded-tl-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium text-white mb-6">
              <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
              Get Started
            </div>
            <h2 className="text-3xl font-serif font-light mb-6">
              Ready to <span className="italic">Transform Your Space</span>?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let&apos;s collaborate to create an interior that reflects your unique style and meets your specific needs.
            </p>
            <Button
              asChild
              className="bg-velvet-green hover:bg-velvet-green/90 text-white rounded-full px-8 py-6 h-auto"
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
