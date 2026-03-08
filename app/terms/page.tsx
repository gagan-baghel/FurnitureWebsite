import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms of service for Priya Sharma Interior Design.",
  alternates: {
    canonical: "https://priyainteriors.com/terms",
  },
}

export default function TermsPage() {
  return (
    <main className="pt-28 bg-cream min-h-screen">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-rich-brown mb-8">Terms of Service</h1>
          <div className="bg-white rounded-[32px] p-8 space-y-6 text-rich-brown/80">
            <p>
              By using this website, you agree to these terms. Content on this site is provided for general
              informational purposes and may be updated without notice.
            </p>
            <p>
              Project scopes, pricing, timelines, and deliverables are governed by separate written agreements between
              the studio and each client.
            </p>
            <p>
              All website content, including text, graphics, and branding, is owned by Priya Sharma Interior Design and
              may not be copied or distributed without permission.
            </p>
            <p>
              To the maximum extent permitted by law, we are not liable for indirect damages arising from use of this
              website.
            </p>
            <p>Last updated: March 8, 2026.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
