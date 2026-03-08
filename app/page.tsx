import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectGallery from "@/components/project-gallery"
import TestimonialSlider from "@/components/testimonial-slider"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative w-full min-h-[100svh] md:min-h-[90vh] flex items-center overflow-hidden">

        {/* Mobile: full-bleed background image */}
        <div className="absolute inset-0 md:hidden z-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200&h=1600"
            alt="Interior design showcase"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Strong gradient so text stays legible */}
          <div className="absolute inset-0 bg-gradient-to-b from-matte-black/70 via-matte-black/60 to-matte-black/80" />
        </div>

        {/* Desktop: split right-panel image */}
        <div className="absolute top-0 right-0 w-[55%] h-full z-0 rounded-bl-[80px] overflow-hidden hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920&h=1080"
            alt="Interior design showcase"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-matte-black/30" />
        </div>

        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-8 py-32 md:py-20 pt-28 md:pt-20">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-rich-brown mb-6">
              <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
              Modern Interior Design Studio
            </div>
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white md:text-rich-brown leading-tight mb-6">
              Combine style
              <br />
              and innovation
            </h1>
            <p className="text-lg md:text-xl text-white/90 md:text-rich-brown/80 mb-10 max-w-lg leading-relaxed">
              We offer a wide range of innovative and cutting-edge design elements that will allow you to create a
              unique atmosphere and express your individuality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-velvet-green hover:bg-velvet-green/90 text-white rounded-full px-8 py-6 h-auto min-h-[52px] text-base"
              >
                <Link href="/contact">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white/15 md:bg-transparent text-white md:text-rich-brown border-white/60 md:border-rich-brown hover:bg-white/25 md:hover:bg-rich-brown/5 rounded-full px-8 py-6 h-auto min-h-[52px] text-base backdrop-blur-sm md:backdrop-blur-none"
              >
                <Link href="/portfolio">View Projects</Link>
              </Button>
            </div>

            {/* Mobile social links — shown below CTA */}
            <div className="flex items-center gap-6 mt-10 md:hidden">
              <Link href="https://instagram.com/priyasharmainteriors" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-velvet-green transition-colors text-sm font-medium">
                Instagram
              </Link>
              <Link href="https://pinterest.com/priyasharmainteriors" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-velvet-green transition-colors text-sm font-medium">
                Pinterest
              </Link>
              <Link href="https://linkedin.com/in/priyasharmainteriors" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-velvet-green transition-colors text-sm font-medium">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop social links */}
        <div className="absolute bottom-10 left-10 hidden lg:flex items-center gap-6 text-rich-brown">
          <Link href="https://instagram.com/priyasharmainteriors" target="_blank" rel="noopener noreferrer" className="hover:text-velvet-green transition-colors font-medium">
            Instagram
          </Link>
          <Link href="https://pinterest.com/priyasharmainteriors" target="_blank" rel="noopener noreferrer" className="hover:text-velvet-green transition-colors font-medium">
            Pinterest
          </Link>
          <Link href="https://linkedin.com/in/priyasharmainteriors" target="_blank" rel="noopener noreferrer" className="hover:text-velvet-green transition-colors font-medium">
            LinkedIn
          </Link>
        </div>
      </section>


      {/* Designer Bio Section */}
      <section className="py-16 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative">
              <div className="relative h-[400px] md:h-[600px] w-full rounded-tr-[60px] md:rounded-tr-[80px] rounded-bl-[60px] md:rounded-bl-[80px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800&h=900"
                  alt="Priya Sharma — award-winning interior designer at her studio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 bg-velvet-green p-6 md:p-8 rounded-tl-[40px] rounded-br-[40px] text-white">
                <p className="font-serif text-lg md:text-xl">15+ Years of Experience</p>
              </div>
            </div>
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full text-sm font-medium text-rich-brown">
                <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
                About Priya Sharma
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-rich-brown">
                Creating spaces that <span className="italic">tell your story</span>
              </h2>
              <div className="w-20 h-1 bg-velvet-green"></div>
              <p className="text-base md:text-lg text-rich-brown/80">
                With over 15 years of experience transforming spaces across India and abroad, I bring a unique blend of
                modern aesthetics and cultural sensibilities to every project.
              </p>
              <p className="text-base md:text-lg text-rich-brown/80">
                My design philosophy centers around creating harmonious spaces that reflect the personality and
                lifestyle of my clients while maintaining a balance between functionality and beauty.
              </p>
              <Button
                asChild
                variant="ghost"
                className="text-rich-brown hover:text-velvet-green hover:bg-transparent p-0 flex items-center gap-2 group min-h-[44px]"
              >
                <Link href="/about">
                  Learn more about my journey
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cream group-hover:bg-velvet-green group-hover:text-white transition-colors">
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-32 bg-cream rounded-tl-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-rich-brown">
                <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
                Our Portfolio
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-rich-brown">
                Signature <span className="italic">Projects</span>
              </h2>
              <div className="w-20 h-1 bg-velvet-green"></div>
            </div>
            <Button asChild className="bg-matte-black hover:bg-matte-black/80 text-white rounded-full px-8 py-6 h-auto min-h-[44px] self-start md:self-auto">
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <ProjectGallery />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full text-sm font-medium text-rich-brown">
                <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
                What We Offer
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-rich-brown">
                Our <span className="italic">Services</span>
              </h2>
              <div className="w-20 h-1 bg-velvet-green"></div>
            </div>
            <Button asChild className="bg-matte-black hover:bg-matte-black/80 text-white rounded-full px-8 py-6 h-auto min-h-[44px] self-start md:self-auto">
              <Link href="/services">
                All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Residential Interiors",
                description:
                  "Transform your home into a sanctuary that reflects your personality and meets your lifestyle needs.",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600&h=400",
              },
              {
                title: "Commercial Spaces",
                description: "Create inspiring workplaces that enhance productivity and embody your brand's ethos.",
                image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600&h=400",
              },
              {
                title: "Modular Kitchens",
                description:
                  "Custom kitchen solutions that combine functionality with aesthetic appeal for the heart of your home.",
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=600&h=400",
              },
            ].map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-[30px] md:rounded-[40px]">
                <div className="relative h-[320px] md:h-[400px] w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} by Priya Sharma Interior Design`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-matte-black/80 via-matte-black/30 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-medium text-white mb-3">{service.title}</h3>
                  {/* Always visible on mobile, hover-reveal on desktop */}
                  <p className="text-white/80 mb-4 md:mb-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 text-sm md:text-base">
                    {service.description}
                  </p>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-white hover:text-white hover:bg-transparent p-0 flex items-center gap-2 group/btn min-h-[44px]"
                  >
                    <Link href="/services">
                      Learn more
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover/btn:bg-velvet-green group-hover/btn:text-white transition-colors">
                        <ArrowUpRight size={16} />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-32 bg-cream rounded-tr-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-rich-brown">
                <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
                What Clients Say
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-rich-brown">
                Client <span className="italic">Testimonials</span>
              </h2>
              <div className="w-20 h-1 bg-velvet-green"></div>
            </div>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "15+", label: "Years of Experience" },
              { number: "200+", label: "Projects Completed" },
              { number: "50+", label: "Repeat Clients" },
              { number: "25+", label: "Design Awards" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-velvet-green mb-3 md:mb-4">{stat.number}</h3>
                <p className="text-sm md:text-lg text-rich-brown">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-32 bg-matte-black text-white rounded-tl-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white">
                <span className="h-2 w-2 rounded-full bg-velvet-green"></span>
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light">
                Ready to transform your <span className="italic">space</span>?
              </h2>
              <p className="text-base md:text-xl text-white/80">
                Let's collaborate to create a space that reflects your vision and enhances your lifestyle.
              </p>
              <Button
                asChild
                className="bg-velvet-green hover:bg-velvet-green/90 text-white rounded-full px-8 py-6 h-auto min-h-[44px]"
              >
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 md:gap-8">
              <div className="flex items-start gap-4 md:gap-6 bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-3xl md:rounded-[40px]">
                <Phone className="text-velvet-green h-8 w-8 md:h-10 md:w-10 flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-medium mb-2">Call Us</h3>
                  <a href="tel:+919876543210" className="text-white/80 text-base md:text-lg hover:text-velvet-green transition-colors">+91 98765 43210</a>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-6 bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-3xl md:rounded-[40px]">
                <Mail className="text-velvet-green h-8 w-8 md:h-10 md:w-10 flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-medium mb-2">Email Us</h3>
                  <a href="mailto:hello@priyainteriors.com" className="text-white/80 text-base md:text-lg hover:text-velvet-green transition-colors">hello@priyainteriors.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-6 bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-3xl md:rounded-[40px]">
                <MapPin className="text-velvet-green h-8 w-8 md:h-10 md:w-10 flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-medium mb-2">Visit Our Studio</h3>
                  <p className="text-white/80 text-base md:text-lg">42 Harmony Lane, Jubilee Hills, Hyderabad 500033</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
