"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Journal", href: "/journal" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-300 mx-auto left-1/2 -translate-x-1/2",
        isScrolled
          ? "top-4 w-[95%] max-w-7xl bg-white/95 dark:bg-matte-black/95 backdrop-blur-sm shadow-md py-3 rounded-full"
          : "top-6 w-full bg-transparent py-5",
      )}
    >
      <div className="mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-serif font-medium min-h-[44px] flex items-center"
            aria-label="Priya Sharma Interior Design — Home"
          >
            <span
              className={cn(
                "transition-colors duration-300",
                isScrolled || pathname !== "/"
                  ? "text-rich-brown dark:text-cream"
                  : "text-white md:text-rich-brown",
              )}
            >
              Priya Sharma
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-velvet-green min-h-[44px] flex items-center",
                  isScrolled || pathname !== "/" ? "text-rich-brown dark:text-cream" : "text-white",
                  pathname === item.href && "text-velvet-green",
                )}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button — 44px minimum tap target */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-full"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu
              className={cn(
                "h-6 w-6",
                isScrolled || pathname !== "/" ? "text-rich-brown dark:text-cream" : "text-white",
              )}
            />
          </Button>
        </div>
      </div>

      {/* Mobile Menu — full-screen overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-cream dark:bg-matte-black z-50 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="mx-auto w-full px-5 sm:px-8 lg:px-10 py-5">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-2xl font-serif font-medium text-rich-brown dark:text-cream min-h-[44px] flex items-center"
              >
                Priya Sharma
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-11 h-11 rounded-full"
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6 text-rich-brown dark:text-cream" />
              </Button>
            </div>
          </div>
          <nav
            className="flex flex-col items-center justify-center flex-1 space-y-2 bg-cream dark:bg-matte-black"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-xl font-medium transition-colors hover:text-velvet-green min-h-[56px] flex items-center px-8 py-4 rounded-full w-full max-w-xs justify-center",
                  "text-rich-brown dark:text-cream",
                  pathname === item.href && "text-velvet-green bg-velvet-green/10",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social links at bottom of mobile menu */}
          <div className="flex items-center justify-center gap-8 pb-safe pb-8 pt-6 border-t border-rich-brown/10">
            <Link
              href="https://instagram.com/priyasharmainteriors"
              className="text-sm text-rich-brown/60 hover:text-velvet-green transition-colors min-h-[44px] flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
            <Link
              href="https://linkedin.com/in/priyasharmainteriors"
              className="text-sm text-rich-brown/60 hover:text-velvet-green transition-colors min-h-[44px] flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
