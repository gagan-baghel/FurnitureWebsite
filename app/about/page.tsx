import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Priya Sharma – Award-Winning Interior Designer",
  description:
    "Meet Priya Sharma, a National Institute of Design graduate with 15+ years of experience transforming residential and commercial spaces across India. Learn about her design philosophy, credentials, and team.",
  alternates: {
    canonical: "https://priyainteriors.com/about",
  },
  openGraph: {
    title: "About Priya Sharma – Award-Winning Interior Designer",
    description:
      "15+ years of experience creating harmonious, culturally-infused interiors across India. National Institute of Design graduate, IIID Award winner.",
    url: "https://priyainteriors.com/about",
    images: [{ url: "/appScreenshot.png", width: 1200, height: 630, alt: "Priya Sharma Interior Design Studio" }],
  },
}

export default function AboutPage() {
  return (
    <main className="pt-28 bg-cream">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-cream rounded-bl-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-rich-brown mb-6">
              <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-rich-brown mb-6">
              About <span className="italic">Priya Sharma</span>
            </h1>
            <div className="w-20 h-1 bg-velvet-green mx-auto mb-8"></div>
            <p className="text-lg text-rich-brown/80 mb-8">
              With a passion for creating spaces that tell stories and evoke emotions, I blend modern aesthetics with
              cultural elements to design interiors that are both functional and beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Designer Journey */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full text-sm font-medium text-rich-brown mb-6">
                <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
                My Journey
              </div>
              <h2 className="text-3xl font-serif font-light text-rich-brown mb-6">
                My <span className="italic">Journey</span>
              </h2>
              <div className="w-20 h-1 bg-velvet-green mb-8"></div>
              <div className="space-y-6 text-rich-brown/80">
                <p>
                  My journey in interior design began over 15 years ago after completing my education at the National
                  Institute of Design. What started as a childhood fascination with spaces and forms evolved into a
                  lifelong passion for creating environments that inspire and comfort.
                </p>
                <p>
                  After working with leading design firms in Mumbai and London, I founded my own studio in 2010 with a
                  vision to create interiors that balance aesthetics, functionality, and the unique personality of each
                  client.
                </p>
                <p>
                  My approach is deeply collaborative. I believe that the best designs emerge when there's a genuine
                  understanding of how my clients live, work, and interact with their spaces. This philosophy has guided
                  me through hundreds of projects across India and abroad.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[600px] w-full rounded-tr-[80px] rounded-bl-[80px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=900"
                  alt="Priya Sharma in her design studio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-velvet-green p-6 text-white rounded-tr-[40px]">
                <p className="font-serif text-xl">15+ Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-16 md:py-24 bg-matte-black text-white rounded-tr-[80px] rounded-bl-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium text-white mb-6">
              <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
              Our Philosophy
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
              Design <span className="italic">Philosophy</span>
            </h2>
            <div className="w-20 h-1 bg-velvet-green mx-auto mb-8"></div>
            <p className="text-xl italic text-white/90 mb-12">
              "I believe that spaces should not only be beautiful but also tell a story, evoke emotions, and enhance the
              quality of life for those who inhabit them."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Balance",
                description:
                  "Creating harmony between aesthetics and functionality, tradition and modernity, simplicity and detail.",
              },
              {
                title: "Authenticity",
                description:
                  "Designing spaces that genuinely reflect the personality, lifestyle, and aspirations of the client.",
              },
              {
                title: "Mindfulness",
                description:
                  "Considering how each element affects the overall experience, from visual appeal to emotional response.",
              },
            ].map((principle, index) => (
              <div key={index} className="text-center p-6 border border-white/20 rounded-[40px] bg-white/5">
                <h3 className="text-xl font-medium mb-4">{principle.title}</h3>
                <p className="text-white/70">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full text-sm font-medium text-rich-brown mb-6">
              <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
              Credentials
            </div>
            <h2 className="text-3xl font-serif font-light text-rich-brown mb-6">
              Credentials & <span className="italic">Recognition</span>
            </h2>
            <div className="w-20 h-1 bg-velvet-green mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium text-rich-brown mb-6">Education & Certification</h3>
              <ul className="space-y-6">
                {[
                  {
                    title: "Master of Interior Design",
                    institution: "National Institute of Design, Ahmedabad",
                    year: "2005-2007",
                  },
                  {
                    title: "Bachelor of Architecture",
                    institution: "School of Planning and Architecture, New Delhi",
                    year: "2000-2005",
                  },
                  {
                    title: "Certified Interior Designer",
                    institution: "Institute of Indian Interior Designers (IIID)",
                    year: "2008",
                  },
                ].map((credential, index) => (
                  <li key={index} className="border-l-4 border-velvet-green pl-6 rounded-r-lg bg-cream p-4">
                    <h4 className="font-medium text-rich-brown">{credential.title}</h4>
                    <p className="text-rich-brown/80">{credential.institution}</p>
                    <p className="text-sm text-rich-brown/60">{credential.year}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-rich-brown mb-6">Awards & Publications</h3>
              <ul className="space-y-6">
                {[
                  {
                    title: "Excellence in Residential Design",
                    organization: "IIID Design Excellence Awards",
                    year: "2022",
                  },
                  {
                    title: "Best Commercial Interior",
                    organization: "Architecture & Design Awards India",
                    year: "2020",
                  },
                  {
                    title: "Featured in Architectural Digest",
                    organization: "Special Issue on Indian Designers",
                    year: "2019",
                  },
                  {
                    title: "Top 50 Interior Designers in India",
                    organization: "Elle Decor",
                    year: "2018",
                  },
                ].map((award, index) => (
                  <li key={index} className="border-l-4 border-velvet-green pl-6 rounded-r-lg bg-cream p-4">
                    <h4 className="font-medium text-rich-brown">{award.title}</h4>
                    <p className="text-rich-brown/80">{award.organization}</p>
                    <p className="text-sm text-rich-brown/60">{award.year}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-cream rounded-tr-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-rich-brown mb-6">
              <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
              Our Team
            </div>
            <h2 className="text-3xl font-serif font-light text-rich-brown mb-6">
              Meet the <span className="italic">Team</span>
            </h2>
            <div className="w-20 h-1 bg-velvet-green mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-rich-brown/80">
              Behind every successful project is a team of dedicated professionals who bring diverse skills and
              perspectives to create exceptional spaces.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rahul Verma",
                role: "Senior Designer",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
                bio: "With a background in architecture and 10 years of experience, Rahul specializes in spatial planning and technical detailing.",
              },
              {
                name: "Ananya Desai",
                role: "Design Associate",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400&h=400",
                bio: "Ananya brings fresh perspectives with her expertise in sustainable materials and biophilic design principles.",
              },
              {
                name: "Vikram Malhotra",
                role: "Project Manager",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
                bio: "Vikram ensures that every project runs smoothly from concept to completion, with meticulous attention to timelines and quality.",
              },
              {
                name: "Neha Sharma",
                role: "Styling Specialist",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
                bio: "Neha has an exceptional eye for accessories, textiles, and finishing touches that elevate a space from good to extraordinary.",
              },
            ].map((member, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-[40px]">
                <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                  <Image src={member.image || "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-medium text-rich-brown">{member.name}</h3>
                <p className="text-velvet-green mb-4">{member.role}</p>
                <p className="text-sm text-rich-brown/80">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Let's collaborate to create an interior that reflects your unique style and meets your specific needs.
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
