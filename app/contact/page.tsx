import type { Metadata } from "next"
import ContactPageClient from "./contact-client"

export const metadata: Metadata = {
  title: "Contact Priya Sharma – Schedule a Design Consultation",
  description:
    "Book an interior design consultation with Priya Sharma. Studio located in Jubilee Hills, Hyderabad. Virtual consultations available. Call +91 98765 43210 or email hello@priyainteriors.com.",
  alternates: {
    canonical: "https://priyainteriors.com/contact",
  },
  openGraph: {
    title: "Contact Priya Sharma – Schedule a Design Consultation",
    description:
      "Schedule your interior design consultation today. On-site and virtual consultations available. Studio in Hyderabad — serving clients across India.",
    url: "https://priyainteriors.com/contact",
    images: [{ url: "/appScreenshot.png", width: 1200, height: 630, alt: "Priya Sharma Interior Design Contact" }],
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
