import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Interior Design Services – Residential, Commercial & Vastu",
  description:
    "Explore Priya Sharma's interior design services: residential interiors, commercial spaces, modular kitchens, Vastu consultation, sustainable design, and heritage restoration. Serving clients across India.",
  alternates: {
    canonical: "https://priyainteriors.com/services",
  },
  openGraph: {
    title: "Interior Design Services – Residential, Commercial & Vastu",
    description:
      "From concept to completion — residential, commercial, Vastu, and sustainable interior design services across India. Transparent pricing starting from ₹15,000.",
    url: "https://priyainteriors.com/services",
    images: [{ url: "/appScreenshot.png", width: 1200, height: 630, alt: "Priya Sharma Interior Design Services" }],
  },
}

export default function ServicesPage() {
  return (
    <main className="pt-28 bg-cream">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-cream rounded-bl-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-rich-brown mb-6">
              <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-rich-brown mb-6">
              Our <span className="italic">Services</span>
            </h1>
            <div className="w-20 h-1 bg-velvet-green mx-auto mb-8"></div>
            <p className="text-lg text-rich-brown/80 mb-8">
              From concept to completion, we offer comprehensive interior design services tailored to your unique needs
              and vision.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full text-sm font-medium text-rich-brown mb-6">
                <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
                Residential
              </div>
              <h2 className="text-3xl font-serif font-light text-rich-brown mb-6">
                Residential <span className="italic">Interiors</span>
              </h2>
              <div className="w-20 h-1 bg-velvet-green mb-8"></div>
              <p className="text-rich-brown/80 mb-6">
                Your home should be a reflection of your personality, lifestyle, and aspirations. We create living
                spaces that are not only beautiful but also functional and comfortable.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Complete home design and renovation",
                  "Kitchen and bathroom remodeling",
                  "Custom furniture design",
                  "Color consultation and material selection",
                  "Lighting design and planning",
                  "Art and accessory curation",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-velvet-green mt-0.5 flex-shrink-0" />
                    <span className="text-rich-brown/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="ghost"
                className="text-rich-brown hover:text-velvet-green hover:bg-transparent p-0 flex items-center gap-2 group"
              >
                <Link href="/portfolio?category=residential">
                  View residential projects
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cream group-hover:bg-velvet-green group-hover:text-white transition-colors ml-2">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Elegant living room design"
                width={800}
                height={600}
                className="w-full object-cover rounded-tr-[80px] rounded-bl-[80px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream rounded-tr-[80px] rounded-bl-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Modern office space design"
                width={800}
                height={600}
                className="w-full object-cover rounded-tr-[80px] rounded-bl-[80px]"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-rich-brown mb-6">
                <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
                Commercial
              </div>
              <h2 className="text-3xl font-serif font-light text-rich-brown mb-6">
                Commercial <span className="italic">Spaces</span>
              </h2>
              <div className="w-20 h-1 bg-velvet-green mb-8"></div>
              <p className="text-rich-brown/80 mb-6">
                Your workspace should inspire creativity, productivity, and reflect your brand's identity. We design
                commercial environments that make a lasting impression on clients and employees alike.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Office and workspace design",
                  "Retail and hospitality interiors",
                  "Brand integration and spatial identity",
                  "Space planning and optimization",
                  "Ergonomic furniture selection",
                  "Acoustic and lighting solutions",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-velvet-green mt-0.5 flex-shrink-0" />
                    <span className="text-rich-brown/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="ghost"
                className="text-rich-brown hover:text-velvet-green hover:bg-transparent p-0 flex items-center gap-2 group"
              >
                <Link href="/portfolio?category=commercial">
                  View commercial projects
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white group-hover:bg-velvet-green group-hover:text-white transition-colors ml-2">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full text-sm font-medium text-rich-brown mb-6">
                <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
                Specialized
              </div>
              <h2 className="text-3xl font-serif font-light text-rich-brown mb-6">
                Specialized <span className="italic">Services</span>
              </h2>
              <div className="w-20 h-1 bg-velvet-green mb-8"></div>
              <p className="text-rich-brown/80 mb-6">
                Beyond standard interior design, we offer specialized services to address specific needs and create
                truly unique spaces.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Vastu consultation and implementation",
                  "Sustainable and eco-friendly design solutions",
                  "Heritage property restoration and adaptation",
                  "Smart home integration and planning",
                  "Seasonal styling and decor refreshes",
                  "Art consultation and commissioning",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-velvet-green mt-0.5 flex-shrink-0" />
                    <span className="text-rich-brown/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="ghost"
                className="text-rich-brown hover:text-velvet-green hover:bg-transparent p-0 flex items-center gap-2 group"
              >
                <Link href="/contact">
                  Inquire about specialized services
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cream group-hover:bg-velvet-green group-hover:text-white transition-colors ml-2">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Specialized interior design service"
                width={800}
                height={600}
                className="w-full object-cover rounded-tr-[80px] rounded-bl-[80px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-matte-black text-white rounded-tr-[80px] rounded-bl-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium text-white mb-6">
              <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
              Our <span className="italic">Process</span>
            </h2>
            <div className="w-20 h-1 bg-velvet-green mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-white/80">
              Our collaborative design process ensures that your vision is realized while benefiting from our expertise
              and attention to detail.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We begin with an in-depth discussion about your needs, preferences, lifestyle, and budget to understand your vision.",
              },
              {
                step: "02",
                title: "Concept Development",
                description:
                  "Based on our consultation, we create mood boards, sketches, and preliminary designs to visualize the direction.",
              },
              {
                step: "03",
                title: "Detailed Design",
                description:
                  "Once the concept is approved, we develop detailed plans, material selections, and specifications for implementation.",
              },
              {
                step: "04",
                title: "Execution",
                description:
                  "We oversee the implementation process, coordinating with contractors and vendors to ensure quality and adherence to the design.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center p-6 border border-white/20 rounded-[40px] bg-white/5">
                <div className="text-4xl font-serif text-velvet-green mb-4">{process.step}</div>
                <h3 className="text-xl font-medium mb-4">{process.title}</h3>
                <p className="text-white/70">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full text-sm font-medium text-rich-brown mb-6">
              <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
              Pricing
            </div>
            <h2 className="text-3xl font-serif font-light text-rich-brown mb-6">
              Investment <span className="italic">Plans</span>
            </h2>
            <div className="w-20 h-1 bg-velvet-green mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-rich-brown/80">
              We offer flexible pricing options to accommodate different project scopes and budgets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Consultation",
                price: "₹15,000",
                description: "Perfect for those seeking professional advice without a full design service.",
                features: [
                  "2-hour on-site consultation",
                  "Professional assessment of your space",
                  "Verbal recommendations",
                  "Follow-up email with key points",
                  "Referrals to trusted vendors",
                ],
              },
              {
                title: "Design Package",
                price: "₹1,50,000+",
                description: "Comprehensive design service for those ready to transform their space.",
                features: [
                  "Initial consultation",
                  "Concept development",
                  "Detailed floor plans",
                  "Material and furniture selection",
                  "3D visualizations",
                  "Detailed quotations",
                  "2 revision rounds",
                ],
                highlighted: true,
              },
              {
                title: "Full Service",
                price: "Custom",
                description: "End-to-end solution from concept to completion with project management.",
                features: [
                  "All Design Package features",
                  "Project management",
                  "Contractor coordination",
                  "Vendor management",
                  "Site visits during implementation",
                  "Final styling and accessorizing",
                  "Post-completion support",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-[40px] ${plan.highlighted ? "border-2 border-velvet-green shadow-lg" : "border border-[#E0E0E0] bg-white"
                  }`}
              >
                <h3 className="text-xl font-medium text-rich-brown mb-2">{plan.title}</h3>
                <div className="text-3xl font-serif text-velvet-green mb-4">{plan.price}</div>
                <p className="text-rich-brown/80 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-velvet-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-rich-brown/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full rounded-full ${plan.highlighted
                    ? "bg-velvet-green hover:bg-velvet-green/90 text-white"
                    : "bg-white border border-velvet-green text-rich-brown hover:bg-velvet-green/10"
                    }`}
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 text-rich-brown/80">
            <p>
              All prices are indicative and may vary based on project scope and requirements.
              <br />
              Contact us for a customized quote tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-cream rounded-tr-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-rich-brown mb-6">
              <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
              FAQ
            </div>
            <h2 className="text-3xl font-serif font-light text-rich-brown mb-6">
              Frequently Asked <span className="italic">Questions</span>
            </h2>
            <div className="w-20 h-1 bg-velvet-green mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How long does a typical interior design project take?",
                  answer:
                    "Project timelines vary based on scope and complexity. A consultation can be completed in a day, while a full home design and implementation might take 3-6 months. Commercial projects typically range from 2-8 months. We'll provide a detailed timeline during our initial discussions.",
                },
                {
                  question: "Do you work with clients' existing furniture and decor?",
                  answer:
                    "We believe in creating spaces that reflect your personality, which often includes incorporating cherished pieces you already own. We'll assess your existing items and thoughtfully integrate them into the new design.",
                },
                {
                  question: "How involved will I need to be in the design process?",
                  answer:
                    "Your involvement can be as much or as little as you prefer. Some clients enjoy being part of every decision, while others prefer to approve major milestones. We adapt our process to your comfort level and availability.",
                },
                {
                  question: "Do you incorporate Vastu principles in your designs?",
                  answer:
                    "Yes, we can incorporate Vastu principles upon request. We take a balanced approach, harmonizing traditional Vastu guidelines with modern design needs to create spaces that are both energetically balanced and functionally optimal.",
                },
                {
                  question: "How do you handle project budgets?",
                  answer:
                    "We work with you to establish a realistic budget at the beginning of the project and design within those parameters. We provide transparent cost estimates and help you make informed decisions about where to invest for maximum impact.",
                },
              ].map((faq, index) => (
                <div key={index} className="border-b border-velvet-green/20 pb-6">
                  <h3 className="text-lg font-medium text-rich-brown mb-3">{faq.question}</h3>
                  <p className="text-rich-brown/80">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-rich-brown/80 mb-6">Have more questions? We're happy to help!</p>
              <Button asChild className="bg-velvet-green hover:bg-velvet-green/90 text-white rounded-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
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
