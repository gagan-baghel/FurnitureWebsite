import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { journalPosts } from "@/lib/content"

const siteUrl = "https://priyainteriors.com"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = journalPosts.find((item) => item.slug === slug)

  if (!post) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    }
  }

  const title = `${post.title} | Priya Sharma Journal`
  const description = post.excerpt
  const url = `${siteUrl}/journal/${post.slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: post.image, width: 1200, height: 800, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.image],
    },
  }
}

export default async function JournalDetailPage({ params }: Props) {
  const { slug } = await params
  const post = journalPosts.find((item) => item.slug === slug)

  if (!post) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [post.image],
    datePublished: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Priya Sharma Interior Design",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: `${siteUrl}/journal/${post.slug}`,
  }

  return (
    <main className="pt-28 bg-cream min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-8 text-rich-brown hover:text-velvet-green">
              <Link href="/journal">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Journal
              </Link>
            </Button>

            <span className="inline-flex bg-velvet-green/10 text-velvet-green text-sm px-3 py-1 rounded-full mb-5">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-rich-brown mb-5">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-rich-brown/70 mb-8">
              <span className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2 text-sm">
                <User className="h-4 w-4" />
                {post.author}
              </span>
            </div>

            <div className="relative h-[320px] md:h-[520px] rounded-[32px] overflow-hidden mb-10">
              <Image src={post.image} alt={post.title} fill className="object-cover" priority />
            </div>

            <article className="bg-white p-8 rounded-[32px] space-y-6 text-rich-brown/80">
              <p>{post.excerpt}</p>
              <p>
                Great interiors happen when personal taste, spatial logic, and material choices work together. This is
                where thoughtful planning creates long-term comfort, not just visual appeal.
              </p>
              <p>
                Need tailored guidance for your home or workspace? <Link href="/contact" className="text-velvet-green underline underline-offset-4">Book a consultation</Link> and we&apos;ll help you map the right approach.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
