import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { journalPosts } from "@/lib/content"

export const metadata: Metadata = {
  title: "Design Journal – Interior Design Tips & Inspiration",
  description:
    "Insights, tips, and inspiration from Priya Sharma's design journal. Topics include minimalism in Indian homes, Vastu principles, sustainable materials, color psychology, and small space solutions.",
  alternates: {
    canonical: "https://priyainteriors.com/journal",
  },
  openGraph: {
    title: "Design Journal – Interior Design Tips & Inspiration",
    description:
      "Expert interior design insights from Priya Sharma's studio — minimalism, Vastu, sustainable materials, color psychology, and more.",
    url: "https://priyainteriors.com/journal",
    images: [{ url: "/appScreenshot.png", width: 1200, height: 630, alt: "Priya Sharma Design Journal" }],
  },
}

export default function JournalPage() {
  return (
    <main className="pt-28 bg-cream">
      <section className="py-12 md:py-20 bg-cream rounded-bl-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-rich-brown mb-6">
              <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
              Our Journal
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-rich-brown mb-6">
              Design <span className="italic">Journal</span>
            </h1>
            <div className="w-20 h-1 bg-velvet-green mx-auto mb-8"></div>
            <p className="text-lg text-rich-brown/80 mb-8">
              Insights, inspiration, and practical advice for creating beautiful and functional spaces.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-tr-[80px] rounded-bl-[80px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200&h=800"
                alt="Featured journal article"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-velvet-green/10 text-velvet-green text-sm px-3 py-1 rounded-full">Featured</span>
                <span className="text-rich-brown/70 text-sm flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  May 10, 2023
                </span>
              </div>
              <h2 className="text-3xl font-serif font-light text-rich-brown mb-4">
                Creating Spaces That Tell Your <span className="italic">Story</span>
              </h2>
              <p className="text-rich-brown/80 mb-6">
                Your home should be a reflection of who you are, your experiences, and your aspirations. In this
                in-depth guide, we explore how to infuse personality into your spaces through thoughtful design choices,
                meaningful objects, and intentional layouts.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-velvet-green" />
                  <span className="text-rich-brown/70 text-sm">By Priya Sharma</span>
                </div>
              </div>
              <Button asChild className="bg-velvet-green hover:bg-velvet-green/90 text-white rounded-full">
                <Link href="/journal/minimalism-in-indian-homes">Read Article</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream rounded-tr-[80px] rounded-bl-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-rich-brown mb-6">
                <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
                Articles
              </div>
              <h2 className="text-3xl font-serif font-light text-rich-brown mb-4">
                Latest <span className="italic">Articles</span>
              </h2>
              <div className="w-20 h-1 bg-velvet-green"></div>
            </div>
            <div className="mt-6 md:mt-0 flex items-center gap-4">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search articles..."
                  aria-label="Search articles"
                  className="pr-10 border-rich-brown/20 focus-visible:ring-velvet-green rounded-full text-rich-brown"
                />
                <Button variant="ghost" type="button" size="icon" className="absolute right-0 top-0 h-full">
                  <span className="sr-only">Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </Button>
              </div>
              <select
                className="h-10 rounded-full border border-rich-brown/20 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-velvet-green text-rich-brown"
                aria-label="Filter articles by category"
              >
                <option value="all">All Categories</option>
                <option value="design-tips">Design Tips</option>
                <option value="sustainability">Sustainability</option>
                <option value="vastu">Vastu</option>
                <option value="color-theory">Color Theory</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journalPosts.map((post) => (
              <article key={post.id} className="bg-white overflow-hidden rounded-[40px]">
                <Link href={`/journal/${post.slug}`} className="block group">
                  <div className="relative h-[240px] overflow-hidden rounded-t-[40px]">
                    <Image
                      src={post.image || "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800&h=600"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-velvet-green/90 text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-rich-brown/70 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-rich-brown mb-3">
                    <Link href={`/journal/${post.slug}`} className="hover:text-velvet-green transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-rich-brown/80 mb-4">{post.excerpt}</p>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-rich-brown hover:text-velvet-green hover:bg-transparent p-0 flex items-center gap-2 group/btn"
                  >
                    <Link href={`/journal/${post.slug}`}>
                      Read more
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cream group-hover/btn:bg-velvet-green group-hover/btn:text-white transition-colors ml-2">
                        <ArrowRight size={16} />
                      </span>
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button className="bg-velvet-green hover:bg-velvet-green/90 text-white rounded-full">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full text-sm font-medium text-rich-brown mb-6">
              <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
              Newsletter
            </div>
            <h2 className="text-3xl font-serif font-light text-rich-brown mb-6">
              Subscribe to Our <span className="italic">Newsletter</span>
            </h2>
            <p className="text-lg text-rich-brown/80 mb-8">
              Stay updated with our latest design insights, tips, and project showcases.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" action="/contact" method="get">
              <Input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="Your email address"
                className="flex-1 border-rich-brown/20 focus-visible:ring-velvet-green rounded-full"
              />
              <Button
                type="submit"
                className="bg-velvet-green hover:bg-velvet-green/90 text-white rounded-full whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-rich-brown/70 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
