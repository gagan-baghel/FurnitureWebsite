"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Subscribed to the newsletter!")
  }
  return (
    <footer className="bg-matte-black text-white pt-16 md:pt-20 pb-safe pb-10 rounded-tr-[80px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="text-2xl md:text-3xl font-serif font-medium inline-block min-h-[44px] flex items-center"
              aria-label="Priya Sharma Interior Design — Home"
            >
              Priya Sharma
            </Link>
            <p className="text-white/70 text-sm md:text-base">Creating spaces that inspire, comfort, and reflect your unique personality.</p>
            <div className="flex space-x-2">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-white hover:text-velvet-green hover:bg-white/10 rounded-full w-11 h-11 min-w-[44px]"
              >
                <Link href="https://instagram.com/priyasharmainteriors" target="_blank" rel="noopener noreferrer" aria-label="Priya Sharma on Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-white hover:text-velvet-green hover:bg-white/10 rounded-full w-11 h-11 min-w-[44px]"
              >
                <Link href="https://facebook.com/priyasharmadesigns" target="_blank" rel="noopener noreferrer" aria-label="Priya Sharma on Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-white hover:text-velvet-green hover:bg-white/10 rounded-full w-11 h-11 min-w-[44px]"
              >
                <Link href="https://linkedin.com/in/priyasharmainteriors" target="_blank" rel="noopener noreferrer" aria-label="Priya Sharma on LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-medium mb-5 md:mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Design Journal", href: "/journal" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-velvet-green transition-colors text-sm md:text-base min-h-[44px] flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base md:text-lg font-medium mb-5 md:mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-velvet-green mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-white/70 hover:text-velvet-green transition-colors text-sm md:text-base"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-velvet-green mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:hello@priyainteriors.com"
                  className="text-white/70 hover:text-velvet-green transition-colors text-sm md:text-base break-all"
                >
                  hello@priyainteriors.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-velvet-green mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm md:text-base">
                  42 Harmony Lane, Jubilee Hills,<br />Hyderabad 500033
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base md:text-lg font-medium mb-5 md:mb-6">Newsletter</h3>
            <p className="text-white/70 mb-4 text-sm md:text-base">Subscribe to receive design inspiration and updates.</p>
            <form className="space-y-3" onSubmit={handleSubscribe} aria-label="Newsletter subscription">
              <div className="relative">
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  required
                  autoComplete="email"
                  aria-label="Email address for newsletter"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-velvet-green rounded-full pr-12"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1 top-1 h-8 w-8 rounded-full bg-velvet-green hover:bg-velvet-green/90 text-white"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-white/40 text-xs">No spam. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs md:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Priya Sharma Interior Design. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
            <Link href="/privacy-policy" className="text-white/50 text-xs md:text-sm hover:text-velvet-green transition-colors min-h-[44px] flex items-center">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/50 text-xs md:text-sm hover:text-velvet-green transition-colors min-h-[44px] flex items-center">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
