import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const siteUrl = "https://priyainteriors.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Priya Sharma Interior Design | Modern Minimalist Indian Interiors",
    template: "%s | Priya Sharma Interior Design",
  },
  description:
    "Transforming spaces into soulful experiences. Priya Sharma specializes in modern, minimalistic, and culturally infused interior design for homes and commercial spaces across India. Based in Hyderabad with 15+ years of experience.",
  keywords: [
    "interior design Hyderabad",
    "interior designer India",
    "residential interior design",
    "commercial interior design",
    "Vastu interior design",
    "modular kitchen design",
    "home renovation India",
    "luxury interior design",
    "minimalist interiors",
    "Indian interior designer",
    "Priya Sharma interiors",
    "interior design studio",
  ],
  authors: [{ name: "Priya Sharma", url: siteUrl }],
  creator: "Priya Sharma",
  publisher: "Priya Sharma Interior Design",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/icon.png?v=3", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png?v=3", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Priya Sharma Interior Design",
    title: "Priya Sharma Interior Design | Modern Minimalist Indian Interiors",
    description:
      "Transforming spaces into soulful experiences. Modern, minimalistic, and culturally infused interior design for homes and commercial spaces across India.",
    images: [
      {
        url: "/appScreenshot.png",
        width: 1200,
        height: 630,
        alt: "Priya Sharma Interior Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priya Sharma Interior Design | Modern Minimalist Indian Interiors",
    description:
      "Transforming spaces into soulful experiences. Modern, minimalistic interior design across India.",
    images: ["/appScreenshot.png"],
    creator: "@priyasharmadesigns",
  },
  category: "Interior Design",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${siteUrl}/#business`,
      name: "Priya Sharma Interior Design",
      url: siteUrl,
      telephone: "+91-98765-43210",
      email: "hello@priyainteriors.com",
      description:
        "Award-winning interior design studio specializing in residential, commercial, and hospitality spaces across India. Blending modern aesthetics with cultural sensibilities.",
      image: `${siteUrl}/appScreenshot.png`,
      logo: `${siteUrl}/logo.png`,
      priceRange: "₹₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "42 Harmony Lane, Jubilee Hills",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500033",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.4281,
        longitude: 78.4097,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "11:00",
          closes: "16:00",
        },
      ],
      sameAs: [
        "https://instagram.com/priyasharmainteriors",
        "https://pinterest.com/priyasharmainteriors",
        "https://linkedin.com/in/priyasharmainteriors",
        "https://facebook.com/priyasharmadesigns",
      ],
      hasMap: "https://maps.google.com/?q=42+Harmony+Lane+Jubilee+Hills+Hyderabad",
      areaServed: [
        { "@type": "City", name: "Hyderabad" },
        { "@type": "City", name: "Mumbai" },
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "Bangalore" },
        { "@type": "Country", name: "India" },
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#founder`,
      name: "Priya Sharma",
      url: siteUrl,
      jobTitle: "Principal Interior Designer",
      worksFor: { "@id": `${siteUrl}/#business` },
      knowsAbout: [
        "Interior Design",
        "Residential Design",
        "Commercial Design",
        "Vastu Shastra",
        "Sustainable Design",
      ],
      alumniOf: [
        { "@type": "EducationalOrganization", name: "National Institute of Design, Ahmedabad" },
        { "@type": "EducationalOrganization", name: "School of Planning and Architecture, New Delhi" },
      ],
      award: ["Excellence in Residential Design – IIID 2022", "Best Commercial Interior – A&D Awards India 2020"],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
