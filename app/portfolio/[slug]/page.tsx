import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioProjects } from "@/lib/content"

const siteUrl = "https://priyainteriors.com"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = portfolioProjects.find((item) => item.slug === slug)

  if (!project) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: false },
    }
  }

  const title = `${project.title} in ${project.location} | Priya Sharma Portfolio`
  const description = `${project.description} Explore this ${project.category.toLowerCase()} interior design project completed in ${project.year} in ${project.location}.`
  const url = `${siteUrl}/portfolio/${project.slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: project.image, width: 1200, height: 800, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.image],
    },
  }
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params
  const project = portfolioProjects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: project.image,
    url: `${siteUrl}/portfolio/${project.slug}`,
    creator: {
      "@type": "Person",
      name: "Priya Sharma",
      url: siteUrl,
    },
    about: [project.category, `${project.location} interior design`, `${project.year} interior design project`],
  }

  return (
    <main className="pt-28 bg-cream min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-8 text-rich-brown hover:text-velvet-green">
            <Link href="/portfolio">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>
          </Button>

          <div className="max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-wider text-velvet-green mb-3">
              {project.category} | {project.location} | {project.year}
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-rich-brown mb-6">{project.title}</h1>
            <p className="text-lg text-rich-brown/80 mb-10">{project.description}</p>

            <div className="relative h-[340px] md:h-[520px] rounded-[32px] overflow-hidden mb-10">
              <Image src={project.image} alt={`${project.title} interior design project`} fill className="object-cover" priority />
            </div>

            <div className="bg-white p-8 rounded-[32px] space-y-4 text-rich-brown/80">
              <h2 className="text-2xl font-serif text-rich-brown">Project Overview</h2>
              <p>
                This project reflects our studio&apos;s signature approach: balancing beauty with functionality while
                adapting every detail to the client&apos;s lifestyle.
              </p>
              <p>
                Interested in a similar transformation? <Link href="/contact" className="text-velvet-green underline underline-offset-4">Schedule a consultation</Link> and share your vision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
